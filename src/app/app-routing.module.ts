import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
    {
        path:'movies',
        loadChildren: () => import ('./movies/movies.module').then(m=>m.MoviesModule)
    },
    {
        path: '404',
        component: ErrorPageComponent
    },
    {
        path:'**',
        redirectTo: '404'
    },
    
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule{}