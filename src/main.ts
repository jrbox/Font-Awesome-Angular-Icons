import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import {
  faArrowLeft,
  faArrowRight,
  faArrowsRotate,
  faHouse,
  faInfo,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
  <!-- fa-fw : fixedWidth permet d'avoir une largeur identique -->
  <div class="icon-box">
    <fa-icon class="custom-icon fa-fw" [icon]="faArrowLeft"></fa-icon>
    <fa-icon class="custom-icon fa-fw" [icon]="faArrowRight"></fa-icon>
    <fa-icon class="custom-icon fa-fw" [icon]="faArrowsRotate"></fa-icon>
    <fa-icon class="custom-icon fa-fw" [icon]="faHouse"></fa-icon>
    <fa-icon class="custom-icon fa-fw" [icon]="faInfo"></fa-icon>
    <fa-icon class="custom-icon fa-fw" [icon]="faDownload"></fa-icon>
  </div>
  `,
})
export class App {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faArrowsRotate = faArrowsRotate;
  faHouse = faHouse;
  faInfo = faInfo;
  faDownload = faDownload;
}

bootstrapApplication(App);
