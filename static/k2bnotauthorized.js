gx.evt.autoSkip=!1;gx.define("k2bnotauthorized",!1,function(){this.ServerClass="k2bnotauthorized";this.PackageName="com.movuts";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV5EntityName=gx.fn.getControlValue("vENTITYNAME");this.AV8TransactionName=gx.fn.getControlValue("vTRANSACTIONNAME");this.AV7StandardActivityType=gx.fn.getControlValue("vSTANDARDACTIVITYTYPE");this.AV9UserActivityType=gx.fn.getControlValue("vUSERACTIVITYTYPE");this.AV6ProgramName=gx.fn.getControlValue("vPROGRAMNAME")};this.e130i2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e140i2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2];this.GXLastCtrlId=2;n[2]={id:2,fld:"TABLE1",grid:0};this.AV5EntityName="";this.AV8TransactionName="";this.AV7StandardActivityType="";this.AV9UserActivityType="";this.AV6ProgramName="";this.Events={e130i2_client:["ENTER",!0],e140i2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.START=[[],[]];this.setVCMap("AV5EntityName","vENTITYNAME",0,"svchar",256,0);this.setVCMap("AV8TransactionName","vTRANSACTIONNAME",0,"svchar",256,0);this.setVCMap("AV7StandardActivityType","vSTANDARDACTIVITYTYPE",0,"char",30,0);this.setVCMap("AV9UserActivityType","vUSERACTIVITYTYPE",0,"svchar",256,0);this.setVCMap("AV6ProgramName","vPROGRAMNAME",0,"svchar",256,0);this.Initialize()});gx.wi(function(){gx.createParentObj(k2bnotauthorized)})