(function(g){var window=this;'use strict';var o6=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.ag=!1;this.player=a;this.N(a,"minimized",this.fg);this.N(a,"onStateChange",this.QE)},p6=function(a){g.oN.call(this,a);
this.i=new o6(this.player);this.i.hide();g.cN(this.player,this.i.element,4);a.Le()&&(this.load(),g.M(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(o6,g.V);g.k=o6.prototype;
g.k.dD=function(){this.tooltip=new g.NQ(this.player,this);g.F(this,this.tooltip);g.cN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.lc=new g.jO(this.player);g.F(this,this.lc);this.rg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.F(this,this.rg);this.rg.Ba(this.element);this.N(this.rg.element,"click",this.Yy);var a=new g.V({D:"button",Ea:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},T:[g.qL()]});g.F(this,a);a.Ba(this.rg.element);this.N(a.element,"click",this.oi);
a=new g.P1(this.player,this);g.F(this,a);a.Ba(this.rg.element);this.Uo=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.F(this,this.Uo);this.Uo.Ba(this.rg.element);this.N(this.Uo.element,"click",this.Yy);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.F(this,b);b.Ba(this.Uo.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.F(this,a);a.Ba(this.Uo.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.F(this,c);c.Ba(this.Uo.element);this.lL=new g.KP(this.player,
this,!1);g.F(this,this.lL);this.lL.Ba(b.element);b=new g.HP(this.player,this);g.F(this,b);b.Ba(a.element);this.nextButton=new g.KP(this.player,this,!0);g.F(this,this.nextButton);this.nextButton.Ba(c.element);this.wg=new g.AQ(this.player,this);g.F(this,this.wg);this.wg.Ba(this.rg.element);this.Hc=new g.PP(this.player,this);g.F(this,this.Hc);g.cN(this.player,this.Hc.element,4);this.My=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.F(this,this.My);g.cN(this.player,this.My.element,4);a=new g.V({D:"button",
Ea:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},T:[g.qL()]});g.F(this,a);a.Ba(this.My.element);this.N(a.element,"click",this.oi);a=new g.V({D:"button",Ea:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},T:[g.vL()]});g.F(this,a);a.Ba(this.My.element);this.N(a.element,"click",this.VT);this.N(this.player,"presentingplayerstatechange",this.Gc);this.N(this.player,"appresize",this.tb);this.N(this.player,"fullscreentoggled",this.tb);this.tb()};
g.k.show=function(){this.yd=new g.Dq(this.Mp,null,this);this.yd.start();this.ag||(this.dD(),this.ag=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Hc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.yd&&(this.yd.dispose(),this.yd=void 0);g.V.prototype.hide.call(this);this.player.Le()||(this.ag&&this.Hc.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.yd&&(this.yd.dispose(),this.yd=void 0);g.V.prototype.va.call(this)};
g.k.oi=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.k.VT=function(){this.player.playVideo()};
g.k.Yy=function(a){if(a.target===this.rg.element||a.target===this.Uo.element)g.S(this.player.S().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.tK(this.player.ub())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.k.fg=function(){g.M(this.player.getRootNode(),"ytp-player-minimized",this.player.Le())};
g.k.fd=function(){this.Hc.Rb();this.wg.Rb()};
g.k.Mp=function(){this.fd();this.yd&&this.yd.start()};
g.k.Gc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.tb=function(){g.$P(this.Hc,0,this.player.Za().getPlayerSize().width,!1);g.RP(this.Hc)};
g.k.QE=function(a){this.player.Le()&&(0===a?this.hide():this.show())};
g.k.dc=function(){return this.tooltip};
g.k.Je=function(){return!1};
g.k.jf=function(){return!1};
g.k.ai=function(){return!1};
g.k.Hz=function(){};
g.k.Jm=function(){};
g.k.qr=function(){};
g.k.Vm=function(){return null};
g.k.cj=function(){return new g.sl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Tp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Rl(a);if(b){c=g.Nq(b,"ytp-prev-button")||g.Nq(b,"ytp-next-button");var m=g.Nq(b,"ytp-play-button"),n=g.Nq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Pl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Nq(b,"ytp-miniplayer-button-top-left"),f=g.Pl(b,this.element),b=g.Rl(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Za().getPlayerSize().width;e=f+(e||0);l=g.Pf(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Nk=function(){};
g.k.lk=function(){return!1};g.v(p6,g.oN);p6.prototype.create=function(){};
p6.prototype.Gi=function(){return!1};
p6.prototype.load=function(){this.player.hideControls();this.i.show()};
p6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.zN.miniplayer=p6;})(_yt_player);
