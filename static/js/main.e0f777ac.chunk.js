(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(79)},49:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"NoAuth",function(){return C}),a.d(n,"call",function(){return k});var r=a(0),c=a.n(r),l=a(22),o=a.n(l),s=a(37),i=(a(46),a(47),a(49),a(1)),m=a(2),u=a(4),d=a(3),p=a(5),h=a(11),E=a(17),b=[{to:"/shopping-cart-reactjs/",exact:!0,name:"Home"},{to:"/shopping-cart-reactjs/product",name:"Product"},{to:"/shopping-cart-reactjs/products/categories",name:"Category"},{to:"/shopping-cart-reactjs/admin",name:"Admin"},{to:"/shopping-cart-reactjs/shopping-cart",name:"Cart"},{to:"/shopping-cart-reactjs/login",name:"Login"}],g=function(e){var t=e.menu;return c.a.createElement(E.b,{path:t.to,exact:t.exact,children:function(e){var a=null!==e.match?"active":"",n=t.name;return n="Cart"===n?c.a.createElement("i",{className:"fa fa-shopping-cart","aria-hidden":"true"}):"Login"===n?c.a.createElement("i",{className:"fa fa-sign-in","aria-hidden":"true"}):t.name,c.a.createElement("li",{className:"nav-item px-lg-4 ".concat(a)},c.a.createElement(h.b,{to:t.to,className:"nav-link text-uppercase text-expanded"},n))}})},f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark py-lg-4",style:{display:"flex",justifyContent:"space-between"}},c.a.createElement(h.c,{to:"/shopping-cart-reactjs/",className:"navbar-brand text-uppercase text-expanded font-weight-bold"},"Shopping Cart"),c.a.createElement("ul",{className:"navbar-nav"},this.showMenus(b)))}},{key:"showMenus",value:function(e){var t=null;return e.length>0&&(t=e.map(function(e,t){return c.a.createElement(g,{menu:e,key:t})})),t}}]),t}(r.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Welcome to Shopping Cart!"))}}]),t}(r.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(v,null)}}]),t}(r.Component),j=a(7),O=a(18),w=a(29),N=a.n(w),x="http://192.168.1.198";function C(e,t,a){return N()({method:t,url:"".concat(x,"/").concat(e),data:a}).catch(function(e){console.log(e)})}function k(e,t,a){return N()({method:t,url:"".concat(x,"/").concat(e),headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:a})}var S=function(e){return{type:"FETCH_PRODUCTS",products:e}},_=function(e){return{type:"DELETE_PRODUCT",id:e}},T=function(e){return{type:"ADD_PRODUCT",product:e}},A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;a.setState(Object(O.a)({},r,n))},a.handleSubmit=function(e){var t=a.state,n=t.isLogin;C("wordpress-demo/wp-json/jwt-auth/v1/token","POST",{username:t.username,password:t.password,isLogin:n}).then(function(e){void 0!==e&&e&&e.data?(localStorage.setItem("token",e.data.token),n=!0,a.setState({isLogin:!0})):alert("Username or password not correct!")}),e.preventDefault()},a.state={username:"",password:"",isLogin:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLogin,a=e.username,n=e.password;return t?c.a.createElement(E.a,{to:"/shopping-cart-reactjs/product"}):c.a.createElement("div",{className:"container"},c.a.createElement("hr",{className:"divider"}),c.a.createElement("h2",{className:"text-center text-lg text-uppercase my-0"},"Login ",c.a.createElement("strong",null,"Form")),c.a.createElement("hr",{className:"divider"}),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"form-group col-lg-6"},c.a.createElement("label",{className:"text-heading"},"Username"),c.a.createElement("input",{name:"username",value:a,onChange:this.handleChange,type:"text",className:"form-control",required:!0})),c.a.createElement("div",{className:"form-group col-lg-6"},c.a.createElement("label",{className:"text-heading"},"Password"),c.a.createElement("input",{name:"password",value:n,onChange:this.handleChange,type:"password",className:"form-control",required:!0})),c.a.createElement("div",{className:"clearfix"}),c.a.createElement("div",{className:"form-group col-lg-12"},c.a.createElement("button",{type:"submit",className:"btn btn-primary"},c.a.createElement("i",{className:"fa fa-sign-in","aria-hidden":"true"})," \xa0Login")))))}}]),t}(r.Component),D=Object(j.b)(null,function(e,t){return{formLogin:function(t,a){e(function(e,t){return{type:"USER_LOGIN",username:e,password:t}}(t,a))}}})(A),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleSort=function(e,t){a.props.onClickSort(e,t)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"dropdown col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4"},c.a.createElement("button",{className:"btn btn-info dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",style:{width:"100%"}},"Sort by ",c.a.createElement("span",{className:"caret"})),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1",style:{width:"100%"}},c.a.createElement("a",{className:"dropdown-item",role:"button",onClick:function(){return e.handleSort("name","asc")}},"Sort by Name: A -> Z"),c.a.createElement("a",{className:"dropdown-item",role:"button",onClick:function(){return e.handleSort("name","desc")}},"Sort by Name: Z -> A"),c.a.createElement("a",{className:"dropdown-item",role:"button",onClick:function(){return e.handleSort("price","asc")}},"Sort by price: low to high"),c.a.createElement("a",{className:"dropdown-item",role:"button",onClick:function(){return e.handleSort("price","desc")}},"Sort by price: high to low")))}}]),t}(r.Component),R=Object(j.b)(function(e){return{sort:e.sort}},function(e,t){return{onClickSort:function(t,a){e(function(e,t){return{type:"SORT_ITEM",orderBy:e,orderDir:t}}(t,a))}}})(P),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onClickSearch=function(){a.props.handleSearch(a.state.strSearch)},a.onClickClear=function(){a.setState={strSearch:""},a.props.handleSearch(a.state.strSearch)},a.handleChange=function(e){a.setState({strSearch:e.target.value})},a.state={strSearch:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.strSearch;return e=e||this.props.strSearch,c.a.createElement("div",{className:"col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4"},c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{value:e,onChange:this.handleChange,type:"text",className:"form-control",placeholder:"Search for..."}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{onClick:this.onClickSearch,className:"btn btn-info",type:"button"},"Search"),c.a.createElement("button",{onClick:this.onClickClear,className:"btn btn-warning",type:"button"},"Clear"))))}}]),t}(r.Component),F=Object(j.b)(function(e){return{strSearch:e.strSearch}},function(e,t){return{handleSearch:function(t){e(function(e){return{type:"CHANGE_SEARCH",strSearch:e}}(t))}}})(L),M=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row",style:{margin:"30px -15px"}},c.a.createElement("div",{className:"col-6 col-sm-12 col-md-12 col-lg-4 col-xl-4"},c.a.createElement("h2",null,"Poster")),c.a.createElement(R,null),c.a.createElement(F,null))}}]),t}(r.Component),B=a(12),G=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.product,a=e.match,n=t.images.length>0?t.images[0].src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg",r=""===t.price?0:t.price,l=""!==t.sale_price?c.a.createElement("span",{style:{textDecoration:"line-through",color:"#aaa"}},t.regular_price,".00$ "):"";return c.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3",style:{marginBottom:"20px"}},c.a.createElement("div",{className:"card box-product"},c.a.createElement(E.b,{to:"/shopping-cart-reactjs/product/".concat(t.id),match:a,product:t},c.a.createElement("img",{className:"card-img-top",src:n,alt:"Card image",style:{width:"100%"}})),c.a.createElement("div",{className:"card-body",style:{textAlign:"center"}},c.a.createElement("h4",null,c.a.createElement(h.b,{to:"/shopping-cart-reactjs/product/".concat(t.id),target:"_blank",className:"card-title"},t.name)),c.a.createElement("p",{className:"card-text"},l," ",r,".00 $"),c.a.createElement("button",{className:"btn btn-primary",style:{width:"100%"}},"ADD TO CART"))))}}]),t}(r.Component),I=a(25),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={products:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;k("wordpress-demo/wp-json/wc/v3/products","GET",null).then(function(t){e.setState({products:t.data})})}},{key:"render",value:function(){var e=this.state.products,t=this.props,a=t.strSearch,n=t.sort,r=n.orderBy,l=n.orderDir,o=null!==e?Object(B.a)(e):[];return e=Object(I.filter)(o,function(e){return Object(I.includes)(e.name.toLowerCase(),a.toLowerCase())}),e=Object(I.orderBy)(e,[r],[l]),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12",style:{marginBottom:"20px"}},c.a.createElement("h4",null,"Total: ",c.a.createElement("b",null,e.length)," item(s)")),this.showProducts(e))}},{key:"showProducts",value:function(e){var t=null;return null!==e&&e.length>0&&(t=e.map(function(e,t){return c.a.createElement(G,{key:t,product:e})})),t}}]),t}(r.Component),H=Object(j.b)(function(e){return{strSearch:e.strSearch,sort:e.sort}},null)(U),$=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(M,null),c.a.createElement(H,null))}}]),t}(r.Component),X=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(D,null)}},{key:"showArea",value:function(e){return!1===e.isLogin?c.a.createElement(D,null):!0===e.isLogin?c.a.createElement($,null):void 0}}]),t}(r.Component),W=Object(j.b)(function(e){return{user:e.user}},null)(X),Y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.item,t=""!==e.price?e.price:0,a=e.images.length>0?e.images[0].src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg";return c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},c.a.createElement("img",{src:a,alt:e.name,className:"img-fluid z-depth-0",style:{width:"100px"}})),c.a.createElement("td",null,c.a.createElement("h5",null,c.a.createElement("strong",null,e.name))),c.a.createElement("td",null,t,"$"),c.a.createElement("td",null,c.a.createElement("button",{type:"button",className:"btn btn-xs btn-primary",style:{marginRight:"5px"}},c.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"}),"\xa0 Update"),c.a.createElement("button",{type:"button",className:"btn btn-xs btn-danger","data-original-title":"Remove item"},c.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"})," \xa0 Delete")))}}]),t}(r.Component),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handToggleForm=function(){a.props.handToggleForm()},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.isShowForm;return c.a.createElement("div",{className:"row header-form"},c.a.createElement("div",{className:"col-12",style:{display:"flex",justifyContent:"space-between",marginBottom:"10px"}},c.a.createElement("h2",null,c.a.createElement("b",null,"Qu\u1ea3n l\xed s\u1ea3n ph\u1ea9m")),c.a.createElement("div",{className:"action-control"},c.a.createElement("button",{onClick:this.handToggleForm,type:"button",className:!1===e?"btn btn-info btn-block":"btn btn-danger btn-block"},c.a.createElement("i",{className:!1===e?"fa fa-plus":"fa fa-times","aria-hidden":"true"})," \xa0",!1===e?"Th\xeam s\u1ea3n ph\u1ea9m":"\u0110\xf3ng Form"))))}}]),t}(r.Component),V=Object(j.b)(function(e){return{isShowForm:e.isShowForm,itemSelected:e.itemSelected}},function(e,t){return{handToggleForm:function(){e({type:"ITEM_UNSELECT"}),e({type:"TOGGLE_FORM"})}}})(q),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onClickCancel=function(){a.props.handleCancel()},a.onChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;a.setState(Object(O.a)({},r,n))},a.onClickSubmit=function(e){e.preventDefault();var t=a.state,n=t.id,r={id:n,name:t.txtName,price:t.txtPrice,images:t.urlImages,description:t.txtDesc};n?a.props.onUpdateProduct(r):a.props.onAddProduct(r),a.props.handleCancel()},a.state={id:"",txtName:"",txtPrice:0,urlImages:[],txtDesc:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){if(!1===this.props.isShowForm)return null;var e=this.state,t=e.txtName,a=e.txtPrice,n=e.urlImages,r=e.txtDesc;return console.log("value: ",this.state),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("form",{onSubmit:this.onClickSubmit,style:{border:"1px solid #aaa",padding:"20px",marginBottom:"20px"}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"T\xean s\u1ea3n ph\u1ea9m"),c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Product Name",name:"txtName",value:t,onChange:this.onChange})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Gi\xe1 s\u1ea3n ph\u1ea9m"),c.a.createElement("input",{type:"number",className:"form-control",placeholder:"Product Price",name:"txtPrice",value:a,onChange:this.onChange})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"H\xecnh \u1ea3nh s\u1ea3n ph\u1ea9m"),c.a.createElement("input",{type:"file",className:"form-control",placeholder:"Product Images",name:"urlImages",value:n,onChange:this.onChange})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Chi ti\u1ebft s\u1ea3n ph\u1ea9m"),c.a.createElement("textarea",{type:"text",className:"form-control",name:"txtDesc",value:r,onChange:this.onChange})),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),c.a.createElement("button",{type:"button",className:"btn btn-light",onClick:this.onClickCancel},"Cancel"))))}}]),t}(r.Component),J=Object(j.b)(function(e){return{isShowForm:e.isShowForm,itemSelected:e.itemSelected}},function(e,t){return{onAddProduct:function(t){e(function(e){return function(t){return console.log("Product : ",e),k("wordpress-demo/wp-json/wc/v3/products","POST",e).then(function(e){console.log("Add Product : ",e),t(T(e.data))})}}(t))},handleCancel:function(){e({type:"CLOSE_FORM"})}}})(z),Q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={products:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;k("wordpress-demo/wp-json/wc/v3/products","GET",null).then(function(t){e.setState({products:t.data})})}},{key:"render",value:function(){var e=this.state.products;return c.a.createElement("div",{className:"container"},c.a.createElement(V,null),c.a.createElement(J,null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},c.a.createElement("h2",null,"Danh s\xe1ch s\u1ea3n ph\u1ea9m"),c.a.createElement("h4",null,"Total : ",c.a.createElement("b",null,e.length)," product(s)")),c.a.createElement("table",{className:"table table-hover"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"H\xecnh \u1ea3nh"),c.a.createElement("th",null,"S\u1ea3n Ph\u1ea9m"),c.a.createElement("th",null,"Gi\xe1"),c.a.createElement("th",null,"Action"))),c.a.createElement("tbody",null,this.showProducts(e))))))}},{key:"showProducts",value:function(e){var t=null;return null!==e&&e.length>0&&(t=e.map(function(e,t){return c.a.createElement(Y,{key:t,item:e})})),t}}]),t}(r.Component),Z=Object(j.b)(function(e){return{products:e.products}},function(e,t){return{handleEdit:function(){e({type:"OPEN_FORM"})},fetchAllProducts:function(){e(function(e){return n("wordpress-demo/wp-json/wc/v3/products","GET",null).then(function(t){e(S(t.data))})})},onDeleteProduct:function(t){e(function(e){return function(t){return n("wordpress-demo/wp-json/wc/v3/products/".concat(e),"DELETE",null).then(function(a){t(_(e))})}}(t))}}})(Q),K=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(Z,{match:this.props.match})}}]),t}(r.Component),ee=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row header-form"},c.a.createElement("div",{className:"col-12",style:{display:"flex",justifyContent:"space-between",marginBottom:"10px"}},c.a.createElement("h2",null,c.a.createElement("b",null,"Gi\u1ecf h\xe0ng ")),c.a.createElement("div",{className:"action-control"},c.a.createElement("button",{className:"btn btn-primary"},c.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}),"\xa0\xa0 Th\xeam s\u1ea3n ph\u1ea9m")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h2",null,"Danh s\xe1ch s\u1ea3n ph\u1ea9m"),c.a.createElement("table",{className:"table table-hover"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"H\xecnh \u1ea3nh"),c.a.createElement("th",null,"S\u1ea3n Ph\u1ea9m"),c.a.createElement("th",null,"Gi\xe1"),c.a.createElement("th",null,"S\u1ed1 l\u01b0\u1ee3ng"),c.a.createElement("th",null,"Action"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("img",{src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/T_4_front.jpg",alt:"image",style:{width:"100px"}})),c.a.createElement("td",{style:{verticalAlign:"middle"}},"Ship Your Idea"),c.a.createElement("td",{style:{verticalAlign:"middle"}},"25$"),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("input",{className:"form-control",type:"number"})),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("button",{className:"btn btn-danger btn-xs"},"X\xf3a"))),c.a.createElement("tr",null,c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("img",{src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/T_2_front.jpg",alt:"image",style:{width:"100px"}})),c.a.createElement("td",{style:{verticalAlign:"middle"}},"Premium Quality"),c.a.createElement("td",{style:{verticalAlign:"middle"}},"25$"),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("input",{className:"form-control",type:"number"})),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("button",{className:"btn btn-danger btn-xs"},"X\xf3a"))),c.a.createElement("tr",null,c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("img",{src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/T_4_front.jpg",alt:"image",style:{width:"100px"}})),c.a.createElement("td",{style:{verticalAlign:"middle"}},"Ninja Silhouette"),c.a.createElement("td",{style:{verticalAlign:"middle"}},"25$"),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("input",{className:"form-control",type:"number"})),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("button",{className:"btn btn-danger btn-xs"},"X\xf3a"))),c.a.createElement("tr",null,c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("img",{src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/T_1_front.jpg",alt:"image",style:{width:"100px"}})),c.a.createElement("td",{style:{verticalAlign:"middle"}},"Woo Logo"),c.a.createElement("td",{style:{verticalAlign:"middle"}},"25$"),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("input",{className:"form-control",type:"number"})),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("button",{className:"btn btn-danger btn-xs"},"X\xf3a"))),c.a.createElement("tr",null,c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("img",{src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/hoodie_2_front.jpg",alt:"image",style:{width:"100px"}})),c.a.createElement("td",{style:{verticalAlign:"middle"}},"Woo Ninja"),c.a.createElement("td",{style:{verticalAlign:"middle"}},"25$"),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("input",{className:"form-control",type:"number"})),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("button",{className:"btn btn-danger btn-xs"},"X\xf3a"))),c.a.createElement("tr",null,c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("img",{src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/hoodie_3_front.jpg",alt:"image",style:{width:"100px"}})),c.a.createElement("td",{style:{verticalAlign:"middle"}},"Woo Logo"),c.a.createElement("td",{style:{verticalAlign:"middle"}},"25$"),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("input",{className:"form-control",type:"number"})),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("button",{className:"btn btn-danger btn-xs"},"X\xf3a")))),c.a.createElement("tfoot",null,c.a.createElement("tr",null,c.a.createElement("td",null),c.a.createElement("td",null),c.a.createElement("td",null),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("b",null,"T\u1ed5ng: 150$")),c.a.createElement("td",{style:{verticalAlign:"middle"}},c.a.createElement("button",{className:"btn btn-success"},"Thanh to\xe1n"))))))))}}]),t}(r.Component),te=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(ee,{match:this.props.match})}}]),t}(r.Component),ae=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.product;return console.log("tabDes : ",e),c.a.createElement("div",{className:"container",style:{marginTop:"30px"}},c.a.createElement("ul",{className:"nav nav-tabs"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link active","data-toggle":"tab",href:"#Description"},"Description")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link","data-toggle":"tab",href:"#Reviews"}," Reviews (0)"))),c.a.createElement("div",{className:"tab-content"},c.a.createElement("div",{id:"Description",className:"container tab-pane active"},c.a.createElement("br",null),c.a.createElement("h3",null,"Description"),c.a.createElement("p",null,e.description)),c.a.createElement("div",{id:"Reviews",className:"container tab-pane fade"},c.a.createElement("br",null),c.a.createElement("h3",null,"Reviews"),c.a.createElement("p",null,"There are no reviews yet."),c.a.createElement("h3",null,'Be the first to review " ',e.name,' "'),c.a.createElement("p",null,"Your email address will not be published. Required fields are marked *"),c.a.createElement("p",null,"Your Rating"),c.a.createElement("p",null,c.a.createElement("span",{className:"fa fa-star-o","aria-hidden":"true",style:{marginRight:"5px"}}),c.a.createElement("span",{className:"fa fa-star-o","aria-hidden":"true",style:{marginRight:"5px"}}),c.a.createElement("span",{className:"fa fa-star-o","aria-hidden":"true",style:{marginRight:"5px"}}),c.a.createElement("span",{className:"fa fa-star-o","aria-hidden":"true",style:{marginRight:"5px"}}),c.a.createElement("span",{className:"fa fa-star-o","aria-hidden":"true",style:{marginRight:"5px"}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"Your review"},"Your review *"),c.a.createElement("textarea",{className:"form-control",rows:5,id:"review",defaultValue:""})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"form-group col-12 col-md-6"},c.a.createElement("label",{htmlFor:"name"},"Name *"),c.a.createElement("textarea",{className:"form-control",rows:5,id:"name",defaultValue:""})),c.a.createElement("div",{className:"form-group col-12 col-md-6"},c.a.createElement("label",{htmlFor:"email"},"Email *"),c.a.createElement("textarea",{className:"form-control",rows:5,id:"email",defaultValue:""}))),c.a.createElement("div",{className:"form-group form-check"},c.a.createElement("label",{className:"form-check-label"},c.a.createElement("input",{className:"form-check-input",type:"checkbox"}),"Save my name, email, and website in this browser for the next time I comment.")),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))}}]),t}(r.Component),ne=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={relatedProduct:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){var e=this,t=this.props.product;if(void 0!==t){var a=t.join(",");k("wordpress-demo/wp-json/wc/v3/products?include=".concat(a),"GET",null).then(function(t){e.setState({relatedProduct:t.data})})}}},{key:"render",value:function(){var e=this.state.relatedProduct;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row",style:{margin:"30px -15px"}},c.a.createElement("div",{className:"col-12"},c.a.createElement("p",{style:{height:"2px",width:"50px",background:"#000"}}),c.a.createElement("h2",null,"Related products"))),c.a.createElement("div",{className:"row"},this.showRelatedProducts(e)))}},{key:"showRelatedProducts",value:function(e){var t=null;return null!==e&&e.length>0&&(t=e.map(function(e,t){return c.a.createElement(G,{key:t,product:e})})),t}}]),t}(r.Component),re=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={product:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params.id;k("wordpress-demo/wp-json/wc/v3/products/".concat(t),"GET",null).then(function(t){e.setState({product:t.data})})}},{key:"render",value:function(){var e=this.state.product,t=e.images,a=0===e.length?"":e.categories[0].name,n=""!==e.sale_price?c.a.createElement("span",{style:{textDecoration:"line-through",color:"#aaa"}},e.regular_price,".00$ "):"";return c.a.createElement("div",{className:"product-detail-container"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 col-sm-6"},c.a.createElement("div",{className:"carousel slideimages","data-ride":"carousel"},c.a.createElement("div",{className:"carousel-inner"},this.showImages(t)))),c.a.createElement("div",{className:"col-12 col-sm-6"},c.a.createElement("h1",null,e.name),c.a.createElement("h3",{className:"card-text"},n,"  ",""===e.price?0:e.price,".00 $"),c.a.createElement("p",null,e.description),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("input",{type:"number",style:{marginRight:"10px",padding:"10px"}}),c.a.createElement("button",{type:"button",className:"btn btn-primary"},"Add to cart")),c.a.createElement("p",null,"SKU:",e.sku),c.a.createElement("p",null,"Category:  ",c.a.createElement(h.b,{to:"/shopping-cart-reactjs/products/categories"},a))))),c.a.createElement(ae,{product:e}),c.a.createElement(ne,{product:e.related_ids}))}},{key:"showImages",value:function(e){var t=null;return void 0!==e&&(t=e.length>0?e.map(function(e,t){return c.a.createElement("div",{className:0===t?"carousel-item active":"carousel-item",key:t},c.a.createElement("img",{src:e.src,alt:e.name,style:{width:"100%"}}))}):(e=[{alt:"",date_created:"2019-05-16T03:22:32",date_created_gmt:"2019-05-16T03:22:32",date_modified:"2019-05-16T03:22:32",date_modified_gmt:"2019-05-16T03:22:32",id:62,name:"hoodie_3_front.jpg",src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg"},{alt:"",date_created:"2019-05-16T03:22:33",date_created_gmt:"2019-05-16T03:22:33",date_modified:"2019-05-16T03:22:33",date_modified_gmt:"2019-05-16T03:22:33",id:63,name:"hoodie_3_back.jpg",src:"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/Poster_4_flat.jpg"}]).map(function(e,t){return c.a.createElement("div",{className:0===t?"carousel-item active":"carousel-item",key:t},c.a.createElement("img",{src:e.src,alt:e.name,style:{width:"100%"}}))})),t}}]),t}(r.Component),ce=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.match;return c.a.createElement(re,{match:e})}}]),t}(r.Component),le=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={categories:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;k("wordpress-demo/wp-json/wc/v3/products/categories","GET",null).then(function(t){e.setState({categories:t.data})})}},{key:"render",value:function(){var e=this.state.categories;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12",style:{marginBottom:"20px",display:"flex",justifyContent:"space-between"}},c.a.createElement("h1",null,"List Categories"),c.a.createElement("h5",{style:{marginTop:"15px"}},"Total: ",c.a.createElement("b",null,e.length)," item(s)"))),c.a.createElement("div",{className:"row"},this.showCategories(e)))}},{key:"showCategories",value:function(e){var t=null;return null!==e&&e.length>0&&(t=e.map(function(e,t){return c.a.createElement("div",{className:"col-12 col-sm-4 col-md-3 col-lg-3 list-item",key:t,style:{marginBottom:"20px"}},c.a.createElement("img",{style:{width:"100px",height:"100px"},alt:e.name,src:null===e.image?"http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/hoodie_4_front.jpg":e.image}),c.a.createElement("h4",null,c.a.createElement(h.b,{to:"/shopping-cart-reactjs/products/categories/".concat(e.id),category:e},e.name)))})),t}}]),t}(r.Component),oe=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(le,null)}}]),t}(r.Component),se=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleBack=function(){a.props.history.goBack()},a.state={products:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.products,a=this.props.match,n=parseInt(a.params.id);k("wordpress-demo/wp-json/wc/v3/products","GET",null).then(function(a){for(var r=0;r<10;r++)a.data.filter(function(e){e&&r<e.categories.length&&(e.categories[r].id===n&&t.push(e))});e.setState({products:t})})}},{key:"render",value:function(){var e=this.state.products;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12",style:{marginBottom:"20px",display:"flex"}},c.a.createElement("button",{className:"btn btn-light",onClick:this.handleBack},c.a.createElement("i",{className:"fa fa-chevron-circle-left","aria-hidden":"true"})," \xa0Back"),c.a.createElement("h4",{style:{marginLeft:"10px"}},"Total: ",c.a.createElement("b",null,e.length)," item(s)")),this.showProducts(e)))}},{key:"showProducts",value:function(e){var t=null;return null!==e&&e.length>0&&(t=e.map(function(e,t){return c.a.createElement(G,{key:t,product:e})})),t}}]),t}(r.Component),ie=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match,a=e.history;return c.a.createElement(se,{match:t,history:a})}}]),t}(r.Component),me=[{path:"/shopping-cart-reactjs/",exact:!0,main:function(){return c.a.createElement(y,null)}},{path:"/shopping-cart-reactjs/product",exact:!0,main:function(e){var t=e.match;return c.a.createElement($,{match:t})}},{path:"/shopping-cart-reactjs/product/:id",exact:!0,main:function(e){var t=e.match;return c.a.createElement(ce,{match:t})}},{path:"/shopping-cart-reactjs/products/categories",exact:!0,main:function(e){var t=e.match,a=e.history;return c.a.createElement(oe,{match:t,history:a})}},{path:"/shopping-cart-reactjs/products/categories/:id",exact:!0,main:function(e){var t=e.match,a=e.history;return c.a.createElement(ie,{match:t,history:a})}},{path:"/shopping-cart-reactjs/admin",exact:!0,main:function(e){var t=e.match;return c.a.createElement(K,{match:t})}},{path:"/shopping-cart-reactjs/shopping-cart",exact:!0,main:function(e){var t=e.match;return c.a.createElement(te,{match:t})}},{path:"/shopping-cart-reactjs/login",exact:!0,main:function(){return c.a.createElement(W,null)}}],ue=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"header-container fixed-top"},c.a.createElement(f,null)),c.a.createElement("div",{className:"product-container",style:{marginTop:"200px"}},this.showRoute(me))))}},{key:"showRoute",value:function(e){var t=null;return e.length>0&&(t=e.map(function(e,t){return c.a.createElement(E.b,{key:t,exact:e.exact,path:e.path,component:e.main})})),c.a.createElement(E.d,null,t)}}]),t}(r.Component),de=a(16),pe=a(40),he={isLogin:!1,username:"",password:""},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":return console.log("action : ",t),Object(pe.a)({},e);default:return e}},be=[{to:"/shopping-cart-reactjs/",name:"Home"}],ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0,a=t.to,n=t.name;switch(t.type){case"GO_HOME":return e=[{to:"/shopping-cart-reactjs/",name:"Home"}],Object(B.a)(e);case"GO_PRODUCT":return e[1]={to:"/shopping-cart-reactjs/product",name:"Product"},e.length>2&&e.splice(-1,1),Object(B.a)(e);case"GO_PRODUCT_ITEM":return e[2]={to:a,name:n},e.length>2&&e.splice(-1,1),Object(B.a)(e);default:return e}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCH":return t.strSearch;default:return e}},ve={orderBy:"price",orderDir:"desc"},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0,a=t.orderBy,n=t.orderDir;switch(t.type){case"SORT_ITEM":return{orderBy:a,orderDir:n};default:return e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"CLOSE_FORM":return e=!1;case"OPEN_FORM":return e=!0;case"TOGGLE_FORM":return e=!e;default:return e}},Oe=[],we=function(e,t){var a=-1;return e.forEach(function(e,n){e.id===t&&(a=n)}),a},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0,a=-1,n=t.id,r=t.product;switch(t.type){case"FETCH_PRODUCTS":return e=t.products,Object(B.a)(e);case"DELETE_PRODUCT":return a=we(e,n),e.splice(a,1),Object(B.a)(e);case"ADD_PRODUCT":return e.push(t.product),Object(B.a)(e);case"UPDATE_PRODUCT":return e[a=we(e,r.id)]=r,Object(B.a)(e);default:return Object(B.a)(e)}},xe={name:"",id:"",level:0},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEM_SELECTED":return t.item;case"ITEM_UNSELECT":return xe;default:return e}},ke=Object(de.c)({user:Ee,breadcrumb:ge,strSearch:fe,sort:ye,isShowForm:je,product:Ne,itemSelected:Ce});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.d,_e=Object(de.e)(ke,Se(Object(de.a)(s.a)));o.a.render(c.a.createElement(j.a,{store:_e},c.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.e0f777ac.chunk.js.map