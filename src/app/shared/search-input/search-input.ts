import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss'
})
export class SearchInput {
  @Input() placeholder = 'Поиск';
  @Output() search = new EventEmitter<string>();

  onInput(value: string) {
    this.search.emit(value);
  }
}
