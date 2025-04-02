import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cassella-posta',
  imports: [],
  templateUrl: './cassella-posta.component.html',
  styleUrl: './cassella-posta.component.css'
})
export class CassellaPostaComponent implements OnInit{
  @Input() cassella: string = ""; 

  lettere: string [];  
  constructor() { 
     this.lettere = ['lettera1', 'lettera2', 'lettera3']; 
  }
  ngOnInit() {
  }
}
