import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tippy Tinkletrousers\' Name Changer!';
  currentName: string;
  results: Array<string> = [];
  first = {
    'R': 'Loopy'
  };
  beginningLast = {
    'K': 'Potty'
  };
  endingLast = {
    'R': 'Buns'
  };

  translate() {
    const currentNameArray = this.currentName.split(' ');
    const firstName = currentNameArray[0];
    const lastName = currentNameArray[currentNameArray.length - 1];
    let letter = firstName[0].toUpperCase();
    const newFirst = this.first[letter];
    letter = lastName[0].toUpperCase();
    const newBeginningLast = this.beginningLast[letter];
    letter = lastName[lastName.length - 1].toUpperCase();
    const newEndingLast = this.endingLast[letter].toLowerCase();

    const newName = newFirst + ' ' + newBeginningLast + newEndingLast;

    const message = this.currentName + '\'s new name is ' + newName;
    this.results.unshift(message);
  }
}
