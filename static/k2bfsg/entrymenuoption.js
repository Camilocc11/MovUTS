gx.evt.autoSkip = false;
gx.define('k2bfsg.entrymenuoption', false, function () {
   this.ServerClass =  "k2bfsg.entrymenuoption" ;
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
      this.AV8ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.AV19LoadPermissions=gx.fn.getControlValue("vLOADPERMISSIONS") ;
      this.AV22MenuId=gx.fn.getIntegerValue("vMENUID",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV24MenuOptionId=gx.fn.getIntegerValue("vMENUOPTIONID",'.') ;
      this.AV18IsOk=gx.fn.getControlValue("vISOK") ;
      this.AV27Message=gx.fn.getControlValue("vMESSAGE") ;
   };
   this.Validv_Optiontype=function()
   {
      return this.validCliEvt("Validv_Optiontype", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vOPTIONTYPE");
         this.AnyError  = 0;
         if ( ! ( ( this.AV31OptionType == "S" ) || ( this.AV31OptionType == "M" ) ) )
         {
            try {
               gxballoon.setError("Campo Option Type fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Validv_Imageurl=function()
   {
      return this.validCliEvt("Validv_Imageurl", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vIMAGEURL");
         this.AnyError  = 0;
         gxballoon.setAsFormatError();
         if ( ! ( gx.util.regExp.isMatch(this.AV17ImageUrl, "^((?:[a-zA-Z]+:(//)?)?((?:(?:[a-zA-Z]([a-zA-Z0-9$\\-_@&+!*\"'(),]|%[0-9a-fA-F]{2})*)(?:\\.(?:([a-zA-Z0-9$\\-_@&+!*\"'(),]|%[0-9a-fA-F]{2})*))*)|(?:(\\d{1,3}\\.){3}\\d{1,3}))(?::\\d+)?(?:/([a-zA-Z0-9$\\-_@.&+!*\"'(),=;: ]|%[0-9a-fA-F]{2})+)*/?(?:[#?](?:[a-zA-Z0-9$\\-_@.&+!*\"'(),=;: /]|%[0-9a-fA-F]{2})*)?)?\\s*$") ) )
         {
            try {
               gxballoon.setError("El valor de Image Url no coincide con el patrón especificado");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}]);
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
   };
   this.e133b2_client=function()
   {
      return this.executeServerEvent("VOPTIONTYPE.CLICK", true, null, false, true);
   };
   this.e143b2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153b2_client=function()
   {
      return this.executeServerEvent("'E_CANCEL'", false, null, false, false);
   };
   this.e163b2_client=function()
   {
      return this.executeServerEvent("VRELRESID.ISVALID", true, null, false, true);
   };
   this.e183b2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,125,127,128,129];
   this.GXLastCtrlId =129;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 130, 21, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[18]={ id: 18, fld:"TABLE_CONTAINER_APPLICATIONNAME",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id:21 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAPPLICATIONNAME",gxz:"ZV11ApplicationName",gxold:"OV11ApplicationName",gxvar:"AV11ApplicationName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV11ApplicationName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV11ApplicationName=Value},v2c:function(){gx.fn.setControlValue("vAPPLICATIONNAME",gx.O.AV11ApplicationName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV11ApplicationName=this.val()},val:function(){return gx.fn.getControlValue("vAPPLICATIONNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"TABLE_CONTAINER_MENUNAME",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id:26 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMENUNAME",gxz:"ZV23MenuName",gxold:"OV23MenuName",gxvar:"AV23MenuName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV23MenuName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV23MenuName=Value},v2c:function(){gx.fn.setControlValue("vMENUNAME",gx.O.AV23MenuName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV23MenuName=this.val()},val:function(){return gx.fn.getControlValue("vMENUNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"OPTIONS",grid:0};
   GXValidFnc[30]={ id: 30, fld:"MAINGROUPRESPONSIVETABLE_OPTIONS",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"TABLE_CONTAINER_OPTIONNAME",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id:36 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOPTIONNAME",gxz:"ZV30OptionName",gxold:"OV30OptionName",gxvar:"AV30OptionName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV30OptionName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV30OptionName=Value},v2c:function(){gx.fn.setControlValue("vOPTIONNAME",gx.O.AV30OptionName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV30OptionName=this.val()},val:function(){return gx.fn.getControlValue("vOPTIONNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"TABLE_CONTAINER_OPTIONDESCRIPTION",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id:41 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOPTIONDESCRIPTION",gxz:"ZV28OptionDescription",gxold:"OV28OptionDescription",gxvar:"AV28OptionDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV28OptionDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV28OptionDescription=Value},v2c:function(){gx.fn.setControlValue("vOPTIONDESCRIPTION",gx.O.AV28OptionDescription,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV28OptionDescription=this.val()},val:function(){return gx.fn.getControlValue("vOPTIONDESCRIPTION")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"TABLE_CONTAINER_OPTIONTYPE",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id:47 ,lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Optiontype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOPTIONTYPE",gxz:"ZV31OptionType",gxold:"OV31OptionType",gxvar:"AV31OptionType",ucs:[],op:[47],ip:[47],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV31OptionType=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV31OptionType=Value},v2c:function(){gx.fn.setComboBoxValue("vOPTIONTYPE",gx.O.AV31OptionType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV31OptionType=this.val()},val:function(){return gx.fn.getControlValue("vOPTIONTYPE")},nac:gx.falseFn,evt:"e133b2_client"};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"TABLE_CONTAINER_OPTIONGUID",grid:0};
   GXValidFnc[51]={ id: 51, fld:"TEXTBLOCK_VAR_OPTIONGUID", format:0,grid:0};
   GXValidFnc[52]={ id: 52, fld:"TABLE_CONTAINER_OPTIONGUIDFIELDCONTAINER",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOPTIONGUID",gxz:"ZV29OptionGUID",gxold:"OV29OptionGUID",gxvar:"AV29OptionGUID",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV29OptionGUID=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV29OptionGUID=Value},v2c:function(){gx.fn.setControlValue("vOPTIONGUID",gx.O.AV29OptionGUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV29OptionGUID=this.val()},val:function(){return gx.fn.getControlValue("vOPTIONGUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[55]={ id: 55, fld:"OPTIONGUID_VAR_CONTEXTHELPIMAGE",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"TABLE_CONTAINER_MENUSID",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id:61 ,lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMENUSID",gxz:"ZV26MenusId",gxold:"OV26MenusId",gxvar:"AV26MenusId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV26MenusId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV26MenusId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vMENUSID",gx.O.AV26MenusId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV26MenusId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMENUSID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"TABLE_CONTAINER_RELRESID",grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id:67 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e163b2_client',evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRELRESID",gxz:"ZV34RelResId",gxold:"OV34RelResId",gxvar:"AV34RelResId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV34RelResId=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV34RelResId=Value},v2c:function(){gx.fn.setComboBoxValue("vRELRESID",gx.O.AV34RelResId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV34RelResId=this.val()},val:function(){return gx.fn.getControlValue("vRELRESID")},nac:gx.falseFn};
   this.declareDomainHdlr( 67 , function() {
   });
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id: 70, fld:"TABLE_CONTAINER_RESOURCE",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id:73 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRESOURCE",gxz:"ZV35Resource",gxold:"OV35Resource",gxvar:"AV35Resource",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV35Resource=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV35Resource=Value},v2c:function(){gx.fn.setControlValue("vRESOURCE",gx.O.AV35Resource,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV35Resource=this.val()},val:function(){return gx.fn.getControlValue("vRESOURCE")},nac:gx.falseFn};
   this.declareDomainHdlr( 73 , function() {
   });
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"TABLE_CONTAINER_RESOURCEPARAMETERS",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id:78 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRESOURCEPARAMETERS",gxz:"ZV36ResourceParameters",gxold:"OV36ResourceParameters",gxvar:"AV36ResourceParameters",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV36ResourceParameters=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV36ResourceParameters=Value},v2c:function(){gx.fn.setControlValue("vRESOURCEPARAMETERS",gx.O.AV36ResourceParameters,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV36ResourceParameters=this.val()},val:function(){return gx.fn.getControlValue("vRESOURCEPARAMETERS")},nac:gx.falseFn};
   this.declareDomainHdlr( 78 , function() {
   });
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id: 81, fld:"TABLE_CONTAINER_IMAGEURL",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id:84 ,lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Imageurl,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vIMAGEURL",gxz:"ZV17ImageUrl",gxold:"OV17ImageUrl",gxvar:"AV17ImageUrl",ucs:[],op:[],ip:[84],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV17ImageUrl=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17ImageUrl=Value},v2c:function(){gx.fn.setControlValue("vIMAGEURL",gx.O.AV17ImageUrl,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV17ImageUrl=this.val()},val:function(){return gx.fn.getControlValue("vIMAGEURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 84 , function() {
   });
   GXValidFnc[85]={ id: 85, fld:"",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"TABLE_CONTAINER_IMAGECLASS",grid:0};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id:90 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vIMAGECLASS",gxz:"ZV16ImageClass",gxold:"OV16ImageClass",gxvar:"AV16ImageClass",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV16ImageClass=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV16ImageClass=Value},v2c:function(){gx.fn.setControlValue("vIMAGECLASS",gx.O.AV16ImageClass,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV16ImageClass=this.val()},val:function(){return gx.fn.getControlValue("vIMAGECLASS")},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[91]={ id: 91, fld:"",grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id: 93, fld:"RESPONSIVE",grid:0};
   GXValidFnc[94]={ id: 94, fld:"MAINGROUPRESPONSIVETABLE_RESPONSIVE",grid:0};
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id: 96, fld:"",grid:0};
   GXValidFnc[97]={ id: 97, fld:"TABLE_CONTAINER_SHOWINEXTRASMALL",grid:0};
   GXValidFnc[98]={ id: 98, fld:"",grid:0};
   GXValidFnc[99]={ id: 99, fld:"",grid:0};
   GXValidFnc[100]={ id:100 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSHOWINEXTRASMALL",gxz:"ZV37ShowInExtraSmall",gxold:"OV37ShowInExtraSmall",gxvar:"AV37ShowInExtraSmall",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV37ShowInExtraSmall=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV37ShowInExtraSmall=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vSHOWINEXTRASMALL",gx.O.AV37ShowInExtraSmall,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV37ShowInExtraSmall=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vSHOWINEXTRASMALL")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id: 102, fld:"TABLE_CONTAINER_SHOWINSMALL",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[105]={ id:105 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSHOWINSMALL",gxz:"ZV40ShowInSmall",gxold:"OV40ShowInSmall",gxvar:"AV40ShowInSmall",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV40ShowInSmall=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV40ShowInSmall=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vSHOWINSMALL",gx.O.AV40ShowInSmall,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV40ShowInSmall=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vSHOWINSMALL")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"",grid:0};
   GXValidFnc[108]={ id: 108, fld:"TABLE_CONTAINER_SHOWINMEDIUM",grid:0};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id: 110, fld:"",grid:0};
   GXValidFnc[111]={ id:111 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSHOWINMEDIUM",gxz:"ZV39ShowInMedium",gxold:"OV39ShowInMedium",gxvar:"AV39ShowInMedium",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV39ShowInMedium=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39ShowInMedium=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vSHOWINMEDIUM",gx.O.AV39ShowInMedium,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV39ShowInMedium=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vSHOWINMEDIUM")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 111 , function() {
   });
   GXValidFnc[112]={ id: 112, fld:"",grid:0};
   GXValidFnc[113]={ id: 113, fld:"TABLE_CONTAINER_SHOWINLARGE",grid:0};
   GXValidFnc[114]={ id: 114, fld:"",grid:0};
   GXValidFnc[115]={ id: 115, fld:"",grid:0};
   GXValidFnc[116]={ id:116 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSHOWINLARGE",gxz:"ZV38ShowInLarge",gxold:"OV38ShowInLarge",gxvar:"AV38ShowInLarge",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV38ShowInLarge=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV38ShowInLarge=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vSHOWINLARGE",gx.O.AV38ShowInLarge,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV38ShowInLarge=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vSHOWINLARGE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 116 , function() {
   });
   GXValidFnc[117]={ id: 117, fld:"",grid:0};
   GXValidFnc[118]={ id: 118, fld:"",grid:0};
   GXValidFnc[119]={ id: 119, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[120]={ id: 120, fld:"",grid:0};
   GXValidFnc[121]={ id: 121, fld:"",grid:0};
   GXValidFnc[122]={ id: 122, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[125]={ id: 125, fld:"CONFIRM",grid:0,evt:"e143b2_client",std:"ENTER"};
   GXValidFnc[127]={ id: 127, fld:"CANCEL",grid:0,evt:"e153b2_client"};
   GXValidFnc[128]={ id: 128, fld:"",grid:0};
   GXValidFnc[129]={ id: 129, fld:"",grid:0};
   this.AV11ApplicationName = "" ;
   this.ZV11ApplicationName = "" ;
   this.OV11ApplicationName = "" ;
   this.AV23MenuName = "" ;
   this.ZV23MenuName = "" ;
   this.OV23MenuName = "" ;
   this.AV30OptionName = "" ;
   this.ZV30OptionName = "" ;
   this.OV30OptionName = "" ;
   this.AV28OptionDescription = "" ;
   this.ZV28OptionDescription = "" ;
   this.OV28OptionDescription = "" ;
   this.AV31OptionType = "" ;
   this.ZV31OptionType = "" ;
   this.OV31OptionType = "" ;
   this.AV29OptionGUID = "" ;
   this.ZV29OptionGUID = "" ;
   this.OV29OptionGUID = "" ;
   this.AV26MenusId = 0 ;
   this.ZV26MenusId = 0 ;
   this.OV26MenusId = 0 ;
   this.AV34RelResId = "" ;
   this.ZV34RelResId = "" ;
   this.OV34RelResId = "" ;
   this.AV35Resource = "" ;
   this.ZV35Resource = "" ;
   this.OV35Resource = "" ;
   this.AV36ResourceParameters = "" ;
   this.ZV36ResourceParameters = "" ;
   this.OV36ResourceParameters = "" ;
   this.AV17ImageUrl = "" ;
   this.ZV17ImageUrl = "" ;
   this.OV17ImageUrl = "" ;
   this.AV16ImageClass = "" ;
   this.ZV16ImageClass = "" ;
   this.OV16ImageClass = "" ;
   this.AV37ShowInExtraSmall = false ;
   this.ZV37ShowInExtraSmall = false ;
   this.OV37ShowInExtraSmall = false ;
   this.AV40ShowInSmall = false ;
   this.ZV40ShowInSmall = false ;
   this.OV40ShowInSmall = false ;
   this.AV39ShowInMedium = false ;
   this.ZV39ShowInMedium = false ;
   this.OV39ShowInMedium = false ;
   this.AV38ShowInLarge = false ;
   this.ZV38ShowInLarge = false ;
   this.OV38ShowInLarge = false ;
   this.AV11ApplicationName = "" ;
   this.AV23MenuName = "" ;
   this.AV30OptionName = "" ;
   this.AV28OptionDescription = "" ;
   this.AV31OptionType = "" ;
   this.AV29OptionGUID = "" ;
   this.AV26MenusId = 0 ;
   this.AV34RelResId = "" ;
   this.AV35Resource = "" ;
   this.AV36ResourceParameters = "" ;
   this.AV17ImageUrl = "" ;
   this.AV16ImageClass = "" ;
   this.AV37ShowInExtraSmall = false ;
   this.AV40ShowInSmall = false ;
   this.AV39ShowInMedium = false ;
   this.AV38ShowInLarge = false ;
   this.AV8ApplicationId = 0 ;
   this.AV22MenuId = 0 ;
   this.AV24MenuOptionId = 0 ;
   this.AV19LoadPermissions = false ;
   this.Gx_mode = "" ;
   this.AV18IsOk = false ;
   this.AV27Message = {Id:"",Type:0,Description:""} ;
   this.Events = {"e133b2_client": ["VOPTIONTYPE.CLICK", true] ,"e143b2_client": ["ENTER", true] ,"e153b2_client": ["'E_CANCEL'", true] ,"e163b2_client": ["VRELRESID.ISVALID", true] ,"e183b2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV8ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV22MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV24MenuOptionId',fld:'vMENUOPTIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}],[{av:'gx.fn.getCtrlProperty("OPTIONGUID_VAR_CONTEXTHELPIMAGE","Tooltiptext")',ctrl:'OPTIONGUID_VAR_CONTEXTHELPIMAGE',prop:'Tooltiptext'},{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV8ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV22MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV24MenuOptionId',fld:'vMENUOPTIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'vOPTIONTYPE'},{av:'AV31OptionType',fld:'vOPTIONTYPE',pic:''},{av:'AV19LoadPermissions',fld:'vLOADPERMISSIONS',pic:''},{ctrl:'vRELRESID'},{av:'AV34RelResId',fld:'vRELRESID',pic:''},{ctrl:'vMENUSID'},{av:'AV26MenusId',fld:'vMENUSID',pic:'ZZZZZZZZZZZ9'},{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}],[{av:'AV11ApplicationName',fld:'vAPPLICATIONNAME',pic:''},{av:'AV23MenuName',fld:'vMENUNAME',pic:''},{av:'AV24MenuOptionId',fld:'vMENUOPTIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV30OptionName',fld:'vOPTIONNAME',pic:''},{av:'AV28OptionDescription',fld:'vOPTIONDESCRIPTION',pic:''},{av:'AV29OptionGUID',fld:'vOPTIONGUID',pic:''},{ctrl:'vOPTIONTYPE'},{av:'AV31OptionType',fld:'vOPTIONTYPE',pic:''},{ctrl:'vMENUSID'},{av:'AV26MenusId',fld:'vMENUSID',pic:'ZZZZZZZZZZZ9'},{ctrl:'vRELRESID'},{av:'AV34RelResId',fld:'vRELRESID',pic:''},{av:'AV35Resource',fld:'vRESOURCE',pic:''},{av:'AV36ResourceParameters',fld:'vRESOURCEPARAMETERS',pic:''},{av:'gx.fn.getCtrlProperty("vOPTIONGUID","Enabled")',ctrl:'vOPTIONGUID',prop:'Enabled'},{av:'AV16ImageClass',fld:'vIMAGECLASS',pic:''},{av:'AV17ImageUrl',fld:'vIMAGEURL',pic:''},{ctrl:'CONFIRM',prop:'Visible'},{ctrl:'CANCEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vOPTIONNAME","Enabled")',ctrl:'vOPTIONNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOPTIONDESCRIPTION","Enabled")',ctrl:'vOPTIONDESCRIPTION',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vRESOURCE","Enabled")',ctrl:'vRESOURCE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vRESOURCEPARAMETERS","Enabled")',ctrl:'vRESOURCEPARAMETERS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMAGECLASS","Enabled")',ctrl:'vIMAGECLASS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMAGEURL","Enabled")',ctrl:'vIMAGEURL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSHOWINEXTRASMALL","Enabled")',ctrl:'vSHOWINEXTRASMALL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSHOWINSMALL","Enabled")',ctrl:'vSHOWINSMALL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSHOWINMEDIUM","Enabled")',ctrl:'vSHOWINMEDIUM',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSHOWINLARGE","Enabled")',ctrl:'vSHOWINLARGE',prop:'Enabled'},{ctrl:'CONFIRM',prop:'Caption'},{av:'AV19LoadPermissions',fld:'vLOADPERMISSIONS',pic:''},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vRESOURCE","Visible")',ctrl:'vRESOURCE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vRESOURCEPARAMETERS","Visible")',ctrl:'vRESOURCEPARAMETERS',prop:'Visible'},{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}]];
   this.EvtParms["VOPTIONTYPE.CLICK"] = [[{ctrl:'vRELRESID'},{av:'AV34RelResId',fld:'vRELRESID',pic:''},{av:'AV8ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'vOPTIONTYPE'},{av:'AV31OptionType',fld:'vOPTIONTYPE',pic:''},{av:'AV19LoadPermissions',fld:'vLOADPERMISSIONS',pic:''},{av:'AV22MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'vMENUSID'},{av:'AV26MenusId',fld:'vMENUSID',pic:'ZZZZZZZZZZZ9'},{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}],[{av:'AV19LoadPermissions',fld:'vLOADPERMISSIONS',pic:''},{ctrl:'vRELRESID'},{av:'AV34RelResId',fld:'vRELRESID',pic:''},{ctrl:'vMENUSID'},{av:'AV26MenusId',fld:'vMENUSID',pic:'ZZZZZZZZZZZ9'},{av:'gx.fn.getCtrlProperty("vRESOURCE","Visible")',ctrl:'vRESOURCE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vRESOURCEPARAMETERS","Visible")',ctrl:'vRESOURCEPARAMETERS',prop:'Visible'},{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}]];
   this.EvtParms["ENTER"] = [[{av:'AV8ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV30OptionName',fld:'vOPTIONNAME',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV22MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV24MenuOptionId',fld:'vMENUOPTIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV18IsOk',fld:'vISOK',pic:''},{av:'AV27Message',fld:'vMESSAGE',pic:''},{av:'AV29OptionGUID',fld:'vOPTIONGUID',pic:''},{av:'AV28OptionDescription',fld:'vOPTIONDESCRIPTION',pic:''},{ctrl:'vOPTIONTYPE'},{av:'AV31OptionType',fld:'vOPTIONTYPE',pic:''},{ctrl:'vMENUSID'},{av:'AV26MenusId',fld:'vMENUSID',pic:'ZZZZZZZZZZZ9'},{ctrl:'vRELRESID'},{av:'AV34RelResId',fld:'vRELRESID',pic:''},{av:'AV35Resource',fld:'vRESOURCE',pic:''},{av:'AV36ResourceParameters',fld:'vRESOURCEPARAMETERS',pic:''},{av:'AV17ImageUrl',fld:'vIMAGEURL',pic:''},{av:'AV16ImageClass',fld:'vIMAGECLASS',pic:''},{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}],[{av:'AV18IsOk',fld:'vISOK',pic:''},{av:'AV27Message',fld:'vMESSAGE',pic:''},{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}]];
   this.EvtParms["'E_CANCEL'"] = [[{av:'AV24MenuOptionId',fld:'vMENUOPTIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV22MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV8ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}],[{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}]];
   this.EvtParms["VRELRESID.ISVALID"] = [[{av:'AV8ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'vRELRESID'},{av:'AV34RelResId',fld:'vRELRESID',pic:''},{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}],[{av:'AV35Resource',fld:'vRESOURCE',pic:''},{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}]];
   this.EvtParms["VALIDV_OPTIONTYPE"] = [[{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}],[{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}]];
   this.EvtParms["VALIDV_IMAGEURL"] = [[{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}],[{av:'AV37ShowInExtraSmall',fld:'vSHOWINEXTRASMALL',pic:''},{av:'AV40ShowInSmall',fld:'vSHOWINSMALL',pic:''},{av:'AV39ShowInMedium',fld:'vSHOWINMEDIUM',pic:''},{av:'AV38ShowInLarge',fld:'vSHOWINLARGE',pic:''}]];
   this.EnterCtrl = ["CONFIRM"];
   this.setVCMap("AV8ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV19LoadPermissions", "vLOADPERMISSIONS", 0, "boolean", 4, 0);
   this.setVCMap("AV22MenuId", "vMENUID", 0, "int", 12, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV24MenuOptionId", "vMENUOPTIONID", 0, "int", 12, 0);
   this.setVCMap("AV18IsOk", "vISOK", 0, "boolean", 4, 0);
   this.setVCMap("AV27Message", "vMESSAGE", 0, "GeneXus\Common\Messages.Message", 0, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.entrymenuoption);});
