import { Livros } from "../models/livros";

export class LivrosView{

    private _elemento: Element;

    constructor(seletor: string){
        this._elemento = document.querySelector(seletor);
    }

    public update(modelo: Livros){
        this._elemento.innerHTML = this.templateHTML(modelo);
    }

    public templateHTML(modelo: Livros):string{
        return `

        <table>
            <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Editora</th>
                <th>Ano</th>
            </tr>

            ${modelo.exibirLivros().map(livro =>{

                return `
                    <tr>
                        <td>${livro.titulo}</td>
                        <td>${livro.autor}</td>
                        <td>${livro.editora}</td>
                        <td>${livro.ano}</td>
                    </tr>
                `
            }).join('')}

        </table>                
        `
    }

}