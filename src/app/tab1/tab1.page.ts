import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service:LoginService
  ) {}
  type:string = "blue";
  username:string = "Blue user";

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    this.username = this.type == "blue"? "Citiblue Client": "Citigold Private Client";
  }

  backLogin() {
    this.router.navigate(['/']);
  }
}
