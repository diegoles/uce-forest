import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto mineria de datos Random Forest';
  resultExactitud;
  resultModelo;

  modelos = [];
  exactitud() {
    // Consulta el servicio web para obtener la exactitud
    this.findExactitud()
    .subscribe((response: any) => {
      console.log(response);
      this.resultExactitud = response;
      this.stopLoading();
    });
  }

  modelo() {
    // Consulta el servicio web para obtener la exactitud
    this.findModelo()
    .subscribe((response: any) => {
      console.log(response);
      this.modelos = response;
      this.stopLoading();
    });
  }


  getQuery(query: string) {
    const url = `http://localhost:8080/forest/${query}`;
    console.log(url);
    return this.http.get(url);
  }

  constructor(private http: HttpClient, private loadingBar: LoadingBarService) { }
  
  findExactitud() {
    this.startLoading();
    return this.getQuery('exactitud/');
  }

  findModelo() {
    this.startLoading();
    return this.getQuery('modelo/');
  }

  
  startLoading() {
      this.loadingBar.start();
  }

  stopLoading() {
      this.loadingBar.complete();
  }

  encerar(){
    this.resultExactitud ='';
    this.resultModelo ='';
    this.modelos = [];
  }
}
