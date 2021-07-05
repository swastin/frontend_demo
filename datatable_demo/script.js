/*********************
 *  searching the value
 * 
 *******************/


let searchbox = document.getElementById("search");
searchbox.addEventListener("keyup", function (event) {

  let rows = document.querySelectorAll('tbody tr');
  let q = event.target.value.toLowerCase();
  rows.forEach(row => {
    //  console.log(row.querySelector('td').nextElementSibling.textContent);

    // // console.log();
    row.querySelector('td').nextElementSibling.textContent.toLowerCase().startsWith(q) ? row.style.display = 'table-row' : row.style.display = 'none'
  });
});
/********************************************
 *function is used to sort table data
 * @param {*} n 
 ********************************************/
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("mytable");

  switching = true;
  dir = "asc";

  while (switching) {

    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 2); i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


/**
 * 
 * pagination 
 */


let x = document.getElementsByClassName('pagination');
let page = document.getElementById("page");
no_of_rows = document.getElementById("mytable").rows.length;
// alert(no_of_rows);
addElement('page', 'a', 'next', '');
addElement('next', 'i','next-icon','');
let next=document.getElementById('next-icon');
next.classList.add('las');
next.classList.add('la-angle-left');


for (i = 1; i <= (no_of_rows/10) - 2; i++) {

  addElement('page', 'a', '', i);

}
addElement('page', 'a', 'prev', '');
addElement('prev', 'i','prev-icon','');
let prev=document.getElementById('prev-icon');
prev.classList.add('las');
prev.classList.add('la-angle-right');
/******************************|
 *                             |
 * @param {string} parentId    |
 * @param {string} elementTag  |
 * @param {string} elementId   |
 * @param {string} html        |
 *******************************/
function addElement(parentId, elementTag, elementId, html) {
  var p = document.getElementById(parentId);
  var newElement = document.createElement(elementTag);
  newElement.setAttribute('id', elementId);
  newElement.innerHTML = html;
  p.appendChild(newElement);
}

document.getElementById("no-of-page").addEventListener('change',(event)=> {
let value=document.getElementById('no-of-page').value;
 rows = document.querySelectorAll('tbody tr');
 console.log(value);
 console.log(rows.length-value);
 for (let index =value; index <(rows.length); index++) {
console.log(index);
rows[index].style.display = 'none'

}
  // for (let index =0; index <= value; index++) {
  //          console.log(index);
    
  //   }
});

//  for (let index = value; index < rows.length; index++) {
//   console.log(rows[index]);
//   rows[index].style.display = 'none'
// // });
//   }

