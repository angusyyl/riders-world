import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './shared/components/post-list/post-list.component';
import { SearchComponent } from './shared/components/search/search.component';
import { SettingComponent } from './shared/components/setting/setting.component';

const routes: Routes = [
  { path: '', redirectTo: '/post-list', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'setting', component: SettingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
