import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component'
import { ListComponent } from './list/list.component';
import { NewLogComponent } from './new-log/new-log.component';
import { LogPreviewComponent } from './log-preview/log-preview.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect To Login
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'list', component: ListComponent},
  { path: 'new', component: NewLogComponent},
  { path: 'preview', component: LogPreviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
