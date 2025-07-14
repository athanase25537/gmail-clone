import { LinkService } from './../../services/link-service';
import { Component, OnInit } from '@angular/core';
import { Link } from "../link/link";
import { LinkModel } from '../../models/linkModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aside',
  imports: [Link, CommonModule],
  templateUrl: './aside.html',
  styleUrl: './aside.scss'
})
export class Aside implements OnInit {
  links!: LinkModel[];
  activeId!: number;

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.links = this.linkService.getLinks();
    this.activeId = 0;
  }

  toggleActive(id: number)  {
    this.activeId = id;
  }
}
