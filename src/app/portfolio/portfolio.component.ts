import { Component } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  imgs: string[] = [
    'https://routeegy.github.io/startFramework/assets/images/poert1.png',
    'https://routeegy.github.io/startFramework/assets/images/port2.png',
    'https://routeegy.github.io/startFramework/assets/images/port3.png',
    'https://routeegy.github.io/startFramework/assets/images/poert1.png',
    'https://routeegy.github.io/startFramework/assets/images/port2.png',
    'https://routeegy.github.io/startFramework/assets/images/port3.png',
  ];
  imgIndex: number = 0;
  imgSrc: string = '';
  showLightContainer: boolean = false;

  openImg(i: number): void {
    this.imgIndex = i;
    this.imgSrc = this.imgs[this.imgIndex];
    this.showLightContainer = true;
  }

  closeImg(): void {
    this.showLightContainer = false;
  }

  nextImage(): void {
    this.imgIndex = (this.imgIndex + 1) % this.imgs.length;
    this.imgSrc = this.imgs[this.imgIndex];
  }

  prevImage(): void {
    this.imgIndex = (this.imgIndex - 1 + this.imgs.length) % this.imgs.length;
    this.imgSrc = this.imgs[this.imgIndex];
  }

}
