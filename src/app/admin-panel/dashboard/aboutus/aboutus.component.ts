import {AfterViewInit, Component, ElementRef, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit, AfterViewInit {
  @ViewChild('myDiv',{static: false}) myDiv: ElementRef;
  // tweetData= {sourceType: 'profile', screenName: 'faridi56888245'}
tweetData= {sourceType: 'url', screenName: 'https://twitter.com/InfoSys'}
  ngAfterViewInit() {
      console.log(this.myDiv.nativeElement.innerHTML);
  }
  constructor() { }

  ngOnInit() {
  }
  getData(data){
    console.log('twiter data-->',data);
  }
}
