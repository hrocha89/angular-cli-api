import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaListComponent } from './pessoas/pessoa-list/pessoa-list.component';
import { PessoaFormComponent } from './pessoas/pessoa-form/pessoa-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PessoaResolverGuard } from './pessoas/guards/pessoa-resolver.guards';

const routes: Routes = [
  { path: 'pessoa', component: PessoaListComponent },
  { path: 'novo', component: PessoaFormComponent ,
    resolve:{
      pessoa: PessoaResolverGuard
    }
  },
  { path:  'edita/:id', component : PessoaFormComponent , 
    resolve:{
      pessoa: PessoaResolverGuard
    }
  },
  { path: '**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
