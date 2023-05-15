import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent {
  items = [
    { title: 'Card 1', description: 'Card 1 description', imageUrl: 'https://picsum.photos/500/300/?image=10' },
    { title: 'Card 2', description: 'Card 2 description', imageUrl: 'https://picsum.photos/500/300/?image=11' },
    { title: 'Card 3', description: 'Card 3 description', imageUrl: 'https://picsum.photos/500/300/?image=12' },
    { title: 'Card 4', description: 'Card 4 description', imageUrl: 'https://picsum.photos/500/300/?image=13' },
    { title: 'Card 5', description: 'Card 5 description', imageUrl: 'https://picsum.photos/500/300/?image=14' },
    { title: 'Card 6', description: 'Card 6 description', imageUrl: 'https://picsum.photos/500/300/?image=15' },
    { title: 'Card 7', description: 'Card 1 description', imageUrl: 'https://picsum.photos/500/300/?image=16' },
    { title: 'Card 8', description: 'Card 2 description', imageUrl: 'https://picsum.photos/500/300/?image=17' },
    { title: 'Card 9', description: 'Card 3 description', imageUrl: 'https://picsum.photos/500/300/?image=1a8' },
    { title: 'Card 10', description: 'Card 4 description', imageUrl: 'https://picsum.photos/500/300/?image=19' },
    { title: 'Card 11', description: 'Card 5 description', imageUrl: 'https://picsum.photos/500/300/?image=2s0' },
    { title: 'Card 12', description: 'Card 6 description', imageUrl: 'https://picsum.photos/500/300/?image=21' },
    { title: 'Card 13', description: 'Card 1 description', imageUrl: 'https://picsum.photos/500/300/?image=21' },
    { title: 'Card 14', description: 'Card 2 description', imageUrl: 'https://picsum.photos/500/300/?image=22' },
    { title: 'Card 15', description: 'Card 3 description', imageUrl: 'https://picsum.photos/500/300/?image=23' },
    { title: 'Card 16', description: 'Card 4 description', imageUrl: 'https://picsum.photos/500/300/?image=24' },
    { title: 'Card 17', description: 'Card 5 description', imageUrl: 'https://picsum.photos/500/300/?image=2z5' },
    { title: 'Card 18', description: 'Card 6 description', imageUrl: 'https://picsum.photos/500/300/?image=2b6' }
  ];
}



