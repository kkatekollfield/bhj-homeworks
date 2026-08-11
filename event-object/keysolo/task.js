class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.status__timer');
    this.timerInterval = null;
    this.wordLength = 0;
    this.isGameStarted = false;

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.stopTimer();
    this.isGameStarted = false;
    this.timerElement.classList.remove('status__timer_danger');
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener('keydown', (event) => {
      if (!this.isGameStarted && event.key.length === 1 && !event.ctrlKey && !event.altKey) {
                this.isGameStarted = true;
                this.startTimer(this.wordElement.textContent.length);
            }

      if (event.key.length === 1 && !event.ctrlKey && !event.altKey) {
        const currentChar = this.currentSymbol.textContent.toLowerCase();
        const typedChar = event.key.toLowerCase();

        if (currentChar === typedChar) {
          this.success();
        } else {
          this.fail();
        } 
      }
  });
  }

  startTimer(seconds) {
    this.timerElement.classList.remove('status__timer_danger');
    this.wordLength = seconds;

    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }

    this.timeLeft = seconds;
    this.timerElement.textContent = this.timeLeft;

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.timerElement.textContent = this.timeLeft;
      
      if(this.wordLength > 3) {
        if (this.timeLeft <= 3) {
          this.timerElement.classList.add('status__timer_danger');
        } else {
          this.timerElement.classList.remove('status__timer_danger');
        }
      }
      
      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        this.fail();
      }
    }, 1000);
  }

stopTimer() {
    if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
    }
}

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    this.stopTimer();

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    this.stopTimer();
    if (++this.lossElement.textContent === 3) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    this.timerElement.classList.remove('status__timer_danger');
    const word = this.getWord();
    this.renderWord(word);

    if (this.isGameStarted) {
        this.startTimer(word.length);
    } else {
        this.timerElement.textContent = 0;
    }
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

