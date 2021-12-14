gx.evt.autoSkip = false;
gx.define('k2bfsg.wwapplicationpermission', true, function (CmpContext) {
   this.ServerClass =  "k2bfsg.wwapplicationpermission" ;
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
      this.AV12CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV9ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.AV21HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV35RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV23I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV50Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV37PermissionAccessTypeDefault_PreviousValue=gx.fn.getControlValue("vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE") ;
      this.AV38PermissionTypeFilter_PreviousValue=gx.fn.getControlValue("vPERMISSIONTYPEFILTER_PREVIOUSVALUE") ;
      this.AV45DeletedTag_Grid=gx.fn.getControlValue("vDELETEDTAG_GRID") ;
      this.AV9ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.AV37PermissionAccessTypeDefault_PreviousValue=gx.fn.getControlValue("vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE") ;
      this.AV38PermissionTypeFilter_PreviousValue=gx.fn.getControlValue("vPERMISSIONTYPEFILTER_PREVIOUSVALUE") ;
      this.AV50Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV12CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV21HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV35RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV23I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV45DeletedTag_Grid=gx.fn.getControlValue("vDELETEDTAG_GRID") ;
      this.AV35RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV12CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV21HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
   };
   this.Validv_Permissionaccesstypedefault=function()
   {
      return this.validCliEvt("Validv_Permissionaccesstypedefault", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vPERMISSIONACCESSTYPEDEFAULT");
         this.AnyError  = 0;
         if ( ! ( ( this.AV28PermissionAccessTypeDefault == "A" ) || ( this.AV28PermissionAccessTypeDefault == "R" ) || ((''==this.AV28PermissionAccessTypeDefault)) ) )
         {
            try {
               gxballoon.setError("Campo Permission Access Type Default fuera de rango");
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
   this.Validv_Permissiontypefilter=function()
   {
      return this.validCliEvt("Validv_Permissiontypefilter", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vPERMISSIONTYPEFILTER");
         this.AnyError  = 0;
         if ( ! ( ( this.AV29PermissionTypeFilter == "A" ) || ( this.AV29PermissionTypeFilter == "F" ) || ( this.AV29PermissionTypeFilter == "P" ) || ( this.AV29PermissionTypeFilter == "C" ) ) )
         {
            try {
               gxballoon.setError("Campo Permission Type Filter fuera de rango");
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
   this.Validv_Accesstype=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(105);
      return this.validCliEvt("Validv_Accesstype", 105, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vACCESSTYPE");
         this.AnyError  = 0;
         if ( ! ( ( this.AV5AccessType == "A" ) || ( this.AV5AccessType == "R" ) ) )
         {
            try {
               gxballoon.setError("Campo Access Type fuera de rango");
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
   this.s152_client=function()
   {
      this.s262_client();
   };
   this.s262_client=function()
   {
      gx.fn.setCtrlProperty("ADD","Visible", true );
      gx.fn.setCtrlProperty("LOADAPPLICATIONPERMISSIONS","Visible", true );
   };
   this.s162_client=function()
   {
   };
   this.e202i1_client=function()
   {
      this.clearMessages();
      if ( this.AV12CurrentPage_Grid > 1 )
      {
         this.AV12CurrentPage_Grid = gx.num.trunc( this.AV12CurrentPage_Grid - 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e222i1_client=function()
   {
      this.clearMessages();
      if ( this.AV21HasNextPage_Grid )
      {
         this.AV12CurrentPage_Grid = gx.num.trunc( this.AV12CurrentPage_Grid + 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e252i2_client=function()
   {
      this.clearMessages();
      this.s172_client();
      this.refreshOutputs([{av:'AV24Id',fld:'vID',pic:''},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.s172_client=function()
   {
      this.call("com.movuts.k2bfsg.entryapplicationpermission", ["UPD", this.AV9ApplicationId, this.AV24Id]);
   };
   this.e262i2_client=function()
   {
      this.clearMessages();
      this.s182_client();
      this.refreshOutputs([{av:'AV24Id',fld:'vID',pic:''},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.s182_client=function()
   {
      this.call("com.movuts.k2bfsg.entryapplicationpermission", ["DLT", this.AV9ApplicationId, this.AV24Id]);
   };
   this.s212_client=function()
   {
   };
   this.s222_client=function()
   {
      gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption", "1" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV12CurrentPage_Grid-1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV12CurrentPage_Grid, 4, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV12CurrentPage_Grid+1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class", "K2BToolsTextBlock_PaginationNormal" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class", "K2BToolsTextBlock_PaginationNormal" );
      if ( ((0==this.AV12CurrentPage_Grid)) || ( this.AV12CurrentPage_Grid <= 1 ) )
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
         if ( this.AV12CurrentPage_Grid == 2 )
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
            if ( this.AV12CurrentPage_Grid == 3 )
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
      if ( this.AV21HasNextPage_Grid == false )
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
      if ( ( this.AV12CurrentPage_Grid <= 1 ) && ( this.AV21HasNextPage_Grid == false ) )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", true );
      }
   };
   this.e242i2_client=function()
   {
      this.clearMessages();
      this.call("com.movuts.k2bfsg.entryapplicationpermission", ["DSP", this.AV9ApplicationId, this.AV24Id]);
      this.refreshOutputs([{av:'AV24Id',fld:'vID',pic:''},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e212i1_client=function()
   {
      this.clearMessages();
      this.AV12CurrentPage_Grid = gx.num.trunc( 1 ,0) ;
      this.refreshOutputs([{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e232i1_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible") == false )
      {
         this.AV36GridSettingsRowsPerPage_Grid = gx.num.trunc( this.AV35RowsPerPage_Grid ,0) ;
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", false );
      }
      this.refreshOutputs([{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV36GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]);
      return gx.$.Deferred().resolve();
   };
   this.e272i1_client=function()
   {
      this.clearMessages();
      if ( this.AV45DeletedTag_Grid == "PermissionAccessTypeDefault" )
      {
         this.AV28PermissionAccessTypeDefault =  ''  ;
      }
      else if ( this.AV45DeletedTag_Grid == "PermissionTypeFilter" )
      {
         this.AV29PermissionTypeFilter =  ''  ;
      }
      this.refreshOutputs([{ctrl:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV28PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT',pic:''},{ctrl:'vPERMISSIONTYPEFILTER'},{av:'AV29PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER',pic:''}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{ctrl:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV28PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT',pic:''},{ctrl:'vPERMISSIONTYPEFILTER'},{av:'AV29PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e112i2_client=function()
   {
      return this.executeServerEvent("'E_ADD'", false, null, false, false);
   };
   this.e122i2_client=function()
   {
      return this.executeServerEvent("'SAVEGRIDSETTINGS(GRID)'", false, null, false, false);
   };
   this.e132i2_client=function()
   {
      return this.executeServerEvent("'E_LOADAPPLICATIONPERMISSIONS'", false, null, false, false);
   };
   this.e142i2_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERTOGGLE_COMBINED_GRID.CLICK", true, null, false, true);
   };
   this.e152i2_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERCLOSE_COMBINED_GRID.CLICK", true, null, false, true);
   };
   this.e282i2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e292i2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,84,87,88,89,90,91,92,93,94,95,98,99,100,101,102,103,104,106,107,108,109,110,111,112,113,114,117,118,119,120,121,124,126,128,130,132,134,136,138,139,140,141];
   this.GXLastCtrlId =141;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",105,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.wwapplicationpermission",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Name",106,"vNAME","Nombre","","Name","char",0,"px",120,80,"left","e242i2_client",[],"Name","Name",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   GridContainer.addSingleLineEdit("Dsc",107,"vDSC","Descripción","","Dsc","char",0,"px",120,80,"left",null,[],"Dsc","Dsc",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addComboBox("Accesstype",108,"vACCESSTYPE","Tipo de acceso","AccessType","char",null,0,true,false,0,"px","K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addSingleLineEdit("Id",109,"vID","Id","","Id","char",0,"px",40,40,"left",null,[],"Id","Id",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addBitmap("&Update_action","vUPDATE_ACTION",110,20,"px",17,"px","e252i2_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   GridContainer.addBitmap("&Delete_action","vDELETE_ACTION",111,20,"px",17,"px","e262i2_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.FILTERTAGSUSERCONTROL_GRIDContainer = gx.uc.getNew(this, 30, 28, "K2BTagsViewer", this.CmpContext + "FILTERTAGSUSERCONTROL_GRIDContainer", "Filtertagsusercontrol_grid", "FILTERTAGSUSERCONTROL_GRID");
   var FILTERTAGSUSERCONTROL_GRIDContainer = this.FILTERTAGSUSERCONTROL_GRIDContainer;
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Class", "Class", "", "char");
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Enabled", "Enabled", true, "boolean");
   FILTERTAGSUSERCONTROL_GRIDContainer.setDynProp("EmptyStateMessage", "Emptystatemessage", "", "char");
   FILTERTAGSUSERCONTROL_GRIDContainer.addV2CFunction('AV44FilterTagsCollection_Grid', "vFILTERTAGSCOLLECTION_GRID", 'SetTagValues');
   FILTERTAGSUSERCONTROL_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV44FilterTagsCollection_Grid=UC.GetTagValues();gx.fn.setControlValue("vFILTERTAGSCOLLECTION_GRID",UC.ParentObject.AV44FilterTagsCollection_Grid); });
   FILTERTAGSUSERCONTROL_GRIDContainer.addV2CFunction('AV45DeletedTag_Grid', "vDELETEDTAG_GRID", 'SetDeletedTag');
   FILTERTAGSUSERCONTROL_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45DeletedTag_Grid=UC.GetDeletedTag();gx.fn.setControlValue("vDELETEDTAG_GRID",UC.ParentObject.AV45DeletedTag_Grid); });
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Visible", "Visible", true, "bool");
   FILTERTAGSUSERCONTROL_GRIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   FILTERTAGSUSERCONTROL_GRIDContainer.addEventHandler("TagDeleted", this.e272i1_client);
   this.setUserControl(FILTERTAGSUSERCONTROL_GRIDContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 142, 28, "K2BControlBeautify", this.CmpContext + "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[12]={ id: 12, fld:"GRIDCOMPONENTCONTENT_GRID",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"LAYOUTDEFINED_GRID_INNER_GRID",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"LAYOUTDEFINED_TABLE10_GRID",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"LAYOUTDEFINED_FILTERGLOBALCONTAINER_GRID",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"LAYOUTDEFINED_COMBINEDFILTERLAYOUT_GRID",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"LAYOUTDEFINED_SECTION4_GRID",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGENERICFILTER_GRID",gxz:"ZV46GenericFilter_Grid",gxold:"OV46GenericFilter_Grid",gxvar:"AV46GenericFilter_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46GenericFilter_Grid=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV46GenericFilter_Grid=Value},v2c:function(){gx.fn.setControlValue("vGENERICFILTER_GRID",gx.O.AV46GenericFilter_Grid,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46GenericFilter_Grid=this.val()},val:function(){return gx.fn.getControlValue("vGENERICFILTER_GRID")},nac:gx.falseFn};
   GXValidFnc[29]={ id: 29, fld:"LAYOUTDEFINED_FILTERTOGGLE_COMBINED_GRID",grid:0,evt:"e142i2_client"};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID",grid:0};
   GXValidFnc[34]={ id: 34, fld:"LAYOUTDEFINED_FILTERCLOSE_COMBINED_GRID",grid:0,evt:"e152i2_client"};
   GXValidFnc[35]={ id: 35, fld:"MAINFILTERRESPONSIVETABLE_FILTERS",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"FILTERCONTAINERTABLE_FILTERS",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"TABLE_CONTAINER_PERMISSIONACCESSTYPEDEFAULT",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Permissionaccesstypedefault,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERMISSIONACCESSTYPEDEFAULT",gxz:"ZV28PermissionAccessTypeDefault",gxold:"OV28PermissionAccessTypeDefault",gxvar:"AV28PermissionAccessTypeDefault",ucs:[],op:[44],ip:[44],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV28PermissionAccessTypeDefault=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV28PermissionAccessTypeDefault=Value},v2c:function(){gx.fn.setComboBoxValue("vPERMISSIONACCESSTYPEDEFAULT",gx.O.AV28PermissionAccessTypeDefault);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV28PermissionAccessTypeDefault=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSIONACCESSTYPEDEFAULT")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"TABLE_CONTAINER_PERMISSIONTYPEFILTER",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id:50 ,lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Permissiontypefilter,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERMISSIONTYPEFILTER",gxz:"ZV29PermissionTypeFilter",gxold:"OV29PermissionTypeFilter",gxvar:"AV29PermissionTypeFilter",ucs:[],op:[50],ip:[50],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV29PermissionTypeFilter=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV29PermissionTypeFilter=Value},v2c:function(){gx.fn.setComboBoxValue("vPERMISSIONTYPEFILTER",gx.O.AV29PermissionTypeFilter);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV29PermissionTypeFilter=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSIONTYPEFILTER")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"LAYOUTDEFINED_TABLE7_GRID",grid:0};
   GXValidFnc[56]={ id: 56, fld:"GRIDSETTINGS_GLOBALTABLE_GRID",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"GRIDSETTINGS_LABELGRID",grid:0,evt:"e232i1_client"};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"GRIDSETTINGS_CONTENTOUTERTABLEGRID",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"GSLAYOUTDEFINED_GRIDTABLE1",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"GRIDCUSTOMIZATIONCONTAINER_GRID",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id: 70, fld:"GSLAYOUTDEFINED_GRIDRUNTIMECOLUMNSELECTIONTB", format:0,grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"GSLAYOUTDEFINED_GRIDCUSTOMIZATIONCOLLAPSIBLESECTION",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"ROWSPERPAGECONTAINER_GRID",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id:79 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDSETTINGSROWSPERPAGE_GRID",gxz:"ZV36GridSettingsRowsPerPage_Grid",gxold:"OV36GridSettingsRowsPerPage_Grid",gxvar:"AV36GridSettingsRowsPerPage_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV36GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV36GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vGRIDSETTINGSROWSPERPAGE_GRID",gx.O.AV36GridSettingsRowsPerPage_Grid)},c2v:function(){if(this.val()!==undefined)gx.O.AV36GridSettingsRowsPerPage_Grid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRIDSETTINGSROWSPERPAGE_GRID",'.')},nac:gx.falseFn};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"GRIDSETTINGS_SAVEGRID",grid:0,evt:"e122i2_client"};
   GXValidFnc[84]={ id: 84, fld:"ACTIONS_GRID_TOPRIGHT",grid:0};
   GXValidFnc[87]={ id: 87, fld:"ADD",grid:0,evt:"e112i2_client"};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};
   GXValidFnc[91]={ id: 91, fld:"",grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id: 93, fld:"LAYOUTDEFINED_SECTION1_GRID",grid:0};
   GXValidFnc[94]={ id: 94, fld:"LAYOUTDEFINED_SECTION7_GRID",grid:0};
   GXValidFnc[95]={ id: 95, fld:"ACTIONS_GRID_GRIDASSOCIATEDLEFT",grid:0};
   GXValidFnc[98]={ id: 98, fld:"LOADAPPLICATIONPERMISSIONS",grid:0,evt:"e132i2_client"};
   GXValidFnc[99]={ id: 99, fld:"LAYOUTDEFINED_SECTION3_GRID",grid:0};
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id: 102, fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[106]={ id:106 ,lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:105,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV27Name",gxold:"OV27Name",gxvar:"AV27Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV27Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV27Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(105),gx.O.AV27Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV27Name=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(105))},nac:gx.falseFn,evt:"e242i2_client"};
   GXValidFnc[107]={ id:107 ,lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:105,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",gxz:"ZV13Dsc",gxold:"OV13Dsc",gxvar:"AV13Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV13Dsc=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV13Dsc=Value},v2c:function(row){gx.fn.setGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(105),gx.O.AV13Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV13Dsc=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(105))},nac:gx.falseFn};
   GXValidFnc[108]={ id:108 ,lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:105,gxgrid:this.GridContainer,fnc:this.Validv_Accesstype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vACCESSTYPE",gxz:"ZV5AccessType",gxold:"OV5AccessType",gxvar:"AV5AccessType",ucs:[],op:[108],ip:[108],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV5AccessType=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV5AccessType=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vACCESSTYPE",row || gx.fn.currentGridRowImpl(105),gx.O.AV5AccessType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV5AccessType=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vACCESSTYPE",row || gx.fn.currentGridRowImpl(105))},nac:gx.falseFn};
   GXValidFnc[109]={ id:109 ,lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:105,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV24Id",gxold:"OV24Id",gxvar:"AV24Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV24Id=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV24Id=Value},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(105),gx.O.AV24Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV24Id=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vID",row || gx.fn.currentGridRowImpl(105))},nac:gx.falseFn};
   GXValidFnc[110]={ id:110 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:105,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE_ACTION",gxz:"ZV42Update_Action",gxold:"OV42Update_Action",gxvar:"AV42Update_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV42Update_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV42Update_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vUPDATE_ACTION",row || gx.fn.currentGridRowImpl(105),gx.O.AV42Update_Action,gx.O.AV51Update_action_GXI)},c2v:function(row){gx.O.AV51Update_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV42Update_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUPDATE_ACTION",row || gx.fn.currentGridRowImpl(105))},val_GXI:function(row){return gx.fn.getGridControlValue("vUPDATE_ACTION_GXI",row || gx.fn.currentGridRowImpl(105))}, gxvar_GXI:'AV51Update_action_GXI',nac:gx.falseFn,evt:"e252i2_client"};
   GXValidFnc[111]={ id:111 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:105,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE_ACTION",gxz:"ZV43Delete_Action",gxold:"OV43Delete_Action",gxvar:"AV43Delete_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV43Delete_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV43Delete_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(105),gx.O.AV43Delete_Action,gx.O.AV52Delete_action_GXI)},c2v:function(row){gx.O.AV52Delete_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV43Delete_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(105))},val_GXI:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION_GXI",row || gx.fn.currentGridRowImpl(105))}, gxvar_GXI:'AV52Delete_action_GXI',nac:gx.falseFn,evt:"e262i2_client"};
   GXValidFnc[112]={ id: 112, fld:"",grid:0};
   GXValidFnc[113]={ id: 113, fld:"",grid:0};
   GXValidFnc[114]={ id: 114, fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};
   GXValidFnc[117]={ id: 117, fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID", format:0,grid:0};
   GXValidFnc[118]={ id: 118, fld:"",grid:0};
   GXValidFnc[119]={ id: 119, fld:"",grid:0};
   GXValidFnc[120]={ id: 120, fld:"LAYOUTDEFINED_SECTION8_GRID",grid:0};
   GXValidFnc[121]={ id: 121, fld:"PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID",grid:0};
   GXValidFnc[124]={ id: 124, fld:"PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e202i1_client"};
   GXValidFnc[126]={ id: 126, fld:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e212i1_client"};
   GXValidFnc[128]={ id: 128, fld:"PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[130]={ id: 130, fld:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e202i1_client"};
   GXValidFnc[132]={ id: 132, fld:"PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[134]={ id: 134, fld:"PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e222i1_client"};
   GXValidFnc[136]={ id: 136, fld:"PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[138]={ id: 138, fld:"PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e222i1_client"};
   GXValidFnc[139]={ id: 139, fld:"",grid:0};
   GXValidFnc[140]={ id: 140, fld:"",grid:0};
   GXValidFnc[141]={ id: 141, fld:"",grid:0};
   this.AV46GenericFilter_Grid = "" ;
   this.ZV46GenericFilter_Grid = "" ;
   this.OV46GenericFilter_Grid = "" ;
   this.AV28PermissionAccessTypeDefault = "" ;
   this.ZV28PermissionAccessTypeDefault = "" ;
   this.OV28PermissionAccessTypeDefault = "" ;
   this.AV29PermissionTypeFilter = "" ;
   this.ZV29PermissionTypeFilter = "" ;
   this.OV29PermissionTypeFilter = "" ;
   this.AV36GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV36GridSettingsRowsPerPage_Grid = 0 ;
   this.OV36GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV27Name = "" ;
   this.OV27Name = "" ;
   this.ZV13Dsc = "" ;
   this.OV13Dsc = "" ;
   this.ZV5AccessType = "" ;
   this.OV5AccessType = "" ;
   this.ZV24Id = "" ;
   this.OV24Id = "" ;
   this.ZV42Update_Action = "" ;
   this.OV42Update_Action = "" ;
   this.ZV43Delete_Action = "" ;
   this.OV43Delete_Action = "" ;
   this.AV46GenericFilter_Grid = "" ;
   this.AV44FilterTagsCollection_Grid = [ ] ;
   this.AV28PermissionAccessTypeDefault = "" ;
   this.AV29PermissionTypeFilter = "" ;
   this.AV36GridSettingsRowsPerPage_Grid = 0 ;
   this.AV9ApplicationId = 0 ;
   this.AV27Name = "" ;
   this.AV13Dsc = "" ;
   this.AV5AccessType = "" ;
   this.AV24Id = "" ;
   this.AV42Update_Action = "" ;
   this.AV43Delete_Action = "" ;
   this.AV12CurrentPage_Grid = 0 ;
   this.AV21HasNextPage_Grid = false ;
   this.AV35RowsPerPage_Grid = 0 ;
   this.AV23I_LoadCount_Grid = 0 ;
   this.AV50Pgmname = "" ;
   this.AV37PermissionAccessTypeDefault_PreviousValue = "" ;
   this.AV38PermissionTypeFilter_PreviousValue = "" ;
   this.AV45DeletedTag_Grid = "" ;
   this.Events = {"e112i2_client": ["'E_ADD'", true] ,"e122i2_client": ["'SAVEGRIDSETTINGS(GRID)'", true] ,"e132i2_client": ["'E_LOADAPPLICATIONPERMISSIONS'", true] ,"e142i2_client": ["LAYOUTDEFINED_FILTERTOGGLE_COMBINED_GRID.CLICK", true] ,"e152i2_client": ["LAYOUTDEFINED_FILTERCLOSE_COMBINED_GRID.CLICK", true] ,"e282i2_client": ["ENTER", true] ,"e292i2_client": ["CANCEL", true] ,"e202i1_client": ["'PAGINGPREVIOUS(GRID)'", false] ,"e222i1_client": ["'PAGINGNEXT(GRID)'", false] ,"e252i2_client": ["'E_UPDATE'", false] ,"e262i2_client": ["'E_DELETE'", false] ,"e242i2_client": ["VNAME.CLICK", false] ,"e212i1_client": ["'PAGINGFIRST(GRID)'", false] ,"e232i1_client": ["'TOGGLEGRIDSETTINGS(GRID)'", false] ,"e272i1_client": ["FILTERTAGSUSERCONTROL_GRID.TAGDELETED", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV37PermissionAccessTypeDefault_PreviousValue',fld:'vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV28PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT',pic:''},{av:'AV38PermissionTypeFilter_PreviousValue',fld:'vPERMISSIONTYPEFILTER_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONTYPEFILTER'},{av:'AV29PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER',pic:''},{av:'AV46GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV35RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'sPrefix'},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV21HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV23I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV50Pgmname',fld:'vPGMNAME',pic:'',hsh:true}],[{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'},{ctrl:'LOADAPPLICATIONPERMISSIONS',prop:'Visible'}]];
   this.EvtParms["START"] = [[{av:'AV50Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{ctrl:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV28PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT',pic:''},{ctrl:'vPERMISSIONTYPEFILTER'},{av:'AV29PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID',prop:'Visible'},{av:'AV35RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV36GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV37PermissionAccessTypeDefault_PreviousValue',fld:'vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE',pic:''},{av:'AV38PermissionTypeFilter_PreviousValue',fld:'vPERMISSIONTYPEFILTER_PREVIOUSVALUE',pic:''},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{ctrl:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV28PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT',pic:''},{ctrl:'vPERMISSIONTYPEFILTER'},{av:'AV29PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER',pic:''},{av:'AV46GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'this.FILTERTAGSUSERCONTROL_GRIDContainer.EmptyStateMessage',ctrl:'FILTERTAGSUSERCONTROL_GRID',prop:'EmptyStateMessage'},{av:'AV44FilterTagsCollection_Grid',fld:'vFILTERTAGSCOLLECTION_GRID',pic:''}]];
   this.EvtParms["'PAGINGPREVIOUS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV37PermissionAccessTypeDefault_PreviousValue',fld:'vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV28PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT',pic:''},{av:'AV38PermissionTypeFilter_PreviousValue',fld:'vPERMISSIONTYPEFILTER_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONTYPEFILTER'},{av:'AV29PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER',pic:''},{av:'AV50Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV46GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV21HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV35RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV23I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'sPrefix'}],[{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'},{ctrl:'LOADAPPLICATIONPERMISSIONS',prop:'Visible'}]];
   this.EvtParms["'PAGINGNEXT(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV37PermissionAccessTypeDefault_PreviousValue',fld:'vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV28PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT',pic:''},{av:'AV38PermissionTypeFilter_PreviousValue',fld:'vPERMISSIONTYPEFILTER_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONTYPEFILTER'},{av:'AV29PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER',pic:''},{av:'AV50Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV46GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV21HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV35RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV23I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'sPrefix'}],[{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'},{ctrl:'LOADAPPLICATIONPERMISSIONS',prop:'Visible'}]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV24Id',fld:'vID',pic:''}],[{av:'AV24Id',fld:'vID',pic:''},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV24Id',fld:'vID',pic:''}],[{av:'AV24Id',fld:'vID',pic:''},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'}]];
   this.EvtParms["'E_ADD'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV37PermissionAccessTypeDefault_PreviousValue',fld:'vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV28PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT',pic:''},{av:'AV38PermissionTypeFilter_PreviousValue',fld:'vPERMISSIONTYPEFILTER_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONTYPEFILTER'},{av:'AV29PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER',pic:''},{av:'AV50Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV46GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV21HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV35RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV23I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'sPrefix'}],[{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'},{ctrl:'LOADAPPLICATIONPERMISSIONS',prop:'Visible'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV35RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV23I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV46GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{ctrl:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV28PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT',pic:''},{ctrl:'vPERMISSIONTYPEFILTER'},{av:'AV29PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER',pic:''},{av:'AV21HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV50Pgmname',fld:'vPGMNAME',pic:'',hsh:true}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_GRID',prop:'Visible'},{av:'AV23I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV21HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV42Update_Action',fld:'vUPDATE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE_ACTION","Tooltiptext")',ctrl:'vUPDATE_ACTION',prop:'Tooltiptext'},{av:'AV43Delete_Action',fld:'vDELETE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Tooltiptext")',ctrl:'vDELETE_ACTION',prop:'Tooltiptext'},{av:'AV27Name',fld:'vNAME',pic:''},{av:'AV13Dsc',fld:'vDSC',pic:''},{ctrl:'vACCESSTYPE'},{av:'AV5AccessType',fld:'vACCESSTYPE',pic:''},{av:'AV24Id',fld:'vID',pic:''},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'}]];
   this.EvtParms["VNAME.CLICK"] = [[{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV24Id',fld:'vID',pic:''}],[{av:'AV24Id',fld:'vID',pic:''},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'}]];
   this.EvtParms["'PAGINGFIRST(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV37PermissionAccessTypeDefault_PreviousValue',fld:'vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV28PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT',pic:''},{av:'AV38PermissionTypeFilter_PreviousValue',fld:'vPERMISSIONTYPEFILTER_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONTYPEFILTER'},{av:'AV29PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER',pic:''},{av:'AV50Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV46GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV21HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV35RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV23I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'sPrefix'}],[{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'},{ctrl:'LOADAPPLICATIONPERMISSIONS',prop:'Visible'}]];
   this.EvtParms["'TOGGLEGRIDSETTINGS(GRID)'"] = [[{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV35RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'}],[{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV36GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]];
   this.EvtParms["'SAVEGRIDSETTINGS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV37PermissionAccessTypeDefault_PreviousValue',fld:'vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV28PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT',pic:''},{av:'AV38PermissionTypeFilter_PreviousValue',fld:'vPERMISSIONTYPEFILTER_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONTYPEFILTER'},{av:'AV29PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER',pic:''},{av:'AV50Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV46GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV21HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV35RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV23I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'sPrefix'},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV36GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'}],[{av:'AV35RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{ctrl:'ADD',prop:'Visible'},{ctrl:'LOADAPPLICATIONPERMISSIONS',prop:'Visible'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV37PermissionAccessTypeDefault_PreviousValue',fld:'vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV28PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT',pic:''},{av:'AV38PermissionTypeFilter_PreviousValue',fld:'vPERMISSIONTYPEFILTER_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONTYPEFILTER'},{av:'AV29PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER',pic:''},{av:'AV50Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV46GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV21HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true}],[{av:'AV37PermissionAccessTypeDefault_PreviousValue',fld:'vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE',pic:''},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV38PermissionTypeFilter_PreviousValue',fld:'vPERMISSIONTYPEFILTER_PREVIOUSVALUE',pic:''},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'this.FILTERTAGSUSERCONTROL_GRIDContainer.EmptyStateMessage',ctrl:'FILTERTAGSUSERCONTROL_GRID',prop:'EmptyStateMessage'},{av:'AV44FilterTagsCollection_Grid',fld:'vFILTERTAGSCOLLECTION_GRID',pic:''},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'},{ctrl:'ADD',prop:'Visible'},{ctrl:'LOADAPPLICATIONPERMISSIONS',prop:'Visible'}]];
   this.EvtParms["'E_LOADAPPLICATIONPERMISSIONS'"] = [[{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'}],[]];
   this.EvtParms["FILTERTAGSUSERCONTROL_GRID.TAGDELETED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV37PermissionAccessTypeDefault_PreviousValue',fld:'vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV28PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT',pic:''},{av:'AV38PermissionTypeFilter_PreviousValue',fld:'vPERMISSIONTYPEFILTER_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONTYPEFILTER'},{av:'AV29PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER',pic:''},{av:'AV50Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV46GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV21HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV35RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV23I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'sPrefix'},{av:'AV45DeletedTag_Grid',fld:'vDELETEDTAG_GRID',pic:''}],[{ctrl:'vPERMISSIONACCESSTYPEDEFAULT'},{av:'AV28PermissionAccessTypeDefault',fld:'vPERMISSIONACCESSTYPEDEFAULT',pic:''},{ctrl:'vPERMISSIONTYPEFILTER'},{av:'AV29PermissionTypeFilter',fld:'vPERMISSIONTYPEFILTER',pic:''},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'},{ctrl:'LOADAPPLICATIONPERMISSIONS',prop:'Visible'}]];
   this.EvtParms["LAYOUTDEFINED_FILTERTOGGLE_COMBINED_GRID.CLICK"] = [[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID',prop:'Visible'}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID',prop:'Visible'}]];
   this.EvtParms["LAYOUTDEFINED_FILTERCLOSE_COMBINED_GRID.CLICK"] = [[],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID',prop:'Visible'}]];
   this.EvtParms["VALIDV_PERMISSIONACCESSTYPEDEFAULT"] = [[],[]];
   this.EvtParms["VALIDV_PERMISSIONTYPEFILTER"] = [[],[]];
   this.EvtParms["VALIDV_ACCESSTYPE"] = [[{ctrl:'vACCESSTYPE'},{av:'AV5AccessType',fld:'vACCESSTYPE',pic:''}],[{ctrl:'vACCESSTYPE'},{av:'AV5AccessType',fld:'vACCESSTYPE',pic:''}]];
   this.setVCMap("AV12CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV9ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV21HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV35RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV23I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV50Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV37PermissionAccessTypeDefault_PreviousValue", "vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE", 0, "char", 1, 0);
   this.setVCMap("AV38PermissionTypeFilter_PreviousValue", "vPERMISSIONTYPEFILTER_PREVIOUSVALUE", 0, "char", 1, 0);
   this.setVCMap("AV45DeletedTag_Grid", "vDELETEDTAG_GRID", 0, "char", 30, 0);
   this.setVCMap("AV9ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV37PermissionAccessTypeDefault_PreviousValue", "vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE", 0, "char", 1, 0);
   this.setVCMap("AV38PermissionTypeFilter_PreviousValue", "vPERMISSIONTYPEFILTER_PREVIOUSVALUE", 0, "char", 1, 0);
   this.setVCMap("AV50Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV12CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV21HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV35RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV23I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV45DeletedTag_Grid", "vDELETEDTAG_GRID", 0, "char", 30, 0);
   this.setVCMap("AV35RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV12CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV21HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV9ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV37PermissionAccessTypeDefault_PreviousValue", "vPERMISSIONACCESSTYPEDEFAULT_PREVIOUSVALUE", 0, "char", 1, 0);
   this.setVCMap("AV38PermissionTypeFilter_PreviousValue", "vPERMISSIONTYPEFILTER_PREVIOUSVALUE", 0, "char", 1, 0);
   this.setVCMap("AV50Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV12CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV21HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV35RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV23I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV9ApplicationId"});
   GridContainer.addRefreshingVar({rfrVar:"AV37PermissionAccessTypeDefault_PreviousValue"});
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar({rfrVar:"AV38PermissionTypeFilter_PreviousValue"});
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar({rfrVar:"AV50Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV12CurrentPage_Grid"});
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar({rfrVar:"AV21HasNextPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV35RowsPerPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV23I_LoadCount_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV9ApplicationId"});
   GridContainer.addRefreshingParm({rfrVar:"AV37PermissionAccessTypeDefault_PreviousValue"});
   GridContainer.addRefreshingParm(this.GXValidFnc[44]);
   GridContainer.addRefreshingParm({rfrVar:"AV38PermissionTypeFilter_PreviousValue"});
   GridContainer.addRefreshingParm(this.GXValidFnc[50]);
   GridContainer.addRefreshingParm({rfrVar:"AV50Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV12CurrentPage_Grid"});
   GridContainer.addRefreshingParm(this.GXValidFnc[28]);
   GridContainer.addRefreshingParm({rfrVar:"AV21HasNextPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV35RowsPerPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV23I_LoadCount_Grid"});
   this.Initialize( );
});
