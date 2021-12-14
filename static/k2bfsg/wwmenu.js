gx.evt.autoSkip = false;
gx.define('k2bfsg.wwmenu', false, function () {
   this.ServerClass =  "k2bfsg.wwmenu" ;
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
      this.AV16CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV15CurrentApplicationId=gx.fn.getIntegerValue("vCURRENTAPPLICATIONID",'.') ;
      this.AV9ApplicationId_Filter_PreviousValue=gx.fn.getIntegerValue("vAPPLICATIONID_FILTER_PREVIOUSVALUE",'.') ;
      this.AV51Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV26HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV37RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV28I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV11ConfirmationRequired=gx.fn.getControlValue("vCONFIRMATIONREQUIRED") ;
      this.AV12ConfirmationSubId=gx.fn.getControlValue("vCONFIRMATIONSUBID") ;
      this.AV9ApplicationId_Filter_PreviousValue=gx.fn.getIntegerValue("vAPPLICATIONID_FILTER_PREVIOUSVALUE",'.') ;
      this.AV51Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV16CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV26HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV15CurrentApplicationId=gx.fn.getIntegerValue("vCURRENTAPPLICATIONID",'.') ;
      this.AV37RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV28I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV12ConfirmationSubId=gx.fn.getControlValue("vCONFIRMATIONSUBID") ;
      this.AV37RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV16CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV26HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
   };
   this.s112_client=function()
   {
   };
   this.s142_client=function()
   {
   };
   this.s152_client=function()
   {
      this.s292_client();
   };
   this.s292_client=function()
   {
      gx.fn.setCtrlProperty("ADDNEW","Visible", true );
      gx.fn.setCtrlProperty("LOADAPPLICATIONMENUS","Visible", true );
      if ( this.AV15CurrentApplicationId == this.AV8ApplicationId_Filter )
      {
         gx.fn.setCtrlProperty("LOADAPPLICATIONMENUS","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("LOADAPPLICATIONMENUS","Visible", false );
         gx.fn.setCtrlProperty("LOADAPPLICATIONMENUS","Tooltiptext", "" );
      }
   };
   this.s212_client=function()
   {
   };
   this.s192_client=function()
   {
      gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption", "1" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV16CurrentPage_Grid-1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV16CurrentPage_Grid, 4, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV16CurrentPage_Grid+1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class", "K2BToolsTextBlock_PaginationNormal" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class", "K2BToolsTextBlock_PaginationNormal" );
      if ( ((0==this.AV16CurrentPage_Grid)) || ( this.AV16CurrentPage_Grid <= 1 ) )
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
         if ( this.AV16CurrentPage_Grid == 2 )
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
            if ( this.AV16CurrentPage_Grid == 3 )
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
      if ( this.AV26HasNextPage_Grid == false )
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
      if ( ( this.AV16CurrentPage_Grid <= 1 ) && ( this.AV26HasNextPage_Grid == false ) )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", true );
      }
   };
   this.e26241_client=function()
   {
      this.clearMessages();
      this.AV16CurrentPage_Grid = gx.num.trunc( 1 ,0) ;
      this.refreshOutputs([{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e25241_client=function()
   {
      this.clearMessages();
      if ( this.AV16CurrentPage_Grid > 1 )
      {
         this.AV16CurrentPage_Grid = gx.num.trunc( this.AV16CurrentPage_Grid - 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e27241_client=function()
   {
      this.clearMessages();
      if ( this.AV26HasNextPage_Grid )
      {
         this.AV16CurrentPage_Grid = gx.num.trunc( this.AV16CurrentPage_Grid + 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e28241_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible") == false )
      {
         this.AV22GridSettingsRowsPerPage_Grid = gx.num.trunc( this.AV37RowsPerPage_Grid ,0) ;
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", false );
      }
      this.refreshOutputs([{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV22GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]);
      return gx.$.Deferred().resolve();
   };
   this.e30242_client=function()
   {
      this.clearMessages();
      this.s252_client();
      this.refreshOutputs([{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.s252_client=function()
   {
      this.call("com.movuts.k2bfsg.wwmenuoptions", [this.AV8ApplicationId_Filter, this.AV30MenuId]);
   };
   this.e29242_client=function()
   {
      this.clearMessages();
      this.AV41Window.Autoresize = gx.num.trunc( true ,0) ;
      this.AV41Window.Url =  gx.http.formatLink("com.movuts.k2bfsg.entrymenu",["DSP", this.AV8ApplicationId_Filter, this.AV30MenuId])  ;
      this.AV41Window.ReturnParms =  ["AV8ApplicationId_Filter", "AV30MenuId"]  ;
      this.popupOpen(this.AV41Window) ;
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.s272_client=function()
   {
      this.AV11ConfirmationRequired =  true  ;
   };
   this.e11241_client=function()
   {
      this.clearMessages();
      this.AV12ConfirmationSubId =  ""  ;
      gx.fn.setCtrlProperty("TABLECONDITIONALCONFIRM","Visible", false );
      this.refreshOutputs([{av:'AV12ConfirmationSubId',fld:'vCONFIRMATIONSUBID',pic:''},{av:'gx.fn.getCtrlProperty("TABLECONDITIONALCONFIRM","Visible")',ctrl:'TABLECONDITIONALCONFIRM',prop:'Visible'}]);
      return gx.$.Deferred().resolve();
   };
   this.e12242_client=function()
   {
      return this.executeServerEvent("'SAVEGRIDSETTINGS(GRID)'", false, null, false, false);
   };
   this.e13242_client=function()
   {
      return this.executeServerEvent("'E_ADDNEW'", false, null, false, false);
   };
   this.e22242_client=function()
   {
      return this.executeServerEvent("'E_UPDATE'", true, arguments[0], false, false);
   };
   this.e23242_client=function()
   {
      return this.executeServerEvent("'E_DELETE'", true, arguments[0], false, false);
   };
   this.e24242_client=function()
   {
      return this.executeServerEvent("'E_SETMAIN'", true, arguments[0], false, false);
   };
   this.e14242_client=function()
   {
      return this.executeServerEvent("'E_LOADAPPLICATIONMENUS'", false, null, false, false);
   };
   this.e15242_client=function()
   {
      return this.executeServerEvent("'CONFIRMYES'", false, null, false, false);
   };
   this.e16242_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERTOGGLE_COMBINED_GRID.CLICK", true, null, false, true);
   };
   this.e17242_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERCLOSE_COMBINED_GRID.CLICK", true, null, false, true);
   };
   this.e31242_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e32242_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,82,85,86,87,88,89,90,91,92,93,96,97,98,99,100,101,102,104,105,106,107,108,109,110,111,112,113,116,117,118,119,120,123,125,127,129,131,133,135,137,138,139,140,141,142,143,144,145,146,147,148,149,150];
   this.GXLastCtrlId =150;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",103,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.wwmenu",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Menuid",104,"vMENUID","Id menú","","MenuId","int",0,"px",12,12,"right",null,[],"Menuid","MenuId",false,0,false,false,"Attribute_Grid",1,"");
   GridContainer.addSingleLineEdit("Menuname",105,"vMENUNAME","Nombre","","MenuName","char",0,"px",120,80,"left","e29242_client",[],"Menuname","MenuName",true,0,false,false,"Attribute_Grid",1,"");
   GridContainer.addSingleLineEdit("Menudescription",106,"vMENUDESCRIPTION","Descripción","","MenuDescription","char",570,"px",254,80,"left",null,[],"Menudescription","MenuDescription",true,0,false,false,"Attribute_Grid",1,"");
   GridContainer.addSingleLineEdit("Setmain_action",107,"vSETMAIN_ACTION","","","SetMain_Action","char",0,"px",20,20,"left","e24242_client",[],"Setmain_action","SetMain_Action",true,0,false,false,"K2BT_TextAction",1,"");
   GridContainer.addSingleLineEdit("Options_action",108,"vOPTIONS_ACTION","","","Options_Action","char",0,"px",20,20,"left","e30242_client",[],"Options_action","Options_Action",true,0,false,false,"K2BT_TextAction",1,"");
   GridContainer.addBitmap("&Update_action","vUPDATE_ACTION",109,20,"px",17,"px","e22242_client","","","Image_Action","");
   GridContainer.addBitmap("&Delete_action","vDELETE_ACTION",110,20,"px",17,"px","e23242_client","","","Image_Action","");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 151, 32, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[27]={ id: 27, fld:"LAYOUTDEFINED_COMBINEDFILTERLAYOUT_GRID",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"LAYOUTDEFINED_SECTION4_GRID",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id:32 ,lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGENERICFILTER_GRID",gxz:"ZV48GenericFilter_Grid",gxold:"OV48GenericFilter_Grid",gxvar:"AV48GenericFilter_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48GenericFilter_Grid=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48GenericFilter_Grid=Value},v2c:function(){gx.fn.setControlValue("vGENERICFILTER_GRID",gx.O.AV48GenericFilter_Grid,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48GenericFilter_Grid=this.val()},val:function(){return gx.fn.getControlValue("vGENERICFILTER_GRID")},nac:gx.falseFn};
   GXValidFnc[33]={ id: 33, fld:"LAYOUTDEFINED_FILTERTOGGLE_COMBINED_GRID",grid:0,evt:"e16242_client"};
   GXValidFnc[34]={ id: 34, fld:"LAYOUTDEFINED_FILTERSUMMARY_COMBINED_GRID", format:0,grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID",grid:0};
   GXValidFnc[38]={ id: 38, fld:"LAYOUTDEFINED_FILTERCLOSE_COMBINED_GRID",grid:0,evt:"e17242_client"};
   GXValidFnc[39]={ id: 39, fld:"MAINFILTERRESPONSIVETABLE_FILTERS",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"FILTERCONTAINERTABLE_FILTERS",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"TABLE_CONTAINER_APPLICATIONID_FILTER",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAPPLICATIONID_FILTER",gxz:"ZV8ApplicationId_Filter",gxold:"OV8ApplicationId_Filter",gxvar:"AV8ApplicationId_Filter",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV8ApplicationId_Filter=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV8ApplicationId_Filter=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vAPPLICATIONID_FILTER",gx.O.AV8ApplicationId_Filter);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV8ApplicationId_Filter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPPLICATIONID_FILTER",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"LAYOUTDEFINED_TABLE7_GRID",grid:0};
   GXValidFnc[54]={ id: 54, fld:"GRIDSETTINGS_GLOBALTABLE_GRID",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"GRIDSETTINGS_LABELGRID",grid:0,evt:"e28241_client"};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"GRIDSETTINGS_CONTENTOUTERTABLEGRID",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"GSLAYOUTDEFINED_GRIDTABLE1",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"GRIDCUSTOMIZATIONCONTAINER_GRID",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"GSLAYOUTDEFINED_GRIDRUNTIMECOLUMNSELECTIONTB", format:0,grid:0};
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"GSLAYOUTDEFINED_GRIDCUSTOMIZATIONCOLLAPSIBLESECTION",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"ROWSPERPAGECONTAINER_GRID",grid:0};
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id:77 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDSETTINGSROWSPERPAGE_GRID",gxz:"ZV22GridSettingsRowsPerPage_Grid",gxold:"OV22GridSettingsRowsPerPage_Grid",gxvar:"AV22GridSettingsRowsPerPage_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV22GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV22GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vGRIDSETTINGSROWSPERPAGE_GRID",gx.O.AV22GridSettingsRowsPerPage_Grid)},c2v:function(){if(this.val()!==undefined)gx.O.AV22GridSettingsRowsPerPage_Grid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRIDSETTINGSROWSPERPAGE_GRID",'.')},nac:gx.falseFn};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"GRIDSETTINGS_SAVEGRID",grid:0,evt:"e12242_client"};
   GXValidFnc[82]={ id: 82, fld:"ACTIONS_GRID_TOPRIGHT",grid:0};
   GXValidFnc[85]={ id: 85, fld:"ADDNEW",grid:0,evt:"e13242_client"};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id: 88, fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"LAYOUTDEFINED_SECTION1_GRID",grid:0};
   GXValidFnc[92]={ id: 92, fld:"LAYOUTDEFINED_SECTION7_GRID",grid:0};
   GXValidFnc[93]={ id: 93, fld:"ACTIONS_GRID_GRIDASSOCIATEDLEFT",grid:0};
   GXValidFnc[96]={ id: 96, fld:"LOADAPPLICATIONMENUS",grid:0,evt:"e14242_client"};
   GXValidFnc[97]={ id: 97, fld:"LAYOUTDEFINED_SECTION3_GRID",grid:0};
   GXValidFnc[98]={ id: 98, fld:"",grid:0};
   GXValidFnc[99]={ id: 99, fld:"",grid:0};
   GXValidFnc[100]={ id: 100, fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id: 102, fld:"",grid:0};
   GXValidFnc[104]={ id:104 ,lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:103,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMENUID",gxz:"ZV30MenuId",gxold:"OV30MenuId",gxvar:"AV30MenuId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.AV30MenuId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV30MenuId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vMENUID",row || gx.fn.currentGridRowImpl(103),gx.O.AV30MenuId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV30MenuId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("vMENUID",row || gx.fn.currentGridRowImpl(103),'.')},nac:gx.falseFn};
   GXValidFnc[105]={ id:105 ,lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:103,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMENUNAME",gxz:"ZV31MenuName",gxold:"OV31MenuName",gxvar:"AV31MenuName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV31MenuName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV31MenuName=Value},v2c:function(row){gx.fn.setGridControlValue("vMENUNAME",row || gx.fn.currentGridRowImpl(103),gx.O.AV31MenuName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV31MenuName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vMENUNAME",row || gx.fn.currentGridRowImpl(103))},nac:gx.falseFn,evt:"e29242_client"};
   GXValidFnc[106]={ id:106 ,lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:103,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMENUDESCRIPTION",gxz:"ZV29MenuDescription",gxold:"OV29MenuDescription",gxvar:"AV29MenuDescription",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV29MenuDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV29MenuDescription=Value},v2c:function(row){gx.fn.setGridControlValue("vMENUDESCRIPTION",row || gx.fn.currentGridRowImpl(103),gx.O.AV29MenuDescription,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV29MenuDescription=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vMENUDESCRIPTION",row || gx.fn.currentGridRowImpl(103))},nac:gx.falseFn};
   GXValidFnc[107]={ id:107 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:103,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSETMAIN_ACTION",gxz:"ZV38SetMain_Action",gxold:"OV38SetMain_Action",gxvar:"AV38SetMain_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV38SetMain_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV38SetMain_Action=Value},v2c:function(row){gx.fn.setGridControlValue("vSETMAIN_ACTION",row || gx.fn.currentGridRowImpl(103),gx.O.AV38SetMain_Action,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV38SetMain_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vSETMAIN_ACTION",row || gx.fn.currentGridRowImpl(103))},nac:gx.falseFn,evt:"e24242_client"};
   GXValidFnc[108]={ id:108 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:103,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOPTIONS_ACTION",gxz:"ZV34Options_Action",gxold:"OV34Options_Action",gxvar:"AV34Options_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV34Options_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV34Options_Action=Value},v2c:function(row){gx.fn.setGridControlValue("vOPTIONS_ACTION",row || gx.fn.currentGridRowImpl(103),gx.O.AV34Options_Action,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV34Options_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vOPTIONS_ACTION",row || gx.fn.currentGridRowImpl(103))},nac:gx.falseFn,evt:"e30242_client"};
   GXValidFnc[109]={ id:109 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:103,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE_ACTION",gxz:"ZV46Update_Action",gxold:"OV46Update_Action",gxvar:"AV46Update_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV46Update_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV46Update_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vUPDATE_ACTION",row || gx.fn.currentGridRowImpl(103),gx.O.AV46Update_Action,gx.O.AV55Update_action_GXI)},c2v:function(row){gx.O.AV55Update_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV46Update_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUPDATE_ACTION",row || gx.fn.currentGridRowImpl(103))},val_GXI:function(row){return gx.fn.getGridControlValue("vUPDATE_ACTION_GXI",row || gx.fn.currentGridRowImpl(103))}, gxvar_GXI:'AV55Update_action_GXI',nac:gx.falseFn,evt:"e22242_client"};
   GXValidFnc[110]={ id:110 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:103,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE_ACTION",gxz:"ZV47Delete_Action",gxold:"OV47Delete_Action",gxvar:"AV47Delete_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV47Delete_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV47Delete_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(103),gx.O.AV47Delete_Action,gx.O.AV56Delete_action_GXI)},c2v:function(row){gx.O.AV56Delete_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV47Delete_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(103))},val_GXI:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION_GXI",row || gx.fn.currentGridRowImpl(103))}, gxvar_GXI:'AV56Delete_action_GXI',nac:gx.falseFn,evt:"e23242_client"};
   GXValidFnc[111]={ id: 111, fld:"",grid:0};
   GXValidFnc[112]={ id: 112, fld:"",grid:0};
   GXValidFnc[113]={ id: 113, fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};
   GXValidFnc[116]={ id: 116, fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID", format:0,grid:0};
   GXValidFnc[117]={ id: 117, fld:"",grid:0};
   GXValidFnc[118]={ id: 118, fld:"",grid:0};
   GXValidFnc[119]={ id: 119, fld:"LAYOUTDEFINED_SECTION8_GRID",grid:0};
   GXValidFnc[120]={ id: 120, fld:"PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID",grid:0};
   GXValidFnc[123]={ id: 123, fld:"PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e25241_client"};
   GXValidFnc[125]={ id: 125, fld:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e26241_client"};
   GXValidFnc[127]={ id: 127, fld:"PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[129]={ id: 129, fld:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e25241_client"};
   GXValidFnc[131]={ id: 131, fld:"PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[133]={ id: 133, fld:"PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e27241_client"};
   GXValidFnc[135]={ id: 135, fld:"PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[137]={ id: 137, fld:"PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e27241_client"};
   GXValidFnc[138]={ id: 138, fld:"",grid:0};
   GXValidFnc[139]={ id: 139, fld:"",grid:0};
   GXValidFnc[140]={ id: 140, fld:"",grid:0};
   GXValidFnc[141]={ id: 141, fld:"TABLECONDITIONALCONFIRM",grid:0};
   GXValidFnc[142]={ id: 142, fld:"SECTION_CONDCONF_DIALOG",grid:0};
   GXValidFnc[143]={ id: 143, fld:"SECTION_CONDCONF_DIALOG_INNER",grid:0};
   GXValidFnc[144]={ id: 144, fld:"",grid:0};
   GXValidFnc[145]={ id:145 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCONFIRMMESSAGE",gxz:"ZV13ConfirmMessage",gxold:"OV13ConfirmMessage",gxvar:"AV13ConfirmMessage",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13ConfirmMessage=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV13ConfirmMessage=Value},v2c:function(){gx.fn.setControlValue("vCONFIRMMESSAGE",gx.O.AV13ConfirmMessage,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13ConfirmMessage=this.val()},val:function(){return gx.fn.getControlValue("vCONFIRMMESSAGE")},nac:gx.falseFn};
   GXValidFnc[146]={ id: 146, fld:"CONFIRM_HIDDEN_ACTIONSTABLE",grid:0};
   GXValidFnc[147]={ id: 147, fld:"I_BUTTONCONFIRMYES",grid:0,evt:"e15242_client"};
   GXValidFnc[148]={ id: 148, fld:"I_BUTTONCONFIRMNO",grid:0,evt:"e11241_client"};
   GXValidFnc[149]={ id: 149, fld:"",grid:0};
   GXValidFnc[150]={ id: 150, fld:"",grid:0};
   this.AV48GenericFilter_Grid = "" ;
   this.ZV48GenericFilter_Grid = "" ;
   this.OV48GenericFilter_Grid = "" ;
   this.AV8ApplicationId_Filter = 0 ;
   this.ZV8ApplicationId_Filter = 0 ;
   this.OV8ApplicationId_Filter = 0 ;
   this.AV22GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV22GridSettingsRowsPerPage_Grid = 0 ;
   this.OV22GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV30MenuId = 0 ;
   this.OV30MenuId = 0 ;
   this.ZV31MenuName = "" ;
   this.OV31MenuName = "" ;
   this.ZV29MenuDescription = "" ;
   this.OV29MenuDescription = "" ;
   this.ZV38SetMain_Action = "" ;
   this.OV38SetMain_Action = "" ;
   this.ZV34Options_Action = "" ;
   this.OV34Options_Action = "" ;
   this.ZV46Update_Action = "" ;
   this.OV46Update_Action = "" ;
   this.ZV47Delete_Action = "" ;
   this.OV47Delete_Action = "" ;
   this.AV13ConfirmMessage = "" ;
   this.ZV13ConfirmMessage = "" ;
   this.OV13ConfirmMessage = "" ;
   this.AV48GenericFilter_Grid = "" ;
   this.AV8ApplicationId_Filter = 0 ;
   this.AV22GridSettingsRowsPerPage_Grid = 0 ;
   this.AV13ConfirmMessage = "" ;
   this.AV30MenuId = 0 ;
   this.AV31MenuName = "" ;
   this.AV29MenuDescription = "" ;
   this.AV38SetMain_Action = "" ;
   this.AV34Options_Action = "" ;
   this.AV46Update_Action = "" ;
   this.AV47Delete_Action = "" ;
   this.AV16CurrentPage_Grid = 0 ;
   this.AV15CurrentApplicationId = 0 ;
   this.AV9ApplicationId_Filter_PreviousValue = 0 ;
   this.AV51Pgmname = "" ;
   this.AV26HasNextPage_Grid = false ;
   this.AV37RowsPerPage_Grid = 0 ;
   this.AV28I_LoadCount_Grid = 0 ;
   this.AV11ConfirmationRequired = false ;
   this.AV12ConfirmationSubId = "" ;
   this.AV41Window = {} ;
   this.Events = {"e12242_client": ["'SAVEGRIDSETTINGS(GRID)'", true] ,"e13242_client": ["'E_ADDNEW'", true] ,"e22242_client": ["'E_UPDATE'", true] ,"e23242_client": ["'E_DELETE'", true] ,"e24242_client": ["'E_SETMAIN'", true] ,"e14242_client": ["'E_LOADAPPLICATIONMENUS'", true] ,"e15242_client": ["'CONFIRMYES'", true] ,"e16242_client": ["LAYOUTDEFINED_FILTERTOGGLE_COMBINED_GRID.CLICK", true] ,"e17242_client": ["LAYOUTDEFINED_FILTERCLOSE_COMBINED_GRID.CLICK", true] ,"e31242_client": ["ENTER", true] ,"e32242_client": ["CANCEL", true] ,"e26241_client": ["'PAGINGFIRST(GRID)'", false] ,"e25241_client": ["'PAGINGPREVIOUS(GRID)'", false] ,"e27241_client": ["'PAGINGNEXT(GRID)'", false] ,"e28241_client": ["'TOGGLEGRIDSETTINGS(GRID)'", false] ,"e30242_client": ["'E_OPTIONS'", false] ,"e29242_client": ["VMENUNAME.CLICK", false] ,"e11241_client": ["'CONFIRMNO'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId_Filter_PreviousValue',fld:'vAPPLICATIONID_FILTER_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV37RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV11ConfirmationRequired',fld:'vCONFIRMATIONREQUIRED',pic:''},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'ADDNEW',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Tooltiptext'}]];
   this.EvtParms["START"] = [[{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID',prop:'Visible'},{av:'AV37RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV22GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV9ApplicationId_Filter_PreviousValue',fld:'vAPPLICATIONID_FILTER_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{av:'gx.fn.getCtrlProperty("TABLECONDITIONALCONFIRM","Visible")',ctrl:'TABLECONDITIONALCONFIRM',prop:'Visible'},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERSUMMARY_COMBINED_GRID","Caption")',ctrl:'LAYOUTDEFINED_FILTERSUMMARY_COMBINED_GRID',prop:'Caption'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV9ApplicationId_Filter_PreviousValue',fld:'vAPPLICATIONID_FILTER_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true}],[{av:'AV9ApplicationId_Filter_PreviousValue',fld:'vAPPLICATIONID_FILTER_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("vMENUID","Columnheaderclass")',ctrl:'vMENUID',prop:'Columnheaderclass'},{av:'gx.fn.getCtrlProperty("vMENUNAME","Columnheaderclass")',ctrl:'vMENUNAME',prop:'Columnheaderclass'},{av:'gx.fn.getCtrlProperty("vMENUDESCRIPTION","Columnheaderclass")',ctrl:'vMENUDESCRIPTION',prop:'Columnheaderclass'},{av:'gx.fn.getCtrlProperty("vSETMAIN_ACTION","Columnheaderclass")',ctrl:'vSETMAIN_ACTION',prop:'Columnheaderclass'},{av:'gx.fn.getCtrlProperty("vOPTIONS_ACTION","Columnheaderclass")',ctrl:'vOPTIONS_ACTION',prop:'Columnheaderclass'},{av:'gx.fn.getCtrlProperty("vUPDATE_ACTION","Columnheaderclass")',ctrl:'vUPDATE_ACTION',prop:'Columnheaderclass'},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Columnheaderclass")',ctrl:'vDELETE_ACTION',prop:'Columnheaderclass'},{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERSUMMARY_COMBINED_GRID","Caption")',ctrl:'LAYOUTDEFINED_FILTERSUMMARY_COMBINED_GRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'},{ctrl:'ADDNEW',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Tooltiptext'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV37RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_GRID',prop:'Visible'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV38SetMain_Action',fld:'vSETMAIN_ACTION',pic:''},{av:'AV34Options_Action',fld:'vOPTIONS_ACTION',pic:''},{av:'AV46Update_Action',fld:'vUPDATE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE_ACTION","Tooltiptext")',ctrl:'vUPDATE_ACTION',prop:'Tooltiptext'},{av:'AV47Delete_Action',fld:'vDELETE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Tooltiptext")',ctrl:'vDELETE_ACTION',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vSETMAIN_ACTION","Columnclass")',ctrl:'vSETMAIN_ACTION',prop:'Columnclass'},{av:'gx.fn.getCtrlProperty("vOPTIONS_ACTION","Columnclass")',ctrl:'vOPTIONS_ACTION',prop:'Columnclass'},{av:'gx.fn.getCtrlProperty("vUPDATE_ACTION","Columnclass")',ctrl:'vUPDATE_ACTION',prop:'Columnclass'},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Columnclass")',ctrl:'vDELETE_ACTION',prop:'Columnclass'},{av:'gx.fn.getCtrlProperty("vMENUID","Columnclass")',ctrl:'vMENUID',prop:'Columnclass'},{av:'gx.fn.getCtrlProperty("vMENUNAME","Columnclass")',ctrl:'vMENUNAME',prop:'Columnclass'},{av:'gx.fn.getCtrlProperty("vMENUDESCRIPTION","Columnclass")',ctrl:'vMENUDESCRIPTION',prop:'Columnclass'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'},{av:'AV31MenuName',fld:'vMENUNAME',pic:''},{av:'AV29MenuDescription',fld:'vMENUDESCRIPTION',pic:''},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'}]];
   this.EvtParms["'PAGINGFIRST(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId_Filter_PreviousValue',fld:'vAPPLICATIONID_FILTER_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV37RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV11ConfirmationRequired',fld:'vCONFIRMATIONREQUIRED',pic:''},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'ADDNEW',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Tooltiptext'}]];
   this.EvtParms["'PAGINGPREVIOUS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId_Filter_PreviousValue',fld:'vAPPLICATIONID_FILTER_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV37RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV11ConfirmationRequired',fld:'vCONFIRMATIONREQUIRED',pic:''},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'ADDNEW',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Tooltiptext'}]];
   this.EvtParms["'PAGINGNEXT(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId_Filter_PreviousValue',fld:'vAPPLICATIONID_FILTER_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV37RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV11ConfirmationRequired',fld:'vCONFIRMATIONREQUIRED',pic:''},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'ADDNEW',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Tooltiptext'}]];
   this.EvtParms["'TOGGLEGRIDSETTINGS(GRID)'"] = [[{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV37RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'}],[{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV22GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]];
   this.EvtParms["'SAVEGRIDSETTINGS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId_Filter_PreviousValue',fld:'vAPPLICATIONID_FILTER_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV37RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV22GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'}],[{av:'AV37RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV11ConfirmationRequired',fld:'vCONFIRMATIONREQUIRED',pic:''},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'ADDNEW',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Tooltiptext'}]];
   this.EvtParms["'E_ADDNEW'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId_Filter_PreviousValue',fld:'vAPPLICATIONID_FILTER_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV37RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV11ConfirmationRequired',fld:'vCONFIRMATIONREQUIRED',pic:''},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'ADDNEW',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Tooltiptext'}]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId_Filter_PreviousValue',fld:'vAPPLICATIONID_FILTER_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV37RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV11ConfirmationRequired',fld:'vCONFIRMATIONREQUIRED',pic:''},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'ADDNEW',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Tooltiptext'}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId_Filter_PreviousValue',fld:'vAPPLICATIONID_FILTER_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV37RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV11ConfirmationRequired',fld:'vCONFIRMATIONREQUIRED',pic:''},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'ADDNEW',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Tooltiptext'}]];
   this.EvtParms["'E_OPTIONS'"] = [[{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'}],[{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'}]];
   this.EvtParms["VMENUNAME.CLICK"] = [[{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'}],[]];
   this.EvtParms["'E_SETMAIN'"] = [[{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'}],[]];
   this.EvtParms["'E_LOADAPPLICATIONMENUS'"] = [[{av:'AV11ConfirmationRequired',fld:'vCONFIRMATIONREQUIRED',pic:''},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId_Filter_PreviousValue',fld:'vAPPLICATIONID_FILTER_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV37RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'AV13ConfirmMessage',fld:'vCONFIRMMESSAGE',pic:''},{av:'AV12ConfirmationSubId',fld:'vCONFIRMATIONSUBID',pic:''},{av:'gx.fn.getCtrlProperty("TABLECONDITIONALCONFIRM","Visible")',ctrl:'TABLECONDITIONALCONFIRM',prop:'Visible'},{av:'AV11ConfirmationRequired',fld:'vCONFIRMATIONREQUIRED',pic:''},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'ADDNEW',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Tooltiptext'}]];
   this.EvtParms["'CONFIRMNO'"] = [[],[{av:'AV12ConfirmationSubId',fld:'vCONFIRMATIONSUBID',pic:''},{av:'gx.fn.getCtrlProperty("TABLECONDITIONALCONFIRM","Visible")',ctrl:'TABLECONDITIONALCONFIRM',prop:'Visible'}]];
   this.EvtParms["'CONFIRMYES'"] = [[{av:'AV12ConfirmationSubId',fld:'vCONFIRMATIONSUBID',pic:''},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV9ApplicationId_Filter_PreviousValue',fld:'vAPPLICATIONID_FILTER_PREVIOUSVALUE',pic:'ZZZZZZZZZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV37RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV30MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true}],[{av:'gx.fn.getCtrlProperty("TABLECONDITIONALCONFIRM","Visible")',ctrl:'TABLECONDITIONALCONFIRM',prop:'Visible'},{av:'AV11ConfirmationRequired',fld:'vCONFIRMATIONREQUIRED',pic:''},{av:'AV16CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'vAPPLICATIONID_FILTER'},{av:'AV8ApplicationId_Filter',fld:'vAPPLICATIONID_FILTER',pic:'ZZZZZZZZZZZ9'},{av:'AV15CurrentApplicationId',fld:'vCURRENTAPPLICATIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'ADDNEW',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Visible'},{ctrl:'LOADAPPLICATIONMENUS',prop:'Tooltiptext'}]];
   this.EvtParms["LAYOUTDEFINED_FILTERTOGGLE_COMBINED_GRID.CLICK"] = [[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID',prop:'Visible'}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID',prop:'Visible'}]];
   this.EvtParms["LAYOUTDEFINED_FILTERCLOSE_COMBINED_GRID.CLICK"] = [[],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_COMBINED_GRID',prop:'Visible'}]];
   this.setVCMap("AV16CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV15CurrentApplicationId", "vCURRENTAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV9ApplicationId_Filter_PreviousValue", "vAPPLICATIONID_FILTER_PREVIOUSVALUE", 0, "int", 12, 0);
   this.setVCMap("AV51Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV26HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV37RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV28I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV11ConfirmationRequired", "vCONFIRMATIONREQUIRED", 0, "boolean", 4, 0);
   this.setVCMap("AV12ConfirmationSubId", "vCONFIRMATIONSUBID", 0, "char", 20, 0);
   this.setVCMap("AV9ApplicationId_Filter_PreviousValue", "vAPPLICATIONID_FILTER_PREVIOUSVALUE", 0, "int", 12, 0);
   this.setVCMap("AV51Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV16CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV26HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV15CurrentApplicationId", "vCURRENTAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV37RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV28I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV12ConfirmationSubId", "vCONFIRMATIONSUBID", 0, "char", 20, 0);
   this.setVCMap("AV37RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV16CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV26HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV9ApplicationId_Filter_PreviousValue", "vAPPLICATIONID_FILTER_PREVIOUSVALUE", 0, "int", 12, 0);
   this.setVCMap("AV51Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV16CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV26HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV15CurrentApplicationId", "vCURRENTAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV37RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV28I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV9ApplicationId_Filter_PreviousValue"});
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"AV51Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV16CurrentPage_Grid"});
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar({rfrVar:"AV26HasNextPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV15CurrentApplicationId"});
   GridContainer.addRefreshingVar({rfrVar:"AV37RowsPerPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV30MenuId", rfrProp:"Value", gxAttId:"Menuid"});
   GridContainer.addRefreshingVar({rfrVar:"AV28I_LoadCount_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV9ApplicationId_Filter_PreviousValue"});
   GridContainer.addRefreshingParm(this.GXValidFnc[48]);
   GridContainer.addRefreshingParm({rfrVar:"AV51Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV16CurrentPage_Grid"});
   GridContainer.addRefreshingParm(this.GXValidFnc[32]);
   GridContainer.addRefreshingParm({rfrVar:"AV26HasNextPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV15CurrentApplicationId"});
   GridContainer.addRefreshingParm({rfrVar:"AV37RowsPerPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV30MenuId", rfrProp:"Value", gxAttId:"Menuid"});
   GridContainer.addRefreshingParm({rfrVar:"AV28I_LoadCount_Grid"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.wwmenu);});
