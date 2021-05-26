/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { Task } from 'apps/frontend/src/app/pages/collections/collections.page';

@Component({
  templateUrl: './collection-details.page.html',
  styleUrls: ['./collection-details.page.scss'],
})
export class CollectionDetailsPage {
  tasks: Task[] = [
    { id: '1', isDone: true, text: 'Learn Attributes' },
    { id: '2', isDone: false, text: 'Learn Events' },
    { id: '3', isDone: false, text: 'Learn Position' },
    { id: '4', isDone: false, text: 'Learn Semantics' },
  ];
}
