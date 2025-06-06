const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-principal");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-reultado");
const textoresultado = document.querySelector(".texto-resultado");

const perguntas =
  alternativas[
  {
    enunciado: crie uma pergunta agora,
    alternativas:
      [iniciar,
        nao iniciar ]
  },

  {
    enunciado: "Pergunta1",
    Alternativas: [
      "Alternativas 1",
      "Alternativa 2"
    ]
  },
  {
    enunciado: "Pergunta1",
    Alternativas: [
      "Alternativas 1",
      "Alternativa 2"
    ]

  },
  {
    enunciado: "Pergunta1",
    Alternativas: [
      "Alternativas 1",
      "Alternativa 2"
    ]

  },
  {
    enunciado: "Pergunta1",
    Alternativas: [
      "Alternativas 1",
      "Alternativa 2"
    ]

  },
  {
    enunciado: "Pergunta1",
    Alternativas: [
      "Alternativas 1",
      "Alternativa 2"
    ]

  }
  ]

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual]
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();