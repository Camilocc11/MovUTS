gx.evt.autoSkip=!1;gx.define("k2blogout",!1,function(){this.ServerClass="k2blogout";this.PackageName="com.movuts";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.e121z2_client=function(){return this.executeServerEvent("'CONFIRMYES'",!1,null,!1,!1)};this.e131z2_client=function(){return this.executeServerEvent("'CONFIRMNO'",!1,null,!1,!1)};this.e151z2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e161z2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,9,12,15,16,19,22,24];this.GXLastCtrlId=24;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLECONDITIONALCONFIRM",grid:0};n[9]={id:9,fld:"SECTION_CONDCONF_DIALOG",grid:0};n[12]={id:12,fld:"SECTION_CONDCONF_DIALOG_INNER",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONFIRMMESSAGE",gxz:"ZV5ConfirmMessage",gxold:"OV5ConfirmMessage",gxvar:"AV5ConfirmMessage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV5ConfirmMessage=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5ConfirmMessage=n)},v2c:function(){gx.fn.setControlValue("vCONFIRMMESSAGE",gx.O.AV5ConfirmMessage,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV5ConfirmMessage=this.val())},val:function(){return gx.fn.getControlValue("vCONFIRMMESSAGE")},nac:gx.falseFn};n[19]={id:19,fld:"CONFIRM_HIDDEN_ACTIONSTABLE",grid:0};n[22]={id:22,fld:"I_BUTTONCONFIRMYES",grid:0,evt:"e121z2_client"};n[24]={id:24,fld:"I_BUTTONCONFIRMNO",grid:0,evt:"e131z2_client"};this.AV5ConfirmMessage="";this.ZV5ConfirmMessage="";this.OV5ConfirmMessage="";this.AV5ConfirmMessage="";this.Events={e121z2_client:["'CONFIRMYES'",!0],e131z2_client:["'CONFIRMNO'",!0],e151z2_client:["ENTER",!0],e161z2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.START=[[],[{av:"AV5ConfirmMessage",fld:"vCONFIRMMESSAGE",pic:""}]];this.EvtParms["'CONFIRMYES'"]=[[],[]];this.EvtParms["'CONFIRMNO'"]=[[],[]];this.Initialize()});gx.wi(function(){gx.createParentObj(k2blogout)})