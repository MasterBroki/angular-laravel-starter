import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MyComponent} from "./my-component/my-component.component";
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, MyComponent],
    bootstrap: [AppComponent,MyComponent]
})
export class AppModule {
}
