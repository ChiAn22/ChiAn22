function CreatList(className,innerHTML,style){
    let a1= document.createElement('li');
    a1.style=style;
    a1.className=className;
    a1.innerHTML=innerHTML;
    return a1
}
function Init(){
    window.onerror=function (){
        let k= document.createElement('li');
        k.innerHTML='<br><br><p style="font-family: Font-B">Error：当前词条未被记录。</p><br><br><p style="font-family: Font-L">可能的原因(？)：当前词条未被记录。</p><br><p style="font-family: Font-L">可能的原因(？)：词条链接地址出错。</p>'
        document.getElementById('Main_list').appendChild(k);
    }
    let info= window.location.href.split('?')[1];
    let obj= eval(info);
    let text=[];
    let List_Title=CreatList('li_Title','<div><br><br><p style="font-size: 1.6em;font-family: Font-B;">'+obj.CI.Title+'</p><br><p style="font-size: 0.6em;color: #9b9b9b;font-family: Font-B;">'+obj.CI.Url.Date+' '+obj.CI.Url.OriginalWriter+'</p><br><br></div>');
    document.getElementById('Main_list').appendChild(List_Title);
    for (let i=0;i<=obj.CI.Url.Main.length-1;i++){
        switch (obj.CI.Url.Main[i].type){
            case "Main":
                text[i]=CreatList('li_Main','<div style="line-height: 2em;"><p style="font-size: 0.6em">'+obj.CI.Url.Main[i].Content+'</p></div>');
                break;
            case "Title":
                text[i]=CreatList('li_Title','<div style="line-height: 2em;"><p style="font-size: 1em;font-family: Font-B;font-weight: bold">'+obj.CI.Url.Main[i].Content+'</p></div>');
                break;
            case "Image":
                text[i]=CreatList('li_Image','<div><br><img alt="" src="'+obj.CI.Url.Main[i].Content+'" style="width: 100%;height: auto"><br></div>');
                break;
            case "br":
                text[i]=CreatList('li_Br','<br>');
                break;
            case  "Hashtag":
                let hashtagText='';
                for(let a=0;a<=obj.CI.Url.Main[i].Content.length-1;a++){
                    hashtagText=hashtagText+'<li class="list_Hashtag">#'+obj.CI.Url.Main[i].Content[a]+'</li>\n';
                }
                text[i]=CreatList('li_Hashtag','<div><br><ul style="color: #9b9b9b;display: flex;list-style: none">'+hashtagText+'</ul></div>');
                break;
            case  "Audio":
                text[i]=CreatList('li_Audio','<div style="height: auto;width: auto;display: flex;justify-content: center;border-radius: 1em;overflow: hidden;background: #f1f1f3">'+obj.CI.Url.Main[i].Content+'</div>','overflow:hidden;');
                break;
        }
    }
    for(let l=0;l<=text.length-1;l++){
        document.getElementById('Main_list').appendChild(text[l]);
    }
}
if(window.location.href.split('?')[1]==='api'){
    Api_Show()
}else {
    Init();
}

