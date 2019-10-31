import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './shared/components/post-list/post-list.component';
import { MapComponent } from './shared/components/map/map.component';
import { SettingComponent } from './shared/components/setting/setting.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { SigninComponent } from './shared/components/signin/signin.component';
import { UserInfoComponent } from './shared/components/user-info/user-info.component';
import { AuthGuard } from './shared/helpers';

const routes: Routes = [
  //{ path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: MapComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'user-info', component: UserInfoComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
