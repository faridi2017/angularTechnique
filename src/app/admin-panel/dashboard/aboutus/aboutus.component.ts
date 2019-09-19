import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { throwError, Subject } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';
const element_list = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit, AfterViewInit {
  searchKeyword;
  itemsList = ['appi team', 'web development', 'app development', 'jobs'];
  itm;
  searchkey;
  myList = [];
  searchList = [];
  twitter_link = 'https://twitter.com/adobe?ref_src=twsrc%5Etfw';
  @ViewChild('myDiv', { static: false }) myDiv: ElementRef;
  // tweetData= {sourceType: 'profile', screenName: 'faridi56888245'}
  tweetData = { sourceType: 'url', url: 'https://twitter.com/TCS' }
  ngAfterViewInit() {
    //console.log(this.myDiv.nativeElement.innerHTML);
  }
  constructor(private searchService: ApiServiceService) { }

  ngOnInit() {
    this.myList = element_list;
    // this.parse_integre();
  }
  getData(data) {
    console.log('twiter data-->', data);
  }
  /*
  parseInt("100",10) = 100
parseInt("8",8) = NaN
parseInt("15",8) = 13
parseInt("16",16) = 22
parseInt(" 100 ") = 100
parseInt("0x16") = 22  
  */
  parse_integre() {
    console.log(parseInt('123Aarif23'));
    console.log(parseInt('Aarif23'));
    console.log(parseInt("100", 10));
    console.log(parseInt("200.78"));
    console.log(Number("200.78"));
    console.log(parseInt("8", 8));
    console.log(parseInt("17", 8));
    console.log(parseInt("7", 8));
    console.log(parseInt("16", 16));
    console.log(parseInt("8", 2));
    console.log(parseInt("1000011", 2));
  }
  search() {
    //console.log(this.searchKeyword);
    this.searchService.search(this.searchKeyword).subscribe((res: any) => {
      console.log(res.items);
    }, error => {
      console.error('Error in calling google api');
      return throwError(error);
    });
  }
  onChange() {
    console.log('searchkey-->', this.searchkey);
  }
  clickMat() {
    if (!this.itemsList.includes(this.itm)) {
      this.itemsList.push(this.itm)
    }
    console.log('itm on mat icon-->', this.itm);
    this.searchService.search(this.itm).subscribe((res: any) => {
      console.log(res.items);
      //this.searchList= res.items;
    }, error => {
      console.error('Error in calling google api');
      return throwError(error);
    });
  }
}
