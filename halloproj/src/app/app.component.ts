import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'halloproj';

  flag = true;
  ServerStatus = 'true';
  
  toggleServerStatus()
  {

   
    this.flag = !this.flag;
   

    if(this.flag === true)
    {
    this.ServerStatus = 'true';
    }
    else this.ServerStatus = 'false';
    return this.ServerStatus;
  }
  


}


