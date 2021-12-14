gx.evt.autoSkip = false;
gx.define('k2bfsg.login', false, function () {
   this.ServerClass =  "k2bfsg.login" ;
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
      this.AV43Language=gx.fn.getControlValue("vLANGUAGE") ;
      this.AV61UserRememberMe=gx.fn.getIntegerValue("vUSERREMEMBERME",'.') ;
      this.AV55ShowDetailedMessages=gx.fn.getControlValue("vSHOWDETAILEDMESSAGES") ;
      this.AV8AmountOfCharacters=gx.fn.getIntegerValue("vAMOUNTOFCHARACTERS",'.') ;
      this.AV10ApplicationClientId=gx.fn.getControlValue("vAPPLICATIONCLIENTID") ;
      this.AV58URL=gx.fn.getControlValue("vURL") ;
      this.AV43Language=gx.fn.getControlValue("vLANGUAGE") ;
      this.AV61UserRememberMe=gx.fn.getIntegerValue("vUSERREMEMBERME",'.') ;
      this.AV55ShowDetailedMessages=gx.fn.getControlValue("vSHOWDETAILEDMESSAGES") ;
      this.AV8AmountOfCharacters=gx.fn.getIntegerValue("vAMOUNTOFCHARACTERS",'.') ;
   };
   this.Validv_Typeauthtype=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(27);
      return this.validCliEvt("Validv_Typeauthtype", 27, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vTYPEAUTHTYPE");
         this.AnyError  = 0;
         if ( ! ( ( this.AV68TypeAuthType == "AppleID" ) || ( this.AV68TypeAuthType == "Custom" ) || ( this.AV68TypeAuthType == "ExternalWebService" ) || ( this.AV68TypeAuthType == "Facebook" ) || ( this.AV68TypeAuthType == "GAMLocal" ) || ( this.AV68TypeAuthType == "GAMRemote" ) || ( this.AV68TypeAuthType == "GAMRemoteRest" ) || ( this.AV68TypeAuthType == "Google" ) || ( this.AV68TypeAuthType == "Twitter" ) || ( this.AV68TypeAuthType == "Oauth20" ) || ( this.AV68TypeAuthType == "Saml20" ) || ( this.AV68TypeAuthType == "WeChat" ) ) )
         {
            try {
               gxballoon.setError("Campo Type Auth Type fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.e112e1_client=function()
   {
      this.clearMessages();
      this.s152_client();
      this.refreshOutputs([{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s152_client=function()
   {
   };
   this.e122e1_client=function()
   {
      this.clearMessages();
      this.s162_client();
      this.refreshOutputs([{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s162_client=function()
   {
      this.call("com.movuts.wpregistrarusuario", []);
   };
   this.e132e2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e172e2_client=function()
   {
      return this.executeServerEvent("'SELECTAUTHENTICATIONTYPE'", true, arguments[0], false, false);
   };
   this.e182e2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,80,81,83,84,85,86,87,88,89,90,91,94,97,98,101,102,103,104,105,106,107];
   this.GXLastCtrlId =107;
   this.GridauthtypesContainer = new gx.grid.grid(this, 2,"WbpLvl2",27,"Gridauthtypes","Gridauthtypes","GridauthtypesContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.login",[],true,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,false,null,null,false,"",true,[1,1,1,1],false,0,false,false);
   var GridauthtypesContainer = this.GridauthtypesContainer;
   GridauthtypesContainer.startDiv(28,"Gridauthtypestable1","0px","0px");
   GridauthtypesContainer.startDiv(29,"","0px","0px");
   GridauthtypesContainer.startDiv(30,"","0px","0px");
   GridauthtypesContainer.startDiv(31,"","0px","0px");
   GridauthtypesContainer.addLabel();
   GridauthtypesContainer.addBitmap("&Imageauthtype","vIMAGEAUTHTYPE",32,0,"",0,"","e172e2_client","","","Fixed30","");
   GridauthtypesContainer.endDiv();
   GridauthtypesContainer.endDiv();
   GridauthtypesContainer.endDiv();
   GridauthtypesContainer.startDiv(33,"","0px","0px");
   GridauthtypesContainer.startDiv(34,"","0px","0px");
   GridauthtypesContainer.startDiv(35,"","0px","0px");
   GridauthtypesContainer.addLabel();
   GridauthtypesContainer.addSingleLineEdit("Nameauthtype",36,"vNAMEAUTHTYPE","","","NameAuthType","char",60,"chr",60,60,"left","e172e2_client",[],"Nameauthtype","NameAuthType",true,0,false,false,"Attribute",1,"");
   GridauthtypesContainer.endDiv();
   GridauthtypesContainer.endDiv();
   GridauthtypesContainer.endDiv();
   GridauthtypesContainer.startDiv(37,"","0px","0px");
   GridauthtypesContainer.startDiv(38,"","0px","0px");
   GridauthtypesContainer.startDiv(39,"Section1","0px","0px");
   GridauthtypesContainer.startDiv(40,"","0px","0px");
   GridauthtypesContainer.addLabel();
   GridauthtypesContainer.addComboBox("Typeauthtype",41,"vTYPEAUTHTYPE","","TypeAuthType","char",null,0,true,false,30,"chr","");
   GridauthtypesContainer.endDiv();
   GridauthtypesContainer.endDiv();
   GridauthtypesContainer.endDiv();
   GridauthtypesContainer.endDiv();
   GridauthtypesContainer.endDiv();
   this.GridauthtypesContainer.emptyText = "";
   this.setGrid(GridauthtypesContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 108, 55, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[6]={ id: 6, fld:"CONTENTTABLE",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"COLUMNS_MAINCOLUMNSTABLE",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"TABLE22",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"IMAGE",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"CURRENTREPOSITORY", format:0,grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"EXTERNALAUTHENTICATIONS",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"TBEXTERNALAUTHENTICATION", format:0,grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"GRIDAUTHTYPESTABLE1",grid:27};
   GXValidFnc[29]={ id: 29, fld:"",grid:27};
   GXValidFnc[30]={ id: 30, fld:"",grid:27};
   GXValidFnc[31]={ id: 31, fld:"",grid:27};
   GXValidFnc[32]={ id:32 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.GridauthtypesContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vIMAGEAUTHTYPE",gxz:"ZV67ImageAuthType",gxold:"OV67ImageAuthType",gxvar:"AV67ImageAuthType",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV67ImageAuthType=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV67ImageAuthType=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vIMAGEAUTHTYPE",row || gx.fn.currentGridRowImpl(27),gx.O.AV67ImageAuthType,gx.O.AV76Imageauthtype_GXI)},c2v:function(row){gx.O.AV76Imageauthtype_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV67ImageAuthType=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vIMAGEAUTHTYPE",row || gx.fn.currentGridRowImpl(27))},val_GXI:function(row){return gx.fn.getGridControlValue("vIMAGEAUTHTYPE_GXI",row || gx.fn.currentGridRowImpl(27))}, gxvar_GXI:'AV76Imageauthtype_GXI',nac:gx.falseFn,evt:"e172e2_client"};
   GXValidFnc[33]={ id: 33, fld:"",grid:27};
   GXValidFnc[34]={ id: 34, fld:"",grid:27};
   GXValidFnc[35]={ id: 35, fld:"",grid:27};
   GXValidFnc[36]={ id:36 ,lvl:2,type:"char",len:60,dec:0,sign:false,ro:0,isacc:0,grid:27,gxgrid:this.GridauthtypesContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAMEAUTHTYPE",gxz:"ZV66NameAuthType",gxold:"OV66NameAuthType",gxvar:"AV66NameAuthType",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV66NameAuthType=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV66NameAuthType=Value},v2c:function(row){gx.fn.setGridControlValue("vNAMEAUTHTYPE",row || gx.fn.currentGridRowImpl(27),gx.O.AV66NameAuthType,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV66NameAuthType=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vNAMEAUTHTYPE",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn,evt:"e172e2_client"};
   GXValidFnc[37]={ id: 37, fld:"",grid:27};
   GXValidFnc[38]={ id: 38, fld:"",grid:27};
   GXValidFnc[39]={ id: 39, fld:"SECTION1",grid:27};
   GXValidFnc[40]={ id: 40, fld:"",grid:27};
   GXValidFnc[41]={ id:41 ,lvl:2,type:"char",len:30,dec:0,sign:false,ro:0,isacc:0,grid:27,gxgrid:this.GridauthtypesContainer,fnc:this.Validv_Typeauthtype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTYPEAUTHTYPE",gxz:"ZV68TypeAuthType",gxold:"OV68TypeAuthType",gxvar:"AV68TypeAuthType",ucs:[],op:[41],ip:[41],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV68TypeAuthType=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV68TypeAuthType=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vTYPEAUTHTYPE",row || gx.fn.currentGridRowImpl(27),gx.O.AV68TypeAuthType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV68TypeAuthType=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vTYPEAUTHTYPE",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"COLUMNS3_MAINCOLUMNSTABLE",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"TABLE1",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"TABLE30",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id:55 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLOGONTO",gxz:"ZV47LogOnTo",gxold:"OV47LogOnTo",gxvar:"AV47LogOnTo",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV47LogOnTo=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV47LogOnTo=Value},v2c:function(){gx.fn.setComboBoxValue("vLOGONTO",gx.O.AV47LogOnTo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV47LogOnTo=this.val()},val:function(){return gx.fn.getControlValue("vLOGONTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV59UserName",gxold:"OV59UserName",gxvar:"AV59UserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV59UserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV59UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV59UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV59UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id:63 ,lvl:0,type:"char",len:50,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORD",gxz:"ZV60UserPassword",gxold:"OV60UserPassword",gxvar:"AV60UserPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV60UserPassword=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV60UserPassword=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORD",gx.O.AV60UserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV60UserPassword=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id:67 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFORGOTPASSWORD_ACTION",gxz:"ZV31ForgotPassword_Action",gxold:"OV31ForgotPassword_Action",gxvar:"AV31ForgotPassword_Action",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV31ForgotPassword_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV31ForgotPassword_Action=Value},v2c:function(){gx.fn.setControlValue("vFORGOTPASSWORD_ACTION",gx.O.AV31ForgotPassword_Action,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV31ForgotPassword_Action=this.val()},val:function(){return gx.fn.getControlValue("vFORGOTPASSWORD_ACTION")},nac:gx.falseFn,evt:"e112e1_client"};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id:71 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCREATEANACCOUNT_ACTION",gxz:"ZV25CreateAnAccount_Action",gxold:"OV25CreateAnAccount_Action",gxvar:"AV25CreateAnAccount_Action",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV25CreateAnAccount_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV25CreateAnAccount_Action=Value},v2c:function(){gx.fn.setControlValue("vCREATEANACCOUNT_ACTION",gx.O.AV25CreateAnAccount_Action,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV25CreateAnAccount_Action=this.val()},val:function(){return gx.fn.getControlValue("vCREATEANACCOUNT_ACTION")},nac:gx.falseFn,evt:"e122e1_client"};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"TABLE5",grid:0};
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"TABLE2",grid:0};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id:81 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vKEEPMELOGGEDIN",gxz:"ZV42KeepMeLoggedIn",gxold:"OV42KeepMeLoggedIn",gxvar:"AV42KeepMeLoggedIn",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV42KeepMeLoggedIn=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV42KeepMeLoggedIn=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vKEEPMELOGGEDIN",gx.O.AV42KeepMeLoggedIn,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV42KeepMeLoggedIn=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vKEEPMELOGGEDIN")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 81 , function() {
   });
   GXValidFnc[83]={ id: 83, fld:"TEXTBLOCK_VAR_KEEPMELOGGEDIN", format:0,grid:0};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id:88 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vREMEMBERME",gxz:"ZV50RememberMe",gxold:"OV50RememberMe",gxvar:"AV50RememberMe",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV50RememberMe=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV50RememberMe=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vREMEMBERME",gx.O.AV50RememberMe,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV50RememberMe=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vREMEMBERME")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 88 , function() {
   });
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"TABLE4",grid:0};
   GXValidFnc[94]={ id: 94, fld:"CAPTCHADESCRIPTION", format:0,grid:0};
   GXValidFnc[97]={ id: 97, fld:"",grid:0};
   GXValidFnc[98]={ id:98 ,lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAPTCHAIMAGE",gxz:"ZV17CaptchaImage",gxold:"OV17CaptchaImage",gxvar:"AV17CaptchaImage",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV17CaptchaImage=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17CaptchaImage=Value},v2c:function(){gx.fn.setMultimediaValue("vCAPTCHAIMAGE",gx.O.AV17CaptchaImage,gx.O.AV74Captchaimage_GXI);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV74Captchaimage_GXI=this.val_GXI();if(this.val()!==undefined)gx.O.AV17CaptchaImage=this.val()},val:function(){return gx.fn.getBlobValue("vCAPTCHAIMAGE")},val_GXI:function(){return gx.fn.getControlValue("vCAPTCHAIMAGE_GXI")}, gxvar_GXI:'AV74Captchaimage_GXI',nac:gx.falseFn};
   this.declareDomainHdlr( 98 , function() {
   });
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id:102 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAPTCHATEXT",gxz:"ZV21CaptchaText",gxold:"OV21CaptchaText",gxvar:"AV21CaptchaText",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV21CaptchaText=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV21CaptchaText=Value},v2c:function(){gx.fn.setControlValue("vCAPTCHATEXT",gx.O.AV21CaptchaText,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV21CaptchaText=this.val()},val:function(){return gx.fn.getControlValue("vCAPTCHATEXT")},nac:gx.falseFn};
   this.declareDomainHdlr( 102 , function() {
   });
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[105]={ id: 105, fld:"LOGIN",grid:0,evt:"e132e2_client",std:"ENTER"};
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"",grid:0};
   this.ZV67ImageAuthType = "" ;
   this.OV67ImageAuthType = "" ;
   this.ZV66NameAuthType = "" ;
   this.OV66NameAuthType = "" ;
   this.ZV68TypeAuthType = "" ;
   this.OV68TypeAuthType = "" ;
   this.AV47LogOnTo = "" ;
   this.ZV47LogOnTo = "" ;
   this.OV47LogOnTo = "" ;
   this.AV59UserName = "" ;
   this.ZV59UserName = "" ;
   this.OV59UserName = "" ;
   this.AV60UserPassword = "" ;
   this.ZV60UserPassword = "" ;
   this.OV60UserPassword = "" ;
   this.AV31ForgotPassword_Action = "" ;
   this.ZV31ForgotPassword_Action = "" ;
   this.OV31ForgotPassword_Action = "" ;
   this.AV25CreateAnAccount_Action = "" ;
   this.ZV25CreateAnAccount_Action = "" ;
   this.OV25CreateAnAccount_Action = "" ;
   this.AV42KeepMeLoggedIn = false ;
   this.ZV42KeepMeLoggedIn = false ;
   this.OV42KeepMeLoggedIn = false ;
   this.AV50RememberMe = false ;
   this.ZV50RememberMe = false ;
   this.OV50RememberMe = false ;
   this.AV74Captchaimage_GXI = "" ;
   this.AV17CaptchaImage = "" ;
   this.ZV17CaptchaImage = "" ;
   this.OV17CaptchaImage = "" ;
   this.AV21CaptchaText = "" ;
   this.ZV21CaptchaText = "" ;
   this.OV21CaptchaText = "" ;
   this.AV47LogOnTo = "" ;
   this.AV59UserName = "" ;
   this.AV60UserPassword = "" ;
   this.AV31ForgotPassword_Action = "" ;
   this.AV25CreateAnAccount_Action = "" ;
   this.AV42KeepMeLoggedIn = false ;
   this.AV50RememberMe = false ;
   this.AV17CaptchaImage = "" ;
   this.AV21CaptchaText = "" ;
   this.AV67ImageAuthType = "" ;
   this.AV66NameAuthType = "" ;
   this.AV68TypeAuthType = "" ;
   this.AV43Language = "" ;
   this.AV61UserRememberMe = 0 ;
   this.AV55ShowDetailedMessages = false ;
   this.AV8AmountOfCharacters = 0 ;
   this.AV10ApplicationClientId = "" ;
   this.AV58URL = "" ;
   this.Events = {"e132e2_client": ["ENTER", true] ,"e172e2_client": ["'SELECTAUTHENTICATIONTYPE'", true] ,"e182e2_client": ["CANCEL", true] ,"e112e1_client": ["'E_FORGOTPASSWORD'", false] ,"e122e1_client": ["'E_CREATEANACCOUNT'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDAUTHTYPES_nFirstRecordOnPage'},{av:'GRIDAUTHTYPES_nEOF'},{ctrl:'vLOGONTO'},{av:'AV47LogOnTo',fld:'vLOGONTO',pic:''},{av:'AV59UserName',fld:'vUSERNAME',pic:''},{av:'AV8AmountOfCharacters',fld:'vAMOUNTOFCHARACTERS',pic:'ZZZ9'},{av:'AV43Language',fld:'vLANGUAGE',pic:'',hsh:true},{av:'AV61UserRememberMe',fld:'vUSERREMEMBERME',pic:'Z9',hsh:true},{av:'AV55ShowDetailedMessages',fld:'vSHOWDETAILEDMESSAGES',pic:'',hsh:true},{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}],[{av:'AV31ForgotPassword_Action',fld:'vFORGOTPASSWORD_ACTION',pic:''},{av:'AV25CreateAnAccount_Action',fld:'vCREATEANACCOUNT_ACTION',pic:''},{av:'AV60UserPassword',fld:'vUSERPASSWORD',pic:''},{av:'AV58URL',fld:'vURL',pic:''},{ctrl:'vLOGONTO'},{av:'AV47LogOnTo',fld:'vLOGONTO',pic:''},{av:'gx.fn.getCtrlProperty("EXTERNALAUTHENTICATIONS","Visible")',ctrl:'EXTERNALAUTHENTICATIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vREMEMBERME","Visible")',ctrl:'vREMEMBERME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vKEEPMELOGGEDIN","Visible")',ctrl:'vKEEPMELOGGEDIN',prop:'Visible'},{av:'AV17CaptchaImage',fld:'vCAPTCHAIMAGE',pic:''},{av:'gx.fn.getCtrlProperty("CAPTCHADESCRIPTION","Visible")',ctrl:'CAPTCHADESCRIPTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCAPTCHAIMAGE","Visible")',ctrl:'vCAPTCHAIMAGE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCAPTCHATEXT","Visible")',ctrl:'vCAPTCHATEXT',prop:'Visible'},{av:'AV55ShowDetailedMessages',fld:'vSHOWDETAILEDMESSAGES',pic:'',hsh:true},{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}],[{av:'AV8AmountOfCharacters',fld:'vAMOUNTOFCHARACTERS',pic:'ZZZ9'},{ctrl:'FORM',prop:'Class'},{av:'gx.fn.getCtrlProperty("CURRENTREPOSITORY","Visible")',ctrl:'CURRENTREPOSITORY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURRENTREPOSITORY","Caption")',ctrl:'CURRENTREPOSITORY',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vFORGOTPASSWORD_ACTION","Visible")',ctrl:'vFORGOTPASSWORD_ACTION',prop:'Visible'},{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}]];
   this.EvtParms["ENTER"] = [[{ctrl:'vLOGONTO'},{av:'AV47LogOnTo',fld:'vLOGONTO',pic:''},{av:'AV59UserName',fld:'vUSERNAME',pic:''},{av:'AV21CaptchaText',fld:'vCAPTCHATEXT',pic:''},{av:'AV60UserPassword',fld:'vUSERPASSWORD',pic:''},{av:'AV10ApplicationClientId',fld:'vAPPLICATIONCLIENTID',pic:''},{av:'AV58URL',fld:'vURL',pic:''},{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}],[{av:'AV58URL',fld:'vURL',pic:''},{av:'AV8AmountOfCharacters',fld:'vAMOUNTOFCHARACTERS',pic:'ZZZ9'},{av:'AV10ApplicationClientId',fld:'vAPPLICATIONCLIENTID',pic:''},{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}]];
   this.EvtParms["'E_FORGOTPASSWORD'"] = [[{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}],[{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}]];
   this.EvtParms["'E_CREATEANACCOUNT'"] = [[{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}],[{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}]];
   this.EvtParms["GRIDAUTHTYPES.LOAD"] = [[{av:'gx.fn.getCtrlProperty("EXTERNALAUTHENTICATIONS","Visible")',ctrl:'EXTERNALAUTHENTICATIONS',prop:'Visible'},{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}],[{ctrl:'vTYPEAUTHTYPE'},{av:'AV67ImageAuthType',fld:'vIMAGEAUTHTYPE',pic:''},{av:'AV68TypeAuthType',fld:'vTYPEAUTHTYPE',pic:''},{av:'AV66NameAuthType',fld:'vNAMEAUTHTYPE',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vIMAGEAUTHTYPE","Tooltiptext")',ctrl:'vIMAGEAUTHTYPE',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("EXTERNALAUTHENTICATIONS","Visible")',ctrl:'EXTERNALAUTHENTICATIONS',prop:'Visible'},{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}]];
   this.EvtParms["'SELECTAUTHENTICATIONTYPE'"] = [[{av:'AV66NameAuthType',fld:'vNAMEAUTHTYPE',pic:'',hsh:true},{av:'AV59UserName',fld:'vUSERNAME',pic:''},{av:'AV60UserPassword',fld:'vUSERPASSWORD',pic:''},{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}],[{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}]];
   this.EvtParms["VALIDV_TYPEAUTHTYPE"] = [[{ctrl:'vTYPEAUTHTYPE'},{av:'AV68TypeAuthType',fld:'vTYPEAUTHTYPE',pic:''},{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}],[{ctrl:'vTYPEAUTHTYPE'},{av:'AV68TypeAuthType',fld:'vTYPEAUTHTYPE',pic:''},{av:'AV42KeepMeLoggedIn',fld:'vKEEPMELOGGEDIN',pic:''},{av:'AV50RememberMe',fld:'vREMEMBERME',pic:''}]];
   this.EnterCtrl = ["LOGIN"];
   this.setVCMap("AV43Language", "vLANGUAGE", 0, "char", 3, 0);
   this.setVCMap("AV61UserRememberMe", "vUSERREMEMBERME", 0, "int", 2, 0);
   this.setVCMap("AV55ShowDetailedMessages", "vSHOWDETAILEDMESSAGES", 0, "boolean", 4, 0);
   this.setVCMap("AV8AmountOfCharacters", "vAMOUNTOFCHARACTERS", 0, "int", 4, 0);
   this.setVCMap("AV10ApplicationClientId", "vAPPLICATIONCLIENTID", 0, "char", 40, 0);
   this.setVCMap("AV58URL", "vURL", 0, "svchar", 2048, 250);
   this.setVCMap("AV43Language", "vLANGUAGE", 0, "char", 3, 0);
   this.setVCMap("AV61UserRememberMe", "vUSERREMEMBERME", 0, "int", 2, 0);
   this.setVCMap("AV55ShowDetailedMessages", "vSHOWDETAILEDMESSAGES", 0, "boolean", 4, 0);
   this.setVCMap("AV8AmountOfCharacters", "vAMOUNTOFCHARACTERS", 0, "int", 4, 0);
   this.setVCMap("AV43Language", "vLANGUAGE", 0, "char", 3, 0);
   this.setVCMap("AV61UserRememberMe", "vUSERREMEMBERME", 0, "int", 2, 0);
   this.setVCMap("AV55ShowDetailedMessages", "vSHOWDETAILEDMESSAGES", 0, "boolean", 4, 0);
   this.setVCMap("AV8AmountOfCharacters", "vAMOUNTOFCHARACTERS", 0, "int", 4, 0);
   GridauthtypesContainer.addRefreshingVar(this.GXValidFnc[55]);
   GridauthtypesContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridauthtypesContainer.addRefreshingVar({rfrVar:"AV43Language"});
   GridauthtypesContainer.addRefreshingVar({rfrVar:"AV61UserRememberMe"});
   GridauthtypesContainer.addRefreshingVar({rfrVar:"AV55ShowDetailedMessages"});
   GridauthtypesContainer.addRefreshingVar({rfrVar:"AV8AmountOfCharacters"});
   GridauthtypesContainer.addRefreshingParm(this.GXValidFnc[55]);
   GridauthtypesContainer.addRefreshingParm(this.GXValidFnc[59]);
   GridauthtypesContainer.addRefreshingParm({rfrVar:"AV43Language"});
   GridauthtypesContainer.addRefreshingParm({rfrVar:"AV61UserRememberMe"});
   GridauthtypesContainer.addRefreshingParm({rfrVar:"AV55ShowDetailedMessages"});
   GridauthtypesContainer.addRefreshingParm({rfrVar:"AV8AmountOfCharacters"});
   GridauthtypesContainer.addRefreshingParm(this.GXValidFnc[81]);
   GridauthtypesContainer.addRefreshingParm(this.GXValidFnc[88]);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.login);});
