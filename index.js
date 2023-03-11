const yargs = require("yargs");
const colors = require("colors");

let preguntas =["Fecha Inicio \n", "Fecha Término \n"];
let respuestas =[];

function preguntar(indice){
    process.stdout.write(preguntas[indice])
}

process.stdin.on('data', (data)=>{
respuestas.push(data.toString().trim()) 
const fechaInicial = new Date(respuestas[0]);
console.log(fechaInicial)
const fechaFinal = new Date(respuestas[1]);
console.log(fechaFinal)
let diasTrabajados = []

// Recorre el rango de fechas para obtener los días que hay entre dos fechas
for (let fecha = fechaInicial; fecha <= fechaFinal; fecha.setDate(fecha.getDate() + 1)) {
    diasTrabajados.push(fecha.getDay())
    }
    console.log(diasTrabajados)

    const pagos = [
        {dia: "domingo", valorHora: 0, horasTrab: 0},
        {dia: "lunes", valorHora: 7100, horasTrab: 7},
        {dia: "martes", valorHora: 7100, horasTrab: 8},
        {dia: "miércoles", valorHora: 7100, horasTrab: 7},
        {dia: "jueves", valorHora: 7100, horasTrab: 8},
        {dia: "viernes", valorHora: 7100, horasTrab: 7},
        {dia: "sábado", valorHora: 12300, horasTrab: 5}
]

// Recorre los días trabajados y por cada elemento multiplica el valor hora por las horas trabajadas
    for (let i = 0; i < diasTrabajados.length; i++) {
        let multiplicacion = 0;
        if (diasTrabajados[i] === 1 || diasTrabajados[i] === 3 || diasTrabajados[i] === 5) {
          multiplicacion = pagos[diasTrabajados[i]].valorHora * pagos[diasTrabajados[i]].horasTrab;
          diasTrabajados[i] = multiplicacion;
        } else if (diasTrabajados[i] === 2 || diasTrabajados[i] === 4) {
          multiplicacion = pagos[diasTrabajados[i] - 1].valorHora * pagos[diasTrabajados[i] - 1].horasTrab;
          diasTrabajados[i] = multiplicacion;
        } else if (diasTrabajados[i] === 6) {
          multiplicacion = pagos[diasTrabajados[i] - 2].valorHora * pagos[diasTrabajados[i] - 2].horasTrab;
          diasTrabajados[i] = multiplicacion;
        }
      }
      console.log(diasTrabajados);

    // Suma el pago por todos los días trabajados
      let pagosTrabajador = 0;
      for(let i = 0; i < diasTrabajados.length; i++) {
        
        pagosTrabajador += diasTrabajados[i];
       
    }
    console.log(pagosTrabajador)
       
    if(respuestas.length < preguntas.length){
        preguntar(respuestas.length);
       
    }else{
        process.stdout.write(respuestas.toString())
        process.exit()
    }
  
})

preguntar(0);
