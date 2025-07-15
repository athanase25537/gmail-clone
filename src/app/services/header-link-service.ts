import { Injectable } from '@angular/core';
import { LinkModel } from '../models/linkModel';

@Injectable({
  providedIn: 'root'
})
export class HeaderLinkService {
  links: LinkModel[] = [
      new LinkModel(0, 'fa-regular fa-square', 'Principale', '#'),
      new LinkModel(1, 'fa-regular fa-square-check', 'Promotions', '#', "1 nouveau", "Pinterest-Education for..."),
      new LinkModel(2, 'fa-regular fa-user', 'Reseaux soci...', '#', '12 nouveaux', "Marcus - Nouvelle invita..."),
      new LinkModel(3, 'fa-solid fa-info', 'Notifications', '#', '3 nouveaux', 'Linkedin Job Alerts - "Machine...'),
    ]
  
    getLinks(): LinkModel[] {
      return this.links;
    }
}
