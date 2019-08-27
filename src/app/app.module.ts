import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule } from '@angular/forms';
import {ServiceWorkerModule} from '@angular/service-worker'
import {RouterModule} from '@angular/router'
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http' 
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UploadsComponent } from './uploads/uploads.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FullImageComponent } from './full-image/full-image.component';
import { MoreImageComponent } from './more-image/more-image.component';
import { BecomeMembersComponent } from './become-members/become-members.component'
import { AuthService} from "./auth.service";
import { from } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { environment } from '../environments/environment';
import { MembersComponent } from './members/members.component';
import { HomepageComponent } from './homepage/homepage.component';
const route=[
  {path:'',component:LandingPageComponent},
  {path:'uploads/image/nuss',component:UploadsComponent,canActivate: [AuthService]},
  {path:'related/members/nuss',component:MembersComponent},
  {path:'contact/nuss',component:ContactComponent},
  {path:'gallery/pic/nuss',component:GalleryComponent},
  {path:'singleImage/pic/nuss',component:FullImageComponent},
  {path:'become/member/nuss',component:BecomeMembersComponent},
]
var router=RouterModule.forRoot(route)
@NgModule({
  declarations: [
    AppComponent,
    BecomeMembersComponent,
    NavbarComponent,
    BannerComponent,
    GalleryComponent,
    UploadsComponent,
    ContactComponent,
    FooterComponent,
    LandingPageComponent,
    FullImageComponent,
    MoreImageComponent,
    MembersComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,HttpClientModule,RouterModule,router, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
