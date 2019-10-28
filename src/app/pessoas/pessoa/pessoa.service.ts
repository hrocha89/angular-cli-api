import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';

@Injectable({ providedIn: 'root' })
export class PessoaService{

    constructor(private http : HttpClient){}

    list(){
        return this.http.get<Pessoa[]>('api/pessoa');
    }

    creat(pessoa){
        return this.http.post('api/pessoa', pessoa);
    }

    byId(id){
        return this.http.get<Pessoa>('api/pessoa/'+id);

    }

    update(pessoa){
        return this.http.put('api/pessoa/'+pessoa.id, pessoa);
    }

    delete(id){
        return this.http.delete('api/pessoa/'+id);
    }
}