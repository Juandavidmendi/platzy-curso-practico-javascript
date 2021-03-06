//calcular la diferencia salarial
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);
//ordenar salarios
const salariosOrdenados = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);
//devolver true 
function esPar(numerito){
    return (numerito % 2 === 0);
}
//funcion promedio 
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
//funcion para determinar la mitad del arreglo y devolver el promedio
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1 ,personitaMitad2]);
        return mediana;
    }else{
        //false si es impar
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

console.log(
    medianaSalarios(salariosOrdenados)
);