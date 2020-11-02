import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { ProgrammingComponent } from './programming/programming.component';
import { DesignComponent } from './design/design.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'illustration',component:IllustrationComponent},
{path:'programming',component:ProgrammingComponent},
{path:'design',component:DesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
