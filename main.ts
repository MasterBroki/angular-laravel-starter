import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './components/app.module';
import {environment} from "./environments/environment";
if (environment.environment === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
