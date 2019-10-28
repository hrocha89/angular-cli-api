import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PessoaService } from '../pessoa/pessoa.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  form: FormGroup;
  sub = false;

  constructor(private fb:FormBuilder, 
              private service:PessoaService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {

    let pessoa = this.route.snapshot.data['pessoa'];

    
    this.form = this.fb.group({
      id : [pessoa.id],
      nome : [pessoa.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      cpf : [pessoa.cpf, [Validators.required , Validators.maxLength(11)]]
    });
  }
 

  hasError(field: string){
    return this.form.get(field).errors;
  }

  onSubmit(){
    this.sub = true;
    console.log(this.form.value);
    
    if(this.form.valid){
      console.log('submit');
      if(this.form.value.id){
        this.service.update(this.form.value).subscribe(
          success => console.log('passou'),
          error => console.log('error'),
          () => console.log('Update Ok')
        );
      }else{
        this.service.creat(this.form.value).subscribe(
          success => console.log('passou'),
          error => console.log('error'),
          () => console.log('Ok')
        );
      }
      
      
    }
  }

}
