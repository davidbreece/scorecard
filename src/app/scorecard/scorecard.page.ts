import { Observable } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course } from './../data.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.page.html',
  styleUrls: ['./scorecard.page.scss'],
})
export class ScorecardPage implements OnInit {

  courseId: string;
  course$: Observable<Course>;
  players: Player[] = [];
  private sub: any;

  constructor(public route: ActivatedRoute, public data: DataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.courseId = params['course_id'];
    });

    this.data.getCourseInfo(this.courseId).subscribe(
      (data: any) => {
        this.course$ = data;
      }
    );
  }

}

export interface Player {
  displayName: string;
  email: string;
}

