import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  albumImg:string='../../../assets/images/album.jpg';
  aboutImg:string='../../../assets/images/social.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
