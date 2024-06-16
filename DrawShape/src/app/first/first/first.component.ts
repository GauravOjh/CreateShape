import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DrawshapeService } from '../../drawshape.service';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  constructor(private dr:DrawshapeService){}
  shapes=['square','rectangle','circle']
  colors=['red','yellow','green']

  colorO='';
  shapeO='';
  shapeClass='';
  DrawShape(){
    this.shapeClass=this.dr.Draw(this.shapeO,this.colorO);
  }
}
