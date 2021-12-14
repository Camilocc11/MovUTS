gx.evt.autoSkip = false;
gx.define('k2bfsg.wcauthenticationtypeentrygeneral', true, function (CmpContext) {
   this.ServerClass =  "k2bfsg.wcauthenticationtypeentrygeneral" ;
   this.PackageName =  "com.movuts" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV54TypeId=gx.fn.getControlValue("vTYPEID") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Validv_Functionid=function()
   {
      return this.validCliEvt("Validv_Functionid", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vFUNCTIONID");
         this.AnyError  = 0;
         if ( ! ( ( this.AV22FunctionId == "AuthenticationAndRoles" ) || ( this.AV22FunctionId == "OnlyAuthentication" ) ) )
         {
            try {
               gxballoon.setError("Campo Function Id fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV28IsEnable',fld:'vISENABLE',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Validv_Wsversion=function()
   {
      return this.validCliEvt("Validv_Wsversion", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vWSVERSION");
         this.AnyError  = 0;
         if ( ! ( ( this.AV45WSVersion == "GAM10" ) || ( this.AV45WSVersion == "GAM20" ) ) )
         {
            try {
               gxballoon.setError("Campo WSVersion fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV28IsEnable',fld:'vISENABLE',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Validv_Cusversion=function()
   {
      return this.validCliEvt("Validv_Cusversion", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vCUSVERSION");
         this.AnyError  = 0;
         if ( ! ( ( this.AV20CusVersion == "GAM10" ) || ( this.AV20CusVersion == "GAM20" ) ) )
         {
            try {
               gxballoon.setError("Campo Cus Version fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV28IsEnable',fld:'vISENABLE',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.s182_client=function()
   {
      gx.fn.setCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLIMPERSONATE","Visible", true );
      gx.fn.setCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLFACEBOOK","Visible", false );
      gx.fn.setCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLCOMMONADDITIONAL","Visible", false );
      gx.fn.setCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLSERVERHOST","Visible", false );
      gx.fn.setCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLTWITTER","Visible", false );
      gx.fn.setCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLWEBSERVICE","Visible", false );
      gx.fn.setCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLEXTERNAL","Visible", false );
      if ( ( this.AV54TypeId == "Facebook" ) || ( this.AV54TypeId == "Google" ) || ( this.AV54TypeId == "Twitter" ) )
      {
         this.AV22FunctionId =  "OnlyAuthentication"  ;
         gx.fn.setCtrlProperty("vFUNCTIONID","Enabled", false );
      }
      else
      {
         gx.fn.setCtrlProperty("vFUNCTIONID","Enabled", true );
      }
      if ( this.AV54TypeId == "GAMLocal" )
      {
         gx.fn.setCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLIMPERSONATE","Visible", false );
      }
      else if ( ( this.AV54TypeId == "Facebook" ) || ( this.AV54TypeId == "Google" ) || ( this.AV54TypeId == "GAMRemote" ) )
      {
         gx.fn.setCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLFACEBOOK","Visible", true );
         gx.fn.setCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLCOMMONADDITIONAL","Visible", true );
         if ( this.AV54TypeId == "GAMRemote" )
         {
            gx.fn.setCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLSERVERHOST","Visible", true );
         }
      }
      else if ( this.AV54TypeId == "Twitter" )
      {
         this.AV22FunctionId =  "OnlyAuthentication"  ;
         gx.fn.setCtrlProperty("vFUNCTIONID","Enabled", false );
         gx.fn.setCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLTWITTER","Visible", true );
      }
      else if ( this.AV54TypeId == "ExternalWebService" )
      {
         gx.fn.setCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLWEBSERVICE","Visible", true );
      }
      else if ( this.AV54TypeId == "Custom" )
      {
         gx.fn.setCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLEXTERNAL","Visible", true );
      }
   };
   this.s122_client=function()
   {
   };
   this.s132_client=function()
   {
   };
   this.e172n1_client=function()
   {
      this.clearMessages();
      this.s172_client();
      this.refreshOutputs([{av:'AV28IsEnable',fld:'vISENABLE',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s172_client=function()
   {
      if ( this.Gx_mode != "DSP" )
      {
         this.call("com.movuts.k2bfsg.wwauthtype", []);
      }
   };
   this.e132n2_client=function()
   {
      return this.executeServerEvent("'E_GENERATEKEY'", false, null, false, false);
   };
   this.e142n2_client=function()
   {
      return this.executeServerEvent("'E_GENERATE'", false, null, false, false);
   };
   this.e152n2_client=function()
   {
      return this.executeServerEvent("'E_CONFIRM'", false, null, false, false);
   };
   this.e182n2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e192n2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,244,246,247,248];
   this.GXLastCtrlId =248;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 249, 21, "K2BControlBeautify", this.CmpContext + "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[12]={ id: 12, fld:"RESPONSIVETABLE_MAINATTRIBUTES_TBLDATA",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"ATTRIBUTESCONTAINERTABLE_TBLDATA",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"TABLE_CONTAINER_NAME",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id:21 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV30Name",gxold:"OV30Name",gxvar:"AV30Name",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV30Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV30Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV30Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV30Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"TABLE_CONTAINER_FUNCTIONID",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id:26 ,lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Functionid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFUNCTIONID",gxz:"ZV22FunctionId",gxold:"OV22FunctionId",gxvar:"AV22FunctionId",ucs:[],op:[26],ip:[26],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV22FunctionId=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV22FunctionId=Value},v2c:function(){gx.fn.setComboBoxValue("vFUNCTIONID",gx.O.AV22FunctionId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV22FunctionId=this.val()},val:function(){return gx.fn.getControlValue("vFUNCTIONID")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"TABLE_CONTAINER_DSC",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id:32 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",gxz:"ZV21Dsc",gxold:"OV21Dsc",gxvar:"AV21Dsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV21Dsc=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV21Dsc=Value},v2c:function(){gx.fn.setControlValue("vDSC",gx.O.AV21Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV21Dsc=this.val()},val:function(){return gx.fn.getControlValue("vDSC")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"TABLE_CONTAINER_ISENABLE",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id:37 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISENABLE",gxz:"ZV28IsEnable",gxold:"OV28IsEnable",gxvar:"AV28IsEnable",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV28IsEnable=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV28IsEnable=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISENABLE",gx.O.AV28IsEnable,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV28IsEnable=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISENABLE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"TABLE_CONTAINER_SMALLIMAGENAME",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id:43 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSMALLIMAGENAME",gxz:"ZV32SmallImageName",gxold:"OV32SmallImageName",gxvar:"AV32SmallImageName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV32SmallImageName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV32SmallImageName=Value},v2c:function(){gx.fn.setControlValue("vSMALLIMAGENAME",gx.O.AV32SmallImageName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV32SmallImageName=this.val()},val:function(){return gx.fn.getControlValue("vSMALLIMAGENAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"TABLE_CONTAINER_BIGIMAGENAME",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBIGIMAGENAME",gxz:"ZV10BigImageName",gxold:"OV10BigImageName",gxvar:"AV10BigImageName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV10BigImageName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV10BigImageName=Value},v2c:function(){gx.fn.setControlValue("vBIGIMAGENAME",gx.O.AV10BigImageName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV10BigImageName=this.val()},val:function(){return gx.fn.getControlValue("vBIGIMAGENAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"RESPONSIVETABLE_MAINATTRIBUTES_TBLIMPERSONATE",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"ATTRIBUTESCONTAINERTABLE_TBLIMPERSONATE",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"TABLE_CONTAINER_IMPERSONATE",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id:60 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vIMPERSONATE",gxz:"ZV27Impersonate",gxold:"OV27Impersonate",gxvar:"AV27Impersonate",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV27Impersonate=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV27Impersonate=Value},v2c:function(){gx.fn.setControlValue("vIMPERSONATE",gx.O.AV27Impersonate,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV27Impersonate=this.val()},val:function(){return gx.fn.getControlValue("vIMPERSONATE")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"RESPONSIVETABLE_MAINATTRIBUTES_TBLFACEBOOK",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id: 66, fld:"ATTRIBUTESCONTAINERTABLE_TBLFACEBOOK",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"TABLE_CONTAINER_CLIENTID",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLIENTID",gxz:"ZV12ClientId",gxold:"OV12ClientId",gxvar:"AV12ClientId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12ClientId=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12ClientId=Value},v2c:function(){gx.fn.setControlValue("vCLIENTID",gx.O.AV12ClientId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV12ClientId=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTID")},nac:gx.falseFn};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"TABLE_CONTAINER_CLIENTSECRET",grid:0};
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id:77 ,lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLIENTSECRET",gxz:"ZV13ClientSecret",gxold:"OV13ClientSecret",gxvar:"AV13ClientSecret",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13ClientSecret=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV13ClientSecret=Value},v2c:function(){gx.fn.setControlValue("vCLIENTSECRET",gx.O.AV13ClientSecret,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV13ClientSecret=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTSECRET")},nac:gx.falseFn};
   this.declareDomainHdlr( 77 , function() {
   });
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"TABLE_CONTAINER_SITEURL",grid:0};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id:82 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSITEURL",gxz:"ZV31SiteURL",gxold:"OV31SiteURL",gxvar:"AV31SiteURL",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV31SiteURL=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV31SiteURL=Value},v2c:function(){gx.fn.setControlValue("vSITEURL",gx.O.AV31SiteURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV31SiteURL=this.val()},val:function(){return gx.fn.getControlValue("vSITEURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 82 , function() {
   });
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"RESPONSIVETABLE_MAINATTRIBUTES_TBLTWITTER",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id: 88, fld:"ATTRIBUTESCONTAINERTABLE_TBLTWITTER",grid:0};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"TABLE_CONTAINER_CONSUMERKEY",grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id: 93, fld:"",grid:0};
   GXValidFnc[94]={ id:94 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONSUMERKEY",gxz:"ZV14ConsumerKey",gxold:"OV14ConsumerKey",gxvar:"AV14ConsumerKey",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV14ConsumerKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV14ConsumerKey=Value},v2c:function(){gx.fn.setControlValue("vCONSUMERKEY",gx.O.AV14ConsumerKey,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV14ConsumerKey=this.val()},val:function(){return gx.fn.getControlValue("vCONSUMERKEY")},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id: 96, fld:"TABLE_CONTAINER_CONSUMERSECRET",grid:0};
   GXValidFnc[97]={ id: 97, fld:"",grid:0};
   GXValidFnc[98]={ id: 98, fld:"",grid:0};
   GXValidFnc[99]={ id:99 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONSUMERSECRET",gxz:"ZV15ConsumerSecret",gxold:"OV15ConsumerSecret",gxvar:"AV15ConsumerSecret",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV15ConsumerSecret=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV15ConsumerSecret=Value},v2c:function(){gx.fn.setControlValue("vCONSUMERSECRET",gx.O.AV15ConsumerSecret,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV15ConsumerSecret=this.val()},val:function(){return gx.fn.getControlValue("vCONSUMERSECRET")},nac:gx.falseFn};
   this.declareDomainHdlr( 99 , function() {
   });
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   GXValidFnc[101]={ id: 101, fld:"TABLE_CONTAINER_CALLBACKURL",grid:0};
   GXValidFnc[102]={ id: 102, fld:"",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id:104 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCALLBACKURL",gxz:"ZV11CallbackURL",gxold:"OV11CallbackURL",gxvar:"AV11CallbackURL",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV11CallbackURL=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV11CallbackURL=Value},v2c:function(){gx.fn.setControlValue("vCALLBACKURL",gx.O.AV11CallbackURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV11CallbackURL=this.val()},val:function(){return gx.fn.getControlValue("vCALLBACKURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 104 , function() {
   });
   GXValidFnc[105]={ id: 105, fld:"",grid:0};
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"RESPONSIVETABLE_MAINATTRIBUTES_TBLCOMMONADDITIONAL",grid:0};
   GXValidFnc[108]={ id: 108, fld:"",grid:0};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id: 110, fld:"ATTRIBUTESCONTAINERTABLE_TBLCOMMONADDITIONAL",grid:0};
   GXValidFnc[111]={ id: 111, fld:"",grid:0};
   GXValidFnc[112]={ id: 112, fld:"",grid:0};
   GXValidFnc[113]={ id: 113, fld:"TABLE_CONTAINER_ADDITIONALSCOPE",grid:0};
   GXValidFnc[114]={ id: 114, fld:"",grid:0};
   GXValidFnc[115]={ id: 115, fld:"",grid:0};
   GXValidFnc[116]={ id:116 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vADDITIONALSCOPE",gxz:"ZV9AdditionalScope",gxold:"OV9AdditionalScope",gxvar:"AV9AdditionalScope",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV9AdditionalScope=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV9AdditionalScope=Value},v2c:function(){gx.fn.setControlValue("vADDITIONALSCOPE",gx.O.AV9AdditionalScope,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV9AdditionalScope=this.val()},val:function(){return gx.fn.getControlValue("vADDITIONALSCOPE")},nac:gx.falseFn};
   this.declareDomainHdlr( 116 , function() {
   });
   GXValidFnc[117]={ id: 117, fld:"",grid:0};
   GXValidFnc[118]={ id: 118, fld:"",grid:0};
   GXValidFnc[119]={ id: 119, fld:"RESPONSIVETABLE_MAINATTRIBUTES_TBLSERVERHOST",grid:0};
   GXValidFnc[120]={ id: 120, fld:"",grid:0};
   GXValidFnc[121]={ id: 121, fld:"",grid:0};
   GXValidFnc[122]={ id: 122, fld:"ATTRIBUTESCONTAINERTABLE_TBLSERVERHOST",grid:0};
   GXValidFnc[123]={ id: 123, fld:"",grid:0};
   GXValidFnc[124]={ id: 124, fld:"",grid:0};
   GXValidFnc[125]={ id: 125, fld:"TABLE_CONTAINER_GAMRSERVERURL",grid:0};
   GXValidFnc[126]={ id: 126, fld:"",grid:0};
   GXValidFnc[127]={ id: 127, fld:"",grid:0};
   GXValidFnc[128]={ id:128 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGAMRSERVERURL",gxz:"ZV25GAMRServerURL",gxold:"OV25GAMRServerURL",gxvar:"AV25GAMRServerURL",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV25GAMRServerURL=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV25GAMRServerURL=Value},v2c:function(){gx.fn.setControlValue("vGAMRSERVERURL",gx.O.AV25GAMRServerURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV25GAMRServerURL=this.val()},val:function(){return gx.fn.getControlValue("vGAMRSERVERURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 128 , function() {
   });
   GXValidFnc[129]={ id: 129, fld:"",grid:0};
   GXValidFnc[130]={ id: 130, fld:"TABLE_CONTAINER_GAMRPRIVATEENCRYPTKEY",grid:0};
   GXValidFnc[131]={ id: 131, fld:"",grid:0};
   GXValidFnc[132]={ id: 132, fld:"",grid:0};
   GXValidFnc[133]={ id:133 ,lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGAMRPRIVATEENCRYPTKEY",gxz:"ZV23GAMRPrivateEncryptKey",gxold:"OV23GAMRPrivateEncryptKey",gxvar:"AV23GAMRPrivateEncryptKey",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV23GAMRPrivateEncryptKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV23GAMRPrivateEncryptKey=Value},v2c:function(){gx.fn.setControlValue("vGAMRPRIVATEENCRYPTKEY",gx.O.AV23GAMRPrivateEncryptKey,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV23GAMRPrivateEncryptKey=this.val()},val:function(){return gx.fn.getControlValue("vGAMRPRIVATEENCRYPTKEY")},nac:gx.falseFn};
   this.declareDomainHdlr( 133 , function() {
   });
   GXValidFnc[134]={ id: 134, fld:"",grid:0};
   GXValidFnc[135]={ id: 135, fld:"TABLE_CONTAINER_GAMRREPOSITORYGUID",grid:0};
   GXValidFnc[136]={ id: 136, fld:"",grid:0};
   GXValidFnc[137]={ id: 137, fld:"",grid:0};
   GXValidFnc[138]={ id:138 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGAMRREPOSITORYGUID",gxz:"ZV24GAMRRepositoryGUID",gxold:"OV24GAMRRepositoryGUID",gxvar:"AV24GAMRRepositoryGUID",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV24GAMRRepositoryGUID=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV24GAMRRepositoryGUID=Value},v2c:function(){gx.fn.setControlValue("vGAMRREPOSITORYGUID",gx.O.AV24GAMRRepositoryGUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV24GAMRRepositoryGUID=this.val()},val:function(){return gx.fn.getControlValue("vGAMRREPOSITORYGUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 138 , function() {
   });
   GXValidFnc[139]={ id: 139, fld:"",grid:0};
   GXValidFnc[140]={ id: 140, fld:"",grid:0};
   GXValidFnc[141]={ id: 141, fld:"RESPONSIVETABLE_MAINATTRIBUTES_TBLWEBSERVICE",grid:0};
   GXValidFnc[142]={ id: 142, fld:"",grid:0};
   GXValidFnc[143]={ id: 143, fld:"",grid:0};
   GXValidFnc[144]={ id: 144, fld:"ATTRIBUTESCONTAINERTABLE_TBLWEBSERVICE",grid:0};
   GXValidFnc[145]={ id: 145, fld:"",grid:0};
   GXValidFnc[146]={ id: 146, fld:"",grid:0};
   GXValidFnc[147]={ id: 147, fld:"TABLE_CONTAINER_WSVERSION",grid:0};
   GXValidFnc[148]={ id: 148, fld:"",grid:0};
   GXValidFnc[149]={ id: 149, fld:"",grid:0};
   GXValidFnc[150]={ id:150 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Wsversion,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vWSVERSION",gxz:"ZV45WSVersion",gxold:"OV45WSVersion",gxvar:"AV45WSVersion",ucs:[],op:[150],ip:[150],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV45WSVersion=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV45WSVersion=Value},v2c:function(){gx.fn.setComboBoxValue("vWSVERSION",gx.O.AV45WSVersion);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV45WSVersion=this.val()},val:function(){return gx.fn.getControlValue("vWSVERSION")},nac:gx.falseFn};
   this.declareDomainHdlr( 150 , function() {
   });
   GXValidFnc[151]={ id: 151, fld:"",grid:0};
   GXValidFnc[152]={ id: 152, fld:"TABLE_CONTAINER_WSPRIVATEENCRYPTKEY",grid:0};
   GXValidFnc[153]={ id: 153, fld:"TEXTBLOCK_VAR_WSPRIVATEENCRYPTKEY", format:0,grid:0};
   GXValidFnc[154]={ id: 154, fld:"TABLE_CONTAINER_WSPRIVATEENCRYPTKEYFIELDCONTAINER",grid:0};
   GXValidFnc[155]={ id: 155, fld:"",grid:0};
   GXValidFnc[156]={ id:156 ,lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vWSPRIVATEENCRYPTKEY",gxz:"ZV39WSPrivateEncryptKey",gxold:"OV39WSPrivateEncryptKey",gxvar:"AV39WSPrivateEncryptKey",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39WSPrivateEncryptKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV39WSPrivateEncryptKey=Value},v2c:function(){gx.fn.setControlValue("vWSPRIVATEENCRYPTKEY",gx.O.AV39WSPrivateEncryptKey,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV39WSPrivateEncryptKey=this.val()},val:function(){return gx.fn.getControlValue("vWSPRIVATEENCRYPTKEY")},nac:gx.falseFn};
   this.declareDomainHdlr( 156 , function() {
   });
   GXValidFnc[157]={ id: 157, fld:"GENERATEKEY",grid:0,evt:"e132n2_client"};
   GXValidFnc[158]={ id: 158, fld:"",grid:0};
   GXValidFnc[159]={ id: 159, fld:"",grid:0};
   GXValidFnc[160]={ id: 160, fld:"TABLE_CONTAINER_WSSERVERNAME",grid:0};
   GXValidFnc[161]={ id: 161, fld:"",grid:0};
   GXValidFnc[162]={ id: 162, fld:"",grid:0};
   GXValidFnc[163]={ id:163 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vWSSERVERNAME",gxz:"ZV41WSServerName",gxold:"OV41WSServerName",gxvar:"AV41WSServerName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV41WSServerName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV41WSServerName=Value},v2c:function(){gx.fn.setControlValue("vWSSERVERNAME",gx.O.AV41WSServerName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV41WSServerName=this.val()},val:function(){return gx.fn.getControlValue("vWSSERVERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 163 , function() {
   });
   GXValidFnc[164]={ id: 164, fld:"",grid:0};
   GXValidFnc[165]={ id: 165, fld:"TABLE_CONTAINER_WSSERVERPORT",grid:0};
   GXValidFnc[166]={ id: 166, fld:"",grid:0};
   GXValidFnc[167]={ id: 167, fld:"",grid:0};
   GXValidFnc[168]={ id:168 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vWSSERVERPORT",gxz:"ZV42WSServerPort",gxold:"OV42WSServerPort",gxvar:"AV42WSServerPort",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV42WSServerPort=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV42WSServerPort=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vWSSERVERPORT",gx.O.AV42WSServerPort,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV42WSServerPort=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vWSSERVERPORT",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 168 , function() {
   });
   GXValidFnc[169]={ id: 169, fld:"",grid:0};
   GXValidFnc[170]={ id: 170, fld:"TABLE_CONTAINER_WSSERVERBASEURL",grid:0};
   GXValidFnc[171]={ id: 171, fld:"",grid:0};
   GXValidFnc[172]={ id: 172, fld:"",grid:0};
   GXValidFnc[173]={ id:173 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vWSSERVERBASEURL",gxz:"ZV40WSServerBaseURL",gxold:"OV40WSServerBaseURL",gxvar:"AV40WSServerBaseURL",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV40WSServerBaseURL=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV40WSServerBaseURL=Value},v2c:function(){gx.fn.setControlValue("vWSSERVERBASEURL",gx.O.AV40WSServerBaseURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV40WSServerBaseURL=this.val()},val:function(){return gx.fn.getControlValue("vWSSERVERBASEURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 173 , function() {
   });
   GXValidFnc[174]={ id: 174, fld:"",grid:0};
   GXValidFnc[175]={ id: 175, fld:"",grid:0};
   GXValidFnc[176]={ id: 176, fld:"TABLE_CONTAINER_WSSERVERSECUREPROTOCOL",grid:0};
   GXValidFnc[177]={ id: 177, fld:"",grid:0};
   GXValidFnc[178]={ id: 178, fld:"",grid:0};
   GXValidFnc[179]={ id:179 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vWSSERVERSECUREPROTOCOL",gxz:"ZV43WSServerSecureProtocol",gxold:"OV43WSServerSecureProtocol",gxvar:"AV43WSServerSecureProtocol",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV43WSServerSecureProtocol=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV43WSServerSecureProtocol=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vWSSERVERSECUREPROTOCOL",gx.O.AV43WSServerSecureProtocol);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV43WSServerSecureProtocol=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vWSSERVERSECUREPROTOCOL",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 179 , function() {
   });
   GXValidFnc[180]={ id: 180, fld:"",grid:0};
   GXValidFnc[181]={ id: 181, fld:"TABLE_CONTAINER_WSTIMEOUT",grid:0};
   GXValidFnc[182]={ id: 182, fld:"",grid:0};
   GXValidFnc[183]={ id: 183, fld:"",grid:0};
   GXValidFnc[184]={ id:184 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vWSTIMEOUT",gxz:"ZV44WSTimeout",gxold:"OV44WSTimeout",gxvar:"AV44WSTimeout",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV44WSTimeout=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV44WSTimeout=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vWSTIMEOUT",gx.O.AV44WSTimeout,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV44WSTimeout=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vWSTIMEOUT",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 184 , function() {
   });
   GXValidFnc[185]={ id: 185, fld:"",grid:0};
   GXValidFnc[186]={ id: 186, fld:"",grid:0};
   GXValidFnc[187]={ id: 187, fld:"TABLE_CONTAINER_WSPACKAGE",grid:0};
   GXValidFnc[188]={ id: 188, fld:"",grid:0};
   GXValidFnc[189]={ id: 189, fld:"",grid:0};
   GXValidFnc[190]={ id:190 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vWSPACKAGE",gxz:"ZV38WSPackage",gxold:"OV38WSPackage",gxvar:"AV38WSPackage",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV38WSPackage=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV38WSPackage=Value},v2c:function(){gx.fn.setControlValue("vWSPACKAGE",gx.O.AV38WSPackage,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV38WSPackage=this.val()},val:function(){return gx.fn.getControlValue("vWSPACKAGE")},nac:gx.falseFn};
   this.declareDomainHdlr( 190 , function() {
   });
   GXValidFnc[191]={ id: 191, fld:"",grid:0};
   GXValidFnc[192]={ id: 192, fld:"TABLE_CONTAINER_WSNAME",grid:0};
   GXValidFnc[193]={ id: 193, fld:"",grid:0};
   GXValidFnc[194]={ id: 194, fld:"",grid:0};
   GXValidFnc[195]={ id:195 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vWSNAME",gxz:"ZV37WSName",gxold:"OV37WSName",gxvar:"AV37WSName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV37WSName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV37WSName=Value},v2c:function(){gx.fn.setControlValue("vWSNAME",gx.O.AV37WSName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV37WSName=this.val()},val:function(){return gx.fn.getControlValue("vWSNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 195 , function() {
   });
   GXValidFnc[196]={ id: 196, fld:"",grid:0};
   GXValidFnc[197]={ id: 197, fld:"TABLE_CONTAINER_WSEXTENSION",grid:0};
   GXValidFnc[198]={ id: 198, fld:"",grid:0};
   GXValidFnc[199]={ id: 199, fld:"",grid:0};
   GXValidFnc[200]={ id:200 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vWSEXTENSION",gxz:"ZV36WSExtension",gxold:"OV36WSExtension",gxvar:"AV36WSExtension",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV36WSExtension=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV36WSExtension=Value},v2c:function(){gx.fn.setControlValue("vWSEXTENSION",gx.O.AV36WSExtension,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV36WSExtension=this.val()},val:function(){return gx.fn.getControlValue("vWSEXTENSION")},nac:gx.falseFn};
   this.declareDomainHdlr( 200 , function() {
   });
   GXValidFnc[201]={ id: 201, fld:"",grid:0};
   GXValidFnc[202]={ id: 202, fld:"",grid:0};
   GXValidFnc[203]={ id: 203, fld:"RESPONSIVETABLE_MAINATTRIBUTES_TBLEXTERNAL",grid:0};
   GXValidFnc[204]={ id: 204, fld:"",grid:0};
   GXValidFnc[205]={ id: 205, fld:"",grid:0};
   GXValidFnc[206]={ id: 206, fld:"ATTRIBUTESCONTAINERTABLE_TBLEXTERNAL",grid:0};
   GXValidFnc[207]={ id: 207, fld:"",grid:0};
   GXValidFnc[208]={ id: 208, fld:"",grid:0};
   GXValidFnc[209]={ id: 209, fld:"TABLE_CONTAINER_CUSVERSION",grid:0};
   GXValidFnc[210]={ id: 210, fld:"",grid:0};
   GXValidFnc[211]={ id: 211, fld:"",grid:0};
   GXValidFnc[212]={ id:212 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cusversion,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCUSVERSION",gxz:"ZV20CusVersion",gxold:"OV20CusVersion",gxvar:"AV20CusVersion",ucs:[],op:[212],ip:[212],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV20CusVersion=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV20CusVersion=Value},v2c:function(){gx.fn.setComboBoxValue("vCUSVERSION",gx.O.AV20CusVersion);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV20CusVersion=this.val()},val:function(){return gx.fn.getControlValue("vCUSVERSION")},nac:gx.falseFn};
   this.declareDomainHdlr( 212 , function() {
   });
   GXValidFnc[213]={ id: 213, fld:"",grid:0};
   GXValidFnc[214]={ id: 214, fld:"TABLE_CONTAINER_CUSPRIVATEENCRYPTKEY",grid:0};
   GXValidFnc[215]={ id: 215, fld:"TEXTBLOCK_VAR_CUSPRIVATEENCRYPTKEY", format:0,grid:0};
   GXValidFnc[216]={ id: 216, fld:"TABLE_CONTAINER_CUSPRIVATEENCRYPTKEYFIELDCONTAINER",grid:0};
   GXValidFnc[217]={ id: 217, fld:"",grid:0};
   GXValidFnc[218]={ id:218 ,lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCUSPRIVATEENCRYPTKEY",gxz:"ZV19CusPrivateEncryptKey",gxold:"OV19CusPrivateEncryptKey",gxvar:"AV19CusPrivateEncryptKey",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV19CusPrivateEncryptKey=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV19CusPrivateEncryptKey=Value},v2c:function(){gx.fn.setControlValue("vCUSPRIVATEENCRYPTKEY",gx.O.AV19CusPrivateEncryptKey,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV19CusPrivateEncryptKey=this.val()},val:function(){return gx.fn.getControlValue("vCUSPRIVATEENCRYPTKEY")},nac:gx.falseFn};
   this.declareDomainHdlr( 218 , function() {
   });
   GXValidFnc[219]={ id: 219, fld:"GENERATE",grid:0,evt:"e142n2_client"};
   GXValidFnc[220]={ id: 220, fld:"",grid:0};
   GXValidFnc[221]={ id: 221, fld:"",grid:0};
   GXValidFnc[222]={ id: 222, fld:"TABLE_CONTAINER_CUSFILENAME",grid:0};
   GXValidFnc[223]={ id: 223, fld:"",grid:0};
   GXValidFnc[224]={ id: 224, fld:"",grid:0};
   GXValidFnc[225]={ id:225 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCUSFILENAME",gxz:"ZV17CusFileName",gxold:"OV17CusFileName",gxvar:"AV17CusFileName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV17CusFileName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17CusFileName=Value},v2c:function(){gx.fn.setControlValue("vCUSFILENAME",gx.O.AV17CusFileName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV17CusFileName=this.val()},val:function(){return gx.fn.getControlValue("vCUSFILENAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 225 , function() {
   });
   GXValidFnc[226]={ id: 226, fld:"",grid:0};
   GXValidFnc[227]={ id: 227, fld:"TABLE_CONTAINER_CUSPACKAGE",grid:0};
   GXValidFnc[228]={ id: 228, fld:"",grid:0};
   GXValidFnc[229]={ id: 229, fld:"",grid:0};
   GXValidFnc[230]={ id:230 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCUSPACKAGE",gxz:"ZV18CusPackage",gxold:"OV18CusPackage",gxvar:"AV18CusPackage",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV18CusPackage=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV18CusPackage=Value},v2c:function(){gx.fn.setControlValue("vCUSPACKAGE",gx.O.AV18CusPackage,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV18CusPackage=this.val()},val:function(){return gx.fn.getControlValue("vCUSPACKAGE")},nac:gx.falseFn};
   this.declareDomainHdlr( 230 , function() {
   });
   GXValidFnc[231]={ id: 231, fld:"",grid:0};
   GXValidFnc[232]={ id: 232, fld:"TABLE_CONTAINER_CUSCLASSNAME",grid:0};
   GXValidFnc[233]={ id: 233, fld:"",grid:0};
   GXValidFnc[234]={ id: 234, fld:"",grid:0};
   GXValidFnc[235]={ id:235 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCUSCLASSNAME",gxz:"ZV16CusClassName",gxold:"OV16CusClassName",gxvar:"AV16CusClassName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV16CusClassName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV16CusClassName=Value},v2c:function(){gx.fn.setControlValue("vCUSCLASSNAME",gx.O.AV16CusClassName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV16CusClassName=this.val()},val:function(){return gx.fn.getControlValue("vCUSCLASSNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 235 , function() {
   });
   GXValidFnc[236]={ id: 236, fld:"",grid:0};
   GXValidFnc[237]={ id: 237, fld:"",grid:0};
   GXValidFnc[238]={ id: 238, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[239]={ id: 239, fld:"",grid:0};
   GXValidFnc[240]={ id: 240, fld:"",grid:0};
   GXValidFnc[241]={ id: 241, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[244]={ id: 244, fld:"CONFIRM",grid:0,evt:"e152n2_client"};
   GXValidFnc[246]={ id: 246, fld:"CANCEL",grid:0,evt:"e172n1_client"};
   GXValidFnc[247]={ id: 247, fld:"",grid:0};
   GXValidFnc[248]={ id: 248, fld:"",grid:0};
   this.AV30Name = "" ;
   this.ZV30Name = "" ;
   this.OV30Name = "" ;
   this.AV22FunctionId = "" ;
   this.ZV22FunctionId = "" ;
   this.OV22FunctionId = "" ;
   this.AV21Dsc = "" ;
   this.ZV21Dsc = "" ;
   this.OV21Dsc = "" ;
   this.AV28IsEnable = false ;
   this.ZV28IsEnable = false ;
   this.OV28IsEnable = false ;
   this.AV32SmallImageName = "" ;
   this.ZV32SmallImageName = "" ;
   this.OV32SmallImageName = "" ;
   this.AV10BigImageName = "" ;
   this.ZV10BigImageName = "" ;
   this.OV10BigImageName = "" ;
   this.AV27Impersonate = "" ;
   this.ZV27Impersonate = "" ;
   this.OV27Impersonate = "" ;
   this.AV12ClientId = "" ;
   this.ZV12ClientId = "" ;
   this.OV12ClientId = "" ;
   this.AV13ClientSecret = "" ;
   this.ZV13ClientSecret = "" ;
   this.OV13ClientSecret = "" ;
   this.AV31SiteURL = "" ;
   this.ZV31SiteURL = "" ;
   this.OV31SiteURL = "" ;
   this.AV14ConsumerKey = "" ;
   this.ZV14ConsumerKey = "" ;
   this.OV14ConsumerKey = "" ;
   this.AV15ConsumerSecret = "" ;
   this.ZV15ConsumerSecret = "" ;
   this.OV15ConsumerSecret = "" ;
   this.AV11CallbackURL = "" ;
   this.ZV11CallbackURL = "" ;
   this.OV11CallbackURL = "" ;
   this.AV9AdditionalScope = "" ;
   this.ZV9AdditionalScope = "" ;
   this.OV9AdditionalScope = "" ;
   this.AV25GAMRServerURL = "" ;
   this.ZV25GAMRServerURL = "" ;
   this.OV25GAMRServerURL = "" ;
   this.AV23GAMRPrivateEncryptKey = "" ;
   this.ZV23GAMRPrivateEncryptKey = "" ;
   this.OV23GAMRPrivateEncryptKey = "" ;
   this.AV24GAMRRepositoryGUID = "" ;
   this.ZV24GAMRRepositoryGUID = "" ;
   this.OV24GAMRRepositoryGUID = "" ;
   this.AV45WSVersion = "" ;
   this.ZV45WSVersion = "" ;
   this.OV45WSVersion = "" ;
   this.AV39WSPrivateEncryptKey = "" ;
   this.ZV39WSPrivateEncryptKey = "" ;
   this.OV39WSPrivateEncryptKey = "" ;
   this.AV41WSServerName = "" ;
   this.ZV41WSServerName = "" ;
   this.OV41WSServerName = "" ;
   this.AV42WSServerPort = 0 ;
   this.ZV42WSServerPort = 0 ;
   this.OV42WSServerPort = 0 ;
   this.AV40WSServerBaseURL = "" ;
   this.ZV40WSServerBaseURL = "" ;
   this.OV40WSServerBaseURL = "" ;
   this.AV43WSServerSecureProtocol = 0 ;
   this.ZV43WSServerSecureProtocol = 0 ;
   this.OV43WSServerSecureProtocol = 0 ;
   this.AV44WSTimeout = 0 ;
   this.ZV44WSTimeout = 0 ;
   this.OV44WSTimeout = 0 ;
   this.AV38WSPackage = "" ;
   this.ZV38WSPackage = "" ;
   this.OV38WSPackage = "" ;
   this.AV37WSName = "" ;
   this.ZV37WSName = "" ;
   this.OV37WSName = "" ;
   this.AV36WSExtension = "" ;
   this.ZV36WSExtension = "" ;
   this.OV36WSExtension = "" ;
   this.AV20CusVersion = "" ;
   this.ZV20CusVersion = "" ;
   this.OV20CusVersion = "" ;
   this.AV19CusPrivateEncryptKey = "" ;
   this.ZV19CusPrivateEncryptKey = "" ;
   this.OV19CusPrivateEncryptKey = "" ;
   this.AV17CusFileName = "" ;
   this.ZV17CusFileName = "" ;
   this.OV17CusFileName = "" ;
   this.AV18CusPackage = "" ;
   this.ZV18CusPackage = "" ;
   this.OV18CusPackage = "" ;
   this.AV16CusClassName = "" ;
   this.ZV16CusClassName = "" ;
   this.OV16CusClassName = "" ;
   this.AV30Name = "" ;
   this.AV22FunctionId = "" ;
   this.AV21Dsc = "" ;
   this.AV28IsEnable = false ;
   this.AV32SmallImageName = "" ;
   this.AV10BigImageName = "" ;
   this.AV27Impersonate = "" ;
   this.AV12ClientId = "" ;
   this.AV13ClientSecret = "" ;
   this.AV31SiteURL = "" ;
   this.AV14ConsumerKey = "" ;
   this.AV15ConsumerSecret = "" ;
   this.AV11CallbackURL = "" ;
   this.AV9AdditionalScope = "" ;
   this.AV25GAMRServerURL = "" ;
   this.AV23GAMRPrivateEncryptKey = "" ;
   this.AV24GAMRRepositoryGUID = "" ;
   this.AV45WSVersion = "" ;
   this.AV39WSPrivateEncryptKey = "" ;
   this.AV41WSServerName = "" ;
   this.AV42WSServerPort = 0 ;
   this.AV40WSServerBaseURL = "" ;
   this.AV43WSServerSecureProtocol = 0 ;
   this.AV44WSTimeout = 0 ;
   this.AV38WSPackage = "" ;
   this.AV37WSName = "" ;
   this.AV36WSExtension = "" ;
   this.AV20CusVersion = "" ;
   this.AV19CusPrivateEncryptKey = "" ;
   this.AV17CusFileName = "" ;
   this.AV18CusPackage = "" ;
   this.AV16CusClassName = "" ;
   this.AV54TypeId = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e132n2_client": ["'E_GENERATEKEY'", true] ,"e142n2_client": ["'E_GENERATE'", true] ,"e152n2_client": ["'E_CONFIRM'", true] ,"e182n2_client": ["ENTER", true] ,"e192n2_client": ["CANCEL", true] ,"e172n1_client": ["'E_CANCEL'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV28IsEnable',fld:'vISENABLE',pic:''}],[{av:'AV28IsEnable',fld:'vISENABLE',pic:''}]];
   this.EvtParms["START"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'AV54TypeId',fld:'vTYPEID',pic:''},{av:'AV30Name',fld:'vNAME',pic:''},{av:'AV28IsEnable',fld:'vISENABLE',pic:''}],[{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLDATA","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLDATA',prop:'Class'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLIMPERSONATE","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLIMPERSONATE',prop:'Class'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLFACEBOOK","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLFACEBOOK',prop:'Class'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLTWITTER","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLTWITTER',prop:'Class'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLCOMMONADDITIONAL","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLCOMMONADDITIONAL',prop:'Class'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLSERVERHOST","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLSERVERHOST',prop:'Class'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLWEBSERVICE","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLWEBSERVICE',prop:'Class'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLEXTERNAL","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLEXTERNAL',prop:'Class'},{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_TBLDATA","Class")',ctrl:'ATTRIBUTESCONTAINERTABLE_TBLDATA',prop:'Class'},{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_TBLIMPERSONATE","Class")',ctrl:'ATTRIBUTESCONTAINERTABLE_TBLIMPERSONATE',prop:'Class'},{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_TBLFACEBOOK","Class")',ctrl:'ATTRIBUTESCONTAINERTABLE_TBLFACEBOOK',prop:'Class'},{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_TBLTWITTER","Class")',ctrl:'ATTRIBUTESCONTAINERTABLE_TBLTWITTER',prop:'Class'},{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_TBLCOMMONADDITIONAL","Class")',ctrl:'ATTRIBUTESCONTAINERTABLE_TBLCOMMONADDITIONAL',prop:'Class'},{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_TBLSERVERHOST","Class")',ctrl:'ATTRIBUTESCONTAINERTABLE_TBLSERVERHOST',prop:'Class'},{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_TBLWEBSERVICE","Class")',ctrl:'ATTRIBUTESCONTAINERTABLE_TBLWEBSERVICE',prop:'Class'},{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_TBLEXTERNAL","Class")',ctrl:'ATTRIBUTESCONTAINERTABLE_TBLEXTERNAL',prop:'Class'},{av:'gx.fn.getCtrlProperty("CONTENTTABLE","Class")',ctrl:'CONTENTTABLE',prop:'Class'},{av:'AV32SmallImageName',fld:'vSMALLIMAGENAME',pic:''},{ctrl:'vFUNCTIONID'},{av:'AV22FunctionId',fld:'vFUNCTIONID',pic:''},{av:'AV30Name',fld:'vNAME',pic:''},{av:'AV21Dsc',fld:'vDSC',pic:''},{av:'AV10BigImageName',fld:'vBIGIMAGENAME',pic:''},{av:'AV27Impersonate',fld:'vIMPERSONATE',pic:''},{ctrl:'vCUSVERSION'},{av:'AV20CusVersion',fld:'vCUSVERSION',pic:''},{av:'AV19CusPrivateEncryptKey',fld:'vCUSPRIVATEENCRYPTKEY',pic:''},{av:'AV17CusFileName',fld:'vCUSFILENAME',pic:''},{av:'AV18CusPackage',fld:'vCUSPACKAGE',pic:''},{av:'AV16CusClassName',fld:'vCUSCLASSNAME',pic:''},{ctrl:'vWSVERSION'},{av:'AV45WSVersion',fld:'vWSVERSION',pic:''},{av:'AV39WSPrivateEncryptKey',fld:'vWSPRIVATEENCRYPTKEY',pic:''},{av:'AV41WSServerName',fld:'vWSSERVERNAME',pic:''},{av:'AV42WSServerPort',fld:'vWSSERVERPORT',pic:'ZZZ9'},{av:'AV40WSServerBaseURL',fld:'vWSSERVERBASEURL',pic:''},{ctrl:'vWSSERVERSECUREPROTOCOL'},{av:'AV43WSServerSecureProtocol',fld:'vWSSERVERSECUREPROTOCOL',pic:'ZZZ9'},{av:'AV44WSTimeout',fld:'vWSTIMEOUT',pic:'ZZZ9'},{av:'AV38WSPackage',fld:'vWSPACKAGE',pic:''},{av:'AV37WSName',fld:'vWSNAME',pic:''},{av:'AV36WSExtension',fld:'vWSEXTENSION',pic:''},{av:'AV14ConsumerKey',fld:'vCONSUMERKEY',pic:''},{av:'AV15ConsumerSecret',fld:'vCONSUMERSECRET',pic:''},{av:'AV11CallbackURL',fld:'vCALLBACKURL',pic:''},{av:'AV9AdditionalScope',fld:'vADDITIONALSCOPE',pic:''},{av:'AV12ClientId',fld:'vCLIENTID',pic:''},{av:'AV13ClientSecret',fld:'vCLIENTSECRET',pic:''},{av:'AV31SiteURL',fld:'vSITEURL',pic:''},{av:'AV25GAMRServerURL',fld:'vGAMRSERVERURL',pic:''},{av:'AV23GAMRPrivateEncryptKey',fld:'vGAMRPRIVATEENCRYPTKEY',pic:''},{av:'AV24GAMRRepositoryGUID',fld:'vGAMRREPOSITORYGUID',pic:''},{av:'gx.fn.getCtrlProperty("vNAME","Enabled")',ctrl:'vNAME',prop:'Enabled'},{ctrl:'CONFIRM',prop:'Visible'},{ctrl:'CANCEL',prop:'Visible'},{ctrl:'GENERATEKEY',prop:'Visible'},{ctrl:'GENERATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vISENABLE","Enabled")',ctrl:'vISENABLE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDSC","Enabled")',ctrl:'vDSC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSMALLIMAGENAME","Enabled")',ctrl:'vSMALLIMAGENAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBIGIMAGENAME","Enabled")',ctrl:'vBIGIMAGENAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPERSONATE","Enabled")',ctrl:'vIMPERSONATE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vWSPRIVATEENCRYPTKEY","Enabled")',ctrl:'vWSPRIVATEENCRYPTKEY',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vWSSERVERNAME","Enabled")',ctrl:'vWSSERVERNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vWSSERVERPORT","Enabled")',ctrl:'vWSSERVERPORT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vWSSERVERBASEURL","Enabled")',ctrl:'vWSSERVERBASEURL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vWSTIMEOUT","Enabled")',ctrl:'vWSTIMEOUT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vWSPACKAGE","Enabled")',ctrl:'vWSPACKAGE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vWSNAME","Enabled")',ctrl:'vWSNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vWSEXTENSION","Enabled")',ctrl:'vWSEXTENSION',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIENTID","Enabled")',ctrl:'vCLIENTID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLIENTSECRET","Enabled")',ctrl:'vCLIENTSECRET',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSITEURL","Enabled")',ctrl:'vSITEURL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vADDITIONALSCOPE","Enabled")',ctrl:'vADDITIONALSCOPE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONSUMERKEY","Enabled")',ctrl:'vCONSUMERKEY',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONSUMERSECRET","Enabled")',ctrl:'vCONSUMERSECRET',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCALLBACKURL","Enabled")',ctrl:'vCALLBACKURL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCUSPRIVATEENCRYPTKEY","Enabled")',ctrl:'vCUSPRIVATEENCRYPTKEY',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCUSFILENAME","Enabled")',ctrl:'vCUSFILENAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCUSPACKAGE","Enabled")',ctrl:'vCUSPACKAGE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCUSCLASSNAME","Enabled")',ctrl:'vCUSCLASSNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vGAMRSERVERURL","Enabled")',ctrl:'vGAMRSERVERURL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vGAMRPRIVATEENCRYPTKEY","Enabled")',ctrl:'vGAMRPRIVATEENCRYPTKEY',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vGAMRREPOSITORYGUID","Enabled")',ctrl:'vGAMRREPOSITORYGUID',prop:'Enabled'},{ctrl:'CONFIRM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLIMPERSONATE","Visible")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLIMPERSONATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLFACEBOOK","Visible")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLCOMMONADDITIONAL","Visible")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLCOMMONADDITIONAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLSERVERHOST","Visible")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLSERVERHOST',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLTWITTER","Visible")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLTWITTER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLWEBSERVICE","Visible")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLWEBSERVICE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLEXTERNAL","Visible")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLEXTERNAL',prop:'Visible'},{av:'AV28IsEnable',fld:'vISENABLE',pic:''}]];
   this.EvtParms["'E_GENERATEKEY'"] = [[{av:'AV28IsEnable',fld:'vISENABLE',pic:''}],[{av:'AV39WSPrivateEncryptKey',fld:'vWSPRIVATEENCRYPTKEY',pic:''},{av:'AV28IsEnable',fld:'vISENABLE',pic:''}]];
   this.EvtParms["'E_GENERATE'"] = [[{av:'AV28IsEnable',fld:'vISENABLE',pic:''}],[{av:'AV19CusPrivateEncryptKey',fld:'vCUSPRIVATEENCRYPTKEY',pic:''},{av:'AV28IsEnable',fld:'vISENABLE',pic:''}]];
   this.EvtParms["'E_CONFIRM'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'AV24GAMRRepositoryGUID',fld:'vGAMRREPOSITORYGUID',pic:''},{av:'AV23GAMRPrivateEncryptKey',fld:'vGAMRPRIVATEENCRYPTKEY',pic:''},{av:'AV25GAMRServerURL',fld:'vGAMRSERVERURL',pic:''},{av:'AV31SiteURL',fld:'vSITEURL',pic:''},{av:'AV13ClientSecret',fld:'vCLIENTSECRET',pic:''},{av:'AV12ClientId',fld:'vCLIENTID',pic:''},{av:'AV9AdditionalScope',fld:'vADDITIONALSCOPE',pic:''},{av:'AV11CallbackURL',fld:'vCALLBACKURL',pic:''},{av:'AV15ConsumerSecret',fld:'vCONSUMERSECRET',pic:''},{av:'AV14ConsumerKey',fld:'vCONSUMERKEY',pic:''},{ctrl:'vWSSERVERSECUREPROTOCOL'},{av:'AV43WSServerSecureProtocol',fld:'vWSSERVERSECUREPROTOCOL',pic:'ZZZ9'},{av:'AV40WSServerBaseURL',fld:'vWSSERVERBASEURL',pic:''},{av:'AV42WSServerPort',fld:'vWSSERVERPORT',pic:'ZZZ9'},{av:'AV41WSServerName',fld:'vWSSERVERNAME',pic:''},{av:'AV36WSExtension',fld:'vWSEXTENSION',pic:''},{av:'AV37WSName',fld:'vWSNAME',pic:''},{av:'AV38WSPackage',fld:'vWSPACKAGE',pic:''},{av:'AV44WSTimeout',fld:'vWSTIMEOUT',pic:'ZZZ9'},{av:'AV39WSPrivateEncryptKey',fld:'vWSPRIVATEENCRYPTKEY',pic:''},{ctrl:'vWSVERSION'},{av:'AV45WSVersion',fld:'vWSVERSION',pic:''},{av:'AV16CusClassName',fld:'vCUSCLASSNAME',pic:''},{av:'AV18CusPackage',fld:'vCUSPACKAGE',pic:''},{av:'AV17CusFileName',fld:'vCUSFILENAME',pic:''},{av:'AV19CusPrivateEncryptKey',fld:'vCUSPRIVATEENCRYPTKEY',pic:''},{ctrl:'vCUSVERSION'},{av:'AV20CusVersion',fld:'vCUSVERSION',pic:''},{av:'AV27Impersonate',fld:'vIMPERSONATE',pic:''},{av:'AV10BigImageName',fld:'vBIGIMAGENAME',pic:''},{av:'AV32SmallImageName',fld:'vSMALLIMAGENAME',pic:''},{av:'AV21Dsc',fld:'vDSC',pic:''},{ctrl:'vFUNCTIONID'},{av:'AV22FunctionId',fld:'vFUNCTIONID',pic:''},{av:'AV30Name',fld:'vNAME',pic:''},{av:'AV54TypeId',fld:'vTYPEID',pic:''},{av:'AV28IsEnable',fld:'vISENABLE',pic:''}],[{ctrl:'vFUNCTIONID'},{av:'AV28IsEnable',fld:'vISENABLE',pic:''}]];
   this.EvtParms["'E_CANCEL'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'AV28IsEnable',fld:'vISENABLE',pic:''}],[{av:'AV28IsEnable',fld:'vISENABLE',pic:''}]];
   this.EvtParms["VALIDV_FUNCTIONID"] = [[{av:'AV28IsEnable',fld:'vISENABLE',pic:''}],[{av:'AV28IsEnable',fld:'vISENABLE',pic:''}]];
   this.EvtParms["VALIDV_WSVERSION"] = [[{av:'AV28IsEnable',fld:'vISENABLE',pic:''}],[{av:'AV28IsEnable',fld:'vISENABLE',pic:''}]];
   this.EvtParms["VALIDV_CUSVERSION"] = [[{av:'AV28IsEnable',fld:'vISENABLE',pic:''}],[{av:'AV28IsEnable',fld:'vISENABLE',pic:''}]];
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV54TypeId", "vTYPEID", 0, "char", 30, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.Initialize( );
});
