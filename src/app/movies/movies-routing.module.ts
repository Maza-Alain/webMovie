import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { MovieComponent } from './pages/movie/movie.component';


const routes:Routes = [
    {
        path:'',
        component:HomeComponent,
        children:[
            {
                path:'list',
                component:ListComponent
            },
            {
                path:':id',
                component:MovieComponent
            },
            {
                path:'**',
                redirectTo:'list'
            }

        ]
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class MoviesRoutingModule{}