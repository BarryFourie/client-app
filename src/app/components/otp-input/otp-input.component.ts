import { Component, ElementRef, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './otp-input.component.html',
  styleUrl: './otp-input.component.scss'
})
export class OtpInputComponent {
  otp: string[] = new Array(6).fill('');
  @Output() changed = new EventEmitter<string>();
  @ViewChildren('otpBox') otpBoxes!:QueryList<ElementRef>;

  paste($event: ClipboardEvent) {
    $event.preventDefault();

    const data = $event.clipboardData?.getData('text') || '';
    const otpArray = data.split('').slice(0, 6)

    for (let index = 0; index < 6; index++) {
     if(isNaN(Number(otpArray[index]))){
      continue;
     }else{
      this.otp[index] = otpArray[index] || ''
     }
    }

    this.changed.emit(this.otp.join(''))
  }

  input($event: any, index: number) {
    const input = $event.target;

    if(isNaN(input.value)){
      input.value = '';
      return
    }

    this.otp[index] = input.value;
    this.otpBoxes.toArray()[index + 1].nativeElement.focus()
    this.changed.emit();
  }
}
