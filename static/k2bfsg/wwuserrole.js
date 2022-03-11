gx.evt.autoSkip = false;
gx.define('k2bfsg.wwuserrole', true, function (CmpContext) {
   this.ServerClass =  "k2bfsg.wwuserrole" ;
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
      this.AV17UserId=gx.fn.getControlValue("vUSERID") ;
      this.AV18isDirectRole=gx.fn.getControlValue("vISDIRECTROLE") ;
      this.AV31I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV51Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV29CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV44DeletedTag_Grid=gx.fn.getControlValue("vDELETEDTAG_GRID") ;
      this.AV29CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV51Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV18isDirectRole=gx.fn.getControlValue("vISDIRECTROLE") ;
      this.AV17UserId=gx.fn.getControlValue("vUSERID") ;
      this.AV31I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV44DeletedTag_Grid=gx.fn.getControlValue("vDELETEDTAG_GRID") ;
   };
   this.s112_client=function()
   {
   };
   this.s172_client=function()
   {
   };
   this.s202_client=function()
   {
      this.s262_client();
   };
   this.s262_client=function()
   {
      gx.fn.setCtrlProperty("ADD","Visible", true );
   };
   this.s212_client=function()
   {
   };
   this.e222v1_client=function()
   {
      this.clearMessages();
      if ( this.AV44DeletedTag_Grid == "DisplayInheritRoles" )
      {
         this.AV37DisplayInheritRoles =  false  ;
      }
      this.refreshOutputs([{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e172v2_client=function()
   {
      return this.executeServerEvent("'E_DELETE'", true, arguments[0], false, false);
   };
   this.e182v2_client=function()
   {
      return this.executeServerEvent("'E_MAINROLE'", true, arguments[0], false, false);
   };
   this.e112v2_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID.CLICK", true, null, false, true);
   };
   this.e122v2_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID.CLICK", true, null, false, true);
   };
   this.e132v2_client=function()
   {
      return this.executeServerEvent("'E_ADD'", false, null, false, false);
   };
   this.e142v2_client=function()
   {
      return this.executeServerEvent("GRIDTITLE_GRID.CLICK", true, null, false, true);
   };
   this.e152v2_client=function()
   {
      return this.executeServerEvent("COLLAPSIBLEIMAGE_GRID.CLICK", true, null, false, true);
   };
   this.e232v2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e242v2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,18,20,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,62,65,66,67,68,69,70,71,72,73,75,76,77,78,79,80,81,82,85,86,87,88];
   this.GXLastCtrlId =88;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",74,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.wwuserrole",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Name",75,"vNAME","Nombre","","Name","char",0,"px",120,80,"left",null,[],"Name","Name",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   GridContainer.addSingleLineEdit("Guid",76,"vGUID","GUID","","GUID","char",0,"px",40,40,"left",null,[],"Guid","GUID",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addSingleLineEdit("Id",77,"vID","Id","","Id","int",0,"px",12,12,"right",null,[],"Id","Id",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addSingleLineEdit("Mainrole_action",78,"vMAINROLE_ACTION","","","MainRole_Action","char",0,"px",20,20,"left","e182v2_client",[],"Mainrole_action","MainRole_Action",true,0,false,false,"Attribute_Grid K2BT_TextAction",1,"K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover InvisibleInExtraSmallColumn");
   GridContainer.addBitmap("&Delete_action","vDELETE_ACTION",79,14,"px",17,"px","e172v2_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.FILTERTAGSUSERCONTROL_GRIDContainer = gx.uc.getNew(this, 42, 0, "K2BTagsViewer", this.CmpContext + "FILTERTAGSUSERCONTROL_GRIDContainer", "Filtertagsusercontrol_grid", "FILTERTAGSUSERCONTROL_GRID");
   var FILTERTAGSUSERCONTROL_GRIDContainer = this.FILTERTAGSUSERCONTROL_GRIDContainer;
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Class", "Class", "", "char");
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Enabled", "Enabled", true, "boolean");
   FILTERTAGSUSERCONTROL_GRIDContainer.setDynProp("EmptyStateMessage", "Emptystatemessage", "", "char");
   FILTERTAGSUSERCONTROL_GRIDContainer.addV2CFunction('AV43FilterTagsCollection_Grid', "vFILTERTAGSCOLLECTION_GRID", 'SetTagValues');
   FILTERTAGSUSERCONTROL_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV43FilterTagsCollection_Grid=UC.GetTagValues();gx.fn.setControlValue("vFILTERTAGSCOLLECTION_GRID",UC.ParentObject.AV43FilterTagsCollection_Grid); });
   FILTERTAGSUSERCONTROL_GRIDContainer.addV2CFunction('AV44DeletedTag_Grid', "vDELETEDTAG_GRID", 'SetDeletedTag');
   FILTERTAGSUSERCONTROL_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV44DeletedTag_Grid=UC.GetDeletedTag();gx.fn.setControlValue("vDELETEDTAG_GRID",UC.ParentObject.AV44DeletedTag_Grid); });
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Visible", "Visible", true, "bool");
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   FILTERTAGSUSERCONTROL_GRIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   FILTERTAGSUSERCONTROL_GRIDContainer.addEventHandler("TagDeleted", this.e222v1_client);
   this.setUserControl(FILTERTAGSUSERCONTROL_GRIDContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 89, 56, "K2BControlBeautify", this.CmpContext + "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[12]={ id: 12, fld:"GRIDCOMPONENT_GRID",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"GRIDTITLECONTAINERTABLE_GRID",grid:0};
   GXValidFnc[18]={ id: 18, fld:"GRIDTITLE_GRID", format:0,grid:0,evt:"e142v2_client"};
   GXValidFnc[20]={ id: 20, fld:"COLLAPSIBLEIMAGECONTAINER_GRID",grid:0};
   GXValidFnc[23]={ id: 23, fld:"COLLAPSIBLEIMAGE_GRID",grid:0,evt:"e152v2_client"};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"GRIDCOMPONENTCONTENT_GRID",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"LAYOUTDEFINED_GRID_INNER_GRID",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"LAYOUTDEFINED_TABLE10_GRID",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"LAYOUTDEFINED_FILTERGLOBALCONTAINER_GRID",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"LAYOUTDEFINED_ONLYDETAILEDFILTERLAYOUT_GRID",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"LAYOUTDEFINED_SECTION5_GRID",grid:0};
   GXValidFnc[41]={ id: 41, fld:"LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID",grid:0,evt:"e112v2_client"};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID",grid:0};
   GXValidFnc[46]={ id: 46, fld:"LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID",grid:0,evt:"e122v2_client"};
   GXValidFnc[47]={ id: 47, fld:"MAINFILTERRESPONSIVETABLE_FILTERS",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"FILTERCONTAINERTABLE_FILTERS",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"TABLE_CONTAINER_DISPLAYINHERITROLES",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id:56 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDISPLAYINHERITROLES",gxz:"ZV37DisplayInheritRoles",gxold:"OV37DisplayInheritRoles",gxvar:"AV37DisplayInheritRoles",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV37DisplayInheritRoles=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV37DisplayInheritRoles=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vDISPLAYINHERITROLES",gx.O.AV37DisplayInheritRoles,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV37DisplayInheritRoles=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vDISPLAYINHERITROLES")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"LAYOUTDEFINED_TABLE7_GRID",grid:0};
   GXValidFnc[62]={ id: 62, fld:"ACTIONS_GRID_TOPRIGHT",grid:0};
   GXValidFnc[65]={ id: 65, fld:"ADD",grid:0,evt:"e132v2_client"};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[75]={ id:75 ,lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:74,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV34Name",gxold:"OV34Name",gxvar:"AV34Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV34Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV34Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(74),gx.O.AV34Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV34Name=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(74))},nac:gx.falseFn};
   GXValidFnc[76]={ id:76 ,lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:74,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGUID",gxz:"ZV35GUID",gxold:"OV35GUID",gxvar:"AV35GUID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV35GUID=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV35GUID=Value},v2c:function(row){gx.fn.setGridControlValue("vGUID",row || gx.fn.currentGridRowImpl(74),gx.O.AV35GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV35GUID=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vGUID",row || gx.fn.currentGridRowImpl(74))},nac:gx.falseFn};
   GXValidFnc[77]={ id:77 ,lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:74,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV36Id",gxold:"OV36Id",gxvar:"AV36Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.AV36Id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV36Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(74),gx.O.AV36Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV36Id=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("vID",row || gx.fn.currentGridRowImpl(74),'.')},nac:gx.falseFn};
   GXValidFnc[78]={ id:78 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:74,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMAINROLE_ACTION",gxz:"ZV33MainRole_Action",gxold:"OV33MainRole_Action",gxvar:"AV33MainRole_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV33MainRole_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV33MainRole_Action=Value},v2c:function(row){gx.fn.setGridControlValue("vMAINROLE_ACTION",row || gx.fn.currentGridRowImpl(74),gx.O.AV33MainRole_Action,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV33MainRole_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vMAINROLE_ACTION",row || gx.fn.currentGridRowImpl(74))},nac:gx.falseFn,evt:"e182v2_client"};
   GXValidFnc[79]={ id:79 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:74,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE_ACTION",gxz:"ZV41Delete_Action",gxold:"OV41Delete_Action",gxvar:"AV41Delete_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV41Delete_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV41Delete_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(74),gx.O.AV41Delete_Action,gx.O.AV49Delete_action_GXI)},c2v:function(row){gx.O.AV49Delete_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV41Delete_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(74))},val_GXI:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION_GXI",row || gx.fn.currentGridRowImpl(74))}, gxvar_GXI:'AV49Delete_action_GXI',nac:gx.falseFn,evt:"e172v2_client"};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};
   GXValidFnc[85]={ id: 85, fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID", format:0,grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   this.AV37DisplayInheritRoles = false ;
   this.ZV37DisplayInheritRoles = false ;
   this.OV37DisplayInheritRoles = false ;
   this.ZV34Name = "" ;
   this.OV34Name = "" ;
   this.ZV35GUID = "" ;
   this.OV35GUID = "" ;
   this.ZV36Id = 0 ;
   this.OV36Id = 0 ;
   this.ZV33MainRole_Action = "" ;
   this.OV33MainRole_Action = "" ;
   this.ZV41Delete_Action = "" ;
   this.OV41Delete_Action = "" ;
   this.AV43FilterTagsCollection_Grid = [ ] ;
   this.AV37DisplayInheritRoles = false ;
   this.AV17UserId = "" ;
   this.AV34Name = "" ;
   this.AV35GUID = "" ;
   this.AV36Id = 0 ;
   this.AV33MainRole_Action = "" ;
   this.AV41Delete_Action = "" ;
   this.AV18isDirectRole = false ;
   this.AV31I_LoadCount_Grid = 0 ;
   this.AV51Pgmname = "" ;
   this.AV29CurrentPage_Grid = 0 ;
   this.AV44DeletedTag_Grid = "" ;
   this.Events = {"e172v2_client": ["'E_DELETE'", true] ,"e182v2_client": ["'E_MAINROLE'", true] ,"e112v2_client": ["LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID.CLICK", true] ,"e122v2_client": ["LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID.CLICK", true] ,"e132v2_client": ["'E_ADD'", true] ,"e142v2_client": ["GRIDTITLE_GRID.CLICK", true] ,"e152v2_client": ["COLLAPSIBLEIMAGE_GRID.CLICK", true] ,"e232v2_client": ["ENTER", true] ,"e242v2_client": ["CANCEL", true] ,"e222v1_client": ["FILTERTAGSUSERCONTROL_GRID.TAGDELETED", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV17UserId',fld:'vUSERID',pic:''},{av:'sPrefix'},{av:'AV18isDirectRole',fld:'vISDIRECTROLE',pic:'',hsh:true},{av:'AV31I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV29CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}],[{av:'AV29CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{ctrl:'ADD',prop:'Visible'},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'this.FILTERTAGSUSERCONTROL_GRIDContainer.EmptyStateMessage',ctrl:'FILTERTAGSUSERCONTROL_GRID',prop:'EmptyStateMessage'},{av:'AV43FilterTagsCollection_Grid',fld:'vFILTERTAGSCOLLECTION_GRID',pic:''},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV29CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV18isDirectRole',fld:'vISDIRECTROLE',pic:'',hsh:true},{av:'AV17UserId',fld:'vUSERID',pic:''},{av:'AV31I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'sPrefix'},{av:'AV36Id',fld:'vID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}],[{av:'AV29CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{ctrl:'ADD',prop:'Visible'},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}]];
   this.EvtParms["'E_MAINROLE'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV29CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV18isDirectRole',fld:'vISDIRECTROLE',pic:'',hsh:true},{av:'AV17UserId',fld:'vUSERID',pic:''},{av:'AV31I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'sPrefix'},{av:'AV36Id',fld:'vID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}],[{av:'AV29CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{ctrl:'ADD',prop:'Visible'},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV18isDirectRole',fld:'vISDIRECTROLE',pic:'',hsh:true},{av:'AV17UserId',fld:'vUSERID',pic:''},{av:'AV31I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_GRID',prop:'Visible'},{av:'AV31I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV33MainRole_Action',fld:'vMAINROLE_ACTION',pic:''},{av:'AV41Delete_Action',fld:'vDELETE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Enabled")',ctrl:'vDELETE_ACTION',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Tooltiptext")',ctrl:'vDELETE_ACTION',prop:'Tooltiptext'},{av:'AV35GUID',fld:'vGUID',pic:''},{av:'AV36Id',fld:'vID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV34Name',fld:'vNAME',pic:''},{av:'AV18isDirectRole',fld:'vISDIRECTROLE',pic:'',hsh:true},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}],[{ctrl:'GRID',prop:'Backcolorstyle'},{av:'this.FILTERTAGSUSERCONTROL_GRIDContainer.EmptyStateMessage',ctrl:'FILTERTAGSUSERCONTROL_GRID',prop:'EmptyStateMessage'},{av:'AV43FilterTagsCollection_Grid',fld:'vFILTERTAGSCOLLECTION_GRID',pic:''},{ctrl:'ADD',prop:'Visible'},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}]];
   this.EvtParms["LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID.CLICK"] = [[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}]];
   this.EvtParms["LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID.CLICK"] = [[{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}]];
   this.EvtParms["'E_ADD'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV29CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV18isDirectRole',fld:'vISDIRECTROLE',pic:'',hsh:true},{av:'AV17UserId',fld:'vUSERID',pic:''},{av:'AV31I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'sPrefix'},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}],[{av:'AV29CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{ctrl:'ADD',prop:'Visible'},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}]];
   this.EvtParms["GRIDTITLE_GRID.CLICK"] = [[{av:'gx.fn.getCtrlProperty("GRIDCOMPONENTCONTENT_GRID","Visible")',ctrl:'GRIDCOMPONENTCONTENT_GRID',prop:'Visible'},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}],[{av:'gx.fn.getCtrlProperty("GRIDCOMPONENTCONTENT_GRID","Visible")',ctrl:'GRIDCOMPONENTCONTENT_GRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRIDCOMPONENT_GRID","Class")',ctrl:'GRIDCOMPONENT_GRID',prop:'Class'},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}]];
   this.EvtParms["COLLAPSIBLEIMAGE_GRID.CLICK"] = [[{av:'gx.fn.getCtrlProperty("GRIDCOMPONENTCONTENT_GRID","Visible")',ctrl:'GRIDCOMPONENTCONTENT_GRID',prop:'Visible'},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}],[{av:'gx.fn.getCtrlProperty("GRIDCOMPONENTCONTENT_GRID","Visible")',ctrl:'GRIDCOMPONENTCONTENT_GRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRIDCOMPONENT_GRID","Class")',ctrl:'GRIDCOMPONENT_GRID',prop:'Class'},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}]];
   this.EvtParms["FILTERTAGSUSERCONTROL_GRID.TAGDELETED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV29CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV18isDirectRole',fld:'vISDIRECTROLE',pic:'',hsh:true},{av:'AV17UserId',fld:'vUSERID',pic:''},{av:'AV31I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'sPrefix'},{av:'AV44DeletedTag_Grid',fld:'vDELETEDTAG_GRID',pic:''},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}],[{av:'AV29CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{ctrl:'ADD',prop:'Visible'},{av:'AV37DisplayInheritRoles',fld:'vDISPLAYINHERITROLES',pic:''}]];
   this.setVCMap("AV17UserId", "vUSERID", 0, "char", 40, 0);
   this.setVCMap("AV18isDirectRole", "vISDIRECTROLE", 0, "boolean", 4, 0);
   this.setVCMap("AV31I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV51Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV29CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV44DeletedTag_Grid", "vDELETEDTAG_GRID", 0, "char", 30, 0);
   this.setVCMap("AV29CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV51Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV18isDirectRole", "vISDIRECTROLE", 0, "boolean", 4, 0);
   this.setVCMap("AV17UserId", "vUSERID", 0, "char", 40, 0);
   this.setVCMap("AV31I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV44DeletedTag_Grid", "vDELETEDTAG_GRID", 0, "char", 30, 0);
   this.setVCMap("AV29CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV51Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV18isDirectRole", "vISDIRECTROLE", 0, "boolean", 4, 0);
   this.setVCMap("AV17UserId", "vUSERID", 0, "char", 40, 0);
   this.setVCMap("AV31I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV29CurrentPage_Grid"});
   GridContainer.addRefreshingVar(this.GXValidFnc[56]);
   GridContainer.addRefreshingVar({rfrVar:"AV51Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV18isDirectRole"});
   GridContainer.addRefreshingVar({rfrVar:"AV17UserId"});
   GridContainer.addRefreshingVar({rfrVar:"AV31I_LoadCount_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV29CurrentPage_Grid"});
   GridContainer.addRefreshingParm(this.GXValidFnc[56]);
   GridContainer.addRefreshingParm({rfrVar:"AV51Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV18isDirectRole"});
   GridContainer.addRefreshingParm({rfrVar:"AV17UserId"});
   GridContainer.addRefreshingParm({rfrVar:"AV31I_LoadCount_Grid"});
   this.Initialize( );
});
gx.setExecutableComponent("k2bfsg.wwuserrole");
