let EditState = false;
let ColourMode;

if("string" !== typeof window.localStorage.getItem('ColourMode')){
    window.localStorage.setItem('ColourMode','1')
}else if(window.localStorage.getItem('ColourMode')==='1'){
    ColourMode=1;
    ChangeColourMode_Daylight();
}else if(window.localStorage.getItem('ColourMode')==='2') {
    ColourMode=2;
    ChangeColourMode_Midnight();
}else {
    iMsg('Error:G17',null,'red');
}

var Content_;
document.getElementById('Title_Nav').onclick=function (){
        document.getElementById('_tran_Button').style.visibility='visible';
    for(let i=0;i<=document.getElementsByClassName('_tran').length+1;i++){
        document.getElementsByClassName('ol-zoomslider')[i].style.transform='translateY(-5em)';
        document.getElementsByClassName('ol-zoom')[i].style.transform='translateY(-5em)';
        document.getElementsByClassName('_tran')[i].style.transform='translateY(-5em)';
        document.getElementsByClassName('EditMode')[i].style.transform='translateY(-5em)';
    }
}
document.getElementById('_tran_Button').onclick=function () {
    document.getElementById('_tran_Button').style.visibility = 'hidden';
    for (let i = 0; i <= document.getElementsByClassName('_tran').length + 1; i++) {
        document.getElementsByClassName('ol-zoomslider')[i].style.transform = 'translateY(0)';
        document.getElementsByClassName('ol-zoom')[i].style.transform = 'translateY(0)';
        document.getElementsByClassName('_tran')[i].style.transform = 'translateY(0)';
        document.getElementsByClassName('EditMode')[i].style.transform = 'translateY(0)';
    }
}
function EditChange(){
    if (EditState===false){
        EditState = true;
        document.getElementById('EditColor_1').style.background='#e2992b';
        document.getElementById('EditColor_2').style.background='#e2992b';
        document.getElementById('ultraScreen').style.background='#e2992b';
        document.getElementById('EditModei_text').innerText='!';
        document.getElementById('EditModeChanged').innerText='取消设置';
        EditModeSwitchOn();

        iMsg('开启设置',2000);
    }else{
        EditState = false;
        document.getElementById('EditColor_1').style.background='#4b8c49';
        document.getElementById('EditColor_2').style.background='#4b8c49';
        document.getElementById('ultraScreen').style.background='#4b8c49';
        document.getElementById('EditModei_text').innerText='?';
        document.getElementById('EditModeChanged').innerText='设置完成';
        EditModeSwitchOff();
        iMsg('关闭设置',2000);
    }
}
function CloseEdit(){
    document.getElementById('Edit').style.visibility='hidden';
    document.getElementById('Edit').style.opacity='0';
}
function OpenEdit(){
    document.getElementById('Edit').style.visibility='visible';
    document.getElementById('Edit').style.opacity='1';
}
function EditModeSwitchOn(){
    Content_=[
        document.getElementById('checkbox_a1').checked,
        document.getElementById('checkbox_a2').checked,
        document.getElementById('checkbox_b1').checked,
        document.getElementById('checkbox_b2').checked,
        document.getElementById('checkbox_r1').checked,
        document.getElementById('checkbox_r2').checked,
        document.getElementById('checkbox_r3').checked,
    ];
    EditModeSwitch=true;
}

function EditModeSwitchOff(){
    EditModeSwitch=false;
}
function ChangeColourMode(){
    if(ColourMode===1){
        ChangeColourMode_Midnight();
        ColourMode=2;
        window.localStorage.setItem('ColourMode','2');
    }else if(ColourMode===2) {
        ChangeColourMode_Daylight();
        ColourMode=1;
        window.localStorage.setItem('ColourMode', '1');
    }else {
        iMsg('Error:G15',null,'red')
    }
}

function ChangeColourMode_Midnight(){
    document.getElementById('invert').style.opacity='1';
    document.getElementById('invert').style.backdropFilter='invert(1) saturate(50%) hue-rotate(200deg)';
    document.getElementById('Title_Nav').style.background='rgba(51,51,51,0.8)';
    document.getElementById('invert_text').innerText='默认色彩';
    document.getElementsByClassName('pattern-cross-dots-xl')[0].style.background='#eaeaea'

}
function ChangeColourMode_Daylight(){
    document.getElementById('invert').style.opacity='0';
    document.getElementById('invert').style.backdropFilter='invert(1) saturate(50%) hue-rotate(200deg)';
    document.getElementById('Title_Nav').style.background='rgba(0,0,0,0.8)';
    document.getElementById('invert_text').innerText='深夜模式';
    document.getElementsByClassName('pattern-cross-dots-xl')[0].style.background='#363636'
}

let _msg = document.createElement('div');
_msg.id='_Msg_Inner';
document.getElementById('_Msg').appendChild(_msg);
function iMsg(Content,time,color){
    if(color==='red'){
        color='#9f0000';
    }else {
        color='black';
    }
    let colour=color||'black';
    _msg.innerHTML='<p style="font-weight: bold;font-size: 1em;color:'+colour+';display:flex;justify-content: center;align-items: center;margin: 0 1em">'+Content+'</p>';
    _msg.style.visibility='visible';
    _msg.style.opacity='1';
    setTimeout(function (){
        _msg.style.visibility='hidden';
        _msg.style.opacity='0';
    },time||2000);
}

function saveContent(){
    if(afterTextContent>=1){
        saveFile(afterText);
    }else {
        iMsg('未标记任何内容',2000,'red')
    }
}

function EditModeSwitchiMsg(a,b) {
    if(EditState===true){
        iMsg('需要先[取消设置]才能变更新的选择',2000);
    }else {
        iMsg(a,b);
    }
}

Screen={
    fullScreen:function (){
            const docElm = document.documentElement
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen()
            } else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen()
            } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen()
            } else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen()
            }
    }
}