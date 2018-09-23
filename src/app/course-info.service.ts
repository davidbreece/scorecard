import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class CourseInfoService {

  apiKey: string = encodeURI('ep2369l8gaketoo8d2l1qkd5');
  apiSecret: string = encodeURI('7t7qaeth5vqk');
  apiUrl: string = encodeURI('https://dgcoursereview.com/api_test');
  sig: string;



  constructor(public http: HttpClient) {
    console.log('Hello CoursesProvider Provider');
   // this.sig = Md5.hashStr(this.apiKey + this.apiSecret + 'findloc').toString();
  }

  // getLocalCourses(city, state, country) {
  //   const mode = 'findloc';
  //   const url  =
  //     this.apiUrl +
  //     '/?key=' + this.apiKey +
  //     '&mode=' + encodeURI(mode) + '&city=' + encodeURI(city) +
  //     '&state=' + encodeURI(state) +
  //     '&country=' + encodeURI(country) +
  //     '&sig=' + this.getSig(mode);
  //   console.log('url:' + url);
  //   return this.http.get(url);
  // }

  // getCourseInfo(courseId: string) {
  //   const mode = 'crseinfo';
  //   const url  =
  //     this.apiUrl +
  //     '/?key=' + this.apiKey +
  //     '&mode=' + mode +
  //     '&id=' + courseId +
  //     '&sig=' + this.getSig(mode);
  //   console.log('url:' + url);
  //   return;
  //   // return this.http.get(url);
  // }

  // https://dgcoursereview.com/api_test/?key=ep2369l8gaketoo8d2l1qkd5&mode=crseinfo&id=6795&sig=10b2dd232007121a600902e4d84ae7f4


  // ep2369l8gaketoo8d2l1qkd57t7qaeth5vqkcrseinfo
  // 10b2dd232007121a600902e4d84ae7f4

  // getSig(mode: string) {
  //   return Md5.hashStr(this.apiKey + this.apiSecret + mode);
  // }

  // interface CourseObject {
  //   name: string;
  //   holes: number;
  // }

  // static getFakeInfo(city, state, country) {
  //   const course1: Object = { name: 'Honeybear Hollow', holes: 18 };
  //   const course2: Object = { name: 'Brookside Park', holes: 18 };
  //   const course3: Object = { name: 'Washington Park', holes: 18 };

  //   return Array(course1, course2, course3);

  // }

}
