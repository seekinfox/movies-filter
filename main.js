// simple iif for menu toggle
(() => {
    var menuIcon = document.getElementById("icon"),
        menuContent = document.querySelector("#nav");

    menuIcon.addEventListener('click', () => {
        menuContent.classList.toggle("block");
        menuIcon.classList.add("rotate");
        setTimeout(() => {
            menuIcon.classList.remove("rotate")
        }, 500)
    })


    var filterMenu = document.querySelector(".icon"),
        filterContent = document.querySelector(".menu-content");
    filterMenu.addEventListener('click', () => {
        filterContent.classList.toggle("block");
    })

    //filter section
    var filterBtn = document.querySelectorAll('.btn'),
        cards = document.querySelectorAll('.card'),
        number = document.getElementById("number"),
        display = document.querySelector(".preview-poster");
    display.style.background = "url(./images/All-logo.jpg)";
    display.style.backgroundPosition = "center";
    display.style.backgroundSize = "cover";
    number.innerHTML = cards.length;

    //looping through all buttons
    filterBtn.forEach((button) => {
        button.addEventListener('click', (e) => {

            //preventdefault is preventing default reload behavior of a anchor tags
            e.preventDefault();

            // method used to acces data-* from html elment attrubute

            var filter = e.target.dataset.filter
            console.log(filter)

            display.style.background = "url(./images/" + filter + "-logo.jpg)";
            display.style.backgroundSize = "cover";

            //looping thru cards
            cards.forEach((card) => {
                var cardFilter = card.dataset.item;
                if (filter === 'All') {
                    console.log('worked')
                    card.style.display = 'block';

                } else if (cardFilter === filter) {
                    card.style.display = "block";
                    number.innerHTML = cardFilter.length; //error meh..
                } else {
                    card.style.display = 'none';
                }
            })

        })
    })

})()
