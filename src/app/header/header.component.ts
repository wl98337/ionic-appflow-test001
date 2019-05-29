import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
@Component({
  selector: 'header-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    public service: LoginService) { }

  @Input() username:string;
  @Input() type:string;
  title = 'my-app';
  showMobileHeader = false;

  openMobileHeader() {
    this.showMobileHeader = true;
  }

  closeMobileHeader() {
    this.showMobileHeader = false;
  }

  ngOnInit() {
    console.log(this.username);
    this.username = this.username? this.username: "Log in";
  }
}
