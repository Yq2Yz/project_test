window.onload = function() {
    // 1. 通过 DOM 操作，获取 btn 的元素
    var btn = document.querySelector('#btn');

    // 2. 监听 元素的 submit 事件
    btn.addEventListener('click', function() {
        console.log('创建一个Git仓库');
        alert('创建一个Git仓库')
        console.log('修改了内容')
    })
}

function demoFunction() {
    var x;
    var person = prompt("请输入您的名字", "哈利波特");
    if (person != null && person != "") {
        x = "您好" + person + "! 今天感觉如何？";
        document.getElementById("demo").innerHTML = x;
    }
}