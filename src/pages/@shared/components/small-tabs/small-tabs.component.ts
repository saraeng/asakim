import { SelectItem } from './../../../../@core/models/general/select-item';
import { SmallTab } from './models/small-tab';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'small-tabs',
  templateUrl: 'small-tabs.component.html',
  styles: ['./small-tabs.component.scss']
})
export class SmallTabs implements OnInit {

  @Input() public tabs: SelectItem[] = [];
  @Output() public tabChanged: EventEmitter<any> = new EventEmitter<any>();
  public selectedTab: any;

  ngOnInit(): void {
    if (!!this.tabs && !!this.tabs.length) {
      this.selectedTab = this.tabs[0].value;
    }
  }

  public click(t: any) {
    if (!!this.tabChanged) {
      this.selectedTab = t;
      this.tabChanged.emit(t);
    }
  }


}