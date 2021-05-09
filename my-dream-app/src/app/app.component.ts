import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'my-dream-app';
  userName ="";


checkIfempty(){
 return this.userName == ""
} 

onReset(){
  this.userName = "";
}

serverName : String = "";
onUpdatedServerName(event : Event){
this.serverName = (<HTMLInputElement>event.target).value
}
}
