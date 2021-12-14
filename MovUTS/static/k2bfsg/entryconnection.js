gx.evt.autoSkip = false;
gx.define('k2bfsg.entryconnection', false, function () {
   this.ServerClass =  "k2bfsg.entryconnection" ;
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
      this.AV8pConnectionName=gx.fn.getControlValue("vPCONNECTIONNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.s112_client=function()
   {
   };
   this.s132_client=function()
   {
      if ( this.Gx_mode == "DSP" )
      {
         gx.fn.setCtrlProperty("CONFIRM","Visible", false );
         gx.fn.setCtrlProperty("CONFIRM","Enabled", false );
         gx.fn.setCtrlProperty("CANCEL","Visible", false );
         gx.fn.setCtrlProperty("CANCEL","Enabled", false );
         gx.fn.setCtrlProperty("UPDATE","Visible", true );
         gx.fn.setCtrlProperty("UPDATE","Enabled", true );
         gx.fn.setCtrlProperty("DELETE","Visible", true );
         gx.fn.setCtrlProperty("DELETE","Enabled", true );
      }
      else
      {
         gx.fn.setCtrlProperty("CONFIRM","Visible", true );
         gx.fn.setCtrlProperty("CONFIRM","Enabled", true );
         gx.fn.setCtrlProperty("CANCEL","Visible", true );
         gx.fn.setCtrlProperty("CANCEL","Enabled", true );
         if ( this.Gx_mode == "DLT" )
         {
            gx.fn.setCtrlProperty("CONFIRM","Caption", "Eliminar" );
         }
         else if ( this.Gx_mode == "UPD" )
         {
            gx.fn.setCtrlProperty("CONFIRM","Caption", "Actualizar" );
         }
         else if ( this.Gx_mode == "INS" )
         {
            gx.fn.setCtrlProperty("CONFIRM","Caption", "Agregar" );
         }
         gx.fn.setCtrlProperty("UPDATE","Visible", false );
         gx.fn.setCtrlProperty("UPDATE","Enabled", false );
         gx.fn.setCtrlProperty("DELETE","Visible", false );
         gx.fn.setCtrlProperty("DELETE","Enabled", false );
      }
   };
   this.e172p1_client=function()
   {
      this.clearMessages();
      this.s162_client();
      this.refreshOutputs([{av:'AV17ConnectionName',fld:'vCONNECTIONNAME',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s162_client=function()
   {
      if ( this.Gx_mode == "DSP" )
      {
         this.call("com.movuts.k2bfsg.entryconnection", ["UPD", this.AV17ConnectionName]);
      }
   };
   this.e182p1_client=function()
   {
      this.clearMessages();
      this.s172_client();
      this.refreshOutputs([{av:'AV17ConnectionName',fld:'vCONNECTIONNAME',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s172_client=function()
   {
      if ( this.Gx_mode == "DSP" )
      {
         this.call("com.movuts.k2bfsg.entryconnection", ["DLT", this.AV17ConnectionName]);
      }
   };
   this.e162p1_client=function()
   {
      this.clearMessages();
      this.s182_client();
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.s182_client=function()
   {
      if ( this.Gx_mode != "DSP" )
      {
         this.call("com.movuts.k2bfsg.wwconnections", []);
      }
   };
   this.e132p2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142p2_client=function()
   {
      return this.executeServerEvent("'E_GENERATEKEY'", false, null, false, false);
   };
   this.e192p2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,22,23,24,25,26,27,28,29,30,31,34,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,83,85,86,87];
   this.GXLastCtrlId =87;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 88, 42, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[18]={ id: 18, fld:"TITLECELL_ATTRIBUTES_ATTRIBUTES",grid:0};
   GXValidFnc[19]={ id: 19, fld:"TITLECONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[22]={ id: 22, fld:"TEXTBLOCK_ATTRIBUTES_ATTRIBUTES", format:0,grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS2",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"ACTIONSCONTAINERTABLERIGHT_ACTIONS2",grid:0};
   GXValidFnc[34]={ id: 34, fld:"UPDATE",grid:0,evt:"e172p1_client"};
   GXValidFnc[36]={ id: 36, fld:"DELETE",grid:0,evt:"e182p1_client"};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"TABLE_CONTAINER_CONNECTIONNAME",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id:42 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONNECTIONNAME",gxz:"ZV17ConnectionName",gxold:"OV17ConnectionName",gxvar:"AV17ConnectionName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV17ConnectionName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17ConnectionName=Value},v2c:function(){gx.fn.setControlValue("vCONNECTIONNAME",gx.O.AV17ConnectionName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV17ConnectionName=this.val()},val:function(){return gx.fn.getControlValue("vCONNECTIONNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"TABLE_CONTAINER_USERNAME",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV18UserName",gxold:"OV18UserName",gxvar:"AV18UserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV18UserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV18UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV18UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV18UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"TABLE_CONTAINER_USERPASSWORD",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id:53 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORD",gxz:"ZV19UserPassword",gxold:"OV19UserPassword",gxvar:"AV19UserPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV19UserPassword=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV19UserPassword=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORD",gx.O.AV19UserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV19UserPassword=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"TABLE_CONTAINER_CHALLENGEEXPIRE",grid:0};
   GXValidFnc[57]={ id: 57, fld:"TEXTBLOCK_VAR_CHALLENGEEXPIRE", format:0,grid:0};
   GXValidFnc[58]={ id: 58, fld:"TABLE_CONTAINER_CHALLENGEEXPIREFIELDCONTAINER",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id:60 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCHALLENGEEXPIRE",gxz:"ZV20ChallengeExpire",gxold:"OV20ChallengeExpire",gxvar:"AV20ChallengeExpire",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV20ChallengeExpire=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV20ChallengeExpire=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCHALLENGEEXPIRE",gx.O.AV20ChallengeExpire,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV20ChallengeExpire=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCHALLENGEEXPIRE",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[61]={ id: 61, fld:"CHALLENGEEXPIRE_VAR_RIGHTTEXT", format:0,grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"TABLE_CONTAINER_KEY",grid:0};
   GXValidFnc[64]={ id: 64, fld:"TEXTBLOCK_VAR_KEY", format:0,grid:0};
   GXValidFnc[65]={ id: 65, fld:"TABLE_CONTAINER_KEYFIELDCONTAINER",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id:67 ,lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vKEY",gxz:"ZV21Key",gxold:"OV21Key",gxvar:"AV21Key",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV21Key=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV21Key=Value},v2c:function(){gx.fn.setControlValue("vKEY",gx.O.AV21Key,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV21Key=this.val()},val:function(){return gx.fn.getControlValue("vKEY")},nac:gx.falseFn};
   this.declareDomainHdlr( 67 , function() {
   });
   GXValidFnc[68]={ id: 68, fld:"GENERATEKEY",grid:0,evt:"e142p2_client"};
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"TABLE_CONTAINER_CONNECTIONFILEXML",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONNECTIONFILEXML",gxz:"ZV22ConnectionFileXML",gxold:"OV22ConnectionFileXML",gxvar:"AV22ConnectionFileXML",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV22ConnectionFileXML=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV22ConnectionFileXML=Value},v2c:function(){gx.fn.setControlValue("vCONNECTIONFILEXML",gx.O.AV22ConnectionFileXML,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV22ConnectionFileXML=this.val()},val:function(){return gx.fn.getControlValue("vCONNECTIONFILEXML")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[83]={ id: 83, fld:"CONFIRM",grid:0,evt:"e132p2_client",std:"ENTER"};
   GXValidFnc[85]={ id: 85, fld:"CANCEL",grid:0,evt:"e162p1_client"};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   this.AV17ConnectionName = "" ;
   this.ZV17ConnectionName = "" ;
   this.OV17ConnectionName = "" ;
   this.AV18UserName = "" ;
   this.ZV18UserName = "" ;
   this.OV18UserName = "" ;
   this.AV19UserPassword = "" ;
   this.ZV19UserPassword = "" ;
   this.OV19UserPassword = "" ;
   this.AV20ChallengeExpire = 0 ;
   this.ZV20ChallengeExpire = 0 ;
   this.OV20ChallengeExpire = 0 ;
   this.AV21Key = "" ;
   this.ZV21Key = "" ;
   this.OV21Key = "" ;
   this.AV22ConnectionFileXML = "" ;
   this.ZV22ConnectionFileXML = "" ;
   this.OV22ConnectionFileXML = "" ;
   this.AV17ConnectionName = "" ;
   this.AV18UserName = "" ;
   this.AV19UserPassword = "" ;
   this.AV20ChallengeExpire = 0 ;
   this.AV21Key = "" ;
   this.AV22ConnectionFileXML = "" ;
   this.AV8pConnectionName = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e132p2_client": ["ENTER", true] ,"e142p2_client": ["'E_GENERATEKEY'", true] ,"e192p2_client": ["CANCEL", true] ,"e172p1_client": ["'E_UPDATE'", false] ,"e182p1_client": ["'E_DELETE'", false] ,"e162p1_client": ["'E_CANCEL'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV22ConnectionFileXML',fld:'vCONNECTIONFILEXML',pic:''},{av:'AV8pConnectionName',fld:'vPCONNECTIONNAME',pic:'',hsh:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[{av:'gx.fn.getCtrlProperty("UPDATE","Tooltiptext")',ctrl:'UPDATE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("DELETE","Tooltiptext")',ctrl:'DELETE',prop:'Tooltiptext'},{ctrl:'CONFIRM',prop:'Visible'},{ctrl:'GENERATEKEY',prop:'Visible'},{ctrl:'GENERATEKEY',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERPASSWORD","Visible")',ctrl:'vUSERPASSWORD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCONNECTIONNAME","Enabled")',ctrl:'vCONNECTIONNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCHALLENGEEXPIRE","Enabled")',ctrl:'vCHALLENGEEXPIRE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERNAME","Enabled")',ctrl:'vUSERNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vKEY","Enabled")',ctrl:'vKEY',prop:'Enabled'},{av:'AV19UserPassword',fld:'vUSERPASSWORD',pic:''},{av:'AV17ConnectionName',fld:'vCONNECTIONNAME',pic:''},{av:'AV20ChallengeExpire',fld:'vCHALLENGEEXPIRE',pic:'ZZZ9'},{av:'AV18UserName',fld:'vUSERNAME',pic:''},{av:'AV21Key',fld:'vKEY',pic:''},{av:'gx.fn.getCtrlProperty("vCONNECTIONFILEXML","Visible")',ctrl:'vCONNECTIONFILEXML',prop:'Visible'},{ctrl:'CONFIRM',prop:'Enabled'},{ctrl:'CONFIRM',prop:'Caption'},{ctrl:'CANCEL',prop:'Visible'},{ctrl:'CANCEL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("UPDATE","Visible")',ctrl:'UPDATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("UPDATE","Enabled")',ctrl:'UPDATE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("DELETE","Visible")',ctrl:'DELETE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETE","Enabled")',ctrl:'DELETE',prop:'Enabled'}]];
   this.EvtParms["START"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV17ConnectionName',fld:'vCONNECTIONNAME',pic:''},{av:'AV18UserName',fld:'vUSERNAME',pic:''},{av:'AV19UserPassword',fld:'vUSERPASSWORD',pic:''},{av:'AV20ChallengeExpire',fld:'vCHALLENGEEXPIRE',pic:'ZZZ9'},{av:'AV21Key',fld:'vKEY',pic:''}],[]];
   this.EvtParms["'E_GENERATEKEY'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[{av:'AV21Key',fld:'vKEY',pic:''}]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV17ConnectionName',fld:'vCONNECTIONNAME',pic:''}],[{av:'AV17ConnectionName',fld:'vCONNECTIONNAME',pic:''}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV17ConnectionName',fld:'vCONNECTIONNAME',pic:''}],[{av:'AV17ConnectionName',fld:'vCONNECTIONNAME',pic:''}]];
   this.EvtParms["'E_CANCEL'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[]];
   this.EnterCtrl = ["CONFIRM"];
   this.setVCMap("AV8pConnectionName", "vPCONNECTIONNAME", 0, "char", 254, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.entryconnection);});
