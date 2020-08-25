const person = {
    lastName: 'Фамилия',
    firstName: 'Имя',
    secondName: 'Отчество',
    telephonNumber: 'Номер телефона',
    greet: function (){
        console.log('Информация о пользователе.');
    }
}
const hedding = document.getElementById('sprav');
//const hedding2 = document.getElementsByTagName('h2')[0];
const hedding2 = document.querySelector('h2');
console.log(hedding2);

function addStylesTo(node){

        console.dir(hedding.textContent);
        node.textContent = 'Справочная система';
        node.style.color = 'gray';
        node.style.backgroundColor = 'white';
        node.style.borderRadius = '5px';
        node.style.padding = '1rem';

}

setTimeout(() =>{
    addStylesTo(hedding);
}, 1500)

