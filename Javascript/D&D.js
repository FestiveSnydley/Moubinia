// JavaScript Document
// Search bar help from W3S
/* eslint-disable no-unused-vars */
//Called @ line 12 of each bestiary html page, and @ line 15 of each spell html page.
function tableSort() {
  var userInput, inputValue, caseInsensitive, table, tr, td, i;
  userInput = document.getElementById("bestiarySearch");
  if (document.getElementById("bestiarySearch").value.length == 0) {
    document.getElementById("filteredResults").innerHTML = "";
  } else {
    document.getElementById("filteredResults").innerHTML = "Filtered Results:";
  }
  caseInsensitive = userInput.value.toUpperCase();
  table = document.getElementById("center");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      inputValue = td.textContent || td.innerText;
      if (inputValue.toUpperCase().indexOf(caseInsensitive) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
//Called @ line 12 of each magical item page.
/* eslint-disable no-unused-vars */
function tableSortMagicItems() {
  var userInput, inputValue, caseInsensitive, table, tr, td, i;
  userInput = document.getElementById("magicItemSearch");
  if (document.getElementById("magicItemSearch").value.length == 0) {
    document.getElementById("filteredResults").innerHTML = "";
  } else {
    document.getElementById("filteredResults").innerHTML = "Filtered Results:";
  }
  caseInsensitive = userInput.value.toUpperCase();
  table = document.getElementById("center");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      inputValue = td.textContent || td.innerText;
      if (inputValue.toUpperCase().indexOf(caseInsensitive) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
