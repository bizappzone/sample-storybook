import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'baz-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor(private logger: NGXLogger) {}

  ngOnInit(): void {
    this.logger.trace('**** DS - button view');
  }
  onClick(value: any) {
    this.logger.trace('$$$ BUTTON CLICKED $$$'), value;
  }
}
