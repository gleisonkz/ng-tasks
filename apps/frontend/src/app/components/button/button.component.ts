import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `
    <ng-container [ngSwitch]="color">
      <button
        *ngSwitchCase="'primary'"
        primary
        mat-stroked-button
        (click)="clickEvent.emit()"
      >
        {{ text }}
      </button>
      <button
        *ngSwitchCase="'secondary'"
        secondary
        mat-stroked-button
        (click)="clickEvent.emit()"
      >
        {{ text }}
      </button>
    </ng-container>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string;
  @Output() clickEvent = new EventEmitter<void>();
  @Input() color: 'primary' | 'secondary' = 'primary';
}
