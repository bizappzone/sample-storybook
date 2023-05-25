import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'baz-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss'],
})
export class BasePageComponent implements OnInit {
  constructor(private logger: NGXLogger) {}

  ngOnInit(): void {
    this.logger.trace('**** DS - button view');
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick(value: any) {
    this.logger.trace('$$$ BUTTON CLICKED $$$'), value;
  }
}
