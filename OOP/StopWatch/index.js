function StopWatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running){
            throw Error('Stopwatch has already started.');
        }else {
            running = true;
            startTime = new Date();
        }
    };

    this.stop = function(){ 
        if(!running){
            throw Error('Stopwatch is not started.');
        }else {
            running = false;
            endTime = new Date();

            const seconds = (endTime.getTime() - startTime.getTime())/1000;
            duration += seconds; 
        }
    }

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        }
    });

}
