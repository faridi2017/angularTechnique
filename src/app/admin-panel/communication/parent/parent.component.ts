import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentMessage = "message from parent"
  constructor(private router: Router) { }

  ngOnInit() {
  }
  passData(){
    console.log('hi');
    this.router.navigateByUrl('comm/ch');
  }
}

/*  
@Input links a property of a component 
(which is generally the child component) 
with a value that was given by another component (the parent).

@Output decorator is used to link a property of a child component 
and emit it through the event emitter. So the parent component 
can call the property and get the data emitted from it.

To summarise: @Input is used to pass data from parent to 
child and the opposite, @Output, can be used when you want 
to pass data from the child to the parent (which can also be 
done with observables or simple functions).
*/
