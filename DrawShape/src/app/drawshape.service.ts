import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawshapeService {

  constructor() { }

  Draw(shape:any,color:any){
    return shape + '-' + color;
  }
}
