import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  dependencies: any;
  features: any;

  constructor() {
    this.dependencies = {
      frontend: [
        { name: 'Angular 10.0.9' },
        { name: 'Angular CLI 10.0.6' },
        { name: 'Angular Universal 10.0.2' },
        { name: 'Font Awesome 5.14.0' },
        { name: 'Bootstrap 4.5.2' },
        { name: 'JQuery 3.5.1' },
      ],
      backend: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'pg-promise' },
      ]
    };

    this.features = {
      frontend: [
        {
          name: 'AngularJS Installation',
          englishTutorial: 'https://www.linkedin.com/posts/pranam-bhat-11670689_angularjs-set-up-and-installation-activity-6699583199657492481--kCx',
        },
        {
          name: 'AngularJS Tutorial - 1',
          englishTutorial: 'https://www.linkedin.com/posts/pranam-bhat-11670689_angularjs-tutorial-1-activity-6699908277146415104-5x-B',
        },
        {
          name: 'AngularJS Tutorial - 2',
          englishTutorial: 'https://www.linkedin.com/posts/pranam-bhat-11670689_angularjs-tutorial-2-activity-6700391099367854080-AuNP',
        },
        {
          name: 'Angular Version Check',
          englishTutorial: 'https://www.linkedin.com/posts/pranam-bhat-11670689_angular-version-activity-6700727531068375040-VJ41',
        },
        {
          name: 'Angular Latest Version',
          englishTutorial: 'https://www.linkedin.com/posts/pranam-bhat-11670689_angular-latest-version-is-damn-fast-happy-activity-6700833256281112576-Gqfw',
        },
        {
          name: 'Angular Unit Testing',
          englishTutorial: 'https://www.linkedin.com/posts/pranam-bhat-11670689_angular-unit-testing-using-jasmine-and-karma-activity-6698195027153297408-TqQS',
        },
        {
          name: 'Angular Ivy Compiler',
          englishTutorial: 'https://github.com/PranamBhat/Angular-Ivy-Compiler',
        },
        {
          name: 'Django Framework Integration with Angular',
          englishTutorial: 'https://www.linkedin.com/posts/pranam-bhat-11670689_angularjs-angular2-angular4-activity-6695934504206508032-TA8Z',
        },


      ],
      backend: [
        { name: 'Local JSON' },
        { name: 'RESTFull API' },
        { name: 'CRUD API' },
        { name: 'Database Creation' },
        { name: 'Data Import' },
        { name: 'Data Export' },
      ]
    };

  }

}
