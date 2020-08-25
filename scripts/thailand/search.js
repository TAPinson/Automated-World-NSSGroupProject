export const searchFunction = () => {
    // Declare variables
    let input, filter, main, search;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    main = document.querySelector(".thailandMain");
    search = main.getElementsByClassName('search');

        // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < search.length; i++) {
        let txtValue = search[i].textContent || search[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            search[i].style.display = "";
        } else {
            search[i].style.display = "none";
        }
    }
}