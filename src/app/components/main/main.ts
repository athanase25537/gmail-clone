import { Component, OnInit } from '@angular/core';
import { HeaderLinks } from "../header-links/header-links";
import { LinkModel } from '../../models/linkModel';
import { HeaderLinkService } from '../../services/header-link-service';
import { CommonModule } from '@angular/common';
import { MainItem } from "../main-item/main-item";
import { ContentModel } from '../../models/contentModel';
import { ContentService } from '../../services/content-service';

@Component({
  selector: 'app-main',
  imports: [CommonModule, HeaderLinks, MainItem],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main implements OnInit {
  headerLinks!: LinkModel[];
  activeId!: number;
  contents!: ContentModel[];

  constructor(
    private headerLinkService: HeaderLinkService,
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.activeId = 0;
    this.headerLinks = this.headerLinkService.getLinks();
    this.contents = this.contentService.getContents();
  }

  toggleActive(id: number)  {
    this.activeId = id;
    return true;
  }
}
