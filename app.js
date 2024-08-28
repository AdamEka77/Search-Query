document
  .getElementById("search-item")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchAndRedirect();
    }
  });

function searchAndRedirect() {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  window.location.href = `search-results.html?query=${encodeURIComponent(
    searchbox
  )}`;
}

const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("product-list");
  const product = document.querySelectorAll(".product");
  const pname = storeitems.getElementsByTagName("h2");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
