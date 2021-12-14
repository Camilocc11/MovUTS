gx.evt.autoSkip = false;
gx.define('k2bfsg.testauthenticationtype', false, function () {
   this.ServerClass =  "k2bfsg.testauthenticationtype" ;
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
      this.AV13Name=gx.fn.getControlValue("vNAME") ;
      this.AV16TypeId=gx.fn.getControlValue("vTYPEID") ;
   };
   this.s112_client=function()
   {
      gx.fn.setCtrlProperty("TITLE","Caption", gx.text.format( "Probando tipo de autenticación: %1", this.AV13Name, "", "", "", "", "", "", "", "") );
   };
   this.s122_client=function()
   {
   };
   this.s132_client=function()
   {
   };
   this.e132o2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152o2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];
   this.GXLastCtrlId =48;
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 49, 37, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[28]={ id: 28, fld:"TEXTBLOCK_ATTRIBUTES_ATTRIBUTES", format:0,grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"TABLE_CONTAINER_USERNAME",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id:37 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",gxz:"ZV17UserName",gxold:"OV17UserName",gxvar:"AV17UserName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV17UserName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17UserName=Value},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV17UserName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV17UserName=this.val()},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"TABLE_CONTAINER_USERPASSWORD",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id:43 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORD",gxz:"ZV18UserPassword",gxold:"OV18UserPassword",gxvar:"AV18UserPassword",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV18UserPassword=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV18UserPassword=Value},v2c:function(){gx.fn.setControlValue("vUSERPASSWORD",gx.O.AV18UserPassword,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV18UserPassword=this.val()},val:function(){return gx.fn.getControlValue("vUSERPASSWORD")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"TEST",grid:0,evt:"e132o2_client",std:"ENTER"};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   this.AV17UserName = "" ;
   this.ZV17UserName = "" ;
   this.OV17UserName = "" ;
   this.AV18UserPassword = "" ;
   this.ZV18UserPassword = "" ;
   this.OV18UserPassword = "" ;
   this.AV17UserName = "" ;
   this.AV18UserPassword = "" ;
   this.AV13Name = "" ;
   this.AV16TypeId = "" ;
   this.Events = {"e132o2_client": ["ENTER", true] ,"e152o2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV13Name',fld:'vNAME',pic:'',hsh:true}],[]];
   this.EvtParms["START"] = [[{av:'AV13Name',fld:'vNAME',pic:'',hsh:true}],[{av:'gx.fn.getCtrlProperty("TITLE","Caption")',ctrl:'TITLE',prop:'Caption'}]];
   this.EvtParms["ENTER"] = [[{av:'AV13Name',fld:'vNAME',pic:'',hsh:true},{av:'AV17UserName',fld:'vUSERNAME',pic:''},{av:'AV18UserPassword',fld:'vUSERPASSWORD',pic:''}],[]];
   this.EnterCtrl = ["TEST"];
   this.setVCMap("AV13Name", "vNAME", 0, "char", 60, 0);
   this.setVCMap("AV16TypeId", "vTYPEID", 0, "char", 30, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.testauthenticationtype);});
