import { Component, input } from '@angular/core';
import { LinkModel } from '../../models/linkModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-links',
  imports: [CommonModule],
  templateUrl: './header-links.html',
  styleUrl: './header-links.scss'
})
export class HeaderLinks {
  isActive = input<boolean>(false);
  myLink = input<LinkModel>(new LinkModel(0, 'fa-solid fa-square', 'Boite de reception', '#'));
}
