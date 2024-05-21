import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EntrostatBtnComponent } from '@components/entrostat-btn/entrostat-btn.component';
import { ResponseBoxComponent } from '@components/response-box/response-box.component';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-otp-request',
  standalone: true,
  imports: [ResponseBoxComponent, EntrostatBtnComponent, FormsModule],
  templateUrl: './otp-request.component.html',
  styleUrl: './otp-request.component.scss'
})
export class OtpRequestComponent {
  email: string = '';
  message: string = '';
  status: 'success' | 'error' | 'info' = 'info';
  loading: { [key: string]: boolean } = { sendOtp: false, resendOtp: false };

  constructor(private authService: AuthService, private router:Router) {

  }

  public sendOtp() {
    this.loading['sendOtp'] = true;
    this.authService.sendOtp(this.email).subscribe((response)=> {
      this.message = response.message;
      this.status = 'success';
      this.loading['sendOtp'] = false;
    }, (error) =>{
      this.message = error.error.message;
      this.status = 'error';
      this.loading['sendOtp'] = false
    })
  }

  public resendOtp() {
    this.loading['resendOtp'] = true;
    this.authService.resendOtp(this.email).subscribe((response)=> {
      this.message = response.message;
      this.status = 'success';
      this.loading['resendOtp'] = false;
    }, (error) =>{
      this.message = error.error.message;
      this.status = 'error';
      this.loading['resendOtp'] = false
    })
  }

  public next(){
    this.router.navigate(['/validate-otp'])
  }
}
