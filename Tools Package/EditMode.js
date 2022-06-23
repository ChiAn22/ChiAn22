let EditState = false;
var Content_;
function EditChange(){
    if (EditState===false){
        EditState = true;
        document.getElementById('EditColor_1').style.background='#d7ab23';
        document.getElementById('EditColor_2').style.background='#d7ab23';
        document.getElementById('EditModei_text').innerText='!';
        document.getElementById('EditModeChanged').innerText='取消设置';
        EditModeSwitchOn();
        iMsg('开启设置',2000);
    }else{
        EditState = false;
        document.getElementById('EditColor_1').style.background='#01ba61';
        document.getElementById('EditColor_2').style.background='#01ba61';
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
        document.getElementById('checkbox_1').checked,
        document.getElementById('checkbox_2').checked,
        document.getElementById('checkbox_3').checked,
        document.getElementById('checkbox_4').checked,
        document.getElementById('checkbox_5').checked,
        document.getElementById('checkbox_6').checked,
        document.getElementById('checkbox_7').checked,
    ];
    EditModeSwitch=true;
}

function EditModeSwitchOff(){
    EditModeSwitch=false;
}

let _msg = document.createElement('div');
_msg.id='_Msg_Inner';
document.getElementById('_Msg').appendChild(_msg);
function iMsg(Content,time){
    _msg.innerHTML='<p style="font-weight: bold;font-size: 1em;color: black;display:flex;justify-content: center;align-items: center;margin: 0 1em">'+Content+'</p>';
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
        iMsg('未标记任何内容',2000)
    }
}

function EditModeSwitchiMsg(a,b) {
    if(EditState===true){
        iMsg('需要先[取消设置]才能变更新的选择',2000);
    }else {
        iMsg(a,b);
    }
}
