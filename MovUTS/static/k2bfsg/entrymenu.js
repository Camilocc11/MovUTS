gx.evt.autoSkip = false;
gx.define('k2bfsg.entrymenu', false, function () {
   this.ServerClass =  "k2bfsg.entrymenu" ;
   this.PackageName =  "com.movuts" ;
   this.setObjectType("web");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV16MenuId=gx.fn.getIntegerValue("vMENUID",'.') ;
      this.AV8ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV14isOk=gx.fn.getControlValue("vISOK") ;
      this.AV18Message=gx.fn.getControlValue("vMESSAGE") ;
   };
   this.s122_client=function()
   {
   };
   this.s132_client=function()
   {
   };
   this.e13392_client=function()
   {
      return this.executeServerEvent("'E_CANCEL'", false, null, false, false);
   };
   this.e14392_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16392_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,50,52,53,54];
   this.GXLastCtrlId =54;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 55, 21, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
   var K2BCONTROLBEAUTIFY1Container = this.K2BCONTROLBEAUTIFY1Container;
   K2BCONTROLBEAUTIFY1Container.setProp("Class", "Class", "", "char");
   K2BCONTROLBEAUTIFY1Container.setProp("Enabled", "Enabled", true, "boolean");
   K2BCONTROLBEAUTIFY1Container.setProp("UpdateCheckboxes", "Updatecheckboxes", true, "bool");
   K2BCONTROLBEAUTIFY1Container.setProp("UpdateSelects", "Updateselects", true, "bool");
   K2BCONTROLBEAUTIFY1Container.setProp("Visible", "Visible", true, "bool");
   K2BCONTROLBEAUTIFY1Container.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   K2BCONTROLBEAUTIFY1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(K2BCONTROLBEAUTIFY1Container);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"MAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"CONTENTTABLE",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"TABLE_CONTAINER_APPLICATIONDESCRIPTION",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id:21 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAPPLICATIONDESCRIPTION",gxz:"ZV7ApplicationDescription",gxold:"OV7ApplicationDescription",gxvar:"AV7ApplicationDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV7ApplicationDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV7ApplicationDescription=Value},v2c:function(){gx.fn.setControlValue("vAPPLICATIONDESCRIPTION",gx.O.AV7ApplicationDescription,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV7ApplicationDescription=this.val()},val:function(){return gx.fn.getControlValue("vAPPLICATIONDESCRIPTION")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"TABLE_CONTAINER_MENUNAME",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id:27 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMENUNAME",gxz:"ZV17MenuName",gxold:"OV17MenuName",gxvar:"AV17MenuName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV17MenuName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17MenuName=Value},v2c:function(){gx.fn.setControlValue("vMENUNAME",gx.O.AV17MenuName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV17MenuName=this.val()},val:function(){return gx.fn.getControlValue("vMENUNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"TABLE_CONTAINER_MENUDESCRIPTION",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id:33 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMENUDESCRIPTION",gxz:"ZV15MenuDescription",gxold:"OV15MenuDescription",gxvar:"AV15MenuDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV15MenuDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV15MenuDescription=Value},v2c:function(){gx.fn.setControlValue("vMENUDESCRIPTION",gx.O.AV15MenuDescription,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV15MenuDescription=this.val()},val:function(){return gx.fn.getControlValue("vMENUDESCRIPTION")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"TABLE_CONTAINER_GUID",grid:0};
   GXValidFnc[37]={ id: 37, fld:"TEXTBLOCK_VAR_GUID", format:0,grid:0};
   GXValidFnc[38]={ id: 38, fld:"TABLE_CONTAINER_GUIDFIELDCONTAINER",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGUID",gxz:"ZV12GUID",gxold:"OV12GUID",gxvar:"AV12GUID",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12GUID=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12GUID=Value},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV12GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV12GUID=this.val()},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[41]={ id: 41, fld:"GUID_VAR_CONTEXTHELPIMAGE",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[50]={ id: 50, fld:"CONFIRM",grid:0,evt:"e14392_client",std:"ENTER"};
   GXValidFnc[52]={ id: 52, fld:"CANCEL",grid:0,evt:"e13392_client"};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   this.AV7ApplicationDescription = "" ;
   this.ZV7ApplicationDescription = "" ;
   this.OV7ApplicationDescription = "" ;
   this.AV17MenuName = "" ;
   this.ZV17MenuName = "" ;
   this.OV17MenuName = "" ;
   this.AV15MenuDescription = "" ;
   this.ZV15MenuDescription = "" ;
   this.OV15MenuDescription = "" ;
   this.AV12GUID = "" ;
   this.ZV12GUID = "" ;
   this.OV12GUID = "" ;
   this.AV7ApplicationDescription = "" ;
   this.AV17MenuName = "" ;
   this.AV15MenuDescription = "" ;
   this.AV12GUID = "" ;
   this.AV8ApplicationId = 0 ;
   this.AV16MenuId = 0 ;
   this.Gx_mode = "" ;
   this.AV14isOk = false ;
   this.AV18Message = {Id:"",Type:0,Description:""} ;
   this.Events = {"e13392_client": ["'E_CANCEL'", true] ,"e14392_client": ["ENTER", true] ,"e16392_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV16MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV8ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[{av:'gx.fn.getCtrlProperty("GUID_VAR_CONTEXTHELPIMAGE","Tooltiptext")',ctrl:'GUID_VAR_CONTEXTHELPIMAGE',prop:'Tooltiptext'}]];
   this.EvtParms["START"] = [[{av:'AV8ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV16MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[{av:'AV7ApplicationDescription',fld:'vAPPLICATIONDESCRIPTION',pic:''},{av:'AV16MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV17MenuName',fld:'vMENUNAME',pic:''},{av:'AV15MenuDescription',fld:'vMENUDESCRIPTION',pic:''},{av:'AV12GUID',fld:'vGUID',pic:''},{av:'gx.fn.getCtrlProperty("vGUID","Enabled")',ctrl:'vGUID',prop:'Enabled'},{ctrl:'CONFIRM',prop:'Visible'},{ctrl:'CANCEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vMENUNAME","Enabled")',ctrl:'vMENUNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMENUDESCRIPTION","Enabled")',ctrl:'vMENUDESCRIPTION',prop:'Enabled'},{ctrl:'CONFIRM',prop:'Caption'}]];
   this.EvtParms["'E_CANCEL'"] = [[{av:'AV16MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV8ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV8ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV17MenuName',fld:'vMENUNAME',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV12GUID',fld:'vGUID',pic:''},{av:'AV15MenuDescription',fld:'vMENUDESCRIPTION',pic:''},{av:'AV16MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV14isOk',fld:'vISOK',pic:''},{av:'AV18Message',fld:'vMESSAGE',pic:''}],[{av:'AV14isOk',fld:'vISOK',pic:''},{av:'AV18Message',fld:'vMESSAGE',pic:''}]];
   this.EnterCtrl = ["CONFIRM"];
   this.setVCMap("AV16MenuId", "vMENUID", 0, "int", 12, 0);
   this.setVCMap("AV8ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV14isOk", "vISOK", 0, "boolean", 4, 0);
   this.setVCMap("AV18Message", "vMESSAGE", 0, "GeneXus\Common\Messages.Message", 0, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.entrymenu);});
