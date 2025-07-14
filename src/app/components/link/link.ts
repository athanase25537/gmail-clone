import { Component, input } from '@angular/core';
import { LinkModel } from '../../models/linkModel';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.html',
  styleUrl: './link.scss'
})
export class Link {
  myLink = input<LinkModel>(new LinkModel('text-muted py-2 px-4', 'Boite de reception', '#'));
}
