gx.evt.autoSkip = false;
gx.define('k2bfsg.roleselectchildren', true, function (CmpContext) {
   this.ServerClass =  "k2bfsg.roleselectchildren" ;
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
      this.AV38CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV35Reload_MultipleSelection=gx.fn.getControlValue("vRELOAD_MULTIPLESELECTION") ;
      this.AV32MultipleSelectionItems=gx.fn.getControlValue("vMULTIPLESELECTIONITEMS") ;
      this.AV7RoleId=gx.fn.getIntegerValue("vROLEID",'.') ;
      this.AV57AllSelectedItems_Grid=gx.fn.getControlValue("vALLSELECTEDITEMS_GRID") ;
      this.AV60Grid_SelectedRows=gx.fn.getIntegerValue("vGRID_SELECTEDROWS",'.') ;
      this.AV43I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV19I_LoadCount_Skip=gx.fn.getIntegerValue("vI_LOADCOUNT_SKIP",'.') ;
      this.AV31InCollection=gx.fn.getControlValue("vINCOLLECTION") ;
      this.AV84Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV37SelectedGridLoadCount_MultipleSelection=gx.fn.getIntegerValue("vSELECTEDGRIDLOADCOUNT_MULTIPLESELECTION",'.') ;
      this.AV41MultiRowHasNext_Grid=gx.fn.getControlValue("vMULTIROWHASNEXT_GRID") ;
      this.AV61S_Name=gx.fn.getControlValue("vS_NAME") ;
      this.AV62S_Id=gx.fn.getIntegerValue("vS_ID",'.') ;
      this.AV42MultiRowIterator_Grid=gx.fn.getIntegerValue("vMULTIROWITERATOR_GRID",'.') ;
      this.AV58SelectedItems_Grid=gx.fn.getControlValue("vSELECTEDITEMS_GRID") ;
      this.AV66FieldValues_Grid=gx.fn.getControlValue("vFIELDVALUES_GRID") ;
      this.AV71DeletedTag_Grid=gx.fn.getControlValue("vDELETEDTAG_GRID") ;
      this.AV38CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV84Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV57AllSelectedItems_Grid=gx.fn.getControlValue("vALLSELECTEDITEMS_GRID") ;
      this.AV60Grid_SelectedRows=gx.fn.getIntegerValue("vGRID_SELECTEDROWS",'.') ;
      this.AV7RoleId=gx.fn.getIntegerValue("vROLEID",'.') ;
      this.AV43I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV19I_LoadCount_Skip=gx.fn.getIntegerValue("vI_LOADCOUNT_SKIP",'.') ;
      this.AV31InCollection=gx.fn.getControlValue("vINCOLLECTION") ;
      this.AV32MultipleSelectionItems=gx.fn.getControlValue("vMULTIPLESELECTIONITEMS") ;
      this.AV71DeletedTag_Grid=gx.fn.getControlValue("vDELETEDTAG_GRID") ;
      this.AV59Index_Grid=gx.fn.getIntegerValue("vINDEX_GRID",'.') ;
      this.AV57AllSelectedItems_Grid=gx.fn.getControlValue("vALLSELECTEDITEMS_GRID") ;
      this.AV55SelectedItem_Grid=gx.fn.getControlValue("vSELECTEDITEM_GRID") ;
      this.AV56FieldValue_Grid=gx.fn.getControlValue("vFIELDVALUE_GRID") ;
      this.AV56FieldValue_Grid=gx.fn.getControlValue("vFIELDVALUE_GRID") ;
      this.AV55SelectedItem_Grid=gx.fn.getControlValue("vSELECTEDITEM_GRID") ;
      this.AV59Index_Grid=gx.fn.getIntegerValue("vINDEX_GRID",'.') ;
   };
   this.s142_client=function()
   {
   };
   this.s152_client=function()
   {
      gx.fn.setCtrlProperty("vSELECTED_ID","Visible", false );
   };
   this.s163_client=function()
   {
   };
   this.s212_client=function()
   {
      this.AV31InCollection =  false  ;
      this.AV83GXV9 = gx.num.trunc( 1 ,0) ;
      while ( this.AV83GXV9 <= this.AV32MultipleSelectionItems.length )
      {
         this.AV33MultipleSelectionItem =  this.AV32MultipleSelectionItems[this.AV83GXV9 - 1]  ;
         if ( this.AV47Id == this.AV33MultipleSelectionItem.Id )
         {
            this.AV31InCollection =  true  ;
            break;
         }
         this.AV83GXV9 = gx.num.trunc( this.AV83GXV9 + 1 ,0) ;
      }
   };
   this.s192_client=function()
   {
   };
   this.s222_client=function()
   {
   };
   this.s232_client=function()
   {
   };
   this.e232s1_client=function()
   {
      this.clearMessages();
      /* Start For Each Line in Selectedgrid_multipleselection */
      var rowIdx106 = 1 ;
      var currentRowIdx106 = gx.fn.currentGridRowImpl(106) ;
      var rowIdxS106 ;
      var gridObj106 = gx.O.getGridById(106,0) ;
      while ( rowIdx106 <= gridObj106.grid.rows.length )
      {
         rowIdxS106 =  gx.text.padl( gx.text.tostring( rowIdx106), 4, "0")  ;
         gridObj106.instanciateRow(gridObj106.grid.getRowById(rowIdx106 - 1));
         if ( this.AV53SelectedCheckAll_MultipleSelection != this.AV36SelectedGridMultiRowItemSelected_MultipleSelection )
         {
            this.AV36SelectedGridMultiRowItemSelected_MultipleSelection =  this.AV53SelectedCheckAll_MultipleSelection  ;
         }
         rowIdx106 = gx.num.trunc( rowIdx106 + 1 ,0) ;
         this.refreshRowOutputs([{av:'AV36SelectedGridMultiRowItemSelected_MultipleSelection',fld:'vSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]);
      }
      if ( currentRowIdx106 )
      {
         gridObj106.instanciateRow(currentRowIdx106);
      }
      this.refreshOutputs([{av:'AV36SelectedGridMultiRowItemSelected_MultipleSelection',fld:'vSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e242s2_client=function()
   {
      this.clearMessages();
      this.s252_client();
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:'MAINGRID_RESPONSIVETABLE_GRID',prop:'Class'},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s252_client=function()
   {
      this.AV54CheckAll_Grid =  true  ;
      /* Start For Each Line in Grid */
      var rowIdx70 = 1 ;
      var currentRowIdx70 = gx.fn.currentGridRowImpl(70) ;
      var rowIdxS70 ;
      var gridObj70 = gx.O.getGridById(70,0) ;
      while ( rowIdx70 <= gridObj70.grid.rows.length )
      {
         rowIdxS70 =  gx.text.padl( gx.text.tostring( rowIdx70), 4, "0")  ;
         gridObj70.instanciateRow(gridObj70.grid.getRowById(rowIdx70 - 1));
         this.s262_client();
         rowIdx70 = gx.num.trunc( rowIdx70 + 1 ,0) ;
      }
      if ( currentRowIdx70 )
      {
         gridObj70.instanciateRow(currentRowIdx70);
      }
      this.s272_client();
      if ( this.AV57AllSelectedItems_Grid.length > 0 )
      {
         gx.fn.setCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class", "Table"+" "+"K2BTools_GridSelecting" );
      }
      else
      {
         gx.fn.setCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class", "Table" );
      }
   };
   this.s262_client=function()
   {
      this.AV59Index_Grid = gx.num.trunc( 1 ,0) ;
      while ( this.AV59Index_Grid <= this.AV57AllSelectedItems_Grid.length )
      {
         if ( this.AV57AllSelectedItems_Grid[this.AV59Index_Grid - 1].SKNumeric1 == this.AV47Id )
         {
            this.AV57AllSelectedItems_Grid.splice(this.AV59Index_Grid - 1, 1) ;
         }
         else
         {
            this.AV59Index_Grid = gx.num.trunc( this.AV59Index_Grid + 1 ,0) ;
         }
      }
      if ( this.AV40MultiRowItemSelected_Grid )
      {
         this.AV55SelectedItem_Grid =  {SKNumeric1:0,SKNumeric2:0,SKNumeric3:0,SKNumeric4:0,SKNumeric5:0,SKNumeric6:0,SKCharacter1:"",SKCharacter2:"",SKCharacter3:"",SKCharacter4:"",SKCharacter5:"",SKCharacter6:"",SKGUID1:'00000000-0000-0000-0000-000000000000',SKGUID2:'00000000-0000-0000-0000-000000000000',SKDateTime1:gx.date.nullDate(),SKDateTime2:gx.date.nullDate(),IsSelected:false,FieldValues:[]}  ;
         this.AV55SelectedItem_Grid.IsSelected =  this.AV40MultiRowItemSelected_Grid  ;
         this.AV55SelectedItem_Grid.SKNumeric1 = gx.num.trunc( this.AV47Id ,0) ;
         this.AV56FieldValue_Grid =  {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""}  ;
         this.AV56FieldValue_Grid.Name =  "Name"  ;
         this.AV56FieldValue_Grid.Value =  this.AV45Name  ;
         this.AV55SelectedItem_Grid.FieldValues.push(this.AV56FieldValue_Grid) ;
         this.AV56FieldValue_Grid =  {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""}  ;
         this.AV56FieldValue_Grid.Name =  "Id"  ;
         this.AV56FieldValue_Grid.Value =  gx.num.str( this.AV47Id, 12, 0)  ;
         this.AV55SelectedItem_Grid.FieldValues.push(this.AV56FieldValue_Grid) ;
         this.AV57AllSelectedItems_Grid.push(this.AV55SelectedItem_Grid) ;
      }
      if ( ! this.AV40MultiRowItemSelected_Grid )
      {
         this.AV54CheckAll_Grid =  false  ;
      }
   };
   this.s272_client=function()
   {
   };
   this.e252s1_client=function()
   {
      this.clearMessages();
      /* Start For Each Line in Grid */
      var rowIdx70 = 1 ;
      var currentRowIdx70 = gx.fn.currentGridRowImpl(70) ;
      var rowIdxS70 ;
      var gridObj70 = gx.O.getGridById(70,0) ;
      while ( rowIdx70 <= gridObj70.grid.rows.length )
      {
         rowIdxS70 =  gx.text.padl( gx.text.tostring( rowIdx70), 4, "0")  ;
         gridObj70.instanciateRow(gridObj70.grid.getRowById(rowIdx70 - 1));
         if ( this.AV40MultiRowItemSelected_Grid != this.AV54CheckAll_Grid )
         {
            this.AV40MultiRowItemSelected_Grid =  this.AV54CheckAll_Grid  ;
            this.s262_client();
         }
         rowIdx70 = gx.num.trunc( rowIdx70 + 1 ,0) ;
         this.refreshRowOutputs([{av:'AV40MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',pic:''},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]);
      }
      if ( currentRowIdx70 )
      {
         gridObj70.instanciateRow(currentRowIdx70);
      }
      this.s272_client();
      this.refreshOutputs([{av:'AV40MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',pic:''},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e262s3_client=function()
   {
      this.clearMessages();
      this.AV53SelectedCheckAll_MultipleSelection =  true  ;
      /* Start For Each Line in Selectedgrid_multipleselection */
      var rowIdx106 = 1 ;
      var currentRowIdx106 = gx.fn.currentGridRowImpl(106) ;
      var rowIdxS106 ;
      var gridObj106 = gx.O.getGridById(106,0) ;
      while ( rowIdx106 <= gridObj106.grid.rows.length )
      {
         rowIdxS106 =  gx.text.padl( gx.text.tostring( rowIdx106), 4, "0")  ;
         gridObj106.instanciateRow(gridObj106.grid.getRowById(rowIdx106 - 1));
         if ( ! this.AV36SelectedGridMultiRowItemSelected_MultipleSelection )
         {
            this.AV53SelectedCheckAll_MultipleSelection =  false  ;
         }
         rowIdx106 = gx.num.trunc( rowIdx106 + 1 ,0) ;
         this.refreshRowOutputs([{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]);
      }
      if ( currentRowIdx106 )
      {
         gridObj106.instanciateRow(currentRowIdx106);
      }
      this.refreshOutputs([{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s292_client=function()
   {
      this.AV42MultiRowIterator_Grid = gx.num.trunc( 1 ,0) ;
   };
   this.s282_client=function()
   {
      this.AV61S_Name =  ''  ;
      this.AV62S_Id = gx.num.trunc( 0 ,0) ;
      while ( ( this.AV42MultiRowIterator_Grid <= this.AV58SelectedItems_Grid.length ) && ! this.AV58SelectedItems_Grid[this.AV42MultiRowIterator_Grid - 1].IsSelected )
      {
         this.AV42MultiRowIterator_Grid = gx.num.trunc( this.AV42MultiRowIterator_Grid + 1 ,0) ;
      }
      if ( this.AV42MultiRowIterator_Grid > this.AV58SelectedItems_Grid.length )
      {
         this.AV41MultiRowHasNext_Grid =  false  ;
      }
      else
      {
         this.AV41MultiRowHasNext_Grid =  true  ;
         this.AV66FieldValues_Grid =  this.AV58SelectedItems_Grid[this.AV42MultiRowIterator_Grid - 1].FieldValues  ;
         this.s302_client();
      }
      this.AV42MultiRowIterator_Grid = gx.num.trunc( this.AV42MultiRowIterator_Grid + 1 ,0) ;
   };
   this.s302_client=function()
   {
      this.AV91GXV12 = gx.num.trunc( 1 ,0) ;
      while ( this.AV91GXV12 <= this.AV66FieldValues_Grid.length )
      {
         this.AV56FieldValue_Grid =  this.AV66FieldValues_Grid[this.AV91GXV12 - 1]  ;
         if ( this.AV56FieldValue_Grid.Name == "Name" )
         {
            this.AV61S_Name =  this.AV56FieldValue_Grid.Value  ;
         }
         else if ( this.AV56FieldValue_Grid.Name == "Id" )
         {
            this.AV62S_Id = gx.num.trunc( gx.num.val( this.AV56FieldValue_Grid.Value) ,0) ;
         }
         this.AV91GXV12 = gx.num.trunc( this.AV91GXV12 + 1 ,0) ;
      }
   };
   this.e272s1_client=function()
   {
      this.clearMessages();
      if ( this.AV71DeletedTag_Grid == "FilName" )
      {
         this.AV49FilName =  ''  ;
      }
      this.refreshOutputs([{av:'AV49FilName',fld:'vFILNAME',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV49FilName',fld:'vFILNAME',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e112s2_client=function()
   {
      return this.executeServerEvent("'E_CONFIRM'", false, null, false, false);
   };
   this.e162s2_client=function()
   {
      this.setEventParameters([["Name","vNAME","AV45Name"],["Id","vID","AV47Id"]], arguments[2]);
      return this.executeServerEvent("SELECTEDGRID_MULTIPLESELECTION.DROP", true, null, true, false);
   };
   this.e172s2selected_id_client=function()
   {
      this.setEventParameters([["Selected_Id","vSELECTED_ID","AV48Selected_Id"]], arguments[2]);
      return this.executeServerEvent("GRID.DROP", true, null, true, false);
   };
   this.e122s2_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID.CLICK", true, null, false, true);
   };
   this.e132s2_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID.CLICK", true, null, false, true);
   };
   this.e142s2_client=function()
   {
      return this.executeServerEvent("'ADD(MULTIPLESELECTION)'", true, null, false, false);
   };
   this.e152s2_client=function()
   {
      return this.executeServerEvent("'REMOVE(MULTIPLESELECTION)'", true, null, false, false);
   };
   this.e282s2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e292s2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,56,57,58,59,60,61,62,63,64,67,68,71,72,73,74,75,76,79,80,81,82,83,84,85,86,87,88,89,90,93,94,95,97,98,99,100,103,104,107,108,109,110,111,112,113,114,115,118,119,120];
   this.GXLastCtrlId =120;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",70,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.roleselectchildren",[],false,1,false,true,0,false,true,false,"",0,"px",0,"px","Nueva fila",false,false,true,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("Multirowitemselected_grid",71,"vMULTIROWITEMSELECTED_GRID","","","MultiRowItemSelected_Grid","boolean","true","false","e242s2_client",true,false,20,"px","K2BToolsCheckBoxColumn");
   GridContainer.addSingleLineEdit("Name",72,"vNAME","Nombre","","Name","char",0,"px",60,60,"left",null,[],"Name","Name",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   GridContainer.addSingleLineEdit("Id",73,"vID","Id","","Id","int",0,"px",12,12,"right",null,[],"Id","Id",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.Selectedgrid_multipleselectionContainer = new gx.grid.grid(this, 3,"WbpLvl3",106,"Selectedgrid_multipleselection","Selectedgrid_multipleselection","Selectedgrid_multipleselectionContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.roleselectchildren",[],false,1,false,true,0,false,true,false,"",0,"px",0,"px","Nueva fila",false,false,true,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var Selectedgrid_multipleselectionContainer = this.Selectedgrid_multipleselectionContainer;
   Selectedgrid_multipleselectionContainer.addCheckBox("Selectedgridmultirowitemselected_multipleselection",107,"vSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION","","","SelectedGridMultiRowItemSelected_MultipleSelection","boolean","true","false","e262s3_client",true,false,0,"px","K2BToolsGridColumn");
   Selectedgrid_multipleselectionContainer.addSingleLineEdit("Selected_name",108,"vSELECTED_NAME","Nombre","","Selected_Name","char",0,"px",60,60,"left",null,[],"Selected_name","Selected_Name",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   Selectedgrid_multipleselectionContainer.addSingleLineEdit("Selected_id",109,"vSELECTED_ID","Id","","Selected_Id","int",0,"px",12,12,"right",null,[],"Selected_id","Selected_Id",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   this.Selectedgrid_multipleselectionContainer.emptyText = "";
   this.setGrid(Selectedgrid_multipleselectionContainer);
   this.FILTERTAGSUSERCONTROL_GRIDContainer = gx.uc.getNew(this, 31, 0, "K2BTagsViewer", this.CmpContext + "FILTERTAGSUSERCONTROL_GRIDContainer", "Filtertagsusercontrol_grid", "FILTERTAGSUSERCONTROL_GRID");
   var FILTERTAGSUSERCONTROL_GRIDContainer = this.FILTERTAGSUSERCONTROL_GRIDContainer;
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Class", "Class", "", "char");
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Enabled", "Enabled", true, "boolean");
   FILTERTAGSUSERCONTROL_GRIDContainer.setDynProp("EmptyStateMessage", "Emptystatemessage", "", "char");
   FILTERTAGSUSERCONTROL_GRIDContainer.addV2CFunction('AV70FilterTagsCollection_Grid', "vFILTERTAGSCOLLECTION_GRID", 'SetTagValues');
   FILTERTAGSUSERCONTROL_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV70FilterTagsCollection_Grid=UC.GetTagValues();gx.fn.setControlValue("vFILTERTAGSCOLLECTION_GRID",UC.ParentObject.AV70FilterTagsCollection_Grid); });
   FILTERTAGSUSERCONTROL_GRIDContainer.addV2CFunction('AV71DeletedTag_Grid', "vDELETEDTAG_GRID", 'SetDeletedTag');
   FILTERTAGSUSERCONTROL_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV71DeletedTag_Grid=UC.GetDeletedTag();gx.fn.setControlValue("vDELETEDTAG_GRID",UC.ParentObject.AV71DeletedTag_Grid); });
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Visible", "Visible", true, "bool");
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   FILTERTAGSUSERCONTROL_GRIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   FILTERTAGSUSERCONTROL_GRIDContainer.addEventHandler("TagDeleted", this.e272s1_client);
   this.setUserControl(FILTERTAGSUSERCONTROL_GRIDContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 121, 45, "K2BControlBeautify", this.CmpContext + "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[12]={ id: 12, fld:"MAINMULTIPLESELECTIONRESPONSIVETABLE_MULTIPLESELECTION",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"GRIDCOMPONENTCONTENT_GRID",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"LAYOUTDEFINED_GRID_INNER_GRID",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"LAYOUTDEFINED_TABLE10_GRID",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"LAYOUTDEFINED_FILTERGLOBALCONTAINER_GRID",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"LAYOUTDEFINED_ONLYDETAILEDFILTERLAYOUT_GRID",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"LAYOUTDEFINED_SECTION5_GRID",grid:0};
   GXValidFnc[30]={ id: 30, fld:"LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID",grid:0,evt:"e122s2_client"};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID",grid:0};
   GXValidFnc[35]={ id: 35, fld:"LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID",grid:0,evt:"e132s2_client"};
   GXValidFnc[36]={ id: 36, fld:"MAINFILTERRESPONSIVETABLE_FILTERS",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"FILTERCONTAINERTABLE_FILTERS",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"TABLE_CONTAINER_FILNAME",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILNAME",gxz:"ZV49FilName",gxold:"OV49FilName",gxvar:"AV49FilName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV49FilName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV49FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV49FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV49FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"TABLE_CONTAINER_FILEXTERNALID",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id:51 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILEXTERNALID",gxz:"ZV50FilExternalId",gxold:"OV50FilExternalId",gxvar:"AV50FilExternalId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50FilExternalId=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV50FilExternalId=Value},v2c:function(){gx.fn.setControlValue("vFILEXTERNALID",gx.O.AV50FilExternalId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV50FilExternalId=this.val()},val:function(){return gx.fn.getControlValue("vFILEXTERNALID")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"LAYOUTDEFINED_TABLE7_GRID",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"TABLEGRIDCONTAINER_GRID",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id:68 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCHECKALL_GRID",gxz:"ZV54CheckAll_Grid",gxold:"OV54CheckAll_Grid",gxvar:"AV54CheckAll_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV54CheckAll_Grid=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV54CheckAll_Grid=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCHECKALL_GRID",gx.O.AV54CheckAll_Grid,true)},c2v:function(){if(this.val()!==undefined)gx.O.AV54CheckAll_Grid=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCHECKALL_GRID")},nac:gx.falseFn,evt:"e252s1_client",values:['true','false']};
   GXValidFnc[71]={ id:71 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMULTIROWITEMSELECTED_GRID",gxz:"ZV40MultiRowItemSelected_Grid",gxold:"OV40MultiRowItemSelected_Grid",gxvar:"AV40MultiRowItemSelected_Grid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV40MultiRowItemSelected_Grid=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV40MultiRowItemSelected_Grid=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vMULTIROWITEMSELECTED_GRID",row || gx.fn.currentGridRowImpl(70),gx.O.AV40MultiRowItemSelected_Grid,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV40MultiRowItemSelected_Grid=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("vMULTIROWITEMSELECTED_GRID",row || gx.fn.currentGridRowImpl(70))},nac:gx.falseFn,evt:"e242s2_client",values:['true','false']};
   GXValidFnc[72]={ id:72 ,lvl:2,type:"char",len:60,dec:0,sign:false,ro:0,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV45Name",gxold:"OV45Name",gxvar:"AV45Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV45Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV45Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(70),gx.O.AV45Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV45Name=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(70))},nac:gx.falseFn};
   GXValidFnc[73]={ id:73 ,lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:70,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV47Id",gxold:"OV47Id",gxvar:"AV47Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.AV47Id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(70),gx.O.AV47Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV47Id=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("vID",row || gx.fn.currentGridRowImpl(70),'.')},nac:gx.falseFn};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};
   GXValidFnc[79]={ id: 79, fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID", format:0,grid:0};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"MULTIPLESELECTIONACTIONSCONTAINERRESPONSIVETABLE_MULTIPLESELECTION",grid:0};
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"MULTIPLESELECTION_ADD",grid:0,evt:"e152s2_client"};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id: 88, fld:"MULTIPLESELECTION_REMOVE",grid:0,evt:"e142s2_client"};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"SELECTEDUITEMSMAINTABLE_MULTIPLESELECTION",grid:0};
   GXValidFnc[93]={ id: 93, fld:"",grid:0};
   GXValidFnc[94]={ id: 94, fld:"",grid:0};
   GXValidFnc[95]={ id:95 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vXMLITEMS_MULTIPLESELECTION",gxz:"ZV34XMLItems_MultipleSelection",gxold:"OV34XMLItems_MultipleSelection",gxvar:"AV34XMLItems_MultipleSelection",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV34XMLItems_MultipleSelection=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV34XMLItems_MultipleSelection=Value},v2c:function(){gx.fn.setControlValue("vXMLITEMS_MULTIPLESELECTION",gx.O.AV34XMLItems_MultipleSelection,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV34XMLItems_MultipleSelection=this.val()},val:function(){return gx.fn.getControlValue("vXMLITEMS_MULTIPLESELECTION")},nac:gx.falseFn};
   GXValidFnc[97]={ id: 97, fld:"SELECTEDITEMSRESPONSIVETABLECONTAINER_MULTIPLESELECTION",grid:0};
   GXValidFnc[98]={ id: 98, fld:"",grid:0};
   GXValidFnc[99]={ id: 99, fld:"",grid:0};
   GXValidFnc[100]={ id: 100, fld:"TABLEGRIDCONTAINERMULTIPLESELECTION_MULTIPLESELECTION",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id:104 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECTEDCHECKALL_MULTIPLESELECTION",gxz:"ZV53SelectedCheckAll_MultipleSelection",gxold:"OV53SelectedCheckAll_MultipleSelection",gxvar:"AV53SelectedCheckAll_MultipleSelection",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV53SelectedCheckAll_MultipleSelection=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV53SelectedCheckAll_MultipleSelection=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vSELECTEDCHECKALL_MULTIPLESELECTION",gx.O.AV53SelectedCheckAll_MultipleSelection,true)},c2v:function(){if(this.val()!==undefined)gx.O.AV53SelectedCheckAll_MultipleSelection=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vSELECTEDCHECKALL_MULTIPLESELECTION")},nac:gx.falseFn,evt:"e232s1_client",values:['true','false']};
   GXValidFnc[107]={ id:107 ,lvl:3,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:106,gxgrid:this.Selectedgrid_multipleselectionContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION",gxz:"ZV36SelectedGridMultiRowItemSelected_MultipleSelection",gxold:"OV36SelectedGridMultiRowItemSelected_MultipleSelection",gxvar:"AV36SelectedGridMultiRowItemSelected_MultipleSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV36SelectedGridMultiRowItemSelected_MultipleSelection=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV36SelectedGridMultiRowItemSelected_MultipleSelection=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION",row || gx.fn.currentGridRowImpl(106),gx.O.AV36SelectedGridMultiRowItemSelected_MultipleSelection,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV36SelectedGridMultiRowItemSelected_MultipleSelection=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("vSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION",row || gx.fn.currentGridRowImpl(106))},nac:gx.falseFn,evt:"e262s3_client",values:['true','false']};
   GXValidFnc[108]={ id:108 ,lvl:3,type:"char",len:60,dec:0,sign:false,ro:0,isacc:0,grid:106,gxgrid:this.Selectedgrid_multipleselectionContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECTED_NAME",gxz:"ZV46Selected_Name",gxold:"OV46Selected_Name",gxvar:"AV46Selected_Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV46Selected_Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV46Selected_Name=Value},v2c:function(row){gx.fn.setGridControlValue("vSELECTED_NAME",row || gx.fn.currentGridRowImpl(106),gx.O.AV46Selected_Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV46Selected_Name=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vSELECTED_NAME",row || gx.fn.currentGridRowImpl(106))},nac:gx.falseFn};
   GXValidFnc[109]={ id:109 ,lvl:3,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:106,gxgrid:this.Selectedgrid_multipleselectionContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECTED_ID",gxz:"ZV48Selected_Id",gxold:"OV48Selected_Id",gxvar:"AV48Selected_Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.AV48Selected_Id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV48Selected_Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vSELECTED_ID",row || gx.fn.currentGridRowImpl(106),gx.O.AV48Selected_Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV48Selected_Id=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("vSELECTED_ID",row || gx.fn.currentGridRowImpl(106),'.')},nac:gx.falseFn};
   GXValidFnc[110]={ id: 110, fld:"",grid:0};
   GXValidFnc[111]={ id: 111, fld:"",grid:0};
   GXValidFnc[112]={ id: 112, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[113]={ id: 113, fld:"",grid:0};
   GXValidFnc[114]={ id: 114, fld:"",grid:0};
   GXValidFnc[115]={ id: 115, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[118]={ id: 118, fld:"CONFIRM",grid:0,evt:"e112s2_client"};
   GXValidFnc[119]={ id: 119, fld:"",grid:0};
   GXValidFnc[120]={ id: 120, fld:"",grid:0};
   this.AV49FilName = "" ;
   this.ZV49FilName = "" ;
   this.OV49FilName = "" ;
   this.AV50FilExternalId = "" ;
   this.ZV50FilExternalId = "" ;
   this.OV50FilExternalId = "" ;
   this.AV54CheckAll_Grid = false ;
   this.ZV54CheckAll_Grid = false ;
   this.OV54CheckAll_Grid = false ;
   this.ZV40MultiRowItemSelected_Grid = false ;
   this.OV40MultiRowItemSelected_Grid = false ;
   this.ZV45Name = "" ;
   this.OV45Name = "" ;
   this.ZV47Id = 0 ;
   this.OV47Id = 0 ;
   this.AV34XMLItems_MultipleSelection = "" ;
   this.ZV34XMLItems_MultipleSelection = "" ;
   this.OV34XMLItems_MultipleSelection = "" ;
   this.AV53SelectedCheckAll_MultipleSelection = false ;
   this.ZV53SelectedCheckAll_MultipleSelection = false ;
   this.OV53SelectedCheckAll_MultipleSelection = false ;
   this.ZV36SelectedGridMultiRowItemSelected_MultipleSelection = false ;
   this.OV36SelectedGridMultiRowItemSelected_MultipleSelection = false ;
   this.ZV46Selected_Name = "" ;
   this.OV46Selected_Name = "" ;
   this.ZV48Selected_Id = 0 ;
   this.OV48Selected_Id = 0 ;
   this.AV70FilterTagsCollection_Grid = [ ] ;
   this.AV49FilName = "" ;
   this.AV50FilExternalId = "" ;
   this.AV54CheckAll_Grid = false ;
   this.AV34XMLItems_MultipleSelection = "" ;
   this.AV53SelectedCheckAll_MultipleSelection = false ;
   this.AV7RoleId = 0 ;
   this.AV40MultiRowItemSelected_Grid = false ;
   this.AV45Name = "" ;
   this.AV47Id = 0 ;
   this.AV36SelectedGridMultiRowItemSelected_MultipleSelection = false ;
   this.AV46Selected_Name = "" ;
   this.AV48Selected_Id = 0 ;
   this.AV38CurrentPage_Grid = 0 ;
   this.AV35Reload_MultipleSelection = false ;
   this.AV32MultipleSelectionItems = [ ] ;
   this.AV57AllSelectedItems_Grid = [ ] ;
   this.AV60Grid_SelectedRows = 0 ;
   this.AV43I_LoadCount_Grid = 0 ;
   this.AV19I_LoadCount_Skip = 0 ;
   this.AV31InCollection = false ;
   this.AV84Pgmname = "" ;
   this.AV37SelectedGridLoadCount_MultipleSelection = 0 ;
   this.AV41MultiRowHasNext_Grid = false ;
   this.AV61S_Name = "" ;
   this.AV62S_Id = 0 ;
   this.AV42MultiRowIterator_Grid = 0 ;
   this.AV58SelectedItems_Grid = [ ] ;
   this.AV66FieldValues_Grid = [ ] ;
   this.AV71DeletedTag_Grid = "" ;
   this.AV59Index_Grid = 0 ;
   this.AV55SelectedItem_Grid = {SKNumeric1:0,SKNumeric2:0,SKNumeric3:0,SKNumeric4:0,SKNumeric5:0,SKNumeric6:0,SKCharacter1:"",SKCharacter2:"",SKCharacter3:"",SKCharacter4:"",SKCharacter5:"",SKCharacter6:"",SKGUID1:'00000000-0000-0000-0000-000000000000',SKGUID2:'00000000-0000-0000-0000-000000000000',SKDateTime1:gx.date.nullDate(),SKDateTime2:gx.date.nullDate(),IsSelected:false,FieldValues:[]} ;
   this.AV56FieldValue_Grid = {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""} ;
   this.AV33MultipleSelectionItem = {Name:"",Id:0} ;
   this.AV83GXV9 = 0 ;
   this.AV91GXV12 = 0 ;
   this.addDropTarget("Selectedgrid_multipleselectionContainerTbl", "Grid", ["Name","Id"], this.e162s2_client);
   this.addDropTarget("GridContainerTbl", "Grid", ["Selected_Id"], this.e172s2selected_id_client);
   this.Events = {"e112s2_client": ["'E_CONFIRM'", true] ,"e162s2_client": ["SELECTEDGRID_MULTIPLESELECTION.DROP", true] ,"e172s2selected_id_client": ["GRID.DROP", true] ,"e122s2_client": ["LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID.CLICK", true] ,"e132s2_client": ["LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID.CLICK", true] ,"e142s2_client": ["'ADD(MULTIPLESELECTION)'", true] ,"e152s2_client": ["'REMOVE(MULTIPLESELECTION)'", true] ,"e282s2_client": ["ENTER", true] ,"e292s2_client": ["CANCEL", true] ,"e232s1_client": ["VSELECTEDCHECKALL_MULTIPLESELECTION.CLICK", false] ,"e242s2_client": ["VMULTIROWITEMSELECTED_GRID.CLICK", false] ,"e252s1_client": ["VCHECKALL_GRID.CLICK", false] ,"e262s3_client": ["VSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION.CLICK", false] ,"e272s1_client": ["FILTERTAGSUSERCONTROL_GRID.TAGDELETED", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV49FilName',fld:'vFILNAME',pic:''},{av:'AV50FilExternalId',fld:'vFILEXTERNALID',pic:''},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV47Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV7RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV31InCollection',fld:'vINCOLLECTION',pic:''},{av:'SELECTEDGRID_MULTIPLESELECTION_nFirstRecordOnPage'},{av:'SELECTEDGRID_MULTIPLESELECTION_nEOF'},{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'sPrefix'},{av:'AV34XMLItems_MultipleSelection',fld:'vXMLITEMS_MULTIPLESELECTION',pic:''},{av:'AV38CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'AV43I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV19I_LoadCount_Skip',fld:'vI_LOADCOUNT_SKIP',pic:'ZZZ9',hsh:true},{av:'AV84Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'AV38CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vXMLITEMS_MULTIPLESELECTION","Visible")',ctrl:'vXMLITEMS_MULTIPLESELECTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE_CONTAINER_FILEXTERNALID","Visible")',ctrl:'TABLE_CONTAINER_FILEXTERNALID',prop:'Visible'},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'gx.fn.getCtrlProperty("vSELECTED_ID","Visible")',ctrl:'vSELECTED_ID',prop:'Visible'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV49FilName',fld:'vFILNAME',pic:''},{av:'AV50FilExternalId',fld:'vFILEXTERNALID',pic:''},{av:'AV7RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV84Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV34XMLItems_MultipleSelection',fld:'vXMLITEMS_MULTIPLESELECTION',pic:''},{av:'AV19I_LoadCount_Skip',fld:'vI_LOADCOUNT_SKIP',pic:'ZZZ9',hsh:true},{av:'AV49FilName',fld:'vFILNAME',pic:''},{av:'AV50FilExternalId',fld:'vFILEXTERNALID',pic:''},{av:'this.FILTERTAGSUSERCONTROL_GRIDContainer.EmptyStateMessage',ctrl:'FILTERTAGSUSERCONTROL_GRID',prop:'EmptyStateMessage'},{av:'AV70FilterTagsCollection_Grid',fld:'vFILTERTAGSCOLLECTION_GRID',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["SELECTEDGRID_MULTIPLESELECTION.LOAD"] = [[{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'AV37SelectedGridLoadCount_MultipleSelection',fld:'vSELECTEDGRIDLOADCOUNT_MULTIPLESELECTION',pic:'ZZZ9'},{av:'AV36SelectedGridMultiRowItemSelected_MultipleSelection',fld:'vSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION',pic:''},{av:'AV46Selected_Name',fld:'vSELECTED_NAME',pic:''},{av:'AV48Selected_Id',fld:'vSELECTED_ID',pic:'ZZZZZZZZZZZ9'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["'E_CONFIRM'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV38CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV34XMLItems_MultipleSelection',fld:'vXMLITEMS_MULTIPLESELECTION',pic:''},{av:'AV49FilName',fld:'vFILNAME',pic:''},{av:'AV84Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV50FilExternalId',fld:'vFILEXTERNALID',pic:''},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV47Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'AV7RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV43I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV19I_LoadCount_Skip',fld:'vI_LOADCOUNT_SKIP',pic:'ZZZ9',hsh:true},{av:'AV31InCollection',fld:'vINCOLLECTION',pic:''},{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'sPrefix'},{av:'SELECTEDGRID_MULTIPLESELECTION_nFirstRecordOnPage'},{av:'SELECTEDGRID_MULTIPLESELECTION_nEOF'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV38CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vXMLITEMS_MULTIPLESELECTION","Visible")',ctrl:'vXMLITEMS_MULTIPLESELECTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE_CONTAINER_FILEXTERNALID","Visible")',ctrl:'TABLE_CONTAINER_FILEXTERNALID',prop:'Visible'},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'gx.fn.getCtrlProperty("vSELECTED_ID","Visible")',ctrl:'vSELECTED_ID',prop:'Visible'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV47Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'AV7RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV49FilName',fld:'vFILNAME',pic:''},{av:'AV50FilExternalId',fld:'vFILEXTERNALID',pic:''},{av:'AV34XMLItems_MultipleSelection',fld:'vXMLITEMS_MULTIPLESELECTION',pic:''},{av:'AV43I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV19I_LoadCount_Skip',fld:'vI_LOADCOUNT_SKIP',pic:'ZZZ9',hsh:true},{av:'AV31InCollection',fld:'vINCOLLECTION',pic:''},{av:'AV84Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_GRID',prop:'Visible'},{av:'AV43I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV40MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',pic:''},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV19I_LoadCount_Skip',fld:'vI_LOADCOUNT_SKIP',pic:'ZZZ9',hsh:true},{av:'AV45Name',fld:'vNAME',pic:''},{av:'AV47Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV31InCollection',fld:'vINCOLLECTION',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["SELECTEDGRID_MULTIPLESELECTION.DROP"] = [[{av:'SELECTEDGRID_MULTIPLESELECTION_nFirstRecordOnPage'},{av:'SELECTEDGRID_MULTIPLESELECTION_nEOF'},{av:'AV38CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV34XMLItems_MultipleSelection',fld:'vXMLITEMS_MULTIPLESELECTION',pic:''},{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'AV43I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV19I_LoadCount_Skip',fld:'vI_LOADCOUNT_SKIP',pic:'ZZZ9',hsh:true},{av:'AV84Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'sPrefix'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV49FilName',fld:'vFILNAME',pic:''},{av:'AV50FilExternalId',fld:'vFILEXTERNALID',pic:''},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV47Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV7RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV31InCollection',fld:'vINCOLLECTION',pic:''},{av:'AV45Name',fld:'vNAME',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV34XMLItems_MultipleSelection',fld:'vXMLITEMS_MULTIPLESELECTION',pic:''},{av:'AV40MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',pic:''},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV31InCollection',fld:'vINCOLLECTION',pic:''},{av:'AV38CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vXMLITEMS_MULTIPLESELECTION","Visible")',ctrl:'vXMLITEMS_MULTIPLESELECTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE_CONTAINER_FILEXTERNALID","Visible")',ctrl:'TABLE_CONTAINER_FILEXTERNALID',prop:'Visible'},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'gx.fn.getCtrlProperty("vSELECTED_ID","Visible")',ctrl:'vSELECTED_ID',prop:'Visible'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["GRID.DROP"] = [[{av:'SELECTEDGRID_MULTIPLESELECTION_nFirstRecordOnPage'},{av:'SELECTEDGRID_MULTIPLESELECTION_nEOF'},{av:'AV38CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV34XMLItems_MultipleSelection',fld:'vXMLITEMS_MULTIPLESELECTION',pic:''},{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'AV43I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV19I_LoadCount_Skip',fld:'vI_LOADCOUNT_SKIP',pic:'ZZZ9',hsh:true},{av:'AV84Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'sPrefix'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV49FilName',fld:'vFILNAME',pic:''},{av:'AV50FilExternalId',fld:'vFILEXTERNALID',pic:''},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV47Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV7RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV31InCollection',fld:'vINCOLLECTION',pic:''},{av:'AV48Selected_Id',fld:'vSELECTED_ID',pic:'ZZZZZZZZZZZ9'},{av:'AV37SelectedGridLoadCount_MultipleSelection',fld:'vSELECTEDGRIDLOADCOUNT_MULTIPLESELECTION',pic:'ZZZ9'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV37SelectedGridLoadCount_MultipleSelection',fld:'vSELECTEDGRIDLOADCOUNT_MULTIPLESELECTION',pic:'ZZZ9'},{av:'AV34XMLItems_MultipleSelection',fld:'vXMLITEMS_MULTIPLESELECTION',pic:''},{av:'AV36SelectedGridMultiRowItemSelected_MultipleSelection',fld:'vSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION',pic:''},{av:'AV38CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vXMLITEMS_MULTIPLESELECTION","Visible")',ctrl:'vXMLITEMS_MULTIPLESELECTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE_CONTAINER_FILEXTERNALID","Visible")',ctrl:'TABLE_CONTAINER_FILEXTERNALID',prop:'Visible'},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'gx.fn.getCtrlProperty("vSELECTED_ID","Visible")',ctrl:'vSELECTED_ID',prop:'Visible'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV49FilName',fld:'vFILNAME',pic:''},{av:'AV84Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV50FilExternalId',fld:'vFILEXTERNALID',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{ctrl:'GRID',prop:'Backcolorstyle'},{av:'this.FILTERTAGSUSERCONTROL_GRIDContainer.EmptyStateMessage',ctrl:'FILTERTAGSUSERCONTROL_GRID',prop:'EmptyStateMessage'},{av:'AV70FilterTagsCollection_Grid',fld:'vFILTERTAGSCOLLECTION_GRID',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["VSELECTEDCHECKALL_MULTIPLESELECTION.CLICK"] = [[{av:'AV36SelectedGridMultiRowItemSelected_MultipleSelection',fld:'vSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION',grid:106,pic:''},{av:'SELECTEDGRID_MULTIPLESELECTION_nFirstRecordOnPage'},{av:'nRC_GXsfl_106',ctrl:'SELECTEDGRID_MULTIPLESELECTION',grid:106,prop:'GridRC'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'AV36SelectedGridMultiRowItemSelected_MultipleSelection',fld:'vSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["VMULTIROWITEMSELECTED_GRID.CLICK"] = [[{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV47Id',fld:'vID',grid:70,pic:'ZZZZZZZZZZZ9'},{av:'GRID_nFirstRecordOnPage'},{av:'nRC_GXsfl_70',ctrl:'GRID',grid:70,prop:'GridRC'},{av:'AV40MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',grid:70,pic:''},{av:'AV45Name',fld:'vNAME',grid:70,pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:'MAINGRID_RESPONSIVETABLE_GRID',prop:'Class'},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["VCHECKALL_GRID.CLICK"] = [[{av:'AV40MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',grid:70,pic:''},{av:'GRID_nFirstRecordOnPage'},{av:'nRC_GXsfl_70',ctrl:'GRID',grid:70,prop:'GridRC'},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV47Id',fld:'vID',grid:70,pic:'ZZZZZZZZZZZ9'},{av:'AV45Name',fld:'vNAME',grid:70,pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'AV40MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',pic:''},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["VSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION.CLICK"] = [[{av:'AV36SelectedGridMultiRowItemSelected_MultipleSelection',fld:'vSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION',grid:106,pic:''},{av:'SELECTEDGRID_MULTIPLESELECTION_nFirstRecordOnPage'},{av:'nRC_GXsfl_106',ctrl:'SELECTEDGRID_MULTIPLESELECTION',grid:106,prop:'GridRC'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID.CLICK"] = [[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID.CLICK"] = [[{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["'ADD(MULTIPLESELECTION)'"] = [[{av:'SELECTEDGRID_MULTIPLESELECTION_nFirstRecordOnPage'},{av:'SELECTEDGRID_MULTIPLESELECTION_nEOF'},{av:'AV38CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV34XMLItems_MultipleSelection',fld:'vXMLITEMS_MULTIPLESELECTION',pic:''},{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'AV43I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV19I_LoadCount_Skip',fld:'vI_LOADCOUNT_SKIP',pic:'ZZZ9',hsh:true},{av:'AV84Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'sPrefix'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV49FilName',fld:'vFILNAME',pic:''},{av:'AV50FilExternalId',fld:'vFILEXTERNALID',pic:''},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV47Id',fld:'vID',grid:70,pic:'ZZZZZZZZZZZ9'},{av:'nRC_GXsfl_70',ctrl:'GRID',grid:70,prop:'GridRC'},{av:'AV7RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV31InCollection',fld:'vINCOLLECTION',pic:''},{av:'AV41MultiRowHasNext_Grid',fld:'vMULTIROWHASNEXT_GRID',pic:''},{av:'AV61S_Name',fld:'vS_NAME',pic:''},{av:'AV62S_Id',fld:'vS_ID',pic:'ZZZZZZZZZZZ9'},{av:'AV42MultiRowIterator_Grid',fld:'vMULTIROWITERATOR_GRID',pic:'ZZZ9'},{av:'AV58SelectedItems_Grid',fld:'vSELECTEDITEMS_GRID',pic:''},{av:'AV66FieldValues_Grid',fld:'vFIELDVALUES_GRID',pic:''},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV58SelectedItems_Grid',fld:'vSELECTEDITEMS_GRID',pic:''},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV34XMLItems_MultipleSelection',fld:'vXMLITEMS_MULTIPLESELECTION',pic:''},{av:'AV42MultiRowIterator_Grid',fld:'vMULTIROWITERATOR_GRID',pic:'ZZZ9'},{av:'AV61S_Name',fld:'vS_NAME',pic:''},{av:'AV62S_Id',fld:'vS_ID',pic:'ZZZZZZZZZZZ9'},{av:'AV66FieldValues_Grid',fld:'vFIELDVALUES_GRID',pic:''},{av:'AV41MultiRowHasNext_Grid',fld:'vMULTIROWHASNEXT_GRID',pic:''},{av:'AV38CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vXMLITEMS_MULTIPLESELECTION","Visible")',ctrl:'vXMLITEMS_MULTIPLESELECTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE_CONTAINER_FILEXTERNALID","Visible")',ctrl:'TABLE_CONTAINER_FILEXTERNALID',prop:'Visible'},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'gx.fn.getCtrlProperty("vSELECTED_ID","Visible")',ctrl:'vSELECTED_ID',prop:'Visible'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["'REMOVE(MULTIPLESELECTION)'"] = [[{av:'SELECTEDGRID_MULTIPLESELECTION_nFirstRecordOnPage'},{av:'SELECTEDGRID_MULTIPLESELECTION_nEOF'},{av:'AV38CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV34XMLItems_MultipleSelection',fld:'vXMLITEMS_MULTIPLESELECTION',pic:''},{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'AV43I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV19I_LoadCount_Skip',fld:'vI_LOADCOUNT_SKIP',pic:'ZZZ9',hsh:true},{av:'AV84Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'sPrefix'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV49FilName',fld:'vFILNAME',pic:''},{av:'AV50FilExternalId',fld:'vFILEXTERNALID',pic:''},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV47Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV7RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV31InCollection',fld:'vINCOLLECTION',pic:''},{av:'AV36SelectedGridMultiRowItemSelected_MultipleSelection',fld:'vSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION',grid:106,pic:''},{av:'nRC_GXsfl_106',ctrl:'SELECTEDGRID_MULTIPLESELECTION',grid:106,prop:'GridRC'},{av:'AV48Selected_Id',fld:'vSELECTED_ID',grid:106,pic:'ZZZZZZZZZZZ9'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV37SelectedGridLoadCount_MultipleSelection',fld:'vSELECTEDGRIDLOADCOUNT_MULTIPLESELECTION',pic:'ZZZ9'},{av:'AV36SelectedGridMultiRowItemSelected_MultipleSelection',fld:'vSELECTEDGRIDMULTIROWITEMSELECTED_MULTIPLESELECTION',pic:''},{av:'AV34XMLItems_MultipleSelection',fld:'vXMLITEMS_MULTIPLESELECTION',pic:''},{av:'AV38CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vXMLITEMS_MULTIPLESELECTION","Visible")',ctrl:'vXMLITEMS_MULTIPLESELECTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE_CONTAINER_FILEXTERNALID","Visible")',ctrl:'TABLE_CONTAINER_FILEXTERNALID',prop:'Visible'},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'gx.fn.getCtrlProperty("vSELECTED_ID","Visible")',ctrl:'vSELECTED_ID',prop:'Visible'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.EvtParms["FILTERTAGSUSERCONTROL_GRID.TAGDELETED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV38CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV34XMLItems_MultipleSelection',fld:'vXMLITEMS_MULTIPLESELECTION',pic:''},{av:'AV49FilName',fld:'vFILNAME',pic:''},{av:'AV84Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV50FilExternalId',fld:'vFILEXTERNALID',pic:''},{av:'AV57AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV47Id',fld:'vID',pic:'ZZZZZZZZZZZ9'},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'AV7RoleId',fld:'vROLEID',pic:'ZZZZZZZZZZZ9'},{av:'AV43I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV19I_LoadCount_Skip',fld:'vI_LOADCOUNT_SKIP',pic:'ZZZ9',hsh:true},{av:'AV31InCollection',fld:'vINCOLLECTION',pic:''},{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'sPrefix'},{av:'AV71DeletedTag_Grid',fld:'vDELETEDTAG_GRID',pic:''},{av:'SELECTEDGRID_MULTIPLESELECTION_nFirstRecordOnPage'},{av:'SELECTEDGRID_MULTIPLESELECTION_nEOF'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}],[{av:'AV49FilName',fld:'vFILNAME',pic:''},{av:'AV38CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV32MultipleSelectionItems',fld:'vMULTIPLESELECTIONITEMS',pic:''},{av:'AV35Reload_MultipleSelection',fld:'vRELOAD_MULTIPLESELECTION',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vXMLITEMS_MULTIPLESELECTION","Visible")',ctrl:'vXMLITEMS_MULTIPLESELECTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABLE_CONTAINER_FILEXTERNALID","Visible")',ctrl:'TABLE_CONTAINER_FILEXTERNALID',prop:'Visible'},{av:'AV60Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9',hsh:true},{av:'gx.fn.getCtrlProperty("vSELECTED_ID","Visible")',ctrl:'vSELECTED_ID',prop:'Visible'},{av:'AV54CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''},{av:'AV53SelectedCheckAll_MultipleSelection',fld:'vSELECTEDCHECKALL_MULTIPLESELECTION',pic:''}]];
   this.setVCMap("AV38CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV35Reload_MultipleSelection", "vRELOAD_MULTIPLESELECTION", 0, "boolean", 4, 0);
   this.setVCMap("AV32MultipleSelectionItems", "vMULTIPLESELECTIONITEMS", 0, "CollK2BFSG\RolesSDT.RolesSDTItem", 0, 0);
   this.setVCMap("AV7RoleId", "vROLEID", 0, "int", 12, 0);
   this.setVCMap("AV57AllSelectedItems_Grid", "vALLSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV60Grid_SelectedRows", "vGRID_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV43I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV19I_LoadCount_Skip", "vI_LOADCOUNT_SKIP", 0, "int", 4, 0);
   this.setVCMap("AV31InCollection", "vINCOLLECTION", 0, "boolean", 4, 0);
   this.setVCMap("AV84Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV37SelectedGridLoadCount_MultipleSelection", "vSELECTEDGRIDLOADCOUNT_MULTIPLESELECTION", 0, "int", 4, 0);
   this.setVCMap("AV41MultiRowHasNext_Grid", "vMULTIROWHASNEXT_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV61S_Name", "vS_NAME", 0, "char", 60, 0);
   this.setVCMap("AV62S_Id", "vS_ID", 0, "int", 12, 0);
   this.setVCMap("AV42MultiRowIterator_Grid", "vMULTIROWITERATOR_GRID", 0, "int", 4, 0);
   this.setVCMap("AV58SelectedItems_Grid", "vSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV66FieldValues_Grid", "vFIELDVALUES_GRID", 0, "CollK2BSelectionItem.FieldValuesItem", 0, 0);
   this.setVCMap("AV71DeletedTag_Grid", "vDELETEDTAG_GRID", 0, "char", 30, 0);
   this.setVCMap("AV38CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV84Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV57AllSelectedItems_Grid", "vALLSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV60Grid_SelectedRows", "vGRID_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV7RoleId", "vROLEID", 0, "int", 12, 0);
   this.setVCMap("AV43I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV19I_LoadCount_Skip", "vI_LOADCOUNT_SKIP", 0, "int", 4, 0);
   this.setVCMap("AV31InCollection", "vINCOLLECTION", 0, "boolean", 4, 0);
   this.setVCMap("AV32MultipleSelectionItems", "vMULTIPLESELECTIONITEMS", 0, "CollK2BFSG\RolesSDT.RolesSDTItem", 0, 0);
   this.setVCMap("AV71DeletedTag_Grid", "vDELETEDTAG_GRID", 0, "char", 30, 0);
   this.setVCMap("AV59Index_Grid", "vINDEX_GRID", 0, "int", 4, 0);
   this.setVCMap("AV57AllSelectedItems_Grid", "vALLSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV55SelectedItem_Grid", "vSELECTEDITEM_GRID", 0, "K2BSelectionItem", 0, 0);
   this.setVCMap("AV56FieldValue_Grid", "vFIELDVALUE_GRID", 0, "K2BSelectionItem.FieldValuesItem", 0, 0);
   this.setVCMap("AV56FieldValue_Grid", "vFIELDVALUE_GRID", 0, "K2BSelectionItem.FieldValuesItem", 0, 0);
   this.setVCMap("AV55SelectedItem_Grid", "vSELECTEDITEM_GRID", 0, "K2BSelectionItem", 0, 0);
   this.setVCMap("AV59Index_Grid", "vINDEX_GRID", 0, "int", 4, 0);
   this.setVCMap("AV38CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV84Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV57AllSelectedItems_Grid", "vALLSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV60Grid_SelectedRows", "vGRID_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV7RoleId", "vROLEID", 0, "int", 12, 0);
   this.setVCMap("AV43I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV19I_LoadCount_Skip", "vI_LOADCOUNT_SKIP", 0, "int", 4, 0);
   this.setVCMap("AV31InCollection", "vINCOLLECTION", 0, "boolean", 4, 0);
   this.setVCMap("AV32MultipleSelectionItems", "vMULTIPLESELECTIONITEMS", 0, "CollK2BFSG\RolesSDT.RolesSDTItem", 0, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV38CurrentPage_Grid"});
   GridContainer.addRefreshingVar(this.GXValidFnc[95]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"AV84Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar({rfrVar:"AV57AllSelectedItems_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV47Id", rfrProp:"Value", gxAttId:"Id"});
   GridContainer.addRefreshingVar({rfrVar:"AV60Grid_SelectedRows"});
   GridContainer.addRefreshingVar({rfrVar:"AV7RoleId"});
   GridContainer.addRefreshingVar({rfrVar:"AV43I_LoadCount_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV19I_LoadCount_Skip"});
   GridContainer.addRefreshingVar({rfrVar:"AV31InCollection"});
   GridContainer.addRefreshingVar({rfrVar:"AV32MultipleSelectionItems"});
   GridContainer.addRefreshingVar({rfrVar:"AV35Reload_MultipleSelection"});
   GridContainer.addRefreshingParm({rfrVar:"AV38CurrentPage_Grid"});
   GridContainer.addRefreshingParm(this.GXValidFnc[95]);
   GridContainer.addRefreshingParm(this.GXValidFnc[45]);
   GridContainer.addRefreshingParm({rfrVar:"AV84Pgmname"});
   GridContainer.addRefreshingParm(this.GXValidFnc[51]);
   GridContainer.addRefreshingParm({rfrVar:"AV57AllSelectedItems_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV47Id", rfrProp:"Value", gxAttId:"Id"});
   GridContainer.addRefreshingParm({rfrVar:"AV60Grid_SelectedRows"});
   GridContainer.addRefreshingParm({rfrVar:"AV7RoleId"});
   GridContainer.addRefreshingParm({rfrVar:"AV43I_LoadCount_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV19I_LoadCount_Skip"});
   GridContainer.addRefreshingParm({rfrVar:"AV31InCollection"});
   GridContainer.addRefreshingParm({rfrVar:"AV32MultipleSelectionItems"});
   GridContainer.addRefreshingParm(this.GXValidFnc[68]);
   GridContainer.addRefreshingParm(this.GXValidFnc[104]);
   GridContainer.addRefreshingParm({rfrVar:"AV35Reload_MultipleSelection"});
   Selectedgrid_multipleselectionContainer.addRefreshingVar({rfrVar:"AV38CurrentPage_Grid"});
   Selectedgrid_multipleselectionContainer.addRefreshingVar(this.GXValidFnc[95]);
   Selectedgrid_multipleselectionContainer.addRefreshingVar({rfrVar:"AV35Reload_MultipleSelection"});
   Selectedgrid_multipleselectionContainer.addRefreshingVar({rfrVar:"AV32MultipleSelectionItems"});
   Selectedgrid_multipleselectionContainer.addRefreshingVar({rfrVar:"AV60Grid_SelectedRows"});
   Selectedgrid_multipleselectionContainer.addRefreshingVar({rfrVar:"AV43I_LoadCount_Grid"});
   Selectedgrid_multipleselectionContainer.addRefreshingVar({rfrVar:"AV19I_LoadCount_Skip"});
   Selectedgrid_multipleselectionContainer.addRefreshingVar({rfrVar:"AV84Pgmname"});
   Selectedgrid_multipleselectionContainer.addRefreshingParm({rfrVar:"AV38CurrentPage_Grid"});
   Selectedgrid_multipleselectionContainer.addRefreshingParm(this.GXValidFnc[95]);
   Selectedgrid_multipleselectionContainer.addRefreshingParm({rfrVar:"AV35Reload_MultipleSelection"});
   Selectedgrid_multipleselectionContainer.addRefreshingParm({rfrVar:"AV32MultipleSelectionItems"});
   Selectedgrid_multipleselectionContainer.addRefreshingParm(this.GXValidFnc[68]);
   Selectedgrid_multipleselectionContainer.addRefreshingParm(this.GXValidFnc[104]);
   Selectedgrid_multipleselectionContainer.addRefreshingParm({rfrVar:"AV60Grid_SelectedRows"});
   Selectedgrid_multipleselectionContainer.addRefreshingParm({rfrVar:"AV43I_LoadCount_Grid"});
   Selectedgrid_multipleselectionContainer.addRefreshingParm({rfrVar:"AV19I_LoadCount_Skip"});
   Selectedgrid_multipleselectionContainer.addRefreshingParm({rfrVar:"AV84Pgmname"});
   this.Initialize( );
});
