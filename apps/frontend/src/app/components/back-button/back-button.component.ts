import { Component, Input } from '@angular/core';

@Component({
  selector: 'back-button',
  template: `
    <a [routerLink]="['../']" class="back-message">
      <mat-icon>arrow_back</mat-icon> {{ text }}
    </a>
  `,
  styles: [
    `
      @import 'variables';
      @import 'mixins';
      @import 'colors';

      .back-message {
        margin-top: rem(20);
        color: $color-text-on-background;
        @include flex-center;

        mat-icon {
          margin-right: rem(5);
        }
      }
    `,
  ],
})
export class BackButtonComponent {
  @Input() text = 'Voltar para home';
}
