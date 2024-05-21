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

  }

  public resendOtp() {

  }

  public next(){
    this.router.navigate(['/validate-otp'])
  }
}
