///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode,provide} from 'angular2/core'
import {AppComponent} from "./app.component";
import {ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy} from 'angular2/router'
import {HTTP_PROVIDERS} from 'angular2/http'

enableProdMode();
bootstrap(AppComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS,]);