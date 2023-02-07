
let numeroUm = 1
let stringUm = "1"
let numeroTrinta = 30
let stringTrinta = 3
let numeroDez = 10
let stringDez = "10"

function primeira(){
if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}}



function segunda() {
    if (typeof numeroTrinta === typeof stringTrinta && numeroTrinta === stringTrinta) {
        console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
    } else if (typeof numeroTrinta != typeof stringTrinta) {
        console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
    } else console.log('As variáveis numeroTrinta e stringTrinta tem mesmo tipo mas não tem o mesmo valor  ');
}


function terceira() {
    if (numeroDez == stringDez && typeof numeroDez != typeof stringDez) {
        console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
    } else {
        console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
    }
}

primeira()
segunda()
terceira()

