import { Livro } from "./livro";

export class Livros{

    private _livros: Array<Livro> = [];

    public adicionar(livro: Livro): void{
        this._livros.push(livro);
    }

    public exibirLivros(): Livro[]{
        return this._livros;
    }

}