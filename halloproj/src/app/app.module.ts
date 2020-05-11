import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server.component';
import { SubserverComponent } from './subserver/subserver.component';

import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SubserverComponent,
    
    TodoComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
