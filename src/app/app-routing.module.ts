import { ProduitGuard } from './produit.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NgModule } from '@angular/core';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path: "produits", component : ProduitsComponent},
  {path : "add-produit", component : AddProduitComponent, canActivate:[ProduitGuard]},{ path: "", redirectTo: "produits", pathMatch: "full" },
{path: "updateProduit/:id", component: UpdateProduitComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
