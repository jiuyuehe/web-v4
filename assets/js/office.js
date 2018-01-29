

console.log("window.location",window.location);

if(window.location.pathname.indexOf('xz-office')>0){




    // var  ifurl = undefined;


    if(window.location.search && window.location.search.indexOf("word") > 0){

       $('iframe').attr('src',"http://www.szchangxun.cn:8090/cloud-office/api/local/test.docx/open?app=WRITE_EDITOR&root=/home/hancom&fid=1111&user_id=lockfree"+(Math.floor(Math.random()*52 + 1)%3))

    }else if(window.location.search && window.location.search.indexOf("excel") > 0){

        $('iframe').attr('src'," http://www.szchangxun.cn:8090/cloud-office/api/local/test.xlsx/open?app=CALC_EDITOR&root=/home/hancom&fid=222&user_id=lockfree"+(Math.floor(Math.random()*52 + 1)%3))

    }else{

        $('iframe').attr('src',"http://www.szchangxun.cn:8090/cloud-office/api/local/test.docx/open?app=WRITE_VIEWER&root=/home/hancom&fid=1111&user_id=lockfree"+(Math.floor(Math.random()*52 + 1)%3))

    }


    // var iframe = document.createElement("iframe");
    // iframe.src = "http://www.baidu.com";
    //
    // if (iframe.attachEvent){
    //     iframe.attachEvent("onload", function(){ // IE
    //         alert("Local iframe is now loaded.");
    //     });
    // } else {
    //     iframe.onload = function(){ // 非IE
    //         alert("Local iframe is now loaded.");
    //     };
    // }
    //
    // document.body.appendChild(iframe);


}