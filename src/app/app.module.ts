import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TempRefVArComponent } from './temp-ref-var/temp-ref-var.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { NgIfdirectiveComponent } from './ng-ifdirective/ng-ifdirective.component';
import { NgSwitchdirectiveComponent } from './ng-switchdirective/ng-switchdirective.component';
import { NgFordirectiveComponent } from './ng-fordirective/ng-fordirective.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
import { MyhobbiesComponent } from './myhobbies/myhobbies.component';
import { MyhobbiesService } from './myhobbies.service';
import { HttpClientModule } from '@angular/common/http';
import { SoftwareEngineerComponent } from './software-engineer/software-engineer.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { ItComponent } from './it/it.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CourselistComponent } from './courselist/courselist.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseFeeComponent } from './course-fee/course-fee.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAccessGuard } from './admin-access.guard';




@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    StudentComponent,
    TestComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    StylebindingComponent,
    EventbindingComponent,
    TempRefVArComponent,
    TwowaybindingComponent,
    NgIfdirectiveComponent,
    NgSwitchdirectiveComponent,
    NgFordirectiveComponent,
    ChildComponent,
    PipesComponent,
    StudentsListComponent,
    StudentDetailsComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent,
    MyhobbiesComponent,
    SoftwareEngineerComponent,
    RolesListComponent,
    ItComponent,
    PageNotFoundComponent,
    HomeComponent,
    CourselistComponent,
    CourseDetailsComponent,
    CourseDurationComponent,
    CourseFeeComponent,
    AdminHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [EmployeeService, MyhobbiesService, AdminAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

}