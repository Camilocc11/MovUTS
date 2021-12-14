gx.evt.autoSkip = false;
gx.define('k2bfsg.k2btoolsaccessdenied', false, function () {
   this.ServerClass =  "k2bfsg.k2btoolsaccessdenied" ;
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
   this.e112g1_client=function()
   {
      this.clearMessages();
      this.call("com.movuts.k2bfsg.logout", []);
      this.call("com.movuts.k2bfsg.login", []);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e142g2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152g2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
   this.GXLastCtrlId =18;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"MAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLE3",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"PGMDESCRIPTORTEXTBLOCK", format:0,grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"SECTION1",grid:0};
   GXValidFnc[13]={ id: 13, fld:"IMAGE1",grid:0};
   GXValidFnc[14]={ id: 14, fld:"SECTION2",grid:0};
   GXValidFnc[15]={ id: 15, fld:"TITLE", format:0,grid:0};
   GXValidFnc[16]={ id: 16, fld:"DESCRIPTION", format:0,grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id:18 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLOGIN_AGAINACTION",gxz:"ZV5Login_AgainAction",gxold:"OV5Login_AgainAction",gxvar:"AV5Login_AgainAction",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV5Login_AgainAction=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV5Login_AgainAction=Value},v2c:function(){gx.fn.setControlValue("vLOGIN_AGAINACTION",gx.O.AV5Login_AgainAction,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV5Login_AgainAction=this.val()},val:function(){return gx.fn.getControlValue("vLOGIN_AGAINACTION")},nac:gx.falseFn,evt:"e112g1_client"};
   this.AV5Login_AgainAction = "" ;
   this.Events = {"e142g2_client": ["ENTER", true] ,"e152g2_client": ["CANCEL", true] ,"e112g1_client": ["'LOGINAGAIN'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["START"] = [[],[{av:'AV5Login_AgainAction',fld:'vLOGIN_AGAINACTION',pic:''}]];
   this.EvtParms["'LOGINAGAIN'"] = [[],[]];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.k2btoolsaccessdenied);});
