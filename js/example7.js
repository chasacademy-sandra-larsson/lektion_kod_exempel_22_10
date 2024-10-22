// Rensa upp en CSV-sträng (komma-separerad sträng)
// Exampel: "mjölk, papper ,   ost , ägg" => "mjölk, papper, ost, ägg"

// Metoder: 
// string.split(",") - splittar en sträng till en array vid ","
// string.join(" ") - slår ihop en array till en sträng med delare " "

const csvText = "mjölk, papper ,   ost , ägg";
// Delar arrayen efter varje komma ,
const words = csvText.split(",")
console.log(csvText);
console.log(words);


// trimmar varje ord - tar bort whitespace före och efter
for(let i = 0; i < words.length; i++) {
     words[i] = words[i].trim();
}

// Man kan använda mao() som vi ska lära oss senare
// const mappedWords = words.map(function(item) {
//   return item.trim();
// })


// Slå ihop arrayen till sträng igen
const cleanedWords = words.join(", ");
//const cleanedWords = mappedWords.join(", ");
console.log(cleanedWords);

