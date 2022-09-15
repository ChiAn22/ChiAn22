let EditState = false;
var Content_;
function EditChange(){
    if (EditState===false){
        EditState = true;
        document.getElementById('EditColor_1').style.background='#171717';
        document.getElementById('EditColor_2').style.background='#171717';
        document.getElementById('ultraScreen').style.background='#171717';
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