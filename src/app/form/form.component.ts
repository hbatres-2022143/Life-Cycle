import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent {
  fiel: string = '';

  modify(value: string) {
    console.log('Current value:', value);
  }
}
