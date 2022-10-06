const adviceContainer = document.querySelector(".advice_container");

const advices = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  const advice = `<p class="advice_id"><span>ADVICE # </span>${data.slip.id}</p>
    <p class="advice">${data.slip.advice}</p>
    <div class=divider>
    <picture>
  <source srcset="./images/pattern-divider-mobile.svg" media="">
  <source srcset="./images/pattern-divider-desktop.svg" media="">
  <img src="" alt="">
    </picture>
    <div>
    <div class="dice">
    <img src="./images/icon-dice.svg" />
    </div>
    `;
  console.log(data);
  adviceContainer.innerHTML = advice;
};

advices();
