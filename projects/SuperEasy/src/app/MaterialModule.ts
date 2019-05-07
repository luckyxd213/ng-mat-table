import {MatButtonModule, MatCheckboxModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
      MatSortModule, MatTableModule],
    exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
      MatSortModule, MatTableModule],
  })

export class MaterialModule {

}
