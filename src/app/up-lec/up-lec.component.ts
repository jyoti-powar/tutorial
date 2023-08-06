import { Component, OnInit } from '@angular/core';
import { TutoserviceService } from '../tutoservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-up-lec',
  templateUrl: './up-lec.component.html',
  styleUrls: ['./up-lec.component.css']
})
export class UpLecComponent implements OnInit {

  constructor(private tuto: TutoserviceService, private acr:ActivatedRoute, private route: Router) { }

  ngOnInit(): void {

    this.acr.params.subscribe(
      (data)=>{this.curr_id=data['id']}
      
    )
  
    this.acr
  }

  curr_id:any;

  prform = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    desc: new FormControl(''),
    
  })


  updateprod()
  {
    this.tuto.updateProd(this.prform.value,this.curr_id).subscribe(
      (info)=>{console.log(info)
        this.route.navigate(['/tutorial'])
      }
    )

  }



}
