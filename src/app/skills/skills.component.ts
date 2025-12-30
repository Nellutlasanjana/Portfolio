import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
skills = [ 'Java', 'Spring Boot 3', 'Angular 16', 'SQL', 'IoT', 'AI & ML' ];
}
