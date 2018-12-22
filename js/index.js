
//获取userName，password的input，以及login 的a
var userName = document.getElementById("userName");
// console.log(userName);
var passWord = document.getElementById("passWord");
// console.log(passWord);
var login = document.getElementById("login");
// console.log(login);
//添加的点击事件 点击login a标签可触发
function check() {
    if (userName.value == "admin") {
        if (passWord.value == "123456") {
            location.href = "main.html";
        } else {
            alert("密码错误");
        }
    } else {
        console.log(typeof (userName.value) + "   " + passWord.value);
        alert("用户不存在");
    }
}
