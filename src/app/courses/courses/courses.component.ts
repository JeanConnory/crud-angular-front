import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService) {
    //this.courses = []; pode ser declarado dessa forma
    this.courses$ = this.courseService.list(); //Pode ser usado no OnInit
  }

  ngOnInit(): void {
  }
}
