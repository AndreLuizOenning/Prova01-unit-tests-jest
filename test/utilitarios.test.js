const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
    let utilitarios;
    utilitarios = new Utilitarios();



    test('Teste inverter string', () => {
        expect(utilitarios.inverterString('Kelvin')).toBe('nivleK');
    });

    test('contarCaracteres', () => {
        expect(utilitarios.contarCaracteres('Kelvin')).toBe(6);
    });

    test('Teste para Maiusculas', () => {
        expect(utilitarios.paraMaiusculas('Kelvin')).toBe('KELVIN');
    });

    test('Teste para Minusculas', () => {
        expect(utilitarios.paraMinusculas('KELVIN')).toBe('kelvin');
    });

    test('Teste primeira Letra Maiuscula', () => {
        expect(utilitarios.primeiraLetraMaiuscula('kELVIN')).toBe('KELVIN');
    });
    test('Teste somar', () => {
        expect(utilitarios.somar(2,2)).toBe(4);
    });
    test('Teste subtrair', () => {
        expect(utilitarios.subtrair(2,1)).toBe(1);
    }); 
    test('Teste multiplicar', () => {
        expect(utilitarios.multiplicar(2,12)).toBe(24);
    });
    test('Teste dividir', () => {
        expect(utilitarios.multiplicar(24,12)).toBe(2);
    });
    test('Teste ehPar', () => {
        expect(utilitarios.ehPar(2)).toBe(true);
    });
    test('Teste ehPar', () => {
        expect(utilitarios.ehPar(3)).toBe(false);
    });
    test('Teste primeiroElemento', () => {
        expect(utilitarios.primeiroElemento([1,2,3,4,5])).toBe(1);
    });
    test('Teste ultimoElemento', () => {
        expect(utilitarios.ultimoElemento([1,2,3,4,5])).toBe(5);
    });
    test('Teste tamanhoArray', () => {
        expect(utilitarios.tamanhoArray([1,2,3,4,5])).toBe(5);
    });
    test('Teste ordenarArray', () => {
        expect(utilitarios.ordenarArray([1,4,3,2,5])).toBe([1,2,3,4,5]);
    });
    test('Teste inverterArray', () => {
        expect(utilitarios.inverterArray([1,2,3,4,5])).toBe([5,4,3,2,1]);
    });
    test('Teste gerarNumeroAleatorio', () => {

        let teste = utilitarios.gerarNumeroAleatorio(10);
        const isCorrect = teste > 0 && teste <= 10;
        expect(isCorrect).toBe(true);

    });

    test('Teste ehNumero', () => {
        expect(utilitarios.ehNumero(2)).toBe(true);
    });

    test('Teste ehNumero', () => {
        expect(utilitarios.ehNumero(2)).toBe(false);
    });

    test('Teste removerEspacos', () => {
        expect(utilitarios.removerEspacos("Oi estou feliz hoje")).toBe("Oiestoufelizhoje");
    });

    test('Teste repetirTexto', () => {
        expect(utilitarios.repetirTexto("2,12,",5)).toBe("2,12,2,12,2,12,2,12,2,12,");
    });
    test('Teste juntarArray', () => {
        expect(utilitarios.juntarArray([1,2,3,4])).toBe("1,2,3,4");
    });
    test('Teste contarPalavras', () => {
        expect(utilitarios.contarPalavras("Hoje o céu abriu")).toBe(4);
    });
    test('Teste mediaArray', () => {
        expect(utilitarios.mediaArray([1,2,3])).toBe(2);
    });
    test('Teste removerDuplicados', () => {
        expect(utilitarios.removerDuplicados([1, 2, 2, 3, 4, 4, 4])).toBe([1, 2, 3, 4]);
    });
    test('Teste ehPalindromo', () => {
        expect(utilitarios.juntarArray("ovo")).toBe(true);
    });
    test('Teste ehPalindromo', () => {
        expect(utilitarios.juntarArray("ota")).toBe(false);
    });
    test('Teste mesclarObjetos', () => {

        const p1 = { nome: "Ana"};
        const att = { idade: 26, cidade: "Cocal do sul" };

        expect(utilitarios.juntarArray(p1,att)).toBe({ nome: "Ana", idade: 26, cidade: "Cocal do sul" });
    });
    
});
