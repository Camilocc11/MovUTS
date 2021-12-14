gx.evt.autoSkip = false;
gx.define('k2bfsg.logout', false, function () {
   this.ServerClass =  "k2bfsg.logout" ;
   this.PackageName =  "com.movuts" ;
   this.setObjectType("web");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
   };
   this.e122x2_client=function()
   {
      return this.executeServerEvent("'CONFIRMYES'", false, null, false, false);
   };
   this.e132x2_client=function()
   {
      return this.executeServerEvent("'CONFIRMNO'", false, null, false, false);
   };
   this.e152x2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e162x2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,9,12,15,16,19,22,24];
   this.GXLastCtrlId =24;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"MAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLECONDITIONALCONFIRM",grid:0};
   GXValidFnc[9]={ id: 9, fld:"SECTION_CONDCONF_DIALOG",grid:0};
   GXValidFnc[12]={ id: 12, fld:"SECTION_CONDCONF_DIALOG_INNER",grid:0};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id:16 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONFIRMMESSAGE",gxz:"ZV9ConfirmMessage",gxold:"OV9ConfirmMessage",gxvar:"AV9ConfirmMessage",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV9ConfirmMessage=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV9ConfirmMessage=Value},v2c:function(){gx.fn.setControlValue("vCONFIRMMESSAGE",gx.O.AV9ConfirmMessage,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV9ConfirmMessage=this.val()},val:function(){return gx.fn.getControlValue("vCONFIRMMESSAGE")},nac:gx.falseFn};
   GXValidFnc[19]={ id: 19, fld:"CONFIRM_HIDDEN_ACTIONSTABLE",grid:0};
   GXValidFnc[22]={ id: 22, fld:"I_BUTTONCONFIRMYES",grid:0,evt:"e122x2_client"};
   GXValidFnc[24]={ id: 24, fld:"I_BUTTONCONFIRMNO",grid:0,evt:"e132x2_client"};
   this.AV9ConfirmMessage = "" ;
   this.ZV9ConfirmMessage = "" ;
   this.OV9ConfirmMessage = "" ;
   this.AV9ConfirmMessage = "" ;
   this.Events = {"e122x2_client": ["'CONFIRMYES'", true] ,"e132x2_client": ["'CONFIRMNO'", true] ,"e152x2_client": ["ENTER", true] ,"e162x2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["START"] = [[],[{av:'AV9ConfirmMessage',fld:'vCONFIRMMESSAGE',pic:''}]];
   this.EvtParms["'CONFIRMYES'"] = [[],[]];
   this.EvtParms["'CONFIRMNO'"] = [[],[]];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.logout);});
