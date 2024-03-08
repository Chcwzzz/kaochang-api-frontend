"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[341],{61975:function(se,$,a){var w=a(97857),c=a.n(w),z=a(19632),p=a.n(z),Y=a(5574),R=a.n(Y),O=a(88280),f=a(67294),U=a(85893),B=function(M){var D=M.value,S=M.onChange,Z=M.defaultNewColumn,q=M.column,k=(0,f.useState)([]),v=R()(k,2),A=v[0],H=v[1],j=(0,f.useState)(function(){return A.map(function(d){return d.id})}),I=R()(j,2),Q=I[0],X=I[1],G=function(e){var n=p()(e);H(n);var J=(n==null?void 0:n.map(function(ne){return ne.id}))||[];X(J)};(0,f.useEffect)(function(){if(D)if(typeof D=="string"){var d=JSON.parse(D);G(d)}else{var e=D;G(e)}},[D]);var o=function(e){S==null||S(e)},i=[].concat(p()(q),[{title:"\u64CD\u4F5C",valueType:"option",render:function(e,n,J,ne){return[(0,U.jsx)("a",{onClick:function(){H(A.filter(function(te){return te.id!==n.id}))},children:"\u5220\u9664"},"delete")]}}]);return(0,U.jsx)(O.Z,{columns:i,rowKey:"id",scroll:{y:180},value:A,onChange:H,recordCreatorProps:{newRecordType:"dataSource",position:"bottom",record:function(){return c()({id:Date.now().toString()},Z)}},editable:{type:"multiple",editableKeys:Q,actionRender:function(e,n,J){return[J.delete]},onValuesChange:function(e,n){o(n)},onChange:X}})};$.Z=B},88299:function(se,$,a){a.d($,{$c:function(){return z},tD:function(){return w}});var w={GET:"blue",POST:"red",PUT:"green",DELETE:"orange"},c={0:{text:"\u5BA1\u6838\u4E2D",status:"default"},2:{text:"\u5DF2\u4E0B\u7EBF",status:"error"},1:{text:"\u5DF2\u4E0A\u7EBF",status:"processing"}},z={0:"\u5BA1\u6838\u4E2D",1:"\u5DF2\u4E0A\u7EBF",2:"\u5DF2\u4E0B\u7EBF"},p={VIP:"red",RECHARGE:"blue"},Y={SUCCESS:"\u652F\u4ED8\u6210\u529F",NOTPAY:"\u672A\u652F\u4ED8",CLOSED:"\u5DF2\u53D6\u6D88"},R={WX:"blue",ALIPAY:"green"},O={RECHARGEACTIVITY:"\u5145\u503C\u6D3B\u52A8",RECHARGE:"\u79EF\u5206\u5145\u503C",VIP:"VIP\u4F1A\u5458"}},16921:function(se,$,a){a.r($),a.d($,{default:function(){return la},valueLength:function(){return _e}});var w=a(97857),c=a.n(w),z=a(15009),p=a.n(z),Y=a(99289),R=a.n(Y),O=a(5574),f=a.n(O),U=a(8232),B=a(2453),K=a(351),M=a(75081),D=a(4393),S=a(26412),Z=a(14726),q=a(66309),k=a(40411),v=a(67294),A=a(88299),H=a(9783),j=a.n(H),I=function(s){return s[s.SUCCESS=0]="SUCCESS",s[s.PARAMS_ERROR=4e4]="PARAMS_ERROR",s[s.NOT_LOGIN_ERROR=40100]="NOT_LOGIN_ERROR",s[s.NO_AUTH_ERROR=40101]="NO_AUTH_ERROR",s[s.NOT_FOUND_ERROR=40400]="NOT_FOUND_ERROR",s[s.FORBIDDEN_ERROR=40300]="FORBIDDEN_ERROR",s[s.SYSTEM_ERROR=5e4]="SYSTEM_ERROR",s[s.OPERATION_ERROR=50001]="OPERATION_ERROR",s}(I||{}),Q=j()(j()(j()(j()(j()(j()(j()(j()({},I.SUCCESS,"ok"),I.PARAMS_ERROR,"\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF"),I.NOT_LOGIN_ERROR,"\u672A\u767B\u5F55"),I.NO_AUTH_ERROR,"\u65E0\u6743\u9650"),I.NOT_FOUND_ERROR,"\u8BF7\u6C42\u6570\u636E\u4E0D\u5B58\u5728"),I.FORBIDDEN_ERROR,"\u7981\u6B62\u8BBF\u95EE"),I.SYSTEM_ERROR,"\u7CFB\u7EDF\u5185\u90E8\u5F02\u5E38"),I.OPERATION_ERROR,"\u64CD\u4F5C\u5931\u8D25"),X=[{code:0,name:"SUCCESS",des:"ok"},{code:4e4,name:"PARAMS_ERROR",des:"\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF"},{code:40101,name:"NO_AUTH_ERROR",des:"\u65E0\u6743\u9650"},{code:40300,name:"FORBIDDEN_ERROR",des:"\u7981\u6B62\u8BBF\u95EE"},{code:40400,name:"NOT_FOUND_ERROR",des:"\u8BF7\u6C42\u6570\u636E\u4E0D\u5B58\u5728"},{code:5e4,name:"SYSTEM_ERROR",des:"\u7CFB\u7EDF\u5185\u90E8\u5F02\u5E38"},{code:50001,name:"OPERATION_ERROR",des:"\u64CD\u4F5C\u5931\u8D25"}],G=a(42481),o=a(74855),i=a(3454),d=a(85175),e=a(85893),n=function(r){var l=r.codeString,m=r.showLineNumbers,u=m===void 0?!0:m,C=r.language,b=C===void 0?"txt":C,P=(0,v.useState)(!1),y=f()(P,2),x=y[0],W=y[1],V=function(){B.ZP.success("\u5DF2\u590D\u5236\u5230\u7C98\u8D34\u677F")};return(0,e.jsxs)("div",{style:{position:"relative"},onMouseEnter:function(){return W(!0)},onMouseLeave:function(){setTimeout(function(){W(!1)},400)},children:[x&&(0,e.jsx)(o.CopyToClipboard,{text:l,onCopy:V,children:(0,e.jsx)(d.Z,{style:{position:"absolute",top:"10px",right:"15px",cursor:"pointer",fontSize:"20px",zIndex:"1"}})}),(0,e.jsx)(G.Z,{showLineNumbers:u,PreTag:"div",language:b,lineNumberStyle:{fontSize:10},style:i.Z,children:String(l).replace(/\n$/,"")})]})},J=n,ne=function(r,l){return"axios.".concat(l,"('").concat(r,`')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('\u8BF7\u6C42\u53D1\u751F\u9519\u8BEF:', error);
    });`)},he=function(r,l){return`    @Resource
    private ApiService apiService;

    public Object request() {
        BaseResponse baseResponse;
        try {
            CurrencyRequest currencyRequest = new CurrencyRequest();
            currencyRequest.setPath("`.concat(r,`");
            currencyRequest.setMethod("`).concat(l,`");
            currencyRequest.setRequestParams("\u4F60\u7684\u8BF7\u6C42\u53C2\u6570,\u8BE6\u7EC6\u8BF7\u524D\u5F80\u5F00\u53D1\u8005\u5728\u7EBF\u6587\u6863\u{1F4D8}\u67E5\u770B");
            baseResponse = apiService.request(currencyRequest);
            System.out.println("data = " + baseResponse.getData());
        } catch (BusinessException e) {
            log.error(e.getMessage());
        }
        return baseResponse.getData();
    }`)},te=`{
    "code": 0,
    "data": {} ,
    "message": "ok"
}`,ke=[{fieldName:"code",type:"int",desc:(0,e.jsx)(e.Fragment,{children:"\u8FD4\u56DE\u7801"}),required:"\u662F"},{fieldName:"massage",type:"string",desc:"\u8FD4\u56DE\u7801\u63CF\u8FF0",required:"\u662F"},{fieldName:"data",type:"Object",desc:"\u8FD4\u56DE\u6570\u636E",required:"\u662F"}],$e=[{fieldName:"\u65E0",type:"string",desc:"\u65E0",required:"\u5426"}],Ke=[{title:"\u53C2\u6570\u540D\u79F0",dataIndex:"paramName",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u662F\u5FC5\u586B\u9879"}]}},{title:"\u53C2\u6570\u503C",dataIndex:"value",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u662F\u5FC5\u586B\u9879"}]}}],Ge={paramName:"",value:""},We=function(r){if(!r||r.length<=0)return te;var l={},m={},u={};r.forEach(function(b){var P=b.paramName.split("."),y;P[0]==="code"?y=m:P[0]==="message"?y=u:y=l,P.forEach(function(x,W){W===P.length-1?b.type==="int"&&x==="code"?y[x]=0:y[x]=b.description||"":(y[x]=y[x]||{},y=y[x])})});var C=c()(c()({code:m.code},l),{},{message:u.message});return JSON.stringify(C,null,2)},ee=a(35312),N=a(64778),we=function(r){var l=r.requestParams,m=r.errorCodeTab,u=r.sampleCode,C=r.responseParams,b=r.returnCode;return console.log(l),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"highlightLine",style:{marginTop:15},children:"\u8BF7\u6C42\u53C2\u6570\u8BF4\u660E\uFF1A"}),(0,e.jsxs)(K.Z,{dataSource:l&&l.length>0?l:$e,pagination:!1,style:{maxWidth:800},size:"small",children:[(0,e.jsx)(N.sg,{title:"\u53C2\u6570\u540D\u79F0",dataIndex:"paramName"},"paramName"),(0,e.jsx)(N.sg,{title:"\u5FC5\u9009",dataIndex:"required"},"required"),(0,e.jsx)(N.sg,{title:"\u7C7B\u578B",dataIndex:"type"},"type"),(0,e.jsx)(N.sg,{title:"\u63CF\u8FF0",dataIndex:"description"},"description")]}),(0,e.jsxs)("p",{className:"highlightLine",style:{marginTop:15},children:["\u54CD\u5E94\u53C2\u6570\u8BF4\u660E\uFF1A",(0,e.jsx)("a",{onClick:function(){return m==null?void 0:m()},children:"\u9519\u8BEF\u7801\u53C2\u7167"})]}),(0,e.jsxs)(K.Z,{dataSource:C&&(C==null?void 0:C.length)>0?C:ke,pagination:!1,style:{maxWidth:800},size:"small",children:[(0,e.jsx)(N.sg,{title:"\u53C2\u6570\u540D\u79F0",dataIndex:"paramName"},"paramName"),(0,e.jsx)(N.sg,{title:"\u7C7B\u578B",dataIndex:"type"},"type"),(0,e.jsx)(N.sg,{title:"\u63CF\u8FF0",dataIndex:"description"},"description")]}),(0,e.jsx)("a",{onClick:function(){return u==null?void 0:u()},children:"\u89C1\u793A\u4F8B\u4EE3\u7801"}),(0,e.jsx)("p",{className:"highlightLine",style:{marginTop:15},children:"\u8FD4\u56DE\u793A\u4F8B\uFF1A"}),(0,e.jsx)(J,{codeString:b,language:"javascript"})]})},ze=we,ve=a(63676);function He(s,r){return ue.apply(this,arguments)}function ue(){return ue=R()(p()().mark(function s(r,l){return p()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,ee.request)("/admin/userInterfaceInfo/activateInterface",c()({method:"POST",headers:{"Content-Type":"application/json"},data:r},l||{})));case 1:case"end":return u.stop()}},s)})),ue.apply(this,arguments)}function Ja(s,r){return oe.apply(this,arguments)}function oe(){return oe=_asyncToGenerator(_regeneratorRuntime().mark(function s(r,l){return _regeneratorRuntime().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",request("/admin/userInterfaceInfo/getUserLeftInvokes",_objectSpread({method:"GET",params:_objectSpread({},r)},l||{})));case 1:case"end":return u.stop()}},s)})),oe.apply(this,arguments)}function Va(s,r){return ie.apply(this,arguments)}function ie(){return ie=_asyncToGenerator(_regeneratorRuntime().mark(function s(r,l){return _regeneratorRuntime().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",request("/admin/userInterfaceInfo/invokeUserInterfaceCount",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},l||{})));case 1:case"end":return u.stop()}},s)})),ie.apply(this,arguments)}function Ya(s,r){return le.apply(this,arguments)}function le(){return le=_asyncToGenerator(_regeneratorRuntime().mark(function s(r,l){return _regeneratorRuntime().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",request("/admin/userInterfaceInfo/list",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},l||{})));case 1:case"end":return u.stop()}},s)})),le.apply(this,arguments)}var Je=a(15360),Ve=a(37993),Ye=a(36663),Qe=a(3253),Xe=a(19050),qe=a(54103),ge=a(21987),ea=a(17673),aa=a(34041),na=a(78957),ta=a(32983),ra=a(33076),sa=a(61975),ua=function(r){var l=r.onSearch,m=r.data,u=r.form,C=r.temporaryParams,b=r.paramsTableChange,P=r.result,y=r.resultLoading,x=r.requestExampleActiveTabKey,W=(0,e.jsx)(aa.Z,{disabled:!0,defaultValue:m==null?void 0:m.method,style:{width:120},options:[{value:"GET",label:"GET",disabled:!0},{value:"POST",label:"POST",disabled:!0},{value:"PUT",label:"PUT",disabled:!0},{value:"DELETE",label:"DELETE",disabled:!0}]});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(U.Z,{form:u,className:"form-input",onFinish:function(t){return l==null?void 0:l(t)},scrollToFirstError:!0,onReset:function(){u.resetFields(["requestParams"])},children:[(0,e.jsx)("div",{style:{display:"flex",justifyContent:"center",justifyItems:"center"},children:(0,e.jsx)(ra.Z,{size:"large",readOnly:!0,style:{maxWidth:600},value:m==null?void 0:m.url,addonBefore:W,enterButton:"\u53D1\u8D77\u8BF7\u6C42",onSearch:u.submit})}),(0,e.jsx)("p",{className:"highlightLine",style:{marginTop:25},children:"\u8BF7\u6C42\u53C2\u6570\u8BBE\u7F6E\uFF1A"}),(0,e.jsx)(U.Z.Item,{name:"requestParams",children:(0,e.jsx)(sa.Z,{value:C,onChange:function(t){b==null||b(t)},defaultNewColumn:Ge,column:Ke})}),(0,e.jsx)(U.Z.Item,{children:(0,e.jsx)(na.Z,{size:"large",wrap:!0,children:(0,e.jsx)(Z.ZP,{type:"primary",htmlType:"reset",style:{width:180},children:"\u91CD\u7F6E"})})})]}),(0,e.jsx)("p",{className:"highlightLine",style:{marginTop:25},children:"\u8FD4\u56DE\u7ED3\u679C\uFF1A"}),(0,e.jsx)(M.Z,{spinning:y,children:P?(0,e.jsx)(J,{codeString:P,language:x}):(0,e.jsx)(ta.Z,{description:"\u672A\u53D1\u8D77\u8C03\u7528\uFF0C\u6682\u65E0\u8BF7\u6C42\u4FE1\u606F"})})]})},oa=ua,_e=function(r){return r&&r.trim().length>0},ia=function(){var r,l,m=window.location,u=m.search,C=m.pathname,b=(0,v.useState)(!1),P=f()(b,2),y=P[0],x=P[1],W=(0,v.useState)(),V=f()(W,2),t=V[0],da=V[1],ca=(0,v.useState)(),Ee=f()(ca,2),ma=Ee[0],Re=Ee[1],pa=(0,v.useState)(),ye=f()(pa,2),fa=ye[0],ha=ye[1],va=(0,v.useState)(),Se=f()(va,2),ga=Se[0],je=Se[1],_a=(0,v.useState)("javadoc"),Ie=f()(_a,2),Ce=Ie[0],Ea=Ie[1],Ra=(0,v.useState)("api"),Pe=f()(Ra,2),de=Pe[0],ce=Pe[1],ya=(0,v.useState)(),Te=f()(ya,2),Sa=Te[0],ja=Te[1],Ia=(0,v.useState)(!1),Oe=f()(Ia,2),Ca=Oe[0],be=Oe[1],me=(0,ee.useParams)(),Pa=U.Z.useForm(),Ta=f()(Pa,1),Oa=Ta[0],ba=(0,v.useState)(),xe=f()(ba,2),Qa=xe[0],xa=xe[1],Fa=(0,v.useState)(0),Fe=f()(Fa,2),De=Fe[0],Ae=Fe[1],Da=(0,v.useState)(0),Ue=f()(Da,2),Be=Ue[0],pe=Ue[1],Aa=(0,v.useState)(),Ne=f()(Aa,2),Xa=Ne[0],Ua=Ne[1],Ba=(0,v.useState)(te),Le=f()(Ba,2),Na=Le[0],La=Le[1],Ma=(0,ee.useModel)("@@initialState"),Za=Ma.initialState,ka=Za||{},$a=ka.loginUser,Ka=function(){var L=R()(p()().mark(function T(){var g,_,h,re,E,ae,fe,Me,Ze;return p()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if(me.id){F.next=3;break}return B.ZP.error("\u53C2\u6570\u4E0D\u5B58\u5728"),F.abrupt("return");case 3:return x(!0),F.prev=4,F.next=7,(0,ve.Qg)({id:me.id});case 7:if(g=F.sent,g.data&&g.code===0){da(g.data||{}),Ae(g.data.usertotalinvokes||0),pe(g.data.userleftinvokes||0),ae=g.data.requestParams,fe=g.data.responseParams;try{Re(ae?JSON.parse(ae):[]),je(fe?JSON.parse(fe):[])}catch(an){Re([]),je([])}Me=g.data.responseParams?JSON.parse(g.data.responseParams):[],Ze=We(Me),xa(ne((_=g.data)===null||_===void 0?void 0:_.url,(h=g.data)===null||h===void 0||(h=h.method)===null||h===void 0?void 0:h.toLowerCase())),Ua(he((re=g.data)===null||re===void 0?void 0:re.url,(E=g.data)===null||E===void 0||(E=E.method)===null||E===void 0?void 0:E.toUpperCase())),La(Ze)}x(!1),F.next=15;break;case 12:F.prev=12,F.t0=F.catch(4),B.ZP.error(F.t0.message);case 15:case"end":return F.stop()}},T,null,[[4,12]])}));return function(){return L.apply(this,arguments)}}();(0,v.useEffect)(function(){Ka()},[]);var qa=function(T){Ea(T)},Ga=function(T){ce(T)},Wa=function(){var L=R()(p()().mark(function T(g){var _,h;return p()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return $a||ee.history.replace({pathname:"/user/login",search:(0,ea.stringify)({redirect:C+u})}),be(!0),E.prev=2,E.next=5,(0,ve.Wl)(c()({id:t==null?void 0:t.id,url:t==null?void 0:t.url,method:t==null?void 0:t.method},g));case 5:if(_=E.sent,_.code===0&&(Ae(Number(De)+1),pe(Number(Be)-1)),typeof _.data=="string")try{_.data=JSON.parse(_.data),console.log("Res",_.data),_!=null&&(h=_.data)!==null&&h!==void 0&&h.message&&(_.code=_.data.code,_.message=_.data.message,_.data=JSON.parse(_.data.data))}catch(ae){console.error("Failed to parse data:",ae)}ja(JSON.stringify(_,null,4)),E.next=15;break;case 11:return E.prev=11,E.t0=E.catch(2),B.ZP.error("\u64CD\u4F5C\u5931\u8D25\uFF1A"+E.t0.message),E.abrupt("return",!1);case 15:be(!1);case 16:case"end":return E.stop()}},T,null,[[2,11]])}));return function(g){return L.apply(this,arguments)}}(),wa=function(){var L=R()(p()().mark(function T(){var g;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.prev=0,h.next=3,He({id:me.id});case 3:g=h.sent,g.code===0&&(B.ZP.success(g.data),pe(200)),h.next=10;break;case 7:h.prev=7,h.t0=h.catch(0),B.ZP.error(h.t0.message);case 10:case"end":return h.stop()}},T,null,[[0,7]])}));return function(){return L.apply(this,arguments)}}(),za=[{key:"api",label:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Je.Z,{}),"API\u6587\u6863"]})},{key:"tools",label:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ve.Z,{}),"\u5728\u7EBF\u8C03\u8BD5\u5DE5\u5177"]})},{key:"errorCode",label:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ye.Z,{}),"\u9519\u8BEF\u7801\u53C2\u7167"]})}],Ha={api:(0,e.jsx)(ze,{sampleCode:function(){return ce("sampleCode")},errorCodeTab:function(){return ce("errorCode")},requestParams:ma,responseParams:ga,returnCode:Na}),tools:(0,e.jsx)(oa,{form:Oa,data:t,temporaryParams:fa,onSearch:Wa,requestExampleActiveTabKey:Ce,paramsTableChange:function(T){ha(T)},result:Sa,resultLoading:Ca}),errorCode:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"highlightLine",children:"\u9519\u8BEF\u7801\uFF1A"}),(0,e.jsxs)(K.Z,{dataSource:X,pagination:!1,style:{maxWidth:800},size:"small",children:[(0,e.jsx)(N.sg,{title:"\u53C2\u6570\u540D\u79F0",dataIndex:"name"},"name"),(0,e.jsx)(N.sg,{title:"\u9519\u8BEF\u7801",dataIndex:"code"},"code"),(0,e.jsx)(N.sg,{title:"\u63CF\u8FF0",dataIndex:"des"},"des")]})]})};return(0,e.jsxs)(M.Z,{spinning:y,children:[(0,e.jsx)(D.Z,{title:t==null?void 0:t.interfaceName,children:(0,e.jsxs)(S.Z,{children:[(0,e.jsx)(S.Z.Item,{label:"\u63A5\u53E3\u5730\u5740",children:(0,e.jsx)(ge.Z,{copyable:!0,children:t==null?void 0:t.url})},"url"),(0,e.jsx)(S.Z.Item,{label:"\u8FD4\u56DE\u683C\u5F0F",children:"JSON"},"returnFormat"),(0,e.jsx)(S.Z.Item,{children:(0,e.jsx)(Z.ZP,{onClick:wa,children:"\u5F00\u901A\u63A5\u53E3"})}),(0,e.jsx)(S.Z.Item,{label:"\u8BF7\u6C42\u65B9\u5F0F",children:(0,e.jsx)(q.Z,{color:A.tD[(r=t==null?void 0:t.method)!==null&&r!==void 0?r:"default"],children:t==null?void 0:t.method})},"request"),(0,e.jsxs)(S.Z.Item,{label:"\u8C03\u7528\u603B\u6B21\u6570",children:[De,"\u6B21"]},"usertotalinvokes"),(0,e.jsxs)(S.Z.Item,{label:"\u5269\u4F59\u8C03\u7528\u6B21\u6570",children:[Be,"\u6B21"]},"usertotalinvokes"),(0,e.jsxs)(S.Z.Item,{label:"\u63A5\u53E3\u72B6\u6001",children:[t&&t.status===0?(0,e.jsx)(k.Z,{status:"default",text:A.$c[t.status]}):null,t&&t.status===1?(0,e.jsx)(k.Z,{status:"processing",text:A.$c[t.status]}):null,t&&t.status===2?(0,e.jsx)(k.Z,{status:"error",text:A.$c[t.status]}):null]},"status"),(0,e.jsx)(S.Z.Item,{label:"\u63A5\u53E3\u63CF\u8FF0",children:(l=t==null?void 0:t.description)!==null&&l!==void 0?l:"\u8BE5\u63A5\u53E3\u6682\u65E0\u63CF\u8FF0\u4FE1\u606F"},"description"),(0,e.jsx)(S.Z.Item,{label:"\u8BF7\u6C42\u793A\u4F8B",children:t!=null&&t.requestExample?(0,e.jsx)(ge.Z,{copyable:_e(t==null?void 0:t.requestExample),children:t==null?void 0:t.requestExample}):"\u8BE5\u63A5\u53E3\u6682\u65E0\u8BF7\u6C42\u793A\u4F8B"},"\u8BF7\u6C42\u793A\u4F8B")]})}),(0,e.jsx)("br",{}),(0,e.jsx)(D.Z,{style:{width:"100%"},tabList:za,activeTabKey:de,onTabChange:Ga,children:Ha[de]}),(0,e.jsx)("br",{}),de==="sampleCode"&&Ce==="javadoc"&&(0,e.jsx)(qe.ZP,{type:"inner",title:(0,e.jsx)("strong",{children:"\u5F00\u53D1\u8005 SDK\uFF08\u5FEB\u901F\u63A5\u5165API\u63A5\u53E3\uFF09"}),bordered:!0,extra:(0,e.jsxs)(ee.Link,{to:"/account/center",children:[(0,e.jsx)(Qe.Z,{})," \u524D\u5F80\u83B7\u53D6\u5F00\u53D1\u8005\u51ED\u8BC1"]}),children:(0,e.jsx)(Z.ZP,{size:"large",children:(0,e.jsxs)("a",{target:"_blank",href:"https://github.com/Chcwzzz/kaochang-api-backend",rel:"noreferrer",children:[(0,e.jsx)(Xe.Z,{})," Java SDK"]})})})]})},la=ia},63676:function(se,$,a){a.d($,{C2:function(){return H},Ci:function(){return v},Qg:function(){return M},WS:function(){return f},Wl:function(){return q},_2:function(){return I},fW:function(){return X},gW:function(){return B}});var w=a(15009),c=a.n(w),z=a(97857),p=a.n(z),Y=a(99289),R=a.n(Y),O=a(35312);function f(o,i){return U.apply(this,arguments)}function U(){return U=R()(c()().mark(function o(i,d){return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,O.request)("/admin/interfaceInfo/add",p()({method:"POST",headers:{"Content-Type":"application/json"},data:i},d||{})));case 1:case"end":return n.stop()}},o)})),U.apply(this,arguments)}function B(o,i){return K.apply(this,arguments)}function K(){return K=R()(c()().mark(function o(i,d){return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,O.request)("/admin/interfaceInfo/delete",p()({method:"POST",headers:{"Content-Type":"application/json"},data:i},d||{})));case 1:case"end":return n.stop()}},o)})),K.apply(this,arguments)}function M(o,i){return D.apply(this,arguments)}function D(){return D=R()(c()().mark(function o(i,d){return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,O.request)("/admin/interfaceInfo/get",p()({method:"GET",params:p()({},i)},d||{})));case 1:case"end":return n.stop()}},o)})),D.apply(this,arguments)}function S(o,i){return Z.apply(this,arguments)}function Z(){return Z=_asyncToGenerator(_regeneratorRuntime().mark(function o(i,d){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/admin/interfaceInfo/getInterfaceInfoByUrlAndMethod",_objectSpread({method:"GET",params:_objectSpread({},i)},d||{})));case 1:case"end":return n.stop()}},o)})),Z.apply(this,arguments)}function q(o,i){return k.apply(this,arguments)}function k(){return k=R()(c()().mark(function o(i,d){return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,O.request)("/admin/interfaceInfo/invoke",p()({method:"POST",headers:{"Content-Type":"application/json"},data:i},d||{})));case 1:case"end":return n.stop()}},o)})),k.apply(this,arguments)}function v(o,i){return A.apply(this,arguments)}function A(){return A=R()(c()().mark(function o(i,d){return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,O.request)("/admin/interfaceInfo/list/page",p()({method:"POST",headers:{"Content-Type":"application/json"},data:i},d||{})));case 1:case"end":return n.stop()}},o)})),A.apply(this,arguments)}function H(o,i){return j.apply(this,arguments)}function j(){return j=R()(c()().mark(function o(i,d){return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,O.request)("/admin/interfaceInfo/offline",p()({method:"POST",headers:{"Content-Type":"application/json"},data:i},d||{})));case 1:case"end":return n.stop()}},o)})),j.apply(this,arguments)}function I(o,i){return Q.apply(this,arguments)}function Q(){return Q=R()(c()().mark(function o(i,d){return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,O.request)("/admin/interfaceInfo/online",p()({method:"POST",headers:{"Content-Type":"application/json"},data:i},d||{})));case 1:case"end":return n.stop()}},o)})),Q.apply(this,arguments)}function X(o,i){return G.apply(this,arguments)}function G(){return G=R()(c()().mark(function o(i,d){return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,O.request)("/admin/interfaceInfo/update",p()({method:"POST",headers:{"Content-Type":"application/json"},data:i},d||{})));case 1:case"end":return n.stop()}},o)})),G.apply(this,arguments)}}}]);