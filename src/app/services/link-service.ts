import { Injectable } from '@angular/core';
import { LinkModel } from '../models/linkModel';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  links: LinkModel[] = [
    new LinkModel(0, 'fa-regular fa-square', 'Boite de reception', '#'),
    new LinkModel(1, 'fa-regular fa-star', 'Messages suivis', '#'),
    new LinkModel(2, 'fa-regular fa-hourglass', 'En attente', '#'),
    new LinkModel(3, 'fa-regular fa-envelope', 'Messages envoyes', '#'),
    new LinkModel(4, 'fa-regular fa-file', 'Brouillon', '#'),
    new LinkModel(5, 'fa-solid fa-angle-down', 'Plus', '#'),
  ]

  getLinks(): LinkModel[] {
    return this.links;
  }
}
