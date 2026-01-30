import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Recipes } from './recipes/recipes';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Register } from './register/register';
import { UserCollection } from './user-collection/user-collection';
import { UserProfile } from './user-profile/user-profile';
import { ViewRecipe } from './view-recipe/view-recipe';
import { Pnf } from './pnf/pnf';

export const routes: Routes = [
  // lazy loading
  {
    path:'admin', loadChildren:()=>import('./admin/admin-module').then(module=>module.AdminModule)

  },
    // home
    {
        path:'',component:Home,title:"Home"
    },
    // recipes
      {
        path:'recipes',component:Recipes,title:"Recipes"
    },
      // about
      {
        path:'about',component:About,title:"About"
    },
      // contact
      {
        path:'contact',component:Contact,title:"Contact"
    },
        // login
      {
        path:'login',component:Login,title:"Login"
    },
        // register
      {
        path:'register',component:Register,title:"Register"
    },
         // collection
      {
        path:'user/collection',component:UserCollection,title:"Collection"
    },
         // profile
   {
        path:'user/profile',component:UserProfile,title:"Profile"
    },
          // view-recipe
   {
        path:'recipes/:id/view',component:ViewRecipe,title:"Recipe"
    },
            // pnf
   {
        path:'**',component:Pnf,title:"Page Not Found"
    },
];
