//console.log("hello nathan");

//DOM

/*
    DOM is the data representation of the objects that comprise the structure and content of a  document on the web. It contains, but is not limited to:
        -Document
            -HTML
                -Head
                    -Meta Tags
                    -Link Tags
                    -Title Tags
                -Body
                    -Nav
                    -Header
                    -Divs
                    -Tags
                    -Attributes
*/

//Creating our very first Element with JS and DOM
// let h1Tag = document.createElement("h1");
// h1Tag.style.color = "blue";
// h1Tag.innerText = "Welcome to the Document Object Model";
// document.body.appendChild(h1Tag);

let info = navigator.oscpu; //can show what browser the client is on
// console.log(info);

// //Accessing ELEMENT using getElementById
// document.getElementById("listTitle").innerText = "Hello Nathan";

// //acessing ELEMENTS using querySelector
// let listItem = document.querySelector(".listItem");
// listItem.style.textAlign = "center";
// console.log(listItem)

//Accessing Multiple Items
//Works like an array but is an object which is what arrays are too.
//Access any element by array notation or item method
// let groceries = document.getElementsByClassName("groceryItem");
// console.log(groceries);
// groceries[0].innerText = "Milk";
// console.log(groceries.item(2));

//let liTag = document.getElementsByTagName("li"); //Gets all the li in the whole docuemnt!!!
//console.log(liTag);

// let selectAll = document.querySelectorAll("ul li");
// console.log(selectAll)

//Nodelist is static
//HTMLCollection is Dynamic

//Node is used as a generic term for everything
//HtMLCollection object is an array-like list of HTML elements

//DOM Tree and Access Nodes
//Displays ALL nodes of the body element as a NodeList
//console.log(document.body.childNodes);

//WHiteSpace is considered text and text = node
//ALl can be accessed by index numbers starting at [0]
//console.log(document.body.children)
//first(Element)Child - first element of node
//lastChild - last element of node
//parentNode - access parent node of element
//nexSibling - element next to the one accessed
//previousSibling - previous to the one accessed

// let listDiv = document.getElementById("list");
// console.log(listDiv.firstChild);
// console.log(listDiv.firstChild.nextSibling.nextSibling);

//Adding text using DOM
//innertext proprty
//.innerHTML - specifies HTML content of an element

//Use a looop to get each element in liTag HTMLCollection and change their properties as shown.
// for (tag of liTag) {
//   console.log(tag);
//   tag.style.fontFamily = "cursive";
//   tag.style.color = "blue";
// }

//Reassign 5th [index 4] list item of all listItem classes
//document.getElementsByClassName("listItem")[4].innerText = "Yell at Harry";

//Event Listening

let button = document
  .getElementById("clickMe")
  .addEventListener("click", (e) => {
    let addList = document.getElementById("listInput").value;
    let newGroceryItem = document.createElement("li");
    let groceryList = document.getElementById("listItem1");
    newGroceryItem.innerText = addList;
    groceryList.appendChild(newGroceryItem);
  });
