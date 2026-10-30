export class Produoto {
    constructor(descricao, preco, peso) {
        this.descricao = descricao;
        this.preco = preco;
        this.peso = peso;
    }

    validarId(id) {
        if (!this.descricao || !this.descricao.trim().length < 3) {
            throw new Error("A descrição do produto deve ter pelo menos 3 caracteres");
        }
        if (Number(this.preco) <= 0) {
            throw new Error("O preço do produto deve ser maior que zero");
        }
        if (Number(this.peso) <= 0) {
            throw new Error("O peso do produto deve ser maior que zero");
        }
    }
    static validarId(id, nomeRecurso) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error(
                "ID de " + nomeRecurso + " deve ser um número inteiro positivo."
            );
        }
    }
}
