// Garden Gnome Software - Skin
// Pano2VR pro 4.5.1/10655
// Filename: simplex_notooltip_kai.ggsk
// Generated 週日 二月 19 19:21:07 2017

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._controller=document.createElement('div');
		this._controller.ggId="controller";
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container';
		this._controller.ggType='container';
		this._controller.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-142 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-65 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -142px;';
		hs+='top:  -65px;';
		hs+='width: 286px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._controller.setAttribute('style',hs);
		this._up=document.createElement('div');
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_svg';
		this._up.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  -5px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_svg';
		this._up__img.setAttribute('src',basePath + 'images/up.svg');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._up__img['ondragstart']=function() { return false; };
		this._up.appendChild(this._up__img);
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'images/up__o.svg';
		}
		this._up.onmouseout=function () {
			me._up__img.src=basePath + 'images/up.svg';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._controller.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_svg';
		this._down.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_svg';
		this._down__img.setAttribute('src',basePath + 'images/down.svg');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._down__img['ondragstart']=function() { return false; };
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'images/down__o.svg';
		}
		this._down.onmouseout=function () {
			me._down__img.src=basePath + 'images/down.svg';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._controller.appendChild(this._down);
		this._left=document.createElement('div');
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_svg';
		this._left.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_svg';
		this._left__img.setAttribute('src',basePath + 'images/left.svg');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._left__img['ondragstart']=function() { return false; };
		this._left.appendChild(this._left__img);
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'images/left__o.svg';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'images/left.svg';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._controller.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_svg';
		this._right.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 50px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_svg';
		this._right__img.setAttribute('src',basePath + 'images/right.svg');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._right__img['ondragstart']=function() { return false; };
		this._right.appendChild(this._right__img);
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'images/right__o.svg';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'images/right.svg';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._controller.appendChild(this._right);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg';
		this._zoomin.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 90px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			me._zoomin__img.src=basePath + 'images/zoomin__o.svg';
		}
		this._zoomin.onmouseout=function () {
			me._zoomin__img.src=basePath + 'images/zoomin.svg';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._controller.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg';
		this._zoomout.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 120px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			me._zoomout__img.src=basePath + 'images/zoomout__o.svg';
		}
		this._zoomout.onmouseout=function () {
			me._zoomout__img.src=basePath + 'images/zoomout.svg';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._controller.appendChild(this._zoomout);
		this._autorotate=document.createElement('div');
		this._autorotate.ggId="autorotate";
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		this._autorotate.className='ggskin ggskin_svg';
		this._autorotate.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 160px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.className='ggskin ggskin_svg';
		this._autorotate__img.setAttribute('src',basePath + 'images/autorotate.svg');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._autorotate__img['ondragstart']=function() { return false; };
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._autorotate.onmouseover=function () {
			me._autorotate__img.src=basePath + 'images/autorotate__o.svg';
		}
		this._autorotate.onmouseout=function () {
			me._autorotate__img.src=basePath + 'images/autorotate.svg';
		}
		this._controller.appendChild(this._autorotate);
		this._info=document.createElement('div');
		this._info.ggId="info";
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_svg';
		this._info.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 190px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._info.setAttribute('style',hs);
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_svg';
		this._info__img.setAttribute('src',basePath + 'images/info.svg');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._info__img['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__img);
		this._info.onclick=function () {
			flag=(me._userdata.style.visibility=='hidden');
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility=flag?'inherit':'hidden';
			me._userdata.ggVisible=flag;
		}
		this._info.onmouseover=function () {
			me._info__img.src=basePath + 'images/info__o.svg';
		}
		this._info.onmouseout=function () {
			me._info__img.src=basePath + 'images/info.svg';
		}
		this._controller.appendChild(this._info);
		this._movemode=document.createElement('div');
		this._movemode.ggId="movemode";
		this._movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._movemode.ggVisible=true;
		this._movemode.className='ggskin ggskin_svg';
		this._movemode.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 220px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._movemode.setAttribute('style',hs);
		this._movemode__img=document.createElement('img');
		this._movemode__img.className='ggskin ggskin_svg';
		this._movemode__img.setAttribute('src',basePath + 'images/movemode.svg');
		this._movemode__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._movemode__img['ondragstart']=function() { return false; };
		this._movemode.appendChild(this._movemode__img);
		this._movemode.onclick=function () {
			me.player.changeViewMode(2);
		}
		this._movemode.onmouseover=function () {
			me._movemode__img.src=basePath + 'images/movemode__o.svg';
		}
		this._movemode.onmouseout=function () {
			me._movemode__img.src=basePath + 'images/movemode.svg';
		}
		this._controller.appendChild(this._movemode);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg';
		this._fullscreen.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 250px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen__o.svg';
		}
		this._fullscreen.onmouseout=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen.svg';
		}
		this._controller.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._controller);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container';
		this._loading.ggType='container';
		this._loading.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-105 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-30 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -105px;';
		hs+='top:  -30px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading.setAttribute('style',hs);
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle';
		this._loadingbg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbg.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId="loadingbrd";
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		this._loadingbrd.className='ggskin ggskin_rectangle';
		this._loadingbrd.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 208px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text';
		this._loadingtext.ggType='text';
		this._loadingtext.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (176-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  12px;';
		hs+='width: 176px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		this._loadingtext.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle';
		this._loadingbar.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  35px;';
		hs+='width: 181px;';
		hs+='height: 12px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #808080;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		this._loadingbar.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._userdata=document.createElement('div');
		this._userdata.ggId="userdata";
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.className='ggskin ggskin_container';
		this._userdata.ggType='container';
		this._userdata.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-120 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-80 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -120px;';
		hs+='top:  -80px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._userdata.setAttribute('style',hs);
		this._userdata.onclick=function () {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId="userdatabg";
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		this._userdatabg.className='ggskin ggskin_rectangle';
		this._userdatabg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._userdatabg.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabg);
		this._userdatabrd=document.createElement('div');
		this._userdatabrd.ggId="userdatabrd";
		this._userdatabrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabrd.ggVisible=true;
		this._userdatabrd.className='ggskin ggskin_rectangle';
		this._userdatabrd.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 238px;';
		hs+='height: 138px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._userdatabrd.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabrd);
		this._title=document.createElement('div');
		this._title__text=document.createElement('div');
		this._title.className='ggskin ggskin_textdiv';
		this._title.ggTextDiv=this._title__text;
		this._title.ggId="title";
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		this._title.className='ggskin ggskin_text';
		this._title.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._title.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._title__text.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			var hs="<b>"+me.player.userdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._title.ggUpdateText();
		this._title.appendChild(this._title__text);
		this._userdata.appendChild(this._title);
		this._description=document.createElement('div');
		this._description__text=document.createElement('div');
		this._description.className='ggskin ggskin_textdiv';
		this._description.ggTextDiv=this._description__text;
		this._description.ggId="description";
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		this._description.className='ggskin ggskin_text';
		this._description.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  30px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._description.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._description__text.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			var hs=me.player.userdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._description.ggUpdateText();
		this._description.appendChild(this._description__text);
		this._userdata.appendChild(this._description);
		this._author=document.createElement('div');
		this._author__text=document.createElement('div');
		this._author.className='ggskin ggskin_textdiv';
		this._author.ggTextDiv=this._author__text;
		this._author.ggId="author";
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		this._author.className='ggskin ggskin_text';
		this._author.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  50px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._author.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._author__text.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			var hs=me.player.userdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._author.ggUpdateText();
		this._author.appendChild(this._author__text);
		this._userdata.appendChild(this._author);
		this._datetime=document.createElement('div');
		this._datetime__text=document.createElement('div');
		this._datetime.className='ggskin ggskin_textdiv';
		this._datetime.ggTextDiv=this._datetime__text;
		this._datetime.ggId="datetime";
		this._datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._datetime.ggVisible=true;
		this._datetime.className='ggskin ggskin_text';
		this._datetime.ggType='text';
		this._datetime.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (218-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  70px;';
		hs+='width: 218px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._datetime.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._datetime__text.setAttribute('style',hs);
		this._datetime.ggUpdateText=function() {
			var hs=me.player.userdata.datetime;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._datetime.ggUpdateText();
		this._datetime.appendChild(this._datetime__text);
		this._userdata.appendChild(this._datetime);
		this._copyright=document.createElement('div');
		this._copyright__text=document.createElement('div');
		this._copyright.className='ggskin ggskin_textdiv';
		this._copyright.ggTextDiv=this._copyright__text;
		this._copyright.ggId="copyright";
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		this._copyright.className='ggskin ggskin_text';
		this._copyright.ggType='text';
		this._copyright.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=(0 + (218-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  110px;';
		hs+='width: 218px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._copyright.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._copyright__text.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			var hs="&#169; "+me.player.userdata.copyright;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._copyright.ggUpdateText();
		this._copyright.appendChild(this._copyright__text);
		this._userdata.appendChild(this._copyright);
		this.divSkin.appendChild(this._userdata);
		this._svg_1=document.createElement('div');
		this._svg_1.ggId="Svg 1";
		this._svg_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1.ggVisible=true;
		this._svg_1.className='ggskin ggskin_svg';
		this._svg_1.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  15px;';
		hs+='width: 300px;';
		hs+='height: 121px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.9;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._svg_1.setAttribute('style',hs);
		this._svg_1__img=document.createElement('img');
		this._svg_1__img.className='ggskin ggskin_svg';
		this._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
		this._svg_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 300px;height: 121px;-webkit-user-drag:none;');
		this._svg_1__img['ondragstart']=function() { return false; };
		this._svg_1.appendChild(this._svg_1__img);
		this._svg_1.onmouseout=function () {
			me.elementMouseDown['svg_1']=false;
		}
		this._svg_1.onmousedown=function () {
			me.elementMouseDown['svg_1']=true;
		}
		this._svg_1.onmouseup=function () {
			me.elementMouseDown['svg_1']=false;
		}
		this._svg_1.ontouchend=function () {
			me.elementMouseDown['svg_1']=false;
		}
		this.divSkin.appendChild(this._svg_1);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		this._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		this._title.ggUpdateText();
		this._description.ggUpdateText();
		this._author.ggUpdateText();
		this._datetime.ggUpdateText();
		this._copyright.ggUpdateText();
		if (me.elementMouseDown['svg_1']) {
			me.player.openUrl("http:\/\/kaiyang.byethost11.com\/","_self");
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="hotspot";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 340px;';
			hs+='top:  20px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='inherit';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage=document.createElement('div');
			this._hsimage.ggId="hsimage";
			this._hsimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage.ggVisible=true;
			this._hsimage.className='ggskin ggskin_svg';
			this._hsimage.ggType='svg';
			hs ='position:absolute;';
			hs+='left: -16px;';
			hs+='top:  -16px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.className='ggskin ggskin_svg';
			this._hsimage__img.setAttribute('src',basePath + 'images/hsimage.svg');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
			this._hsimage__img['ondragstart']=function() { return false; };
			this._hsimage.appendChild(this._hsimage__img);
			this.__div.appendChild(this._hsimage);
			this._hstext=document.createElement('div');
			this._hstext__text=document.createElement('div');
			this._hstext.className='ggskin ggskin_textdiv';
			this._hstext.ggTextDiv=this._hstext__text;
			this._hstext.ggId="hstext";
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.className='ggskin ggskin_text';
			this._hstext.ggType='text';
			this._hstext.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -50px;';
			hs+='top:  20px;';
			hs+='width: 97px;';
			hs+='height: 19px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext__text.setAttribute('style',hs);
			this._hstext__text.innerHTML=me.hotspot.title;
			this._hstext.appendChild(this._hstext__text);
			this.__div.appendChild(this._hstext);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};