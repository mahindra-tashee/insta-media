import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-instagram-media',
  templateUrl: './instagram-media.component.html',
  styleUrls: ['./instagram-media.component.css']
})
export class InstagramMediaComponent implements OnInit {
  client_id:string= '1380369732903127';
  redirect_uri:string='https://localhost:4200/instagram/';
  clientSecret:string='2d069fc8de43a5e7654f97364a17c3cd';
  userPosts:string[]=[];
  userName:string='';

  constructor(private route: ActivatedRoute,private shared:SharedService){
   
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.shared.getTokenFromInstagram().subscribe((res:any)=>{
           res.data.map((userMedia:any)=>{
              this.userPosts.push(userMedia.media_url);
              console.log(this.userPosts)
           })
        },
        (err:any)=>{console.log(err)}
        )
      } else {
        alert('Failed to login Instagram')
      }
    });
  }
}
