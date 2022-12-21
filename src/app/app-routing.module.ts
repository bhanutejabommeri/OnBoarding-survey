import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { MarketingComponent } from './marketing/marketing.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'info' },
  { path: 'info', component: BasicInfoComponent },
  { path: 'market', component: MarketingComponent },
  { path: 'media', component: SocialMediaComponent },
  { path: 'thanks', component: ThanksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
