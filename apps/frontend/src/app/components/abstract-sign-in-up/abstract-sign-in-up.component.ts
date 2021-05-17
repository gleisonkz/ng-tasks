import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'abstract-sign-in-up',
  template: `
    <div class="container">
      <h1 class="container__title">{{ title }}</h1>
      <section class="container__button">
        <ng-container [ngTemplateOutlet]="googleButton"></ng-container>
      </section>
      <span class="container__separator">ou</span>
      <section class="container__form">
        <ng-container [ngTemplateOutlet]="formArea"></ng-container>
      </section>
      <section class="container__footer">
        <ng-container [ngTemplateOutlet]="footer"></ng-container>
      </section>
    </div>
  `,
  styleUrls: ['./abstract-sign-in-up.component.scss'],
})
export class AbstractSignInUpComponent {
  @Input() title: string;
  @ContentChild('formArea') formArea: TemplateRef<unknown>;
  @ContentChild('googleButton') googleButton: TemplateRef<unknown>;
  @ContentChild('footer') footer: TemplateRef<unknown>;
}
