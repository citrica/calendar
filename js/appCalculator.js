/* Función que genera valores aleatorios entre un mínimo y máximo */
var getRandomMoney = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* Crear caja inicial con número de billetes y monedas aleatorio*/
var createCashBox = (min, max) => {
    var cash = new Array(14).fill(0);
    for (var i = 0; i < cash.length; i++) {
        cash[i] = getRandomMoney(min, max);
    }
    return cash;
};

var moneyPaid = () => document.getElementById("input-delivery").value; // Dinero a pagar
var pay = () => document.getElementById("input-total").value; // Dinero pagado

/* Comprobar que el pago es superior o igual al total a pagar */
var moneyError = (total, delivered) => {
    if (delivered < total) return true;
}

/* Mensaje de error */
var errorMessage = () => "El importe entregado es menor que el total a pagar. ¡Paga moroso!";
/* Calcular diferencia entre total y los que nos da el cliente */
var calculationDifference = (total, delivered) => (delivered - total).toFixed(2);
/* Calcular el cambio que debemos dar */
var calculateMoney = (change, bill, numHave) => {
    var info = {
        newChange: change,
        numHave: numHave,
        numReturn: 0,
    }
    var numNeed = parseInt(info.newChange / bill);
    if (info.numHave >= numNeed) {
        info.newChange = (info.newChange - (bill * numNeed)).toFixed(2);
        info.numReturn = numNeed;
        info.numHave = info.numHave - numNeed;
    } else {
        info.newChange = (info.newChange - (bill * info.numHave)).toFixed(2);
        info.numReturn = info.numHave;
        info.numHave = 0;
    }
    return info;
}

/* Dinero total a devolver, teniendo en cuenta si se está cubriendo el pago completo */
var moneyRefund = () => {
    if (moneyError(pay(), moneyPaid())) {
        return errorMessage();
    } else {
        return calculationDifference(pay(), moneyPaid());
    }
}

/* Calcular cambio */
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
    var result = new Array(3);
    if (change >= 200 && cash[0] > 0) {
        result = calculateMoney(change, 200, cash[0]);
        change = result.newChange;
        cash[0] = result.numHave;
        money.b200 = result.numReturn;
    }
    if (change >= 100 && cash[1] > 0) {
        result = calculateMoney(change, 100, cash[1]);
        change = result.newChange;
        cash[1] = result.numHave;
        money.b100 = result.numReturn;
    }
    if (change >= 50 && cash[2] > 0) {
        result = calculateMoney(change, 50, cash[2]);
        change = result.newChange;
        cash[2] = result.numHave;
        money.b50 = result.numReturn;
    }
    if (change >= 20 && cash[3] > 0) {
        result = calculateMoney(change, 20, cash[3]);
        change = result.newChange;
        cash[3] = result.numHave;
        money.b20 = result.numReturn;
    }
    if (change >= 10 && cash[4] > 0) {
        result = calculateMoney(change, 10, cash[4]);
        change = result.newChange;
        cash[4] = result.numHave;
        money.b10 = result.numReturn;
    }
    if (change >= 5 && cash[5] > 0) {
        result = calculateMoney(change, 5, cash[5]);
        change = result.newChange;
        cash[5] = result.numHave;
        money.b5 = result.numReturn;
    }
    if (change >= 2 && cash[6] > 0) {
        result = calculateMoney(change, 2, cash[6]);
        change = result.newChange;
        cash[6] = result.numHave;
        money.m2 = result.numReturn;
    }
    if (change >= 1 && cash[7] > 0) {
        result = calculateMoney(change, 1, cash[7]);
        change = result.newChange;
        cash[7] = result.numHave;
        money.m1 = result.numReturn;
    }
    if (change >= 0.5 && cash[8] > 0) {
        result = calculateMoney(change, 0.5, cash[8]);
        change = result.newChange;
        cash[8] = result.numHave;
        money.m50c = result.numReturn;
    }
    if (change >= 0.2 && cash[9] > 0) {
        result = calculateMoney(change, 0.2, cash[9]);
        change = result.newChange;
        cash[9] = result.numHave;
        money.m20c = result.numReturn;
    }
    if (change >= 0.1 && cash[10] > 0) {
        result = calculateMoney(change, 0.1, cash[10]);
        change = result.newChange;
        cash[10] = result.numHave;
        money.m10c = result.numReturn;
    }
    if (change >= 0.05 && cash[11] > 0) {
        result = calculateMoney(change, 0.05, cash[11]);
        change = result.newChange;
        cash[11] = result.numHave;
        money.m5c = result.numReturn;
    }
    if (change >= 0.02 && cash[12] > 0) {
        result = calculateMoney(change, 0.02, cash[12]);
        change = result.newChange;
        cash[12] = result.numHave;
        money.m2c = result.numReturn;
    }
    if (change >= 0.01 && cash[13] > 0) {
        result = calculateMoney(change, 0.01, cash[13]);
        change = result.newChange;
        cash[13] = result.numHave;
        money.m1c = result.numReturn;
    }
    if (change != 0.00) {
        console.log(change)
        document.getElementById("result-change").innerText = "¡FALTA DINERO EN CAJA PARA DEVOLVER!";
    }
    console.log(cash); // Array que muestra cómo queda la caja tras dar el cambio
    return writeResult(money);
};

/* Lista de resultado por pantalla */
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

/* Crear caja con cambio de forma aleatoria */
var cashInit = createCashBox(0, 5); // A modo de ejemplo, se crea caja con efectivo que tiene disponible entre 1 y 5 unidades de cada billete/moneda
/* Mostrar el cálculo del importe a devolver */
var result = () => document.getElementById("result").innerText = moneyRefund();
var resultChange = () => calculateChange(cashInit, result());
console.log(cashInit); // Array para ver en consola el número de billetes y monedas de cada caso

/* Eventos */
document.getElementById("button-calulate").addEventListener("click", result);
document.getElementById("button-calulate").addEventListener("click", resultChange);