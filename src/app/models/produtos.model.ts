export class Produtos{
    constructor(
        public cod?:number, 
        public preco?:number, 
        public qtd?:number, 
        public categoria?:string, 
        public descricao?:string, 
        public regAnvisa?:string, 
        public controlado?:boolean, 
        public codGrupo?:number) { }
}