import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ListKegsComponent } from './list-kegs/list-kegs.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { SellKegComponent } from './sell-keg/sell-keg.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    ListKegsComponent,
    EditKegComponent,
    SellKegComponent,
    NewKegComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
