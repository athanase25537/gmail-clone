import { Injectable } from '@angular/core';
import { LinkModel } from '../models/linkModel';

@Injectable({
  providedIn: 'root'
})
export class HeaderLinkService {
  links: LinkModel[] = [
      new LinkModel(0, 'fa-regular fa-square', 'Principale', '#'),
      new LinkModel(1, 'fa-regular fa-square-check', 'Promotions', '#'),
      new LinkModel(2, 'fa-regular fa-user', 'Reseaux soci...', '#'),
      new LinkModel(3, 'fa-solid fa-info', 'Notifications', '#'),
    ]
  
    getLinks(): LinkModel[] {
      return this.links;
    }
}
