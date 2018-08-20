import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto mineria de datos Random Forest';

  findForest() {
    console.log('Consultar algoritmo random forest');
  }
}
