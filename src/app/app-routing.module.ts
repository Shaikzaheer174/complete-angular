import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseFeeComponent } from './course-fee/course-fee.component';
import { CourselistComponent } from './courselist/courselist.component';
import { HomeComponent } from './home/home.component';
import { ItComponent } from './it/it.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { SoftwareEngineerComponent } from './software-engineer/software-engineer.component';


const routes: Routes =
  [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, //pathMatch:'full': In this case, when app is launched on localhost:4200 (or some server) the default page will be welcome screen, since the url will be https://localhost:4200/
    { path: 'home', component: HomeComponent },
    { path: 'softwareengineer', component: SoftwareEngineerComponent },  //useAsDefault: true
    { path: 'roleslist', component: RolesListComponent },
    { path: 'it', component: ItComponent },
    { path: 'course-list', component: CourselistComponent },
    {
      path: 'course-list/:id', component: CourseDetailsComponent,
      children: [
        {path:'duration',component: CourseDurationComponent},
        {path:'fee',component: CourseFeeComponent}
      ]
    },
  { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) }, //:id is a placeholder for url parameter    //children property takes array and every path trated as a seperate array.
    { path: "**", component: PageNotFoundComponent }, //   ** ---> its a wildcard component i.e., if no component found then this component will comes into the picture.  // note this component path always should be at last
  ];  //here we define the routes for our angular application.  //each route is nothing but an object.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
