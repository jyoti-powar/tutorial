
import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AddTComponent } from './add-t/add-t.component';
import { UpLecComponent } from './up-lec/up-lec.component';

const routes: Routes = [

  {path:'tutorial',component:TutorialComponent},
  {path:'add_t',component:AddTComponent},
  {path:'up-lect/:id',component:UpLecComponent},
  {path:'product/:id',component:UpLecComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
