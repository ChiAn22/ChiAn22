let CI_Switch=false;
let mouseMode=1;
var Information={
    type:[],
    Bubble:function (Title,ConciseIntroduce,Url,For,Colour,Width){
        if(CI_Switch===false){
            CI_Switch=true;
            let div=document.getElementById('Content_Information');
            div.style.width=Width||'16em';
            let ForColour='#000',text;
            if(Url===undefined||''){
                iMsg('此词条的专题页正在准备中',2000);
                text='';
            }
            if(For===undefined){
                ForColour='#000';
            }else if(For==='收录在《漫游芝山》'){
                ForColour='#e2992b';
            }else if(For==='收录在《未来述白》'){
                ForColour='#3f41c9';
            }else if(For==='收录在《藝術時代》'){
                ForColour='#12bdaf';
            }
            div.innerHTML='<div style="width: 100%;height: 40%;display: flex">\n' +
                '        <p style="display: flex;align-items: center;color: black;font-weight: bold;font-size: 1.2em">'+Title+'</p>\n' +
                '    </div>\n' +
                '    <hr style="height: 0.1%;margin-top: 1.4%;width: 100%;border: none;background: #363636">\n' +
                '    <div style="width: 100%;height: 58.5%;">\n' +
                '        <p style="align-items: center;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size: 0.8em">'+ConciseIntroduce+'</p>\n' +
                '        <div style="display: flex;align-items: center;width: 100%">\n' +
                '            <div style="display: flex;align-items: center;width: 40%">\n' +
                '                <a style="display: flex;align-items: center;font-size: 0.8em;" '+text+'">查看详情></a>\n' +
                '            </div>\n' +
                '            <div style="display: flex;align-items: center;width: 60%;background: '+ForColour+';border-radius: 0.2em;justify-content: center">\n' +
                '                <p style="display: flex;align-items: center;font-size: 0.8em;color: #ffffff;justify-content: center">'+For+'</p>\n' +
                '            </div>\n' +
                '\n' +
                '        </div>\n' +
                '    </div>';
            div.style.transform='translateX(0)';
            setTimeout(function (){
                if(mouseMode===2){
                }else {
                    div.style.transform='translateX(-400%)';
                    CI_Switch=false;
                }
            },4000);
        }else{
            let div=document.getElementById('Content_Information');
            div.style.width=Width||'16em';
            div.style.transform='translateX(-400%)'
            setTimeout(function (){
                CI_Switch=true;
                let ForColour='#000',text;
                if(Url===undefined||''){
                    iMsg('此词条的专题页正在准备中',2000);
                    text='';
                }
                if(For===undefined){
                    ForColour='#000';
                }else if(For==='收录在《漫游芝山》'){
                    ForColour='#e2992b';
                }else if(For==='收录在《未来述白》'){
                    ForColour='#3f41c9';
                }else if(For==='收录在《藝術時代》'){
                    ForColour='#12bdaf';
                }
                div.innerHTML='<div style="width: 100%;height: 40%;display: flex">\n' +
                    '        <p style="display: flex;align-items: center;color: black;font-weight: bold;font-size: 1.2em">'+Title+'</p>\n' +
                    '    </div>\n' +
                    '    <hr style="height: 0.1%;margin-top: 1.4%;width: 100%;border: none;background: #363636">\n' +
                    '    <div style="width: 100%;height: 58.5%;">\n' +
                    '        <p style="align-items: center;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size: 0.8em">'+ConciseIntroduce+'</p>\n' +
                    '        <div style="display: flex;align-items: center;width: 100%">\n' +
                    '            <div style="display: flex;align-items: center;width: 40%">\n' +
                    '                <a style="display: flex;align-items: center;font-size: 0.8em;" '+text+'">查看详情></a>\n' +
                    '            </div>\n' +
                    '            <div style="display: flex;align-items: center;width: 60%;background: '+ForColour+';border-radius: 0.2em;justify-content: center">\n' +
                    '                <p style="display: flex;align-items: center;font-size: 0.8em;color: #ffffff;justify-content: center">'+For+'</p>\n' +
                    '            </div>\n' +
                    '\n' +
                    '        </div>\n' +
                    '    </div>';
                div.style.transform='translateX(0)';
                setTimeout(function (){
                    if(mouseMode===2){

                    }else {
                        div.style.transform='translateX(-400%)';
                        CI_Switch=false;
                    }
                },4000);
            },100);
        }

    },
    Select:function (item){
            return[true,item.A.CI.Title,item.A.CI.ConciseIntroduce,item.A.CI.Url,item.A.CI.For,item.A.CI.ForColour,item.A.CI.Width]
    }
}
document.getElementById('Content_Information').onmouseenter=function (){
    mouseMode=2;
    console.log('in')
}
document.getElementById('Content_Information').onmouseleave=function (){
    mouseMode=1;
    console.log('out')
    if(CI_Switch===true){
        setTimeout(function (){
            document.getElementById('Content_Information').style.transform='translateX(-400%)';
            CI_Switch=false;

        },100)
    }

}