const character = "# ";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount){
    return character.repeat(rowNumber);
}

// the loop runs 8 times until the condition is re
for(let i = 0; i < count; i = i + 1){
    rows.push(character); 
    character.repeat(i+1); // use of .repeat() method
    /*
     The above method accepts a number as an argument, specifying the number
      of times to repeat the target string. For example, using .repeat()
       to generate the string "Code! Code! Code!"
    */
    
}
 let result = "";
 console.log(result);

 /* use of (for--of) loop
    NB:it itterates over an item in an iterable object &
    temporarily assigns it to a variable
    -This {for...of} loop bellow will iterate through rows array,
    assigning each value to a row variable */

for (const row of rows){
    result = result + "\n" + row;
 }
