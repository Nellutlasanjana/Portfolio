import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
name = 'Sanjana Nellutla'; 
role = 'Full Stack Developer'; 
description = `Motivated Computer Science & Engineering graduate specializing in IoT from KITS Warangal, currently working at Posidex Technologies as a Trainee Associate Software Engineer. Skilled in Java, Spring Boot, Angular, and cloud technologies with hands-on experience in full-stack development and IoT-based projects.`; 
contact = { phone: '+91-6303241708',
   email: 'nellutlasanjana31@gmail.com', 
   github: 'https://github.com/Nellutlasanjana',
  linkedin: 'https://www.linkedin.com/in/nellutla-sanjana-b2b106230' };
}
