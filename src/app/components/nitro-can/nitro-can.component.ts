import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-nitro-can',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './nitro-can.component.html',
  styleUrls: ['./nitro-can.component.css']
})
export class NitroCanComponent implements OnInit, OnDestroy {
  @Output() toggleCanJpg = new EventEmitter<boolean>();

  private ticking = false;
  private alreadyToggled = false; // ✅ نمنع التكرار

  private scrollHandler = () => {
    const scrollY = Math.round(window.scrollY);
    const maxScroll = 1000;
    const offset = Math.min(scrollY, maxScroll);

    const cover = document.querySelector('.cover-inside') as HTMLElement;
    const wrapper = document.querySelector('.can-mask-container') as HTMLElement;
    const canImage = document.querySelector('.can-jpg') as HTMLElement;

    // ✅ تحريك الخلفية أثناء Scroll
    if (cover && wrapper) {
      wrapper.style.top = `${scrollY}px`;
      cover.style.backgroundPositionY = `-${offset}px`;
    }

    // ✅ التحكم في الإظهار والاختفاء
    if (canImage && wrapper) {
      if (scrollY < 1) {
        canImage.style.opacity = '1';
        wrapper.style.opacity = '0';
        this.toggleCanJpg.emit(false);
        this.alreadyToggled = false;
    
      } 
      else if (scrollY >= 0 && scrollY <= 744) {
        canImage.style.opacity = '0';
        wrapper.style.opacity = '1';
        if (this.alreadyToggled) {
          this.toggleCanJpg.emit(false);
          this.alreadyToggled = false;
        
        }

        // ✅ بدل نطاق ضيق، خلي النطاق أوسع شوية
        if (scrollY >= 720 && scrollY <= 770 && !this.alreadyToggled) {
          console.log('Scroll Y:', scrollY, 'emit true');
          this.toggleCanJpg.emit(true);
          this.alreadyToggled = true;
          canImage.style.opacity = '1';
          wrapper.style.opacity = '0';
       
        }
      } 
      else {
        canImage.style.opacity = '1';
        wrapper.style.opacity = '0';
        if (this.alreadyToggled) {
          this.toggleCanJpg.emit(true);
          this.alreadyToggled = true;
          
        }
      }
    }
  };

  private onScroll = () => {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.scrollHandler();
        this.ticking = false;
      });
      this.ticking = true;
    }
  };

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
    this.scrollHandler();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }
}
