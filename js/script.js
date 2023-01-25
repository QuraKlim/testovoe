"use strict";

document.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function(){
        $('.carousel').slick();
    });
});

document.querySelectorAll('.hints').forEach(i => {
    const label = i.parentNode.querySelector('label');
    i.addEventListener('focus', (e) => {
        if (e.target.value == "") {
            label.style.display = "block"
        }
    })
    i.addEventListener('input', (e) => {
        if (!e.target.value == "") {
            label.style.display = "none"
        } else {
            label.style.display = "block"
        }
    })
    i.addEventListener('blur', () => {
        label.style.display = "none"
    })
})