import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { SharedModule } from './shared/shared.module';

let routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];
@NgModule({
  imports: [
    BrowserModule,  
    ProductModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
