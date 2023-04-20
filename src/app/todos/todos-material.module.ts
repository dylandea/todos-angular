import { NgModule } from '@angular/core';

const angularMaterialModules: any[] = [];

@NgModule({
  imports: [...angularMaterialModules],
  exports: [...angularMaterialModules],
})
export class TodosMaterialModule {}
