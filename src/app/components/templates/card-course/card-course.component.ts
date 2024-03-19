import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss']
})
export class CardCourseComponent {
    @Input() bandeira!: string;
    @Input() description!: string;
}
