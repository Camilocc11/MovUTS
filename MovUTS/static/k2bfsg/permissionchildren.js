gx.evt.autoSkip = false;
gx.define('k2bfsg.permissionchildren', true, function (CmpContext) {
   this.ServerClass =  "k2bfsg.permissionchildren" ;
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
      this.AV15CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV18HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV36RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV17I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV32ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.AV28PermissionId=gx.fn.getControlValue("vPERMISSIONID") ;
      this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV15CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV18HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV36RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV17I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV32ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.AV28PermissionId=gx.fn.getControlValue("vPERMISSIONID") ;
      this.AV36RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV15CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV18HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
   };
   this.Validv_Accesstype=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(83);
      return this.validCliEvt("Validv_Accesstype", 83, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vACCESSTYPE");
         this.AnyError  = 0;
         if ( ! ( ( this.AV23AccessType == "A" ) || ( this.AV23AccessType == "R" ) ) )
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
   this.s132_client=function()
   {
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
   this.e19381_client=function()
   {
      this.clearMessages();
      this.AV15CurrentPage_Grid = gx.num.trunc( 1 ,0) ;
      this.refreshOutputs([{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e18381_client=function()
   {
      this.clearMessages();
      if ( this.AV15CurrentPage_Grid > 1 )
      {
         this.AV15CurrentPage_Grid = gx.num.trunc( this.AV15CurrentPage_Grid - 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e20381_client=function()
   {
      this.clearMessages();
      if ( this.AV18HasNextPage_Grid )
      {
         this.AV15CurrentPage_Grid = gx.num.trunc( this.AV15CurrentPage_Grid + 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e22382_client=function()
   {
      this.clearMessages();
      this.call("com.movuts.k2bfsg.entryapplicationpermission", ["DSP", this.AV32ApplicationId, this.AV24Id]);
      this.refreshOutputs([{av:'AV24Id',fld:'vID',pic:''},{av:'AV32ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e21381_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible") == false )
      {
         this.AV38GridSettingsRowsPerPage_Grid = gx.num.trunc( this.AV36RowsPerPage_Grid ,0) ;
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", false );
      }
      this.refreshOutputs([{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV38GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]);
      return gx.$.Deferred().resolve();
   };
   this.e17382_client=function()
   {
      return this.executeServerEvent("'E_DELETE'", true, arguments[0], false, false);
   };
   this.e11382_client=function()
   {
      return this.executeServerEvent("'E_ADD'", false, null, false, false);
   };
   this.e12382_client=function()
   {
      return this.executeServerEvent("'SAVEGRIDSETTINGS(GRID)'", false, null, false, false);
   };
   this.e23382_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e24382_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,71,74,75,76,77,78,79,80,81,82,84,85,86,87,88,89,90,91,94,95,96,97,98,101,103,105,107,109,111,113,115,116,117,118];
   this.GXLastCtrlId =118;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",83,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.permissionchildren",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Name",84,"vNAME","Nombre","","Name","char",0,"px",120,80,"left","e22382_client",[],"Name","Name",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   GridContainer.addSingleLineEdit("Dsc",85,"vDSC","Descripción","","Dsc","char",570,"px",254,80,"left",null,[],"Dsc","Dsc",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addComboBox("Accesstype",86,"vACCESSTYPE","Tipo de acceso","AccessType","char",null,0,true,false,0,"px","K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addSingleLineEdit("Id",87,"vID","Id","","Id","char",0,"px",40,40,"left",null,[],"Id","Id",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addBitmap("&Delete_action","vDELETE_ACTION",88,20,"px",17,"px","e17382_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 119, 37, "K2BControlBeautify", this.CmpContext + "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[18]={ id: 18, fld:"GRIDTITLE_GRID", format:0,grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"GRIDCOMPONENTCONTENT_GRID",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"LAYOUTDEFINED_GRID_INNER_GRID",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"LAYOUTDEFINED_TABLE10_GRID",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"LAYOUTDEFINED_FILTERGLOBALCONTAINER_GRID",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"LAYOUTDEFINED_ONLYGENERICFILTERLAYOUT_GRID",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"LAYOUTDEFINED_SECTION6_GRID",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id:37 ,lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGENERICFILTER_GRID",gxz:"ZV20GenericFilter_Grid",gxold:"OV20GenericFilter_Grid",gxvar:"AV20GenericFilter_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV20GenericFilter_Grid=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV20GenericFilter_Grid=Value},v2c:function(){gx.fn.setControlValue("vGENERICFILTER_GRID",gx.O.AV20GenericFilter_Grid,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV20GenericFilter_Grid=this.val()},val:function(){return gx.fn.getControlValue("vGENERICFILTER_GRID")},nac:gx.falseFn};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"LAYOUTDEFINED_TABLE7_GRID",grid:0};
   GXValidFnc[43]={ id: 43, fld:"GRIDSETTINGS_GLOBALTABLE_GRID",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"GRIDSETTINGS_LABELGRID",grid:0,evt:"e21381_client"};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"GRIDSETTINGS_CONTENTOUTERTABLEGRID",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"GSLAYOUTDEFINED_GRIDTABLE1",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"GRIDCUSTOMIZATIONCONTAINER_GRID",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"GSLAYOUTDEFINED_GRIDRUNTIMECOLUMNSELECTIONTB", format:0,grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"GSLAYOUTDEFINED_GRIDCUSTOMIZATIONCOLLAPSIBLESECTION",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"ROWSPERPAGECONTAINER_GRID",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDSETTINGSROWSPERPAGE_GRID",gxz:"ZV38GridSettingsRowsPerPage_Grid",gxold:"OV38GridSettingsRowsPerPage_Grid",gxvar:"AV38GridSettingsRowsPerPage_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV38GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV38GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vGRIDSETTINGSROWSPERPAGE_GRID",gx.O.AV38GridSettingsRowsPerPage_Grid)},c2v:function(){if(this.val()!==undefined)gx.O.AV38GridSettingsRowsPerPage_Grid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRIDSETTINGSROWSPERPAGE_GRID",'.')},nac:gx.falseFn};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"GRIDSETTINGS_SAVEGRID",grid:0,evt:"e12382_client"};
   GXValidFnc[71]={ id: 71, fld:"ACTIONS_GRID_TOPRIGHT",grid:0};
   GXValidFnc[74]={ id: 74, fld:"ADD",grid:0,evt:"e11382_client"};
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[84]={ id:84 ,lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:83,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV21Name",gxold:"OV21Name",gxvar:"AV21Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV21Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV21Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(83),gx.O.AV21Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV21Name=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(83))},nac:gx.falseFn,evt:"e22382_client"};
   GXValidFnc[85]={ id:85 ,lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:83,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",gxz:"ZV22Dsc",gxold:"OV22Dsc",gxvar:"AV22Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV22Dsc=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV22Dsc=Value},v2c:function(row){gx.fn.setGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(83),gx.O.AV22Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV22Dsc=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDSC",row || gx.fn.currentGridRowImpl(83))},nac:gx.falseFn};
   GXValidFnc[86]={ id:86 ,lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:83,gxgrid:this.GridContainer,fnc:this.Validv_Accesstype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vACCESSTYPE",gxz:"ZV23AccessType",gxold:"OV23AccessType",gxvar:"AV23AccessType",ucs:[],op:[86],ip:[86],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV23AccessType=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV23AccessType=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vACCESSTYPE",row || gx.fn.currentGridRowImpl(83),gx.O.AV23AccessType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV23AccessType=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vACCESSTYPE",row || gx.fn.currentGridRowImpl(83))},nac:gx.falseFn};
   GXValidFnc[87]={ id:87 ,lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:83,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV24Id",gxold:"OV24Id",gxvar:"AV24Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV24Id=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV24Id=Value},v2c:function(row){gx.fn.setGridControlValue("vID",row || gx.fn.currentGridRowImpl(83),gx.O.AV24Id,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV24Id=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vID",row || gx.fn.currentGridRowImpl(83))},nac:gx.falseFn};
   GXValidFnc[88]={ id:88 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:83,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE_ACTION",gxz:"ZV25Delete_Action",gxold:"OV25Delete_Action",gxvar:"AV25Delete_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV25Delete_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV25Delete_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(83),gx.O.AV25Delete_Action,gx.O.AV42Delete_action_GXI)},c2v:function(row){gx.O.AV42Delete_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV25Delete_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(83))},val_GXI:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION_GXI",row || gx.fn.currentGridRowImpl(83))}, gxvar_GXI:'AV42Delete_action_GXI',nac:gx.falseFn,evt:"e17382_client"};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};
   GXValidFnc[94]={ id: 94, fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID", format:0,grid:0};
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id: 96, fld:"",grid:0};
   GXValidFnc[97]={ id: 97, fld:"LAYOUTDEFINED_SECTION8_GRID",grid:0};
   GXValidFnc[98]={ id: 98, fld:"PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID",grid:0};
   GXValidFnc[101]={ id: 101, fld:"PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e18381_client"};
   GXValidFnc[103]={ id: 103, fld:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e19381_client"};
   GXValidFnc[105]={ id: 105, fld:"PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[107]={ id: 107, fld:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e18381_client"};
   GXValidFnc[109]={ id: 109, fld:"PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[111]={ id: 111, fld:"PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e20381_client"};
   GXValidFnc[113]={ id: 113, fld:"PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[115]={ id: 115, fld:"PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e20381_client"};
   GXValidFnc[116]={ id: 116, fld:"",grid:0};
   GXValidFnc[117]={ id: 117, fld:"",grid:0};
   GXValidFnc[118]={ id: 118, fld:"",grid:0};
   this.AV20GenericFilter_Grid = "" ;
   this.ZV20GenericFilter_Grid = "" ;
   this.OV20GenericFilter_Grid = "" ;
   this.AV38GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV38GridSettingsRowsPerPage_Grid = 0 ;
   this.OV38GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV21Name = "" ;
   this.OV21Name = "" ;
   this.ZV22Dsc = "" ;
   this.OV22Dsc = "" ;
   this.ZV23AccessType = "" ;
   this.OV23AccessType = "" ;
   this.ZV24Id = "" ;
   this.OV24Id = "" ;
   this.ZV25Delete_Action = "" ;
   this.OV25Delete_Action = "" ;
   this.AV20GenericFilter_Grid = "" ;
   this.AV38GridSettingsRowsPerPage_Grid = 0 ;
   this.AV32ApplicationId = 0 ;
   this.AV28PermissionId = "" ;
   this.AV21Name = "" ;
   this.AV22Dsc = "" ;
   this.AV23AccessType = "" ;
   this.AV24Id = "" ;
   this.AV25Delete_Action = "" ;
   this.AV15CurrentPage_Grid = 0 ;
   this.AV41Pgmname = "" ;
   this.AV18HasNextPage_Grid = false ;
   this.AV36RowsPerPage_Grid = 0 ;
   this.AV17I_LoadCount_Grid = 0 ;
   this.Events = {"e17382_client": ["'E_DELETE'", true] ,"e11382_client": ["'E_ADD'", true] ,"e12382_client": ["'SAVEGRIDSETTINGS(GRID)'", true] ,"e23382_client": ["ENTER", true] ,"e24382_client": ["CANCEL", true] ,"e19381_client": ["'PAGINGFIRST(GRID)'", false] ,"e18381_client": ["'PAGINGPREVIOUS(GRID)'", false] ,"e20381_client": ["'PAGINGNEXT(GRID)'", false] ,"e22382_client": ["VNAME.CLICK", false] ,"e21381_client": ["'TOGGLEGRIDSETTINGS(GRID)'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV20GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV36RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV32ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV28PermissionId',fld:'vPERMISSIONID',pic:''},{av:'sPrefix'},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV41Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'},{ctrl:'ADD',prop:'Tooltiptext'}]];
   this.EvtParms["START"] = [[{av:'AV41Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV32ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV28PermissionId',fld:'vPERMISSIONID',pic:''}],[{av:'AV36RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV38GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV20GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV41Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV20GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true}],[{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'},{ctrl:'ADD',prop:'Visible'},{ctrl:'ADD',prop:'Tooltiptext'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV36RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV32ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV28PermissionId',fld:'vPERMISSIONID',pic:''},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV41Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV20GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_GRID',prop:'Visible'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV25Delete_Action',fld:'vDELETE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Enabled")',ctrl:'vDELETE_ACTION',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Tooltiptext")',ctrl:'vDELETE_ACTION',prop:'Tooltiptext'},{av:'AV21Name',fld:'vNAME',pic:''},{av:'AV22Dsc',fld:'vDSC',pic:''},{ctrl:'vACCESSTYPE'},{av:'AV23AccessType',fld:'vACCESSTYPE',pic:''},{av:'AV24Id',fld:'vID',pic:''},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'}]];
   this.EvtParms["'PAGINGFIRST(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV41Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV20GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV36RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV32ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV28PermissionId',fld:'vPERMISSIONID',pic:''},{av:'sPrefix'}],[{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'},{ctrl:'ADD',prop:'Tooltiptext'}]];
   this.EvtParms["'PAGINGPREVIOUS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV41Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV20GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV36RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV32ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV28PermissionId',fld:'vPERMISSIONID',pic:''},{av:'sPrefix'}],[{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'},{ctrl:'ADD',prop:'Tooltiptext'}]];
   this.EvtParms["'PAGINGNEXT(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV41Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV20GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV36RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV32ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV28PermissionId',fld:'vPERMISSIONID',pic:''},{av:'sPrefix'}],[{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'},{ctrl:'ADD',prop:'Tooltiptext'}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV41Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV20GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV36RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV32ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV28PermissionId',fld:'vPERMISSIONID',pic:''},{av:'sPrefix'},{av:'AV24Id',fld:'vID',pic:''}],[{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'},{ctrl:'ADD',prop:'Tooltiptext'}]];
   this.EvtParms["'E_ADD'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV41Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV20GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV36RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV32ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV28PermissionId',fld:'vPERMISSIONID',pic:''},{av:'sPrefix'}],[{av:'AV28PermissionId',fld:'vPERMISSIONID',pic:''},{av:'AV32ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'},{ctrl:'ADD',prop:'Tooltiptext'}]];
   this.EvtParms["VNAME.CLICK"] = [[{av:'AV32ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV24Id',fld:'vID',pic:''}],[{av:'AV24Id',fld:'vID',pic:''},{av:'AV32ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'}]];
   this.EvtParms["'TOGGLEGRIDSETTINGS(GRID)'"] = [[{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV36RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'}],[{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV38GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]];
   this.EvtParms["'SAVEGRIDSETTINGS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV41Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV20GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV18HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV36RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV32ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV28PermissionId',fld:'vPERMISSIONID',pic:''},{av:'sPrefix'},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV38GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'}],[{av:'AV36RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV15CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{ctrl:'ADD',prop:'Visible'},{ctrl:'ADD',prop:'Tooltiptext'}]];
   this.EvtParms["VALIDV_ACCESSTYPE"] = [[{ctrl:'vACCESSTYPE'},{av:'AV23AccessType',fld:'vACCESSTYPE',pic:''}],[{ctrl:'vACCESSTYPE'},{av:'AV23AccessType',fld:'vACCESSTYPE',pic:''}]];
   this.setVCMap("AV15CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV18HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV36RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV17I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV32ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV28PermissionId", "vPERMISSIONID", 0, "char", 40, 0);
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV15CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV18HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV36RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV17I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV32ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV28PermissionId", "vPERMISSIONID", 0, "char", 40, 0);
   this.setVCMap("AV36RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV15CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV18HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV15CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV18HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV36RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV17I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV32ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV28PermissionId", "vPERMISSIONID", 0, "char", 40, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV41Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV15CurrentPage_Grid"});
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar({rfrVar:"AV18HasNextPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV36RowsPerPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV17I_LoadCount_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV32ApplicationId"});
   GridContainer.addRefreshingVar({rfrVar:"AV28PermissionId"});
   GridContainer.addRefreshingParm({rfrVar:"AV41Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV15CurrentPage_Grid"});
   GridContainer.addRefreshingParm(this.GXValidFnc[37]);
   GridContainer.addRefreshingParm({rfrVar:"AV18HasNextPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV36RowsPerPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV17I_LoadCount_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV32ApplicationId"});
   GridContainer.addRefreshingParm({rfrVar:"AV28PermissionId"});
   this.Initialize( );
});
