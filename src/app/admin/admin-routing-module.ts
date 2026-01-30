import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AdminDownloadlist } from './admin-downloadlist/admin-downloadlist';
import { AdminUserlist } from './admin-userlist/admin-userlist';
import { AdminRecipelist } from './admin-recipelist/admin-recipelist';
import { AdminManageRecipe } from './admin-manage-recipe/admin-manage-recipe';
import { AdminFeedbacklist } from './admin-feedbacklist/admin-feedbacklist';

const routes: Routes = [
  // dashboard
  {
    path:'', component:AdminDashboard, title:"Dashboard"
  },
  {
     path:'downloads', component:AdminDownloadlist, title:"Downloads"

  },
  {
     path:'users', component:AdminUserlist, title:"users"

  },
  {
     path:'feedbacks', component:AdminFeedbacklist, title:"feedbacks"

  },
  {
     path:'recipes', component:AdminRecipelist, title:"Recipes"
 
  },
  {
    path:'recipes/add', component:AdminManageRecipe, title:"Add recipe"

  },
  {
    path:'recipes/:id', component:AdminManageRecipe, title:"Edit recipe"
 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
