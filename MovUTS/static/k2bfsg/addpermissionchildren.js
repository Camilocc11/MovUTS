gx.evt.autoSkip = false;
gx.define('k2bfsg.addpermissionchildren', false, function () {
   this.ServerClass =  "k2bfsg.addpermissionchildren" ;
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
      this.AV15CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV40CountSelectedItems_Grid=gx.fn.getIntegerValue("vCOUNTSELECTEDITEMS_GRID",'.') ;
      this.AV37AllSelectedItems_Grid=gx.fn.getControlValue("vALLSELECTEDITEMS_GRID") ;
      this.AV58Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV18HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV53RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV41Grid_SelectedRows=gx.fn.getIntegerValue("vGRID_SELECTEDROWS",'.') ;
      this.AV17I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV51ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.AV24PermissionId=gx.fn.getControlValue("vPERMISSIONID") ;
      this.AV31MultiRowHasNext_Grid=gx.fn.getControlValue("vMULTIROWHASNEXT_GRID") ;
      this.AV32MultiRowIterator_Grid=gx.fn.getIntegerValue("vMULTIROWITERATOR_GRID",'.') ;
      this.AV38SelectedItems_Grid=gx.fn.getControlValue("vSELECTEDITEMS_GRID") ;
      this.AV44S_Id=gx.fn.getControlValue("vS_ID") ;
      this.AV36FieldValues_Grid=gx.fn.getControlValue("vFIELDVALUES_GRID") ;
      this.AV37AllSelectedItems_Grid=gx.fn.getControlValue("vALLSELECTEDITEMS_GRID") ;
      this.AV58Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV15CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV40CountSelectedItems_Grid=gx.fn.getIntegerValue("vCOUNTSELECTEDITEMS_GRID",'.') ;
      this.AV18HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV53RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV41Grid_SelectedRows=gx.fn.getIntegerValue("vGRID_SELECTEDROWS",'.') ;
      this.AV17I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV51ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.AV24PermissionId=gx.fn.getControlValue("vPERMISSIONID") ;
      this.AV53RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV40CountSelectedItems_Grid=gx.fn.getIntegerValue("vCOUNTSELECTEDITEMS_GRID",'.') ;
      this.AV65GXV5=gx.fn.getIntegerValue("vGXV5",'.') ;
      this.AV39Index_Grid=gx.fn.getIntegerValue("vINDEX_GRID",'.') ;
      this.AV37AllSelectedItems_Grid=gx.fn.getControlValue("vALLSELECTEDITEMS_GRID") ;
      this.AV34SelectedItem_Grid=gx.fn.getControlValue("vSELECTEDITEM_GRID") ;
      this.AV35FieldValue_Grid=gx.fn.getControlValue("vFIELDVALUE_GRID") ;
      this.AV35FieldValue_Grid=gx.fn.getControlValue("vFIELDVALUE_GRID") ;
      this.AV34SelectedItem_Grid=gx.fn.getControlValue("vSELECTEDITEM_GRID") ;
      this.AV39Index_Grid=gx.fn.getIntegerValue("vINDEX_GRID",'.') ;
      this.AV65GXV5=gx.fn.getIntegerValue("vGXV5",'.') ;
      this.AV15CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV18HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
   };
   this.s112_client=function()
   {
   };
   this.s132_client=function()
   {
   };
   this.s142_client=function()
   {
      this.s262_client();
      if ( this.AV40CountSelectedItems_Grid > 0 )
      {
         this.s272_client();
      }
      else
      {
         this.s282_client();
      }
   };
   this.s262_client=function()
   {
      this.AV40CountSelectedItems_Grid = gx.num.trunc( 0 ,0) ;
      this.AV65GXV5 = gx.num.trunc( 1 ,0) ;
      while ( this.AV65GXV5 <= this.AV37AllSelectedItems_Grid.length )
      {
         this.AV34SelectedItem_Grid =  this.AV37AllSelectedItems_Grid[this.AV65GXV5 - 1]  ;
         if ( this.AV34SelectedItem_Grid.IsSelected )
         {
            this.AV40CountSelectedItems_Grid = gx.num.trunc( this.AV40CountSelectedItems_Grid + 1 ,0) ;
         }
         this.AV65GXV5 = gx.num.trunc( this.AV65GXV5 + 1 ,0) ;
      }
   };
   this.s272_client=function()
   {
      gx.fn.setCtrlProperty("ADDSELECTED","Visible", true );
   };
   this.s282_client=function()
   {
      gx.fn.setCtrlProperty("ADDSELECTED","Visible", false );
   };
   this.s152_client=function()
   {
   };
   this.s202_client=function()
   {
   };
   this.s182_client=function()
   {
      gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption", "1" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV15CurrentPage_Grid-1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV15CurrentPage_Grid, 4, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV15CurrentPage_Grid+1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class", "K2BToolsTextBlock_PaginationNormal" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class", "K2BToolsTextBlock_PaginationNormal" );
      if ( ((0==this.AV15CurrentPage_Grid)) || ( this.AV15CurrentPage_Grid <= 1 ) )
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
         if ( this.AV15CurrentPage_Grid == 2 )
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
            if ( this.AV15CurrentPage_Grid == 3 )
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
      if ( ( this.AV15CurrentPage_Grid <= 1 ) && ( this.AV18HasNextPage_Grid == false ) )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", true );
      }
   };
   this.e183f1_client=function()
   {
      this.clearMessages();
      this.AV15CurrentPage_Grid = gx.num.trunc( 1 ,0) ;
      this.AV33CheckAll_Grid =  false  ;
      this.refreshOutputs([{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e173f1_client=function()
   {
      this.clearMessages();
      this.AV33CheckAll_Grid =  false  ;
      if ( this.AV15CurrentPage_Grid > 1 )
      {
         this.AV15CurrentPage_Grid = gx.num.trunc( this.AV15CurrentPage_Grid - 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e193f1_client=function()
   {
      this.clearMessages();
      this.AV33CheckAll_Grid =  false  ;
      if ( this.AV18HasNextPage_Grid )
      {
         this.AV15CurrentPage_Grid = gx.num.trunc( this.AV15CurrentPage_Grid + 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s212_client=function()
   {
      this.AV32MultiRowIterator_Grid = gx.num.trunc( 1 ,0) ;
   };
   this.s222_client=function()
   {
      this.AV42S_Name =  ''  ;
      this.AV43S_Dsc =  ''  ;
      this.AV44S_Id =  ''  ;
      this.AV46S_AppId = gx.num.trunc( 0 ,0) ;
      while ( ( this.AV32MultiRowIterator_Grid <= this.AV38SelectedItems_Grid.length ) && ! this.AV38SelectedItems_Grid[this.AV32MultiRowIterator_Grid - 1].IsSelected )
      {
         this.AV32MultiRowIterator_Grid = gx.num.trunc( this.AV32MultiRowIterator_Grid + 1 ,0) ;
      }
      if ( this.AV32MultiRowIterator_Grid > this.AV38SelectedItems_Grid.length )
      {
         this.AV31MultiRowHasNext_Grid =  false  ;
      }
      else
      {
         this.AV31MultiRowHasNext_Grid =  true  ;
         this.AV36FieldValues_Grid =  this.AV38SelectedItems_Grid[this.AV32MultiRowIterator_Grid - 1].FieldValues  ;
         this.s302_client();
      }
      this.AV32MultiRowIterator_Grid = gx.num.trunc( this.AV32MultiRowIterator_Grid + 1 ,0) ;
   };
   this.s302_client=function()
   {
      this.AV66GXV6 = gx.num.trunc( 1 ,0) ;
      while ( this.AV66GXV6 <= this.AV36FieldValues_Grid.length )
      {
         this.AV35FieldValue_Grid =  this.AV36FieldValues_Grid[this.AV66GXV6 - 1]  ;
         if ( this.AV35FieldValue_Grid.Name == "Name" )
         {
            this.AV42S_Name =  this.AV35FieldValue_Grid.Value  ;
         }
         else if ( this.AV35FieldValue_Grid.Name == "Dsc" )
         {
            this.AV43S_Dsc =  this.AV35FieldValue_Grid.Value  ;
         }
         else if ( this.AV35FieldValue_Grid.Name == "Id" )
         {
            this.AV44S_Id =  this.AV35FieldValue_Grid.Value  ;
         }
         else if ( this.AV35FieldValue_Grid.Name == "AppId" )
         {
            this.AV46S_AppId = gx.num.trunc( gx.num.val( this.AV35FieldValue_Grid.Value) ,0) ;
         }
         this.AV66GXV6 = gx.num.trunc( this.AV66GXV6 + 1 ,0) ;
      }
   };
   this.e213f2_client=function()
   {
      this.clearMessages();
      this.s242_client();
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:'MAINGRID_RESPONSIVETABLE_GRID',prop:'Class'},{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s242_client=function()
   {
      this.AV33CheckAll_Grid =  true  ;
      /* Start For Each Line in Grid */
      var rowIdx75 = 1 ;
      var currentRowIdx75 = gx.fn.currentGridRowImpl(75) ;
      var rowIdxS75 ;
      var gridObj75 = gx.O.getGridById(75,0) ;
      while ( rowIdx75 <= gridObj75.grid.rows.length )
      {
         rowIdxS75 =  gx.text.padl( gx.text.tostring( rowIdx75), 4, "0")  ;
         gridObj75.instanciateRow(gridObj75.grid.getRowById(rowIdx75 - 1));
         this.s252_client();
         rowIdx75 = gx.num.trunc( rowIdx75 + 1 ,0) ;
      }
      if ( currentRowIdx75 )
      {
         gridObj75.instanciateRow(currentRowIdx75);
      }
      this.s142_client();
      this.s292_client();
      if ( this.AV37AllSelectedItems_Grid.length > 0 )
      {
         gx.fn.setCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class", "Table"+" "+"K2BTools_GridSelecting" );
      }
      else
      {
         gx.fn.setCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class", "Table" );
      }
   };
   this.s252_client=function()
   {
      this.AV39Index_Grid = gx.num.trunc( 1 ,0) ;
      while ( this.AV39Index_Grid <= this.AV37AllSelectedItems_Grid.length )
      {
         if ( ( this.AV37AllSelectedItems_Grid[this.AV39Index_Grid - 1].SKCharacter1 == this.AV22Id ) && ( this.AV37AllSelectedItems_Grid[this.AV39Index_Grid - 1].SKNumeric1 == this.AV23AppId ) )
         {
            this.AV37AllSelectedItems_Grid.splice(this.AV39Index_Grid - 1, 1) ;
         }
         else
         {
            this.AV39Index_Grid = gx.num.trunc( this.AV39Index_Grid + 1 ,0) ;
         }
      }
      if ( this.AV30MultiRowItemSelected_Grid )
      {
         this.AV34SelectedItem_Grid =  {SKNumeric1:0,SKNumeric2:0,SKNumeric3:0,SKNumeric4:0,SKNumeric5:0,SKNumeric6:0,SKCharacter1:"",SKCharacter2:"",SKCharacter3:"",SKCharacter4:"",SKCharacter5:"",SKCharacter6:"",SKGUID1:'00000000-0000-0000-0000-000000000000',SKGUID2:'00000000-0000-0000-0000-000000000000',SKDateTime1:gx.date.nullDate(),SKDateTime2:gx.date.nullDate(),IsSelected:false,FieldValues:[]}  ;
         this.AV34SelectedItem_Grid.IsSelected =  this.AV30MultiRowItemSelected_Grid  ;
         this.AV34SelectedItem_Grid.SKCharacter1 =  this.AV22Id  ;
         this.AV34SelectedItem_Grid.SKNumeric1 = gx.num.trunc( this.AV23AppId ,0) ;
         this.AV35FieldValue_Grid =  {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""}  ;
         this.AV35FieldValue_Grid.Name =  "Name"  ;
         this.AV35FieldValue_Grid.Value =  this.AV20Name  ;
         this.AV34SelectedItem_Grid.FieldValues.push(this.AV35FieldValue_Grid) ;
         this.AV35FieldValue_Grid =  {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""}  ;
         this.AV35FieldValue_Grid.Name =  "Dsc"  ;
         this.AV35FieldValue_Grid.Value =  this.AV21Dsc  ;
         this.AV34SelectedItem_Grid.FieldValues.push(this.AV35FieldValue_Grid) ;
         this.AV35FieldValue_Grid =  {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""}  ;
         this.AV35FieldValue_Grid.Name =  "Id"  ;
         this.AV35FieldValue_Grid.Value =  this.AV22Id  ;
         this.AV34SelectedItem_Grid.FieldValues.push(this.AV35FieldValue_Grid) ;
         this.AV35FieldValue_Grid =  {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""}  ;
         this.AV35FieldValue_Grid.Name =  "AppId"  ;
         this.AV35FieldValue_Grid.Value =  gx.num.str( this.AV23AppId, 12, 0)  ;
         this.AV34SelectedItem_Grid.FieldValues.push(this.AV35FieldValue_Grid) ;
         this.AV37AllSelectedItems_Grid.push(this.AV34SelectedItem_Grid) ;
      }
      if ( ! this.AV30MultiRowItemSelected_Grid )
      {
         this.AV33CheckAll_Grid =  false  ;
      }
   };
   this.s292_client=function()
   {
   };
   this.e223f1_client=function()
   {
      this.clearMessages();
      /* Start For Each Line in Grid */
      var rowIdx75 = 1 ;
      var currentRowIdx75 = gx.fn.currentGridRowImpl(75) ;
      var rowIdxS75 ;
      var gridObj75 = gx.O.getGridById(75,0) ;
      while ( rowIdx75 <= gridObj75.grid.rows.length )
      {
         rowIdxS75 =  gx.text.padl( gx.text.tostring( rowIdx75), 4, "0")  ;
         gridObj75.instanciateRow(gridObj75.grid.getRowById(rowIdx75 - 1));
         if ( this.AV30MultiRowItemSelected_Grid != this.AV33CheckAll_Grid )
         {
            this.AV30MultiRowItemSelected_Grid =  this.AV33CheckAll_Grid  ;
            this.s252_client();
         }
         rowIdx75 = gx.num.trunc( rowIdx75 + 1 ,0) ;
         this.refreshRowOutputs([{av:'AV30MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',pic:''},{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]);
      }
      if ( currentRowIdx75 )
      {
         gridObj75.instanciateRow(currentRowIdx75);
      }
      this.s262_client();
      if ( this.AV40CountSelectedItems_Grid > 0 )
      {
         this.s272_client();
      }
      else
      {
         this.s282_client();
      }
      this.s292_client();
      this.refreshOutputs([{av:'AV30MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',pic:''},{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e203f1_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible") == false )
      {
         this.AV55GridSettingsRowsPerPage_Grid = gx.num.trunc( this.AV53RowsPerPage_Grid ,0) ;
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", false );
      }
      this.refreshOutputs([{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV55GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e113f2_client=function()
   {
      return this.executeServerEvent("'E_ADDSELECTED'", false, null, false, false);
   };
   this.e123f2_client=function()
   {
      return this.executeServerEvent("'SAVEGRIDSETTINGS(GRID)'", false, null, false, false);
   };
   this.e233f2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e243f2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,72,73,76,77,78,79,80,81,82,83,86,87,88,89,90,93,95,97,99,101,103,105,107,108,109,110,113,114,115];
   this.GXLastCtrlId =115;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",75,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.addpermissionchildren",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,true,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("Multirowitemselected_grid",76,"vMULTIROWITEMSELECTED_GRID","","","MultiRowItemSelected_Grid","boolean","true","false","e213f2_client",true,false,20,"px","K2BToolsCheckBoxColumn");
   GridContainer.addSingleLineEdit("Name",77,"vNAME","Nombre","","Name","char",570,"px",254,80,"left",null,[],"Name","Name",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   GridContainer.addSingleLineEdit("Dsc",78,"vDSC","Descripción","","Dsc","char",570,"px",254,80,"left",null,[],"Dsc","Dsc",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addSingleLineEdit("Id",79,"vID","Id","","Id","char",0,"px",40,40,"left",null,[],"Id","Id",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addSingleLineEdit("Appid",80,"vAPPID","Id","","AppId","int",0,"px",12,12,"right",null,[],"Appid","AppId",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 116, 28, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[23]={ id: 23, fld:"LAYOUTDEFINED_ONLYGENERICFILTERLAYOUT_GRID",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"LAYOUTDEFINED_SECTION6_GRID",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGENERICFILTER_GRID",gxz:"ZV27GenericFilter_Grid",gxold:"OV27GenericFilter_Grid",gxvar:"AV27GenericFilter_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV27GenericFilter_Grid=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV27GenericFilter_Grid=Value},v2c:function(){gx.fn.setControlValue("vGENERICFILTER_GRID",gx.O.AV27GenericFilter_Grid,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV27GenericFilter_Grid=this.val()},val:function(){return gx.fn.getControlValue("vGENERICFILTER_GRID")},nac:gx.falseFn};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"LAYOUTDEFINED_TABLE7_GRID",grid:0};
   GXValidFnc[34]={ id: 34, fld:"GRIDSETTINGS_GLOBALTABLE_GRID",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"GRIDSETTINGS_LABELGRID",grid:0,evt:"e203f1_client"};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"GRIDSETTINGS_CONTENTOUTERTABLEGRID",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"GSLAYOUTDEFINED_GRIDTABLE1",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"GRIDCUSTOMIZATIONCONTAINER_GRID",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"GSLAYOUTDEFINED_GRIDRUNTIMECOLUMNSELECTIONTB", format:0,grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"GSLAYOUTDEFINED_GRIDCUSTOMIZATIONCOLLAPSIBLESECTION",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"ROWSPERPAGECONTAINER_GRID",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id:57 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDSETTINGSROWSPERPAGE_GRID",gxz:"ZV55GridSettingsRowsPerPage_Grid",gxold:"OV55GridSettingsRowsPerPage_Grid",gxvar:"AV55GridSettingsRowsPerPage_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV55GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV55GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vGRIDSETTINGSROWSPERPAGE_GRID",gx.O.AV55GridSettingsRowsPerPage_Grid)},c2v:function(){if(this.val()!==undefined)gx.O.AV55GridSettingsRowsPerPage_Grid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRIDSETTINGSROWSPERPAGE_GRID",'.')},nac:gx.falseFn};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"GRIDSETTINGS_SAVEGRID",grid:0,evt:"e123f2_client"};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id: 66, fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"TABLEGRIDCONTAINER_GRID",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id:73 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCHECKALL_GRID",gxz:"ZV33CheckAll_Grid",gxold:"OV33CheckAll_Grid",gxvar:"AV33CheckAll_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV33CheckAll_Grid=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV33CheckAll_Grid=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCHECKALL_GRID",gx.O.AV33CheckAll_Grid,true)},c2v:function(){if(this.val()!==undefined)gx.O.AV33CheckAll_Grid=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCHECKALL_GRID")},nac:gx.falseFn,evt:"e223f1_client",values:['true','false']};
   GXValidFnc[76]={ id:76 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:75,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMULTIROWITEMSELECTED_GRID",gxz:"ZV30MultiRowItemSelected_Grid",gxold:"OV30MultiRowItemSelected_Grid",gxvar:"AV30MultiRowItemSelected_Grid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV30MultiRowItemSelected_Grid=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV30MultiRowItemSelected_Grid=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vMULTIROWITEMSELECTED_GRID",row || gx.fn.currentGridRowImpl(75),gx.O.AV30MultiRowItemSelected_Grid,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV30MultiRowItemSelected_Grid=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("vMULTIROWITEMSELECTED_GRID",row || gx.fn.currentGridRowImpl(75))},nac:gx.falseFn,evt:"e213f2_client",values:['true','false']};
   GXValidFnc[77]={ id:77 ,lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:75,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV20Name",gxold:"OV20Name",gxvar:"AV20Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV20Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV20Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(75),gx.O.AV20Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV20Name=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(75))},nac:gx.falseFn};
   GXValidFnc[78]={ id:78 ,lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:75,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",gxz:"ZV21Dsc",gxold:"OV21Dsc",gxvar:"AV21Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV21Dsc=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV21Dsc=Value},v2c:function(row){gx.fn.setGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(75),gx.O.AV21Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV21Dsc=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(75))},nac:gx.falseFn};
   GXValidFnc[79]={ id:79 ,lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:75,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV22Id",gxold:"OV22Id",gxvar:"AV22Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV22Id=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV22Id=Value},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(75),gx.O.AV22Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV22Id=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vID",row || gx.fn.currentGridRowImpl(75))},nac:gx.falseFn};
   GXValidFnc[80]={ id:80 ,lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:75,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAPPID",gxz:"ZV23AppId",gxold:"OV23AppId",gxvar:"AV23AppId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.AV23AppId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV23AppId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vAPPID",row || gx.fn.currentGridRowImpl(75),gx.O.AV23AppId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV23AppId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("vAPPID",row || gx.fn.currentGridRowImpl(75),'.')},nac:gx.falseFn};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id: 83, fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};
   GXValidFnc[86]={ id: 86, fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID", format:0,grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   GXValidFnc[89]={ id: 89, fld:"LAYOUTDEFINED_SECTION8_GRID",grid:0};
   GXValidFnc[90]={ id: 90, fld:"PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID",grid:0};
   GXValidFnc[93]={ id: 93, fld:"PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e173f1_client"};
   GXValidFnc[95]={ id: 95, fld:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e183f1_client"};
   GXValidFnc[97]={ id: 97, fld:"PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[99]={ id: 99, fld:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e173f1_client"};
   GXValidFnc[101]={ id: 101, fld:"PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[103]={ id: 103, fld:"PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e193f1_client"};
   GXValidFnc[105]={ id: 105, fld:"PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[107]={ id: 107, fld:"PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e193f1_client"};
   GXValidFnc[108]={ id: 108, fld:"",grid:0};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id: 110, fld:"ACTIONS_GRID_BOTTOM",grid:0};
   GXValidFnc[113]={ id: 113, fld:"ADDSELECTED",grid:0,evt:"e113f2_client"};
   GXValidFnc[114]={ id: 114, fld:"",grid:0};
   GXValidFnc[115]={ id: 115, fld:"",grid:0};
   this.AV27GenericFilter_Grid = "" ;
   this.ZV27GenericFilter_Grid = "" ;
   this.OV27GenericFilter_Grid = "" ;
   this.AV55GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV55GridSettingsRowsPerPage_Grid = 0 ;
   this.OV55GridSettingsRowsPerPage_Grid = 0 ;
   this.AV33CheckAll_Grid = false ;
   this.ZV33CheckAll_Grid = false ;
   this.OV33CheckAll_Grid = false ;
   this.ZV30MultiRowItemSelected_Grid = false ;
   this.OV30MultiRowItemSelected_Grid = false ;
   this.ZV20Name = "" ;
   this.OV20Name = "" ;
   this.ZV21Dsc = "" ;
   this.OV21Dsc = "" ;
   this.ZV22Id = "" ;
   this.OV22Id = "" ;
   this.ZV23AppId = 0 ;
   this.OV23AppId = 0 ;
   this.AV27GenericFilter_Grid = "" ;
   this.AV55GridSettingsRowsPerPage_Grid = 0 ;
   this.AV33CheckAll_Grid = false ;
   this.AV51ApplicationId = 0 ;
   this.AV24PermissionId = "" ;
   this.AV30MultiRowItemSelected_Grid = false ;
   this.AV20Name = "" ;
   this.AV21Dsc = "" ;
   this.AV22Id = "" ;
   this.AV23AppId = 0 ;
   this.AV15CurrentPage_Grid = 0 ;
   this.AV40CountSelectedItems_Grid = 0 ;
   this.AV37AllSelectedItems_Grid = [ ] ;
   this.AV58Pgmname = "" ;
   this.AV18HasNextPage_Grid = false ;
   this.AV53RowsPerPage_Grid = 0 ;
   this.AV41Grid_SelectedRows = 0 ;
   this.AV17I_LoadCount_Grid = 0 ;
   this.AV31MultiRowHasNext_Grid = false ;
   this.AV32MultiRowIterator_Grid = 0 ;
   this.AV38SelectedItems_Grid = [ ] ;
   this.AV44S_Id = "" ;
   this.AV36FieldValues_Grid = [ ] ;
   this.AV65GXV5 = 0 ;
   this.AV39Index_Grid = 0 ;
   this.AV34SelectedItem_Grid = {SKNumeric1:0,SKNumeric2:0,SKNumeric3:0,SKNumeric4:0,SKNumeric5:0,SKNumeric6:0,SKCharacter1:"",SKCharacter2:"",SKCharacter3:"",SKCharacter4:"",SKCharacter5:"",SKCharacter6:"",SKGUID1:'00000000-0000-0000-0000-000000000000',SKGUID2:'00000000-0000-0000-0000-000000000000',SKDateTime1:gx.date.nullDate(),SKDateTime2:gx.date.nullDate(),IsSelected:false,FieldValues:[]} ;
   this.AV35FieldValue_Grid = {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""} ;
   this.AV66GXV6 = 0 ;
   this.AV46S_AppId = 0 ;
   this.AV43S_Dsc = "" ;
   this.AV42S_Name = "" ;
   this.Events = {"e113f2_client": ["'E_ADDSELECTED'", true] ,"e123f2_client": ["'SAVEGRIDSETTINGS(GRID)'", true] ,"e233f2_client": ["ENTER", true] ,"e243f2_client": ["CANCEL", true] ,"e183f1_client": ["'PAGINGFIRST(GRID)'", false] ,"e173f1_client": ["'PAGINGPREVIOUS(GRID)'", false] ,"e193f1_client": ["'PAGINGNEXT(GRID)'", false] ,"e213f2_client": ["VMULTIROWITEMSELECTED_GRID.CLICK", false] ,"e223f1_client": ["VCHECKALL_GRID.CLICK", false] ,"e203f1_client": ["'TOGGLEGRIDSETTINGS(GRID)'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV27GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV53RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV22Id',fld:'vID',pic:'',hsh:true},{av:'AV23AppId',fld:'vAPPID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV41Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV51ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV24PermissionId',fld:'vPERMISSIONID',pic:'',hsh:true},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV41Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'AV53RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV55GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV27GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV27GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{ctrl:'GRID',prop:'Backcolorstyle'},{av:'AV41Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:'MAINGRID_RESPONSIVETABLE_GRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV53RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV22Id',fld:'vID',pic:'',hsh:true},{av:'AV23AppId',fld:'vAPPID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV41Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV51ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV27GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV24PermissionId',fld:'vPERMISSIONID',pic:'',hsh:true},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_GRID',prop:'Visible'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV30MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',pic:''},{av:'AV41Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV23AppId',fld:'vAPPID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV20Name',fld:'vNAME',pic:'',hsh:true},{av:'AV21Dsc',fld:'vDSC',pic:'',hsh:true},{av:'AV22Id',fld:'vID',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["'PAGINGFIRST(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV27GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV53RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV22Id',fld:'vID',pic:'',hsh:true},{av:'AV23AppId',fld:'vAPPID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV41Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV51ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV24PermissionId',fld:'vPERMISSIONID',pic:'',hsh:true},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV41Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["'PAGINGPREVIOUS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV27GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV53RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV22Id',fld:'vID',pic:'',hsh:true},{av:'AV23AppId',fld:'vAPPID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV41Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV51ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV24PermissionId',fld:'vPERMISSIONID',pic:'',hsh:true},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV41Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["'PAGINGNEXT(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV27GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV53RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV22Id',fld:'vID',pic:'',hsh:true},{av:'AV23AppId',fld:'vAPPID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV41Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV51ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV24PermissionId',fld:'vPERMISSIONID',pic:'',hsh:true},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV41Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["'E_ADDSELECTED'"] = [[{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV31MultiRowHasNext_Grid',fld:'vMULTIROWHASNEXT_GRID',pic:''},{av:'AV32MultiRowIterator_Grid',fld:'vMULTIROWITERATOR_GRID',pic:'ZZZ9'},{av:'AV38SelectedItems_Grid',fld:'vSELECTEDITEMS_GRID',pic:''},{av:'AV51ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV24PermissionId',fld:'vPERMISSIONID',pic:'',hsh:true},{av:'AV44S_Id',fld:'vS_ID',pic:''},{av:'AV36FieldValues_Grid',fld:'vFIELDVALUES_GRID',pic:''},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'AV38SelectedItems_Grid',fld:'vSELECTEDITEMS_GRID',pic:''},{av:'AV32MultiRowIterator_Grid',fld:'vMULTIROWITERATOR_GRID',pic:'ZZZ9'},{av:'AV44S_Id',fld:'vS_ID',pic:''},{av:'AV36FieldValues_Grid',fld:'vFIELDVALUES_GRID',pic:''},{av:'AV31MultiRowHasNext_Grid',fld:'vMULTIROWHASNEXT_GRID',pic:''},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["VMULTIROWITEMSELECTED_GRID.CLICK"] = [[{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV22Id',fld:'vID',grid:75,pic:'',hsh:true},{av:'GRID_nFirstRecordOnPage'},{av:'nRC_GXsfl_75',ctrl:'GRID',grid:75,prop:'GridRC'},{av:'AV23AppId',fld:'vAPPID',grid:75,pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV30MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',grid:75,pic:''},{av:'AV20Name',fld:'vNAME',grid:75,pic:'',hsh:true},{av:'AV21Dsc',fld:'vDSC',grid:75,pic:'',hsh:true},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:'MAINGRID_RESPONSIVETABLE_GRID',prop:'Class'},{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["VCHECKALL_GRID.CLICK"] = [[{av:'AV30MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',grid:75,pic:''},{av:'GRID_nFirstRecordOnPage'},{av:'nRC_GXsfl_75',ctrl:'GRID',grid:75,prop:'GridRC'},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV22Id',fld:'vID',grid:75,pic:'',hsh:true},{av:'AV23AppId',fld:'vAPPID',grid:75,pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV20Name',fld:'vNAME',grid:75,pic:'',hsh:true},{av:'AV21Dsc',fld:'vDSC',grid:75,pic:'',hsh:true},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'AV30MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',pic:''},{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["'TOGGLEGRIDSETTINGS(GRID)'"] = [[{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV53RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV55GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["'SAVEGRIDSETTINGS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV37AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV27GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV53RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV22Id',fld:'vID',pic:'',hsh:true},{av:'AV23AppId',fld:'vAPPID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV41Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV51ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV24PermissionId',fld:'vPERMISSIONID',pic:'',hsh:true},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV55GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'AV53RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV41Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV40CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV33CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.setVCMap("AV15CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV40CountSelectedItems_Grid", "vCOUNTSELECTEDITEMS_GRID", 0, "int", 4, 0);
   this.setVCMap("AV37AllSelectedItems_Grid", "vALLSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV58Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV18HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV53RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV41Grid_SelectedRows", "vGRID_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV17I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV51ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV24PermissionId", "vPERMISSIONID", 0, "char", 40, 0);
   this.setVCMap("AV31MultiRowHasNext_Grid", "vMULTIROWHASNEXT_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV32MultiRowIterator_Grid", "vMULTIROWITERATOR_GRID", 0, "int", 4, 0);
   this.setVCMap("AV38SelectedItems_Grid", "vSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV44S_Id", "vS_ID", 0, "char", 40, 0);
   this.setVCMap("AV36FieldValues_Grid", "vFIELDVALUES_GRID", 0, "CollK2BSelectionItem.FieldValuesItem", 0, 0);
   this.setVCMap("AV37AllSelectedItems_Grid", "vALLSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV58Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV15CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV40CountSelectedItems_Grid", "vCOUNTSELECTEDITEMS_GRID", 0, "int", 4, 0);
   this.setVCMap("AV18HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV53RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV41Grid_SelectedRows", "vGRID_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV17I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV51ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV24PermissionId", "vPERMISSIONID", 0, "char", 40, 0);
   this.setVCMap("AV53RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV40CountSelectedItems_Grid", "vCOUNTSELECTEDITEMS_GRID", 0, "int", 4, 0);
   this.setVCMap("AV65GXV5", "vGXV5", 0, "int", 8, 0);
   this.setVCMap("AV39Index_Grid", "vINDEX_GRID", 0, "int", 4, 0);
   this.setVCMap("AV37AllSelectedItems_Grid", "vALLSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV34SelectedItem_Grid", "vSELECTEDITEM_GRID", 0, "K2BSelectionItem", 0, 0);
   this.setVCMap("AV35FieldValue_Grid", "vFIELDVALUE_GRID", 0, "K2BSelectionItem.FieldValuesItem", 0, 0);
   this.setVCMap("AV35FieldValue_Grid", "vFIELDVALUE_GRID", 0, "K2BSelectionItem.FieldValuesItem", 0, 0);
   this.setVCMap("AV34SelectedItem_Grid", "vSELECTEDITEM_GRID", 0, "K2BSelectionItem", 0, 0);
   this.setVCMap("AV39Index_Grid", "vINDEX_GRID", 0, "int", 4, 0);
   this.setVCMap("AV65GXV5", "vGXV5", 0, "int", 8, 0);
   this.setVCMap("AV15CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV18HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV37AllSelectedItems_Grid", "vALLSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV58Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV15CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV40CountSelectedItems_Grid", "vCOUNTSELECTEDITEMS_GRID", 0, "int", 4, 0);
   this.setVCMap("AV18HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV53RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV41Grid_SelectedRows", "vGRID_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV17I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV51ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV24PermissionId", "vPERMISSIONID", 0, "char", 40, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV37AllSelectedItems_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV58Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV15CurrentPage_Grid"});
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar({rfrVar:"AV40CountSelectedItems_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV18HasNextPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV53RowsPerPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV22Id", rfrProp:"Value", gxAttId:"Id"});
   GridContainer.addRefreshingVar({rfrVar:"AV23AppId", rfrProp:"Value", gxAttId:"Appid"});
   GridContainer.addRefreshingVar({rfrVar:"AV41Grid_SelectedRows"});
   GridContainer.addRefreshingVar({rfrVar:"AV17I_LoadCount_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV51ApplicationId"});
   GridContainer.addRefreshingVar({rfrVar:"AV24PermissionId"});
   GridContainer.addRefreshingParm({rfrVar:"AV37AllSelectedItems_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV58Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV15CurrentPage_Grid"});
   GridContainer.addRefreshingParm(this.GXValidFnc[28]);
   GridContainer.addRefreshingParm({rfrVar:"AV40CountSelectedItems_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV18HasNextPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV53RowsPerPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV22Id", rfrProp:"Value", gxAttId:"Id"});
   GridContainer.addRefreshingParm({rfrVar:"AV23AppId", rfrProp:"Value", gxAttId:"Appid"});
   GridContainer.addRefreshingParm({rfrVar:"AV41Grid_SelectedRows"});
   GridContainer.addRefreshingParm({rfrVar:"AV17I_LoadCount_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV51ApplicationId"});
   GridContainer.addRefreshingParm({rfrVar:"AV24PermissionId"});
   GridContainer.addRefreshingParm(this.GXValidFnc[73]);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.addpermissionchildren);});
