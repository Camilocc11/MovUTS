gx.evt.autoSkip = false;
gx.define('k2bfsg.entrysecuritypolicy', false, function () {
   this.ServerClass =  "k2bfsg.entrysecuritypolicy" ;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Validv_Allowmultipleconcurrentwebsessions=function()
   {
      return this.validCliEvt("Validv_Allowmultipleconcurrentwebsessions", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vALLOWMULTIPLECONCURRENTWEBSESSIONS");
         this.AnyError  = 0;
         if ( ! ( ( this.AV18AllowMultipleConcurrentWebSessions == 1 ) || ( this.AV18AllowMultipleConcurrentWebSessions == 2 ) || ( this.AV18AllowMultipleConcurrentWebSessions == 3 ) ) )
         {
            try {
               gxballoon.setError("Campo Allow Multiple Concurrent Web Sessions fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
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
   this.e162t1_client=function()
   {
      this.clearMessages();
      this.s152_client();
      this.refreshOutputs([{av:'AV15Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.s152_client=function()
   {
      if ( this.Gx_mode == "DSP" )
      {
         this.call("com.movuts.k2bfsg.entrysecuritypolicy", ["UPD", this.AV15Id]);
      }
   };
   this.e172t1_client=function()
   {
      this.clearMessages();
      this.s162_client();
      this.refreshOutputs([{av:'AV15Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.s162_client=function()
   {
      if ( this.Gx_mode == "DSP" )
      {
         this.call("com.movuts.k2bfsg.entrysecuritypolicy", ["DLT", this.AV15Id]);
      }
   };
   this.e152t1_client=function()
   {
      this.clearMessages();
      this.s172_client();
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.s172_client=function()
   {
      if ( this.Gx_mode != "DSP" )
      {
         this.call("com.movuts.k2bfsg.wwsecuritypolicy", []);
      }
   };
   this.e132t2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e182t2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,18,19,20,21,22,23,24,25,26,27,30,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,131,133,134,135];
   this.GXLastCtrlId =135;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 136, 38, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[14]={ id: 14, fld:"TITLECELL_ATTRIBUTES_ATTRIBUTES",grid:0};
   GXValidFnc[15]={ id: 15, fld:"TITLECONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[18]={ id: 18, fld:"TEXTBLOCK_ATTRIBUTES_ATTRIBUTES", format:0,grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS2",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"ACTIONSCONTAINERTABLERIGHT_ACTIONS2",grid:0};
   GXValidFnc[30]={ id: 30, fld:"UPDATE",grid:0,evt:"e162t1_client"};
   GXValidFnc[32]={ id: 32, fld:"DELETE",grid:0,evt:"e172t1_client"};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"TABLE_CONTAINER_ID",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id:38 ,lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV15Id",gxold:"OV15Id",gxvar:"AV15Id",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV15Id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV15Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vID",gx.O.AV15Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV15Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"TABLE_CONTAINER_GUID",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGUID",gxz:"ZV16GUID",gxold:"OV16GUID",gxvar:"AV16GUID",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV16GUID=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV16GUID=Value},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV16GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV16GUID=this.val()},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"TABLE_CONTAINER_NAME",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV17Name",gxold:"OV17Name",gxvar:"AV17Name",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV17Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV17Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV17Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"ONLYWEB",grid:0};
   GXValidFnc[53]={ id: 53, fld:"MAINGROUPRESPONSIVETABLE_ONLYWEB",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"TABLE_CONTAINER_ALLOWMULTIPLECONCURRENTWEBSESSIONS",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Allowmultipleconcurrentwebsessions,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vALLOWMULTIPLECONCURRENTWEBSESSIONS",gxz:"ZV18AllowMultipleConcurrentWebSessions",gxold:"OV18AllowMultipleConcurrentWebSessions",gxvar:"AV18AllowMultipleConcurrentWebSessions",ucs:[],op:[59],ip:[59],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV18AllowMultipleConcurrentWebSessions=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV18AllowMultipleConcurrentWebSessions=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vALLOWMULTIPLECONCURRENTWEBSESSIONS",gx.O.AV18AllowMultipleConcurrentWebSessions);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV18AllowMultipleConcurrentWebSessions=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vALLOWMULTIPLECONCURRENTWEBSESSIONS",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"TABLE_CONTAINER_WEBSESSIONTIMEOUT",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vWEBSESSIONTIMEOUT",gxz:"ZV19WebSessionTimeout",gxold:"OV19WebSessionTimeout",gxvar:"AV19WebSessionTimeout",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV19WebSessionTimeout=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV19WebSessionTimeout=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vWEBSESSIONTIMEOUT",gx.O.AV19WebSessionTimeout,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV19WebSessionTimeout=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vWEBSESSIONTIMEOUT",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"ONLYSMARTDEVICES",grid:0};
   GXValidFnc[68]={ id: 68, fld:"MAINGROUPRESPONSIVETABLE_ONLYSMARTDEVICES",grid:0};
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"TABLE_CONTAINER_OAUTHTOKENEXPIRE",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOAUTHTOKENEXPIRE",gxz:"ZV20OauthTokenExpire",gxold:"OV20OauthTokenExpire",gxvar:"AV20OauthTokenExpire",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV20OauthTokenExpire=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV20OauthTokenExpire=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOAUTHTOKENEXPIRE",gx.O.AV20OauthTokenExpire,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV20OauthTokenExpire=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOAUTHTOKENEXPIRE",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"TABLE_CONTAINER_OAUTHTOKENMAXIMUMRENOVATIONS",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id:79 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOAUTHTOKENMAXIMUMRENOVATIONS",gxz:"ZV21OauthTokenMaximumRenovations",gxold:"OV21OauthTokenMaximumRenovations",gxvar:"AV21OauthTokenMaximumRenovations",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV21OauthTokenMaximumRenovations=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV21OauthTokenMaximumRenovations=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOAUTHTOKENMAXIMUMRENOVATIONS",gx.O.AV21OauthTokenMaximumRenovations,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV21OauthTokenMaximumRenovations=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOAUTHTOKENMAXIMUMRENOVATIONS",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 79 , function() {
   });
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"GENERAL",grid:0};
   GXValidFnc[83]={ id: 83, fld:"MAINGROUPRESPONSIVETABLE_GENERAL",grid:0};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"",grid:0};
   GXValidFnc[86]={ id: 86, fld:"TABLE_CONTAINER_PERIODCHANGEPASSWORD",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   GXValidFnc[89]={ id:89 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERIODCHANGEPASSWORD",gxz:"ZV22PeriodChangePassword",gxold:"OV22PeriodChangePassword",gxvar:"AV22PeriodChangePassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV22PeriodChangePassword=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV22PeriodChangePassword=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPERIODCHANGEPASSWORD",gx.O.AV22PeriodChangePassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV22PeriodChangePassword=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPERIODCHANGEPASSWORD",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 89 , function() {
   });
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"TABLE_CONTAINER_MINIMUMTIMETOCHANGEPASSWORDS",grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id: 93, fld:"",grid:0};
   GXValidFnc[94]={ id:94 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMINIMUMTIMETOCHANGEPASSWORDS",gxz:"ZV23MinimumTimeToChangePasswords",gxold:"OV23MinimumTimeToChangePasswords",gxvar:"AV23MinimumTimeToChangePasswords",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV23MinimumTimeToChangePasswords=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV23MinimumTimeToChangePasswords=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMINIMUMTIMETOCHANGEPASSWORDS",gx.O.AV23MinimumTimeToChangePasswords,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV23MinimumTimeToChangePasswords=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMINIMUMTIMETOCHANGEPASSWORDS",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id: 96, fld:"",grid:0};
   GXValidFnc[97]={ id: 97, fld:"TABLE_CONTAINER_MINIMUMLENGTHPASSWORD",grid:0};
   GXValidFnc[98]={ id: 98, fld:"",grid:0};
   GXValidFnc[99]={ id: 99, fld:"",grid:0};
   GXValidFnc[100]={ id:100 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMINIMUMLENGTHPASSWORD",gxz:"ZV24MinimumLengthPassword",gxold:"OV24MinimumLengthPassword",gxvar:"AV24MinimumLengthPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV24MinimumLengthPassword=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV24MinimumLengthPassword=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMINIMUMLENGTHPASSWORD",gx.O.AV24MinimumLengthPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV24MinimumLengthPassword=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMINIMUMLENGTHPASSWORD",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id: 102, fld:"TABLE_CONTAINER_MINIMUMNUMERICALCHARACTERPASSWORD",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[105]={ id:105 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMINIMUMNUMERICALCHARACTERPASSWORD",gxz:"ZV25MinimumNumericalCharacterPassword",gxold:"OV25MinimumNumericalCharacterPassword",gxvar:"AV25MinimumNumericalCharacterPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV25MinimumNumericalCharacterPassword=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV25MinimumNumericalCharacterPassword=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMINIMUMNUMERICALCHARACTERPASSWORD",gx.O.AV25MinimumNumericalCharacterPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV25MinimumNumericalCharacterPassword=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMINIMUMNUMERICALCHARACTERPASSWORD",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"",grid:0};
   GXValidFnc[108]={ id: 108, fld:"TABLE_CONTAINER_MINIMUMUPPERCASECHARACTERSPASSWORD",grid:0};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id: 110, fld:"",grid:0};
   GXValidFnc[111]={ id:111 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMINIMUMUPPERCASECHARACTERSPASSWORD",gxz:"ZV26MinimumUpperCaseCharactersPassword",gxold:"OV26MinimumUpperCaseCharactersPassword",gxvar:"AV26MinimumUpperCaseCharactersPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV26MinimumUpperCaseCharactersPassword=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV26MinimumUpperCaseCharactersPassword=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMINIMUMUPPERCASECHARACTERSPASSWORD",gx.O.AV26MinimumUpperCaseCharactersPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV26MinimumUpperCaseCharactersPassword=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMINIMUMUPPERCASECHARACTERSPASSWORD",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 111 , function() {
   });
   GXValidFnc[112]={ id: 112, fld:"",grid:0};
   GXValidFnc[113]={ id: 113, fld:"TABLE_CONTAINER_MINIMUMSPECIALCHARACTERSPASSWORD",grid:0};
   GXValidFnc[114]={ id: 114, fld:"",grid:0};
   GXValidFnc[115]={ id: 115, fld:"",grid:0};
   GXValidFnc[116]={ id:116 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMINIMUMSPECIALCHARACTERSPASSWORD",gxz:"ZV27MinimumSpecialCharactersPassword",gxold:"OV27MinimumSpecialCharactersPassword",gxvar:"AV27MinimumSpecialCharactersPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV27MinimumSpecialCharactersPassword=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV27MinimumSpecialCharactersPassword=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMINIMUMSPECIALCHARACTERSPASSWORD",gx.O.AV27MinimumSpecialCharactersPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV27MinimumSpecialCharactersPassword=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMINIMUMSPECIALCHARACTERSPASSWORD",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 116 , function() {
   });
   GXValidFnc[117]={ id: 117, fld:"",grid:0};
   GXValidFnc[118]={ id: 118, fld:"",grid:0};
   GXValidFnc[119]={ id: 119, fld:"TABLE_CONTAINER_MAXIMUMPASSWORDHISTORYENTRIES",grid:0};
   GXValidFnc[120]={ id: 120, fld:"",grid:0};
   GXValidFnc[121]={ id: 121, fld:"",grid:0};
   GXValidFnc[122]={ id:122 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMAXIMUMPASSWORDHISTORYENTRIES",gxz:"ZV28MaximumPasswordHistoryEntries",gxold:"OV28MaximumPasswordHistoryEntries",gxvar:"AV28MaximumPasswordHistoryEntries",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV28MaximumPasswordHistoryEntries=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV28MaximumPasswordHistoryEntries=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMAXIMUMPASSWORDHISTORYENTRIES",gx.O.AV28MaximumPasswordHistoryEntries,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV28MaximumPasswordHistoryEntries=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMAXIMUMPASSWORDHISTORYENTRIES",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 122 , function() {
   });
   GXValidFnc[123]={ id: 123, fld:"",grid:0};
   GXValidFnc[124]={ id: 124, fld:"",grid:0};
   GXValidFnc[125]={ id: 125, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[126]={ id: 126, fld:"",grid:0};
   GXValidFnc[127]={ id: 127, fld:"",grid:0};
   GXValidFnc[128]={ id: 128, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[131]={ id: 131, fld:"CONFIRM",grid:0,evt:"e132t2_client",std:"ENTER"};
   GXValidFnc[133]={ id: 133, fld:"CANCEL",grid:0,evt:"e152t1_client"};
   GXValidFnc[134]={ id: 134, fld:"",grid:0};
   GXValidFnc[135]={ id: 135, fld:"",grid:0};
   this.AV15Id = 0 ;
   this.ZV15Id = 0 ;
   this.OV15Id = 0 ;
   this.AV16GUID = "" ;
   this.ZV16GUID = "" ;
   this.OV16GUID = "" ;
   this.AV17Name = "" ;
   this.ZV17Name = "" ;
   this.OV17Name = "" ;
   this.AV18AllowMultipleConcurrentWebSessions = 0 ;
   this.ZV18AllowMultipleConcurrentWebSessions = 0 ;
   this.OV18AllowMultipleConcurrentWebSessions = 0 ;
   this.AV19WebSessionTimeout = 0 ;
   this.ZV19WebSessionTimeout = 0 ;
   this.OV19WebSessionTimeout = 0 ;
   this.AV20OauthTokenExpire = 0 ;
   this.ZV20OauthTokenExpire = 0 ;
   this.OV20OauthTokenExpire = 0 ;
   this.AV21OauthTokenMaximumRenovations = 0 ;
   this.ZV21OauthTokenMaximumRenovations = 0 ;
   this.OV21OauthTokenMaximumRenovations = 0 ;
   this.AV22PeriodChangePassword = 0 ;
   this.ZV22PeriodChangePassword = 0 ;
   this.OV22PeriodChangePassword = 0 ;
   this.AV23MinimumTimeToChangePasswords = 0 ;
   this.ZV23MinimumTimeToChangePasswords = 0 ;
   this.OV23MinimumTimeToChangePasswords = 0 ;
   this.AV24MinimumLengthPassword = 0 ;
   this.ZV24MinimumLengthPassword = 0 ;
   this.OV24MinimumLengthPassword = 0 ;
   this.AV25MinimumNumericalCharacterPassword = 0 ;
   this.ZV25MinimumNumericalCharacterPassword = 0 ;
   this.OV25MinimumNumericalCharacterPassword = 0 ;
   this.AV26MinimumUpperCaseCharactersPassword = 0 ;
   this.ZV26MinimumUpperCaseCharactersPassword = 0 ;
   this.OV26MinimumUpperCaseCharactersPassword = 0 ;
   this.AV27MinimumSpecialCharactersPassword = 0 ;
   this.ZV27MinimumSpecialCharactersPassword = 0 ;
   this.OV27MinimumSpecialCharactersPassword = 0 ;
   this.AV28MaximumPasswordHistoryEntries = 0 ;
   this.ZV28MaximumPasswordHistoryEntries = 0 ;
   this.OV28MaximumPasswordHistoryEntries = 0 ;
   this.AV15Id = 0 ;
   this.AV16GUID = "" ;
   this.AV17Name = "" ;
   this.AV18AllowMultipleConcurrentWebSessions = 0 ;
   this.AV19WebSessionTimeout = 0 ;
   this.AV20OauthTokenExpire = 0 ;
   this.AV21OauthTokenMaximumRenovations = 0 ;
   this.AV22PeriodChangePassword = 0 ;
   this.AV23MinimumTimeToChangePasswords = 0 ;
   this.AV24MinimumLengthPassword = 0 ;
   this.AV25MinimumNumericalCharacterPassword = 0 ;
   this.AV26MinimumUpperCaseCharactersPassword = 0 ;
   this.AV27MinimumSpecialCharactersPassword = 0 ;
   this.AV28MaximumPasswordHistoryEntries = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e132t2_client": ["ENTER", true] ,"e182t2_client": ["CANCEL", true] ,"e162t1_client": ["'E_UPDATE'", false] ,"e172t1_client": ["'E_DELETE'", false] ,"e152t1_client": ["'E_CANCEL'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV15Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[{av:'gx.fn.getCtrlProperty("TABLE_CONTAINER_ID","Visible")',ctrl:'TABLE_CONTAINER_ID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("UPDATE","Tooltiptext")',ctrl:'UPDATE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("DELETE","Tooltiptext")',ctrl:'DELETE',prop:'Tooltiptext'},{ctrl:'vALLOWMULTIPLECONCURRENTWEBSESSIONS'},{av:'gx.fn.getCtrlProperty("vWEBSESSIONTIMEOUT","Enabled")',ctrl:'vWEBSESSIONTIMEOUT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOAUTHTOKENEXPIRE","Enabled")',ctrl:'vOAUTHTOKENEXPIRE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOAUTHTOKENMAXIMUMRENOVATIONS","Enabled")',ctrl:'vOAUTHTOKENMAXIMUMRENOVATIONS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPERIODCHANGEPASSWORD","Enabled")',ctrl:'vPERIODCHANGEPASSWORD',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMINIMUMTIMETOCHANGEPASSWORDS","Enabled")',ctrl:'vMINIMUMTIMETOCHANGEPASSWORDS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMINIMUMLENGTHPASSWORD","Enabled")',ctrl:'vMINIMUMLENGTHPASSWORD',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMINIMUMNUMERICALCHARACTERPASSWORD","Enabled")',ctrl:'vMINIMUMNUMERICALCHARACTERPASSWORD',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMINIMUMUPPERCASECHARACTERSPASSWORD","Enabled")',ctrl:'vMINIMUMUPPERCASECHARACTERSPASSWORD',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMINIMUMSPECIALCHARACTERSPASSWORD","Enabled")',ctrl:'vMINIMUMSPECIALCHARACTERSPASSWORD',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMAXIMUMPASSWORDHISTORYENTRIES","Enabled")',ctrl:'vMAXIMUMPASSWORDHISTORYENTRIES',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNAME","Enabled")',ctrl:'vNAME',prop:'Enabled'},{av:'AV16GUID',fld:'vGUID',pic:''},{av:'AV17Name',fld:'vNAME',pic:''},{av:'AV18AllowMultipleConcurrentWebSessions',fld:'vALLOWMULTIPLECONCURRENTWEBSESSIONS',pic:'9'},{av:'AV19WebSessionTimeout',fld:'vWEBSESSIONTIMEOUT',pic:'ZZZ9'},{av:'AV20OauthTokenExpire',fld:'vOAUTHTOKENEXPIRE',pic:'ZZZ9'},{av:'AV21OauthTokenMaximumRenovations',fld:'vOAUTHTOKENMAXIMUMRENOVATIONS',pic:'ZZZ9'},{av:'AV22PeriodChangePassword',fld:'vPERIODCHANGEPASSWORD',pic:'ZZZ9'},{av:'AV23MinimumTimeToChangePasswords',fld:'vMINIMUMTIMETOCHANGEPASSWORDS',pic:'ZZZ9'},{av:'AV24MinimumLengthPassword',fld:'vMINIMUMLENGTHPASSWORD',pic:'ZZZ9'},{av:'AV25MinimumNumericalCharacterPassword',fld:'vMINIMUMNUMERICALCHARACTERPASSWORD',pic:'ZZZ9'},{av:'AV26MinimumUpperCaseCharactersPassword',fld:'vMINIMUMUPPERCASECHARACTERSPASSWORD',pic:'ZZZ9'},{av:'AV27MinimumSpecialCharactersPassword',fld:'vMINIMUMSPECIALCHARACTERSPASSWORD',pic:'ZZZ9'},{av:'AV28MaximumPasswordHistoryEntries',fld:'vMAXIMUMPASSWORDHISTORYENTRIES',pic:'ZZZ9'},{av:'AV15Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{ctrl:'CONFIRM',prop:'Visible'},{ctrl:'CONFIRM',prop:'Caption'},{ctrl:'CONFIRM',prop:'Enabled'},{ctrl:'CANCEL',prop:'Visible'},{ctrl:'CANCEL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("UPDATE","Visible")',ctrl:'UPDATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("UPDATE","Enabled")',ctrl:'UPDATE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("DELETE","Visible")',ctrl:'DELETE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETE","Enabled")',ctrl:'DELETE',prop:'Enabled'}]];
   this.EvtParms["START"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV15Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV17Name',fld:'vNAME',pic:''},{ctrl:'vALLOWMULTIPLECONCURRENTWEBSESSIONS'},{av:'AV18AllowMultipleConcurrentWebSessions',fld:'vALLOWMULTIPLECONCURRENTWEBSESSIONS',pic:'9'},{av:'AV19WebSessionTimeout',fld:'vWEBSESSIONTIMEOUT',pic:'ZZZ9'},{av:'AV20OauthTokenExpire',fld:'vOAUTHTOKENEXPIRE',pic:'ZZZ9'},{av:'AV21OauthTokenMaximumRenovations',fld:'vOAUTHTOKENMAXIMUMRENOVATIONS',pic:'ZZZ9'},{av:'AV22PeriodChangePassword',fld:'vPERIODCHANGEPASSWORD',pic:'ZZZ9'},{av:'AV23MinimumTimeToChangePasswords',fld:'vMINIMUMTIMETOCHANGEPASSWORDS',pic:'ZZZ9'},{av:'AV24MinimumLengthPassword',fld:'vMINIMUMLENGTHPASSWORD',pic:'ZZZ9'},{av:'AV25MinimumNumericalCharacterPassword',fld:'vMINIMUMNUMERICALCHARACTERPASSWORD',pic:'ZZZ9'},{av:'AV26MinimumUpperCaseCharactersPassword',fld:'vMINIMUMUPPERCASECHARACTERSPASSWORD',pic:'ZZZ9'},{av:'AV27MinimumSpecialCharactersPassword',fld:'vMINIMUMSPECIALCHARACTERSPASSWORD',pic:'ZZZ9'},{av:'AV28MaximumPasswordHistoryEntries',fld:'vMAXIMUMPASSWORDHISTORYENTRIES',pic:'ZZZ9'}],[]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV15Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}],[{av:'AV15Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV15Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}],[{av:'AV15Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}]];
   this.EvtParms["'E_CANCEL'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[]];
   this.EvtParms["VALIDV_ALLOWMULTIPLECONCURRENTWEBSESSIONS"] = [[],[]];
   this.EnterCtrl = ["CONFIRM"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.entrysecuritypolicy);});
