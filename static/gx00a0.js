gx.evt.autoSkip=!1;gx.define("gx00a0",!1,function(){var n,t;this.ServerClass="gx00a0";this.PackageName="com.movuts";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV11pRutConRutSec=gx.fn.getIntegerValue("vPRUTCONRUTSEC",".");this.AV12pRutConUsuSec=gx.fn.getIntegerValue("vPRUTCONUSUSEC",".");this.AV13pRutPajSec=gx.fn.getIntegerValue("vPRUTPAJSEC",".")};this.Validv_Crutpajest=function(){return this.validCliEvt("Validv_Crutpajest",0,function(){try{var n=gx.util.balloon.getNew("vCRUTPAJEST");if(this.AnyError=0,!(this.AV10cRutPajEst==1||this.AV10cRutPajEst==2||0===this.AV10cRutPajEst))try{n.setError("Campo Estado fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e164d1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle")),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]),gx.$.Deferred().resolve()};this.e114d1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("RUTCONRUTSECFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("RUTCONRUTSECFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCRUTCONRUTSEC","Visible",!0)):(gx.fn.setCtrlProperty("RUTCONRUTSECFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCRUTCONRUTSEC","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("RUTCONRUTSECFILTERCONTAINER","Class")',ctrl:"RUTCONRUTSECFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRUTCONRUTSEC","Visible")',ctrl:"vCRUTCONRUTSEC",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e124d1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("RUTCONUSUSECFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("RUTCONUSUSECFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCRUTCONUSUSEC","Visible",!0)):(gx.fn.setCtrlProperty("RUTCONUSUSECFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCRUTCONUSUSEC","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("RUTCONUSUSECFILTERCONTAINER","Class")',ctrl:"RUTCONUSUSECFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRUTCONUSUSEC","Visible")',ctrl:"vCRUTCONUSUSEC",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e134d1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("RUTPAJSECFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("RUTPAJSECFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCRUTPAJSEC","Visible",!0)):(gx.fn.setCtrlProperty("RUTPAJSECFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCRUTPAJSEC","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("RUTPAJSECFILTERCONTAINER","Class")',ctrl:"RUTPAJSECFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRUTPAJSEC","Visible")',ctrl:"vCRUTPAJSEC",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e144d1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("RUTPAJUSUSECFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("RUTPAJUSUSECFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCRUTPAJUSUSEC","Visible",!0)):(gx.fn.setCtrlProperty("RUTPAJUSUSECFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCRUTPAJUSUSEC","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("RUTPAJUSUSECFILTERCONTAINER","Class")',ctrl:"RUTPAJUSUSECFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRUTPAJUSUSEC","Visible")',ctrl:"vCRUTPAJUSUSEC",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e154d1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("RUTPAJESTFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("RUTPAJESTFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCRUTPAJEST","Visible",!0)):(gx.fn.setCtrlProperty("RUTPAJESTFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCRUTPAJEST","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("RUTPAJESTFILTERCONTAINER","Class")',ctrl:"RUTPAJESTFILTERCONTAINER",prop:"Class"},{ctrl:"vCRUTPAJEST"}]),gx.$.Deferred().resolve()};this.e194d2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e204d1_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,65,66,67,68,69,70,71,72,73];this.GXLastCtrlId=73;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",64,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00a0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",65,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(53,66,"RUTCONRUTSEC","Ruta","","RutConRutSec","int",0,"px",10,10,"right",null,[],53,"RutConRutSec",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(54,67,"RUTCONUSUSEC","Conductor","","RutConUsuSec","int",0,"px",10,10,"right",null,[],54,"RutConUsuSec",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(51,68,"RUTPAJSEC","Pasajero","","RutPajSec","int",0,"px",10,10,"right",null,[],51,"RutPajSec",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(46,69,"RUTPAJUSUSEC","Pasajero","","RutPajUsuSec","int",0,"px",10,10,"right",null,[],46,"RutPajUsuSec",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addComboBox(52,70,"RUTPAJEST","Estado","RutPajEst","int",null,0,!0,!1,0,"px","WWColumn OptionalColumn");this.Grid1Container.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"ADVANCEDCONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"RUTCONRUTSECFILTERCONTAINER",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"LBLRUTCONRUTSECFILTER",format:1,grid:0,evt:"e114d1_client"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCRUTCONRUTSEC",gxz:"ZV6cRutConRutSec",gxold:"OV6cRutConRutSec",gxvar:"AV6cRutConRutSec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV6cRutConRutSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV6cRutConRutSec=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCRUTCONRUTSEC",gx.O.AV6cRutConRutSec,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6cRutConRutSec=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCRUTCONRUTSEC",".")},nac:gx.falseFn};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"RUTCONUSUSECFILTERCONTAINER",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"LBLRUTCONUSUSECFILTER",format:1,grid:0,evt:"e124d1_client"};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCRUTCONUSUSEC",gxz:"ZV7cRutConUsuSec",gxold:"OV7cRutConUsuSec",gxvar:"AV7cRutConUsuSec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV7cRutConUsuSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV7cRutConUsuSec=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCRUTCONUSUSEC",gx.O.AV7cRutConUsuSec,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV7cRutConUsuSec=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCRUTCONUSUSEC",".")},nac:gx.falseFn};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"RUTPAJSECFILTERCONTAINER",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"LBLRUTPAJSECFILTER",format:1,grid:0,evt:"e134d1_client"};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCRUTPAJSEC",gxz:"ZV8cRutPajSec",gxold:"OV8cRutPajSec",gxvar:"AV8cRutPajSec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8cRutPajSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV8cRutPajSec=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCRUTPAJSEC",gx.O.AV8cRutPajSec,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV8cRutPajSec=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCRUTPAJSEC",".")},nac:gx.falseFn};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"RUTPAJUSUSECFILTERCONTAINER",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"LBLRUTPAJUSUSECFILTER",format:1,grid:0,evt:"e144d1_client"};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCRUTPAJUSUSEC",gxz:"ZV9cRutPajUsuSec",gxold:"OV9cRutPajUsuSec",gxvar:"AV9cRutPajUsuSec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV9cRutPajUsuSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV9cRutPajUsuSec=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCRUTPAJUSUSEC",gx.O.AV9cRutPajUsuSec,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV9cRutPajUsuSec=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCRUTPAJUSUSEC",".")},nac:gx.falseFn};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"RUTPAJESTFILTERCONTAINER",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"LBLRUTPAJESTFILTER",format:1,grid:0,evt:"e154d1_client"};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Crutpajest,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCRUTPAJEST",gxz:"ZV10cRutPajEst",gxold:"OV10cRutPajEst",gxvar:"AV10cRutPajEst",ucs:[],op:[56],ip:[56],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV10cRutPajEst=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV10cRutPajEst=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vCRUTPAJEST",gx.O.AV10cRutPajEst)},c2v:function(){this.val()!==undefined&&(gx.O.AV10cRutPajEst=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCRUTPAJEST",".")},nac:gx.falseFn};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"GRIDTABLE",grid:0};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"BTNTOGGLE",grid:0,evt:"e164d1_client"};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[65]={id:65,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV5LinkSelection=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5LinkSelection=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(64),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(n){gx.O.AV17Linkselection_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV5LinkSelection=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(64))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(64))},gxvar_GXI:"AV17Linkselection_GXI",nac:gx.falseFn};n[66]={id:66,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RUTCONRUTSEC",gxz:"Z53RutConRutSec",gxold:"O53RutConRutSec",gxvar:"A53RutConRutSec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A53RutConRutSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z53RutConRutSec=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RUTCONRUTSEC",n||gx.fn.currentGridRowImpl(64),gx.O.A53RutConRutSec,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A53RutConRutSec=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RUTCONRUTSEC",n||gx.fn.currentGridRowImpl(64),".")},nac:gx.falseFn};n[67]={id:67,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RUTCONUSUSEC",gxz:"Z54RutConUsuSec",gxold:"O54RutConUsuSec",gxvar:"A54RutConUsuSec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A54RutConUsuSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z54RutConUsuSec=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RUTCONUSUSEC",n||gx.fn.currentGridRowImpl(64),gx.O.A54RutConUsuSec,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A54RutConUsuSec=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RUTCONUSUSEC",n||gx.fn.currentGridRowImpl(64),".")},nac:gx.falseFn};n[68]={id:68,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RUTPAJSEC",gxz:"Z51RutPajSec",gxold:"O51RutPajSec",gxvar:"A51RutPajSec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A51RutPajSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z51RutPajSec=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RUTPAJSEC",n||gx.fn.currentGridRowImpl(64),gx.O.A51RutPajSec,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A51RutPajSec=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RUTPAJSEC",n||gx.fn.currentGridRowImpl(64),".")},nac:gx.falseFn};n[69]={id:69,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RUTPAJUSUSEC",gxz:"Z46RutPajUsuSec",gxold:"O46RutPajUsuSec",gxvar:"A46RutPajUsuSec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A46RutPajUsuSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z46RutPajUsuSec=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RUTPAJUSUSEC",n||gx.fn.currentGridRowImpl(64),gx.O.A46RutPajUsuSec,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A46RutPajUsuSec=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RUTPAJUSUSEC",n||gx.fn.currentGridRowImpl(64),".")},nac:gx.falseFn};n[70]={id:70,lvl:2,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:1,isacc:0,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RUTPAJEST",gxz:"Z52RutPajEst",gxold:"O52RutPajEst",gxvar:"A52RutPajEst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A52RutPajEst=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z52RutPajEst=gx.num.intval(n))},v2c:function(n){gx.fn.setGridComboBoxValue("RUTPAJEST",n||gx.fn.currentGridRowImpl(64),gx.O.A52RutPajEst);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A52RutPajEst=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RUTPAJEST",n||gx.fn.currentGridRowImpl(64),".")},nac:gx.falseFn};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"",grid:0};n[73]={id:73,fld:"BTN_CANCEL",grid:0,evt:"e204d1_client"};this.AV6cRutConRutSec=0;this.ZV6cRutConRutSec=0;this.OV6cRutConRutSec=0;this.AV7cRutConUsuSec=0;this.ZV7cRutConUsuSec=0;this.OV7cRutConUsuSec=0;this.AV8cRutPajSec=0;this.ZV8cRutPajSec=0;this.OV8cRutPajSec=0;this.AV9cRutPajUsuSec=0;this.ZV9cRutPajUsuSec=0;this.OV9cRutPajUsuSec=0;this.AV10cRutPajEst=0;this.ZV10cRutPajEst=0;this.OV10cRutPajEst=0;this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z53RutConRutSec=0;this.O53RutConRutSec=0;this.Z54RutConUsuSec=0;this.O54RutConUsuSec=0;this.Z51RutPajSec=0;this.O51RutPajSec=0;this.Z46RutPajUsuSec=0;this.O46RutPajUsuSec=0;this.Z52RutPajEst=0;this.O52RutPajEst=0;this.AV6cRutConRutSec=0;this.AV7cRutConUsuSec=0;this.AV8cRutPajSec=0;this.AV9cRutPajUsuSec=0;this.AV10cRutPajEst=0;this.AV11pRutConRutSec=0;this.AV12pRutConUsuSec=0;this.AV13pRutPajSec=0;this.AV5LinkSelection="";this.A53RutConRutSec=0;this.A54RutConUsuSec=0;this.A51RutPajSec=0;this.A46RutPajUsuSec=0;this.A52RutPajEst=0;this.Events={e194d2_client:["ENTER",!0],e204d1_client:["CANCEL",!0],e164d1_client:["'TOGGLE'",!1],e114d1_client:["LBLRUTCONRUTSECFILTER.CLICK",!1],e124d1_client:["LBLRUTCONUSUSECFILTER.CLICK",!1],e134d1_client:["LBLRUTPAJSECFILTER.CLICK",!1],e144d1_client:["LBLRUTPAJUSUSECFILTER.CLICK",!1],e154d1_client:["LBLRUTPAJESTFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cRutConRutSec",fld:"vCRUTCONRUTSEC",pic:"ZZZZZZZZZ9"},{av:"AV7cRutConUsuSec",fld:"vCRUTCONUSUSEC",pic:"ZZZZZZZZZ9"},{av:"AV8cRutPajSec",fld:"vCRUTPAJSEC",pic:"ZZZZZZZZZ9"},{av:"AV9cRutPajUsuSec",fld:"vCRUTPAJUSUSEC",pic:"ZZZZZZZZZ9"},{ctrl:"vCRUTPAJEST"},{av:"AV10cRutPajEst",fld:"vCRUTPAJEST",pic:"9"}],[]];this.EvtParms.START=[[],[{ctrl:"FORM",prop:"Caption"}]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLRUTCONRUTSECFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("RUTCONRUTSECFILTERCONTAINER","Class")',ctrl:"RUTCONRUTSECFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("RUTCONRUTSECFILTERCONTAINER","Class")',ctrl:"RUTCONRUTSECFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRUTCONRUTSEC","Visible")',ctrl:"vCRUTCONRUTSEC",prop:"Visible"}]];this.EvtParms["LBLRUTCONUSUSECFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("RUTCONUSUSECFILTERCONTAINER","Class")',ctrl:"RUTCONUSUSECFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("RUTCONUSUSECFILTERCONTAINER","Class")',ctrl:"RUTCONUSUSECFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRUTCONUSUSEC","Visible")',ctrl:"vCRUTCONUSUSEC",prop:"Visible"}]];this.EvtParms["LBLRUTPAJSECFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("RUTPAJSECFILTERCONTAINER","Class")',ctrl:"RUTPAJSECFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("RUTPAJSECFILTERCONTAINER","Class")',ctrl:"RUTPAJSECFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRUTPAJSEC","Visible")',ctrl:"vCRUTPAJSEC",prop:"Visible"}]];this.EvtParms["LBLRUTPAJUSUSECFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("RUTPAJUSUSECFILTERCONTAINER","Class")',ctrl:"RUTPAJUSUSECFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("RUTPAJUSUSECFILTERCONTAINER","Class")',ctrl:"RUTPAJUSUSECFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRUTPAJUSUSEC","Visible")',ctrl:"vCRUTPAJUSUSEC",prop:"Visible"}]];this.EvtParms["LBLRUTPAJESTFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("RUTPAJESTFILTERCONTAINER","Class")',ctrl:"RUTPAJESTFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("RUTPAJESTFILTERCONTAINER","Class")',ctrl:"RUTPAJESTFILTERCONTAINER",prop:"Class"},{ctrl:"vCRUTPAJEST"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION",pic:""}]];this.EvtParms.ENTER=[[{av:"A53RutConRutSec",fld:"RUTCONRUTSEC",pic:"ZZZZZZZZZ9",hsh:!0},{av:"A54RutConUsuSec",fld:"RUTCONUSUSEC",pic:"ZZZZZZZZZ9",hsh:!0},{av:"A51RutPajSec",fld:"RUTPAJSEC",pic:"ZZZZZZZZZ9",hsh:!0}],[{av:"AV11pRutConRutSec",fld:"vPRUTCONRUTSEC",pic:"ZZZZZZZZZ9"},{av:"AV12pRutConUsuSec",fld:"vPRUTCONUSUSEC",pic:"ZZZZZZZZZ9"},{av:"AV13pRutPajSec",fld:"vPRUTPAJSEC",pic:"ZZZZZZZZZ9"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cRutConRutSec",fld:"vCRUTCONRUTSEC",pic:"ZZZZZZZZZ9"},{av:"AV7cRutConUsuSec",fld:"vCRUTCONUSUSEC",pic:"ZZZZZZZZZ9"},{av:"AV8cRutPajSec",fld:"vCRUTPAJSEC",pic:"ZZZZZZZZZ9"},{av:"AV9cRutPajUsuSec",fld:"vCRUTPAJUSUSEC",pic:"ZZZZZZZZZ9"},{ctrl:"vCRUTPAJEST"},{av:"AV10cRutPajEst",fld:"vCRUTPAJEST",pic:"9"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cRutConRutSec",fld:"vCRUTCONRUTSEC",pic:"ZZZZZZZZZ9"},{av:"AV7cRutConUsuSec",fld:"vCRUTCONUSUSEC",pic:"ZZZZZZZZZ9"},{av:"AV8cRutPajSec",fld:"vCRUTPAJSEC",pic:"ZZZZZZZZZ9"},{av:"AV9cRutPajUsuSec",fld:"vCRUTPAJUSUSEC",pic:"ZZZZZZZZZ9"},{ctrl:"vCRUTPAJEST"},{av:"AV10cRutPajEst",fld:"vCRUTPAJEST",pic:"9"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cRutConRutSec",fld:"vCRUTCONRUTSEC",pic:"ZZZZZZZZZ9"},{av:"AV7cRutConUsuSec",fld:"vCRUTCONUSUSEC",pic:"ZZZZZZZZZ9"},{av:"AV8cRutPajSec",fld:"vCRUTPAJSEC",pic:"ZZZZZZZZZ9"},{av:"AV9cRutPajUsuSec",fld:"vCRUTPAJUSUSEC",pic:"ZZZZZZZZZ9"},{ctrl:"vCRUTPAJEST"},{av:"AV10cRutPajEst",fld:"vCRUTPAJEST",pic:"9"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cRutConRutSec",fld:"vCRUTCONRUTSEC",pic:"ZZZZZZZZZ9"},{av:"AV7cRutConUsuSec",fld:"vCRUTCONUSUSEC",pic:"ZZZZZZZZZ9"},{av:"AV8cRutPajSec",fld:"vCRUTPAJSEC",pic:"ZZZZZZZZZ9"},{av:"AV9cRutPajUsuSec",fld:"vCRUTPAJUSUSEC",pic:"ZZZZZZZZZ9"},{ctrl:"vCRUTPAJEST"},{av:"AV10cRutPajEst",fld:"vCRUTPAJEST",pic:"9"}],[]];this.EvtParms.VALIDV_CRUTPAJEST=[[],[]];this.setVCMap("AV11pRutConRutSec","vPRUTCONRUTSEC",0,"int",10,0);this.setVCMap("AV12pRutConUsuSec","vPRUTCONUSUSEC",0,"int",10,0);this.setVCMap("AV13pRutPajSec","vPRUTPAJSEC",0,"int",10,0);t.addRefreshingParm({rfrProp:"Rows",gxGrid:"Grid1"});t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[36]);t.addRefreshingVar(this.GXValidFnc[46]);t.addRefreshingVar(this.GXValidFnc[56]);t.addRefreshingParm(this.GXValidFnc[16]);t.addRefreshingParm(this.GXValidFnc[26]);t.addRefreshingParm(this.GXValidFnc[36]);t.addRefreshingParm(this.GXValidFnc[46]);t.addRefreshingParm(this.GXValidFnc[56]);this.Initialize()});gx.wi(function(){gx.createParentObj(gx00a0)})