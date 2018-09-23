import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiKey: string = encodeURI('ep2369l8gaketoo8d2l1qkd5');
  apiSecret: string = encodeURI('7t7qaeth5vqk');
  apiUrl: string = encodeURI('https://dgcoursereview.com/api_test');
  sig: string;


  constructor(private http: HttpClient) {
  }

  // getCourseInfo(courseId: string): Observable<Course>  {
    // const mode = 'crseinfo';
    // const url: string =
    //   this.apiUrl +
    //   '/?key=' + this.apiKey +
    //   '&mode=' + mode +
    //   '&id=' + courseId +
    //   '&sig=' + this.getSig(mode);
  //   console.log('url:' + url);

  //   const course$ = this.http.get<Course>(url)
  //     .pipe(
  //       map(course => )
  //     )

  //   return this.http.get<any>(url);
  // }


  getCourseInfo(courseId: string): Observable<Course> {
    const mode = 'crseinfo';
    const url: string = this.apiUrl +
      '/?key=' + this.apiKey +
      '&mode=' + mode +
      '&id=' + courseId +
      '&sig=' + this.getSig(mode);
    return this.http.get<Course>(url);
  }

  getLocalCourses(city, state, country): Observable<any> {
    const mode = 'findloc';
    const url = this.apiUrl
    + '/?key=' + this.apiKey
    + '&mode=' + encodeURI(mode)
    + '&city=' + encodeURI(city)
    + '&state=' + encodeURI(state)
    + '&country=' + encodeURI(country)
    + '&sig=' + this.getSig(mode);

    console.log(url);

    return this.http.get(url);
  }

  getSig(mode: string) {
    return Md5.hashStr(this.apiKey + this.apiSecret + mode);
  }

}

export interface Course {
  course_id: string;
  name: string;
  holes: string;
  city: string;
  state: string;
  zipcode: string;
  latitude: string;
  longitude: string;
  street_addr: string;
  reviews: string;
  rating: string;
  private: string;
  paytoplay: string;
  tee_1_clr: string;
  tee_2_clr: string;
  tee_3_clr: string;
  tee_4_clr: string;
  dgcr_url: string;
  rating_img: string;
  rating_img_small: string;
  course_photo_url_thumb: string;
  course_photo_url_medium: string;
  course_photo_hole: string;
  course_photo_caption: string;
}
