function calcularCombinação() {
    var n = parseInt(document.getElementById("n").value);
    var k = parseInt(document.getElementById("k").value);

    var combinacao = combinação(n, k);

    document.getElementById("resultado").innerHTML = "Número de combinações: " + combinacao;
}

function fatorial(num) {
    if (num === 0 || num === 1)
        return 1;
    else
        return num * fatorial(num - 1);
}

function combinação(n, k) {
    if (n < k) {
        return "n deve ser maior ou igual a k";
    }

    var resultado = fatorial(n) / (fatorial(k) * fatorial(n - k));

    return resultado;
}
