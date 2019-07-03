    //calc
    let persons = document.querySelectorAll('.counter-block-input')[0], //Количество людей
        restDays = document.querySelectorAll('.counter-block-input')[1], //На сколько дней
        place = document.getElementById('select'), //куда полетим
        totalValue = document.getElementById('total'), //общая сумма
        personsSum = 0, //будем записывать в определенные переменные и использовать в расчётах(сюда поместим колличество людей)
        daysSum = 0,
        total = 0; //тут будет значение которое будет хранить вычисления после всех математических опперация и будет записываться в "Общая сумма"

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if(restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else  {
                 totalValue.innerText = total;
            }
        });

        restDays.addEventListener('change', function() {
            daysSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if(persons.value == '' || restDays.value == '') {
                totalValue.innerHTML = 0;
            } else  {
                 totalValue.innerText = total;
            }
        });

        place.addEventListener('change', function() {
            if(restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });
