gx.evt.autoSkip = false;
gx.define('k2bfsg.registeruser', false, function () {
   this.ServerClass =  "k2bfsg.registeruser" ;
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
      this.AV31AmountOfCharacters=gx.fn.getIntegerValue("vAMOUNTOFCHARACTERS",'.') ;
      this.AV26UserRememberMe=gx.fn.getIntegerValue("vUSERREMEMBERME",'.') ;
   };
   this.s112_client=function()
   {
   };
   this.e11341_client=function()
   {
      this.clearMessages();
      this.s152_client();
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.s152_client=function()
   {
      this.call("com.movuts.k2bfsg.login", []);
   };
   this.e14342_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16342_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,83,84,85];
   this.GXLastCtrlId =85;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 86, 32, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[28]={ id: 28, fld:"TEXTBLOCK", format:0,grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id:32 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLOGIN_ACTION",gxz:"ZV35Login_Action",gxold:"OV35Login_Action",gxvar:"AV35Login_Action",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV35Login_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV35Login_Action=Value},v2c:function(){gx.fn.setControlValue("vLOGIN_ACTION",gx.O.AV35Login_Action,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV35Login_Action=this.val()},val:function(){return gx.fn.getControlValue("vLOGIN_ACTION")},nac:gx.falseFn,evt:"e11341_client"};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"TABLE_CONTAINER_FIRSTNAME",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id:38 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFIRSTNAME",gxz:"ZV14FirstName",gxold:"OV14FirstName",gxvar:"AV14FirstName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV14FirstName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV14FirstName=Value},v2c:function(){gx.fn.setControlValue("vFIRSTNAME",gx.O.AV14FirstName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV14FirstName=this.val()},val:function(){return gx.fn.getControlValue("vFIRSTNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"TABLE_CONTAINER_LASTNAME",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id:43 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLASTNAME",gxz:"ZV16LastName",gxold:"OV16LastName",gxvar:"AV16LastName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV16LastName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV16LastName=Value},v2c:function(){gx.fn.setControlValue("vLASTNAME",gx.O.AV16LastName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV16LastName=this.val()},val:function(){return gx.fn.getControlValue("vLASTNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"TABLE_CONTAINER_USERNAME",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV25UserName",gxold:"OV25UserName",gxvar:"AV25UserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV25UserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV25UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV25UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV25UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"TABLE_CONTAINER_EMAIL",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vEMAIL",gxz:"ZV11EMail",gxold:"OV11EMail",gxvar:"AV11EMail",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV11EMail=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV11EMail=Value},v2c:function(){gx.fn.setControlValue("vEMAIL",gx.O.AV11EMail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV11EMail=this.val()},val:function(){return gx.fn.getControlValue("vEMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"TABLE_CONTAINER_PASSWORD",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id:60 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPASSWORD",gxz:"ZV19Password",gxold:"OV19Password",gxvar:"AV19Password",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV19Password=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV19Password=Value},v2c:function(){gx.fn.setControlValue("vPASSWORD",gx.O.AV19Password,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV19Password=this.val()},val:function(){return gx.fn.getControlValue("vPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"TABLE_CONTAINER_PASSWORDCONFIRMATION",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id:65 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPASSWORDCONFIRMATION",gxz:"ZV20PasswordConfirmation",gxold:"OV20PasswordConfirmation",gxvar:"AV20PasswordConfirmation",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV20PasswordConfirmation=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV20PasswordConfirmation=Value},v2c:function(){gx.fn.setControlValue("vPASSWORDCONFIRMATION",gx.O.AV20PasswordConfirmation,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV20PasswordConfirmation=this.val()},val:function(){return gx.fn.getControlValue("vPASSWORDCONFIRMATION")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"I_USERREGION_USERREGION",grid:0};
   GXValidFnc[69]={ id: 69, fld:"SECTION1",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAPTCHAIMAGE",gxz:"ZV9CaptchaImage",gxold:"OV9CaptchaImage",gxvar:"AV9CaptchaImage",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV9CaptchaImage=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV9CaptchaImage=Value},v2c:function(){gx.fn.setMultimediaValue("vCAPTCHAIMAGE",gx.O.AV9CaptchaImage,gx.O.AV38Captchaimage_GXI)},c2v:function(){gx.O.AV38Captchaimage_GXI=this.val_GXI();if(this.val()!==undefined)gx.O.AV9CaptchaImage=this.val()},val:function(){return gx.fn.getBlobValue("vCAPTCHAIMAGE")},val_GXI:function(){return gx.fn.getControlValue("vCAPTCHAIMAGE_GXI")}, gxvar_GXI:'AV38Captchaimage_GXI',nac:gx.falseFn};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAPTCHATEXT",gxz:"ZV10CaptchaText",gxold:"OV10CaptchaText",gxvar:"AV10CaptchaText",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV10CaptchaText=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV10CaptchaText=Value},v2c:function(){gx.fn.setControlValue("vCAPTCHATEXT",gx.O.AV10CaptchaText,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV10CaptchaText=this.val()},val:function(){return gx.fn.getControlValue("vCAPTCHATEXT")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[83]={ id: 83, fld:"CREATEACCOUNT",grid:0,evt:"e14342_client",std:"ENTER"};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"",grid:0};
   this.AV35Login_Action = "" ;
   this.ZV35Login_Action = "" ;
   this.OV35Login_Action = "" ;
   this.AV14FirstName = "" ;
   this.ZV14FirstName = "" ;
   this.OV14FirstName = "" ;
   this.AV16LastName = "" ;
   this.ZV16LastName = "" ;
   this.OV16LastName = "" ;
   this.AV25UserName = "" ;
   this.ZV25UserName = "" ;
   this.OV25UserName = "" ;
   this.AV11EMail = "" ;
   this.ZV11EMail = "" ;
   this.OV11EMail = "" ;
   this.AV19Password = "" ;
   this.ZV19Password = "" ;
   this.OV19Password = "" ;
   this.AV20PasswordConfirmation = "" ;
   this.ZV20PasswordConfirmation = "" ;
   this.OV20PasswordConfirmation = "" ;
   this.AV38Captchaimage_GXI = "" ;
   this.AV9CaptchaImage = "" ;
   this.ZV9CaptchaImage = "" ;
   this.OV9CaptchaImage = "" ;
   this.AV10CaptchaText = "" ;
   this.ZV10CaptchaText = "" ;
   this.OV10CaptchaText = "" ;
   this.AV35Login_Action = "" ;
   this.AV14FirstName = "" ;
   this.AV16LastName = "" ;
   this.AV25UserName = "" ;
   this.AV11EMail = "" ;
   this.AV19Password = "" ;
   this.AV20PasswordConfirmation = "" ;
   this.AV9CaptchaImage = "" ;
   this.AV10CaptchaText = "" ;
   this.AV31AmountOfCharacters = 0 ;
   this.AV26UserRememberMe = 0 ;
   this.Events = {"e14342_client": ["ENTER", true] ,"e16342_client": ["CANCEL", true] ,"e11341_client": ["'E_LOGIN'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV31AmountOfCharacters',fld:'vAMOUNTOFCHARACTERS',pic:'ZZZ9',hsh:true},{av:'AV26UserRememberMe',fld:'vUSERREMEMBERME',pic:'Z9',hsh:true}],[{av:'AV35Login_Action',fld:'vLOGIN_ACTION',pic:''},{av:'AV9CaptchaImage',fld:'vCAPTCHAIMAGE',pic:''}]];
   this.EvtParms["START"] = [[],[{av:'AV31AmountOfCharacters',fld:'vAMOUNTOFCHARACTERS',pic:'ZZZ9',hsh:true}]];
   this.EvtParms["ENTER"] = [[{av:'AV10CaptchaText',fld:'vCAPTCHATEXT',pic:''},{av:'AV19Password',fld:'vPASSWORD',pic:''},{av:'AV20PasswordConfirmation',fld:'vPASSWORDCONFIRMATION',pic:''},{av:'AV25UserName',fld:'vUSERNAME',pic:''},{av:'AV11EMail',fld:'vEMAIL',pic:''},{av:'AV14FirstName',fld:'vFIRSTNAME',pic:''},{av:'AV16LastName',fld:'vLASTNAME',pic:''},{av:'AV26UserRememberMe',fld:'vUSERREMEMBERME',pic:'Z9',hsh:true}],[]];
   this.EvtParms["'E_LOGIN'"] = [[],[]];
   this.EnterCtrl = ["CREATEACCOUNT"];
   this.setVCMap("AV31AmountOfCharacters", "vAMOUNTOFCHARACTERS", 0, "int", 4, 0);
   this.setVCMap("AV26UserRememberMe", "vUSERREMEMBERME", 0, "int", 2, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.registeruser);});
