/*
    TODO:
        1. Select the section with an id of container without using querySelector. [x]
        2. Select the section with an id of container using querySelector. [x]
        3. Select all of the list items with a class of “second”. [x]
        4. Select a list item with a class of third, but only the list item inside of the ol tag. [x]
        5. Give the section with an id of container the text “Hello!”. [x] 
        6. Add the class main to the div with a class of footer. [x] 
        7. Remove the class main on the div with a class of footer. [x]
        8. Create a new li element. [x] 
        9. Give the li the text “four”. [x]
        10. Append the li to the ul element. [x] 
        11. Loop over all of the lis inside the ol tag and give them a background color of “green”. [x]
        12. Remove the div with a class of footer [x]
*/
// 1. Get format ignores . # needed symbols
const getContainer = document.getElementById("container");
// 2. Query needs . if class # if element none if tag
const queryContainer = document.querySelector("#container");

// 3.
const queryLiLists = document.querySelectorAll(".second");

// 4. Use spaces to direct search
const queryLi = document.querySelector("ol .second");

// 5. Change innerHTML
queryContainer.innerHTML = "Hello!" + queryContainer.innerHTML;

// 6. Adding onto the class
const queryFooter = document.querySelector(".footer");
console.log(queryFooter.className);
queryFooter.classList.add("main");
console.log(queryFooter.className);

// 7. Removing from a class
queryFooter.classList.remove("main");
console.log(queryFooter.className);

// 8. Create li element
const createLi = document.createElement("li");

// 9. Give text
createLi.innerHTML = "four";

// 10. Append to UL class
const queryUl = document.querySelector("ul");
queryUl.appendChild(createLi);

// 11. Add CSS To a list with JS For of loops [array style]
const olList = document.querySelectorAll("ol li");
for (li of olList) {
  li.style.backgroundColor = "green";
}

// 12. Remove the div
queryFooter.remove();
