import { Injectable } from '@angular/core';
import { ContentModel } from '../models/contentModel';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  contents: ContentModel[] = [
    new ContentModel(true, true, "Google Notification", "Your account security settings have been updated.", "13:05"),
    new ContentModel(false, true, "Upwork Notification", "Your proposal was viewed by the client.", "08:30"),
    new ContentModel(true, false, "Github Alert", "New pull request needs review.", "10:15"),
    new ContentModel(false, false, "System Update", "Your system will restart tonight to install updates.", "02:45"),
    new ContentModel(false, true, "Security Warning", "Unusual login attempt detected on your account.", "22:10"),
    new ContentModel(true, true, "New Job Offer", "A new project matches your skills on Upwork.", "07:50"),
    new ContentModel(false, false, "Promotion", "50% discount on your next purchase, valid until Friday.", "11:20"),
    new ContentModel(true, false, "Client Message", "Hi, I loved your profile. Can we discuss the project?", "09:55"),
    new ContentModel(false, true, "Meeting Reminder", "You have a scheduled meeting at 4 PM.", "15:00"),
    new ContentModel(false, false, "App Notification", "You have unlocked a new achievement.", "17:40"),
    new ContentModel(true, true, "Bank Alert", "A deposit of $500 has been made to your account.", "14:22"),
    new ContentModel(true, false, "Code Review", "Your code was approved and merged into the main branch.", "16:35"),
    new ContentModel(false, false, "Weather Update", "Heavy rain expected this weekend in your area.", "06:10"),
    new ContentModel(false, false, "Flight Status", "Your flight to Paris has been delayed by 2 hours.", "12:00"),
    new ContentModel(true, true, "New Comment", "Someone commented on your post: 'Great work!'", "18:45")
  ];  

  getContents(): ContentModel[] {
    return this.contents;
  }
}
