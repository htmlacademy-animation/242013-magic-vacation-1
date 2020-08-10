class AccentTypographyBuild {
  constructor(
    elementSelector,
    timer,
    classForActivate,
    property
  ) {
    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;

    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0;

    this.prePareText();
  }

  createElement(letter, index) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    let currentTimeOffset =
      (index % 3 === 0) ? this._timeOffset :
      ((index - 1) % 3 === 0) ? 60 :
      ((index - 2) % 3 === 0) ? 40 :
      (index % 2 === 0) ? 90 :
      120
      ;

    span.style.transition = `${this._property} ${this._timer}ms ease ${currentTimeOffset * index}ms`;
    if (index % 3 === 0) this._timeOffset += 20;
    return span;
  }

  prePareText() {

    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim().split(` `).filter((latter)=>latter !== '');

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, latter, index) => {
        fragment.appendChild(this.createElement(latter, index));
        return fragment;
      }, document.createDocumentFragment());

      const wordContainer = document.createElement(`span`);

      wordContainer.classList.add(`text__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}

export default () => {
  const animationIntroTitle = new AccentTypographyBuild(`.js-intro-title`, 500, `active`, `transform`);
  const animationIntroDate = new AccentTypographyBuild(`.js-intro-date`, 500, `active`, `transform`);

  setTimeout(()=>{
    animationIntroTitle.runAnimation();
  }, 2000);

  setTimeout(()=>{
    animationIntroDate.runAnimation();
  }, 3000);
}
