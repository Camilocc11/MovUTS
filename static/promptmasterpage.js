gx.evt.autoSkip=!1;gx.define("promptmasterpage",!1,function(){this.ServerClass="promptmasterpage";this.PackageName="com.movuts";this.setObjectType("web");this.IsMasterPage=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.e14032_client=function(){return this.executeServerEvent("ENTER_MPAGE",!0,null,!1,!1)};this.e15032_client=function(){return this.executeServerEvent("CANCEL_MPAGE",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,8,15,18,21,24,27,28,31];this.GXLastCtrlId=31;n[2]={id:2,fld:"TABLE2",grid:0};n[8]={id:8,fld:"TABLE3",grid:0};n[15]={id:15,fld:"TABLE4",grid:0};n[18]={id:18,fld:"TABLE5",grid:0};n[21]={id:21,fld:"TABLE6",grid:0};n[24]={id:24,fld:"TABLE1",grid:0};n[27]={id:27,fld:"TEXTBLOCK1",format:0,grid:0};n[28]={id:28,fld:"TABLE7",grid:0};n[31]={id:31,fld:"TABLE8",grid:0};this.Events={e14032_client:["ENTER_MPAGE",!0],e15032_client:["CANCEL_MPAGE",!0]};this.EvtParms.REFRESH_MPAGE=[[],[]];this.EvtParms.START_MPAGE=[[],[]];this.Initialize()});gx.wi(function(){gx.createMasterPage(promptmasterpage)})