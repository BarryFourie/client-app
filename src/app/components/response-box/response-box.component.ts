import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-response-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './response-box.component.html',
  styleUrl: './response-box.component.scss'
})
export class ResponseBoxComponent {
  @Input() message: string = '';
  @Input() status: 'success' | 'error' | 'info' = 'info'
}
