(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),o=n.n(i),c=n(12),r=n.n(c),s=(n(111),n(14)),l=n(37),u=n(94),d=n(180),j=o.a.createContext(void 0),b=Object(s.g)((function(e){var t=e.children,n=e.history,i=n.location.pathname,o=Number(i.slice(i.indexOf("/form")+6))||0;return Object(a.jsx)(j.Provider,{value:{goNextPage:function(){n.push("/form/".concat(o+1))},goBackPage:function(){n.push("/form/".concat(o-1))},pageNumber:o},children:t})})),h=n(8),m=n(13),p=o.a.createContext(void 0),g=function(e){var t=e.children,n=Object(i.useState)({isActive:!1,titleText:"Welcome!",buttonText:"Begin",description:"This is a tool to generate a personal statement."}),o=Object(m.a)(n,2),c=o[0],r=o[1];return Object(a.jsx)(p.Provider,{value:{affirmationData:c,setAffirmationData:r,updateAffirmationData:function(e){r(Object(h.a)(Object(h.a)({},c),e))}},children:t})},x=n(166),O=n(187),f=n.p+"static/media/affirmation-img.21752d97.svg",v=n.p+"static/media/iconBlack.bc853aaf.svg",y=n(169),N=n.p+"static/media/arrowRight.e592bd13.svg",C=Object(x.a)((function(){return Object(O.a)({root:{padding:"12px 16px",display:"flex",border:"none",borderRadius:"24px",fontFamily:"Roboto",fontStyle:"normal",fontWeight:"normal",fontSize:"14px",lineHeight:"16px",letterSpacing:"0.0125em",textTransform:"uppercase",marginBottom:"1rem",cursor:"pointer",boxShadow:function(e){switch(e.theme){case"transparent":return"none";default:return"4px 4px 16px rgba(61, 0, 102, 0.25)"}},color:function(e){switch(e.theme){case"transparent":return"black";default:return"#FFFFFF"}},background:function(e){switch(e.theme){case"dark":return"#25003F";case"transparent":return"#FFFFFF";default:return"#9903FF"}},"&:hover":{background:function(e){switch(e.theme){case"dark":return"#330652";case"transparent":return"#FFFFFF";default:return"#a224f7"}}},"& img":{marginLeft:"10px",marginRight:"0px"}}})})),k=function(e){var t=e.theme,n=e.hasArrow,i=e.buttonText,o=e.onClick,c=C({theme:t,hasArrow:n});return Object(a.jsxs)(y.a,{type:"button",className:c.root,onClick:o,children:[i,n&&Object(a.jsx)("img",{src:N,alt:"arrow right"})]})},w=Object(x.a)((function(){return Object(O.a)({root:{position:"fixed",background:"#f7ebff",left:"0",bottom:"0",top:"0",width:"100%",color:"#3d0066",padding:"18px",zIndex:1,display:function(e){return e.isActive?"block":"none"}},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",maxWidth:"375px",margin:"4rem auto 0",position:"relative"},cropIllustration:{overflow:"hidden",position:"absolute",width:"375px"},illustration:{width:"600px",position:"relative",left:"-78px",top:"-3px"},messageContainer:{display:"flex",flexDirection:"column",background:"#f7ebff",height:"350px",position:"relative",top:"290px",paddingTop:"20px",borderTopRightRadius:"64px",minWidth:"375px",padding:"24px","&:before":{content:'""',position:"absolute",top:"-40px",left:"-4px",height:"40px",width:"40px",borderBottomLeftRadius:"200px",boxShadow:"0 20px 0 0 #f7ebff"}}})})),T=function(e){var t=e.isActive,n=e.titleText,i=e.buttonText,o=void 0===i?"Next":i,c=e.description,r=e.onChangeAffirmation,s=w({isActive:t});return Object(a.jsxs)("div",{className:s.root,children:[Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)("img",{src:v,alt:"Expunge Assist Logo"})}),Object(a.jsxs)("div",{className:s.container,children:[Object(a.jsx)("div",{className:s.cropIllustration,children:Object(a.jsx)("img",{src:f,alt:"affirmation illustration",className:"".concat(s.illustration," adjacent-mar-top")})}),Object(a.jsxs)("div",{className:s.messageContainer,children:[Object(a.jsx)("div",{className:"page-title adjacent-mar-top",children:n}),Object(a.jsx)("div",{style:{marginTop:"16px"},children:c}),Object(a.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"39px"},className:"align-right-sm",children:Object(a.jsx)(k,{onClick:function(){return r({isActive:!1})},buttonText:o,hasArrow:!0})})]})]})]})},S=n(19),A=n.p+"static/media/iconWhite.efc331e7.svg",I=Object(x.a)((function(e){return Object(O.a)({root:Object(S.a)({background:function(e){return e.background},color:function(e){return e.color},display:"flex","& .logo-title":Object(S.a)({display:"flex",flexDirection:"column",marginLeft:"20px",textTransform:"uppercase",fontSize:"12px"},e.breakpoints.down(e.breakpoints.values.md),{display:"none"})},e.breakpoints.down(e.breakpoints.values.sm),{display:"none"})})})),P=function(e){var t,n,i;0===e.pageNumber?(n="#9903ff",i="white",t=A):(n="white",i="black",t=v);var o=I({background:n,color:i});return Object(a.jsxs)("div",{className:"".concat(o.root," app-header"),children:[Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)("img",{src:t,alt:""})}),Object(a.jsxs)(l.b,{to:"/",style:{textDecoration:"none",color:i},className:"logo-title",children:[Object(a.jsx)("p",{children:"The Record"}),Object(a.jsx)("p",{children:"Clearance Project"})]})]})},R=Object(x.a)((function(e){return Object(O.a)({buttonContainer:Object(S.a)({display:"flex",justifyContent:"flex-end"},e.breakpoints.up(e.breakpoints.values.md),{justifyContent:"flex-start"}),contentContainer:Object(S.a)({display:"flex",flex:"1 0 auto",flexDirection:"column",maxWidth:"850px",marginLeft:"auto",marginRight:"auto",marginTop:"49px"},e.breakpoints.down("xs"),{marginLeft:"initial",marginRight:"initial"})})})),F=n(189),W=Object(x.a)((function(){return Object(O.a)({content:{margin:"23px 0 50px"}})})),D=function(e){var t=e.goNextPage,n=W(),i=R({}),o=Object(F.a)().t;return Object(a.jsxs)("div",{className:i.contentContainer,children:[Object(a.jsx)("div",{className:"adjacent-mar-top",style:{fontWeight:500,fontSize:"20px"},children:o("disclaimer.header")}),Object(a.jsx)("div",{className:n.content,style:{whiteSpace:"pre-line"},children:o("disclaimer.text")}),Object(a.jsx)("div",{className:"".concat(i.buttonContainer," adjacent-mar-top"),children:Object(a.jsx)(k,{onClick:function(){return t()},buttonText:"I understand",hasArrow:!0})})]})},E=n(181),L=n(173),H=n(61),B=n.n(H),V=n(171),U=Object(x.a)((function(e){return Object(O.a)({root:{width:"80%",marginBottom:"1rem","& > *":{minWidth:"10rem",height:"2.5rem"},"& .MuiTextField-root":{margin:e.spacing(1)},"& .MuiOutlinedInput-root":{width:"70%","& fieldset":{borderRadius:"15px"}},"& .MuiOutlinedInput-multiline":{width:"100%",height:"100%"}},input:{fontSize:"1rem"},icon:{color:V.a.A400}})})),G=function(e){var t=e.handleChange,n=e.inputName,i=e.placeholder,o=e.multi,c=e.isValid,r=e.defaultValue,s=U();return Object(a.jsx)(E.a,{className:s.root,onChange:t,name:n,placeholder:i,id:"outlined-textarea",multiline:o,variant:"outlined",defaultValue:r,InputProps:{classes:{input:s.input},endAdornment:c?Object(a.jsx)(L.a,{position:"end",children:Object(a.jsx)(B.a,{className:s.icon})}):null}})},M=n(186),K=Object(x.a)((function(){return Object(O.a)({root:{width:"30%",minWidth:"10rem",height:"2.5rem",borderRadius:"15px",marginBottom:"1rem"},icon:{color:V.a.A400}})})),z=function(e){var t=e.handleChange,n=e.inputName,o=e.placeholder,c=e.type,r=e.defaultValue,s=Object(i.useState)(!1),l=Object(m.a)(s,2),u=l[0],d=l[1],j=K();return Object(a.jsx)(M.a,{type:c,className:j.root,onChange:function(e){!function(e){d(e.length>0)}(e.currentTarget.value),t(e)},name:n,placeholder:o,defaultValue:r,endAdornment:Object(a.jsxs)(L.a,{position:"end",children:["years old",u?Object(a.jsx)(B.a,{className:j.icon}):null]})})},Y=n(88),J=n.n(Y),X=Object(x.a)((function(){return Object(O.a)({root:{margin:"25px 15px",padding:"15px",boxShadow:"4px 4px 16px rgba(61, 0, 102, 0.25)",borderRadius:"20px","& h2":{color:"#9903FF",marginTop:15},"& p":{marginBottom:15}},flex:{display:"flex",justifyContent:"space-between",alignItems:"center",marginRight:5}})})),Q=function(e){var t=e.onAdjustClick,n=e.content,i=e.nameOfStep,o=X();return Object(a.jsxs)("div",{className:o.root,children:[Object(a.jsxs)("div",{className:o.flex,children:[Object(a.jsxs)("h2",{children:["Previewing ",i]}),Object(a.jsx)(J.a,{style:{color:"#9903FF"},onClick:t})]}),Object(a.jsx)("p",{children:n})]})},q=n(182),$=function(e){var t=e.label,n=e.activeRadio,i=e.handleChange,o=e.inputName;return Object(a.jsxs)("div",{children:[Object(a.jsx)(q.a,{value:t,color:"secondary",onChange:function(e){i(e)},checked:n===t,name:o}),Object(a.jsx)("span",{children:t})]})},Z=function(e){var t=e.labels,n=e.inputName,i=e.handleChange,o=e.activeRadio;return Object(a.jsx)("div",{className:"radio",children:t.map((function(e){return Object(a.jsx)($,{label:e,activeRadio:o,handleChange:i,inputName:n},e)}))})},_=n(185),ee=n(177),te=n(175),ne=n(176),ae=n(174),ie=n(89),oe=n.n(ie),ce=n(129),re=Object(x.a)((function(){return Object(O.a)({infoButton:{color:"#301934"},textContent:{whiteSpace:"pre-line"},alertBox:{"& .MuiDialog-paperWidthSm":{backgroundColor:"#f7ebff"}}})})),se=function(e){var t=e.title,n=e.info,i=o.a.useState(!1),c=Object(m.a)(i,2),r=c[0],s=c[1],l=re(),u=function(){s(!1)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(ce.a,{"aria-label":"info",className:l.infoButton,onClick:function(){s(!0)},children:Object(a.jsx)(oe.a,{fontSize:"large"})}),Object(a.jsxs)(_.a,{open:r,onClose:u,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",className:l.alertBox,children:[Object(a.jsx)(ae.a,{id:"alert-dialog-title",children:t}),Object(a.jsx)(te.a,{children:Object(a.jsx)(ne.a,{id:"alert-dialog-description",className:l.textContent,children:n})}),Object(a.jsx)(ee.a,{children:Object(a.jsx)(k,{onClick:function(){return u()},buttonText:"OK",hasArrow:!0})})]})]})},le=function(e){var t,n=e.goNextPage,o=e.goBackPage,c=Object(i.useState)({fullName:"",age:"",isVeteran:""}),r=Object(m.a)(c,2),s=r[0],l=r[1],u=Object(i.useState)(!1),d=Object(m.a)(u,2),j=d[0],b=d[1],p=Object(i.useState)(!1),g=Object(m.a)(p,2),x=g[0],O=g[1],f=function(e){var t=e.currentTarget.name,n=e.currentTarget.value;"name"===t&&(l(Object(h.a)(Object(h.a)({},s),{},{fullName:n})),b(""!==n)),"age"===t&&l(Object(h.a)(Object(h.a)({},s),{},{age:n})),"isVeteran"===t&&l(Object(h.a)(Object(h.a)({},s),{},{isVeteran:n}))};t="Yes"===s.isVeteran?"I am also a proud veteran of the United States Armed Forces.":"";var v="Thank you so much for taking the time to read my personal statement. My name is ".concat(s.fullName,", and I am ").concat(s.age," years old. ").concat(t);return x?Object(a.jsxs)("div",{className:"Step1-Preview",children:[Object(a.jsx)("div",{children:Object(a.jsx)(Q,{content:v,onAdjustClick:function(){return O(!1)},nameOfStep:"Introduction"})}),Object(a.jsx)("div",{children:Object(a.jsx)(k,{onClick:function(){return n()},buttonText:"LOOKS GOOD",hasArrow:!0})})]}):Object(a.jsxs)("div",{className:"Step1",children:[Object(a.jsxs)("form",{children:[Object(a.jsx)("p",{children:"What is your name?"}),Object(a.jsx)(G,{inputName:"name",placeholder:"Firstname Lastname",handleChange:f,multi:!1,isValid:j,defaultValue:s.fullName}),Object(a.jsx)("p",{className:"greyedOut",children:"How old are you?"}),j&&Object(a.jsx)(z,{type:"number",inputName:"age",placeholder:"25",handleChange:f,defaultValue:s.age}),Object(a.jsx)("p",{className:"greyedOut",children:"Are you a veteran of the United States of America?"}),Number(s.age)>0&&Object(a.jsx)(Z,{labels:["Yes","No"],inputName:"isVeteran",handleChange:f,activeRadio:s.isVeteran})]}),Object(a.jsx)(k,{onClick:function(){return o()},buttonText:"BACK",theme:"white"}),""===s.isVeteran?Object(a.jsx)("div",{className:"div-popUp",children:Object(a.jsx)(se,{title:"Some advice for your personal statement",info:"1. Remember that you are writing for a judge, so refrain from using informal language such as abbreviations or slang\n2. Write in complete sentences when given the option\n3. Use the first person when answering questions. This means telling the story from your point of view.\n4. Please try to limit your responses. We recommend each paragraph being 3-5 sentences."})}):Object(a.jsx)("div",{children:Object(a.jsx)(k,{onClick:function(){return O(!0)},buttonText:"NEXT",hasArrow:!0})})]})},ue=function(e){var t=e.inputs,n=e.setInputs,i=e.goBackPage,o=e.goNextPage,c=function(e){var a=e.target.name,i=e.target.value;"communityServiceOrgName"===a?n(Object(h.a)(Object(h.a)({},t),{},{communityServiceOrgName:i})):"communityServiceDescription"===a?n(Object(h.a)(Object(h.a)({},t),{},{communityServiceDescription:i})):"jobName"===a?n(Object(h.a)(Object(h.a)({},t),{},{jobName:i})):"jobTitle"===a?n(Object(h.a)(Object(h.a)({},t),{},{jobTitle:i})):"jobDescription"===a?n(Object(h.a)(Object(h.a)({},t),{},{jobDescription:i})):"difficultyFindingWorkDescription"===a&&n(Object(h.a)(Object(h.a)({},t),{},{difficultyFindingWorkDescription:i}))};return Object(a.jsxs)("div",{className:"Step3",children:[Object(a.jsx)("p",{children:"Please check all that apply: I am involved with..."}),Object(a.jsx)("p",{children:"What is the name of the community service organization that you are involved with?"}),Object(a.jsx)(G,{inputName:"communityServiceOrgName",placeholder:"Hack For LA",handleChange:c,multi:!1,isValid:!0,defaultValue:t.communityServiceOrgName}),Object(a.jsx)("p",{children:"Please describe what you do at this community service organization (2 sentences maximum)"}),Object(a.jsx)(G,{inputName:"communityServiceDescription",handleChange:c,placeholder:"Currently, I...",multi:!0,isValid:!0,defaultValue:t.communityServiceDescription}),Object(a.jsx)("p",{children:"What is the name of the company you work for?"}),Object(a.jsx)(G,{inputName:"jobName",placeholder:"X Company",handleChange:c,multi:!1,isValid:!0,defaultValue:t.jobName}),Object(a.jsx)("p",{children:"What is your current job title?"}),Object(a.jsx)(G,{inputName:"jobTitle",placeholder:"Barista",handleChange:c,multi:!1,isValid:!0,defaultValue:t.jobTitle}),Object(a.jsx)("p",{children:"Please describe what you do at your current job. (2 sentences maximum)"}),Object(a.jsx)(G,{inputName:"jobDescription",handleChange:c,placeholder:"At my current job, I ...",multi:!0,isValid:!0,defaultValue:t.jobDescription}),Object(a.jsx)("p",{children:"Please describe why you are having trouble finding work. (2 sentences maximum)"}),Object(a.jsx)(G,{inputName:"difficultyFindingWorkDescription",handleChange:c,placeholder:"I'm having difficulty finding work because...",multi:!0,isValid:!0,defaultValue:t.difficultyFindingWorkDescription}),Object(a.jsx)("p",{children:"Do you believe that having your record cleared would help you find a job and be more involved in your community?"}),Object(a.jsx)(k,{onClick:function(){return i()},buttonText:"BACK"}),Object(a.jsx)(k,{onClick:function(){return o()},buttonText:"LOOKS GOOD"})]})},de=function(e){var t=e.inputs,n=e.setInputs,o=e.goBackPage,c=e.goNextPage,r=Object(i.useState)(t.goals.split(".").length>=3),s=Object(m.a)(r,2),l=s[0],u=s[1],d=Object(i.useState)(t.goalsHow.split(".").length>=3),j=Object(m.a)(d,2),b=j[0],p=j[1],g=Object(i.useState)(!1),x=Object(m.a)(g,2),O=x[0],f=x[1],v=function(e){var a=e.currentTarget.name,i=e.currentTarget.value;"goals"===a?(n(Object(h.a)(Object(h.a)({},t),{},{goals:i})),u(""!==i)):"goalsHow"===a&&(n(Object(h.a)(Object(h.a)({},t),{},{goalsHow:i})),p(""!==i))};return O?Object(a.jsxs)("div",{children:[Object(a.jsx)(Q,{content:"".concat(t.goals,". To work towards my goals; ").concat(t.goalsHow,". Having my record cleared would help me achieve these goals for my future."),onAdjustClick:function(){return null},nameOfStep:"Future Goals"}),Object(a.jsx)(k,{onClick:function(){return f(!1)},buttonText:"BACK"}),Object(a.jsx)(k,{onClick:function(){return c()},buttonText:"LOOKS GOOD"})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Please describe what goals you have to improve your life even further, like attending school, getting specialized training, etc. (2-3 sentences suggested)"}),Object(a.jsx)(G,{inputName:"goals",handleChange:v,placeholder:"I have plans of...",multi:!0,isValid:l,defaultValue:t.goals}),l?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"How are you working towards acheiving these goals? What are the concrete steps you are taking? (2-3 sentences suggested)"}),Object(a.jsx)(G,{inputName:"goalsHow",handleChange:v,placeholder:"I have been...",multi:!0,isValid:b,defaultValue:t.goalsHow})]}):Object(a.jsx)("p",{className:"greyedOut",children:"How are you working towards acheiving these goals? What are the concrete steps you are taking? (2-3 sentences suggested)"}),Object(a.jsx)(k,{onClick:function(){return o()},buttonText:"BACK"}),b?Object(a.jsx)(k,{onClick:function(){return f(!0)},buttonText:"NEXT"}):null]})},je=Object(x.a)((function(){return Object(O.a)({root:{display:"flex",justifyContent:"space-between",alignItems:"center"},flexEnd:{display:"flex",justifyContent:"flex-end"}})})),be=function(e){var t=e.isFormComplete,n=e.isPreviewing,i=e.goBackPage,o=e.goNextPage,c=e.togglePreview,r=je();return n?Object(a.jsx)("div",{className:r.flexEnd,children:Object(a.jsx)(k,{onClick:function(){return o()},buttonText:"LOOKS GOOD",hasArrow:!0})}):Object(a.jsxs)("div",{className:r.root,children:[Object(a.jsx)(k,{onClick:function(){return i()},buttonText:"BACK",theme:"transparent"}),!t&&Object(a.jsx)(se,{title:"Some advice for your personal statement",info:"1. Remember that you are writing for a judge, so refrain from using informal language such as abbreviations or slang\n2. Write in complete sentences when given the option\n3. Use the first person when answering questions. This means telling the story from your point of view.\n4. Please try to limit your responses. We recommend each paragraph being 3-5 sentences."}),t&&c&&Object(a.jsx)(k,{onClick:function(){return c()},buttonText:"NEXT",hasArrow:!0})]})},he=function(e){var t=e.goBackPage,n=e.goNextPage,o=Object(i.useState)({clearRecordWhy:"",clearRecordHow:""}),c=Object(m.a)(o,2),r=c[0],s=c[1],l=Object(i.useState)(r.clearRecordWhy.split(".").length>1),u=Object(m.a)(l,2),d=u[0],j=u[1],b=Object(i.useState)(2===r.clearRecordHow.split(".").length),p=Object(m.a)(b,2),g=p[0],x=p[1],O=Object(i.useState)(!1),f=Object(m.a)(O,2),v=f[0],y=f[1],N=function(e){var t=e.currentTarget.name,n=e.currentTarget.value;"clearRecordWhy"===t?(s(Object(h.a)(Object(h.a)({},r),{},{clearRecordWhy:n})),j(""!==n)):"clearRecordHow"===t&&(s(Object(h.a)(Object(h.a)({},r),{},{clearRecordHow:n})),x(""!==n))},C="".concat(r.clearRecordWhy," ").concat(r.clearRecordHow);return Object(a.jsxs)("div",{children:[v?Object(a.jsx)("div",{className:"Step5-Preview",children:Object(a.jsx)("div",{children:Object(a.jsx)(Q,{content:C,onAdjustClick:function(){return y(!1)},nameOfStep:"Why"})})}):Object(a.jsxs)("div",{className:"Step5",children:[Object(a.jsx)("p",{children:"Please finish this sentence: I want to clear my record because..."}),Object(a.jsx)(G,{inputName:"clearRecordWhy",placeholder:"I am...",handleChange:N,multi:!1,isValid:d,defaultValue:r.clearRecordWhy}),Object(a.jsx)("p",{className:"greyedOut",children:"How will clearing your record change your life or help you? (2 sentences maximum)"}),d&&Object(a.jsx)(G,{inputName:"clearRecordHow",handleChange:N,placeholder:"Clearing my record will...",multi:!0,isValid:g,defaultValue:r.clearRecordHow})]}),Object(a.jsx)(be,{isFormComplete:d&&g,isPreviewing:v,goBackPage:t,goNextPage:n,togglePreview:function(){return y(!v)}})]})},me=n(90),pe=function(e){var t=e.goBackPage,n="October 26th, 2020\n\nTo Whom It May Concern,\n\nThank you so much for taking the time to read my personal statement. My name is Jenna Smith, and I am 27 years old.\n\nSince my conviction, I have been working at United Federal Credit Union as a Security Guard. At this job, I have had the opportunity to assist in day to day operations and ensure the safety of valued customers. This is important to me because I like making people feel safe.\n\nI have also been really involved in community service. In particular, I've been working with Pauly's Project. I lead the outreach team and distribute food to unhoused neighbors throughout the LA area. It's important to me because I wantt hese members of our community to feel valued and loved.\n\nI am working towards going back to school, so that I can be a social worker. To work towards my goals; I have been taking night classes at Rosedale Community Center, and I have been shadowing a social worker on Fridays. Having my record cleared would help me acheive these goals for my future.\n\nI want to clear my record because I am a different person from who I was when I was convicted. I want to make the world a better place. Right now having a criminal record is preventing me from being accepting to college, and it has hindered my career. Getting my record cleared will have a major impact on my life.\n\nSincerely,\n\nJenna Smith\n    ";return Object(a.jsxs)("div",{className:"Download",children:[Object(a.jsx)("p",{children:"Previewing Final Statement"}),Object(a.jsx)("button",{onClick:function(){var e=new me.a("p","mm","letter");e.setFontSize(12);var t=e.splitTextToSize(n,170);e.text(20,50,t),e.save("MyPersonalStatement.pdf")},children:"Save PDF"}),Object(a.jsx)("button",{onClick:function(){return t()},children:"BACK"})]})},ge="INVOLVEMENT.STEP.INITIAL",xe=n(5),Oe=n(178),fe=n(184),ve=Object(xe.a)({root:{color:V.a.A400,"&$checked":{color:V.a.A400}},checked:{}})((function(e){return Object(a.jsx)(fe.a,{classes:e.classes,checked:e.checked,onChange:e.onChange,name:e.name})})),ye=function(e){var t=e.label,n=e.checked,i=e.onChange;return Object(a.jsx)(Oe.a,{control:Object(a.jsx)(ve,{checked:n,onChange:i,name:"checked"}),label:t})},Ne=Object(x.a)((function(){return Object(O.a)({root:{paddingTop:24},flexColumn:{display:"flex",flexDirection:"column"}})})),Ce=function(e){var t=e.state,n=e.onChangeState,i=Ne();return Object(a.jsxs)("div",{className:i.root,children:[Object(a.jsx)("div",{className:"adjacent-mar-top",children:"What things have you been involved with since your conviction?"}),Object(a.jsx)("div",{className:"adjacent-mar-top",children:"Please check all that apply:"}),Object(a.jsxs)("div",{className:i.flexColumn,children:[Object(a.jsx)(ye,{checked:t.isJobChecked,onChange:function(){return n({isJobChecked:!t.isJobChecked})},label:"Jobs"}),Object(a.jsx)(ye,{checked:t.isRecoveryChecked,onChange:function(){return n({isRecoveryChecked:!t.isRecoveryChecked})},label:"Recovery"}),Object(a.jsx)(ye,{checked:t.isSchoolChecked,onChange:function(){return n({isSchoolChecked:!t.isSchoolChecked})},label:"School"}),Object(a.jsx)(ye,{checked:t.isParentingChecked,onChange:function(){return n({isParentingChecked:!t.isParentingChecked})},label:"Parenting"}),Object(a.jsx)(ye,{checked:t.isCommunityChecked,onChange:function(){return n({isCommunityChecked:!t.isCommunityChecked})},label:"Community Service"}),Object(a.jsx)(ye,{checked:t.isNoneChecked,onChange:function(){return n({isNoneChecked:!t.isNoneChecked})},label:"None of the above"})]})]})},ke=Object(x.a)((function(){return Object(O.a)({root:{paddingTop:24},flexColumn:{display:"flex",flexDirection:"column"}})})),we=function(e){var t=e.state,n=e.onChangeState,i=ke();return Object(a.jsxs)("div",{className:i.root,children:[Object(a.jsxs)("div",{className:i.flexColumn,children:["What is the name of the company you work for?",Object(a.jsx)(G,{handleChange:function(){return n({companyName:!t.companyName})},inputName:"companyName",placeholder:"Name of company",multi:!1,isValid:!0,defaultValue:t.companyName})]}),Object(a.jsxs)("div",{className:i.flexColumn,children:["What is your current job title?",Object(a.jsx)(G,{handleChange:function(){return n({jobTitle:!t.jobTitle})},inputName:"jobTitle",placeholder:"Job Title",multi:!1,isValid:!0,defaultValue:t.jobTitle})]}),Object(a.jsxs)("div",{className:i.flexColumn,children:["What do you do at this job? Why is this important to you? (2-3 sentences suggested)",Object(a.jsx)(G,{handleChange:function(){return n({jobDescription:!t.jobDescription})},inputName:"jobDescription",placeholder:"I have had the chance to...",multi:!0,isValid:!0,defaultValue:t.jobDescription})]})]})},Te=function(e){var t=e.inputs,n=e.setInputs,o=e.goNextPage,c=e.goBackPage,r=Object(i.useState)({currentStep:ge,involvementState:{isJobChecked:!1,isRecoveryChecked:!1,isSchoolChecked:!1,isParentingChecked:!1,isCommunityChecked:!1,isNoneChecked:!1},jobState:{companyName:"",jobTitle:"",jobDescription:""}}),s=Object(m.a)(r,2),l=s[0],u=s[1],d=function(e){u(Object(h.a)(Object(h.a)({},l),e)),n(t)};return Object(a.jsxs)("form",{children:[Object(a.jsx)(Ce,{state:l.involvementState,onChangeState:function(e){d(Object(h.a)(Object(h.a)({},l),{},{involvementState:Object(h.a)(Object(h.a)({},l.involvementState),e)}))}}),Object(a.jsx)(we,{state:l.jobState,onChangeState:function(e){d(Object(h.a)(Object(h.a)({},l),{},{jobState:Object(h.a)(Object(h.a)({},l.jobState),e)}))}}),Object(a.jsx)(k,{onClick:function(){return c()},buttonText:"BACK"}),Object(a.jsx)(k,{onClick:function(){return o()},buttonText:"LOOKS GOOD"})]})},Se=Object(x.a)((function(e){return Object(O.a)({root:Object(S.a)({display:"flex",flex:"1 0 auto",flexDirection:"column",maxWidth:"850px",marginLeft:"auto",marginRight:"auto"},e.breakpoints.down("xs"),{marginLeft:"initial",marginRight:"initial"})})})),Ae=function(e){var t=e.pageNumber,n=e.goNextPage,o=e.goBackPage,c=e.onChangeAffirmation,r=Se(),s=R({}),l=Object(i.useState)({name:"",age:null,introduction:"",lifeChanges:"",communityServiceOrgName:"",communityServiceDescription:"",jobName:"",jobTitle:"",jobDescription:"",difficultyFindingWorkDescription:"",goals:"",goalsHow:"",clearRecordWhy:"",clearRecordHow:"",pdf:void 0}),u=Object(m.a)(l,2),d=u[0],j=u[1];return Object(i.useEffect)((function(){switch(t){case 2:c({isActive:!0,titleText:"Welcome!",buttonText:"Begin",description:"This is a tool to generate a personal statement."});break;case 4:c({isActive:!0,titleText:"Congrats!",buttonText:"Next",description:"You just finished introducing yourself! You are well on your way to completing your personal statement and getting your record cleared!"});break;case 5:c({isActive:!0,titleText:"Hooray!",buttonText:"Next",description:"You just finished telling everyone about your involvement in your city and your various communities! Thank you for taking the time to tell us about this!"});break;case 6:c({isActive:!0,titleText:"Great Job!",buttonText:"Next",description:"Those are some amazing goals you\u2019ve set for yourself! You\u2019re one step closer towards acheiving them too by getting your record cleared."})}}),[t]),Object(a.jsxs)("div",{className:"".concat(r.root," content-page"),children:[1===t&&Object(a.jsx)(D,{goNextPage:n}),2===t&&Object(a.jsx)(le,{inputs:d,setInputs:j,goNextPage:n,goBackPage:o}),3===t&&Object(a.jsx)(Te,{inputs:d,setInputs:j,goNextPage:n,goBackPage:o}),4===t&&Object(a.jsx)(ue,{inputs:d,setInputs:j,goNextPage:n,goBackPage:o}),5===t&&Object(a.jsx)(de,{inputs:d,setInputs:j,goNextPage:n,goBackPage:o}),6===t&&Object(a.jsx)(he,{inputs:d,setInputs:j,goNextPage:n,goBackPage:o}),7===t&&Object(a.jsxs)("div",{className:"".concat(s.buttonContainer," adjacent-mar-top"),children:[Object(a.jsx)("p",{children:"Previewing Final Statement"}),Object(a.jsx)(k,{onClick:function(){return o()},buttonText:"EDIT"}),Object(a.jsx)(k,{onClick:function(){return n()},buttonText:"NEXT"})]}),8===t&&Object(a.jsxs)("div",{className:"".concat(s.buttonContainer," adjacent-mar-top"),children:[Object(a.jsx)("p",{children:"Editing"}),Object(a.jsx)(k,{onClick:function(){return n()},buttonText:"SAVE"})]}),9===t&&Object(a.jsx)(pe,{inputs:d,setInputs:j,goNextPage:n,goBackPage:o})]})},Ie=n(179),Pe=Object(x.a)((function(){return Object(O.a)({root:{borderRadius:10,backgroundColor:"#FFFFFF","& .MuiLinearProgress-bar":{borderRadius:10,backgroundColor:"#9903FF"}},box:{width:"90%"}})})),Re=function(e){var t=e.percentage,n=Pe();return Object(a.jsx)("div",{className:n.box,children:Object(a.jsx)(Ie.a,{className:n.root,variant:"determinate",value:t})})},Fe=Object(x.a)((function(){return Object(O.a)({root:{background:"#f7ebff",color:"black",height:"120px",marginTop:"20px",paddingLeft:"12px",borderBottomRightRadius:"64px","& h2":{margin:"33px 0 18px"},"& p":{color:"3d0066",opacity:"30%",marginTop:"16px"}}})})),We=function(e){var t,n,i,o=e.pageNumber,c=Fe();return 2===o?(n=1,t=!0,i=20):3===o?(n=2,t=!0,i=40):5===o?(n=3,t=!0,i=60):6===o?(n=5,t=!0,i=20):7===o||13===o?(n=6,t=!0,i=20):(n=0,i=20,t=!1),t?Object(a.jsxs)("div",{className:c.root,children:[1===n&&Object(a.jsx)("h2",{children:"Introduce Yourself!"}),2===n&&Object(a.jsx)("h2",{children:"Life Changes"}),3===n&&Object(a.jsx)("h2",{children:"Involvement"}),4===n&&Object(a.jsx)("h2",{children:"Goals"}),5===n&&Object(a.jsx)("h2",{children:"Why"}),6===n&&Object(a.jsx)("h2",{children:"My Personal Statement"}),Object(a.jsx)(Re,{percentage:i}),n<6&&Object(a.jsxs)("p",{children:["Step ",n," of 5"]}),6===n&&Object(a.jsx)("p",{children:"Completed"})]}):null},De=Object(x.a)((function(){return Object(O.a)({marTop24:{marginTop:"24px"},marTop36:{marginTop:"36px"}})})),Ee=function(e){var t=e.goNextPage,n=De(),i=R({theme:"dark"});return Object(a.jsxs)("div",{className:"".concat(i.contentContainer," content-page"),children:[Object(a.jsx)("h1",{className:"page-title",children:"Start fresh with a record expungement"}),Object(a.jsx)("div",{className:n.marTop24,children:"Generate a personal statement in just 20 minutes"}),Object(a.jsx)("div",{className:"".concat(i.buttonContainer," ").concat(n.marTop36),children:Object(a.jsx)(k,{onClick:function(){return t()},theme:"dark",hasArrow:!0,buttonText:"START NOW"})})]})},Le=Object(x.a)((function(){return Object(O.a)({root:{background:function(e){return e.isLandingPage?"#9903ff":"white"},color:function(e){return e.isLandingPage?"white":"#131313"},padding:"18px",display:"flex",flex:"1 0 auto",flexDirection:"column"}})})),He=function(e){var t=e.match,n=o.a.useContext(j),c=n.pageNumber,r=n.goNextPage,s=n.goBackPage,l=o.a.useContext(p),u=l.affirmationData,d=l.updateAffirmationData,b=0===c,h=Le({isLandingPage:b});return Object(i.useEffect)((function(){"/"===t.path&&d({isActive:!1})}),[t]),Object(a.jsxs)("div",{className:"".concat(h.root," page-container"),children:[Object(a.jsx)(T,{buttonText:u.buttonText,titleText:u.titleText,description:u.description,isActive:u.isActive,onChangeAffirmation:d}),Object(a.jsx)(P,{pageNumber:c}),!b&&Object(a.jsx)(We,{pageNumber:c}),b&&Object(a.jsx)(Ee,{goNextPage:r}),!b&&Object(a.jsx)(Ae,{pageNumber:c,goNextPage:r,goBackPage:s,onChangeAffirmation:d})]})},Be=n.p+"static/media/hackForLALogo.1329edab.svg",Ve=Object(x.a)((function(e){var t,n;return Object(O.a)({root:(t={position:"absolute",bottom:"0px",width:"100%",background:"none",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center","& img, span":{display:"none",margin:"0 20px"}},Object(S.a)(t,e.breakpoints.up("md"),{background:"black",height:"50px","& img, span":{display:"block"}}),Object(S.a)(t,e.breakpoints.up("lg"),{"& img, span":{margin:"0 45px"}}),t),imageWrapper:Object(S.a)({},e.breakpoints.up("md"),{width:"230px"}),linkWrapper:(n={display:"flex",margin:"0 auto",justifyContent:"space-between",width:"300px",textTransform:"uppercase","& a":{color:"white",fontSize:"0.625rem"}},Object(S.a)(n,e.breakpoints.up("md"),{"& :nth-child(n+3)":{display:"none"},width:"260px","& a":{fontWeight:"700",fontSize:"1rem"}}),Object(S.a)(n,e.breakpoints.down("sm"),{position:"relative",bottom:"17px"}),n)})})),Ue=function(){var e=Ve();return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)("div",{className:e.imageWrapper,children:Object(a.jsx)("img",{src:Be,alt:"Hack for LA Logo"})}),Object(a.jsxs)("div",{className:e.linkWrapper,children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"".concat("/expunge-assist","/PrivacyPolicy"),children:"Privacy Policy"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"".concat("/expunge-assist","/TermsOfUse"),children:"Terms Of Use"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"".concat("/expunge-assist","/FAQ"),children:"FAQ"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"".concat("/expunge-assist","/AboutUs"),children:"About Us"})})]}),Object(a.jsx)("span",{children:"COPYRIGHT 2020 HACK FOR LA"})]})},Ge=Object(x.a)((function(){return Object(O.a)({root:{padding:"18px",color:"#ffffff",display:"flex",flexDirection:"column",justifyContent:"center","& .centered":{display:"flex",flexDirection:"column",justifyCOntent:"flex-start",width:"528px",height:"266px",margin:"0 auto"},"& h3":{fontWeight:500,fontSize:"1.25rem",lineHeight:"1.3rem",letterSpacing:"0.0015em",marginBottom:"1em"},"& .content":{fontWeight:"bold",fontSize:"1rem",lineHeight:"1.2rem",letterSpacing:"0.005em",marginBottom:"1em"}},button:{fontStyle:"normal",fontWeight:"bold",fontSize:"1rem",lineHeight:"1.2rem",textAlign:"left",letterSpacing:"0.0125em",textTransform:"uppercase",color:"#ffffff",backgroundColor:"transparent",border:"none"}})})),Me=function(e){var t=e.handleClick,n=Ge();return Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)(P,{pageNumber:0}),Object(a.jsxs)("div",{className:"centered",children:["\xa0",Object(a.jsx)("h3",{children:"Privacy Policy"}),"\xa0",Object(a.jsx)("p",{className:"content",children:"THE SOFTWARE IS PROVIDED \u201cAS IS\u201d, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT."}),Object(a.jsx)("p",{className:"content",children:"IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."}),"\xa0",Object(a.jsx)("p",{className:"content",children:"ALL SESSION DATA IS KEPT PRIVATE AND PERSONAL INFORMATION IS CONFIDENTIAL."}),"\xa0",Object(a.jsx)("button",{className:n.button,onClick:t,children:Object(a.jsx)("span",{children:"BACK"})})]})]})},Ke=Object(x.a)((function(){return Object(O.a)({root:{color:"white",padding:"18px",display:"flex",flex:"1 0 auto",flexDirection:"column"},content:{marginTop:"50px",padding:"0 5px",lineHeight:"1.17rem"}})})),ze=function(){var e=Ke();return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(P,{pageNumber:0}),Object(a.jsxs)("div",{className:e.content,children:[Object(a.jsx)("h2",{children:"Terms of Use"}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["The Personal Statement Generator",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"The Personal Statement Generator is a piece of software created to helping people expunge their records through a personal statement that can be submitted. The main use is to help applications generate a personal statement to submit for expungement. The Application is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this application. You may not use the Application in a way that would violate the Gramm-Leach-Bliley Act (GLBA)",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Scope Of License",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"You are given a non-transferable, non-exclusive, non-sub licensable license to use the application on your browser of choice.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"User Generated Contributions",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or in the Application, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, \u201cContributions\u201d). Contributions may be viewable by the recipients of the personal statement and through third-party websites or applications. As such, any Contributions you transmit may be treated in accordance with the Application Privacy Policy. Hack for LA\u2019s responsibility in the case of violation of obligations and tort shall be limited to intent and gross negligence. Only I incase of a breach of essential contractual duties (cardinal obligations), shall Hack for LA be liable for anything. Hack for LA takes no accountability or responsibility for any damages caused due to the generation and submission of this application and not limited to just these cases. The laws of the State of California excluding its conflicts of law rules govern this license agreement."]})]})]})},Ye=function(){return Object(a.jsx)("div",{className:"FAQ",children:"FAQ page"})},Je=function(){return Object(a.jsx)("div",{className:"AboutUs",children:"About Us page"})},Xe=(n(126),Object(u.a)({palette:{primary:{main:"#9903FF"},secondary:{main:"#0AEBA0"}},breakpoints:{values:{xs:0,sm:320,md:960,lg:1200,xl:1920}}})),Qe=function(){var e=Object(s.f)(),t=Object(F.a)().i18n,n=function(e){t.changeLanguage(e)};return Object(a.jsx)(d.a,{theme:Xe,children:Object(a.jsxs)(l.a,{basename:"/expunge-assist",children:[Object(a.jsx)(b,{children:Object(a.jsxs)(g,{children:[Object(a.jsxs)("nav",{style:{width:"100%",padding:"2rem 0",backgroundColor:"gray",display:"none",justifyContent:"center"},children:[Object(a.jsx)("button",{onClick:function(){return n("en")},children:"ENG"}),Object(a.jsx)("button",{onClick:function(){return n("esp")},children:"ESP"}),Object(a.jsx)("button",{onClick:function(){return n("ko")},children:"KO"})]}),Object(a.jsxs)(s.c,{children:[Object(a.jsx)(s.a,{exact:!0,path:"/",component:He,history:e}),Object(a.jsx)(s.a,{path:"/form/:page?",component:He,history:e}),Object(a.jsx)(s.a,{path:"/PrivacyPolicy",component:Me}),Object(a.jsx)(s.a,{path:"/TermsOfUse",component:ze}),Object(a.jsx)(s.a,{path:"/FAQ",component:Ye}),Object(a.jsx)(s.a,{path:"/AboutUs",component:Je})]})]})}),Object(a.jsx)(Ue,{})]})})},qe=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,564)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))},$e=n(74),Ze=n(91),_e=n(93),et=n(52);$e.a.use(Ze.a).use(_e.a).use(et.e).init({fallbackLng:"en",whiteList:["en","de"],debug:!0,detection:{order:["queryString","cookie"],cache:["cookie"]},backend:{loadPath:"/record-clearance/locales/{{lng}}/{{ns}}.json"}});$e.a;r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(i.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading..."}),children:Object(a.jsx)(Qe,{})})}),document.getElementById("root")),qe()}},[[127,1,3]]]);
//# sourceMappingURL=main.5884ee61.chunk.js.map