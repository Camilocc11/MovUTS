gx.evt.autoSkip = false;
gx.define('k2bfsg.eventsubscriptionentry', false, function () {
   this.ServerClass =  "k2bfsg.eventsubscriptionentry" ;
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
      this.AV18Id=gx.fn.getControlValue("vID") ;
      this.AV18Id=gx.fn.getControlValue("vID") ;
   };
   this.Validv_Status=function()
   {
      return this.validCliEvt("Validv_Status", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vSTATUS");
         this.AnyError  = 0;
         if ( ! ( ( this.AV13Status == "u" ) || ( this.AV13Status == "s" ) ) )
         {
            try {
               gxballoon.setError("Campo Status fuera de rango");
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
   this.Validv_Event=function()
   {
      return this.validCliEvt("Validv_Event", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vEVENT");
         this.AnyError  = 0;
         if ( ! ( ( this.AV14Event == "user-update" ) || ( this.AV14Event == "user-insert" ) || ( this.AV14Event == "user-delete" ) || ( this.AV14Event == "user-updateroles" ) || ( this.AV14Event == "user-getcustominfo" ) || ( this.AV14Event == "user-savecustominfo" ) || ( this.AV14Event == "role-insert" ) || ( this.AV14Event == "role-update" ) || ( this.AV14Event == "role-delete" ) || ( this.AV14Event == "repository-login" ) || ( this.AV14Event == "repository-logout" ) || ( this.AV14Event == "application-checkprmfail" ) || ( this.AV14Event == "externalauthentication-response" ) ) )
         {
            try {
               gxballoon.setError("Campo Event fuera de rango");
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
   this.s192_client=function()
   {
      if ( this.AV13Status == "u" )
      {
         gx.fn.setCtrlProperty("SUBSCRIBEUNSUBSCRIBE","Caption", "Subscribir" );
      }
      else
      {
         gx.fn.setCtrlProperty("SUBSCRIBEUNSUBSCRIBE","Caption", "Desubscribir" );
      }
   };
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
         gx.fn.setCtrlProperty("SUBSCRIBEUNSUBSCRIBE","Visible", true );
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
         gx.fn.setCtrlProperty("SUBSCRIBEUNSUBSCRIBE","Visible", false );
      }
   };
   this.e172d1_client=function()
   {
      this.clearMessages();
      this.s142_client();
      this.refreshOutputs([{av:'AV18Id',fld:'vID',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s142_client=function()
   {
      this.call("com.movuts.k2bfsg.eventsubscriptionentry", ["UPD", this.AV18Id]);
   };
   this.e182d1_client=function()
   {
      this.clearMessages();
      this.s152_client();
      this.refreshOutputs([{av:'AV18Id',fld:'vID',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s152_client=function()
   {
      this.call("com.movuts.k2bfsg.eventsubscriptionentry", ["DLT", this.AV18Id]);
   };
   this.e132d2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142d2_client=function()
   {
      return this.executeServerEvent("'E_CANCEL'", false, null, false, false);
   };
   this.e152d2_client=function()
   {
      return this.executeServerEvent("'E_SUBSCRIBEUNSUBSCRIBE'", false, null, false, false);
   };
   this.e192d2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,22,23,24,25,26,27,28,29,30,31,34,36,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,83,85,86,87];
   this.GXLastCtrlId =87;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 88, 44, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[34]={ id: 34, fld:"SUBSCRIBEUNSUBSCRIBE",grid:0,evt:"e152d2_client"};
   GXValidFnc[36]={ id: 36, fld:"UPDATE",grid:0,evt:"e172d1_client"};
   GXValidFnc[38]={ id: 38, fld:"DELETE",grid:0,evt:"e182d1_client"};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"TABLE_CONTAINER_DESCRIPTION",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDESCRIPTION",gxz:"ZV12Description",gxold:"OV12Description",gxvar:"AV12Description",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12Description=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12Description=Value},v2c:function(){gx.fn.setControlValue("vDESCRIPTION",gx.O.AV12Description,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV12Description=this.val()},val:function(){return gx.fn.getControlValue("vDESCRIPTION")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"TABLE_CONTAINER_STATUS",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id:50 ,lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Status,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSTATUS",gxz:"ZV13Status",gxold:"OV13Status",gxvar:"AV13Status",ucs:[],op:[50],ip:[50],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV13Status=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV13Status=Value},v2c:function(){gx.fn.setComboBoxValue("vSTATUS",gx.O.AV13Status);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV13Status=this.val()},val:function(){return gx.fn.getControlValue("vSTATUS")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"TABLE_CONTAINER_EVENT",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id:56 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Event,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vEVENT",gxz:"ZV14Event",gxold:"OV14Event",gxvar:"AV14Event",ucs:[],op:[56],ip:[56],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV14Event=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV14Event=Value},v2c:function(){gx.fn.setComboBoxValue("vEVENT",gx.O.AV14Event);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV14Event=this.val()},val:function(){return gx.fn.getControlValue("vEVENT")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"TABLE_CONTAINER_FILENAME",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id:62 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILENAME",gxz:"ZV15FileName",gxold:"OV15FileName",gxvar:"AV15FileName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV15FileName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV15FileName=Value},v2c:function(){gx.fn.setControlValue("vFILENAME",gx.O.AV15FileName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV15FileName=this.val()},val:function(){return gx.fn.getControlValue("vFILENAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 62 , function() {
   });
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"TABLE_CONTAINER_CLASSNAME",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id:68 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLASSNAME",gxz:"ZV16ClassName",gxold:"OV16ClassName",gxvar:"AV16ClassName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV16ClassName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV16ClassName=Value},v2c:function(){gx.fn.setControlValue("vCLASSNAME",gx.O.AV16ClassName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV16ClassName=this.val()},val:function(){return gx.fn.getControlValue("vCLASSNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"TABLE_CONTAINER_METHODNAME",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMETHODNAME",gxz:"ZV17MethodName",gxold:"OV17MethodName",gxvar:"AV17MethodName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV17MethodName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17MethodName=Value},v2c:function(){gx.fn.setControlValue("vMETHODNAME",gx.O.AV17MethodName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV17MethodName=this.val()},val:function(){return gx.fn.getControlValue("vMETHODNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS1",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS1",grid:0};
   GXValidFnc[83]={ id: 83, fld:"CONFIRM",grid:0,evt:"e132d2_client",std:"ENTER"};
   GXValidFnc[85]={ id: 85, fld:"CANCEL",grid:0,evt:"e142d2_client"};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   this.AV12Description = "" ;
   this.ZV12Description = "" ;
   this.OV12Description = "" ;
   this.AV13Status = "" ;
   this.ZV13Status = "" ;
   this.OV13Status = "" ;
   this.AV14Event = "" ;
   this.ZV14Event = "" ;
   this.OV14Event = "" ;
   this.AV15FileName = "" ;
   this.ZV15FileName = "" ;
   this.OV15FileName = "" ;
   this.AV16ClassName = "" ;
   this.ZV16ClassName = "" ;
   this.OV16ClassName = "" ;
   this.AV17MethodName = "" ;
   this.ZV17MethodName = "" ;
   this.OV17MethodName = "" ;
   this.AV12Description = "" ;
   this.AV13Status = "" ;
   this.AV14Event = "" ;
   this.AV15FileName = "" ;
   this.AV16ClassName = "" ;
   this.AV17MethodName = "" ;
   this.AV18Id = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e132d2_client": ["ENTER", true] ,"e142d2_client": ["'E_CANCEL'", true] ,"e152d2_client": ["'E_SUBSCRIBEUNSUBSCRIBE'", true] ,"e192d2_client": ["CANCEL", true] ,"e172d1_client": ["'E_UPDATE'", false] ,"e182d1_client": ["'E_DELETE'", false]};
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[{av:'gx.fn.getCtrlProperty("UPDATE","Tooltiptext")',ctrl:'UPDATE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("DELETE","Tooltiptext")',ctrl:'DELETE',prop:'Tooltiptext'},{ctrl:'CONFIRM',prop:'Caption'},{ctrl:'CONFIRM',prop:'Visible'},{ctrl:'CONFIRM',prop:'Enabled'},{ctrl:'CANCEL',prop:'Visible'},{ctrl:'CANCEL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("UPDATE","Visible")',ctrl:'UPDATE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("UPDATE","Enabled")',ctrl:'UPDATE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("DELETE","Visible")',ctrl:'DELETE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETE","Enabled")',ctrl:'DELETE',prop:'Enabled'},{ctrl:'SUBSCRIBEUNSUBSCRIBE',prop:'Visible'}]];
   this.EvtParms["START"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV18Id',fld:'vID',pic:''},{ctrl:'vSTATUS'},{av:'AV13Status',fld:'vSTATUS',pic:''}],[{ctrl:'vSTATUS'},{av:'AV12Description',fld:'vDESCRIPTION',pic:''},{ctrl:'vEVENT'},{av:'AV14Event',fld:'vEVENT',pic:''},{av:'AV15FileName',fld:'vFILENAME',pic:''},{av:'AV16ClassName',fld:'vCLASSNAME',pic:''},{av:'AV17MethodName',fld:'vMETHODNAME',pic:''},{av:'gx.fn.getCtrlProperty("vDESCRIPTION","Enabled")',ctrl:'vDESCRIPTION',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFILENAME","Enabled")',ctrl:'vFILENAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCLASSNAME","Enabled")',ctrl:'vCLASSNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMETHODNAME","Enabled")',ctrl:'vMETHODNAME',prop:'Enabled'},{av:'AV13Status',fld:'vSTATUS',pic:''},{ctrl:'SUBSCRIBEUNSUBSCRIBE',prop:'Caption'}]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'AV18Id',fld:'vID',pic:''}],[{av:'AV18Id',fld:'vID',pic:''}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'AV18Id',fld:'vID',pic:''}],[{av:'AV18Id',fld:'vID',pic:''}]];
   this.EvtParms["ENTER"] = [[{av:'AV18Id',fld:'vID',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV12Description',fld:'vDESCRIPTION',pic:''},{ctrl:'vEVENT'},{av:'AV14Event',fld:'vEVENT',pic:''},{av:'AV15FileName',fld:'vFILENAME',pic:''},{av:'AV16ClassName',fld:'vCLASSNAME',pic:''},{av:'AV17MethodName',fld:'vMETHODNAME',pic:''}],[]];
   this.EvtParms["'E_CANCEL'"] = [[{av:'AV18Id',fld:'vID',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[]];
   this.EvtParms["'E_SUBSCRIBEUNSUBSCRIBE'"] = [[{ctrl:'vSTATUS'},{av:'AV13Status',fld:'vSTATUS',pic:''},{av:'AV18Id',fld:'vID',pic:''}],[{ctrl:'vSTATUS'},{av:'AV13Status',fld:'vSTATUS',pic:''},{ctrl:'SUBSCRIBEUNSUBSCRIBE',prop:'Caption'}]];
   this.EvtParms["VALIDV_STATUS"] = [[],[]];
   this.EvtParms["VALIDV_EVENT"] = [[],[]];
   this.EnterCtrl = ["CONFIRM"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV18Id", "vID", 0, "char", 40, 0);
   this.setVCMap("AV18Id", "vID", 0, "char", 40, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.eventsubscriptionentry);});
