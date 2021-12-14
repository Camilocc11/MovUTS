gx.evt.autoSkip = false;
gx.define('k2bfsg.entryrepository', false, function () {
   this.ServerClass =  "k2bfsg.entryrepository" ;
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
      this.AV28Id=gx.fn.getIntegerValue("vID",'.') ;
      this.AV44AllowOauthAccess=gx.fn.getControlValue("vALLOWOAUTHACCESS") ;
      this.AV28Id=gx.fn.getIntegerValue("vID",'.') ;
   };
   this.Validv_Generatesessionstatistics=function()
   {
      return this.validCliEvt("Validv_Generatesessionstatistics", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vGENERATESESSIONSTATISTICS");
         this.AnyError  = 0;
         if ( ! ( ( this.AV25GenerateSessionStatistics == "None" ) || ( this.AV25GenerateSessionStatistics == "Minimum" ) || ( this.AV25GenerateSessionStatistics == "Detail" ) || ( this.AV25GenerateSessionStatistics == "Full" ) ) )
         {
            try {
               gxballoon.setError("Campo Generate Session Statistics fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.s122_client=function()
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
   this.e163e1_client=function()
   {
      this.clearMessages();
      this.s142_client();
      this.refreshOutputs([{av:'AV28Id',fld:'vID',pic:'ZZZZZZZZ9'},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s142_client=function()
   {
      this.call("com.movuts.k2bfsg.repositoryconfiguration", [this.AV28Id]);
   };
   this.e173e1_client=function()
   {
      this.clearMessages();
      this.s152_client();
      this.refreshOutputs([{av:'AV28Id',fld:'vID',pic:'ZZZZZZZZ9'},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s152_client=function()
   {
      this.call("com.movuts.k2bfsg.entryrepository", ["DLT", this.AV28Id]);
   };
   this.e183e1_client=function()
   {
      this.clearMessages();
      if ( this.AV20CopyRoles )
      {
         gx.fn.setCtrlProperty("vADMINISTRATORROLEID","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("vADMINISTRATORROLEID","Visible", false );
      }
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("vADMINISTRATORROLEID","Visible")',ctrl:'vADMINISTRATORROLEID',prop:'Visible'},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e193e1_client=function()
   {
      this.clearMessages();
      if ( this.AV17CopyApplication )
      {
         gx.fn.setCtrlProperty("vCOPYFROMAPPLICATIONID","Visible", true );
         gx.fn.setCtrlProperty("vCOPYAPPLICATIONROLEPERMISSIONS","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("vCOPYAPPLICATIONROLEPERMISSIONS","Visible", false );
         gx.fn.setCtrlProperty("vCOPYFROMAPPLICATIONID","Visible", false );
      }
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("vCOPYFROMAPPLICATIONID","Visible")',ctrl:'vCOPYFROMAPPLICATIONID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCOPYAPPLICATIONROLEPERMISSIONS","Visible")',ctrl:'vCOPYAPPLICATIONROLEPERMISSIONS',prop:'Visible'},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e133e2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e143e2_client=function()
   {
      return this.executeServerEvent("'E_CANCEL'", false, null, false, false);
   };
   this.e203e2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,22,23,24,25,26,27,28,29,30,31,34,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,187,189,190,191];
   this.GXLastCtrlId =191;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 192, 42, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[34]={ id: 34, fld:"UPDATE",grid:0,evt:"e163e1_client"};
   GXValidFnc[36]={ id: 36, fld:"DELETE",grid:0,evt:"e173e1_client"};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"TABLE_CONTAINER_GUID",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id:42 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGUID",gxz:"ZV26GUID",gxold:"OV26GUID",gxvar:"AV26GUID",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV26GUID=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV26GUID=Value},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV26GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV26GUID=this.val()},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"TABLE_CONTAINER_NAME",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV31Name",gxold:"OV31Name",gxvar:"AV31Name",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV31Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV31Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV31Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV31Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"TABLE_CONTAINER_NAMESPACE",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAMESPACE",gxz:"ZV32NameSpace",gxold:"OV32NameSpace",gxvar:"AV32NameSpace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV32NameSpace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV32NameSpace=Value},v2c:function(){gx.fn.setControlValue("vNAMESPACE",gx.O.AV32NameSpace,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV32NameSpace=this.val()},val:function(){return gx.fn.getControlValue("vNAMESPACE")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"TABLE_CONTAINER_DESCRIPTION",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id:60 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDESCRIPTION",gxz:"ZV23Description",gxold:"OV23Description",gxvar:"AV23Description",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV23Description=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV23Description=Value},v2c:function(){gx.fn.setControlValue("vDESCRIPTION",gx.O.AV23Description,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV23Description=this.val()},val:function(){return gx.fn.getControlValue("vDESCRIPTION")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"TABLE_CONTAINER_GENERATESESSIONSTATISTICS",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Generatesessionstatistics,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGENERATESESSIONSTATISTICS",gxz:"ZV25GenerateSessionStatistics",gxold:"OV25GenerateSessionStatistics",gxvar:"AV25GenerateSessionStatistics",ucs:[],op:[66],ip:[66],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV25GenerateSessionStatistics=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV25GenerateSessionStatistics=Value},v2c:function(){gx.fn.setComboBoxValue("vGENERATESESSIONSTATISTICS",gx.O.AV25GenerateSessionStatistics);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV25GenerateSessionStatistics=this.val()},val:function(){return gx.fn.getControlValue("vGENERATESESSIONSTATISTICS")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"CONNECTION",grid:0};
   GXValidFnc[70]={ id: 70, fld:"MAINGROUPRESPONSIVETABLE_CONNECTION",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"TABLE_CONTAINER_CONNECTIONUSERNAME",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id:76 ,lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONNECTIONUSERNAME",gxz:"ZV15ConnectionUserName",gxold:"OV15ConnectionUserName",gxvar:"AV15ConnectionUserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV15ConnectionUserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV15ConnectionUserName=Value},v2c:function(){gx.fn.setControlValue("vCONNECTIONUSERNAME",gx.O.AV15ConnectionUserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV15ConnectionUserName=this.val()},val:function(){return gx.fn.getControlValue("vCONNECTIONUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 76 , function() {
   });
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"TABLE_CONTAINER_CONNECTIONUSERPASSWORD",grid:0};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id:82 ,lvl:0,type:"char",len:254,dec:0,sign:false,isPwd:true,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONNECTIONUSERPASSWORD",gxz:"ZV16ConnectionUserPassword",gxold:"OV16ConnectionUserPassword",gxvar:"AV16ConnectionUserPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV16ConnectionUserPassword=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV16ConnectionUserPassword=Value},v2c:function(){gx.fn.setControlValue("vCONNECTIONUSERPASSWORD",gx.O.AV16ConnectionUserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV16ConnectionUserPassword=this.val()},val:function(){return gx.fn.getControlValue("vCONNECTIONUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 82 , function() {
   });
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"TABLE_CONTAINER_CONFCONNECTIONUSERPASSWORD",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id:88 ,lvl:0,type:"char",len:254,dec:0,sign:false,isPwd:true,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONFCONNECTIONUSERPASSWORD",gxz:"ZV14ConfConnectionUserPassword",gxold:"OV14ConfConnectionUserPassword",gxvar:"AV14ConfConnectionUserPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV14ConfConnectionUserPassword=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV14ConfConnectionUserPassword=Value},v2c:function(){gx.fn.setControlValue("vCONFCONNECTIONUSERPASSWORD",gx.O.AV14ConfConnectionUserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV14ConfConnectionUserPassword=this.val()},val:function(){return gx.fn.getControlValue("vCONFCONNECTIONUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 88 , function() {
   });
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"TABLE_CONTAINER_ADMINISTRATORUSERNAME",grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id: 93, fld:"",grid:0};
   GXValidFnc[94]={ id:94 ,lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vADMINISTRATORUSERNAME",gxz:"ZV11AdministratorUserName",gxold:"OV11AdministratorUserName",gxvar:"AV11AdministratorUserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV11AdministratorUserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV11AdministratorUserName=Value},v2c:function(){gx.fn.setControlValue("vADMINISTRATORUSERNAME",gx.O.AV11AdministratorUserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV11AdministratorUserName=this.val()},val:function(){return gx.fn.getControlValue("vADMINISTRATORUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id: 96, fld:"",grid:0};
   GXValidFnc[97]={ id: 97, fld:"TABLE_CONTAINER_ADMINISTRATORUSERPASSWORD",grid:0};
   GXValidFnc[98]={ id: 98, fld:"",grid:0};
   GXValidFnc[99]={ id: 99, fld:"",grid:0};
   GXValidFnc[100]={ id:100 ,lvl:0,type:"char",len:254,dec:0,sign:false,isPwd:true,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vADMINISTRATORUSERPASSWORD",gxz:"ZV12AdministratorUserPassword",gxold:"OV12AdministratorUserPassword",gxvar:"AV12AdministratorUserPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12AdministratorUserPassword=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12AdministratorUserPassword=Value},v2c:function(){gx.fn.setControlValue("vADMINISTRATORUSERPASSWORD",gx.O.AV12AdministratorUserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV12AdministratorUserPassword=this.val()},val:function(){return gx.fn.getControlValue("vADMINISTRATORUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id: 102, fld:"",grid:0};
   GXValidFnc[103]={ id: 103, fld:"TABLE_CONTAINER_CONFADMINISTRATORUSERPASSWORD",grid:0};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[105]={ id: 105, fld:"",grid:0};
   GXValidFnc[106]={ id:106 ,lvl:0,type:"char",len:254,dec:0,sign:false,isPwd:true,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONFADMINISTRATORUSERPASSWORD",gxz:"ZV13ConfAdministratorUserPassword",gxold:"OV13ConfAdministratorUserPassword",gxvar:"AV13ConfAdministratorUserPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13ConfAdministratorUserPassword=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV13ConfAdministratorUserPassword=Value},v2c:function(){gx.fn.setControlValue("vCONFADMINISTRATORUSERPASSWORD",gx.O.AV13ConfAdministratorUserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV13ConfAdministratorUserPassword=this.val()},val:function(){return gx.fn.getControlValue("vCONFADMINISTRATORUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 106 , function() {
   });
   GXValidFnc[107]={ id: 107, fld:"",grid:0};
   GXValidFnc[108]={ id: 108, fld:"",grid:0};
   GXValidFnc[109]={ id: 109, fld:"TABLE_CONTAINER_UPDATECONNECTIONFILE",grid:0};
   GXValidFnc[110]={ id: 110, fld:"",grid:0};
   GXValidFnc[111]={ id: 111, fld:"",grid:0};
   GXValidFnc[112]={ id:112 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATECONNECTIONFILE",gxz:"ZV40UpdateConnectionFile",gxold:"OV40UpdateConnectionFile",gxvar:"AV40UpdateConnectionFile",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV40UpdateConnectionFile=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV40UpdateConnectionFile=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vUPDATECONNECTIONFILE",gx.O.AV40UpdateConnectionFile,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV40UpdateConnectionFile=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vUPDATECONNECTIONFILE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 112 , function() {
   });
   GXValidFnc[113]={ id: 113, fld:"",grid:0};
   GXValidFnc[114]={ id: 114, fld:"",grid:0};
   GXValidFnc[115]={ id: 115, fld:"TABLE_CONTAINER_ISGAMADMINACCESSREPOSITORY",grid:0};
   GXValidFnc[116]={ id: 116, fld:"",grid:0};
   GXValidFnc[117]={ id: 117, fld:"",grid:0};
   GXValidFnc[118]={ id:118 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISGAMADMINACCESSREPOSITORY",gxz:"ZV29isGAMAdminAccessRepository",gxold:"OV29isGAMAdminAccessRepository",gxvar:"AV29isGAMAdminAccessRepository",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV29isGAMAdminAccessRepository=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV29isGAMAdminAccessRepository=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISGAMADMINACCESSREPOSITORY",gx.O.AV29isGAMAdminAccessRepository,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV29isGAMAdminAccessRepository=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISGAMADMINACCESSREPOSITORY")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 118 , function() {
   });
   GXValidFnc[119]={ id: 119, fld:"",grid:0};
   GXValidFnc[120]={ id: 120, fld:"",grid:0};
   GXValidFnc[121]={ id: 121, fld:"TABLE_CONTAINER_CREATEGAMAPPLICATION",grid:0};
   GXValidFnc[122]={ id: 122, fld:"",grid:0};
   GXValidFnc[123]={ id: 123, fld:"",grid:0};
   GXValidFnc[124]={ id:124 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCREATEGAMAPPLICATION",gxz:"ZV22CreateGAMApplication",gxold:"OV22CreateGAMApplication",gxvar:"AV22CreateGAMApplication",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV22CreateGAMApplication=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV22CreateGAMApplication=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCREATEGAMAPPLICATION",gx.O.AV22CreateGAMApplication,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV22CreateGAMApplication=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCREATEGAMAPPLICATION")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 124 , function() {
   });
   GXValidFnc[125]={ id: 125, fld:"",grid:0};
   GXValidFnc[126]={ id: 126, fld:"",grid:0};
   GXValidFnc[127]={ id: 127, fld:"RESPONSIVETABLE_MAINATTRIBUTES_COPYAPPLICATIONTABLE",grid:0};
   GXValidFnc[128]={ id: 128, fld:"",grid:0};
   GXValidFnc[129]={ id: 129, fld:"TITLECELL_ATTRIBUTES_COPYAPPLICATIONTABLE",grid:0};
   GXValidFnc[130]={ id: 130, fld:"TITLECONTAINERTABLE_COPYAPPLICATIONTABLE",grid:0};
   GXValidFnc[133]={ id: 133, fld:"TEXTBLOCK_ATTRIBUTES_COPYAPPLICATIONTABLE", format:0,grid:0};
   GXValidFnc[134]={ id: 134, fld:"",grid:0};
   GXValidFnc[135]={ id: 135, fld:"",grid:0};
   GXValidFnc[136]={ id: 136, fld:"ATTRIBUTESCONTAINERTABLE_COPYAPPLICATIONTABLE",grid:0};
   GXValidFnc[137]={ id: 137, fld:"",grid:0};
   GXValidFnc[138]={ id: 138, fld:"",grid:0};
   GXValidFnc[139]={ id: 139, fld:"TABLE_CONTAINER_COPYFROMREPOSITORYID",grid:0};
   GXValidFnc[140]={ id: 140, fld:"",grid:0};
   GXValidFnc[141]={ id: 141, fld:"",grid:0};
   GXValidFnc[142]={ id:142 ,lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCOPYFROMREPOSITORYID",gxz:"ZV19CopyFromRepositoryId",gxold:"OV19CopyFromRepositoryId",gxvar:"AV19CopyFromRepositoryId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV19CopyFromRepositoryId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV19CopyFromRepositoryId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCOPYFROMREPOSITORYID",gx.O.AV19CopyFromRepositoryId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV19CopyFromRepositoryId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOPYFROMREPOSITORYID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 142 , function() {
   });
   GXValidFnc[143]={ id: 143, fld:"",grid:0};
   GXValidFnc[144]={ id: 144, fld:"",grid:0};
   GXValidFnc[145]={ id: 145, fld:"TABLE_CONTAINER_COPYROLES",grid:0};
   GXValidFnc[146]={ id: 146, fld:"",grid:0};
   GXValidFnc[147]={ id: 147, fld:"",grid:0};
   GXValidFnc[148]={ id:148 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCOPYROLES",gxz:"ZV20CopyRoles",gxold:"OV20CopyRoles",gxvar:"AV20CopyRoles",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV20CopyRoles=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV20CopyRoles=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCOPYROLES",gx.O.AV20CopyRoles,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV20CopyRoles=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCOPYROLES")},nac:gx.falseFn,evt:"e183e1_client",values:['true','false']};
   this.declareDomainHdlr( 148 , function() {
   });
   GXValidFnc[149]={ id: 149, fld:"",grid:0};
   GXValidFnc[150]={ id: 150, fld:"",grid:0};
   GXValidFnc[151]={ id: 151, fld:"TABLE_CONTAINER_ADMINISTRATORROLEID",grid:0};
   GXValidFnc[152]={ id: 152, fld:"",grid:0};
   GXValidFnc[153]={ id: 153, fld:"",grid:0};
   GXValidFnc[154]={ id:154 ,lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vADMINISTRATORROLEID",gxz:"ZV10AdministratorRoleId",gxold:"OV10AdministratorRoleId",gxvar:"AV10AdministratorRoleId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV10AdministratorRoleId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV10AdministratorRoleId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vADMINISTRATORROLEID",gx.O.AV10AdministratorRoleId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV10AdministratorRoleId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vADMINISTRATORROLEID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 154 , function() {
   });
   GXValidFnc[155]={ id: 155, fld:"",grid:0};
   GXValidFnc[156]={ id: 156, fld:"",grid:0};
   GXValidFnc[157]={ id: 157, fld:"TABLE_CONTAINER_COPYSECURITYPOLICIES",grid:0};
   GXValidFnc[158]={ id: 158, fld:"",grid:0};
   GXValidFnc[159]={ id: 159, fld:"",grid:0};
   GXValidFnc[160]={ id:160 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCOPYSECURITYPOLICIES",gxz:"ZV21CopySecurityPolicies",gxold:"OV21CopySecurityPolicies",gxvar:"AV21CopySecurityPolicies",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV21CopySecurityPolicies=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV21CopySecurityPolicies=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCOPYSECURITYPOLICIES",gx.O.AV21CopySecurityPolicies,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV21CopySecurityPolicies=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCOPYSECURITYPOLICIES")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 160 , function() {
   });
   GXValidFnc[161]={ id: 161, fld:"",grid:0};
   GXValidFnc[162]={ id: 162, fld:"",grid:0};
   GXValidFnc[163]={ id: 163, fld:"TABLE_CONTAINER_COPYAPPLICATION",grid:0};
   GXValidFnc[164]={ id: 164, fld:"",grid:0};
   GXValidFnc[165]={ id: 165, fld:"",grid:0};
   GXValidFnc[166]={ id:166 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCOPYAPPLICATION",gxz:"ZV17CopyApplication",gxold:"OV17CopyApplication",gxvar:"AV17CopyApplication",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV17CopyApplication=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV17CopyApplication=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCOPYAPPLICATION",gx.O.AV17CopyApplication,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV17CopyApplication=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCOPYAPPLICATION")},nac:gx.falseFn,evt:"e193e1_client",values:['true','false']};
   this.declareDomainHdlr( 166 , function() {
   });
   GXValidFnc[167]={ id: 167, fld:"",grid:0};
   GXValidFnc[168]={ id: 168, fld:"",grid:0};
   GXValidFnc[169]={ id: 169, fld:"TABLE_CONTAINER_COPYFROMAPPLICATIONID",grid:0};
   GXValidFnc[170]={ id: 170, fld:"",grid:0};
   GXValidFnc[171]={ id: 171, fld:"",grid:0};
   GXValidFnc[172]={ id:172 ,lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCOPYFROMAPPLICATIONID",gxz:"ZV18CopyFromApplicationId",gxold:"OV18CopyFromApplicationId",gxvar:"AV18CopyFromApplicationId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV18CopyFromApplicationId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV18CopyFromApplicationId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOPYFROMAPPLICATIONID",gx.O.AV18CopyFromApplicationId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV18CopyFromApplicationId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOPYFROMAPPLICATIONID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 172 , function() {
   });
   GXValidFnc[173]={ id: 173, fld:"",grid:0};
   GXValidFnc[174]={ id: 174, fld:"",grid:0};
   GXValidFnc[175]={ id: 175, fld:"TABLE_CONTAINER_COPYAPPLICATIONROLEPERMISSIONS",grid:0};
   GXValidFnc[176]={ id: 176, fld:"",grid:0};
   GXValidFnc[177]={ id: 177, fld:"",grid:0};
   GXValidFnc[178]={ id:178 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCOPYAPPLICATIONROLEPERMISSIONS",gxz:"ZV42CopyApplicationRolePermissions",gxold:"OV42CopyApplicationRolePermissions",gxvar:"AV42CopyApplicationRolePermissions",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV42CopyApplicationRolePermissions=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV42CopyApplicationRolePermissions=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCOPYAPPLICATIONROLEPERMISSIONS",gx.O.AV42CopyApplicationRolePermissions,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV42CopyApplicationRolePermissions=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCOPYAPPLICATIONROLEPERMISSIONS")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 178 , function() {
   });
   GXValidFnc[179]={ id: 179, fld:"",grid:0};
   GXValidFnc[180]={ id: 180, fld:"",grid:0};
   GXValidFnc[181]={ id: 181, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS1",grid:0};
   GXValidFnc[182]={ id: 182, fld:"",grid:0};
   GXValidFnc[183]={ id: 183, fld:"",grid:0};
   GXValidFnc[184]={ id: 184, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS1",grid:0};
   GXValidFnc[187]={ id: 187, fld:"CONFIRM",grid:0,evt:"e133e2_client",std:"ENTER"};
   GXValidFnc[189]={ id: 189, fld:"CANCEL",grid:0,evt:"e143e2_client"};
   GXValidFnc[190]={ id: 190, fld:"",grid:0};
   GXValidFnc[191]={ id: 191, fld:"",grid:0};
   this.AV26GUID = "" ;
   this.ZV26GUID = "" ;
   this.OV26GUID = "" ;
   this.AV31Name = "" ;
   this.ZV31Name = "" ;
   this.OV31Name = "" ;
   this.AV32NameSpace = "" ;
   this.ZV32NameSpace = "" ;
   this.OV32NameSpace = "" ;
   this.AV23Description = "" ;
   this.ZV23Description = "" ;
   this.OV23Description = "" ;
   this.AV25GenerateSessionStatistics = "" ;
   this.ZV25GenerateSessionStatistics = "" ;
   this.OV25GenerateSessionStatistics = "" ;
   this.AV15ConnectionUserName = "" ;
   this.ZV15ConnectionUserName = "" ;
   this.OV15ConnectionUserName = "" ;
   this.AV16ConnectionUserPassword = "" ;
   this.ZV16ConnectionUserPassword = "" ;
   this.OV16ConnectionUserPassword = "" ;
   this.AV14ConfConnectionUserPassword = "" ;
   this.ZV14ConfConnectionUserPassword = "" ;
   this.OV14ConfConnectionUserPassword = "" ;
   this.AV11AdministratorUserName = "" ;
   this.ZV11AdministratorUserName = "" ;
   this.OV11AdministratorUserName = "" ;
   this.AV12AdministratorUserPassword = "" ;
   this.ZV12AdministratorUserPassword = "" ;
   this.OV12AdministratorUserPassword = "" ;
   this.AV13ConfAdministratorUserPassword = "" ;
   this.ZV13ConfAdministratorUserPassword = "" ;
   this.OV13ConfAdministratorUserPassword = "" ;
   this.AV40UpdateConnectionFile = false ;
   this.ZV40UpdateConnectionFile = false ;
   this.OV40UpdateConnectionFile = false ;
   this.AV29isGAMAdminAccessRepository = false ;
   this.ZV29isGAMAdminAccessRepository = false ;
   this.OV29isGAMAdminAccessRepository = false ;
   this.AV22CreateGAMApplication = false ;
   this.ZV22CreateGAMApplication = false ;
   this.OV22CreateGAMApplication = false ;
   this.AV19CopyFromRepositoryId = 0 ;
   this.ZV19CopyFromRepositoryId = 0 ;
   this.OV19CopyFromRepositoryId = 0 ;
   this.AV20CopyRoles = false ;
   this.ZV20CopyRoles = false ;
   this.OV20CopyRoles = false ;
   this.AV10AdministratorRoleId = 0 ;
   this.ZV10AdministratorRoleId = 0 ;
   this.OV10AdministratorRoleId = 0 ;
   this.AV21CopySecurityPolicies = false ;
   this.ZV21CopySecurityPolicies = false ;
   this.OV21CopySecurityPolicies = false ;
   this.AV17CopyApplication = false ;
   this.ZV17CopyApplication = false ;
   this.OV17CopyApplication = false ;
   this.AV18CopyFromApplicationId = 0 ;
   this.ZV18CopyFromApplicationId = 0 ;
   this.OV18CopyFromApplicationId = 0 ;
   this.AV42CopyApplicationRolePermissions = false ;
   this.ZV42CopyApplicationRolePermissions = false ;
   this.OV42CopyApplicationRolePermissions = false ;
   this.AV26GUID = "" ;
   this.AV31Name = "" ;
   this.AV32NameSpace = "" ;
   this.AV23Description = "" ;
   this.AV25GenerateSessionStatistics = "" ;
   this.AV15ConnectionUserName = "" ;
   this.AV16ConnectionUserPassword = "" ;
   this.AV14ConfConnectionUserPassword = "" ;
   this.AV11AdministratorUserName = "" ;
   this.AV12AdministratorUserPassword = "" ;
   this.AV13ConfAdministratorUserPassword = "" ;
   this.AV40UpdateConnectionFile = false ;
   this.AV29isGAMAdminAccessRepository = false ;
   this.AV22CreateGAMApplication = false ;
   this.AV19CopyFromRepositoryId = 0 ;
   this.AV20CopyRoles = false ;
   this.AV10AdministratorRoleId = 0 ;
   this.AV21CopySecurityPolicies = false ;
   this.AV17CopyApplication = false ;
   this.AV18CopyFromApplicationId = 0 ;
   this.AV42CopyApplicationRolePermissions = false ;
   this.AV28Id = 0 ;
   this.Gx_mode = "" ;
   this.AV44AllowOauthAccess = false ;
   this.Events = {"e133e2_client": ["ENTER", true] ,"e143e2_client": ["'E_CANCEL'", true] ,"e203e2_client": ["CANCEL", true] ,"e163e1_client": ["'E_UPDATE'", false] ,"e173e1_client": ["'E_DELETE'", false] ,"e183e1_client": ["VCOPYROLES.CLICK", false] ,"e193e1_client": ["VCOPYAPPLICATION.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV44AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:'',hsh:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("UPDATE","Tooltiptext")',ctrl:'UPDATE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("DELETE","Tooltiptext")',ctrl:'DELETE',prop:'Tooltiptext'},{ctrl:'CONFIRM',prop:'Caption'},{ctrl:'CONFIRM',prop:'Visible'},{ctrl:'CONFIRM',prop:'Enabled'},{ctrl:'CANCEL',prop:'Visible'},{ctrl:'CANCEL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("UPDATE","Visible")',ctrl:'UPDATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("UPDATE","Enabled")',ctrl:'UPDATE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("DELETE","Visible")',ctrl:'DELETE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETE","Enabled")',ctrl:'DELETE',prop:'Enabled'},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}]];
   this.EvtParms["START"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV28Id',fld:'vID',pic:'ZZZZZZZZ9'},{ctrl:'vCOPYFROMREPOSITORYID'},{av:'AV19CopyFromRepositoryId',fld:'vCOPYFROMREPOSITORYID',pic:'ZZZZZZZZ9'},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}],[{av:'AV26GUID',fld:'vGUID',pic:''},{av:'AV31Name',fld:'vNAME',pic:''},{av:'AV32NameSpace',fld:'vNAMESPACE',pic:''},{av:'AV23Description',fld:'vDESCRIPTION',pic:''},{ctrl:'vGENERATESESSIONSTATISTICS'},{av:'AV25GenerateSessionStatistics',fld:'vGENERATESESSIONSTATISTICS',pic:''},{av:'gx.fn.getCtrlProperty("vGUID","Enabled")',ctrl:'vGUID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNAME","Enabled")',ctrl:'vNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNAMESPACE","Enabled")',ctrl:'vNAMESPACE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDESCRIPTION","Enabled")',ctrl:'vDESCRIPTION',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vADMINISTRATORUSERNAME","Enabled")',ctrl:'vADMINISTRATORUSERNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vADMINISTRATORUSERPASSWORD","Enabled")',ctrl:'vADMINISTRATORUSERPASSWORD',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONNECTIONUSERNAME","Enabled")',ctrl:'vCONNECTIONUSERNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONNECTIONUSERPASSWORD","Enabled")',ctrl:'vCONNECTIONUSERPASSWORD',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("CONNECTION","Class")',ctrl:'CONNECTION',prop:'Class'},{av:'gx.fn.getCtrlProperty("vUPDATECONNECTIONFILE","Visible")',ctrl:'vUPDATECONNECTIONFILE',prop:'Visible'},{ctrl:'CONFIRM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vGUID","Visible")',ctrl:'vGUID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_COPYAPPLICATIONTABLE","Visible")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_COPYAPPLICATIONTABLE',prop:'Visible'},{ctrl:'vCOPYFROMREPOSITORYID'},{av:'AV19CopyFromRepositoryId',fld:'vCOPYFROMREPOSITORYID',pic:'ZZZZZZZZ9'},{av:'AV10AdministratorRoleId',fld:'vADMINISTRATORROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV18CopyFromApplicationId',fld:'vCOPYFROMAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'AV28Id',fld:'vID',pic:'ZZZZZZZZ9'},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}],[{av:'AV28Id',fld:'vID',pic:'ZZZZZZZZ9'},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'AV28Id',fld:'vID',pic:'ZZZZZZZZ9'},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}],[{av:'AV28Id',fld:'vID',pic:'ZZZZZZZZ9'},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}]];
   this.EvtParms["ENTER"] = [[{av:'AV28Id',fld:'vID',pic:'ZZZZZZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV12AdministratorUserPassword',fld:'vADMINISTRATORUSERPASSWORD',pic:''},{av:'AV13ConfAdministratorUserPassword',fld:'vCONFADMINISTRATORUSERPASSWORD',pic:''},{av:'AV16ConnectionUserPassword',fld:'vCONNECTIONUSERPASSWORD',pic:''},{av:'AV14ConfConnectionUserPassword',fld:'vCONFCONNECTIONUSERPASSWORD',pic:''},{av:'AV31Name',fld:'vNAME',pic:''},{av:'AV32NameSpace',fld:'vNAMESPACE',pic:''},{av:'AV23Description',fld:'vDESCRIPTION',pic:''},{av:'AV11AdministratorUserName',fld:'vADMINISTRATORUSERNAME',pic:''},{av:'AV44AllowOauthAccess',fld:'vALLOWOAUTHACCESS',pic:'',hsh:true},{av:'AV15ConnectionUserName',fld:'vCONNECTIONUSERNAME',pic:''},{ctrl:'vGENERATESESSIONSTATISTICS'},{av:'AV25GenerateSessionStatistics',fld:'vGENERATESESSIONSTATISTICS',pic:''},{ctrl:'vCOPYFROMREPOSITORYID'},{av:'AV19CopyFromRepositoryId',fld:'vCOPYFROMREPOSITORYID',pic:'ZZZZZZZZ9'},{av:'AV10AdministratorRoleId',fld:'vADMINISTRATORROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV18CopyFromApplicationId',fld:'vCOPYFROMAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}],[{av:'AV26GUID',fld:'vGUID',pic:''},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}]];
   this.EvtParms["VCOPYROLES.CLICK"] = [[{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("vADMINISTRATORROLEID","Visible")',ctrl:'vADMINISTRATORROLEID',prop:'Visible'},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}]];
   this.EvtParms["VCOPYAPPLICATION.CLICK"] = [[{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("vCOPYFROMAPPLICATIONID","Visible")',ctrl:'vCOPYFROMAPPLICATIONID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCOPYAPPLICATIONROLEPERMISSIONS","Visible")',ctrl:'vCOPYAPPLICATIONROLEPERMISSIONS',prop:'Visible'},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}]];
   this.EvtParms["'E_CANCEL'"] = [[{av:'AV28Id',fld:'vID',pic:'ZZZZZZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}],[{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}]];
   this.EvtParms["VALIDV_GENERATESESSIONSTATISTICS"] = [[{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}],[{av:'AV40UpdateConnectionFile',fld:'vUPDATECONNECTIONFILE',pic:''},{av:'AV29isGAMAdminAccessRepository',fld:'vISGAMADMINACCESSREPOSITORY',pic:''},{av:'AV22CreateGAMApplication',fld:'vCREATEGAMAPPLICATION',pic:''},{av:'AV20CopyRoles',fld:'vCOPYROLES',pic:''},{av:'AV21CopySecurityPolicies',fld:'vCOPYSECURITYPOLICIES',pic:''},{av:'AV17CopyApplication',fld:'vCOPYAPPLICATION',pic:''},{av:'AV42CopyApplicationRolePermissions',fld:'vCOPYAPPLICATIONROLEPERMISSIONS',pic:''}]];
   this.EnterCtrl = ["CONFIRM"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV28Id", "vID", 0, "int", 9, 0);
   this.setVCMap("AV44AllowOauthAccess", "vALLOWOAUTHACCESS", 0, "boolean", 4, 0);
   this.setVCMap("AV28Id", "vID", 0, "int", 9, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.entryrepository);});
