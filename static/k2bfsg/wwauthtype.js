gx.evt.autoSkip = false;
gx.define('k2bfsg.wwauthtype', false, function () {
   this.ServerClass =  "k2bfsg.wwauthtype" ;
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
      this.AV15HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV26RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV17I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV8CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV15HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV26RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV17I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV26RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV8CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV15HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
   };
   this.Validv_Typeid=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(78);
      return this.validCliEvt("Validv_Typeid", 78, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vTYPEID");
         this.AnyError  = 0;
         if ( ! ( ( this.AV23TypeId == "AppleID" ) || ( this.AV23TypeId == "Custom" ) || ( this.AV23TypeId == "ExternalWebService" ) || ( this.AV23TypeId == "Facebook" ) || ( this.AV23TypeId == "GAMLocal" ) || ( this.AV23TypeId == "GAMRemote" ) || ( this.AV23TypeId == "GAMRemoteRest" ) || ( this.AV23TypeId == "Google" ) || ( this.AV23TypeId == "Twitter" ) || ( this.AV23TypeId == "Oauth20" ) || ( this.AV23TypeId == "Saml20" ) || ( this.AV23TypeId == "WeChat" ) ) )
         {
            try {
               gxballoon.setError("Campo Type Id fuera de rango");
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
   this.s142_client=function()
   {
      this.s252_client();
   };
   this.s252_client=function()
   {
      gx.fn.setCtrlProperty("NEW","Visible", true );
   };
   this.s152_client=function()
   {
   };
   this.e16271_client=function()
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
   this.e18271_client=function()
   {
      this.clearMessages();
      if ( this.AV15HasNextPage_Grid )
      {
         this.AV8CurrentPage_Grid = gx.num.trunc( this.AV8CurrentPage_Grid + 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e21272_client=function()
   {
      this.clearMessages();
      this.s162_client();
      this.refreshOutputs([{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''},{av:'AV19Name',fld:'vNAME',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s162_client=function()
   {
      this.call("com.movuts.k2bfsg.entryauthenticationtype", ["UPD", this.AV19Name, this.AV23TypeId]);
   };
   this.e22272_client=function()
   {
      this.clearMessages();
      this.s172_client();
      this.refreshOutputs([{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''},{av:'AV19Name',fld:'vNAME',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s172_client=function()
   {
      this.call("com.movuts.k2bfsg.entryauthenticationtype", ["DLT", this.AV19Name, this.AV23TypeId]);
   };
   this.e20271_client=function()
   {
      this.clearMessages();
      this.s182_client();
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.s182_client=function()
   {
      this.call("com.movuts.k2bfsg.entryauthenticationtype", ["INS", "", "GAMLocal"]);
   };
   this.s202_client=function()
   {
      if ( ( this.AV23TypeId == "ExternalWebService" ) || ( this.AV23TypeId == "Custom" ) )
      {
         gx.fn.setCtrlProperty("vTESTEXTERNALAUTHENTICATIONTYPE_ACTION","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("vTESTEXTERNALAUTHENTICATIONTYPE_ACTION","Visible", false );
      }
   };
   this.s212_client=function()
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
      if ( this.AV15HasNextPage_Grid == false )
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
      if ( ( this.AV8CurrentPage_Grid <= 1 ) && ( this.AV15HasNextPage_Grid == false ) )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", true );
      }
   };
   this.e17271_client=function()
   {
      this.clearMessages();
      this.AV8CurrentPage_Grid = gx.num.trunc( 1 ,0) ;
      this.refreshOutputs([{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e19271_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible") == false )
      {
         this.AV27GridSettingsRowsPerPage_Grid = gx.num.trunc( this.AV26RowsPerPage_Grid ,0) ;
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", false );
      }
      this.refreshOutputs([{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV27GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]);
      return gx.$.Deferred().resolve();
   };
   this.e23272_client=function()
   {
      this.clearMessages();
      this.s242_client();
      this.refreshOutputs([{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''},{av:'AV19Name',fld:'vNAME',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s242_client=function()
   {
      this.call("com.movuts.k2bfsg.testauthenticationtype", [this.AV19Name, this.AV23TypeId]);
   };
   this.e11272_client=function()
   {
      return this.executeServerEvent("'SAVEGRIDSETTINGS(GRID)'", false, null, false, false);
   };
   this.e24272_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25272_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,66,69,70,71,72,73,74,75,76,77,79,80,81,82,83,84,85,86,89,90,91,92,93,96,98,100,102,104,106,108,110,111,112,113];
   this.GXLastCtrlId =113;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",78,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.wwauthtype",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Name",79,"vNAME","Nombre","","Name","char",0,"px",60,60,"left",null,[],"Name","Name",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   GridContainer.addComboBox("Typeid",80,"vTYPEID","Tipo","TypeId","char",null,0,true,false,0,"px","K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addBitmap("&Update_action","vUPDATE_ACTION",81,20,"px",17,"px","e21272_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   GridContainer.addBitmap("&Delete_action","vDELETE_ACTION",82,20,"px",17,"px","e22272_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   GridContainer.addSingleLineEdit("Testexternalauthenticationtype_action",83,"vTESTEXTERNALAUTHENTICATIONTYPE_ACTION","","","TestExternalAuthenticationType_Action","char",0,"px",20,20,"left","e23272_client",[],"Testexternalauthenticationtype_action","TestExternalAuthenticationType_Action",true,0,false,false,"K2BT_TextAction",1,"K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 114, 32, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[27]={ id: 27, fld:"LAYOUTDEFINED_ONLYGENERICFILTERLAYOUT_GRID",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"LAYOUTDEFINED_SECTION6_GRID",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id:32 ,lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGENERICFILTER_GRID",gxz:"ZV31GenericFilter_Grid",gxold:"OV31GenericFilter_Grid",gxvar:"AV31GenericFilter_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV31GenericFilter_Grid=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV31GenericFilter_Grid=Value},v2c:function(){gx.fn.setControlValue("vGENERICFILTER_GRID",gx.O.AV31GenericFilter_Grid,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV31GenericFilter_Grid=this.val()},val:function(){return gx.fn.getControlValue("vGENERICFILTER_GRID")},nac:gx.falseFn};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"LAYOUTDEFINED_TABLE7_GRID",grid:0};
   GXValidFnc[38]={ id: 38, fld:"GRIDSETTINGS_GLOBALTABLE_GRID",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"GRIDSETTINGS_LABELGRID",grid:0,evt:"e19271_client"};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"GRIDSETTINGS_CONTENTOUTERTABLEGRID",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"GSLAYOUTDEFINED_GRIDTABLE1",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"GRIDCUSTOMIZATIONCONTAINER_GRID",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"GSLAYOUTDEFINED_GRIDRUNTIMECOLUMNSELECTIONTB", format:0,grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"GSLAYOUTDEFINED_GRIDCUSTOMIZATIONCOLLAPSIBLESECTION",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"ROWSPERPAGECONTAINER_GRID",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id:61 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDSETTINGSROWSPERPAGE_GRID",gxz:"ZV27GridSettingsRowsPerPage_Grid",gxold:"OV27GridSettingsRowsPerPage_Grid",gxvar:"AV27GridSettingsRowsPerPage_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV27GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV27GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vGRIDSETTINGSROWSPERPAGE_GRID",gx.O.AV27GridSettingsRowsPerPage_Grid)},c2v:function(){if(this.val()!==undefined)gx.O.AV27GridSettingsRowsPerPage_Grid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRIDSETTINGSROWSPERPAGE_GRID",'.')},nac:gx.falseFn};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"GRIDSETTINGS_SAVEGRID",grid:0,evt:"e11272_client"};
   GXValidFnc[66]={ id: 66, fld:"ACTIONS_GRID_TOPRIGHT",grid:0};
   GXValidFnc[69]={ id: 69, fld:"NEW",grid:0,evt:"e20271_client"};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[79]={ id:79 ,lvl:2,type:"char",len:60,dec:0,sign:false,ro:0,isacc:0,grid:78,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV19Name",gxold:"OV19Name",gxvar:"AV19Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV19Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV19Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(78),gx.O.AV19Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV19Name=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(78))},nac:gx.falseFn};
   GXValidFnc[80]={ id:80 ,lvl:2,type:"char",len:30,dec:0,sign:false,ro:0,isacc:0,grid:78,gxgrid:this.GridContainer,fnc:this.Validv_Typeid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTYPEID",gxz:"ZV23TypeId",gxold:"OV23TypeId",gxvar:"AV23TypeId",ucs:[],op:[80],ip:[80],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV23TypeId=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV23TypeId=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vTYPEID",row || gx.fn.currentGridRowImpl(78),gx.O.AV23TypeId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV23TypeId=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vTYPEID",row || gx.fn.currentGridRowImpl(78))},nac:gx.falseFn};
   GXValidFnc[81]={ id:81 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:78,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE_ACTION",gxz:"ZV29Update_Action",gxold:"OV29Update_Action",gxvar:"AV29Update_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV29Update_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV29Update_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vUPDATE_ACTION",row || gx.fn.currentGridRowImpl(78),gx.O.AV29Update_Action,gx.O.AV37Update_action_GXI)},c2v:function(row){gx.O.AV37Update_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV29Update_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUPDATE_ACTION",row || gx.fn.currentGridRowImpl(78))},val_GXI:function(row){return gx.fn.getGridControlValue("vUPDATE_ACTION_GXI",row || gx.fn.currentGridRowImpl(78))}, gxvar_GXI:'AV37Update_action_GXI',nac:gx.falseFn,evt:"e21272_client"};
   GXValidFnc[82]={ id:82 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:78,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE_ACTION",gxz:"ZV30Delete_Action",gxold:"OV30Delete_Action",gxvar:"AV30Delete_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV30Delete_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV30Delete_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(78),gx.O.AV30Delete_Action,gx.O.AV38Delete_action_GXI)},c2v:function(row){gx.O.AV38Delete_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV30Delete_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(78))},val_GXI:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION_GXI",row || gx.fn.currentGridRowImpl(78))}, gxvar_GXI:'AV38Delete_action_GXI',nac:gx.falseFn,evt:"e22272_client"};
   GXValidFnc[83]={ id:83 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:78,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTESTEXTERNALAUTHENTICATIONTYPE_ACTION",gxz:"ZV32TestExternalAuthenticationType_Action",gxold:"OV32TestExternalAuthenticationType_Action",gxvar:"AV32TestExternalAuthenticationType_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV32TestExternalAuthenticationType_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV32TestExternalAuthenticationType_Action=Value},v2c:function(row){gx.fn.setGridControlValue("vTESTEXTERNALAUTHENTICATIONTYPE_ACTION",row || gx.fn.currentGridRowImpl(78),gx.O.AV32TestExternalAuthenticationType_Action,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV32TestExternalAuthenticationType_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vTESTEXTERNALAUTHENTICATIONTYPE_ACTION",row || gx.fn.currentGridRowImpl(78))},nac:gx.falseFn,evt:"e23272_client"};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"",grid:0};
   GXValidFnc[86]={ id: 86, fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};
   GXValidFnc[89]={ id: 89, fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID", format:0,grid:0};
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"",grid:0};
   GXValidFnc[92]={ id: 92, fld:"LAYOUTDEFINED_SECTION8_GRID",grid:0};
   GXValidFnc[93]={ id: 93, fld:"PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID",grid:0};
   GXValidFnc[96]={ id: 96, fld:"PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e16271_client"};
   GXValidFnc[98]={ id: 98, fld:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e17271_client"};
   GXValidFnc[100]={ id: 100, fld:"PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[102]={ id: 102, fld:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e16271_client"};
   GXValidFnc[104]={ id: 104, fld:"PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[106]={ id: 106, fld:"PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e18271_client"};
   GXValidFnc[108]={ id: 108, fld:"PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[110]={ id: 110, fld:"PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e18271_client"};
   GXValidFnc[111]={ id: 111, fld:"",grid:0};
   GXValidFnc[112]={ id: 112, fld:"",grid:0};
   GXValidFnc[113]={ id: 113, fld:"",grid:0};
   this.AV31GenericFilter_Grid = "" ;
   this.ZV31GenericFilter_Grid = "" ;
   this.OV31GenericFilter_Grid = "" ;
   this.AV27GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV27GridSettingsRowsPerPage_Grid = 0 ;
   this.OV27GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV19Name = "" ;
   this.OV19Name = "" ;
   this.ZV23TypeId = "" ;
   this.OV23TypeId = "" ;
   this.ZV29Update_Action = "" ;
   this.OV29Update_Action = "" ;
   this.ZV30Delete_Action = "" ;
   this.OV30Delete_Action = "" ;
   this.ZV32TestExternalAuthenticationType_Action = "" ;
   this.OV32TestExternalAuthenticationType_Action = "" ;
   this.AV31GenericFilter_Grid = "" ;
   this.AV27GridSettingsRowsPerPage_Grid = 0 ;
   this.AV19Name = "" ;
   this.AV23TypeId = "" ;
   this.AV29Update_Action = "" ;
   this.AV30Delete_Action = "" ;
   this.AV32TestExternalAuthenticationType_Action = "" ;
   this.AV8CurrentPage_Grid = 0 ;
   this.AV15HasNextPage_Grid = false ;
   this.AV26RowsPerPage_Grid = 0 ;
   this.AV17I_LoadCount_Grid = 0 ;
   this.AV36Pgmname = "" ;
   this.Events = {"e11272_client": ["'SAVEGRIDSETTINGS(GRID)'", true] ,"e24272_client": ["ENTER", true] ,"e25272_client": ["CANCEL", true] ,"e16271_client": ["'PAGINGPREVIOUS(GRID)'", false] ,"e18271_client": ["'PAGINGNEXT(GRID)'", false] ,"e21272_client": ["'E_UPDATE'", false] ,"e22272_client": ["'E_DELETE'", false] ,"e20271_client": ["'E_NEW'", false] ,"e17271_client": ["'PAGINGFIRST(GRID)'", false] ,"e19271_client": ["'TOGGLEGRIDSETTINGS(GRID)'", false] ,"e23272_client": ["'E_TESTEXTERNALAUTHENTICATIONTYPE'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV31GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV26RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV15HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV36Pgmname',fld:'vPGMNAME',pic:'',hsh:true}],[{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'NEW',prop:'Visible'}]];
   this.EvtParms["START"] = [[{av:'AV36Pgmname',fld:'vPGMNAME',pic:'',hsh:true}],[{av:'AV26RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV27GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV31GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]];
   this.EvtParms["'PAGINGPREVIOUS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV36Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV31GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV15HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV26RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''}],[{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'NEW',prop:'Visible'}]];
   this.EvtParms["'PAGINGNEXT(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV36Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV31GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV15HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV26RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''}],[{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'NEW',prop:'Visible'}]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'AV19Name',fld:'vNAME',pic:''},{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''}],[{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''},{av:'AV19Name',fld:'vNAME',pic:''}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'AV19Name',fld:'vNAME',pic:''},{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''}],[{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''},{av:'AV19Name',fld:'vNAME',pic:''}]];
   this.EvtParms["'E_NEW'"] = [[],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV26RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV31GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''},{av:'AV15HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV36Pgmname',fld:'vPGMNAME',pic:'',hsh:true}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_GRID',prop:'Visible'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV15HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV29Update_Action',fld:'vUPDATE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE_ACTION","Tooltiptext")',ctrl:'vUPDATE_ACTION',prop:'Tooltiptext'},{av:'AV30Delete_Action',fld:'vDELETE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Tooltiptext")',ctrl:'vDELETE_ACTION',prop:'Tooltiptext'},{av:'AV32TestExternalAuthenticationType_Action',fld:'vTESTEXTERNALAUTHENTICATIONTYPE_ACTION',pic:''},{av:'AV19Name',fld:'vNAME',pic:''},{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''},{av:'gx.fn.getCtrlProperty("vNAME","Link")',ctrl:'vNAME',prop:'Link'},{av:'gx.fn.getCtrlProperty("vTESTEXTERNALAUTHENTICATIONTYPE_ACTION","Visible")',ctrl:'vTESTEXTERNALAUTHENTICATIONTYPE_ACTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'}]];
   this.EvtParms["'PAGINGFIRST(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV36Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV31GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV15HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV26RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''}],[{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'NEW',prop:'Visible'}]];
   this.EvtParms["'TOGGLEGRIDSETTINGS(GRID)'"] = [[{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV26RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'}],[{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV27GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]];
   this.EvtParms["'SAVEGRIDSETTINGS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV36Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV31GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV15HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV26RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV17I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV27GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'}],[{av:'AV26RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{ctrl:'NEW',prop:'Visible'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV36Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV8CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV31GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV15HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true}],[{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'},{ctrl:'NEW',prop:'Visible'}]];
   this.EvtParms["'E_TESTEXTERNALAUTHENTICATIONTYPE'"] = [[{av:'AV19Name',fld:'vNAME',pic:''},{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''}],[{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''},{av:'AV19Name',fld:'vNAME',pic:''}]];
   this.EvtParms["VALIDV_TYPEID"] = [[{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''}],[{ctrl:'vTYPEID'},{av:'AV23TypeId',fld:'vTYPEID',pic:''}]];
   this.setVCMap("AV8CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV15HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV26RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV17I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV8CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV15HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV26RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV17I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV26RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV8CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV15HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV8CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV15HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV26RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV17I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV36Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV8CurrentPage_Grid"});
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar({rfrVar:"AV15HasNextPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV26RowsPerPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV17I_LoadCount_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV23TypeId", rfrProp:"Value", gxAttId:"Typeid"});
   GridContainer.addRefreshingParm({rfrVar:"AV36Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV8CurrentPage_Grid"});
   GridContainer.addRefreshingParm(this.GXValidFnc[32]);
   GridContainer.addRefreshingParm({rfrVar:"AV15HasNextPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV26RowsPerPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV17I_LoadCount_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV23TypeId", rfrProp:"Value", gxAttId:"Typeid"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.wwauthtype);});
