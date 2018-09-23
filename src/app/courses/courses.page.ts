import { getTestBed } from '@angular/core/testing';
import { CourseInfoService } from '../course-info.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

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
  }

  ngOnInit() {
  }

  onCourseSelect() {
    
  }

}
