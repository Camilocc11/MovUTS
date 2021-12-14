gx.evt.autoSkip = false;
gx.define('k2bfsg.repositoryconfiguration', false, function () {
   this.ServerClass =  "k2bfsg.repositoryconfiguration" ;
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
      this.AV14Language=gx.fn.getControlValue("vLANGUAGE") ;
      this.AV10pId=gx.fn.getIntegerValue("vPID",'.') ;
      this.AV18SecurityAdministratorEmail=gx.fn.getControlValue("vSECURITYADMINISTRATOREMAIL") ;
      this.AV19CanRegisterUsers=gx.fn.getControlValue("vCANREGISTERUSERS") ;
   };
   this.Validv_Useridentification=function()
   {
      return this.validCliEvt("Validv_Useridentification", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSERIDENTIFICATION");
         this.AnyError  = 0;
         if ( ! ( ( this.AV35UserIdentification == "name" ) || ( this.AV35UserIdentification == "email" ) || ( this.AV35UserIdentification == "namema" ) ) )
         {
            try {
               gxballoon.setError("Campo User Identification fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Validv_Useractivationmethod=function()
   {
      return this.validCliEvt("Validv_Useractivationmethod", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSERACTIVATIONMETHOD");
         this.AnyError  = 0;
         if ( ! ( ( this.AV36UserActivationMethod == "A" ) || ( this.AV36UserActivationMethod == "U" ) || ( this.AV36UserActivationMethod == "D" ) ) )
         {
            try {
               gxballoon.setError("Campo User Activation Method fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Validv_Generatesessionstatistics=function()
   {
      return this.validCliEvt("Validv_Generatesessionstatistics", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vGENERATESESSIONSTATISTICS");
         this.AnyError  = 0;
         if ( ! ( ( this.AV41GenerateSessionStatistics == "None" ) || ( this.AV41GenerateSessionStatistics == "Minimum" ) || ( this.AV41GenerateSessionStatistics == "Detail" ) || ( this.AV41GenerateSessionStatistics == "Full" ) ) )
         {
            try {
               gxballoon.setError("Campo Generate Session Statistics fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Validv_Userremembermetype=function()
   {
      return this.validCliEvt("Validv_Userremembermetype", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSERREMEMBERMETYPE");
         this.AnyError  = 0;
         if ( ! ( ( this.AV42UserRememberMeType == "None" ) || ( this.AV42UserRememberMeType == "Login" ) || ( this.AV42UserRememberMeType == "Auth" ) || ( this.AV42UserRememberMeType == "Both" ) ) )
         {
            try {
               gxballoon.setError("Campo User Remember Me Type fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Validv_Logoutbehaviour=function()
   {
      return this.validCliEvt("Validv_Logoutbehaviour", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOGOUTBEHAVIOUR");
         this.AnyError  = 0;
         if ( ! ( ( this.AV55LogoutBehaviour == "clionl" ) || ( this.AV55LogoutBehaviour == "cliip" ) || ( this.AV55LogoutBehaviour == "all" ) ) )
         {
            try {
               gxballoon.setError("Campo Logout Behaviour fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Validv_Enabletracing=function()
   {
      return this.validCliEvt("Validv_Enabletracing", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vENABLETRACING");
         this.AnyError  = 0;
         if ( ! ( ( this.AV56EnableTracing == 0 ) || ( this.AV56EnableTracing == 1 ) ) )
         {
            try {
               gxballoon.setError("Campo Enable Tracing fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]);
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
   };
   this.e15261_client=function()
   {
      this.clearMessages();
      this.s152_client();
      this.refreshOutputs([{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s152_client=function()
   {
      this.call("com.movuts.k2bfsg.secbackendhome", []);
   };
   this.e13262_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16262_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,200,202,203,204];
   this.GXLastCtrlId =204;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 205, 25, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[22]={ id: 22, fld:"TABLE_CONTAINER_ID",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id:25 ,lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV27Id",gxold:"OV27Id",gxvar:"AV27Id",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV27Id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV27Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vID",gx.O.AV27Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV27Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"TABLE_CONTAINER_GUID",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id:30 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGUID",gxz:"ZV28GUID",gxold:"OV28GUID",gxvar:"AV28GUID",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV28GUID=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV28GUID=Value},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV28GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV28GUID=this.val()},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"TABLE_CONTAINER_NAMESPACE",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id:36 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAMESPACE",gxz:"ZV29NameSpace",gxold:"OV29NameSpace",gxvar:"AV29NameSpace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV29NameSpace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV29NameSpace=Value},v2c:function(){gx.fn.setControlValue("vNAMESPACE",gx.O.AV29NameSpace,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV29NameSpace=this.val()},val:function(){return gx.fn.getControlValue("vNAMESPACE")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"TABLE_CONTAINER_NAME",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id:41 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV30Name",gxold:"OV30Name",gxvar:"AV30Name",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV30Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV30Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV30Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV30Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"TABLE_CONTAINER_DSC",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id:46 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",gxz:"ZV31Dsc",gxold:"OV31Dsc",gxvar:"AV31Dsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV31Dsc=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV31Dsc=Value},v2c:function(){gx.fn.setControlValue("vDSC",gx.O.AV31Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV31Dsc=this.val()},val:function(){return gx.fn.getControlValue("vDSC")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"TABLE_CONTAINER_DEFAULTAUTHTYPENAME",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id:52 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDEFAULTAUTHTYPENAME",gxz:"ZV32DefaultAuthTypeName",gxold:"OV32DefaultAuthTypeName",gxvar:"AV32DefaultAuthTypeName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV32DefaultAuthTypeName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV32DefaultAuthTypeName=Value},v2c:function(){gx.fn.setComboBoxValue("vDEFAULTAUTHTYPENAME",gx.O.AV32DefaultAuthTypeName);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV32DefaultAuthTypeName=this.val()},val:function(){return gx.fn.getControlValue("vDEFAULTAUTHTYPENAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"TABLE_CONTAINER_SESSIONEXPIRESONIPCHANGE",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id:57 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSESSIONEXPIRESONIPCHANGE",gxz:"ZV33SessionExpiresOnIPChange",gxold:"OV33SessionExpiresOnIPChange",gxvar:"AV33SessionExpiresOnIPChange",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV33SessionExpiresOnIPChange=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV33SessionExpiresOnIPChange=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vSESSIONEXPIRESONIPCHANGE",gx.O.AV33SessionExpiresOnIPChange,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV33SessionExpiresOnIPChange=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vSESSIONEXPIRESONIPCHANGE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 57 , function() {
   });
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"TABLE_CONTAINER_ALLOWOAUTHACCESS",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id:62 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vALLOWOAUTHACCESS",gxz:"ZV34AllowOauthAccess",gxold:"OV34AllowOauthAccess",gxvar:"AV34AllowOauthAccess",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV34AllowOauthAccess=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV34AllowOauthAccess=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vALLOWOAUTHACCESS",gx.O.AV34AllowOauthAccess,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV34AllowOauthAccess=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vALLOWOAUTHACCESS")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 62 , function() {
   });
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"USERINFORMATION",grid:0};
   GXValidFnc[66]={ id: 66, fld:"MAINGROUPRESPONSIVETABLE_USERINFORMATION",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"TABLE_CONTAINER_USERIDENTIFICATION",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"char",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Useridentification,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERIDENTIFICATION",gxz:"ZV35UserIdentification",gxold:"OV35UserIdentification",gxvar:"AV35UserIdentification",ucs:[],op:[72],ip:[72],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV35UserIdentification=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV35UserIdentification=Value},v2c:function(){gx.fn.setComboBoxValue("vUSERIDENTIFICATION",gx.O.AV35UserIdentification);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV35UserIdentification=this.val()},val:function(){return gx.fn.getControlValue("vUSERIDENTIFICATION")},nac:gx.falseFn};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"TABLE_CONTAINER_USERACTIVATIONMETHOD",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id:78 ,lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Useractivationmethod,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERACTIVATIONMETHOD",gxz:"ZV36UserActivationMethod",gxold:"OV36UserActivationMethod",gxvar:"AV36UserActivationMethod",ucs:[],op:[78],ip:[78],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV36UserActivationMethod=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV36UserActivationMethod=Value},v2c:function(){gx.fn.setComboBoxValue("vUSERACTIVATIONMETHOD",gx.O.AV36UserActivationMethod);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV36UserActivationMethod=this.val()},val:function(){return gx.fn.getControlValue("vUSERACTIVATIONMETHOD")},nac:gx.falseFn};
   this.declareDomainHdlr( 78 , function() {
   });
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"TABLE_CONTAINER_USERAUTOMATICACTIVATIONTIMEOUT",grid:0};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id:83 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERAUTOMATICACTIVATIONTIMEOUT",gxz:"ZV37UserAutomaticActivationTimeout",gxold:"OV37UserAutomaticActivationTimeout",gxvar:"AV37UserAutomaticActivationTimeout",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV37UserAutomaticActivationTimeout=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV37UserAutomaticActivationTimeout=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUSERAUTOMATICACTIVATIONTIMEOUT",gx.O.AV37UserAutomaticActivationTimeout,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV37UserAutomaticActivationTimeout=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUSERAUTOMATICACTIVATIONTIMEOUT",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 83 , function() {
   });
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"",grid:0};
   GXValidFnc[86]={ id: 86, fld:"TABLE_CONTAINER_USEREMAILISUNIQUE",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   GXValidFnc[89]={ id:89 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSEREMAILISUNIQUE",gxz:"ZV38UserEmailisUnique",gxold:"OV38UserEmailisUnique",gxvar:"AV38UserEmailisUnique",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV38UserEmailisUnique=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV38UserEmailisUnique=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vUSEREMAILISUNIQUE",gx.O.AV38UserEmailisUnique,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV38UserEmailisUnique=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vUSEREMAILISUNIQUE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 89 , function() {
   });
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"TABLE_CONTAINER_REQUIREDEMAIL",grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id: 93, fld:"",grid:0};
   GXValidFnc[94]={ id:94 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vREQUIREDEMAIL",gxz:"ZV39RequiredEmail",gxold:"OV39RequiredEmail",gxvar:"AV39RequiredEmail",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV39RequiredEmail=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39RequiredEmail=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vREQUIREDEMAIL",gx.O.AV39RequiredEmail,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV39RequiredEmail=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vREQUIREDEMAIL")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id: 96, fld:"TABLE_CONTAINER_REQUIREDPASSWORD",grid:0};
   GXValidFnc[97]={ id: 97, fld:"",grid:0};
   GXValidFnc[98]={ id: 98, fld:"",grid:0};
   GXValidFnc[99]={ id:99 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vREQUIREDPASSWORD",gxz:"ZV40RequiredPassword",gxold:"OV40RequiredPassword",gxvar:"AV40RequiredPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV40RequiredPassword=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV40RequiredPassword=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vREQUIREDPASSWORD",gx.O.AV40RequiredPassword,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV40RequiredPassword=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vREQUIREDPASSWORD")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 99 , function() {
   });
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id: 102, fld:"TABLE_CONTAINER_REQUIREDFIRSTNAME",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[105]={ id:105 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vREQUIREDFIRSTNAME",gxz:"ZV53RequiredFirstName",gxold:"OV53RequiredFirstName",gxvar:"AV53RequiredFirstName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV53RequiredFirstName=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV53RequiredFirstName=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vREQUIREDFIRSTNAME",gx.O.AV53RequiredFirstName,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV53RequiredFirstName=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vREQUIREDFIRSTNAME")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"TABLE_CONTAINER_REQUIREDLASTNAME",grid:0};
   GXValidFnc[108]={ id: 108, fld:"",grid:0};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id:110 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vREQUIREDLASTNAME",gxz:"ZV54RequiredLastName",gxold:"OV54RequiredLastName",gxvar:"AV54RequiredLastName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV54RequiredLastName=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV54RequiredLastName=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vREQUIREDLASTNAME",gx.O.AV54RequiredLastName,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV54RequiredLastName=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vREQUIREDLASTNAME")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 110 , function() {
   });
   GXValidFnc[111]={ id: 111, fld:"",grid:0};
   GXValidFnc[112]={ id: 112, fld:"",grid:0};
   GXValidFnc[113]={ id: 113, fld:"SESSION",grid:0};
   GXValidFnc[114]={ id: 114, fld:"MAINGROUPRESPONSIVETABLE_SESSION",grid:0};
   GXValidFnc[115]={ id: 115, fld:"",grid:0};
   GXValidFnc[116]={ id: 116, fld:"",grid:0};
   GXValidFnc[117]={ id: 117, fld:"TABLE_CONTAINER_GENERATESESSIONSTATISTICS",grid:0};
   GXValidFnc[118]={ id: 118, fld:"",grid:0};
   GXValidFnc[119]={ id: 119, fld:"",grid:0};
   GXValidFnc[120]={ id:120 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Generatesessionstatistics,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGENERATESESSIONSTATISTICS",gxz:"ZV41GenerateSessionStatistics",gxold:"OV41GenerateSessionStatistics",gxvar:"AV41GenerateSessionStatistics",ucs:[],op:[120],ip:[120],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV41GenerateSessionStatistics=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV41GenerateSessionStatistics=Value},v2c:function(){gx.fn.setComboBoxValue("vGENERATESESSIONSTATISTICS",gx.O.AV41GenerateSessionStatistics);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV41GenerateSessionStatistics=this.val()},val:function(){return gx.fn.getControlValue("vGENERATESESSIONSTATISTICS")},nac:gx.falseFn};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[121]={ id: 121, fld:"",grid:0};
   GXValidFnc[122]={ id: 122, fld:"TABLE_CONTAINER_USERSESSIONCACHETIMEOUT",grid:0};
   GXValidFnc[123]={ id: 123, fld:"",grid:0};
   GXValidFnc[124]={ id: 124, fld:"",grid:0};
   GXValidFnc[125]={ id:125 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERSESSIONCACHETIMEOUT",gxz:"ZV50UserSessionCacheTimeout",gxold:"OV50UserSessionCacheTimeout",gxvar:"AV50UserSessionCacheTimeout",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50UserSessionCacheTimeout=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV50UserSessionCacheTimeout=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUSERSESSIONCACHETIMEOUT",gx.O.AV50UserSessionCacheTimeout,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV50UserSessionCacheTimeout=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUSERSESSIONCACHETIMEOUT",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 125 , function() {
   });
   GXValidFnc[126]={ id: 126, fld:"",grid:0};
   GXValidFnc[127]={ id: 127, fld:"",grid:0};
   GXValidFnc[128]={ id: 128, fld:"TABLE_CONTAINER_USERREMEMBERMETYPE",grid:0};
   GXValidFnc[129]={ id: 129, fld:"",grid:0};
   GXValidFnc[130]={ id: 130, fld:"",grid:0};
   GXValidFnc[131]={ id:131 ,lvl:0,type:"char",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Userremembermetype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERREMEMBERMETYPE",gxz:"ZV42UserRememberMeType",gxold:"OV42UserRememberMeType",gxvar:"AV42UserRememberMeType",ucs:[],op:[131],ip:[131],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV42UserRememberMeType=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV42UserRememberMeType=Value},v2c:function(){gx.fn.setComboBoxValue("vUSERREMEMBERMETYPE",gx.O.AV42UserRememberMeType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV42UserRememberMeType=this.val()},val:function(){return gx.fn.getControlValue("vUSERREMEMBERMETYPE")},nac:gx.falseFn};
   this.declareDomainHdlr( 131 , function() {
   });
   GXValidFnc[132]={ id: 132, fld:"",grid:0};
   GXValidFnc[133]={ id: 133, fld:"TABLE_CONTAINER_USERREMEMBERMETIMEOUT",grid:0};
   GXValidFnc[134]={ id: 134, fld:"",grid:0};
   GXValidFnc[135]={ id: 135, fld:"",grid:0};
   GXValidFnc[136]={ id:136 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERREMEMBERMETIMEOUT",gxz:"ZV43UserRememberMeTimeOut",gxold:"OV43UserRememberMeTimeOut",gxvar:"AV43UserRememberMeTimeOut",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV43UserRememberMeTimeOut=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV43UserRememberMeTimeOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUSERREMEMBERMETIMEOUT",gx.O.AV43UserRememberMeTimeOut,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV43UserRememberMeTimeOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUSERREMEMBERMETIMEOUT",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 136 , function() {
   });
   GXValidFnc[137]={ id: 137, fld:"",grid:0};
   GXValidFnc[138]={ id: 138, fld:"TABLE_CONTAINER_USERRECOVERYPASSWORDKEYTIMEOUT",grid:0};
   GXValidFnc[139]={ id: 139, fld:"",grid:0};
   GXValidFnc[140]={ id: 140, fld:"",grid:0};
   GXValidFnc[141]={ id:141 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERRECOVERYPASSWORDKEYTIMEOUT",gxz:"ZV44UserRecoveryPasswordKeyTimeOut",gxold:"OV44UserRecoveryPasswordKeyTimeOut",gxvar:"AV44UserRecoveryPasswordKeyTimeOut",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV44UserRecoveryPasswordKeyTimeOut=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV44UserRecoveryPasswordKeyTimeOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUSERRECOVERYPASSWORDKEYTIMEOUT",gx.O.AV44UserRecoveryPasswordKeyTimeOut,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV44UserRecoveryPasswordKeyTimeOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUSERRECOVERYPASSWORDKEYTIMEOUT",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 141 , function() {
   });
   GXValidFnc[142]={ id: 142, fld:"",grid:0};
   GXValidFnc[143]={ id: 143, fld:"",grid:0};
   GXValidFnc[144]={ id: 144, fld:"TABLE_CONTAINER_MINIMUMAMOUNTCHARACTERSINLOGIN",grid:0};
   GXValidFnc[145]={ id: 145, fld:"",grid:0};
   GXValidFnc[146]={ id: 146, fld:"",grid:0};
   GXValidFnc[147]={ id:147 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMINIMUMAMOUNTCHARACTERSINLOGIN",gxz:"ZV45MinimumAmountCharactersInLogin",gxold:"OV45MinimumAmountCharactersInLogin",gxvar:"AV45MinimumAmountCharactersInLogin",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV45MinimumAmountCharactersInLogin=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV45MinimumAmountCharactersInLogin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMINIMUMAMOUNTCHARACTERSINLOGIN",gx.O.AV45MinimumAmountCharactersInLogin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV45MinimumAmountCharactersInLogin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMINIMUMAMOUNTCHARACTERSINLOGIN",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 147 , function() {
   });
   GXValidFnc[148]={ id: 148, fld:"",grid:0};
   GXValidFnc[149]={ id: 149, fld:"TABLE_CONTAINER_LOGINATTEMPTSTOLOCKUSER",grid:0};
   GXValidFnc[150]={ id: 150, fld:"",grid:0};
   GXValidFnc[151]={ id: 151, fld:"",grid:0};
   GXValidFnc[152]={ id:152 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLOGINATTEMPTSTOLOCKUSER",gxz:"ZV46LoginAttemptsToLockUser",gxold:"OV46LoginAttemptsToLockUser",gxvar:"AV46LoginAttemptsToLockUser",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46LoginAttemptsToLockUser=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46LoginAttemptsToLockUser=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOGINATTEMPTSTOLOCKUSER",gx.O.AV46LoginAttemptsToLockUser,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV46LoginAttemptsToLockUser=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOGINATTEMPTSTOLOCKUSER",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 152 , function() {
   });
   GXValidFnc[153]={ id: 153, fld:"",grid:0};
   GXValidFnc[154]={ id: 154, fld:"",grid:0};
   GXValidFnc[155]={ id: 155, fld:"TABLE_CONTAINER_GAMUNBLOCKUSERTIMEOUT",grid:0};
   GXValidFnc[156]={ id: 156, fld:"",grid:0};
   GXValidFnc[157]={ id: 157, fld:"",grid:0};
   GXValidFnc[158]={ id:158 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGAMUNBLOCKUSERTIMEOUT",gxz:"ZV47GAMUnblockUserTimeout",gxold:"OV47GAMUnblockUserTimeout",gxvar:"AV47GAMUnblockUserTimeout",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47GAMUnblockUserTimeout=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47GAMUnblockUserTimeout=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGAMUNBLOCKUSERTIMEOUT",gx.O.AV47GAMUnblockUserTimeout,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV47GAMUnblockUserTimeout=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGAMUNBLOCKUSERTIMEOUT",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 158 , function() {
   });
   GXValidFnc[159]={ id: 159, fld:"",grid:0};
   GXValidFnc[160]={ id: 160, fld:"TABLE_CONTAINER_LOGINATTEMPTSTOLOCKSESSION",grid:0};
   GXValidFnc[161]={ id: 161, fld:"",grid:0};
   GXValidFnc[162]={ id: 162, fld:"",grid:0};
   GXValidFnc[163]={ id:163 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLOGINATTEMPTSTOLOCKSESSION",gxz:"ZV48LoginAttemptsToLockSession",gxold:"OV48LoginAttemptsToLockSession",gxvar:"AV48LoginAttemptsToLockSession",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48LoginAttemptsToLockSession=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV48LoginAttemptsToLockSession=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOGINATTEMPTSTOLOCKSESSION",gx.O.AV48LoginAttemptsToLockSession,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV48LoginAttemptsToLockSession=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOGINATTEMPTSTOLOCKSESSION",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 163 , function() {
   });
   GXValidFnc[164]={ id: 164, fld:"",grid:0};
   GXValidFnc[165]={ id: 165, fld:"",grid:0};
   GXValidFnc[166]={ id: 166, fld:"TABLE_CONTAINER_GIVEANONYMOUSSESSION",grid:0};
   GXValidFnc[167]={ id: 167, fld:"",grid:0};
   GXValidFnc[168]={ id: 168, fld:"",grid:0};
   GXValidFnc[169]={ id:169 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGIVEANONYMOUSSESSION",gxz:"ZV49GiveAnonymousSession",gxold:"OV49GiveAnonymousSession",gxvar:"AV49GiveAnonymousSession",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV49GiveAnonymousSession=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV49GiveAnonymousSession=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vGIVEANONYMOUSSESSION",gx.O.AV49GiveAnonymousSession,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV49GiveAnonymousSession=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vGIVEANONYMOUSSESSION")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 169 , function() {
   });
   GXValidFnc[170]={ id: 170, fld:"",grid:0};
   GXValidFnc[171]={ id: 171, fld:"",grid:0};
   GXValidFnc[172]={ id: 172, fld:"TABLE_CONTAINER_DEFAULTSECURITYPOLICYID",grid:0};
   GXValidFnc[173]={ id: 173, fld:"",grid:0};
   GXValidFnc[174]={ id: 174, fld:"",grid:0};
   GXValidFnc[175]={ id:175 ,lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDEFAULTSECURITYPOLICYID",gxz:"ZV51DefaultSecurityPolicyId",gxold:"OV51DefaultSecurityPolicyId",gxvar:"AV51DefaultSecurityPolicyId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV51DefaultSecurityPolicyId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV51DefaultSecurityPolicyId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDEFAULTSECURITYPOLICYID",gx.O.AV51DefaultSecurityPolicyId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV51DefaultSecurityPolicyId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDEFAULTSECURITYPOLICYID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 175 , function() {
   });
   GXValidFnc[176]={ id: 176, fld:"",grid:0};
   GXValidFnc[177]={ id: 177, fld:"TABLE_CONTAINER_DEFAULTROLEID",grid:0};
   GXValidFnc[178]={ id: 178, fld:"",grid:0};
   GXValidFnc[179]={ id: 179, fld:"",grid:0};
   GXValidFnc[180]={ id:180 ,lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDEFAULTROLEID",gxz:"ZV52DefaultRoleId",gxold:"OV52DefaultRoleId",gxvar:"AV52DefaultRoleId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV52DefaultRoleId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV52DefaultRoleId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDEFAULTROLEID",gx.O.AV52DefaultRoleId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV52DefaultRoleId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDEFAULTROLEID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 180 , function() {
   });
   GXValidFnc[181]={ id: 181, fld:"",grid:0};
   GXValidFnc[182]={ id: 182, fld:"",grid:0};
   GXValidFnc[183]={ id: 183, fld:"TABLE_CONTAINER_LOGOUTBEHAVIOUR",grid:0};
   GXValidFnc[184]={ id: 184, fld:"",grid:0};
   GXValidFnc[185]={ id: 185, fld:"",grid:0};
   GXValidFnc[186]={ id:186 ,lvl:0,type:"char",len:6,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Logoutbehaviour,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLOGOUTBEHAVIOUR",gxz:"ZV55LogoutBehaviour",gxold:"OV55LogoutBehaviour",gxvar:"AV55LogoutBehaviour",ucs:[],op:[186],ip:[186],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV55LogoutBehaviour=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV55LogoutBehaviour=Value},v2c:function(){gx.fn.setComboBoxValue("vLOGOUTBEHAVIOUR",gx.O.AV55LogoutBehaviour);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV55LogoutBehaviour=this.val()},val:function(){return gx.fn.getControlValue("vLOGOUTBEHAVIOUR")},nac:gx.falseFn};
   this.declareDomainHdlr( 186 , function() {
   });
   GXValidFnc[187]={ id: 187, fld:"",grid:0};
   GXValidFnc[188]={ id: 188, fld:"TABLE_CONTAINER_ENABLETRACING",grid:0};
   GXValidFnc[189]={ id: 189, fld:"",grid:0};
   GXValidFnc[190]={ id: 190, fld:"",grid:0};
   GXValidFnc[191]={ id:191 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Enabletracing,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vENABLETRACING",gxz:"ZV56EnableTracing",gxold:"OV56EnableTracing",gxvar:"AV56EnableTracing",ucs:[],op:[191],ip:[191],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV56EnableTracing=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV56EnableTracing=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vENABLETRACING",gx.O.AV56EnableTracing);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV56EnableTracing=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENABLETRACING",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 191 , function() {
   });
   GXValidFnc[192]={ id: 192, fld:"",grid:0};
   GXValidFnc[193]={ id: 193, fld:"",grid:0};
   GXValidFnc[194]={ id: 194, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[195]={ id: 195, fld:"",grid:0};
   GXValidFnc[196]={ id: 196, fld:"",grid:0};
   GXValidFnc[197]={ id: 197, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[200]={ id: 200, fld:"CONFIRM",grid:0,evt:"e13262_client",std:"ENTER"};
   GXValidFnc[202]={ id: 202, fld:"CANCEL",grid:0,evt:"e15261_client"};
   GXValidFnc[203]={ id: 203, fld:"",grid:0};
   GXValidFnc[204]={ id: 204, fld:"",grid:0};
   this.AV27Id = 0 ;
   this.ZV27Id = 0 ;
   this.OV27Id = 0 ;
   this.AV28GUID = "" ;
   this.ZV28GUID = "" ;
   this.OV28GUID = "" ;
   this.AV29NameSpace = "" ;
   this.ZV29NameSpace = "" ;
   this.OV29NameSpace = "" ;
   this.AV30Name = "" ;
   this.ZV30Name = "" ;
   this.OV30Name = "" ;
   this.AV31Dsc = "" ;
   this.ZV31Dsc = "" ;
   this.OV31Dsc = "" ;
   this.AV32DefaultAuthTypeName = "" ;
   this.ZV32DefaultAuthTypeName = "" ;
   this.OV32DefaultAuthTypeName = "" ;
   this.AV33SessionExpiresOnIPChange = false ;
   this.ZV33SessionExpiresOnIPChange = false ;
   this.OV33SessionExpiresOnIPChange = false ;
   this.AV34AllowOauthAccess = false ;
   this.ZV34AllowOauthAccess = false ;
   this.OV34AllowOauthAccess = false ;
   this.AV35UserIdentification = "" ;
   this.ZV35UserIdentification = "" ;
   this.OV35UserIdentification = "" ;
   this.AV36UserActivationMethod = "" ;
   this.ZV36UserActivationMethod = "" ;
   this.OV36UserActivationMethod = "" ;
   this.AV37UserAutomaticActivationTimeout = 0 ;
   this.ZV37UserAutomaticActivationTimeout = 0 ;
   this.OV37UserAutomaticActivationTimeout = 0 ;
   this.AV38UserEmailisUnique = false ;
   this.ZV38UserEmailisUnique = false ;
   this.OV38UserEmailisUnique = false ;
   this.AV39RequiredEmail = false ;
   this.ZV39RequiredEmail = false ;
   this.OV39RequiredEmail = false ;
   this.AV40RequiredPassword = false ;
   this.ZV40RequiredPassword = false ;
   this.OV40RequiredPassword = false ;
   this.AV53RequiredFirstName = false ;
   this.ZV53RequiredFirstName = false ;
   this.OV53RequiredFirstName = false ;
   this.AV54RequiredLastName = false ;
   this.ZV54RequiredLastName = false ;
   this.OV54RequiredLastName = false ;
   this.AV41GenerateSessionStatistics = "" ;
   this.ZV41GenerateSessionStatistics = "" ;
   this.OV41GenerateSessionStatistics = "" ;
   this.AV50UserSessionCacheTimeout = 0 ;
   this.ZV50UserSessionCacheTimeout = 0 ;
   this.OV50UserSessionCacheTimeout = 0 ;
   this.AV42UserRememberMeType = "" ;
   this.ZV42UserRememberMeType = "" ;
   this.OV42UserRememberMeType = "" ;
   this.AV43UserRememberMeTimeOut = 0 ;
   this.ZV43UserRememberMeTimeOut = 0 ;
   this.OV43UserRememberMeTimeOut = 0 ;
   this.AV44UserRecoveryPasswordKeyTimeOut = 0 ;
   this.ZV44UserRecoveryPasswordKeyTimeOut = 0 ;
   this.OV44UserRecoveryPasswordKeyTimeOut = 0 ;
   this.AV45MinimumAmountCharactersInLogin = 0 ;
   this.ZV45MinimumAmountCharactersInLogin = 0 ;
   this.OV45MinimumAmountCharactersInLogin = 0 ;
   this.AV46LoginAttemptsToLockUser = 0 ;
   this.ZV46LoginAttemptsToLockUser = 0 ;
   this.OV46LoginAttemptsToLockUser = 0 ;
   this.AV47GAMUnblockUserTimeout = 0 ;
   this.ZV47GAMUnblockUserTimeout = 0 ;
   this.OV47GAMUnblockUserTimeout = 0 ;
   this.AV48LoginAttemptsToLockSession = 0 ;
   this.ZV48LoginAttemptsToLockSession = 0 ;
   this.OV48LoginAttemptsToLockSession = 0 ;
   this.AV49GiveAnonymousSession = false ;
   this.ZV49GiveAnonymousSession = false ;
   this.OV49GiveAnonymousSession = false ;
   this.AV51DefaultSecurityPolicyId = 0 ;
   this.ZV51DefaultSecurityPolicyId = 0 ;
   this.OV51DefaultSecurityPolicyId = 0 ;
   this.AV52DefaultRoleId = 0 ;
   this.ZV52DefaultRoleId = 0 ;
   this.OV52DefaultRoleId = 0 ;
   this.AV55LogoutBehaviour = "" ;
   this.ZV55LogoutBehaviour = "" ;
   this.OV55LogoutBehaviour = "" ;
   this.AV56EnableTracing = 0 ;
   this.ZV56EnableTracing = 0 ;
   this.OV56EnableTracing = 0 ;
   this.AV27Id = 0 ;
   this.AV28GUID = "" ;
   this.AV29NameSpace = "" ;
   this.AV30Name = "" ;
   this.AV31Dsc = "" ;
   this.AV32DefaultAuthTypeName = "" ;
   this.AV33SessionExpiresOnIPChange = false ;
   this.AV34AllowOauthAccess = false ;
   this.AV35UserIdentification = "" ;
   this.AV36UserActivationMethod = "" ;
   this.AV37UserAutomaticActivationTimeout = 0 ;
   this.AV38UserEmailisUnique = false ;
   this.AV39RequiredEmail = false ;
   this.AV40RequiredPassword = false ;
   this.AV53RequiredFirstName = false ;
   this.AV54RequiredLastName = false ;
   this.AV41GenerateSessionStatistics = "" ;
   this.AV50UserSessionCacheTimeout = 0 ;
   this.AV42UserRememberMeType = "" ;
   this.AV43UserRememberMeTimeOut = 0 ;
   this.AV44UserRecoveryPasswordKeyTimeOut = 0 ;
   this.AV45MinimumAmountCharactersInLogin = 0 ;
   this.AV46LoginAttemptsToLockUser = 0 ;
   this.AV47GAMUnblockUserTimeout = 0 ;
   this.AV48LoginAttemptsToLockSession = 0 ;
   this.AV49GiveAnonymousSession = false ;
   this.AV51DefaultSecurityPolicyId = 0 ;
   this.AV52DefaultRoleId = 0 ;
   this.AV55LogoutBehaviour = "" ;
   this.AV56EnableTracing = 0 ;
   this.AV14Language = "" ;
   this.AV10pId = 0 ;
   this.AV18SecurityAdministratorEmail = "" ;
   this.AV19CanRegisterUsers = false ;
   this.Events = {"e13262_client": ["ENTER", true] ,"e16262_client": ["CANCEL", true] ,"e15261_client": ["'E_CANCEL'", false]};
   this.EvtParms["REFRESH"] = [[{ctrl:'vDEFAULTAUTHTYPENAME'},{av:'AV32DefaultAuthTypeName',fld:'vDEFAULTAUTHTYPENAME',pic:''},{ctrl:'vDEFAULTSECURITYPOLICYID'},{av:'AV51DefaultSecurityPolicyId',fld:'vDEFAULTSECURITYPOLICYID',pic:'ZZZZZZZZZZZ9'},{ctrl:'vDEFAULTROLEID'},{av:'AV52DefaultRoleId',fld:'vDEFAULTROLEID',pic:'ZZZZZZZZ9'},{av:'AV14Language',fld:'vLANGUAGE',pic:'',hsh:true},{av:'AV10pId',fld:'vPID',pic:'ZZZ9',hsh:true},{av:'AV18SecurityAdministratorEmail',fld:'vSECURITYADMINISTRATOREMAIL',pic:'',hsh:true},{av:'AV19CanRegisterUsers',fld:'vCANREGISTERUSERS',pic:'',hsh:true},{av:'AV27Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}],[{ctrl:'vDEFAULTAUTHTYPENAME'},{av:'AV32DefaultAuthTypeName',fld:'vDEFAULTAUTHTYPENAME',pic:''},{ctrl:'vDEFAULTSECURITYPOLICYID'},{av:'AV51DefaultSecurityPolicyId',fld:'vDEFAULTSECURITYPOLICYID',pic:'ZZZZZZZZZZZ9'},{ctrl:'vDEFAULTROLEID'},{av:'AV52DefaultRoleId',fld:'vDEFAULTROLEID',pic:'ZZZZZZZZ9'},{av:'AV27Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV28GUID',fld:'vGUID',pic:''},{av:'AV29NameSpace',fld:'vNAMESPACE',pic:''},{av:'AV30Name',fld:'vNAME',pic:''},{av:'AV31Dsc',fld:'vDSC',pic:''},{ctrl:'vUSERIDENTIFICATION'},{av:'AV35UserIdentification',fld:'vUSERIDENTIFICATION',pic:''},{ctrl:'vGENERATESESSIONSTATISTICS'},{av:'AV41GenerateSessionStatistics',fld:'vGENERATESESSIONSTATISTICS',pic:''},{ctrl:'vUSERACTIVATIONMETHOD'},{av:'AV36UserActivationMethod',fld:'vUSERACTIVATIONMETHOD',pic:''},{av:'AV37UserAutomaticActivationTimeout',fld:'vUSERAUTOMATICACTIVATIONTIMEOUT',pic:'ZZZ9'},{ctrl:'vUSERREMEMBERMETYPE'},{av:'AV42UserRememberMeType',fld:'vUSERREMEMBERMETYPE',pic:''},{av:'AV43UserRememberMeTimeOut',fld:'vUSERREMEMBERMETIMEOUT',pic:'ZZZ9'},{av:'AV44UserRecoveryPasswordKeyTimeOut',fld:'vUSERRECOVERYPASSWORDKEYTIMEOUT',pic:'ZZZ9'},{av:'AV45MinimumAmountCharactersInLogin',fld:'vMINIMUMAMOUNTCHARACTERSINLOGIN',pic:'ZZZ9'},{av:'AV46LoginAttemptsToLockUser',fld:'vLOGINATTEMPTSTOLOCKUSER',pic:'ZZZ9'},{av:'AV47GAMUnblockUserTimeout',fld:'vGAMUNBLOCKUSERTIMEOUT',pic:'ZZZ9'},{av:'AV48LoginAttemptsToLockSession',fld:'vLOGINATTEMPTSTOLOCKSESSION',pic:'ZZZ9'},{av:'AV50UserSessionCacheTimeout',fld:'vUSERSESSIONCACHETIMEOUT',pic:'ZZZ9'},{av:'AV18SecurityAdministratorEmail',fld:'vSECURITYADMINISTRATOREMAIL',pic:'',hsh:true},{av:'AV19CanRegisterUsers',fld:'vCANREGISTERUSERS',pic:'',hsh:true},{ctrl:'vENABLETRACING'},{av:'AV56EnableTracing',fld:'vENABLETRACING',pic:'ZZZ9'},{ctrl:'vLOGOUTBEHAVIOUR'},{av:'AV55LogoutBehaviour',fld:'vLOGOUTBEHAVIOUR',pic:''},{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}],[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]];
   this.EvtParms["ENTER"] = [[{av:'AV27Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV30Name',fld:'vNAME',pic:''},{av:'AV31Dsc',fld:'vDSC',pic:''},{ctrl:'vDEFAULTAUTHTYPENAME'},{av:'AV32DefaultAuthTypeName',fld:'vDEFAULTAUTHTYPENAME',pic:''},{ctrl:'vUSERIDENTIFICATION'},{av:'AV35UserIdentification',fld:'vUSERIDENTIFICATION',pic:''},{ctrl:'vGENERATESESSIONSTATISTICS'},{av:'AV41GenerateSessionStatistics',fld:'vGENERATESESSIONSTATISTICS',pic:''},{ctrl:'vUSERACTIVATIONMETHOD'},{av:'AV36UserActivationMethod',fld:'vUSERACTIVATIONMETHOD',pic:''},{av:'AV37UserAutomaticActivationTimeout',fld:'vUSERAUTOMATICACTIVATIONTIMEOUT',pic:'ZZZ9'},{av:'AV47GAMUnblockUserTimeout',fld:'vGAMUNBLOCKUSERTIMEOUT',pic:'ZZZ9'},{ctrl:'vUSERREMEMBERMETYPE'},{av:'AV42UserRememberMeType',fld:'vUSERREMEMBERMETYPE',pic:''},{av:'AV43UserRememberMeTimeOut',fld:'vUSERREMEMBERMETIMEOUT',pic:'ZZZ9'},{av:'AV44UserRecoveryPasswordKeyTimeOut',fld:'vUSERRECOVERYPASSWORDKEYTIMEOUT',pic:'ZZZ9'},{av:'AV45MinimumAmountCharactersInLogin',fld:'vMINIMUMAMOUNTCHARACTERSINLOGIN',pic:'ZZZ9'},{av:'AV46LoginAttemptsToLockUser',fld:'vLOGINATTEMPTSTOLOCKUSER',pic:'ZZZ9'},{av:'AV48LoginAttemptsToLockSession',fld:'vLOGINATTEMPTSTOLOCKSESSION',pic:'ZZZ9'},{av:'AV50UserSessionCacheTimeout',fld:'vUSERSESSIONCACHETIMEOUT',pic:'ZZZ9'},{av:'AV18SecurityAdministratorEmail',fld:'vSECURITYADMINISTRATOREMAIL',pic:'',hsh:true},{av:'AV19CanRegisterUsers',fld:'vCANREGISTERUSERS',pic:'',hsh:true},{ctrl:'vDEFAULTSECURITYPOLICYID'},{av:'AV51DefaultSecurityPolicyId',fld:'vDEFAULTSECURITYPOLICYID',pic:'ZZZZZZZZZZZ9'},{ctrl:'vDEFAULTROLEID'},{av:'AV52DefaultRoleId',fld:'vDEFAULTROLEID',pic:'ZZZZZZZZ9'},{ctrl:'vENABLETRACING'},{av:'AV56EnableTracing',fld:'vENABLETRACING',pic:'ZZZ9'},{ctrl:'vLOGOUTBEHAVIOUR'},{av:'AV55LogoutBehaviour',fld:'vLOGOUTBEHAVIOUR',pic:''},{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}],[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]];
   this.EvtParms["'E_CANCEL'"] = [[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}],[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]];
   this.EvtParms["VALIDV_USERIDENTIFICATION"] = [[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}],[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]];
   this.EvtParms["VALIDV_USERACTIVATIONMETHOD"] = [[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}],[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]];
   this.EvtParms["VALIDV_GENERATESESSIONSTATISTICS"] = [[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}],[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]];
   this.EvtParms["VALIDV_USERREMEMBERMETYPE"] = [[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}],[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]];
   this.EvtParms["VALIDV_LOGOUTBEHAVIOUR"] = [[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}],[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]];
   this.EvtParms["VALIDV_ENABLETRACING"] = [[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}],[{av:'AV33SessionExpiresOnIPChange',fld:'vSESSIONEXPIRESONIPCHANGE',pic:''},{av:'AV34AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:''},{av:'AV38UserEmailisUnique',fld:'vUSEREMAILISUNIQUE',pic:''},{av:'AV39RequiredEmail',fld:'vREQUIREDEMAIL',pic:''},{av:'AV40RequiredPassword',fld:'vREQUIREDPASSWORD',pic:''},{av:'AV53RequiredFirstName',fld:'vREQUIREDFIRSTNAME',pic:''},{av:'AV54RequiredLastName',fld:'vREQUIREDLASTNAME',pic:''},{av:'AV49GiveAnonymousSession',fld:'vGIVEANONYMOUSSESSION',pic:''}]];
   this.EnterCtrl = ["CONFIRM"];
   this.setVCMap("AV14Language", "vLANGUAGE", 0, "char", 3, 0);
   this.setVCMap("AV10pId", "vPID", 0, "int", 4, 0);
   this.setVCMap("AV18SecurityAdministratorEmail", "vSECURITYADMINISTRATOREMAIL", 0, "svchar", 100, 0);
   this.setVCMap("AV19CanRegisterUsers", "vCANREGISTERUSERS", 0, "boolean", 1, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.repositoryconfiguration);});
