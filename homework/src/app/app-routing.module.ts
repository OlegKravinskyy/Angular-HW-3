import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveListComponent } from './directive-list/directive-list.component';
import { DirectiveColorsComponent } from './directive-colors/directive-colors.component';
import { AllPipesComponent } from './all-pipes/all-pipes.component';
import { DeleteElementComponent } from './delete-element/delete-element.component';

const routes: Routes = [
  { path: '', component: DirectiveListComponent },
  { path: 'directiveСolors', component: DirectiveColorsComponent },
  { path: 'allPipes', component: AllPipesComponent },
  { path: 'deleteElement', component: DeleteElementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
