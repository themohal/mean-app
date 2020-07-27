import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';




interface TokenResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class MyService{
  fromService(){
    console.log("Hello From Service");
  }
}
