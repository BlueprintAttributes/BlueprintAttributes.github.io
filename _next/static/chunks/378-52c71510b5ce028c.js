"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{9378:function(t,e,i){let n;i.d(e,{Z:function(){return D}});var o=i(7294),a=i(3935);let r=(t,e)=>t===e?.tagName?.toUpperCase?.(),s=t=>r("DIV",t)||r("SPAN",t),h=t=>r("IMG",t),l=t=>t.complete&&0!==t.naturalHeight,d=t=>r("SVG",t),c=({height:t,offset:e,width:i})=>Math.min((window.innerWidth-2*e)/i,(window.innerHeight-2*e)/t),m=({containerHeight:t,containerWidth:e,offset:i,targetHeight:n,targetWidth:o})=>{let a=c({height:n,offset:i,width:o}),r=o>n?o/e:n/t;return a>1?r:a*r},u=({containerHeight:t,containerWidth:e,hasScalableSrc:i,offset:n,targetHeight:o,targetWidth:a})=>t&&e?!i&&o&&a?m({containerHeight:t,containerWidth:e,offset:n,targetHeight:o,targetWidth:a}):c({height:t,offset:n,width:e}):1,g=/url(?:\(['"]?)(.*?)(?:['"]?\))/,v=t=>{if(t){if(h(t))return t.currentSrc;if(s(t)){let e=window.getComputedStyle(t).backgroundImage;if(e)return g.exec(e)?.[1]}}},f=t=>{if(t)return h(t)?t.alt??void 0:t.getAttribute("aria-label")??void 0},p=({containerHeight:t,containerLeft:e,containerTop:i,containerWidth:n,hasScalableSrc:o,offset:a,targetHeight:r,targetWidth:s})=>{let h=u({containerHeight:t,containerWidth:n,hasScalableSrc:o,offset:a,targetHeight:r,targetWidth:s});return{top:i,left:e,width:n*h,height:t*h,transform:`translate(0,0) scale(${1/h})`}},w=({position:t,relativeNum:e})=>{let i=parseFloat(t);return t.endsWith("%")?e*i/100:i},E=({containerHeight:t,containerLeft:e,containerTop:i,containerWidth:n,hasScalableSrc:o,objectFit:a,objectPosition:r,offset:s,targetHeight:h,targetWidth:l})=>{if("scale-down"===a&&(a=l<=n&&h<=t?"none":"contain"),"cover"===a||"contain"===a){let d=n/l,c=t/h,m="cover"===a?Math.max(d,c):Math.min(d,c),[g="50%",v="50%"]=r.split(" "),f=w({position:g,relativeNum:n-l*m}),p=w({position:v,relativeNum:t-h*m}),E=u({containerHeight:h*m,containerWidth:l*m,hasScalableSrc:o,offset:s,targetHeight:h,targetWidth:l});return{top:i+p,left:e+f,width:l*m*E,height:h*m*E,transform:`translate(0,0) scale(${1/E})`}}if("none"===a){let[a="50%",d="50%"]=r.split(" "),c=w({position:a,relativeNum:n-l}),m=w({position:d,relativeNum:t-h}),g=u({containerHeight:h,containerWidth:l,hasScalableSrc:o,offset:s,targetHeight:h,targetWidth:l});return{top:i+m,left:e+c,width:l*g,height:h*g,transform:`translate(0,0) scale(${1/g})`}}if("fill"!==a)return{};{let e=n/l,i=t/h,a=Math.max(e,i),r=u({containerHeight:h*a,containerWidth:l*a,hasScalableSrc:o,offset:s,targetHeight:h,targetWidth:l});return{width:n*r,height:t*r,transform:`translate(0,0) scale(${1/r})`}}},L=({backgroundPosition:t,backgroundSize:e,containerHeight:i,containerLeft:n,containerTop:o,containerWidth:a,hasScalableSrc:r,offset:s,targetHeight:h,targetWidth:l})=>{if("cover"===e||"contain"===e){let d=a/l,c=i/h,m="cover"===e?Math.max(d,c):Math.min(d,c),[g="50%",v="50%"]=t.split(" "),f=w({position:g,relativeNum:a-l*m}),p=w({position:v,relativeNum:i-h*m}),E=u({containerHeight:h*m,containerWidth:l*m,hasScalableSrc:r,offset:s,targetHeight:h,targetWidth:l});return{top:o+p,left:n+f,width:l*m*E,height:h*m*E,transform:`translate(0,0) scale(${1/E})`}}if("auto"===e){let[e="50%",d="50%"]=t.split(" "),c=w({position:e,relativeNum:a-l}),m=w({position:d,relativeNum:i-h}),g=u({containerHeight:h,containerWidth:l,hasScalableSrc:r,offset:s,targetHeight:h,targetWidth:l});return{top:o+m,left:n+c,width:l*g,height:h*g,transform:`translate(0,0) scale(${1/g})`}}{let[d="50%",c="50%"]=e.split(" "),m=w({position:d,relativeNum:a}),g=w({position:c,relativeNum:i}),v=m/l,f=g/h,p=Math.min(v,f),[E="50%",L="50%"]=t.split(" "),b=w({position:E,relativeNum:a-l*p}),y=w({position:L,relativeNum:i-h*p}),z=u({containerHeight:h*p,containerWidth:l*p,hasScalableSrc:r,offset:s,targetHeight:h,targetWidth:l});return{top:o+y,left:n+b,width:l*p*z,height:h*p*z,transform:`translate(0,0) scale(${1/z})`}}},b=/\.svg$/i,y=({hasZoomImg:t,imgSrc:e,isSvg:i,isZoomed:n,loadedImgEl:o,offset:a,shouldRefresh:r,targetEl:h})=>{let l=i||e?.slice?.(0,18)==="data:image/svg+xml"||t||!!(e&&b.test(e)),d=h.getBoundingClientRect(),c=window.getComputedStyle(h),m=null!=o&&s(h),u=p({containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:l,offset:a,targetHeight:o?.naturalHeight??d.height,targetWidth:o?.naturalWidth??d.width}),g=null==o||m?void 0:E({containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:l,objectFit:c.objectFit,objectPosition:c.objectPosition,offset:a,targetHeight:o.naturalHeight,targetWidth:o.naturalWidth}),v=m?L({backgroundPosition:c.backgroundPosition,backgroundSize:c.backgroundSize,containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:l,offset:a,targetHeight:o.naturalHeight,targetWidth:o.naturalWidth}):void 0,f=Object.assign({},u,g,v);if(n){let t=window.innerWidth/2,e=window.innerHeight/2,i=parseFloat(String(f.left||0))+parseFloat(String(f.width||0))/2,n=parseFloat(String(f.top||0))+parseFloat(String(f.height||0))/2;r&&(f.transitionDuration="0.01ms"),f.transform=`translate(${t-i}px,${e-n}px) scale(1)`}return f},z=t=>{if(!t)return{};if(!d(t))return{height:t.offsetHeight,left:t.offsetLeft,width:t.offsetWidth,top:t.offsetTop};{let e=t.parentElement,i=t.getBoundingClientRect();if(!e)return{height:i.height,left:i.left,width:i.width,top:i.top};{let t=e.getBoundingClientRect();return{height:i.height,left:t.left-i.left,top:t.top-i.top,width:i.width}}}};"undefined"!=typeof document&&((n=document.createElement("div")).setAttribute("data-rmiz-portal",""),document.body.appendChild(n));let S=["img","svg",'[role="img"]',"[data-zoom]"].map(t=>`${t}:not([aria-hidden="true"])`).join(","),I={overflow:"",width:""};function M(t){return o.createElement(C,{...t})}class C extends o.Component{constructor(){super(...arguments),this.state={id:"",isZoomImgLoaded:!1,loadedImgEl:void 0,modalState:"UNLOADED",shouldRefresh:!1},this.refContent=(0,o.createRef)(),this.refDialog=(0,o.createRef)(),this.refModalContent=(0,o.createRef)(),this.refModalImg=(0,o.createRef)(),this.refWrap=(0,o.createRef)(),this.imgEl=null,this.prevBodyAttrs=I,this.styleModalImg={},this.setId=()=>{let t=()=>Math.random().toString(16).slice(-4);this.setState({id:t()+t()+t()})},this.setAndTrackImg=()=>{let t=this.refContent.current;t&&(this.imgEl=t.querySelector(S),this.imgEl?(this.changeObserver?.disconnect?.(),this.imgEl?.addEventListener?.("load",this.handleImgLoad),this.imgEl?.addEventListener?.("click",this.handleZoom),this.state.loadedImgEl||this.handleImgLoad(),this.imgElObserver=new ResizeObserver(t=>{let e=t[0];e?.target&&(this.imgEl=e.target,this.setState({}))}),this.imgElObserver.observe(this.imgEl)):this.changeObserver||(this.changeObserver=new MutationObserver(this.setAndTrackImg),this.changeObserver.observe(t,{childList:!0,subtree:!0})))},this.handleIfZoomChanged=t=>{let{isZoomed:e}=this.props;!t&&e?this.zoom():t&&!e&&this.unzoom()},this.handleImgLoad=()=>{let{imgEl:t}=this,e=v(t);if(!e)return;let i=new Image;h(t)&&(i.sizes=t.sizes,i.srcset=t.srcset),i.src=e;let n=()=>{this.setState({loadedImgEl:i})};i.decode().then(n).catch(()=>{if(l(i)){n();return}i.onload=n})},this.handleZoom=()=>{this.props.onZoomChange?.(!0)},this.handleUnzoom=()=>{this.props.onZoomChange?.(!1)},this.handleDialogCancel=t=>{t.preventDefault()},this.handleDialogClick=t=>{(t.target===this.refModalContent.current||t.target===this.refModalImg.current)&&this.handleUnzoom()},this.handleKeyDown=t=>{("Escape"===t.key||27===t.keyCode)&&(t.preventDefault(),t.stopPropagation(),this.handleUnzoom())},this.handleWheel=t=>{t.ctrlKey||(t.stopPropagation(),queueMicrotask(()=>{this.handleUnzoom()}))},this.handleTouchStart=t=>{1===t.changedTouches.length&&t.changedTouches[0]&&(this.touchYStart=t.changedTouches[0].screenY)},this.handleTouchMove=t=>{if(null!=this.touchYStart&&t.changedTouches[0]){this.touchYEnd=t.changedTouches[0].screenY;let e=Math.max(this.touchYStart,this.touchYEnd),i=Math.min(this.touchYStart,this.touchYEnd);Math.abs(e-i)>10&&(this.touchYStart=void 0,this.touchYEnd=void 0,this.handleUnzoom())}},this.handleTouchCancel=()=>{this.touchYStart=void 0,this.touchYEnd=void 0},this.handleResize=()=>{this.setState({shouldRefresh:!0})},this.zoom=()=>{this.bodyScrollDisable(),this.refDialog.current?.showModal?.(),this.setState({modalState:"LOADING"}),this.loadZoomImg(),window.addEventListener("wheel",this.handleWheel,{passive:!0}),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),window.addEventListener("touchcancel",this.handleTouchCancel,{passive:!0}),document.addEventListener("keydown",this.handleKeyDown,!0),this.refModalImg.current?.addEventListener?.("transitionend",this.handleZoomEnd,{once:!0})},this.handleZoomEnd=()=>{setTimeout(()=>{this.setState({modalState:"LOADED"}),window.addEventListener("resize",this.handleResize,{passive:!0})},0)},this.unzoom=()=>{this.setState({modalState:"UNLOADING"}),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchcancel",this.handleTouchCancel),document.removeEventListener("keydown",this.handleKeyDown,!0),this.refModalImg.current?.addEventListener?.("transitionend",this.handleUnzoomEnd,{once:!0})},this.handleUnzoomEnd=()=>{setTimeout(()=>{window.removeEventListener("resize",this.handleResize),this.setState({shouldRefresh:!1,modalState:"UNLOADED"}),this.refDialog.current?.close?.(),this.bodyScrollEnable()},0)},this.bodyScrollDisable=()=>{this.prevBodyAttrs={overflow:document.body.style.overflow,width:document.body.style.width};let t=document.body.clientWidth;document.body.style.overflow="hidden",document.body.style.width=`${t}px`},this.bodyScrollEnable=()=>{document.body.style.width=this.prevBodyAttrs.width,document.body.style.overflow=this.prevBodyAttrs.overflow,this.prevBodyAttrs=I},this.loadZoomImg=()=>{let{props:{zoomImg:t}}=this,e=t?.src;if(e){let i=new Image;i.sizes=t?.sizes??"",i.srcset=t?.srcSet??"",i.src=e;let n=()=>{this.setState({isZoomImgLoaded:!0})};i.decode().then(n).catch(()=>{if(l(i)){n();return}i.onload=n})}},this.UNSAFE_handleSvg=()=>{let{imgEl:t,refModalImg:e,styleModalImg:i}=this;if(d(t)){let n=document.createElement("div");n.innerHTML=t.outerHTML;let o=n.firstChild;o.style.width=`${i.width||0}px`,o.style.height=`${i.height||0}px`,o.addEventListener("click",this.handleUnzoom),e.current?.firstChild?.remove?.(),e.current?.appendChild?.(o)}}}render(){let{handleDialogCancel:t,handleDialogClick:e,handleUnzoom:i,handleZoom:r,imgEl:l,props:{a11yNameButtonUnzoom:c,a11yNameButtonZoom:m,children:u,classDialog:g,IconUnzoom:p,IconZoom:w,isZoomed:E,wrapElement:L,ZoomContent:b,zoomImg:S,zoomMargin:I},refContent:M,refDialog:C,refModalContent:D,refModalImg:N,refWrap:T,state:{id:A,isZoomImgLoaded:U,loadedImgEl:W,modalState:k,shouldRefresh:Z}}=this,O=`rmiz-modal-${A}`,H=`rmiz-modal-img-${A}`,$=s(l),x=h(l),R=d(l),Y=f(l),B=v(l),F=x?l.sizes:void 0,P=x?l.srcset:void 0,_=!!S?.src,j=l&&(W||R)&&"none"!==window.getComputedStyle(l).display,G=Y?`${m}: ${Y}`:m,K="LOADING"===k||"LOADED"===k,q=j?"found":"not-found",V="UNLOADED"===k||"UNLOADING"===k?"hidden":"visible",J=z(l);this.styleModalImg=j?y({hasZoomImg:_,imgSrc:B,isSvg:R,isZoomed:E&&K,loadedImgEl:W,offset:I,shouldRefresh:Z,targetEl:l}):{};let Q=null;if(j){let t=x||$?o.createElement("img",{alt:Y,sizes:F,src:B,srcSet:P,...U&&"LOADED"===k?S:{},"data-rmiz-modal-img":"",height:this.styleModalImg.height||void 0,id:H,ref:N,style:this.styleModalImg,width:this.styleModalImg.width||void 0}):R?o.createElement("div",{"data-rmiz-modal-img":!0,ref:N,style:this.styleModalImg}):null,e=o.createElement("button",{"aria-label":c,"data-rmiz-btn-unzoom":"",onClick:i,type:"button"},o.createElement(p,null));Q=b?o.createElement(b,{buttonUnzoom:e,modalState:k,img:t,onUnzoom:i}):o.createElement(o.Fragment,null,t,e)}return o.createElement(L,{"aria-owns":O,"data-rmiz":"",ref:T},o.createElement(L,{"data-rmiz-content":q,ref:M,style:{visibility:"UNLOADED"===k?"visible":"hidden"}},u),j&&o.createElement(L,{"data-rmiz-ghost":"",style:J},o.createElement("button",{"aria-label":G,"data-rmiz-btn-zoom":"",onClick:r,type:"button"},o.createElement(w,null))),j&&null!=n&&(0,a.createPortal)(o.createElement("dialog",{"aria-labelledby":H,"aria-modal":"true",className:g,"data-rmiz-modal":"",id:O,onClick:e,onClose:i,onCancel:t,ref:C,role:"dialog"},o.createElement("div",{"data-rmiz-modal-overlay":V}),o.createElement("div",{"data-rmiz-modal-content":"",ref:D},Q)),n))}componentDidMount(){this.setId(),this.setAndTrackImg(),this.handleImgLoad(),this.UNSAFE_handleSvg()}componentWillUnmount(){"UNLOADED"!==this.state.modalState&&this.bodyScrollEnable(),this.changeObserver?.disconnect?.(),this.imgElObserver?.disconnect?.(),this.imgEl?.removeEventListener?.("load",this.handleImgLoad),this.imgEl?.removeEventListener?.("click",this.handleZoom),this.refModalImg.current?.removeEventListener?.("transitionend",this.handleZoomEnd),this.refModalImg.current?.removeEventListener?.("transitionend",this.handleUnzoomEnd),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchcancel",this.handleTouchCancel),window.removeEventListener("resize",this.handleResize),document.removeEventListener("keydown",this.handleKeyDown,!0)}componentDidUpdate(t){this.UNSAFE_handleSvg(),this.handleIfZoomChanged(t.isZoomed)}}function D(t){let[e,i]=(0,o.useState)(!1);return o.createElement(M,{...t,isZoomed:e,onZoomChange:i})}C.defaultProps={a11yNameButtonUnzoom:"Minimize image",a11yNameButtonZoom:"Expand image",IconUnzoom:function(){return o.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-unzoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"}))},IconZoom:function(){return o.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-zoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"}))},wrapElement:"div",zoomMargin:0}}}]);