import { Component, OnInit } from '@angular/core';
import {Meta} from '@angular/platform-browser'
import { from } from 'rxjs';
 
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model:any={}
  uploadedFiles: Array < File > ;
  constructor(private meta:Meta) {
    meta.addTag({name:"keywords" , 
    content:"nuss patahana , navyuvak patahana , navyuvak seva samiti patahana ,navyuvak seva samiti ,ichchhapurti mata "});
    meta.addTag({name:"description" , content:"this is nuss patahana this is  navyuvak patahana , this is navyuvak seva samiti patahana ,this is navyuvak seva samiti"})
   }

  ngOnInit() {

  }
}
