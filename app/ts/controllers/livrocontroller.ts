import { Livro } from "../models/livro";
import { Livros } from "../models/livros";
import { LivrosView } from "../views/livrosview";

export class LivroController {
    private _inputTitulo:  HTMLInputElement;
    private _inputAutor:  HTMLInputElement;
    private _inputEditora:  HTMLInputElement;
    private _inputAno:  HTMLInputElement;

    private _livros: Livros;
    private _livrosView: LivrosView;


constructor (){
    this._inputTitulo = <HTMLInputElement>document.querySelector("#titulo")
    this._inputAutor = <HTMLInputElement>document.querySelector("#autor")
    this._inputEditora = <HTMLInputElement>document.querySelector("#editora")
    this._inputAno = <HTMLInputElement>document.querySelector("#ano")

    this._livros = new Livros;

    this._livrosView = new LivrosView("#livrosview");
    this._livrosView.update(this._livros);

}
    public Cadastrar(event: Event){
        event.preventDefault()
        
        let livro = new Livro(this._inputTitulo.value, this._inputAutor.value, this._inputEditora.value, parseInt(this._inputAno.value)
        )
        this._livros.adicionar(livro);

        this._livrosView.update(this._livros);

    }
}
