import { Routes } from '@angular/router';
import { OtpRequestComponent } from '@components/otp-request/otp-request.component';
import { OtpValidateComponent } from '@components/otp-validate/otp-validate.component';

export const routes: Routes = [
    { path: 'request-otp', component: OtpRequestComponent },
    { path: 'validate-otp', component: OtpValidateComponent },
    { path: '', redirectTo: '/request-otp', pathMatch: 'full' }
]; 
