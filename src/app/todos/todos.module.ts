import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosMaterialModule } from './todos-material.module';
import * as fromComponents from './components';
import * as fromContainers from './containers';
@NgModule({
  
  imports: [CommonModule, TodosRoutingModule, TodosMaterialModule],

  declarations: [
    ... fromComponents.components,
    ... fromContainers.containers
  ]
})
export class TodosModule {}
