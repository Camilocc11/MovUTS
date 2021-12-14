gx.evt.autoSkip = false;
gx.define('k2bfsg.entryapplicationpermission', false, function () {
   this.ServerClass =  "k2bfsg.entryapplicationpermission" ;
   this.PackageName =  "com.movuts" ;
   this.setObjectType("web");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV7ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.AV14Id=gx.fn.getControlValue("vID") ;
      this.AV15IsOk=gx.fn.getControlValue("vISOK") ;
      this.AV17Message=gx.fn.getControlValue("vMESSAGE") ;
      this.AV7ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.AV14Id=gx.fn.getControlValue("vID") ;
   };
   this.Validv_Accesstype=function()
   {
      return this.validCliEvt("Validv_Accesstype", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vACCESSTYPE");
         this.AnyError  = 0;
         if ( ! ( ( this.AV23AccessType == "A" ) || ( this.AV23AccessType == "R" ) ) )
         {
            try {
               gxballoon.setError("Campo Access Type fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV16IsParent',fld:'vISPARENT',pic:''}]);
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
   this.e162y1_client=function()
   {
      this.clearMessages();
      this.s152_client();
      this.refreshOutputs([{av:'AV14Id',fld:'vID',pic:''},{av:'AV7ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV16IsParent',fld:'vISPARENT',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s152_client=function()
   {
      this.call("com.movuts.k2bfsg.entryapplicationpermission", ["UPD", this.AV7ApplicationId, this.AV14Id]);
   };
   this.e172y1_client=function()
   {
      this.clearMessages();
      this.s162_client();
      this.refreshOutputs([{av:'AV14Id',fld:'vID',pic:''},{av:'AV7ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV16IsParent',fld:'vISPARENT',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s162_client=function()
   {
      this.call("com.movuts.k2bfsg.entryapplicationpermission", ["DLT", this.AV7ApplicationId, this.AV14Id]);
   };
   this.e132y2_client=function()
   {
      return this.executeServerEvent("'E_CONFIRM'", false, null, false, false);
   };
   this.e142y2_client=function()
   {
      return this.executeServerEvent("'E_CANCEL'", false, null, false, false);
   };
   this.e182y2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e192y2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,29,30,31,32,33,34,35,36,37,40,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,81,83,84,85,86,87,89,90];
   this.GXLastCtrlId =90;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 91, 48, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[22]={ id: 22, fld:"RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES1",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"TITLECELL_ATTRIBUTES_ATTRIBUTES1",grid:0};
   GXValidFnc[25]={ id: 25, fld:"TITLECONTAINERTABLE_ATTRIBUTES1",grid:0};
   GXValidFnc[28]={ id: 28, fld:"TEXTBLOCK_ATTRIBUTES_ATTRIBUTES1", format:0,grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES1",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS2",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"ACTIONSCONTAINERTABLERIGHT_ACTIONS2",grid:0};
   GXValidFnc[40]={ id: 40, fld:"UPDATE",grid:0,evt:"e162y1_client"};
   GXValidFnc[42]={ id: 42, fld:"DELETE",grid:0,evt:"e172y1_client"};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"TABLE_CONTAINER_GUID",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGUID",gxz:"ZV12GUID",gxold:"OV12GUID",gxvar:"AV12GUID",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12GUID=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12GUID=Value},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV12GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV12GUID=this.val()},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"TABLE_CONTAINER_NAME",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV21Name",gxold:"OV21Name",gxvar:"AV21Name",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV21Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV21Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV21Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV21Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"TABLE_CONTAINER_DSC",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id:60 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",gxz:"ZV22Dsc",gxold:"OV22Dsc",gxvar:"AV22Dsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV22Dsc=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV22Dsc=Value},v2c:function(){gx.fn.setControlValue("vDSC",gx.O.AV22Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV22Dsc=this.val()},val:function(){return gx.fn.getControlValue("vDSC")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"TABLE_CONTAINER_ACCESSTYPE",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Accesstype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vACCESSTYPE",gxz:"ZV23AccessType",gxold:"OV23AccessType",gxvar:"AV23AccessType",ucs:[],op:[66],ip:[66],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV23AccessType=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV23AccessType=Value},v2c:function(){gx.fn.setComboBoxValue("vACCESSTYPE",gx.O.AV23AccessType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV23AccessType=this.val()},val:function(){return gx.fn.getControlValue("vACCESSTYPE")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"TABLE_CONTAINER_ISPARENT",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISPARENT",gxz:"ZV16IsParent",gxold:"OV16IsParent",gxvar:"AV16IsParent",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV16IsParent=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV16IsParent=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISPARENT",gx.O.AV16IsParent,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV16IsParent=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISPARENT")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS1",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id: 78, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS1",grid:0};
   GXValidFnc[81]={ id: 81, fld:"CONFIRM",grid:0,evt:"e132y2_client"};
   GXValidFnc[83]={ id: 83, fld:"CANCEL",grid:0,evt:"e142y2_client"};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"COLUMNCONTAINERTABLE_COLUMN1",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   this.AV12GUID = "" ;
   this.ZV12GUID = "" ;
   this.OV12GUID = "" ;
   this.AV21Name = "" ;
   this.ZV21Name = "" ;
   this.OV21Name = "" ;
   this.AV22Dsc = "" ;
   this.ZV22Dsc = "" ;
   this.OV22Dsc = "" ;
   this.AV23AccessType = "" ;
   this.ZV23AccessType = "" ;
   this.OV23AccessType = "" ;
   this.AV16IsParent = false ;
   this.ZV16IsParent = false ;
   this.OV16IsParent = false ;
   this.AV12GUID = "" ;
   this.AV21Name = "" ;
   this.AV22Dsc = "" ;
   this.AV23AccessType = "" ;
   this.AV16IsParent = false ;
   this.AV7ApplicationId = 0 ;
   this.AV14Id = "" ;
   this.Gx_mode = "" ;
   this.AV15IsOk = false ;
   this.AV17Message = {Id:"",Type:0,Description:""} ;
   this.Events = {"e132y2_client": ["'E_CONFIRM'", true] ,"e142y2_client": ["'E_CANCEL'", true] ,"e182y2_client": ["ENTER", true] ,"e192y2_client": ["CANCEL", true] ,"e162y1_client": ["'E_UPDATE'", false] ,"e172y1_client": ["'E_DELETE'", false]};
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV12GUID',fld:'vGUID',pic:''},{av:'AV16IsParent',fld:'vISPARENT',pic:''}],[{av:'gx.fn.getCtrlProperty("UPDATE","Tooltiptext")',ctrl:'UPDATE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("DELETE","Tooltiptext")',ctrl:'DELETE',prop:'Tooltiptext'},{av:'AV16IsParent',fld:'vISPARENT',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV7ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV14Id',fld:'vID',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV16IsParent',fld:'vISPARENT',pic:''}],[{av:'gx.fn.getCtrlProperty("vISPARENT","Enabled")',ctrl:'vISPARENT',prop:'Enabled'},{av:'AV12GUID',fld:'vGUID',pic:''},{av:'AV21Name',fld:'vNAME',pic:''},{av:'AV22Dsc',fld:'vDSC',pic:''},{ctrl:'vACCESSTYPE'},{av:'AV23AccessType',fld:'vACCESSTYPE',pic:''},{ctrl:'CONFIRM',prop:'Visible'},{ctrl:'CONFIRM',prop:'Enabled'},{av:'AV14Id',fld:'vID',pic:''},{av:'AV7ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{ctrl:'CHILDREN'},{av:'gx.fn.getCtrlProperty("vNAME","Enabled")',ctrl:'vNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDSC","Enabled")',ctrl:'vDSC',prop:'Enabled'},{av:'AV16IsParent',fld:'vISPARENT',pic:''}]];
   this.EvtParms["'E_CONFIRM'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV7ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV14Id',fld:'vID',pic:''},{av:'AV21Name',fld:'vNAME',pic:''},{av:'AV22Dsc',fld:'vDSC',pic:''},{ctrl:'vACCESSTYPE'},{av:'AV23AccessType',fld:'vACCESSTYPE',pic:''},{av:'AV12GUID',fld:'vGUID',pic:''},{av:'AV15IsOk',fld:'vISOK',pic:''},{av:'AV17Message',fld:'vMESSAGE',pic:''},{av:'AV16IsParent',fld:'vISPARENT',pic:''}],[{av:'AV15IsOk',fld:'vISOK',pic:''},{av:'AV17Message',fld:'vMESSAGE',pic:''},{av:'AV16IsParent',fld:'vISPARENT',pic:''}]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'AV7ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV14Id',fld:'vID',pic:''},{av:'AV16IsParent',fld:'vISPARENT',pic:''}],[{av:'AV14Id',fld:'vID',pic:''},{av:'AV7ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV16IsParent',fld:'vISPARENT',pic:''}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'AV7ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV14Id',fld:'vID',pic:''},{av:'AV16IsParent',fld:'vISPARENT',pic:''}],[{av:'AV14Id',fld:'vID',pic:''},{av:'AV7ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV16IsParent',fld:'vISPARENT',pic:''}]];
   this.EvtParms["'E_CANCEL'"] = [[{av:'AV14Id',fld:'vID',pic:''},{av:'AV7ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV16IsParent',fld:'vISPARENT',pic:''}],[{av:'AV16IsParent',fld:'vISPARENT',pic:''}]];
   this.EvtParms["VALIDV_ACCESSTYPE"] = [[{av:'AV16IsParent',fld:'vISPARENT',pic:''}],[{av:'AV16IsParent',fld:'vISPARENT',pic:''}]];
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV7ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV14Id", "vID", 0, "char", 40, 0);
   this.setVCMap("AV15IsOk", "vISOK", 0, "boolean", 4, 0);
   this.setVCMap("AV17Message", "vMESSAGE", 0, "GeneXus\Common\Messages.Message", 0, 0);
   this.setVCMap("AV7ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV14Id", "vID", 0, "char", 40, 0);
   this.Initialize( );
   this.setComponent({id: "CHILDREN" ,GXClass: null , Prefix: "W0088" , lvl: 1 });
});
gx.wi( function() { gx.createParentObj(k2bfsg.entryapplicationpermission);});
