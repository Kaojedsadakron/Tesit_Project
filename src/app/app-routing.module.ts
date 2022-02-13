import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SubmitComponent } from './submit/submit.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'submission', component: SubmitComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'result', component: ConclusionComponent },
];


@NgModule({
  declarations:[ProfileComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
export const routingComponents = [
    AppComponent,
    //1
    AppComponent,
    LoginComponent , 
    ProfileComponent ,
    SubmitComponent,
    TrackingComponent,
    ConclusionComponent
]