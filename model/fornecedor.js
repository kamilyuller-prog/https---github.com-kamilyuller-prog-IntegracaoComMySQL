export class fornecedor {
    constructor(nome, cnpj) {
        this.nome = nome;
        this.cnpj = cnpj;
    }


    validar() {
        if (!this.nome || !this.nome.trim().length < 3) {
            throw new Error("Nome deve ter pelo menos 3 caracteres");
        }

        if (!this.cnpj || !this.cnpj.trim().length < 14) {
            throw new Error("CNPJ deve ter pelo menos 14 caracteres");
        }
    }

    static validarId(id) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error(
                "ID do fornecedor deve ser um número inteiro positivo."
            );
        }
    }
}
