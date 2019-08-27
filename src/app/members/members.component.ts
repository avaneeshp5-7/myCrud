import { Component, OnInit } from '@angular/core';
import {UrlsService} from '../urls.service';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
more:boolean=false;
clicks:boolean=true;
skip:boolean=false;
memdet:boolean=true
members:any;
memb_more:any;
  constructor(private servicess: UrlsService) { }
  ngOnInit() {
        this.servicess.member_Get().subscribe(dt=>{
        this.members=dt['result'];
        console.log(this.members)
        })
  }
  More(memb){
    this.memb_more=memb
    this.more=true;
    this.memdet=false
    this.clicks=false
    this.skip=true
  }
  Skip(){
    this.skip=false  
    this.more=false;
    this.clicks=true
    this.memdet=true
  }
}
