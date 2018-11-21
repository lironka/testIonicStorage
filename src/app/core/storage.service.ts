import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(
    public platform: Platform,
    private nativeStorage: NativeStorage
  ) {}

  async getItem(key: string) {
    await this.platform.ready();
    if (this.platform.is('ios')) {
      try {
        const item = this.nativeStorage.getItem(key);
        return item;
      } catch (error) {
        return error;
      }
    } else {
      return localStorage.getItem(key);
    }
  }

  setItem(key: string, value: string) {
    this.platform.ready().then(() => {
      if (this.platform.is('ios')) {
        this.nativeStorage
          .setItem(key, value + 'from Native Storage')
          .then(() => console.log('Stored item!'), error => console.log(error));
      } else {
        localStorage.setItem(key, value + 'from LocalStorage');
      }
    });
  }
}
