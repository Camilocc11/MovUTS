gx.evt.autoSkip = false;
gx.define('k2bfsg.recoverpasswordstep2', false, function () {
   this.ServerClass =  "k2bfsg.recoverpasswordstep2" ;
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
      this.AV12UserAuthTypeName=gx.fn.getControlValue("vUSERAUTHTYPENAME") ;
      this.AV9KeyToChangePassword=gx.fn.getControlValue("vKEYTOCHANGEPASSWORD") ;
      this.AV14UserRememberMe=gx.fn.getIntegerValue("vUSERREMEMBERME",'.') ;
      this.AV16ShowDetailedMessages=gx.fn.getControlValue("vSHOWDETAILEDMESSAGES") ;
   };
   this.s122_client=function()
   {
   };
   this.s132_client=function()
   {
   };
   this.s142_client=function()
   {
   };
   this.e11362_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15362_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];
   this.GXLastCtrlId =42;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 43, 25, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[6]={ id: 6, fld:"TITLECONTAINERSECTION",grid:0};
   GXValidFnc[7]={ id: 7, fld:"TITLE", format:0,grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"",grid:0};
   GXValidFnc[13]={ id: 13, fld:"CONTENTTABLE",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"TABLE_CONTAINER_USERNAME",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id:25 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV26UserName",gxold:"OV26UserName",gxvar:"AV26UserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV26UserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV26UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV26UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV26UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"TABLE_CONTAINER_USERPASSWORDNEW",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id:31 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORDNEW",gxz:"ZV27UserPasswordNew",gxold:"OV27UserPasswordNew",gxvar:"AV27UserPasswordNew",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV27UserPasswordNew=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV27UserPasswordNew=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEW",gx.O.AV27UserPasswordNew,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV27UserPasswordNew=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEW")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"TABLE_CONTAINER_USERPASSWORDNEWCONF",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id:37 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORDNEWCONF",gxz:"ZV28UserPasswordNewConf",gxold:"OV28UserPasswordNewConf",gxvar:"AV28UserPasswordNewConf",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV28UserPasswordNewConf=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV28UserPasswordNewConf=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEWCONF",gx.O.AV28UserPasswordNewConf,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV28UserPasswordNewConf=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEWCONF")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"CONFIRM",grid:0,evt:"e11362_client",std:"ENTER"};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   this.AV26UserName = "" ;
   this.ZV26UserName = "" ;
   this.OV26UserName = "" ;
   this.AV27UserPasswordNew = "" ;
   this.ZV27UserPasswordNew = "" ;
   this.OV27UserPasswordNew = "" ;
   this.AV28UserPasswordNewConf = "" ;
   this.ZV28UserPasswordNewConf = "" ;
   this.OV28UserPasswordNewConf = "" ;
   this.AV26UserName = "" ;
   this.AV27UserPasswordNew = "" ;
   this.AV28UserPasswordNewConf = "" ;
   this.AV9KeyToChangePassword = "" ;
   this.AV12UserAuthTypeName = "" ;
   this.AV14UserRememberMe = 0 ;
   this.AV16ShowDetailedMessages = false ;
   this.Events = {"e11362_client": ["ENTER", true] ,"e15362_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV12UserAuthTypeName',fld:'vUSERAUTHTYPENAME',pic:'',hsh:true},{av:'AV14UserRememberMe',fld:'vUSERREMEMBERME',pic:'Z9',hsh:true},{av:'AV9KeyToChangePassword',fld:'vKEYTOCHANGEPASSWORD',pic:'',hsh:true}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV27UserPasswordNew',fld:'vUSERPASSWORDNEW',pic:''},{av:'AV28UserPasswordNewConf',fld:'vUSERPASSWORDNEWCONF',pic:''},{av:'AV12UserAuthTypeName',fld:'vUSERAUTHTYPENAME',pic:'',hsh:true},{av:'AV26UserName',fld:'vUSERNAME',pic:''},{av:'AV9KeyToChangePassword',fld:'vKEYTOCHANGEPASSWORD',pic:'',hsh:true},{av:'AV14UserRememberMe',fld:'vUSERREMEMBERME',pic:'Z9',hsh:true},{av:'AV16ShowDetailedMessages',fld:'vSHOWDETAILEDMESSAGES',pic:''}],[{av:'AV16ShowDetailedMessages',fld:'vSHOWDETAILEDMESSAGES',pic:''}]];
   this.EvtParms["START"] = [[],[]];
   this.EnterCtrl = ["CONFIRM"];
   this.setVCMap("AV12UserAuthTypeName", "vUSERAUTHTYPENAME", 0, "char", 60, 0);
   this.setVCMap("AV9KeyToChangePassword", "vKEYTOCHANGEPASSWORD", 0, "char", 120, 0);
   this.setVCMap("AV14UserRememberMe", "vUSERREMEMBERME", 0, "int", 2, 0);
   this.setVCMap("AV16ShowDetailedMessages", "vSHOWDETAILEDMESSAGES", 0, "boolean", 4, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.recoverpasswordstep2);});
