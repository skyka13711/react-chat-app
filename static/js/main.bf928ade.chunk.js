(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{123:function(e,a,t){e.exports={message__checked:"ReadCheker_message__checked__22NtV"}},126:function(e,a,t){e.exports={aside:"ChatAside_aside__15mcF",aside__input:"ChatAside_aside__input__2M2J_"}},128:function(e,a,t){e.exports={title:"FormTitle_title__1-UYM",descr:"FormTitle_descr__1kdJG"}},16:function(e,a,t){e.exports={Messages:"Messages_Messages__HFqbl",message_audio:"Messages_message_audio__1Hjry",buble__content:"Messages_buble__content__3dj8F",message__attachments:"Messages_message__attachments__343U-",message__attachment:"Messages_message__attachment____GJ0",message__attachment_one:"Messages_message__attachment_one__2ZKbq",me:"Messages_me__sP6nY",avatar:"Messages_avatar__23Tu1",date:"Messages_date__2KUxt",buble:"Messages_buble__21RUX",white:"Messages_white__3skbR",blue:"Messages_blue__3w6NG",typing__indicator:"Messages_typing__indicator__3dpCb",bulge:"Messages_bulge__Pu-l2",blink:"Messages_blink__2cG0n",audio__wrapper:"Messages_audio__wrapper__2xmJ1",audio__btn:"Messages_audio__btn__3N8wG",play:"Messages_play__kp_dq"}},165:function(e,a,t){e.exports={container:"Chat_container__28C7c"}},166:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAFCAYAAACqwacNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADSSURBVHgBtVC7DkRAFB2iEIXcQqFQKohm+AN/sI1K40v8hnYbXyBRaOlNVAqJlkTiRqXcmemwW+6t7vPcc44yzzNM00Qty8IwDBn5En3fw7ZtVNM0Fscx/tihy7KA53lMq6oq67oOdF0nZVmSNE0vwPu+Q57n2bquYJom5cdv/vwC3DQNLYrihYjE932qDsMAYnCeJ2nbFu4MxnGkAlDkx3FIxveduq5BAIoQytUgCGTFWZAoih7SbNtmjuPIPgAgt+lhUZIkaBiGzF3XReUfnn4ArwlwYW4j7R8AAAAASUVORK5CYII="},167:function(e,a,t){e.exports=t.p+"static/media/test.7c6628a2.png"},168:function(e,a,t){e.exports=t.p+"static/media/checked.c1f419d6.svg"},169:function(e,a,t){e.exports=t.p+"static/media/noChecked.1456f013.svg"},170:function(e,a,t){e.exports=t.p+"static/media/audioWave.2b8196a5.svg"},171:function(e,a,t){e.exports=t.p+"static/media/pause.ebd13d3d.svg"},172:function(e,a,t){e.exports=t.p+"static/media/play.998b856f.svg"},182:function(e,a,t){e.exports={header__side:"AsideHeader_header__side__2bJ5N"}},183:function(e,a,t){e.exports={dialog__list:"Dialogs_dialog__list__1GIJ7"}},187:function(e,a,t){e.exports={modal:"Modal_modal__2Mxca",title:"Modal_title__CdhBi",descr:"Modal_descr__frzXR"}},188:function(e,a,t){e.exports={register__btn:"RegistrationForm_register__btn__y6-gE"}},200:function(e,a,t){e.exports=t(356)},205:function(e,a,t){},356:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(22),s=t.n(r),l=(t(205),t(37)),c=t(67),m=t.n(c),o=t(165),u=t.n(o),d=t(39),_=t.n(d),p=t(166),f=t.n(p);var g=function(){return i.a.createElement("header",{className:_.a.header},i.a.createElement("div",{className:_.a.chat__wrapper},i.a.createElement("div",{className:_.a.chat__name},"\u0413\u0430\u0439 \u042e\u043b\u0438\u0439 \u0426\u0435\u0437\u0430\u0440\u044c"),i.a.createElement("div",{className:_.a.descr},i.a.createElement("div",{className:_.a.circle+" "+" ".concat("")})," ","\u043d\u0435 \u0432 \u0441\u0435\u0442\u0438")),i.a.createElement("span",{className:_.a.header__btn+" btn"},i.a.createElement("img",{src:f.a})))},b=t(197),h=t(10),v=t(16),E=t.n(v),N=t(195),x=t(196),M=t(167),A=t.n(M),y=t(168),w=t.n(y),C=t(169),R=t.n(C),S=t(123),T=t.n(S);var k=function(e){var a=e.isMe,t=e.isRead;return i.a.createElement(i.a.Fragment,null,a?t?i.a.createElement("img",{className:T.a.message__checked,src:w.a}):i.a.createElement("img",{className:T.a.message__checked,src:R.a}):null)},O=t(55),j=t.n(O),F=t(170),I=t.n(F),G=t(171),q=t.n(G),D=t(172),B=t.n(D),H=function(e){var a=Math.floor(e/60),t=(e%60).toFixed();return"".concat(a<10?"0":"").concat(a,":").concat(t<10?"0":"").concat(t)};var J=function(e){var a=e.audio,t=Object(n.useRef)(null),r=Object(n.useState)(!1),s=Object(h.a)(r,2),l=s[0],c=s[1],m=Object(n.useState)(null),o=Object(h.a)(m,2),u=o[0],d=o[1],_=Object(n.useState)(null),p=Object(h.a)(_,2),f=p[0],g=p[1],b=Object(n.useState)(null),v=Object(h.a)(b,2),E=v[0],N=v[1],x=function(){c(!l),l?t.current.pause():t.current.play()};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:j.a.play,style:{animationDuration:E+"s",animationPlayState:l?"running":"paused"}}),i.a.createElement("div",{className:j.a.audio__wrapper},i.a.createElement("audio",{ref:t,src:a,onLoadedData:function(){d(H(t.current.duration)),N(Math.ceil(t.current.duration))},onTimeUpdate:function(){g(H(t.current.currentTime))},preload:"auto",onEnded:x}),i.a.createElement("div",{className:j.a.audio__btn},i.a.createElement("button",{onClick:x},i.a.createElement("img",{src:l?q.a:B.a}))),i.a.createElement("img",{className:j.a.audio__img,src:I.a}),i.a.createElement("div",{className:j.a.audio__duration},f||u)))};var z=function(e){var a=e.user,t=e.text,n=e.date,r=e.isMe,s=e.isRead,l=e.attachments,c=e.isTyping,m=e.audio;return i.a.createElement("div",{className:E.a.Messages+" "+"".concat(r&&E.a.me," ").concat(m&&E.a.message_audio)},i.a.createElement("div",{className:E.a.avatar},i.a.createElement("img",{src:a.avatar||A.a,alt:"avatar "+a.fullName})),i.a.createElement("div",{className:E.a.buble},(m||t||c)&&i.a.createElement("div",{className:!c&&E.a.buble__content+" "+"".concat(r&&!m?E.a.white:E.a.blue)},t&&t,c&&i.a.createElement("div",{className:E.a.typing__indicator},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),m&&i.a.createElement(J,{audio:m})),l&&i.a.createElement("div",{className:E.a.message__attachments},l.map((function(e){return i.a.createElement("img",{src:e.url,className:E.a.message__attachment+" "+"".concat(1===l.length&&!t&&E.a.message__attachment_one),alt:e.filename})}))),n&&i.a.createElement("div",{className:E.a.date},Object(N.a)(n,{addSuffix:!0,locale:x.a}))),i.a.createElement(k,{isMe:r,isRead:s}))},P=t(361),U=t(131),W=t(371),V=t(370),K=t(369),Y=t(368),Q=t(46),X=t.n(Q);var L=function(e){var a=e.sendMessages,t=Object(n.useState)(null),r=Object(h.a)(t,2),s=r[0],l=r[1];return i.a.createElement("div",{className:X.a.messages__input},i.a.createElement(P.a,{prefix:i.a.createElement(U.a,{type:"link",icon:i.a.createElement(W.a,null),className:X.a.input__suffix}),suffix:[i.a.createElement(U.a,{type:"link",icon:i.a.createElement(V.a,null),className:X.a.input__suffix}),s?i.a.createElement(U.a,{type:"link",icon:i.a.createElement(Y.a,null),className:X.a.input__suffix+" ".concat(X.a.animate),onClick:function(){a(s),l("")}}):i.a.createElement(U.a,{type:"link",icon:i.a.createElement(K.a,null),className:X.a.input__suffix})],style:{borderRadius:"4px"},size:"large",value:s,onChange:function(e){return function(e){l(e.target.value)}(e)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u2026"}))},Z=t(96),$=t.n(Z),ee=t(56);var ae=function(){var e=[{user:{lastName:"test",avatar:null},date:new Date,isMe:!0,isRead:!0,text:"test"},{user:{lastName:"test",avatar:null},date:new Date,isMe:!1,audio:"https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3",attachments:[{filename:"image.jpg",url:"https://source.unsplash.com/50x50/?nature,water"},{filename:"image.jpg",url:"https://source.unsplash.com/50x50/?nature,water"}]},{user:{lastName:"test",avatar:null},isMe:!1,isTyping:!0}],a=Object(n.useState)(e),t=Object(h.a)(a,2),r=t[0],s=t[1];return i.a.createElement("div",{className:$.a.content},i.a.createElement("div",{className:$.a.messages},r.length>0?r.map((function(e){return i.a.createElement(z,{text:e.text,user:e.user,date:e.date,isMe:e.isMe,isRead:e.isRead,isTyping:e.isTyping,attachments:e.attachments,key:e.date,audio:e.audio})})):i.a.createElement("div",{className:$.a.empty__wrapper},i.a.createElement(ee.a,{description:"No messages"}))),i.a.createElement(L,{sendMessages:function(e){var a={user:{lastName:"test",avatar:null},text:e,date:new Date,isMe:!0};s([].concat(Object(b.a)(r),[a]))}}))},te=t(126),ne=t.n(te),ie=t(367),re=t(366),se=t(182),le=t.n(se);var ce=function(){return i.a.createElement("div",{className:le.a.header__side},i.a.createElement(ie.a,{style:{fontSize:"18px",marginRight:"18px"}}),i.a.createElement("span",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432"),i.a.createElement(re.a,{style:{fontSize:"18px",position:"absolute",right:"18px"}}))},me=t(365);var oe=function(e){var a=e.searchVal,t=e.onChangeHandler;return i.a.createElement(P.a,{value:a,onChange:t,placeholder:"\u041f\u043e\u0438\u0441\u043a \u0441\u0440\u0435\u0434\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432",prefix:i.a.createElement(me.a,null)})},ue=t(183),de=t.n(ue),_e=t(375),pe=t(362),fe=t(184),ge=t.n(fe),be=t(41),he=t.n(be),ve=t(363),Ee=t(360),Ne=t(69),xe=t.n(Ne),Me=t(86),Ae=t.n(Me);var ye=function(e){var a=e.user;if(a.avatar)return i.a.createElement("img",{src:a.avatar,className:xe.a.dialog__item_avatar+" "+"".concat(a.online&&xe.a.online)});var t=function(e){var a=e.slice(e.length-4,e.length-1).split("").map((function(e){return e.charCodeAt()>255?255:e.charCodeAt()})),t=Object(h.a)(a,3),n=t[0],i=t[1],r=t[2];return{color:Ae()({r:n,g:i,b:r}).lighten(20),colorLight:Ae()({r:n,g:i,b:r}).lighten(0)}}(a._id),n=t.color,r=t.colorLight;return i.a.createElement("div",{style:{background:"linear-gradient(135deg, ".concat(n," 0%, ").concat(r," 100%)")},className:xe.a.dialog__item_avatar+" "+"".concat(a.online&&xe.a.online)},a.lastName[0])};var we=function(e){var a,t=e.message,n=e.unRead,r=e.isMe;return i.a.createElement("div",{className:he.a.dialog__item},i.a.createElement(ye,{user:t.user}),i.a.createElement("div",{className:he.a.dialog__item_info},i.a.createElement("div",null,i.a.createElement("div",{className:he.a.dialog__item_title},t.user.lastName),i.a.createElement("div",{className:he.a.dialog__item_lastMessage},t.text)),i.a.createElement("div",null,i.a.createElement("div",{className:he.a.dialog__item_date},(a=new Date(t.created_at),Object(ve.a)(a)?Object(Ee.a)(a,"HH:mm"):Object(Ee.a)(a,"dd/MM/yyyy"))),t&&n>0?i.a.createElement("div",{className:he.a.dialog__item_messageCount},n>9?"+9":n):i.a.createElement("div",{className:he.a.checked},i.a.createElement(k,{isMe:r,isRead:t.isRead})))))};var Ce=function(e){var a=e.userId,t=e.items;return t.length>0?i.a.createElement(_e.a,{component:"div",className:de.a.dialog__list},ge()(t,"created_at","desc").map((function(e){return i.a.createElement(pe.a,{key:e._id,timeout:200,classNames:"item"},i.a.createElement(we,{message:e,unReaded:0,isMe:a===e.user._id}))}))):i.a.createElement(ee.a,{description:"No matches"})};var Re=function(){var e=[{_id:"5eb8044f21ee464c1c0f7e0c",user:{_id:"5eb8044f3ef0b773fea85c55",lastName:"Holcomb Medina",avatar:null},created_at:"Mon Dec 12 1994 18:24:29 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!0,text:"Proident id nisi sit occaecat adipisicing commodo mollit in aliquip."},{_id:"5eb8044f09bcff34b439ad27",user:{_id:"5eb8044f92b9802675671d18",lastName:"Avery Bonner",avatar:null},created_at:"Wed Jan 25 2012 09:14:23 GMT+0800 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!1,text:"Veniam ipsum ad tempor et proident in ullamco."},{_id:"5eb8044fe79cd1a28ad068e8",user:{_id:"5eb8044f5746aa0cc7525540",lastName:"Howard Joyce",avatar:null},created_at:"Thu May 27 1976 16:11:21 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!0,text:"Pariatur aliqua irure exercitation dolore."},{_id:"5eb8044f3c5bba28d4e662bd",user:{_id:"5eb8044fcb9fb853407924de",lastName:"Mills Mccoy",avatar:null},created_at:"Sun Nov 24 1985 05:00:51 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!0,text:"Ex veniam Lorem ex sit consectetur minim laborum aliqua ea consequat anim fugiat nisi."},{_id:"5eb8044f4228a7e399a5568c",user:{_id:"5eb8044f414a623225a70c12",lastName:"Clarissa Shepherd",avatar:null},created_at:"Wed Jul 10 2019 05:02:32 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!0,text:"Cillum enim ex elit non exercitation duis."},{_id:"5eb8044f2f09518c1766ad36",user:{_id:"5eb8044f22c9372be5ba30fe",lastName:"Aguilar Gonzales",avatar:null},created_at:"Sat Aug 11 2012 20:55:21 GMT+0800 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!0,text:"Excepteur labore reprehenderit minim ut exercitation laborum esse ullamco."},{_id:"5eb8044f1596c480dff54a2a",user:{_id:"5eb8044f6548595030e328e8",lastName:"Hooper Michael",avatar:null},created_at:"Sat Sep 01 1973 23:34:02 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!1,text:"Esse adipisicing qui cillum culpa do."},{_id:"5eb8044fdc940286fc18baa9",user:{_id:"5eb8044ffc89d303a8089352",lastName:"Eliza Bartlett",avatar:null},created_at:"Mon Aug 04 1997 10:22:44 GMT+0800 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u043b\u0435\u0442\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!1,text:"Aliquip fugiat anim fugiat officia excepteur velit velit aute do duis occaecat anim aliqua qui."},{_id:"5eb8044f41e01eb0d28296b4",user:{_id:"5eb8044fff3bedd7abf50e8d",lastName:"Kristin Day",avatar:null},created_at:"Mon May 26 1986 10:32:30 GMT+0800 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u043b\u0435\u0442\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!1,text:"Mollit occaecat aliqua nulla enim Lorem esse esse est aute sit."},{_id:"5eb8044f54f9385adc279ccb",user:{_id:"5eb8044f0904539823bc8774",lastName:"Natasha Hess",avatar:null},created_at:"Sat Nov 19 1977 00:13:04 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!1,text:"Do aliquip do veniam duis ea laborum fugiat."},{_id:"5eb8044fd6598ad96f15af94",user:{_id:"5eb8044fb0d5a4819b1b9e71",lastName:"Jamie Robles",avatar:null},created_at:"Fri Oct 31 1986 10:14:02 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!0,text:"Ut cillum excepteur ut veniam fugiat quis ad tempor."},{_id:"5eb8044f37843b999c3a6411",user:{_id:"5eb8044f14b80e623da4c8ee",lastName:"Hull Dunlap",avatar:null},created_at:"Sat Jul 02 1977 01:13:29 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!0,text:"Mollit qui exercitation occaecat id excepteur sunt laborum excepteur consequat duis nulla."},{_id:"5eb8044f12a1b4987cbca3c0",user:{_id:"5eb8044f5ca62018473e3dc6",lastName:"Gibson Schmidt",avatar:null},created_at:"Thu Nov 05 1992 14:06:42 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!0,text:"Eiusmod nisi cupidatat ut anim tempor ea aliqua ut consectetur."},{_id:"5eb8044f47c5b693b1fb762a",user:{_id:"5eb8044f0690093eb271c978",lastName:"Hallie Wilson",avatar:null},created_at:"Sat Dec 08 2001 14:57:09 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!0,text:"Nulla in ad aute esse consectetur nulla aliquip aute magna eiusmod ullamco minim est."},{_id:"5eb8044fbcb687b46bc981f3",user:{_id:"5eb8044ff15ae8a8f65ebe80",lastName:"Ruthie Fowler",avatar:null},created_at:"Wed Jan 14 1976 00:31:29 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!1,text:"Eu velit proident do et pariatur culpa non elit et nostrud consectetur reprehenderit reprehenderit sit."},{_id:"5eb8044fca119962694a9a73",user:{_id:"5eb8044fccf434753f5b277e",lastName:"Cortez Faulkner",avatar:null},created_at:"Mon Mar 02 2020 10:57:00 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!1,text:"Commodo ex reprehenderit ad adipisicing duis velit labore commodo elit magna voluptate eiusmod."},{_id:"5eb8044f9da1ebf844618f62",user:{_id:"5eb8044f0f098d38fbd25b48",lastName:"Autumn Kirk",avatar:null},created_at:"Sat Apr 01 1972 23:14:10 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!0,text:"Incididunt deserunt reprehenderit enim adipisicing et laborum sunt esse ipsum exercitation aliquip aute irure aute."},{_id:"5eb8044f18628e8cea5095de",user:{_id:"5eb8044f43a7c54760fc9dc8",lastName:"Angel Ramirez",avatar:null},created_at:"Fri Sep 05 1997 12:06:42 GMT+0800 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u043b\u0435\u0442\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!0,text:"Exercitation deserunt exercitation sunt enim ut elit Lorem dolor non aute."},{_id:"5eb8044fa16a541c3a74632f",user:{_id:"5eb8044f0fb2b59c1a40c042",lastName:"Parsons Shields",avatar:null},created_at:"Sat Mar 21 2009 02:55:28 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!0,text:"Id occaecat consectetur ut eiusmod sunt officia fugiat ut commodo minim aliqua ea."},{_id:"5eb8044f614e057f7bec29e5",user:{_id:"5eb8044f60c5652832baff2a",lastName:"Lorene Maynard",avatar:null},created_at:"Sun Dec 17 2000 08:58:35 GMT+0700 (\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)",isRead:!1,text:"Mollit sint voluptate amet adipisicing dolor id pariatur tempor veniam cupidatat."}],a=Object(n.useState)(""),t=Object(h.a)(a,2),r=t[0],s=t[1],l=Object(n.useState)(e),c=Object(h.a)(l,2),m=c[0],o=c[1];return i.a.createElement("aside",{className:ne.a.aside},i.a.createElement(ce,null),i.a.createElement("div",{className:ne.a.aside__input},i.a.createElement(oe,{onChangeHandler:function(a){o(e.filter((function(e){return e.user.lastName.toLowerCase().indexOf(a.target.value.toLowerCase())>=0}))),s(a.target.value)},searchVal:r})),i.a.createElement(Ce,{items:m}))};var Se=function(){return i.a.createElement("div",{className:u.a.container},i.a.createElement(g,null),i.a.createElement(Re,null),i.a.createElement(ae,null))},Te=t(93),ke=t(359),Oe=t(373),je=t(364),Fe=t(45),Ie=t(187),Ge=t.n(Ie),qe=function(e){var a=e.children;return i.a.createElement("div",{className:Ge.a.modal},a)},De=t(128),Be=t.n(De),He=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{className:Be.a.title},e.title),i.a.createElement("h2",{className:Be.a.descr},e.descr))},Je=t(374),ze=t(97),Pe=t.n(ze),Ue=function(){return i.a.createElement("div",{className:Pe.a.confirm__mail},i.a.createElement(Je.a,{style:{fontSize:"50px",marginBottom:"15px"}}),i.a.createElement("h3",{style:Pe.a.title},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),i.a.createElement("p",{style:Pe.a.descr},"\u041d\u0430 \u0412\u0430\u0448\u0443 \u043f\u043e\u0447\u0442\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0438\u0441\u044c\u043c\u043e \u0441 \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u043d\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430."))},We=t(188),Ve=t.n(We),Ke=function(e,a,t){return t[e]?a[e]?"error":"success":""};var Ye=function(e){e.values;var a=e.touched,t=e.errors,r=(e.isSubmitting,e.handleChange),s=e.handleBlur,l=e.handleSubmit,c=(e.handleReset,e.dirty,Object(n.useState)(!1)),m=Object(h.a)(c,2),o=m[0];return m[1],i.a.createElement(i.a.Fragment,null,i.a.createElement(He,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",descr:" \u0414\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 \u0447\u0430\u0442, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),i.a.createElement(qe,null,o?i.a.createElement(Ue,null):i.a.createElement(i.a.Fragment,null,i.a.createElement(ke.a,{name:"nest-messages",onFinish:function(e){l(e)}},i.a.createElement(ke.a.Item,{hasFeedback:!0,validateStatus:Ke("email",t,a),help:a.email&&t.email},i.a.createElement(P.a,{id:"email",placeholder:"E-Mail",size:"large",prefix:i.a.createElement(Oe.a,null),onChange:r,onBlur:s})),i.a.createElement(ke.a.Item,{hasFeedback:!0,validateStatus:Ke("name",t,a),help:a.name&&t.name},i.a.createElement(P.a,{id:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",size:"large",onChange:r,onBlur:s,prefix:i.a.createElement(ie.a,null)})),i.a.createElement(ke.a.Item,{hasFeedback:!0,validateStatus:Ke("password",t,a),help:a.password&&t.password},i.a.createElement(P.a.Password,{size:"large",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:r,onBlur:s,prefix:i.a.createElement(je.a,null)})),i.a.createElement(ke.a.Item,{hasFeedback:!0,validateStatus:Ke("confirm",t,a),help:a.confirm&&t.confirm},i.a.createElement(P.a.Password,{size:"large",id:"confirm",placeholder:"\u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:r,onBlur:s,prefix:i.a.createElement(je.a,null)})),i.a.createElement(ke.a.Item,null,i.a.createElement(U.a,{type:"primary",htmlType:"submit",className:Ve.a.register__btn},"\u0417\u0410\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0418\u0420\u041e\u0412\u0410\u0422\u042c\u0421\u042f"))),i.a.createElement(Fe.b,{to:"auth"},"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"))))},Qe=Object(Te.a)({mapPropsToValues:function(){return{email:"",name:"",password:"",confirm:""}},validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"):a.email="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",e.name||(a.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),e.password||(a.password="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),e.confirm?e.password!==e.confirm&&(a.confirm="\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"):a.confirm="\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",a},handleSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),t(!1)}),1e3)},displayName:"RegistationForm"})(Ye);var Xe=function(e){e.values;var a=e.touched,t=e.errors,n=(e.isSubmitting,e.handleChange),r=e.handleBlur,s=e.handleSubmit;return e.handleReset,e.dirty,i.a.createElement(i.a.Fragment,null,i.a.createElement(He,{title:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442",descr:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),i.a.createElement(qe,null,i.a.createElement(ke.a,{initialValues:{remember:!0},onFinish:function(e){s()}},i.a.createElement(ke.a.Item,{hasFeedback:!0,validateStatus:Ke("name",t,a),help:t.name},i.a.createElement(P.a,{id:"name",placeholder:"Username",size:"large",prefix:i.a.createElement(ie.a,null),onChange:n,onBlur:r})),i.a.createElement(ke.a.Item,{hasFeedback:!0,validateStatus:Ke("password",t,a),help:a.password&&t.password},i.a.createElement(P.a.Password,{size:"large",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:n,onBlur:r,prefix:i.a.createElement(je.a,null)})),i.a.createElement(ke.a.Item,null,i.a.createElement(U.a,{style:{width:"100%",height:"56px",fontSize:"16px",fontWeight:500},type:"primary",htmlType:"submit"},"\u0412\u041e\u0419\u0422\u0418 \u0412 \u0410\u041a\u041a\u0410\u0423\u041d\u0422"))),i.a.createElement(Fe.b,{to:"registration"}," \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f ")))},Le=Object(Te.a)({mapPropsToValues:function(){return{name:"",password:""}},validate:function(e){var a={};return e.name||(a.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),e.password||(a.password="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),a},handleSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),t(!1)}),1e3)},displayName:"AuthForm"})(Xe),Ze=function(){return i.a.createElement("div",{className:m.a.app},i.a.createElement(l.d,null,i.a.createElement(l.b,{exact:!0,path:"/",render:function(){return i.a.createElement(l.a,{to:"auth"})}}),i.a.createElement(l.b,{path:"/auth",render:function(){return i.a.createElement("div",{className:m.a.form__contaier},"  ",i.a.createElement(Le,null))}}),i.a.createElement(l.b,{path:"/registration",render:function(){return i.a.createElement("div",{className:m.a.form__contaier}," ",i.a.createElement(Qe,null))}}),i.a.createElement(l.b,{path:"/im",render:function(){return i.a.createElement("div",{className:m.a.container},i.a.createElement(Se,null)," ")}}),i.a.createElement(l.b,{path:"/*",render:function(){return i.a.createElement(l.a,{to:"/im"})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(Fe.a,null,i.a.createElement(i.a.StrictMode,null,i.a.createElement(Ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,a,t){e.exports={header:"ChatHeader_header__22HqZ",header__btn:"ChatHeader_header__btn__1Zvdm",chat__wrapper:"ChatHeader_chat__wrapper__1s_jX",chat__name:"ChatHeader_chat__name__2sIdy",descr:"ChatHeader_descr__1ey3l",circle:"ChatHeader_circle__1lwN3",active:"ChatHeader_active__3ONMK"}},41:function(e,a,t){e.exports={checked:"DialogItem_checked__Wo8dG",dialog__item:"DialogItem_dialog__item__i-hj1",activ:"DialogItem_activ__3Os3o",dialog__item_info:"DialogItem_dialog__item_info__xGoHq",dialog__item_title:"DialogItem_dialog__item_title__1pWW-",dialog__item_lastMessage:"DialogItem_dialog__item_lastMessage__Pbedy",dialog__item_date:"DialogItem_dialog__item_date__ytXjM",dialog__item_messageCount:"DialogItem_dialog__item_messageCount__2-nFp"}},46:function(e,a,t){e.exports={messages__input:"MessagesInput_messages__input__19v58",input__suffix:"MessagesInput_input__suffix__23_pt",animate:"MessagesInput_animate__TXJTr",icon:"MessagesInput_icon__5iJJT"}},55:function(e,a,t){e.exports={message_audio:"Audio_message_audio__2JvCa",buble__content:"Audio_buble__content__2Cw6x",audio__wrapper:"Audio_audio__wrapper__2hv5Q",audio__btn:"Audio_audio__btn__2y_nO",play:"Audio_play__32-OQ",blink:"Audio_blink__1MHSd",bulge:"Audio_bulge__3z5mG"}},67:function(e,a,t){e.exports={app:"App_app__2TMyE",form__contaier:"App_form__contaier__2d1dC",container:"App_container__3pKKd"}},69:function(e,a,t){e.exports={dialog__item_avatar:"Avatar_dialog__item_avatar__1_GfQ",online:"Avatar_online__WmYD1"}},96:function(e,a,t){e.exports={content:"ChatContent_content__3R7Kq",messages:"ChatContent_messages__29CzT",empty__wrapper:"ChatContent_empty__wrapper__1ECBP"}},97:function(e,a,t){e.exports={confirm__mail:"ConfirmEmail_confirm__mail__tHlVE"}}},[[200,1,2]]]);
//# sourceMappingURL=main.bf928ade.chunk.js.map