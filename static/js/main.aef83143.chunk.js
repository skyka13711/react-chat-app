(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{115:function(e,a,t){e.exports={message__checked:"ReadCheker_message__checked__22NtV"}},118:function(e,a,t){e.exports={content:"ChatContent_content__3R7Kq"}},119:function(e,a,t){e.exports={aside:"ChatAside_aside__15mcF",aside__input:"ChatAside_aside__input__2M2J_"}},121:function(e,a,t){e.exports={title:"FormTitle_title__1-UYM",descr:"FormTitle_descr__1kdJG"}},158:function(e,a,t){e.exports={container:"Chat_container__1ti-k"}},159:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAFCAYAAACqwacNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADSSURBVHgBtVC7DkRAFB2iEIXcQqFQKohm+AN/sI1K40v8hnYbXyBRaOlNVAqJlkTiRqXcmemwW+6t7vPcc44yzzNM00Qty8IwDBn5En3fw7ZtVNM0Fscx/tihy7KA53lMq6oq67oOdF0nZVmSNE0vwPu+Q57n2bquYJom5cdv/vwC3DQNLYrihYjE932qDsMAYnCeJ2nbFu4MxnGkAlDkx3FIxveduq5BAIoQytUgCGTFWZAoih7SbNtmjuPIPgAgt+lhUZIkaBiGzF3XReUfnn4ArwlwYW4j7R8AAAAASUVORK5CYII="},160:function(e,a,t){e.exports=t.p+"static/media/test.7c6628a2.png"},161:function(e,a,t){e.exports=t.p+"static/media/checked.c1f419d6.svg"},162:function(e,a,t){e.exports=t.p+"static/media/noChecked.1456f013.svg"},163:function(e,a,t){e.exports=t.p+"static/media/audioWave.2b8196a5.svg"},164:function(e,a,t){e.exports=t.p+"static/media/pause.ebd13d3d.svg"},165:function(e,a,t){e.exports=t.p+"static/media/play.998b856f.svg"},166:function(e,a,t){e.exports={messages__input:"MessagesInput_messages__input__19v58"}},176:function(e,a,t){e.exports={header__side:"AsideHeader_header__side__2bJ5N"}},177:function(e,a,t){e.exports={dialog__list:"Dialogs_dialog__list__1GIJ7"}},181:function(e,a,t){e.exports={modal:"Modal_modal__2Mxca",title:"Modal_title__CdhBi",descr:"Modal_descr__frzXR"}},182:function(e,a,t){e.exports={register__btn:"RegistrationForm_register__btn__y6-gE"}},193:function(e,a,t){e.exports=t(350)},198:function(e,a,t){},25:function(e,a,t){e.exports={online:"DialogItem_online__3-Y4R",checked:"DialogItem_checked__Wo8dG",dialog__item:"DialogItem_dialog__item__i-hj1",dialog__item_avatar:"DialogItem_dialog__item_avatar__1INER",dialog__item_info:"DialogItem_dialog__item_info__xGoHq",dialog__item_title:"DialogItem_dialog__item_title__1pWW-",dialog__item_lastMessage:"DialogItem_dialog__item_lastMessage__Pbedy",dialog__item_date:"DialogItem_dialog__item_date__ytXjM",dialog__item_messageCount:"DialogItem_dialog__item_messageCount__2-nFp"}},350:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(45),l=t.n(r),i=(t(198),t(37)),c=t(62),m=t.n(c),_=t(158),o=t.n(_),d=t(39),u=t.n(d),g=t(159),p=t.n(g);var h=function(){return s.a.createElement("header",{className:u.a.header},s.a.createElement("div",{className:u.a.chat__wrapper},s.a.createElement("div",{className:u.a.chat__name},"\u0413\u0430\u0439 \u042e\u043b\u0438\u0439 \u0426\u0435\u0437\u0430\u0440\u044c"),s.a.createElement("div",{className:u.a.descr},s.a.createElement("div",{className:u.a.circle+" "+" ".concat("")})," ","\u043d\u0435 \u0432 \u0441\u0435\u0442\u0438")),s.a.createElement("span",{className:u.a.header__btn},s.a.createElement("img",{src:p.a})))},E=t(191),f=t(35),v=t(9),b=t.n(v),N=t(189),A=t(190),M=t(160),x=t.n(M),w=t(161),y=t.n(w),C=t(162),R=t.n(C),k=t(115),F=t.n(k);var I=function(e){var a=e.isMe,t=e.isRead;return s.a.createElement(s.a.Fragment,null,a?t?s.a.createElement("img",{className:F.a.message__checked,src:y.a}):s.a.createElement("img",{className:F.a.message__checked,src:R.a}):null)},S=t(163),j=t.n(S),B=t(164),D=t.n(B),O=t(165),T=t.n(O);var z=function(e){var a=e.user,t=e.text,r=e.date,l=e.isMe,i=e.isRead,c=e.attachments,m=e.isTyping,_=e.audio,o=Object(n.useRef)(null),d=Object(n.useState)(!1),u=Object(f.a)(d,2),g=u[0],p=u[1],h=function(){p(!g),g?o.current.pause():o.current.play()};return s.a.createElement("div",{className:b.a.Messages+" "+"".concat(l&&b.a.me," ").concat(_&&b.a.message_audio)},s.a.createElement("div",{className:b.a.avatar},s.a.createElement("img",{src:a.avatar||x.a,alt:"avatar "+a.fullName})),s.a.createElement("div",{className:b.a.buble},(_||t||m)&&s.a.createElement("div",{className:!m&&b.a.buble__content+" "+"".concat(l&&!_?b.a.white:b.a.blue)},t&&t,m&&s.a.createElement("div",{className:b.a.typing__indicator},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),_&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:b.a.play,style:{animationDuration:"12s",animationPlayState:g?"running":"paused"}}),s.a.createElement("div",{className:b.a.audio__wrapper},s.a.createElement("audio",{ref:o,src:_,preload:!0,onEnded:h}),s.a.createElement("div",{className:b.a.audio__btn},s.a.createElement("button",{onClick:h},s.a.createElement("img",{src:g?D.a:T.a}))),s.a.createElement("img",{className:b.a.audio__img,src:j.a}),s.a.createElement("div",{className:b.a.audio__duration},"00:12")))),c&&s.a.createElement("div",{className:b.a.message__attachments},c.map((function(e){return s.a.createElement("img",{src:e.url,className:b.a.message__attachment+" "+"".concat(1===c.length&&!t&&b.a.message__attachment_one),alt:e.filename})}))),r&&s.a.createElement("div",{className:b.a.date},Object(N.a)(r,{addSuffix:!0,locale:A.a}))),s.a.createElement(I,{isMe:l,isRead:i}))},H=t(355),q=t(362),U=t(361),J=t(360),P=t(359),Y=t(166),G=t.n(Y);var V=function(e){var a=e.sendMessages,t=Object(n.useState)(null),r=Object(f.a)(t,2),l=r[0],i=r[1];return s.a.createElement("div",{className:G.a.messages__input},s.a.createElement(H.a,{prefix:s.a.createElement(q.a,null),suffix:[s.a.createElement(U.a,null),s.a.createElement(J.a,null),s.a.createElement(P.a,{onClick:function(){a(l),i("")}})],style:{borderRadius:"4px"},size:"large",value:l,onChange:function(e){return function(e){i(e.target.value)}(e)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u2026"}))},K=t(118),W=t.n(K);var X=function(){var e=[{user:{lastName:"test",avatar:null},date:new Date,isMe:!0,isRead:!0,audio:"https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3"},{user:{lastName:"test",avatar:null},text:"\u0421\u0430\u043b\u0430\u043c, \u0411\u0440\u0443\u0442! \u0427\u0451, \u043a\u0430\u043a, \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0438\u043b \u0444\u043b\u043e\u0442 \u0433\u0430\u043b\u043b\u043e\u0432? \ud83d\udd90\ud83c\udffb",date:new Date,isMe:!1,attachments:[{filename:"image.jpg",url:"https://source.unsplash.com/50x50/?nature,water"}]},{user:{lastName:"test",avatar:null},isMe:!1,isTyping:!0}],a=Object(n.useState)(e),t=Object(f.a)(a,2),r=t[0],l=t[1];return s.a.createElement("div",{className:W.a.content},s.a.createElement("div",{className:W.a.messages},r.map((function(e){return s.a.createElement(z,{text:e.text,user:e.user,date:e.date,isMe:e.isMe,isRead:e.isRead,isTyping:e.isTyping,attachments:e.attachments,key:e.date,audio:e.audio})}))),s.a.createElement(V,{sendMessages:function(e){var a={user:{lastName:"test",avatar:null},text:e,date:new Date,isMe:!0};l([].concat(Object(E.a)(r),[a]))}}))},Z=t(119),Q=t.n(Z),L=t(358),$=t(366),ee=t(176),ae=t.n(ee);var te=function(){return s.a.createElement("div",{className:ae.a.header__side},s.a.createElement(L.a,{style:{fontSize:"18px",marginRight:"18px"}}),s.a.createElement("span",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432"),s.a.createElement($.a,{style:{fontSize:"18px",position:"absolute",right:"18px"}}))},ne=t(365);var se=function(){return s.a.createElement(H.a,{placeholder:"\u041f\u043e\u0438\u0441\u043a \u0441\u0440\u0435\u0434\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432",style:{background:"#F7F8F9",borderRadius:"2px"},prefix:s.a.createElement(ne.a,null)})},re=t(177),le=t.n(re),ie=t(25),ce=t.n(ie),me=t(356),_e=t(353);var oe=function(e){var a,t=e.message,n=e.unReaded,r=e.isMe;return s.a.createElement("div",{className:ce.a.dialog__item},s.a.createElement("div",{className:ce.a.dialog__item_avatar+" "+"".concat(t.user.online&&ce.a.online)}),s.a.createElement("div",{className:ce.a.dialog__item_info},s.a.createElement("div",null,s.a.createElement("div",{className:ce.a.dialog__item_title},t.user.fullName),s.a.createElement("div",{className:ce.a.dialog__item_lastMessage},t.text)),s.a.createElement("div",null,s.a.createElement("div",{className:ce.a.dialog__item_date},(a=t.date,Object(me.a)(a)?Object(_e.a)(a,"HH:mm"):Object(_e.a)(a,"dd/MM/yyyy"))),t&&n>0?s.a.createElement("div",{className:ce.a.dialog__item_messageCount},n>9?"+9":n):s.a.createElement("div",{className:ce.a.checked},s.a.createElement(I,{isMe:r,isReaded:t.isReaded})))))},de=t(178),ue=t.n(de);var ge=function(e){var a=e.userId,t=[{text:"\u042f \u0449\u0430 \u0441\u0442\u0440\u0435\u043f\u0441\u0438\u043b\u0441 \u0442\u0435\u0431\u0435 \u043a\u0443\u043f\u043b\u044e, \u043f\u2026",date:new Date("Thu May 07 2020 17:58:01"),isReaded:!0,isMe:!0,user:{fullName:"Jack the Ripper",online:!0,_id:2}},{text:"\u041c\u044b \u0432\u0441\u0435 \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0443\u0435\u043c \u2026",date:new Date("Thu May 08 2020 17:58:01"),isReaded:!0,isMe:!1,user:{fullName:"\u0424\u0451\u0434\u043e\u0440 \u0414\u043e\u0441\u0442\u043e\u0435\u0432\u0441\u043a\u0438\u0439",online:!0,_id:1}},{text:"\u041c\u044b \u0432\u0441\u0435 \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0443\u0435\u043c \u2026",date:new Date("Thu May 08 2020 19:58:01"),isReaded:!0,isMe:!1,user:{fullName:"\u0424\u0451\u0434\u043e\u0440 \u0414\u043e\u0441\u0442\u043e\u0435\u0432\u0441\u043a\u0438\u0439",online:!0,_id:1}}];return s.a.createElement("div",{className:le.a.dialog__list},ue()(t,"date","desc").map((function(e){return s.a.createElement(oe,{message:e,unReaded:10,isMe:a===e.user._id})})))};var pe=function(){return s.a.createElement("aside",{className:Q.a.aside},s.a.createElement(te,null),s.a.createElement("div",{className:Q.a.aside__input},s.a.createElement(se,null)),s.a.createElement(ge,null))};var he=function(){return s.a.createElement("div",{className:o.a.container},s.a.createElement(h,null),s.a.createElement(pe,null),s.a.createElement(X,null))},Ee=t(85),fe=t(352),ve=t(124),be=t(364),Ne=t(363),Ae=t(44),Me=t(181),xe=t.n(Me),we=function(e){var a=e.children;return s.a.createElement("div",{className:xe.a.modal},a)},ye=t(121),Ce=t.n(ye),Re=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:Ce.a.title},e.title),s.a.createElement("h2",{className:Ce.a.descr},e.descr))},ke=t(357),Fe=t(88),Ie=t.n(Fe),Se=function(){return s.a.createElement("div",{className:Ie.a.confirm__mail},s.a.createElement(ke.a,{style:{fontSize:"50px",marginBottom:"15px"}}),s.a.createElement("h3",{style:Ie.a.title},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),s.a.createElement("p",{style:Ie.a.descr},"\u041d\u0430 \u0412\u0430\u0448\u0443 \u043f\u043e\u0447\u0442\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0438\u0441\u044c\u043c\u043e \u0441 \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u043d\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430."))},je=t(182),Be=t.n(je),De=function(e,a,t){return t[e]?a[e]?"error":"success":""};var Oe=function(e){e.values;var a=e.touched,t=e.errors,r=(e.isSubmitting,e.handleChange),l=e.handleBlur,i=e.handleSubmit,c=(e.handleReset,e.dirty,Object(n.useState)(!1)),m=Object(f.a)(c,2),_=m[0];return m[1],s.a.createElement(s.a.Fragment,null,s.a.createElement(Re,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",descr:" \u0414\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 \u0447\u0430\u0442, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),s.a.createElement(we,null,_?s.a.createElement(Se,null):s.a.createElement(s.a.Fragment,null,s.a.createElement(fe.a,{name:"nest-messages",onFinish:function(e){i(e)}},s.a.createElement(fe.a.Item,{hasFeedback:!0,validateStatus:De("email",t,a),help:a.email&&t.email},s.a.createElement(H.a,{id:"email",placeholder:"E-Mail",size:"large",prefix:s.a.createElement(be.a,null),onChange:r,onBlur:l})),s.a.createElement(fe.a.Item,{hasFeedback:!0,validateStatus:De("name",t,a),help:a.name&&t.name},s.a.createElement(H.a,{id:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",size:"large",onChange:r,onBlur:l,prefix:s.a.createElement(L.a,null)})),s.a.createElement(fe.a.Item,{hasFeedback:!0,validateStatus:De("password",t,a),help:a.password&&t.password},s.a.createElement(H.a.Password,{size:"large",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:r,onBlur:l,prefix:s.a.createElement(Ne.a,null)})),s.a.createElement(fe.a.Item,{hasFeedback:!0,validateStatus:De("confirm",t,a),help:a.confirm&&t.confirm},s.a.createElement(H.a.Password,{size:"large",id:"confirm",placeholder:"\u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:r,onBlur:l,prefix:s.a.createElement(Ne.a,null)})),s.a.createElement(fe.a.Item,null,s.a.createElement(ve.a,{type:"primary",htmlType:"submit",className:Be.a.register__btn},"\u0417\u0410\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0418\u0420\u041e\u0412\u0410\u0422\u042c\u0421\u042f"))),s.a.createElement(Ae.b,{to:"auth"},"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"))))},Te=Object(Ee.a)({mapPropsToValues:function(){return{email:"",name:"",password:"",confirm:""}},validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"):a.email="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",e.name||(a.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),e.password||(a.password="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),e.confirm?e.password!==e.confirm&&(a.confirm="\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"):a.confirm="\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",a},handleSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),t(!1)}),1e3)},displayName:"RegistationForm"})(Oe);var ze=function(e){e.values;var a=e.touched,t=e.errors,n=(e.isSubmitting,e.handleChange),r=e.handleBlur,l=e.handleSubmit;return e.handleReset,e.dirty,s.a.createElement(s.a.Fragment,null,s.a.createElement(Re,{title:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442",descr:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),s.a.createElement(we,null,s.a.createElement(fe.a,{initialValues:{remember:!0},onFinish:function(e){l()}},s.a.createElement(fe.a.Item,{hasFeedback:!0,validateStatus:De("name",t,a),help:t.name},s.a.createElement(H.a,{id:"name",placeholder:"Username",size:"large",prefix:s.a.createElement(L.a,null),onChange:n,onBlur:r})),s.a.createElement(fe.a.Item,{hasFeedback:!0,validateStatus:De("password",t,a),help:a.password&&t.password},s.a.createElement(H.a.Password,{size:"large",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:n,onBlur:r,prefix:s.a.createElement(Ne.a,null)})),s.a.createElement(fe.a.Item,null,s.a.createElement(ve.a,{style:{width:"100%",height:"56px",fontSize:"16px",fontWeight:500},type:"primary",htmlType:"submit"},"\u0412\u041e\u0419\u0422\u0418 \u0412 \u0410\u041a\u041a\u0410\u0423\u041d\u0422"))),s.a.createElement(Ae.b,{to:"registration"}," \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f ")))},He=Object(Ee.a)({mapPropsToValues:function(){return{name:"",password:""}},validate:function(e){var a={};return e.name||(a.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),e.password||(a.password="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),a},handleSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),t(!1)}),1e3)},displayName:"AuthForm"})(ze),qe=function(){return s.a.createElement("div",{className:m.a.app},s.a.createElement(i.d,null,s.a.createElement(i.b,{exact:!0,path:"/",render:function(){return s.a.createElement(i.a,{to:"auth"})}}),s.a.createElement(i.b,{path:"/auth",render:function(){return s.a.createElement("div",{className:m.a.form__contaier},"  ",s.a.createElement(He,null))}}),s.a.createElement(i.b,{path:"/registration",render:function(){return s.a.createElement("div",{className:m.a.form__contaier}," ",s.a.createElement(Te,null))}}),s.a.createElement(i.b,{path:"/im",render:function(){return s.a.createElement("div",{className:m.a.container},s.a.createElement(he,null)," ")}}),s.a.createElement(i.b,{path:"/*",render:function(){return s.a.createElement(i.a,{to:"/im"})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(Ae.a,null,s.a.createElement(s.a.StrictMode,null,s.a.createElement(qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,a,t){e.exports={header:"ChatHeader_header__22HqZ",header__btn:"ChatHeader_header__btn__1Zvdm",chat__wrapper:"ChatHeader_chat__wrapper__1s_jX",chat__name:"ChatHeader_chat__name__2sIdy",descr:"ChatHeader_descr__1ey3l",circle:"ChatHeader_circle__1lwN3",active:"ChatHeader_active__3ONMK"}},62:function(e,a,t){e.exports={app:"App_app__2TMyE",form__contaier:"App_form__contaier__2d1dC",container:"App_container__3pKKd"}},88:function(e,a,t){e.exports={confirm__mail:"ConfirmEmail_confirm__mail__tHlVE"}},9:function(e,a,t){e.exports={Messages:"Messages_Messages__HFqbl",message_audio:"Messages_message_audio__1Hjry",buble__content:"Messages_buble__content__3dj8F",message__attachments:"Messages_message__attachments__343U-",message__attachment:"Messages_message__attachment____GJ0",message__attachment_one:"Messages_message__attachment_one__2ZKbq",me:"Messages_me__sP6nY",avatar:"Messages_avatar__23Tu1",date:"Messages_date__2KUxt",buble:"Messages_buble__21RUX",white:"Messages_white__3skbR",blue:"Messages_blue__3w6NG",typing__indicator:"Messages_typing__indicator__3dpCb",bulge:"Messages_bulge__Pu-l2",blink:"Messages_blink__2cG0n",audio__wrapper:"Messages_audio__wrapper__2xmJ1",audio__btn:"Messages_audio__btn__3N8wG",play:"Messages_play__kp_dq"}}},[[193,1,2]]]);
//# sourceMappingURL=main.aef83143.chunk.js.map