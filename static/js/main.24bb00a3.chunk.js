(this["webpackJsonpreact-food-recipe"]=this["webpackJsonpreact-food-recipe"]||[]).push([[0],{19:function(e,a,t){e.exports=t(49)},24:function(e,a,t){},3:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),i=t.n(r),l=(t(24),t(4)),s=t.n(l),o=t(16),u=t(2),m=(t(3),function(e){var a=e.search,t=e.onInputChange,n=e.onSearchClick;return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{className:"display-1 name"},c.a.createElement("i",{class:"material-icons brand-icon"},"fastfood")," Food Recipe"),c.a.createElement("div",{class:"input-group mx-auto xyz"},c.a.createElement("input",{type:"text",class:"form-control",placeholder:"Search Your Recipe...",value:a,onChange:t}),c.a.createElement("div",{class:"input-group-append"},c.a.createElement("button",{className:"btn btn-dark",onClick:n},"Search Recipe"))))}),d=function(e){var a=e.name,t=e.image,n=e.ingredientLines,r=1;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card py-3 px-2 text-center blocks",style:{minHeight:"70vh"}},c.a.createElement("a",{className:"btn round","data-toggle":"collapse",href:"#id".concat(e.ids),role:"button","aria-expanded":"true","aria-controls":"collapseExample"},c.a.createElement("img",{src:t,className:"img-fluid w-80 mx-auto rounded-circle"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h2",null,a))),c.a.createElement("div",{className:"collapse",id:"id".concat(e.ids)},c.a.createElement("ul",{className:"list-group list-group-flush"},n.map((function(e){return c.a.createElement("li",{key:r++,className:"list-group-item"},e)}))))))},p=function(e){var a=e.recipes,t=1,n=1;return c.a.createElement("div",{className:"card-columns"},a.map((function(e){return c.a.createElement(d,{key:t++,ids:n++,name:e.recipe.label,image:e.recipe.image,ingredientLines:e.recipe.ingredientLines})})))},f=t(17),E=t.n(f),b=t(18),g=t.n(b);var h=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)("Truffle"),l=Object(u.a)(i,2),d=l[0],f=l[1],b=Object(n.useState)([]),h=Object(u.a)(b,2),v=h[0],N=h[1];Object(n.useEffect)((function(){k()}),[]);var k=function(){var e=Object(o.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("bdee668d","&app_key=").concat("e75d598b037d481766eccbb6fe5102ff"));case 2:a=e.sent,x(a.data.hits),r(!0),setTimeout((function(){r(!1)}),2e3);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e){e.pop(),console.log(e),N(e)};return c.a.createElement("div",{className:"App"},c.a.createElement(m,{search:d,onInputChange:function(e){f(e.target.value)},onSearchClick:function(){k()}}),t?c.a.createElement("div",{className:"Loader"},c.a.createElement(g.a,{color:"#fb8d34",loading:!0,size:40})):c.a.createElement("div",{className:"container-fluid abc"},c.a.createElement(p,{recipes:v})))};i.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.24bb00a3.chunk.js.map