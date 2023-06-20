/*****************************DOC**************************************
 * Objetivo: Arquivo de tabuada para calcular com base de um multiplicando e um maximo multiplicador
 * Data: 06/02/2023
 * Autor: Vinicius Nunes
 * Versão: 1.0
 * *******************************************************************/

/*****************************INFOS************************************
 * 
 * 
 * 
 * 
 * *******************************************************************/

const tabuada = function (multiplicando: number, maxMultiplicador: number) {
  let tabuada: number = multiplicando
  let contador: number = maxMultiplicador
  let status = true
  let resultado
  let contTabuada = 0 //start da repetição

  if (tabuada == 0 || contador == 0) {
    status = false
  } else {

    while (contTabuada <= contador) {
      resultado = tabuada * contTabuada
      console.log(`${tabuada} x ${contTabuada} = ${resultado}`)
      contTabuada++

    }
  }
  return status
}

tabuada(10, 100)