import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Product } from 'src/assets/product';
import {product} from '../../../assets/products';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products!:Product;
  constructor(private route: ActivatedRoute,private router: Router) { }
  likeImage:string = 'https://lh3.googleusercontent.com/proxy/fD0ExUQZbEq5X7uq6HI2l1lK_8qVLnQdDM2KZhv4RRMDjndrAzPGkcpCQ1VhK0j0-mQnFpTWiBtPk2S314qbwEvqTg0-hMgMC8CK-kwg1w-gWy8FLZmMpW4';
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));
    this.products = product.find(products => products.productId === productIdFromRoute && products.categoryId === categoryIdFromRoute);
  }
  share(link:string):void{
    window.open("https://t.me/share/url?url=-&text="+link +"");
  }
  deleteItem():void{
    const productIdFromRoute =Number(this.route.snapshot.paramMap.get('productId'));
    this.products.isRemoved=true;
    this.router.navigate(['categories/'+this.products.categoryId+'/products']);
  }
  likeItem():void{
    this.products.isLiked=!this.products.isLiked;
    if(this.products.isLiked){
      this.products.like++;
      this.likeImage='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/645px-Love_Heart_SVG.svg.png';
    }
    else{
      this.products.like--;
      this.likeImage = 'https://lh3.googleusercontent.com/proxy/fD0ExUQZbEq5X7uq6HI2l1lK_8qVLnQdDM2KZhv4RRMDjndrAzPGkcpCQ1VhK0j0-mQnFpTWiBtPk2S314qbwEvqTg0-hMgMC8CK-kwg1w-gWy8FLZmMpW4';
    }
  }
}
