import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'footer-root',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  title = 'my-app';
  
  isShow = true;
  onClose($event) {
    this.isShow = false;  
  }
  showItems() {
    this.isShow = true;
  }
}
