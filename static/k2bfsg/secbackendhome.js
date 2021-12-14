gx.evt.autoSkip = false;
gx.define('k2bfsg.secbackendhome', false, function () {
   this.ServerClass =  "k2bfsg.secbackendhome" ;
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
      this.AV5ActivityList=gx.fn.getControlValue("vACTIVITYLIST") ;
      this.AV5ActivityList=gx.fn.getControlValue("vACTIVITYLIST") ;
   };
   this.e20211_client=function()
   {
      this.clearMessages();
      if ( this.AV5ActivityList[1 - 1].IsAuthorized )
      {
         this.call("com.movuts.k2bfsg.wwuser", []);
      }
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e19211_client=function()
   {
      this.clearMessages();
      if ( this.AV5ActivityList[2 - 1].IsAuthorized )
      {
         this.call("com.movuts.k2bfsg.wwrole", []);
      }
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e18211_client=function()
   {
      this.clearMessages();
      if ( this.AV5ActivityList[3 - 1].IsAuthorized )
      {
         this.call("com.movuts.k2bfsg.wwapplication", []);
      }
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e16211_client=function()
   {
      this.clearMessages();
      if ( this.AV5ActivityList[4 - 1].IsAuthorized )
      {
         this.call("com.movuts.k2bfsg.wwauthtype", []);
      }
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e13211_client=function()
   {
      this.clearMessages();
      this.call("com.movuts.k2bfsg.wwsecuritypolicy", []);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e14211_client=function()
   {
      this.clearMessages();
      this.call("com.movuts.k2bfsg.repositoryconfiguration", []);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e15211_client=function()
   {
      this.clearMessages();
      this.call("com.movuts.k2bfsg.wwconnections", []);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e17211_client=function()
   {
      this.clearMessages();
      if ( this.AV5ActivityList[1 - 1].IsAuthorized )
      {
         this.call("com.movuts.k2bfsg.wwmenu", []);
      }
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e21212_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e22212_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,15,18,21,24,25,26,29,32,35,38,39,40,43,46,49,52,53,54,55,58,61,64,67,68,69,72,75,78,81,82,83,86,89,92,95,98,99,100];
   this.GXLastCtrlId =100;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 101, 0, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[6]={ id: 6, fld:"TITLE", format:0,grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TABLE1",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"TABLE2",grid:0};
   GXValidFnc[15]={ id: 15, fld:"IMAGEUSERS",grid:0};
   GXValidFnc[18]={ id: 18, fld:"TEXTBLOCKUSERS", format:0,grid:0};
   GXValidFnc[21]={ id: 21, fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={ id: 24, fld:"BUTTONUSERS",grid:0,evt:"e20211_client"};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"TABLE3",grid:0};
   GXValidFnc[29]={ id: 29, fld:"IMAGEROLES",grid:0};
   GXValidFnc[32]={ id: 32, fld:"TEXTBLOCKROLES", format:0,grid:0};
   GXValidFnc[35]={ id: 35, fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[38]={ id: 38, fld:"BUTTONROLES",grid:0,evt:"e19211_client"};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"TABLE4",grid:0};
   GXValidFnc[43]={ id: 43, fld:"IMAGEAPPLICATIONS",grid:0};
   GXValidFnc[46]={ id: 46, fld:"TEXTBLOCKAPPLICATIONS", format:0,grid:0};
   GXValidFnc[49]={ id: 49, fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[52]={ id: 52, fld:"BUTTONAPPLICATIONS",grid:0,evt:"e18211_client"};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"TABLE7",grid:0};
   GXValidFnc[58]={ id: 58, fld:"MENUIMAGE",grid:0};
   GXValidFnc[61]={ id: 61, fld:"MENUS1", format:0,grid:0};
   GXValidFnc[64]={ id: 64, fld:"MENUDESCRIPTION", format:0,grid:0};
   GXValidFnc[67]={ id: 67, fld:"MENUS",grid:0,evt:"e17211_client"};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"TABLE5",grid:0};
   GXValidFnc[72]={ id: 72, fld:"IMAGEAUTHTYPE",grid:0};
   GXValidFnc[75]={ id: 75, fld:"TEXTBLOCKAUTHENTICATIONTYPES", format:0,grid:0};
   GXValidFnc[78]={ id: 78, fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[81]={ id: 81, fld:"BUTTONAUTHTYPES",grid:0,evt:"e16211_client"};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id: 83, fld:"TABLE6",grid:0};
   GXValidFnc[86]={ id: 86, fld:"IMAGEADVANCED",grid:0};
   GXValidFnc[89]={ id: 89, fld:"TEXTBLOCKADVANCED", format:0,grid:0};
   GXValidFnc[92]={ id: 92, fld:"TEXTBLOCKSECURITYPOLICIES", format:0,grid:0,evt:"e13211_client"};
   GXValidFnc[95]={ id: 95, fld:"TEXTBLOCKREPOSITORYCONFIGURATIONS", format:0,grid:0,evt:"e14211_client"};
   GXValidFnc[98]={ id: 98, fld:"TEXTBLOCKCONNECTIONS", format:0,grid:0,evt:"e15211_client"};
   GXValidFnc[99]={ id: 99, fld:"",grid:0};
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   this.AV5ActivityList = [ ] ;
   this.Events = {"e21212_client": ["ENTER", true] ,"e22212_client": ["CANCEL", true] ,"e20211_client": ["'USERS'", false] ,"e19211_client": ["'ROLES'", false] ,"e18211_client": ["'APPLICATIONS'", false] ,"e16211_client": ["'AUTHTYPES'", false] ,"e13211_client": ["'SECURITYPOLICIES'", false] ,"e14211_client": ["'REPOSITORYCONFIGURATIONS'", false] ,"e15211_client": ["'CONNECTIONS'", false] ,"e17211_client": ["'MENUS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV5ActivityList',fld:'vACTIVITYLIST',pic:'',hsh:true}],[]];
   this.EvtParms["START"] = [[],[{av:'AV5ActivityList',fld:'vACTIVITYLIST',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("IMAGEUSERS","Link")',ctrl:'IMAGEUSERS',prop:'Link'},{av:'gx.fn.getCtrlProperty("IMAGEROLES","Link")',ctrl:'IMAGEROLES',prop:'Link'},{av:'gx.fn.getCtrlProperty("IMAGEAPPLICATIONS","Link")',ctrl:'IMAGEAPPLICATIONS',prop:'Link'},{av:'gx.fn.getCtrlProperty("IMAGEAUTHTYPE","Link")',ctrl:'IMAGEAUTHTYPE',prop:'Link'},{av:'gx.fn.getCtrlProperty("MENUIMAGE","Link")',ctrl:'MENUIMAGE',prop:'Link'},{ctrl:'BUTTONUSERS',prop:'Enabled'},{ctrl:'BUTTONUSERS',prop:'Caption'},{ctrl:'BUTTONUSERS',prop:'Class'},{ctrl:'BUTTONROLES',prop:'Enabled'},{ctrl:'BUTTONROLES',prop:'Class'},{ctrl:'BUTTONROLES',prop:'Caption'},{ctrl:'BUTTONAPPLICATIONS',prop:'Enabled'},{ctrl:'BUTTONAPPLICATIONS',prop:'Caption'},{ctrl:'BUTTONAPPLICATIONS',prop:'Class'},{ctrl:'BUTTONAUTHTYPES',prop:'Caption'},{ctrl:'BUTTONAUTHTYPES',prop:'Enabled'},{ctrl:'BUTTONAUTHTYPES',prop:'Class'}]];
   this.EvtParms["'USERS'"] = [[{av:'AV5ActivityList',fld:'vACTIVITYLIST',pic:'',hsh:true}],[]];
   this.EvtParms["'ROLES'"] = [[{av:'AV5ActivityList',fld:'vACTIVITYLIST',pic:'',hsh:true}],[]];
   this.EvtParms["'APPLICATIONS'"] = [[{av:'AV5ActivityList',fld:'vACTIVITYLIST',pic:'',hsh:true}],[]];
   this.EvtParms["'AUTHTYPES'"] = [[{av:'AV5ActivityList',fld:'vACTIVITYLIST',pic:'',hsh:true}],[]];
   this.EvtParms["'SECURITYPOLICIES'"] = [[],[]];
   this.EvtParms["'REPOSITORYCONFIGURATIONS'"] = [[],[]];
   this.EvtParms["'CONNECTIONS'"] = [[],[]];
   this.EvtParms["'MENUS'"] = [[{av:'AV5ActivityList',fld:'vACTIVITYLIST',pic:'',hsh:true}],[]];
   this.setVCMap("AV5ActivityList", "vACTIVITYLIST", 0, "CollK2BActivityList.K2BActivityListItem", 0, 0);
   this.setVCMap("AV5ActivityList", "vACTIVITYLIST", 0, "CollK2BActivityList.K2BActivityListItem", 0, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.secbackendhome);});
