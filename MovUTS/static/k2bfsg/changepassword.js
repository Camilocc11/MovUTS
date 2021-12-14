gx.evt.autoSkip = false;
gx.define('k2bfsg.changepassword', false, function () {
   this.ServerClass =  "k2bfsg.changepassword" ;
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
   };
   this.s112_client=function()
   {
   };
   this.s132_client=function()
   {
   };
   this.e13352_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15352_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,58,59,60];
   this.GXLastCtrlId =60;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 61, 31, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[16]={ id: 16, fld:"COLUMNS_MAINCOLUMNSTABLE",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"COLUMNCONTAINERTABLE_COLUMN",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"TABLE_CONTAINER_USERNAME",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id:31 ,lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV8UserName",gxold:"OV8UserName",gxvar:"AV8UserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV8UserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV8UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV8UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV8UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"TABLE_CONTAINER_USERPASSWORD",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id:37 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORD",gxz:"ZV9UserPassword",gxold:"OV9UserPassword",gxvar:"AV9UserPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV9UserPassword=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV9UserPassword=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORD",gx.O.AV9UserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV9UserPassword=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"TABLE_CONTAINER_USERPASSWORDNEW",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id:43 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORDNEW",gxz:"ZV10UserPasswordNew",gxold:"OV10UserPasswordNew",gxvar:"AV10UserPasswordNew",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV10UserPasswordNew=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV10UserPasswordNew=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEW",gx.O.AV10UserPasswordNew,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV10UserPasswordNew=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEW")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"TABLE_CONTAINER_USERPASSWORDNEWCONF",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORDNEWCONF",gxz:"ZV11UserPasswordNewConf",gxold:"OV11UserPasswordNewConf",gxvar:"AV11UserPasswordNewConf",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV11UserPasswordNewConf=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV11UserPasswordNewConf=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEWCONF",gx.O.AV11UserPasswordNewConf,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV11UserPasswordNewConf=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEWCONF")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[58]={ id: 58, fld:"CONFIRM",grid:0,evt:"e13352_client",std:"ENTER"};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   this.AV8UserName = "" ;
   this.ZV8UserName = "" ;
   this.OV8UserName = "" ;
   this.AV9UserPassword = "" ;
   this.ZV9UserPassword = "" ;
   this.OV9UserPassword = "" ;
   this.AV10UserPasswordNew = "" ;
   this.ZV10UserPasswordNew = "" ;
   this.OV10UserPasswordNew = "" ;
   this.AV11UserPasswordNewConf = "" ;
   this.ZV11UserPasswordNewConf = "" ;
   this.OV11UserPasswordNewConf = "" ;
   this.AV8UserName = "" ;
   this.AV9UserPassword = "" ;
   this.AV10UserPasswordNew = "" ;
   this.AV11UserPasswordNewConf = "" ;
   this.Events = {"e13352_client": ["ENTER", true] ,"e15352_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV8UserName',fld:'vUSERNAME',pic:''}]];
   this.EvtParms["START"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV10UserPasswordNew',fld:'vUSERPASSWORDNEW',pic:''},{av:'AV11UserPasswordNewConf',fld:'vUSERPASSWORDNEWCONF',pic:''},{av:'AV9UserPassword',fld:'vUSERPASSWORD',pic:''}],[{av:'gx.fn.getCtrlProperty("vUSERPASSWORD","Enabled")',ctrl:'vUSERPASSWORD',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERPASSWORDNEW","Enabled")',ctrl:'vUSERPASSWORDNEW',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERPASSWORDNEWCONF","Enabled")',ctrl:'vUSERPASSWORDNEWCONF',prop:'Enabled'},{ctrl:'CONFIRM',prop:'Visible'}]];
   this.EnterCtrl = ["CONFIRM"];
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.changepassword);});
