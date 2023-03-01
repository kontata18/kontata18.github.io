window.addEventListener('load', function() {
        birthyear();
        birthmonth();
        birthday();
});

function birthyear() {
    var yearInput = document.querySelector('select[name=birth_year]');
    for(var i = 1900; i <= 2023; i++){
        var option = document.createElement('option');
        option.innerHTML = i + '년';
        option.value = i;

        yearInput.appendChild(option);
    }
};

function birthmonth() {
    var monthInput = document.querySelector('select[name=birth_month]');
    for(var i = 1; i <= 12; i++){
        var option = document.createElement('option');
        option.innerHTML = i + '월';
        option.value = i;

        monthInput.appendChild(option);
    }
}

function birthday() {
    var monthInput = document.querySelector('select[name=birth_day]');
    for(var i = 1; i <= 31; i++){
        var option = document.createElement('option');
        option.innerHTML = i + '일';
        option.value = i;

        monthInput.appendChild(option);
    }
}