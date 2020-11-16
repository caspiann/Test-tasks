<template>
  <div class="wrapper">
    <div class="info">
      <p>Round: {{ this.level }}</p>
      <button type="button" @click="startGame()">Start</button>
      <p>Game options:</p>
      <div class="options">
        <label>
          Легкий
          <input
              type="checkbox" data-value="light" ref="light" value="Легкий" @click="setGameComplexity($event.target)"
          />
        </label>
        <label>
          Средний
          <input
              type="checkbox" data-value="middle" ref="middle" value="Средний" @click="setGameComplexity($event.target)"
          />
        </label>
        <label>
          Сложный
          <input
              type="checkbox" data-value="hard" ref="hard" value="Сложный" @click="setGameComplexity($event.target)"
          />
        </label>
      </div>

    </div>
    <div class="gameBoard">
      <button class="btn1" ref="btn1" @click="addToPlayerSequence($event.target)"></button>
      <button class="btn2" ref="btn2" @click="addToPlayerSequence($event.target)"></button>
      <button class="btn3" ref="btn3" @click="addToPlayerSequence($event.target)"></button>
      <button class="btn4" ref="btn4" @click="addToPlayerSequence($event.target)"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      level: 0,
      userSequence: [],
      gameSequence: [],
      gameComplexity: 1000,
      audio: {
        'btn1': new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        'btn2': new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        'btn3': new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
        'btn4': new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
      },
    };
  },

  methods: {

    sound(val) {
      switch (val) {
        case 'btn1':
          this.audio['btn1'].play();
          break;
        case 'btn2':
          this.audio['btn2'].play();
          break;
        case 'btn3':
          this.audio['btn3'].play();
          break;
        case 'btn4':
          this.audio['btn4'].play();
          break;
      }
    },

    toggleActiveClass(el) {
      el.classList.add('active');
      setTimeout(() => {
        el.classList.remove('active');
      }, 150);
    },

    setGameComplexity(el) {
      switch (el.dataset.value) {
        case 'light': {
          if (el.checked) {
            this.$refs.middle.disabled = true;
            this.$refs.hard.disabled = true;
          } else {
            this.$refs.middle.disabled = false;
            this.$refs.hard.disabled = false;
          }
          this.gameComplexity = 1500;
          return;
        }
        case 'middle': {
          if (el.checked) {
            this.$refs.light.disabled = true;
            this.$refs.hard.disabled = true;
          } else {
            this.$refs.light.disabled = false;
            this.$refs.hard.disabled = false;
          }
          this.gameComplexity = 1000;

          return;
        }
        case 'hard': {
          if (el.checked) {
            this.$refs.middle.disabled = true;
            this.$refs.light.disabled = true;
          } else {
            this.$refs.middle.disabled = false;
            this.$refs.light.disabled = false;
          }
          this.gameComplexity = 400;
          return;
        }
      }
    },
    startGame() {
      this.resetGame();
      this.generateNext();
    },
    resetGame() {
      this.level = 0;
      this.userSequence = [];
      this.gameSequence = [];
    },
    generateNext() {
      this.level++;
      this.gameSequence.push(`btn${Math.floor(Math.random() * 3) + 1}`);
      console.log('game', this.gameSequence);
      this.playSequence();
    },

    playSequence() {
      let i = 0;
      let sequence = setInterval(() => {
        this.toggleActiveClass(this.$refs[`${this.gameSequence[i]}`]);
        this.sound(`${this.gameSequence[i]}`);
        i++;
        if (i >= this.gameSequence.length) {
          clearInterval(sequence);
        }
      }, this.gameComplexity);
      this.userSequence = [];
    },

    addToPlayerSequence(el) {
      this.toggleActiveClass(el);
      this.userSequence.push(el.classList[0]);
      this.checkPlayerMove(el.classList[0]);
    },

    checkPlayerMove(value) {
      if (this.userSequence[this.userSequence.length - 1] !== this.gameSequence[this.userSequence.length - 1]) {
        this.resetGame();
        this.$refs.middle.checked = false;
        this.$refs.light.checked = false;
        this.$refs.hard.checked = false;
        alert('Вы проиграли!');
      } else {
        this.sound(value);
        if (this.userSequence.length === this.gameSequence.length) {
          if (this.level === 10) {
            alert('Вы выиграли!!!');
          } else {
            setTimeout(() => {
              this.generateNext();
            }, 500);
          }
        }
      }
    },
  },
};
</script>

<style scoped>


.gameBoard {
  margin: 50px auto;
  width: 220px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

label {
  margin-top: 20px;
}

.options {
  display: flex;
  flex-direction: column;
}

.btn1,
.btn2,
.btn3,
.btn4 {
  margin: 2px;
  width: 100px;
  height: 100px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.active {
  box-shadow: 0 0 10px 0 #000;
}

.btn1 {
  background: #ff4e4e;
}


.btn2 {
  background: #86fb5d;
}


.btn3 {
  background: #396bff;
}

.btn4 {
  background: #ffca39;
}
</style>
