import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NitroCanComponent } from '../nitro-can/nitro-can.component';
import { DateCanComponent } from '../date-can/date-can.component';
import { AllCanComponent } from '../all-can/all-can.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-drink-home',
  imports: [NitroCanComponent,DateCanComponent,AllCanComponent,ContactComponent],
  templateUrl: './drink-home.component.html',
  styleUrl: './drink-home.component.css'
})
export class DrinkHomeComponent {
  showStaticCanFromNitro = false;
  showStaticCanFromDate = false;
  isLoading = true;
  get showStaticCan(): boolean {
    return this.showStaticCanFromNitro || this.showStaticCanFromDate;
  }
  ngOnInit(): void {
    // بعد 4 ثواني يخفي الـ loading
    setTimeout(() => {
      this.isLoading = false;
    }, 4000);
  }
  onNitroToggle(value: boolean) {
    // console.log('onNitroToggle', value);
    this.showStaticCanFromNitro = value;
  }
  
  onDateToggle(value: boolean) {
    console.log('onDateToggle', value);
    this.showStaticCanFromDate = value;
  }
  
  
}
