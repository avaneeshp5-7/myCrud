import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../matchpassword';
import { UrlsService } from '../urls.service';
@Component({
  selector: 'app-become-members',
  templateUrl: './become-members.component.html',
  styleUrls: ['./become-members.component.css']
})
export class BecomeMembersComponent implements OnInit {
  submitted = false;
  user: any;
  uid: any;
  errmsg:string;
  registerForm: FormGroup;
  uploadedFiles:any=[]
  updateForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private servicess: UrlsService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      memebership: ['', Validators.required],
      last_name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(10),Validators.maxLength(10)]],
      Password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('Password', 'confirmPassword')
      
    })
    // this.get_user();
  }
  fileChange(element) {
    this.uploadedFiles = element.target.files;
     let formData = new FormData();
  for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
  } 
  this.servicess.Member_File(formData).subscribe(dt=>{
   alert(dt['message'])
  })
}

  get f() {
    return this.registerForm.controls
  }
  mySubmit() {
    this.submitted = true;
    var data = (this.registerForm.value)
    this.servicess.member_Add(data).subscribe(dt=>{
    alert(dt['message'])
     window.location.href="/become/member/nuss";
    })
  }
}


