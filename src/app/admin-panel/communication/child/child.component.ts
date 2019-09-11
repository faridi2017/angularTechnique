import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {
  @Input() childMessage: string;
  message;
  constructor(

  ) { 
    console.log('message in the constructor -->',this.childMessage);
  }

  ngOnInit() {
    this.message= this.childMessage;
    console.log('message-->',this.childMessage);
  }

}
