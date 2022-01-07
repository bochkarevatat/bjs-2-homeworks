class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [],
            this.timerId = null;

    };


    addClock(time, callback, id) {

        this.time = time;
        this.callback = callback;
        this.id = id;

        let collectionAllarm = {
            time: this.time,
            callback: this.callback,
            id: this.id,
        };

        if (typeof (id) === "undefined") {
            throw new Error('error text');
        };

        if (this.alarmCollection.find(item => item.id === id)) {
            console.error('warning')

        } else {
            this.alarmCollection.push(collectionAllarm)

        };

        // return this.alarmCollection;
    };

    removeClock(id) {
        let start = this.alarmCollection.length;

        this.alarmCollection = this.alarmCollection.filter(item => {
            if (item.id == id) {
                clearTimeout(this.id);

            };

        });
        let finish = this.alarmCollection.length;
        if (start > finish) {

            return true;
        } else {
            return false;
        };


    };

    getCurrentFormattedTime(currentTime) {

        let nowTime = new Date();
        let hours = nowTime.getHours().toString();
        let minutes = nowTime.getMinutes().toString();


        this.currentTime = currentTime;
        if (hours.length < 2) {
            this.currentTime = 0 + hours + ":" + minutes;
        } else if (hours.length >= 2) {
            this.currentTime = hours + ":" + minutes;
        };

        if (minutes.length < 2) {
            this.currentTime = hours + ":" + 0 + minutes;
        } else if (minutes.length >= 2) {
            this.currentTime = hours + ":" + minutes;
        };

        return this.currentTime;
    }

    start() {
        function checkClock(time) {
            if (this.currentTime === this.time) {
                this.collectionAllarm.callback.bind(time)();
            };

            if (isNaN(timerId)) {
                this.id = setTimeout(callback, time, id, 1000);
            };

        };

    };

    stop() {
        if (isNaN(this.timerId) !== NaN) {
            clearInterval(this.timerId)
        }
    };

    printAlarms() {
        this.alarmCollection.forEach(alarm => {

            console.log(`Будильник № ${alarm.id} заведен на ${alarm.time}`);
            return alarm;
        });

    };

    clearAlarms() {

        this.stop();
        this.alarmCollection = [];
    };


};