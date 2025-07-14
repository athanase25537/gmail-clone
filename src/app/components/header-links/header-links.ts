import { Component, input } from '@angular/core';
import { Link } from "../link/link";
import { LinkModel } from '../../models/linkModel';

@Component({
  selector: 'app-header-links',
  imports: [Link],
  templateUrl: './header-links.html',
  styleUrl: './header-links.scss'
})
export class HeaderLinks {
  myLink = input<LinkModel>(new LinkModel(0, 'fa-solid fa-square', 'Boite de reception', '#'));
}
