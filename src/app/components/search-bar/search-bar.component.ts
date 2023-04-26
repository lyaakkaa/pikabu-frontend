import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchValue: string = '';

  changeSearchValue(eventData: Event){
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchValue)
  }
}
