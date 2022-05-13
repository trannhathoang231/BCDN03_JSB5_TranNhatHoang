document.getElementById("btnResult").onclick=function manageAdmission(){
    var diemchuan = document.getElementById("inputScore1").value,
    pointLocate=Number(document.getElementById("selLocation").value),
    pointUser=Number(document.getElementById("selUser").value),
    diem1=Number(document.getElementById("inputScore2").value),
    diem2=Number(document.getElementById("inputScore3").value),
    diem3=Number(document.getElementById("inputScore4").value);

    if(checkScore(diem1)&&checkScore(diem2) &&checkScore(diem3)){
        var o = diem1 +diem2+diem3+pointLocate+pointUser;
        document.getElementById("txtResult").innerHTML=o>=diemchuan?"Đậu. Tổng điểm là: " +o:"Rớt. Tổng điểm là: "+o;
        
    }else
    document.getElementById("txtResult").innerHTML="Bạn đã rớt do có điểm bằng không!";

}

function checkScore(a){
    a>0;
    return(a);
}
