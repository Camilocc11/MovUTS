gx.evt.autoSkip = false;
gx.define('k2bfsg.entryrole', false, function () {
   this.ServerClass =  "k2bfsg.entryrole" ;
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
   this.s112_client=function()
   {
   };
   this.s132_client=function()
   {
      this.createWebComponent('Permissionswc','K2BFSG.RoleSelectPermission',[this.AV18Id]);
      this.createWebComponent('Childrenwc','K2BFSG.RoleSelectChildren',[this.AV18Id]);
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
   this.e212q1_client=function()
   {
      this.clearMessages();
      this.s152_client();
      this.refreshOutputs([{av:'AV18Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.s152_client=function()
   {
      if ( this.Gx_mode == "DSP" )
      {
         this.call("com.movuts.k2bfsg.entryrole", ["UPD", this.AV18Id]);
      }
   };
   this.e222q1_client=function()
   {
      this.clearMessages();
      this.s162_client();
      this.refreshOutputs([{av:'AV18Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.s162_client=function()
   {
      if ( this.Gx_mode == "DSP" )
      {
         this.call("com.movuts.k2bfsg.entryrole", ["DLT", this.AV18Id]);
      }
   };
   this.e202q1_client=function()
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
         this.call("com.movuts.k2bfsg.wwrole", []);
      }
   };
   this.e112q1_client=function()
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
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Visible")',ctrl:'LINESEPARATORCONTENT_LINESEPARATOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Class")',ctrl:'LINESEPARATORCONTENT_LINESEPARATOR',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_LINESEPARATOR","Class")',ctrl:'LINESEPARATORHEADER_LINESEPARATOR',prop:'Class'}]);
      return gx.$.Deferred().resolve();
   };
   this.e142q2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152q2_client=function()
   {
      return this.executeServerEvent("TEXTBLOCK_ATTRIBUTES_ATTRIBUTES.CLICK", true, null, false, true);
   };
   this.e162q2_client=function()
   {
      return this.executeServerEvent("COLLAPSIBLEIMAGE_ATTRIBUTES.CLICK", true, null, false, true);
   };
   this.e172q2_client=function()
   {
      return this.executeServerEvent("TEXTBLOCK_ATTRIBUTES_ATTRIBUTES1.CLICK", true, null, false, true);
   };
   this.e182q2_client=function()
   {
      return this.executeServerEvent("COLLAPSIBLEIMAGE_ATTRIBUTES1.CLICK", true, null, false, true);
   };
   this.e232q2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,30,33,34,35,36,37,38,39,40,41,42,45,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,98,100,101,102,103,104,105,106,107,108,111,113,116,117,118,119,120,121,123,124,126,127];
   this.GXLastCtrlId =127;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 128, 53, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[28]={ id: 28, fld:"TEXTBLOCK_ATTRIBUTES_ATTRIBUTES", format:0,grid:0,evt:"e152q2_client"};
   GXValidFnc[30]={ id: 30, fld:"COLLAPSIBLEIMAGECONTAINER_ATTRIBUTES",grid:0};
   GXValidFnc[33]={ id: 33, fld:"COLLAPSIBLEIMAGE_ATTRIBUTES",grid:0,evt:"e162q2_client"};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS2",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"ACTIONSCONTAINERTABLERIGHT_ACTIONS2",grid:0};
   GXValidFnc[45]={ id: 45, fld:"UPDATE",grid:0,evt:"e212q1_client"};
   GXValidFnc[47]={ id: 47, fld:"DELETE",grid:0,evt:"e222q1_client"};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"TABLE_CONTAINER_ID",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id:53 ,lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV18Id",gxold:"OV18Id",gxvar:"AV18Id",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV18Id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV18Id=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vID",gx.O.AV18Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV18Id=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"TABLE_CONTAINER_GUID",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGUID",gxz:"ZV19GUID",gxold:"OV19GUID",gxvar:"AV19GUID",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV19GUID=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV19GUID=Value},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV19GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV19GUID=this.val()},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"TABLE_CONTAINER_NAME",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id:65 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV20Name",gxold:"OV20Name",gxvar:"AV20Name",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV20Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV20Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV20Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV20Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"TABLE_CONTAINER_DSC",grid:0};
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id:71 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",gxz:"ZV21Dsc",gxold:"OV21Dsc",gxvar:"AV21Dsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV21Dsc=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV21Dsc=Value},v2c:function(){gx.fn.setControlValue("vDSC",gx.O.AV21Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV21Dsc=this.val()},val:function(){return gx.fn.getControlValue("vDSC")},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"LINESEPARATORCONTAINER_LINESEPARATOR",grid:0};
   GXValidFnc[75]={ id: 75, fld:"LINESEPARATORHEADER_LINESEPARATOR",grid:0};
   GXValidFnc[76]={ id: 76, fld:"LINESEPARATORTITLE_LINESEPARATOR", format:0,grid:0,evt:"e112q1_client"};
   GXValidFnc[77]={ id: 77, fld:"LINESEPARATORCONTENT_LINESEPARATOR",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"TABLE_CONTAINER_SECPOLID",grid:0};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id:83 ,lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSECPOLID",gxz:"ZV22SecPolId",gxold:"OV22SecPolId",gxvar:"AV22SecPolId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV22SecPolId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV22SecPolId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vSECPOLID",gx.O.AV22SecPolId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV22SecPolId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSECPOLID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 83 , function() {
   });
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"",grid:0};
   GXValidFnc[86]={ id: 86, fld:"TABLE_CONTAINER_EXTID",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   GXValidFnc[89]={ id:89 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vEXTID",gxz:"ZV23ExtId",gxold:"OV23ExtId",gxvar:"AV23ExtId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV23ExtId=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV23ExtId=Value},v2c:function(){gx.fn.setControlValue("vEXTID",gx.O.AV23ExtId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV23ExtId=this.val()},val:function(){return gx.fn.getControlValue("vEXTID")},nac:gx.falseFn};
   this.declareDomainHdlr( 89 , function() {
   });
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"",grid:0};
   GXValidFnc[92]={ id: 92, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[93]={ id: 93, fld:"",grid:0};
   GXValidFnc[94]={ id: 94, fld:"",grid:0};
   GXValidFnc[95]={ id: 95, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[98]={ id: 98, fld:"CONFIRM",grid:0,evt:"e142q2_client",std:"ENTER"};
   GXValidFnc[100]={ id: 100, fld:"CANCEL",grid:0,evt:"e202q1_client"};
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id: 102, fld:"COLUMNCONTAINERTABLE_COLUMN1",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[105]={ id: 105, fld:"RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES1",grid:0};
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"TITLECELL_ATTRIBUTES_ATTRIBUTES1",grid:0};
   GXValidFnc[108]={ id: 108, fld:"TITLECONTAINERTABLE_ATTRIBUTES1",grid:0};
   GXValidFnc[111]={ id: 111, fld:"TEXTBLOCK_ATTRIBUTES_ATTRIBUTES1", format:0,grid:0,evt:"e172q2_client"};
   GXValidFnc[113]={ id: 113, fld:"COLLAPSIBLEIMAGECONTAINER_ATTRIBUTES1",grid:0};
   GXValidFnc[116]={ id: 116, fld:"COLLAPSIBLEIMAGE_ATTRIBUTES1",grid:0,evt:"e182q2_client"};
   GXValidFnc[117]={ id: 117, fld:"",grid:0};
   GXValidFnc[118]={ id: 118, fld:"",grid:0};
   GXValidFnc[119]={ id: 119, fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES1",grid:0};
   GXValidFnc[120]={ id: 120, fld:"",grid:0};
   GXValidFnc[121]={ id: 121, fld:"",grid:0};
   GXValidFnc[123]={ id: 123, fld:"",grid:0};
   GXValidFnc[124]={ id: 124, fld:"",grid:0};
   GXValidFnc[126]={ id: 126, fld:"",grid:0};
   GXValidFnc[127]={ id: 127, fld:"",grid:0};
   this.AV18Id = 0 ;
   this.ZV18Id = 0 ;
   this.OV18Id = 0 ;
   this.AV19GUID = "" ;
   this.ZV19GUID = "" ;
   this.OV19GUID = "" ;
   this.AV20Name = "" ;
   this.ZV20Name = "" ;
   this.OV20Name = "" ;
   this.AV21Dsc = "" ;
   this.ZV21Dsc = "" ;
   this.OV21Dsc = "" ;
   this.AV22SecPolId = 0 ;
   this.ZV22SecPolId = 0 ;
   this.OV22SecPolId = 0 ;
   this.AV23ExtId = "" ;
   this.ZV23ExtId = "" ;
   this.OV23ExtId = "" ;
   this.AV18Id = 0 ;
   this.AV19GUID = "" ;
   this.AV20Name = "" ;
   this.AV21Dsc = "" ;
   this.AV22SecPolId = 0 ;
   this.AV23ExtId = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e142q2_client": ["ENTER", true] ,"e152q2_client": ["TEXTBLOCK_ATTRIBUTES_ATTRIBUTES.CLICK", true] ,"e162q2_client": ["COLLAPSIBLEIMAGE_ATTRIBUTES.CLICK", true] ,"e172q2_client": ["TEXTBLOCK_ATTRIBUTES_ATTRIBUTES1.CLICK", true] ,"e182q2_client": ["COLLAPSIBLEIMAGE_ATTRIBUTES1.CLICK", true] ,"e232q2_client": ["CANCEL", true] ,"e212q1_client": ["'E_UPDATE'", false] ,"e222q1_client": ["'E_DELETE'", false] ,"e202q1_client": ["'E_CANCEL'", false] ,"e112q1_client": ["LINESEPARATORTITLE_LINESEPARATOR.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV18Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV19GUID',fld:'vGUID',pic:''}],[{av:'gx.fn.getCtrlProperty("UPDATE","Tooltiptext")',ctrl:'UPDATE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("DELETE","Tooltiptext")',ctrl:'DELETE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vNAME","Enabled")',ctrl:'vNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDSC","Enabled")',ctrl:'vDSC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vEXTID","Enabled")',ctrl:'vEXTID',prop:'Enabled'},{ctrl:'vSECPOLID'},{av:'AV20Name',fld:'vNAME',pic:''},{av:'AV21Dsc',fld:'vDSC',pic:''},{av:'AV23ExtId',fld:'vEXTID',pic:''},{av:'AV22SecPolId',fld:'vSECPOLID',pic:'ZZZZZZZZ9'},{ctrl:'CONFIRM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vGUID","Visible")',ctrl:'vGUID',prop:'Visible'},{av:'AV19GUID',fld:'vGUID',pic:''},{ctrl:'PERMISSIONSWC',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES1","Visible")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES1',prop:'Visible'},{ctrl:'PERMISSIONSWC'},{av:'AV18Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{ctrl:'CHILDRENWC'},{ctrl:'CONFIRM',prop:'Caption'},{ctrl:'CONFIRM',prop:'Enabled'},{ctrl:'CANCEL',prop:'Visible'},{ctrl:'CANCEL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("UPDATE","Visible")',ctrl:'UPDATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("UPDATE","Enabled")',ctrl:'UPDATE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("DELETE","Visible")',ctrl:'DELETE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETE","Enabled")',ctrl:'DELETE',prop:'Enabled'}]];
   this.EvtParms["START"] = [[],[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Visible")',ctrl:'LINESEPARATORCONTENT_LINESEPARATOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Class")',ctrl:'LINESEPARATORCONTENT_LINESEPARATOR',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_LINESEPARATOR","Class")',ctrl:'LINESEPARATORHEADER_LINESEPARATOR',prop:'Class'},{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_ATTRIBUTES1","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_ATTRIBUTES1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES1","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES1',prop:'Class'}]];
   this.EvtParms["ENTER"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV18Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV19GUID',fld:'vGUID',pic:''},{av:'AV20Name',fld:'vNAME',pic:''},{av:'AV21Dsc',fld:'vDSC',pic:''},{av:'AV23ExtId',fld:'vEXTID',pic:''},{ctrl:'vSECPOLID'},{av:'AV22SecPolId',fld:'vSECPOLID',pic:'ZZZZZZZZ9'}],[]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV18Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}],[{av:'AV18Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV18Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}],[{av:'AV18Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}]];
   this.EvtParms["'E_CANCEL'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[]];
   this.EvtParms["TEXTBLOCK_ATTRIBUTES_ATTRIBUTES.CLICK"] = [[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_ATTRIBUTES","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_ATTRIBUTES',prop:'Visible'}],[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_ATTRIBUTES","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_ATTRIBUTES',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES',prop:'Class'}]];
   this.EvtParms["COLLAPSIBLEIMAGE_ATTRIBUTES.CLICK"] = [[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_ATTRIBUTES","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_ATTRIBUTES',prop:'Visible'}],[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_ATTRIBUTES","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_ATTRIBUTES',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES',prop:'Class'}]];
   this.EvtParms["TEXTBLOCK_ATTRIBUTES_ATTRIBUTES1.CLICK"] = [[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_ATTRIBUTES1","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_ATTRIBUTES1',prop:'Visible'}],[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_ATTRIBUTES1","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_ATTRIBUTES1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES1","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES1',prop:'Class'}]];
   this.EvtParms["COLLAPSIBLEIMAGE_ATTRIBUTES1.CLICK"] = [[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_ATTRIBUTES1","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_ATTRIBUTES1',prop:'Visible'}],[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_ATTRIBUTES1","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_ATTRIBUTES1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES1","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES1',prop:'Class'}]];
   this.EvtParms["LINESEPARATORTITLE_LINESEPARATOR.CLICK"] = [[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Visible")',ctrl:'LINESEPARATORCONTENT_LINESEPARATOR',prop:'Visible'}],[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Visible")',ctrl:'LINESEPARATORCONTENT_LINESEPARATOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_LINESEPARATOR","Class")',ctrl:'LINESEPARATORCONTENT_LINESEPARATOR',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_LINESEPARATOR","Class")',ctrl:'LINESEPARATORHEADER_LINESEPARATOR',prop:'Class'}]];
   this.EnterCtrl = ["CONFIRM"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.Initialize( );
   this.setComponent({id: "CHILDRENWC" ,GXClass: null , Prefix: "W0122" , lvl: 1 });
   this.setComponent({id: "PERMISSIONSWC" ,GXClass: null , Prefix: "W0125" , lvl: 1 });
});
gx.wi( function() { gx.createParentObj(k2bfsg.entryrole);});
