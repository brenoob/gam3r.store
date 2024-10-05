import Especificacoes from "./Especificacoes";
import Precificavel from "./Precificavel";

export default interface Produto extends Precificavel {
    id: number;
    nome: string;
    marca: string;
    imagem: string;
    descricao: string;
    modelo: string;
    videoReview: string;
    nota: number;
    tags: string[];
    especificacoes: Especificacoes;
}