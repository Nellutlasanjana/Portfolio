import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
projects = [{ 
  title: 'CPMS: Client Project Management System',
   year: '2025',
    tech: 'Spring Boot, Angular',
    desc: 'Built a system to manage client, project, and user details. Worked on backend and Angular screens.' },
     {
       title: 'Hand Gesture Recognition using ML',
        year: '2025', tech: 'ML - CNN Algorithm',
         desc: 'Converted gestures into text-to-speech for improved communication.' }, 
         { title: 'Smart Aquaponics System',
           year: '2024',
            tech: 'IoT - LM35, PH sensor, Servo Motor',
   desc: 'Integrated IoT with ThingSpeak cloud for cultivating fishes and plants simultaneously with alerts.' } ];
}
