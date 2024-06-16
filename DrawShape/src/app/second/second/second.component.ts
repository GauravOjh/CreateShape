import { Component } from '@angular/core';
import { DrawshapeService } from '../../drawshape.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
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
