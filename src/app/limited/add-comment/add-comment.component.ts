import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'add-comment',
  templateUrl: './add-comment.component.html',
})
export class AddCommentComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `AddComment` component');
  }

}
