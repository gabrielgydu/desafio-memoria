// Importa o módulo readline para ler a entrada do usuário
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Inicializa variáveis do jogo
let tabuleiro = [];
let linhas = 4;
let colunas = 4;
let cronometro = 180;
let pontuacao = 0;
let cartasViradas = [];
let emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🦁', '🐯', '🐨', '🐸', '🦄', '🦓', '🦌', '🐮', '🐷', '🐽', '🐗', '🐺', '🦝', '🦁', '🐯', '🦒', '🦘', '🦡', '🐾', '🦔', '🦇', '🦦', '🦨', '🦥'];

// Função para embaralhar um array
function embaralhar(array) {
  /* TODO */
  return array;
}

// Função para inicializar o tabuleiro
function inicializarTabuleiro(linhas, colunas) {
  if (true/*TODO*/) {
    throw new Error("Configuração de tabuleiro inválida.");
  }
}

// Função para imprimir o tabuleiro
function imprimirTabuleiro() {
  console.clear();

  // TODO Cabeçalho dinâmico
  // use \t como separador entre as cartas
  // dica: String.fromCharCode(65 + 1)  = A
  //       String.fromCharCode(65 + 2)  = B
  //       String.fromCharCode(65 + 3)  = C
}

// Função assíncrona para virar uma carta
async function virarCarta() {
  rl.question('Digite as coordenadas para virar uma carta (ex., A1): ', async function(coord) {
    try {
      // TODO
    } catch (error) {
      console.error(error.message);
      virarCarta();
    }
  });
}

// Função para verificar se todas as cartas foram viradas
function todasCartasViradas() {
  // retorne true ou false
}

// Função para iniciar o jogo
function iniciarJogo() {
  try {
    inicializarTabuleiro(linhas, colunas);
    imprimirTabuleiro();

    let intervaloDoJogo = setInterval(() => {
      cronometro--;
      if (true /*TODO*/) {
        clearInterval(intervaloDoJogo);
        console.log(`O tempo acabou! Sua pontuação é: ${pontuacao}`);
        rl.close();
      }
      if (true /*TODO*/) {
        console.log(`Parabéns! Você virou todas as cartas. Sua pontuação é: ${pontuacao}`);
        clearInterval(intervaloDoJogo);
        rl.close();
        return;
      }
    }, 1000);

    virarCarta();
  } catch (error) {
    console.error(error.message);
  }
}

// Inicia o jogo
iniciarJogo();
