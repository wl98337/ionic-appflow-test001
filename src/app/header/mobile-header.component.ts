import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'mobile-header-root',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent {
  title = 'my-app';
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Input() show = false;
  whiteList = [
    {
      title: 'Credit Cards',
      expanded: false
    },
    {
      title: 'Accounts',
      expanded: false
    },
    {
      title: 'Loans',
      expanded: false
    },
    {
      title: 'Wealth Management',
      expanded: false
    },
    {
      title: 'Insurance',
      expanded: false
    }
  ]

  blackList = [
    'Citi Priority',
    'Citigold',
    'Citigold Private Client',
    'Business'
  ]

  closeHeader() {
    this.close.emit();
  }

  clickWhiteList(item) {
    item.expanded = !item.expanded;
  }
}
