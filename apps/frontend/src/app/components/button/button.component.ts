import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

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
        <ng-container [ngTemplateOutlet]="contentWrapper"></ng-container>
      </button>
      <button
        *ngSwitchCase="'secondary'"
        secondary
        mat-stroked-button
        (click)="clickEvent.emit()"
      >
        <ng-container [ngTemplateOutlet]="contentWrapper"></ng-container>
      </button>
      <ng-template #contentWrapper>
        <ng-content></ng-content>
      </ng-template>
    </ng-container>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @ContentChild('contentWrapper') contentWrapper: TemplateRef<unknown>;
  @Output() clickEvent = new EventEmitter<void>();
  @Input() color: 'primary' | 'secondary' = 'primary';
}
