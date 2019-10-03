
  var i = 0;
  setInterval(function(){
    console.log(i);
    i++
    if (i === str.length) {
      i=0;
    }
  }, 70);

  var s = document.documentElement.clientWidth;
  var s2 = document.documentElement.clientHeight;
  var width = q.width = s;
  var height = q.height = s2;
  var letters = Array(256).join(1).split('');
  var draw = function async () {
    q.getContext('2d').fillStyle='rgba(255,255,255,.1)';
    q.getContext('2d').fillRect(0,0,width,height);
    q.getContext('2d').fillStyle='#323538';
    letters.map(function(y_pos, index){
      // text = String.fromCharCode(3e4+Math.random()*33);
      str = ' A full-stack developer has all the keys to the house – there is no door that you cannot open. It provides an unparalleled freedom to simultaneously work on front-end and back-end development and evaluate the capabilities and potential of your website in real-time without having to wait for another developer to review if what you’re desiring is possible or not.';
      text = String(str.charAt(i));
      x_pos = index * 150;
      q.getContext('2d').fillText(text, x_pos, y_pos);
      letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 15;
    });
  };

 setInterval(draw, 70);

window.onresize = function(){ location.reload(); }
