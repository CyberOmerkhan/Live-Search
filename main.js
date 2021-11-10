$(document).ready(function() {
    const input = $('#input');
    const btn = $('#btn');
    const add = $('#add');
    let list = $('ol'), counter = 8;
    input.on('input', function() {
        let value = $(this).val();
        let items = document.querySelectorAll('.ul li');
        if(value){
            items.forEach(function(elem) {
                if(elem.innerText.toLowerCase().search(value.toLowerCase())){
                    elem.classList.add('hide');
                }
            })
        }else{
            items.forEach(function(elem) {
                elem.classList.remove('hide');
            })
        }
    });
    $('#btn').bind('click', function() {
        if(add.val()){
            list.append(`<li>${add.val()}</li>`);
            add.val('');
            counter++;
            console.log(counter);
            $('#total').text(`Total: ${counter}`);
        }
    });
    $('#total').text(`Total: ${counter}`);
})