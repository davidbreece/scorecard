import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'animals',
    loadChildren: './animals/animals.module#AnimalsPageModule'
  },
  { path: 'courses', loadChildren: './courses/courses.module#CoursesPageModule' },
  {
    path: 'course-detail/:id',
    loadChildren: './course-detail/course-detail.module#CourseDetailPageModule'
  },
  { path: 'scorecard', loadChildren: './scorecard/scorecard.module#ScorecardPageModule' }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
