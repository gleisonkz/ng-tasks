import { Component } from '@angular/core';

export interface Task {
  text: string;
  isDone: boolean;
}

export interface Collection {
  title: string;
  tasks: Task[];
}

export const COLLECTIONS_MOCK: Collection[] = [
  {
    title: 'HTML',
    tasks: [],
  },
  {
    title: 'CSS',
    tasks: [],
  },
  {
    title: 'JavaScript',
    tasks: [],
  },
];

@Component({
  templateUrl: './collections.page.html',
  styleUrls: ['./collections.page.scss'],
})
export class CollectionsPage {
  collections: Collection[] = COLLECTIONS_MOCK;
}
