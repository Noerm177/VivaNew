import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html'
})
export class SearchInputComponent implements OnInit {

  @Output() searchValue = new EventEmitter<ISearchInputItem>();
  @Input() options: ISearchInputItem[];

  public searchInput = new FormControl();
  public filteredOptions: Observable<ISearchInputItem[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.searchInput.valueChanges
    .pipe(
        startWith<string | ISearchInputItem>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map( item => item ? this._filter(item) : this.options.slice())
      );
  }

  /**
   * Search item in options
   * @param val : string
   * @returns : ISearchInputItem[]
   */
  private _filter(val: string): ISearchInputItem[] {
    const filterValue = val.toLowerCase();
    return this.options.filter(item => item.name.toLowerCase().indexOf(filterValue) === 0);
  }

  /**
   * Clean the input and emit an event with null
   */
  private clearValue() {
    this.searchInput.setValue('');
    this.searchValue.emit(null);
  }

  /**
   * Emit event when the user select an item from the list.
   * @param value I don't know the interface but you can get the value in value.option.value
   */
  public optionSelected(value: any) {
    this.searchValue.emit(value.option.value);
  }

  /**
   * Add displayFn in order to fix the bug when the
   * option does not exist in the list
   * @returns : string | undefined
   * @param item : ISearchInputItem
   */
  displayFn(item?: ISearchInputItem): string | undefined {
    return item ? item.name : undefined;
  }

}

export interface ISearchInputItem {
  id: number;
  name: string;
}
