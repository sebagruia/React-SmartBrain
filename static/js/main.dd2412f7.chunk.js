(window.webpackJsonpsmartbrain=window.webpackJsonpsmartbrain||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/SmartBrain.fca1f4f4.png"},25:function(e,a,t){e.exports=t(57)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},36:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},55:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(17),l=t.n(o),s=(t(30),t(11)),i=t(12),c=t(14),m=t(13),u=t(15),d=(t(31),t(7)),p=t.n(d),g=t(18),h=t.n(g),f=(t(32),t(19)),E=t.n(f),b=function(e){var a=e.onRouteChange;return e.isSignedIn?r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light sticky-top",style:{backgroundColor:"#e3f2fd"}},r.a.createElement("a",{className:"navbar-brand",href:" home"},r.a.createElement(h.a,{className:"Tilt",options:{max:35},style:{height:110,width:110}},r.a.createElement("div",{className:"logo-div Tilt-inner"},r.a.createElement("img",{src:E.a,alt:"a drawing of a brain"}),r.a.createElement("p",{className:"logoName"},"SmartBrain")))),r.a.createElement("button",{className:"navbar-toggler text-secondary",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto "},r.a.createElement("li",{className:"nav-item "},r.a.createElement(p.a,{onClick:function(){a("SignIn")},className:"my-button  text-secondary",variant:"link"},r.a.createElement("i",{className:"fas fa-sign-out-alt "},r.a.createElement("span",{className:"font-family-custom"},"Sign out"))))))):r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light sticky-top",style:{backgroundColor:"#e3f2fd"}},r.a.createElement("a",{className:"navbar-brand",href:"#home"},r.a.createElement(h.a,{className:"Tilt",options:{max:35},style:{height:110,width:110}},r.a.createElement("div",{className:"logo-div Tilt-inner"},r.a.createElement("img",{src:E.a,alt:"a drawing of a brain"}),r.a.createElement("p",{className:"logoName"},"SmartBrain")))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto "},r.a.createElement("li",{className:"nav-item "},r.a.createElement(p.a,{onClick:function(){return a("SignIn")},className:"my-button buttons-margin  text-secondary",variant:"link"},r.a.createElement("i",{className:"fas fa-sign-in-alt"},r.a.createElement("span",{className:"font-family-custom"},"Sign in"))),r.a.createElement(p.a,{onClick:function(){return a("Register")},className:"my-button buttons-margin  text-secondary ",variant:"link"},r.a.createElement("i",{className:"fas fa-user-plus"},r.a.createElement("span",{className:"font-family-custom"},"Register")))))))},v=(t(36),t(1)),N=t.n(v),y=t(20),w=t.n(y),C=function(e){var a=e.onInputChange,t=e.onDetectButton;return r.a.createElement(N.a,{className:"form-div  justify-content-center"},r.a.createElement(N.a.Group,{className:"formBasic"},r.a.createElement(N.a.Label,{className:"form-label"},"SmartBrain will detect faces in your pictures"),r.a.createElement(w.a,{className:"mb-3"},r.a.createElement(w.a.Prepend,null,r.a.createElement(p.a,{className:"detect-button",variant:"light",onClick:t},"Detect")),r.a.createElement(N.a.Control,{type:"text",className:"browse-form",onChange:a}))))},I=(t(49),function(e){var a=e.imageUrl,t=e.box;return r.a.createElement("div",{className:"overall-container m-auto"},r.a.createElement("div",{className:"img-container m-auto"},r.a.createElement("img",{src:a,id:"inputImage",className:"image-to-analyze",alt:""}),t.map((function(e){return r.a.createElement("div",{className:"bounding-box",key:e.id,style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}})}))))}),S=(t(50),function(e){var a=e.name,t=e.entries,n=[];return a&&(n=a.split("")),r.a.createElement("div",{className:"rank-text-container m-auto"},r.a.createElement("div",{className:"foo d-flex justify-content-center"},r.a.createElement("div",{className:"your-name"},n.map((function(e,a){return r.a.createElement("span",{key:a,className:"letter","data-letter":e.toUpperCase()},e.toUpperCase())}))),r.a.createElement("div",{className:"your"},r.a.createElement("span",{className:"letter","data-letter":"Y"},"Y"),r.a.createElement("span",{className:"letter","data-letter":"O"},"O"),r.a.createElement("span",{className:"letter","data-letter":"U"},"U"),r.a.createElement("span",{className:"letter","data-letter":"R"},"R")),r.a.createElement("div",{className:"rank"},r.a.createElement("span",{className:"letter","data-letter":"R"},"R"),r.a.createElement("span",{className:"letter","data-letter":"A"},"A"),r.a.createElement("span",{className:"letter","data-letter":"N"},"N"),r.a.createElement("span",{className:"letter","data-letter":"K"},"K")),r.a.createElement("div",{className:"is"},r.a.createElement("span",{className:"letter","data-letter":"I"},"I"),r.a.createElement("span",{className:"letter","data-letter":"S"},"S"),r.a.createElement("span",{className:"letter","data-letter":":"},":"))),r.a.createElement("div",{className:"number"},r.a.createElement("span",{className:"letter","data-letter":"#"},"#"),r.a.createElement("span",{className:"letter","data-letter":t},t)))}),k=(t(51),t(9)),x=t.n(k),R=function(e){function a(e){var t,n=e.props;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,n))).onEmailChange=function(e){t.setState({signInEmail:e.target.value})},t.onPasswordChange=function(e){t.setState({signInPassword:e.target.value})},t.onSignInButton=function(e){e.preventDefault(),fetch("https://powerful-scrubland-05532.herokuapp.com/signIn",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.state.signInEmail,password:t.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id?(t.props.loadUser(e),t.props.onRouteChange("home")):window.alert("No such User!!!")}))},t.state={signInEmail:"",signInPassword:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return r.a.createElement(x.a,{className:"card-container m-auto",text:"light"},r.a.createElement(x.a.Body,{border:"light"},r.a.createElement(x.a.Title,null,"Sign In"),r.a.createElement(N.a,null,r.a.createElement(N.a.Group,{controlId:"formBasicEmail"},r.a.createElement(N.a.Label,{className:"label"},"Email address"),r.a.createElement(N.a.Control,{onChange:this.onEmailChange,type:"email",placeholder:"Enter email",required:!0}),r.a.createElement(N.a.Text,{className:"light"},"Don't worry I won't share your email, I'm not that guy.")),r.a.createElement(N.a.Group,{controlId:"formBasicPassword"},r.a.createElement(N.a.Label,{className:"label"},"Password"),r.a.createElement(N.a.Control,{onChange:this.onPasswordChange,type:"password",placeholder:"Password",required:!0})),r.a.createElement("div",{className:"button-wrapper"},r.a.createElement(p.a,{onClick:this.onSignInButton,className:"form-buttons",variant:"primary",type:"submit"},"Sign In"),r.a.createElement(p.a,{onClick:function(){return e("Register")},variant:"link",className:"form-buttons register-button",type:"submit"},"Register")))))}}]),a}(r.a.Component),j=(t(55),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).onNameInput=function(e){t.setState({name:e.target.value})},t.onEmailInput=function(e){t.setState({email:e.target.value})},t.onPasswordInput=function(e){t.setState({password:e.target.value})},t.onRegisterButton=function(e){e.preventDefault(),fetch("https://powerful-scrubland-05532.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.state.name,email:t.state.email,password:t.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(t.props.loadUser(e),t.props.onRouteChange("home"))}))},t.state={email:"",password:"",name:""},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(x.a,{className:"card-container m-auto",text:"light"},r.a.createElement(x.a.Body,{border:"light"},r.a.createElement(x.a.Title,null,"Register"),r.a.createElement(N.a,null,r.a.createElement(N.a.Group,{controlId:"formBasicName"},r.a.createElement(N.a.Label,{className:"label"},"Name"),r.a.createElement(N.a.Control,{onChange:this.onNameInput,type:"text",placeholder:"Enter Name",required:!0})),r.a.createElement(N.a.Group,{controlId:"formBasicEmail"},r.a.createElement(N.a.Label,{className:"label"},"Email address"),r.a.createElement(N.a.Control,{onChange:this.onEmailInput,type:"email",placeholder:"Enter email",required:!0}),r.a.createElement(N.a.Text,{className:"light"},"Don't worry I won't share your email, I'm not that guy.")),r.a.createElement(N.a.Group,{controlId:"formBasicPassword"},r.a.createElement(N.a.Label,{className:"label"},"Password"),r.a.createElement(N.a.Control,{onChange:this.onPasswordInput,type:"password",placeholder:"Password",required:!0})),r.a.createElement(p.a,{onClick:this.onRegisterButton,variant:"primary",className:"form-buttons",type:"submit"},"Register"))))}}]),a}(r.a.Component)),B=t(24),O=t.n(B),U={particles:{number:{value:200},size:{value:3},density:{enable:!0,value_area:800},move:{enable:!0,speed:4}},interactivity:{onover:{enable:!0,mode:"grab"}},retina_detect:!0},T={input:"",imageUrl:"",box:[],route:"SignIn",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},P=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(c.a)(this,Object(m.a)(a).call(this))).loadUser=function(a){e.setState({user:{id:a.id,name:a.name,email:a.email,entries:a.entries,joined:a.joined}})},e.onRouteChange=function(a){"SignIn"===a?e.setState(T):"home"===a&&e.setState({isSignedIn:!0}),e.setState({route:a})},e.calculateFaceLocation=function(e){var a=e.outputs[0].data.regions,t=[],n=document.getElementById("inputImage"),r=Number(n.width),o=Number(n.height),l=!0,s=!1,i=void 0;try{for(var c,m=a[Symbol.iterator]();!(l=(c=m.next()).done);l=!0){var u=c.value,d=u.region_info.bounding_box,p={id:u.id,leftCol:d.left_col*r,topRow:d.top_row*o,rightCol:r-d.right_col*r,bottomRow:o-d.bottom_row*o};t.push(p)}}catch(g){s=!0,i=g}finally{try{l||null==m.return||m.return()}finally{if(s)throw i}}return t},e.displayBoxOnImage=function(a){e.setState({box:a})},e.widthWindowDetection=function(){window.innerWidth<450&&(U.particles.number.value=50)},e.onInputChange=function(a){e.setState({input:a.target.value})},e.onDetectButton=function(){e.setState({imageUrl:e.state.input}),fetch("https://powerful-scrubland-05532.herokuapp.com/imageUrl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(a){a&&fetch(" https://powerful-scrubland-05532.herokuapp.com:3000/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(a){e.setState(Object.assign(e.state.user,{entries:a}))})).catch((function(e){return console.log("This is the problem ".concat(e))})),e.displayBoxOnImage(e.calculateFaceLocation(a))})).catch((function(e){console.log("HEYYYYY there is an ERROR - ".concat(e))}))},e.state=T,e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.isSignedIn,t=e.imageUrl,n=e.route,o=e.box;return this.widthWindowDetection(),r.a.createElement("div",{className:"App"},r.a.createElement(O.a,{className:"particles",params:U}),r.a.createElement(b,{onRouteChange:this.onRouteChange,isSignedIn:a}),"home"===n?r.a.createElement("div",null,r.a.createElement(S,{name:this.state.user.name,entries:this.state.user.entries}),r.a.createElement(C,{onInputChange:this.onInputChange,onDetectButton:this.onDetectButton}),r.a.createElement(I,{imageUrl:t,box:o})):"SignIn"===this.state.route?r.a.createElement(R,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}):r.a.createElement(j,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}))}}]),a}(n.Component);t(56),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.dd2412f7.chunk.js.map