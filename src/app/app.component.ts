import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'carolinesp';

  userData = {
    email: "carolinesp@email",
    age: 25,
    city: "Bauru"
  }

  title = 'AngularProject';
}
