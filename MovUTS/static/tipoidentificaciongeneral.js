gx.evt.autoSkip=!1;gx.define("tipoidentificaciongeneral",!0,function(n){this.ServerClass="tipoidentificaciongeneral";this.PackageName="com.movuts";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV6TipIdeSec=gx.fn.getIntegerValue("vTIPIDESEC",".");this.AV8TabCode=gx.fn.getControlValue("vTABCODE")};this.e143j2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e153j2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14];this.GXLastCtrlId=14;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"MAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TABLE1",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"TABLE3",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};this.AV6TipIdeSec=0;this.AV8TabCode="";this.Gx_mode="";this.Events={e143j2_client:["ENTER",!0],e153j2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV6TipIdeSec",fld:"vTIPIDESEC",pic:"ZZZZZZZZZ9"}],[{ctrl:"TRANSACTIONCOMPONENT",prop:"Visible"},{ctrl:"TRANSACTIONCOMPONENT"}]];this.EvtParms.START=[[],[]];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV6TipIdeSec","vTIPIDESEC",0,"int",10,0);this.setVCMap("AV8TabCode","vTABCODE",0,"char",20,0);this.Initialize();this.setComponent({id:"TRANSACTIONCOMPONENT",GXClass:null,Prefix:"W0015",lvl:1})})