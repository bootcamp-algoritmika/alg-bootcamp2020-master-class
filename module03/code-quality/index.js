const data = [
        {"fio":"Федункив Семён Григорьевич","phone":"+73154637268"},
        {"fio":"Тарасюк Трофим Михайлович","phone":"+71926463769"},
        {"fio":"Русаков Филипп Викторович","phone":"+76881698154"},
        {"fio":"Красильников Харитон Валерьевич","phone":"+77116275091"},
        {"fio":"Козлов Емельян Андреевич","phone":"+777697076"},
        {"fio":"Многогрешный Фёдор Вадимович","phone":"+73529378090"},
        {"fio":"Ерёменко Тит Васильевич","phone":"+71752797922"},
        {"fio":"Колесников Афанасий Станиславович","phone":"+77232770695"},
        {"fio":"Грабчак Орест Романович","phone":"+76888685402"},
        {"fio":"Погомий Жигер Валерьевич","phone":"+77194574705"},
        {"fio":"Саксаганский Харитон Владимирович","phone":"+71455323907"},
        {"fio":"Егоров Зенон Станиславович","phone":"+79432744291"},
        {"fio":"Владимиров Лев Романович","phone":"+7581117695"},
        {"fio":"Лобанов Давид Платонович","phone":"+74463852112"},
        {"fio":"Шаров Юрий Романович","phone":"+77220525464"},
        {"fio":"Сорокин Назар Максимович","phone":"+79138597415"},
        {"fio":"Борисенко Кузьма Леонидович","phone":"+78087002776"},
        {"fio":"Андрухович Цицерон Сергеевич","phone":"+7843004228"},
        {"fio":"Пономарёв Борис Ярославович","phone":"+74316378482"},
        {"fio":"Толочко Лукиллиан Викторович","phone":"+76785965964"},
        {"fio":"Быкова Злата Васильевна","phone":"+79679303412"},
        {"fio":"Кузнецова Жаклин Григорьевна","phone":"+76848907420"},
        {"fio":"Калашникова Лидия Даниловна","phone":"+76696262303"},
        {"fio":"Потапова Инна Виталиевна","phone":"+71017208240"},
        {"fio":"Прохорова Пелагея Михайловна","phone":"+77994722714"},
        {"fio":"Шухевич Нина Васильевна","phone":"+72310334358"},
        {"fio":"Носова Инесса Львовна","phone":"+73292500543"},
        {"fio":"Лаврентьева Юнона Львовна","phone":"+73370436696"},
        {"fio":"Гриневска Жозефина Брониславовна","phone":"+75704655126"},
        {"fio":"Моисеенко Софья Евгеньевна","phone":"+77543677117"},
        {"fio":"Уварова Нина Андреевна","phone":"+77858212712"},
        {"fio":"Семочко Харитина Васильевна","phone":"+74057879969"},
        {"fio":"Беляева Зоя Васильевна","phone":"+77355877247"},
        {"fio":"Комиссарова Рената Платоновна","phone":"+71004347513"},
        {"fio":"Передрий Зинаида Борисовна","phone":"+7744945663"},
        {"fio":"Медведева Софья Ярославовна","phone":"+73745532433"},
        {"fio":"Егорова Розалина Валерьевна","phone":"+76224425825"},
        {"fio":"Хохлова Хильда Романовна","phone":"+72769926220"},
        {"fio":"Шестакова Шарлота Юхимовна","phone":"+72691933649"},
        {"fio":"Выговска Лидия Васильевна","phone":"+72662541001"}
    ] ;

window.addEventListener('load', handleDocumentLoad) ;

function handleDocumentLoad() {
    manageTable() ;
}

function manageTable() {
    const table = document.getElementById('phonebook') ;
    const popup = document.getElementById('popup-background') ;

    for (let i=0; i<data.length; i++) {
        const item = data[i] ;
        const element = document.createElement('div') ;
        const div1 = document.createElement('div') ;
        const div2 = document.createElement('div') ;
        element.className = 'person' ;
        div1.className = 'fio' ;
        div2.className = 'phone' ;
        div1.innerHTML = item.fio ;
        div2.innerHTML = `<a href="tel:${item.phone}">${item.phone}</a>` ;
        element.appendChild(div1) ;
        element.appendChild(div2) ;
        table.appendChild(element) ;

        element.addEventListener('click', e => {
            if (e.target.className == 'phone')
                return ;
            const arr = item.fio.split(' ') ;
            document.getElementById('popup-user-last-name').value = arr[0] ;
            document.getElementById('popup-user-name').value = arr[1] ;
            document.getElementById('popup-user-middle-name').value = arr[2] ;
            document.getElementById('popup-user-phone').value = item.phone ;

            document.forms.phonebook.onsubmit = e => {
                e.preventDefault() ;
                div1.innerHTML = [e.target.elements.user_last_name.value, e.target.elements.user_name.value, e.target.elements.user_middle_name.value].join(' ') ;
                div2.innerHTML = `<a href="tel:${e.target.elements.user_phone.value}">${e.target.elements.user_phone.value}</a>` ;
                popup.style.display = '' ;
            } ;
            popup.style.display = "flex" ;
        }) ;
    } ;

    popup.addEventListener('click', e => {
        if (e.target.id == 'popup-background')
            e.target.style.display = '' ;
    }) ;

    popup.getElementsByClassName('cross-sign')[0].addEventListener('click', () => popup.style.display = '') ;


}

function addNew() {
    const table = document.getElementById('phonebook') ;
    const popup = document.getElementById('popup-background') ;
    popup.style.display = "flex" ;
    document.getElementById('popup-user-last-name').value = '' ;
    document.getElementById('popup-user-name').value = '' ;
    document.getElementById('popup-user-middle-name').value = '' ;
    document.getElementById('popup-user-phone').value = '' ;

    document.forms.phonebook.onsubmit = e => {
        e.preventDefault() ;
        popup.style.display = '' ;
        const element = document.createElement('div') ;
        const div1 = document.createElement('div') ;
        const div2 = document.createElement('div') ;
        element.className = 'person' ;
        div1.className = 'fio' ;
        div2.className = 'phone' ;
        div1.innerHTML = [e.target.elements.user_last_name.value, e.target.elements.user_name.value, e.target.elements.user_middle_name.value].join(' ') ;
        div2.innerHTML = `<a href="tel:${e.target.elements.user_phone.value}">${e.target.elements.user_phone.value}</a>` ;
        element.appendChild(div1) ;
        element.appendChild(div2) ;
        table.appendChild(element) ;

        element.addEventListener('click', e => {
            if (e.target.className == 'phone')
                return ;
            const arr = div1.innerHTML.split(' ') ;
            document.getElementById('popup-user-last-name').value = arr[0] ;
            document.getElementById('popup-user-name').value = arr[1] ;
            document.getElementById('popup-user-middle-name').value = arr[2] ;
            document.getElementById('popup-user-phone').value = div2.children[0].innerHTML ;

            document.forms.phonebook.onsubmit = e => {
                e.preventDefault() ;
                div1.innerHTML = [e.target.elements.user_last_name.value, e.target.elements.user_name.value, e.target.elements.user_middle_name.value].join(' ') ;
                div2.innerHTML = `<a href="tel:${e.target.elements.user_phone.value}">${e.target.elements.user_phone.value}</a>` ;
                popup.style.display = '' ;
            } ;
            popup.style.display = "flex" ;
        }) ;
    } ;
}