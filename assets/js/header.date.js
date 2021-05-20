setInterval(() => {
    let date = new Date;
    let day = date.getDay().toString();
    if(day.length < 2){
        day = '0' + day;
    }
    let month = date.getMonth().toString();
    if(month.length < 2){
        month = '0' + month;
    }
    let year = date.getFullYear();
    let hours = date.getHours().toString();
    if(hours.length < 2){
        hours = '0' + hours;
    }
    let minutes = date.getMinutes().toString();
    if(minutes.length < 2){
        minutes = '0' + minutes;
    }
    let seconds = date.getSeconds().toString();
    if(seconds.length < 2){
        seconds = '0' + seconds;
    }
    $('#header-date').text(day+'.'+month+'.'+year+' '+hours+':'+minutes+':'+seconds);
}, 1000);