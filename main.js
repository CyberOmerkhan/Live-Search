$(document).ready(function() {
    const input = $('#input'), btn = $('#btn'), add = $('#add');
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
    $('#btn').bind('click', () => {
        if(add.val()){
            console.log(add.val());
            
        }
    })
})