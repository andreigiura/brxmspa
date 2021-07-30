import { Injector } from '@angular/core';

export class AppInjector {

    private static injector:any = {};

    static setInjector(injector) {
        AppInjector.injector = injector;
    }

    static getInjector () {
        return AppInjector.injector;
    }

}