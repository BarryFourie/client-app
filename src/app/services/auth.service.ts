import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private path = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  public sendOtp(email: string): Observable<any> {
    return this.httpClient.post(`${this.path}auth/sendOtp`, { email });
  }

  public resendOtp(email: string): Observable<any> {
    return this.httpClient.post(`${this.path}auth/resendOtp`, { email });
  }

  public validateOtp(email: string, password:string): Observable<any> {
    return this.httpClient.post(`${this.path}auth/validateOtp`, { email, password });
  }
}
