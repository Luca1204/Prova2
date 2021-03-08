import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
macchine : string[]
  constructor() {
    this.macchine = ["macchina1", "macchina2", "macchina3", "macchina4", "macchina5", "macchina6", "macchina7", "macchina8", "macchina9", "macchina10"]
  }




  ngOnInit(){
  }

}
