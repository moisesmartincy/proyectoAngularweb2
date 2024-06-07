import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//importamos los componenetes creados
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    BodyComponent, 
    FooterComponent, 
    MenuComponent, 
    SliderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'condoriYujra';
}
