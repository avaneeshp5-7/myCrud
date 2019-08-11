import { Component, OnInit } from '@angular/core';
import {UrlsService} from '../urls.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery:any;

  constructor(private servicess: UrlsService,private rout:Router) {}
  ngOnInit() {
    this.getGallery();
  }
  getGallery(){
    this.servicess.get_File().subscribe(dt=>{
      this.gallery=dt['data']
      console.log(this.gallery)
    })
  }
  getSingleImage(name)
  {
    this.rout.navigateByUrl("/singleImage/pic/nuss;img="+name)
  }
}