(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(7),o=c.n(n),a=c(2),s=c(3),i=c(5),l=c(4),r=c(1),u=c.n(r),m=(c(12),c(13),c(0)),h=function(t){Object(i.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={time:new Date},t}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.state.time.toLocaleTimeString(),t.setState({time:new Date})}),1e3)}},{key:"render",value:function(){var t=this.props.name,e=this.state.time;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("h2",{className:"Clock__name",children:t}),Object(m.jsxs)("p",{className:"Clock__time",children:["Current time:"," ",e.toLocaleTimeString(),console.log(e.toLocaleTimeString())]})]})})}}]),c}(u.a.Component),b=function(t){Object(i.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!1,clockName:0},t.setRandomName=function(){t.state.isClockVisible&&t.setState((function(t){var e=Math.trunc(10*Math.random()+1);return console.log("The Clock was renamed from ".concat(t.clockName," to ").concat(e)),{clockName:e}}))},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t}return Object(s.a)(c,[{key:"componentDidMount",value:function(){this.setState({isClockVisible:!0})}},{key:"render",value:function(){var t=this.state,e=t.isClockVisible,c=t.clockName,n=this.setRandomName,o=this.hideClock,a=this.showClock;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"App__title",children:"React clock"}),e?Object(m.jsx)(h,{name:c}):Object(m.jsx)("p",{className:"App__hint",children:'Press "Show Clock" button to see the clock'}),Object(m.jsxs)("div",{className:"App__buttons",children:[Object(m.jsx)("button",{type:"button",className:"App__button",onClick:a,children:"Show Clock"}),Object(m.jsx)("button",{type:"button",className:"App__button",onClick:o,children:"Hide Clock"}),Object(m.jsx)("button",{type:"button",className:"App__button",onClick:n,children:"Set random name"})]})]})}}]),c}(u.a.Component);o.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4749995b.chunk.js.map