import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EntrostatBtnComponent } from '@components/entrostat-btn/entrostat-btn.component';
import { OtpInputComponent } from '@components/otp-input/otp-input.component';
import { ResponseBoxComponent } from '@components/response-box/response-box.component';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-otp-validate',
  standalone: true,
  imports: [ResponseBoxComponent, EntrostatBtnComponent, OtpInputComponent, FormsModule],
  templateUrl: './otp-validate.component.html',
  styleUrl: './otp-validate.component.scss'
})
export class OtpValidateComponent {
  email: string = '';
  message: string = '';
  password: string = '';
  status: 'success' | 'error' | 'info' = 'info';
  loading: { [key: string]: boolean } = { validate: false };

  constructor(private authService: AuthService, private router:Router) {

  }

  public validate() {
    this.loading['validate'] = true;
    this.authService.validateOtp(this.email, this.password).subscribe((response)=> {
      this.message = response.message;
      this.status = 'success';
      this.loading['validate'] = false;
    }, (error) =>{
      this.message = error.error.message;
      this.status = 'error';
      this.loading['validate'] = false
    })
  }

  public back(){
    this.router.navigate(['/request-otp'])
  }
}
