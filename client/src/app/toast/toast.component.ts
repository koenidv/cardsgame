import { Component, OnInit, Input, /* Output, EventEmitter */ } from '@angular/core';
import { Toast } from '../_classes/toast';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Input() toast: Toast;
  // @Output() close = new EventEmitter(true);

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.toast.close();
    }, this.toast.time);
  }

}
