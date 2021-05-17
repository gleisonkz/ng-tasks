import { Component } from '@angular/core';

@Component({
  selector: 'google-button',
  template: `
    <button mat-stroked-button class="btn btn--google">
      <img src="assets/images/google-logo.png" alt="Logo da Google" />
      Continue com Google
    </button>
  `,
  styleUrls: ['./google-button.component.scss'],
})
export class GoogleButtonComponent {}
