const courses = [
    {
        name1: "complete Reactjs course",
        price: "2.3"
    },
    {
        name1: "complete Angular course",
        price: "3"
    },
    {
        name1: "complete MERN course",
        price: "3.1"
    },
    {
        name1: "complete C++ course",
        price: "5"
    },  
    {
        name1: "complete C course",
        price: "6"
    },
];




function generatelist() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    // ul.appendChild
    courses.forEach( (course) =>{
  
        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name1 = document.createTextNode(course.name1)
        li.appendChild(name1)

        const span = document.createElement("span")
        span.classList.add("float-right")

        const price = document.createTextNode("$ " + course.price)
        span.appendChild(price)

        li.appendChild(span);
        ul.appendChild(li);
    });

};
// generatelist();

window.addEventListener("load", generatelist);

const button = document.querySelector(".sort-btn")

button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generatelist();
});

const button2 = document.querySelector(".sort-button")

button2.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
   generatelist();
});
 
