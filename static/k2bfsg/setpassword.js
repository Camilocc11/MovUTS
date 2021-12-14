gx.evt.autoSkip = false;
gx.define('k2bfsg.setpassword', false, function () {
   this.ServerClass =  "k2bfsg.setpassword" ;
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
      this.AV10UserId=gx.fn.getControlValue("vUSERID") ;
   };
   this.s112_client=function()
   {
   };
   this.s132_client=function()
   {
   };
   this.e132w2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152w2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,42,43,44];
   this.GXLastCtrlId =44;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 45, 21, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[18]={ id: 18, fld:"TABLE_CONTAINER_USERNAME",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id:21 ,lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV19UserName",gxold:"OV19UserName",gxvar:"AV19UserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV19UserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV19UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV19UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV19UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"TABLE_CONTAINER_USERPASSWORDNEW",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id:27 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORDNEW",gxz:"ZV20UserPasswordNew",gxold:"OV20UserPasswordNew",gxvar:"AV20UserPasswordNew",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV20UserPasswordNew=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV20UserPasswordNew=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEW",gx.O.AV20UserPasswordNew,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV20UserPasswordNew=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEW")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"TABLE_CONTAINER_USERPASSWORDNEWCONF",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id:33 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORDNEWCONF",gxz:"ZV21UserPasswordNewConf",gxold:"OV21UserPasswordNewConf",gxvar:"AV21UserPasswordNewConf",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV21UserPasswordNewConf=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV21UserPasswordNewConf=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEWCONF",gx.O.AV21UserPasswordNewConf,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV21UserPasswordNewConf=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEWCONF")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[42]={ id: 42, fld:"CONFIRM",grid:0,evt:"e132w2_client",std:"ENTER"};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   this.AV19UserName = "" ;
   this.ZV19UserName = "" ;
   this.OV19UserName = "" ;
   this.AV20UserPasswordNew = "" ;
   this.ZV20UserPasswordNew = "" ;
   this.OV20UserPasswordNew = "" ;
   this.AV21UserPasswordNewConf = "" ;
   this.ZV21UserPasswordNewConf = "" ;
   this.OV21UserPasswordNewConf = "" ;
   this.AV19UserName = "" ;
   this.AV20UserPasswordNew = "" ;
   this.AV21UserPasswordNewConf = "" ;
   this.AV10UserId = "" ;
   this.Events = {"e132w2_client": ["ENTER", true] ,"e152w2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV10UserId',fld:'vUSERID',pic:'',hsh:true}],[{av:'AV19UserName',fld:'vUSERNAME',pic:''},{av:'AV20UserPasswordNew',fld:'vUSERPASSWORDNEW',pic:''},{av:'AV21UserPasswordNewConf',fld:'vUSERPASSWORDNEWCONF',pic:''},{av:'gx.fn.getCtrlProperty("CONTENTTABLE","Visible")',ctrl:'CONTENTTABLE',prop:'Visible'}]];
   this.EvtParms["START"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20UserPasswordNew',fld:'vUSERPASSWORDNEW',pic:''},{av:'AV21UserPasswordNewConf',fld:'vUSERPASSWORDNEWCONF',pic:''},{av:'AV10UserId',fld:'vUSERID',pic:'',hsh:true}],[{av:'gx.fn.getCtrlProperty("vUSERPASSWORDNEW","Enabled")',ctrl:'vUSERPASSWORDNEW',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERPASSWORDNEWCONF","Enabled")',ctrl:'vUSERPASSWORDNEWCONF',prop:'Enabled'},{ctrl:'CONFIRM',prop:'Visible'}]];
   this.EnterCtrl = ["CONFIRM"];
   this.setVCMap("AV10UserId", "vUSERID", 0, "char", 40, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.setpassword);});
