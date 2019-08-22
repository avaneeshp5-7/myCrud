import { Component, OnInit } from '@angular/core';
import { UrlsService } from '../urls.service';
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {
  uploadedFiles=[]
  constructor(private servicess: UrlsService) { }

  ngOnInit() {
  }
  fileChange(element) {
    this.uploadedFiles = element.target.files;
     console.log(this.uploadedFiles[0].name)
}
upload() {
  let formData = new FormData();
  for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
  }
  
  this.servicess.uploads_File(formData).subscribe(dt=>{
   alert(dt['message'])
  })
}
}