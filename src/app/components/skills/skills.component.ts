import { Component } from '@angular/core';
import * as data from './skills.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: any = (data as any).default;
}
