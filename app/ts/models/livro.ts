export class Livro{

    constructor(
        private _titulo:string,
        private _autor: string,
        private _editora: string,
        private _ano: number
        ){ }

       public get titulo() : string {
           return this._titulo;
       }

       public get autor() : string {
        return this._autor;
       }

        public get editora() : string {
            return this._editora;
        }

        public get ano() : number {
            return this._ano;
        }
}