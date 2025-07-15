import { Component, input } from '@angular/core';
import { LinkModel } from '../../models/linkModel';

@Component({
  selector: 'app-header-links',
  imports: [],
  templateUrl: './header-links.html',
  styleUrl: './header-links.scss'
})
export class HeaderLinks {
  myLink = input<LinkModel>(new LinkModel(0, 'fa-solid fa-square', 'Boite de reception', '#'));
}
