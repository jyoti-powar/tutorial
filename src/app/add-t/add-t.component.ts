import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TutoserviceService } from '../tutoservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-t',
  templateUrl: './add-t.component.html',
  styleUrls: ['./add-t.component.css']
})
export class AddTComponent implements OnInit {

  constructor(private tuto:TutoserviceService,private route: Router) { }

  ngOnInit(): void {
  }


  prform = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    desc: new FormControl(''),

    
  })


  savepr(): void{

    console.log(this.prform.value);
    this.tuto.saveClasses(this.prform.value).subscribe(
      (data)=>{console.log(data)}
    )
    this.route.navigate(['/tutorial'])

}
}



