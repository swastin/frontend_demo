/**
 * This function is used to display and hide the search bar on click
 */
 
function display() {
  var search = document.getElementById("search");
  var searchicon = document.getElementById("search-icon");
    if (search.style.display === "none") {
        search.style.display = "block";
        searchicon.classList.add("la-times");
        searchicon.classList.remove("la-search");
    } else {
        search.style.display = "none";
        searchicon.classList.add("la-search");
        searchicon.classList.remove("la-times");
        


    }

}
