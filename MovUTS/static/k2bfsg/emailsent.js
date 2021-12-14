gx.evt.autoSkip = false;
gx.define('k2bfsg.emailsent', false, function () {
   this.ServerClass =  "k2bfsg.emailsent" ;
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
   this.s112_client=function()
   {
   };
   this.s122_client=function()
   {
   };
   this.s132_client=function()
   {
   };
   this.e14371_client=function()
   {
      this.clearMessages();
      this.s142_client();
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.s142_client=function()
   {
      this.call("com.movuts.k2bfsg.login", []);
   };
   this.e15372_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16372_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,24,25,26,27,28,29,30,31,32,33,34,35,36,39,40,41,42];
   this.GXLastCtrlId =42;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 43, 40, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[12]={ id: 12, fld:"COLUMNS_MAINCOLUMNSTABLE",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"COLUMNCONTAINERTABLE_COLUMN",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"TITLECELL_ATTRIBUTES_ATTRIBUTES",grid:0};
   GXValidFnc[21]={ id: 21, fld:"TITLECONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[24]={ id: 24, fld:"TEXTBLOCK_ATTRIBUTES_ATTRIBUTES", format:0,grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"MESSAGE", format:0,grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGOTOLOGIN_ACTION",gxz:"ZV12GoToLogin_Action",gxold:"OV12GoToLogin_Action",gxvar:"AV12GoToLogin_Action",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12GoToLogin_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12GoToLogin_Action=Value},v2c:function(){gx.fn.setControlValue("vGOTOLOGIN_ACTION",gx.O.AV12GoToLogin_Action,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV12GoToLogin_Action=this.val()},val:function(){return gx.fn.getControlValue("vGOTOLOGIN_ACTION")},nac:gx.falseFn,evt:"e14371_client"};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   this.AV12GoToLogin_Action = "" ;
   this.ZV12GoToLogin_Action = "" ;
   this.OV12GoToLogin_Action = "" ;
   this.AV12GoToLogin_Action = "" ;
   this.Events = {"e15372_client": ["ENTER", true] ,"e16372_client": ["CANCEL", true] ,"e14371_client": ["'E_GOTOLOGIN'", false]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV12GoToLogin_Action',fld:'vGOTOLOGIN_ACTION',pic:''}]];
   this.EvtParms["START"] = [[],[]];
   this.EvtParms["'E_GOTOLOGIN'"] = [[],[]];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.emailsent);});
