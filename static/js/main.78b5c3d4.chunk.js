(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{105:function(e,a,t){e.exports={content:"ChatContent_content__3R7Kq"}},106:function(e,a,t){e.exports={aside:"ChatAside_aside__15mcF",aside__input:"ChatAside_aside__input__2M2J_"}},108:function(e,a,t){e.exports={title:"FormTitle_title__1-UYM",descr:"FormTitle_descr__1kdJG"}},138:function(e,a,t){e.exports={container:"Chat_container__1ti-k"}},139:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAFCAYAAACqwacNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADSSURBVHgBtVC7DkRAFB2iEIXcQqFQKohm+AN/sI1K40v8hnYbXyBRaOlNVAqJlkTiRqXcmemwW+6t7vPcc44yzzNM00Qty8IwDBn5En3fw7ZtVNM0Fscx/tihy7KA53lMq6oq67oOdF0nZVmSNE0vwPu+Q57n2bquYJom5cdv/vwC3DQNLYrihYjE932qDsMAYnCeJ2nbFu4MxnGkAlDkx3FIxveduq5BAIoQytUgCGTFWZAoih7SbNtmjuPIPgAgt+lhUZIkaBiGzF3XReUfnn4ArwlwYW4j7R8AAAAASUVORK5CYII="},14:function(e,a,t){e.exports={Messages:"Messages_Messages__HFqbl",message__checked:"Messages_message__checked__1rEJZ",message__attachments:"Messages_message__attachments__343U-",message__attachment:"Messages_message__attachment____GJ0",me:"Messages_me__sP6nY",avatar:"Messages_avatar__23Tu1",buble:"Messages_buble__21RUX",buble__content:"Messages_buble__content__3dj8F",white:"Messages_white__3skbR",blue:"Messages_blue__3w6NG",date:"Messages_date__2KUxt"}},140:function(e,a,t){e.exports=t.p+"static/media/test.7c6628a2.png"},141:function(e,a,t){e.exports=t.p+"static/media/checked.c1f419d6.svg"},142:function(e,a,t){e.exports=t.p+"static/media/noChecked.1456f013.svg"},143:function(e,a,t){e.exports={messages__input:"MessagesInput_messages__input__19v58"}},153:function(e,a,t){e.exports={header__side:"AsideHeader_header__side__2bJ5N"}},156:function(e,a,t){e.exports={modal:"Modal_modal__2Mxca",title:"Modal_title__CdhBi",descr:"Modal_descr__frzXR"}},157:function(e,a,t){e.exports={register__btn:"RegistrationForm_register__btn__y6-gE"}},166:function(e,a,t){e.exports=t(303)},171:function(e,a,t){},303:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(40),l=t.n(s),c=(t(171),t(32)),i=t(55),m=t.n(i),o=t(138),u=t.n(o),d=t(34),_=t.n(d),h=t(139),p=t.n(h);var E=function(){return r.a.createElement("header",{className:_.a.header},r.a.createElement("div",{className:_.a.chat__wrapper},r.a.createElement("div",{className:_.a.chat__name},"\u0413\u0430\u0439 \u042e\u043b\u0438\u0439 \u0426\u0435\u0437\u0430\u0440\u044c"),r.a.createElement("div",{className:_.a.descr},r.a.createElement("div",{className:_.a.circle+" "+" ".concat("")})," ","\u043d\u0435 \u0432 \u0441\u0435\u0442\u0438")),r.a.createElement("span",{className:_.a.header__btn},r.a.createElement("img",{src:p.a})))},g=t(164),f=t(48),v=t(14),b=t.n(v),A=t(101),w=t(102),x=t(140),N=t.n(x),M=t(141),C=t.n(M),F=t(142),S=t.n(F);var y=function(e){var a=e.user,t=e.text,n=e.date,s=e.isMe,l=e.isReaded,c=e.attachments;return r.a.createElement("div",{className:b.a.Messages+" "+"".concat(s&&b.a.me)},r.a.createElement("div",{className:b.a.avatar},r.a.createElement("img",{src:a.avatar||N.a,alt:"avatar "+a.fullName})),r.a.createElement("div",{className:b.a.buble},r.a.createElement("div",{className:b.a.buble__content+" "+"".concat(s?b.a.white:b.a.blue,"\n                    ")},t),r.a.createElement("div",{className:b.a.message__attachments},c&&c.map((function(e){return r.a.createElement("img",{src:e.url,className:b.a.message__attachment,alt:e.filename})}))),r.a.createElement("div",{className:b.a.date},Object(A.a)(n,{addSuffix:!0,locale:w.a}))),s?l?r.a.createElement("img",{className:b.a.message__checked,src:C.a}):r.a.createElement("img",{className:b.a.message__checked,src:S.a}):null)},k=t(306),R=t(315),B=t(314),I=t(313),j=t(312),O=t(143),z=t.n(O);var U=function(e){var a=e.sendMessages,t=Object(n.useState)(null),s=Object(f.a)(t,2),l=s[0],c=s[1];return r.a.createElement("div",{className:z.a.messages__input},r.a.createElement(k.a,{prefix:r.a.createElement(R.a,null),suffix:[r.a.createElement(B.a,null),r.a.createElement(I.a,null),r.a.createElement(j.a,{onClick:function(){a(l),c("")}})],style:{borderRadius:"4px"},size:"large",value:l,onChange:function(e){return function(e){c(e.target.value)}(e)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u2026"}))},q=t(105),H=t.n(q);var J=function(){var e=[{user:{lastName:"test",avatar:null},text:"\u0421\u0430\u043b\u0430\u043c, \u0411\u0440\u0443\u0442! \u0427\u0451, \u043a\u0430\u043a, \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0438\u043b \u0444\u043b\u043e\u0442 \u0433\u0430\u043b\u043b\u043e\u0432? \ud83d\udd90\ud83c\udffb",date:new Date,isMe:!0,isReaded:!0,attachments:[{filename:"image.jpg",url:"https://source.unsplash.com/50x50/?nature,water"},{filename:"image.jpg",url:"https://source.unsplash.com/50x50/?nature,water"},{filename:"image.jpg",url:"https://source.unsplash.com/50x50/?nature,water"}]},{user:{lastName:"test",avatar:null},text:"\u0421\u0430\u043b\u0430\u043c, \u0411\u0440\u0443\u0442! \u0427\u0451, \u043a\u0430\u043a, \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0438\u043b \u0444\u043b\u043e\u0442 \u0433\u0430\u043b\u043b\u043e\u0432? \ud83d\udd90\ud83c\udffb",date:new Date,isMe:!1}],a=Object(n.useState)(e),t=Object(f.a)(a,2),s=t[0],l=t[1];return r.a.createElement("div",{className:H.a.content},r.a.createElement("div",{className:H.a.messages},s.map((function(e){return r.a.createElement(y,{text:e.text,user:e.user,date:e.date,isMe:e.isMe,isReaded:e.isReaded,attachments:e.attachments})}))),r.a.createElement(U,{sendMessages:function(e){var a={user:{lastName:"test",avatar:null},text:e,date:new Date,isMe:!0};l([].concat(Object(g.a)(s),[a]))}}))},Y=t(106),T=t.n(Y),K=t(311),X=t(310),Z=t(153),D=t.n(Z);var Q=function(){return r.a.createElement("div",{className:D.a.header__side},r.a.createElement(K.a,{style:{fontSize:"18px",marginRight:"18px"}}),r.a.createElement("span",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432"),r.a.createElement(X.a,{style:{fontSize:"18px",position:"absolute",right:"18px"}}))},V=t(309);var P=function(){return r.a.createElement(k.a,{placeholder:"\u041f\u043e\u0438\u0441\u043a \u0441\u0440\u0435\u0434\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432",style:{background:"#F7F8F9",borderRadius:"2px"},prefix:r.a.createElement(V.a,null)})};var G=function(){return r.a.createElement("aside",{className:T.a.aside},r.a.createElement(Q,null),r.a.createElement("div",{className:T.a.aside__input},r.a.createElement(P,null)))};var W=function(){return r.a.createElement("div",{className:u.a.container},r.a.createElement(E,null),r.a.createElement(G,null),r.a.createElement(J,null))},L=t(77),$=t(304),ee=t(111),ae=t(307),te=t(316),ne=t(39),re=t(156),se=t.n(re),le=function(e){var a=e.children;return r.a.createElement("div",{className:se.a.modal},a)},ce=t(108),ie=t.n(ce),me=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:ie.a.title},e.title),r.a.createElement("h2",{className:ie.a.descr},e.descr))},oe=t(308),ue=t(79),de=t.n(ue),_e=function(){return r.a.createElement("div",{className:de.a.confirm__mail},r.a.createElement(oe.a,{style:{fontSize:"50px",marginBottom:"15px"}}),r.a.createElement("h3",{style:de.a.title},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),r.a.createElement("p",{style:de.a.descr},"\u041d\u0430 \u0412\u0430\u0448\u0443 \u043f\u043e\u0447\u0442\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0438\u0441\u044c\u043c\u043e \u0441 \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u043d\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430."))},he=t(157),pe=t.n(he);var Ee=function(e){e.values;var a=e.touched,t=e.errors,s=(e.isSubmitting,e.handleChange),l=e.handleBlur,c=e.handleSubmit,i=(e.handleReset,e.dirty,Object(n.useState)(!1)),m=Object(f.a)(i,2),o=m[0];return m[1],r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",descr:" \u0414\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 \u0447\u0430\u0442, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),r.a.createElement(le,null,o?r.a.createElement(_e,null):r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{name:"nest-messages",onFinish:function(e){c(e)}},r.a.createElement($.a.Item,{hasFeedback:!0,validateStatus:a.email?a.email&&t.email?"error":"success":"",help:a.email&&t.email},r.a.createElement(k.a,{id:"email",placeholder:"E-Mail",size:"large",prefix:r.a.createElement(ae.a,null),onChange:s,onBlur:l})),r.a.createElement($.a.Item,{hasFeedback:!0,validateStatus:a.name?a.name&&t.name?"error":"success":"",help:a.name&&t.name},r.a.createElement(k.a,{id:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",size:"large",onChange:s,onBlur:l,prefix:r.a.createElement(K.a,null)})),r.a.createElement($.a.Item,{hasFeedback:!0,validateStatus:a.password?a.password&&t.password?"error":"success":"",help:a.password&&t.password},r.a.createElement(k.a.Password,{size:"large",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:s,onBlur:l,prefix:r.a.createElement(te.a,null)})),r.a.createElement($.a.Item,{hasFeedback:!0,validateStatus:a.password?a.password&&t.confirm?"error":"success":"",help:a.password&&t.confirm},r.a.createElement(k.a.Password,{size:"large",id:"confirm",placeholder:"\u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:s,onBlur:l,prefix:r.a.createElement(te.a,null)})),r.a.createElement($.a.Item,null,r.a.createElement(ee.a,{type:"primary",htmlType:"submit",className:pe.a.register__btn},"\u0417\u0410\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0418\u0420\u041e\u0412\u0410\u0422\u042c\u0421\u042f"))),r.a.createElement(ne.b,{to:"auth"},"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"))))},ge=Object(L.a)({validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"):a.email="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",e.name||(a.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),e.password||(a.password="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),e.confirm?e.password!==e.confirm&&(a.confirm="\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"):a.confirm="\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",a},handleSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),t(!1)}),1e3)},displayName:"RegistationForm"})(Ee);var fe=function(e){e.values;var a=e.touched,t=e.errors,n=(e.isSubmitting,e.handleChange),s=e.handleBlur,l=e.handleSubmit;return e.handleReset,e.dirty,r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{title:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442",descr:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),r.a.createElement(le,null,r.a.createElement($.a,{initialValues:{remember:!0},onFinish:function(e){l()}},r.a.createElement($.a.Item,{hasFeedback:!0,validateStatus:a.name?a.name&&t.name?"error":"success":"",help:t.name},r.a.createElement(k.a,{id:"name",placeholder:"Username",size:"large",prefix:r.a.createElement(K.a,null),onChange:n,onBlur:s})),r.a.createElement($.a.Item,{hasFeedback:!0,validateStatus:a.password?a.password&&t.password?"error":"success":"",help:a.password&&t.password},r.a.createElement(k.a.Password,{size:"large",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:n,onBlur:s,prefix:r.a.createElement(te.a,null)})),r.a.createElement($.a.Item,null,r.a.createElement(ee.a,{style:{width:"100%",height:"56px",fontSize:"16px",fontWeight:500},type:"primary",htmlType:"submit"},"\u0412\u041e\u0419\u0422\u0418 \u0412 \u0410\u041a\u041a\u0410\u0423\u041d\u0422"))),r.a.createElement(ne.b,{to:"registration"}," \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f ")))},ve=Object(L.a)({validate:function(e){var a={};return e.name||(a.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),e.password||(a.password="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),a},handleSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),t(!1)}),1e3)},displayName:"AuthForm"})(fe),be=function(){return r.a.createElement("div",{className:m.a.app},r.a.createElement(c.b,{exact:!0,path:"/",render:function(){return r.a.createElement(c.a,{to:"auth"})}}),r.a.createElement(c.b,{path:"/auth",render:function(){return r.a.createElement("div",{className:m.a.form__contaier}," ",r.a.createElement(ve,null))}}),r.a.createElement(c.b,{path:"/registration",render:function(){return r.a.createElement("div",{className:m.a.form__contaier},r.a.createElement(ge,null))}}),r.a.createElement(c.b,{path:"/im",render:function(){return r.a.createElement("div",{className:m.a.container},r.a.createElement(W,null))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ne.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,a,t){e.exports={header:"ChatHeader_header__22HqZ",header__btn:"ChatHeader_header__btn__1Zvdm",chat__wrapper:"ChatHeader_chat__wrapper__1s_jX",chat__name:"ChatHeader_chat__name__2sIdy",descr:"ChatHeader_descr__1ey3l",circle:"ChatHeader_circle__1lwN3",active:"ChatHeader_active__3ONMK"}},55:function(e,a,t){e.exports={app:"App_app__2TMyE",form__contaier:"App_form__contaier__2d1dC",container:"App_container__3pKKd"}},79:function(e,a,t){e.exports={confirm__mail:"ConfirmEmail_confirm__mail__tHlVE"}}},[[166,1,2]]]);
//# sourceMappingURL=main.78b5c3d4.chunk.js.map