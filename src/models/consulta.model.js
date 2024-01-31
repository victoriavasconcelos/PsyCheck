class consulta {
    constructor(id, idPsicologo, idPaciente, dataHoraConsulta, status, observacoes, descricaoProgresso, avaliacaoEstadoAtual) {
      this.id = id;
      this.idPsicologo = idPsicologo;
      this.idPaciente = idPaciente;
      this.dataHoraConsulta = dataHoraConsulta;
      this.status = status;
      this.observacoes = observacoes;
      this.descricaoProgresso = descricaoProgresso;
      this.avaliacaoEstadoAtual = avaliacaoEstadoAtual;
    }
  }
  
module.exports = consulta;
  