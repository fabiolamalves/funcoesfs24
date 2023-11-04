let altura = 0;
let maiorAltura = Number.MIN_VALUE;
let menorAltura = Number.MAX_VALUE;

for (let i = 1; i < 16; i++) {
    altura = +prompt("digite sua altura, usando . para separar");

    if (altura > maiorAltura) {
        maiorAltura = altura;
    }

    if (altura < menorAltura) {
        menorAltura = altura;
    }
}

alert(maiorAltura);
alert(menorAltura);