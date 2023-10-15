import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  accessToken:string='IGQWRQWVRHLWIzdWVBbGFta1pGWEZA0X0pQbTNHZA3FWeFY3U1A5YW92ZA0U3dEE5bU1ZAZA0s4LVJ3LV9uX2J1UU51aUtqZAFNZAME5IZAFlVTXZA5UTdPNGp5SGtYU1piOF84S1ZA0c1BPZA3d2MHdZANjFXVWZAZAMld2aThWdVUzTFg0eks1VmVoZATQZD';
  userId:string='6673976019354728'
  constructor(private http: HttpClient) { }

  getTokenFromInstagram() {
   return this.http.get(`https://graph.instagram.com/v13.0/${this.userId}/media?fields=id,media_url&access_token=${this.accessToken}`)
}
}
