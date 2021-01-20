import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) {}

  hello(): void{
    console.log('hello user service');
    const observable = new Observable((subscriber)=> {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 3000);
    });
    
    const observer ={
      next: (result: any)=> console.log('next', result),
      error: (err: any) => console.log('error',err),
      complete :()=> console.log('complete')
    }

    
    observable.subscribe(observer);
  }

  getUser(): Observable<any>{
    return this.httpClient.get(environment.apiBaseUrl+'users/1')
    .pipe(
      map(u => u.name = u.name.toUppercase)
    );
  }

}
