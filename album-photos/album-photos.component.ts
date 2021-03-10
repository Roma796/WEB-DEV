import { Component, OnInit } from '@angular/core';
import {Photo} from '../../models';
import {AlbumService} from '../../albums.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos:Photo[];
  format:boolean;
  constructor(private albumsService: AlbumService,
    private route: ActivatedRoute,
    private location: Location) {this.format=true;}

  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos() {
    this.albumsService.getPhotos(+this.route.snapshot.paramMap.get('albumId')).subscribe((photos) => {
      this.photos = photos;
    });
  }
  goBack() {
    this.location.back();
  }
  changeImgSize(){
    this.format=!this.format;
  }
  
}
