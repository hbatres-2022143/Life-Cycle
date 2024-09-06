import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.sass'],
})
export class TimeoutComponent implements OnInit, OnChanges {
  @Input() value: string = '';
  visualize: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value'] && !changes['value'].isFirstChange()) {
      console.log('Valor ingresado:', this.value);
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.visualize = this.value;
    }, 30000);
  }
}
