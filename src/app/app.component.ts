import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './_components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet],
  template: `
  <div>
    <app-header/>
    <main>
     <router-outlet></router-outlet>
    </main>
</div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'home-rentals';
}