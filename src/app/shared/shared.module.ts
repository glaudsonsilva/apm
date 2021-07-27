import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  declarations: [StarComponent, ConvertToSpacesPipe],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    StarComponent,
    ConvertToSpacesPipe,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
