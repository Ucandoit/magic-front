import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './limited.routes';
import { AddCommentComponent } from './add-comment/add-comment.component';

@NgModule({
  declarations: [AddCommentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class LimitedModule {
  public static routes = routes;
  constructor() {
    console.log('`LimitedModule` module initialized');
  }
}
