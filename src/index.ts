let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese el numero de base";
rotulo2.innerHTML = "Ingrese el exponente";

btnEnviar.addEventListener("click", () => {
  let potenciaNumero = () => {
    let base: number = Number(dato1.value);
    let exponente: number = Number(dato2.value);
    let numero: number = 1;
    if (exponente === 0) {
      return 1;
    } else {
      for (numero = 1; numero <= exponente; numero++);
      numero = numero * base;
    }
    return numero;
  };
});
potenciaNumero();
