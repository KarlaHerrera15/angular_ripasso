import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CassettieraComponent } from './cassettiera/cassettiera.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CassettieraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Herrera';
}
