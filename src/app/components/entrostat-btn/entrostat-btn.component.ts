import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-entrostat-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entrostat-btn.component.html',
  styleUrl: './entrostat-btn.component.scss'
})
export class EntrostatBtnComponent {
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() text: string = '';
  @Input() width: string = '180px';
  @Output() clicked = new EventEmitter()
  onClick() {
    if (!this.disabled && !this.loading) {
      this.clicked.emit()
    }
  }
}
