
const categoryEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoryEl.length);

categoryEl.forEach((element) => {
    console.log("Category: ", element.querySelector("h2").textContent);
    console.log( "Elements:", element.querySelectorAll("li").length)
});

