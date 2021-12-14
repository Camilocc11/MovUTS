gx.evt.autoSkip = false;
gx.define('k2bfsg.wwapplication', false, function () {
   this.ServerClass =  "k2bfsg.wwapplication" ;
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
      this.AV8CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV18HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV29RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV20I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV43Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV31FilName_PreviousValue=gx.fn.getControlValue("vFILNAME_PREVIOUSVALUE") ;
      this.AV32FilDescription_PreviousValue=gx.fn.getControlValue("vFILDESCRIPTION_PREVIOUSVALUE") ;
      this.AV39DeletedTag_Grid=gx.fn.getControlValue("vDELETEDTAG_GRID") ;
      this.AV31FilName_PreviousValue=gx.fn.getControlValue("vFILNAME_PREVIOUSVALUE") ;
      this.AV32FilDescription_PreviousValue=gx.fn.getControlValue("vFILDESCRIPTION_PREVIOUSVALUE") ;
      this.AV43Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV8CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV18HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV29RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV20I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV39DeletedTag_Grid=gx.fn.getControlValue("vDELETEDTAG_GRID") ;
      this.AV29RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV8CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV18HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
   };
   this.s112_client=function()
   {
   };
   this.s152_client=function()
   {
      this.s252_client();
   };
   this.s252_client=function()
   {
      gx.fn.setCtrlProperty("NEW","Visible", true );
   };
   this.s162_client=function()
   {
   };
   this.e22251_client=function()
   {
      this.clearMessages();
      this.s172_client();
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.s172_client=function()
   {
      this.call("com.movuts.k2bfsg.entryapplication", ["INS", 0]);
   };
   this.e18251_client=function()
   {
      this.clearMessages();
      if ( this.AV8CurrentPage_Grid > 1 )
      {
         this.AV8CurrentPage_Grid = gx.num.trunc( this.AV8CurrentPage_Grid - 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e20251_client=function()
   {
      this.clearMessages();
      if ( this.AV18HasNextPage_Grid )
      {
         this.AV8CurrentPage_Grid = gx.num.trunc( this.AV8CurrentPage_Grid + 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e23252_client=function()
   {
      this.clearMessages();
      this.s182_client();
      this.refreshOutputs([{av:'AV21Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.s182_client=function()
   {
      this.call("com.movuts.k2bfsg.entryapplication", ["UPD", this.AV21Id]);
   };
   this.e24252_client=function()
   {
      this.clearMessages();
      this.s192_client();
      this.refreshOutputs([{av:'AV21Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.s192_client=function()
   {
      this.call("com.movuts.k2bfsg.entryapplication", ["DLT", this.AV21Id]);
   };
   this.s212_client=function()
   {
   };
   this.s222_client=function()
   {
      gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption", "1" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV8CurrentPage_Grid-1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV8CurrentPage_Grid, 4, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV8CurrentPage_Grid+1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class", "K2BToolsTextBlock_PaginationNormal" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class", "K2BToolsTextBlock_PaginationNormal" );
      if ( ((0==this.AV8CurrentPage_Grid)) || ( this.AV8CurrentPage_Grid <= 1 ) )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class", "K2BToolsTextBlock_PaginationNormal_Disabled" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible", false );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible", false );
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class", "K2BToolsCell_PaginationPrevious" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible", true );
         if ( this.AV8CurrentPage_Grid == 2 )
         {
            gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class", "K2BToolsCell_PaginationInvisible" );
            gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible", false );
            gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class", "K2BToolsCell_PaginationInvisible" );
            gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible", false );
         }
         else
         {
            gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class", "K2BToolsCell_PaginationLeft" );
            gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible", true );
            if ( this.AV8CurrentPage_Grid == 3 )
            {
               gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class", "K2BToolsCell_PaginationInvisible" );
               gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible", false );
            }
            else
            {
               gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class", "K2BToolsCell_PaginationDisabled K2BToolsCell_PaginationLeft" );
               gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible", true );
            }
         }
      }
      if ( this.AV18HasNextPage_Grid == false )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class", "K2BToolsTextBlock_PaginationNormal_Disabled" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible", false );
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class", "K2BToolsCell_PaginationNext" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible", true );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class", "K2BToolsCell_PaginationDisabled K2BToolsCell_PaginationRight" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible", true );
      }
      if ( ( this.AV8CurrentPage_Grid <= 1 ) && ( this.AV18HasNextPage_Grid == false ) )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", true );
      }
   };
   this.e19251_client=function()
   {
      this.clearMessages();
      this.AV8CurrentPage_Grid = gx.num.trunc( 1 ,0) ;
      this.refreshOutputs([{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e21251_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible") == false )
      {
         this.AV30GridSettingsRowsPerPage_Grid = gx.num.trunc( this.AV29RowsPerPage_Grid ,0) ;
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", false );
      }
      this.refreshOutputs([{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV30GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]);
      return gx.$.Deferred().resolve();
   };
   this.e25251_client=function()
   {
      this.clearMessages();
      if ( this.AV39DeletedTag_Grid == "FilName" )
      {
         this.AV12FilName =  ''  ;
      }
      else if ( this.AV39DeletedTag_Grid == "FilDescription" )
      {
         this.AV11FilDescription =  ''  ;
      }
      this.refreshOutputs([{av:'AV12FilName',fld:'vFILNAME',pic:''},{av:'AV11FilDescription',fld:'vFILDESCRIPTION',pic:''}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV12FilName',fld:'vFILNAME',pic:''},{av:'AV11FilDescription',fld:'vFILDESCRIPTION',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e11252_client=function()
   {
      return this.executeServerEvent("'SAVEGRIDSETTINGS(GRID)'", false, null, false, false);
   };
   this.e12252_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID.CLICK", true, null, false, true);
   };
   this.e13252_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID.CLICK", true, null, false, true);
   };
   this.e26252_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27252_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,86,89,90,91,92,93,94,95,96,97,99,100,101,102,103,104,105,106,109,110,111,112,113,116,118,120,122,124,126,128,130,131,132,133];
   this.GXLastCtrlId =133;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",98,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.wwapplication",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Name",99,"vNAME","Nombre","","Name","char",570,"px",254,80,"left",null,[],"Name","Name",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   GridContainer.addSingleLineEdit("Id",100,"vID","Id","","Id","int",0,"px",12,12,"right",null,[],"Id","Id",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addSingleLineEdit("Guid",101,"vGUID","GUID","","GUID","char",0,"px",40,40,"left",null,[],"Guid","GUID",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addBitmap("&Update_action","vUPDATE_ACTION",102,20,"px",17,"px","e23252_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   GridContainer.addBitmap("&Delete_action","vDELETE_ACTION",103,20,"px",17,"px","e24252_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.FILTERTAGSUSERCONTROL_GRIDContainer = gx.uc.getNew(this, 32, 0, "K2BTagsViewer", "FILTERTAGSUSERCONTROL_GRIDContainer", "Filtertagsusercontrol_grid", "FILTERTAGSUSERCONTROL_GRID");
   var FILTERTAGSUSERCONTROL_GRIDContainer = this.FILTERTAGSUSERCONTROL_GRIDContainer;
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Class", "Class", "", "char");
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Enabled", "Enabled", true, "boolean");
   FILTERTAGSUSERCONTROL_GRIDContainer.setDynProp("EmptyStateMessage", "Emptystatemessage", "", "char");
   FILTERTAGSUSERCONTROL_GRIDContainer.addV2CFunction('AV38FilterTagsCollection_Grid', "vFILTERTAGSCOLLECTION_GRID", 'SetTagValues');
   FILTERTAGSUSERCONTROL_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV38FilterTagsCollection_Grid=UC.GetTagValues();gx.fn.setControlValue("vFILTERTAGSCOLLECTION_GRID",UC.ParentObject.AV38FilterTagsCollection_Grid); });
   FILTERTAGSUSERCONTROL_GRIDContainer.addV2CFunction('AV39DeletedTag_Grid', "vDELETEDTAG_GRID", 'SetDeletedTag');
   FILTERTAGSUSERCONTROL_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV39DeletedTag_Grid=UC.GetDeletedTag();gx.fn.setControlValue("vDELETEDTAG_GRID",UC.ParentObject.AV39DeletedTag_Grid); });
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Visible", "Visible", true, "bool");
   FILTERTAGSUSERCONTROL_GRIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   FILTERTAGSUSERCONTROL_GRIDContainer.addEventHandler("TagDeleted", this.e25251_client);
   this.setUserControl(FILTERTAGSUSERCONTROL_GRIDContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 134, 46, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[16]={ id: 16, fld:"GRIDCOMPONENTCONTENT_GRID",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"LAYOUTDEFINED_GRID_INNER_GRID",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"LAYOUTDEFINED_TABLE10_GRID",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"LAYOUTDEFINED_FILTERGLOBALCONTAINER_GRID",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"LAYOUTDEFINED_ONLYDETAILEDFILTERLAYOUT_GRID",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"LAYOUTDEFINED_SECTION5_GRID",grid:0};
   GXValidFnc[31]={ id: 31, fld:"LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID",grid:0,evt:"e12252_client"};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID",grid:0};
   GXValidFnc[36]={ id: 36, fld:"LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID",grid:0,evt:"e13252_client"};
   GXValidFnc[37]={ id: 37, fld:"MAINFILTERRESPONSIVETABLE_FILTERS",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"FILTERCONTAINERTABLE_FILTERS",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"TABLE_CONTAINER_FILNAME",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id:46 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILNAME",gxz:"ZV12FilName",gxold:"OV12FilName",gxvar:"AV12FilName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12FilName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV12FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV12FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"TABLE_CONTAINER_FILDESCRIPTION",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id:52 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILDESCRIPTION",gxz:"ZV11FilDescription",gxold:"OV11FilDescription",gxvar:"AV11FilDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV11FilDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV11FilDescription=Value},v2c:function(){gx.fn.setControlValue("vFILDESCRIPTION",gx.O.AV11FilDescription,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV11FilDescription=this.val()},val:function(){return gx.fn.getControlValue("vFILDESCRIPTION")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"LAYOUTDEFINED_TABLE7_GRID",grid:0};
   GXValidFnc[58]={ id: 58, fld:"GRIDSETTINGS_GLOBALTABLE_GRID",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"GRIDSETTINGS_LABELGRID",grid:0,evt:"e21251_client"};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"GRIDSETTINGS_CONTENTOUTERTABLEGRID",grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"GSLAYOUTDEFINED_GRIDTABLE1",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"GRIDCUSTOMIZATIONCONTAINER_GRID",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"GSLAYOUTDEFINED_GRIDRUNTIMECOLUMNSELECTIONTB", format:0,grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"GSLAYOUTDEFINED_GRIDCUSTOMIZATIONCOLLAPSIBLESECTION",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id: 78, fld:"ROWSPERPAGECONTAINER_GRID",grid:0};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id:81 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDSETTINGSROWSPERPAGE_GRID",gxz:"ZV30GridSettingsRowsPerPage_Grid",gxold:"OV30GridSettingsRowsPerPage_Grid",gxvar:"AV30GridSettingsRowsPerPage_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV30GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV30GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vGRIDSETTINGSROWSPERPAGE_GRID",gx.O.AV30GridSettingsRowsPerPage_Grid)},c2v:function(){if(this.val()!==undefined)gx.O.AV30GridSettingsRowsPerPage_Grid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRIDSETTINGSROWSPERPAGE_GRID",'.')},nac:gx.falseFn};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id: 84, fld:"GRIDSETTINGS_SAVEGRID",grid:0,evt:"e11252_client"};
   GXValidFnc[86]={ id: 86, fld:"ACTIONS_GRID_TOPRIGHT",grid:0};
   GXValidFnc[89]={ id: 89, fld:"NEW",grid:0,evt:"e22251_client"};
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"",grid:0};
   GXValidFnc[92]={ id: 92, fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};
   GXValidFnc[93]={ id: 93, fld:"",grid:0};
   GXValidFnc[94]={ id: 94, fld:"",grid:0};
   GXValidFnc[95]={ id: 95, fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};
   GXValidFnc[96]={ id: 96, fld:"",grid:0};
   GXValidFnc[97]={ id: 97, fld:"",grid:0};
   GXValidFnc[99]={ id:99 ,lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:98,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV23Name",gxold:"OV23Name",gxvar:"AV23Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV23Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV23Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(98),gx.O.AV23Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV23Name=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(98))},nac:gx.falseFn};
   GXValidFnc[100]={ id:100 ,lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:98,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV21Id",gxold:"OV21Id",gxvar:"AV21Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.AV21Id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV21Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(98),gx.O.AV21Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV21Id=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("vID",row || gx.fn.currentGridRowImpl(98),'.')},nac:gx.falseFn};
   GXValidFnc[101]={ id:101 ,lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:98,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGUID",gxz:"ZV17GUID",gxold:"OV17GUID",gxvar:"AV17GUID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV17GUID=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17GUID=Value},v2c:function(row){gx.fn.setGridControlValue("vGUID",row || gx.fn.currentGridRowImpl(98),gx.O.AV17GUID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV17GUID=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vGUID",row || gx.fn.currentGridRowImpl(98))},nac:gx.falseFn};
   GXValidFnc[102]={ id:102 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:98,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE_ACTION",gxz:"ZV36Update_Action",gxold:"OV36Update_Action",gxvar:"AV36Update_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV36Update_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV36Update_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vUPDATE_ACTION",row || gx.fn.currentGridRowImpl(98),gx.O.AV36Update_Action,gx.O.AV44Update_action_GXI)},c2v:function(row){gx.O.AV44Update_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV36Update_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUPDATE_ACTION",row || gx.fn.currentGridRowImpl(98))},val_GXI:function(row){return gx.fn.getGridControlValue("vUPDATE_ACTION_GXI",row || gx.fn.currentGridRowImpl(98))}, gxvar_GXI:'AV44Update_action_GXI',nac:gx.falseFn,evt:"e23252_client"};
   GXValidFnc[103]={ id:103 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:98,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE_ACTION",gxz:"ZV37Delete_Action",gxold:"OV37Delete_Action",gxvar:"AV37Delete_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV37Delete_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV37Delete_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(98),gx.O.AV37Delete_Action,gx.O.AV45Delete_action_GXI)},c2v:function(row){gx.O.AV45Delete_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV37Delete_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(98))},val_GXI:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION_GXI",row || gx.fn.currentGridRowImpl(98))}, gxvar_GXI:'AV45Delete_action_GXI',nac:gx.falseFn,evt:"e24252_client"};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[105]={ id: 105, fld:"",grid:0};
   GXValidFnc[106]={ id: 106, fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};
   GXValidFnc[109]={ id: 109, fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID", format:0,grid:0};
   GXValidFnc[110]={ id: 110, fld:"",grid:0};
   GXValidFnc[111]={ id: 111, fld:"",grid:0};
   GXValidFnc[112]={ id: 112, fld:"LAYOUTDEFINED_SECTION8_GRID",grid:0};
   GXValidFnc[113]={ id: 113, fld:"PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID",grid:0};
   GXValidFnc[116]={ id: 116, fld:"PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e18251_client"};
   GXValidFnc[118]={ id: 118, fld:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e19251_client"};
   GXValidFnc[120]={ id: 120, fld:"PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[122]={ id: 122, fld:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e18251_client"};
   GXValidFnc[124]={ id: 124, fld:"PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[126]={ id: 126, fld:"PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e20251_client"};
   GXValidFnc[128]={ id: 128, fld:"PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[130]={ id: 130, fld:"PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e20251_client"};
   GXValidFnc[131]={ id: 131, fld:"",grid:0};
   GXValidFnc[132]={ id: 132, fld:"",grid:0};
   GXValidFnc[133]={ id: 133, fld:"",grid:0};
   this.AV12FilName = "" ;
   this.ZV12FilName = "" ;
   this.OV12FilName = "" ;
   this.AV11FilDescription = "" ;
   this.ZV11FilDescription = "" ;
   this.OV11FilDescription = "" ;
   this.AV30GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV30GridSettingsRowsPerPage_Grid = 0 ;
   this.OV30GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV23Name = "" ;
   this.OV23Name = "" ;
   this.ZV21Id = 0 ;
   this.OV21Id = 0 ;
   this.ZV17GUID = "" ;
   this.OV17GUID = "" ;
   this.ZV36Update_Action = "" ;
   this.OV36Update_Action = "" ;
   this.ZV37Delete_Action = "" ;
   this.OV37Delete_Action = "" ;
   this.AV38FilterTagsCollection_Grid = [ ] ;
   this.AV12FilName = "" ;
   this.AV11FilDescription = "" ;
   this.AV30GridSettingsRowsPerPage_Grid = 0 ;
   this.AV23Name = "" ;
   this.AV21Id = 0 ;
   this.AV17GUID = "" ;
   this.AV36Update_Action = "" ;
   this.AV37Delete_Action = "" ;
   this.AV8CurrentPage_Grid = 0 ;
   this.AV18HasNextPage_Grid = false ;
   this.AV29RowsPerPage_Grid = 0 ;
   this.AV20I_LoadCount_Grid = 0 ;
   this.AV43Pgmname = "" ;
   this.AV31FilName_PreviousValue = "" ;
   this.AV32FilDescription_PreviousValue = "" ;
   this.AV39DeletedTag_Grid = "" ;
   this.Events = {"e11252_client": ["'SAVEGRIDSETTINGS(GRID)'", true] ,"e12252_client": ["LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID.CLICK", true] ,"e13252_client": ["LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID.CLICK", true] ,"e26252_client": ["ENTER", true] ,"e27252_client": ["CANCEL", true] ,"e22251_client": ["'E_NEW'", false] ,"e18251_client": ["'PAGINGPREVIOUS(GRID)'", false] ,"e20251_client": ["'PAGINGNEXT(GRID)'", false] ,"e23252_client": ["'E_UPDATE'", false] ,"e24252_client": ["'E_DELETE'", false] ,"e19251_client": ["'PAGINGFIRST(GRID)'", false] ,"e21251_client": ["'TOGGLEGRIDSETTINGS(GRID)'", false] ,"e25251_client": ["FILTERTAGSUSERCONTROL_GRID.TAGDELETED", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV12FilName',fld:'vFILNAME',pic:''},{av:'AV32FilDescription_PreviousValue',fld:'vFILDESCRIPTION_PREVIOUSVALUE',pic:''},{av:'AV11FilDescription',fld:'vFILDESCRIPTION',pic:''},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV20I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV43Pgmname',fld:'vPGMNAME',pic:'',hsh:true}],[{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'NEW',prop:'Visible'}]];
   this.EvtParms["START"] = [[{av:'AV43Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12FilName',fld:'vFILNAME',pic:''},{av:'AV11FilDescription',fld:'vFILDESCRIPTION',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV30GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV31FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV32FilDescription_PreviousValue',fld:'vFILDESCRIPTION_PREVIOUSVALUE',pic:''},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV12FilName',fld:'vFILNAME',pic:''},{av:'AV11FilDescription',fld:'vFILDESCRIPTION',pic:''},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'this.FILTERTAGSUSERCONTROL_GRIDContainer.EmptyStateMessage',ctrl:'FILTERTAGSUSERCONTROL_GRID',prop:'EmptyStateMessage'},{av:'AV38FilterTagsCollection_Grid',fld:'vFILTERTAGSCOLLECTION_GRID',pic:''}]];
   this.EvtParms["'E_NEW'"] = [[],[]];
   this.EvtParms["'PAGINGPREVIOUS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV12FilName',fld:'vFILNAME',pic:''},{av:'AV32FilDescription_PreviousValue',fld:'vFILDESCRIPTION_PREVIOUSVALUE',pic:''},{av:'AV11FilDescription',fld:'vFILDESCRIPTION',pic:''},{av:'AV43Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV20I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'NEW',prop:'Visible'}]];
   this.EvtParms["'PAGINGNEXT(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV12FilName',fld:'vFILNAME',pic:''},{av:'AV32FilDescription_PreviousValue',fld:'vFILDESCRIPTION_PREVIOUSVALUE',pic:''},{av:'AV11FilDescription',fld:'vFILDESCRIPTION',pic:''},{av:'AV43Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV20I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'NEW',prop:'Visible'}]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'AV21Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}],[{av:'AV21Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'AV21Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}],[{av:'AV21Id',fld:'vID',pic:'ZZZZZZZZZZZ9'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV20I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV12FilName',fld:'vFILNAME',pic:''},{av:'AV11FilDescription',fld:'vFILDESCRIPTION',pic:''},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV43Pgmname',fld:'vPGMNAME',pic:'',hsh:true}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_GRID',prop:'Visible'},{av:'AV20I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV36Update_Action',fld:'vUPDATE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE_ACTION","Tooltiptext")',ctrl:'vUPDATE_ACTION',prop:'Tooltiptext'},{av:'AV37Delete_Action',fld:'vDELETE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Tooltiptext")',ctrl:'vDELETE_ACTION',prop:'Tooltiptext'},{av:'AV23Name',fld:'vNAME',pic:''},{av:'AV21Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV17GUID',fld:'vGUID',pic:''},{av:'gx.fn.getCtrlProperty("vNAME","Link")',ctrl:'vNAME',prop:'Link'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'}]];
   this.EvtParms["'PAGINGFIRST(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV12FilName',fld:'vFILNAME',pic:''},{av:'AV32FilDescription_PreviousValue',fld:'vFILDESCRIPTION_PREVIOUSVALUE',pic:''},{av:'AV11FilDescription',fld:'vFILDESCRIPTION',pic:''},{av:'AV43Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV20I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'NEW',prop:'Visible'}]];
   this.EvtParms["'TOGGLEGRIDSETTINGS(GRID)'"] = [[{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'}],[{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV30GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]];
   this.EvtParms["'SAVEGRIDSETTINGS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV12FilName',fld:'vFILNAME',pic:''},{av:'AV32FilDescription_PreviousValue',fld:'vFILDESCRIPTION_PREVIOUSVALUE',pic:''},{av:'AV11FilDescription',fld:'vFILDESCRIPTION',pic:''},{av:'AV43Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV20I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV30GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'}],[{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{ctrl:'NEW',prop:'Visible'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV31FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV12FilName',fld:'vFILNAME',pic:''},{av:'AV32FilDescription_PreviousValue',fld:'vFILDESCRIPTION_PREVIOUSVALUE',pic:''},{av:'AV11FilDescription',fld:'vFILDESCRIPTION',pic:''},{av:'AV43Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true}],[{av:'AV31FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV32FilDescription_PreviousValue',fld:'vFILDESCRIPTION_PREVIOUSVALUE',pic:''},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'this.FILTERTAGSUSERCONTROL_GRIDContainer.EmptyStateMessage',ctrl:'FILTERTAGSUSERCONTROL_GRID',prop:'EmptyStateMessage'},{av:'AV38FilterTagsCollection_Grid',fld:'vFILTERTAGSCOLLECTION_GRID',pic:''},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'},{ctrl:'NEW',prop:'Visible'}]];
   this.EvtParms["LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID.CLICK"] = [[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'}]];
   this.EvtParms["LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID.CLICK"] = [[],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'}]];
   this.EvtParms["FILTERTAGSUSERCONTROL_GRID.TAGDELETED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV12FilName',fld:'vFILNAME',pic:''},{av:'AV32FilDescription_PreviousValue',fld:'vFILDESCRIPTION_PREVIOUSVALUE',pic:''},{av:'AV11FilDescription',fld:'vFILDESCRIPTION',pic:''},{av:'AV43Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV20I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV39DeletedTag_Grid',fld:'vDELETEDTAG_GRID',pic:''}],[{av:'AV12FilName',fld:'vFILNAME',pic:''},{av:'AV11FilDescription',fld:'vFILDESCRIPTION',pic:''},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'NEW',prop:'Visible'}]];
   this.setVCMap("AV8CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV18HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV29RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV20I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV43Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV31FilName_PreviousValue", "vFILNAME_PREVIOUSVALUE", 0, "char", 60, 0);
   this.setVCMap("AV32FilDescription_PreviousValue", "vFILDESCRIPTION_PREVIOUSVALUE", 0, "char", 60, 0);
   this.setVCMap("AV39DeletedTag_Grid", "vDELETEDTAG_GRID", 0, "char", 30, 0);
   this.setVCMap("AV31FilName_PreviousValue", "vFILNAME_PREVIOUSVALUE", 0, "char", 60, 0);
   this.setVCMap("AV32FilDescription_PreviousValue", "vFILDESCRIPTION_PREVIOUSVALUE", 0, "char", 60, 0);
   this.setVCMap("AV43Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV8CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV18HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV29RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV20I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV39DeletedTag_Grid", "vDELETEDTAG_GRID", 0, "char", 30, 0);
   this.setVCMap("AV29RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV8CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV18HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV31FilName_PreviousValue", "vFILNAME_PREVIOUSVALUE", 0, "char", 60, 0);
   this.setVCMap("AV32FilDescription_PreviousValue", "vFILDESCRIPTION_PREVIOUSVALUE", 0, "char", 60, 0);
   this.setVCMap("AV43Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV8CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV18HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV29RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV20I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV31FilName_PreviousValue"});
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV32FilDescription_PreviousValue"});
   GridContainer.addRefreshingVar(this.GXValidFnc[52]);
   GridContainer.addRefreshingVar({rfrVar:"AV43Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV8CurrentPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV18HasNextPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV29RowsPerPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV20I_LoadCount_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV31FilName_PreviousValue"});
   GridContainer.addRefreshingParm(this.GXValidFnc[46]);
   GridContainer.addRefreshingParm({rfrVar:"AV32FilDescription_PreviousValue"});
   GridContainer.addRefreshingParm(this.GXValidFnc[52]);
   GridContainer.addRefreshingParm({rfrVar:"AV43Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV8CurrentPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV18HasNextPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV29RowsPerPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV20I_LoadCount_Grid"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.wwapplication);});
