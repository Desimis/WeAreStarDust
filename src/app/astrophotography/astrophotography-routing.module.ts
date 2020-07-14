import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AstrophotographyComponent } from './components/astrophotography/astrophotography.component';

const routes: Routes = [
    {
        path: 'astrophotography',
        component: AstrophotographyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AstrophotographyRoutingModule { }