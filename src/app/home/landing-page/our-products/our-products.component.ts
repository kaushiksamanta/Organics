import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss'],
})
export class OurProductsComponent implements OnInit {
  products: Array<Record<string, string>> = [
    {
      name: 'Fruits',
      imageUrl:
        'https://www.naturalfoodseries.com/wp-content/uploads/2018/02/Oranges-1600x832.jpg',
    },
    {
      name: 'Vegetables',
      imageUrl:
        'https://cdn1.medicalnewstoday.com/content/images/articles/320/320302/a-selection-of-fruits-and-vegetables.jpg',
    },
    {
      name: 'Dry Fruits',
      imageUrl:
        'https://i.ndtvimg.com/i/2017-04/dry-fruits_620x350_81491555866.jpg',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
