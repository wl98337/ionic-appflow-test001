import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(
    private route: ActivatedRoute,
    public service: LoginService
  ) {}
  type:string = "blue";
  test:any;
  ngOnInit() {
    this.type = localStorage.getItem("type");
  }
}
