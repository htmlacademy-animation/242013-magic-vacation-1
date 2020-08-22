export default () => {
  let lastRulesItem = document.querySelector(`.rules__item:last-child`);
  let rulesLink = document.querySelector(`.rules__link`);

  lastRulesItem.onanimationend = function () {
    rulesLink.classList.add(`animate`);
  };
};
