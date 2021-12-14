gx.evt.autoSkip = false;
gx.define('k2bfsg.masterpagelogin', false, function () {
   this.ServerClass =  "k2bfsg.masterpagelogin" ;
   this.PackageName =  "com.movuts" ;
   this.setObjectType("web");
   this.IsMasterPage=true;
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
   };
   this.e132f2_client=function()
   {
      return this.executeServerEvent("ENTER_MPAGE", true, null, false, false);
   };
   this.e142f2_client=function()
   {
      return this.executeServerEvent("CANCEL_MPAGE", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"MAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   this.Events = {"e132f2_client": ["ENTER_MPAGE", true] ,"e142f2_client": ["CANCEL_MPAGE", true]};
   this.EvtParms["REFRESH_MPAGE"] = [[],[]];
   this.EvtParms["START_MPAGE"] = [[{ctrl:'FORM_MPAGE',prop:'Headerrawhtml'}],[{ctrl:'FORM_MPAGE',prop:'Headerrawhtml'}]];
   this.Initialize( );
});
gx.wi( function() { gx.createMasterPage(k2bfsg.masterpagelogin);});
