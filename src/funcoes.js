function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function divisao(a, b) {
    if (b === 0) {
        throw new Error('Divisão por zero não permitida');
    }
    return a / b;
}

function multiplicacao(a, b) {
    return a * b;
}

module.exports = {
    adicao,
    subtracao,
    divisao,
    multiplicacao
};
