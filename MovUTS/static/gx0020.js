gx.evt.autoSkip=!1;gx.define("gx0020",!1,function(){var n,t;this.ServerClass="gx0020";this.PackageName="com.movuts";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV9pConCod=gx.fn.getControlValue("vPCONCOD")};this.e143k1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle")),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]),gx.$.Deferred().resolve()};this.e113k1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("CONCODFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("CONCODFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCCONCOD","Visible",!0)):(gx.fn.setCtrlProperty("CONCODFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCCONCOD","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("CONCODFILTERCONTAINER","Class")',ctrl:"CONCODFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCONCOD","Visible")',ctrl:"vCCONCOD",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e123k1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("CONDESFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("CONDESFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCCONDES","Visible",!0)):(gx.fn.setCtrlProperty("CONDESFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCCONDES","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("CONDESFILTERCONTAINER","Class")',ctrl:"CONDESFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCONDES","Visible")',ctrl:"vCCONDES",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e133k1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("CONNUEFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("CONNUEFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCCONNUE","Visible",!0)):(gx.fn.setCtrlProperty("CONNUEFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCCONNUE","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("CONNUEFILTERCONTAINER","Class")',ctrl:"CONNUEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCONNUE","Visible")',ctrl:"vCCONNUE",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e173k2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e183k1_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50];this.GXLastCtrlId=50;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",44,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0020",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",45,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(5,46,"CONCOD","Codigo","","ConCod","svchar",0,"px",20,20,"left",null,[],5,"ConCod",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(6,47,"CONDES","Descripción","","ConDes","svchar",0,"px",100,80,"left",null,[],6,"ConDes",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");this.Grid1Container.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"ADVANCEDCONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"CONCODFILTERCONTAINER",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"LBLCONCODFILTER",format:1,grid:0,evt:"e113k1_client"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCCONCOD",gxz:"ZV6cConCod",gxold:"OV6cConCod",gxvar:"AV6cConCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV6cConCod=n)},v2z:function(n){n!==undefined&&(gx.O.ZV6cConCod=n)},v2c:function(){gx.fn.setControlValue("vCCONCOD",gx.O.AV6cConCod,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6cConCod=this.val())},val:function(){return gx.fn.getControlValue("vCCONCOD")},nac:gx.falseFn};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"CONDESFILTERCONTAINER",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"LBLCONDESFILTER",format:1,grid:0,evt:"e123k1_client"};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCCONDES",gxz:"ZV7cConDes",gxold:"OV7cConDes",gxvar:"AV7cConDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV7cConDes=n)},v2z:function(n){n!==undefined&&(gx.O.ZV7cConDes=n)},v2c:function(){gx.fn.setControlValue("vCCONDES",gx.O.AV7cConDes,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV7cConDes=this.val())},val:function(){return gx.fn.getControlValue("vCCONDES")},nac:gx.falseFn};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"CONNUEFILTERCONTAINER",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"LBLCONNUEFILTER",format:1,grid:0,evt:"e133k1_client"};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCCONNUE",gxz:"ZV8cConNue",gxold:"OV8cConNue",gxvar:"AV8cConNue",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8cConNue=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV8cConNue=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCCONNUE",gx.O.AV8cConNue,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV8cConNue=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCCONNUE",".")},nac:gx.falseFn};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"GRIDTABLE",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"BTNTOGGLE",grid:0,evt:"e143k1_client"};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[45]={id:45,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV5LinkSelection=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5LinkSelection=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(44),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(n){gx.O.AV13Linkselection_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV5LinkSelection=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(44))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(44))},gxvar_GXI:"AV13Linkselection_GXI",nac:gx.falseFn};n[46]={id:46,lvl:2,type:"svchar",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONCOD",gxz:"Z5ConCod",gxold:"O5ConCod",gxvar:"A5ConCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A5ConCod=n)},v2z:function(n){n!==undefined&&(gx.O.Z5ConCod=n)},v2c:function(n){gx.fn.setGridControlValue("CONCOD",n||gx.fn.currentGridRowImpl(44),gx.O.A5ConCod,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A5ConCod=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CONCOD",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[47]={id:47,lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:1,isacc:0,grid:44,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONDES",gxz:"Z6ConDes",gxold:"O6ConDes",gxvar:"A6ConDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A6ConDes=n)},v2z:function(n){n!==undefined&&(gx.O.Z6ConDes=n)},v2c:function(n){gx.fn.setGridControlValue("CONDES",n||gx.fn.currentGridRowImpl(44),gx.O.A6ConDes,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A6ConDes=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CONDES",n||gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"BTN_CANCEL",grid:0,evt:"e183k1_client"};this.AV6cConCod="";this.ZV6cConCod="";this.OV6cConCod="";this.AV7cConDes="";this.ZV7cConDes="";this.OV7cConDes="";this.AV8cConNue=0;this.ZV8cConNue=0;this.OV8cConNue=0;this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z5ConCod="";this.O5ConCod="";this.Z6ConDes="";this.O6ConDes="";this.AV6cConCod="";this.AV7cConDes="";this.AV8cConNue=0;this.AV9pConCod="";this.A10ConNue=0;this.AV5LinkSelection="";this.A5ConCod="";this.A6ConDes="";this.Events={e173k2_client:["ENTER",!0],e183k1_client:["CANCEL",!0],e143k1_client:["'TOGGLE'",!1],e113k1_client:["LBLCONCODFILTER.CLICK",!1],e123k1_client:["LBLCONDESFILTER.CLICK",!1],e133k1_client:["LBLCONNUEFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cConCod",fld:"vCCONCOD",pic:""},{av:"AV7cConDes",fld:"vCCONDES",pic:""},{av:"AV8cConNue",fld:"vCCONNUE",pic:"ZZZZZZZZZ9"}],[]];this.EvtParms.START=[[],[{ctrl:"FORM",prop:"Caption"}]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLCONCODFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("CONCODFILTERCONTAINER","Class")',ctrl:"CONCODFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("CONCODFILTERCONTAINER","Class")',ctrl:"CONCODFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCONCOD","Visible")',ctrl:"vCCONCOD",prop:"Visible"}]];this.EvtParms["LBLCONDESFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("CONDESFILTERCONTAINER","Class")',ctrl:"CONDESFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("CONDESFILTERCONTAINER","Class")',ctrl:"CONDESFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCONDES","Visible")',ctrl:"vCCONDES",prop:"Visible"}]];this.EvtParms["LBLCONNUEFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("CONNUEFILTERCONTAINER","Class")',ctrl:"CONNUEFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("CONNUEFILTERCONTAINER","Class")',ctrl:"CONNUEFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCCONNUE","Visible")',ctrl:"vCCONNUE",prop:"Visible"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION",pic:""}]];this.EvtParms.ENTER=[[{av:"A5ConCod",fld:"CONCOD",pic:"",hsh:!0}],[{av:"AV9pConCod",fld:"vPCONCOD",pic:""}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cConCod",fld:"vCCONCOD",pic:""},{av:"AV7cConDes",fld:"vCCONDES",pic:""},{av:"AV8cConNue",fld:"vCCONNUE",pic:"ZZZZZZZZZ9"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cConCod",fld:"vCCONCOD",pic:""},{av:"AV7cConDes",fld:"vCCONDES",pic:""},{av:"AV8cConNue",fld:"vCCONNUE",pic:"ZZZZZZZZZ9"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cConCod",fld:"vCCONCOD",pic:""},{av:"AV7cConDes",fld:"vCCONDES",pic:""},{av:"AV8cConNue",fld:"vCCONNUE",pic:"ZZZZZZZZZ9"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cConCod",fld:"vCCONCOD",pic:""},{av:"AV7cConDes",fld:"vCCONDES",pic:""},{av:"AV8cConNue",fld:"vCCONNUE",pic:"ZZZZZZZZZ9"}],[]];this.setVCMap("AV9pConCod","vPCONCOD",0,"svchar",20,0);t.addRefreshingParm({rfrProp:"Rows",gxGrid:"Grid1"});t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[36]);t.addRefreshingParm(this.GXValidFnc[16]);t.addRefreshingParm(this.GXValidFnc[26]);t.addRefreshingParm(this.GXValidFnc[36]);this.Initialize()});gx.wi(function(){gx.createParentObj(gx0020)})