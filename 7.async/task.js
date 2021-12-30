class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [],
            this.timerId = timerId;

    };

   
    addClock(time, callback, id) {
        
        this.time = time;
        this.callback = callback;
        this.id = id;
        // this.id = setTimeout();

        let collectionAllarm = {
            time: this.time,
            callback: this.callback,
            id : this.id,
        };
        
            if (typeof(id) === "undefined") {   
            throw new Error('error text');
        };
        

        if (this.alarmCollection.find(item => item.id === id)) {
            console.error('warning')

        }else{
            this.alarmCollection.push(collectionAllarm)

        };
        
            return this.alarmCollection;
    };

    removeClock(id) {
        this.alarmCollection.filter(item => {
            if (item.id == id) {
                clearTimeout(this.id);
                return true;
            };
        });

        
    };
    
    getCurrentFormattedTime(currentTime) {

        let nowTime = new Date();
        let hours = nowTime.getHours().toString();
        let minutes = nowTime.getMinutes().toString();
        // this.currentTime = currentTime;

        if (minutes.length < 2) {
            resultTime = hours + ":" + 0 + minutes;
         }  else if (minutes.length >= 2) {
            currentTime = hours + ":" + minutes;
         };
        return currentTime;
    }

    start(){
        function checkClock(time){
            if(this.currentTime === this.time){
                callback() 
            }
        }

    }

};





