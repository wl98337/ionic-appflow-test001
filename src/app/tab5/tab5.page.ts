import { Component, ViewChild,ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { LoginService } from '../login.service';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  searchFocused = false;
  packages$: Observable<any>;
  private searchText$ = new Subject<string>();
  keyword: string = "";
  @ViewChild('test') searchInput: any
  constructor(
    private router: Router,
    public service: LoginService,
    public navCtrl: NavController) {
  }
  ionViewDidEnter() {
    console.log("enter")
  }
  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }

  search(packageName: string) {
    this.keyword = packageName;
    this.searchText$.next(packageName);
  }

  ngOnInit() {
    this.packages$ = this.searchText$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(packageName =>
        this.service.getFaqsMain(packageName))
    );
  }

  onSearchFocus() {
    this.searchFocused = true;
  }

  onSearchBlur() {
    
  }

  onSearchCancel(e) {
    setTimeout(() => {
      this.searchFocused = false;
    }, 100);
  }

  goFaqDetails(id) {
    // this.router.navigate(["/faq-details/"+id]);
    this.navCtrl.navigateForward("/faq-details/"+id, { animated: true, animationDirection: "forward" });
  }
}
