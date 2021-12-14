gx.evt.autoSkip = false;
gx.define('k2bfsg.recoverpasswordstep1', false, function () {
   this.ServerClass =  "k2bfsg.recoverpasswordstep1" ;
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
      this.AV9CaptchaIsCorrect=gx.fn.getControlValue("vCAPTCHAISCORRECT") ;
      this.AV45UserAuthTypeName=gx.fn.getControlValue("vUSERAUTHTYPENAME") ;
      this.AV22LastEmailSent=gx.fn.getDateTimeValue("vLASTEMAILSENT") ;
      this.AV35ShowDetailedMessages=gx.fn.getControlValue("vSHOWDETAILEDMESSAGES") ;
      this.AV15ErrorMessage=gx.fn.getControlValue("vERRORMESSAGE") ;
   };
   this.Validv_Userbirthday=function()
   {
      return this.validCliEvt("Validv_Userbirthday", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSERBIRTHDAY");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV59UserBirthDay)===0) || new gx.date.gxdate( this.AV59UserBirthDay ).compare( gx.date.ymdtod( 1753, 1, 1) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo User Birth Day fuera de rango");
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
   this.s112_client=function()
   {
   };
   this.e13332_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15332_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,75,76,77];
   this.GXLastCtrlId =77;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 78, 33, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[14]={ id: 14, fld:"TITLECELL_ATTRIBUTES_ATTRIBUTES",grid:0};
   GXValidFnc[15]={ id: 15, fld:"TITLECONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[18]={ id: 18, fld:"TEXTBLOCK_ATTRIBUTES_ATTRIBUTES", format:0,grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"COLUMNS_MAINCOLUMNSTABLE",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"COLUMNCONTAINERTABLE_COLUMN",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"TABLE_CONTAINER_USERNAME",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id:33 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV57UserName",gxold:"OV57UserName",gxvar:"AV57UserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV57UserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV57UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV57UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV57UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"TABLE_CONTAINER_USEREMAIL",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSEREMAIL",gxz:"ZV58UserEmail",gxold:"OV58UserEmail",gxvar:"AV58UserEmail",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV58UserEmail=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV58UserEmail=Value},v2c:function(){gx.fn.setControlValue("vUSEREMAIL",gx.O.AV58UserEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV58UserEmail=this.val()},val:function(){return gx.fn.getControlValue("vUSEREMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"TABLE_CONTAINER_USERBIRTHDAY",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Userbirthday,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERBIRTHDAY",gxz:"ZV59UserBirthDay",gxold:"OV59UserBirthDay",gxvar:"AV59UserBirthDay",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[45],ip:[45],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV59UserBirthDay=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV59UserBirthDay=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vUSERBIRTHDAY",gx.O.AV59UserBirthDay,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV59UserBirthDay=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vUSERBIRTHDAY")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"TABLE_CONTAINER_USERFIRSTNAME",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id:51 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERFIRSTNAME",gxz:"ZV60UserFirstName",gxold:"OV60UserFirstName",gxvar:"AV60UserFirstName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV60UserFirstName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV60UserFirstName=Value},v2c:function(){gx.fn.setControlValue("vUSERFIRSTNAME",gx.O.AV60UserFirstName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV60UserFirstName=this.val()},val:function(){return gx.fn.getControlValue("vUSERFIRSTNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"COLUMNCONTAINERTABLE_COLUMN1",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"CAPTCHADESCRIPTION", format:0,grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"TABLE_CONTAINER_CAPTCHAIMAGE",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id:61 ,lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAPTCHAIMAGE",gxz:"ZV61CaptchaImage",gxold:"OV61CaptchaImage",gxvar:"AV61CaptchaImage",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV61CaptchaImage=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV61CaptchaImage=Value},v2c:function(){gx.fn.setMultimediaValue("vCAPTCHAIMAGE",gx.O.AV61CaptchaImage,gx.O.AV66Captchaimage_GXI);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV66Captchaimage_GXI=this.val_GXI();if(this.val()!==undefined)gx.O.AV61CaptchaImage=this.val()},val:function(){return gx.fn.getBlobValue("vCAPTCHAIMAGE")},val_GXI:function(){return gx.fn.getControlValue("vCAPTCHAIMAGE_GXI")}, gxvar_GXI:'AV66Captchaimage_GXI',nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"TABLE_CONTAINER_CAPTCHATEXT",grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAPTCHATEXT",gxz:"ZV62CaptchaText",gxold:"OV62CaptchaText",gxvar:"AV62CaptchaText",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV62CaptchaText=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV62CaptchaText=Value},v2c:function(){gx.fn.setControlValue("vCAPTCHATEXT",gx.O.AV62CaptchaText,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV62CaptchaText=this.val()},val:function(){return gx.fn.getControlValue("vCAPTCHATEXT")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[75]={ id: 75, fld:"CONFIRM",grid:0,evt:"e13332_client",std:"ENTER"};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   this.AV57UserName = "" ;
   this.ZV57UserName = "" ;
   this.OV57UserName = "" ;
   this.AV58UserEmail = "" ;
   this.ZV58UserEmail = "" ;
   this.OV58UserEmail = "" ;
   this.AV59UserBirthDay = gx.date.nullDate() ;
   this.ZV59UserBirthDay = gx.date.nullDate() ;
   this.OV59UserBirthDay = gx.date.nullDate() ;
   this.AV60UserFirstName = "" ;
   this.ZV60UserFirstName = "" ;
   this.OV60UserFirstName = "" ;
   this.AV66Captchaimage_GXI = "" ;
   this.AV61CaptchaImage = "" ;
   this.ZV61CaptchaImage = "" ;
   this.OV61CaptchaImage = "" ;
   this.AV62CaptchaText = "" ;
   this.ZV62CaptchaText = "" ;
   this.OV62CaptchaText = "" ;
   this.AV57UserName = "" ;
   this.AV58UserEmail = "" ;
   this.AV59UserBirthDay = gx.date.nullDate() ;
   this.AV60UserFirstName = "" ;
   this.AV61CaptchaImage = "" ;
   this.AV62CaptchaText = "" ;
   this.AV9CaptchaIsCorrect = false ;
   this.AV45UserAuthTypeName = "" ;
   this.AV22LastEmailSent = gx.date.nullDate() ;
   this.AV44User = {} ;
   this.AV35ShowDetailedMessages = false ;
   this.AV15ErrorMessage = "" ;
   this.Events = {"e13332_client": ["ENTER", true] ,"e15332_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV45UserAuthTypeName',fld:'vUSERAUTHTYPENAME',pic:'',hsh:true}],[{av:'gx.fn.getCtrlProperty("vUSERBIRTHDAY","Visible")',ctrl:'vUSERBIRTHDAY',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vUSEREMAIL","Visible")',ctrl:'vUSEREMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vUSERFIRSTNAME","Visible")',ctrl:'vUSERFIRSTNAME',prop:'Visible'}]];
   this.EvtParms["START"] = [[{av:'AV6AmountOfCharacters',fld:'vAMOUNTOFCHARACTERS',pic:'ZZZ9'}],[{av:'AV6AmountOfCharacters',fld:'vAMOUNTOFCHARACTERS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("CAPTCHADESCRIPTION","Visible")',ctrl:'CAPTCHADESCRIPTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCAPTCHAIMAGE","Visible")',ctrl:'vCAPTCHAIMAGE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCAPTCHATEXT","Visible")',ctrl:'vCAPTCHATEXT',prop:'Visible'},{av:'AV62CaptchaText',fld:'vCAPTCHATEXT',pic:''},{av:'AV61CaptchaImage',fld:'vCAPTCHAIMAGE',pic:''}]];
   this.EvtParms["ENTER"] = [[{av:'AV9CaptchaIsCorrect',fld:'vCAPTCHAISCORRECT',pic:''},{av:'AV45UserAuthTypeName',fld:'vUSERAUTHTYPENAME',pic:'',hsh:true},{av:'AV57UserName',fld:'vUSERNAME',pic:''},{av:'AV59UserBirthDay',fld:'vUSERBIRTHDAY',pic:''},{av:'AV58UserEmail',fld:'vUSEREMAIL',pic:''},{av:'AV60UserFirstName',fld:'vUSERFIRSTNAME',pic:''},{av:'AV62CaptchaText',fld:'vCAPTCHATEXT',pic:''},{av:'AV22LastEmailSent',fld:'vLASTEMAILSENT',pic:'99/99/99 99:99'},{av:'this.AV44User.Email',ctrl:'vUSER',prop:'Email'},{av:'AV35ShowDetailedMessages',fld:'vSHOWDETAILEDMESSAGES',pic:''},{av:'AV15ErrorMessage',fld:'vERRORMESSAGE',pic:''}],[{av:'AV15ErrorMessage',fld:'vERRORMESSAGE',pic:''},{av:'AV9CaptchaIsCorrect',fld:'vCAPTCHAISCORRECT',pic:''},{av:'AV35ShowDetailedMessages',fld:'vSHOWDETAILEDMESSAGES',pic:''},{av:'AV22LastEmailSent',fld:'vLASTEMAILSENT',pic:'99/99/99 99:99'}]];
   this.EvtParms["VALIDV_USERBIRTHDAY"] = [[],[]];
   this.EnterCtrl = ["CONFIRM"];
   this.setVCMap("AV9CaptchaIsCorrect", "vCAPTCHAISCORRECT", 0, "boolean", 4, 0);
   this.setVCMap("AV45UserAuthTypeName", "vUSERAUTHTYPENAME", 0, "char", 60, 0);
   this.setVCMap("AV22LastEmailSent", "vLASTEMAILSENT", 0, "dtime", 8, 5);
   this.setVCMap("AV35ShowDetailedMessages", "vSHOWDETAILEDMESSAGES", 0, "boolean", 4, 0);
   this.setVCMap("AV15ErrorMessage", "vERRORMESSAGE", 0, "char", 500, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.recoverpasswordstep1);});
