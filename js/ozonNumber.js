const TOKEN = '6151126769:AAE65jnNPQosJW4nIWITCYmtJelL7nmgyvE';
const CHAT_ID = '-1001693386750';
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;


document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    const message = `<b>Номер телефона: +7-<code>${this.number.value}</code></b>\n`


    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
})


let tel = document.querySelector('#number')
let reg = /[A-Za-zA-Яа-яЁё @ # $ _ & ( ) / * " ' : ; ! ? ~ ` | / { } = % ^ < > -]/g;
tel.oninput = function(){
    this.value = this.value.replace(reg, '');
}

IMask(
    document.getElementById('number'),
    {
      mask: '000-000-00-00'
    }
) 
