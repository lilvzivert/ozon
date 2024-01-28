// const TOKEN = '6151126769:AAE65jnNPQosJW4nIWITCYmtJelL7nmgyvE';
// const CHAT_ID = '-1001693386750';
// const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
// const sumber = document.querySelector('#imgozon');
// document.querySelector("#ozonButton").onclick = function(){
//     const message = `<b>sigma</b>`;

//     axios.post(URI_API, {
//         chat_id: CHAT_ID,
//         parse_mode: 'html',
//         text: message
//     })
// }

// function clearPage(){
// 	sumber.innerHTML = `<img src="${number}" alt="ПВЗ">`;
// }

// async function getResponse(){
//     let response = await fetch('https://api.telegram.org/bot6151126769:AAE65jnNPQosJW4nIWITCYmtJelL7nmgyvE/getUpdates?chat_id=-1001693386750')
//     let content = await response.json()
//     NumberOfAmountNumber = (content.result.length - 1);
//     number = (content.result[NumberOfAmountNumber].message.text);
//     clearPage()
// }

// getResponse()