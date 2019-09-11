import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  message: string = "Hola Aarif!"

  @Output() messageEvent = new EventEmitter();

  constructor(private router: Router) { }

  sendMessage() {
    this.messageEvent.emit(this.message);
    //this.router.navigateByUrl('comm2/pr1');
  }

  ngOnInit() {
  }

}
