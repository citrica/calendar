var getRandomMoney = (min, max) => { // Función que genera valores aleatorios entre un mínimo y máximo
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var createCashBox = (min, max) => { // Crear caja inicial con número de billetes y monedas
    var cash = new Array(14).fill(0);
    for (var i = 0; i < cash.length; i++) {
        cash[i] = getRandomMoney(min, max);
    }
    cash[0] = 0;
    cash[1] = 1;
    return cash;
};

var moneyPaid = () => document.getElementById("input-delivery").value;
var pay = () => document.getElementById("input-total").value;

// Comprobar que el pago es superior o igual al total a pagar
var moneyError = (total, delivered) => {
    if (delivered < total) return true;
}

// Mensaje de error
var errorMessage = () => "El importe entregado es menor que el total a pagar. ¡Paga moroso!";

// Calcular diferencia entre total y los que nos da el cliente
var calculationDifference = (total, delivered) => (delivered - total).toFixed(2);

// Calcular el cambio que debemos dar
var calculateMoney = (change, bill) => {
    var dif = parseInt(change / bill);
    if (dif > 0) change = (change - (bill * dif)).toFixed(2);
    return [change, dif];
}

// Dinero a devolver, teniendo en cuenta si se está cubriendo el pago completo
var moneyRefund = () => {
    if (moneyError(pay(), moneyPaid())) {
        return errorMessage();
    } else {
        return calculationDifference(pay(), moneyPaid());
    }
}

// Calcular el cambio
var calculateChange = (cash, change) => {
    var money = {
        b200: 0,
        b100: 0,
        b50: 0,
        b20: 0,
        b10: 0,
        b5: 0,
        m2: 0,
        m1: 0,
        m50c: 0,
        m20c: 0,
        m10c: 0,
        m5c: 0,
        m2c: 0,
        m1c: 0,
    }
    var result = new Array();
    // Calcular cambio
    if (change >= 200) {
        result = calculateMoney(change, 200);
        console.log(result);
        if (cash[0] >= result[1]) {
            change = result[0];
            money.b200 = result[1];
        }
    }
    if (change >= 100) {
        result = calculateMoney(change, 100);
        if (cash[1] >= result[1]) {
            change = result[0];
            money.b100 = result[1];
        }
    }
    if (change >= 50) {
        result = calculateMoney(change, 50);
        if (cash[2] >= result[1]) {
            change = result[0];
            money.b50 = result[1];
        }
    }
    if (change >= 20) {
        result = calculateMoney(change, 20);
        if (cash[3] >= result[1]) {
            change = result[0];
            money.b20 = result[1];
        }
    }
    if (change >= 10) {
        result = calculateMoney(change, 10);
        if (cash[4] >= result[1]) {
            change = result[0];
            money.b10 = result[1];
        }
    }
    if (change >= 5) {
        result = calculateMoney(change, 5);
        if (cash[5] >= result[1]) {
            change = result[0];
            money.b5 = result[1];
        }
    }
    if (change >= 2) {
        result = calculateMoney(change, 2);
        if (cash[6] >= result[1]) {
            change = result[0];
            money.m2 = result[1];
        }
    }
    if (change >= 1) {
        result = calculateMoney(change, 1);
        if (cash[7] >= result[1]) {
            change = result[0];
            money.m1 = result[1];
        }
    }
    if (change >= 0.50) {
        result = calculateMoney(change, 0.50);
        if (cash[8] >= result[1]) {
            change = result[0];
            money.m50c = result[1];
        }
    }
    if (change >= 0.20) {
        result = calculateMoney(change, 0.20);
        if (cash[9] >= result[1]) {
            change = result[0];
            money.m20c = result[1];
        }
    }
    if (change >= 0.10) {
        result = calculateMoney(change, 0.10);
        if (cash[10] >= result[1]) {
            change = result[0];
            money.m10c = result[1];
        }
    }
    if (change >= 0.05) {
        result = calculateMoney(change, 0.05);
        if (cash[11] >= result[1]) {
            change = result[0];
            money.m5c = result[1];
        }
    }
    if (change >= 0.02) {
        result = calculateMoney(change, 0.02);
        if (cash[12] >= result[1]) {
            change = result[0];
            money.m2c = result[1];
        }
    }
    if (change >= 0.01) {
        result = calculateMoney(change, 0.01);
        if (cash[13] >= result[1]) {
            change = result[0];
            money.m1c = result[1];
        }
    }
    return money;
};

// Lista de resultado por pantalla
var writeResult = (money) => {
    document.getElementById("b200").innerText = "Billetes de 200€ = " + money.b200;
    document.getElementById("b100").innerText = "Billetes de 100€ = " + money.b100;
    document.getElementById("b50").innerText = "Billetes de 50€ = " + money.b50;
    document.getElementById("b20").innerText = "Billetes de 20€ = " + money.b20;
    document.getElementById("b10").innerText = "Billetes de 10€ = " + money.b10;
    document.getElementById("b5").innerText = "Billetes de 5€ = " + money.b5;
    document.getElementById("m2").innerText = "Monedas de 2€ = " + money.m2;
    document.getElementById("m1").innerText = "Monedas de 1€ = " + money.m1;
    document.getElementById("m50c").innerText = "Monedas de 50cents = " + money.m50c;
    document.getElementById("m20c").innerText = "Monedas de 20cents = " + money.m20c;
    document.getElementById("m10c").innerText = "Monedas de 10cents = " + money.m10c;
    document.getElementById("m5c").innerText = "Monedas de 5cents = " + money.m5c;
    document.getElementById("m2c").innerText = "Monedas de 2cents = " + money.m2c;
    document.getElementById("m1c").innerText = "Monedas de 1cents = " + money.m1c;
}

var cashInit = createCashBox(0, 10);
// Mostrar el cálculo del importe a devolver
var result = () => document.getElementById("result").innerText = moneyRefund();
var resultChange = () => writeResult(calculateChange(cashInit, result()));

// Eventos
document.getElementById("button-calulate").addEventListener("click", result);
document.getElementById("button-calulate").addEventListener("click", resultChange);

console.log(cashInit);