var tentativas = 3;
var i = 0;
var pontos = 0;
const Pokemon = [
  ["arcanine", "css//Arcanine.png"],
  ["bulbasaur", "css//Bulbasaur.png"],
  ["charmander", "css//Charmander.png"],
  ["charizard", "css//Charizard.png"],
  ["beedrill", "css//Beedrill.png"],
  ["butterfree", "css//Butterfree.png"],
  ["diglett", "css//Diglett.png"],
  ["jigglypuff", "css//Jigglypuff.png"],
  ["meowth", "css//Meowth.png"],
  ["pidgeotto", "css//Pidgeotto.png"],
  ["pikachu", "css//Pikachu.png"],
  ["psyduck", "css//Psyduck.png"],
  ["zubat", "css//Zubat.png"],
];

function enter(event) {
  var x = event.keyCode;

  if (x == 13) {
    confirmar();
    return false;
  }
}

function confirmar() {
  var nome = document.getElementById("typeField").value;
  nome.toLowerCase();

  if (nome == Pokemon[i][0]) {
    pontos = pontos + 10;
    document.getElementById("resultado").innerHTML =
      "Você acertou!" + " Tentativas: " + tentativas + " Pontos: " + pontos;
    i++;

    if (Pokemon[i] && Pokemon[i][1]) {
      document.getElementById("pokedex").src = Pokemon[i][1];
      document.getElementById("typeField").value = "";
    } else {
      document.getElementById("resultado").innerHTML =
        "Acabou os pokémons,Voce Ganhou eba!";
      document.getElementById("typeField").disabled = true;
      document.getElementById("button").disabled = true;
      document.getElementById("skip").disabled = true;
      document.getElementById("typeField").value = "";
    }
  } else {
    tentativas--;
    document.getElementById("resultado").innerHTML =
      "Você errou!" + " Tentativas: " + tentativas + " Pontos: " + pontos;
    document.getElementById("typeField").value = "";
  }

  if (tentativas == 0) {
    document.getElementById("typeField").disabled = true;
    document.getElementById("button").disabled = true;
    document.getElementById("skip").disabled = true;
    document.getElementById("resultado").innerHTML =
      "Você perdeu todas suas tentativas! Recarregue a página para tentar novamente.";
  }
}

function pulo() {
  if (pontos >= 40) {
    i++;
    pontos = pontos - 40;
    document.getElementById("resultado").innerHTML =
      "Você skipou! Pontos: " + pontos;
    if (Pokemon[i] && Pokemon[i][1]) {
      document.getElementById("pokedex").src = Pokemon[i][1];
      document.getElementById("typeField").value = "";
    } else {
      document.getElementById("resultado").innerHTML =
        "Acabou os pokémons,Voce Ganhou eba!";
      document.getElementById("typeField").disabled = true;
      document.getElementById("button").disabled = true;
      document.getElementById("skip").disabled = true;
      document.getElementById("typeField").value = "";
    }
  } else {
    document.getElementById("resultado").innerHTML =
      "Você não possui pontos suficientes!";
  }
}
