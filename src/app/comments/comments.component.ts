import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  addComment() {
    const input = document.getElementById('comment-input') as HTMLInputElement;
    const comment = input.value.trim();

    if (comment !== '') {
      const commentSection = document.getElementById('comment-section');
      if (commentSection !== null) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'commented-section mt-2';
        commentDiv.innerHTML = '<div class="d-flex flex-row align-items-center commented-user"><h5 class="mr-2">Your Name</h5><span class="dot mb-1"></span></div><div class="comment-text-sm"><span>' + comment + '</span></div>';

        commentSection.appendChild(commentDiv);
      }

      input.value = ''; // Clear the input field
    }
  }
}
