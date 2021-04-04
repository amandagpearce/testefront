
let parent = document.getElementById("divResourceLinks");

let newParent = "<div class='col-md-12 col-lg-12 col-md row'>"+ parent.innerHTML +"</div>";
// Adds content wrapper to parent element
document.getElementById("divResourceLinks").innerHTML = newParent;

// Fixes spaces and col size with bootstrap classes
let left_col_nodes = document.querySelectorAll("#divResourceLinks .col-md-6");

left_col_nodes.forEach(function(el){
    el.classList.add("col-lg-6", "mb-lg-8");
    el.classList.remove("col-lg-3","mb-lg-0");
}  
);

// Fixes container size
parent.querySelector(".container").classList.add("row", "justify-content-lg-center", "align-items-start");
parent.querySelector(".justify-content-lg-center").classList.remove("container");

// Append right content
let rightContent = document.querySelector("#divEnterpriseProductLinks .row");
parent.querySelector(".justify-content-lg-center").appendChild(rightContent);

// Fixes container inner col width
parent.querySelectorAll(".justify-content-lg-center > div").forEach(function(el) {
    el.classList.add("col-lg-6");
})

// Fixes right col children width
parent.querySelectorAll(".justify-content-lg-center .row:last-child > div").forEach(function(el) {
    el.classList.add("col-lg-12");
})

// Removes empty container 
document.getElementById("divEnterpriseProductLinks").remove();







