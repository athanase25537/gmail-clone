import { Component, input } from '@angular/core';
import { LinkModel } from '../../models/linkModel';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.html',
  styleUrl: './link.scss'
})
export class Link {
  myLink = input<LinkModel>(new LinkModel(0, 'fa-solid fa-square', 'Boite de reception', '#'));
}
