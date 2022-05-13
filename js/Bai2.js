 function calcElecBill(){
    var ten = document.getElementById("inputName").value,
    soKW = Number(document.getElementById("inputKW").value), 
    tienDien=0;
    0<soKW&&soKW<=50?tienDien=soKW*kw_1:
    50<soKW&&soKW<=100?tienDien=50*kw_1+(n-50)*kw_2:
    soKW>100&&soKW<=200?tienDien=50*kw_1+50*kw_2+(soKW-100)*kw_3:
    soKW>200&&soKW<=350?tienDien=50*kw_1+50*kw_2+100*kw_3+(soKW-200)*kw_4:
    
    soKW>350?tienDien=50*kw_1+50*kw_2+100*kw_3+150*kw_4+(soKW-350)*kw_5:
    alert("Số kw không hợp lệ! Vui lòng nhập lại"),
    document.getElementById("txtElecBill").innerHTML="Họ tên: "+ten+"; Tiền điện: "+tienDien;

}
const kw_1=500,kw_2=650,kw_3=850,kw_4=1100,kw_5=1300;

document.getElementById("btnElecBill").onclick=calcElecBill