import { Component, ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent {
  @ViewChild('name') namekey ! : ElementRef
  
  startQuiz(){
    localStorage.setItem("name",this.namekey.nativeElement.value)
  }
}
