(window["webpackJsonplearn-d3"]=window["webpackJsonplearn-d3"]||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},24:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),l=(n(23),n(24),n(1)),o=[10,20],u=l.d().domain([0,l.c(o)]).range([0,420]),s=function(e){return Object(a.useEffect)(function(){l.e(".bar-chart > *").remove(),l.e(".bar-chart").selectAll("div").data(o).enter().append("div").style("width",function(e){return u(e)+"px"}).text(function(e){return e})}),r.a.createElement("div",{className:"bar-chart"},"Bar Chart")},d=[4,8,15,16,23,42],h=l.d().domain([0,l.c(d)]).range([0,420]),p=function(e){return Object(a.useEffect)(function(){l.e(".bar-chart-part2 > *").remove(),function(e){var t=l.e(".bar-chart-part2").attr("width",420).attr("height",20*d.length).selectAll("g").data(d).enter().append("g").attr("transform",function(e,t){return"translate(0,"+20*t+")"});t.append("rect").attr("width",h).attr("height",19),t.append("text").attr("x",function(e){return h(e)-3}).attr("y",10).attr("dy",".35em").text(function(e){return e})}()}),r.a.createElement("div",null,"Bar Chart Part 2",r.a.createElement("div",null,r.a.createElement("svg",{className:"bar-chart-part2"})))},m=function(){return Object(a.useEffect)(function(){l.e(".circle > *").remove(),function(){var e=l.e(".circle").selectAll("circle").data([32,57,112,293]).enter().append("circle");e.attr("cy",60),e.attr("cx",function(e,t){return 100*t+30}),e.attr("r",function(e){return Math.sqrt(e)})}()}),r.a.createElement("div",null,"Circle",r.a.createElement("div",null,r.a.createElement("svg",{className:"circle",width:"720",height:"120"})))},f=n(15),g=n(42),v=function(e){return r.a.createElement("g",null,e.data.map(function(e){return function(t,n){var a={cx:e.xScale(t[0]),cy:e.yScale(t[1]),r:2,key:n};return r.a.createElement("circle",a)}}(e)))},E=n(11),x=n(7),b=n(12),w=n(13),y=n(16),k=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"renderAxis",value:function(){if("x"===this.props.ax)var e=l.a(this.props.xScale).ticks(5);else if("y"===this.props.ax)e=l.b(this.props.yScale).ticks(5);var t=this.refs.axis;l.e(t).call(e)}},{key:"render",value:function(){return r.a.createElement("g",{className:"x"===this.props.ax?"xAxis":"yAxis",ref:"axis",transform:"x"===this.props.ax?"translate(0, ".concat(this.props.height-this.props.padding,")"):"translate(".concat(this.props.padding,", 0)")})}}]),t}(a.Component),j=function(e){return l.d().domain([0,(t=e.data,l.c(t,function(e){return e[0]}))]).range([e.padding,e.width-2*e.padding]);var t},O=function(e){return l.d().domain([0,(t=e.data,l.c(t,function(e){return e[1]}))]).range([e.height-e.padding,e.padding]);var t},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];console.log("props",e);var t={xScale:j(e),yScale:O(e)};return r.a.createElement("svg",{width:e.width,height:e.height},r.a.createElement(v,Object.assign({},e,t)),r.a.createElement(k,Object.assign({ax:"x"},e,t)),r.a.createElement(k,Object.assign({ax:"y"},e,t)))},S={width:500,height:300,padding:30},N=function(){return Math.floor(1e3*Math.random())},C=function(){return Array.apply(null,{length:50}).map(function(){return[N(),N()]})},B=function(){var e=Object(a.useState)({data:C()}),t=Object(f.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,"Scatter Plot",r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(A,Object.assign({},n,S))),r.a.createElement(g.a,{variant:"contained",onClick:function(){c({data:C()})}},"Randomize Data")))};var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("a",{className:"App-link",href:"https://github.com/d3/d3/wiki/Tutorials",target:"_blank",rel:"noopener noreferrer"},"Learn D3")),r.a.createElement(s,null),r.a.createElement(p,null),r.a.createElement(m,null),r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.ef9eb91a.chunk.js.map