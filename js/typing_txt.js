var chr = -1;
var txt = 'Давайте познаем основы информатики вместе!';
var l = txt.length;
var p = "_";
function printtext()
{
    chr++;
    t = document.all["typing"].innerHTML;
    tt = t.substring(0,t.length-p.length);
    if(txt.charAt(chr)!="<")
    {
        document.all["typing"].innerHTML= tt + txt.charAt(chr) + p;
    }
    else {
        document.all["typing"].innerHTML= tt + txt.substring(chr, chr+4) + p;
        chr=chr+3;
    }
    setTimeout("printtext()", 40);
}
function str(num) {
    var s = "";
    for(i=0; i<num; i++) {
        s = s + " ";
    }
    return s ;
}