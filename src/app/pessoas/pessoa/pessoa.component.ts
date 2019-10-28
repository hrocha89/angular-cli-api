import { Component, Input } from '@angular/core';

@Component({
    selector : 'ap-pessoa',
    templateUrl : 'pessoa.component.html'
})

export class PessoaComponent {
    @Input() id = '';
    @Input() nome = '';
    @Input() cpf = '';
}