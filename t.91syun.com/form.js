var hostUrl = "//v5.singoo.cc/v1/Form/getLeadPage";
(function() {
    var ie = !!(window.attachEvent && !window.opera);
    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
    var fn = [];
    var run = function() {
        for (var i = 0; i < fn.length; i++) fn[i]();
    };
    var d = document;
    d.readystart = function(f) {
        if (!ie && !wk && d.addEventListener)
            return d.addEventListener('DOMContentLoaded', f, false);
        if (fn.push(f) > 1) return;
        if (ie)
            (function() {
                try {
                    d.documentElement.doScroll('left');
                    run();
                } catch (err) {
                    setTimeout(arguments.callee, 0);
                }
            })();
        else if (wk)
            var t = setInterval(function() {
                if (/^(loaded|complete)$/.test(d.readyState))
                    clearInterval(t), run();
            }, 0);
    };
})();
if(document.querySelectorAll('.crm_form-wrap').length){
    console.log('form2')
    document.write('<div class="crm_form-wrap"></div>');
}else{
    console.log('form1')
    document.write('<div class="crm_form-wrap"></div>');

    document.readystart(function() {
        var crm_cook = setInterval(function(){
            if(!cookie_page1) return;
            var page_log_id=cookie_page1+'_'+website_id+'_'+host;
            var data = {'website_page_id':website_page_id,'page_log_id':page_log_id};
            crm_ajax({
                url: hostUrl,
                type: "POST",
                data: data,
                dataType: "text",
                success: function(a) {
                    var re = /<script[^>]*>([\s\S]*?)<\/script>/gi;
                    var j = a.match(re)[0].replace('<script>','').replace('<\/script>','');
                    var h = a.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,'');
                    var s = document.createElement("script");
                    s.innerHTML = j;
                    var ws = document.querySelectorAll('.crm_form-wrap');
                    for(var i=0;i<ws.length;i++){
                        ws[i].innerHTML = h;
                    }
                    if(ws.length){
                        ws[0].appendChild(s);
                    }
                }
            });
            clearInterval(crm_cook);
        },200);
    });
};
function crm_ajax(a) {
    a = a || {};
    a.type = (a.type || "GET").toUpperCase();
    a.dataType = a.dataType || "json";
    var c = crm_formatParams(a.data),
        b = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    b.onreadystatechange = function() {
        if (4 == b.readyState) {
            var c = b.status;
            200 <= c && 300 > c ? a.success && a.success(b.responseText, b.responseXML) : a.fail && a.fail(c)
        }
    };
    "GET" == a.type ? (b.open("GET", a.url + "?" + c, !0), b.send(null)) : "POST" == a.type && (b.open("POST", a.url, !0), b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        b.send(c))
}
function crm_formatParams(a) {
    var c = [],
        b;
    for (b in a){
        c.push(encodeURIComponent(b) + "=" + encodeURIComponent(a[b]))
    };
    c.push(("v=" + Math.random()).replace(".", ""));
    return c.join("&");
}