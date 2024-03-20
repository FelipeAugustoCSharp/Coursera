import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() link_1!: string;
  @Input() area_1!: string;

  @Input() link_2!: string;
  @Input() area_2!: string;

  @Input() link_3!: string;
  @Input() area_3!: string;

  @Output() Logout = new EventEmitter<boolean>();

  /**
   *
   */

  constructor() {
    
  }

  Access() : void {
    this.Logout.emit(true);
  }
}
