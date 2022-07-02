class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) throw new Error('error text');
        if (this.alarmCollection.some(alarm => alarm.id === id)) {
            console.error('Будильник с таким id уже существует.');
            return;
        }
        this.alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        let alarmLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id != id);
        return !(alarmLength === this.alarmCollection.length);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().substring(0, 5);
    }

    start() {
        function checkClock(alarm) {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            }
        }

        let checkClockBinded = checkClock.bind(this);

        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkClockBinded(item)), 1000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведён на ${item.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let clock = new AlarmClock;

function dateAlarm(minute = 0) {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes() + minute;

    if (minutes > 59) {
        hours = hours + Math.floor(minutes / 60);
        minutes = minutes % 60;
        }
    if (hours < 10) {hours = "0" + hours};
    if (minutes < 10) {minutes = "0" + minutes};
    return (hours + ':' + minutes);
    }

    clock.addClock(clock.getCurrentFormattedTime(), () => console.log('Пора вставать!'), 1);

    clock.addClock(dateAlarm(1), () => {console.log('Давай, вставай уже!'), clock.removeClock(2)}, 2);
 
    clock.addClock(dateAlarm(2), () => {
        console.log('Вставай, а то проспишь!'),
        clock.stop(), 
        clock.clearAlarms(),
        clock.printAlarms()
    }, 3);

    clock.printAlarms();

    clock.start();
  }

  testCase();


