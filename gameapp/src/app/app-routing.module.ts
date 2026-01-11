import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BillingComponent } from './components/billing/billing.component';
import { ActivityComponent } from './components/activity/activity.component';
import { InventoryCategoryComponent } from './components/inventory-category/inventory-category.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { CreateBillComponent } from './components/billing/create-bill/create-bill.component';
import { OffersComponent } from './components/offers/offers.component';
import { ViewHistoryComponent } from './components/view-history/view-history.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'billing', component: BillingComponent, canActivate: [AuthGuard] },
  { path: 'activity', component: ActivityComponent, canActivate: [AuthGuard] },
  { path: 'inventory-category', component: InventoryCategoryComponent, canActivate: [AuthGuard] },
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] },
  { path: 'offers', component: OffersComponent, canActivate: [AuthGuard] },
  { path: 'create-bill/:id', component: CreateBillComponent, canActivate: [AuthGuard] },
  { path:  'view-history/:id', component: ViewHistoryComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
