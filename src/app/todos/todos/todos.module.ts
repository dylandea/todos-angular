import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosMaterialModule } from './todos-material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TodosRoutingModule, TodosMaterialModule],
})
export class TodosModule {}
