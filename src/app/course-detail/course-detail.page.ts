import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit, OnDestroy {
  course_id: string;
  private sub: any;
  course$: any;

  constructor( public route: ActivatedRoute, public dataService: DataService ) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.course_id = params['id'];
    });

    this.dataService.getCourseInfo(this.course_id).subscribe(
      (data: any) => {
        this.course$ = data;
      }
    );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
