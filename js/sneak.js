var stat = true;
var Map_X = 40;
var Map_Y = 20;
var Start_speed = 4;
var K_Raz = 20;



var Map = new Array(Map_X);
for(var i = 0; i < Map_X; i++)
  Map[i] = new Array(Map_Y);


var P_x;
var P_y;
var L_x = new Array(Map_X * Map_Y);
var L_y = new Array(Map_X * Map_Y);
var NL_x = new Array(Map_X * Map_Y);
var NL_y = new Array(Map_X * Map_Y);
var NL = 0;
var L;
var Ap_x;
var Ap_y;
var dx;
var dy;
var DX;
var DY;
var MaxLevel = 1;
var speed = Start_speed;


window.onload=Start();
Move();

function rand(max)
{
  return Math.floor(Math.random() * max);
}
function END_M()
{
  stat = false;

  STATUS_END_M();
}
function END_P()
{
  stat = false;

  STATUS_END_P();
}


      function print_K()
      {
        if(STATUS_END == false)
        {
          for(var i = 0; i < Map_X; i++)
          {
            for(var j = 0; j < Map_Y; j++)
            {
              Map [i][j] = 0;
            }
          }
          for(var i = 0; i < L; i++)
          {
            Map [L_x [i]][L_y [i]] = 2;
          }
          Map [Ap_x][Ap_y] = 3;
          if(Map [P_x][P_y] == 2)
          {
            Map [P_x][P_y] = 4;
          }
          else
          {
            Map [P_x][P_y] = 1;
          }

          var firstTable = document.getElementById("F_table");
          table = document.createElement("table");
          for(var i = 0; i < Map_Y; i++)
          {
            tr = document.createElement("tr");
            for(var j = 0; j < Map_X; j++)
            {
              td = document.createElement("td");
              if(Map [j][i] == 0)
              td.style.backgroundColor = "#ffffff"; //Пусто
              if(Map [j][i] == 1)
              td.style.backgroundColor = "#055400"; //Голова
              if(Map [j][i] == 2)
              td.style.backgroundColor = "#55a450"; //Хвост
              if(Map [j][i] == 3)
              td.style.backgroundColor = "#b30015"; //Яблоко
              if(Map [j][i] == 4)
              td.style.backgroundColor = "#b30015"; //голова усает хвост
              td.style.width = (99.8 / Map_X) + "%";
              tr.appendChild(td);
            }
            tr.style.width = (99.8 / Map_Y) + "%";
            table.appendChild(tr);
          }

          document.getElementById("number").innerHTML=("Ваш ровень: " + (L - 4));

          table.id = "F_table";
          table.style.width = table_size_X;
          table.style.height = table_size_Y;

          if(firstTable == null)
          {
            return document.querySelector("tables_div").appendChild(table);
          }
          else
          {
            return document.getElementById("tables_div").replaceChild(document.getElementById("tables_div").appendChild(table), firstTable);
          }
        }


        else
        {
          var DEL_X_ = (40-Map_X)/2;
          var DEL_Y_ = (20-Map_Y)/2;
          var DEL_X1;
          var DEL_Y1;
          var DEL_X2;
          var DEL_Y2;
          if(DEL_X_<0)
          {
            DEL_X1 = -1 * DEL_X_;
            DEL_X2=0;
          }
          else {
            DEL_X1 =0;
            DEL_X2=DEL_X_;
          }
          if(DEL_Y_<0)
          {
            DEL_Y1 = -1 * DEL_Y_;
            DEL_Y2=0;
          }
          else {
            DEL_Y1 =0;
            DEL_Y2=DEL_Y_;
          }
          for(var i = 0; i < Map_X; i++)
          {
            for(var j = 0; j < Map_Y; j++)
            {
              Map [i+DEL_X1][j+DEL_Y1] = S_END[i+DEL_X2][j+DEL_Y2];
            }
          }

          var firstTable = document.getElementById("F_table");
          table = document.createElement("table");
          for(var i = 0; i < Map_Y; i++)
          {
            tr = document.createElement("tr");
            for(var j = 0; j < Map_X; j++)
            {
              td = document.createElement("td");
              if(Map [j][i] == 0)
              td.style.backgroundColor = "#ffffff"; //Пусто
              if(Map [j][i] == 1)
              td.style.backgroundColor = "#55a450"; //WIN
              if(Map [j][i] == 2)
              td.style.backgroundColor = "#d39da3"; //END
              td.style.width = (99.8 / Map_X) + "%";
              tr.appendChild(td);
            }
            tr.style.width = (99.8 / Map_Y) + "%";
            table.appendChild(tr);
          }

          document.getElementById("number").innerHTML=("Ваш ровень: " + (L - 4));

          table.id = "F_table";
          table.style.width = table_size_X;
          table.style.height = table_size_Y;

          if(firstTable == null)
          {
            return document.querySelector("tables_div").appendChild(table);
          }
          else
          {
            return document.getElementById("tables_div").replaceChild(document.getElementById("tables_div").appendChild(table), firstTable);
          }
        }
      }

      function check_position_ap()
      {
        var c_b = false;
        var q = true;
        while(q == true)
        {
          q = false;
          for(var i = 0; i < L; i++)
          {
            if(L_x [i] == Ap_x && L_y [i] == Ap_y)
            {
              c_b = true;
            }
          }
          if(P_x == Ap_x && P_y == Ap_y)
          {
            c_b = true;
          }
          if(P_x + dx == Ap_x && P_y + dy == Ap_y)
          {
            c_b = true;
          }
          if(DX == 0 && P_x == Ap_x)
          {
            Ap_x = Ap_x + rand(rand(Map_X));
            if(Ap_x < 0)
            Ap_x = Ap_x + Map_X;
            if(Ap_x > Map_X - 1)
            Ap_x = Ap_x - Map_X;
            q = true;
          }
          if(DY == 0 && P_y == Ap_y)
          {
            Ap_y = Ap_y + rand(rand(Map_Y));
            if(Ap_y < 0)
            Ap_y = Ap_y + Map_Y;
            if(Ap_y > Map_Y - 1)
            Ap_y = Ap_y - Map_Y;
            q = true;
          }
        }
        return c_b;
      }



      //Sneak function
      function Start()
      {
        STATUS_START();

        STATUS_END = false;
        speed = Start_speed;
        Z = false;
        stat = true;
        P_x = Map_X / 2;  P_y = Map_Y / 2;
        L = 5;

        for(var i = 0; i < L; i++)
        {
          L_x[i] = P_x + 1 + i;
          L_y[i] = P_y;
        }

        dx = -1;
        dy = 0;

          do
          {
            Ap_x = rand(Map_X);
            Ap_y = rand(Map_Y);

          } while (check_position_ap() == true);


        print_K();
      }




      function Move()
      {
        if(stat == true && Z == false && BB_SK == false && ANDR == true)
        {
          if(ANDR_B == true)
            CHECK_SIZE(0);
          var b = false;  //Съел яблоко?
          var bn = false; //Увеличить хвост?
          var end = false;  //Проиграл?
          var End_P = false;  //Выиграл?

          var w_dx = P_x + dx;
          var w_dy = P_y + dy;

          if(w_dx > Map_X - 1)
            w_dx = w_dx - Map_X;
          if(w_dx < 0)
            w_dx = w_dx + Map_X;
          if(w_dy > Map_Y - 1)
            w_dy = w_dy - Map_Y;
          if(w_dy < 0)
            w_dy = w_dy + Map_Y;

          if(w_dx == Ap_x && w_dy == Ap_y)
          {
            b = true;
            if(L + 3 == Map_X * Map_Y)
            {
              End_P = true;
            }
          }
          else
          {
            for(var i = 0; i < L - 1 && end == false; i++)
            {
              if(w_dx == L_x [i] && w_dy == L_y [i])
              {
                end = true;
              }
            }
          }

          if(End_P == true)
          {
            END_P();
          }
          if(end == true)
          {
            END_M();
          }

          for(var i = 0; (i < NL) && (bn == false); i++)
          {
            if(L_x[L - 1] == NL_x[i] && L_y[L - 1] == NL_y[i])
            {
              bn = true;
              for(var j = i; j < NL - 1; j++)
              {
                NL_x[j] = NL_x[j + 1];
                NL_y[j] = NL_y[j + 1];
              }
              NL--;
            }
          }

          if(bn == true)
          {
            L_x [L] = L_x [L - 1];
            L_y [L] = L_y [L - 1];

          }
          for(var i = 0; i < L - 1; i++)
          {
            L_x [L - 1 - i] = L_x [L - 2 - i];
            L_y [L - 1 - i] = L_y [L - 2 - i];
          }
          L_x [0] = P_x;
          L_y [0] = P_y;
          if(bn == true)
          {
            L++;
          }
          P_x = P_x + dx;
          P_y = P_y + dy;

          if(P_x == -1)
          {
            P_x = Map_X - 1;
          }
          if(P_x == Map_X)
          {
            P_x = 0;
          }
          if(P_y == -1)
          {
            P_y = Map_Y - 1;
          }
          if(P_y == Map_Y)
          {
            P_y = 0;
          }
          DX = dx;
          DY = dy;

          if(b == true)
          {
            NL_x[NL] = Ap_x;
            NL_y[NL] = Ap_y;
            NL++;

            do
            {
              Ap_x = rand(Map_X);
              Ap_Y = rand(Map_Y);

            } while (check_position_ap() == true);

            if(MaxLevel < L - 4)
              MaxLevel = L - 4;
          }

          document.getElementById("numberS").innerHTML = ("Выш рекорд: " + (MaxLevel));

          print_K();
        }
        setTimeout(Move, 1000 / speed);
      }


//Ходы
function Move_X()   //dx+
{
  if(!(DX == -1 && DY == 0))
  {
    dx = 1;
    dy = 0;
  }
}
function Move_X_()  //dx-
{
  if(!(DX == 1 && DY == 0))
  {
    dx = -1;
    dy = 0;
  }
}
function Move_Y()   //dy+
{
  if(!(DX == 0 && DY == -1))
  {
    dy = 1;
    dx = 0;
  }
}
function Move_Y_()  //dy-
{
  if(!(DX == 0 && DY == 1))
  {
    dy = -1;
    dx = 0;
  }
}


function moveRect(e){
    switch(e.keyCode){

        case 65:  // если нажата клавиша влево
            Move_X_();
            break;
        case 87:   // если нажата клавиша вверх
            Move_Y_();
            break;
        case 68:   // если нажата клавиша вправо
            Move_X();
            break;
        case 83:   // если нажата клавиша вниз
            Move_Y();
            break;
        case 13:   // если нажата клавиша вниз
            Start();
            break;
        case 27:
            Pause();
            break;
        case 32:
            Prob();
            break;
        case 38:
            Move_Y_();
            break;
        case 37:
            Move_X_();
            break;
        case 40:
            Move_Y();
            break;
        case 39:
            Move_X();
            break;
    }
}
function Prob()
{
  if(stat==false)
  {
    Start();
  }
  else {
    if(Z==false)
    {
      Z=true;
    }
    else {
      Z=false;
    }
  }
}

addEventListener("keydown", moveRect);

function L_B()
{
  Move_X_();
}
function R_B()
{
  Move_X();
}
function T_B()
{
  Move_Y_();
}
function B_B()
{
  Move_Y();
}
function RES()
{
  Start();
  CHECK_SIZE(0);
}
function PAUS()
{
  Pause();
}
var Z = false;
function Pause()
{
  if(Z == false)
  {
    Z = true;
  }
  else
  {
    Z = false;
  }
}

document.getElementById("res").addEventListener("click",function(){RES();});
document.getElementById("esc").addEventListener("click",function(){Pause();});



var STATUS_END = false;
var S_END = new Array(40);
for(var i = 0; i < 40; i++)
{
  S_END[i] = new Array(20);
  for(var j = 0; j < 20; j++)
  {
    S_END[i][j] = 0;
  }
}
function STATUS_START()
{

}
function STATUS_END_M()
{
  var K = 2;
  STATUS_END=true;
  for(var i=0;i<40;i++)
    for(var j=0;j<20;j++)
      S_END[i][j]=0;

  S_END[2][5] = K;
  S_END
  for(var i=5;i<15;i++)
  {
    S_END[2][i] = K;
    S_END[3][i] = K;
  }
  for(var i=4;i<9;i++)
  {
    S_END[i][13]=K;
    S_END[i][14]=K;
  }

  for(var i=11;i<18;i++)
  {
    S_END[i][13]=K;
    S_END[i][6]=K;
    if(i!=11 && i!=17)
    {
      S_END[i][14]=K;
      S_END[i][5]=K;
    }
  }
  for(var i=7;i<13;i++)
  {
    S_END[11][i]=K;
    S_END[12][i]=K;
    S_END[17][i]=K;
    S_END[16][i]=K;
  }


  for(var i=20;i<27;i++)
  {
    S_END[i][13]=K;
    S_END[i][6]=K;
    if(i!=20 && i!=26)
    {
      S_END[i][14]=K;
      S_END[i][5]=K;
    }
  }
  S_END[20][7]=K;
  S_END[20][8]=K;
  S_END[21][7]=K;
  S_END[21][8]=K;
  S_END[26][12]=K;
  S_END[26][11]=K;
  S_END[25][12]=K;
  S_END[25][11]=K;
  for(var i=20;i<26;i++)
  {
    S_END[i][9]=K;
    S_END[i+1][10]=K;
  }

  for(var i=20;i<27;i++)
  {
    for(var j=3;j<17;j++)
    {
      S_END[i+9][j]=S_END[i][j];
    }
  }


  for(var i=38;i>=0;i--)
  {
    for(var j=0;j<20;j++)
    {
      S_END[i+1][j]=S_END[i][j];
    }
  }
}
function STATUS_END_P()
{
  STATUS_END = true;
  for(var i=0;i<40;i++)
    for(var j=0;j<20;j++)
      S_END[i][j]=0;

  for(var i =7;i<14;i++)
  {
    S_END[9][i]=1;
    S_END[6][i]=1;
    S_END[5][i]=1;
  }

  S_END[6][5] = 1;
  S_END[6][6] = 1;

  S_END[5][5] = 1;
  S_END[5][6] = 1;

  S_END[6][14] = 1;
  S_END[7][14] = 1;
  S_END[8][14] = 1;
  S_END[6][13] = 1;
  S_END[7][13] = 1;
  S_END[8][13] = 1;

  for(var i = 0; i < 40 / 2; i++)
  {
    for(var j = 0; j < 20; j++)
    {
      S_END[40 / 2 - 1 - i][j] = S_END[i][j];
    }
  }

  S_END[17][5] = 1;
  S_END[18][5] = 1;
  S_END[19][5] = 1;
  S_END[20][5] = 1;
  S_END[21][5] = 1;
  S_END[22][5] = 1;
  S_END[23][5] = 1;
  S_END[24][5] = 1;
  S_END[17][6] = 1;
  S_END[18][6] = 1;
  S_END[19][6] = 1;
  S_END[20][6] = 1;
  S_END[21][6] = 1;
  S_END[22][6] = 1;
  S_END[23][6] = 1;
  S_END[24][6] = 1;


  S_END[17][14] = 1;
  S_END[18][14] = 1;
  S_END[19][14] = 1;
  S_END[20][14] = 1;
  S_END[21][14] = 1;
  S_END[22][14] = 1;
  S_END[23][14] = 1;
  S_END[24][14] = 1;
  S_END[17][13] = 1;
  S_END[18][13] = 1;
  S_END[19][13] = 1;
  S_END[20][13] = 1;
  S_END[21][13] = 1;
  S_END[22][13] = 1;
  S_END[23][13] = 1;
  S_END[24][13] = 1;


  for(var i = 7; i <13; i++)
  {
    S_END[20][i] = 1;
    S_END[21][i] = 1;
  }


  for(var i=5;i<15;i++)
  {
    S_END[27][i] = 1;
    S_END[28][i] = 1;

    S_END[34][i] = 1;
    S_END[33][i] = 1;
  }


  S_END[29][7] = 1;
  S_END[29][8] = 1;
  S_END[29][9] = 1;
  S_END[30][8] = 1;
  S_END[30][9] = 1;
  S_END[30][10] = 1;
  S_END[31][9] = 1;
  S_END[31][10] = 1;
  S_END[31][11] = 1;
  S_END[32][10] = 1;
  S_END[32][11] = 1;
  S_END[32][12] = 1;

  print_K();
}




var Map_X = 40;
var Map_Y = 20;

var table_size_X;
var table_size_Y;
window.onload = CHECK_SIZE(0);
function CHECK_SIZE(r)
{
  var size_div_Y = document.getElementById("tables_div").scrollHeight;
  var size_div_X = document.getElementById("tables_div").scrollWidth;
  if(size_div_Y / size_div_X > Map_Y / Map_X)
  {
    table_size_X = 100 + "%";
    table_size_Y = (size_div_X * Map_Y / Map_X) + "px";
    document.getElementById("F_table").style.width = 100 + "%";
    document.getElementById("F_table").style.height = (size_div_X * Map_Y / Map_X) + "px";
  }
  else
  {
    table_size_X = (size_div_Y * Map_X / Map_Y) + "px";
    table_size_Y = 100 + "%";
    document.getElementById("F_table").style.width = (size_div_Y * Map_X / Map_Y) + "px";
    document.getElementById("F_table").style.height = 100 + "%";
  }

  document.getElementById("tables_div").style.left =
  ((document.getElementById("tables_div").scrollWidth - document.getElementById("F_table").scrollWidth) / 2 ) + "px";


  //
  // //поля слува (справо автоматически)
  // var size_X_table = document.getElementById("main_box_id").scrollWidth;
  // var size_Y_table = (size_X_table - size_XY_table / Map_Y * Map_X) / 2;
  // document.getElementById("tables_div").style.left = size_Y_table + "px";



  document.getElementById("but_icon").style.height = (document.getElementById("but_icon").scrollWidth * document.getElementById("icon").scrollHeight / document.getElementById("icon").scrollWidth) + "px";
  document.getElementById("but_icon").style.bottom = (2 * 0.05 ) + "em";
  ANDR_B = false;
    if(r < 10)
    {
      CHECK_SIZE(r + 1);
    }
}



// SPRAVKA
var BB_SK = false;
function SKAZKA()
{

  if(BB_SK == false)
  {
    document.getElementById("SPR_B").style.top = "0vh";
    BB_SK = true;
  }
  else {
    document.getElementById("SPR_B").style.top = "100vh";

    setTimeout(TTRT,1000);
  }
}

function TTRT()
{
  BB_SK = false;
}



var ANDR;
var ANDR_S = false;
var ANDR_B = false;
setInterval(function () {
  ANDROID_POSITION();
}, 10);
function ANDROID_POSITION()
{
  body_X = screen.width;
  body_Y = screen.height
  if (body_X > body_Y && ANDR == false || body_X > body_Y && ANDR_S == false) {
    document.getElementById("ANDROID").style.zIndex = "-1";
    ANDR = true;
    ANDR_S = true;
    ANDR_B = true;
    setTimeout(CHECK_SIZE(0),500);
  }
  else if (body_Y > body_X && ANDR == true || body_Y > body_X && ANDR_S == false){
    document.getElementById("ANDROID").style.zIndex = "1000";
    ANDR = false;
    ANDR_S = true;
    ANDR_B = true;
    setTimeout(CHECK_SIZE(0),500);
  }
}

document.getElementById("but_l").addEventListener("click",function(){L_B();});
document.getElementById("but_r").addEventListener("click",function(){R_B();});
document.getElementById("but_t").addEventListener("click",function(){T_B();});
document.getElementById("but_b").addEventListener("click",function(){B_B();});
