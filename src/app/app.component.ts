import { Component ,Inject} from '@angular/core';
import { Http } from "@angular/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public obj:Http){this.getData()}
  title = 'mycrud';
  n1;n2;mydata
  funAdd(){
    var cdata={username:this.n1,password:this.n2}
    // alert(cdata)
     this.obj.post("/ins/insdata",cdata).subscribe(dt=>{
      alert(dt['_body'])
     })
  }

  getData(){
    this.obj.get("ins/getRec").subscribe(this.cbk)
  }
  cbk=(dt)=>{
   this.mydata=JSON.parse(dt._body)
  //  this.getData()
  }

  gloid=0;t1;t2;
  funUpdate(x){
    this.gloid=x._id
    this.t1=x.username
    this.t2=x.password

  }
  FunSave()
  {
    var olddata={_id:this.gloid}
    var newdata={username:this.t1,password:this.t2}
    var updata=[olddata,newdata]
    this.obj.post("/ins/updat",updata).subscribe(this.upcbk)
  }
   upcbk=(dt)=>{
     alert(dt._body)
     this.getData();
     this.gloid=0
   }
   deldata;
   DataDelete(xd){
      this.deldata={_id:xd._id}
     console.log(this.deldata)
     this.obj.post("ins/deldatas",this.deldata).subscribe(this.delcbk)
   }
   delcbk=(dt)=>{
     alert(dt._body)
   }
}

