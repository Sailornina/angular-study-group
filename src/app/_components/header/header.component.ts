import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, NgForOf],
  template: `
    <nav class="flex">
      <ul class="flex justify-between">
        <li><a routerLink="/home">Home</a></li>
        <li class="ml-2"><a routerLink="/dashboard">Dashboard</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}

