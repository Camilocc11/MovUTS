gx.evt.autoSkip = false;
gx.define('k2bfsg.entryapplication', false, function () {
   this.ServerClass =  "k2bfsg.entryapplication" ;
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
      this.AV37Message=gx.fn.getControlValue("vMESSAGE") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Validv_Revoked=function()
   {
      return this.validCliEvt("Validv_Revoked", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vREVOKED");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV39Revoked)===0) || new gx.date.gxdate( this.AV39Revoked ).compare( gx.date.ymdhmstot( 1753, 1, 1, 0, 0, 0) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo Revoked fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]);
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
   this.s182_client=function()
   {
      if ( this.AV12ClientAllowRemoteAuth )
      {
         gx.fn.setCtrlProperty("REMOTEAUTHENTICATIONCONTENT","Class", "Group_Tabular" );
      }
      else
      {
         gx.fn.setCtrlProperty("REMOTEAUTHENTICATIONCONTENT","Class", "K2BToolsFSGAM_Group_Tabular_Invisible" );
      }
   };
   this.s132_client=function()
   {
      if ( this.Gx_mode != "INS" )
      {
         this.createWebComponent('Permissionswc','K2BFSG.WWApplicationPermission',[this.AV34Id]);
         this.createWebComponent('Menuswc','K2BFSG.ApplicationMenuWC',[this.AV34Id]);
      }
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
         gx.fn.setCtrlProperty("GENERATEKEY","Visible", false );
         gx.fn.setCtrlProperty("GENERATEKEY","Enabled", false );
      }
      else
      {
         gx.fn.setCtrlProperty("CONFIRM","Visible", true );
         gx.fn.setCtrlProperty("CONFIRM","Enabled", true );
         gx.fn.setCtrlProperty("CANCEL","Visible", true );
         gx.fn.setCtrlProperty("CANCEL","Enabled", true );
         gx.fn.setCtrlProperty("GENERATEKEY","Visible", true );
         gx.fn.setCtrlProperty("GENERATEKEY","Enabled", true );
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
      if ( ( this.Gx_mode == "DSP" ) || ( this.Gx_mode == "DLT" ) )
      {
         gx.fn.setCtrlProperty("vGUID","Enabled", false );
         gx.fn.setCtrlProperty("vNAME","Enabled", false );
         gx.fn.setCtrlProperty("vDSC","Enabled", false );
         gx.fn.setCtrlProperty("vVERSION","Enabled", false );
         gx.fn.setCtrlProperty("vCOPYRIGHT","Enabled", false );
         gx.fn.setCtrlProperty("vCOMPANY","Enabled", false );
         gx.fn.setCtrlProperty("vACCESSREQUIRESPERMISSION","Enabled", false );
         gx.fn.setCtrlProperty("vCLIENTID","Enabled", false );
         gx.fn.setCtrlProperty("vCLIENTSECRET","Enabled", false );
         gx.fn.setCtrlProperty("vACCESSUNIQUEBYUSER","Enabled", false );
         gx.fn.setCtrlProperty("vREVOKED","Enabled", false );
         gx.fn.setCtrlProperty("vCLIENTALLOWREMOTEAUTH","Enabled", false );
         gx.fn.setCtrlProperty("vCLIENTALLOWGETUSERROLES","Enabled", false );
         gx.fn.setCtrlProperty("vCLIENTALLOWGETUSERADDDATA","Enabled", false );
         gx.fn.setCtrlProperty("vCLIENTLOCALLOGINURL","Enabled", false );
         gx.fn.setCtrlProperty("vCLIENTCALLBACKURL","Enabled", false );
         gx.fn.setCtrlProperty("vCLIENTIMAGEURL","Enabled", false );
         gx.fn.setCtrlProperty("vCLIENTENCRYPTIONKEY","Enabled", false );
         gx.fn.setCtrlProperty("vUSEABSOLUTEURLBYENVIRONMENT","Enabled", false );
         gx.fn.setCtrlProperty("vHOMEOBJECT","Enabled", false );
         gx.fn.setCtrlProperty("vLOGOUTOBJECT","Enabled", false );
         gx.fn.setCtrlProperty("vMAINMENU","Enabled", false );
         gx.fn.setCtrlProperty("vCLIENTREPOSITORYGUID","Enabled", false );
         gx.fn.setCtrlProperty("vENVIRONMENTNAME","Enabled", false );
         gx.fn.setCtrlProperty("vENVIRONMENTSECURITYPROTOCOL","Enabled", false );
         gx.fn.setCtrlProperty("vENVIRONMENTHOST","Enabled", false );
         gx.fn.setCtrlProperty("vENVIRONMENTPORT","Enabled", false );
         gx.fn.setCtrlProperty("vENVIRONMENTVIRTUALDIRECTORY","Enabled", false );
         gx.fn.setCtrlProperty("vENVIRONMENTPROGRAMPACKAGE","Enabled", false );
         gx.fn.setCtrlProperty("vENVIRONMENTPROGRAMEXTENSION","Enabled", false );
      }
   };
   this.e242h1_client=function()
   {
      this.clearMessages();
      this.s152_client();
      this.refreshOutputs([{av:'AV34Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s152_client=function()
   {
      if ( this.Gx_mode == "DSP" )
      {
         this.call("com.movuts.k2bfsg.entryapplication", ["UPD", this.AV34Id]);
      }
   };
   this.e252h1_client=function()
   {
      this.clearMessages();
      this.s162_client();
      this.refreshOutputs([{av:'AV34Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s162_client=function()
   {
      if ( this.Gx_mode == "DSP" )
      {
         this.call("com.movuts.k2bfsg.entryapplication", ["DLT", this.AV34Id]);
      }
   };
   this.e232h1_client=function()
   {
      this.clearMessages();
      this.s172_client();
      this.refreshOutputs([{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s172_client=function()
   {
      if ( this.Gx_mode != "DSP" )
      {
         this.call("com.movuts.k2bfsg.wwapplication", []);
      }
   };
   this.e132h2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142h2_client=function()
   {
      return this.executeServerEvent("'E_GENERATEKEY'", false, null, false, false);
   };
   this.e152h2_client=function()
   {
      return this.executeServerEvent("TEXTBLOCK_ATTRIBUTES_GENERAL.CLICK", true, null, false, true);
   };
   this.e162h2_client=function()
   {
      return this.executeServerEvent("COLLAPSIBLEIMAGE_GENERAL.CLICK", true, null, false, true);
   };
   this.e172h2_client=function()
   {
      return this.executeServerEvent("TEXTBLOCK_ATTRIBUTES_PERMISSIONS.CLICK", true, null, false, true);
   };
   this.e182h2_client=function()
   {
      return this.executeServerEvent("COLLAPSIBLEIMAGE_PERMISSIONS.CLICK", true, null, false, true);
   };
   this.e192h2_client=function()
   {
      return this.executeServerEvent("TEXTBLOCK_ATTRIBUTES_MENUS.CLICK", true, null, false, true);
   };
   this.e202h2_client=function()
   {
      return this.executeServerEvent("COLLAPSIBLEIMAGE_MENUS.CLICK", true, null, false, true);
   };
   this.e222h2_client=function()
   {
      return this.executeServerEvent("VCLIENTALLOWREMOTEAUTH.CLICK", true, null, false, true);
   };
   this.e262h2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,22,24,27,28,29,30,31,32,33,34,35,36,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,242,244,245,246,247,248,249,250,251,252,253,254,255,256,259,261,264,265,266,267,268,269,271,272,273,274,275,276,277,278,281,283,286,287,288,289,290,291,293,294];
   this.GXLastCtrlId =294;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 295, 47, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[16]={ id: 16, fld:"RESPONSIVETABLE_MAINATTRIBUTES_GENERAL",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"TITLECELL_ATTRIBUTES_GENERAL",grid:0};
   GXValidFnc[19]={ id: 19, fld:"TITLECONTAINERTABLE_GENERAL",grid:0};
   GXValidFnc[22]={ id: 22, fld:"TEXTBLOCK_ATTRIBUTES_GENERAL", format:0,grid:0,evt:"e152h2_client"};
   GXValidFnc[24]={ id: 24, fld:"COLLAPSIBLEIMAGECONTAINER_GENERAL",grid:0};
   GXValidFnc[27]={ id: 27, fld:"COLLAPSIBLEIMAGE_GENERAL",grid:0,evt:"e162h2_client"};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"ATTRIBUTESCONTAINERTABLE_GENERAL",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS2",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"ACTIONSCONTAINERTABLERIGHT_ACTIONS2",grid:0};
   GXValidFnc[39]={ id: 39, fld:"UPDATE",grid:0,evt:"e242h1_client"};
   GXValidFnc[41]={ id: 41, fld:"DELETE",grid:0,evt:"e252h1_client"};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"TABLE_CONTAINER_ID",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id:47 ,lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV34Id",gxold:"OV34Id",gxvar:"AV34Id",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV34Id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV34Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vID",gx.O.AV34Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV34Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"TABLE_CONTAINER_GUID",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id:52 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGUID",gxz:"ZV31GUID",gxold:"OV31GUID",gxvar:"AV31GUID",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV31GUID=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV31GUID=Value},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV31GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV31GUID=this.val()},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"TABLE_CONTAINER_NAME",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id:58 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV38Name",gxold:"OV38Name",gxvar:"AV38Name",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV38Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV38Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV38Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV38Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 58 , function() {
   });
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"TABLE_CONTAINER_DSC",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id:63 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",gxz:"ZV21Dsc",gxold:"OV21Dsc",gxvar:"AV21Dsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV21Dsc=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV21Dsc=Value},v2c:function(){gx.fn.setControlValue("vDSC",gx.O.AV21Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV21Dsc=this.val()},val:function(){return gx.fn.getControlValue("vDSC")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id: 66, fld:"TABLE_CONTAINER_VERSION",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vVERSION",gxz:"ZV44Version",gxold:"OV44Version",gxvar:"AV44Version",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV44Version=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV44Version=Value},v2c:function(){gx.fn.setControlValue("vVERSION",gx.O.AV44Version,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV44Version=this.val()},val:function(){return gx.fn.getControlValue("vVERSION")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"TABLE_CONTAINER_COMPANY",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCOMPANY",gxz:"ZV19Company",gxold:"OV19Company",gxvar:"AV19Company",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV19Company=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV19Company=Value},v2c:function(){gx.fn.setControlValue("vCOMPANY",gx.O.AV19Company,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV19Company=this.val()},val:function(){return gx.fn.getControlValue("vCOMPANY")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"TABLE_CONTAINER_COPYRIGHT",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id:80 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCOPYRIGHT",gxz:"ZV20Copyright",gxold:"OV20Copyright",gxvar:"AV20Copyright",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV20Copyright=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV20Copyright=Value},v2c:function(){gx.fn.setControlValue("vCOPYRIGHT",gx.O.AV20Copyright,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV20Copyright=this.val()},val:function(){return gx.fn.getControlValue("vCOPYRIGHT")},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"TABLE_CONTAINER_USEABSOLUTEURLBYENVIRONMENT",grid:0};
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id:85 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSEABSOLUTEURLBYENVIRONMENT",gxz:"ZV42UseAbsoluteUrlByEnvironment",gxold:"OV42UseAbsoluteUrlByEnvironment",gxvar:"AV42UseAbsoluteUrlByEnvironment",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV42UseAbsoluteUrlByEnvironment=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV42UseAbsoluteUrlByEnvironment=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vUSEABSOLUTEURLBYENVIRONMENT",gx.O.AV42UseAbsoluteUrlByEnvironment,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV42UseAbsoluteUrlByEnvironment=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vUSEABSOLUTEURLBYENVIRONMENT")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id: 88, fld:"TABLE_CONTAINER_HOMEOBJECT",grid:0};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id:91 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vHOMEOBJECT",gxz:"ZV32HomeObject",gxold:"OV32HomeObject",gxvar:"AV32HomeObject",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV32HomeObject=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV32HomeObject=Value},v2c:function(){gx.fn.setControlValue("vHOMEOBJECT",gx.O.AV32HomeObject,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV32HomeObject=this.val()},val:function(){return gx.fn.getControlValue("vHOMEOBJECT")},nac:gx.falseFn};
   this.declareDomainHdlr( 91 , function() {
   });
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id: 93, fld:"TABLE_CONTAINER_LOGOUTOBJECT",grid:0};
   GXValidFnc[94]={ id: 94, fld:"TEXTBLOCK_VAR_LOGOUTOBJECT", format:0,grid:0};
   GXValidFnc[95]={ id: 95, fld:"TABLE_CONTAINER_LOGOUTOBJECTFIELDCONTAINER",grid:0};
   GXValidFnc[96]={ id: 96, fld:"",grid:0};
   GXValidFnc[97]={ id:97 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLOGOUTOBJECT",gxz:"ZV35LogoutObject",gxold:"OV35LogoutObject",gxvar:"AV35LogoutObject",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV35LogoutObject=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV35LogoutObject=Value},v2c:function(){gx.fn.setControlValue("vLOGOUTOBJECT",gx.O.AV35LogoutObject,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV35LogoutObject=this.val()},val:function(){return gx.fn.getControlValue("vLOGOUTOBJECT")},nac:gx.falseFn};
   this.declareDomainHdlr( 97 , function() {
   });
   GXValidFnc[98]={ id: 98, fld:"LOGOUTOBJECT_VAR_CONTEXTHELPIMAGE",grid:0};
   GXValidFnc[99]={ id: 99, fld:"",grid:0};
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   GXValidFnc[101]={ id: 101, fld:"TABLE_CONTAINER_MAINMENU",grid:0};
   GXValidFnc[102]={ id: 102, fld:"",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id:104 ,lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMAINMENU",gxz:"ZV36MainMenu",gxold:"OV36MainMenu",gxvar:"AV36MainMenu",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV36MainMenu=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV36MainMenu=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vMAINMENU",gx.O.AV36MainMenu);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV36MainMenu=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMAINMENU",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 104 , function() {
   });
   GXValidFnc[105]={ id: 105, fld:"",grid:0};
   GXValidFnc[106]={ id: 106, fld:"TABLE_CONTAINER_ACCESSREQUIRESPERMISSION",grid:0};
   GXValidFnc[107]={ id: 107, fld:"",grid:0};
   GXValidFnc[108]={ id: 108, fld:"",grid:0};
   GXValidFnc[109]={ id:109 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vACCESSREQUIRESPERMISSION",gxz:"ZV5AccessRequiresPermission",gxold:"OV5AccessRequiresPermission",gxvar:"AV5AccessRequiresPermission",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV5AccessRequiresPermission=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV5AccessRequiresPermission=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vACCESSREQUIRESPERMISSION",gx.O.AV5AccessRequiresPermission,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV5AccessRequiresPermission=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vACCESSREQUIRESPERMISSION")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 109 , function() {
   });
   GXValidFnc[110]={ id: 110, fld:"",grid:0};
   GXValidFnc[111]={ id: 111, fld:"",grid:0};
   GXValidFnc[112]={ id: 112, fld:"GROUP",grid:0};
   GXValidFnc[113]={ id: 113, fld:"MAINGROUPRESPONSIVETABLE_GROUP",grid:0};
   GXValidFnc[114]={ id: 114, fld:"",grid:0};
   GXValidFnc[115]={ id: 115, fld:"",grid:0};
   GXValidFnc[116]={ id: 116, fld:"TABLE_CONTAINER_CLIENTID",grid:0};
   GXValidFnc[117]={ id: 117, fld:"",grid:0};
   GXValidFnc[118]={ id: 118, fld:"",grid:0};
   GXValidFnc[119]={ id:119 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLIENTID",gxz:"ZV15ClientId",gxold:"OV15ClientId",gxvar:"AV15ClientId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV15ClientId=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV15ClientId=Value},v2c:function(){gx.fn.setControlValue("vCLIENTID",gx.O.AV15ClientId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV15ClientId=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTID")},nac:gx.falseFn};
   this.declareDomainHdlr( 119 , function() {
   });
   GXValidFnc[120]={ id: 120, fld:"",grid:0};
   GXValidFnc[121]={ id: 121, fld:"TABLE_CONTAINER_CLIENTSECRET",grid:0};
   GXValidFnc[122]={ id: 122, fld:"",grid:0};
   GXValidFnc[123]={ id: 123, fld:"",grid:0};
   GXValidFnc[124]={ id:124 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLIENTSECRET",gxz:"ZV18ClientSecret",gxold:"OV18ClientSecret",gxvar:"AV18ClientSecret",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV18ClientSecret=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV18ClientSecret=Value},v2c:function(){gx.fn.setControlValue("vCLIENTSECRET",gx.O.AV18ClientSecret,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV18ClientSecret=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTSECRET")},nac:gx.falseFn};
   this.declareDomainHdlr( 124 , function() {
   });
   GXValidFnc[125]={ id: 125, fld:"",grid:0};
   GXValidFnc[126]={ id: 126, fld:"",grid:0};
   GXValidFnc[127]={ id: 127, fld:"TABLE_CONTAINER_ACCESSUNIQUEBYUSER",grid:0};
   GXValidFnc[128]={ id: 128, fld:"",grid:0};
   GXValidFnc[129]={ id: 129, fld:"",grid:0};
   GXValidFnc[130]={ id:130 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vACCESSUNIQUEBYUSER",gxz:"ZV6AccessUniqueByUser",gxold:"OV6AccessUniqueByUser",gxvar:"AV6AccessUniqueByUser",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV6AccessUniqueByUser=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV6AccessUniqueByUser=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vACCESSUNIQUEBYUSER",gx.O.AV6AccessUniqueByUser,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV6AccessUniqueByUser=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vACCESSUNIQUEBYUSER")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 130 , function() {
   });
   GXValidFnc[131]={ id: 131, fld:"",grid:0};
   GXValidFnc[132]={ id: 132, fld:"TABLE_CONTAINER_REVOKED",grid:0};
   GXValidFnc[133]={ id: 133, fld:"",grid:0};
   GXValidFnc[134]={ id: 134, fld:"",grid:0};
   GXValidFnc[135]={ id:135 ,lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Revoked,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vREVOKED",gxz:"ZV39Revoked",gxold:"OV39Revoked",gxvar:"AV39Revoked",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[135],ip:[135],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39Revoked=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39Revoked=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vREVOKED",gx.O.AV39Revoked,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV39Revoked=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vREVOKED")},nac:gx.falseFn};
   this.declareDomainHdlr( 135 , function() {
   });
   GXValidFnc[136]={ id: 136, fld:"",grid:0};
   GXValidFnc[137]={ id: 137, fld:"",grid:0};
   GXValidFnc[138]={ id: 138, fld:"REMOTEAUTHENTICATION",grid:0};
   GXValidFnc[139]={ id: 139, fld:"MAINGROUPRESPONSIVETABLE_REMOTEAUTHENTICATION",grid:0};
   GXValidFnc[140]={ id: 140, fld:"",grid:0};
   GXValidFnc[141]={ id: 141, fld:"",grid:0};
   GXValidFnc[142]={ id: 142, fld:"TABLE_CONTAINER_CLIENTALLOWREMOTEAUTH",grid:0};
   GXValidFnc[143]={ id: 143, fld:"",grid:0};
   GXValidFnc[144]={ id: 144, fld:"",grid:0};
   GXValidFnc[145]={ id:145 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLIENTALLOWREMOTEAUTH",gxz:"ZV12ClientAllowRemoteAuth",gxold:"OV12ClientAllowRemoteAuth",gxvar:"AV12ClientAllowRemoteAuth",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV12ClientAllowRemoteAuth=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV12ClientAllowRemoteAuth=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCLIENTALLOWREMOTEAUTH",gx.O.AV12ClientAllowRemoteAuth,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV12ClientAllowRemoteAuth=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCLIENTALLOWREMOTEAUTH")},nac:gx.falseFn,evt:"e222h2_client",values:['true','false']};
   this.declareDomainHdlr( 145 , function() {
   });
   GXValidFnc[146]={ id: 146, fld:"",grid:0};
   GXValidFnc[147]={ id: 147, fld:"",grid:0};
   GXValidFnc[148]={ id: 148, fld:"REMOTEAUTHENTICATIONCONTENT",grid:0};
   GXValidFnc[149]={ id: 149, fld:"MAINGROUPRESPONSIVETABLE_REMOTEAUTHENTICATIONCONTENT",grid:0};
   GXValidFnc[150]={ id: 150, fld:"",grid:0};
   GXValidFnc[151]={ id: 151, fld:"",grid:0};
   GXValidFnc[152]={ id: 152, fld:"TABLE_CONTAINER_CLIENTALLOWGETUSERROLES",grid:0};
   GXValidFnc[153]={ id: 153, fld:"",grid:0};
   GXValidFnc[154]={ id: 154, fld:"",grid:0};
   GXValidFnc[155]={ id:155 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLIENTALLOWGETUSERROLES",gxz:"ZV11ClientAllowGetUserRoles",gxold:"OV11ClientAllowGetUserRoles",gxvar:"AV11ClientAllowGetUserRoles",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV11ClientAllowGetUserRoles=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV11ClientAllowGetUserRoles=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCLIENTALLOWGETUSERROLES",gx.O.AV11ClientAllowGetUserRoles,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV11ClientAllowGetUserRoles=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCLIENTALLOWGETUSERROLES")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 155 , function() {
   });
   GXValidFnc[156]={ id: 156, fld:"",grid:0};
   GXValidFnc[157]={ id: 157, fld:"TABLE_CONTAINER_CLIENTALLOWGETUSERADDDATA",grid:0};
   GXValidFnc[158]={ id: 158, fld:"",grid:0};
   GXValidFnc[159]={ id: 159, fld:"",grid:0};
   GXValidFnc[160]={ id:160 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLIENTALLOWGETUSERADDDATA",gxz:"ZV10ClientAllowGetUserAddData",gxold:"OV10ClientAllowGetUserAddData",gxvar:"AV10ClientAllowGetUserAddData",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV10ClientAllowGetUserAddData=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV10ClientAllowGetUserAddData=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCLIENTALLOWGETUSERADDDATA",gx.O.AV10ClientAllowGetUserAddData,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV10ClientAllowGetUserAddData=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCLIENTALLOWGETUSERADDDATA")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 160 , function() {
   });
   GXValidFnc[161]={ id: 161, fld:"",grid:0};
   GXValidFnc[162]={ id: 162, fld:"",grid:0};
   GXValidFnc[163]={ id: 163, fld:"TABLE_CONTAINER_CLIENTLOCALLOGINURL",grid:0};
   GXValidFnc[164]={ id: 164, fld:"",grid:0};
   GXValidFnc[165]={ id: 165, fld:"",grid:0};
   GXValidFnc[166]={ id:166 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLIENTLOCALLOGINURL",gxz:"ZV17ClientLocalLoginURL",gxold:"OV17ClientLocalLoginURL",gxvar:"AV17ClientLocalLoginURL",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV17ClientLocalLoginURL=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17ClientLocalLoginURL=Value},v2c:function(){gx.fn.setControlValue("vCLIENTLOCALLOGINURL",gx.O.AV17ClientLocalLoginURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV17ClientLocalLoginURL=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTLOCALLOGINURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 166 , function() {
   });
   GXValidFnc[167]={ id: 167, fld:"",grid:0};
   GXValidFnc[168]={ id: 168, fld:"TABLE_CONTAINER_CLIENTCALLBACKURL",grid:0};
   GXValidFnc[169]={ id: 169, fld:"",grid:0};
   GXValidFnc[170]={ id: 170, fld:"",grid:0};
   GXValidFnc[171]={ id:171 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLIENTCALLBACKURL",gxz:"ZV13ClientCallbackURL",gxold:"OV13ClientCallbackURL",gxvar:"AV13ClientCallbackURL",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13ClientCallbackURL=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV13ClientCallbackURL=Value},v2c:function(){gx.fn.setControlValue("vCLIENTCALLBACKURL",gx.O.AV13ClientCallbackURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV13ClientCallbackURL=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTCALLBACKURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 171 , function() {
   });
   GXValidFnc[172]={ id: 172, fld:"",grid:0};
   GXValidFnc[173]={ id: 173, fld:"",grid:0};
   GXValidFnc[174]={ id: 174, fld:"TABLE_CONTAINER_CLIENTIMAGEURL",grid:0};
   GXValidFnc[175]={ id: 175, fld:"",grid:0};
   GXValidFnc[176]={ id: 176, fld:"",grid:0};
   GXValidFnc[177]={ id:177 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLIENTIMAGEURL",gxz:"ZV16ClientImageURL",gxold:"OV16ClientImageURL",gxvar:"AV16ClientImageURL",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV16ClientImageURL=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV16ClientImageURL=Value},v2c:function(){gx.fn.setControlValue("vCLIENTIMAGEURL",gx.O.AV16ClientImageURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV16ClientImageURL=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTIMAGEURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 177 , function() {
   });
   GXValidFnc[178]={ id: 178, fld:"",grid:0};
   GXValidFnc[179]={ id: 179, fld:"TABLE_CONTAINER_CLIENTENCRYPTIONKEY",grid:0};
   GXValidFnc[180]={ id: 180, fld:"TEXTBLOCK_VAR_CLIENTENCRYPTIONKEY", format:0,grid:0};
   GXValidFnc[181]={ id: 181, fld:"TABLE_CONTAINER_CLIENTENCRYPTIONKEYFIELDCONTAINER",grid:0};
   GXValidFnc[182]={ id: 182, fld:"",grid:0};
   GXValidFnc[183]={ id:183 ,lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLIENTENCRYPTIONKEY",gxz:"ZV14ClientEncryptionKey",gxold:"OV14ClientEncryptionKey",gxvar:"AV14ClientEncryptionKey",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV14ClientEncryptionKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV14ClientEncryptionKey=Value},v2c:function(){gx.fn.setControlValue("vCLIENTENCRYPTIONKEY",gx.O.AV14ClientEncryptionKey,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV14ClientEncryptionKey=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTENCRYPTIONKEY")},nac:gx.falseFn};
   this.declareDomainHdlr( 183 , function() {
   });
   GXValidFnc[184]={ id: 184, fld:"GENERATEKEY",grid:0,evt:"e142h2_client"};
   GXValidFnc[185]={ id: 185, fld:"",grid:0};
   GXValidFnc[186]={ id: 186, fld:"",grid:0};
   GXValidFnc[187]={ id: 187, fld:"TABLE_CONTAINER_CLIENTREPOSITORYGUID",grid:0};
   GXValidFnc[188]={ id: 188, fld:"",grid:0};
   GXValidFnc[189]={ id: 189, fld:"",grid:0};
   GXValidFnc[190]={ id:190 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLIENTREPOSITORYGUID",gxz:"ZV48ClientRepositoryGUID",gxold:"OV48ClientRepositoryGUID",gxvar:"AV48ClientRepositoryGUID",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48ClientRepositoryGUID=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48ClientRepositoryGUID=Value},v2c:function(){gx.fn.setControlValue("vCLIENTREPOSITORYGUID",gx.O.AV48ClientRepositoryGUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV48ClientRepositoryGUID=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTREPOSITORYGUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 190 , function() {
   });
   GXValidFnc[191]={ id: 191, fld:"",grid:0};
   GXValidFnc[192]={ id: 192, fld:"",grid:0};
   GXValidFnc[193]={ id: 193, fld:"ENVIRONMENTSETTINGS",grid:0};
   GXValidFnc[194]={ id: 194, fld:"MAINGROUPRESPONSIVETABLE_ENVIRONMENTSETTINGS",grid:0};
   GXValidFnc[195]={ id: 195, fld:"",grid:0};
   GXValidFnc[196]={ id: 196, fld:"",grid:0};
   GXValidFnc[197]={ id: 197, fld:"TABLE_CONTAINER_ENVIRONMENTNAME",grid:0};
   GXValidFnc[198]={ id: 198, fld:"",grid:0};
   GXValidFnc[199]={ id: 199, fld:"",grid:0};
   GXValidFnc[200]={ id:200 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vENVIRONMENTNAME",gxz:"ZV23EnvironmentName",gxold:"OV23EnvironmentName",gxvar:"AV23EnvironmentName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV23EnvironmentName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV23EnvironmentName=Value},v2c:function(){gx.fn.setControlValue("vENVIRONMENTNAME",gx.O.AV23EnvironmentName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV23EnvironmentName=this.val()},val:function(){return gx.fn.getControlValue("vENVIRONMENTNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 200 , function() {
   });
   GXValidFnc[201]={ id: 201, fld:"",grid:0};
   GXValidFnc[202]={ id: 202, fld:"TABLE_CONTAINER_ENVIRONMENTSECURITYPROTOCOL",grid:0};
   GXValidFnc[203]={ id: 203, fld:"",grid:0};
   GXValidFnc[204]={ id: 204, fld:"",grid:0};
   GXValidFnc[205]={ id:205 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vENVIRONMENTSECURITYPROTOCOL",gxz:"ZV27EnvironmentSecurityProtocol",gxold:"OV27EnvironmentSecurityProtocol",gxvar:"AV27EnvironmentSecurityProtocol",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV27EnvironmentSecurityProtocol=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV27EnvironmentSecurityProtocol=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vENVIRONMENTSECURITYPROTOCOL",gx.O.AV27EnvironmentSecurityProtocol,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV27EnvironmentSecurityProtocol=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vENVIRONMENTSECURITYPROTOCOL")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 205 , function() {
   });
   GXValidFnc[206]={ id: 206, fld:"",grid:0};
   GXValidFnc[207]={ id: 207, fld:"",grid:0};
   GXValidFnc[208]={ id: 208, fld:"TABLE_CONTAINER_ENVIRONMENTHOST",grid:0};
   GXValidFnc[209]={ id: 209, fld:"",grid:0};
   GXValidFnc[210]={ id: 210, fld:"",grid:0};
   GXValidFnc[211]={ id:211 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vENVIRONMENTHOST",gxz:"ZV22EnvironmentHost",gxold:"OV22EnvironmentHost",gxvar:"AV22EnvironmentHost",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV22EnvironmentHost=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV22EnvironmentHost=Value},v2c:function(){gx.fn.setControlValue("vENVIRONMENTHOST",gx.O.AV22EnvironmentHost,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV22EnvironmentHost=this.val()},val:function(){return gx.fn.getControlValue("vENVIRONMENTHOST")},nac:gx.falseFn};
   this.declareDomainHdlr( 211 , function() {
   });
   GXValidFnc[212]={ id: 212, fld:"",grid:0};
   GXValidFnc[213]={ id: 213, fld:"TABLE_CONTAINER_ENVIRONMENTPORT",grid:0};
   GXValidFnc[214]={ id: 214, fld:"",grid:0};
   GXValidFnc[215]={ id: 215, fld:"",grid:0};
   GXValidFnc[216]={ id:216 ,lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vENVIRONMENTPORT",gxz:"ZV24EnvironmentPort",gxold:"OV24EnvironmentPort",gxvar:"AV24EnvironmentPort",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV24EnvironmentPort=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV24EnvironmentPort=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vENVIRONMENTPORT",gx.O.AV24EnvironmentPort,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV24EnvironmentPort=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vENVIRONMENTPORT",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 216 , function() {
   });
   GXValidFnc[217]={ id: 217, fld:"",grid:0};
   GXValidFnc[218]={ id: 218, fld:"",grid:0};
   GXValidFnc[219]={ id: 219, fld:"TABLE_CONTAINER_ENVIRONMENTVIRTUALDIRECTORY",grid:0};
   GXValidFnc[220]={ id: 220, fld:"",grid:0};
   GXValidFnc[221]={ id: 221, fld:"",grid:0};
   GXValidFnc[222]={ id:222 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vENVIRONMENTVIRTUALDIRECTORY",gxz:"ZV28EnvironmentVirtualDirectory",gxold:"OV28EnvironmentVirtualDirectory",gxvar:"AV28EnvironmentVirtualDirectory",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV28EnvironmentVirtualDirectory=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV28EnvironmentVirtualDirectory=Value},v2c:function(){gx.fn.setControlValue("vENVIRONMENTVIRTUALDIRECTORY",gx.O.AV28EnvironmentVirtualDirectory,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV28EnvironmentVirtualDirectory=this.val()},val:function(){return gx.fn.getControlValue("vENVIRONMENTVIRTUALDIRECTORY")},nac:gx.falseFn};
   this.declareDomainHdlr( 222 , function() {
   });
   GXValidFnc[223]={ id: 223, fld:"",grid:0};
   GXValidFnc[224]={ id: 224, fld:"",grid:0};
   GXValidFnc[225]={ id: 225, fld:"TABLE_CONTAINER_ENVIRONMENTPROGRAMPACKAGE",grid:0};
   GXValidFnc[226]={ id: 226, fld:"",grid:0};
   GXValidFnc[227]={ id: 227, fld:"",grid:0};
   GXValidFnc[228]={ id:228 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vENVIRONMENTPROGRAMPACKAGE",gxz:"ZV26EnvironmentProgramPackage",gxold:"OV26EnvironmentProgramPackage",gxvar:"AV26EnvironmentProgramPackage",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV26EnvironmentProgramPackage=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV26EnvironmentProgramPackage=Value},v2c:function(){gx.fn.setControlValue("vENVIRONMENTPROGRAMPACKAGE",gx.O.AV26EnvironmentProgramPackage,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV26EnvironmentProgramPackage=this.val()},val:function(){return gx.fn.getControlValue("vENVIRONMENTPROGRAMPACKAGE")},nac:gx.falseFn};
   this.declareDomainHdlr( 228 , function() {
   });
   GXValidFnc[229]={ id: 229, fld:"",grid:0};
   GXValidFnc[230]={ id: 230, fld:"TABLE_CONTAINER_ENVIRONMENTPROGRAMEXTENSION",grid:0};
   GXValidFnc[231]={ id: 231, fld:"",grid:0};
   GXValidFnc[232]={ id: 232, fld:"",grid:0};
   GXValidFnc[233]={ id:233 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vENVIRONMENTPROGRAMEXTENSION",gxz:"ZV25EnvironmentProgramExtension",gxold:"OV25EnvironmentProgramExtension",gxvar:"AV25EnvironmentProgramExtension",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV25EnvironmentProgramExtension=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV25EnvironmentProgramExtension=Value},v2c:function(){gx.fn.setControlValue("vENVIRONMENTPROGRAMEXTENSION",gx.O.AV25EnvironmentProgramExtension,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV25EnvironmentProgramExtension=this.val()},val:function(){return gx.fn.getControlValue("vENVIRONMENTPROGRAMEXTENSION")},nac:gx.falseFn};
   this.declareDomainHdlr( 233 , function() {
   });
   GXValidFnc[234]={ id: 234, fld:"",grid:0};
   GXValidFnc[235]={ id: 235, fld:"",grid:0};
   GXValidFnc[236]={ id: 236, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[237]={ id: 237, fld:"",grid:0};
   GXValidFnc[238]={ id: 238, fld:"",grid:0};
   GXValidFnc[239]={ id: 239, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[242]={ id: 242, fld:"CONFIRM",grid:0,evt:"e132h2_client",std:"ENTER"};
   GXValidFnc[244]={ id: 244, fld:"CANCEL",grid:0,evt:"e232h1_client"};
   GXValidFnc[245]={ id: 245, fld:"",grid:0};
   GXValidFnc[246]={ id: 246, fld:"",grid:0};
   GXValidFnc[247]={ id: 247, fld:"COLUMNS_MAINCOLUMNSTABLE",grid:0};
   GXValidFnc[248]={ id: 248, fld:"",grid:0};
   GXValidFnc[249]={ id: 249, fld:"",grid:0};
   GXValidFnc[250]={ id: 250, fld:"COLUMNCONTAINERTABLE_COLUMN",grid:0};
   GXValidFnc[251]={ id: 251, fld:"",grid:0};
   GXValidFnc[252]={ id: 252, fld:"",grid:0};
   GXValidFnc[253]={ id: 253, fld:"RESPONSIVETABLE_MAINATTRIBUTES_PERMISSIONS",grid:0};
   GXValidFnc[254]={ id: 254, fld:"",grid:0};
   GXValidFnc[255]={ id: 255, fld:"TITLECELL_ATTRIBUTES_PERMISSIONS",grid:0};
   GXValidFnc[256]={ id: 256, fld:"TITLECONTAINERTABLE_PERMISSIONS",grid:0};
   GXValidFnc[259]={ id: 259, fld:"TEXTBLOCK_ATTRIBUTES_PERMISSIONS", format:0,grid:0,evt:"e172h2_client"};
   GXValidFnc[261]={ id: 261, fld:"COLLAPSIBLEIMAGECONTAINER_PERMISSIONS",grid:0};
   GXValidFnc[264]={ id: 264, fld:"COLLAPSIBLEIMAGE_PERMISSIONS",grid:0,evt:"e182h2_client"};
   GXValidFnc[265]={ id: 265, fld:"",grid:0};
   GXValidFnc[266]={ id: 266, fld:"",grid:0};
   GXValidFnc[267]={ id: 267, fld:"ATTRIBUTESCONTAINERTABLE_PERMISSIONS",grid:0};
   GXValidFnc[268]={ id: 268, fld:"",grid:0};
   GXValidFnc[269]={ id: 269, fld:"",grid:0};
   GXValidFnc[271]={ id: 271, fld:"",grid:0};
   GXValidFnc[272]={ id: 272, fld:"COLUMNCONTAINERTABLE_COLUMN1",grid:0};
   GXValidFnc[273]={ id: 273, fld:"",grid:0};
   GXValidFnc[274]={ id: 274, fld:"",grid:0};
   GXValidFnc[275]={ id: 275, fld:"RESPONSIVETABLE_MAINATTRIBUTES_MENUS",grid:0};
   GXValidFnc[276]={ id: 276, fld:"",grid:0};
   GXValidFnc[277]={ id: 277, fld:"TITLECELL_ATTRIBUTES_MENUS",grid:0};
   GXValidFnc[278]={ id: 278, fld:"TITLECONTAINERTABLE_MENUS",grid:0};
   GXValidFnc[281]={ id: 281, fld:"TEXTBLOCK_ATTRIBUTES_MENUS", format:0,grid:0,evt:"e192h2_client"};
   GXValidFnc[283]={ id: 283, fld:"COLLAPSIBLEIMAGECONTAINER_MENUS",grid:0};
   GXValidFnc[286]={ id: 286, fld:"COLLAPSIBLEIMAGE_MENUS",grid:0,evt:"e202h2_client"};
   GXValidFnc[287]={ id: 287, fld:"",grid:0};
   GXValidFnc[288]={ id: 288, fld:"",grid:0};
   GXValidFnc[289]={ id: 289, fld:"ATTRIBUTESCONTAINERTABLE_MENUS",grid:0};
   GXValidFnc[290]={ id: 290, fld:"",grid:0};
   GXValidFnc[291]={ id: 291, fld:"",grid:0};
   GXValidFnc[293]={ id: 293, fld:"",grid:0};
   GXValidFnc[294]={ id: 294, fld:"",grid:0};
   this.AV34Id = 0 ;
   this.ZV34Id = 0 ;
   this.OV34Id = 0 ;
   this.AV31GUID = "" ;
   this.ZV31GUID = "" ;
   this.OV31GUID = "" ;
   this.AV38Name = "" ;
   this.ZV38Name = "" ;
   this.OV38Name = "" ;
   this.AV21Dsc = "" ;
   this.ZV21Dsc = "" ;
   this.OV21Dsc = "" ;
   this.AV44Version = "" ;
   this.ZV44Version = "" ;
   this.OV44Version = "" ;
   this.AV19Company = "" ;
   this.ZV19Company = "" ;
   this.OV19Company = "" ;
   this.AV20Copyright = "" ;
   this.ZV20Copyright = "" ;
   this.OV20Copyright = "" ;
   this.AV42UseAbsoluteUrlByEnvironment = false ;
   this.ZV42UseAbsoluteUrlByEnvironment = false ;
   this.OV42UseAbsoluteUrlByEnvironment = false ;
   this.AV32HomeObject = "" ;
   this.ZV32HomeObject = "" ;
   this.OV32HomeObject = "" ;
   this.AV35LogoutObject = "" ;
   this.ZV35LogoutObject = "" ;
   this.OV35LogoutObject = "" ;
   this.AV36MainMenu = 0 ;
   this.ZV36MainMenu = 0 ;
   this.OV36MainMenu = 0 ;
   this.AV5AccessRequiresPermission = false ;
   this.ZV5AccessRequiresPermission = false ;
   this.OV5AccessRequiresPermission = false ;
   this.AV15ClientId = "" ;
   this.ZV15ClientId = "" ;
   this.OV15ClientId = "" ;
   this.AV18ClientSecret = "" ;
   this.ZV18ClientSecret = "" ;
   this.OV18ClientSecret = "" ;
   this.AV6AccessUniqueByUser = false ;
   this.ZV6AccessUniqueByUser = false ;
   this.OV6AccessUniqueByUser = false ;
   this.AV39Revoked = gx.date.nullDate() ;
   this.ZV39Revoked = gx.date.nullDate() ;
   this.OV39Revoked = gx.date.nullDate() ;
   this.AV12ClientAllowRemoteAuth = false ;
   this.ZV12ClientAllowRemoteAuth = false ;
   this.OV12ClientAllowRemoteAuth = false ;
   this.AV11ClientAllowGetUserRoles = false ;
   this.ZV11ClientAllowGetUserRoles = false ;
   this.OV11ClientAllowGetUserRoles = false ;
   this.AV10ClientAllowGetUserAddData = false ;
   this.ZV10ClientAllowGetUserAddData = false ;
   this.OV10ClientAllowGetUserAddData = false ;
   this.AV17ClientLocalLoginURL = "" ;
   this.ZV17ClientLocalLoginURL = "" ;
   this.OV17ClientLocalLoginURL = "" ;
   this.AV13ClientCallbackURL = "" ;
   this.ZV13ClientCallbackURL = "" ;
   this.OV13ClientCallbackURL = "" ;
   this.AV16ClientImageURL = "" ;
   this.ZV16ClientImageURL = "" ;
   this.OV16ClientImageURL = "" ;
   this.AV14ClientEncryptionKey = "" ;
   this.ZV14ClientEncryptionKey = "" ;
   this.OV14ClientEncryptionKey = "" ;
   this.AV48ClientRepositoryGUID = "" ;
   this.ZV48ClientRepositoryGUID = "" ;
   this.OV48ClientRepositoryGUID = "" ;
   this.AV23EnvironmentName = "" ;
   this.ZV23EnvironmentName = "" ;
   this.OV23EnvironmentName = "" ;
   this.AV27EnvironmentSecurityProtocol = false ;
   this.ZV27EnvironmentSecurityProtocol = false ;
   this.OV27EnvironmentSecurityProtocol = false ;
   this.AV22EnvironmentHost = "" ;
   this.ZV22EnvironmentHost = "" ;
   this.OV22EnvironmentHost = "" ;
   this.AV24EnvironmentPort = 0 ;
   this.ZV24EnvironmentPort = 0 ;
   this.OV24EnvironmentPort = 0 ;
   this.AV28EnvironmentVirtualDirectory = "" ;
   this.ZV28EnvironmentVirtualDirectory = "" ;
   this.OV28EnvironmentVirtualDirectory = "" ;
   this.AV26EnvironmentProgramPackage = "" ;
   this.ZV26EnvironmentProgramPackage = "" ;
   this.OV26EnvironmentProgramPackage = "" ;
   this.AV25EnvironmentProgramExtension = "" ;
   this.ZV25EnvironmentProgramExtension = "" ;
   this.OV25EnvironmentProgramExtension = "" ;
   this.AV34Id = 0 ;
   this.AV31GUID = "" ;
   this.AV38Name = "" ;
   this.AV21Dsc = "" ;
   this.AV44Version = "" ;
   this.AV19Company = "" ;
   this.AV20Copyright = "" ;
   this.AV42UseAbsoluteUrlByEnvironment = false ;
   this.AV32HomeObject = "" ;
   this.AV35LogoutObject = "" ;
   this.AV36MainMenu = 0 ;
   this.AV5AccessRequiresPermission = false ;
   this.AV15ClientId = "" ;
   this.AV18ClientSecret = "" ;
   this.AV6AccessUniqueByUser = false ;
   this.AV39Revoked = gx.date.nullDate() ;
   this.AV12ClientAllowRemoteAuth = false ;
   this.AV11ClientAllowGetUserRoles = false ;
   this.AV10ClientAllowGetUserAddData = false ;
   this.AV17ClientLocalLoginURL = "" ;
   this.AV13ClientCallbackURL = "" ;
   this.AV16ClientImageURL = "" ;
   this.AV14ClientEncryptionKey = "" ;
   this.AV48ClientRepositoryGUID = "" ;
   this.AV23EnvironmentName = "" ;
   this.AV27EnvironmentSecurityProtocol = false ;
   this.AV22EnvironmentHost = "" ;
   this.AV24EnvironmentPort = 0 ;
   this.AV28EnvironmentVirtualDirectory = "" ;
   this.AV26EnvironmentProgramPackage = "" ;
   this.AV25EnvironmentProgramExtension = "" ;
   this.Gx_mode = "" ;
   this.AV37Message = {Id:"",Type:0,Description:""} ;
   this.Events = {"e132h2_client": ["ENTER", true] ,"e142h2_client": ["'E_GENERATEKEY'", true] ,"e152h2_client": ["TEXTBLOCK_ATTRIBUTES_GENERAL.CLICK", true] ,"e162h2_client": ["COLLAPSIBLEIMAGE_GENERAL.CLICK", true] ,"e172h2_client": ["TEXTBLOCK_ATTRIBUTES_PERMISSIONS.CLICK", true] ,"e182h2_client": ["COLLAPSIBLEIMAGE_PERMISSIONS.CLICK", true] ,"e192h2_client": ["TEXTBLOCK_ATTRIBUTES_MENUS.CLICK", true] ,"e202h2_client": ["COLLAPSIBLEIMAGE_MENUS.CLICK", true] ,"e222h2_client": ["VCLIENTALLOWREMOTEAUTH.CLICK", true] ,"e262h2_client": ["CANCEL", true] ,"e242h1_client": ["'E_UPDATE'", false] ,"e252h1_client": ["'E_DELETE'", false] ,"e232h1_client": ["'E_CANCEL'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV34Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{ctrl:'vMAINMENU'},{av:'AV36MainMenu',fld:'vMAINMENU',pic:'ZZZZZZZZZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'gx.fn.getCtrlProperty("LOGOUTOBJECT_VAR_CONTEXTHELPIMAGE","Tooltiptext")',ctrl:'LOGOUTOBJECT_VAR_CONTEXTHELPIMAGE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("UPDATE","Tooltiptext")',ctrl:'UPDATE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("DELETE","Tooltiptext")',ctrl:'DELETE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vNAME","Enabled")',ctrl:'vNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDSC","Enabled")',ctrl:'vDSC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vVERSION","Enabled")',ctrl:'vVERSION',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOPYRIGHT","Enabled")',ctrl:'vCOPYRIGHT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMPANY","Enabled")',ctrl:'vCOMPANY',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vACCESSREQUIRESPERMISSION","Enabled")',ctrl:'vACCESSREQUIRESPERMISSION',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIENTID","Enabled")',ctrl:'vCLIENTID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIENTSECRET","Enabled")',ctrl:'vCLIENTSECRET',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vACCESSUNIQUEBYUSER","Enabled")',ctrl:'vACCESSUNIQUEBYUSER',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vREVOKED","Enabled")',ctrl:'vREVOKED',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSEABSOLUTEURLBYENVIRONMENT","Enabled")',ctrl:'vUSEABSOLUTEURLBYENVIRONMENT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vHOMEOBJECT","Enabled")',ctrl:'vHOMEOBJECT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOGOUTOBJECT","Enabled")',ctrl:'vLOGOUTOBJECT',prop:'Enabled'},{ctrl:'vMAINMENU'},{av:'AV31GUID',fld:'vGUID',pic:''},{av:'AV38Name',fld:'vNAME',pic:''},{av:'AV21Dsc',fld:'vDSC',pic:''},{av:'AV44Version',fld:'vVERSION',pic:''},{av:'AV20Copyright',fld:'vCOPYRIGHT',pic:''},{av:'AV19Company',fld:'vCOMPANY',pic:''},{av:'AV15ClientId',fld:'vCLIENTID',pic:''},{av:'AV18ClientSecret',fld:'vCLIENTSECRET',pic:''},{av:'AV39Revoked',fld:'vREVOKED',pic:'99/99/9999 99:99'},{av:'gx.fn.getCtrlProperty("vENVIRONMENTNAME","Enabled")',ctrl:'vENVIRONMENTNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENVIRONMENTSECURITYPROTOCOL","Enabled")',ctrl:'vENVIRONMENTSECURITYPROTOCOL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENVIRONMENTHOST","Enabled")',ctrl:'vENVIRONMENTHOST',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENVIRONMENTPORT","Enabled")',ctrl:'vENVIRONMENTPORT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENVIRONMENTVIRTUALDIRECTORY","Enabled")',ctrl:'vENVIRONMENTVIRTUALDIRECTORY',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENVIRONMENTPROGRAMPACKAGE","Enabled")',ctrl:'vENVIRONMENTPROGRAMPACKAGE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vENVIRONMENTPROGRAMEXTENSION","Enabled")',ctrl:'vENVIRONMENTPROGRAMEXTENSION',prop:'Enabled'},{av:'AV34Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV32HomeObject',fld:'vHOMEOBJECT',pic:''},{av:'AV35LogoutObject',fld:'vLOGOUTOBJECT',pic:''},{av:'AV36MainMenu',fld:'vMAINMENU',pic:'ZZZZZZZZZZZ9'},{av:'AV17ClientLocalLoginURL',fld:'vCLIENTLOCALLOGINURL',pic:''},{av:'AV13ClientCallbackURL',fld:'vCLIENTCALLBACKURL',pic:''},{av:'AV16ClientImageURL',fld:'vCLIENTIMAGEURL',pic:''},{av:'AV14ClientEncryptionKey',fld:'vCLIENTENCRYPTIONKEY',pic:''},{av:'AV48ClientRepositoryGUID',fld:'vCLIENTREPOSITORYGUID',pic:''},{av:'AV23EnvironmentName',fld:'vENVIRONMENTNAME',pic:''},{av:'AV22EnvironmentHost',fld:'vENVIRONMENTHOST',pic:''},{av:'AV24EnvironmentPort',fld:'vENVIRONMENTPORT',pic:'ZZZZ9'},{av:'AV28EnvironmentVirtualDirectory',fld:'vENVIRONMENTVIRTUALDIRECTORY',pic:''},{av:'AV26EnvironmentProgramPackage',fld:'vENVIRONMENTPROGRAMPACKAGE',pic:''},{av:'AV25EnvironmentProgramExtension',fld:'vENVIRONMENTPROGRAMEXTENSION',pic:''},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_PERMISSIONS","Visible")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_PERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_MENUS","Visible")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_MENUS',prop:'Visible'},{ctrl:'PERMISSIONSWC'},{ctrl:'MENUSWC'},{ctrl:'CONFIRM',prop:'Caption'},{ctrl:'CONFIRM',prop:'Visible'},{ctrl:'CONFIRM',prop:'Enabled'},{ctrl:'CANCEL',prop:'Visible'},{ctrl:'CANCEL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("UPDATE","Visible")',ctrl:'UPDATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("UPDATE","Enabled")',ctrl:'UPDATE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("DELETE","Visible")',ctrl:'DELETE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETE","Enabled")',ctrl:'DELETE',prop:'Enabled'},{ctrl:'GENERATEKEY',prop:'Visible'},{ctrl:'GENERATEKEY',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vGUID","Enabled")',ctrl:'vGUID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIENTALLOWREMOTEAUTH","Enabled")',ctrl:'vCLIENTALLOWREMOTEAUTH',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIENTALLOWGETUSERROLES","Enabled")',ctrl:'vCLIENTALLOWGETUSERROLES',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIENTALLOWGETUSERADDDATA","Enabled")',ctrl:'vCLIENTALLOWGETUSERADDDATA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIENTLOCALLOGINURL","Enabled")',ctrl:'vCLIENTLOCALLOGINURL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIENTCALLBACKURL","Enabled")',ctrl:'vCLIENTCALLBACKURL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIENTIMAGEURL","Enabled")',ctrl:'vCLIENTIMAGEURL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIENTENCRYPTIONKEY","Enabled")',ctrl:'vCLIENTENCRYPTIONKEY',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIENTREPOSITORYGUID","Enabled")',ctrl:'vCLIENTREPOSITORYGUID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("REMOTEAUTHENTICATIONCONTENT","Class")',ctrl:'REMOTEAUTHENTICATIONCONTENT',prop:'Class'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EvtParms["ENTER"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV34Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV38Name',fld:'vNAME',pic:''},{av:'AV21Dsc',fld:'vDSC',pic:''},{av:'AV44Version',fld:'vVERSION',pic:''},{av:'AV20Copyright',fld:'vCOPYRIGHT',pic:''},{av:'AV19Company',fld:'vCOMPANY',pic:''},{av:'AV15ClientId',fld:'vCLIENTID',pic:''},{av:'AV18ClientSecret',fld:'vCLIENTSECRET',pic:''},{av:'AV32HomeObject',fld:'vHOMEOBJECT',pic:''},{av:'AV35LogoutObject',fld:'vLOGOUTOBJECT',pic:''},{ctrl:'vMAINMENU'},{av:'AV36MainMenu',fld:'vMAINMENU',pic:'ZZZZZZZZZZZ9'},{av:'AV17ClientLocalLoginURL',fld:'vCLIENTLOCALLOGINURL',pic:''},{av:'AV13ClientCallbackURL',fld:'vCLIENTCALLBACKURL',pic:''},{av:'AV16ClientImageURL',fld:'vCLIENTIMAGEURL',pic:''},{av:'AV14ClientEncryptionKey',fld:'vCLIENTENCRYPTIONKEY',pic:''},{av:'AV48ClientRepositoryGUID',fld:'vCLIENTREPOSITORYGUID',pic:''},{av:'AV23EnvironmentName',fld:'vENVIRONMENTNAME',pic:''},{av:'AV22EnvironmentHost',fld:'vENVIRONMENTHOST',pic:''},{av:'AV24EnvironmentPort',fld:'vENVIRONMENTPORT',pic:'ZZZZ9'},{av:'AV28EnvironmentVirtualDirectory',fld:'vENVIRONMENTVIRTUALDIRECTORY',pic:''},{av:'AV26EnvironmentProgramPackage',fld:'vENVIRONMENTPROGRAMPACKAGE',pic:''},{av:'AV25EnvironmentProgramExtension',fld:'vENVIRONMENTPROGRAMEXTENSION',pic:''},{av:'AV37Message',fld:'vMESSAGE',pic:''},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'AV37Message',fld:'vMESSAGE',pic:''},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV34Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'AV34Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV34Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'AV34Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EvtParms["'E_CANCEL'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EvtParms["VCLIENTALLOWREMOTEAUTH.CLICK"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'gx.fn.getCtrlProperty("REMOTEAUTHENTICATIONCONTENT","Class")',ctrl:'REMOTEAUTHENTICATIONCONTENT',prop:'Class'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EvtParms["'E_GENERATEKEY'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'AV14ClientEncryptionKey',fld:'vCLIENTENCRYPTIONKEY',pic:''},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EvtParms["TEXTBLOCK_ATTRIBUTES_GENERAL.CLICK"] = [[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_GENERAL","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_GENERAL',prop:'Visible'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_GENERAL","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_GENERAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_GENERAL","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_GENERAL',prop:'Class'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EvtParms["COLLAPSIBLEIMAGE_GENERAL.CLICK"] = [[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_GENERAL","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_GENERAL',prop:'Visible'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_GENERAL","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_GENERAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_GENERAL","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_GENERAL',prop:'Class'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EvtParms["TEXTBLOCK_ATTRIBUTES_PERMISSIONS.CLICK"] = [[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_PERMISSIONS","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_PERMISSIONS',prop:'Visible'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_PERMISSIONS","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_PERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_PERMISSIONS","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_PERMISSIONS',prop:'Class'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EvtParms["COLLAPSIBLEIMAGE_PERMISSIONS.CLICK"] = [[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_PERMISSIONS","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_PERMISSIONS',prop:'Visible'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_PERMISSIONS","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_PERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_PERMISSIONS","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_PERMISSIONS',prop:'Class'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EvtParms["TEXTBLOCK_ATTRIBUTES_MENUS.CLICK"] = [[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_MENUS","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_MENUS',prop:'Visible'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_MENUS","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_MENUS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_MENUS","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_MENUS',prop:'Class'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EvtParms["COLLAPSIBLEIMAGE_MENUS.CLICK"] = [[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_MENUS","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_MENUS',prop:'Visible'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_MENUS","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_MENUS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_MENUS","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_MENUS',prop:'Class'},{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EvtParms["VALIDV_REVOKED"] = [[{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}],[{av:'AV42UseAbsoluteUrlByEnvironment',fld:'vUSEABSOLUTEURLBYENVIRONMENT',pic:''},{av:'AV5AccessRequiresPermission',fld:'vACCESSREQUIRESPERMISSION',pic:''},{av:'AV6AccessUniqueByUser',fld:'vACCESSUNIQUEBYUSER',pic:''},{av:'AV12ClientAllowRemoteAuth',fld:'vCLIENTALLOWREMOTEAUTH',pic:''},{av:'AV11ClientAllowGetUserRoles',fld:'vCLIENTALLOWGETUSERROLES',pic:''},{av:'AV10ClientAllowGetUserAddData',fld:'vCLIENTALLOWGETUSERADDDATA',pic:''},{av:'AV27EnvironmentSecurityProtocol',fld:'vENVIRONMENTSECURITYPROTOCOL',pic:''}]];
   this.EnterCtrl = ["CONFIRM"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV37Message", "vMESSAGE", 0, "GeneXus\Common\Messages.Message", 0, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.Initialize( );
   this.setComponent({id: "PERMISSIONSWC" ,GXClass: null , Prefix: "W0270" , lvl: 1 });
   this.setComponent({id: "MENUSWC" ,GXClass: null , Prefix: "W0292" , lvl: 1 });
});
gx.wi( function() { gx.createParentObj(k2bfsg.entryapplication);});
