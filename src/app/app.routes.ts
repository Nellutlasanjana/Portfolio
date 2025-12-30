import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' }, 
    { path: 'about', component: AboutComponent },
     { path: 'skills', component: SkillsComponent }, 
     { path: 'projects', component: ProjectsComponent }, 
     { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: 'about' }
];
