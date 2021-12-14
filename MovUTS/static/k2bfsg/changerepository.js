gx.evt.autoSkip = false;
gx.define('k2bfsg.changerepository', false, function () {
   this.ServerClass =  "k2bfsg.changerepository" ;
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
      this.AV9CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV28HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV29RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV17I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV9CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV28HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV29RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV17I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV29RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV9CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV28HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
   };
   this.s112_client=function()
   {
   };
   this.s132_client=function()
   {
   };
   this.s142_client=function()
   {
   };
   this.s192_client=function()
   {
   };
   this.s172_client=function()
   {
      gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption", "1" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV9CurrentPage_Grid-1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV9CurrentPage_Grid, 4, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV9CurrentPage_Grid+1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class", "K2BToolsTextBlock_PaginationNormal" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class", "K2BToolsTextBlock_PaginationNormal" );
      if ( ((0==this.AV9CurrentPage_Grid)) || ( this.AV9CurrentPage_Grid <= 1 ) )
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
         if ( this.AV9CurrentPage_Grid == 2 )
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
            if ( this.AV9CurrentPage_Grid == 3 )
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
      if ( this.AV28HasNextPage_Grid == false )
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
      if ( ( this.AV9CurrentPage_Grid <= 1 ) && ( this.AV28HasNextPage_Grid == false ) )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", true );
      }
   };
   this.e182a1_client=function()
   {
      this.clearMessages();
      this.AV9CurrentPage_Grid = gx.num.trunc( 1 ,0) ;
      this.refreshOutputs([{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e172a1_client=function()
   {
      this.clearMessages();
      if ( this.AV9CurrentPage_Grid > 1 )
      {
         this.AV9CurrentPage_Grid = gx.num.trunc( this.AV9CurrentPage_Grid - 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e192a1_client=function()
   {
      this.clearMessages();
      if ( this.AV28HasNextPage_Grid )
      {
         this.AV9CurrentPage_Grid = gx.num.trunc( this.AV9CurrentPage_Grid + 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e202a1_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible") == false )
      {
         this.AV31GridSettingsRowsPerPage_Grid = gx.num.trunc( this.AV29RowsPerPage_Grid ,0) ;
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", false );
      }
      this.refreshOutputs([{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV31GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]);
      return gx.$.Deferred().resolve();
   };
   this.e162a2_client=function()
   {
      return this.executeServerEvent("'E_SETACTIVE'", true, arguments[0], false, false);
   };
   this.e112a2_client=function()
   {
      return this.executeServerEvent("'SAVEGRIDSETTINGS(GRID)'", false, null, false, false);
   };
   this.e212a2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e222a2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,63,64,65,66,67,68,69,72,73,74,75,76,79,81,83,85,87,89,91,93,94,95,96];
   this.GXLastCtrlId =96;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",62,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.changerepository",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Connectionname",63,"vCONNECTIONNAME","","","ConnectionName","char",0,"px",120,80,"left",null,[],"Connectionname","ConnectionName",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   GridContainer.addSingleLineEdit("Repositoryname",64,"vREPOSITORYNAME","Repositorio","","RepositoryName","char",0,"px",60,60,"left",null,[],"Repositoryname","RepositoryName",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addSingleLineEdit("Status",65,"vSTATUS","Estado","","Status","char",0,"px",50,50,"left",null,[],"Status","Status",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addSingleLineEdit("Setactive_action",66,"vSETACTIVE_ACTION","","","SetActive_Action","char",0,"px",20,20,"left","e162a2_client",[],"Setactive_action","SetActive_Action",true,0,false,false,"K2BT_TextAction",1,"K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 97, 50, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[24]={ id: 24, fld:"LAYOUTDEFINED_TABLE7_GRID",grid:0};
   GXValidFnc[27]={ id: 27, fld:"GRIDSETTINGS_GLOBALTABLE_GRID",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"GRIDSETTINGS_LABELGRID",grid:0,evt:"e202a1_client"};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"GRIDSETTINGS_CONTENTOUTERTABLEGRID",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"GSLAYOUTDEFINED_GRIDTABLE1",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"GRIDCUSTOMIZATIONCONTAINER_GRID",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"GSLAYOUTDEFINED_GRIDRUNTIMECOLUMNSELECTIONTB", format:0,grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"GSLAYOUTDEFINED_GRIDCUSTOMIZATIONCOLLAPSIBLESECTION",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"ROWSPERPAGECONTAINER_GRID",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id:50 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDSETTINGSROWSPERPAGE_GRID",gxz:"ZV31GridSettingsRowsPerPage_Grid",gxold:"OV31GridSettingsRowsPerPage_Grid",gxvar:"AV31GridSettingsRowsPerPage_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV31GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV31GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vGRIDSETTINGSROWSPERPAGE_GRID",gx.O.AV31GridSettingsRowsPerPage_Grid)},c2v:function(){if(this.val()!==undefined)gx.O.AV31GridSettingsRowsPerPage_Grid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRIDSETTINGSROWSPERPAGE_GRID",'.')},nac:gx.falseFn};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"GRIDSETTINGS_SAVEGRID",grid:0,evt:"e112a2_client"};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[63]={ id:63 ,lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONNECTIONNAME",gxz:"ZV8ConnectionName",gxold:"OV8ConnectionName",gxvar:"AV8ConnectionName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV8ConnectionName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV8ConnectionName=Value},v2c:function(row){gx.fn.setGridControlValue("vCONNECTIONNAME",row || gx.fn.currentGridRowImpl(62),gx.O.AV8ConnectionName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV8ConnectionName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vCONNECTIONNAME",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn};
   GXValidFnc[64]={ id:64 ,lvl:2,type:"char",len:60,dec:0,sign:false,ro:0,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vREPOSITORYNAME",gxz:"ZV22RepositoryName",gxold:"OV22RepositoryName",gxvar:"AV22RepositoryName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV22RepositoryName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV22RepositoryName=Value},v2c:function(row){gx.fn.setGridControlValue("vREPOSITORYNAME",row || gx.fn.currentGridRowImpl(62),gx.O.AV22RepositoryName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV22RepositoryName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vREPOSITORYNAME",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn};
   GXValidFnc[65]={ id:65 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:0,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSTATUS",gxz:"ZV24Status",gxold:"OV24Status",gxvar:"AV24Status",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV24Status=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV24Status=Value},v2c:function(row){gx.fn.setGridControlValue("vSTATUS",row || gx.fn.currentGridRowImpl(62),gx.O.AV24Status,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV24Status=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vSTATUS",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn};
   GXValidFnc[66]={ id:66 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSETACTIVE_ACTION",gxz:"ZV23SetActive_Action",gxold:"OV23SetActive_Action",gxvar:"AV23SetActive_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV23SetActive_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV23SetActive_Action=Value},v2c:function(row){gx.fn.setGridControlValue("vSETACTIVE_ACTION",row || gx.fn.currentGridRowImpl(62),gx.O.AV23SetActive_Action,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV23SetActive_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vSETACTIVE_ACTION",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn,evt:"e162a2_client"};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};
   GXValidFnc[72]={ id: 72, fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID", format:0,grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"LAYOUTDEFINED_SECTION8_GRID",grid:0};
   GXValidFnc[76]={ id: 76, fld:"PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID",grid:0};
   GXValidFnc[79]={ id: 79, fld:"PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e172a1_client"};
   GXValidFnc[81]={ id: 81, fld:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e182a1_client"};
   GXValidFnc[83]={ id: 83, fld:"PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[85]={ id: 85, fld:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e172a1_client"};
   GXValidFnc[87]={ id: 87, fld:"PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[89]={ id: 89, fld:"PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e192a1_client"};
   GXValidFnc[91]={ id: 91, fld:"PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[93]={ id: 93, fld:"PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e192a1_client"};
   GXValidFnc[94]={ id: 94, fld:"",grid:0};
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id: 96, fld:"",grid:0};
   this.AV31GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV31GridSettingsRowsPerPage_Grid = 0 ;
   this.OV31GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV8ConnectionName = "" ;
   this.OV8ConnectionName = "" ;
   this.ZV22RepositoryName = "" ;
   this.OV22RepositoryName = "" ;
   this.ZV24Status = "" ;
   this.OV24Status = "" ;
   this.ZV23SetActive_Action = "" ;
   this.OV23SetActive_Action = "" ;
   this.AV31GridSettingsRowsPerPage_Grid = 0 ;
   this.AV8ConnectionName = "" ;
   this.AV22RepositoryName = "" ;
   this.AV24Status = "" ;
   this.AV23SetActive_Action = "" ;
   this.AV9CurrentPage_Grid = 0 ;
   this.AV34Pgmname = "" ;
   this.AV28HasNextPage_Grid = false ;
   this.AV29RowsPerPage_Grid = 0 ;
   this.AV17I_LoadCount_Grid = 0 ;
   this.Events = {"e162a2_client": ["'E_SETACTIVE'", true] ,"e112a2_client": ["'SAVEGRIDSETTINGS(GRID)'", true] ,"e212a2_client": ["ENTER", true] ,"e222a2_client": ["CANCEL", true] ,"e182a1_client": ["'PAGINGFIRST(GRID)'", false] ,"e172a1_client": ["'PAGINGPREVIOUS(GRID)'", false] ,"e192a1_client": ["'PAGINGNEXT(GRID)'", false] ,"e202a1_client": ["'TOGGLEGRIDSETTINGS(GRID)'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV34Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV28HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]];
   this.EvtParms["START"] = [[{av:'AV34Pgmname',fld:'vPGMNAME',pic:'',hsh:true}],[{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV31GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV34Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV28HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true}],[{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV28HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV34Pgmname',fld:'vPGMNAME',pic:'',hsh:true}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_GRID',prop:'Visible'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV28HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV23SetActive_Action',fld:'vSETACTIVE_ACTION',pic:''},{av:'AV8ConnectionName',fld:'vCONNECTIONNAME',pic:'',hsh:true},{av:'AV22RepositoryName',fld:'vREPOSITORYNAME',pic:''},{av:'AV24Status',fld:'vSTATUS',pic:''},{av:'gx.fn.getCtrlProperty("vSETACTIVE_ACTION","Visible")',ctrl:'vSETACTIVE_ACTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'}]];
   this.EvtParms["'E_SETACTIVE'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV34Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV28HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV8ConnectionName',fld:'vCONNECTIONNAME',pic:'',hsh:true}],[{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]];
   this.EvtParms["'PAGINGFIRST(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV34Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV28HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]];
   this.EvtParms["'PAGINGPREVIOUS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV34Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV28HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]];
   this.EvtParms["'PAGINGNEXT(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV34Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV28HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]];
   this.EvtParms["'TOGGLEGRIDSETTINGS(GRID)'"] = [[{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'}],[{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV31GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]];
   this.EvtParms["'SAVEGRIDSETTINGS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV34Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV28HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV31GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'}],[{av:'AV29RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV9CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]];
   this.setVCMap("AV9CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV28HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV29RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV17I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV9CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV28HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV29RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV17I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV29RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV9CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV28HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV9CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV28HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV29RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV17I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV34Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV9CurrentPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV28HasNextPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV29RowsPerPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV17I_LoadCount_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV34Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV9CurrentPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV28HasNextPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV29RowsPerPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV17I_LoadCount_Grid"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.changerepository);});
