(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(81)},48:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),o=(a(45),a(46),a(48),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),d=a(11),p=a(16),h=[{to:"/shopping-cart-reactjs/",exact:!0,name:"Home"},{to:"/shopping-cart-reactjs/product",name:"Product"},{to:"/shopping-cart-reactjs/admin",name:"Admin"},{to:"/shopping-cart-reactjs/shopping-cart",name:"Cart"},{to:"/shopping-cart-reactjs/login",name:"Login"}],E=function(e){var t=e.menu;return r.a.createElement(p.b,{path:t.to,exact:t.exact,children:function(e){var a=null!==e.match?"active":"",n=t.name;return n="Cart"===n?r.a.createElement("i",{className:"fa fa-shopping-cart","aria-hidden":"true"}):"Login"===n?r.a.createElement("i",{className:"fa fa-sign-in","aria-hidden":"true"}):t.name,r.a.createElement("li",{className:"nav-item px-lg-4 ".concat(a)},r.a.createElement(d.b,{to:t.to,className:"nav-link text-uppercase text-expanded"},n))}})},b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark py-lg-4",style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(d.c,{to:"/shopping-cart-reactjs/",className:"navbar-brand text-uppercase text-expanded font-weight-bold"},"Shopping Cart"),r.a.createElement("ul",{className:"navbar-nav"},this.showMenus(h)))}},{key:"showMenus",value:function(e){var t=null;return e.length>0&&(t=e.map(function(e,t){return r.a.createElement(E,{menu:e,key:t})})),t}}]),t}(n.Component),g=[{to:"/shopping-cart-reactjs/",name:"Home"}],f=function(e){var t=e.menu;return r.a.createElement(p.b,{path:t.to,exact:t.exact,children:function(e){var a=e.match;return null!==a&&!0===a.isExact?r.a.createElement("li",{className:"active"},t.name):r.a.createElement("li",null,r.a.createElement(d.b,{to:t.to},t.name))}})},v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ol",{className:"breadcrumb"},this.showBreadcrumb(g)))}},{key:"showBreadcrumb",value:function(e){var t=null;return e.length>0&&(t=e.map(function(e,t){return r.a.createElement(f,{menu:e,key:t})})),t}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Welcome to Shopping Cart!"))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(y,null)}}]),t}(n.Component),O=a(7),N=a(19),w=a(29),k=a.n(w),S="http://192.168.1.198";function _(e,t,a){return k()({method:t,url:"".concat(S,"/").concat(e),headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:a})}var x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;a.setState(Object(N.a)({},r,n))},a.handleSubmit=function(e){var t,n,r,l=a.state,c=l.isLogin,o=l.username,i=l.password;(t="wordpress-demo/wp-json/jwt-auth/v1/token",n="POST",r={username:o,password:i,isLogin:c},k()({method:n,url:"".concat(S,"/").concat(t),data:r}).catch(function(e){console.log(e)})).then(function(e){void 0!==e&&e&&e.data?(localStorage.setItem("token",e.data.token),c=!0,a.setState({isLogin:!0})):alert("Username or password not correct!")}),e.preventDefault()},a.state={username:"",password:"",isLogin:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLogin,a=e.username,n=e.password;return t?r.a.createElement(p.a,{to:"/shopping-cart-reactjs/product"}):r.a.createElement("div",{className:"container"},r.a.createElement("hr",{className:"divider"}),r.a.createElement("h2",{className:"text-center text-lg text-uppercase my-0"},"Login ",r.a.createElement("strong",null,"Form")),r.a.createElement("hr",{className:"divider"}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-lg-6"},r.a.createElement("label",{className:"text-heading"},"Username"),r.a.createElement("input",{name:"username",value:a,onChange:this.handleChange,type:"text",className:"form-control",required:!0})),r.a.createElement("div",{className:"form-group col-lg-6"},r.a.createElement("label",{className:"text-heading"},"Password"),r.a.createElement("input",{name:"password",value:n,onChange:this.handleChange,type:"password",className:"form-control",required:!0})),r.a.createElement("div",{className:"clearfix"}),r.a.createElement("div",{className:"form-group col-lg-12"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},r.a.createElement("i",{className:"fa fa-sign-in","aria-hidden":"true"})," \xa0Login")))))}}]),t}(n.Component),C=Object(O.b)(null,function(e,t){return{formLogin:function(t,a){e(function(e,t){return{type:"USER_LOGIN",username:e,password:t}}(t,a))}}})(x),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handeLogout=function(){a.props.formLogout()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.username;return r.a.createElement("div",{className:"bg-faded p-4 my-4"},r.a.createElement("hr",{className:"divider"}),r.a.createElement("h2",{className:"text-center text-lg text-uppercase my-0"},r.a.createElement("strong",null,"User Control")),r.a.createElement("hr",{className:"divider"}),r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-lg-6"},r.a.createElement("label",{className:"text-heading"},"Hello: ",r.a.createElement("strong",null,e))),r.a.createElement("div",{className:"clearfix"}),r.a.createElement("div",{className:"form-group col-lg-12"},r.a.createElement("button",{onClick:this.handeLogout,type:"button",className:"btn btn-secondary"},"Logout")))))}}]),t}(n.Component),A=Object(O.b)(null,function(e,t){return{formLogout:function(){var t,a;e({type:"USER_LOGOUT",username:t,password:a})}}})(T),R=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null)}},{key:"showArea",value:function(e){return!1===e.isLogin?r.a.createElement(C,null):!0===e.isLogin?r.a.createElement(A,{username:e.username}):void 0}}]),t}(n.Component),L=Object(O.b)(function(e){return{user:e.user}},null)(R),D=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.item,t=""!==e.price?e.price:0,a=e.images.length>0?e.images[0].src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg";return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("img",{src:a,alt:e.name,className:"img-fluid z-depth-0",style:{width:"100px"}})),r.a.createElement("td",null,r.a.createElement("h5",null,r.a.createElement("strong",null,e.name))),r.a.createElement("td",null,t,"$"),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn btn-xs btn-primary",style:{marginRight:"5px"}},r.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"}),"\xa0 Update"),r.a.createElement("button",{type:"button",className:"btn btn-xs btn-danger","data-original-title":"Remove item"},r.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"})," \xa0 Delete")))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handToggleForm=function(){a.props.handToggleForm()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.isShowForm;return r.a.createElement("div",{className:"row header-form"},r.a.createElement("div",{className:"col-12",style:{display:"flex",justifyContent:"space-between",marginBottom:"10px"}},r.a.createElement("h2",null,r.a.createElement("b",null,"Qu\u1ea3n l\xed s\u1ea3n ph\u1ea9m")),r.a.createElement("div",{className:"action-control"},r.a.createElement("button",{onClick:this.handToggleForm,type:"button",className:!1===e?"btn btn-info btn-block":"btn btn-danger btn-block"},r.a.createElement("i",{className:!1===e?"fa fa-plus":"fa fa-times","aria-hidden":"true"})," \xa0",!1===e?"Th\xeam s\u1ea3n ph\u1ea9m":"\u0110\xf3ng Form"))))}}]),t}(n.Component),M=Object(O.b)(function(e){return{isShowForm:e.isShowForm,itemSelected:e.itemSelected}},function(e,t){return{handToggleForm:function(){e({type:"ITEM_UNSELECT"}),e({type:"TOGGLE_FORM"})}}})(I),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(N.a)({},r,n))},a.onClickSubmit=function(e){var t={id:a.state.task_id,name:a.state.task_name,price:a.state.task_price,images:a.state.task_images,description:a.state.task_description};_("wordpress-demo/wp-json/wc/v3/products","POST",{id:t.id,name:t.name,price:t.price,images:t.images,description:t.description}).then(function(e){console.log(e)}),a.props.handleSubmit(t),e.preventDefault()},a.onClickCancel=function(){a.props.handleCancel()},a.state={task_id:"",task_name:"",task_price:0,task_images:[],task_description:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.updateItem(this.props.itemSelected)}},{key:"componentWillReceiveProps",value:function(e){this.updateItem(e.itemSelected)}},{key:"updateItem",value:function(e){null!==e&&this.setState({task_id:e.id,task_name:e.name,task_price:e.price,task_images:e.images,task_description:e.description})}},{key:"render",value:function(){return!1===this.props.isShowForm?null:r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("form",{onSubmit:this.onClickSubmit,style:{border:"1px solid #aaa",padding:"20px",marginBottom:"20px"}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"T\xean s\u1ea3n ph\u1ea9m"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Product Name",name:"task_name",value:this.state.task_name,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Gi\xe1 s\u1ea3n ph\u1ea9m"),r.a.createElement("input",{type:"number",className:"form-control",placeholder:"Product Price",name:"task_price",value:this.state.task_price,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"H\xecnh \u1ea3nh s\u1ea3n ph\u1ea9m"),r.a.createElement("input",{type:"file",className:"form-control",placeholder:"Product Images",name:"task_images",value:this.state.task_images,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Chi ti\u1ebft s\u1ea3n ph\u1ea9m"),r.a.createElement("textarea",{type:"text",className:"form-control",name:"task_description",value:this.state.task_description,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),r.a.createElement("button",{type:"button",className:"btn btn-light",onClick:this.onClickCancel},"Cancel"))))}}]),t}(n.Component),F=Object(O.b)(function(e){return{isShowForm:e.isShowForm,itemSelected:e.itemSelected}},function(e,t){return{handleCancel:function(){e({type:"CLOSE_FORM"})},handleSubmit:function(t){e(function(e){return{type:"SUBMIT_FORM",item:e}}(t)),e({type:"CLOSE_FORM"})}}})(P),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={products:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;_("wordpress-demo/wp-json/wc/v3/products","GET",null).then(function(t){e.setState({products:t.data})})}},{key:"render",value:function(){var e=this.state.products;return r.a.createElement("div",{className:"container"},r.a.createElement(M,null),r.a.createElement(F,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("h2",null,"Danh s\xe1ch s\u1ea3n ph\u1ea9m"),r.a.createElement("h4",null,"Total : ",r.a.createElement("b",null,e.length)," product(s)")),r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"H\xecnh \u1ea3nh"),r.a.createElement("th",null,"S\u1ea3n Ph\u1ea9m"),r.a.createElement("th",null,"Gi\xe1"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,this.showProducts(e))))))}},{key:"showProducts",value:function(e){var t=null;return null!==e&&e.length>0&&(t=e.map(function(e,t){return r.a.createElement(D,{key:t,item:e})})),t}}]),t}(n.Component),B=Object(O.b)(function(e){return{items:e.items,sort:e.sort,strSearch:e.strSearch}},function(e,t){return{handleEdit:function(){e({type:"OPEN_FORM"})}}})(G),U=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(B,{match:this.props.match})}}]),t}(n.Component),H=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row header-form"},r.a.createElement("div",{className:"col-12",style:{display:"flex",justifyContent:"space-between",marginBottom:"10px"}},r.a.createElement("h2",null,r.a.createElement("b",null,"Gi\u1ecf h\xe0ng ")),r.a.createElement("div",{className:"action-control"},r.a.createElement("button",{className:"btn btn-primary"},r.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}),"\xa0\xa0 Th\xeam s\u1ea3n ph\u1ea9m")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Danh s\xe1ch s\u1ea3n ph\u1ea9m"),r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"H\xecnh \u1ea3nh"),r.a.createElement("th",null,"S\u1ea3n Ph\u1ea9m"),r.a.createElement("th",null,"Gi\xe1"),r.a.createElement("th",null,"S\u1ed1 l\u01b0\u1ee3ng"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("img",{src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/T_4_front.jpg",alt:"image",style:{width:"100px"}})),r.a.createElement("td",{style:{verticalAlign:"middle"}},"Ship Your Idea"),r.a.createElement("td",{style:{verticalAlign:"middle"}},"25$"),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("input",{className:"form-control",type:"number"})),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("button",{className:"btn btn-danger btn-xs"},"X\xf3a"))),r.a.createElement("tr",null,r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("img",{src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/T_2_front.jpg",alt:"image",style:{width:"100px"}})),r.a.createElement("td",{style:{verticalAlign:"middle"}},"Premium Quality"),r.a.createElement("td",{style:{verticalAlign:"middle"}},"25$"),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("input",{className:"form-control",type:"number"})),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("button",{className:"btn btn-danger btn-xs"},"X\xf3a"))),r.a.createElement("tr",null,r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("img",{src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/T_4_front.jpg",alt:"image",style:{width:"100px"}})),r.a.createElement("td",{style:{verticalAlign:"middle"}},"Ninja Silhouette"),r.a.createElement("td",{style:{verticalAlign:"middle"}},"25$"),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("input",{className:"form-control",type:"number"})),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("button",{className:"btn btn-danger btn-xs"},"X\xf3a"))),r.a.createElement("tr",null,r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("img",{src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/T_1_front.jpg",alt:"image",style:{width:"100px"}})),r.a.createElement("td",{style:{verticalAlign:"middle"}},"Woo Logo"),r.a.createElement("td",{style:{verticalAlign:"middle"}},"25$"),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("input",{className:"form-control",type:"number"})),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("button",{className:"btn btn-danger btn-xs"},"X\xf3a"))),r.a.createElement("tr",null,r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("img",{src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/hoodie_2_front.jpg",alt:"image",style:{width:"100px"}})),r.a.createElement("td",{style:{verticalAlign:"middle"}},"Woo Ninja"),r.a.createElement("td",{style:{verticalAlign:"middle"}},"25$"),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("input",{className:"form-control",type:"number"})),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("button",{className:"btn btn-danger btn-xs"},"X\xf3a"))),r.a.createElement("tr",null,r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("img",{src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/hoodie_3_front.jpg",alt:"image",style:{width:"100px"}})),r.a.createElement("td",{style:{verticalAlign:"middle"}},"Woo Logo"),r.a.createElement("td",{style:{verticalAlign:"middle"}},"25$"),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("input",{className:"form-control",type:"number"})),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("button",{className:"btn btn-danger btn-xs"},"X\xf3a")))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("b",null,"T\u1ed5ng: 150$")),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("button",{className:"btn btn-success"},"Thanh to\xe1n"))))))))}}]),t}(n.Component),$=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(H,{match:this.props.match})}}]),t}(n.Component),X=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSort=function(e,t){a.props.onClickSort(e,t)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"dropdown col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4"},r.a.createElement("button",{className:"btn btn-info dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",style:{width:"100%"}},"Sort by ",r.a.createElement("span",{className:"caret"})),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1",style:{width:"100%"}},r.a.createElement("a",{className:"dropdown-item",role:"button",onClick:function(){return e.handleSort("name","asc")}},"Sort by Name: A -> Z"),r.a.createElement("a",{className:"dropdown-item",role:"button",onClick:function(){return e.handleSort("name","desc")}},"Sort by Name: Z -> A"),r.a.createElement("a",{className:"dropdown-item",role:"button",onClick:function(){return e.handleSort("price","asc")}},"Sort by price: low to high"),r.a.createElement("a",{className:"dropdown-item",role:"button",onClick:function(){return e.handleSort("price","desc")}},"Sort by price: high to low")))}}]),t}(n.Component),W=Object(O.b)(function(e){return{sort:e.sort}},function(e,t){return{onClickSort:function(t,a){e(function(e,t){return{type:"SORT_ITEM",orderBy:e,orderDir:t}}(t,a))}}})(X),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onClickSearch=function(){a.props.handleSearch(a.state.strSearch)},a.onClickClear=function(){a.setState={strSearch:""},a.props.handleSearch(a.state.strSearch)},a.handleChange=function(e){a.setState({strSearch:e.target.value})},a.state={strSearch:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.strSearch;return e=e||this.props.strSearch,r.a.createElement("div",{className:"col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{value:e,onChange:this.handleChange,type:"text",className:"form-control",placeholder:"Search for..."}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{onClick:this.onClickSearch,className:"btn btn-info",type:"button"},"Search"),r.a.createElement("button",{onClick:this.onClickClear,className:"btn btn-warning",type:"button"},"Clear"))))}}]),t}(n.Component),V=Object(O.b)(function(e){return{strSearch:e.strSearch}},function(e,t){return{handleSearch:function(t){e(function(e){return{type:"CHANGE_SEARCH",strSearch:e}}(t))}}})(J),Y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row",style:{margin:"30px -15px"}},r.a.createElement("div",{className:"col-6 col-sm-12 col-md-12 col-lg-4 col-xl-4"},r.a.createElement("h2",null,"Poster")),r.a.createElement(W,null),r.a.createElement(V,null))}}]),t}(n.Component),q=a(15),z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.product,a=e.match,n=t.images.length>0?t.images[0].src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg",l=""===t.price?0:t.price,c=""!==t.sale_price?r.a.createElement("span",{style:{textDecoration:"line-through",color:"#aaa"}},t.regular_price,".00$ "):"";return r.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3",style:{marginBottom:"20px"}},r.a.createElement("div",{className:"card box-product"},r.a.createElement(p.b,{to:"/shopping-cart-reactjs/product/".concat(t.id),match:a,product:t},r.a.createElement("img",{className:"card-img-top",src:n,alt:"Card image",style:{width:"100%"}})),r.a.createElement("div",{className:"card-body",style:{textAlign:"center"}},r.a.createElement("h4",null,r.a.createElement(d.b,{to:"/shopping-cart-reactjs/product/".concat(t.id),target:"_blank",className:"card-title"},t.name)),r.a.createElement("p",{className:"card-text"},c," ",l,".00 $"),r.a.createElement("button",{className:"btn btn-primary",style:{width:"100%"}},"ADD TO CART"))))}}]),t}(n.Component),Q=a(17),Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={products:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;_("wordpress-demo/wp-json/wc/v3/products","GET",null).then(function(t){e.setState({products:t.data})})}},{key:"render",value:function(){var e=this.state.products,t=this.props,a=t.strSearch,n=t.sort,l=n.orderBy,c=n.orderDir,o=null!==e?Object(q.a)(e):[];return e=Object(Q.filter)(o,function(e){return Object(Q.includes)(e.name.toLowerCase(),a.toLowerCase())}),e=Object(Q.orderBy)(e,[l],[c]),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12",style:{marginBottom:"20px"}},r.a.createElement("h4",null,"Total: ",r.a.createElement("b",null,e.length)," item(s)")),this.showProducts(e))}},{key:"showProducts",value:function(e){var t=null;return null!==e&&e.length>0&&(t=e.map(function(e,t){return r.a.createElement(z,{key:t,product:e})})),t}}]),t}(n.Component),K=Object(O.b)(function(e){return{strSearch:e.strSearch,sort:e.sort}},null)(Z),ee=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(Y,null),r.a.createElement(K,null))}}]),t}(n.Component),te=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.product;return console.log("tabDes : ",e),r.a.createElement("div",{className:"container",style:{marginTop:"30px"}},r.a.createElement("ul",{className:"nav nav-tabs"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","data-toggle":"tab",href:"#Description"},"Description")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link","data-toggle":"tab",href:"#Reviews"}," Reviews (0)"))),r.a.createElement("div",{className:"tab-content"},r.a.createElement("div",{id:"Description",className:"container tab-pane active"},r.a.createElement("br",null),r.a.createElement("h3",null,"Description"),r.a.createElement("p",null,e.description)),r.a.createElement("div",{id:"Reviews",className:"container tab-pane fade"},r.a.createElement("br",null),r.a.createElement("h3",null,"Reviews"),r.a.createElement("p",null,"There are no reviews yet."),r.a.createElement("h3",null,'Be the first to review " ',e.name,' "'),r.a.createElement("p",null,"Your email address will not be published. Required fields are marked *"),r.a.createElement("p",null,"Your Rating"),r.a.createElement("p",null,r.a.createElement("span",{className:"fa fa-star-o","aria-hidden":"true",style:{marginRight:"5px"}}),r.a.createElement("span",{className:"fa fa-star-o","aria-hidden":"true",style:{marginRight:"5px"}}),r.a.createElement("span",{className:"fa fa-star-o","aria-hidden":"true",style:{marginRight:"5px"}}),r.a.createElement("span",{className:"fa fa-star-o","aria-hidden":"true",style:{marginRight:"5px"}}),r.a.createElement("span",{className:"fa fa-star-o","aria-hidden":"true",style:{marginRight:"5px"}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"Your review"},"Your review *"),r.a.createElement("textarea",{className:"form-control",rows:5,id:"review",defaultValue:""})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-12 col-md-6"},r.a.createElement("label",{htmlFor:"name"},"Name *"),r.a.createElement("textarea",{className:"form-control",rows:5,id:"name",defaultValue:""})),r.a.createElement("div",{className:"form-group col-12 col-md-6"},r.a.createElement("label",{htmlFor:"email"},"Email *"),r.a.createElement("textarea",{className:"form-control",rows:5,id:"email",defaultValue:""}))),r.a.createElement("div",{className:"form-group form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{className:"form-check-input",type:"checkbox"}),"Save my name, email, and website in this browser for the next time I comment.")),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))}}]),t}(n.Component),ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={relatedProduct:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){var e=this,t=this.props.product;if(void 0!==t){var a=t.join(",");_("wordpress-demo/wp-json/wc/v3/products?include=".concat(a),"GET",null).then(function(t){e.setState({relatedProduct:t.data})})}}},{key:"render",value:function(){var e=this.state.relatedProduct;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{margin:"30px -15px"}},r.a.createElement("div",{className:"col-12"},r.a.createElement("p",{style:{height:"2px",width:"50px",background:"#000"}}),r.a.createElement("h2",null,"Related products"))),r.a.createElement("div",{className:"row"},this.showRelatedProducts(e)))}},{key:"showRelatedProducts",value:function(e){var t=null;return null!==e&&e.length>0&&(t=e.map(function(e,t){return r.a.createElement(z,{key:t,product:e})})),t}}]),t}(n.Component),ne=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={product:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params.id;_("wordpress-demo/wp-json/wc/v3/products/".concat(t),"GET",null).then(function(t){e.setState({product:t.data})})}},{key:"render",value:function(){var e=this.state.product,t=e.images,a=0===e.length?"":e.categories[0].name,n=""!==e.sale_price?r.a.createElement("span",{style:{textDecoration:"line-through",color:"#aaa"}},e.regular_price,".00$ "):"";return r.a.createElement("div",{className:"product-detail-container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("div",{className:"carousel slideimages","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner"},this.showImages(t)))),r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,e.name),r.a.createElement("h3",{className:"card-text"},n,"  ",""===e.price?0:e.price,".00 $"),r.a.createElement("p",null,e.description),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("input",{type:"number",style:{marginRight:"10px",padding:"10px"}}),r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Add to cart")),r.a.createElement("p",null,"SKU:",e.sku),r.a.createElement("p",null,"Category:  ",r.a.createElement(d.b,{to:"/shopping-cart-reactjs/product"},a))))),r.a.createElement(te,{product:e}),r.a.createElement(ae,{product:e.related_ids}))}},{key:"showImages",value:function(e){var t=null;return void 0!==e&&(t=e.length>0?e.map(function(e,t){return r.a.createElement("div",{className:0===t?"carousel-item active":"carousel-item",key:t},r.a.createElement("img",{src:e.src,alt:e.name,style:{width:"100%"}}))}):(e=[{alt:"",date_created:"2019-05-16T03:22:32",date_created_gmt:"2019-05-16T03:22:32",date_modified:"2019-05-16T03:22:32",date_modified_gmt:"2019-05-16T03:22:32",id:62,name:"hoodie_3_front.jpg",src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg"},{alt:"",date_created:"2019-05-16T03:22:33",date_created_gmt:"2019-05-16T03:22:33",date_modified:"2019-05-16T03:22:33",date_modified_gmt:"2019-05-16T03:22:33",id:63,name:"hoodie_3_back.jpg",src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/Poster_4_flat.jpg"}]).map(function(e,t){return r.a.createElement("div",{className:0===t?"carousel-item active":"carousel-item",key:t},r.a.createElement("img",{src:e.src,alt:e.name,style:{width:"100%"}}))})),t}}]),t}(n.Component),re=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.match;return r.a.createElement(ne,{match:e})}}]),t}(n.Component),le=[{path:"/shopping-cart-reactjs/",exact:!0,main:function(){return r.a.createElement(j,null)}},{path:"/shopping-cart-reactjs/product",exact:!0,main:function(e){var t=e.match;return r.a.createElement(ee,{match:t})}},{path:"/shopping-cart-reactjs/product/:id",exact:!0,main:function(e){var t=e.match;return r.a.createElement(re,{match:t})}},{path:"/shopping-cart-reactjs/admin",exact:!0,main:function(e){var t=e.match;return r.a.createElement(U,{match:t})}},{path:"/shopping-cart-reactjs/shopping-cart",exact:!0,main:function(e){var t=e.match;return r.a.createElement($,{match:t})}},{path:"/shopping-cart-reactjs/login",exact:!0,main:function(){return r.a.createElement(L,null)}}],ce=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"header-container fixed-top"},r.a.createElement(b,null),r.a.createElement(v,null)),r.a.createElement("div",{className:"product-container",style:{marginTop:"200px"}},this.showRoute(le))))}},{key:"showRoute",value:function(e){var t=null;return e.length>0&&(t=e.map(function(e,t){return r.a.createElement(p.b,{key:t,exact:e.exact,path:e.path,component:e.main})})),r.a.createElement(p.d,null,t)}}]),t}(n.Component),oe=a(18),ie=a(39),se={isLogin:!1,username:"",password:""},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":return console.log("action : ",t),Object(ie.a)({},e);default:return e}},ue=[{to:"/shopping-cart-reactjs/",name:"Home"}],de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0,a=t.to,n=t.name;switch(t.type){case"GO_HOME":return e=[{to:"/shopping-cart-reactjs/",name:"Home"}],Object(q.a)(e);case"GO_PRODUCT":return e[1]={to:a,name:n},e.length>2&&e.splice(-1,1),Object(q.a)(e);case"GO_PRODUCT_ITEM":return e[2]={to:a,name:n},Object(q.a)(e);default:return e}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCH":return t.strSearch;default:return e}},he={orderBy:"price",orderDir:"desc"},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0,a=t.orderBy,n=t.orderDir;switch(t.type){case"SORT_ITEM":return{orderBy:a,orderDir:n};default:return e}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"CLOSE_FORM":return e=!1;case"OPEN_FORM":return e=!0;case"TOGGLE_FORM":return e=!e;default:return e}},ge=a(78),fe=[],ve=JSON.parse(localStorage.getItem("products"));fe=null!==ve&&ve.length>0?ve:fe;var ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,a=null;switch(t.type){case"DELETE_ITEM":return a=t.id,Object(Q.remove)(e,function(e){return e.id===a}),localStorage.setItem("products",JSON.stringify(e)),Object(q.a)(e);case"SUBMIT_FORM":console.log("action submit form: ",t),a=null;var n=t.item;return null!==n.id?(e=Object(Q.reject)(e,{id:n.id}),a=n.id):a=ge(),e.push({id:a,name:n.name,price:n.price,images:n.images,description:n.description}),console.log("state push : ",e),localStorage.setItem("products",JSON.stringify(e)),Object(q.a)(e);default:return e}},je={name:"",id:"",level:0},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEM_SELECTED":return t.item;case"ITEM_UNSELECT":return je;default:return e}},Ne=Object(oe.b)({user:me,breadcrumb:de,strSearch:pe,sort:Ee,isShowForm:be,items:ye,itemSelected:Oe});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=Object(oe.c)(Ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(O.a,{store:we},r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.cbecaee1.chunk.js.map