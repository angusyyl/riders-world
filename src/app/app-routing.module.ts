import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './shared/components/post-list/post-list.component';
import { SearchComponent } from './shared/components/search/search.component';
import { SettingComponent } from './shared/components/setting/setting.component';
import { SignupComponent } from './shared/components/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
