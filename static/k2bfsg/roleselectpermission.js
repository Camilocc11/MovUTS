gx.evt.autoSkip = false;
gx.define('k2bfsg.roleselectpermission', true, function (CmpContext) {
   this.ServerClass =  "k2bfsg.roleselectpermission" ;
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
      this.AV15CurrentPage_ActivePermissions=gx.fn.getIntegerValue("vCURRENTPAGE_ACTIVEPERMISSIONS",'.') ;
      this.AV6RoleId=gx.fn.getIntegerValue("vROLEID",'.') ;
      this.AV77CountSelectedItems_ActivePermissions=gx.fn.getIntegerValue("vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS",'.') ;
      this.AV66AllSelectedItems_ActivePermissions=gx.fn.getControlValue("vALLSELECTEDITEMS_ACTIVEPERMISSIONS") ;
      this.AV61RowsPerPage_ActivePermissions=gx.fn.getIntegerValue("vROWSPERPAGE_ACTIVEPERMISSIONS",'.') ;
      this.AV9ActivePermissions_SelectedRows=gx.fn.getIntegerValue("vACTIVEPERMISSIONS_SELECTEDROWS",'.') ;
      this.AV35I_LoadCount_ActivePermissions=gx.fn.getIntegerValue("vI_LOADCOUNT_ACTIVEPERMISSIONS",'.') ;
      this.AV32HasNextPage_ActivePermissions=gx.fn.getControlValue("vHASNEXTPAGE_ACTIVEPERMISSIONS") ;
      this.AV89Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV45MultiRowHasNext_ActivePermissions=gx.fn.getControlValue("vMULTIROWHASNEXT_ACTIVEPERMISSIONS") ;
      this.AV47MultiRowIterator_ActivePermissions=gx.fn.getIntegerValue("vMULTIROWITERATOR_ACTIVEPERMISSIONS",'.') ;
      this.AV67SelectedItems_ActivePermissions=gx.fn.getControlValue("vSELECTEDITEMS_ACTIVEPERMISSIONS") ;
      this.AV72S_Id=gx.fn.getControlValue("vS_ID") ;
      this.AV76FieldValues_ActivePermissions=gx.fn.getControlValue("vFIELDVALUES_ACTIVEPERMISSIONS") ;
      this.AV75ApplicationId_PreviousValue=gx.fn.getIntegerValue("vAPPLICATIONID_PREVIOUSVALUE",'.') ;
      this.AV6RoleId=gx.fn.getIntegerValue("vROLEID",'.') ;
      this.AV75ApplicationId_PreviousValue=gx.fn.getIntegerValue("vAPPLICATIONID_PREVIOUSVALUE",'.') ;
      this.AV66AllSelectedItems_ActivePermissions=gx.fn.getControlValue("vALLSELECTEDITEMS_ACTIVEPERMISSIONS") ;
      this.AV89Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV15CurrentPage_ActivePermissions=gx.fn.getIntegerValue("vCURRENTPAGE_ACTIVEPERMISSIONS",'.') ;
      this.AV77CountSelectedItems_ActivePermissions=gx.fn.getIntegerValue("vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS",'.') ;
      this.AV32HasNextPage_ActivePermissions=gx.fn.getControlValue("vHASNEXTPAGE_ACTIVEPERMISSIONS") ;
      this.AV61RowsPerPage_ActivePermissions=gx.fn.getIntegerValue("vROWSPERPAGE_ACTIVEPERMISSIONS",'.') ;
      this.AV9ActivePermissions_SelectedRows=gx.fn.getIntegerValue("vACTIVEPERMISSIONS_SELECTEDROWS",'.') ;
      this.AV35I_LoadCount_ActivePermissions=gx.fn.getIntegerValue("vI_LOADCOUNT_ACTIVEPERMISSIONS",'.') ;
      this.AV61RowsPerPage_ActivePermissions=gx.fn.getIntegerValue("vROWSPERPAGE_ACTIVEPERMISSIONS",'.') ;
      this.AV15CurrentPage_ActivePermissions=gx.fn.getIntegerValue("vCURRENTPAGE_ACTIVEPERMISSIONS",'.') ;
      this.AV32HasNextPage_ActivePermissions=gx.fn.getControlValue("vHASNEXTPAGE_ACTIVEPERMISSIONS") ;
   };
   this.Validv_Accesstype=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(119);
      return this.validCliEvt("Validv_Accesstype", 119, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vACCESSTYPE");
         this.AnyError  = 0;
         if ( ! ( ( this.AV7AccessType == "A" ) || ( this.AV7AccessType == "D" ) || ( this.AV7AccessType == "R" ) ) )
         {
            try {
               gxballoon.setError("Campo Access Type fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]);
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
   this.s282_client=function()
   {
      this.AV77CountSelectedItems_ActivePermissions = gx.num.trunc( 0 ,0) ;
      this.AV96GXV7 = gx.num.trunc( 1 ,0) ;
      while ( this.AV96GXV7 <= this.AV66AllSelectedItems_ActivePermissions.length )
      {
         this.AV64SelectedItem_ActivePermissions =  this.AV66AllSelectedItems_ActivePermissions[this.AV96GXV7 - 1]  ;
         if ( this.AV64SelectedItem_ActivePermissions.IsSelected )
         {
            this.AV77CountSelectedItems_ActivePermissions = gx.num.trunc( this.AV77CountSelectedItems_ActivePermissions + 1 ,0) ;
         }
         this.AV96GXV7 = gx.num.trunc( this.AV96GXV7 + 1 ,0) ;
      }
   };
   this.s302_client=function()
   {
      gx.fn.setCtrlProperty("DELETEMULTIPLE","Visible", false );
   };
   this.s342_client=function()
   {
      gx.fn.setCtrlProperty("ADD","Visible", true );
   };
   this.s162_client=function()
   {
   };
   this.s182_client=function()
   {
   };
   this.s192_client=function()
   {
      gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKACTIVEPERMISSIONS","Caption", "1" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKACTIVEPERMISSIONS","Caption", gx.num.str( this.AV15CurrentPage_ActivePermissions-1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKACTIVEPERMISSIONS","Caption", gx.num.str( this.AV15CurrentPage_ActivePermissions, 4, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKACTIVEPERMISSIONS","Caption", gx.num.str( this.AV15CurrentPage_ActivePermissions+1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKACTIVEPERMISSIONS","Class", "K2BToolsTextBlock_PaginationNormal" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKACTIVEPERMISSIONS","Class", "K2BToolsTextBlock_PaginationNormal" );
      if ( ((0==this.AV15CurrentPage_ActivePermissions)) || ( this.AV15CurrentPage_ActivePermissions <= 1 ) )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKACTIVEPERMISSIONS","Class", "K2BToolsTextBlock_PaginationNormal_Disabled" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLACTIVEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKACTIVEPERMISSIONS","Visible", false );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLACTIVEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKACTIVEPERMISSIONS","Visible", false );
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLACTIVEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKACTIVEPERMISSIONS","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLACTIVEPERMISSIONS","Class", "K2BToolsCell_PaginationPrevious" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKACTIVEPERMISSIONS","Visible", true );
         if ( this.AV15CurrentPage_ActivePermissions == 2 )
         {
            gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLACTIVEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
            gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKACTIVEPERMISSIONS","Visible", false );
            gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLACTIVEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
            gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKACTIVEPERMISSIONS","Visible", false );
         }
         else
         {
            gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLACTIVEPERMISSIONS","Class", "K2BToolsCell_PaginationLeft" );
            gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKACTIVEPERMISSIONS","Visible", true );
            if ( this.AV15CurrentPage_ActivePermissions == 3 )
            {
               gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLACTIVEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
               gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKACTIVEPERMISSIONS","Visible", false );
            }
            else
            {
               gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLACTIVEPERMISSIONS","Class", "K2BToolsCell_PaginationDisabled K2BToolsCell_PaginationLeft" );
               gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKACTIVEPERMISSIONS","Visible", true );
            }
         }
      }
      if ( this.AV32HasNextPage_ActivePermissions == false )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKACTIVEPERMISSIONS","Class", "K2BToolsTextBlock_PaginationNormal_Disabled" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLACTIVEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKACTIVEPERMISSIONS","Visible", false );
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGECELLACTIVEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKACTIVEPERMISSIONS","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGECELLACTIVEPERMISSIONS","Class", "K2BToolsCell_PaginationNext" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKACTIVEPERMISSIONS","Visible", true );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLACTIVEPERMISSIONS","Class", "K2BToolsCell_PaginationDisabled K2BToolsCell_PaginationRight" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKACTIVEPERMISSIONS","Visible", true );
      }
      if ( ( this.AV15CurrentPage_ActivePermissions <= 1 ) && ( this.AV32HasNextPage_ActivePermissions == false ) )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_ACTIVEPERMISSIONS","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_ACTIVEPERMISSIONS","Visible", true );
      }
   };
   this.e252r1_client=function()
   {
      this.clearMessages();
      this.AV63CheckAll_ActivePermissions =  false  ;
      if ( this.AV15CurrentPage_ActivePermissions > 1 )
      {
         this.AV15CurrentPage_ActivePermissions = gx.num.trunc( this.AV15CurrentPage_ActivePermissions - 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]);
      this.refreshGrid('Activepermissions') ;
      this.refreshOutputs([{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e272r1_client=function()
   {
      this.clearMessages();
      this.AV63CheckAll_ActivePermissions =  false  ;
      if ( this.AV32HasNextPage_ActivePermissions )
      {
         this.AV15CurrentPage_ActivePermissions = gx.num.trunc( this.AV15CurrentPage_ActivePermissions + 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]);
      this.refreshGrid('Activepermissions') ;
      this.refreshOutputs([{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s222_client=function()
   {
      this.AV47MultiRowIterator_ActivePermissions = gx.num.trunc( 1 ,0) ;
   };
   this.e262r1_client=function()
   {
      this.clearMessages();
      this.AV15CurrentPage_ActivePermissions = gx.num.trunc( 1 ,0) ;
      this.AV63CheckAll_ActivePermissions =  false  ;
      this.refreshOutputs([{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]);
      this.refreshGrid('Activepermissions') ;
      this.refreshOutputs([{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s312_client=function()
   {
   };
   this.e282r1_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEACTIVEPERMISSIONS","Visible") == false )
      {
         this.AV62GridSettingsRowsPerPage_ActivePermissions = gx.num.trunc( this.AV61RowsPerPage_ActivePermissions ,0) ;
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEACTIVEPERMISSIONS","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEACTIVEPERMISSIONS","Visible", false );
      }
      this.refreshOutputs([{ctrl:'vGRIDSETTINGSROWSPERPAGE_ACTIVEPERMISSIONS'},{av:'AV62GridSettingsRowsPerPage_ActivePermissions',fld:'vGRIDSETTINGSROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEACTIVEPERMISSIONS","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEACTIVEPERMISSIONS',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e112r2_client=function()
   {
      return this.executeServerEvent("'E_ADD'", false, null, false, false);
   };
   this.e122r2_client=function()
   {
      return this.executeServerEvent("'E_DELETEMULTIPLE'", true, null, false, false);
   };
   this.e222r2_client=function()
   {
      return this.executeServerEvent("VMULTIROWITEMSELECTED_ACTIVEPERMISSIONS.CLICK", true, arguments[0], false, false);
   };
   this.e132r2_client=function()
   {
      return this.executeServerEvent("'SAVEGRIDSETTINGS(ACTIVEPERMISSIONS)'", false, null, false, false);
   };
   this.e142r2_client=function()
   {
      return this.executeServerEvent("VCHECKALL_ACTIVEPERMISSIONS.CLICK", true, null, false, true);
   };
   this.e242r2_client=function()
   {
      return this.executeServerEvent("'E_DELETE'", true, arguments[0], false, false);
   };
   this.e152r2_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERTOGGLE_COMBINED_ACTIVEPERMISSIONS.CLICK", true, null, false, true);
   };
   this.e162r2_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERCLOSE_COMBINED_ACTIVEPERMISSIONS.CLICK", true, null, false, true);
   };
   this.e172r2_client=function()
   {
      return this.executeServerEvent("GRIDTITLE_ACTIVEPERMISSIONS.CLICK", true, null, false, true);
   };
   this.e182r2_client=function()
   {
      return this.executeServerEvent("COLLAPSIBLEIMAGE_ACTIVEPERMISSIONS.CLICK", true, null, false, true);
   };
   this.e292r2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e302r2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,18,20,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,92,95,96,97,98,99,100,101,102,103,106,107,108,109,110,111,112,113,116,117,120,121,122,123,124,125,126,127,128,129,132,133,134,135,136,139,141,143,145,147,149,151,153,154,155,156];
   this.GXLastCtrlId =156;
   this.ActivepermissionsContainer = new gx.grid.grid(this, 2,"WbpLvl2",119,"Activepermissions","Activepermissions","ActivepermissionsContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.roleselectpermission",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,true,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var ActivepermissionsContainer = this.ActivepermissionsContainer;
   ActivepermissionsContainer.addCheckBox("Multirowitemselected_activepermissions",120,"vMULTIROWITEMSELECTED_ACTIVEPERMISSIONS","","","MultiRowItemSelected_ActivePermissions","boolean","true","false","e222r2_client",true,false,20,"px","K2BToolsCheckBoxColumn");
   ActivepermissionsContainer.addSingleLineEdit("Name",121,"vNAME","Nombre","","Name","char",0,"px",120,80,"left",null,[],"Name","Name",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   ActivepermissionsContainer.addSingleLineEdit("Dsc",122,"vDSC","Descripción","","Dsc","char",570,"px",254,80,"left",null,[],"Dsc","Dsc",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   ActivepermissionsContainer.addComboBox("Accesstype",123,"vACCESSTYPE","Tipo de acceso","AccessType","char",null,0,true,false,0,"px","K2BToolsGridColumn InvisibleInExtraSmallColumn");
   ActivepermissionsContainer.addSingleLineEdit("Id",124,"vID","Id","","Id","char",0,"px",40,40,"left",null,[],"Id","Id",false,0,false,false,"Attribute_Invisible",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   ActivepermissionsContainer.addCheckBox("Isinherited",125,"vISINHERITED","Es heredado","","IsInherited","boolean","true","false",null,true,false,0,"px","K2BToolsGridColumn InvisibleInExtraSmallColumn");
   ActivepermissionsContainer.addBitmap("&Delete_action","vDELETE_ACTION",126,20,"px",17,"px","e242r2_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   this.ActivepermissionsContainer.emptyText = "";
   this.setGrid(ActivepermissionsContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 157, 42, "K2BControlBeautify", this.CmpContext + "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[12]={ id: 12, fld:"GRIDCOMPONENT_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"GRIDTITLECONTAINERTABLE_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[18]={ id: 18, fld:"GRIDTITLE_ACTIVEPERMISSIONS", format:0,grid:0,evt:"e172r2_client"};
   GXValidFnc[20]={ id: 20, fld:"COLLAPSIBLEIMAGECONTAINER_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[23]={ id: 23, fld:"COLLAPSIBLEIMAGE_ACTIVEPERMISSIONS",grid:0,evt:"e182r2_client"};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"GRIDCOMPONENTCONTENT_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"LAYOUTDEFINED_GRID_INNER_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"LAYOUTDEFINED_TABLE10_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"LAYOUTDEFINED_FILTERGLOBALCONTAINER_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"LAYOUTDEFINED_COMBINEDFILTERLAYOUT_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"LAYOUTDEFINED_SECTION4_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id:42 ,lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGENERICFILTER_ACTIVEPERMISSIONS",gxz:"ZV83GenericFilter_ActivePermissions",gxold:"OV83GenericFilter_ActivePermissions",gxvar:"AV83GenericFilter_ActivePermissions",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV83GenericFilter_ActivePermissions=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV83GenericFilter_ActivePermissions=Value},v2c:function(){gx.fn.setControlValue("vGENERICFILTER_ACTIVEPERMISSIONS",gx.O.AV83GenericFilter_ActivePermissions,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV83GenericFilter_ActivePermissions=this.val()},val:function(){return gx.fn.getControlValue("vGENERICFILTER_ACTIVEPERMISSIONS")},nac:gx.falseFn};
   GXValidFnc[43]={ id: 43, fld:"LAYOUTDEFINED_FILTERTOGGLE_COMBINED_ACTIVEPERMISSIONS",grid:0,evt:"e152r2_client"};
   GXValidFnc[44]={ id: 44, fld:"LAYOUTDEFINED_FILTERSUMMARY_COMBINED_ACTIVEPERMISSIONS", format:0,grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[48]={ id: 48, fld:"LAYOUTDEFINED_FILTERCLOSE_COMBINED_ACTIVEPERMISSIONS",grid:0,evt:"e162r2_client"};
   GXValidFnc[49]={ id: 49, fld:"MAINFILTERRESPONSIVETABLE_FILTERS",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"FILTERCONTAINERTABLE_FILTERS",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"TABLE_CONTAINER_APPLICATIONID",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id:58 ,lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAPPLICATIONID",gxz:"ZV14ApplicationId",gxold:"OV14ApplicationId",gxvar:"AV14ApplicationId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV14ApplicationId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV14ApplicationId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vAPPLICATIONID",gx.O.AV14ApplicationId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV14ApplicationId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPPLICATIONID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 58 , function() {
   });
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"LAYOUTDEFINED_TABLE7_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[64]={ id: 64, fld:"GRIDSETTINGS_GLOBALTABLE_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"GRIDSETTINGS_LABELACTIVEPERMISSIONS",grid:0,evt:"e282r1_client"};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id: 70, fld:"GRIDSETTINGS_CONTENTOUTERTABLEACTIVEPERMISSIONS",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"GSLAYOUTDEFINED_ACTIVEPERMISSIONSTABLE1",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"GRIDCUSTOMIZATIONCONTAINER_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id: 78, fld:"GSLAYOUTDEFINED_ACTIVEPERMISSIONSRUNTIMECOLUMNSELECTIONTB", format:0,grid:0};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id: 81, fld:"GSLAYOUTDEFINED_ACTIVEPERMISSIONSCUSTOMIZATIONCOLLAPSIBLESECTION",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id: 84, fld:"ROWSPERPAGECONTAINER_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[85]={ id: 85, fld:"",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id:87 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDSETTINGSROWSPERPAGE_ACTIVEPERMISSIONS",gxz:"ZV62GridSettingsRowsPerPage_ActivePermissions",gxold:"OV62GridSettingsRowsPerPage_ActivePermissions",gxvar:"AV62GridSettingsRowsPerPage_ActivePermissions",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV62GridSettingsRowsPerPage_ActivePermissions=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV62GridSettingsRowsPerPage_ActivePermissions=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vGRIDSETTINGSROWSPERPAGE_ACTIVEPERMISSIONS",gx.O.AV62GridSettingsRowsPerPage_ActivePermissions)},c2v:function(){if(this.val()!==undefined)gx.O.AV62GridSettingsRowsPerPage_ActivePermissions=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRIDSETTINGSROWSPERPAGE_ACTIVEPERMISSIONS",'.')},nac:gx.falseFn};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"GRIDSETTINGS_SAVEACTIVEPERMISSIONS",grid:0,evt:"e132r2_client"};
   GXValidFnc[92]={ id: 92, fld:"ACTIONS_ACTIVEPERMISSIONS_TOPRIGHT",grid:0};
   GXValidFnc[95]={ id: 95, fld:"ADD",grid:0,evt:"e112r2_client"};
   GXValidFnc[96]={ id: 96, fld:"",grid:0};
   GXValidFnc[97]={ id: 97, fld:"",grid:0};
   GXValidFnc[98]={ id: 98, fld:"LAYOUTDEFINED_TABLE3_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[99]={ id: 99, fld:"",grid:0};
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   GXValidFnc[101]={ id: 101, fld:"LAYOUTDEFINED_SECTION1_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[102]={ id: 102, fld:"LAYOUTDEFINED_SECTION7_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[103]={ id: 103, fld:"ACTIONS_ACTIVEPERMISSIONS_GRIDASSOCIATEDLEFT",grid:0};
   GXValidFnc[106]={ id: 106, fld:"DELETEMULTIPLE",grid:0,evt:"e122r2_client"};
   GXValidFnc[107]={ id: 107, fld:"LAYOUTDEFINED_SECTION3_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[108]={ id: 108, fld:"",grid:0};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id: 110, fld:"MAINGRID_RESPONSIVETABLE_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[111]={ id: 111, fld:"",grid:0};
   GXValidFnc[112]={ id: 112, fld:"",grid:0};
   GXValidFnc[113]={ id: 113, fld:"TABLEGRIDCONTAINER_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[116]={ id: 116, fld:"",grid:0};
   GXValidFnc[117]={ id:117 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCHECKALL_ACTIVEPERMISSIONS",gxz:"ZV63CheckAll_ActivePermissions",gxold:"OV63CheckAll_ActivePermissions",gxvar:"AV63CheckAll_ActivePermissions",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV63CheckAll_ActivePermissions=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV63CheckAll_ActivePermissions=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCHECKALL_ACTIVEPERMISSIONS",gx.O.AV63CheckAll_ActivePermissions,true)},c2v:function(){if(this.val()!==undefined)gx.O.AV63CheckAll_ActivePermissions=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCHECKALL_ACTIVEPERMISSIONS")},nac:gx.falseFn,evt:"e142r2_client",values:['true','false']};
   GXValidFnc[120]={ id:120 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:119,gxgrid:this.ActivepermissionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMULTIROWITEMSELECTED_ACTIVEPERMISSIONS",gxz:"ZV46MultiRowItemSelected_ActivePermissions",gxold:"OV46MultiRowItemSelected_ActivePermissions",gxvar:"AV46MultiRowItemSelected_ActivePermissions",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV46MultiRowItemSelected_ActivePermissions=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46MultiRowItemSelected_ActivePermissions=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vMULTIROWITEMSELECTED_ACTIVEPERMISSIONS",row || gx.fn.currentGridRowImpl(119),gx.O.AV46MultiRowItemSelected_ActivePermissions,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV46MultiRowItemSelected_ActivePermissions=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("vMULTIROWITEMSELECTED_ACTIVEPERMISSIONS",row || gx.fn.currentGridRowImpl(119))},nac:gx.falseFn,evt:"e222r2_client",values:['true','false']};
   GXValidFnc[121]={ id:121 ,lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:119,gxgrid:this.ActivepermissionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV48Name",gxold:"OV48Name",gxvar:"AV48Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV48Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(119),gx.O.AV48Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV48Name=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(119))},nac:gx.falseFn};
   GXValidFnc[122]={ id:122 ,lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:119,gxgrid:this.ActivepermissionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",gxz:"ZV17Dsc",gxold:"OV17Dsc",gxvar:"AV17Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV17Dsc=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17Dsc=Value},v2c:function(row){gx.fn.setGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(119),gx.O.AV17Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV17Dsc=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(119))},nac:gx.falseFn};
   GXValidFnc[123]={ id:123 ,lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:119,gxgrid:this.ActivepermissionsContainer,fnc:this.Validv_Accesstype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vACCESSTYPE",gxz:"ZV7AccessType",gxold:"OV7AccessType",gxvar:"AV7AccessType",ucs:[],op:[123],ip:[123],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV7AccessType=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV7AccessType=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vACCESSTYPE",row || gx.fn.currentGridRowImpl(119),gx.O.AV7AccessType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV7AccessType=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vACCESSTYPE",row || gx.fn.currentGridRowImpl(119))},nac:gx.falseFn};
   GXValidFnc[124]={ id:124 ,lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:119,gxgrid:this.ActivepermissionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV37Id",gxold:"OV37Id",gxvar:"AV37Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV37Id=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV37Id=Value},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(119),gx.O.AV37Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV37Id=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vID",row || gx.fn.currentGridRowImpl(119))},nac:gx.falseFn};
   GXValidFnc[125]={ id:125 ,lvl:2,type:"boolean",len:1,dec:0,sign:false,ro:0,isacc:0,grid:119,gxgrid:this.ActivepermissionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISINHERITED",gxz:"ZV40IsInherited",gxold:"OV40IsInherited",gxvar:"AV40IsInherited",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV40IsInherited=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV40IsInherited=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vISINHERITED",row || gx.fn.currentGridRowImpl(119),gx.O.AV40IsInherited,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV40IsInherited=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("vISINHERITED",row || gx.fn.currentGridRowImpl(119))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[126]={ id:126 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:119,gxgrid:this.ActivepermissionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE_ACTION",gxz:"ZV82Delete_Action",gxold:"OV82Delete_Action",gxvar:"AV82Delete_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV82Delete_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV82Delete_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(119),gx.O.AV82Delete_Action,gx.O.AV90Delete_action_GXI)},c2v:function(row){gx.O.AV90Delete_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV82Delete_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(119))},val_GXI:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION_GXI",row || gx.fn.currentGridRowImpl(119))}, gxvar_GXI:'AV90Delete_action_GXI',nac:gx.falseFn,evt:"e242r2_client"};
   GXValidFnc[127]={ id: 127, fld:"",grid:0};
   GXValidFnc[128]={ id: 128, fld:"",grid:0};
   GXValidFnc[129]={ id: 129, fld:"I_NORESULTSFOUNDTABLENAME_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[132]={ id: 132, fld:"I_NORESULTSFOUNDTEXTBLOCK_ACTIVEPERMISSIONS", format:0,grid:0};
   GXValidFnc[133]={ id: 133, fld:"",grid:0};
   GXValidFnc[134]={ id: 134, fld:"",grid:0};
   GXValidFnc[135]={ id: 135, fld:"LAYOUTDEFINED_SECTION8_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[136]={ id: 136, fld:"PAGINATIONBAR_PAGINGCONTAINERTABLE_ACTIVEPERMISSIONS",grid:0};
   GXValidFnc[139]={ id: 139, fld:"PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKACTIVEPERMISSIONS", format:1,grid:0,evt:"e252r1_client"};
   GXValidFnc[141]={ id: 141, fld:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKACTIVEPERMISSIONS", format:0,grid:0,evt:"e262r1_client"};
   GXValidFnc[143]={ id: 143, fld:"PAGINATIONBAR_SPACINGLEFTTEXTBLOCKACTIVEPERMISSIONS", format:0,grid:0};
   GXValidFnc[145]={ id: 145, fld:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKACTIVEPERMISSIONS", format:0,grid:0,evt:"e252r1_client"};
   GXValidFnc[147]={ id: 147, fld:"PAGINATIONBAR_CURRENTPAGETEXTBLOCKACTIVEPERMISSIONS", format:0,grid:0};
   GXValidFnc[149]={ id: 149, fld:"PAGINATIONBAR_NEXTPAGETEXTBLOCKACTIVEPERMISSIONS", format:0,grid:0,evt:"e272r1_client"};
   GXValidFnc[151]={ id: 151, fld:"PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKACTIVEPERMISSIONS", format:0,grid:0};
   GXValidFnc[153]={ id: 153, fld:"PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKACTIVEPERMISSIONS", format:1,grid:0,evt:"e272r1_client"};
   GXValidFnc[154]={ id: 154, fld:"",grid:0};
   GXValidFnc[155]={ id: 155, fld:"",grid:0};
   GXValidFnc[156]={ id: 156, fld:"",grid:0};
   this.AV83GenericFilter_ActivePermissions = "" ;
   this.ZV83GenericFilter_ActivePermissions = "" ;
   this.OV83GenericFilter_ActivePermissions = "" ;
   this.AV14ApplicationId = 0 ;
   this.ZV14ApplicationId = 0 ;
   this.OV14ApplicationId = 0 ;
   this.AV62GridSettingsRowsPerPage_ActivePermissions = 0 ;
   this.ZV62GridSettingsRowsPerPage_ActivePermissions = 0 ;
   this.OV62GridSettingsRowsPerPage_ActivePermissions = 0 ;
   this.AV63CheckAll_ActivePermissions = false ;
   this.ZV63CheckAll_ActivePermissions = false ;
   this.OV63CheckAll_ActivePermissions = false ;
   this.ZV46MultiRowItemSelected_ActivePermissions = false ;
   this.OV46MultiRowItemSelected_ActivePermissions = false ;
   this.ZV48Name = "" ;
   this.OV48Name = "" ;
   this.ZV17Dsc = "" ;
   this.OV17Dsc = "" ;
   this.ZV7AccessType = "" ;
   this.OV7AccessType = "" ;
   this.ZV37Id = "" ;
   this.OV37Id = "" ;
   this.ZV40IsInherited = false ;
   this.OV40IsInherited = false ;
   this.ZV82Delete_Action = "" ;
   this.OV82Delete_Action = "" ;
   this.AV83GenericFilter_ActivePermissions = "" ;
   this.AV14ApplicationId = 0 ;
   this.AV62GridSettingsRowsPerPage_ActivePermissions = 0 ;
   this.AV63CheckAll_ActivePermissions = false ;
   this.AV6RoleId = 0 ;
   this.AV46MultiRowItemSelected_ActivePermissions = false ;
   this.AV48Name = "" ;
   this.AV17Dsc = "" ;
   this.AV7AccessType = "" ;
   this.AV37Id = "" ;
   this.AV40IsInherited = false ;
   this.AV82Delete_Action = "" ;
   this.AV15CurrentPage_ActivePermissions = 0 ;
   this.AV77CountSelectedItems_ActivePermissions = 0 ;
   this.AV66AllSelectedItems_ActivePermissions = [ ] ;
   this.AV61RowsPerPage_ActivePermissions = 0 ;
   this.AV9ActivePermissions_SelectedRows = 0 ;
   this.AV35I_LoadCount_ActivePermissions = 0 ;
   this.AV32HasNextPage_ActivePermissions = false ;
   this.AV89Pgmname = "" ;
   this.AV45MultiRowHasNext_ActivePermissions = false ;
   this.AV47MultiRowIterator_ActivePermissions = 0 ;
   this.AV67SelectedItems_ActivePermissions = [ ] ;
   this.AV72S_Id = "" ;
   this.AV76FieldValues_ActivePermissions = [ ] ;
   this.AV75ApplicationId_PreviousValue = 0 ;
   this.AV64SelectedItem_ActivePermissions = {SKNumeric1:0,SKNumeric2:0,SKNumeric3:0,SKNumeric4:0,SKNumeric5:0,SKNumeric6:0,SKCharacter1:"",SKCharacter2:"",SKCharacter3:"",SKCharacter4:"",SKCharacter5:"",SKCharacter6:"",SKGUID1:'00000000-0000-0000-0000-000000000000',SKGUID2:'00000000-0000-0000-0000-000000000000',SKDateTime1:gx.date.nullDate(),SKDateTime2:gx.date.nullDate(),IsSelected:false,FieldValues:[]} ;
   this.AV96GXV7 = 0 ;
   this.Events = {"e112r2_client": ["'E_ADD'", true] ,"e122r2_client": ["'E_DELETEMULTIPLE'", true] ,"e222r2_client": ["VMULTIROWITEMSELECTED_ACTIVEPERMISSIONS.CLICK", true] ,"e132r2_client": ["'SAVEGRIDSETTINGS(ACTIVEPERMISSIONS)'", true] ,"e142r2_client": ["VCHECKALL_ACTIVEPERMISSIONS.CLICK", true] ,"e242r2_client": ["'E_DELETE'", true] ,"e152r2_client": ["LAYOUTDEFINED_FILTERTOGGLE_COMBINED_ACTIVEPERMISSIONS.CLICK", true] ,"e162r2_client": ["LAYOUTDEFINED_FILTERCLOSE_COMBINED_ACTIVEPERMISSIONS.CLICK", true] ,"e172r2_client": ["GRIDTITLE_ACTIVEPERMISSIONS.CLICK", true] ,"e182r2_client": ["COLLAPSIBLEIMAGE_ACTIVEPERMISSIONS.CLICK", true] ,"e292r2_client": ["ENTER", true] ,"e302r2_client": ["CANCEL", true] ,"e252r1_client": ["'PAGINGPREVIOUS(ACTIVEPERMISSIONS)'", false] ,"e272r1_client": ["'PAGINGNEXT(ACTIVEPERMISSIONS)'", false] ,"e262r1_client": ["'PAGINGFIRST(ACTIVEPERMISSIONS)'", false] ,"e282r1_client": ["'TOGGLEGRIDSETTINGS(ACTIVEPERMISSIONS)'", false]};
   this.EvtParms["REFRESH"] = [[{av:'ACTIVEPERMISSIONS_nFirstRecordOnPage'},{av:'ACTIVEPERMISSIONS_nEOF'},{av:'AV75ApplicationId_PreviousValue',fld:'vAPPLICATIONID_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV83GenericFilter_ActivePermissions',fld:'vGENERICFILTER_ACTIVEPERMISSIONS',pic:''},{av:'AV61RowsPerPage_ActivePermissions',fld:'vROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV37Id',fld:'vID',pic:'',hsh:true},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'sPrefix'},{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV6RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV35I_LoadCount_ActivePermissions',fld:'vI_LOADCOUNT_ACTIVEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'AV32HasNextPage_ActivePermissions',fld:'vHASNEXTPAGE_ACTIVEPERMISSIONS',pic:'',hsh:true},{av:'AV89Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Visible")',ctrl:'DELETEMULTIPLE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Tooltiptext")',ctrl:'DELETEMULTIPLE',prop:'Tooltiptext'},{ctrl:'ADD',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV89Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_ACTIVEPERMISSIONS","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_ACTIVEPERMISSIONS',prop:'Visible'},{av:'AV61RowsPerPage_ActivePermissions',fld:'vROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{ctrl:'vGRIDSETTINGSROWSPERPAGE_ACTIVEPERMISSIONS'},{av:'AV62GridSettingsRowsPerPage_ActivePermissions',fld:'vGRIDSETTINGSROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV75ApplicationId_PreviousValue',fld:'vAPPLICATIONID_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'ACTIVEPERMISSIONS',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEACTIVEPERMISSIONS","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEACTIVEPERMISSIONS',prop:'Visible'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV83GenericFilter_ActivePermissions',fld:'vGENERICFILTER_ACTIVEPERMISSIONS',pic:''},{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERSUMMARY_COMBINED_ACTIVEPERMISSIONS","Caption")',ctrl:'LAYOUTDEFINED_FILTERSUMMARY_COMBINED_ACTIVEPERMISSIONS',prop:'Caption'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["ACTIVEPERMISSIONS.LOAD"] = [[{av:'AV61RowsPerPage_ActivePermissions',fld:'vROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV37Id',fld:'vID',pic:'',hsh:true},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV35I_LoadCount_ActivePermissions',fld:'vI_LOADCOUNT_ACTIVEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'AV6RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV83GenericFilter_ActivePermissions',fld:'vGENERICFILTER_ACTIVEPERMISSIONS',pic:''},{av:'AV32HasNextPage_ActivePermissions',fld:'vHASNEXTPAGE_ACTIVEPERMISSIONS',pic:'',hsh:true},{av:'AV89Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_ACTIVEPERMISSIONS","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_ACTIVEPERMISSIONS',prop:'Visible'},{av:'AV35I_LoadCount_ActivePermissions',fld:'vI_LOADCOUNT_ACTIVEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'AV32HasNextPage_ActivePermissions',fld:'vHASNEXTPAGE_ACTIVEPERMISSIONS',pic:'',hsh:true},{av:'AV82Delete_Action',fld:'vDELETE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Tooltiptext")',ctrl:'vDELETE_ACTION',prop:'Tooltiptext'},{av:'AV46MultiRowItemSelected_ActivePermissions',fld:'vMULTIROWITEMSELECTED_ACTIVEPERMISSIONS',pic:''},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV48Name',fld:'vNAME',pic:'',hsh:true},{av:'AV17Dsc',fld:'vDSC',pic:'',hsh:true},{ctrl:'vACCESSTYPE'},{av:'AV7AccessType',fld:'vACCESSTYPE',pic:'',hsh:true},{av:'AV37Id',fld:'vID',pic:'',hsh:true},{av:'AV40IsInherited',fld:'vISINHERITED',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKACTIVEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKACTIVEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKACTIVEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKACTIVEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKACTIVEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKACTIVEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKACTIVEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKACTIVEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKACTIVEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKACTIVEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLACTIVEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKACTIVEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKACTIVEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLACTIVEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKACTIVEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKACTIVEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLACTIVEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKACTIVEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKACTIVEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLACTIVEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKACTIVEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKACTIVEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLACTIVEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKACTIVEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKACTIVEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_ACTIVEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_ACTIVEPERMISSIONS',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["'PAGINGPREVIOUS(ACTIVEPERMISSIONS)'"] = [[{av:'ACTIVEPERMISSIONS_nFirstRecordOnPage'},{av:'ACTIVEPERMISSIONS_nEOF'},{av:'AV6RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV75ApplicationId_PreviousValue',fld:'vAPPLICATIONID_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV83GenericFilter_ActivePermissions',fld:'vGENERICFILTER_ACTIVEPERMISSIONS',pic:''},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV32HasNextPage_ActivePermissions',fld:'vHASNEXTPAGE_ACTIVEPERMISSIONS',pic:'',hsh:true},{av:'AV61RowsPerPage_ActivePermissions',fld:'vROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV37Id',fld:'vID',pic:'',hsh:true},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV35I_LoadCount_ActivePermissions',fld:'vI_LOADCOUNT_ACTIVEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'sPrefix'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Visible")',ctrl:'DELETEMULTIPLE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Tooltiptext")',ctrl:'DELETEMULTIPLE',prop:'Tooltiptext'},{ctrl:'ADD',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["'PAGINGNEXT(ACTIVEPERMISSIONS)'"] = [[{av:'ACTIVEPERMISSIONS_nFirstRecordOnPage'},{av:'ACTIVEPERMISSIONS_nEOF'},{av:'AV6RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV75ApplicationId_PreviousValue',fld:'vAPPLICATIONID_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV83GenericFilter_ActivePermissions',fld:'vGENERICFILTER_ACTIVEPERMISSIONS',pic:''},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV32HasNextPage_ActivePermissions',fld:'vHASNEXTPAGE_ACTIVEPERMISSIONS',pic:'',hsh:true},{av:'AV61RowsPerPage_ActivePermissions',fld:'vROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV37Id',fld:'vID',pic:'',hsh:true},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV35I_LoadCount_ActivePermissions',fld:'vI_LOADCOUNT_ACTIVEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'sPrefix'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Visible")',ctrl:'DELETEMULTIPLE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Tooltiptext")',ctrl:'DELETEMULTIPLE',prop:'Tooltiptext'},{ctrl:'ADD',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["'E_ADD'"] = [[{av:'ACTIVEPERMISSIONS_nFirstRecordOnPage'},{av:'ACTIVEPERMISSIONS_nEOF'},{av:'AV6RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV75ApplicationId_PreviousValue',fld:'vAPPLICATIONID_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV83GenericFilter_ActivePermissions',fld:'vGENERICFILTER_ACTIVEPERMISSIONS',pic:''},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV32HasNextPage_ActivePermissions',fld:'vHASNEXTPAGE_ACTIVEPERMISSIONS',pic:'',hsh:true},{av:'AV61RowsPerPage_ActivePermissions',fld:'vROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV37Id',fld:'vID',pic:'',hsh:true},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV35I_LoadCount_ActivePermissions',fld:'vI_LOADCOUNT_ACTIVEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'sPrefix'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Visible")',ctrl:'DELETEMULTIPLE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Tooltiptext")',ctrl:'DELETEMULTIPLE',prop:'Tooltiptext'},{ctrl:'ADD',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["'E_DELETEMULTIPLE'"] = [[{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV45MultiRowHasNext_ActivePermissions',fld:'vMULTIROWHASNEXT_ACTIVEPERMISSIONS',pic:''},{av:'AV47MultiRowIterator_ActivePermissions',fld:'vMULTIROWITERATOR_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV67SelectedItems_ActivePermissions',fld:'vSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'ACTIVEPERMISSIONS_nFirstRecordOnPage'},{av:'ACTIVEPERMISSIONS_nEOF'},{av:'AV6RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV75ApplicationId_PreviousValue',fld:'vAPPLICATIONID_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV89Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV83GenericFilter_ActivePermissions',fld:'vGENERICFILTER_ACTIVEPERMISSIONS',pic:''},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV32HasNextPage_ActivePermissions',fld:'vHASNEXTPAGE_ACTIVEPERMISSIONS',pic:'',hsh:true},{av:'AV61RowsPerPage_ActivePermissions',fld:'vROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV37Id',fld:'vID',pic:'',hsh:true},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV35I_LoadCount_ActivePermissions',fld:'vI_LOADCOUNT_ACTIVEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'sPrefix'},{av:'AV72S_Id',fld:'vS_ID',pic:''},{av:'AV76FieldValues_ActivePermissions',fld:'vFIELDVALUES_ACTIVEPERMISSIONS',pic:''},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'AV67SelectedItems_ActivePermissions',fld:'vSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV47MultiRowIterator_ActivePermissions',fld:'vMULTIROWITERATOR_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV72S_Id',fld:'vS_ID',pic:''},{av:'AV76FieldValues_ActivePermissions',fld:'vFIELDVALUES_ACTIVEPERMISSIONS',pic:''},{av:'AV45MultiRowHasNext_ActivePermissions',fld:'vMULTIROWHASNEXT_ACTIVEPERMISSIONS',pic:''},{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Visible")',ctrl:'DELETEMULTIPLE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Tooltiptext")',ctrl:'DELETEMULTIPLE',prop:'Tooltiptext'},{ctrl:'ADD',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["'PAGINGFIRST(ACTIVEPERMISSIONS)'"] = [[{av:'ACTIVEPERMISSIONS_nFirstRecordOnPage'},{av:'ACTIVEPERMISSIONS_nEOF'},{av:'AV6RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV75ApplicationId_PreviousValue',fld:'vAPPLICATIONID_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV83GenericFilter_ActivePermissions',fld:'vGENERICFILTER_ACTIVEPERMISSIONS',pic:''},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV32HasNextPage_ActivePermissions',fld:'vHASNEXTPAGE_ACTIVEPERMISSIONS',pic:'',hsh:true},{av:'AV61RowsPerPage_ActivePermissions',fld:'vROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV37Id',fld:'vID',pic:'',hsh:true},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV35I_LoadCount_ActivePermissions',fld:'vI_LOADCOUNT_ACTIVEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'sPrefix'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Visible")',ctrl:'DELETEMULTIPLE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Tooltiptext")',ctrl:'DELETEMULTIPLE',prop:'Tooltiptext'},{ctrl:'ADD',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["VMULTIROWITEMSELECTED_ACTIVEPERMISSIONS.CLICK"] = [[{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV37Id',fld:'vID',grid:119,pic:'',hsh:true},{av:'ACTIVEPERMISSIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_119',ctrl:'ACTIVEPERMISSIONS',grid:119,prop:'GridRC'},{av:'AV46MultiRowItemSelected_ActivePermissions',fld:'vMULTIROWITEMSELECTED_ACTIVEPERMISSIONS',grid:119,pic:''},{av:'AV48Name',fld:'vNAME',grid:119,pic:'',hsh:true},{av:'AV17Dsc',fld:'vDSC',grid:119,pic:'',hsh:true},{av:'AV7AccessType',fld:'vACCESSTYPE',grid:119,pic:'',hsh:true},{av:'AV40IsInherited',fld:'vISINHERITED',grid:119,pic:'',hsh:true},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_ACTIVEPERMISSIONS","Class")',ctrl:'MAINGRID_RESPONSIVETABLE_ACTIVEPERMISSIONS',prop:'Class'},{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Visible")',ctrl:'DELETEMULTIPLE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Tooltiptext")',ctrl:'DELETEMULTIPLE',prop:'Tooltiptext'},{ctrl:'ADD',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["'TOGGLEGRIDSETTINGS(ACTIVEPERMISSIONS)'"] = [[{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEACTIVEPERMISSIONS","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEACTIVEPERMISSIONS',prop:'Visible'},{av:'AV61RowsPerPage_ActivePermissions',fld:'vROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{ctrl:'vGRIDSETTINGSROWSPERPAGE_ACTIVEPERMISSIONS'},{av:'AV62GridSettingsRowsPerPage_ActivePermissions',fld:'vGRIDSETTINGSROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEACTIVEPERMISSIONS","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEACTIVEPERMISSIONS',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["'SAVEGRIDSETTINGS(ACTIVEPERMISSIONS)'"] = [[{av:'ACTIVEPERMISSIONS_nFirstRecordOnPage'},{av:'ACTIVEPERMISSIONS_nEOF'},{av:'AV6RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV75ApplicationId_PreviousValue',fld:'vAPPLICATIONID_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV83GenericFilter_ActivePermissions',fld:'vGENERICFILTER_ACTIVEPERMISSIONS',pic:''},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV32HasNextPage_ActivePermissions',fld:'vHASNEXTPAGE_ACTIVEPERMISSIONS',pic:'',hsh:true},{av:'AV61RowsPerPage_ActivePermissions',fld:'vROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV37Id',fld:'vID',pic:'',hsh:true},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV35I_LoadCount_ActivePermissions',fld:'vI_LOADCOUNT_ACTIVEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'sPrefix'},{ctrl:'vGRIDSETTINGSROWSPERPAGE_ACTIVEPERMISSIONS'},{av:'AV62GridSettingsRowsPerPage_ActivePermissions',fld:'vGRIDSETTINGSROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'AV61RowsPerPage_ActivePermissions',fld:'vROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEACTIVEPERMISSIONS","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEACTIVEPERMISSIONS',prop:'Visible'},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Visible")',ctrl:'DELETEMULTIPLE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Tooltiptext")',ctrl:'DELETEMULTIPLE',prop:'Tooltiptext'},{ctrl:'ADD',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["ACTIVEPERMISSIONS.REFRESH"] = [[{av:'AV75ApplicationId_PreviousValue',fld:'vAPPLICATIONID_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV83GenericFilter_ActivePermissions',fld:'vGENERICFILTER_ACTIVEPERMISSIONS',pic:''},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV32HasNextPage_ActivePermissions',fld:'vHASNEXTPAGE_ACTIVEPERMISSIONS',pic:'',hsh:true},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'AV75ApplicationId_PreviousValue',fld:'vAPPLICATIONID_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{ctrl:'ACTIVEPERMISSIONS',prop:'Backcolorstyle'},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_ACTIVEPERMISSIONS","Class")',ctrl:'MAINGRID_RESPONSIVETABLE_ACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERSUMMARY_COMBINED_ACTIVEPERMISSIONS","Caption")',ctrl:'LAYOUTDEFINED_FILTERSUMMARY_COMBINED_ACTIVEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKACTIVEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKACTIVEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKACTIVEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKACTIVEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKACTIVEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKACTIVEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKACTIVEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKACTIVEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKACTIVEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKACTIVEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLACTIVEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKACTIVEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKACTIVEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLACTIVEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKACTIVEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKACTIVEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLACTIVEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKACTIVEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKACTIVEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLACTIVEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKACTIVEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKACTIVEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLACTIVEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLACTIVEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKACTIVEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKACTIVEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_ACTIVEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_ACTIVEPERMISSIONS',prop:'Visible'},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Visible")',ctrl:'DELETEMULTIPLE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Tooltiptext")',ctrl:'DELETEMULTIPLE',prop:'Tooltiptext'},{ctrl:'ADD',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["VCHECKALL_ACTIVEPERMISSIONS.CLICK"] = [[{av:'AV46MultiRowItemSelected_ActivePermissions',fld:'vMULTIROWITEMSELECTED_ACTIVEPERMISSIONS',grid:119,pic:''},{av:'ACTIVEPERMISSIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_119',ctrl:'ACTIVEPERMISSIONS',grid:119,prop:'GridRC'},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV37Id',fld:'vID',grid:119,pic:'',hsh:true},{av:'AV48Name',fld:'vNAME',grid:119,pic:'',hsh:true},{av:'AV17Dsc',fld:'vDSC',grid:119,pic:'',hsh:true},{av:'AV7AccessType',fld:'vACCESSTYPE',grid:119,pic:'',hsh:true},{av:'AV40IsInherited',fld:'vISINHERITED',grid:119,pic:'',hsh:true},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'AV46MultiRowItemSelected_ActivePermissions',fld:'vMULTIROWITEMSELECTED_ACTIVEPERMISSIONS',pic:''},{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Visible")',ctrl:'DELETEMULTIPLE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Tooltiptext")',ctrl:'DELETEMULTIPLE',prop:'Tooltiptext'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'ACTIVEPERMISSIONS_nFirstRecordOnPage'},{av:'ACTIVEPERMISSIONS_nEOF'},{av:'AV6RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV75ApplicationId_PreviousValue',fld:'vAPPLICATIONID_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV66AllSelectedItems_ActivePermissions',fld:'vALLSELECTEDITEMS_ACTIVEPERMISSIONS',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV83GenericFilter_ActivePermissions',fld:'vGENERICFILTER_ACTIVEPERMISSIONS',pic:''},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV32HasNextPage_ActivePermissions',fld:'vHASNEXTPAGE_ACTIVEPERMISSIONS',pic:'',hsh:true},{av:'AV61RowsPerPage_ActivePermissions',fld:'vROWSPERPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV37Id',fld:'vID',pic:'',hsh:true},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV35I_LoadCount_ActivePermissions',fld:'vI_LOADCOUNT_ACTIVEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'sPrefix'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'AV15CurrentPage_ActivePermissions',fld:'vCURRENTPAGE_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'AV9ActivePermissions_SelectedRows',fld:'vACTIVEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID'},{av:'AV14ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV77CountSelectedItems_ActivePermissions',fld:'vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Visible")',ctrl:'DELETEMULTIPLE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DELETEMULTIPLE","Tooltiptext")',ctrl:'DELETEMULTIPLE',prop:'Tooltiptext'},{ctrl:'ADD',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["LAYOUTDEFINED_FILTERTOGGLE_COMBINED_ACTIVEPERMISSIONS.CLICK"] = [[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_ACTIVEPERMISSIONS","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_ACTIVEPERMISSIONS',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_ACTIVEPERMISSIONS","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_ACTIVEPERMISSIONS',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["LAYOUTDEFINED_FILTERCLOSE_COMBINED_ACTIVEPERMISSIONS.CLICK"] = [[{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_ACTIVEPERMISSIONS","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_ACTIVEPERMISSIONS',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["GRIDTITLE_ACTIVEPERMISSIONS.CLICK"] = [[{av:'gx.fn.getCtrlProperty("GRIDCOMPONENTCONTENT_ACTIVEPERMISSIONS","Visible")',ctrl:'GRIDCOMPONENTCONTENT_ACTIVEPERMISSIONS',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("GRIDCOMPONENTCONTENT_ACTIVEPERMISSIONS","Visible")',ctrl:'GRIDCOMPONENTCONTENT_ACTIVEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRIDCOMPONENT_ACTIVEPERMISSIONS","Class")',ctrl:'GRIDCOMPONENT_ACTIVEPERMISSIONS',prop:'Class'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["COLLAPSIBLEIMAGE_ACTIVEPERMISSIONS.CLICK"] = [[{av:'gx.fn.getCtrlProperty("GRIDCOMPONENTCONTENT_ACTIVEPERMISSIONS","Visible")',ctrl:'GRIDCOMPONENTCONTENT_ACTIVEPERMISSIONS',prop:'Visible'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("GRIDCOMPONENTCONTENT_ACTIVEPERMISSIONS","Visible")',ctrl:'GRIDCOMPONENTCONTENT_ACTIVEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("GRIDCOMPONENT_ACTIVEPERMISSIONS","Class")',ctrl:'GRIDCOMPONENT_ACTIVEPERMISSIONS',prop:'Class'},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.EvtParms["VALIDV_ACCESSTYPE"] = [[{ctrl:'vACCESSTYPE'},{av:'AV7AccessType',fld:'vACCESSTYPE',pic:'',hsh:true},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}],[{ctrl:'vACCESSTYPE'},{av:'AV7AccessType',fld:'vACCESSTYPE',pic:'',hsh:true},{av:'AV63CheckAll_ActivePermissions',fld:'vCHECKALL_ACTIVEPERMISSIONS',pic:''}]];
   this.setVCMap("AV15CurrentPage_ActivePermissions", "vCURRENTPAGE_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV6RoleId", "vROLEID", 0, "int", 12, 0);
   this.setVCMap("AV77CountSelectedItems_ActivePermissions", "vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV66AllSelectedItems_ActivePermissions", "vALLSELECTEDITEMS_ACTIVEPERMISSIONS", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV61RowsPerPage_ActivePermissions", "vROWSPERPAGE_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV9ActivePermissions_SelectedRows", "vACTIVEPERMISSIONS_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV35I_LoadCount_ActivePermissions", "vI_LOADCOUNT_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV32HasNextPage_ActivePermissions", "vHASNEXTPAGE_ACTIVEPERMISSIONS", 0, "boolean", 4, 0);
   this.setVCMap("AV89Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV45MultiRowHasNext_ActivePermissions", "vMULTIROWHASNEXT_ACTIVEPERMISSIONS", 0, "boolean", 4, 0);
   this.setVCMap("AV47MultiRowIterator_ActivePermissions", "vMULTIROWITERATOR_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV67SelectedItems_ActivePermissions", "vSELECTEDITEMS_ACTIVEPERMISSIONS", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV72S_Id", "vS_ID", 0, "char", 40, 0);
   this.setVCMap("AV76FieldValues_ActivePermissions", "vFIELDVALUES_ACTIVEPERMISSIONS", 0, "CollK2BSelectionItem.FieldValuesItem", 0, 0);
   this.setVCMap("AV75ApplicationId_PreviousValue", "vAPPLICATIONID_PREVIOUSVALUE", 0, "int", 12, 0);
   this.setVCMap("AV6RoleId", "vROLEID", 0, "int", 12, 0);
   this.setVCMap("AV75ApplicationId_PreviousValue", "vAPPLICATIONID_PREVIOUSVALUE", 0, "int", 12, 0);
   this.setVCMap("AV66AllSelectedItems_ActivePermissions", "vALLSELECTEDITEMS_ACTIVEPERMISSIONS", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV89Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV15CurrentPage_ActivePermissions", "vCURRENTPAGE_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV77CountSelectedItems_ActivePermissions", "vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV32HasNextPage_ActivePermissions", "vHASNEXTPAGE_ACTIVEPERMISSIONS", 0, "boolean", 4, 0);
   this.setVCMap("AV61RowsPerPage_ActivePermissions", "vROWSPERPAGE_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV9ActivePermissions_SelectedRows", "vACTIVEPERMISSIONS_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV35I_LoadCount_ActivePermissions", "vI_LOADCOUNT_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV61RowsPerPage_ActivePermissions", "vROWSPERPAGE_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV15CurrentPage_ActivePermissions", "vCURRENTPAGE_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV32HasNextPage_ActivePermissions", "vHASNEXTPAGE_ACTIVEPERMISSIONS", 0, "boolean", 4, 0);
   this.setVCMap("AV6RoleId", "vROLEID", 0, "int", 12, 0);
   this.setVCMap("AV75ApplicationId_PreviousValue", "vAPPLICATIONID_PREVIOUSVALUE", 0, "int", 12, 0);
   this.setVCMap("AV66AllSelectedItems_ActivePermissions", "vALLSELECTEDITEMS_ACTIVEPERMISSIONS", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV89Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV15CurrentPage_ActivePermissions", "vCURRENTPAGE_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV77CountSelectedItems_ActivePermissions", "vCOUNTSELECTEDITEMS_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV32HasNextPage_ActivePermissions", "vHASNEXTPAGE_ACTIVEPERMISSIONS", 0, "boolean", 4, 0);
   this.setVCMap("AV61RowsPerPage_ActivePermissions", "vROWSPERPAGE_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV9ActivePermissions_SelectedRows", "vACTIVEPERMISSIONS_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV35I_LoadCount_ActivePermissions", "vI_LOADCOUNT_ACTIVEPERMISSIONS", 0, "int", 4, 0);
   ActivepermissionsContainer.addRefreshingVar({rfrVar:"AV6RoleId"});
   ActivepermissionsContainer.addRefreshingVar({rfrVar:"AV75ApplicationId_PreviousValue"});
   ActivepermissionsContainer.addRefreshingVar(this.GXValidFnc[58]);
   ActivepermissionsContainer.addRefreshingVar({rfrVar:"AV66AllSelectedItems_ActivePermissions"});
   ActivepermissionsContainer.addRefreshingVar({rfrVar:"AV89Pgmname"});
   ActivepermissionsContainer.addRefreshingVar({rfrVar:"AV15CurrentPage_ActivePermissions"});
   ActivepermissionsContainer.addRefreshingVar(this.GXValidFnc[42]);
   ActivepermissionsContainer.addRefreshingVar({rfrVar:"AV77CountSelectedItems_ActivePermissions"});
   ActivepermissionsContainer.addRefreshingVar({rfrVar:"AV32HasNextPage_ActivePermissions"});
   ActivepermissionsContainer.addRefreshingVar({rfrVar:"AV61RowsPerPage_ActivePermissions"});
   ActivepermissionsContainer.addRefreshingVar({rfrVar:"AV37Id", rfrProp:"Value", gxAttId:"Id"});
   ActivepermissionsContainer.addRefreshingVar({rfrVar:"AV9ActivePermissions_SelectedRows"});
   ActivepermissionsContainer.addRefreshingVar({rfrVar:"AV35I_LoadCount_ActivePermissions"});
   ActivepermissionsContainer.addRefreshingParm({rfrVar:"AV6RoleId"});
   ActivepermissionsContainer.addRefreshingParm({rfrVar:"AV75ApplicationId_PreviousValue"});
   ActivepermissionsContainer.addRefreshingParm(this.GXValidFnc[58]);
   ActivepermissionsContainer.addRefreshingParm({rfrVar:"AV66AllSelectedItems_ActivePermissions"});
   ActivepermissionsContainer.addRefreshingParm({rfrVar:"AV89Pgmname"});
   ActivepermissionsContainer.addRefreshingParm({rfrVar:"AV15CurrentPage_ActivePermissions"});
   ActivepermissionsContainer.addRefreshingParm(this.GXValidFnc[42]);
   ActivepermissionsContainer.addRefreshingParm({rfrVar:"AV77CountSelectedItems_ActivePermissions"});
   ActivepermissionsContainer.addRefreshingParm({rfrVar:"AV32HasNextPage_ActivePermissions"});
   ActivepermissionsContainer.addRefreshingParm({rfrVar:"AV61RowsPerPage_ActivePermissions"});
   ActivepermissionsContainer.addRefreshingParm({rfrVar:"AV37Id", rfrProp:"Value", gxAttId:"Id"});
   ActivepermissionsContainer.addRefreshingParm({rfrVar:"AV9ActivePermissions_SelectedRows"});
   ActivepermissionsContainer.addRefreshingParm({rfrVar:"AV35I_LoadCount_ActivePermissions"});
   ActivepermissionsContainer.addRefreshingParm(this.GXValidFnc[117]);
   this.Initialize( );
});
gx.setExecutableComponent("k2bfsg.roleselectpermission");
