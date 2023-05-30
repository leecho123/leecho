
var shengying = document.getElementById("shengying");
var header = document.getElementById("header");
var huakuai = document.getElementById("huakuai");
var huakuaizu = document.getElementById("huakuaizu");
var guding = document.getElementById("guding");
var anniu = document.getElementById("anniu");
var right = document.getElementById("right");
var shiping = document.getElementById("shiping");
var jiao = document.getElementById("jiao");
var biaoji = document.getElementById("biaoji");
var tu = document.getElementById("tu");
var guanbi = document.getElementById("guanbi");
var bofang = document.getElementById("bofang");
var button = document.getElementById("button");//视频播放按钮
var video2 = document.getElementById("video2");//第二个视频
var zixundaohang = document.getElementById("zixundaohang");//咨询导航
var zixunneirong = document.getElementById("zixunneirong");//咨询内容
var pingtaitubiao = document.getElementById("pingtaitubiao");//平台图标
var wx=document.getElementById("wxwx");
var qq=document.getElementById("qqqq");

var i = 1;
shengying.onclick = function () {
    if (i === 1) {
        shengying.src = "./img/下载.png"
        shiping.children[0].volume = 0;
        console.log("声音关闭了");
        shiping.children[0].volume = 0.0;
        console.log(shiping.children[0].volume);
        i = 2;

    } else {
        shengying.src = "./img/下载 (1).png"
        console.log("声音开启了");
        shiping.children[0].volume = 1;
        console.log(shiping.children[0]);
        console.log(shiping.children[0].volume);
        i = 1;
    }

}
// 声音图标切换
const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

function handleScrollEvent(event) {
    const scrollTop = event.target.scrollingElement.scrollTop;
    if (scrollTop > 10) {
        header.style.position = "fixed";
        header.style.top = "-1";
        header.style.backgroundColor = "rgba(24, 24, 24, 0.9)";
    } else {
        header.style.backgroundColor = "rgba(56, 56, 56, 0.9)";
    }
    if (scrollTop > 350) {
        guding.style.opacity = 1;
    } else {
        guding.style.opacity = 0;
    }
}

window.addEventListener('scroll', handleScrollEvent);
// 滚动条定义头部标签颜色,加粘性特性

// huakuai huakuaizu
huakuaizu.children[1].addEventListener("mouseover", function () {
    huakuai.style.left = 308 + "px";
})
huakuaizu.children[2].addEventListener("mouseover", function () {
    huakuai.style.left = 368 + "px";
})
huakuaizu.children[3].addEventListener("mouseover", function () {
    huakuai.style.left = 428 + "px";
})
huakuaizu.children[4].addEventListener("mouseover", function () {
    huakuai.style.left = 489 + "px";
})
huakuaizu.children[5].addEventListener("mouseover", function () {
    huakuai.style.left = 549 + "px";
})
huakuaizu.children[6].addEventListener("mouseover", function () {
    huakuai.style.left = 608 + "px";
})
huakuaizu.addEventListener("mouseout", function () {
    huakuai.style.left = 250 + "px";
})
/* left: 308px; */
/* left: 368px; */
/* left: 428px; */
/* left: 489px; */
/* left: 549px; */
/* left: 608px; */

var o = 1;
anniu.onclick = function () {
    if (o === 1) {

        jiao.style.lineHeight = 45 + "px";
        guding.style.right = -180 + "px";
        jiao.style.transform = 'rotate(' + 180 + 'deg)';
        o = 2;
    } else {

        jiao.style.lineHeight = 35 + "px";
        jiao.style.transform = 'rotate(' + 0 + 'deg)';
        guding.style.right = 0 + "px";
        o = 1;
    }

}



//轮播图部分
var time = tu.offsetLeft;
if (tu.offsetLeft === 0) {
    biaoji.children[0].style.backgroundColor = "white";
} else {
    biaoji.children[0].style.backgroundColor = null;
}
for (let i = 0; i < biaoji.children.length; i++) {
    biaoji.children[i].addEventListener('click', function () {
        console.log("点击")

        if (i === 0) {
            tu.style.left = 0 + "px"
            star.stop;
            biaoji.children[0].style.backgroundColor = "white";
        } else {
            biaoji.children[0].style.backgroundColor = null;
        }
        if (i === 1) {
            star.stop;
            biaoji.children[1].style.backgroundColor = "white";
            tu.style.left = -600 + "px"
        } else {
            biaoji.children[1].style.backgroundColor = null;
        } if (i === 2) {
            star.stop;
            biaoji.children[2].style.backgroundColor = "white";
            tu.style.left = -1200 + "px"
        } else {
            biaoji.children[2].style.backgroundColor = null;
        }
        if (i === 3) {
            star.stop;
            biaoji.children[3].style.backgroundColor = "white";
            tu.style.left = -1800 + "px"
        } else {
            biaoji.children[3].style.backgroundColor = null;
        }
        console.log(time);
    })
}
var timer;
function star() {
    timer = setInterval(() => {
        time -= 600;
        if (time < -600 * 3) {
            time = 0;
        }

        if (time === 0) {
            tu.style.left = 0 + "px"
            biaoji.children[0].style.backgroundColor = "white";
        } else {
            biaoji.children[0].style.backgroundColor = null;
        }
        if (time === -600) {
            biaoji.children[1].style.backgroundColor = "white";
            tu.style.left = -600 + "px"
        } else {
            biaoji.children[1].style.backgroundColor = null;
        } if (time === -1200) {
            biaoji.children[2].style.backgroundColor = "white";
            tu.style.left = -1200 + "px"
        } else {
            biaoji.children[2].style.backgroundColor = null;
        }
        if (time === -1800) {
            biaoji.children[3].style.backgroundColor = "white";
            tu.style.left = -1800 + "px"
        } else {
            biaoji.children[3].style.backgroundColor = null;
        }
        tu.style.left = time + "px"
    }, 5000);
    function stop() {
        clearInterval(timer);
        setTimeout(() => {
            star();
        }, 5000);
    }
}
star();
guanbi.addEventListener("click", function () {
    bofang.style.display = "none";
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
    //启用滚动条
    video2.pause();
    video2.currentTime = 0;
    //视频暂停且视频重新开始
})
button.addEventListener("click", function () {
    bofang.style.display = "block";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
    //禁用滚动条
    video2.play();
    //视频开始
})

tu.addEventListener('mouseover', function () {
    clearInterval(timer);
    //如果鼠标放在该轮播图则轮播图暂停
})
tu.addEventListener('mouseout', function () {
    star();
    //如果鼠标移出该轮播图则轮播图开始移动
})



for (let i = 0; i < zixundaohang.childNodes.length; i++) {
    zixundaohang.childNodes[1].style.color = 'rgb(255,212,159)';
    zixundaohang.childNodes[1].style.borderBottom = " 4px solid rgb(255,212,159)";
    zixundaohang.childNodes[i].addEventListener("click", function () {
        if (i === 1) {
            for (let o = 0; o < zixunneirong.children.length; o++) {
                zixunneirong.children[o].children[0].innerHTML = "《原神》「神铸赋形」活动祈愿现已开启：「弓·飞雷之弦振」「法器·神乐之真意」概率UP！"

            }
            zixundaohang.childNodes[1].style.color = 'rgb(255,212,159)';
            zixundaohang.childNodes[1].style.borderBottom = " 4px solid rgb(255,212,159)";
        } else {
            zixundaohang.childNodes[1].style.color = 'white';
            zixundaohang.childNodes[1].style.borderBottom = "none";
        }
        if (i === 3) {
            for (let o = 0; o < zixunneirong.children.length; o++) {
                zixunneirong.children[o].children[0].innerHTML = "《原神》祈愿概率公示"

            }
            zixundaohang.childNodes[3].style.color = 'rgb(255,212,159)';
            zixundaohang.childNodes[3].style.borderBottom = " 4px solid rgb(255,212,159)";
        } else {
            zixundaohang.childNodes[3].style.color = 'white';
            zixundaohang.childNodes[3].style.borderBottom = "none";
        }
        if (i === 5) {
            for (let o = 0; o < zixunneirong.children.length; o++) {
                zixunneirong.children[o].children[0].innerHTML = "《原神》「华紫樱绯」祈愿活动祈愿现已开启"

            }

            zixundaohang.childNodes[5].style.color = 'rgb(255,212,159)';
            zixundaohang.childNodes[5].style.borderBottom = " 4px solid rgb(255,212,159)";
        } else {
            zixundaohang.childNodes[5].style.color = 'white';
            zixundaohang.childNodes[5].style.borderBottom = "none";
        }
        if (i === 7) {
            for (let o = 0; o < zixunneirong.children.length; o++) {
                zixunneirong.children[o].children[0].innerHTML = "《原神》「神工天巧」活动即将开启"

            }

            zixundaohang.childNodes[7].style.color = 'rgb(255,212,159)';
            zixundaohang.childNodes[7].style.borderBottom = " 4px solid rgb(255,212,159)";
        } else {
            zixundaohang.childNodes[7].style.color = 'white';
            zixundaohang.childNodes[7].style.borderBottom = "none";
        }
    })
}

for (let i = 0; i < pingtaitubiao.children.length; i++) {
    pingtaitubiao.children[i].addEventListener('mouseover', function () {
        if (i === 0) {
            pingtaitubiao.children[i].src = "./img/weibo.png"
        }
        if (i === 1) {
            pingtaitubiao.children[i].src = "./img/gongzhonghao.png"
        }
        if (i === 2) {
            pingtaitubiao.children[i].src = "./img/qq.png"
        }
        if (i === 3) {
            pingtaitubiao.children[i].src = "./img/fenxiangfangshi.png"
        }
    })
    pingtaitubiao.children[i].addEventListener('mouseout', function () {
        if (i === 0) {
            pingtaitubiao.children[i].src = "./img/weibo1.png"
        }
        if (i === 1) {
            pingtaitubiao.children[i].src = "./img/gongzhonghao1.png"
        }
        if (i === 2) {
            pingtaitubiao.children[i].src = "./img/QQ1.png"
        }
        if (i === 3) {
            pingtaitubiao.children[i].src = "./img/fenxiangfangshi1.png"
        }
    })
}


function showwx(){
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
    //禁用滚动条
    wx.style.display="block";
}
function showqq(){
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
    //禁用滚动条
    qq.style.display="block";
}


function guanbiwx(){
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
    wx.style.display="none";
        //启用滚动条
}
function guanbiqq(){
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
    qq.style.display="none";
        //启用滚动条
}
