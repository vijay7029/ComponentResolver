import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentInfoComponent } from './studentinfo/studentinfo.component';
import { ParentInfoComponent } from './parentinfo/parentinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    ParentInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[StudentInfoComponent,ParentInfoComponent]
})
export class AppModule { }
