import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'lib-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent extends BaseComponent {

  form: FormGroup;
  constructor() {
    super();
  }

  documentLoaded() {
    super.documentLoaded();
    if(this.documentData)
      this.form = this.toFormGroup(this.documentData.formBlocks);
  }
  toFormGroup(questions: any) {
    const group: any = {};


    for(let inputBlock of questions) {
      inputBlock.formInput.forEach(question => {
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
          : new FormControl(question.value || '');
      });
    }
    
    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
   return new FormGroup(group);
  }

  onSubmit() {
    this.trigger(this.documentData.onSubmitEventName.split(','), this.form.value);

  }

  isValid(formItem) {
    return (this.form.controls[formItem.key].invalid && (this.form.controls[formItem.key].dirty || this.form.controls[formItem.key].touched));
  }


  /**
   * Action used by hippo events
   * 
   * Pre-fills the form with data from the server
   * 
   * @param data 
   */
  prefillForm(data) {
    for (let formItem of data) {
      this.form.controls[formItem.key].setValue(formItem.value);
      this.form.controls[formItem.key].updateValueAndValidity();
    }

  }

}