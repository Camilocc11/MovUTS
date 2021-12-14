gx.evt.autoSkip = false;
gx.define('k2bfsg.entryuser', false, function () {
   this.ServerClass =  "k2bfsg.entryuser" ;
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
   this.Validv_Birthday=function()
   {
      return this.validCliEvt("Validv_Birthday", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vBIRTHDAY");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV42Birthday)===0) || new gx.date.gxdate( this.AV42Birthday ).compare( gx.date.ymdtod( 1753, 1, 1) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo Birthday fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Validv_Gender=function()
   {
      return this.validCliEvt("Validv_Gender", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vGENDER");
         this.AnyError  = 0;
         if ( ! ( ( this.AV43Gender == "N" ) || ( this.AV43Gender == "F" ) || ( this.AV43Gender == "M" ) ) )
         {
            try {
               gxballoon.setError("Campo Gender fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Validv_Activationdate=function()
   {
      return this.validCliEvt("Validv_Activationdate", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vACTIVATIONDATE");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV45ActivationDate)===0) || new gx.date.gxdate( this.AV45ActivationDate ).compare( gx.date.ymdhmstot( 1753, 1, 1, 0, 0, 0) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo Activation Date fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]);
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
   this.e172u1_client=function()
   {
      this.clearMessages();
      this.s162_client();
      this.refreshOutputs([{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s162_client=function()
   {
      if ( this.Gx_mode != "DSP" )
      {
         this.call("com.movuts.k2bfsg.wwuser", []);
      }
   };
   this.e182u1_client=function()
   {
      this.clearMessages();
      this.s172_client();
      this.refreshOutputs([{av:'AV34UserId',fld:'vUSERID',pic:''},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s172_client=function()
   {
      if ( this.Gx_mode == "DSP" )
      {
         this.call("com.movuts.k2bfsg.entryuser", ["UPD", this.AV34UserId]);
      }
   };
   this.e192u1_client=function()
   {
      this.clearMessages();
      this.s182_client();
      this.refreshOutputs([{av:'AV34UserId',fld:'vUSERID',pic:''},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s182_client=function()
   {
      if ( this.Gx_mode == "DSP" )
      {
         this.call("com.movuts.k2bfsg.entryuser", ["DLT", this.AV34UserId]);
      }
   };
   this.e112u1_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Visible") != 0 )
      {
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Visible", false );
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Class", "Section_LineSeparatorContentClose" );
         gx.fn.setCtrlProperty("LINESEPARATORHEADER_LINESEPARATOR","Class", "Section_LineSeparatorClose" );
      }
      else
      {
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Visible", true );
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Class", "Section_LineSeparatorContentOpen" );
         gx.fn.setCtrlProperty("LINESEPARATORHEADER_LINESEPARATOR","Class", "Section_LineSeparatorOpen" );
      }
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Visible")',ctrl:'LINESEPARATORCONTENT_LINESEPARATOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Class")',ctrl:'LINESEPARATORCONTENT_LINESEPARATOR',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_LINESEPARATOR","Class")',ctrl:'LINESEPARATORHEADER_LINESEPARATOR',prop:'Class'},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e142u2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152u2_client=function()
   {
      return this.executeServerEvent("'E_ENABLE'", false, null, false, false);
   };
   this.e202u2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,29,30,31,32,33,34,35,36,37,40,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,188,190,191,192,193,194,196,197];
   this.GXLastCtrlId =197;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 198, 48, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[24]={ id: 24, fld:"TITLECELL_ATTRIBUTES_ATTRIBUTES",grid:0};
   GXValidFnc[25]={ id: 25, fld:"TITLECONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[28]={ id: 28, fld:"TEXTBLOCK_ATTRIBUTES_ATTRIBUTES", format:0,grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS2",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"ACTIONSCONTAINERTABLERIGHT_ACTIONS2",grid:0};
   GXValidFnc[40]={ id: 40, fld:"UPDATE",grid:0,evt:"e182u1_client"};
   GXValidFnc[42]={ id: 42, fld:"DELETE",grid:0,evt:"e192u1_client"};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"TABLE_CONTAINER_USERID",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERID",gxz:"ZV34UserId",gxold:"OV34UserId",gxvar:"AV34UserId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV34UserId=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV34UserId=Value},v2c:function(){gx.fn.setControlValue("vUSERID",gx.O.AV34UserId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV34UserId=this.val()},val:function(){return gx.fn.getControlValue("vUSERID")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"TABLE_CONTAINER_USERNAMESPACE",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAMESPACE",gxz:"ZV35UserNameSpace",gxold:"OV35UserNameSpace",gxvar:"AV35UserNameSpace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV35UserNameSpace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV35UserNameSpace=Value},v2c:function(){gx.fn.setControlValue("vUSERNAMESPACE",gx.O.AV35UserNameSpace,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV35UserNameSpace=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAMESPACE")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"TABLE_CONTAINER_NAME",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id:60 ,lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV36Name",gxold:"OV36Name",gxvar:"AV36Name",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV36Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV36Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV36Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV36Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"TABLE_CONTAINER_EMAIL",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vEMAIL",gxz:"ZV37Email",gxold:"OV37Email",gxvar:"AV37Email",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV37Email=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV37Email=Value},v2c:function(){gx.fn.setControlValue("vEMAIL",gx.O.AV37Email,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV37Email=this.val()},val:function(){return gx.fn.getControlValue("vEMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"TABLE_CONTAINER_FIRSTNAME",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFIRSTNAME",gxz:"ZV38FirstName",gxold:"OV38FirstName",gxvar:"AV38FirstName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV38FirstName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV38FirstName=Value},v2c:function(){gx.fn.setControlValue("vFIRSTNAME",gx.O.AV38FirstName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV38FirstName=this.val()},val:function(){return gx.fn.getControlValue("vFIRSTNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"TABLE_CONTAINER_LASTNAME",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id:78 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLASTNAME",gxz:"ZV39LastName",gxold:"OV39LastName",gxvar:"AV39LastName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39LastName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV39LastName=Value},v2c:function(){gx.fn.setControlValue("vLASTNAME",gx.O.AV39LastName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV39LastName=this.val()},val:function(){return gx.fn.getControlValue("vLASTNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 78 , function() {
   });
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id: 81, fld:"TABLE_CONTAINER_PASSWORD",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id:84 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPASSWORD",gxz:"ZV40Password",gxold:"OV40Password",gxvar:"AV40Password",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV40Password=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV40Password=Value},v2c:function(){gx.fn.setControlValue("vPASSWORD",gx.O.AV40Password,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV40Password=this.val()},val:function(){return gx.fn.getControlValue("vPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 84 , function() {
   });
   GXValidFnc[85]={ id: 85, fld:"",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"TABLE_CONTAINER_PASSWORDCONF",grid:0};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id:90 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPASSWORDCONF",gxz:"ZV41PasswordConf",gxold:"OV41PasswordConf",gxvar:"AV41PasswordConf",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV41PasswordConf=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV41PasswordConf=Value},v2c:function(){gx.fn.setControlValue("vPASSWORDCONF",gx.O.AV41PasswordConf,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV41PasswordConf=this.val()},val:function(){return gx.fn.getControlValue("vPASSWORDCONF")},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[91]={ id: 91, fld:"",grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id: 93, fld:"TABLE_CONTAINER_URLIMAGE",grid:0};
   GXValidFnc[94]={ id: 94, fld:"",grid:0};
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id:96 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vURLIMAGE",gxz:"ZV55URLImage",gxold:"OV55URLImage",gxvar:"AV55URLImage",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV55URLImage=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV55URLImage=Value},v2c:function(){gx.fn.setControlValue("vURLIMAGE",gx.O.AV55URLImage,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV55URLImage=this.val()},val:function(){return gx.fn.getControlValue("vURLIMAGE")},nac:gx.falseFn};
   this.declareDomainHdlr( 96 , function() {
   });
   GXValidFnc[97]={ id: 97, fld:"",grid:0};
   GXValidFnc[98]={ id: 98, fld:"",grid:0};
   GXValidFnc[99]={ id: 99, fld:"TABLE_CONTAINER_BIRTHDAY",grid:0};
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id:102 ,lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Birthday,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBIRTHDAY",gxz:"ZV42Birthday",gxold:"OV42Birthday",gxvar:"AV42Birthday",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[102],ip:[102],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV42Birthday=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV42Birthday=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vBIRTHDAY",gx.O.AV42Birthday,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV42Birthday=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vBIRTHDAY")},nac:gx.falseFn};
   this.declareDomainHdlr( 102 , function() {
   });
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[105]={ id: 105, fld:"TABLE_CONTAINER_GENDER",grid:0};
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"",grid:0};
   GXValidFnc[108]={ id:108 ,lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Gender,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGENDER",gxz:"ZV43Gender",gxold:"OV43Gender",gxvar:"AV43Gender",ucs:[],op:[108],ip:[108],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV43Gender=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV43Gender=Value},v2c:function(){gx.fn.setComboBoxValue("vGENDER",gx.O.AV43Gender);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV43Gender=this.val()},val:function(){return gx.fn.getControlValue("vGENDER")},nac:gx.falseFn};
   this.declareDomainHdlr( 108 , function() {
   });
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id: 110, fld:"",grid:0};
   GXValidFnc[111]={ id: 111, fld:"TABLE_CONTAINER_ISACTIVE",grid:0};
   GXValidFnc[112]={ id: 112, fld:"TEXTBLOCK_VAR_ISACTIVE", format:0,grid:0};
   GXValidFnc[113]={ id: 113, fld:"TABLE_CONTAINER_ISACTIVEFIELDCONTAINER",grid:0};
   GXValidFnc[114]={ id: 114, fld:"",grid:0};
   GXValidFnc[115]={ id:115 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISACTIVE",gxz:"ZV44IsActive",gxold:"OV44IsActive",gxvar:"AV44IsActive",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV44IsActive=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV44IsActive=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISACTIVE",gx.O.AV44IsActive,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV44IsActive=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISACTIVE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 115 , function() {
   });
   GXValidFnc[116]={ id: 116, fld:"",grid:0};
   GXValidFnc[117]={ id:117 ,lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Activationdate,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vACTIVATIONDATE",gxz:"ZV45ActivationDate",gxold:"OV45ActivationDate",gxvar:"AV45ActivationDate",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[117],ip:[117],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV45ActivationDate=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV45ActivationDate=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vACTIVATIONDATE",gx.O.AV45ActivationDate,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV45ActivationDate=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vACTIVATIONDATE")},nac:gx.falseFn};
   this.declareDomainHdlr( 117 , function() {
   });
   GXValidFnc[118]={ id: 118, fld:"",grid:0};
   GXValidFnc[119]={ id: 119, fld:"",grid:0};
   GXValidFnc[120]={ id: 120, fld:"TABLE_CONTAINER_ISENABLEDINREPOSITORY",grid:0};
   GXValidFnc[121]={ id: 121, fld:"TEXTBLOCK_VAR_ISENABLEDINREPOSITORY", format:0,grid:0};
   GXValidFnc[122]={ id: 122, fld:"TABLE_CONTAINER_ISENABLEDINREPOSITORYFIELDCONTAINER",grid:0};
   GXValidFnc[123]={ id: 123, fld:"",grid:0};
   GXValidFnc[124]={ id:124 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISENABLEDINREPOSITORY",gxz:"ZV46IsEnabledInRepository",gxold:"OV46IsEnabledInRepository",gxvar:"AV46IsEnabledInRepository",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV46IsEnabledInRepository=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46IsEnabledInRepository=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISENABLEDINREPOSITORY",gx.O.AV46IsEnabledInRepository,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV46IsEnabledInRepository=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISENABLEDINREPOSITORY")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 124 , function() {
   });
   GXValidFnc[125]={ id: 125, fld:"ENABLE",grid:0,evt:"e152u2_client"};
   GXValidFnc[126]={ id: 126, fld:"",grid:0};
   GXValidFnc[127]={ id: 127, fld:"",grid:0};
   GXValidFnc[128]={ id: 128, fld:"LINESEPARATORCONTAINER_LINESEPARATOR",grid:0};
   GXValidFnc[129]={ id: 129, fld:"LINESEPARATORHEADER_LINESEPARATOR",grid:0};
   GXValidFnc[130]={ id: 130, fld:"LINESEPARATORTITLE_LINESEPARATOR", format:0,grid:0,evt:"e112u1_client"};
   GXValidFnc[131]={ id: 131, fld:"LINESEPARATORCONTENT_LINESEPARATOR",grid:0};
   GXValidFnc[132]={ id: 132, fld:"",grid:0};
   GXValidFnc[133]={ id: 133, fld:"",grid:0};
   GXValidFnc[134]={ id: 134, fld:"TABLE_CONTAINER_EXTERNALID",grid:0};
   GXValidFnc[135]={ id: 135, fld:"",grid:0};
   GXValidFnc[136]={ id: 136, fld:"",grid:0};
   GXValidFnc[137]={ id:137 ,lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vEXTERNALID",gxz:"ZV47ExternalId",gxold:"OV47ExternalId",gxvar:"AV47ExternalId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47ExternalId=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV47ExternalId=Value},v2c:function(){gx.fn.setControlValue("vEXTERNALID",gx.O.AV47ExternalId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV47ExternalId=this.val()},val:function(){return gx.fn.getControlValue("vEXTERNALID")},nac:gx.falseFn};
   this.declareDomainHdlr( 137 , function() {
   });
   GXValidFnc[138]={ id: 138, fld:"",grid:0};
   GXValidFnc[139]={ id: 139, fld:"",grid:0};
   GXValidFnc[140]={ id: 140, fld:"TABLE_CONTAINER_URLPROFILE",grid:0};
   GXValidFnc[141]={ id: 141, fld:"",grid:0};
   GXValidFnc[142]={ id: 142, fld:"",grid:0};
   GXValidFnc[143]={ id:143 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vURLPROFILE",gxz:"ZV48URLProfile",gxold:"OV48URLProfile",gxvar:"AV48URLProfile",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48URLProfile=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48URLProfile=Value},v2c:function(){gx.fn.setControlValue("vURLPROFILE",gx.O.AV48URLProfile,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV48URLProfile=this.val()},val:function(){return gx.fn.getControlValue("vURLPROFILE")},nac:gx.falseFn};
   this.declareDomainHdlr( 143 , function() {
   });
   GXValidFnc[144]={ id: 144, fld:"",grid:0};
   GXValidFnc[145]={ id: 145, fld:"",grid:0};
   GXValidFnc[146]={ id: 146, fld:"TABLE_CONTAINER_DONTRECIVEINFORMATION",grid:0};
   GXValidFnc[147]={ id: 147, fld:"",grid:0};
   GXValidFnc[148]={ id: 148, fld:"",grid:0};
   GXValidFnc[149]={ id:149 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDONTRECIVEINFORMATION",gxz:"ZV49DontReciveInformation",gxold:"OV49DontReciveInformation",gxvar:"AV49DontReciveInformation",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV49DontReciveInformation=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV49DontReciveInformation=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vDONTRECIVEINFORMATION",gx.O.AV49DontReciveInformation,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV49DontReciveInformation=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vDONTRECIVEINFORMATION")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 149 , function() {
   });
   GXValidFnc[150]={ id: 150, fld:"",grid:0};
   GXValidFnc[151]={ id: 151, fld:"",grid:0};
   GXValidFnc[152]={ id: 152, fld:"TABLE_CONTAINER_CANOTCHANGEPASSWORD",grid:0};
   GXValidFnc[153]={ id: 153, fld:"",grid:0};
   GXValidFnc[154]={ id: 154, fld:"",grid:0};
   GXValidFnc[155]={ id:155 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCANOTCHANGEPASSWORD",gxz:"ZV50CanotChangePassword",gxold:"OV50CanotChangePassword",gxvar:"AV50CanotChangePassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV50CanotChangePassword=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV50CanotChangePassword=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCANOTCHANGEPASSWORD",gx.O.AV50CanotChangePassword,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV50CanotChangePassword=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCANOTCHANGEPASSWORD")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 155 , function() {
   });
   GXValidFnc[156]={ id: 156, fld:"",grid:0};
   GXValidFnc[157]={ id: 157, fld:"",grid:0};
   GXValidFnc[158]={ id: 158, fld:"TABLE_CONTAINER_MUSTCHANGEPASSWORD",grid:0};
   GXValidFnc[159]={ id: 159, fld:"",grid:0};
   GXValidFnc[160]={ id: 160, fld:"",grid:0};
   GXValidFnc[161]={ id:161 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMUSTCHANGEPASSWORD",gxz:"ZV51MustChangePassword",gxold:"OV51MustChangePassword",gxvar:"AV51MustChangePassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV51MustChangePassword=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV51MustChangePassword=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vMUSTCHANGEPASSWORD",gx.O.AV51MustChangePassword,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV51MustChangePassword=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vMUSTCHANGEPASSWORD")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 161 , function() {
   });
   GXValidFnc[162]={ id: 162, fld:"",grid:0};
   GXValidFnc[163]={ id: 163, fld:"",grid:0};
   GXValidFnc[164]={ id: 164, fld:"TABLE_CONTAINER_PASSWORDNEVEREXPIRES",grid:0};
   GXValidFnc[165]={ id: 165, fld:"",grid:0};
   GXValidFnc[166]={ id: 166, fld:"",grid:0};
   GXValidFnc[167]={ id:167 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPASSWORDNEVEREXPIRES",gxz:"ZV52PasswordNeverExpires",gxold:"OV52PasswordNeverExpires",gxvar:"AV52PasswordNeverExpires",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV52PasswordNeverExpires=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV52PasswordNeverExpires=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vPASSWORDNEVEREXPIRES",gx.O.AV52PasswordNeverExpires,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV52PasswordNeverExpires=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vPASSWORDNEVEREXPIRES")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 167 , function() {
   });
   GXValidFnc[168]={ id: 168, fld:"",grid:0};
   GXValidFnc[169]={ id: 169, fld:"",grid:0};
   GXValidFnc[170]={ id: 170, fld:"TABLE_CONTAINER_ISBLOCKED",grid:0};
   GXValidFnc[171]={ id: 171, fld:"",grid:0};
   GXValidFnc[172]={ id: 172, fld:"",grid:0};
   GXValidFnc[173]={ id:173 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISBLOCKED",gxz:"ZV53IsBlocked",gxold:"OV53IsBlocked",gxvar:"AV53IsBlocked",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV53IsBlocked=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV53IsBlocked=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISBLOCKED",gx.O.AV53IsBlocked,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV53IsBlocked=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISBLOCKED")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 173 , function() {
   });
   GXValidFnc[174]={ id: 174, fld:"",grid:0};
   GXValidFnc[175]={ id: 175, fld:"",grid:0};
   GXValidFnc[176]={ id: 176, fld:"TABLE_CONTAINER_SECURITYPOLICYID",grid:0};
   GXValidFnc[177]={ id: 177, fld:"",grid:0};
   GXValidFnc[178]={ id: 178, fld:"",grid:0};
   GXValidFnc[179]={ id:179 ,lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSECURITYPOLICYID",gxz:"ZV54SecurityPolicyId",gxold:"OV54SecurityPolicyId",gxvar:"AV54SecurityPolicyId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV54SecurityPolicyId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV54SecurityPolicyId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSECURITYPOLICYID",gx.O.AV54SecurityPolicyId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV54SecurityPolicyId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSECURITYPOLICYID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 179 , function() {
   });
   GXValidFnc[180]={ id: 180, fld:"",grid:0};
   GXValidFnc[181]={ id: 181, fld:"",grid:0};
   GXValidFnc[182]={ id: 182, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS1",grid:0};
   GXValidFnc[183]={ id: 183, fld:"",grid:0};
   GXValidFnc[184]={ id: 184, fld:"",grid:0};
   GXValidFnc[185]={ id: 185, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS1",grid:0};
   GXValidFnc[188]={ id: 188, fld:"CONFIRM",grid:0,evt:"e142u2_client",std:"ENTER"};
   GXValidFnc[190]={ id: 190, fld:"CANCEL",grid:0,evt:"e172u1_client"};
   GXValidFnc[191]={ id: 191, fld:"",grid:0};
   GXValidFnc[192]={ id: 192, fld:"COLUMNCONTAINERTABLE_COLUMN1",grid:0};
   GXValidFnc[193]={ id: 193, fld:"",grid:0};
   GXValidFnc[194]={ id: 194, fld:"",grid:0};
   GXValidFnc[196]={ id: 196, fld:"",grid:0};
   GXValidFnc[197]={ id: 197, fld:"",grid:0};
   this.AV34UserId = "" ;
   this.ZV34UserId = "" ;
   this.OV34UserId = "" ;
   this.AV35UserNameSpace = "" ;
   this.ZV35UserNameSpace = "" ;
   this.OV35UserNameSpace = "" ;
   this.AV36Name = "" ;
   this.ZV36Name = "" ;
   this.OV36Name = "" ;
   this.AV37Email = "" ;
   this.ZV37Email = "" ;
   this.OV37Email = "" ;
   this.AV38FirstName = "" ;
   this.ZV38FirstName = "" ;
   this.OV38FirstName = "" ;
   this.AV39LastName = "" ;
   this.ZV39LastName = "" ;
   this.OV39LastName = "" ;
   this.AV40Password = "" ;
   this.ZV40Password = "" ;
   this.OV40Password = "" ;
   this.AV41PasswordConf = "" ;
   this.ZV41PasswordConf = "" ;
   this.OV41PasswordConf = "" ;
   this.AV55URLImage = "" ;
   this.ZV55URLImage = "" ;
   this.OV55URLImage = "" ;
   this.AV42Birthday = gx.date.nullDate() ;
   this.ZV42Birthday = gx.date.nullDate() ;
   this.OV42Birthday = gx.date.nullDate() ;
   this.AV43Gender = "" ;
   this.ZV43Gender = "" ;
   this.OV43Gender = "" ;
   this.AV44IsActive = false ;
   this.ZV44IsActive = false ;
   this.OV44IsActive = false ;
   this.AV45ActivationDate = gx.date.nullDate() ;
   this.ZV45ActivationDate = gx.date.nullDate() ;
   this.OV45ActivationDate = gx.date.nullDate() ;
   this.AV46IsEnabledInRepository = false ;
   this.ZV46IsEnabledInRepository = false ;
   this.OV46IsEnabledInRepository = false ;
   this.AV47ExternalId = "" ;
   this.ZV47ExternalId = "" ;
   this.OV47ExternalId = "" ;
   this.AV48URLProfile = "" ;
   this.ZV48URLProfile = "" ;
   this.OV48URLProfile = "" ;
   this.AV49DontReciveInformation = false ;
   this.ZV49DontReciveInformation = false ;
   this.OV49DontReciveInformation = false ;
   this.AV50CanotChangePassword = false ;
   this.ZV50CanotChangePassword = false ;
   this.OV50CanotChangePassword = false ;
   this.AV51MustChangePassword = false ;
   this.ZV51MustChangePassword = false ;
   this.OV51MustChangePassword = false ;
   this.AV52PasswordNeverExpires = false ;
   this.ZV52PasswordNeverExpires = false ;
   this.OV52PasswordNeverExpires = false ;
   this.AV53IsBlocked = false ;
   this.ZV53IsBlocked = false ;
   this.OV53IsBlocked = false ;
   this.AV54SecurityPolicyId = 0 ;
   this.ZV54SecurityPolicyId = 0 ;
   this.OV54SecurityPolicyId = 0 ;
   this.AV34UserId = "" ;
   this.AV35UserNameSpace = "" ;
   this.AV36Name = "" ;
   this.AV37Email = "" ;
   this.AV38FirstName = "" ;
   this.AV39LastName = "" ;
   this.AV40Password = "" ;
   this.AV41PasswordConf = "" ;
   this.AV55URLImage = "" ;
   this.AV42Birthday = gx.date.nullDate() ;
   this.AV43Gender = "" ;
   this.AV44IsActive = false ;
   this.AV45ActivationDate = gx.date.nullDate() ;
   this.AV46IsEnabledInRepository = false ;
   this.AV47ExternalId = "" ;
   this.AV48URLProfile = "" ;
   this.AV49DontReciveInformation = false ;
   this.AV50CanotChangePassword = false ;
   this.AV51MustChangePassword = false ;
   this.AV52PasswordNeverExpires = false ;
   this.AV53IsBlocked = false ;
   this.AV54SecurityPolicyId = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e142u2_client": ["ENTER", true] ,"e152u2_client": ["'E_ENABLE'", true] ,"e202u2_client": ["CANCEL", true] ,"e172u1_client": ["'E_CANCEL'", false] ,"e182u1_client": ["'E_UPDATE'", false] ,"e192u1_client": ["'E_DELETE'", false] ,"e112u1_client": ["LINESEPARATORTITLE_LINESEPARATOR.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV34UserId',fld:'vUSERID',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}],[{av:'gx.fn.getCtrlProperty("TABLE_CONTAINER_SECURITYPOLICYID","Visible")',ctrl:'TABLE_CONTAINER_SECURITYPOLICYID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("UPDATE","Tooltiptext")',ctrl:'UPDATE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("DELETE","Tooltiptext")',ctrl:'DELETE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vNAME","Enabled")',ctrl:'vNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEMAIL","Enabled")',ctrl:'vEMAIL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFIRSTNAME","Enabled")',ctrl:'vFIRSTNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLASTNAME","Enabled")',ctrl:'vLASTNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vURLIMAGE","Enabled")',ctrl:'vURLIMAGE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vURLPROFILE","Enabled")',ctrl:'vURLPROFILE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXTERNALID","Enabled")',ctrl:'vEXTERNALID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBIRTHDAY","Enabled")',ctrl:'vBIRTHDAY',prop:'Enabled'},{ctrl:'vGENDER'},{av:'gx.fn.getCtrlProperty("vISACTIVE","Enabled")',ctrl:'vISACTIVE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDONTRECIVEINFORMATION","Enabled")',ctrl:'vDONTRECIVEINFORMATION',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCANOTCHANGEPASSWORD","Enabled")',ctrl:'vCANOTCHANGEPASSWORD',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMUSTCHANGEPASSWORD","Enabled")',ctrl:'vMUSTCHANGEPASSWORD',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vISBLOCKED","Enabled")',ctrl:'vISBLOCKED',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPASSWORDNEVEREXPIRES","Enabled")',ctrl:'vPASSWORDNEVEREXPIRES',prop:'Enabled'},{ctrl:'vSECURITYPOLICYID'},{av:'AV36Name',fld:'vNAME',pic:''},{av:'AV37Email',fld:'vEMAIL',pic:''},{av:'AV38FirstName',fld:'vFIRSTNAME',pic:''},{av:'AV39LastName',fld:'vLASTNAME',pic:''},{av:'AV55URLImage',fld:'vURLIMAGE',pic:''},{av:'AV48URLProfile',fld:'vURLPROFILE',pic:''},{av:'AV47ExternalId',fld:'vEXTERNALID',pic:''},{av:'AV42Birthday',fld:'vBIRTHDAY',pic:''},{av:'AV43Gender',fld:'vGENDER',pic:''},{av:'AV54SecurityPolicyId',fld:'vSECURITYPOLICYID',pic:'ZZZZZZZZ9'},{av:'gx.fn.getCtrlProperty("vISENABLEDINREPOSITORY","Visible")',ctrl:'vISENABLEDINREPOSITORY',prop:'Visible'},{ctrl:'ENABLE',prop:'Visible'},{ctrl:'ENABLE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TITLE","Caption")',ctrl:'TITLE',prop:'Caption'},{ctrl:'ROLESCOMPONENT',prop:'Visible'},{av:'AV34UserId',fld:'vUSERID',pic:''},{av:'AV45ActivationDate',fld:'vACTIVATIONDATE',pic:'99/99/9999 99:99'},{ctrl:'ENABLE',prop:'Caption'},{ctrl:'ROLESCOMPONENT'},{av:'gx.fn.getCtrlProperty("vURLPROFILE","Visible")',ctrl:'vURLPROFILE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPASSWORD","Visible")',ctrl:'vPASSWORD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPASSWORDCONF","Visible")',ctrl:'vPASSWORDCONF',prop:'Visible'},{av:'AV35UserNameSpace',fld:'vUSERNAMESPACE',pic:''},{av:'gx.fn.getCtrlProperty("vISACTIVE","Visible")',ctrl:'vISACTIVE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vACTIVATIONDATE","Visible")',ctrl:'vACTIVATIONDATE',prop:'Visible'},{ctrl:'CONFIRM',prop:'Caption'},{ctrl:'CONFIRM',prop:'Visible'},{ctrl:'CONFIRM',prop:'Enabled'},{ctrl:'CANCEL',prop:'Visible'},{ctrl:'CANCEL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("UPDATE","Visible")',ctrl:'UPDATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("UPDATE","Enabled")',ctrl:'UPDATE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("DELETE","Visible")',ctrl:'DELETE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETE","Enabled")',ctrl:'DELETE',prop:'Enabled'},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}],[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Visible")',ctrl:'LINESEPARATORCONTENT_LINESEPARATOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Class")',ctrl:'LINESEPARATORCONTENT_LINESEPARATOR',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_LINESEPARATOR","Class")',ctrl:'LINESEPARATORHEADER_LINESEPARATOR',prop:'Class'},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]];
   this.EvtParms["ENTER"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV34UserId',fld:'vUSERID',pic:''},{av:'AV40Password',fld:'vPASSWORD',pic:''},{av:'AV41PasswordConf',fld:'vPASSWORDCONF',pic:''},{av:'AV36Name',fld:'vNAME',pic:''},{av:'AV37Email',fld:'vEMAIL',pic:''},{av:'AV38FirstName',fld:'vFIRSTNAME',pic:''},{av:'AV39LastName',fld:'vLASTNAME',pic:''},{av:'AV47ExternalId',fld:'vEXTERNALID',pic:''},{av:'AV42Birthday',fld:'vBIRTHDAY',pic:''},{ctrl:'vGENDER'},{av:'AV43Gender',fld:'vGENDER',pic:''},{av:'AV55URLImage',fld:'vURLIMAGE',pic:''},{av:'AV48URLProfile',fld:'vURLPROFILE',pic:''},{ctrl:'vSECURITYPOLICYID'},{av:'AV54SecurityPolicyId',fld:'vSECURITYPOLICYID',pic:'ZZZZZZZZ9'},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}],[{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]];
   this.EvtParms["'E_ENABLE'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV34UserId',fld:'vUSERID',pic:''},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}],[{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]];
   this.EvtParms["'E_CANCEL'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}],[{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV34UserId',fld:'vUSERID',pic:''},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}],[{av:'AV34UserId',fld:'vUSERID',pic:''},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV34UserId',fld:'vUSERID',pic:''},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}],[{av:'AV34UserId',fld:'vUSERID',pic:''},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]];
   this.EvtParms["LINESEPARATORTITLE_LINESEPARATOR.CLICK"] = [[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Visible")',ctrl:'LINESEPARATORCONTENT_LINESEPARATOR',prop:'Visible'},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}],[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Visible")',ctrl:'LINESEPARATORCONTENT_LINESEPARATOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Class")',ctrl:'LINESEPARATORCONTENT_LINESEPARATOR',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_LINESEPARATOR","Class")',ctrl:'LINESEPARATORHEADER_LINESEPARATOR',prop:'Class'},{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]];
   this.EvtParms["VALIDV_BIRTHDAY"] = [[{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}],[{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]];
   this.EvtParms["VALIDV_GENDER"] = [[{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}],[{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]];
   this.EvtParms["VALIDV_ACTIVATIONDATE"] = [[{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}],[{av:'AV44IsActive',fld:'vISACTIVE',pic:''},{av:'AV46IsEnabledInRepository',fld:'vISENABLEDINREPOSITORY',pic:''},{av:'AV49DontReciveInformation',fld:'vDONTRECIVEINFORMATION',pic:''},{av:'AV50CanotChangePassword',fld:'vCANOTCHANGEPASSWORD',pic:''},{av:'AV51MustChangePassword',fld:'vMUSTCHANGEPASSWORD',pic:''},{av:'AV52PasswordNeverExpires',fld:'vPASSWORDNEVEREXPIRES',pic:''},{av:'AV53IsBlocked',fld:'vISBLOCKED',pic:''}]];
   this.EnterCtrl = ["CONFIRM"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.Initialize( );
   this.setComponent({id: "ROLESCOMPONENT" ,GXClass: null , Prefix: "W0195" , lvl: 1 });
});
gx.wi( function() { gx.createParentObj(k2bfsg.entryuser);});
