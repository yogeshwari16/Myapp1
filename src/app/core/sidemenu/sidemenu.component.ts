import { Component, OnInit, Input } from '@angular/core';
import { sidemenus } from './menu-element';


@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

    @Input() iconOnly:boolean = false;
    public sidemenus = sidemenus;

    constructor() { }

    ngOnInit() {
    }

}
