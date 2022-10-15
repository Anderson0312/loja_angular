import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [   
    
  ]
})
export class CarouselComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJWXN3va2WU3Uhu1kEhC8hU8DqH-A4KY_fA&usqp=CAU',
    };
    this.slides[1] = {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX635dMrXFhpt_S62522G1Qk-QurDdMdqOeA&usqp=CAU',
    }
    this.slides[2] = {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX635dMrXFhpt_S62522G1Qk-QurDdMdqOeA&usqp=CAU',
    }
  }

}
