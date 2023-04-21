import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosMaterialModule } from './todos-material.module';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { FormsModule } from '@angular/forms';
@NgModule({
  
  imports: [FormsModule, CommonModule, TodosRoutingModule, TodosMaterialModule],

  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ]
})
export class TodosModule {}
