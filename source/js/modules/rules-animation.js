export default () => {
  let lastRulesItem = document.querySelector(`.rules__item:last-child`);
  let rulesLink = document.querySelector(`.rules__link`);
  console.log(lastRulesItem);
  console.log(rulesLink);

  lastRulesItem.onanimationend = function(event) {
    console.log("end");
    rulesLink.classList.add(`animate`);
  };
}
