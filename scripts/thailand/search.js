export const searchFunction = () => {
    // Declare variables
    let input, filter, main, search;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    main = document.querySelector(".thailandMain");
    search = main.getElementsByClassName('search');

        // Loop through all list items, and hide those who don't match the search query
    for (let element of search) {
        let txtValue = element.textContent || element.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            element.style.display = "";
        } else {
            element.style.display = "none";
        }
    }
}