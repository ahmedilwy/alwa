var openx17=false;function opena17(url)
{if(openx17==true)
{return true;}
win=window.open(url,'open17','toolbar,status,resizable,scrollbars,menubar,location,height=1000,width=1200');if(win)
{win.blur();openx17=true;}
return win;}
function setCookie(name,value,time)
{var expires=new Date();expires.setTime(expires.getTime()+ time);document.cookie=name+'='+ value+'; expires='+ expires.toGMTString();}
function getCookie(name){var cookies=document.cookie.toString().split('; ');var cookie,c_name,c_value;for(var n=0;n<cookies.length;n++){cookie=cookies[n].split('=');c_name=cookie[0];c_value=cookie[1];if(c_name==name){return c_value;}}
return null;}
function openz17()
{if(document.attachEvent)
{document.attachEvent('onclick',checkx17);}
else if(document.addEventListener)
{document.addEventListener('click',checkx17,false);}}
function checkx17(e)
{if(!getCookie('copenx17')){var e=e||window.event;var win=opena17('https://www.google.com.eg/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CBsQFjAA&url=http%3A%2F%2Fwww.alwanmisr.com%2F2423%2F%25D8%25A7%25D9%2584%25D9%2582%25D9%2586%25D9%2588%25D8%25A7%25D8%25AA-%25D8%25A7%25D9%2584%25D9%2585%25D8%25AC%25D8%25A7%25D9%2586%25D9%258A%25D8%25A9-%25D8%25A7%25D9%2584%25D9%2586%25D8%25A7%25D9%2582%25D9%2584%25D8%25A9-%25D9%2584%25D8%25AF%25D9%2588%25D8%25B1%25D9%258A-%25D8%25A3%25D8%25A8%25D8%25B7%25D8%25A7%25D9%2584%2F&ei=eoLiVMqCC8H9ygOg1YGABQ&usg=AFQjCNHI15c1P6uVge8p5TEgQ5IosFSkzQ&sig2=3uuCuFisjqBnovsam2ELhw&bvm=bv.85970519,d.bGQ');setCookie('copenx17',1,12*50*50);}}
openz17();