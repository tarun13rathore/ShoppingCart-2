(this.webpackJsonpreduxshoppingcart=this.webpackJsonpreduxshoppingcart||[]).push([[0],{12:function(t,e,c){},30:function(t,e,c){},31:function(t,e,c){},38:function(t,e,c){"use strict";c.r(e);var s=c(0),a=c.n(s),r=c(17),i=c.n(r),n=(c(30),c(10)),o=c(3),d=(c(31),c(4)),l=c(11),j=(c(12),c(1)),u=Object(d.b)((function(t){return{cart:t.shop.cart}}))((function(t){var e=t.cart,c=Object(s.useState)(0),a=Object(l.a)(c,2),r=a[0],i=a[1];return Object(s.useEffect)((function(){var t=0;e.forEach((function(e){t+=e.qty})),i(t)}),[e,r]),Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)(n.b,{to:"/",children:Object(j.jsx)("h2",{className:"navbar__logo",children:"Redux Shopping Cart"})}),Object(j.jsxs)(n.b,{to:"/cart",children:[Object(j.jsx)("div",{className:"container"}),0===r?Object(j.jsx)("i",{class:"fas fa-cart-arrow-down cart__counter"}):Object(j.jsx)("i",{class:"fas fa-cart-arrow-down cart__counter",children:r})]})]})})),p="ADD_TO_CART",m="ADJUST_ITEM_QTY",b="REMOVE_FROM_CART",h="LOAD_CURRENT_ITEM",O=function(t){return{type:p,payload:{id:t}}},_=Object(d.b)(null,(function(t){return{addToCart:function(e){return t(O(e))},loadCurrentItem:function(e){return t(function(t){return{type:h,payload:t}}(e))}}}))((function(t){var e=t.product,c=t.addToCart,s=t.loadCurrentItem;return Object(j.jsxs)("div",{className:"product",children:[Object(j.jsx)("img",{className:"product__image",src:e.image,alt:e.title}),Object(j.jsxs)("div",{className:"product__details",children:[Object(j.jsx)("p",{className:"details__title",children:e.title}),Object(j.jsx)("p",{className:"details__desc",children:e.description}),Object(j.jsxs)("p",{className:"details__price",children:["Rs/- ",e.price]})]}),Object(j.jsxs)("div",{className:"product__buttons",children:[Object(j.jsx)(n.b,{to:"/product/".concat(e.id),children:Object(j.jsx)("button",{onClick:function(){return s(e)},className:"buttons__btn styles.buttons__view",children:"View Item"})}),Object(j.jsx)("button",{onClick:function(){return c(e.id)},className:"buttons__btn buttons__add",children:"Add To Cart"})]})]})})),x=Object(d.b)((function(t){return{products:t.shop.products}}))((function(t){var e=t.products;return Object(j.jsx)("div",{className:e,children:e.map((function(t){return Object(j.jsx)(_,{product:t},t.id)}))})})),g=Object(d.b)(null,(function(t){return{adjustQty:function(e,c){return t({type:m,payload:{id:e,qty:c}})},removeFromCart:function(e){return t({type:b,payload:{id:e}})}}}))((function(t){var e=t.item,c=t.adjustQty,a=t.removeFromCart,r=Object(s.useState)(e.qty),i=Object(l.a)(r,2),n=i[0],o=i[1];return Object(j.jsxs)("div",{className:"cartItem",children:[Object(j.jsx)("img",{className:"cartItem__image",src:e.image,alt:e.title}),Object(j.jsxs)("div",{className:"cartItem__details",children:[Object(j.jsx)("p",{className:"details__title",children:e.title}),Object(j.jsx)("p",{className:"details__desc",children:e.description}),Object(j.jsxs)("p",{className:"details__price",children:["Rs/- ",e.price]})]}),Object(j.jsxs)("div",{className:"cartItem__actions",children:[Object(j.jsxs)("div",{className:"cartItem__qty",children:[Object(j.jsx)("label",{htmlFor:"qty",children:"Qty"}),Object(j.jsx)("input",{min:"1",type:"number",id:"qty",name:"qty",value:n,onChange:function(t){o(t.target.value),c(e.id,t.target.value)}})]}),Object(j.jsx)("i",{className:"fas fa-trash-alt actions__deleteItemBtn ",onClick:function(){return a(e.id)}})]})]})})),f=Object(d.b)((function(t){return{cart:t.shop.cart}}))((function(t){var e=t.cart,c=Object(s.useState)(0),a=Object(l.a)(c,2),r=a[0],i=a[1],n=Object(s.useState)(0),o=Object(l.a)(n,2),d=o[0],u=o[1];return Object(s.useEffect)((function(){var t=0,c=0;e.forEach((function(e){t+=e.qty,c+=e.qty*e.price})),u(t),i(c)}),[e,r,d,i,u]),Object(j.jsxs)("div",{className:"cart",children:[Object(j.jsx)("div",{className:"cart__items",children:e.map((function(t){return Object(j.jsx)(g,{item:t},t.id)}))}),Object(j.jsxs)("div",{className:"cart__summary",children:[Object(j.jsx)("h4",{className:"summary__title",children:"Cart Summary"}),Object(j.jsxs)("div",{className:"summary__price",children:[Object(j.jsxs)("span",{children:["TOTAL: (",d," items)"]}),Object(j.jsxs)("span",{children:["Rs/- ",r]})]}),Object(j.jsx)("button",{className:"summary__checkoutBtn",children:"Proceed To Checkout"})]})]})})),y=Object(d.b)((function(t){return{current:t.shop.currentItem}}),(function(t){return{addToCart:function(e){return t(O(e))}}}))((function(t){var e=t.current,c=t.addToCart;return Object(j.jsxs)("div",{className:"singleItem",children:[Object(j.jsx)("img",{className:"singleItem__image",src:e.image,alt:e.title}),Object(j.jsxs)("div",{className:"singleItem__details",children:[Object(j.jsx)("p",{className:"details__title",children:e.title}),Object(j.jsx)("p",{className:"details__description",children:e.description}),Object(j.jsxs)("p",{className:"details__price",children:["Rs/- ",e.price]}),Object(j.jsx)("button",{onClick:function(){return c(e.id)},className:"details__addBtn",children:"Add To Cart"})]})]})}));var v=Object(d.b)((function(t){return{current:t.shop.currentItem}}))((function(t){var e=t.current;return Object(j.jsx)(n.a,{children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(u,{}),Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/",component:x}),Object(j.jsx)(o.b,{exact:!0,path:"/cart",component:f}),e?Object(j.jsx)(o.b,{exact:!0,path:"/product/:id",component:y}):Object(j.jsx)(o.a,{to:"/"})]})]})})})),N=c(14),I=c(24),S=c(25),C=c(5),T={products:[{id:1,title:"Samsung S21",description:"black in color",price:"2500",image:"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:2,title:"Samsung M21",description:"white in color",price:"2300",image:"https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:3,title:"Redmi 9",description:"black in color",price:"3500",image:"https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg"},{id:4,title:"Iphone 12",description:"Best mobile ever",price:"9050",image:"https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg"},{id:5,title:"Samsung S21",description:"black in color",price:"2500",image:"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:6,title:"Redmi 9",description:"black in color",price:"3500",image:"https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg"},{id:7,title:"Samsung S21",description:"black in color",price:"2500",image:"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:8,title:"Iphone 12",description:"Best mobile ever",price:"9050",image:"https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg"},{id:9,title:"Samsung S21",description:"black in color",price:"2500",image:"https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}],cart:[],currentItem:null},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:var c=t.products.find((function(t){return t.id===e.payload.id})),s=t.cart.find((function(t){return t.id===e.payload.id}));return Object(C.a)(Object(C.a)({},t),{},{cart:s?t.cart.map((function(t){return t.id===e.payload.id?Object(C.a)(Object(C.a)({},t),{},{qty:t.qty+1}):t})):[].concat(Object(S.a)(t.cart),[Object(C.a)(Object(C.a)({},c),{},{qty:1})])});case b:return Object(C.a)(Object(C.a)({},t),{},{cart:t.cart.filter((function(t){return t.id!==e.payload.id}))});case m:return Object(C.a)(Object(C.a)({},t),{},{cart:t.cart.map((function(t){return t.id===e.payload.id?Object(C.a)(Object(C.a)({},t),{},{qty:+e.payload.qty}):t}))});case h:return Object(C.a)(Object(C.a)({},t),{},{currentItem:e.payload});default:return t}},k=Object(N.combineReducers)({shop:w}),q=Object(N.createStore)(k,Object(I.composeWithDevTools)());i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d.a,{store:q,children:Object(j.jsx)(v,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.44c9df5d.chunk.js.map