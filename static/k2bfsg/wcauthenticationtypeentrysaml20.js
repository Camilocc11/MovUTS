gx.evt.autoSkip = false;
gx.define('k2bfsg.wcauthenticationtypeentrysaml20', true, function (CmpContext) {
   this.ServerClass =  "k2bfsg.wcauthenticationtypeentrysaml20" ;
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
      this.AV68CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV78Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV70I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV45UserInfoResponseUserErrorDescriptionTag=gx.fn.getControlValue("vUSERINFORESPONSEUSERERRORDESCRIPTIONTAG") ;
      this.AV41TypeId=gx.fn.getControlValue("vTYPEID") ;
      this.AV68CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV78Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV70I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Validv_Functionid=function()
   {
      return this.validCliEvt("Validv_Functionid", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vFUNCTIONID");
         this.AnyError  = 0;
         if ( ! ( ( this.AV16FunctionId == "AuthenticationAndRoles" ) || ( this.AV16FunctionId == "OnlyAuthentication" ) ) )
         {
            try {
               gxballoon.setError("Campo Function Id fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.s132_client=function()
   {
   };
   this.s142_client=function()
   {
   };
   this.s182_client=function()
   {
   };
   this.e192m1_client=function()
   {
      this.clearMessages();
      this.s222_client();
      this.refreshOutputs([{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s222_client=function()
   {
      this.call("com.movuts.k2bfsg.wwauthtype", []);
   };
   this.e202m1_client=function()
   {
      this.clearMessages();
      this.s232_client();
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERLASTNAMETAG","Visible")',ctrl:'vUSERINFORESPONSEUSERLASTNAMETAG',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBUSERLASTNAMEHELP","Caption")',ctrl:'TBUSERLASTNAMEHELP',prop:'Caption'},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s232_client=function()
   {
      if ( this.AV51UserInfoResponseUserLastNameGenAuto )
      {
         gx.fn.setCtrlProperty("vUSERINFORESPONSEUSERLASTNAMETAG","Visible", false );
         gx.fn.setCtrlProperty("TBUSERLASTNAMEHELP","Caption", "*Generar apellido automáticamente usando espacios en el nombre" );
      }
      else
      {
         gx.fn.setCtrlProperty("vUSERINFORESPONSEUSERLASTNAMETAG","Visible", true );
         gx.fn.setCtrlProperty("TBUSERLASTNAMEHELP","Caption", "" );
      }
   };
   this.e112m1_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION","Visible") != 0 )
      {
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION","Visible", false );
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION","Class", "Section_LineSeparatorContentClose" );
         gx.fn.setCtrlProperty("LINESEPARATORHEADER_ADVANCEDRESPONSECONFIGURATION","Class", "Section_LineSeparatorClose" );
      }
      else
      {
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION","Visible", true );
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION","Class", "Section_LineSeparatorContentOpen" );
         gx.fn.setCtrlProperty("LINESEPARATORHEADER_ADVANCEDRESPONSECONFIGURATION","Class", "Section_LineSeparatorOpen" );
      }
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION","Class")',ctrl:'LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_ADVANCEDRESPONSECONFIGURATION","Class")',ctrl:'LINESEPARATORHEADER_ADVANCEDRESPONSECONFIGURATION',prop:'Class'},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e122m2_client=function()
   {
      return this.executeServerEvent("'E_ADD'", false, null, false, false);
   };
   this.e182m2_client=function()
   {
      return this.executeServerEvent("'E_DELETE'", true, arguments[0], false, false);
   };
   this.e132m2_client=function()
   {
      return this.executeServerEvent("'E_CONFIRM'", false, null, false, false);
   };
   this.e212m2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e222m2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,58,59,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,110,111,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,177,178,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,284,285,286,287,288,289,292,293,294,295,296,297,298,299,300,301,302,305,307,308,309];
   this.GXLastCtrlId =309;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",283,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.wcauthenticationtypeentrysaml20",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,true,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Dynamicpropname",284,"vDYNAMICPROPNAME","Nombre","","DynamicPropName","char",0,"px",60,60,"left",null,[],"Dynamicpropname","DynamicPropName",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   GridContainer.addSingleLineEdit("Dynamicproptag",285,"vDYNAMICPROPTAG","Etiqueta","","DynamicPropTag","char",0,"px",60,60,"left",null,[],"Dynamicproptag","DynamicPropTag",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addBitmap("&Delete_action","vDELETE_ACTION",286,20,"px",17,"px","e182m2_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.TABS_TABSCONTROLContainer = gx.uc.getNew(this, 56, 21, "gx.ui.controls.Tab", this.CmpContext + "TABS_TABSCONTROLContainer", "Tabs_tabscontrol", "TABS_TABSCONTROL");
   var TABS_TABSCONTROLContainer = this.TABS_TABSCONTROLContainer;
   TABS_TABSCONTROLContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABS_TABSCONTROLContainer.setProp("ActivePage", "Activepage", '', "int");
   TABS_TABSCONTROLContainer.setProp("ActivePageControlName", "Activepagecontrolname", "", "char");
   TABS_TABSCONTROLContainer.setProp("PageCount", "Pagecount", 3, "num");
   TABS_TABSCONTROLContainer.setProp("Class", "Class", "Tab", "str");
   TABS_TABSCONTROLContainer.setProp("HistoryManagement", "Historymanagement", false, "bool");
   TABS_TABSCONTROLContainer.setProp("Visible", "Visible", true, "bool");
   TABS_TABSCONTROLContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABS_TABSCONTROLContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 310, 21, "K2BControlBeautify", this.CmpContext + "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[18]={ id: 18, fld:"TABLE_CONTAINER_NAME",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id:21 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV33Name",gxold:"OV33Name",gxvar:"AV33Name",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV33Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV33Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV33Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV33Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"TABLE_CONTAINER_FUNCTIONID",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id:26 ,lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Functionid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFUNCTIONID",gxz:"ZV16FunctionId",gxold:"OV16FunctionId",gxvar:"AV16FunctionId",ucs:[],op:[26],ip:[26],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV16FunctionId=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV16FunctionId=Value},v2c:function(){gx.fn.setComboBoxValue("vFUNCTIONID",gx.O.AV16FunctionId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV16FunctionId=this.val()},val:function(){return gx.fn.getControlValue("vFUNCTIONID")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"TABLE_CONTAINER_DSC",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id:32 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",gxz:"ZV10Dsc",gxold:"OV10Dsc",gxvar:"AV10Dsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV10Dsc=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV10Dsc=Value},v2c:function(){gx.fn.setControlValue("vDSC",gx.O.AV10Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV10Dsc=this.val()},val:function(){return gx.fn.getControlValue("vDSC")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"TABLE_CONTAINER_ISENABLE",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id:37 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISENABLE",gxz:"ZV20IsEnable",gxold:"OV20IsEnable",gxvar:"AV20IsEnable",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV20IsEnable=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV20IsEnable=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISENABLE",gx.O.AV20IsEnable,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV20IsEnable=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISENABLE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"TABLE_CONTAINER_SMALLIMAGENAME",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id:43 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSMALLIMAGENAME",gxz:"ZV40SmallImageName",gxold:"OV40SmallImageName",gxvar:"AV40SmallImageName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV40SmallImageName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV40SmallImageName=Value},v2c:function(){gx.fn.setControlValue("vSMALLIMAGENAME",gx.O.AV40SmallImageName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV40SmallImageName=this.val()},val:function(){return gx.fn.getControlValue("vSMALLIMAGENAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"TABLE_CONTAINER_BIGIMAGENAME",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBIGIMAGENAME",gxz:"ZV7BigImageName",gxold:"OV7BigImageName",gxvar:"AV7BigImageName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV7BigImageName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV7BigImageName=Value},v2c:function(){gx.fn.setControlValue("vBIGIMAGENAME",gx.O.AV7BigImageName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV7BigImageName=this.val()},val:function(){return gx.fn.getControlValue("vBIGIMAGENAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"TABLE_CONTAINER_IMPERSONATE",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id:53 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vIMPERSONATE",gxz:"ZV19Impersonate",gxold:"OV19Impersonate",gxvar:"AV19Impersonate",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV19Impersonate=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV19Impersonate=Value},v2c:function(){gx.fn.setControlValue("vIMPERSONATE",gx.O.AV19Impersonate,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV19Impersonate=this.val()},val:function(){return gx.fn.getControlValue("vIMPERSONATE")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"TAB_TABCONTROL_TITLE", format:0,grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"MAINTABRESPONSIVETABLE_TAB",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"TABLE_CONTAINER_FORCEAUTHN",grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id:67 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFORCEAUTHN",gxz:"ZV15ForceAuthn",gxold:"OV15ForceAuthn",gxvar:"AV15ForceAuthn",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV15ForceAuthn=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV15ForceAuthn=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vFORCEAUTHN",gx.O.AV15ForceAuthn,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV15ForceAuthn=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vFORCEAUTHN")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 67 , function() {
   });
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"TABLE_CONTAINER_AUTHNCONTEXT",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHNCONTEXT",gxz:"ZV6AuthnContext",gxold:"OV6AuthnContext",gxvar:"AV6AuthnContext",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV6AuthnContext=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV6AuthnContext=Value},v2c:function(){gx.fn.setControlValue("vAUTHNCONTEXT",gx.O.AV6AuthnContext,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV6AuthnContext=this.val()},val:function(){return gx.fn.getControlValue("vAUTHNCONTEXT")},nac:gx.falseFn};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"TABLE_CONTAINER_LOCALSITEURL",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id:78 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLOCALSITEURL",gxz:"ZV31LocalSiteURL",gxold:"OV31LocalSiteURL",gxvar:"AV31LocalSiteURL",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV31LocalSiteURL=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV31LocalSiteURL=Value},v2c:function(){gx.fn.setControlValue("vLOCALSITEURL",gx.O.AV31LocalSiteURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV31LocalSiteURL=this.val()},val:function(){return gx.fn.getControlValue("vLOCALSITEURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 78 , function() {
   });
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id: 81, fld:"LOGIN",grid:0};
   GXValidFnc[82]={ id: 82, fld:"MAINGROUPRESPONSIVETABLE_LOGIN",grid:0};
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"TABLE_CONTAINER_IDENTITYPROVIDERENTITYID",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id:88 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vIDENTITYPROVIDERENTITYID",gxz:"ZV18IdentityProviderEntityID",gxold:"OV18IdentityProviderEntityID",gxvar:"AV18IdentityProviderEntityID",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV18IdentityProviderEntityID=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV18IdentityProviderEntityID=Value},v2c:function(){gx.fn.setControlValue("vIDENTITYPROVIDERENTITYID",gx.O.AV18IdentityProviderEntityID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV18IdentityProviderEntityID=this.val()},val:function(){return gx.fn.getControlValue("vIDENTITYPROVIDERENTITYID")},nac:gx.falseFn};
   this.declareDomainHdlr( 88 , function() {
   });
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"TABLE_CONTAINER_SERVICEPROVIDERENTITYID",grid:0};
   GXValidFnc[91]={ id: 91, fld:"",grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id:93 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSERVICEPROVIDERENTITYID",gxz:"ZV38ServiceProviderEntityID",gxold:"OV38ServiceProviderEntityID",gxvar:"AV38ServiceProviderEntityID",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV38ServiceProviderEntityID=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV38ServiceProviderEntityID=Value},v2c:function(){gx.fn.setControlValue("vSERVICEPROVIDERENTITYID",gx.O.AV38ServiceProviderEntityID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV38ServiceProviderEntityID=this.val()},val:function(){return gx.fn.getControlValue("vSERVICEPROVIDERENTITYID")},nac:gx.falseFn};
   this.declareDomainHdlr( 93 , function() {
   });
   GXValidFnc[94]={ id: 94, fld:"",grid:0};
   GXValidFnc[95]={ id: 95, fld:"TABLE_CONTAINER_SAMLENDPOINTLOCATION",grid:0};
   GXValidFnc[96]={ id: 96, fld:"",grid:0};
   GXValidFnc[97]={ id: 97, fld:"",grid:0};
   GXValidFnc[98]={ id:98 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSAMLENDPOINTLOCATION",gxz:"ZV37SamlEndpointLocation",gxold:"OV37SamlEndpointLocation",gxvar:"AV37SamlEndpointLocation",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV37SamlEndpointLocation=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV37SamlEndpointLocation=Value},v2c:function(){gx.fn.setControlValue("vSAMLENDPOINTLOCATION",gx.O.AV37SamlEndpointLocation,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV37SamlEndpointLocation=this.val()},val:function(){return gx.fn.getControlValue("vSAMLENDPOINTLOCATION")},nac:gx.falseFn};
   this.declareDomainHdlr( 98 , function() {
   });
   GXValidFnc[99]={ id: 99, fld:"",grid:0};
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   GXValidFnc[101]={ id: 101, fld:"LOGOUT",grid:0};
   GXValidFnc[102]={ id: 102, fld:"MAINGROUPRESPONSIVETABLE_LOGOUT",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[105]={ id: 105, fld:"TABLE_CONTAINER_SINGLELOGOUTENDPOINT",grid:0};
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"",grid:0};
   GXValidFnc[108]={ id:108 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSINGLELOGOUTENDPOINT",gxz:"ZV39SingleLogoutendpoint",gxold:"OV39SingleLogoutendpoint",gxvar:"AV39SingleLogoutendpoint",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39SingleLogoutendpoint=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV39SingleLogoutendpoint=Value},v2c:function(){gx.fn.setControlValue("vSINGLELOGOUTENDPOINT",gx.O.AV39SingleLogoutendpoint,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV39SingleLogoutendpoint=this.val()},val:function(){return gx.fn.getControlValue("vSINGLELOGOUTENDPOINT")},nac:gx.falseFn};
   this.declareDomainHdlr( 108 , function() {
   });
   GXValidFnc[110]={ id: 110, fld:"TAB1_TABCONTROL_TITLE", format:0,grid:0};
   GXValidFnc[111]={ id: 111, fld:"",grid:0};
   GXValidFnc[113]={ id: 113, fld:"MAINTABRESPONSIVETABLE_TAB1",grid:0};
   GXValidFnc[114]={ id: 114, fld:"",grid:0};
   GXValidFnc[115]={ id: 115, fld:"",grid:0};
   GXValidFnc[116]={ id: 116, fld:"REQUESTCREDENTIALS",grid:0};
   GXValidFnc[117]={ id: 117, fld:"MAINGROUPRESPONSIVETABLE_REQUESTCREDENTIALS",grid:0};
   GXValidFnc[118]={ id: 118, fld:"",grid:0};
   GXValidFnc[119]={ id: 119, fld:"",grid:0};
   GXValidFnc[120]={ id: 120, fld:"TABLE_CONTAINER_KEYSTPATHCREDENTIAL",grid:0};
   GXValidFnc[121]={ id: 121, fld:"",grid:0};
   GXValidFnc[122]={ id: 122, fld:"",grid:0};
   GXValidFnc[123]={ id:123 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vKEYSTPATHCREDENTIAL",gxz:"ZV29KeyStPathCredential",gxold:"OV29KeyStPathCredential",gxvar:"AV29KeyStPathCredential",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV29KeyStPathCredential=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV29KeyStPathCredential=Value},v2c:function(){gx.fn.setControlValue("vKEYSTPATHCREDENTIAL",gx.O.AV29KeyStPathCredential,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV29KeyStPathCredential=this.val()},val:function(){return gx.fn.getControlValue("vKEYSTPATHCREDENTIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 123 , function() {
   });
   GXValidFnc[124]={ id: 124, fld:"",grid:0};
   GXValidFnc[125]={ id: 125, fld:"",grid:0};
   GXValidFnc[126]={ id: 126, fld:"TABLE_CONTAINER_KEYSTPWDCREDENTIAL",grid:0};
   GXValidFnc[127]={ id: 127, fld:"",grid:0};
   GXValidFnc[128]={ id: 128, fld:"",grid:0};
   GXValidFnc[129]={ id:129 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vKEYSTPWDCREDENTIAL",gxz:"ZV30KeyStPwdCredential",gxold:"OV30KeyStPwdCredential",gxvar:"AV30KeyStPwdCredential",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV30KeyStPwdCredential=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV30KeyStPwdCredential=Value},v2c:function(){gx.fn.setControlValue("vKEYSTPWDCREDENTIAL",gx.O.AV30KeyStPwdCredential,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV30KeyStPwdCredential=this.val()},val:function(){return gx.fn.getControlValue("vKEYSTPWDCREDENTIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 129 , function() {
   });
   GXValidFnc[130]={ id: 130, fld:"",grid:0};
   GXValidFnc[131]={ id: 131, fld:"",grid:0};
   GXValidFnc[132]={ id: 132, fld:"TABLE_CONTAINER_KEYALIASCREDENTIAL",grid:0};
   GXValidFnc[133]={ id: 133, fld:"",grid:0};
   GXValidFnc[134]={ id: 134, fld:"",grid:0};
   GXValidFnc[135]={ id:135 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vKEYALIASCREDENTIAL",gxz:"ZV22KeyAliasCredential",gxold:"OV22KeyAliasCredential",gxvar:"AV22KeyAliasCredential",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV22KeyAliasCredential=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV22KeyAliasCredential=Value},v2c:function(){gx.fn.setControlValue("vKEYALIASCREDENTIAL",gx.O.AV22KeyAliasCredential,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV22KeyAliasCredential=this.val()},val:function(){return gx.fn.getControlValue("vKEYALIASCREDENTIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 135 , function() {
   });
   GXValidFnc[136]={ id: 136, fld:"",grid:0};
   GXValidFnc[137]={ id: 137, fld:"",grid:0};
   GXValidFnc[138]={ id: 138, fld:"TABLE_CONTAINER_KEYSTORECREDENTIAL",grid:0};
   GXValidFnc[139]={ id: 139, fld:"",grid:0};
   GXValidFnc[140]={ id: 140, fld:"",grid:0};
   GXValidFnc[141]={ id:141 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vKEYSTORECREDENTIAL",gxz:"ZV25KeyStoreCredential",gxold:"OV25KeyStoreCredential",gxvar:"AV25KeyStoreCredential",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV25KeyStoreCredential=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV25KeyStoreCredential=Value},v2c:function(){gx.fn.setControlValue("vKEYSTORECREDENTIAL",gx.O.AV25KeyStoreCredential,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV25KeyStoreCredential=this.val()},val:function(){return gx.fn.getControlValue("vKEYSTORECREDENTIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 141 , function() {
   });
   GXValidFnc[142]={ id: 142, fld:"",grid:0};
   GXValidFnc[143]={ id: 143, fld:"",grid:0};
   GXValidFnc[144]={ id: 144, fld:"RESPONSECREDENTIALS",grid:0};
   GXValidFnc[145]={ id: 145, fld:"MAINGROUPRESPONSIVETABLE_RESPONSECREDENTIALS",grid:0};
   GXValidFnc[146]={ id: 146, fld:"",grid:0};
   GXValidFnc[147]={ id: 147, fld:"",grid:0};
   GXValidFnc[148]={ id: 148, fld:"TABLE_CONTAINER_KEYSTOREFILEPATHTRUSTCRED",grid:0};
   GXValidFnc[149]={ id: 149, fld:"",grid:0};
   GXValidFnc[150]={ id: 150, fld:"",grid:0};
   GXValidFnc[151]={ id:151 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vKEYSTOREFILEPATHTRUSTCRED",gxz:"ZV26KeyStoreFilePathTrustCred",gxold:"OV26KeyStoreFilePathTrustCred",gxvar:"AV26KeyStoreFilePathTrustCred",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV26KeyStoreFilePathTrustCred=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV26KeyStoreFilePathTrustCred=Value},v2c:function(){gx.fn.setControlValue("vKEYSTOREFILEPATHTRUSTCRED",gx.O.AV26KeyStoreFilePathTrustCred,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV26KeyStoreFilePathTrustCred=this.val()},val:function(){return gx.fn.getControlValue("vKEYSTOREFILEPATHTRUSTCRED")},nac:gx.falseFn};
   this.declareDomainHdlr( 151 , function() {
   });
   GXValidFnc[152]={ id: 152, fld:"",grid:0};
   GXValidFnc[153]={ id: 153, fld:"",grid:0};
   GXValidFnc[154]={ id: 154, fld:"LINESEPARATORCONTAINER_ADVANCEDRESPONSECONFIGURATION",grid:0};
   GXValidFnc[155]={ id: 155, fld:"LINESEPARATORHEADER_ADVANCEDRESPONSECONFIGURATION",grid:0};
   GXValidFnc[156]={ id: 156, fld:"LINESEPARATORTITLE_ADVANCEDRESPONSECONFIGURATION", format:0,grid:0,evt:"e112m1_client"};
   GXValidFnc[157]={ id: 157, fld:"LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION",grid:0};
   GXValidFnc[158]={ id: 158, fld:"",grid:0};
   GXValidFnc[159]={ id: 159, fld:"",grid:0};
   GXValidFnc[160]={ id: 160, fld:"TABLE_CONTAINER_KEYSTOREPWDTRUSTCRED",grid:0};
   GXValidFnc[161]={ id: 161, fld:"",grid:0};
   GXValidFnc[162]={ id: 162, fld:"",grid:0};
   GXValidFnc[163]={ id:163 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vKEYSTOREPWDTRUSTCRED",gxz:"ZV27KeyStorePwdTrustCred",gxold:"OV27KeyStorePwdTrustCred",gxvar:"AV27KeyStorePwdTrustCred",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV27KeyStorePwdTrustCred=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV27KeyStorePwdTrustCred=Value},v2c:function(){gx.fn.setControlValue("vKEYSTOREPWDTRUSTCRED",gx.O.AV27KeyStorePwdTrustCred,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV27KeyStorePwdTrustCred=this.val()},val:function(){return gx.fn.getControlValue("vKEYSTOREPWDTRUSTCRED")},nac:gx.falseFn};
   this.declareDomainHdlr( 163 , function() {
   });
   GXValidFnc[164]={ id: 164, fld:"",grid:0};
   GXValidFnc[165]={ id: 165, fld:"",grid:0};
   GXValidFnc[166]={ id: 166, fld:"TABLE_CONTAINER_KEYALIASTRUSTCRED",grid:0};
   GXValidFnc[167]={ id: 167, fld:"",grid:0};
   GXValidFnc[168]={ id: 168, fld:"",grid:0};
   GXValidFnc[169]={ id:169 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vKEYALIASTRUSTCRED",gxz:"ZV23KeyAliasTrustCred",gxold:"OV23KeyAliasTrustCred",gxvar:"AV23KeyAliasTrustCred",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV23KeyAliasTrustCred=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV23KeyAliasTrustCred=Value},v2c:function(){gx.fn.setControlValue("vKEYALIASTRUSTCRED",gx.O.AV23KeyAliasTrustCred,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV23KeyAliasTrustCred=this.val()},val:function(){return gx.fn.getControlValue("vKEYALIASTRUSTCRED")},nac:gx.falseFn};
   this.declareDomainHdlr( 169 , function() {
   });
   GXValidFnc[170]={ id: 170, fld:"",grid:0};
   GXValidFnc[171]={ id: 171, fld:"",grid:0};
   GXValidFnc[172]={ id: 172, fld:"TABLE_CONTAINER_KEYSTORETRUSTCRED",grid:0};
   GXValidFnc[173]={ id: 173, fld:"",grid:0};
   GXValidFnc[174]={ id: 174, fld:"",grid:0};
   GXValidFnc[175]={ id:175 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vKEYSTORETRUSTCRED",gxz:"ZV28KeyStoreTrustCred",gxold:"OV28KeyStoreTrustCred",gxvar:"AV28KeyStoreTrustCred",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV28KeyStoreTrustCred=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV28KeyStoreTrustCred=Value},v2c:function(){gx.fn.setControlValue("vKEYSTORETRUSTCRED",gx.O.AV28KeyStoreTrustCred,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV28KeyStoreTrustCred=this.val()},val:function(){return gx.fn.getControlValue("vKEYSTORETRUSTCRED")},nac:gx.falseFn};
   this.declareDomainHdlr( 175 , function() {
   });
   GXValidFnc[177]={ id: 177, fld:"TAB2_TABCONTROL_TITLE", format:0,grid:0};
   GXValidFnc[178]={ id: 178, fld:"",grid:0};
   GXValidFnc[180]={ id: 180, fld:"MAINTABRESPONSIVETABLE_TAB2",grid:0};
   GXValidFnc[181]={ id: 181, fld:"",grid:0};
   GXValidFnc[182]={ id: 182, fld:"",grid:0};
   GXValidFnc[183]={ id: 183, fld:"GROUP1RESPONSE",grid:0};
   GXValidFnc[184]={ id: 184, fld:"MAINGROUPRESPONSIVETABLE_GROUP1RESPONSE",grid:0};
   GXValidFnc[185]={ id: 185, fld:"",grid:0};
   GXValidFnc[186]={ id: 186, fld:"",grid:0};
   GXValidFnc[187]={ id: 187, fld:"TABLE_CONTAINER_USERINFORESPONSEUSEREMAILTAG",grid:0};
   GXValidFnc[188]={ id: 188, fld:"",grid:0};
   GXValidFnc[189]={ id: 189, fld:"",grid:0};
   GXValidFnc[190]={ id:190 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSEREMAILTAG",gxz:"ZV44UserInfoResponseUserEmailTag",gxold:"OV44UserInfoResponseUserEmailTag",gxvar:"AV44UserInfoResponseUserEmailTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV44UserInfoResponseUserEmailTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV44UserInfoResponseUserEmailTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSEREMAILTAG",gx.O.AV44UserInfoResponseUserEmailTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV44UserInfoResponseUserEmailTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSEREMAILTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 190 , function() {
   });
   GXValidFnc[191]={ id: 191, fld:"",grid:0};
   GXValidFnc[192]={ id: 192, fld:"",grid:0};
   GXValidFnc[193]={ id: 193, fld:"TABLE_CONTAINER_USERINFORESPONSEUSEREXTERNALIDTAG",grid:0};
   GXValidFnc[194]={ id: 194, fld:"",grid:0};
   GXValidFnc[195]={ id: 195, fld:"",grid:0};
   GXValidFnc[196]={ id:196 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSEREXTERNALIDTAG",gxz:"ZV46UserInfoResponseUserExternalIdTag",gxold:"OV46UserInfoResponseUserExternalIdTag",gxvar:"AV46UserInfoResponseUserExternalIdTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46UserInfoResponseUserExternalIdTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV46UserInfoResponseUserExternalIdTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSEREXTERNALIDTAG",gx.O.AV46UserInfoResponseUserExternalIdTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV46UserInfoResponseUserExternalIdTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSEREXTERNALIDTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 196 , function() {
   });
   GXValidFnc[197]={ id: 197, fld:"",grid:0};
   GXValidFnc[198]={ id: 198, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERNAMETAG",grid:0};
   GXValidFnc[199]={ id: 199, fld:"",grid:0};
   GXValidFnc[200]={ id: 200, fld:"",grid:0};
   GXValidFnc[201]={ id:201 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERNAMETAG",gxz:"ZV53UserInfoResponseUserNameTag",gxold:"OV53UserInfoResponseUserNameTag",gxvar:"AV53UserInfoResponseUserNameTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV53UserInfoResponseUserNameTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV53UserInfoResponseUserNameTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERNAMETAG",gx.O.AV53UserInfoResponseUserNameTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV53UserInfoResponseUserNameTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERNAMETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 201 , function() {
   });
   GXValidFnc[202]={ id: 202, fld:"",grid:0};
   GXValidFnc[203]={ id: 203, fld:"",grid:0};
   GXValidFnc[204]={ id: 204, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERFIRSTNAMETAG",grid:0};
   GXValidFnc[205]={ id: 205, fld:"",grid:0};
   GXValidFnc[206]={ id: 206, fld:"",grid:0};
   GXValidFnc[207]={ id:207 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERFIRSTNAMETAG",gxz:"ZV47UserInfoResponseUserFirstNameTag",gxold:"OV47UserInfoResponseUserFirstNameTag",gxvar:"AV47UserInfoResponseUserFirstNameTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47UserInfoResponseUserFirstNameTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV47UserInfoResponseUserFirstNameTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERFIRSTNAMETAG",gx.O.AV47UserInfoResponseUserFirstNameTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV47UserInfoResponseUserFirstNameTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERFIRSTNAMETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 207 , function() {
   });
   GXValidFnc[208]={ id: 208, fld:"",grid:0};
   GXValidFnc[209]={ id: 209, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERLASTNAMEGENAUTO",grid:0};
   GXValidFnc[210]={ id: 210, fld:"",grid:0};
   GXValidFnc[211]={ id: 211, fld:"",grid:0};
   GXValidFnc[212]={ id:212 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERLASTNAMEGENAUTO",gxz:"ZV51UserInfoResponseUserLastNameGenAuto",gxold:"OV51UserInfoResponseUserLastNameGenAuto",gxvar:"AV51UserInfoResponseUserLastNameGenAuto",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV51UserInfoResponseUserLastNameGenAuto=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV51UserInfoResponseUserLastNameGenAuto=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vUSERINFORESPONSEUSERLASTNAMEGENAUTO",gx.O.AV51UserInfoResponseUserLastNameGenAuto,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV51UserInfoResponseUserLastNameGenAuto=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERLASTNAMEGENAUTO")},nac:gx.falseFn,evt:"e202m1_client",values:['true','false']};
   this.declareDomainHdlr( 212 , function() {
   });
   GXValidFnc[213]={ id: 213, fld:"",grid:0};
   GXValidFnc[214]={ id: 214, fld:"",grid:0};
   GXValidFnc[215]={ id: 215, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERLASTNAMETAG",grid:0};
   GXValidFnc[216]={ id: 216, fld:"TEXTBLOCK_VAR_USERINFORESPONSEUSERLASTNAMETAG", format:0,grid:0};
   GXValidFnc[217]={ id: 217, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERLASTNAMETAGFIELDCONTAINER",grid:0};
   GXValidFnc[218]={ id: 218, fld:"",grid:0};
   GXValidFnc[219]={ id:219 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERLASTNAMETAG",gxz:"ZV52UserInfoResponseUserLastNameTag",gxold:"OV52UserInfoResponseUserLastNameTag",gxvar:"AV52UserInfoResponseUserLastNameTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52UserInfoResponseUserLastNameTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV52UserInfoResponseUserLastNameTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERLASTNAMETAG",gx.O.AV52UserInfoResponseUserLastNameTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV52UserInfoResponseUserLastNameTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERLASTNAMETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 219 , function() {
   });
   GXValidFnc[220]={ id: 220, fld:"TBUSERLASTNAMEHELP", format:0,grid:0};
   GXValidFnc[221]={ id: 221, fld:"",grid:0};
   GXValidFnc[222]={ id: 222, fld:"",grid:0};
   GXValidFnc[223]={ id: 223, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERGENDERTAG",grid:0};
   GXValidFnc[224]={ id: 224, fld:"",grid:0};
   GXValidFnc[225]={ id: 225, fld:"",grid:0};
   GXValidFnc[226]={ id:226 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERGENDERTAG",gxz:"ZV48UserInfoResponseUserGenderTag",gxold:"OV48UserInfoResponseUserGenderTag",gxvar:"AV48UserInfoResponseUserGenderTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48UserInfoResponseUserGenderTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48UserInfoResponseUserGenderTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERGENDERTAG",gx.O.AV48UserInfoResponseUserGenderTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV48UserInfoResponseUserGenderTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERGENDERTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 226 , function() {
   });
   GXValidFnc[227]={ id: 227, fld:"",grid:0};
   GXValidFnc[228]={ id: 228, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERGENDERVALUES",grid:0};
   GXValidFnc[229]={ id: 229, fld:"",grid:0};
   GXValidFnc[230]={ id: 230, fld:"",grid:0};
   GXValidFnc[231]={ id:231 ,lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERGENDERVALUES",gxz:"ZV49UserInfoResponseUserGenderValues",gxold:"OV49UserInfoResponseUserGenderValues",gxvar:"AV49UserInfoResponseUserGenderValues",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV49UserInfoResponseUserGenderValues=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV49UserInfoResponseUserGenderValues=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERGENDERVALUES",gx.O.AV49UserInfoResponseUserGenderValues,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV49UserInfoResponseUserGenderValues=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERGENDERVALUES")},nac:gx.falseFn};
   this.declareDomainHdlr( 231 , function() {
   });
   GXValidFnc[232]={ id: 232, fld:"",grid:0};
   GXValidFnc[233]={ id: 233, fld:"",grid:0};
   GXValidFnc[234]={ id: 234, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERBIRTHDAYTAG",grid:0};
   GXValidFnc[235]={ id: 235, fld:"",grid:0};
   GXValidFnc[236]={ id: 236, fld:"",grid:0};
   GXValidFnc[237]={ id:237 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERBIRTHDAYTAG",gxz:"ZV43UserInfoResponseUserBirthdayTag",gxold:"OV43UserInfoResponseUserBirthdayTag",gxvar:"AV43UserInfoResponseUserBirthdayTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV43UserInfoResponseUserBirthdayTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV43UserInfoResponseUserBirthdayTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERBIRTHDAYTAG",gx.O.AV43UserInfoResponseUserBirthdayTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV43UserInfoResponseUserBirthdayTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERBIRTHDAYTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 237 , function() {
   });
   GXValidFnc[238]={ id: 238, fld:"",grid:0};
   GXValidFnc[239]={ id: 239, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERURLIMAGETAG",grid:0};
   GXValidFnc[240]={ id: 240, fld:"",grid:0};
   GXValidFnc[241]={ id: 241, fld:"",grid:0};
   GXValidFnc[242]={ id:242 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERURLIMAGETAG",gxz:"ZV55UserInfoResponseUserURLImageTag",gxold:"OV55UserInfoResponseUserURLImageTag",gxvar:"AV55UserInfoResponseUserURLImageTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV55UserInfoResponseUserURLImageTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV55UserInfoResponseUserURLImageTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERURLIMAGETAG",gx.O.AV55UserInfoResponseUserURLImageTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV55UserInfoResponseUserURLImageTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERURLIMAGETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 242 , function() {
   });
   GXValidFnc[243]={ id: 243, fld:"",grid:0};
   GXValidFnc[244]={ id: 244, fld:"",grid:0};
   GXValidFnc[245]={ id: 245, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERURLPROFILETAG",grid:0};
   GXValidFnc[246]={ id: 246, fld:"",grid:0};
   GXValidFnc[247]={ id: 247, fld:"",grid:0};
   GXValidFnc[248]={ id:248 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERURLPROFILETAG",gxz:"ZV56UserInfoResponseUserURLProfileTag",gxold:"OV56UserInfoResponseUserURLProfileTag",gxvar:"AV56UserInfoResponseUserURLProfileTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV56UserInfoResponseUserURLProfileTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV56UserInfoResponseUserURLProfileTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERURLPROFILETAG",gx.O.AV56UserInfoResponseUserURLProfileTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV56UserInfoResponseUserURLProfileTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERURLPROFILETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 248 , function() {
   });
   GXValidFnc[249]={ id: 249, fld:"",grid:0};
   GXValidFnc[250]={ id: 250, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERLANGUAGETAG",grid:0};
   GXValidFnc[251]={ id: 251, fld:"",grid:0};
   GXValidFnc[252]={ id: 252, fld:"",grid:0};
   GXValidFnc[253]={ id:253 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERLANGUAGETAG",gxz:"ZV50UserInfoResponseUserLanguageTag",gxold:"OV50UserInfoResponseUserLanguageTag",gxvar:"AV50UserInfoResponseUserLanguageTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50UserInfoResponseUserLanguageTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV50UserInfoResponseUserLanguageTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERLANGUAGETAG",gx.O.AV50UserInfoResponseUserLanguageTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV50UserInfoResponseUserLanguageTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERLANGUAGETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 253 , function() {
   });
   GXValidFnc[254]={ id: 254, fld:"",grid:0};
   GXValidFnc[255]={ id: 255, fld:"",grid:0};
   GXValidFnc[256]={ id: 256, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERTIMEZONETAG",grid:0};
   GXValidFnc[257]={ id: 257, fld:"",grid:0};
   GXValidFnc[258]={ id: 258, fld:"",grid:0};
   GXValidFnc[259]={ id:259 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERTIMEZONETAG",gxz:"ZV54UserInfoResponseUserTimeZoneTag",gxold:"OV54UserInfoResponseUserTimeZoneTag",gxvar:"AV54UserInfoResponseUserTimeZoneTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV54UserInfoResponseUserTimeZoneTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV54UserInfoResponseUserTimeZoneTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERTIMEZONETAG",gx.O.AV54UserInfoResponseUserTimeZoneTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV54UserInfoResponseUserTimeZoneTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERTIMEZONETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 259 , function() {
   });
   GXValidFnc[260]={ id: 260, fld:"",grid:0};
   GXValidFnc[261]={ id: 261, fld:"TABLE_CONTAINER_USERINFORESPONSEERRORDESCRIPTIONTAG",grid:0};
   GXValidFnc[262]={ id: 262, fld:"",grid:0};
   GXValidFnc[263]={ id: 263, fld:"",grid:0};
   GXValidFnc[264]={ id:264 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEERRORDESCRIPTIONTAG",gxz:"ZV42UserInfoResponseErrorDescriptionTag",gxold:"OV42UserInfoResponseErrorDescriptionTag",gxvar:"AV42UserInfoResponseErrorDescriptionTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV42UserInfoResponseErrorDescriptionTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV42UserInfoResponseErrorDescriptionTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEERRORDESCRIPTIONTAG",gx.O.AV42UserInfoResponseErrorDescriptionTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV42UserInfoResponseErrorDescriptionTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEERRORDESCRIPTIONTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 264 , function() {
   });
   GXValidFnc[265]={ id: 265, fld:"",grid:0};
   GXValidFnc[266]={ id: 266, fld:"",grid:0};
   GXValidFnc[267]={ id: 267, fld:"GROUPCUSTOMUSERATTRIBUTES",grid:0};
   GXValidFnc[268]={ id: 268, fld:"MAINGROUPRESPONSIVETABLE_GROUPCUSTOMUSERATTRIBUTES",grid:0};
   GXValidFnc[269]={ id: 269, fld:"",grid:0};
   GXValidFnc[270]={ id: 270, fld:"",grid:0};
   GXValidFnc[271]={ id: 271, fld:"GRIDCOMPONENTCONTENT_GRID",grid:0};
   GXValidFnc[272]={ id: 272, fld:"",grid:0};
   GXValidFnc[273]={ id: 273, fld:"",grid:0};
   GXValidFnc[274]={ id: 274, fld:"LAYOUTDEFINED_GRID_INNER_GRID",grid:0};
   GXValidFnc[275]={ id: 275, fld:"",grid:0};
   GXValidFnc[276]={ id: 276, fld:"",grid:0};
   GXValidFnc[277]={ id: 277, fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};
   GXValidFnc[278]={ id: 278, fld:"",grid:0};
   GXValidFnc[279]={ id: 279, fld:"",grid:0};
   GXValidFnc[280]={ id: 280, fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};
   GXValidFnc[281]={ id: 281, fld:"",grid:0};
   GXValidFnc[282]={ id: 282, fld:"",grid:0};
   GXValidFnc[284]={ id:284 ,lvl:2,type:"char",len:60,dec:0,sign:false,ro:0,isacc:0,grid:283,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDYNAMICPROPNAME",gxz:"ZV11DynamicPropName",gxold:"OV11DynamicPropName",gxvar:"AV11DynamicPropName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV11DynamicPropName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV11DynamicPropName=Value},v2c:function(row){gx.fn.setGridControlValue("vDYNAMICPROPNAME",row || gx.fn.currentGridRowImpl(283),gx.O.AV11DynamicPropName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV11DynamicPropName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDYNAMICPROPNAME",row || gx.fn.currentGridRowImpl(283))},nac:gx.falseFn};
   GXValidFnc[285]={ id:285 ,lvl:2,type:"char",len:60,dec:0,sign:false,ro:0,isacc:0,grid:283,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDYNAMICPROPTAG",gxz:"ZV12DynamicPropTag",gxold:"OV12DynamicPropTag",gxvar:"AV12DynamicPropTag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV12DynamicPropTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12DynamicPropTag=Value},v2c:function(row){gx.fn.setGridControlValue("vDYNAMICPROPTAG",row || gx.fn.currentGridRowImpl(283),gx.O.AV12DynamicPropTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV12DynamicPropTag=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDYNAMICPROPTAG",row || gx.fn.currentGridRowImpl(283))},nac:gx.falseFn};
   GXValidFnc[286]={ id:286 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:283,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE_ACTION",gxz:"ZV72Delete_Action",gxold:"OV72Delete_Action",gxvar:"AV72Delete_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV72Delete_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV72Delete_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(283),gx.O.AV72Delete_Action,gx.O.AV77Delete_action_GXI)},c2v:function(row){gx.O.AV77Delete_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV72Delete_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(283))},val_GXI:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION_GXI",row || gx.fn.currentGridRowImpl(283))}, gxvar_GXI:'AV77Delete_action_GXI',nac:gx.falseFn,evt:"e182m2_client"};
   GXValidFnc[287]={ id: 287, fld:"",grid:0};
   GXValidFnc[288]={ id: 288, fld:"",grid:0};
   GXValidFnc[289]={ id: 289, fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};
   GXValidFnc[292]={ id: 292, fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID", format:0,grid:0};
   GXValidFnc[293]={ id: 293, fld:"",grid:0};
   GXValidFnc[294]={ id: 294, fld:"",grid:0};
   GXValidFnc[295]={ id: 295, fld:"",grid:0};
   GXValidFnc[296]={ id: 296, fld:"ADD",grid:0,evt:"e122m2_client"};
   GXValidFnc[297]={ id: 297, fld:"",grid:0};
   GXValidFnc[298]={ id: 298, fld:"",grid:0};
   GXValidFnc[299]={ id: 299, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[300]={ id: 300, fld:"",grid:0};
   GXValidFnc[301]={ id: 301, fld:"",grid:0};
   GXValidFnc[302]={ id: 302, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[305]={ id: 305, fld:"CONFIRM",grid:0,evt:"e132m2_client"};
   GXValidFnc[307]={ id: 307, fld:"CANCEL",grid:0,evt:"e192m1_client"};
   GXValidFnc[308]={ id: 308, fld:"",grid:0};
   GXValidFnc[309]={ id: 309, fld:"",grid:0};
   this.AV33Name = "" ;
   this.ZV33Name = "" ;
   this.OV33Name = "" ;
   this.AV16FunctionId = "" ;
   this.ZV16FunctionId = "" ;
   this.OV16FunctionId = "" ;
   this.AV10Dsc = "" ;
   this.ZV10Dsc = "" ;
   this.OV10Dsc = "" ;
   this.AV20IsEnable = false ;
   this.ZV20IsEnable = false ;
   this.OV20IsEnable = false ;
   this.AV40SmallImageName = "" ;
   this.ZV40SmallImageName = "" ;
   this.OV40SmallImageName = "" ;
   this.AV7BigImageName = "" ;
   this.ZV7BigImageName = "" ;
   this.OV7BigImageName = "" ;
   this.AV19Impersonate = "" ;
   this.ZV19Impersonate = "" ;
   this.OV19Impersonate = "" ;
   this.AV15ForceAuthn = false ;
   this.ZV15ForceAuthn = false ;
   this.OV15ForceAuthn = false ;
   this.AV6AuthnContext = "" ;
   this.ZV6AuthnContext = "" ;
   this.OV6AuthnContext = "" ;
   this.AV31LocalSiteURL = "" ;
   this.ZV31LocalSiteURL = "" ;
   this.OV31LocalSiteURL = "" ;
   this.AV18IdentityProviderEntityID = "" ;
   this.ZV18IdentityProviderEntityID = "" ;
   this.OV18IdentityProviderEntityID = "" ;
   this.AV38ServiceProviderEntityID = "" ;
   this.ZV38ServiceProviderEntityID = "" ;
   this.OV38ServiceProviderEntityID = "" ;
   this.AV37SamlEndpointLocation = "" ;
   this.ZV37SamlEndpointLocation = "" ;
   this.OV37SamlEndpointLocation = "" ;
   this.AV39SingleLogoutendpoint = "" ;
   this.ZV39SingleLogoutendpoint = "" ;
   this.OV39SingleLogoutendpoint = "" ;
   this.AV29KeyStPathCredential = "" ;
   this.ZV29KeyStPathCredential = "" ;
   this.OV29KeyStPathCredential = "" ;
   this.AV30KeyStPwdCredential = "" ;
   this.ZV30KeyStPwdCredential = "" ;
   this.OV30KeyStPwdCredential = "" ;
   this.AV22KeyAliasCredential = "" ;
   this.ZV22KeyAliasCredential = "" ;
   this.OV22KeyAliasCredential = "" ;
   this.AV25KeyStoreCredential = "" ;
   this.ZV25KeyStoreCredential = "" ;
   this.OV25KeyStoreCredential = "" ;
   this.AV26KeyStoreFilePathTrustCred = "" ;
   this.ZV26KeyStoreFilePathTrustCred = "" ;
   this.OV26KeyStoreFilePathTrustCred = "" ;
   this.AV27KeyStorePwdTrustCred = "" ;
   this.ZV27KeyStorePwdTrustCred = "" ;
   this.OV27KeyStorePwdTrustCred = "" ;
   this.AV23KeyAliasTrustCred = "" ;
   this.ZV23KeyAliasTrustCred = "" ;
   this.OV23KeyAliasTrustCred = "" ;
   this.AV28KeyStoreTrustCred = "" ;
   this.ZV28KeyStoreTrustCred = "" ;
   this.OV28KeyStoreTrustCred = "" ;
   this.AV44UserInfoResponseUserEmailTag = "" ;
   this.ZV44UserInfoResponseUserEmailTag = "" ;
   this.OV44UserInfoResponseUserEmailTag = "" ;
   this.AV46UserInfoResponseUserExternalIdTag = "" ;
   this.ZV46UserInfoResponseUserExternalIdTag = "" ;
   this.OV46UserInfoResponseUserExternalIdTag = "" ;
   this.AV53UserInfoResponseUserNameTag = "" ;
   this.ZV53UserInfoResponseUserNameTag = "" ;
   this.OV53UserInfoResponseUserNameTag = "" ;
   this.AV47UserInfoResponseUserFirstNameTag = "" ;
   this.ZV47UserInfoResponseUserFirstNameTag = "" ;
   this.OV47UserInfoResponseUserFirstNameTag = "" ;
   this.AV51UserInfoResponseUserLastNameGenAuto = false ;
   this.ZV51UserInfoResponseUserLastNameGenAuto = false ;
   this.OV51UserInfoResponseUserLastNameGenAuto = false ;
   this.AV52UserInfoResponseUserLastNameTag = "" ;
   this.ZV52UserInfoResponseUserLastNameTag = "" ;
   this.OV52UserInfoResponseUserLastNameTag = "" ;
   this.AV48UserInfoResponseUserGenderTag = "" ;
   this.ZV48UserInfoResponseUserGenderTag = "" ;
   this.OV48UserInfoResponseUserGenderTag = "" ;
   this.AV49UserInfoResponseUserGenderValues = "" ;
   this.ZV49UserInfoResponseUserGenderValues = "" ;
   this.OV49UserInfoResponseUserGenderValues = "" ;
   this.AV43UserInfoResponseUserBirthdayTag = "" ;
   this.ZV43UserInfoResponseUserBirthdayTag = "" ;
   this.OV43UserInfoResponseUserBirthdayTag = "" ;
   this.AV55UserInfoResponseUserURLImageTag = "" ;
   this.ZV55UserInfoResponseUserURLImageTag = "" ;
   this.OV55UserInfoResponseUserURLImageTag = "" ;
   this.AV56UserInfoResponseUserURLProfileTag = "" ;
   this.ZV56UserInfoResponseUserURLProfileTag = "" ;
   this.OV56UserInfoResponseUserURLProfileTag = "" ;
   this.AV50UserInfoResponseUserLanguageTag = "" ;
   this.ZV50UserInfoResponseUserLanguageTag = "" ;
   this.OV50UserInfoResponseUserLanguageTag = "" ;
   this.AV54UserInfoResponseUserTimeZoneTag = "" ;
   this.ZV54UserInfoResponseUserTimeZoneTag = "" ;
   this.OV54UserInfoResponseUserTimeZoneTag = "" ;
   this.AV42UserInfoResponseErrorDescriptionTag = "" ;
   this.ZV42UserInfoResponseErrorDescriptionTag = "" ;
   this.OV42UserInfoResponseErrorDescriptionTag = "" ;
   this.ZV11DynamicPropName = "" ;
   this.OV11DynamicPropName = "" ;
   this.ZV12DynamicPropTag = "" ;
   this.OV12DynamicPropTag = "" ;
   this.ZV72Delete_Action = "" ;
   this.OV72Delete_Action = "" ;
   this.AV33Name = "" ;
   this.AV16FunctionId = "" ;
   this.AV10Dsc = "" ;
   this.AV20IsEnable = false ;
   this.AV40SmallImageName = "" ;
   this.AV7BigImageName = "" ;
   this.AV19Impersonate = "" ;
   this.AV15ForceAuthn = false ;
   this.AV6AuthnContext = "" ;
   this.AV31LocalSiteURL = "" ;
   this.AV18IdentityProviderEntityID = "" ;
   this.AV38ServiceProviderEntityID = "" ;
   this.AV37SamlEndpointLocation = "" ;
   this.AV39SingleLogoutendpoint = "" ;
   this.AV29KeyStPathCredential = "" ;
   this.AV30KeyStPwdCredential = "" ;
   this.AV22KeyAliasCredential = "" ;
   this.AV25KeyStoreCredential = "" ;
   this.AV26KeyStoreFilePathTrustCred = "" ;
   this.AV27KeyStorePwdTrustCred = "" ;
   this.AV23KeyAliasTrustCred = "" ;
   this.AV28KeyStoreTrustCred = "" ;
   this.AV44UserInfoResponseUserEmailTag = "" ;
   this.AV46UserInfoResponseUserExternalIdTag = "" ;
   this.AV53UserInfoResponseUserNameTag = "" ;
   this.AV47UserInfoResponseUserFirstNameTag = "" ;
   this.AV51UserInfoResponseUserLastNameGenAuto = false ;
   this.AV52UserInfoResponseUserLastNameTag = "" ;
   this.AV48UserInfoResponseUserGenderTag = "" ;
   this.AV49UserInfoResponseUserGenderValues = "" ;
   this.AV43UserInfoResponseUserBirthdayTag = "" ;
   this.AV55UserInfoResponseUserURLImageTag = "" ;
   this.AV56UserInfoResponseUserURLProfileTag = "" ;
   this.AV50UserInfoResponseUserLanguageTag = "" ;
   this.AV54UserInfoResponseUserTimeZoneTag = "" ;
   this.AV42UserInfoResponseErrorDescriptionTag = "" ;
   this.AV41TypeId = "" ;
   this.AV11DynamicPropName = "" ;
   this.AV12DynamicPropTag = "" ;
   this.AV72Delete_Action = "" ;
   this.AV68CurrentPage_Grid = 0 ;
   this.AV78Pgmname = "" ;
   this.AV70I_LoadCount_Grid = 0 ;
   this.Gx_mode = "" ;
   this.AV45UserInfoResponseUserErrorDescriptionTag = "" ;
   this.Events = {"e122m2_client": ["'E_ADD'", true] ,"e182m2_client": ["'E_DELETE'", true] ,"e132m2_client": ["'E_CONFIRM'", true] ,"e212m2_client": ["ENTER", true] ,"e222m2_client": ["CANCEL", true] ,"e192m1_client": ["'E_CANCEL'", false] ,"e202m1_client": ["VUSERINFORESPONSEUSERLASTNAMEGENAUTO.CLICK", false] ,"e112m1_client": ["LINESEPARATORTITLE_ADVANCEDRESPONSECONFIGURATION.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'sPrefix'},{av:'AV68CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV78Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV70I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV45UserInfoResponseUserErrorDescriptionTag',fld:'vUSERINFORESPONSEUSERERRORDESCRIPTIONTAG',pic:'',hsh:true},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'AV68CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["START"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'AV78Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV33Name',fld:'vNAME',pic:''},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION","Class")',ctrl:'LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_ADVANCEDRESPONSECONFIGURATION","Class")',ctrl:'LINESEPARATORHEADER_ADVANCEDRESPONSECONFIGURATION',prop:'Class'},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("CONTENTTABLE","Class")',ctrl:'CONTENTTABLE',prop:'Class'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES',prop:'Class'},{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_ATTRIBUTES","Class")',ctrl:'ATTRIBUTESCONTAINERTABLE_ATTRIBUTES',prop:'Class'},{ctrl:'vFUNCTIONID'},{av:'AV16FunctionId',fld:'vFUNCTIONID',pic:''},{ctrl:'CONFIRM',prop:'Visible'},{ctrl:'CANCEL',prop:'Visible'},{ctrl:'ADD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vISENABLE","Enabled")',ctrl:'vISENABLE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDSC","Enabled")',ctrl:'vDSC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSMALLIMAGENAME","Enabled")',ctrl:'vSMALLIMAGENAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBIGIMAGENAME","Enabled")',ctrl:'vBIGIMAGENAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPERSONATE","Enabled")',ctrl:'vIMPERSONATE',prop:'Enabled'},{ctrl:'CONFIRM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vSERVICEPROVIDERENTITYID","Enabled")',ctrl:'vSERVICEPROVIDERENTITYID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIDENTITYPROVIDERENTITYID","Enabled")',ctrl:'vIDENTITYPROVIDERENTITYID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSAMLENDPOINTLOCATION","Enabled")',ctrl:'vSAMLENDPOINTLOCATION',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSINGLELOGOUTENDPOINT","Enabled")',ctrl:'vSINGLELOGOUTENDPOINT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLOCALSITEURL","Enabled")',ctrl:'vLOCALSITEURL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vKEYSTPATHCREDENTIAL","Enabled")',ctrl:'vKEYSTPATHCREDENTIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vKEYSTPWDCREDENTIAL","Enabled")',ctrl:'vKEYSTPWDCREDENTIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vKEYALIASCREDENTIAL","Enabled")',ctrl:'vKEYALIASCREDENTIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vKEYSTORECREDENTIAL","Enabled")',ctrl:'vKEYSTORECREDENTIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vKEYSTOREFILEPATHTRUSTCRED","Enabled")',ctrl:'vKEYSTOREFILEPATHTRUSTCRED',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vKEYSTOREPWDTRUSTCRED","Enabled")',ctrl:'vKEYSTOREPWDTRUSTCRED',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vKEYALIASTRUSTCRED","Enabled")',ctrl:'vKEYALIASTRUSTCRED',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vKEYSTORETRUSTCRED","Enabled")',ctrl:'vKEYSTORETRUSTCRED',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFORCEAUTHN","Enabled")',ctrl:'vFORCEAUTHN',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHNCONTEXT","Enabled")',ctrl:'vAUTHNCONTEXT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERBIRTHDAYTAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERBIRTHDAYTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSEREMAILTAG","Enabled")',ctrl:'vUSERINFORESPONSEUSEREMAILTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSEREXTERNALIDTAG","Enabled")',ctrl:'vUSERINFORESPONSEUSEREXTERNALIDTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERFIRSTNAMETAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERFIRSTNAMETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERGENDERTAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERGENDERTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERGENDERVALUES","Enabled")',ctrl:'vUSERINFORESPONSEUSERGENDERVALUES',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERLANGUAGETAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERLANGUAGETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERLASTNAMEGENAUTO","Enabled")',ctrl:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERLASTNAMETAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERLASTNAMETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERNAMETAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERNAMETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERTIMEZONETAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERTIMEZONETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERURLIMAGETAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERURLIMAGETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERURLPROFILETAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERURLPROFILETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEERRORDESCRIPTIONTAG","Enabled")',ctrl:'vUSERINFORESPONSEERRORDESCRIPTIONTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNAME","Enabled")',ctrl:'vNAME',prop:'Enabled'},{av:'AV33Name',fld:'vNAME',pic:''},{av:'AV10Dsc',fld:'vDSC',pic:''},{av:'AV40SmallImageName',fld:'vSMALLIMAGENAME',pic:''},{av:'AV7BigImageName',fld:'vBIGIMAGENAME',pic:''},{av:'AV19Impersonate',fld:'vIMPERSONATE',pic:''},{av:'AV38ServiceProviderEntityID',fld:'vSERVICEPROVIDERENTITYID',pic:''},{av:'AV18IdentityProviderEntityID',fld:'vIDENTITYPROVIDERENTITYID',pic:''},{av:'AV6AuthnContext',fld:'vAUTHNCONTEXT',pic:''},{av:'AV22KeyAliasCredential',fld:'vKEYALIASCREDENTIAL',pic:''},{av:'AV23KeyAliasTrustCred',fld:'vKEYALIASTRUSTCRED',pic:''},{av:'AV25KeyStoreCredential',fld:'vKEYSTORECREDENTIAL',pic:''},{av:'AV26KeyStoreFilePathTrustCred',fld:'vKEYSTOREFILEPATHTRUSTCRED',pic:''},{av:'AV27KeyStorePwdTrustCred',fld:'vKEYSTOREPWDTRUSTCRED',pic:''},{av:'AV28KeyStoreTrustCred',fld:'vKEYSTORETRUSTCRED',pic:''},{av:'AV29KeyStPathCredential',fld:'vKEYSTPATHCREDENTIAL',pic:''},{av:'AV30KeyStPwdCredential',fld:'vKEYSTPWDCREDENTIAL',pic:''},{av:'AV37SamlEndpointLocation',fld:'vSAMLENDPOINTLOCATION',pic:''},{av:'AV31LocalSiteURL',fld:'vLOCALSITEURL',pic:''},{av:'AV39SingleLogoutendpoint',fld:'vSINGLELOGOUTENDPOINT',pic:''},{av:'AV45UserInfoResponseUserErrorDescriptionTag',fld:'vUSERINFORESPONSEUSERERRORDESCRIPTIONTAG',pic:'',hsh:true},{av:'AV43UserInfoResponseUserBirthdayTag',fld:'vUSERINFORESPONSEUSERBIRTHDAYTAG',pic:''},{av:'AV44UserInfoResponseUserEmailTag',fld:'vUSERINFORESPONSEUSEREMAILTAG',pic:''},{av:'AV46UserInfoResponseUserExternalIdTag',fld:'vUSERINFORESPONSEUSEREXTERNALIDTAG',pic:''},{av:'AV47UserInfoResponseUserFirstNameTag',fld:'vUSERINFORESPONSEUSERFIRSTNAMETAG',pic:''},{av:'AV48UserInfoResponseUserGenderTag',fld:'vUSERINFORESPONSEUSERGENDERTAG',pic:''},{av:'AV49UserInfoResponseUserGenderValues',fld:'vUSERINFORESPONSEUSERGENDERVALUES',pic:''},{av:'AV50UserInfoResponseUserLanguageTag',fld:'vUSERINFORESPONSEUSERLANGUAGETAG',pic:''},{av:'AV52UserInfoResponseUserLastNameTag',fld:'vUSERINFORESPONSEUSERLASTNAMETAG',pic:''},{av:'AV53UserInfoResponseUserNameTag',fld:'vUSERINFORESPONSEUSERNAMETAG',pic:''},{av:'AV54UserInfoResponseUserTimeZoneTag',fld:'vUSERINFORESPONSEUSERTIMEZONETAG',pic:''},{av:'AV55UserInfoResponseUserURLImageTag',fld:'vUSERINFORESPONSEUSERURLIMAGETAG',pic:''},{av:'AV56UserInfoResponseUserURLProfileTag',fld:'vUSERINFORESPONSEUSERURLPROFILETAG',pic:''},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV78Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{ctrl:'GRID',prop:'Backcolorstyle'},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV70I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'AV78Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_GRID',prop:'Visible'},{av:'AV70I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV72Delete_Action',fld:'vDELETE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Tooltiptext")',ctrl:'vDELETE_ACTION',prop:'Tooltiptext'},{av:'AV11DynamicPropName',fld:'vDYNAMICPROPNAME',pic:''},{av:'AV12DynamicPropTag',fld:'vDYNAMICPROPTAG',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Visible")',ctrl:'vDELETE_ACTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPNAME","Enabled")',ctrl:'vDYNAMICPROPNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPTAG","Enabled")',ctrl:'vDYNAMICPROPTAG',prop:'Enabled'},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["'E_ADD'"] = [[{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'AV72Delete_Action',fld:'vDELETE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Visible")',ctrl:'vDELETE_ACTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPNAME","Enabled")',ctrl:'vDYNAMICPROPNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPNAME","Visible")',ctrl:'vDYNAMICPROPNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPTAG","Enabled")',ctrl:'vDYNAMICPROPTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPTAG","Visible")',ctrl:'vDYNAMICPROPTAG',prop:'Visible'},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'AV33Name',fld:'vNAME',pic:''},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Visible")',ctrl:'vDELETE_ACTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPNAME","Visible")',ctrl:'vDYNAMICPROPNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPTAG","Visible")',ctrl:'vDYNAMICPROPTAG',prop:'Visible'},{av:'AV11DynamicPropName',fld:'vDYNAMICPROPNAME',pic:''},{av:'AV12DynamicPropTag',fld:'vDYNAMICPROPTAG',pic:''},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["'E_CONFIRM'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'AV33Name',fld:'vNAME',pic:''},{av:'AV10Dsc',fld:'vDSC',pic:''},{av:'AV40SmallImageName',fld:'vSMALLIMAGENAME',pic:''},{av:'AV7BigImageName',fld:'vBIGIMAGENAME',pic:''},{av:'AV19Impersonate',fld:'vIMPERSONATE',pic:''},{av:'AV38ServiceProviderEntityID',fld:'vSERVICEPROVIDERENTITYID',pic:''},{av:'AV18IdentityProviderEntityID',fld:'vIDENTITYPROVIDERENTITYID',pic:''},{av:'AV6AuthnContext',fld:'vAUTHNCONTEXT',pic:''},{av:'AV22KeyAliasCredential',fld:'vKEYALIASCREDENTIAL',pic:''},{av:'AV23KeyAliasTrustCred',fld:'vKEYALIASTRUSTCRED',pic:''},{av:'AV25KeyStoreCredential',fld:'vKEYSTORECREDENTIAL',pic:''},{av:'AV26KeyStoreFilePathTrustCred',fld:'vKEYSTOREFILEPATHTRUSTCRED',pic:''},{av:'AV27KeyStorePwdTrustCred',fld:'vKEYSTOREPWDTRUSTCRED',pic:''},{av:'AV28KeyStoreTrustCred',fld:'vKEYSTORETRUSTCRED',pic:''},{av:'AV29KeyStPathCredential',fld:'vKEYSTPATHCREDENTIAL',pic:''},{av:'AV30KeyStPwdCredential',fld:'vKEYSTPWDCREDENTIAL',pic:''},{av:'AV37SamlEndpointLocation',fld:'vSAMLENDPOINTLOCATION',pic:''},{av:'AV39SingleLogoutendpoint',fld:'vSINGLELOGOUTENDPOINT',pic:''},{av:'AV31LocalSiteURL',fld:'vLOCALSITEURL',pic:''},{av:'AV45UserInfoResponseUserErrorDescriptionTag',fld:'vUSERINFORESPONSEUSERERRORDESCRIPTIONTAG',pic:'',hsh:true},{av:'AV43UserInfoResponseUserBirthdayTag',fld:'vUSERINFORESPONSEUSERBIRTHDAYTAG',pic:''},{av:'AV44UserInfoResponseUserEmailTag',fld:'vUSERINFORESPONSEUSEREMAILTAG',pic:''},{av:'AV46UserInfoResponseUserExternalIdTag',fld:'vUSERINFORESPONSEUSEREXTERNALIDTAG',pic:''},{av:'AV47UserInfoResponseUserFirstNameTag',fld:'vUSERINFORESPONSEUSERFIRSTNAMETAG',pic:''},{av:'AV48UserInfoResponseUserGenderTag',fld:'vUSERINFORESPONSEUSERGENDERTAG',pic:''},{av:'AV49UserInfoResponseUserGenderValues',fld:'vUSERINFORESPONSEUSERGENDERVALUES',pic:''},{av:'AV50UserInfoResponseUserLanguageTag',fld:'vUSERINFORESPONSEUSERLANGUAGETAG',pic:''},{av:'AV52UserInfoResponseUserLastNameTag',fld:'vUSERINFORESPONSEUSERLASTNAMETAG',pic:''},{av:'AV53UserInfoResponseUserNameTag',fld:'vUSERINFORESPONSEUSERNAMETAG',pic:''},{av:'AV54UserInfoResponseUserTimeZoneTag',fld:'vUSERINFORESPONSEUSERTIMEZONETAG',pic:''},{av:'AV55UserInfoResponseUserURLImageTag',fld:'vUSERINFORESPONSEUSERURLIMAGETAG',pic:''},{av:'AV56UserInfoResponseUserURLProfileTag',fld:'vUSERINFORESPONSEUSERURLPROFILETAG',pic:''},{av:'AV11DynamicPropName',fld:'vDYNAMICPROPNAME',grid:283,pic:''},{av:'GRID_nFirstRecordOnPage'},{av:'nRC_GXsfl_283',ctrl:'GRID',grid:283,prop:'GridRC'},{av:'AV12DynamicPropTag',fld:'vDYNAMICPROPTAG',grid:283,pic:''},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["'E_CANCEL'"] = [[{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["VUSERINFORESPONSEUSERLASTNAMEGENAUTO.CLICK"] = [[{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERLASTNAMETAG","Visible")',ctrl:'vUSERINFORESPONSEUSERLASTNAMETAG',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBUSERLASTNAMEHELP","Caption")',ctrl:'TBUSERLASTNAMEHELP',prop:'Caption'},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["LINESEPARATORTITLE_ADVANCEDRESPONSECONFIGURATION.CLICK"] = [[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION',prop:'Visible'},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION","Class")',ctrl:'LINESEPARATORCONTENT_ADVANCEDRESPONSECONFIGURATION',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_ADVANCEDRESPONSECONFIGURATION","Class")',ctrl:'LINESEPARATORHEADER_ADVANCEDRESPONSECONFIGURATION',prop:'Class'},{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["VALIDV_FUNCTIONID"] = [[{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'AV20IsEnable',fld:'vISENABLE',pic:''},{av:'AV15ForceAuthn',fld:'vFORCEAUTHN',pic:''},{av:'AV51UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.setVCMap("AV68CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV78Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV70I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV45UserInfoResponseUserErrorDescriptionTag", "vUSERINFORESPONSEUSERERRORDESCRIPTIONTAG", 0, "char", 60, 0);
   this.setVCMap("AV41TypeId", "vTYPEID", 0, "char", 30, 0);
   this.setVCMap("AV68CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV78Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV70I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV68CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV78Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV70I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV68CurrentPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV78Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV70I_LoadCount_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"Gx_mode"});
   GridContainer.addRefreshingVar({rfrVar:"AV45UserInfoResponseUserErrorDescriptionTag"});
   GridContainer.addRefreshingParm({rfrVar:"AV68CurrentPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV78Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV70I_LoadCount_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"Gx_mode"});
   GridContainer.addRefreshingParm(this.GXValidFnc[37]);
   GridContainer.addRefreshingParm(this.GXValidFnc[67]);
   GridContainer.addRefreshingParm(this.GXValidFnc[212]);
   GridContainer.addRefreshingParm({rfrVar:"AV45UserInfoResponseUserErrorDescriptionTag"});
   this.Initialize( );
});
