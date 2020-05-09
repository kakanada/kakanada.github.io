var b_POL_L=false;
function POL_L()
{
  if(CHECK_TEL())
  {
    if(b_POL_L == false)
    {
      document.getElementById("POL_L").style.left = "0vw";
      b_POL_L=true;
    }
    else {
      document.getElementById("POL_L").style.left = "-100vw";
      b_POL_L=false;
    }
  }
}

var b_POL_R=false;
function POL_R()
{
  if(CHECK_TEL())
  {
    if(b_POL_R == false)
    {
      document.getElementById("POL_R").style.right = "0vw";
      b_POL_R=true;
    }
    else {
      document.getElementById("POL_R").style.right = "-100vw";
      b_POL_R=false;
    }
  }
}

function CHECK_TEL()
{
  var SIZE_window_X = screen.width;
  var SIZE_window_Y = screen.height;

  if(SIZE_window_X < 960 && SIZE_window_Y < 960)
  {
    return true;
  }
  else {
    return false;
  }
}

// document.getElementById("PB_L").onclick = function () {POL_L();};
// document.getElementById("PB_R").onclick = function () {POL_R();};
// document.getElementById("PB_L").ontouchend = function () {POL_L();};
// document.getElementById("PB_R").ontouchend = function () {POL_R();};
document.getElementById("PB_L").addEventListener("touchend",function(){POL_L();});
document.getElementById("PB_R").addEventListener("touchend",function(){POL_R();});

var ANDR;
var ANDR_S = false;
var ANDR_B = false;
setInterval(function () {
  ANDROID_POSITION();
}, 10);
function ANDROID_POSITION()
{
  body_X = screen.width;
  body_Y = screen.height;
  if(body_X < 1000 && body_Y < 1000)
  {
    if (body_X < body_Y && ANDR == false || body_X > body_Y && ANDR_S == false) {
      document.getElementById("ANDROID").style.zIndex = "-1";
      ANDR = true;
      ANDR_S = true;
      ANDR_B = true;
      setTimeout(CHECK_SIZE(0),500);
    }
    else if (body_Y < body_X && ANDR == true || body_Y > body_X && ANDR_S == false){
      document.getElementById("ANDROID").style.zIndex = "1000";
      ANDR = false;
      ANDR_S = true;
      ANDR_B = true;
      setTimeout(CHECK_SIZE(0),500);
    }
  }
  else {
    document.getElementById("ANDROID").style.zIndex = "-1";
    ANDR = true;
  }
}
