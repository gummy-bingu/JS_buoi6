function timSoNhoNhat(){
    // đầu vào
    let S = 0;
    let n = 0;
    // xử lý
    while ( S < 10000){
        n++;
        S=S+n;
        var soNhoNhat = "<p> Số nguyên dương nhỏ nhất: " + n + "</p>";
    }
    // đầu ra
    document.getElementById("soNhoNhat").innerHTML =soNhoNhat;
}

function tinhTong(){
    // đầu vào 
    let so_X = document.getElementById("soX").value * 1;
    let so_N = document.getElementById("soN").value * 1;
    let T = 1;
    let S = 0;
    // xử lý
    for( i = 1 ;i <= so_N ; i++)
    {
        T = T * so_X;
        S = S + T;
      }
      let Tong = "<p> Tổng: " + S + "</p>";
      // đầu ra 
      document.getElementById("tinhTong").innerHTML = Tong;

}

function tinhGT(){
    // đầu vào
    let so_GT = document.getElementById("so_GT").value * 1;
    let i = 0;
    let factorial = 1;
    // xử lý
    for( i = so_GT; i >= 1; i--) {
        factorial = factorial*i;
    }
    
    let GT = " <p> Giai thừa: " + factorial + "</p>";
    // đầu ra 
    document.getElementById("tinhGT").innerHTML = GT;
}

function oddeven_color(){
    // đầu vào
    let i;
    // xử lý 
    let divs = document.getElementsByClassName("oddeven");
    for ( i = 0; i < divs.length; i++){
        if((i+1) % 2 == 0){
            divs[i].style.background = "red";
        }
    else{
            divs[i].style.background ="blue";
    }
    }
    //
}