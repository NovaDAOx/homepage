import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MintComponent } from './mint/mint.component';
import { StakeComponent } from './staking/stake.component';
import { Education } from './education/education.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'mint', component: MintComponent },
  { path: 'stake', component: StakeComponent },
  { path: 'education', component: Education }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
