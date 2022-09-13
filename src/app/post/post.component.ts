import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() postImg = '';

  @Output() clickImg = new EventEmitter<{ name: string; payload: string }>();

  emitImg = () => {
    let data = {
      name: '123',
      payload: this.postImg,
    };
    this.clickImg.emit(data);
  };
}
