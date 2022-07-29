function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: '',
            battleLog: [],
        };
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const damage = getRandomValue(5, 12);
            this.monsterHealth -= damage;
            this.addBattleLog('player', 'attack', damage);
            this.attackPlayer();
        },
        attackPlayer() {
            const damage = getRandomValue(8, 15);
            this.playerHealth -= damage;
            this.addBattleLog('monster', 'attack', damage);
        },
        specialAttackMonster() {
            this.currentRound++;
            const damage = getRandomValue(10, 25);
            this.monsterHealth -= damage;
            this.addBattleLog('player', 'attack', damage);
            this.attackPlayer();
            this.currentRound = 0;
        },
        healPlayer() {
            this.currentRound++;
            const health = getRandomValue(8, 20);
            const newHealthValue = this.playerHealth += health
            this.playerHealth = newHealthValue > 100 ? 100 : newHealthValue;
            this.addBattleLog('player', 'heal', health);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
            this.addBattleLog('player');
        },
        reset() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.thiscurrentRound = 0;
            this.winner = '';
            this.battleLog = [];
        },
        addBattleLog(who, what, value) {
            this.battleLog.push({
                actionBy: who,
                type: what,
                val: value
            })
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth <=0 ) {
                return { width: 0 + '%' };
            }
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            if (this.playerHealth <=0 ) {
                return { width: 0 + '%' };
            }
            return { width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack() {
            return this.currentRound < 2;
        }
    },
    watch: {
        playerHealth(value) {
            if(value <=0 && this.monsterHealth <=0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if(value <=0 && this.playerHealth <=0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'
            }
        }
    }
})

app.mount('#game');