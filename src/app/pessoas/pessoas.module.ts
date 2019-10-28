import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';


@NgModule({
    declarations: [
        PessoaComponent, 
        PessoaListComponent, 
        PessoaFormComponent
    ],
    imports:[
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class PessoasModule{}