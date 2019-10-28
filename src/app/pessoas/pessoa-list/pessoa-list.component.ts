import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa/pessoa';
import { PessoaService } from '../pessoa/pessoa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  pessoas : Pessoa[] = [];

  constructor(private pessoaService: PessoaService,
              private router: Router,
              private route: ActivatedRoute){}

  ngOnInit() : void{

    this.pessoaService.list().subscribe(pessoas => {
      console.log(pessoas);
      
      this.pessoas = pessoas
    });

  }
  

  onDelete(id){
    this.pessoaService.delete(id).subscribe(id =>{
      console.log("Excluiu!");
      
    });
    return this.ngOnInit();
  }

}
