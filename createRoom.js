let btnCreate = function() {
    const valueInput = document.querySelector('.form-control');
    const room = valueInput.value;

    if(!room) {
        console.log('informe um ID valido');
        return
    }
    
    window.location.href = 'room.html'   
    
}

const btn = document.getElementById('button-addon2');
btn.addEventListener('click', btnCreate);