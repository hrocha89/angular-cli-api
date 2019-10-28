import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Resolve } from '@angular/router';
import { Pessoa } from '../pessoa/pessoa';
import { PessoaService } from '../pessoa/pessoa.service';


@Injectable({
    providedIn: 'root'
})
export class PessoaResolverGuard implements Resolve<Pessoa>{

    constructor(private service: PessoaService){

    }

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Observable<Pessoa>  {
        if(route.params && route.params['id']){
            return this.service.byId(route.params['id']);
        }

        return of({
            id : null,
            nome : null,
            cpf : null
        });
    }
}