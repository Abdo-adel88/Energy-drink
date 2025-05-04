import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-can',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-can.component.html',
  styleUrl: './all-can.component.css',
})
export class AllCanComponent {
  private _showStaticCan = false;

  @Input() set showStaticCan(value: boolean) {
    console.log('AllCanComponent received:', value);
    this._showStaticCan = value;
  }

  get showStaticCan(): boolean {
    return this._showStaticCan;
  }
}
