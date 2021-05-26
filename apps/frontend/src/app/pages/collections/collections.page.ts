import { Component } from '@angular/core';

export interface Task {
  text: string;
  isDone: boolean;
}

export interface Collection {
  id: string;
  title: string;
  tasks: Task[];
}

export const COLLECTIONS_MOCK: Collection[] = [
  {
    id: '1',
    title: 'HTML',
    tasks: [],
  },
  {
    id: '2',
    title: 'CSS',
    tasks: [],
  },
  {
    id: '3',
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
