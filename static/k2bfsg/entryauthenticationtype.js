gx.evt.autoSkip = false;
gx.define('k2bfsg.entryauthenticationtype', false, function () {
   this.ServerClass =  "k2bfsg.entryauthenticationtype" ;
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
      this.AV18Name=gx.fn.getControlValue("vNAME") ;
      this.AV22TypeIdDsp=gx.fn.getControlValue("vTYPEIDDSP") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV18Name=gx.fn.getControlValue("vNAME") ;
      this.AV22TypeIdDsp=gx.fn.getControlValue("vTYPEIDDSP") ;
   };
   this.Validv_Typeid=function()
   {
      return this.validCliEvt("Validv_Typeid", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vTYPEID");
         this.AnyError  = 0;
         if ( ! ( ( this.AV21TypeId == "AppleID" ) || ( this.AV21TypeId == "Custom" ) || ( this.AV21TypeId == "ExternalWebService" ) || ( this.AV21TypeId == "Facebook" ) || ( this.AV21TypeId == "GAMLocal" ) || ( this.AV21TypeId == "GAMRemote" ) || ( this.AV21TypeId == "GAMRemoteRest" ) || ( this.AV21TypeId == "Google" ) || ( this.AV21TypeId == "Twitter" ) || ( this.AV21TypeId == "Oauth20" ) || ( this.AV21TypeId == "Saml20" ) || ( this.AV21TypeId == "WeChat" ) ) )
         {
            try {
               gxballoon.setError("Campo Type Id fuera de rango");
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
   this.s162_client=function()
   {
      if ( this.AV21TypeId == "Oauth20" )
      {
         this.createWebComponent('Wcentrypanel','K2BFSG.WCAuthenticationTypeEntryOauth20',[this.Gx_mode,this.AV18Name,this.AV21TypeId]);
      }
      else if ( this.AV21TypeId == "Saml20" )
      {
         this.createWebComponent('Wcentrypanel','K2BFSG.WCAuthenticationTypeEntrySaml20',[this.Gx_mode,this.AV18Name,this.AV21TypeId]);
      }
      else
      {
         this.createWebComponent('Wcentrypanel','K2BFSG.WCAuthenticationTypeEntryGeneral',[this.Gx_mode,this.AV18Name,this.AV21TypeId]);
      }
   };
   this.s122_client=function()
   {
   };
   this.s132_client=function()
   {
   };
   this.e152k1_client=function()
   {
      this.clearMessages();
      this.s142_client();
      this.refreshOutputs([{av:'AV22TypeIdDsp',fld:'vTYPEIDDSP',pic:''},{av:'AV18Name',fld:'vNAME',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s142_client=function()
   {
      if ( this.Gx_mode == "DSP" )
      {
         this.call("com.movuts.k2bfsg.entryauthenticationtype", ["UPD", this.AV18Name, this.AV22TypeIdDsp]);
      }
   };
   this.e162k1_client=function()
   {
      this.clearMessages();
      this.s152_client();
      this.refreshOutputs([{av:'AV22TypeIdDsp',fld:'vTYPEIDDSP',pic:''},{av:'AV18Name',fld:'vNAME',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s152_client=function()
   {
      if ( this.Gx_mode == "DSP" )
      {
         this.call("com.movuts.k2bfsg.entryauthenticationtype", ["DLT", this.AV18Name, this.AV22TypeIdDsp]);
      }
   };
   this.e112k1_client=function()
   {
      this.clearMessages();
      this.s162_client();
      this.refreshOutputs([{ctrl:'vTYPEID'},{av:'AV21TypeId',fld:'vTYPEID',pic:''},{av:'AV18Name',fld:'vNAME',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{ctrl:'WCENTRYPANEL'}]);
      return gx.$.Deferred().resolve();
   };
   this.e172k2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e182k2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,22,23,24,25,26,27,28,29,30,31,34,36,37,38,39,40,41,42,43,44,46,47];
   this.GXLastCtrlId =47;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 48, 42, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[34]={ id: 34, fld:"UPDATE",grid:0,evt:"e152k1_client"};
   GXValidFnc[36]={ id: 36, fld:"DELETE",grid:0,evt:"e162k1_client"};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"TABLE_CONTAINER_TYPEID",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id:42 ,lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Typeid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTYPEID",gxz:"ZV21TypeId",gxold:"OV21TypeId",gxvar:"AV21TypeId",ucs:[],op:[42],ip:[42],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV21TypeId=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV21TypeId=Value},v2c:function(){gx.fn.setComboBoxValue("vTYPEID",gx.O.AV21TypeId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV21TypeId=this.val()},val:function(){return gx.fn.getControlValue("vTYPEID")},nac:gx.falseFn,evt:"e112k1_client"};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   this.AV21TypeId = "" ;
   this.ZV21TypeId = "" ;
   this.OV21TypeId = "" ;
   this.AV21TypeId = "" ;
   this.AV18Name = "" ;
   this.AV22TypeIdDsp = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e172k2_client": ["ENTER", true] ,"e182k2_client": ["CANCEL", true] ,"e152k1_client": ["'E_UPDATE'", false] ,"e162k1_client": ["'E_DELETE'", false] ,"e112k1_client": ["VTYPEID.CLICK", false]};
   this.EvtParms["REFRESH"] = [[],[{av:'gx.fn.getCtrlProperty("UPDATE","Tooltiptext")',ctrl:'UPDATE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("DELETE","Tooltiptext")',ctrl:'DELETE',prop:'Tooltiptext'}]];
   this.EvtParms["START"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!'},{ctrl:'vTYPEID'},{av:'AV21TypeId',fld:'vTYPEID',pic:''},{av:'AV22TypeIdDsp',fld:'vTYPEIDDSP',pic:''},{av:'AV18Name',fld:'vNAME',pic:''}],[{ctrl:'vTYPEID'},{av:'AV21TypeId',fld:'vTYPEID',pic:''},{av:'AV18Name',fld:'vNAME',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{ctrl:'WCENTRYPANEL'}]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'AV18Name',fld:'vNAME',pic:''},{av:'AV22TypeIdDsp',fld:'vTYPEIDDSP',pic:''}],[{av:'AV22TypeIdDsp',fld:'vTYPEIDDSP',pic:''},{av:'AV18Name',fld:'vNAME',pic:''}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'AV18Name',fld:'vNAME',pic:''},{av:'AV22TypeIdDsp',fld:'vTYPEIDDSP',pic:''}],[{av:'AV22TypeIdDsp',fld:'vTYPEIDDSP',pic:''},{av:'AV18Name',fld:'vNAME',pic:''}]];
   this.EvtParms["VTYPEID.CLICK"] = [[{ctrl:'vTYPEID'},{av:'AV21TypeId',fld:'vTYPEID',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'AV18Name',fld:'vNAME',pic:''}],[{ctrl:'vTYPEID'},{av:'AV21TypeId',fld:'vTYPEID',pic:''},{av:'AV18Name',fld:'vNAME',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{ctrl:'WCENTRYPANEL'}]];
   this.EvtParms["VALIDV_TYPEID"] = [[],[]];
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV18Name", "vNAME", 0, "char", 120, 0);
   this.setVCMap("AV22TypeIdDsp", "vTYPEIDDSP", 0, "char", 30, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV18Name", "vNAME", 0, "char", 120, 0);
   this.setVCMap("AV22TypeIdDsp", "vTYPEIDDSP", 0, "char", 30, 0);
   this.Initialize( );
   this.setComponent({id: "WCENTRYPANEL" ,GXClass: null , Prefix: "W0045" , lvl: 1 });
});
gx.wi( function() { gx.createParentObj(k2bfsg.entryauthenticationtype);});
