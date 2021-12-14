gx.evt.autoSkip = false;
gx.define('k2bfsg.useraddrole', false, function () {
   this.ServerClass =  "k2bfsg.useraddrole" ;
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
      this.AV14CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV12CountSelectedItems_Grid=gx.fn.getIntegerValue("vCOUNTSELECTEDITEMS_GRID",'.') ;
      this.AV10AllSelectedItems_Grid=gx.fn.getControlValue("vALLSELECTEDITEMS_GRID") ;
      this.AV55Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV20Grid_SelectedRows=gx.fn.getIntegerValue("vGRID_SELECTEDROWS",'.') ;
      this.AV28I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV13CurrentAvailableRole=gx.fn.getIntegerValue("vCURRENTAVAILABLEROLE",'.') ;
      this.AV47UserId=gx.fn.getControlValue("vUSERID") ;
      this.AV34MultiRowHasNext_Grid=gx.fn.getControlValue("vMULTIROWHASNEXT_GRID") ;
      this.AV36MultiRowIterator_Grid=gx.fn.getIntegerValue("vMULTIROWITERATOR_GRID",'.') ;
      this.AV44SelectedItems_Grid=gx.fn.getControlValue("vSELECTEDITEMS_GRID") ;
      this.AV41S_Id=gx.fn.getIntegerValue("vS_ID",'.') ;
      this.AV18FieldValues_Grid=gx.fn.getControlValue("vFIELDVALUES_GRID") ;
      this.AV14CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV10AllSelectedItems_Grid=gx.fn.getControlValue("vALLSELECTEDITEMS_GRID") ;
      this.AV55Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV12CountSelectedItems_Grid=gx.fn.getIntegerValue("vCOUNTSELECTEDITEMS_GRID",'.') ;
      this.AV20Grid_SelectedRows=gx.fn.getIntegerValue("vGRID_SELECTEDROWS",'.') ;
      this.AV28I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV13CurrentAvailableRole=gx.fn.getIntegerValue("vCURRENTAVAILABLEROLE",'.') ;
      this.AV47UserId=gx.fn.getControlValue("vUSERID") ;
      this.AV12CountSelectedItems_Grid=gx.fn.getIntegerValue("vCOUNTSELECTEDITEMS_GRID",'.') ;
      this.AV58GXV4=gx.fn.getIntegerValue("vGXV4",'.') ;
      this.AV30Index_Grid=gx.fn.getIntegerValue("vINDEX_GRID",'.') ;
      this.AV10AllSelectedItems_Grid=gx.fn.getControlValue("vALLSELECTEDITEMS_GRID") ;
      this.AV43SelectedItem_Grid=gx.fn.getControlValue("vSELECTEDITEM_GRID") ;
      this.AV17FieldValue_Grid=gx.fn.getControlValue("vFIELDVALUE_GRID") ;
      this.AV17FieldValue_Grid=gx.fn.getControlValue("vFIELDVALUE_GRID") ;
      this.AV43SelectedItem_Grid=gx.fn.getControlValue("vSELECTEDITEM_GRID") ;
      this.AV30Index_Grid=gx.fn.getIntegerValue("vINDEX_GRID",'.') ;
      this.AV58GXV4=gx.fn.getIntegerValue("vGXV4",'.') ;
   };
   this.s112_client=function()
   {
   };
   this.s132_client=function()
   {
   };
   this.s142_client=function()
   {
      this.s222_client();
      if ( this.AV12CountSelectedItems_Grid > 0 )
      {
         this.s232_client();
      }
      else
      {
         this.s242_client();
      }
   };
   this.s222_client=function()
   {
      this.AV12CountSelectedItems_Grid = gx.num.trunc( 0 ,0) ;
      this.AV58GXV4 = gx.num.trunc( 1 ,0) ;
      while ( this.AV58GXV4 <= this.AV10AllSelectedItems_Grid.length )
      {
         this.AV43SelectedItem_Grid =  this.AV10AllSelectedItems_Grid[this.AV58GXV4 - 1]  ;
         if ( this.AV43SelectedItem_Grid.IsSelected )
         {
            this.AV12CountSelectedItems_Grid = gx.num.trunc( this.AV12CountSelectedItems_Grid + 1 ,0) ;
         }
         this.AV58GXV4 = gx.num.trunc( this.AV58GXV4 + 1 ,0) ;
      }
   };
   this.s232_client=function()
   {
      gx.fn.setCtrlProperty("ADDSELECTED","Visible", true );
   };
   this.s242_client=function()
   {
      gx.fn.setCtrlProperty("ADDSELECTED","Visible", false );
   };
   this.s152_client=function()
   {
   };
   this.s192_client=function()
   {
   };
   this.e162z2_client=function()
   {
      this.clearMessages();
      this.s202_client();
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:'MAINGRID_RESPONSIVETABLE_GRID',prop:'Class'},{av:'AV10AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV12CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s202_client=function()
   {
      this.AV11CheckAll_Grid =  true  ;
      /* Start For Each Line in Grid */
      var rowIdx30 = 1 ;
      var currentRowIdx30 = gx.fn.currentGridRowImpl(30) ;
      var rowIdxS30 ;
      var gridObj30 = gx.O.getGridById(30,0) ;
      while ( rowIdx30 <= gridObj30.grid.rows.length )
      {
         rowIdxS30 =  gx.text.padl( gx.text.tostring( rowIdx30), 4, "0")  ;
         gridObj30.instanciateRow(gridObj30.grid.getRowById(rowIdx30 - 1));
         this.s212_client();
         rowIdx30 = gx.num.trunc( rowIdx30 + 1 ,0) ;
      }
      if ( currentRowIdx30 )
      {
         gridObj30.instanciateRow(currentRowIdx30);
      }
      this.s142_client();
      this.s252_client();
      if ( this.AV10AllSelectedItems_Grid.length > 0 )
      {
         gx.fn.setCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class", "Table"+" "+"K2BTools_GridSelecting" );
      }
      else
      {
         gx.fn.setCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class", "Table" );
      }
   };
   this.s212_client=function()
   {
      this.AV30Index_Grid = gx.num.trunc( 1 ,0) ;
      while ( this.AV30Index_Grid <= this.AV10AllSelectedItems_Grid.length )
      {
         if ( this.AV10AllSelectedItems_Grid[this.AV30Index_Grid - 1].SKNumeric1 == this.AV29Id )
         {
            this.AV10AllSelectedItems_Grid.splice(this.AV30Index_Grid - 1, 1) ;
         }
         else
         {
            this.AV30Index_Grid = gx.num.trunc( this.AV30Index_Grid + 1 ,0) ;
         }
      }
      if ( this.AV35MultiRowItemSelected_Grid )
      {
         this.AV43SelectedItem_Grid =  {SKNumeric1:0,SKNumeric2:0,SKNumeric3:0,SKNumeric4:0,SKNumeric5:0,SKNumeric6:0,SKCharacter1:"",SKCharacter2:"",SKCharacter3:"",SKCharacter4:"",SKCharacter5:"",SKCharacter6:"",SKGUID1:'00000000-0000-0000-0000-000000000000',SKGUID2:'00000000-0000-0000-0000-000000000000',SKDateTime1:gx.date.nullDate(),SKDateTime2:gx.date.nullDate(),IsSelected:false,FieldValues:[]}  ;
         this.AV43SelectedItem_Grid.IsSelected =  this.AV35MultiRowItemSelected_Grid  ;
         this.AV43SelectedItem_Grid.SKNumeric1 = gx.num.trunc( this.AV29Id ,0) ;
         this.AV17FieldValue_Grid =  {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""}  ;
         this.AV17FieldValue_Grid.Name =  "Name"  ;
         this.AV17FieldValue_Grid.Value =  this.AV37Name  ;
         this.AV43SelectedItem_Grid.FieldValues.push(this.AV17FieldValue_Grid) ;
         this.AV17FieldValue_Grid =  {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""}  ;
         this.AV17FieldValue_Grid.Name =  "Guid"  ;
         this.AV17FieldValue_Grid.Value =  this.AV25Guid  ;
         this.AV43SelectedItem_Grid.FieldValues.push(this.AV17FieldValue_Grid) ;
         this.AV17FieldValue_Grid =  {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""}  ;
         this.AV17FieldValue_Grid.Name =  "Id"  ;
         this.AV17FieldValue_Grid.Value =  gx.num.str( this.AV29Id, 12, 0)  ;
         this.AV43SelectedItem_Grid.FieldValues.push(this.AV17FieldValue_Grid) ;
         this.AV10AllSelectedItems_Grid.push(this.AV43SelectedItem_Grid) ;
      }
      if ( ! this.AV35MultiRowItemSelected_Grid )
      {
         this.AV11CheckAll_Grid =  false  ;
      }
   };
   this.s252_client=function()
   {
   };
   this.e172z1_client=function()
   {
      this.clearMessages();
      /* Start For Each Line in Grid */
      var rowIdx30 = 1 ;
      var currentRowIdx30 = gx.fn.currentGridRowImpl(30) ;
      var rowIdxS30 ;
      var gridObj30 = gx.O.getGridById(30,0) ;
      while ( rowIdx30 <= gridObj30.grid.rows.length )
      {
         rowIdxS30 =  gx.text.padl( gx.text.tostring( rowIdx30), 4, "0")  ;
         gridObj30.instanciateRow(gridObj30.grid.getRowById(rowIdx30 - 1));
         if ( this.AV35MultiRowItemSelected_Grid != this.AV11CheckAll_Grid )
         {
            this.AV35MultiRowItemSelected_Grid =  this.AV11CheckAll_Grid  ;
            this.s212_client();
         }
         rowIdx30 = gx.num.trunc( rowIdx30 + 1 ,0) ;
         this.refreshRowOutputs([{av:'AV35MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',pic:''},{av:'AV10AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV12CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]);
      }
      if ( currentRowIdx30 )
      {
         gridObj30.instanciateRow(currentRowIdx30);
      }
      this.s222_client();
      if ( this.AV12CountSelectedItems_Grid > 0 )
      {
         this.s232_client();
      }
      else
      {
         this.s242_client();
      }
      this.s252_client();
      this.refreshOutputs([{av:'AV35MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',pic:''},{av:'AV10AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV12CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s262_client=function()
   {
      this.AV36MultiRowIterator_Grid = gx.num.trunc( 1 ,0) ;
   };
   this.s272_client=function()
   {
      this.AV42S_Name =  ''  ;
      this.AV40S_Guid =  ''  ;
      this.AV41S_Id = gx.num.trunc( 0 ,0) ;
      while ( ( this.AV36MultiRowIterator_Grid <= this.AV44SelectedItems_Grid.length ) && ! this.AV44SelectedItems_Grid[this.AV36MultiRowIterator_Grid - 1].IsSelected )
      {
         this.AV36MultiRowIterator_Grid = gx.num.trunc( this.AV36MultiRowIterator_Grid + 1 ,0) ;
      }
      if ( this.AV36MultiRowIterator_Grid > this.AV44SelectedItems_Grid.length )
      {
         this.AV34MultiRowHasNext_Grid =  false  ;
      }
      else
      {
         this.AV34MultiRowHasNext_Grid =  true  ;
         this.AV18FieldValues_Grid =  this.AV44SelectedItems_Grid[this.AV36MultiRowIterator_Grid - 1].FieldValues  ;
         this.s302_client();
      }
      this.AV36MultiRowIterator_Grid = gx.num.trunc( this.AV36MultiRowIterator_Grid + 1 ,0) ;
   };
   this.s302_client=function()
   {
      this.AV59GXV5 = gx.num.trunc( 1 ,0) ;
      while ( this.AV59GXV5 <= this.AV18FieldValues_Grid.length )
      {
         this.AV17FieldValue_Grid =  this.AV18FieldValues_Grid[this.AV59GXV5 - 1]  ;
         if ( this.AV17FieldValue_Grid.Name == "Name" )
         {
            this.AV42S_Name =  this.AV17FieldValue_Grid.Value  ;
         }
         else if ( this.AV17FieldValue_Grid.Name == "Guid" )
         {
            this.AV40S_Guid =  this.AV17FieldValue_Grid.Value  ;
         }
         else if ( this.AV17FieldValue_Grid.Name == "Id" )
         {
            this.AV41S_Id = gx.num.trunc( gx.num.val( this.AV17FieldValue_Grid.Value) ,0) ;
         }
         this.AV59GXV5 = gx.num.trunc( this.AV59GXV5 + 1 ,0) ;
      }
   };
   this.e112z2_client=function()
   {
      return this.executeServerEvent("'E_ADDSELECTED'", false, null, false, false);
   };
   this.e182z2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e192z2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,31,32,33,34,35,36,37,40,41,42,43,46,47,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",30,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.useraddrole",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,true,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addCheckBox("Multirowitemselected_grid",31,"vMULTIROWITEMSELECTED_GRID","","","MultiRowItemSelected_Grid","boolean","true","false","e162z2_client",true,false,20,"px","K2BToolsCheckBoxColumn");
   GridContainer.addSingleLineEdit("Name",32,"vNAME","Nombre","","Name","char",0,"px",120,80,"left",null,[],"Name","Name",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   GridContainer.addSingleLineEdit("Guid",33,"vGUID","GUID","","Guid","char",0,"px",40,40,"left",null,[],"Guid","Guid",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addSingleLineEdit("Id",34,"vID","Id","","Id","int",0,"px",12,12,"right",null,[],"Id","Id",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 49, 28, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[18]={ id: 18, fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"TABLEGRIDCONTAINER_GRID",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCHECKALL_GRID",gxz:"ZV11CheckAll_Grid",gxold:"OV11CheckAll_Grid",gxvar:"AV11CheckAll_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV11CheckAll_Grid=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV11CheckAll_Grid=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCHECKALL_GRID",gx.O.AV11CheckAll_Grid,true)},c2v:function(){if(this.val()!==undefined)gx.O.AV11CheckAll_Grid=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCHECKALL_GRID")},nac:gx.falseFn,evt:"e172z1_client",values:['true','false']};
   GXValidFnc[31]={ id:31 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMULTIROWITEMSELECTED_GRID",gxz:"ZV35MultiRowItemSelected_Grid",gxold:"OV35MultiRowItemSelected_Grid",gxvar:"AV35MultiRowItemSelected_Grid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV35MultiRowItemSelected_Grid=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV35MultiRowItemSelected_Grid=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vMULTIROWITEMSELECTED_GRID",row || gx.fn.currentGridRowImpl(30),gx.O.AV35MultiRowItemSelected_Grid,true)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV35MultiRowItemSelected_Grid=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("vMULTIROWITEMSELECTED_GRID",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn,evt:"e162z2_client",values:['true','false']};
   GXValidFnc[32]={ id:32 ,lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV37Name",gxold:"OV37Name",gxvar:"AV37Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV37Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV37Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(30),gx.O.AV37Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV37Name=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[33]={ id:33 ,lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGUID",gxz:"ZV25Guid",gxold:"OV25Guid",gxvar:"AV25Guid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV25Guid=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV25Guid=Value},v2c:function(row){gx.fn.setGridControlValue("vGUID",row || gx.fn.currentGridRowImpl(30),gx.O.AV25Guid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV25Guid=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vGUID",row || gx.fn.currentGridRowImpl(30))},nac:gx.falseFn};
   GXValidFnc[34]={ id:34 ,lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:30,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV29Id",gxold:"OV29Id",gxvar:"AV29Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.AV29Id=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV29Id=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(30),gx.O.AV29Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV29Id=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("vID",row || gx.fn.currentGridRowImpl(30),'.')},nac:gx.falseFn};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};
   GXValidFnc[40]={ id: 40, fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID", format:0,grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"ACTIONS_GRID_BOTTOM",grid:0};
   GXValidFnc[46]={ id: 46, fld:"ADDSELECTED",grid:0,evt:"e112z2_client"};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   this.AV11CheckAll_Grid = false ;
   this.ZV11CheckAll_Grid = false ;
   this.OV11CheckAll_Grid = false ;
   this.ZV35MultiRowItemSelected_Grid = false ;
   this.OV35MultiRowItemSelected_Grid = false ;
   this.ZV37Name = "" ;
   this.OV37Name = "" ;
   this.ZV25Guid = "" ;
   this.OV25Guid = "" ;
   this.ZV29Id = 0 ;
   this.OV29Id = 0 ;
   this.AV11CheckAll_Grid = false ;
   this.AV47UserId = "" ;
   this.AV35MultiRowItemSelected_Grid = false ;
   this.AV37Name = "" ;
   this.AV25Guid = "" ;
   this.AV29Id = 0 ;
   this.AV14CurrentPage_Grid = 0 ;
   this.AV12CountSelectedItems_Grid = 0 ;
   this.AV10AllSelectedItems_Grid = [ ] ;
   this.AV55Pgmname = "" ;
   this.AV20Grid_SelectedRows = 0 ;
   this.AV28I_LoadCount_Grid = 0 ;
   this.AV13CurrentAvailableRole = 0 ;
   this.AV34MultiRowHasNext_Grid = false ;
   this.AV36MultiRowIterator_Grid = 0 ;
   this.AV44SelectedItems_Grid = [ ] ;
   this.AV41S_Id = 0 ;
   this.AV18FieldValues_Grid = [ ] ;
   this.AV58GXV4 = 0 ;
   this.AV30Index_Grid = 0 ;
   this.AV43SelectedItem_Grid = {SKNumeric1:0,SKNumeric2:0,SKNumeric3:0,SKNumeric4:0,SKNumeric5:0,SKNumeric6:0,SKCharacter1:"",SKCharacter2:"",SKCharacter3:"",SKCharacter4:"",SKCharacter5:"",SKCharacter6:"",SKGUID1:'00000000-0000-0000-0000-000000000000',SKGUID2:'00000000-0000-0000-0000-000000000000',SKDateTime1:gx.date.nullDate(),SKDateTime2:gx.date.nullDate(),IsSelected:false,FieldValues:[]} ;
   this.AV17FieldValue_Grid = {Name:"",Value:"",ImageValue:"",ImageValue_GXI:""} ;
   this.AV59GXV5 = 0 ;
   this.AV40S_Guid = "" ;
   this.AV42S_Name = "" ;
   this.Events = {"e112z2_client": ["'E_ADDSELECTED'", true] ,"e182z2_client": ["ENTER", true] ,"e192z2_client": ["CANCEL", true] ,"e162z2_client": ["VMULTIROWITEMSELECTED_GRID.CLICK", false] ,"e172z1_client": ["VCHECKALL_GRID.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV29Id',fld:'vID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV20Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV12CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{av:'AV10AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV14CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV55Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV13CurrentAvailableRole',fld:'vCURRENTAVAILABLEROLE',pic:'ZZZ9',hsh:true},{av:'AV47UserId',fld:'vUSERID',pic:'',hsh:true},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'AV14CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV20Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV12CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV55Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{ctrl:'GRID',prop:'Backcolorstyle'},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV10AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV55Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{ctrl:'GRID',prop:'Backcolorstyle'},{av:'AV20Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:'MAINGRID_RESPONSIVETABLE_GRID',prop:'Class'},{av:'AV12CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV10AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV29Id',fld:'vID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV20Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV13CurrentAvailableRole',fld:'vCURRENTAVAILABLEROLE',pic:'ZZZ9',hsh:true},{av:'AV55Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV47UserId',fld:'vUSERID',pic:'',hsh:true},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_GRID',prop:'Visible'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV35MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',pic:''},{av:'AV20Grid_SelectedRows',fld:'vGRID_SELECTEDROWS',pic:'ZZZ9'},{av:'AV13CurrentAvailableRole',fld:'vCURRENTAVAILABLEROLE',pic:'ZZZ9',hsh:true},{av:'AV37Name',fld:'vNAME',pic:'',hsh:true},{av:'AV25Guid',fld:'vGUID',pic:'',hsh:true},{av:'AV29Id',fld:'vID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["VMULTIROWITEMSELECTED_GRID.CLICK"] = [[{av:'AV10AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV29Id',fld:'vID',grid:30,pic:'ZZZZZZZZZZZ9',hsh:true},{av:'GRID_nFirstRecordOnPage'},{av:'nRC_GXsfl_30',ctrl:'GRID',grid:30,prop:'GridRC'},{av:'AV35MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',grid:30,pic:''},{av:'AV37Name',fld:'vNAME',grid:30,pic:'',hsh:true},{av:'AV25Guid',fld:'vGUID',grid:30,pic:'',hsh:true},{av:'AV12CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:'MAINGRID_RESPONSIVETABLE_GRID',prop:'Class'},{av:'AV10AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV12CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["VCHECKALL_GRID.CLICK"] = [[{av:'AV35MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',grid:30,pic:''},{av:'GRID_nFirstRecordOnPage'},{av:'nRC_GXsfl_30',ctrl:'GRID',grid:30,prop:'GridRC'},{av:'AV12CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{av:'AV10AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV29Id',fld:'vID',grid:30,pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV37Name',fld:'vNAME',grid:30,pic:'',hsh:true},{av:'AV25Guid',fld:'vGUID',grid:30,pic:'',hsh:true},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'AV35MultiRowItemSelected_Grid',fld:'vMULTIROWITEMSELECTED_GRID',pic:''},{av:'AV10AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV12CountSelectedItems_Grid',fld:'vCOUNTSELECTEDITEMS_GRID',pic:'ZZZ9'},{ctrl:'ADDSELECTED',prop:'Visible'},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.EvtParms["'E_ADDSELECTED'"] = [[{av:'AV10AllSelectedItems_Grid',fld:'vALLSELECTEDITEMS_GRID',pic:''},{av:'AV34MultiRowHasNext_Grid',fld:'vMULTIROWHASNEXT_GRID',pic:''},{av:'AV36MultiRowIterator_Grid',fld:'vMULTIROWITERATOR_GRID',pic:'ZZZ9'},{av:'AV44SelectedItems_Grid',fld:'vSELECTEDITEMS_GRID',pic:''},{av:'AV47UserId',fld:'vUSERID',pic:'',hsh:true},{av:'AV41S_Id',fld:'vS_ID',pic:'ZZZZZZZZZZZ9'},{av:'AV18FieldValues_Grid',fld:'vFIELDVALUES_GRID',pic:''},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}],[{av:'AV44SelectedItems_Grid',fld:'vSELECTEDITEMS_GRID',pic:''},{av:'AV36MultiRowIterator_Grid',fld:'vMULTIROWITERATOR_GRID',pic:'ZZZ9'},{av:'AV41S_Id',fld:'vS_ID',pic:'ZZZZZZZZZZZ9'},{av:'AV18FieldValues_Grid',fld:'vFIELDVALUES_GRID',pic:''},{av:'AV34MultiRowHasNext_Grid',fld:'vMULTIROWHASNEXT_GRID',pic:''},{av:'AV11CheckAll_Grid',fld:'vCHECKALL_GRID',pic:''}]];
   this.setVCMap("AV14CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV12CountSelectedItems_Grid", "vCOUNTSELECTEDITEMS_GRID", 0, "int", 4, 0);
   this.setVCMap("AV10AllSelectedItems_Grid", "vALLSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV55Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV20Grid_SelectedRows", "vGRID_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV28I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV13CurrentAvailableRole", "vCURRENTAVAILABLEROLE", 0, "int", 4, 0);
   this.setVCMap("AV47UserId", "vUSERID", 0, "char", 40, 0);
   this.setVCMap("AV34MultiRowHasNext_Grid", "vMULTIROWHASNEXT_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV36MultiRowIterator_Grid", "vMULTIROWITERATOR_GRID", 0, "int", 4, 0);
   this.setVCMap("AV44SelectedItems_Grid", "vSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV41S_Id", "vS_ID", 0, "int", 12, 0);
   this.setVCMap("AV18FieldValues_Grid", "vFIELDVALUES_GRID", 0, "CollK2BSelectionItem.FieldValuesItem", 0, 0);
   this.setVCMap("AV14CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV10AllSelectedItems_Grid", "vALLSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV55Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV12CountSelectedItems_Grid", "vCOUNTSELECTEDITEMS_GRID", 0, "int", 4, 0);
   this.setVCMap("AV20Grid_SelectedRows", "vGRID_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV28I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV13CurrentAvailableRole", "vCURRENTAVAILABLEROLE", 0, "int", 4, 0);
   this.setVCMap("AV47UserId", "vUSERID", 0, "char", 40, 0);
   this.setVCMap("AV12CountSelectedItems_Grid", "vCOUNTSELECTEDITEMS_GRID", 0, "int", 4, 0);
   this.setVCMap("AV58GXV4", "vGXV4", 0, "int", 8, 0);
   this.setVCMap("AV30Index_Grid", "vINDEX_GRID", 0, "int", 4, 0);
   this.setVCMap("AV10AllSelectedItems_Grid", "vALLSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV43SelectedItem_Grid", "vSELECTEDITEM_GRID", 0, "K2BSelectionItem", 0, 0);
   this.setVCMap("AV17FieldValue_Grid", "vFIELDVALUE_GRID", 0, "K2BSelectionItem.FieldValuesItem", 0, 0);
   this.setVCMap("AV17FieldValue_Grid", "vFIELDVALUE_GRID", 0, "K2BSelectionItem.FieldValuesItem", 0, 0);
   this.setVCMap("AV43SelectedItem_Grid", "vSELECTEDITEM_GRID", 0, "K2BSelectionItem", 0, 0);
   this.setVCMap("AV30Index_Grid", "vINDEX_GRID", 0, "int", 4, 0);
   this.setVCMap("AV58GXV4", "vGXV4", 0, "int", 8, 0);
   this.setVCMap("AV14CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV10AllSelectedItems_Grid", "vALLSELECTEDITEMS_GRID", 0, "CollK2BSelectionItem", 0, 0);
   this.setVCMap("AV55Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV12CountSelectedItems_Grid", "vCOUNTSELECTEDITEMS_GRID", 0, "int", 4, 0);
   this.setVCMap("AV20Grid_SelectedRows", "vGRID_SELECTEDROWS", 0, "int", 4, 0);
   this.setVCMap("AV28I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV13CurrentAvailableRole", "vCURRENTAVAILABLEROLE", 0, "int", 4, 0);
   this.setVCMap("AV47UserId", "vUSERID", 0, "char", 40, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV14CurrentPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV10AllSelectedItems_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV55Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV12CountSelectedItems_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV29Id", rfrProp:"Value", gxAttId:"Id"});
   GridContainer.addRefreshingVar({rfrVar:"AV20Grid_SelectedRows"});
   GridContainer.addRefreshingVar({rfrVar:"AV28I_LoadCount_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV13CurrentAvailableRole"});
   GridContainer.addRefreshingVar({rfrVar:"AV47UserId"});
   GridContainer.addRefreshingParm({rfrVar:"AV14CurrentPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV10AllSelectedItems_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV55Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV12CountSelectedItems_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV29Id", rfrProp:"Value", gxAttId:"Id"});
   GridContainer.addRefreshingParm({rfrVar:"AV20Grid_SelectedRows"});
   GridContainer.addRefreshingParm({rfrVar:"AV28I_LoadCount_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV13CurrentAvailableRole"});
   GridContainer.addRefreshingParm({rfrVar:"AV47UserId"});
   GridContainer.addRefreshingParm(this.GXValidFnc[28]);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.useraddrole);});
