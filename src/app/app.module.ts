import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from'@angular/common/http';


import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AddTComponent } from './add-t/add-t.component';
import { UpLecComponent } from './up-lec/up-lec.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    AddTComponent,
    UpLecComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
