import{G as u,r,a as i,j as e,A as p,b,c as j}from"./index-516b7986.js";function f(t){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 13 10.2 16.6 18 7"}}]})(t)}const C="_container_1hdsm_1",k="_tooltip_1hdsm_4",N="_active_1hdsm_26",P="_content_1hdsm_36",h={container:C,tooltip:k,active:N,content:P},m=({children:t,title:n,active:l})=>{const[a,d]=r.useState(!1),v=()=>d(!0),g=()=>d(!1);return r.useEffect(()=>{let _;return l&&(_=setTimeout(()=>{d(!1)},2e3)),()=>{clearTimeout(_)}},[l]),i("div",{onFocus:v,onBlur:g,className:h.container,children:[e("div",{className:[h.tooltip,(a||l)&&h.active].join(" "),children:n}),t]})},w="_title_4hf99_1",y={title:w},I="_contact_1gb1v_1",T="_card_1gb1v_26",x="_buttonContainer_1gb1v_36",E="_label_1gb1v_58",S="_emailContainer_1gb1v_67",o={contact:I,card:T,buttonContainer:x,label:E,emailContainer:S},s=({children:t})=>e("div",{className:o.label,children:t}),O=()=>{const[t,n]=r.useState(!1),l=a=>{navigator.clipboard.writeText(a),n(!t)};return r.useEffect(()=>{let a;return t&&(a=setTimeout(()=>{n(!1)},2e3)),()=>{clearTimeout(a)}},[t]),i("section",{className:o.contact,children:[e("h2",{id:"contact",className:y.title,children:"Contact"}),e("div",{className:o.card,children:i("ul",{children:[i("li",{children:[e(s,{children:"Name:"})," ",e("div",{children:" Dmitri Sirjajev "})]}),i("li",{children:[e(s,{children:"Email:"}),i("div",{className:o.emailContainer,children:["DmitriSirjajev@gmail.com",e("div",{className:o.buttonContainer,children:e(m,{title:t?"Copied":"Copy Email",active:t,children:e("button",{"aria-label":"copy email",onClick:()=>l("DmitriSirjajev@gmail.com"),children:t?e(f,{}):e(p,{})})})})]})]}),i("li",{children:[e(s,{children:"Phone:"}),i("div",{children:[e("span",{children:"+372 "}),"5194 3069"]})]}),i("li",{children:[e(s,{children:"Location:"}),e("div",{children:"Estonia, Tallinn"})]})]})})]})},G="_projectPreview_1l2eo_1",L="_projectPreviewImage_1l2eo_18",D="_header_1l2eo_26",A="_desc_1l2eo_39",F="_links_1l2eo_45",$="_imageLink_1l2eo_69",c={projectPreview:G,projectPreviewImage:L,header:D,desc:A,links:F,imageLink:$},R=({repo:t})=>{const n=t.name.split("-").join(" ");return i("div",{className:c.projectPreview,children:[i("div",{className:c.header,children:[e("a",{href:t.homepage,target:"_blank",tabIndex:-1,children:e("h4",{children:n})}),i("div",{className:c.links,children:[t.homepage&&e(m,{title:"Demo Page",children:e("a",{href:t.homepage,title:`${n} Demo Page`,target:"_blank",children:e(b,{})})}),e(m,{title:"Github Repo Page ",children:e("a",{href:t.svn_url,title:`${n} Github Repo Page`,target:"_blank",children:e(j,{})})})]})]}),e("p",{className:c.desc,children:t.description}),e("a",{href:t.svn_url,className:c.imageLink,target:"_blank",tabIndex:-1,children:e("img",{alt:"project design preview",loading:"lazy",src:t.img,width:200,height:200,className:c.projectPreviewImage})})]})};export{O as C,R as P,y as s};
