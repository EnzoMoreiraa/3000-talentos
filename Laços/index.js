//LAÇOS
//While
let i = 0
while (i < 10) {
    console.log(`Seu número é ${i+1};`) // OU i = 1
    i++
}

const nums =[2, 3, 5, 7, 10]

console.log(`\n`)

//For
for (let i = 0; i < nums.length; i++) {
    console.log(`O ${i+1}° elemneto do seu arrey é: ${nums[i]}`);
    
}
/////////////////
const words = ["Batata", "Cenoura", "Tomate"]
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase()
}

console.log(`\n`, words)