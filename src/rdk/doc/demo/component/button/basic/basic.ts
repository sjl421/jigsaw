import {Component} from "@angular/core";

@Component({
  templateUrl: 'basic.html',
  styleUrls: []
})
export class ButtonBasicDemoComponent {
    onClick() {
        alert('hello rdk button');
    }
}
