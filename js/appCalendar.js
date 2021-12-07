var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

var myTeam = [{
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

// 1. Generación aleatoria de la disponibilidad

// Función para seleccionar true o false de forma aleatoria pero con la misma posibilidad
var getRandom = (a, b) => Math.round(Math.random()) ? a : b;

// Función para generar calendario aleatorio de una persona
var personalCalendar = person => {
    for (var i = 0; i < person.availability.length; i++) {
        person.availability[i] = getRandom("Sí", "No");
    };
    return person.availability;
};

// Función para mostrar la agenda de cada persona
var showCalendar = calendar => {
    var cont = 0;
    for (var hour of WORK_HOURS) {
        console.log(hour + ": " + calendar[cont]);
        cont++;
    };
};

//Recorrer el equipo
var myTeamCalendar = (team) => {
    for (var person of team) {
        var oneCalendar = personalCalendar(person);
        console.log("Disponibilidad de " + person.name);
        showCalendar(oneCalendar);
    };
};

// 2. Buscar hueco libre
//Guardar en un array las horas disponible de una persona
var availableHours = (person) => {
    var positions = new Array();
    for (var i = 0; i < person.availability.length; i++) {
        if (person.availability[i] === "Sí") {
            positions.push(i);
        };
    };
    return positions;
};

var myTeamAvailableHours = (team) => {
    var hours = new Array();
    for (var person of team) {
        hours.push(availableHours(person));
    };
    return hours;
};

var availabilityMatches = (hours) => {
    var cont = new Array();
    for (var i = 0; i < hours.length; i++) {
        for (var j = 0; j < hours[i].length; j++) {
            cont.push(hours[i][j]);
        };
    };
    return cont; // Un solo array con todas las posiciones de horas disponibles
};

function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        };
    };
    return count;
};

var meetingTime = (array, team) => {
    var repeatNum = team.length;
    if (countInArray(array, 0) === repeatNum) {
        console.log("Hueco encontrado en el horario 08:00 - 09:00");
    } else if (countInArray(array, 1) === repeatNum) {
        console.log("Hueco encontrado en el horario 09:00 - 10:00");
    } else if (countInArray(array, 2) === repeatNum) {
        console.log("Hueco encontrado en el horario 10:00 - 11:00");
    } else if (countInArray(array, 3) === repeatNum) {
        console.log("Hueco encontrado en el horario 11:00 - 12:00");
    } else if (countInArray(array, 4) === repeatNum) {
        console.log("Hueco encontrado en el horario 12:00 - 13:00");
    } else if (countInArray(array, 5) === repeatNum) {
        console.log("Hueco encontrado en el horario 13:00 - 14:00");
    } else if (countInArray(array, 6) === repeatNum) {
        console.log("Hueco encontrado en el horario 15:00 - 16:00");
    } else if (countInArray(array, 6) === repeatNum) {
        console.log("Hueco encontrado en el horario 16:00 - 17:00");
    } else {
        console.log("Lo siento. No hay hueco disponible en el equipo.");
    };
};

myTeamCalendar(myTeam); // Mostrar por consola el calendario de cada persona del equipo, horas ocupadas y libres
availabilityMatches(myTeamAvailableHours(myTeam));
meetingTime(availabilityMatches(myTeamAvailableHours(myTeam)), myTeam);