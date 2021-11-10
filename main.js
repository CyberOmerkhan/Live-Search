$(document).ready(function() {
    let input = $('#input');
    input.on('input', function() {
        let value = $(this).val();
        let items = document.querySelectorAll('.ul li');
        if(value){
            items.forEach((elem) => {
                if(elem.innerText.search(value) == -1){
                    elem.classList.add('hide');
                }
            })
        }else{
            items.forEach(elem => {
                elem.classList.remove('hide');
            })
        }
    })
})
/*
LiveSearch
LiveSearch
LiveSearch
LiveSearch
LiveSearch
LiveSearch
LiveSearch
LiveSearch
LiveSearch
LiveSearch
LiveSearch
LiveSearch
LiveSearch
LiveSearch
LiveSearch
*/