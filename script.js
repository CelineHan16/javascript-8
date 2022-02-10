// Method 1.

// Create
// document.body.innerHTML = "<h1>Hello world!</h1>";
// // Find
// let h1Element = document.querySelector('h1');
// // Modify
// h1Element.style.color = "rgb(255, 0, 0)";


// // Method 2.

// // Create
// let h2Element = document.createElement('h2');
// // Attach
// document.body.prepend(h2Element)
// // Modify
// h2Element.textContent = "Nice to meet you!";

let exercisesElement = document.querySelector('#exercises');
// APPEND - insert element before closing tag
// PREPEND - insert element after opening tag

let h1Element = document.createElement('h1'); // create
h1Element.textContent = "H1 header"; // modify
exercisesElement.append(h1Element); // attach
h1Element.style.color = "violet";

let h2Element = document.createElement('h2'); //create
h2Element.textContent = "H2 article"; // modify
exercisesElement.append(h2Element); // attach
h2Element.style.color = "purple";

let h3Element = document.createElement('h3'); //create
exercisesElement.append(h3Element); // attach
h3Element.textContent = "H3 article"; // modify
h3Element.style.color = "blue";

let h4Element = document.createElement('h4'); //create
exercisesElement.prepend(h4Element); // attach
h4Element.textContent = "H4 article"; // modify
h4Element.style.color = "brown";

let h5Element = document.createElement('h5'); //create
h5Element.textContent = "H5 article"; // modify
exercisesElement.before(h5Element); // attach

let h6Element = document.createElement('h6'); //create
h6Element.textContent = "H6 article"; // modify
exercisesElement.after(h6Element); // attach


// Exercise
let exercise1 = document.querySelector('#exercise1');
exercise1.before('before');
exercise1.prepend('prepend');
exercise1.append('append');
exercise1.after('after');
// exercise1.replaceWith('replaced');

let buttonElement = document.createElement('button');
document.body.prepend(buttonElement);
buttonElement.textContent = "Launch Meeting";
buttonElement.style.background = "blue";
buttonElement.style.padding = "15px 20px";
buttonElement.style.color = "white";
buttonElement.style.border = "none";
buttonElement.style.borderRadius = "10px";
buttonElement.style.fontFamily = "Sans-Serif";
// buttonElement.style.marginLeft = "auto";
// buttonElement.style.marginRight = "auto";


let shoppingList = ['Chanel', 'Dior', 'Prada', 'Gucci', 'Tickets for concerts'];
/* document.write("<ul>");
for (let i = 0; i < shoppingList.length; i++) {
  document.write("<li>" + shoppingList[i] + "</li>");
}
document.write("</ul>"); */ 

// create UL
let listElement =  document.createElement('ul');
exercisesElement.prepend(listElement);

// create LI
for (let i = 0; i < shoppingList.length; i++) {
    let listItemElement = document.createElement('li');
    listElement.append(listItemElement);
    listItemElement.textContent = shoppingList[i];
}

// exercisesElement.prepend(listElement);
// let table = document.createElement('table');
// for (let i = 0; i < shoppingList.length; i++) {
//   let listItemElement = document.createElement('tr');
//   table.append(listItemElement);
//   listItemElement.textContent = shoppingList[i];
// }

// Create TABLE
let table = document.createElement('table');
exercisesElement.prepend(table);
// Create LI
for (let i = 0; i < shoppingList.length; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    let td = document.createElement('td');
    tr.append(td);
    td.style.border = "1px solid black";
    td.textContent = shoppingList[i];
}


// HOW TO COPY?
let button2 = buttonElement.cloneNode();
button2.textContent = "army";
button2.style.background = "purple";
button2.style.margin = "5px";
exercisesElement.prepend(button2);

let button3 = buttonElement.cloneNode();
button3.textContent = "stay";
button3.style.background = "red";
exercisesElement.prepend(button3);

let button4 = buttonElement.cloneNode();
button4.textContent = "nctzen";
button4.style.background = "green";
button4.style.margin = "5px";
exercisesElement.prepend(button4);

let button5 = buttonElement.cloneNode();
button5.textContent = "neverland";
button5.style.background = "purple";
button5.style.margin = "5px";
exercisesElement.prepend(button5);

let list2 = listElement.cloneNode(true);
exercisesElement.prepend(list2);

// HOW TO REMOVE?
// button2.remove();

// var color = randomColor(); 
// colorfulText("Hello!", color);
// function colorfulText(text, color) {
//   document.write(`<h1 style="color: ` + color +`;">` + text + `</h>`);
// };
// function randomColor() {
//   var red = Math.random() * 255;
//   var blue = Math.random() * 255;
//   var green = Math.random() * 255;

//   return `rgb(` + red + `, ` + green + `, ` + blue + `)`;
// };

let colorful = document.createElement('div');
colorful.textContent = "HELLO";
colorful.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
document.body.prepend(colorful);
// 0-255 - Math.random() * 255



