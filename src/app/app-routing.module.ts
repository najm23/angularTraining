import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { HommeComponent } from './components/homme/homme.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileFormComponent } from './modules/user/profile-form/profile-form.component';
import { UserModule } from './modules/user/user.module';

const routes: Routes = [
   { path : 'user', loadChildren: () => import('./modules/user/user.module')
   .then(m => m.UserModule), canLoad:[AuthGuard]},
   { path : 'homme', component :  HommeComponent},
   { path : 'getStarted', component :  GetStartedComponent},
   { path : '', redirectTo: '/homme', pathMatch: 'full'},
   { path : '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
