import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-date-can',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-can.component.html',
  styleUrl: './date-can.component.css',
})
export class DateCanComponent implements OnInit, OnDestroy {
  @Input() showCanJpg: boolean = false;
  @Output() toggleStaticCan = new EventEmitter<boolean>();

  private ticking = false;
  private alreadySent = false;

  private lastEmitted: boolean | null = null;

  private emitIfChanged(value: boolean): void {
    if (this.lastEmitted !== value) {
      this.toggleStaticCan.emit(value);
      this.lastEmitted = value;
      console.log('🔄 toggleStaticCan emit:', value);
    }
  }
  
  private animateCan(): void {
    const can = document.querySelector('.can-jpg-2') as HTMLElement;
    const trigger = document.querySelector('#date-can-trigger') as HTMLElement;
  
    if (!can || !trigger) return;
  
    const rect = trigger.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    const visibleRatio = Math.min(Math.max(1 - rect.top / windowHeight, 1.2), 3);
    const rotateZ = visibleRatio * 300;
    const translateY = visibleRatio * 650;
  
    can.style.transform = `translateX(-50%) translateY(${translateY}px) rotateZ(${rotateZ}deg)`;
  
    if (translateY < 100) {
      can.style.opacity = '1';
      this.emitIfChanged(false);
    } else if (translateY >= 1150) {
      console.log(scrollY, translateY);
      
      can.style.opacity = '0';
      this.emitIfChanged(true);
    } else {
      can.style.opacity = '1';
      this.emitIfChanged(false);
    }
  }
  
  
  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
    this.toggleStaticCan.emit(false);

    this.animateCan();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

  private onScroll = () => {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.animateCan();
        this.ticking = false;
      });
      this.ticking = true;
    }
  };

}
