
import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AddTComponent } from './add-t/add-t.component';

const routes: Routes = [

  {path:'tutorial',component:TutorialComponent},
  {path:'add_t',component:AddTComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
