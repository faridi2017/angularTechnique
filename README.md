# AngMat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



##creating filter pipe for auto search on element object list in your components
-----------start for filters pipe----------------
1. create filter:
 ng generate pipe [name] 
 ex: ng g pipe filters
    it will create filters.pipe.ts

2. edit filters.pipe.ts
        transform(items: any[], searchName: string): any[] {
             if (!items) { return []; }
             if (!searchName) { return items; }
             searchName = searchName.toLowerCase();
             return items.filter(it => {
             return it.name.toLowerCase().includes(searchName);
           });
  }

3. import filters.pipe.ts in your module
     a) if your component(where you want to apply filter on input) is in app  module then
          add it to declaration array:
          @NgModule({ 
            declarations: [
                   ------,
                   ------,
                    FiltersPipe
                      ],

  b) if you are in other module than app module:
       --> delete filtersPipe from appModule (it is added by default)
       --> add in declaration array of your module( the module in which your component presents)

 c) import formModule and form-field etc in your module
     imports: [
         ------,
         ------,  
              FormsModule,
          MatAutocompleteModule,
         MatFormFieldModule,
          MatInputModule,
           MatIconModule

  ]
4. put your list_items and seachItem in your component(.ts file):
              searchName;
              myList=[ {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
                     {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
                     {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
                     {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},]; 
 
  5. Use filter in your component(HTML)
       <div class="row">
      <div class="col-md-7 col-sm-12" *ngIf="myList">
        <form class="form-inline">
          <div class="form-group col-sm-12 col-md-12">
            <mat-form-field class="w-100">
              <input matInput placeholder="Select name" [(ngModel)]="searchName" [matAutocomplete]="auto"
                name="searchName">
              <mat-icon matSuffix>search</mat-icon>
              <mat-autocomplete #auto="matAutocomplete" >
                <mat-option *ngFor="let element of myList | filters : searchName" [value]="element.name">
                  {{ element.name }}
                </mat-option>
              </mat-autocomplete>
            </mat-form-field>
          </div>
        </form>
      </div>
    </div>

    -------end of filters----------------
    ----------twitter time line-----------
    1. npm install ngx-twitter-timeline --save
    2. In your module.ts
    import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
           
           @NgModule({
           imports: [
    ------------,
    ------------,
    NgxTwitterTimelineModule
  ],
3. In your component.html
    <ngx-twitter-timeline 
    [data]="{sourceType: 'url', url: 'https://twitter.com/infosys'}"
    [opts]="{tweetLimit: 5}"
></ngx-twitter-timeline>

4. Optional: using  in your component.ts
      a)  tweetData= {sourceType: 'url', url: 'https://twitter.com/TCS'} in .ts file
      b)    <ngx-twitter-timeline 
                    [data]="tweetData"
                    [opts]="{tweetLimit: 1}"
            ></ngx-twitter-timeline>  

            -------------------------------------
            

