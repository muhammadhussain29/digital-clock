setInterval(settime ,1000);

function settime()
{
    now = new Date();

    let hh = (now.getHours()).toString(); 
    let mm = (now.getMinutes()).toString();
    let ss = (now.getSeconds()).toString();

    // hh.settime(0);


    if(hh[1] == null){
        hh = '0' + hh;
    }
    else{
        hh = hh;
    }
    if(mm[1] == null){
        mm = '0' + mm;
    }
    else{
        mm = mm;
    }
    if(ss[1] == null){
        ss = '0' + ss;
    }
    else{
        ss = ss;
    }

    document.getElementById('hh').innerHTML = hh;
    document.getElementById('mm').innerHTML = mm;
    document.getElementById('ss').innerHTML = ss;

}

