(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{JJRp:function(t,e,o){"use strict";function n(t,e){const o=new XMLHttpRequest;o.responseType="json",o.open("get",t,!0),o.onload=()=>{if(!(o.status>=200&&o.status<300))throw new Error(o.statusText);e(o.response)},o.send()}o.d(e,"a",function(){return n})},Lrro:function(t,e,o){"use strict";(function(t){var n=o("Xu5n"),i=o("4mld"),r=o("JW8z"),s=o("MT78"),a=o.n(s);!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o("0cfB")).enterModule;e&&e(t)}();var c=function(t,e){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};function h(t,e){function o(){this.constructor=t}c(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}var p=function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)},l=function t(e,o){return Object.keys(o).forEach(function(n){p(o[n])&&p(e[n])?t(e[n],o[n]):e[n]=o[n]}),e},u=function(t,e){for(var o=arguments,n=[],i=2;i<arguments.length;i++)n[i-2]=o[i];return function(){for(var o=arguments,i=[],r=0;r<arguments.length;r++)i[r]=o[r];return t.apply(e,n.concat(Array.prototype.slice.call(i)))}},d=function(t,e){for(var o,n=0,i=t.length;n<i;n++)if(t[n].seriesIndex===e.seriesIndex){o=n;break}return void 0===o?t.push(e):t[o]=e,t},g=function(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-[1e3]+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()};function f(t,e){t.forEach(function(t){e[t]&&(e[t]=e[t].bind(e))})}function y(t){return t&&t.parentNode?t.parentNode.removeChild(t):null}function v(t,e){var o=new MouseEvent(t,{button:e.pointerEvent.button,buttons:e.pointerEvent.buttons,clientX:e.pointerEvent.clientX,clientY:e.pointerEvent.clientY,zrX:e.pointerEvent.offsetX,zrY:e.pointerEvent.offsetY,movementX:e.pointerEvent.movementX,movementY:e.pointerEvent.movementY,relatedTarget:e.pointerEvent.relatedTarget,screenX:e.pointerEvent.screenX,screenY:e.pointerEvent.screenY,view:window});return o.zrX=e.pointerEvent.offsetX,o.zrY=e.pointerEvent.offsetY,o.event=o,o}var m=function(t){return!t.UTF8Encoding},E=function(t,e,o){for(var n=[],i=[e[0],e[1]],r=i[0],s=i[1],a=0;a<t.length;a+=2){var c=t.charCodeAt(a)-64,h=t.charCodeAt(a+1)-64;c=c>>1^-(1&c),h=h>>1^-(1&h),r=c+=r,s=h+=s,n.push([c/o,h/o])}return n},w=function(t){if(m(t))return t;var e=t.UTF8Scale;null==e&&(e=1024);for(var o=t.features,n=0;n<o.length;n++)for(var i=o[n].geometry,r=[i.coordinates,i.encodeOffsets],s=r[0],a=r[1],c=0;c<s.length;c++){var h=s[c];if("Polygon"===i.type)s[c]=E(h,a[c],e);else if("MultiPolygon"===i.type)for(var p=0;p<h.length;p++){var l=h[p];h[p]=E(l,a[c][p],e)}}return t.UTF8Encoding=!1,t};function b(t){var e=w(t);return{type:"FeatureCollection",crs:{},features:a.a.util.map(a.a.util.filter(e.features,function(t){return t.geometry&&t.properties&&t.geometry.coordinates.length>0}),function(t){var e=t.properties,o=t.geometry,n=o.coordinates,i=[];return"Polygon"===o.type&&i.push(n[0]),"MultiPolygon"===o.type&&a.a.util.each(n,function(t){t[0]&&i.push(t[0])}),{properties:e,type:"Feature",geometry:{type:"Polygon",coordinates:i}}})}}var _=function(t,e,o){return e.center=o.dataToPoint(e.coordinates),e},j=function(t,e,o){return p(t.grid)&&!Array.isArray(t.grid)||Array.isArray(t.grid)&&(t.grid=t.grid.map(function(e,n){var i=o.dataToPoint(t.series[n].coordinates);return e.left=i[0]-parseFloat(e.width)/2,e.top=i[1]-parseFloat(e.height)/2,e})),e},$=function(t,e,o){return p(t.grid)&&!Array.isArray(t.grid)||Array.isArray(t.grid)&&(t.grid=t.grid.map(function(e,n){var i=o.dataToPoint(t.series[n].coordinates);return e.left=i[0]-parseFloat(e.width)/2,e.top=i[1]-parseFloat(e.height)/2,e})),e},x=Object.freeze({pie:_,bar:j,line:$}),O={forcedRerender:!1,forcedPrecomposeRerender:!1,hideOnZooming:!1,hideOnMoving:!1,hideOnRotating:!1,convertTypes:["pie","line","bar"],insertFirst:!1,stopEvent:!1,polyfillEvents:!0},S=function(t){function e(e,o,n){var i=this,r=Object.assign(O,o);return(i=t.call(this,r)||this)._options=r,i._chartOptions=e,i.$chart=null,i.$container=void 0,i._isRegistered=!1,i._initEvent=!1,i._incremental=[],i._coordinateSystem=null,i.coordinateSystemId="",f(["redraw","onResize","onZoomEnd","onCenterChange","onDragRotateEnd","onMoveStart","onMoveEnd","mouseDown","mouseUp","onClick"],i),n&&i.setMap(n),i}return h(e,t),e.prototype.appendTo=function(t){this.setMap(t)},e.prototype.getMap=function(){return this._map},e.prototype.setMap=function(t){var e=this;if(!(t&&t instanceof n.a))throw new Error("not ol map object");this._map=t,this._map.once("postrender",function(){e.handleMapChanged()}),this._map.renderSync()},e.prototype.getChartOptions=function(){return this._chartOptions},e.prototype.setChartOptions=function(t){return void 0===t&&(t={}),this._chartOptions=t,this.clearAndRedraw(),this},e.prototype.appendData=function(t,e){return void 0===e&&(e=!0),t&&(e&&(this._incremental=d(this._incremental,{data:t.data,seriesIndex:t.seriesIndex})),this.$chart.appendData({data:t.data.copyWithin(),seriesIndex:t.seriesIndex})),this},e.prototype.clear=function(){this._incremental=[],this.$chart&&this.$chart.clear()},e.prototype.remove=function(){this.clear(),this.$chart&&this.$chart.dispose(),this._initEvent&&this.$container&&(this.$container&&y(this.$container),this.unBindEvent()),delete this.$chart,delete this._map},e.prototype.show=function(){this.setVisible(!0)},e.prototype.hide=function(){this.setVisible(!1)},e.prototype.isVisible=function(){return this.$container&&"none"!==this.$container.style.display},e.prototype.showLoading=function(){this.$chart&&this.$chart.showLoading()},e.prototype.hideLoading=function(){this.$chart&&this.$chart.hideLoading()},e.prototype.setZIndex=function(t){this.$container&&("number"==typeof t&&(t=String(t)),this.$container.style.zIndex=t)},e.prototype.getZIndex=function(){return this.$container&&this.$container.style.zIndex},e.prototype.setVisible=function(t){if(t)this.$container&&(this.$container.style.display=""),(e=this.get("options"))&&(this.setChartOptions(e),this.unset("options"));else{this.$container&&(this.$container.style.display="none");var e=this.getChartOptions();this.set("options",e),this.clear(),this.setChartOptions({})}},e.prototype.render=function(){!this.$chart&&this.$container?(this.$chart=a.a.init(this.$container),this._chartOptions&&(this.registerMap(),this.$chart.setOption(this.convertData(this._chartOptions),!1)),this.dispatchEvent({type:"load",source:this,value:this.$chart})):this.isVisible()&&this.redraw()},e.prototype.redraw=function(){this.clearAndRedraw()},e.prototype.updateViewSize=function(t){this.$container&&(this.$container.style.width=t[0]+"px",this.$container.style.height=t[1]+"px",this.$container.setAttribute("width",String(t[0])),this.$container.setAttribute("height",String(t[1])))},e.prototype.onResize=function(t){var e=this.getMap();if(e){var o=e.getSize();this.updateViewSize(o),this.clearAndRedraw(),t&&this.dispatchEvent({type:"change:size",source:this,value:o})}},e.prototype.onZoomEnd=function(){this._options.hideOnZooming&&this.show();var t=this.getMap();t&&t.getView()&&(this.clearAndRedraw(),this.dispatchEvent({type:"zoomend",source:this,value:t.getView().getZoom()}))},e.prototype.onDragRotateEnd=function(){this._options.hideOnRotating&&this.show();var t=this.getMap();t&&t.getView()&&(this.clearAndRedraw(),this.dispatchEvent({type:"change:rotation",source:this,value:t.getView().getRotation()}))},e.prototype.onMoveStart=function(){this._options.hideOnMoving&&this.hide();var t=this.getMap();t&&t.getView()&&this.dispatchEvent({type:"movestart",source:this,value:t.getView().getCenter()})},e.prototype.onMoveEnd=function(){this._options.hideOnMoving&&this.show();var t=this.getMap();t&&t.getView()&&(this.clearAndRedraw(),this.dispatchEvent({type:"moveend",source:this,value:t.getView().getCenter()}))},e.prototype.onClick=function(t){this.$container&&this.$container.dispatchEvent(v("click",t))},e.prototype.mouseDown=function(t){this.$container&&this.$container.dispatchEvent(v("mousedown",t))},e.prototype.mouseUp=function(t){this.$container&&this.$container.dispatchEvent(v("mouseup",t))},e.prototype.onCenterChange=function(){var t=this.getMap();t&&t.getView()&&(this.clearAndRedraw(),this.dispatchEvent({type:"change:center",source:this,value:t.getView().getCenter()}))},e.prototype.handleMapChanged=function(){var t=this.getMap();if(this._initEvent&&this.$container&&(this.$container&&y(this.$container),this.unBindEvent()),this.$container||(this.createLayerContainer(),this.onResize(!1)),t){var e=this._options.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this._options.insertFirst?e.insertBefore(this.$container,e.childNodes[0]||null):e.appendChild(this.$container),this.render(),this.bindEvent(t)}},e.prototype.createLayerContainer=function(){this.$container=document.createElement("div"),this.$container.style.position="absolute",this.$container.style.top="0px",this.$container.style.left="0px",this.$container.style.right="0px",this.$container.style.bottom="0px"},e.prototype.bindEvent=function(t){var e=t.getView();this._options.forcedPrecomposeRerender&&t.on("precompose",this.redraw),t.on("change:size",this.onResize),e.on("change:resolution",this.onZoomEnd),e.on("change:center",this.onCenterChange),e.on("change:rotation",this.onDragRotateEnd),t.on("movestart",this.onMoveStart),t.on("moveend",this.onMoveEnd),this._options.polyfillEvents&&(t.on("pointerdown",this.mouseDown),t.on("pointerup",this.mouseUp),t.on("click",this.onClick)),this._initEvent=!0},e.prototype.unBindEvent=function(){var t=this.getMap();if(t){var e=t.getView();e&&(t.un("precompose",this.redraw),t.un("change:size",this.onResize),e.un("change:resolution",this.onZoomEnd),e.un("change:center",this.onCenterChange),e.un("change:rotation",this.onDragRotateEnd),t.un("movestart",this.onMoveStart),t.un("moveend",this.onMoveEnd),this._options.polyfillEvents&&(t.un("pointerdown",this.mouseDown),t.un("pointerup",this.mouseUp),t.un("click",this.onClick)),this._initEvent=!1)}},e.prototype.clearAndRedraw=function(){if(this.$chart&&this.isVisible()){if(this._options.forcedRerender&&this.$chart.clear(),this.$chart.resize(),this._chartOptions&&(this.registerMap(),this.$chart.setOption(this.convertData(this._chartOptions),!1),this._incremental&&this._incremental.length>0))for(var t=0;t<this._incremental.length;t++)this.appendData(this._incremental[t],!1);this.dispatchEvent({type:"redraw",source:this})}},e.prototype.registerMap=function(){if(this._isRegistered||(this.coordinateSystemId="openlayers_"+g(),a.a.registerCoordinateSystem(this.coordinateSystemId,this.getCoordinateSystem(this._options)),this._isRegistered=!0),this._chartOptions){var t=this._chartOptions.series;if(t&&p(t)){var e=this._options.convertTypes;if(e)for(var o=t.length-1;o>=0;o--)e.indexOf(t[o].type)>-1||(t[o].coordinateSystem=this.coordinateSystemId),t[o].animation=!1}}},e.prototype.convertData=function(t){var e=t.series;if(e&&e.length>0){if(!this._coordinateSystem){var o=this.getCoordinateSystem(this._options);this._coordinateSystem=new o(this.getMap())}if(e&&p(e)){var n=this._options.convertTypes;if(n)for(var i=e.length-1;i>=0;i--)n.indexOf(e[i].type)>-1&&e[i]&&e[i].hasOwnProperty("coordinates")&&(e[i]=x[e[i].type](t,e[i],this._coordinateSystem))}}return t},e.prototype.getCoordinateSystem=function(t){var e=this.getMap(),o=this.coordinateSystemId,n=function t(e){this.map=e,this._mapOffset=[0,0],this.dimensions=["lng","lat"],this.projCode=t.getProjectionCode(this.map)};return n.dimensions=n.prototype.dimensions||["lng","lat"],n.prototype.getZoom=function(){return this.map.getView().getZoom()},n.prototype.setZoom=function(t){return this.map.getView().setZoom(t)},n.prototype.getViewRectAfterRoam=function(){return this.getViewRect().clone()},n.prototype.setMapOffset=function(t){this._mapOffset=t},n.prototype.dataToPoint=function(e){var o;e&&Array.isArray(e)&&e.length>0&&(o=e.map(function(t){return"string"==typeof t?Number(t):t}));var n=t&&t.source||"EPSG:4326",i=t&&t.destination||this.projCode,s=this.map.getPixelFromCoordinate(Object(r.g)(o,n,i)),a=this._mapOffset;return[s[0]-a[0],s[1]-a[1]]},n.prototype.pointToData=function(t){var e=this._mapOffset;return this.map.getCoordinateFromPixel([t[0]+e[0],t[1]+e[1]])},n.prototype.getViewRect=function(){var t=this.map.getSize();return new a.a.graphic.BoundingRect(0,0,t[0],t[1])},n.prototype.getRoamTransform=function(){return a.a.matrix.create()},n.prototype.prepareCustoms=function(){var t=this.getViewRect();return{coordSys:{type:o,x:t.x,y:t.y,width:t.width,height:t.height},api:{coord:u(this.dataToPoint,this),size:u(n.dataToCoordsSize,this)}}},n.create=function(t){t.eachSeries(function(t){t.get("coordinateSystem")===o&&(t.coordinateSystem=new n(e))})},n.getProjectionCode=function(t){return t?t.getView()&&t.getView().getProjection().getCode():"EPSG:3857"},n.dataToCoordsSize=function(t,e){var o=this;return void 0===e&&(e=[0,0]),a.a.util.map([0,1],function(n){var i=e[n],r=[],s=[],a=t[n]/2;r[n]=i-a,s[n]=i+a,r[1-n]=e[1-n],s[1-n]=e[1-n];var c=o.dataToPoint(r)[n]-o.dataToPoint(s)[n];return Math.abs(c)},this)},n},e.prototype.dispatchEvent=function(){for(var e=arguments,o=[],n=0;n<arguments.length;n++)o[n]=e[n];return t.prototype.dispatchEvent.apply(this,o)},e.prototype.set=function(){for(var e=arguments,o=[],n=0;n<arguments.length;n++)o[n]=e[n];return t.prototype.set.apply(this,o)},e.prototype.get=function(){for(var e=arguments,o=[],n=0;n<arguments.length;n++)o[n]=e[n];return t.prototype.get.apply(this,o)},e.prototype.unset=function(){for(var e=arguments,o=[],n=0;n<arguments.length;n++)o[n]=e[n];return t.prototype.unset.apply(this,o)},e.prototype.on=function(){for(var e=arguments,o=[],n=0;n<arguments.length;n++)o[n]=e[n];return t.prototype.on.apply(this,o)},e.prototype.un=function(){for(var e=arguments,o=[],n=0;n<arguments.length;n++)o[n]=e[n];return t.prototype.un.apply(this,o)},e.formatGeoJSON=b,e.bind=u,e.merge=l,e.uuid=g,e.bindAll=f,e.arrayAdd=d,e.removeNode=y,e.isObject=p,e}(i.a),C=S;e.a=C,function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o("0cfB")).default;t&&(t.register(c,"extendStatics","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(h,"__extends","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(p,"isObject","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(l,"merge","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(u,"bind","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(d,"arrayAdd","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(g,"uuid","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(f,"bindAll","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(y,"removeNode","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(v,"mockEvent","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(m,"checkDecoded","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(E,"decodePolygon","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(w,"decode","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(b,"formatGeoJSON","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(_,"pie","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(j,"bar","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register($,"line","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(x,"charts","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(O,"_options","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(S,"EChartsLayer","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"),t.register(C,"default","F:\\projects\\github-next\\ol3Echarts\\packages\\ol-echarts\\dist\\ol-echarts.esm.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o("0cfB")).leaveModule;e&&e(t)}()}).call(this,o("3UD+")(t))},lciK:function(t,e,o){"use strict";o.r(e);var n=o("q1tI"),i=o("Xu5n"),r=o("oscj"),s=o("SAzV"),a=o("LvFn"),c=o("Lrro"),h=o("JJRp");e.default=class extends n.Component{constructor(t,e){super(t,e),this.setRef=(t=null)=>{this.container=t},this.state={zoom:5,rotation:0,center:[113.53450137499999,34.44104525]},this.container=null,this.map=null}componentDidMount(){this.map=new i.a({target:this.container,view:new r.a({...this.state,projection:"EPSG:4326"}),layers:[new s.a({source:new a.a({url:"http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}"})})]}),this.chart=new c.a(null,{hideOnMoving:!1,hideOnZooming:!1}),this.chart.appendTo(this.map),Object(h.a)("./static/json/china-migration.json",t=>{t&&Object(h.a)("./static/json/china-airline.json",e=>{if(e){const o={backgroundColor:"transparent",title:{text:"春节人口迁徙",x:"center",y:"top",textStyle:{color:"white"}},legend:{show:!0,selected:{},x:"left",orient:"vertical",textStyle:{color:"white"},data:[]},series:[{name:"Migration",type:"lines",effect:{constantSpeed:30,show:!0,trailLength:1,symbolSize:1.5,color:"rgba(204, 246, 255, 1)"},itemStyle:{normal:{lineStyle:{color:"rgba(2, 166, 253, 1)",type:"solid",width:.5,opacity:.4}}},data:[]},{symbol:"circle",type:"effectScatter",symbolSize:1.5,itemStyle:{normal:{color:"rgba(255, 0, 0, 1)"}},data:[]}]};e.allLine.sort((t,e)=>e.num-t.num).slice(0,3e3).forEach(e=>{(function(t,e,o){if(e&&o){const n=e.split("_").pop(),i=o.split("_").pop();return n&&i?{fromName:n,toName:i,coords:[t[n],t[i]]}:null}return null})(t,e.start,e.end)&&o.series[0].data.push()}),o.series[1].data=e.topCityOut.map(e=>({value:function(t,e){const o=e.split("_").pop();return o?t[o]:null}(t,e.name)})),this.chart.setChartOptions(o)}})})}render(){return n.createElement("div",{ref:this.setRef,className:"map-content"})}}},yLpj:function(t,e,o){t.exports=o("c7XV")(15)}}]);