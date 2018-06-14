import { AddCommentComponent } from './add-comment/add-comment.component';

export const routes = [
  {
    path: '', children: [
      { path: 'add-comment', component: AddCommentComponent }
    ]
  },
];
