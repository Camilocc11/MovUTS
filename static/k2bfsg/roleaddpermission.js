gx.evt.autoSkip = false;
gx.define('k2bfsg.roleaddpermission', false, function () {
   this.ServerClass =  "k2bfsg.roleaddpermission" ;
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
      this.AV13CurrentPage_AvailablePermissions=gx.fn.getIntegerValue("vCURRENTPAGE_AVAILABLEPERMISSIONS",'.') ;
      this.AV62CountSelectedItems_AvailablePermissions=gx.fn.getIntegerValue("vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS",'.') ;
      this.AV39RoleId=gx.fn.getIntegerValue("vROLEID",'.') ;
      this.AV10ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.AV51AllSelectedItems_AvailablePermissions=gx.fn.getControlValue("vALLSELECTEDITEMS_AVAILABLEPERMISSIONS") ;
      this.AV46RowsPerPage_AvailablePermissions=gx.fn.getIntegerValue("vROWSPERPAGE_AVAILABLEPERMISSIONS",'.') ;
      this.AV12AvailablePermissions_SelectedRows=gx.fn.getIntegerValue("vAVAILABLEPERMISSIONS_SELECTEDROWS",'.') ;
      this.AV56S_Access=gx.fn.getControlValue("vS_ACCESS") ;
      this.AV25I_LoadCount_AvailablePermissions=gx.fn.getIntegerValue("vI_LOADCOUNT_AVAILABLEPERMISSIONS",'.') ;
      this.AV61FieldValues_AvailablePermissions=gx.fn.getControlValue("vFIELDVALUES_AVAILABLEPERMISSIONS") ;
      this.AV23HasNextPage_AvailablePermissions=gx.fn.getControlValue("vHASNEXTPAGE_AVAILABLEPERMISSIONS") ;
      this.AV72Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV30MultiRowHasNext_AvailablePermissions=gx.fn.getControlValue("vMULTIROWHASNEXT_AVAILABLEPERMISSIONS") ;
      this.AV32MultiRowIterator_AvailablePermissions=gx.fn.getIntegerValue("vMULTIROWITERATOR_AVAILABLEPERMISSIONS",'.') ;
      this.AV52SelectedItems_AvailablePermissions=gx.fn.getControlValue("vSELECTEDITEMS_AVAILABLEPERMISSIONS") ;
      this.AV57S_Id=gx.fn.getControlValue("vS_ID") ;
      this.AV59PermissionAccessType_PreviousValue=gx.fn.getControlValue("vPERMISSIONACCESSTYPE_PREVIOUSVALUE") ;
      this.AV60IsInherited_PreviousValue=gx.fn.getControlValue("vISINHERITED_PREVIOUSVALUE") ;
      this.AV68DeletedTag_AvailablePermissions=gx.fn.getControlValue("vDELETEDTAG_AVAILABLEPERMISSIONS") ;
      this.AV39RoleId=gx.fn.getIntegerValue("vROLEID",'.') ;
      this.AV10ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.AV59PermissionAccessType_PreviousValue=gx.fn.getControlValue("vPERMISSIONACCESSTYPE_PREVIOUSVALUE") ;
      this.AV60IsInherited_PreviousValue=gx.fn.getControlValue("vISINHERITED_PREVIOUSVALUE") ;
      this.AV51AllSelectedItems_AvailablePermissions=gx.fn.getControlValue("vALLSELECTEDITEMS_AVAILABLEPERMISSIONS") ;
      this.AV72Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV13CurrentPage_AvailablePermissions=gx.fn.getIntegerValue("vCURRENTPAGE_AVAILABLEPERMISSIONS",'.') ;
      this.AV62CountSelectedItems_AvailablePermissions=gx.fn.getIntegerValue("vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS",'.') ;
      this.AV23HasNextPage_AvailablePermissions=gx.fn.getControlValue("vHASNEXTPAGE_AVAILABLEPERMISSIONS") ;
      this.AV46RowsPerPage_AvailablePermissions=gx.fn.getIntegerValue("vROWSPERPAGE_AVAILABLEPERMISSIONS",'.') ;
      this.AV12AvailablePermissions_SelectedRows=gx.fn.getIntegerValue("vAVAILABLEPERMISSIONS_SELECTEDROWS",'.') ;
      this.AV56S_Access=gx.fn.getControlValue("vS_ACCESS") ;
      this.AV25I_LoadCount_AvailablePermissions=gx.fn.getIntegerValue("vI_LOADCOUNT_AVAILABLEPERMISSIONS",'.') ;
      this.AV61FieldValues_AvailablePermissions=gx.fn.getControlValue("vFIELDVALUES_AVAILABLEPERMISSIONS") ;
      this.AV68DeletedTag_AvailablePermissions=gx.fn.getControlValue("vDELETEDTAG_AVAILABLEPERMISSIONS") ;
      this.AV53Index_AvailablePermissions=gx.fn.getIntegerValue("vINDEX_AVAILABLEPERMISSIONS",'.') ;
      this.AV49SelectedItem_AvailablePermissions=gx.fn.getControlValue("vSELECTEDITEM_AVAILABLEPERMISSIONS") ;
      this.AV50FieldValue_AvailablePermissions=gx.fn.getControlValue("vFIELDVALUE_AVAILABLEPERMISSIONS") ;
      this.AV62CountSelectedItems_AvailablePermissions=gx.fn.getIntegerValue("vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS",'.') ;
      this.AV79GXV6=gx.fn.getIntegerValue("vGXV6",'.') ;
      this.AV53Index_AvailablePermissions=gx.fn.getIntegerValue("vINDEX_AVAILABLEPERMISSIONS",'.') ;
      this.AV51AllSelectedItems_AvailablePermissions=gx.fn.getControlValue("vALLSELECTEDITEMS_AVAILABLEPERMISSIONS") ;
      this.AV49SelectedItem_AvailablePermissions=gx.fn.getControlValue("vSELECTEDITEM_AVAILABLEPERMISSIONS") ;
      this.AV50FieldValue_AvailablePermissions=gx.fn.getControlValue("vFIELDVALUE_AVAILABLEPERMISSIONS") ;
      this.AV46RowsPerPage_AvailablePermissions=gx.fn.getIntegerValue("vROWSPERPAGE_AVAILABLEPERMISSIONS",'.') ;
      this.AV13CurrentPage_AvailablePermissions=gx.fn.getIntegerValue("vCURRENTPAGE_AVAILABLEPERMISSIONS",'.') ;
      this.AV79GXV6=gx.fn.getIntegerValue("vGXV6",'.') ;
      this.AV23HasNextPage_AvailablePermissions=gx.fn.getControlValue("vHASNEXTPAGE_AVAILABLEPERMISSIONS") ;
   };
   this.Validv_Permissionaccesstype=function()
   {
      return this.validCliEvt("Validv_Permissionaccesstype", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vPERMISSIONACCESSTYPE");
         this.AnyError  = 0;
         if ( ! ( ( this.AV34PermissionAccessType == "A" ) || ( this.AV34PermissionAccessType == "D" ) || ( this.AV34PermissionAccessType == "R" ) || ((''==this.AV34PermissionAccessType)) ) )
         {
            try {
               gxballoon.setError("Campo Permission Access Type fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Validv_Isinherited=function()
   {
      return this.validCliEvt("Validv_Isinherited", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vISINHERITED");
         this.AnyError  = 0;
         if ( ! ( ( this.AV27IsInherited == "A" ) || ( this.AV27IsInherited == "T" ) || ( this.AV27IsInherited == "F" ) ) )
         {
            try {
               gxballoon.setError("Campo Is Inherited fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Validv_Access=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(120);
      return this.validCliEvt("Validv_Access", 120, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vACCESS");
         this.AnyError  = 0;
         if ( ! ( ( this.AV6Access == "A" ) || ( this.AV6Access == "D" ) || ( this.AV6Access == "R" ) ) )
         {
            try {
               gxballoon.setError("Campo Access fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
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
      this.s282_client();
      if ( this.AV62CountSelectedItems_AvailablePermissions > 0 )
      {
         this.s292_client();
      }
      else
      {
         this.s302_client();
      }
   };
   this.s282_client=function()
   {
      this.AV62CountSelectedItems_AvailablePermissions = gx.num.trunc( 0 ,0) ;
      this.AV79GXV6 = gx.num.trunc( 1 ,0) ;
      while ( this.AV79GXV6 <= this.AV51AllSelectedItems_AvailablePermissions.length )
      {
         this.AV49SelectedItem_AvailablePermissions =  this.AV51AllSelectedItems_AvailablePermissions[this.AV79GXV6 - 1]  ;
         if ( this.AV49SelectedItem_AvailablePermissions.IsSelected )
         {
            this.AV62CountSelectedItems_AvailablePermissions = gx.num.trunc( this.AV62CountSelectedItems_AvailablePermissions + 1 ,0) ;
         }
         this.AV79GXV6 = gx.num.trunc( this.AV79GXV6 + 1 ,0) ;
      }
   };
   this.s292_client=function()
   {
      gx.fn.setCtrlProperty("ADDSELECTED","Visible", true );
   };
   this.s302_client=function()
   {
      gx.fn.setCtrlProperty("ADDSELECTED","Visible", false );
   };
   this.s182_client=function()
   {
   };
   this.s192_client=function()
   {
      this.AV80GXV7 = gx.num.trunc( 1 ,0) ;
      while ( this.AV80GXV7 <= this.AV61FieldValues_AvailablePermissions.length )
      {
         this.AV50FieldValue_AvailablePermissions =  this.AV61FieldValues_AvailablePermissions[this.AV80GXV7 - 1]  ;
         if ( this.AV50FieldValue_AvailablePermissions.Name == "Name" )
         {
            this.AV54S_Name =  this.AV50FieldValue_AvailablePermissions.Value  ;
         }
         else if ( this.AV50FieldValue_AvailablePermissions.Name == "Dsc" )
         {
            this.AV55S_Dsc =  this.AV50FieldValue_AvailablePermissions.Value  ;
         }
         else if ( this.AV50FieldValue_AvailablePermissions.Name == "Access" )
         {
            this.AV56S_Access =  this.AV50FieldValue_AvailablePermissions.Value  ;
         }
         else if ( this.AV50FieldValue_AvailablePermissions.Name == "Id" )
         {
            this.AV57S_Id =  this.AV50FieldValue_AvailablePermissions.Value  ;
         }
         this.AV80GXV7 = gx.num.trunc( this.AV80GXV7 + 1 ,0) ;
      }
   };
   this.s202_client=function()
   {
      gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Caption", "1" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKAVAILABLEPERMISSIONS","Caption", gx.num.str( this.AV13CurrentPage_AvailablePermissions-1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Caption", gx.num.str( this.AV13CurrentPage_AvailablePermissions, 4, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Caption", gx.num.str( this.AV13CurrentPage_AvailablePermissions+1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKAVAILABLEPERMISSIONS","Class", "K2BToolsTextBlock_PaginationNormal" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKAVAILABLEPERMISSIONS","Class", "K2BToolsTextBlock_PaginationNormal" );
      if ( ((0==this.AV13CurrentPage_AvailablePermissions)) || ( this.AV13CurrentPage_AvailablePermissions <= 1 ) )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKAVAILABLEPERMISSIONS","Class", "K2BToolsTextBlock_PaginationNormal_Disabled" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLAVAILABLEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Visible", false );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLAVAILABLEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKAVAILABLEPERMISSIONS","Visible", false );
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLAVAILABLEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKAVAILABLEPERMISSIONS","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLAVAILABLEPERMISSIONS","Class", "K2BToolsCell_PaginationPrevious" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKAVAILABLEPERMISSIONS","Visible", true );
         if ( this.AV13CurrentPage_AvailablePermissions == 2 )
         {
            gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLAVAILABLEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
            gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Visible", false );
            gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLAVAILABLEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
            gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKAVAILABLEPERMISSIONS","Visible", false );
         }
         else
         {
            gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLAVAILABLEPERMISSIONS","Class", "K2BToolsCell_PaginationLeft" );
            gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Visible", true );
            if ( this.AV13CurrentPage_AvailablePermissions == 3 )
            {
               gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLAVAILABLEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
               gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKAVAILABLEPERMISSIONS","Visible", false );
            }
            else
            {
               gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLAVAILABLEPERMISSIONS","Class", "K2BToolsCell_PaginationDisabled K2BToolsCell_PaginationLeft" );
               gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKAVAILABLEPERMISSIONS","Visible", true );
            }
         }
      }
      if ( this.AV23HasNextPage_AvailablePermissions == false )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKAVAILABLEPERMISSIONS","Class", "K2BToolsTextBlock_PaginationNormal_Disabled" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLAVAILABLEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKAVAILABLEPERMISSIONS","Visible", false );
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGECELLAVAILABLEPERMISSIONS","Class", "K2BToolsCell_PaginationInvisible" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGECELLAVAILABLEPERMISSIONS","Class", "K2BToolsCell_PaginationNext" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Visible", true );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLAVAILABLEPERMISSIONS","Class", "K2BToolsCell_PaginationDisabled K2BToolsCell_PaginationRight" );
         gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKAVAILABLEPERMISSIONS","Visible", true );
      }
      if ( ( this.AV13CurrentPage_AvailablePermissions <= 1 ) && ( this.AV23HasNextPage_AvailablePermissions == false ) )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_AVAILABLEPERMISSIONS","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_AVAILABLEPERMISSIONS","Visible", true );
      }
   };
   this.e19311_client=function()
   {
      this.clearMessages();
      this.AV48CheckAll_AvailablePermissions =  false  ;
      if ( this.AV13CurrentPage_AvailablePermissions > 1 )
      {
         this.AV13CurrentPage_AvailablePermissions = gx.num.trunc( this.AV13CurrentPage_AvailablePermissions - 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      this.refreshGrid('Availablepermissions') ;
      this.refreshOutputs([{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e21311_client=function()
   {
      this.clearMessages();
      this.AV48CheckAll_AvailablePermissions =  false  ;
      if ( this.AV23HasNextPage_AvailablePermissions )
      {
         this.AV13CurrentPage_AvailablePermissions = gx.num.trunc( this.AV13CurrentPage_AvailablePermissions + 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      this.refreshGrid('Availablepermissions') ;
      this.refreshOutputs([{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s222_client=function()
   {
      this.AV32MultiRowIterator_AvailablePermissions = gx.num.trunc( 1 ,0) ;
   };
   this.s232_client=function()
   {
      this.AV54S_Name =  ''  ;
      this.AV55S_Dsc =  ''  ;
      this.AV56S_Access =  ''  ;
      this.AV57S_Id =  ''  ;
      while ( ( this.AV32MultiRowIterator_AvailablePermissions <= this.AV52SelectedItems_AvailablePermissions.length ) && ! this.AV52SelectedItems_AvailablePermissions[this.AV32MultiRowIterator_AvailablePermissions - 1].IsSelected )
      {
         this.AV32MultiRowIterator_AvailablePermissions = gx.num.trunc( this.AV32MultiRowIterator_AvailablePermissions + 1 ,0) ;
      }
      if ( this.AV32MultiRowIterator_AvailablePermissions > this.AV52SelectedItems_AvailablePermissions.length )
      {
         this.AV30MultiRowHasNext_AvailablePermissions =  false  ;
      }
      else
      {
         this.AV30MultiRowHasNext_AvailablePermissions =  true  ;
         this.AV61FieldValues_AvailablePermissions =  this.AV52SelectedItems_AvailablePermissions[this.AV32MultiRowIterator_AvailablePermissions - 1].FieldValues  ;
         this.s192_client();
      }
      this.AV32MultiRowIterator_AvailablePermissions = gx.num.trunc( this.AV32MultiRowIterator_AvailablePermissions + 1 ,0) ;
   };
   this.e23312_client=function()
   {
      this.clearMessages();
      this.s252_client();
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_AVAILABLEPERMISSIONS","Class")',ctrl:'MAINGRID_RESPONSIVETABLE_AVAILABLEPERMISSIONS',prop:'Class'},{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s252_client=function()
   {
      this.AV48CheckAll_AvailablePermissions =  true  ;
      /* Start For Each Line in Availablepermissions */
      var rowIdx120 = 1 ;
      var currentRowIdx120 = gx.fn.currentGridRowImpl(120) ;
      var rowIdxS120 ;
      var gridObj120 = gx.O.getGridById(120,0) ;
      while ( rowIdx120 <= gridObj120.grid.rows.length )
      {
         rowIdxS120 =  gx.text.padl( gx.text.tostring( rowIdx120), 4, "0")  ;
         gridObj120.instanciateRow(gridObj120.grid.getRowById(rowIdx120 - 1));
         this.s272_client();
         rowIdx120 = gx.num.trunc( rowIdx120 + 1 ,0) ;
      }
      if ( currentRowIdx120 )
      {
         gridObj120.instanciateRow(currentRowIdx120);
      }
      this.s152_client();
      this.s312_client();
      if ( this.AV51AllSelectedItems_AvailablePermissions.length > 0 )
      {
         gx.fn.setCtrlProperty("MAINGRID_RESPONSIVETABLE_AVAILABLEPERMISSIONS","Class", "Table"+" "+"K2BTools_GridSelecting" );
      }
      else
      {
         gx.fn.setCtrlProperty("MAINGRID_RESPONSIVETABLE_AVAILABLEPERMISSIONS","Class", "Table" );
      }
   };
   this.s272_client=function()
   {
      this.AV53Index_AvailablePermissions = gx.num.trunc( 1 ,0) ;
      while ( this.AV53Index_AvailablePermissions <= this.AV51AllSelectedItems_AvailablePermissions.length )
      {
         if ( this.AV51AllSelectedItems_AvailablePermissions[this.AV53Index_AvailablePermissions - 1].SKCharacter1 == this.AV26Id )
         {
            this.AV51AllSelectedItems_AvailablePermissions.splice(this.AV53Index_AvailablePermissions - 1, 1) ;
         }
         else
         {
            this.AV53Index_AvailablePermissions = gx.num.trunc( this.AV53Index_AvailablePermissions + 1 ,0) ;
         }
      }
      if ( this.AV31MultiRowItemSelected_AvailablePermissions || ! ((''==this.AV6Access)) )
      {
         this.AV49SelectedItem_AvailablePermissions =  {SKNumeric1:0,SKNumeric2:0,SKNumeric3:0,SKNumeric4:0,SKNumeric5:0,SKNumeric6:0,SKCharacter1:"",SKCharacter2:"",SKCharacter3:"",SKCharacter4:"",SKCharacter5:"",SKCharacter6:"",SKGUID1:'00000000-0000-0000-0000-000000000000',SKGUID2:'00000000-0000-0000-0000-000000000000',SKDateTime1:gx.date.nullDate(),SKDateTime2:gx.date.nullDate(),IsSelected:false,FieldValues:[]}  ;
         this.AV49SelectedItem_AvailablePermissions.IsSelected =  this.AV31MultiRowItemSelected_AvailablePermissions  ;
         this.AV49SelectedItem_AvailablePermissions.SKCharacter1 =  this.AV26Id  ;
         this.AV50FieldValue_AvailablePermissions =  {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""}  ;
         this.AV50FieldValue_AvailablePermissions.Name =  "Name"  ;
         this.AV50FieldValue_AvailablePermissions.Value =  this.AV33Name  ;
         this.AV49SelectedItem_AvailablePermissions.FieldValues.push(this.AV50FieldValue_AvailablePermissions) ;
         this.AV50FieldValue_AvailablePermissions =  {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""}  ;
         this.AV50FieldValue_AvailablePermissions.Name =  "Dsc"  ;
         this.AV50FieldValue_AvailablePermissions.Value =  this.AV14Dsc  ;
         this.AV49SelectedItem_AvailablePermissions.FieldValues.push(this.AV50FieldValue_AvailablePermissions) ;
         this.AV50FieldValue_AvailablePermissions =  {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""}  ;
         this.AV50FieldValue_AvailablePermissions.Name =  "Access"  ;
         this.AV50FieldValue_AvailablePermissions.Value =  this.AV6Access  ;
         this.AV49SelectedItem_AvailablePermissions.FieldValues.push(this.AV50FieldValue_AvailablePermissions) ;
         this.AV50FieldValue_AvailablePermissions =  {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""}  ;
         this.AV50FieldValue_AvailablePermissions.Name =  "Id"  ;
         this.AV50FieldValue_AvailablePermissions.Value =  this.AV26Id  ;
         this.AV49SelectedItem_AvailablePermissions.FieldValues.push(this.AV50FieldValue_AvailablePermissions) ;
         this.AV51AllSelectedItems_AvailablePermissions.push(this.AV49SelectedItem_AvailablePermissions) ;
      }
      if ( ! this.AV31MultiRowItemSelected_AvailablePermissions )
      {
         this.AV48CheckAll_AvailablePermissions =  false  ;
      }
   };
   this.s312_client=function()
   {
   };
   this.e20311_client=function()
   {
      this.clearMessages();
      this.AV13CurrentPage_AvailablePermissions = gx.num.trunc( 1 ,0) ;
      this.AV48CheckAll_AvailablePermissions =  false  ;
      this.refreshOutputs([{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      this.refreshGrid('Availablepermissions') ;
      this.refreshOutputs([{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e22311_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEAVAILABLEPERMISSIONS","Visible") == false )
      {
         this.AV47GridSettingsRowsPerPage_AvailablePermissions = gx.num.trunc( this.AV46RowsPerPage_AvailablePermissions ,0) ;
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEAVAILABLEPERMISSIONS","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEAVAILABLEPERMISSIONS","Visible", false );
      }
      this.refreshOutputs([{ctrl:'vGRIDSETTINGSROWSPERPAGE_AVAILABLEPERMISSIONS'},{av:'AV47GridSettingsRowsPerPage_AvailablePermissions',fld:'vGRIDSETTINGSROWSPERPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEAVAILABLEPERMISSIONS","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEAVAILABLEPERMISSIONS',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e24311_client=function()
   {
      this.clearMessages();
      /* Start For Each Line in Availablepermissions */
      var rowIdx120 = 1 ;
      var currentRowIdx120 = gx.fn.currentGridRowImpl(120) ;
      var rowIdxS120 ;
      var gridObj120 = gx.O.getGridById(120,0) ;
      while ( rowIdx120 <= gridObj120.grid.rows.length )
      {
         rowIdxS120 =  gx.text.padl( gx.text.tostring( rowIdx120), 4, "0")  ;
         gridObj120.instanciateRow(gridObj120.grid.getRowById(rowIdx120 - 1));
         if ( this.AV31MultiRowItemSelected_AvailablePermissions != this.AV48CheckAll_AvailablePermissions )
         {
            this.AV31MultiRowItemSelected_AvailablePermissions =  this.AV48CheckAll_AvailablePermissions  ;
            this.s272_client();
         }
         rowIdx120 = gx.num.trunc( rowIdx120 + 1 ,0) ;
         this.refreshRowOutputs([{av:'AV31MultiRowItemSelected_AvailablePermissions',fld:'vMULTIROWITEMSELECTED_AVAILABLEPERMISSIONS',pic:''},{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      }
      if ( currentRowIdx120 )
      {
         gridObj120.instanciateRow(currentRowIdx120);
      }
      this.s282_client();
      if ( this.AV62CountSelectedItems_AvailablePermissions > 0 )
      {
         this.s292_client();
      }
      else
      {
         this.s302_client();
      }
      this.s312_client();
      this.refreshOutputs([{av:'AV31MultiRowItemSelected_AvailablePermissions',fld:'vMULTIROWITEMSELECTED_AVAILABLEPERMISSIONS',pic:''},{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e25312_client=function()
   {
      this.clearMessages();
      /* Start For Each Line in Availablepermissions */
      var rowIdx120 = 1 ;
      var currentRowIdx120 = gx.fn.currentGridRowImpl(120) ;
      var rowIdxS120 ;
      var gridObj120 = gx.O.getGridById(120,0) ;
      while ( rowIdx120 <= gridObj120.grid.rows.length )
      {
         rowIdxS120 =  gx.text.padl( gx.text.tostring( rowIdx120), 4, "0")  ;
         gridObj120.instanciateRow(gridObj120.grid.getRowById(rowIdx120 - 1));
         this.s272_client();
         rowIdx120 = gx.num.trunc( rowIdx120 + 1 ,0) ;
         this.refreshRowOutputs([{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      }
      if ( currentRowIdx120 )
      {
         gridObj120.instanciateRow(currentRowIdx120);
      }
      this.s322_client();
      this.refreshOutputs([{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s322_client=function()
   {
   };
   this.e26311_client=function()
   {
      this.clearMessages();
      if ( this.AV68DeletedTag_AvailablePermissions == "PermissionAccessType" )
      {
         this.AV34PermissionAccessType =  ''  ;
      }
      else if ( this.AV68DeletedTag_AvailablePermissions == "IsInherited" )
      {
         this.AV27IsInherited =  ''  ;
      }
      this.refreshOutputs([{ctrl:'vPERMISSIONACCESSTYPE'},{av:'AV34PermissionAccessType',fld:'vPERMISSIONACCESSTYPE',pic:''},{ctrl:'vISINHERITED'},{av:'AV27IsInherited',fld:'vISINHERITED',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      this.refreshGrid('Availablepermissions') ;
      this.refreshOutputs([{ctrl:'vPERMISSIONACCESSTYPE'},{av:'AV34PermissionAccessType',fld:'vPERMISSIONACCESSTYPE',pic:''},{ctrl:'vISINHERITED'},{av:'AV27IsInherited',fld:'vISINHERITED',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e11312_client=function()
   {
      return this.executeServerEvent("'E_ADDSELECTED'", false, null, false, false);
   };
   this.e12312_client=function()
   {
      return this.executeServerEvent("'SAVEGRIDSETTINGS(AVAILABLEPERMISSIONS)'", false, null, false, false);
   };
   this.e13312_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERTOGGLE_COMBINED_AVAILABLEPERMISSIONS.CLICK", true, null, false, true);
   };
   this.e14312_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERCLOSE_COMBINED_AVAILABLEPERMISSIONS.CLICK", true, null, false, true);
   };
   this.e27312_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e28312_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,102,105,106,107,108,109,110,111,112,113,114,117,118,121,122,123,124,125,126,127,128,131,132,133,134,135,138,140,142,144,146,148,150,152,153,154,155];
   this.GXLastCtrlId =155;
   this.AvailablepermissionsContainer = new gx.grid.grid(this, 2,"WbpLvl2",120,"Availablepermissions","Availablepermissions","AvailablepermissionsContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.roleaddpermission",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,true,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var AvailablepermissionsContainer = this.AvailablepermissionsContainer;
   AvailablepermissionsContainer.addCheckBox("Multirowitemselected_availablepermissions",121,"vMULTIROWITEMSELECTED_AVAILABLEPERMISSIONS","","","MultiRowItemSelected_AvailablePermissions","boolean","true","false","e23312_client",true,false,20,"px","K2BToolsCheckBoxColumn");
   AvailablepermissionsContainer.addSingleLineEdit("Name",122,"vNAME","Nombre","","Name","char",570,"px",254,80,"left",null,[],"Name","Name",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   AvailablepermissionsContainer.addSingleLineEdit("Dsc",123,"vDSC","Descripción","","Dsc","char",570,"px",254,80,"left",null,[],"Dsc","Dsc",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   AvailablepermissionsContainer.addComboBox("Access",124,"vACCESS","Tipo de acceso","Access","char",null,0,true,false,0,"px","K2BToolsGridColumn InvisibleInExtraSmallColumn");
   AvailablepermissionsContainer.addSingleLineEdit("Id",125,"vID","Id","","Id","char",0,"px",40,40,"left",null,[],"Id","Id",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   this.AvailablepermissionsContainer.emptyText = "";
   this.setGrid(AvailablepermissionsContainer);
   this.FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer = gx.uc.getNew(this, 48, 21, "K2BTagsViewer", "FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer", "Filtertagsusercontrol_availablepermissions", "FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONS");
   var FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer = this.FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer;
   FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer.setProp("Class", "Class", "", "char");
   FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer.setProp("Enabled", "Enabled", true, "boolean");
   FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer.setDynProp("EmptyStateMessage", "Emptystatemessage", "", "char");
   FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer.addV2CFunction('AV67FilterTagsCollection_AvailablePermissions', "vFILTERTAGSCOLLECTION_AVAILABLEPERMISSIONS", 'SetTagValues');
   FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV67FilterTagsCollection_AvailablePermissions=UC.GetTagValues();gx.fn.setControlValue("vFILTERTAGSCOLLECTION_AVAILABLEPERMISSIONS",UC.ParentObject.AV67FilterTagsCollection_AvailablePermissions); });
   FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer.addV2CFunction('AV68DeletedTag_AvailablePermissions', "vDELETEDTAG_AVAILABLEPERMISSIONS", 'SetDeletedTag');
   FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV68DeletedTag_AvailablePermissions=UC.GetDeletedTag();gx.fn.setControlValue("vDELETEDTAG_AVAILABLEPERMISSIONS",UC.ParentObject.AV68DeletedTag_AvailablePermissions); });
   FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer.setProp("Visible", "Visible", true, "bool");
   FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer.addEventHandler("TagDeleted", this.e26311_client);
   this.setUserControl(FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 156, 21, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"TABLE_CONTAINER_ROLENAME",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id:21 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vROLENAME",gxz:"ZV40RoleName",gxold:"OV40RoleName",gxvar:"AV40RoleName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV40RoleName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV40RoleName=Value},v2c:function(){gx.fn.setControlValue("vROLENAME",gx.O.AV40RoleName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV40RoleName=this.val()},val:function(){return gx.fn.getControlValue("vROLENAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"TABLE_CONTAINER_APPLICATIONNAME",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id:27 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAPPLICATIONNAME",gxz:"ZV11ApplicationName",gxold:"OV11ApplicationName",gxvar:"AV11ApplicationName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV11ApplicationName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV11ApplicationName=Value},v2c:function(){gx.fn.setControlValue("vAPPLICATIONNAME",gx.O.AV11ApplicationName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV11ApplicationName=this.val()},val:function(){return gx.fn.getControlValue("vAPPLICATIONNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"GRIDCOMPONENTCONTENT_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"LAYOUTDEFINED_GRID_INNER_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"LAYOUTDEFINED_TABLE10_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"LAYOUTDEFINED_FILTERGLOBALCONTAINER_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"LAYOUTDEFINED_COMBINEDFILTERLAYOUT_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"LAYOUTDEFINED_SECTION4_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id:46 ,lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGENERICFILTER_AVAILABLEPERMISSIONS",gxz:"ZV66GenericFilter_AvailablePermissions",gxold:"OV66GenericFilter_AvailablePermissions",gxvar:"AV66GenericFilter_AvailablePermissions",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV66GenericFilter_AvailablePermissions=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV66GenericFilter_AvailablePermissions=Value},v2c:function(){gx.fn.setControlValue("vGENERICFILTER_AVAILABLEPERMISSIONS",gx.O.AV66GenericFilter_AvailablePermissions,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV66GenericFilter_AvailablePermissions=this.val()},val:function(){return gx.fn.getControlValue("vGENERICFILTER_AVAILABLEPERMISSIONS")},nac:gx.falseFn};
   GXValidFnc[47]={ id: 47, fld:"LAYOUTDEFINED_FILTERTOGGLE_COMBINED_AVAILABLEPERMISSIONS",grid:0,evt:"e13312_client"};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[52]={ id: 52, fld:"LAYOUTDEFINED_FILTERCLOSE_COMBINED_AVAILABLEPERMISSIONS",grid:0,evt:"e14312_client"};
   GXValidFnc[53]={ id: 53, fld:"MAINFILTERRESPONSIVETABLE_FILTERS",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"FILTERCONTAINERTABLE_FILTERS",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"TABLE_CONTAINER_PERMISSIONACCESSTYPE",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id:62 ,lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Permissionaccesstype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERMISSIONACCESSTYPE",gxz:"ZV34PermissionAccessType",gxold:"OV34PermissionAccessType",gxvar:"AV34PermissionAccessType",ucs:[],op:[62],ip:[62],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV34PermissionAccessType=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV34PermissionAccessType=Value},v2c:function(){gx.fn.setComboBoxValue("vPERMISSIONACCESSTYPE",gx.O.AV34PermissionAccessType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV34PermissionAccessType=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSIONACCESSTYPE")},nac:gx.falseFn};
   this.declareDomainHdlr( 62 , function() {
   });
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"TABLE_CONTAINER_ISINHERITED",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id:68 ,lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Isinherited,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISINHERITED",gxz:"ZV27IsInherited",gxold:"OV27IsInherited",gxvar:"AV27IsInherited",ucs:[],op:[68],ip:[68],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV27IsInherited=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV27IsInherited=Value},v2c:function(){gx.fn.setComboBoxValue("vISINHERITED",gx.O.AV27IsInherited);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV27IsInherited=this.val()},val:function(){return gx.fn.getControlValue("vISINHERITED")},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"LAYOUTDEFINED_TABLE7_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[74]={ id: 74, fld:"GRIDSETTINGS_GLOBALTABLE_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"GRIDSETTINGS_LABELAVAILABLEPERMISSIONS",grid:0,evt:"e22311_client"};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"GRIDSETTINGS_CONTENTOUTERTABLEAVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id: 83, fld:"GSLAYOUTDEFINED_AVAILABLEPERMISSIONSTABLE1",grid:0};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"GRIDCUSTOMIZATIONCONTAINER_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id: 88, fld:"GSLAYOUTDEFINED_AVAILABLEPERMISSIONSRUNTIMECOLUMNSELECTIONTB", format:0,grid:0};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"GSLAYOUTDEFINED_AVAILABLEPERMISSIONSCUSTOMIZATIONCOLLAPSIBLESECTION",grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id: 93, fld:"",grid:0};
   GXValidFnc[94]={ id: 94, fld:"ROWSPERPAGECONTAINER_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id: 96, fld:"",grid:0};
   GXValidFnc[97]={ id:97 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDSETTINGSROWSPERPAGE_AVAILABLEPERMISSIONS",gxz:"ZV47GridSettingsRowsPerPage_AvailablePermissions",gxold:"OV47GridSettingsRowsPerPage_AvailablePermissions",gxvar:"AV47GridSettingsRowsPerPage_AvailablePermissions",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV47GridSettingsRowsPerPage_AvailablePermissions=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47GridSettingsRowsPerPage_AvailablePermissions=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vGRIDSETTINGSROWSPERPAGE_AVAILABLEPERMISSIONS",gx.O.AV47GridSettingsRowsPerPage_AvailablePermissions)},c2v:function(){if(this.val()!==undefined)gx.O.AV47GridSettingsRowsPerPage_AvailablePermissions=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRIDSETTINGSROWSPERPAGE_AVAILABLEPERMISSIONS",'.')},nac:gx.falseFn};
   GXValidFnc[98]={ id: 98, fld:"",grid:0};
   GXValidFnc[99]={ id: 99, fld:"",grid:0};
   GXValidFnc[100]={ id: 100, fld:"GRIDSETTINGS_SAVEAVAILABLEPERMISSIONS",grid:0,evt:"e12312_client"};
   GXValidFnc[102]={ id: 102, fld:"ACTIONS_AVAILABLEPERMISSIONS_TOPRIGHT",grid:0};
   GXValidFnc[105]={ id: 105, fld:"ADDSELECTED",grid:0,evt:"e11312_client"};
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"",grid:0};
   GXValidFnc[108]={ id: 108, fld:"LAYOUTDEFINED_TABLE3_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id: 110, fld:"",grid:0};
   GXValidFnc[111]={ id: 111, fld:"MAINGRID_RESPONSIVETABLE_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[112]={ id: 112, fld:"",grid:0};
   GXValidFnc[113]={ id: 113, fld:"",grid:0};
   GXValidFnc[114]={ id: 114, fld:"TABLEGRIDCONTAINER_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[117]={ id: 117, fld:"",grid:0};
   GXValidFnc[118]={ id:118 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCHECKALL_AVAILABLEPERMISSIONS",gxz:"ZV48CheckAll_AvailablePermissions",gxold:"OV48CheckAll_AvailablePermissions",gxvar:"AV48CheckAll_AvailablePermissions",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV48CheckAll_AvailablePermissions=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV48CheckAll_AvailablePermissions=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCHECKALL_AVAILABLEPERMISSIONS",gx.O.AV48CheckAll_AvailablePermissions,true)},c2v:function(){if(this.val()!==undefined)gx.O.AV48CheckAll_AvailablePermissions=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCHECKALL_AVAILABLEPERMISSIONS")},nac:gx.falseFn,evt:"e24311_client",values:['true','false']};
   GXValidFnc[121]={ id:121 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:120,gxgrid:this.AvailablepermissionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMULTIROWITEMSELECTED_AVAILABLEPERMISSIONS",gxz:"ZV31MultiRowItemSelected_AvailablePermissions",gxold:"OV31MultiRowItemSelected_AvailablePermissions",gxvar:"AV31MultiRowItemSelected_AvailablePermissions",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV31MultiRowItemSelected_AvailablePermissions=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV31MultiRowItemSelected_AvailablePermissions=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vMULTIROWITEMSELECTED_AVAILABLEPERMISSIONS",row || gx.fn.currentGridRowImpl(120),gx.O.AV31MultiRowItemSelected_AvailablePermissions,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV31MultiRowItemSelected_AvailablePermissions=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("vMULTIROWITEMSELECTED_AVAILABLEPERMISSIONS",row || gx.fn.currentGridRowImpl(120))},nac:gx.falseFn,evt:"e23312_client",values:['true','false']};
   GXValidFnc[122]={ id:122 ,lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:120,gxgrid:this.AvailablepermissionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV33Name",gxold:"OV33Name",gxvar:"AV33Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV33Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV33Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(120),gx.O.AV33Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV33Name=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(120))},nac:gx.falseFn};
   GXValidFnc[123]={ id:123 ,lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:120,gxgrid:this.AvailablepermissionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",gxz:"ZV14Dsc",gxold:"OV14Dsc",gxvar:"AV14Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV14Dsc=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV14Dsc=Value},v2c:function(row){gx.fn.setGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(120),gx.O.AV14Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV14Dsc=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(120))},nac:gx.falseFn};
   GXValidFnc[124]={ id:124 ,lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:120,gxgrid:this.AvailablepermissionsContainer,fnc:this.Validv_Access,isvalid:null,evt_cvc:'e25312_client',evt_cvcing:null,rgrid:[],fld:"vACCESS",gxz:"ZV6Access",gxold:"OV6Access",gxvar:"AV6Access",ucs:[],op:[124],ip:[124],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV6Access=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV6Access=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vACCESS",row || gx.fn.currentGridRowImpl(120),gx.O.AV6Access);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV6Access=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vACCESS",row || gx.fn.currentGridRowImpl(120))},nac:gx.falseFn};
   GXValidFnc[125]={ id:125 ,lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:120,gxgrid:this.AvailablepermissionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV26Id",gxold:"OV26Id",gxvar:"AV26Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV26Id=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV26Id=Value},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(120),gx.O.AV26Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV26Id=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vID",row || gx.fn.currentGridRowImpl(120))},nac:gx.falseFn};
   GXValidFnc[126]={ id: 126, fld:"",grid:0};
   GXValidFnc[127]={ id: 127, fld:"",grid:0};
   GXValidFnc[128]={ id: 128, fld:"I_NORESULTSFOUNDTABLENAME_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[131]={ id: 131, fld:"I_NORESULTSFOUNDTEXTBLOCK_AVAILABLEPERMISSIONS", format:0,grid:0};
   GXValidFnc[132]={ id: 132, fld:"",grid:0};
   GXValidFnc[133]={ id: 133, fld:"",grid:0};
   GXValidFnc[134]={ id: 134, fld:"LAYOUTDEFINED_SECTION8_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[135]={ id: 135, fld:"PAGINATIONBAR_PAGINGCONTAINERTABLE_AVAILABLEPERMISSIONS",grid:0};
   GXValidFnc[138]={ id: 138, fld:"PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKAVAILABLEPERMISSIONS", format:1,grid:0,evt:"e19311_client"};
   GXValidFnc[140]={ id: 140, fld:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKAVAILABLEPERMISSIONS", format:0,grid:0,evt:"e20311_client"};
   GXValidFnc[142]={ id: 142, fld:"PAGINATIONBAR_SPACINGLEFTTEXTBLOCKAVAILABLEPERMISSIONS", format:0,grid:0};
   GXValidFnc[144]={ id: 144, fld:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKAVAILABLEPERMISSIONS", format:0,grid:0,evt:"e19311_client"};
   GXValidFnc[146]={ id: 146, fld:"PAGINATIONBAR_CURRENTPAGETEXTBLOCKAVAILABLEPERMISSIONS", format:0,grid:0};
   GXValidFnc[148]={ id: 148, fld:"PAGINATIONBAR_NEXTPAGETEXTBLOCKAVAILABLEPERMISSIONS", format:0,grid:0,evt:"e21311_client"};
   GXValidFnc[150]={ id: 150, fld:"PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKAVAILABLEPERMISSIONS", format:0,grid:0};
   GXValidFnc[152]={ id: 152, fld:"PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKAVAILABLEPERMISSIONS", format:1,grid:0,evt:"e21311_client"};
   GXValidFnc[153]={ id: 153, fld:"",grid:0};
   GXValidFnc[154]={ id: 154, fld:"",grid:0};
   GXValidFnc[155]={ id: 155, fld:"",grid:0};
   this.AV40RoleName = "" ;
   this.ZV40RoleName = "" ;
   this.OV40RoleName = "" ;
   this.AV11ApplicationName = "" ;
   this.ZV11ApplicationName = "" ;
   this.OV11ApplicationName = "" ;
   this.AV66GenericFilter_AvailablePermissions = "" ;
   this.ZV66GenericFilter_AvailablePermissions = "" ;
   this.OV66GenericFilter_AvailablePermissions = "" ;
   this.AV34PermissionAccessType = "" ;
   this.ZV34PermissionAccessType = "" ;
   this.OV34PermissionAccessType = "" ;
   this.AV27IsInherited = "" ;
   this.ZV27IsInherited = "" ;
   this.OV27IsInherited = "" ;
   this.AV47GridSettingsRowsPerPage_AvailablePermissions = 0 ;
   this.ZV47GridSettingsRowsPerPage_AvailablePermissions = 0 ;
   this.OV47GridSettingsRowsPerPage_AvailablePermissions = 0 ;
   this.AV48CheckAll_AvailablePermissions = false ;
   this.ZV48CheckAll_AvailablePermissions = false ;
   this.OV48CheckAll_AvailablePermissions = false ;
   this.ZV31MultiRowItemSelected_AvailablePermissions = false ;
   this.OV31MultiRowItemSelected_AvailablePermissions = false ;
   this.ZV33Name = "" ;
   this.OV33Name = "" ;
   this.ZV14Dsc = "" ;
   this.OV14Dsc = "" ;
   this.ZV6Access = "" ;
   this.OV6Access = "" ;
   this.ZV26Id = "" ;
   this.OV26Id = "" ;
   this.AV40RoleName = "" ;
   this.AV11ApplicationName = "" ;
   this.AV66GenericFilter_AvailablePermissions = "" ;
   this.AV67FilterTagsCollection_AvailablePermissions = [ ] ;
   this.AV34PermissionAccessType = "" ;
   this.AV27IsInherited = "" ;
   this.AV47GridSettingsRowsPerPage_AvailablePermissions = 0 ;
   this.AV48CheckAll_AvailablePermissions = false ;
   this.AV39RoleId = 0 ;
   this.AV10ApplicationId = 0 ;
   this.AV31MultiRowItemSelected_AvailablePermissions = false ;
   this.AV33Name = "" ;
   this.AV14Dsc = "" ;
   this.AV6Access = "" ;
   this.AV26Id = "" ;
   this.AV13CurrentPage_AvailablePermissions = 0 ;
   this.AV62CountSelectedItems_AvailablePermissions = 0 ;
   this.AV51AllSelectedItems_AvailablePermissions = [ ] ;
   this.AV46RowsPerPage_AvailablePermissions = 0 ;
   this.AV12AvailablePermissions_SelectedRows = 0 ;
   this.AV56S_Access = "" ;
   this.AV25I_LoadCount_AvailablePermissions = 0 ;
   this.AV61FieldValues_AvailablePermissions = [ ] ;
   this.AV23HasNextPage_AvailablePermissions = false ;
   this.AV72Pgmname = "" ;
   this.AV30MultiRowHasNext_AvailablePermissions = false ;
   this.AV32MultiRowIterator_AvailablePermissions = 0 ;
   this.AV52SelectedItems_AvailablePermissions = [ ] ;
   this.AV57S_Id = "" ;
   this.AV59PermissionAccessType_PreviousValue = "" ;
   this.AV60IsInherited_PreviousValue = "" ;
   this.AV68DeletedTag_AvailablePermissions = "" ;
   this.AV53Index_AvailablePermissions = 0 ;
   this.AV49SelectedItem_AvailablePermissions = {SKNumeric1:0,SKNumeric2:0,SKNumeric3:0,SKNumeric4:0,SKNumeric5:0,SKNumeric6:0,SKCharacter1:"",SKCharacter2:"",SKCharacter3:"",SKCharacter4:"",SKCharacter5:"",SKCharacter6:"",SKGUID1:'00000000-0000-0000-0000-000000000000',SKGUID2:'00000000-0000-0000-0000-000000000000',SKDateTime1:gx.date.nullDate(),SKDateTime2:gx.date.nullDate(),IsSelected:false,FieldValues:[]} ;
   this.AV50FieldValue_AvailablePermissions = {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""} ;
   this.AV79GXV6 = 0 ;
   this.AV55S_Dsc = "" ;
   this.AV54S_Name = "" ;
   this.AV80GXV7 = 0 ;
   this.Events = {"e11312_client": ["'E_ADDSELECTED'", true] ,"e12312_client": ["'SAVEGRIDSETTINGS(AVAILABLEPERMISSIONS)'", true] ,"e13312_client": ["LAYOUTDEFINED_FILTERTOGGLE_COMBINED_AVAILABLEPERMISSIONS.CLICK", true] ,"e14312_client": ["LAYOUTDEFINED_FILTERCLOSE_COMBINED_AVAILABLEPERMISSIONS.CLICK", true] ,"e27312_client": ["ENTER", true] ,"e28312_client": ["CANCEL", true] ,"e19311_client": ["'PAGINGPREVIOUS(AVAILABLEPERMISSIONS)'", false] ,"e21311_client": ["'PAGINGNEXT(AVAILABLEPERMISSIONS)'", false] ,"e23312_client": ["VMULTIROWITEMSELECTED_AVAILABLEPERMISSIONS.CLICK", false] ,"e20311_client": ["'PAGINGFIRST(AVAILABLEPERMISSIONS)'", false] ,"e22311_client": ["'TOGGLEGRIDSETTINGS(AVAILABLEPERMISSIONS)'", false] ,"e24311_client": ["VCHECKALL_AVAILABLEPERMISSIONS.CLICK", false] ,"e25312_client": ["VACCESS.CONTROLVALUECHANGED", false] ,"e26311_client": ["FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONS.TAGDELETED", false]};
   this.EvtParms["REFRESH"] = [[{av:'AVAILABLEPERMISSIONS_nFirstRecordOnPage'},{av:'AVAILABLEPERMISSIONS_nEOF'},{av:'AV59PermissionAccessType_PreviousValue',fld:'vPERMISSIONACCESSTYPE_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPE'},{av:'AV34PermissionAccessType',fld:'vPERMISSIONACCESSTYPE',pic:''},{av:'AV60IsInherited_PreviousValue',fld:'vISINHERITED_PREVIOUSVALUE',pic:''},{ctrl:'vISINHERITED'},{av:'AV27IsInherited',fld:'vISINHERITED',pic:''},{av:'AV66GenericFilter_AvailablePermissions',fld:'vGENERICFILTER_AVAILABLEPERMISSIONS',pic:''},{av:'AV46RowsPerPage_AvailablePermissions',fld:'vROWSPERPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV26Id',fld:'vID',pic:'',hsh:true},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV56S_Access',fld:'vS_ACCESS',pic:''},{av:'AV61FieldValues_AvailablePermissions',fld:'vFIELDVALUES_AVAILABLEPERMISSIONS',pic:''},{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV25I_LoadCount_AvailablePermissions',fld:'vI_LOADCOUNT_AVAILABLEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'AV23HasNextPage_AvailablePermissions',fld:'vHASNEXTPAGE_AVAILABLEPERMISSIONS',pic:'',hsh:true},{av:'AV72Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV39RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV10ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV40RoleName',fld:'vROLENAME',pic:''},{av:'AV11ApplicationName',fld:'vAPPLICATIONNAME',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV72Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{ctrl:'vPERMISSIONACCESSTYPE'},{av:'AV34PermissionAccessType',fld:'vPERMISSIONACCESSTYPE',pic:''},{ctrl:'vISINHERITED'},{av:'AV27IsInherited',fld:'vISINHERITED',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_AVAILABLEPERMISSIONS","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_AVAILABLEPERMISSIONS',prop:'Visible'},{av:'AV46RowsPerPage_AvailablePermissions',fld:'vROWSPERPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{ctrl:'vGRIDSETTINGSROWSPERPAGE_AVAILABLEPERMISSIONS'},{av:'AV47GridSettingsRowsPerPage_AvailablePermissions',fld:'vGRIDSETTINGSROWSPERPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV59PermissionAccessType_PreviousValue',fld:'vPERMISSIONACCESSTYPE_PREVIOUSVALUE',pic:''},{av:'AV60IsInherited_PreviousValue',fld:'vISINHERITED_PREVIOUSVALUE',pic:''},{ctrl:'AVAILABLEPERMISSIONS',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEAVAILABLEPERMISSIONS","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEAVAILABLEPERMISSIONS',prop:'Visible'},{ctrl:'vPERMISSIONACCESSTYPE'},{av:'AV34PermissionAccessType',fld:'vPERMISSIONACCESSTYPE',pic:''},{ctrl:'vISINHERITED'},{av:'AV27IsInherited',fld:'vISINHERITED',pic:''},{av:'AV66GenericFilter_AvailablePermissions',fld:'vGENERICFILTER_AVAILABLEPERMISSIONS',pic:''},{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'this.FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer.EmptyStateMessage',ctrl:'FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONS',prop:'EmptyStateMessage'},{av:'AV67FilterTagsCollection_AvailablePermissions',fld:'vFILTERTAGSCOLLECTION_AVAILABLEPERMISSIONS',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["AVAILABLEPERMISSIONS.LOAD"] = [[{av:'AV46RowsPerPage_AvailablePermissions',fld:'vROWSPERPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV26Id',fld:'vID',pic:'',hsh:true},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV56S_Access',fld:'vS_ACCESS',pic:''},{av:'AV25I_LoadCount_AvailablePermissions',fld:'vI_LOADCOUNT_AVAILABLEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'AV39RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV10ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV66GenericFilter_AvailablePermissions',fld:'vGENERICFILTER_AVAILABLEPERMISSIONS',pic:''},{ctrl:'vPERMISSIONACCESSTYPE'},{av:'AV34PermissionAccessType',fld:'vPERMISSIONACCESSTYPE',pic:''},{ctrl:'vISINHERITED'},{av:'AV27IsInherited',fld:'vISINHERITED',pic:''},{av:'AV61FieldValues_AvailablePermissions',fld:'vFIELDVALUES_AVAILABLEPERMISSIONS',pic:''},{av:'AV23HasNextPage_AvailablePermissions',fld:'vHASNEXTPAGE_AVAILABLEPERMISSIONS',pic:'',hsh:true},{av:'AV72Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_AVAILABLEPERMISSIONS","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_AVAILABLEPERMISSIONS',prop:'Visible'},{av:'AV25I_LoadCount_AvailablePermissions',fld:'vI_LOADCOUNT_AVAILABLEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'AV23HasNextPage_AvailablePermissions',fld:'vHASNEXTPAGE_AVAILABLEPERMISSIONS',pic:'',hsh:true},{ctrl:'vACCESS'},{av:'AV6Access',fld:'vACCESS',pic:''},{av:'AV31MultiRowItemSelected_AvailablePermissions',fld:'vMULTIROWITEMSELECTED_AVAILABLEPERMISSIONS',pic:''},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV61FieldValues_AvailablePermissions',fld:'vFIELDVALUES_AVAILABLEPERMISSIONS',pic:''},{av:'AV33Name',fld:'vNAME',pic:'',hsh:true},{av:'AV14Dsc',fld:'vDSC',pic:'',hsh:true},{av:'AV26Id',fld:'vID',pic:'',hsh:true},{av:'AV56S_Access',fld:'vS_ACCESS',pic:''},{av:'AV57S_Id',fld:'vS_ID',pic:''},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKAVAILABLEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKAVAILABLEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKAVAILABLEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKAVAILABLEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKAVAILABLEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKAVAILABLEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKAVAILABLEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKAVAILABLEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKAVAILABLEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLAVAILABLEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLAVAILABLEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKAVAILABLEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLAVAILABLEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLAVAILABLEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKAVAILABLEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKAVAILABLEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLAVAILABLEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLAVAILABLEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKAVAILABLEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKAVAILABLEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLAVAILABLEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLAVAILABLEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKAVAILABLEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKAVAILABLEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLAVAILABLEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLAVAILABLEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKAVAILABLEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_AVAILABLEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_AVAILABLEPERMISSIONS',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["'PAGINGPREVIOUS(AVAILABLEPERMISSIONS)'"] = [[{av:'AVAILABLEPERMISSIONS_nFirstRecordOnPage'},{av:'AVAILABLEPERMISSIONS_nEOF'},{av:'AV39RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV10ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV59PermissionAccessType_PreviousValue',fld:'vPERMISSIONACCESSTYPE_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPE'},{av:'AV34PermissionAccessType',fld:'vPERMISSIONACCESSTYPE',pic:''},{av:'AV60IsInherited_PreviousValue',fld:'vISINHERITED_PREVIOUSVALUE',pic:''},{ctrl:'vISINHERITED'},{av:'AV27IsInherited',fld:'vISINHERITED',pic:''},{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV72Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV66GenericFilter_AvailablePermissions',fld:'vGENERICFILTER_AVAILABLEPERMISSIONS',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV23HasNextPage_AvailablePermissions',fld:'vHASNEXTPAGE_AVAILABLEPERMISSIONS',pic:'',hsh:true},{av:'AV46RowsPerPage_AvailablePermissions',fld:'vROWSPERPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV26Id',fld:'vID',pic:'',hsh:true},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV56S_Access',fld:'vS_ACCESS',pic:''},{av:'AV25I_LoadCount_AvailablePermissions',fld:'vI_LOADCOUNT_AVAILABLEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'AV61FieldValues_AvailablePermissions',fld:'vFIELDVALUES_AVAILABLEPERMISSIONS',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV40RoleName',fld:'vROLENAME',pic:''},{av:'AV11ApplicationName',fld:'vAPPLICATIONNAME',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["'PAGINGNEXT(AVAILABLEPERMISSIONS)'"] = [[{av:'AVAILABLEPERMISSIONS_nFirstRecordOnPage'},{av:'AVAILABLEPERMISSIONS_nEOF'},{av:'AV39RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV10ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV59PermissionAccessType_PreviousValue',fld:'vPERMISSIONACCESSTYPE_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPE'},{av:'AV34PermissionAccessType',fld:'vPERMISSIONACCESSTYPE',pic:''},{av:'AV60IsInherited_PreviousValue',fld:'vISINHERITED_PREVIOUSVALUE',pic:''},{ctrl:'vISINHERITED'},{av:'AV27IsInherited',fld:'vISINHERITED',pic:''},{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV72Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV66GenericFilter_AvailablePermissions',fld:'vGENERICFILTER_AVAILABLEPERMISSIONS',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV23HasNextPage_AvailablePermissions',fld:'vHASNEXTPAGE_AVAILABLEPERMISSIONS',pic:'',hsh:true},{av:'AV46RowsPerPage_AvailablePermissions',fld:'vROWSPERPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV26Id',fld:'vID',pic:'',hsh:true},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV56S_Access',fld:'vS_ACCESS',pic:''},{av:'AV25I_LoadCount_AvailablePermissions',fld:'vI_LOADCOUNT_AVAILABLEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'AV61FieldValues_AvailablePermissions',fld:'vFIELDVALUES_AVAILABLEPERMISSIONS',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV40RoleName',fld:'vROLENAME',pic:''},{av:'AV11ApplicationName',fld:'vAPPLICATIONNAME',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["'E_ADDSELECTED'"] = [[{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV30MultiRowHasNext_AvailablePermissions',fld:'vMULTIROWHASNEXT_AVAILABLEPERMISSIONS',pic:''},{av:'AV32MultiRowIterator_AvailablePermissions',fld:'vMULTIROWITERATOR_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV52SelectedItems_AvailablePermissions',fld:'vSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV39RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV10ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV57S_Id',fld:'vS_ID',pic:''},{av:'AV56S_Access',fld:'vS_ACCESS',pic:''},{av:'AV61FieldValues_AvailablePermissions',fld:'vFIELDVALUES_AVAILABLEPERMISSIONS',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'AV52SelectedItems_AvailablePermissions',fld:'vSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV32MultiRowIterator_AvailablePermissions',fld:'vMULTIROWITERATOR_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV56S_Access',fld:'vS_ACCESS',pic:''},{av:'AV57S_Id',fld:'vS_ID',pic:''},{av:'AV61FieldValues_AvailablePermissions',fld:'vFIELDVALUES_AVAILABLEPERMISSIONS',pic:''},{av:'AV30MultiRowHasNext_AvailablePermissions',fld:'vMULTIROWHASNEXT_AVAILABLEPERMISSIONS',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["VMULTIROWITEMSELECTED_AVAILABLEPERMISSIONS.CLICK"] = [[{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV26Id',fld:'vID',grid:120,pic:'',hsh:true},{av:'AVAILABLEPERMISSIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_120',ctrl:'AVAILABLEPERMISSIONS',grid:120,prop:'GridRC'},{av:'AV31MultiRowItemSelected_AvailablePermissions',fld:'vMULTIROWITEMSELECTED_AVAILABLEPERMISSIONS',grid:120,pic:''},{av:'AV6Access',fld:'vACCESS',grid:120,pic:''},{av:'AV33Name',fld:'vNAME',grid:120,pic:'',hsh:true},{av:'AV14Dsc',fld:'vDSC',grid:120,pic:'',hsh:true},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_AVAILABLEPERMISSIONS","Class")',ctrl:'MAINGRID_RESPONSIVETABLE_AVAILABLEPERMISSIONS',prop:'Class'},{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["'PAGINGFIRST(AVAILABLEPERMISSIONS)'"] = [[{av:'AVAILABLEPERMISSIONS_nFirstRecordOnPage'},{av:'AVAILABLEPERMISSIONS_nEOF'},{av:'AV39RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV10ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV59PermissionAccessType_PreviousValue',fld:'vPERMISSIONACCESSTYPE_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPE'},{av:'AV34PermissionAccessType',fld:'vPERMISSIONACCESSTYPE',pic:''},{av:'AV60IsInherited_PreviousValue',fld:'vISINHERITED_PREVIOUSVALUE',pic:''},{ctrl:'vISINHERITED'},{av:'AV27IsInherited',fld:'vISINHERITED',pic:''},{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV72Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV66GenericFilter_AvailablePermissions',fld:'vGENERICFILTER_AVAILABLEPERMISSIONS',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV23HasNextPage_AvailablePermissions',fld:'vHASNEXTPAGE_AVAILABLEPERMISSIONS',pic:'',hsh:true},{av:'AV46RowsPerPage_AvailablePermissions',fld:'vROWSPERPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV26Id',fld:'vID',pic:'',hsh:true},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV56S_Access',fld:'vS_ACCESS',pic:''},{av:'AV25I_LoadCount_AvailablePermissions',fld:'vI_LOADCOUNT_AVAILABLEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'AV61FieldValues_AvailablePermissions',fld:'vFIELDVALUES_AVAILABLEPERMISSIONS',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV40RoleName',fld:'vROLENAME',pic:''},{av:'AV11ApplicationName',fld:'vAPPLICATIONNAME',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["'TOGGLEGRIDSETTINGS(AVAILABLEPERMISSIONS)'"] = [[{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEAVAILABLEPERMISSIONS","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEAVAILABLEPERMISSIONS',prop:'Visible'},{av:'AV46RowsPerPage_AvailablePermissions',fld:'vROWSPERPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{ctrl:'vGRIDSETTINGSROWSPERPAGE_AVAILABLEPERMISSIONS'},{av:'AV47GridSettingsRowsPerPage_AvailablePermissions',fld:'vGRIDSETTINGSROWSPERPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEAVAILABLEPERMISSIONS","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEAVAILABLEPERMISSIONS',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["'SAVEGRIDSETTINGS(AVAILABLEPERMISSIONS)'"] = [[{av:'AVAILABLEPERMISSIONS_nFirstRecordOnPage'},{av:'AVAILABLEPERMISSIONS_nEOF'},{av:'AV39RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV10ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV59PermissionAccessType_PreviousValue',fld:'vPERMISSIONACCESSTYPE_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPE'},{av:'AV34PermissionAccessType',fld:'vPERMISSIONACCESSTYPE',pic:''},{av:'AV60IsInherited_PreviousValue',fld:'vISINHERITED_PREVIOUSVALUE',pic:''},{ctrl:'vISINHERITED'},{av:'AV27IsInherited',fld:'vISINHERITED',pic:''},{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV72Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV66GenericFilter_AvailablePermissions',fld:'vGENERICFILTER_AVAILABLEPERMISSIONS',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV23HasNextPage_AvailablePermissions',fld:'vHASNEXTPAGE_AVAILABLEPERMISSIONS',pic:'',hsh:true},{av:'AV46RowsPerPage_AvailablePermissions',fld:'vROWSPERPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV26Id',fld:'vID',pic:'',hsh:true},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV56S_Access',fld:'vS_ACCESS',pic:''},{av:'AV25I_LoadCount_AvailablePermissions',fld:'vI_LOADCOUNT_AVAILABLEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'AV61FieldValues_AvailablePermissions',fld:'vFIELDVALUES_AVAILABLEPERMISSIONS',pic:''},{ctrl:'vGRIDSETTINGSROWSPERPAGE_AVAILABLEPERMISSIONS'},{av:'AV47GridSettingsRowsPerPage_AvailablePermissions',fld:'vGRIDSETTINGSROWSPERPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'AV46RowsPerPage_AvailablePermissions',fld:'vROWSPERPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEAVAILABLEPERMISSIONS","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEAVAILABLEPERMISSIONS',prop:'Visible'},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV40RoleName',fld:'vROLENAME',pic:''},{av:'AV11ApplicationName',fld:'vAPPLICATIONNAME',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["AVAILABLEPERMISSIONS.REFRESH"] = [[{av:'AV59PermissionAccessType_PreviousValue',fld:'vPERMISSIONACCESSTYPE_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPE'},{av:'AV34PermissionAccessType',fld:'vPERMISSIONACCESSTYPE',pic:''},{av:'AV60IsInherited_PreviousValue',fld:'vISINHERITED_PREVIOUSVALUE',pic:''},{ctrl:'vISINHERITED'},{av:'AV27IsInherited',fld:'vISINHERITED',pic:''},{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV72Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV66GenericFilter_AvailablePermissions',fld:'vGENERICFILTER_AVAILABLEPERMISSIONS',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV23HasNextPage_AvailablePermissions',fld:'vHASNEXTPAGE_AVAILABLEPERMISSIONS',pic:'',hsh:true},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'AV59PermissionAccessType_PreviousValue',fld:'vPERMISSIONACCESSTYPE_PREVIOUSVALUE',pic:''},{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV60IsInherited_PreviousValue',fld:'vISINHERITED_PREVIOUSVALUE',pic:''},{ctrl:'AVAILABLEPERMISSIONS',prop:'Backcolorstyle'},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_AVAILABLEPERMISSIONS","Class")',ctrl:'MAINGRID_RESPONSIVETABLE_AVAILABLEPERMISSIONS',prop:'Class'},{av:'this.FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONSContainer.EmptyStateMessage',ctrl:'FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONS',prop:'EmptyStateMessage'},{av:'AV67FilterTagsCollection_AvailablePermissions',fld:'vFILTERTAGSCOLLECTION_AVAILABLEPERMISSIONS',pic:''},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKAVAILABLEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKAVAILABLEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKAVAILABLEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKAVAILABLEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKAVAILABLEPERMISSIONS',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKAVAILABLEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKAVAILABLEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKAVAILABLEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKAVAILABLEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLAVAILABLEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLAVAILABLEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKAVAILABLEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLAVAILABLEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLAVAILABLEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKAVAILABLEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKAVAILABLEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLAVAILABLEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLAVAILABLEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKAVAILABLEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKAVAILABLEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLAVAILABLEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLAVAILABLEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKAVAILABLEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKAVAILABLEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLAVAILABLEPERMISSIONS","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLAVAILABLEPERMISSIONS',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKAVAILABLEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKAVAILABLEPERMISSIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_AVAILABLEPERMISSIONS","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_AVAILABLEPERMISSIONS',prop:'Visible'},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["VCHECKALL_AVAILABLEPERMISSIONS.CLICK"] = [[{av:'AV31MultiRowItemSelected_AvailablePermissions',fld:'vMULTIROWITEMSELECTED_AVAILABLEPERMISSIONS',grid:120,pic:''},{av:'AVAILABLEPERMISSIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_120',ctrl:'AVAILABLEPERMISSIONS',grid:120,prop:'GridRC'},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV26Id',fld:'vID',grid:120,pic:'',hsh:true},{av:'AV6Access',fld:'vACCESS',grid:120,pic:''},{av:'AV33Name',fld:'vNAME',grid:120,pic:'',hsh:true},{av:'AV14Dsc',fld:'vDSC',grid:120,pic:'',hsh:true},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'AV31MultiRowItemSelected_AvailablePermissions',fld:'vMULTIROWITEMSELECTED_AVAILABLEPERMISSIONS',pic:''},{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["VACCESS.CONTROLVALUECHANGED"] = [[{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV26Id',fld:'vID',grid:120,pic:'',hsh:true},{av:'AVAILABLEPERMISSIONS_nFirstRecordOnPage'},{av:'nRC_GXsfl_120',ctrl:'AVAILABLEPERMISSIONS',grid:120,prop:'GridRC'},{av:'AV31MultiRowItemSelected_AvailablePermissions',fld:'vMULTIROWITEMSELECTED_AVAILABLEPERMISSIONS',grid:120,pic:''},{av:'AV6Access',fld:'vACCESS',grid:120,pic:''},{av:'AV33Name',fld:'vNAME',grid:120,pic:'',hsh:true},{av:'AV14Dsc',fld:'vDSC',grid:120,pic:'',hsh:true},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["LAYOUTDEFINED_FILTERTOGGLE_COMBINED_AVAILABLEPERMISSIONS.CLICK"] = [[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_AVAILABLEPERMISSIONS","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_AVAILABLEPERMISSIONS',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_AVAILABLEPERMISSIONS","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_AVAILABLEPERMISSIONS',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["LAYOUTDEFINED_FILTERCLOSE_COMBINED_AVAILABLEPERMISSIONS.CLICK"] = [[{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_AVAILABLEPERMISSIONS","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_AVAILABLEPERMISSIONS',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["FILTERTAGSUSERCONTROL_AVAILABLEPERMISSIONS.TAGDELETED"] = [[{av:'AVAILABLEPERMISSIONS_nFirstRecordOnPage'},{av:'AVAILABLEPERMISSIONS_nEOF'},{av:'AV39RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV10ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV59PermissionAccessType_PreviousValue',fld:'vPERMISSIONACCESSTYPE_PREVIOUSVALUE',pic:''},{ctrl:'vPERMISSIONACCESSTYPE'},{av:'AV34PermissionAccessType',fld:'vPERMISSIONACCESSTYPE',pic:''},{av:'AV60IsInherited_PreviousValue',fld:'vISINHERITED_PREVIOUSVALUE',pic:''},{ctrl:'vISINHERITED'},{av:'AV27IsInherited',fld:'vISINHERITED',pic:''},{av:'AV51AllSelectedItems_AvailablePermissions',fld:'vALLSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:''},{av:'AV72Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV66GenericFilter_AvailablePermissions',fld:'vGENERICFILTER_AVAILABLEPERMISSIONS',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV23HasNextPage_AvailablePermissions',fld:'vHASNEXTPAGE_AVAILABLEPERMISSIONS',pic:'',hsh:true},{av:'AV46RowsPerPage_AvailablePermissions',fld:'vROWSPERPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV26Id',fld:'vID',pic:'',hsh:true},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV56S_Access',fld:'vS_ACCESS',pic:''},{av:'AV25I_LoadCount_AvailablePermissions',fld:'vI_LOADCOUNT_AVAILABLEPERMISSIONS',pic:'ZZZ9',hsh:true},{av:'AV61FieldValues_AvailablePermissions',fld:'vFIELDVALUES_AVAILABLEPERMISSIONS',pic:''},{av:'AV68DeletedTag_AvailablePermissions',fld:'vDELETEDTAG_AVAILABLEPERMISSIONS',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{ctrl:'vPERMISSIONACCESSTYPE'},{av:'AV34PermissionAccessType',fld:'vPERMISSIONACCESSTYPE',pic:''},{ctrl:'vISINHERITED'},{av:'AV27IsInherited',fld:'vISINHERITED',pic:''},{av:'AV13CurrentPage_AvailablePermissions',fld:'vCURRENTPAGE_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{av:'AV12AvailablePermissions_SelectedRows',fld:'vAVAILABLEPERMISSIONS_SELECTEDROWS',pic:'ZZZ9'},{av:'AV40RoleName',fld:'vROLENAME',pic:''},{av:'AV11ApplicationName',fld:'vAPPLICATIONNAME',pic:''},{av:'AV62CountSelectedItems_AvailablePermissions',fld:'vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["VALIDV_PERMISSIONACCESSTYPE"] = [[{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["VALIDV_ISINHERITED"] = [[{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.EvtParms["VALIDV_ACCESS"] = [[{ctrl:'vACCESS'},{av:'AV6Access',fld:'vACCESS',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}],[{ctrl:'vACCESS'},{av:'AV6Access',fld:'vACCESS',pic:''},{av:'AV48CheckAll_AvailablePermissions',fld:'vCHECKALL_AVAILABLEPERMISSIONS',pic:''}]];
   this.setVCMap("AV13CurrentPage_AvailablePermissions", "vCURRENTPAGE_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV62CountSelectedItems_AvailablePermissions", "vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV39RoleId", "vROLEID", 0, "int", 12, 0);
   this.setVCMap("AV10ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV51AllSelectedItems_AvailablePermissions", "vALLSELECTEDITEMS_AVAILABLEPERMISSIONS", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV46RowsPerPage_AvailablePermissions", "vROWSPERPAGE_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV12AvailablePermissions_SelectedRows", "vAVAILABLEPERMISSIONS_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV56S_Access", "vS_ACCESS", 0, "char", 1, 0);
   this.setVCMap("AV25I_LoadCount_AvailablePermissions", "vI_LOADCOUNT_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV61FieldValues_AvailablePermissions", "vFIELDVALUES_AVAILABLEPERMISSIONS", 0, "CollK2BSelectionItem.FieldValuesItem", 0, 0);
   this.setVCMap("AV23HasNextPage_AvailablePermissions", "vHASNEXTPAGE_AVAILABLEPERMISSIONS", 0, "boolean", 4, 0);
   this.setVCMap("AV72Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV30MultiRowHasNext_AvailablePermissions", "vMULTIROWHASNEXT_AVAILABLEPERMISSIONS", 0, "boolean", 4, 0);
   this.setVCMap("AV32MultiRowIterator_AvailablePermissions", "vMULTIROWITERATOR_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV52SelectedItems_AvailablePermissions", "vSELECTEDITEMS_AVAILABLEPERMISSIONS", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV57S_Id", "vS_ID", 0, "char", 40, 0);
   this.setVCMap("AV59PermissionAccessType_PreviousValue", "vPERMISSIONACCESSTYPE_PREVIOUSVALUE", 0, "char", 1, 0);
   this.setVCMap("AV60IsInherited_PreviousValue", "vISINHERITED_PREVIOUSVALUE", 0, "char", 1, 0);
   this.setVCMap("AV68DeletedTag_AvailablePermissions", "vDELETEDTAG_AVAILABLEPERMISSIONS", 0, "char", 30, 0);
   this.setVCMap("AV39RoleId", "vROLEID", 0, "int", 12, 0);
   this.setVCMap("AV10ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV59PermissionAccessType_PreviousValue", "vPERMISSIONACCESSTYPE_PREVIOUSVALUE", 0, "char", 1, 0);
   this.setVCMap("AV60IsInherited_PreviousValue", "vISINHERITED_PREVIOUSVALUE", 0, "char", 1, 0);
   this.setVCMap("AV51AllSelectedItems_AvailablePermissions", "vALLSELECTEDITEMS_AVAILABLEPERMISSIONS", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV72Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV13CurrentPage_AvailablePermissions", "vCURRENTPAGE_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV62CountSelectedItems_AvailablePermissions", "vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV23HasNextPage_AvailablePermissions", "vHASNEXTPAGE_AVAILABLEPERMISSIONS", 0, "boolean", 4, 0);
   this.setVCMap("AV46RowsPerPage_AvailablePermissions", "vROWSPERPAGE_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV12AvailablePermissions_SelectedRows", "vAVAILABLEPERMISSIONS_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV56S_Access", "vS_ACCESS", 0, "char", 1, 0);
   this.setVCMap("AV25I_LoadCount_AvailablePermissions", "vI_LOADCOUNT_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV61FieldValues_AvailablePermissions", "vFIELDVALUES_AVAILABLEPERMISSIONS", 0, "CollK2BSelectionItem.FieldValuesItem", 0, 0);
   this.setVCMap("AV68DeletedTag_AvailablePermissions", "vDELETEDTAG_AVAILABLEPERMISSIONS", 0, "char", 30, 0);
   this.setVCMap("AV53Index_AvailablePermissions", "vINDEX_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV49SelectedItem_AvailablePermissions", "vSELECTEDITEM_AVAILABLEPERMISSIONS", 0, "K2BSelectionItem", 0, 0);
   this.setVCMap("AV50FieldValue_AvailablePermissions", "vFIELDVALUE_AVAILABLEPERMISSIONS", 0, "K2BSelectionItem.FieldValuesItem", 0, 0);
   this.setVCMap("AV62CountSelectedItems_AvailablePermissions", "vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV79GXV6", "vGXV6", 0, "int", 8, 0);
   this.setVCMap("AV53Index_AvailablePermissions", "vINDEX_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV51AllSelectedItems_AvailablePermissions", "vALLSELECTEDITEMS_AVAILABLEPERMISSIONS", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV49SelectedItem_AvailablePermissions", "vSELECTEDITEM_AVAILABLEPERMISSIONS", 0, "K2BSelectionItem", 0, 0);
   this.setVCMap("AV50FieldValue_AvailablePermissions", "vFIELDVALUE_AVAILABLEPERMISSIONS", 0, "K2BSelectionItem.FieldValuesItem", 0, 0);
   this.setVCMap("AV46RowsPerPage_AvailablePermissions", "vROWSPERPAGE_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV13CurrentPage_AvailablePermissions", "vCURRENTPAGE_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV79GXV6", "vGXV6", 0, "int", 8, 0);
   this.setVCMap("AV23HasNextPage_AvailablePermissions", "vHASNEXTPAGE_AVAILABLEPERMISSIONS", 0, "boolean", 4, 0);
   this.setVCMap("AV39RoleId", "vROLEID", 0, "int", 12, 0);
   this.setVCMap("AV10ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV59PermissionAccessType_PreviousValue", "vPERMISSIONACCESSTYPE_PREVIOUSVALUE", 0, "char", 1, 0);
   this.setVCMap("AV60IsInherited_PreviousValue", "vISINHERITED_PREVIOUSVALUE", 0, "char", 1, 0);
   this.setVCMap("AV51AllSelectedItems_AvailablePermissions", "vALLSELECTEDITEMS_AVAILABLEPERMISSIONS", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV72Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV13CurrentPage_AvailablePermissions", "vCURRENTPAGE_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV62CountSelectedItems_AvailablePermissions", "vCOUNTSELECTEDITEMS_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV23HasNextPage_AvailablePermissions", "vHASNEXTPAGE_AVAILABLEPERMISSIONS", 0, "boolean", 4, 0);
   this.setVCMap("AV46RowsPerPage_AvailablePermissions", "vROWSPERPAGE_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV12AvailablePermissions_SelectedRows", "vAVAILABLEPERMISSIONS_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV56S_Access", "vS_ACCESS", 0, "char", 1, 0);
   this.setVCMap("AV25I_LoadCount_AvailablePermissions", "vI_LOADCOUNT_AVAILABLEPERMISSIONS", 0, "int", 4, 0);
   this.setVCMap("AV61FieldValues_AvailablePermissions", "vFIELDVALUES_AVAILABLEPERMISSIONS", 0, "CollK2BSelectionItem.FieldValuesItem", 0, 0);
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV39RoleId"});
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV10ApplicationId"});
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV59PermissionAccessType_PreviousValue"});
   AvailablepermissionsContainer.addRefreshingVar(this.GXValidFnc[62]);
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV60IsInherited_PreviousValue"});
   AvailablepermissionsContainer.addRefreshingVar(this.GXValidFnc[68]);
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV51AllSelectedItems_AvailablePermissions"});
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV72Pgmname"});
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV13CurrentPage_AvailablePermissions"});
   AvailablepermissionsContainer.addRefreshingVar(this.GXValidFnc[46]);
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV62CountSelectedItems_AvailablePermissions"});
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV23HasNextPage_AvailablePermissions"});
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV46RowsPerPage_AvailablePermissions"});
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV26Id", rfrProp:"Value", gxAttId:"Id"});
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV12AvailablePermissions_SelectedRows"});
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV56S_Access"});
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV25I_LoadCount_AvailablePermissions"});
   AvailablepermissionsContainer.addRefreshingVar({rfrVar:"AV61FieldValues_AvailablePermissions"});
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV39RoleId"});
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV10ApplicationId"});
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV59PermissionAccessType_PreviousValue"});
   AvailablepermissionsContainer.addRefreshingParm(this.GXValidFnc[62]);
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV60IsInherited_PreviousValue"});
   AvailablepermissionsContainer.addRefreshingParm(this.GXValidFnc[68]);
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV51AllSelectedItems_AvailablePermissions"});
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV72Pgmname"});
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV13CurrentPage_AvailablePermissions"});
   AvailablepermissionsContainer.addRefreshingParm(this.GXValidFnc[46]);
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV62CountSelectedItems_AvailablePermissions"});
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV23HasNextPage_AvailablePermissions"});
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV46RowsPerPage_AvailablePermissions"});
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV26Id", rfrProp:"Value", gxAttId:"Id"});
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV12AvailablePermissions_SelectedRows"});
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV56S_Access"});
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV25I_LoadCount_AvailablePermissions"});
   AvailablepermissionsContainer.addRefreshingParm({rfrVar:"AV61FieldValues_AvailablePermissions"});
   AvailablepermissionsContainer.addRefreshingParm(this.GXValidFnc[118]);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.roleaddpermission);});
