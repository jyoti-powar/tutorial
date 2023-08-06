import { Component, OnInit } from '@angular/core';
import { TutoserviceService } from '../tutoservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor( private tuto:TutoserviceService,  private route: Router) { }

  ngOnInit(): void {
    this.getData();

  }
  
  classlist:any;

  getData(){
    this.tuto.getlec().subscribe(
      (data)=>{this.classlist=data}
    )
  }

  delflag:any

  delId(id:any)
  {
console.log(id)
this.tuto.delProd(id).subscribe((data)=>{console.log(data);
  this.delflag=data;
  this.route.navigate(['/tutoial'])
})
  }



onedit(id:any)
{
  this.route.navigate(['/up-lect',id])
}



}
