$(document).ready(function() {
    let input = $('#input');
    input.on('input', function() {
        let value = $(this).val();
        let items = document.querySelectorAll('.ul li');
        if(value){
            items.forEach((elem) => {
                if(elem.innerText.toLowerCase().search(value.toLowerCase())){
                    elem.classList.add('hide');
                }
            })
        }else{
            items.forEach(elem => {
                elem.classList.remove('hide');
            })
        }
    });
    $('#add').bind('click', () => {
        console.log("asd");
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