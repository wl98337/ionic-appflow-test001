import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {

  constructor() { }

  submited: boolean = false
  ngOnInit() {
  }

  submit(){
    this.submited = !this.submited;
  }
}
