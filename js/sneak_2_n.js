//  Параматры :
      var Map_X = 32;       //размеры карты по оси X
      var Map_Y = 16;       //размеры карты по оси Y
      var speed = 5;        //скорость змейки
      var speed_L = 5;      //периуд увеличения хвоста



      var brows;
      var table_size_Y;
      var table_size_X;
      var BOOL_P_OR_M;
      var brows_b = false;









var stat = true;
var Map = new Array(Map_X);
for(var i = 0; i < Map_X; i++)
  Map[i] = new Array(Map_Y);

var Map_S = new Array(Map_X);
for(var i = 0; i < Map_X; i++)
  Map_S[i] = new Array(Map_Y);


var P_x;
var P_y;
var L_x = new Array(Map_X * Map_Y);
var L_y = new Array(Map_X * Map_Y);
var L_s = new Array(Map_X * Map_Y);
var L_i;
var L;
var dx;
var dy;
var DX = -1;
var DY = 0;
var MaxLevel = 1;
var Level2 = 1;
var max_slovo = 0;




var SLOVO_R = [
["Ветер","Веет","С","Юга","И","Луна","Взошла","Что","Же","Ты,","Блядюга","Ночью","Не","Пришла","Не","Пришла","Ты","Ночью","Не","Явилась","Днем","Думаешь","Мы","Дрочим","Нет","Других","Ебём","Есенин"],
["Жизнь","Как","Коня","Держи","За","Узду","Не","Охай","И","Не","Ахай","Если","Тебя","Посылают","В","Пизду","Посылай","Всех","На","Хуй","Есенин"],
["Я","Иду","По","Росе","Я","В","Ней","Ноги","Мочу","Я","Такой","Же","Как","Все","Я","Ебаться","Хочу","Есенин"]];


var T_R;

var SLOVO_START = SLOVO_R.length;

var SLOVO_i;
var SLOVO_X;
var SLOVO_Y;
var SLOVO_X_I;
var SLOVO_Y_I;
var SLOVO;

var REST = [false, false, false, false, false, false];

var GIM;
var WWS;

window.onload = Start0();
setInterval( Move, 1000 / speed);




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
        if (STATUS_END == false)
        {

            for(var i = 0; i < Map_X; i++)
            {
              for(var j = 0; j < Map_Y; j++)
              {
                Map [i][j] = 0;
              }
            }

            for(var h = 0; h < SLOVO_i; h++)
            {
              if(h == WWS)
                Map[SLOVO_X[h]][SLOVO_Y[h]] = 5;
              else
                Map[SLOVO_X[h]][SLOVO_Y[h]] = 3;
            }
            for(var i = 0; i < L; i++)
            {
              Map [L_x [i]][L_y [i]] = 2;
            }
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
                if(Map_S[j][i] == "-")
                {
                  td.innerText = " ";
                  Map[j][i] = 0;
                }
                else if(Map_S[j][i] == "=")
                {
                  td.innerText = " ";
                  Map[j][i] = 6;
                }
                else
                  td.innerText = Map_S [j][i];
                if(Map [j][i] == 0)
                  td.style.backgroundColor = "#ffffff"; //Пусто
                td.style.color = "#d39da3";
                if(Map [j][i] == 1)
                {
                  td.style.backgroundColor = "#055400"; //Голова
                  td.style.color = "#055400";
                }
                if(Map [j][i] == 2)
                {
                  td.style.backgroundColor = "#55a450"; //Хвост
                  td.style.color = "#55a450";
                }
                if(Map [j][i] == 3)
                {
                  td.style.backgroundColor = "#d39da3"; //слово
                  td.style.color = "#ffffff";
                }
                if(Map [j][i] == 4)
                {
                  td.style.backgroundColor = "#b30015"; //голова усает хвост
                  td.style.color = "#b30015";
                }
                if(Map [j][i] == 5)
                {
                  td.style.backgroundColor = "#b30015"; //слово*
                  td.style.color = "#ffffff";
                }
                if(Map [j][i] == 6)
                {
                  td.style.backgroundColor = "#b30015";
                  td.style.color = "#b30015";
                }
                td.style.width = (99.8 / Map_X) + "%";
                tr.appendChild(td);
              }
              tr.style.width = (99.8 / Map_Y) + "%";
              table.appendChild(tr);
            }

            document.getElementById("number").innerHTML = ("Уровень: " + (Level2));

            table.id = "F_table";
            table.style.width = table_size_X;
            table.style.height = table_size_Y;

            if(firstTable == null)
            {
              document.getElementById("tables_div").appendChild(table);
            }
            else
            {
              document.getElementById("tables_div").replaceChild(document.getElementById("tables_div").appendChild(table), firstTable);
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
                DEL_X2 = 0;
              }
              else {
                DEL_X1 = 0;
                DEL_X2 = DEL_X_;
              }
              if(DEL_Y_ < 0)
              {
                DEL_Y1 = -1 * DEL_Y_;
                DEL_Y2 = 0;
              }
              else {
                DEL_Y1 = 0;
                DEL_Y2 = DEL_Y_;
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



      function Generat_Slov()
      {
        var t = 0;
        SLOVO_i = 5;

        for(var i = 0; i < SLOVO_i; i++)
        {
          t = t + SLOVO[i].length;
        }
        t = t - SLOVO_i;
        var T = Array(t);
        var tt = 0;
        for(var i = 0; i < SLOVO_i; i++)
        {
          for(var j = 1; j < SLOVO[i].length; j++)
          {
            T[tt] = SLOVO[i].charAt(j);
            tt++;
          }
        }
        for(var i = 0; i < Map_X; i++)
        {
          for(var j = 0; j < Map_Y; j++)
          {
            Map_S[i][j] = T[rand(tt)];
          }
        }



        for(var i = 0; i < SLOVO_i; i++)
        {
          var BB = false;
          var ASDF = 0;
          do
          {
            var s_x = rand(Map_X);
            var s_y = rand(Map_Y);
            for(var l = 0; (l < L) && (BB == false); l++)
            {
              if(L_x[l] == s_x && L_y[l] == s_y)
                BB = true;
            }
            ASDF++;
          } while (BB == true && ASDF < 100);
          var Ddx;
          var Ddy;
          var t = rand(4);
          if(t == 0)
          {
            Ddx = 0;
            Ddy = 1;
          }
          if(t == 1)
          {
            Ddx = 0;
            Ddy = -1;
          }
          if(t == 2)
          {
            Ddx = 1;
            Ddy = 0;
          }
          if(t == 3)
          {
            Ddx = -1;
            Ddy = 0;
          }

          for(var j = 0; j < SLOVO[SLOVO_i - 1 - i].length; j++)
          {
            var E_X = s_x + Ddx * j;
            var E_Y = s_y + Ddy * j;

            if(E_X >= Map_X)
            {
              E_X = E_X - Map_X;
            }
            if(E_Y >= Map_Y)
            {
              E_Y = E_Y - Map_Y;
            }
            if(E_X < 0)
            {
              E_X = E_X + Map_X;
            }
            if(E_Y < 0)
            {
              E_Y = E_Y + Map_Y;
            }

            Map_S[E_X][E_Y] = SLOVO[SLOVO_i - 1 - i].charAt(j)

          }
          SLOVO_X[SLOVO_i - 1 - i] = s_x;
          SLOVO_Y[SLOVO_i - 1 - i] = s_y;
        }
      }


function Start0()
{

          SLOVO_i=0;
          L=0;
          P_x=0;
          P_y=0;
          Start();

}

      //Sneak function
      function Start()
      {
        WWS = 0;
        T_R = 0;
        L_i = 0;
        Z = false;
        ZZ = false;
        STATUS_END = false




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

        Level2 = 1;


          do {
                    GIM = rand(SLOVO_START);
          } while (GIM + 1 == NaN);
          var j;

          GIM++;
          for(var i = 0; i < GIM; i++)
          {
            if(REST[i] == true)
              i++;
            j = i;
          }

          GIM = j;


          SLOVO_i = 5;
          if(T_R + 4 < SLOVO_R[GIM].length)
            SLOVO = [SLOVO_R[GIM][T_R], SLOVO_R[GIM][T_R + 1], SLOVO_R[GIM][T_R + 2], SLOVO_R[GIM][T_R + 3], SLOVO_R[GIM][T_R + 4]];
          else
          {
            WWS++;
          }
          SLOVO_X = Array(SLOVO_i);
          SLOVO_Y = Array(SLOVO_i);


        Generat_Slov();


        print_K();
      }

var TIME_PUTIN = false;
      function Move()
      {
        var AUD_Mo = document.getElementById("player")

        if(stat == true && Z == false && BB_SK == false && ANDR == true)
        {
          var b = false;  //Увеличить хвост?
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

          L_i++;
          if(L_i == speed_L)
          {
            b = true;
            L_i = 0;
          }


          for(var i = 0; i < L - 1 && end == false; i++)
          {
            if(w_dx == L_x [i] && w_dy == L_y [i])
            {
              end = true;
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

          if(b == true)
          {
            L_x [L] = L_x [L - 1];
            L_y [L] = L_y [L - 1];
            L_s [L] = L_s [L - 1];
          }
          for(var i = 0; i < L - 1; i++)
          {
            L_x [L - 1 - i] = L_x [L - 2 - i];
            L_y [L - 1 - i] = L_y [L - 2 - i];
            L_s [L - 1 - i] = L_s [L - 2 - i];
          }
          L_x [0] = P_x;
          L_y [0] = P_y;
          if(b == true)
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

          L_s [0] = Map_S[P_x][P_y];

          var c = true;
          for(var i = 0; (i < SLOVO_i) && c == true; i++)
          {
            var t = true;
            for(var j = 0; (j < SLOVO[i].length) && t == true; j++)
            {
              if(L_s[SLOVO[i].length - 1 - j] != SLOVO[i].charAt(j))
                t = false;
            }
            if(t == true)
            {
              c = false;
              Level2++;
              L = L - SLOVO[i].length;
              if(L < 5)
                L = 5;
              if(i == WWS)
              {
                T_R++;
                if(T_R == SLOVO_R[GIM].length)
                {
                  END_P();
                }
                if(T_R + 4 < SLOVO_R[GIM].length)
                  SLOVO = [SLOVO_R[GIM][T_R], SLOVO_R[GIM][T_R + 1], SLOVO_R[GIM][T_R + 2], SLOVO_R[GIM][T_R + 3], SLOVO_R[GIM][T_R + 4]];
                else
                {
                  WWS++;
                }
              }
              Generat_Slov();
            }
          }
          if(MaxLevel < Level2)
            MaxLevel = Level2;



          document.getElementById("numberS").innerHTML = ("Ваш рекорд: " + (MaxLevel));

          print_K();
        }


      }


//Ходы
function Move_X()   //dx+
{
  if(Z == true)
    Z = false;
  if(!(DX == -1 && DY == 0))
  {
    dx = 1;
    dy = 0;
  }
}
function Move_X_()  //dx-
{
  if(Z == true)
    Z = false;
  if(!(DX == 1 && DY == 0))
  {
    dx = -1;
    dy = 0;
  }
}
function Move_Y()   //dy+
{
  if(Z == true)
    Z = false;
  if(!(DX == 0 && DY == -1))
  {
    dy = 1;
    dx = 0;
  }
}
function Move_Y_()  //dy-
{
  if(Z == true)
    Z = false;
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
var ZZZZ = true;



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
}
function PAUS()
{
  Pause();
}
var Z;
var ZZ;
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


    if(r < 10)
    {
      CHECK_SIZE(r + 1);
    }
}



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
  STATUS_END=true;
  for(var i=0;i<40;i++)
    for(var j=0;j<20;j++)
      S_END[i][j]=0;

var K=2;
        for(var i=5;i<15;i++)
        {
          S_END[4][i] = K;
          S_END[5][i] = K;
        }
        for(var i=6;i<10;i++)
        {
          S_END[i][13]=K;
          S_END[i][14]=K;
        }

        for(var i=12;i<18;i++)
        {
          S_END[i][13]=K;
          S_END[i][6]=K;
          if(i!=12 && i!=17)
          {
            S_END[i][14]=K;
            S_END[i][5]=K;
          }
        }
        for(var i=7;i<13;i++)
        {
          S_END[13][i]=K;
          S_END[12][i]=K;
          S_END[17][i]=K;
          S_END[16][i]=K;
        }


        for(var i=20;i<26;i++)
        {
          S_END[i][13]=K;
          S_END[i][6]=K;
          if(i!=20 && i!=25)
          {
            S_END[i][14]=K;
            S_END[i][5]=K;
          }
        }
        S_END[20][7]=K;
        S_END[20][8]=K;
        S_END[21][7]=K;
        S_END[21][8]=K;
        S_END[24][12]=K;
        S_END[24][11]=K;
        S_END[25][12]=K;
        S_END[25][11]=K;
        for(var i=20;i<25;i++)
        {
          S_END[i][9]=K;
          S_END[i+1][10]=K;
        }

        for(var i=20;i<27;i++)
        {
          for(var j=3;j<17;j++)
          {
            S_END[i+8][j]=S_END[i][j];
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


  for(var ik = 5; ik < 15; ik++)
  {
    S_END[27][ik] = 1;
    S_END[28][ik] = 1;

    S_END[34][ik] = 1;
    S_END[33][ik] = 1;
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


  // S_END[3][1] = 1;
  // S_END[3][1] = 1;
  // S_END[3][1] = 1;
  // S_END[3][1] = 1;


  print_K();
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
