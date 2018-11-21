import { Component, OnInit } from '@angular/core';
import { StorageService } from '../core/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  myStorage;

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.storageService.setItem('my-key', 'My info... ');
    this.myStorage = this.storageService.getItem('my-key');
  }
}
