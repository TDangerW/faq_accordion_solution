document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class 'row'
    const divElements = document.querySelectorAll('.semi-title');

    // Iterate over each div element
    divElements.forEach(function (div) {
        // Add click event listener to each div
        div.addEventListener('click', function () {
            // Toggle the 'hidden' class on the next sibling element (which is the p element)
            const pElement = this.nextElementSibling;
            pElement.classList.toggle('hidden');
            // Change the icon to depict the action of showing/hiding description
            const image = this.querySelector('img')
            image.src = image.src === 'https://tdangerw.github.io/faq_accordion_solution/assets/images/icon-plus.svg' ? 'https://tdangerw.github.io/faq_accordion_solution/assets/images/icon-minus.svg' : 'https://tdangerw.github.io/faq_accordion_solution/assets/images/icon-plus.svg'
        });
    });
});

