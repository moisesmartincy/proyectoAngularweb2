import { Routes } from '@angular/router';
//importamos los compnoentes
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';

export const routes: Routes = [

    { path: 'body', component: BodyComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'slider', component: SliderComponent }
];
