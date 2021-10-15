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

myTeamCalendar(myTeam);