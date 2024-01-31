class paciente {
    constructor(id, nome, dataNascimento, genero, endereco, telefone, email) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.genero = genero;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
    }
}
  
module.exports = paciente;
  