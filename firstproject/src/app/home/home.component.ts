import { Component, OnInit } from '@angular/core';

declare var setCarosal;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  img = ["../assets/pic1.jpg","../assets/pic2.jpg","../assets/pic3.jpg"]
  constructor() { }

  ngOnInit(): void {
    setCarosal();
  }


}
