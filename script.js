const character = "# ";
const count = 8;
const rows = [];

// the loop runs 8 times until the condition is re
for(let i = 0; i < count; i = i + 1){
    rows.push(character);
}
 let result = "";
 console.log(result);

 /* use of (for--of) loop
    NB:it itterates over an item in an iterable object &
    temporarily assigns it to a variable
    -This {for...of} loop bellow will iterate through rows array,
    assigning each value to a row variable
    */
for (const row of rows){
    result = result + "\n" + row;
 }
