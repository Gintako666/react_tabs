(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var c=a(4),n=a.n(c),s=a(2),i=a(1),b=(a(10),a(11),a(12),a(5)),d=a.n(b),r=a(0),l=function(t){var e=t.tab,a=t.setActiveTabs,c=t.setSelektedTab;return Object(r.jsx)("a",{href:"#tab-1","data-cy":"TabLink",onClick:function(){c(e.id),a(e.id)},children:e.title})},o=function(t){var e=t.tabs,a=t.setSelektedTab,c=Object(i.useState)("tab-1"),n=Object(s.a)(c,2),b=n[0],o=n[1];return Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsx)("li",{className:d()({"is-active":b===t.id}),"data-cy":"Tab",children:Object(r.jsx)(l,{tab:t,setActiveTabs:o,setSelektedTab:a})},t.id)}))})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t=Object(i.useState)("tab-1"),e=Object(s.a)(t,2),a=e[0],c=e[1],n=j.find((function(t){return t.id===a}));return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsxs)("h1",{className:"title",children:["Selected tab is"," ",n&&n.title]}),Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)(o,{tabs:j,setSelektedTab:c})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:n&&n.content})]})]})};n.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.472e8131.chunk.js.map