// 회원가입 ID 입력
function next(){
    var uid = document.getElementById("uid").value;
    if(uid == ""){
        alert("아이디를 입력하세요.");
    }else{
        location.href = "member3.html"
    }
}
// 회원가입 ID 입력 end

// 회원가입 pw 입력
function next(){
    var pw1 = document.getElementById("pw1").value;
    var pw2 = document.getElementById("pw2").value;

    if(pw1 == "" || pw2 == ""){
        alert("비밀번호를 입력하세요.");
    }else{
        location.href = "member4.html"
    }
}
// 회원가입 pw 입력 end