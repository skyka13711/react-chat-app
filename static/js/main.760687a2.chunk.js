(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{118:function(e,a,t){e.exports={message__checked:"ReadCheker_message__checked__22NtV"}},121:function(e,a,t){e.exports={content:"ChatContent_content__3R7Kq",messages:"ChatContent_messages__29CzT"}},122:function(e,a,t){e.exports={aside:"ChatAside_aside__15mcF",aside__input:"ChatAside_aside__input__2M2J_"}},124:function(e,a,t){e.exports={title:"FormTitle_title__1-UYM",descr:"FormTitle_descr__1kdJG"}},13:function(e,a,t){e.exports={Messages:"Messages_Messages__HFqbl",message_audio:"Messages_message_audio__1Hjry",buble__content:"Messages_buble__content__3dj8F",message__attachments:"Messages_message__attachments__343U-",message__attachment:"Messages_message__attachment____GJ0",message__attachment_one:"Messages_message__attachment_one__2ZKbq",me:"Messages_me__sP6nY",avatar:"Messages_avatar__23Tu1",date:"Messages_date__2KUxt",buble:"Messages_buble__21RUX",white:"Messages_white__3skbR",blue:"Messages_blue__3w6NG",typing__indicator:"Messages_typing__indicator__3dpCb",bulge:"Messages_bulge__Pu-l2",blink:"Messages_blink__2cG0n",audio__wrapper:"Messages_audio__wrapper__2xmJ1",audio__btn:"Messages_audio__btn__3N8wG",play:"Messages_play__kp_dq"}},161:function(e,a,t){e.exports={container:"Chat_container__1ti-k"}},162:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAFCAYAAACqwacNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADSSURBVHgBtVC7DkRAFB2iEIXcQqFQKohm+AN/sI1K40v8hnYbXyBRaOlNVAqJlkTiRqXcmemwW+6t7vPcc44yzzNM00Qty8IwDBn5En3fw7ZtVNM0Fscx/tihy7KA53lMq6oq67oOdF0nZVmSNE0vwPu+Q57n2bquYJom5cdv/vwC3DQNLYrihYjE932qDsMAYnCeJ2nbFu4MxnGkAlDkx3FIxveduq5BAIoQytUgCGTFWZAoih7SbNtmjuPIPgAgt+lhUZIkaBiGzF3XReUfnn4ArwlwYW4j7R8AAAAASUVORK5CYII="},163:function(e,a,t){e.exports=t.p+"static/media/test.7c6628a2.png"},164:function(e,a,t){e.exports=t.p+"static/media/checked.c1f419d6.svg"},165:function(e,a,t){e.exports=t.p+"static/media/noChecked.1456f013.svg"},166:function(e,a,t){e.exports=t.p+"static/media/audioWave.2b8196a5.svg"},167:function(e,a,t){e.exports=t.p+"static/media/pause.ebd13d3d.svg"},168:function(e,a,t){e.exports=t.p+"static/media/play.998b856f.svg"},169:function(e,a,t){e.exports={messages__input:"MessagesInput_messages__input__19v58"}},179:function(e,a,t){e.exports={header__side:"AsideHeader_header__side__2bJ5N"}},180:function(e,a,t){e.exports={dialog__list:"Dialogs_dialog__list__1GIJ7"}},184:function(e,a,t){e.exports={modal:"Modal_modal__2Mxca",title:"Modal_title__CdhBi",descr:"Modal_descr__frzXR"}},185:function(e,a,t){e.exports={register__btn:"RegistrationForm_register__btn__y6-gE"}},196:function(e,a,t){e.exports=t(352)},201:function(e,a,t){},352:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(45),l=t.n(s),i=(t(201),t(36)),c=t(63),m=t.n(c),o=t(161),_=t.n(o),d=t(38),u=t.n(d),g=t(162),p=t.n(g);var h=function(){return r.a.createElement("header",{className:u.a.header},r.a.createElement("div",{className:u.a.chat__wrapper},r.a.createElement("div",{className:u.a.chat__name},"\u0413\u0430\u0439 \u042e\u043b\u0438\u0439 \u0426\u0435\u0437\u0430\u0440\u044c"),r.a.createElement("div",{className:u.a.descr},r.a.createElement("div",{className:u.a.circle+" "+" ".concat("")})," ","\u043d\u0435 \u0432 \u0441\u0435\u0442\u0438")),r.a.createElement("span",{className:u.a.header__btn},r.a.createElement("img",{src:p.a})))},E=t(194),f=t(15),v=t(13),b=t.n(v),A=t(192),N=t(193),x=t(163),M=t.n(x),w=t(164),y=t.n(w),C=t(165),S=t.n(C),k=t(118),R=t.n(k);var F=function(e){var a=e.isMe,t=e.isRead;return r.a.createElement(r.a.Fragment,null,a?t?r.a.createElement("img",{className:R.a.message__checked,src:y.a}):r.a.createElement("img",{className:R.a.message__checked,src:S.a}):null)},j=t(53),O=t.n(j),I=t(166),B=t.n(I),D=t(167),T=t.n(D),H=t(168),z=t.n(H),U=function(e){var a=Math.floor(e/60),t=(e%60).toFixed();return"".concat(a<10?"0":"").concat(a,":").concat(t<10?"0":"").concat(t)};var q=function(e){var a=e.audio,t=Object(n.useRef)(null),s=Object(n.useState)(!1),l=Object(f.a)(s,2),i=l[0],c=l[1],m=Object(n.useState)(null),o=Object(f.a)(m,2),_=o[0],d=o[1],u=Object(n.useState)(null),g=Object(f.a)(u,2),p=g[0],h=g[1],E=Object(n.useState)(null),v=Object(f.a)(E,2),b=v[0],A=v[1],N=function(){c(!i),i?t.current.pause():t.current.play()};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:O.a.play,style:{animationDuration:b+"s",animationPlayState:i?"running":"paused"}}),r.a.createElement("div",{className:O.a.audio__wrapper},r.a.createElement("audio",{ref:t,src:a,onLoadedData:function(){d(U(t.current.duration)),A(Math.ceil(t.current.duration))},onTimeUpdate:function(){h(U(t.current.currentTime))},preload:"auto",onEnded:N}),r.a.createElement("div",{className:O.a.audio__btn},r.a.createElement("button",{onClick:N},r.a.createElement("img",{src:i?T.a:z.a}))),r.a.createElement("img",{className:O.a.audio__img,src:B.a}),r.a.createElement("div",{className:O.a.audio__duration},p||_)))};var J=function(e){var a=e.user,t=e.text,n=e.date,s=e.isMe,l=e.isRead,i=e.attachments,c=e.isTyping,m=e.audio;return r.a.createElement("div",{className:b.a.Messages+" "+"".concat(s&&b.a.me," ").concat(m&&b.a.message_audio)},r.a.createElement("div",{className:b.a.avatar},r.a.createElement("img",{src:a.avatar||M.a,alt:"avatar "+a.fullName})),r.a.createElement("div",{className:b.a.buble},(m||t||c)&&r.a.createElement("div",{className:!c&&b.a.buble__content+" "+"".concat(s&&!m?b.a.white:b.a.blue)},t&&t,c&&r.a.createElement("div",{className:b.a.typing__indicator},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),m&&r.a.createElement(q,{audio:m})),i&&r.a.createElement("div",{className:b.a.message__attachments},i.map((function(e){return r.a.createElement("img",{src:e.url,className:b.a.message__attachment+" "+"".concat(1===i.length&&!t&&b.a.message__attachment_one),alt:e.filename})}))),n&&r.a.createElement("div",{className:b.a.date},Object(A.a)(n,{addSuffix:!0,locale:N.a}))),r.a.createElement(F,{isMe:s,isRead:l}))},G=t(357),P=t(364),Y=t(363),Q=t(362),V=t(361),W=t(169),K=t.n(W);var X=function(e){var a=e.sendMessages,t=Object(n.useState)(null),s=Object(f.a)(t,2),l=s[0],i=s[1];return r.a.createElement("div",{className:K.a.messages__input},r.a.createElement(G.a,{prefix:r.a.createElement(P.a,null),suffix:[r.a.createElement(Y.a,null),r.a.createElement(Q.a,null),r.a.createElement(V.a,{onClick:function(){a(l),i("")}})],style:{borderRadius:"4px"},size:"large",value:l,onChange:function(e){return function(e){i(e.target.value)}(e)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u2026"}))},Z=t(121),L=t.n(Z);var $=function(){var e=[{user:{lastName:"test",avatar:null},date:new Date,isMe:!0,isRead:!0,text:"test"},{user:{lastName:"test",avatar:null},date:new Date,isMe:!1,audio:"https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3",attachments:[{filename:"image.jpg",url:"https://source.unsplash.com/50x50/?nature,water"},{filename:"image.jpg",url:"https://source.unsplash.com/50x50/?nature,water"}]},{user:{lastName:"test",avatar:null},isMe:!1,isTyping:!0}],a=Object(n.useState)(e),t=Object(f.a)(a,2),s=t[0],l=t[1];return r.a.createElement("div",{className:L.a.content},r.a.createElement("div",{className:L.a.messages},s.map((function(e){return r.a.createElement(J,{text:e.text,user:e.user,date:e.date,isMe:e.isMe,isRead:e.isRead,isTyping:e.isTyping,attachments:e.attachments,key:e.date,audio:e.audio})}))),r.a.createElement(X,{sendMessages:function(e){var a={user:{lastName:"test",avatar:null},text:e,date:new Date,isMe:!0};l([].concat(Object(E.a)(s),[a]))}}))},ee=t(122),ae=t.n(ee),te=t(360),ne=t(368),re=t(179),se=t.n(re);var le=function(){return r.a.createElement("div",{className:se.a.header__side},r.a.createElement(te.a,{style:{fontSize:"18px",marginRight:"18px"}}),r.a.createElement("span",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432"),r.a.createElement(ne.a,{style:{fontSize:"18px",position:"absolute",right:"18px"}}))},ie=t(367);var ce=function(){return r.a.createElement(G.a,{placeholder:"\u041f\u043e\u0438\u0441\u043a \u0441\u0440\u0435\u0434\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432",style:{background:"#F7F8F9",borderRadius:"2px"},prefix:r.a.createElement(ie.a,null)})},me=t(180),oe=t.n(me),_e=t(40),de=t.n(_e),ue=t(358),ge=t(355),pe=t(82),he=t.n(pe),Ee=t(65),fe=t.n(Ee);var ve=function(e){var a=e.user;if(a.avatar)return r.a.createElement("img",{src:a.avatar,className:fe.a.dialog__item_avatar+" "+"".concat(a.online&&fe.a.online)});var t=function(e){var a=e.substr(5,8).split("").map((function(e){return e.charCodeAt()>255?255:e.charCodeAt()})),t=Object(f.a)(a,3),n=t[0],r=t[1],s=t[2];return{color:he()({r:n,g:r,b:s}).toHexString(),colorLight:he()({r:n,g:r,b:s}).lighten(30).toHexString()}}(a._id),n=t.color,s=t.colorLight;return console.log("linear-gradient(135deg, ".concat(n," 0 %, ").concat(s," 100 %)")),r.a.createElement("div",{style:{background:"linear-gradient(135deg, ".concat(n," 0%, ").concat(s," 100%)")},className:fe.a.dialog__item_avatar+" "+"".concat(a.online&&fe.a.online)},a.fullName[0])};var be=function(e){var a,t=e.message,n=e.unReaded,s=e.isMe;return console.log(t.user._id),r.a.createElement("div",{className:de.a.dialog__item},r.a.createElement(ve,{user:t.user}),r.a.createElement("div",{className:de.a.dialog__item_info},r.a.createElement("div",null,r.a.createElement("div",{className:de.a.dialog__item_title},t.user.fullName),r.a.createElement("div",{className:de.a.dialog__item_lastMessage},t.text)),r.a.createElement("div",null,r.a.createElement("div",{className:de.a.dialog__item_date},(a=t.date,Object(ue.a)(a)?Object(ge.a)(a,"HH:mm"):Object(ge.a)(a,"dd/MM/yyyy"))),t&&n>0?r.a.createElement("div",{className:de.a.dialog__item_messageCount},n>9?"+9":n):r.a.createElement("div",{className:de.a.checked},r.a.createElement(F,{isMe:s,isReaded:t.isReaded})))))},Ae=t(181),Ne=t.n(Ae);var xe=function(e){var a=e.userId,t=[{text:"\u042f \u0449\u0430 \u0441\u0442\u0440\u0435\u043f\u0441\u0438\u043b\u0441 \u0442\u0435\u0431\u0435 \u043a\u0443\u043f\u043b\u044e, \u043f\u2026",date:new Date("Thu May 07 2020 17:58:01"),isReaded:!0,isMe:!0,user:{_id:"098f6bcd4621d373cade4e832627b4f6",fullName:"Jack the Ripper",online:!0}},{text:"\u041c\u044b \u0432\u0441\u0435 \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0443\u0435\u043c \u2026",date:new Date("Thu May 08 2020 17:58:01"),isReaded:!0,isMe:!1,user:{_id:"ad0234829205b9033196ba818f7a872b",fullName:"\u0424\u0451\u0434\u043e\u0440 \u0414\u043e\u0441\u0442\u043e\u0435\u0432\u0441\u043a\u0438\u0439",online:!0}},{text:"\u041c\u044b \u0432\u0441\u0435 \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0443\u0435\u043c \u2026",date:new Date("Thu May 08 2020 19:58:01"),isReaded:!0,isMe:!1,user:{_id:"1a3d75d44753ad246f0bd333cdaf08b0",fullName:"\u0424\u0451\u0434\u043e\u0440 \u0414\u043e\u0441\u0442\u043e\u0435\u0432\u0441\u043a\u0438\u0439",online:!0}}];return r.a.createElement("div",{className:oe.a.dialog__list},Ne()(t,"date","desc").map((function(e){return r.a.createElement(be,{message:e,unReaded:10,isMe:a===e.user._id})})))};var Me=function(){return r.a.createElement("aside",{className:ae.a.aside},r.a.createElement(le,null),r.a.createElement("div",{className:ae.a.aside__input},r.a.createElement(ce,null)),r.a.createElement(xe,null))};var we=function(){return r.a.createElement("div",{className:_.a.container},r.a.createElement(h,null),r.a.createElement(Me,null),r.a.createElement($,null))},ye=t(88),Ce=t(354),Se=t(127),ke=t(366),Re=t(365),Fe=t(44),je=t(184),Oe=t.n(je),Ie=function(e){var a=e.children;return r.a.createElement("div",{className:Oe.a.modal},a)},Be=t(124),De=t.n(Be),Te=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:De.a.title},e.title),r.a.createElement("h2",{className:De.a.descr},e.descr))},He=t(359),ze=t(91),Ue=t.n(ze),qe=function(){return r.a.createElement("div",{className:Ue.a.confirm__mail},r.a.createElement(He.a,{style:{fontSize:"50px",marginBottom:"15px"}}),r.a.createElement("h3",{style:Ue.a.title},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),r.a.createElement("p",{style:Ue.a.descr},"\u041d\u0430 \u0412\u0430\u0448\u0443 \u043f\u043e\u0447\u0442\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0438\u0441\u044c\u043c\u043e \u0441 \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u043d\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430."))},Je=t(185),Ge=t.n(Je),Pe=function(e,a,t){return t[e]?a[e]?"error":"success":""};var Ye=function(e){e.values;var a=e.touched,t=e.errors,s=(e.isSubmitting,e.handleChange),l=e.handleBlur,i=e.handleSubmit,c=(e.handleReset,e.dirty,Object(n.useState)(!1)),m=Object(f.a)(c,2),o=m[0];return m[1],r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",descr:" \u0414\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 \u0447\u0430\u0442, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),r.a.createElement(Ie,null,o?r.a.createElement(qe,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{name:"nest-messages",onFinish:function(e){i(e)}},r.a.createElement(Ce.a.Item,{hasFeedback:!0,validateStatus:Pe("email",t,a),help:a.email&&t.email},r.a.createElement(G.a,{id:"email",placeholder:"E-Mail",size:"large",prefix:r.a.createElement(ke.a,null),onChange:s,onBlur:l})),r.a.createElement(Ce.a.Item,{hasFeedback:!0,validateStatus:Pe("name",t,a),help:a.name&&t.name},r.a.createElement(G.a,{id:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",size:"large",onChange:s,onBlur:l,prefix:r.a.createElement(te.a,null)})),r.a.createElement(Ce.a.Item,{hasFeedback:!0,validateStatus:Pe("password",t,a),help:a.password&&t.password},r.a.createElement(G.a.Password,{size:"large",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:s,onBlur:l,prefix:r.a.createElement(Re.a,null)})),r.a.createElement(Ce.a.Item,{hasFeedback:!0,validateStatus:Pe("confirm",t,a),help:a.confirm&&t.confirm},r.a.createElement(G.a.Password,{size:"large",id:"confirm",placeholder:"\u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:s,onBlur:l,prefix:r.a.createElement(Re.a,null)})),r.a.createElement(Ce.a.Item,null,r.a.createElement(Se.a,{type:"primary",htmlType:"submit",className:Ge.a.register__btn},"\u0417\u0410\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0418\u0420\u041e\u0412\u0410\u0422\u042c\u0421\u042f"))),r.a.createElement(Fe.b,{to:"auth"},"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"))))},Qe=Object(ye.a)({mapPropsToValues:function(){return{email:"",name:"",password:"",confirm:""}},validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"):a.email="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",e.name||(a.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),e.password||(a.password="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),e.confirm?e.password!==e.confirm&&(a.confirm="\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"):a.confirm="\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",a},handleSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),t(!1)}),1e3)},displayName:"RegistationForm"})(Ye);var Ve=function(e){e.values;var a=e.touched,t=e.errors,n=(e.isSubmitting,e.handleChange),s=e.handleBlur,l=e.handleSubmit;return e.handleReset,e.dirty,r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,{title:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442",descr:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),r.a.createElement(Ie,null,r.a.createElement(Ce.a,{initialValues:{remember:!0},onFinish:function(e){l()}},r.a.createElement(Ce.a.Item,{hasFeedback:!0,validateStatus:Pe("name",t,a),help:t.name},r.a.createElement(G.a,{id:"name",placeholder:"Username",size:"large",prefix:r.a.createElement(te.a,null),onChange:n,onBlur:s})),r.a.createElement(Ce.a.Item,{hasFeedback:!0,validateStatus:Pe("password",t,a),help:a.password&&t.password},r.a.createElement(G.a.Password,{size:"large",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:n,onBlur:s,prefix:r.a.createElement(Re.a,null)})),r.a.createElement(Ce.a.Item,null,r.a.createElement(Se.a,{style:{width:"100%",height:"56px",fontSize:"16px",fontWeight:500},type:"primary",htmlType:"submit"},"\u0412\u041e\u0419\u0422\u0418 \u0412 \u0410\u041a\u041a\u0410\u0423\u041d\u0422"))),r.a.createElement(Fe.b,{to:"registration"}," \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f ")))},We=Object(ye.a)({mapPropsToValues:function(){return{name:"",password:""}},validate:function(e){var a={};return e.name||(a.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),e.password||(a.password="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),a},handleSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),t(!1)}),1e3)},displayName:"AuthForm"})(Ve),Ke=function(){return r.a.createElement("div",{className:m.a.app},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(i.a,{to:"auth"})}}),r.a.createElement(i.b,{path:"/auth",render:function(){return r.a.createElement("div",{className:m.a.form__contaier},"  ",r.a.createElement(We,null))}}),r.a.createElement(i.b,{path:"/registration",render:function(){return r.a.createElement("div",{className:m.a.form__contaier}," ",r.a.createElement(Qe,null))}}),r.a.createElement(i.b,{path:"/im",render:function(){return r.a.createElement("div",{className:m.a.container},r.a.createElement(we,null)," ")}}),r.a.createElement(i.b,{path:"/*",render:function(){return r.a.createElement(i.a,{to:"/im"})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Fe.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,a,t){e.exports={header:"ChatHeader_header__22HqZ",header__btn:"ChatHeader_header__btn__1Zvdm",chat__wrapper:"ChatHeader_chat__wrapper__1s_jX",chat__name:"ChatHeader_chat__name__2sIdy",descr:"ChatHeader_descr__1ey3l",circle:"ChatHeader_circle__1lwN3",active:"ChatHeader_active__3ONMK"}},40:function(e,a,t){e.exports={checked:"DialogItem_checked__Wo8dG",dialog__item:"DialogItem_dialog__item__i-hj1",dialog__item_info:"DialogItem_dialog__item_info__xGoHq",dialog__item_title:"DialogItem_dialog__item_title__1pWW-",dialog__item_lastMessage:"DialogItem_dialog__item_lastMessage__Pbedy",dialog__item_date:"DialogItem_dialog__item_date__ytXjM",dialog__item_messageCount:"DialogItem_dialog__item_messageCount__2-nFp"}},53:function(e,a,t){e.exports={message_audio:"Audio_message_audio__2JvCa",buble__content:"Audio_buble__content__2Cw6x",audio__wrapper:"Audio_audio__wrapper__2hv5Q",audio__btn:"Audio_audio__btn__2y_nO",play:"Audio_play__32-OQ",blink:"Audio_blink__1MHSd",bulge:"Audio_bulge__3z5mG"}},63:function(e,a,t){e.exports={app:"App_app__2TMyE",form__contaier:"App_form__contaier__2d1dC",container:"App_container__3pKKd"}},65:function(e,a,t){e.exports={dialog__item_avatar:"Avatar_dialog__item_avatar__1_GfQ",online:"Avatar_online__WmYD1"}},91:function(e,a,t){e.exports={confirm__mail:"ConfirmEmail_confirm__mail__tHlVE"}}},[[196,1,2]]]);
//# sourceMappingURL=main.760687a2.chunk.js.map