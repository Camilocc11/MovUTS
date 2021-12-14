gx.evt.autoSkip = false;
gx.define('k2bfsg.remotelogin', false, function () {
   this.ServerClass =  "k2bfsg.remotelogin" ;
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
      this.AV42IDP_State=gx.fn.getControlValue("vIDP_STATE") ;
      this.AV48Language=gx.fn.getControlValue("vLANGUAGE") ;
      this.AV67UserRememberMe=gx.fn.getIntegerValue("vUSERREMEMBERME",'.') ;
      this.AV61ShowDetailedMessages=gx.fn.getControlValue("vSHOWDETAILEDMESSAGES") ;
      this.AV12AmountOfCharacters=gx.fn.getIntegerValue("vAMOUNTOFCHARACTERS",'.') ;
   };
   this.s122_client=function()
   {
   };
   this.e113d1_client=function()
   {
      this.clearMessages();
      this.s152_client();
      this.refreshOutputs([{av:'AV47KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV55RememberMe',fld:'vREMEMBERME',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s152_client=function()
   {
      this.call("com.movuts.k2bfsg.recoverpasswordstep1", []);
   };
   this.e163d2_client=function()
   {
      this.clearMessages();
      this.s162_client();
      this.refreshOutputs([{av:'AV47KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV55RememberMe',fld:'vREMEMBERME',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s162_client=function()
   {
      this.call("com.movuts.k2bfsg.registeruser", []);
   };
   this.e143d2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e173d2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,53,54,56,57,58,59,60,61,62,63,64,67,70,71,74,75,76,77,78,79,80];
   this.GXLastCtrlId =80;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 81, 32, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[6]={ id: 6, fld:"CONTENTTABLE",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"COLUMNS_MAINCOLUMNSTABLE",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"TABLE22",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"APPIMAGE",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"TBAPPNAME", format:0,grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"COLUMNS3_MAINCOLUMNSTABLE",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"TABLE1",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"TABLE30",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id:32 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLOGONTO",gxz:"ZV52LogOnTo",gxold:"OV52LogOnTo",gxvar:"AV52LogOnTo",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV52LogOnTo=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV52LogOnTo=Value},v2c:function(){gx.fn.setComboBoxValue("vLOGONTO",gx.O.AV52LogOnTo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV52LogOnTo=this.val()},val:function(){return gx.fn.getControlValue("vLOGONTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id:36 ,lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV65UserName",gxold:"OV65UserName",gxvar:"AV65UserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV65UserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV65UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV65UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV65UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORD",gxz:"ZV66UserPassword",gxold:"OV66UserPassword",gxvar:"AV66UserPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV66UserPassword=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV66UserPassword=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORD",gx.O.AV66UserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV66UserPassword=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFORGOTPASSWORD_ACTION",gxz:"ZV34ForgotPassword_Action",gxold:"OV34ForgotPassword_Action",gxvar:"AV34ForgotPassword_Action",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV34ForgotPassword_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV34ForgotPassword_Action=Value},v2c:function(){gx.fn.setControlValue("vFORGOTPASSWORD_ACTION",gx.O.AV34ForgotPassword_Action,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV34ForgotPassword_Action=this.val()},val:function(){return gx.fn.getControlValue("vFORGOTPASSWORD_ACTION")},nac:gx.falseFn,evt:"e113d1_client"};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"TABLE5",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"TABLE2",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vKEEPMELOGGEDIN",gxz:"ZV47KeepMeLoggedIn",gxold:"OV47KeepMeLoggedIn",gxvar:"AV47KeepMeLoggedIn",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV47KeepMeLoggedIn=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47KeepMeLoggedIn=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vKEEPMELOGGEDIN",gx.O.AV47KeepMeLoggedIn,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV47KeepMeLoggedIn=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vKEEPMELOGGEDIN")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[56]={ id: 56, fld:"TEXTBLOCK_VAR_KEEPMELOGGEDIN", format:0,grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id:61 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vREMEMBERME",gxz:"ZV55RememberMe",gxold:"OV55RememberMe",gxvar:"AV55RememberMe",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV55RememberMe=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV55RememberMe=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vREMEMBERME",gx.O.AV55RememberMe,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV55RememberMe=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vREMEMBERME")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"TABLE4",grid:0};
   GXValidFnc[67]={ id: 67, fld:"CAPTCHADESCRIPTION", format:0,grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id:71 ,lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAPTCHAIMAGE",gxz:"ZV20CaptchaImage",gxold:"OV20CaptchaImage",gxvar:"AV20CaptchaImage",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV20CaptchaImage=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV20CaptchaImage=Value},v2c:function(){gx.fn.setMultimediaValue("vCAPTCHAIMAGE",gx.O.AV20CaptchaImage,gx.O.AV76Captchaimage_GXI);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV76Captchaimage_GXI=this.val_GXI();if(this.val()!==undefined)gx.O.AV20CaptchaImage=this.val()},val:function(){return gx.fn.getBlobValue("vCAPTCHAIMAGE")},val_GXI:function(){return gx.fn.getControlValue("vCAPTCHAIMAGE_GXI")}, gxvar_GXI:'AV76Captchaimage_GXI',nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id:75 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAPTCHATEXT",gxz:"ZV24CaptchaText",gxold:"OV24CaptchaText",gxvar:"AV24CaptchaText",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV24CaptchaText=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV24CaptchaText=Value},v2c:function(){gx.fn.setControlValue("vCAPTCHATEXT",gx.O.AV24CaptchaText,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV24CaptchaText=this.val()},val:function(){return gx.fn.getControlValue("vCAPTCHATEXT")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id: 78, fld:"LOGIN",grid:0,evt:"e143d2_client",std:"ENTER"};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   this.AV52LogOnTo = "" ;
   this.ZV52LogOnTo = "" ;
   this.OV52LogOnTo = "" ;
   this.AV65UserName = "" ;
   this.ZV65UserName = "" ;
   this.OV65UserName = "" ;
   this.AV66UserPassword = "" ;
   this.ZV66UserPassword = "" ;
   this.OV66UserPassword = "" ;
   this.AV34ForgotPassword_Action = "" ;
   this.ZV34ForgotPassword_Action = "" ;
   this.OV34ForgotPassword_Action = "" ;
   this.AV47KeepMeLoggedIn = false ;
   this.ZV47KeepMeLoggedIn = false ;
   this.OV47KeepMeLoggedIn = false ;
   this.AV55RememberMe = false ;
   this.ZV55RememberMe = false ;
   this.OV55RememberMe = false ;
   this.AV76Captchaimage_GXI = "" ;
   this.AV20CaptchaImage = "" ;
   this.ZV20CaptchaImage = "" ;
   this.OV20CaptchaImage = "" ;
   this.AV24CaptchaText = "" ;
   this.ZV24CaptchaText = "" ;
   this.OV24CaptchaText = "" ;
   this.AV52LogOnTo = "" ;
   this.AV65UserName = "" ;
   this.AV66UserPassword = "" ;
   this.AV34ForgotPassword_Action = "" ;
   this.AV47KeepMeLoggedIn = false ;
   this.AV55RememberMe = false ;
   this.AV20CaptchaImage = "" ;
   this.AV24CaptchaText = "" ;
   this.AV42IDP_State = "" ;
   this.AV48Language = "" ;
   this.AV67UserRememberMe = 0 ;
   this.AV61ShowDetailedMessages = false ;
   this.AV12AmountOfCharacters = 0 ;
   this.Events = {"e143d2_client": ["ENTER", true] ,"e173d2_client": ["CANCEL", true] ,"e113d1_client": ["'E_FORGOTPASSWORD'", false] ,"e163d2_client": ["'E_CREATEANACCOUNT'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV42IDP_State',fld:'vIDP_STATE',pic:''},{av:'AV65UserName',fld:'vUSERNAME',pic:''},{av:'AV12AmountOfCharacters',fld:'vAMOUNTOFCHARACTERS',pic:'ZZZ9'},{av:'AV48Language',fld:'vLANGUAGE',pic:'',hsh:true},{av:'AV67UserRememberMe',fld:'vUSERREMEMBERME',pic:'Z9',hsh:true},{av:'AV61ShowDetailedMessages',fld:'vSHOWDETAILEDMESSAGES',pic:'',hsh:true},{av:'AV47KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV55RememberMe',fld:'vREMEMBERME',pic:''}],[{av:'AV34ForgotPassword_Action',fld:'vFORGOTPASSWORD_ACTION',pic:''},{av:'AV42IDP_State',fld:'vIDP_STATE',pic:''},{av:'AV66UserPassword',fld:'vUSERPASSWORD',pic:''},{ctrl:'vLOGONTO'},{av:'AV52LogOnTo',fld:'vLOGONTO',pic:''},{av:'gx.fn.getCtrlProperty("vREMEMBERME","Visible")',ctrl:'vREMEMBERME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vKEEPMELOGGEDIN","Visible")',ctrl:'vKEEPMELOGGEDIN',prop:'Visible'},{av:'AV20CaptchaImage',fld:'vCAPTCHAIMAGE',pic:''},{av:'gx.fn.getCtrlProperty("CAPTCHADESCRIPTION","Visible")',ctrl:'CAPTCHADESCRIPTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCAPTCHAIMAGE","Visible")',ctrl:'vCAPTCHAIMAGE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCAPTCHATEXT","Visible")',ctrl:'vCAPTCHATEXT',prop:'Visible'},{av:'AV61ShowDetailedMessages',fld:'vSHOWDETAILEDMESSAGES',pic:'',hsh:true},{av:'AV47KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV55RememberMe',fld:'vREMEMBERME',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV42IDP_State',fld:'vIDP_STATE',pic:''},{av:'AV8isConnectionOK',fld:'vISCONNECTIONOK',pic:''},{av:'AV57RepositoryGUID',fld:'vREPOSITORYGUID',pic:''},{av:'AV47KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV55RememberMe',fld:'vREMEMBERME',pic:''}],[{av:'AV8isConnectionOK',fld:'vISCONNECTIONOK',pic:''},{av:'gx.fn.getCtrlProperty("TBAPPNAME","Visible")',ctrl:'TBAPPNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("APPIMAGE","Visible")',ctrl:'APPIMAGE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBAPPNAME","Caption")',ctrl:'TBAPPNAME',prop:'Caption'},{av:'AV12AmountOfCharacters',fld:'vAMOUNTOFCHARACTERS',pic:'ZZZ9'},{ctrl:'FORM',prop:'Class'},{av:'AV47KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV55RememberMe',fld:'vREMEMBERME',pic:''}]];
   this.EvtParms["ENTER"] = [[{ctrl:'vLOGONTO'},{av:'AV52LogOnTo',fld:'vLOGONTO',pic:''},{av:'AV65UserName',fld:'vUSERNAME',pic:''},{av:'AV24CaptchaText',fld:'vCAPTCHATEXT',pic:''},{av:'AV66UserPassword',fld:'vUSERPASSWORD',pic:''},{av:'AV42IDP_State',fld:'vIDP_STATE',pic:''},{av:'AV47KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV55RememberMe',fld:'vREMEMBERME',pic:''}],[{av:'AV12AmountOfCharacters',fld:'vAMOUNTOFCHARACTERS',pic:'ZZZ9'},{av:'AV42IDP_State',fld:'vIDP_STATE',pic:''},{av:'AV47KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV55RememberMe',fld:'vREMEMBERME',pic:''}]];
   this.EvtParms["'E_FORGOTPASSWORD'"] = [[{av:'AV47KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV55RememberMe',fld:'vREMEMBERME',pic:''}],[{av:'AV47KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV55RememberMe',fld:'vREMEMBERME',pic:''}]];
   this.EvtParms["'E_CREATEANACCOUNT'"] = [[{av:'AV47KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV55RememberMe',fld:'vREMEMBERME',pic:''}],[{av:'AV47KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV55RememberMe',fld:'vREMEMBERME',pic:''}]];
   this.EnterCtrl = ["LOGIN"];
   this.setVCMap("AV42IDP_State", "vIDP_STATE", 0, "char", 60, 0);
   this.setVCMap("AV48Language", "vLANGUAGE", 0, "char", 3, 0);
   this.setVCMap("AV67UserRememberMe", "vUSERREMEMBERME", 0, "int", 2, 0);
   this.setVCMap("AV61ShowDetailedMessages", "vSHOWDETAILEDMESSAGES", 0, "boolean", 4, 0);
   this.setVCMap("AV12AmountOfCharacters", "vAMOUNTOFCHARACTERS", 0, "int", 4, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.remotelogin);});
