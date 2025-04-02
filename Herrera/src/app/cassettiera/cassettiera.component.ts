import { Component } from '@angular/core';
import { CassellaPostaComponent } from '../cassella-posta/cassella-posta.component';

@Component({
  selector: 'app-cassettiera',
  imports: [CassellaPostaComponent],
  templateUrl: './cassettiera.component.html',
  styleUrl: './cassettiera.component.css'
})
export class CassettieraComponent {
  names: string[];  
  constructor() { 
     this.names = ['viti', 'ferro', 'gru', 'ruspa', 'autocarro', 'bulloni', 'escavorti', 'finitrici', 'esboscatrici', 'trencher']; 
  }
  ngOnInit() {
  }
}
