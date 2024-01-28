import { Component } from '@angular/core';
import * as data from './projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: any = (data as any).default;
}
