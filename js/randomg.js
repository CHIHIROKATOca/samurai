var txt = new Array();
txt[0]="images/character/r-g.png";
txt[1]="images/character/r-r.png";
txt[2]="images/character/r-j.png";
txt[3]="images/character/r-k.png";
txt[4]="images/character/r-h.png";
txt[5]="images/character/r-s.png";

mmax = 5; //メッセージ行数
txtno = Math.floor(Math.random() * mmax);
document.write("<img src='"+txt[txtno]+"'>");