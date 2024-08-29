const { adicao, subtracao, divisao, multiplicacao } = require('../src/funcoes');

test('testando adição', () => {
    expect(adicao(1, 2)).toBe(3);
});

test('testando subtração', () => {
    expect(subtracao(2, 2)).toBe(0);
    expect(subtracao(5, 3)).toBe(2);
});

test('testando divisão', () => {
    expect(divisao(4, 2)).toBe(2);
    expect(divisao(9, 3)).toBe(3);

    // Testando a divisão por zero
    expect(() => divisao(1, 0)).toThrow('Divisão por zero não permitida');
});

test('testando multiplicação', () => {
    expect(multiplicacao(2, 2)).toBe(4);
    expect(multiplicacao(3, 5)).toBe(15);
});
