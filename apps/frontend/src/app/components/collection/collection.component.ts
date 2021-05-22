/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, Input } from '@angular/core';
import { Collection } from 'apps/frontend/src/app/pages/collections/collections.page';

@Component({
  selector: 'collection',
  template: `
    <mat-list>
      <mat-list-item class="item">
        <mat-icon mat-list-icon class="icon-container">note</mat-icon>
        <div mat-line class="title">{{ collection?.title }}</div>
        <div mat-line class="subtitle">{{ quantityTasks }}</div>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent {
  @Input() collection: Collection;

  public get quantityTasks(): string {
    const quantity = this.collection?.tasks.length;
    let subtitle = `${quantity} tarefa${quantity > 1 ? 's' : ''}`;
    !quantity && (subtitle = 'Sem tarefas');
    return subtitle;
  }
}
