import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto mineria de datos Random Forest';
  resultExactitud;
  resultModelo;
  exactitud() {
    // Consulta el servicio web para obtener la exactitud
    this.findExactitud()
    .subscribe((response: any) => {
      console.log(response);
      this.resultExactitud = response;
    });
  }

  modelo() {
    // Consulta el servicio web para obtener la exactitud
    this.findModelo()
    .subscribe((response: any) => {
      console.log(response);
      this.resultModelo = response;
    });
  }


  getQuery(query: string) {
    const url = `http://localhost:8080/forest/${query}`;
    console.log(url);
    return this.http.get(url);
  }

  constructor(private http: HttpClient) { }
  
  findExactitud() {
    return this.getQuery('exactitud/');
  }

  findModelo() {
    return this.getQuery('modelo/');
  }

  
}
