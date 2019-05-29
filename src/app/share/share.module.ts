import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MobileHeaderComponent } from '../header/mobile-header.component';
import { IonicModule } from '@ionic/angular';
import {LoginService} from '../login.service';
@NgModule({
  declarations: [
    FooterComponent,HeaderComponent,MobileHeaderComponent
    ],
    exports: [
      FooterComponent,HeaderComponent,MobileHeaderComponent
    ],
  imports: [
    CommonModule, IonicModule.forRoot()
  ],
  providers: [LoginService]
})
export class ShareModule { }
