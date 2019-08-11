import { Component, OnInit } from '@angular/core';
import {UrlsService} from '../urls.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.css']
})
export class FullImageComponent implements OnInit {

  constructor(private servicess: UrlsService,private act:ActivatedRoute) { }
imageName:any;
imageValue:any;
  ngOnInit() {
      this.act.params.subscribe(image=>{
        if(image['img']){
          this.imageName=image['img']
          this.servicess.get_Single({image:this.imageName}).subscribe(dt=>{
           this.imageValue=dt['data']
          })
        }
      })
  }

}
