import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  inputs: string[] = ['userName', 'userAge', 'userEmail', 'userPassword'];
  inputTerm: { [key: string]: string } = {};

  constructor() {
    this.inputs.forEach(input => {
      this.inputTerm[input] = ''; 
    });
  }
}
