let preguntas =["Fecha Inicio \n", "Fecha Término \n"];
let respuestas =[];

function preguntar(indice){
    process.stdout.write(preguntas[indice])
}

process.stdin.on('data', (data)=>{
respuestas.push(data.toString().trim()) 
    if(respuestas.length < preguntas.length){
        preguntar(respuestas.length);
       
    }else{
        process.stdout.write(respuestas.toString().trim())
        const fechaInicial = new Date(respuestas[0]);
        const fechaFinal = new Date(respuestas[1]);

        const pagos = [
          {dia: "domingo", valorHora: 0, horasTrab: 0},
          {dia: "lunes", valorHora: 7100, horasTrab: 7},
          {dia: "martes", valorHora: 7100, horasTrab: 8},
          {dia: "miércoles", valorHora: 7100, horasTrab: 7},
          {dia: "jueves", valorHora: 7100, horasTrab: 8},
          {dia: "viernes", valorHora: 7100, horasTrab: 7},
          {dia: "sábado", valorHora: 12300, horasTrab: 5}
  ]
  
        let diasTrabajados = []
        let sumHrsSemana = 0;
        let sumHrsSab = 0;
        let pagoSemana = 0;
        let pagoSab = 0;

// Recorre el rango de fechas para obtener los días que hay entre dos fechas
for (let fecha = fechaInicial; fecha <= fechaFinal; fecha.setDate(fecha.getDate() + 1)) {
    diasTrabajados.push(fecha.getDay())
    }
    
    
// Recorre los días trabajados y por cada elemento multiplica el valor hora por las horas trabajadas

    for (let i = 0; i < diasTrabajados.length; i++) {
          if (diasTrabajados[i] !=  6) {
              sumHrsSemana += pagos[diasTrabajados[i]].horasTrab;
              
          } else {
              sumHrsSab += pagos[diasTrabajados[i]].horasTrab;
          }
      }
      
      pagoSemana = sumHrsSemana * pagos[5].valorHora;
      pagoSab = sumHrsSab * pagos[6].valorHora;
      
   
      process.stdout.write(`Cantidad Horas Lu-Vi: ${sumHrsSemana} \n`);
      process.stdout.write(`Valor Hora: ${pagos[5].valorHora} \n`);
      process.stdout.write(`Subtotal Lu-Vi : ${pagoSemana} \n \n`);
      process.stdout.write(`Cantidad Horas Sáb: ${sumHrsSab} \n`);
      process.stdout.write(`Valor Hora: ${pagos[6].valorHora} \n`);
      process.stdout.write(`Subtotal Sáb: ${pagoSab} \n \n`);
      process.stdout.write(`Total a pagar: ${pagoSemana} + ${pagoSab} = ${pagoSemana + pagoSab}`);
        process.exit()
    }
  
})

preguntar(0);
