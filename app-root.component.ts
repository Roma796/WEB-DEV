import { Component, OnInit } from '@angular/core';
import {Category} from 'src/assets/category';
import {category} from '../../../assets/categories';
@Component({
  selector: 'app-app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.css']
})
export class AppRootComponent implements OnInit {
  categories!:Category[];
  constructor() { }

  ngOnInit(): void {
    this.categories=category;
  }

}
