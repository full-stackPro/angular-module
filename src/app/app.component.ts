import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-module';
  user: User;
  data_api: any = [];
  constructor(private http: HttpClient){}
  ngOnInit()
  {
    this.http.get<User>('http://localhost:80/auth').subscribe(data=>{
      console.log(data);
      this.user = data;
    });
    this.http.get('https://api.github.com/repos/angular/angular/commits').subscribe(datas=>{
      console.log(datas);
      this.data_api = datas;
    });
  }
}
