


function clock()
{
    let ampm=document.getElementById('ampm');
    let datetime=new Date();
    let d=datetime.getDay();
     let day='';
   switch(d)
   {
        case 1:
        day="Sunday";
        break;
        case 2:
        day="Tuesday";
        break;
        case 3:
        day="Wednesday";
        break;
        case 4:
        day="Thursday";
        break;
        case 5:
        day="Friday";
        break;
        case 6:
        day="Saturday";
        break;
        case 7:
        day="Monday";
        break;
   }
    document.getElementById('day').innerHTML=day;
    let date=datetime.getDate();
    document.getElementById('dat').innerHTML=date;
    let mon=datetime.getMonth();
    document.getElementById('mon').innerHTML=mon+1;
    let year=datetime.getFullYear();
    document.getElementById('year').innerHTML=year;

    let hr=datetime.getHours();
    if(hr>=12)
    {
        hr=hr-12;
        ampm.innerHTML="PM";
    }
    document.getElementById('hr').innerHTML=padzero(hr);
    let min=datetime.getMinutes();
    document.getElementById('min').innerHTML=padzero(min);
    let sec=datetime.getSeconds();
    document.getElementById('sec').innerHTML=padzero(sec);
}
function padzero(num)
{
  return num<10?"0"+num:num;
}
setInterval(clock,300);
