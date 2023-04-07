window.onload = function () {
  
    let second = 00; 
    let minute = 00; 
    let unit = 00; 
    let appendUnit = document.querySelector(".unit")
    let appendSecond = document.querySelector(".second")
    let appendMinute = document.querySelector(".minute")
    let buttonStart = document.querySelector('.start');
    let buttonStop = document.querySelector('.stop');
    let buttonReset = document.querySelector('.reset');
    let Interval ;

    //Changing the value of html text (minute ,second and millisecond) 
        unit = "00";
        second = "00";
        minute = "00";
        appendUnit.innerHTML = unit;
        appendSecond.innerHTML = second;
        appendMinute.innerHTML = minute;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
       //Reassigning the value of HTML text
        unit   = "00";
        second = "00";
        minute = "00";
        appendUnit.innerHTML = unit;
        appendSecond.innerHTML = second;
        appendMinute.innerHTML = minute;
    }
    
     
    
    function startTimer () {
      unit++; 
      
      if(unit <= 9){
        appendUnit.innerHTML = "0" + unit;
      }
      
      if (unit > 9){
        appendUnit.innerHTML = unit;
        
      } 
      
      if (unit > 99) {
        // console.log("second");
        second++;
        appendSecond.innerHTML = "0" + second;
        unit = 0;
        appendUnit.innerHTML = "0" + 0;
      }
      
      if (second > 9){
        appendSecond.innerHTML = second;
      }

      if (second == 59){
        second = 0;
        console.log(minute);
        minute++;
        appendMinute.innerHTML = "0"+ minute;
        appendSecond.innerHtml = "0" + 0;
      }
    
    }
    
  
  }