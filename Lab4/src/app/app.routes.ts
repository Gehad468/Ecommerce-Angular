import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './card/card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        component:ProductsComponent,
        title:"Products Page"
    },
    {
        path: 'login',
        component:LoginComponent,
        title:"Login Page"

    },
    {
        path: 'register',
        component:RegisterComponent,
        title:"Register Page"

    },
    {
        path: 'card',
        component:CardComponent
        ,
        title:"Card Page"
    },
    {
        path: "details/:id",
        component:DetailsComponent,
        title:"Details"
    },
    {
        path: "**",
        component:NotFoundComponent,
        title:"404 Page"
    }

];
