import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor() { }
persona={
  genero:'F',
  notificaciones:true,
}

terminosYcondicones:boolean=false;
  ngOnInit(): void {
  }

}
