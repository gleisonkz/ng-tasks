import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '@front-end/pages';

export enum Mode {
  Edit = 'edit',
  Show = 'show',
}

export interface UpdateEvent<T> {
  itemID: string;
  item: T;
}

export interface TaskResource {
  title: string;
  isDone: boolean;
}

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Output()
  delete: EventEmitter<string> = new EventEmitter();
  @Output()
  update: EventEmitter<UpdateEvent<TaskResource>> = new EventEmitter();
  @Input() task: Task;
  @ViewChild('taskInput')
  $input: ElementRef<HTMLInputElement>;

  currentMode: Mode = Mode.Show;
  taskControl: FormControl;
  formGroup: FormGroup;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log(this.task);

    this.taskControl = new FormControl(this.task.text, [Validators.required]);
    this.formGroup = new FormGroup({
      title: this.taskControl,
      isDone: new FormControl(this.task.isDone),
    });
  }

  changeMode(): void {
    this.currentMode = this.currentMode === Mode.Edit ? Mode.Show : Mode.Edit;
    this.changeDetectorRef.detectChanges();
  }

  edit(): void {
    this.changeMode();
    this.$input.nativeElement.focus();
    this.$input.nativeElement.select();
  }

  save(changeMode = true): void {
    if (this.formGroup.invalid) return;
    this.update.emit({ itemID: this.task.id, item: this.formGroup.value });
    changeMode && this.changeMode();
  }
}
