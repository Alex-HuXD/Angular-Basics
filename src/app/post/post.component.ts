import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() postImg = '';

  @Output() clickImg = new EventEmitter<{ name: string; payload: string }>();

  emitImg = () => {
    let data = {
      name: '123',
      payload: this.postImg,
    };
    this.clickImg.emit(data);
  };

  //run first & run once
  // - creates component with default value set inside this class
  constructor() {
    console.log('constructor() called', this.postImg);
  }

  // if @input() exist run 3rd after ngOnChanges()
  // other wise run 2nd
  //run once,
  // - component will receives @input data after constructor() and init the component
  ngOnInit() {
    console.log('ngOnInit() called', this.postImg);
  }

  //run 2nd if @input() exist,
  // other wise after ngOnInit() whenever change detection found state changes
  ngOnChanges(): void {
    console.log('ngOnChanges() called');
  }

  //eun everytime something happens, even the content doesn't change.
  ngDoCheck(): void {
    console.log('ngDoChenk() called');
  }

  //for the following lifecycle, need to understand view VS content
  // View refers to the template of the component itself
  // content refers to the projectd content from parent component

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentCkecked() called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }
}
