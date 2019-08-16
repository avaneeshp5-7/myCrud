import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL} from './url'
@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  constructor(private http_s:HttpClient) { }
     uploads_File(data){
       return this.http_s.post(URL.post_file,data);
     }
     get_File(){
      return this.http_s.get(URL.get_file);
    }
    get_Single(data){
      return this.http_s.post(URL.get_single_image,data);
    }
    Member_File(data){
      return this.http_s.post(URL.profile_post,data);
    }
    member_Add(data){
      return this.http_s.post(URL.members_post,data);
    }
}
