import { getTestBed } from '@angular/core/testing';
import { CourseInfoService } from '../course-info.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
import { startWith } from 'rxjs/operators';

const CACHE_KEY = 'httpCoursesCache';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  coursesResponse: Observable <any>;
  courses: any = [];
  selectedCourseId: string;

  constructor(dataService: DataService) {
    dataService.getLocalCourses('Rochester', 'NY', 'US').subscribe(
      (data: {}) => {
        this.courses = data;
      });

    // this.courses.subscribe(next => {
    //   localStorage[CACHE_KEY] = JSON.stringify(next);
    // });

    // this.courses = this.courses.pipe(
    //   startWith(JSON.parse(localStorage[CACHE_KEY] || '[]'))
    // );
  }

  ngOnInit() {
  }

  onCourseSelect() {

  }

}
