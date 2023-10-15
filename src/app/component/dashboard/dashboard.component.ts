
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  client_id:any= '1380369732903127';
  redirect_uri:any='https://localhost:4200/instagram/';

  constructor(private shared:SharedService, private router: Router){
  }

  requestAuthorizationCode() {
    // Define the OAuth 2.0 authorization URL with required parameters
    const authorizationUrl = `https://api.instagram.com/oauth/authorize?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&scope=user_profile,user_media&response_type=code`;

    // Open the authorization URL in a new window
    window.open(authorizationUrl, '_blank');


  }
}
