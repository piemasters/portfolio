import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { LightboxModule } from 'ngx-lightbox';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './project/project.component';
import { CustomPipesModule } from '../../shared/pipes/custom-pipes.module';
import { projectsReducer } from '../../store/projects/projects.reducers';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    ProjectsRoutingModule,
    CommonModule,
    CustomPipesModule,
    NgxPaginationModule,
    LightboxModule,
    StoreModule.forFeature('projects', projectsReducer)
  ],
  bootstrap: [ProjectsComponent]
})
export class ProjectsModule {}
