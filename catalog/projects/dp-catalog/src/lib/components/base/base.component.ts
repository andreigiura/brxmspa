import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Component as BrComponent, Page } from '@bloomreach/spa-sdk';
import { AppInjector } from '../../services/app-injector';
import {merge} from 'lodash';

@Component({
  template: '',
  styleUrls: []
})
export class BaseComponent implements OnInit {

  @Input() component!: BrComponent;
  @Input() page!: Page;


  @Input() documentReference = null;

  @Input() documentData: any;
  @Input() eventsDocumentData: any;

  protected http: HttpClient;
  protected router: Router

  constructor() {
    const injector = AppInjector.getInjector();
    this.http = injector.get(HttpClient);
    this.router = injector.get(Router);
  }

  get document() {
    const { document } = this.component?.getModels();
    this.documentReference = document && this.page?.getContent(document);
    return document && this.page?.getContent(document);
  }

  get eventsDocument() {
    const { EventsDocument } = this.component?.getModels();
    return EventsDocument && this.page?.getContent(EventsDocument);
  }

  async ngOnInit() {

    if (!this.component || !this.page) {
      if (this.documentData)
        this.documentLoaded();
      return;
    }
    if(this.eventsDocument)
      this.eventsDocumentData = this.eventsDocument?.getData();
    console.log(this.eventsDocumentData);
    this.documentLoaded();

  }

  /**
     * @ignore
     */
  documentLoaded() {
    if (!this.documentData)
      this.documentData = this.document?.getData();

    this.executeOnLoadEvents();
  }

  executeOnLoadEvents() {
    if (this.eventsDocumentData) {
      if (this.documentData.onLoadEventName == "" || !this.documentData.onLoadEventName) {
        return;
      }
      this.trigger(this.documentData.onLoadEventName.split(","));
    }
  }



  /**
   * Updates the hippo document with server data
   * 
   * @param data 
   */
  updateModel(data) {
    this.documentData = merge(this.documentData, data);
    
  }

  navigateTo(data) {
    this.router.navigateByUrl(data.url)
  }


  /**
   * @ignore
   */
  async trigger(eventNames: Array<String>, payload: any = {}) {
    console.log('trigger:', eventNames);

    for (let eventName of eventNames) {

      //Search in API events
      for (let event of this.eventsDocumentData.apiEventCompound?.eventItems) {

        if (event.eventName == eventName) {
          console.log("event found!!");
          let url = this.eventsDocumentData.apiEventCompound.apiUrl + event.apiPath;
          let response;
          let params = {};
            for(let param of event.params) {
              params[param.key] = param.label;
            }
          
          payload = {...payload, ...params};

          console.log("payload is: ", payload);
          if (event.reqtype == "get") {
            response = await this.http.get(url, { params: payload, withCredentials: true }).toPromise();
          } else if (event.reqtype == "post") {
            response = await this.http.post(url, payload,  {withCredentials: true }).toPromise();
          }

          if (!response) {
            throw new Error(response);
          }
          if(response.actionType)
            this[response.actionType](response.data);
        }
      }
      return;
      //Search in navigateTo
      for (let event of this.eventsDocumentData.navigateToEventCompound) {

        if (event.eventName == eventName) {
          this.navigateTo(event);
        }
      }

    }
  }
}
