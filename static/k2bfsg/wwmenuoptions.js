gx.evt.autoSkip = false;
gx.define('k2bfsg.wwmenuoptions', false, function () {
   this.ServerClass =  "k2bfsg.wwmenuoptions" ;
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
      this.AV12CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV51Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV22HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV38RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV24I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV9ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.AV27MenuId=gx.fn.getIntegerValue("vMENUID",'.') ;
      this.AV51Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV12CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV22HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV38RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV24I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV9ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",'.') ;
      this.AV27MenuId=gx.fn.getIntegerValue("vMENUID",'.') ;
      this.AV38RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV12CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV22HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
   };
   this.Validv_Optiontype=function()
   {
      var currentRow = gx.fn.currentGridRowImpl(121);
      return this.validCliEvt("Validv_Optiontype", 121, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vOPTIONTYPE");
         this.AnyError  = 0;
         if ( ! ( ( this.AV35OptionType == "S" ) || ( this.AV35OptionType == "M" ) ) )
         {
            try {
               gxballoon.setError("Campo Option Type fuera de rango");
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
   this.s142_client=function()
   {
      this.s282_client();
   };
   this.s282_client=function()
   {
      gx.fn.setCtrlProperty("ADD","Visible", true );
   };
   this.s202_client=function()
   {
   };
   this.s182_client=function()
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
      if ( this.AV22HasNextPage_Grid == false )
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
      if ( ( this.AV12CurrentPage_Grid <= 1 ) && ( this.AV22HasNextPage_Grid == false ) )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", true );
      }
   };
   this.e253a1_client=function()
   {
      this.clearMessages();
      this.AV12CurrentPage_Grid = gx.num.trunc( 1 ,0) ;
      this.refreshOutputs([{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e243a1_client=function()
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
   this.e263a1_client=function()
   {
      this.clearMessages();
      if ( this.AV22HasNextPage_Grid )
      {
         this.AV12CurrentPage_Grid = gx.num.trunc( this.AV12CurrentPage_Grid + 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e273a1_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible") == false )
      {
         this.AV18GridSettingsRowsPerPage_Grid = gx.num.trunc( this.AV38RowsPerPage_Grid ,0) ;
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", false );
      }
      this.refreshOutputs([{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV18GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]);
      return gx.$.Deferred().resolve();
   };
   this.e283a2_client=function()
   {
      this.clearMessages();
      this.AV42Window.Autoresize = gx.num.trunc( true ,0) ;
      this.AV42Window.Url =  gx.http.formatLink("com.movuts.k2bfsg.entrymenuoption",["DSP", this.AV9ApplicationId, this.AV27MenuId, this.AV33OptionId])  ;
      this.AV42Window.ReturnParms =  ["AV9ApplicationId", "AV27MenuId", "AV33OptionId"]  ;
      this.popupOpen(this.AV42Window) ;
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e113a2_client=function()
   {
      return this.executeServerEvent("'SAVEGRIDSETTINGS(GRID)'", false, null, false, false);
   };
   this.e193a2_client=function()
   {
      return this.executeServerEvent("'E_UP'", true, arguments[0], false, false);
   };
   this.e203a2_client=function()
   {
      return this.executeServerEvent("'E_DOWN'", true, arguments[0], false, false);
   };
   this.e123a2_client=function()
   {
      return this.executeServerEvent("'E_ADD'", false, null, false, false);
   };
   this.e213a2_client=function()
   {
      return this.executeServerEvent("'E_UPDATE'", true, arguments[0], false, false);
   };
   this.e223a2_client=function()
   {
      return this.executeServerEvent("'E_DELETE'", true, arguments[0], false, false);
   };
   this.e233a2_client=function()
   {
      return this.executeServerEvent("'E_OPTIONS'", true, arguments[0], false, false);
   };
   this.e133a2_client=function()
   {
      return this.executeServerEvent("TEXTBLOCK_ATTRIBUTES_ATTRIBUTES.CLICK", true, null, false, true);
   };
   this.e143a2_client=function()
   {
      return this.executeServerEvent("COLLAPSIBLEIMAGE_ATTRIBUTES.CLICK", true, null, false, true);
   };
   this.e293a2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e303a2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,22,24,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,109,112,113,114,115,116,117,118,119,120,122,123,124,125,126,127,128,129,130,131,132,133,136,137,138,139,140,143,145,147,149,151,153,155,157,158,159,160];
   this.GXLastCtrlId =160;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",121,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.wwmenuoptions",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Optionid",122,"vOPTIONID","Id","","OptionId","int",0,"px",12,12,"right",null,[],"Optionid","OptionId",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   GridContainer.addSingleLineEdit("Optionname",123,"vOPTIONNAME","Nombre","","OptionName","char",0,"px",120,80,"left","e283a2_client",[],"Optionname","OptionName",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addSingleLineEdit("Optiondescription",124,"vOPTIONDESCRIPTION","Descripción","","OptionDescription","char",570,"px",254,80,"left",null,[],"Optiondescription","OptionDescription",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addComboBox("Optiontype",125,"vOPTIONTYPE","Tipo","OptionType","char",null,0,true,false,0,"px","K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addSingleLineEdit("Up_action",126,"vUP_ACTION","","","Up_Action","char",0,"px",20,20,"left","e193a2_client",[],"Up_action","Up_Action",true,0,false,false,"K2BT_TextAction",1,"K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   GridContainer.addSingleLineEdit("Down_action",127,"vDOWN_ACTION","","","Down_Action","char",0,"px",20,20,"left","e203a2_client",[],"Down_action","Down_Action",true,0,false,false,"K2BT_TextAction",1,"K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   GridContainer.addSingleLineEdit("Options_action",128,"vOPTIONS_ACTION","","","Options_Action","char",0,"px",20,20,"left","e233a2_client",[],"Options_action","Options_Action",true,0,false,false,"K2BT_TextAction",1,"K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   GridContainer.addBitmap("&Update_action","vUPDATE_ACTION",129,20,"px",17,"px","e213a2_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   GridContainer.addBitmap("&Delete_action","vDELETE_ACTION",130,20,"px",17,"px","e223a2_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 161, 36, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[16]={ id: 16, fld:"RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"TITLECELL_ATTRIBUTES_ATTRIBUTES",grid:0};
   GXValidFnc[19]={ id: 19, fld:"TITLECONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[22]={ id: 22, fld:"TEXTBLOCK_ATTRIBUTES_ATTRIBUTES", format:0,grid:0,evt:"e133a2_client"};
   GXValidFnc[24]={ id: 24, fld:"COLLAPSIBLEIMAGECONTAINER_ATTRIBUTES",grid:0};
   GXValidFnc[27]={ id: 27, fld:"COLLAPSIBLEIMAGE_ATTRIBUTES",grid:0,evt:"e143a2_client"};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"TABLE_CONTAINER_APPLICATIONNAME",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id:36 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAPPLICATIONNAME",gxz:"ZV10ApplicationName",gxold:"OV10ApplicationName",gxvar:"AV10ApplicationName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV10ApplicationName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV10ApplicationName=Value},v2c:function(){gx.fn.setControlValue("vAPPLICATIONNAME",gx.O.AV10ApplicationName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV10ApplicationName=this.val()},val:function(){return gx.fn.getControlValue("vAPPLICATIONNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"TABLE_CONTAINER_MENUNAME",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id:42 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMENUNAME",gxz:"ZV28MenuName",gxold:"OV28MenuName",gxvar:"AV28MenuName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV28MenuName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV28MenuName=Value},v2c:function(){gx.fn.setControlValue("vMENUNAME",gx.O.AV28MenuName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV28MenuName=this.val()},val:function(){return gx.fn.getControlValue("vMENUNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"TABLE_CONTAINER_MENUDESCRIPTION",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id:47 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMENUDESCRIPTION",gxz:"ZV26MenuDescription",gxold:"OV26MenuDescription",gxvar:"AV26MenuDescription",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV26MenuDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV26MenuDescription=Value},v2c:function(){gx.fn.setControlValue("vMENUDESCRIPTION",gx.O.AV26MenuDescription,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV26MenuDescription=this.val()},val:function(){return gx.fn.getControlValue("vMENUDESCRIPTION")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"GRIDCOMPONENT_GRID",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"GRIDTITLECONTAINERTABLE_GRID",grid:0};
   GXValidFnc[56]={ id: 56, fld:"GRIDTITLE_GRID", format:0,grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"GRIDCOMPONENTCONTENT_GRID",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"LAYOUTDEFINED_GRID_INNER_GRID",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"LAYOUTDEFINED_TABLE10_GRID",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"LAYOUTDEFINED_FILTERGLOBALCONTAINER_GRID",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id: 70, fld:"LAYOUTDEFINED_ONLYGENERICFILTERLAYOUT_GRID",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"LAYOUTDEFINED_SECTION6_GRID",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id:75 ,lvl:0,type:"char",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGENERICFILTER_GRID",gxz:"ZV48GenericFilter_Grid",gxold:"OV48GenericFilter_Grid",gxvar:"AV48GenericFilter_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48GenericFilter_Grid=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48GenericFilter_Grid=Value},v2c:function(){gx.fn.setControlValue("vGENERICFILTER_GRID",gx.O.AV48GenericFilter_Grid,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48GenericFilter_Grid=this.val()},val:function(){return gx.fn.getControlValue("vGENERICFILTER_GRID")},nac:gx.falseFn};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id: 78, fld:"LAYOUTDEFINED_TABLE7_GRID",grid:0};
   GXValidFnc[81]={ id: 81, fld:"GRIDSETTINGS_GLOBALTABLE_GRID",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id: 84, fld:"GRIDSETTINGS_LABELGRID",grid:0,evt:"e273a1_client"};
   GXValidFnc[85]={ id: 85, fld:"",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"GRIDSETTINGS_CONTENTOUTERTABLEGRID",grid:0};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"GSLAYOUTDEFINED_GRIDTABLE1",grid:0};
   GXValidFnc[91]={ id: 91, fld:"",grid:0};
   GXValidFnc[92]={ id: 92, fld:"GRIDCUSTOMIZATIONCONTAINER_GRID",grid:0};
   GXValidFnc[93]={ id: 93, fld:"",grid:0};
   GXValidFnc[94]={ id: 94, fld:"",grid:0};
   GXValidFnc[95]={ id: 95, fld:"GSLAYOUTDEFINED_GRIDRUNTIMECOLUMNSELECTIONTB", format:0,grid:0};
   GXValidFnc[96]={ id: 96, fld:"",grid:0};
   GXValidFnc[97]={ id: 97, fld:"",grid:0};
   GXValidFnc[98]={ id: 98, fld:"GSLAYOUTDEFINED_GRIDCUSTOMIZATIONCOLLAPSIBLESECTION",grid:0};
   GXValidFnc[99]={ id: 99, fld:"",grid:0};
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   GXValidFnc[101]={ id: 101, fld:"ROWSPERPAGECONTAINER_GRID",grid:0};
   GXValidFnc[102]={ id: 102, fld:"",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id:104 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDSETTINGSROWSPERPAGE_GRID",gxz:"ZV18GridSettingsRowsPerPage_Grid",gxold:"OV18GridSettingsRowsPerPage_Grid",gxvar:"AV18GridSettingsRowsPerPage_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV18GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV18GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vGRIDSETTINGSROWSPERPAGE_GRID",gx.O.AV18GridSettingsRowsPerPage_Grid)},c2v:function(){if(this.val()!==undefined)gx.O.AV18GridSettingsRowsPerPage_Grid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRIDSETTINGSROWSPERPAGE_GRID",'.')},nac:gx.falseFn};
   GXValidFnc[105]={ id: 105, fld:"",grid:0};
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"GRIDSETTINGS_SAVEGRID",grid:0,evt:"e113a2_client"};
   GXValidFnc[109]={ id: 109, fld:"ACTIONS_GRID_TOPRIGHT",grid:0};
   GXValidFnc[112]={ id: 112, fld:"ADD",grid:0,evt:"e123a2_client"};
   GXValidFnc[113]={ id: 113, fld:"",grid:0};
   GXValidFnc[114]={ id: 114, fld:"",grid:0};
   GXValidFnc[115]={ id: 115, fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};
   GXValidFnc[116]={ id: 116, fld:"",grid:0};
   GXValidFnc[117]={ id: 117, fld:"",grid:0};
   GXValidFnc[118]={ id: 118, fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};
   GXValidFnc[119]={ id: 119, fld:"",grid:0};
   GXValidFnc[120]={ id: 120, fld:"",grid:0};
   GXValidFnc[122]={ id:122 ,lvl:2,type:"int",len:12,dec:0,sign:false,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOPTIONID",gxz:"ZV33OptionId",gxold:"OV33OptionId",gxvar:"AV33OptionId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.AV33OptionId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV33OptionId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vOPTIONID",row || gx.fn.currentGridRowImpl(121),gx.O.AV33OptionId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV33OptionId=gx.num.intval(this.val(row))},val:function(row){return gx.fn.getGridIntegerValue("vOPTIONID",row || gx.fn.currentGridRowImpl(121),'.')},nac:gx.falseFn};
   GXValidFnc[123]={ id:123 ,lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOPTIONNAME",gxz:"ZV34OptionName",gxold:"OV34OptionName",gxvar:"AV34OptionName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV34OptionName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV34OptionName=Value},v2c:function(row){gx.fn.setGridControlValue("vOPTIONNAME",row || gx.fn.currentGridRowImpl(121),gx.O.AV34OptionName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV34OptionName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vOPTIONNAME",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn,evt:"e283a2_client"};
   GXValidFnc[124]={ id:124 ,lvl:2,type:"char",len:254,dec:0,sign:false,ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOPTIONDESCRIPTION",gxz:"ZV32OptionDescription",gxold:"OV32OptionDescription",gxvar:"AV32OptionDescription",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV32OptionDescription=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV32OptionDescription=Value},v2c:function(row){gx.fn.setGridControlValue("vOPTIONDESCRIPTION",row || gx.fn.currentGridRowImpl(121),gx.O.AV32OptionDescription,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV32OptionDescription=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vOPTIONDESCRIPTION",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[125]={ id:125 ,lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:this.Validv_Optiontype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOPTIONTYPE",gxz:"ZV35OptionType",gxold:"OV35OptionType",gxvar:"AV35OptionType",ucs:[],op:[125],ip:[125],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV35OptionType=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV35OptionType=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vOPTIONTYPE",row || gx.fn.currentGridRowImpl(121),gx.O.AV35OptionType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV35OptionType=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vOPTIONTYPE",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn};
   GXValidFnc[126]={ id:126 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUP_ACTION",gxz:"ZV41Up_Action",gxold:"OV41Up_Action",gxvar:"AV41Up_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV41Up_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV41Up_Action=Value},v2c:function(row){gx.fn.setGridControlValue("vUP_ACTION",row || gx.fn.currentGridRowImpl(121),gx.O.AV41Up_Action,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV41Up_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUP_ACTION",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn,evt:"e193a2_client"};
   GXValidFnc[127]={ id:127 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDOWN_ACTION",gxz:"ZV13Down_Action",gxold:"OV13Down_Action",gxvar:"AV13Down_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV13Down_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV13Down_Action=Value},v2c:function(row){gx.fn.setGridControlValue("vDOWN_ACTION",row || gx.fn.currentGridRowImpl(121),gx.O.AV13Down_Action,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV13Down_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDOWN_ACTION",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn,evt:"e203a2_client"};
   GXValidFnc[128]={ id:128 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOPTIONS_ACTION",gxz:"ZV44Options_Action",gxold:"OV44Options_Action",gxvar:"AV44Options_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV44Options_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV44Options_Action=Value},v2c:function(row){gx.fn.setGridControlValue("vOPTIONS_ACTION",row || gx.fn.currentGridRowImpl(121),gx.O.AV44Options_Action,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV44Options_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vOPTIONS_ACTION",row || gx.fn.currentGridRowImpl(121))},nac:gx.falseFn,evt:"e233a2_client"};
   GXValidFnc[129]={ id:129 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE_ACTION",gxz:"ZV46Update_Action",gxold:"OV46Update_Action",gxvar:"AV46Update_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV46Update_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV46Update_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vUPDATE_ACTION",row || gx.fn.currentGridRowImpl(121),gx.O.AV46Update_Action,gx.O.AV53Update_action_GXI)},c2v:function(row){gx.O.AV53Update_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV46Update_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUPDATE_ACTION",row || gx.fn.currentGridRowImpl(121))},val_GXI:function(row){return gx.fn.getGridControlValue("vUPDATE_ACTION_GXI",row || gx.fn.currentGridRowImpl(121))}, gxvar_GXI:'AV53Update_action_GXI',nac:gx.falseFn,evt:"e213a2_client"};
   GXValidFnc[130]={ id:130 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:121,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE_ACTION",gxz:"ZV47Delete_Action",gxold:"OV47Delete_Action",gxvar:"AV47Delete_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV47Delete_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV47Delete_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(121),gx.O.AV47Delete_Action,gx.O.AV54Delete_action_GXI)},c2v:function(row){gx.O.AV54Delete_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV47Delete_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(121))},val_GXI:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION_GXI",row || gx.fn.currentGridRowImpl(121))}, gxvar_GXI:'AV54Delete_action_GXI',nac:gx.falseFn,evt:"e223a2_client"};
   GXValidFnc[131]={ id: 131, fld:"",grid:0};
   GXValidFnc[132]={ id: 132, fld:"",grid:0};
   GXValidFnc[133]={ id: 133, fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};
   GXValidFnc[136]={ id: 136, fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID", format:0,grid:0};
   GXValidFnc[137]={ id: 137, fld:"",grid:0};
   GXValidFnc[138]={ id: 138, fld:"",grid:0};
   GXValidFnc[139]={ id: 139, fld:"LAYOUTDEFINED_SECTION8_GRID",grid:0};
   GXValidFnc[140]={ id: 140, fld:"PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID",grid:0};
   GXValidFnc[143]={ id: 143, fld:"PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e243a1_client"};
   GXValidFnc[145]={ id: 145, fld:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e253a1_client"};
   GXValidFnc[147]={ id: 147, fld:"PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[149]={ id: 149, fld:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e243a1_client"};
   GXValidFnc[151]={ id: 151, fld:"PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[153]={ id: 153, fld:"PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e263a1_client"};
   GXValidFnc[155]={ id: 155, fld:"PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[157]={ id: 157, fld:"PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e263a1_client"};
   GXValidFnc[158]={ id: 158, fld:"",grid:0};
   GXValidFnc[159]={ id: 159, fld:"",grid:0};
   GXValidFnc[160]={ id: 160, fld:"",grid:0};
   this.AV10ApplicationName = "" ;
   this.ZV10ApplicationName = "" ;
   this.OV10ApplicationName = "" ;
   this.AV28MenuName = "" ;
   this.ZV28MenuName = "" ;
   this.OV28MenuName = "" ;
   this.AV26MenuDescription = "" ;
   this.ZV26MenuDescription = "" ;
   this.OV26MenuDescription = "" ;
   this.AV48GenericFilter_Grid = "" ;
   this.ZV48GenericFilter_Grid = "" ;
   this.OV48GenericFilter_Grid = "" ;
   this.AV18GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV18GridSettingsRowsPerPage_Grid = 0 ;
   this.OV18GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV33OptionId = 0 ;
   this.OV33OptionId = 0 ;
   this.ZV34OptionName = "" ;
   this.OV34OptionName = "" ;
   this.ZV32OptionDescription = "" ;
   this.OV32OptionDescription = "" ;
   this.ZV35OptionType = "" ;
   this.OV35OptionType = "" ;
   this.ZV41Up_Action = "" ;
   this.OV41Up_Action = "" ;
   this.ZV13Down_Action = "" ;
   this.OV13Down_Action = "" ;
   this.ZV44Options_Action = "" ;
   this.OV44Options_Action = "" ;
   this.ZV46Update_Action = "" ;
   this.OV46Update_Action = "" ;
   this.ZV47Delete_Action = "" ;
   this.OV47Delete_Action = "" ;
   this.AV10ApplicationName = "" ;
   this.AV28MenuName = "" ;
   this.AV26MenuDescription = "" ;
   this.AV48GenericFilter_Grid = "" ;
   this.AV18GridSettingsRowsPerPage_Grid = 0 ;
   this.AV9ApplicationId = 0 ;
   this.AV27MenuId = 0 ;
   this.AV33OptionId = 0 ;
   this.AV34OptionName = "" ;
   this.AV32OptionDescription = "" ;
   this.AV35OptionType = "" ;
   this.AV41Up_Action = "" ;
   this.AV13Down_Action = "" ;
   this.AV44Options_Action = "" ;
   this.AV46Update_Action = "" ;
   this.AV47Delete_Action = "" ;
   this.AV12CurrentPage_Grid = 0 ;
   this.AV51Pgmname = "" ;
   this.AV22HasNextPage_Grid = false ;
   this.AV38RowsPerPage_Grid = 0 ;
   this.AV24I_LoadCount_Grid = 0 ;
   this.AV42Window = {} ;
   this.Events = {"e113a2_client": ["'SAVEGRIDSETTINGS(GRID)'", true] ,"e193a2_client": ["'E_UP'", true] ,"e203a2_client": ["'E_DOWN'", true] ,"e123a2_client": ["'E_ADD'", true] ,"e213a2_client": ["'E_UPDATE'", true] ,"e223a2_client": ["'E_DELETE'", true] ,"e233a2_client": ["'E_OPTIONS'", true] ,"e133a2_client": ["TEXTBLOCK_ATTRIBUTES_ATTRIBUTES.CLICK", true] ,"e143a2_client": ["COLLAPSIBLEIMAGE_ATTRIBUTES.CLICK", true] ,"e293a2_client": ["ENTER", true] ,"e303a2_client": ["CANCEL", true] ,"e253a1_client": ["'PAGINGFIRST(GRID)'", false] ,"e243a1_client": ["'PAGINGPREVIOUS(GRID)'", false] ,"e263a1_client": ["'PAGINGNEXT(GRID)'", false] ,"e273a1_client": ["'TOGGLEGRIDSETTINGS(GRID)'", false] ,"e283a2_client": ["VOPTIONNAME.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV38RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV22HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV24I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV27MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true}],[{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'}]];
   this.EvtParms["START"] = [[{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV27MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true}],[{av:'AV38RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV18GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV10ApplicationName',fld:'vAPPLICATIONNAME',pic:''},{av:'AV28MenuName',fld:'vMENUNAME',pic:''},{av:'AV26MenuDescription',fld:'vMENUDESCRIPTION',pic:''},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV22HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true}],[{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'},{ctrl:'ADD',prop:'Visible'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV38RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV24I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV27MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV22HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_GRID',prop:'Visible'},{av:'AV24I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV22HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV41Up_Action',fld:'vUP_ACTION',pic:''},{av:'AV13Down_Action',fld:'vDOWN_ACTION',pic:''},{av:'AV44Options_Action',fld:'vOPTIONS_ACTION',pic:''},{av:'AV46Update_Action',fld:'vUPDATE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE_ACTION","Tooltiptext")',ctrl:'vUPDATE_ACTION',prop:'Tooltiptext'},{av:'AV47Delete_Action',fld:'vDELETE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Tooltiptext")',ctrl:'vDELETE_ACTION',prop:'Tooltiptext'},{av:'AV33OptionId',fld:'vOPTIONID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV34OptionName',fld:'vOPTIONNAME',pic:''},{av:'AV32OptionDescription',fld:'vOPTIONDESCRIPTION',pic:''},{ctrl:'vOPTIONTYPE'},{av:'AV35OptionType',fld:'vOPTIONTYPE',pic:''},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'}]];
   this.EvtParms["'PAGINGFIRST(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV22HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV38RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV24I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV27MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true}],[{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'}]];
   this.EvtParms["'PAGINGPREVIOUS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV22HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV38RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV24I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV27MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true}],[{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'}]];
   this.EvtParms["'PAGINGNEXT(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV22HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV38RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV24I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV27MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true}],[{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'}]];
   this.EvtParms["'TOGGLEGRIDSETTINGS(GRID)'"] = [[{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV38RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'}],[{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV18GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'}]];
   this.EvtParms["'SAVEGRIDSETTINGS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV22HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV38RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV24I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV27MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV18GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'}],[{av:'AV38RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{ctrl:'ADD',prop:'Visible'}]];
   this.EvtParms["'E_UP'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV22HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV38RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV24I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV27MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV33OptionId',fld:'vOPTIONID',pic:'ZZZZZZZZZZZ9',hsh:true}],[{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'}]];
   this.EvtParms["'E_DOWN'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV22HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV38RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV24I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV27MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV33OptionId',fld:'vOPTIONID',pic:'ZZZZZZZZZZZ9',hsh:true}],[{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'}]];
   this.EvtParms["'E_ADD'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV22HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV38RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV24I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV27MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true}],[{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'}]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV22HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV38RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV24I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV27MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV33OptionId',fld:'vOPTIONID',pic:'ZZZZZZZZZZZ9',hsh:true}],[{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'}]];
   this.EvtParms["VOPTIONNAME.CLICK"] = [[{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV27MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV33OptionId',fld:'vOPTIONID',pic:'ZZZZZZZZZZZ9',hsh:true}],[]];
   this.EvtParms["'E_DELETE'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV51Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV48GenericFilter_Grid',fld:'vGENERICFILTER_GRID',pic:''},{av:'AV22HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV38RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV24I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV27MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV33OptionId',fld:'vOPTIONID',pic:'ZZZZZZZZZZZ9',hsh:true}],[{av:'AV12CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{ctrl:'ADD',prop:'Visible'}]];
   this.EvtParms["'E_OPTIONS'"] = [[{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'},{av:'AV27MenuId',fld:'vMENUID',pic:'ZZZZZZZZZZZ9',hsh:true},{av:'AV33OptionId',fld:'vOPTIONID',pic:'ZZZZZZZZZZZ9',hsh:true}],[{av:'AV9ApplicationId',fld:'vAPPLICATIONID',pic:'ZZZZZZZZZZZ9'}]];
   this.EvtParms["TEXTBLOCK_ATTRIBUTES_ATTRIBUTES.CLICK"] = [[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_ATTRIBUTES","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_ATTRIBUTES',prop:'Visible'}],[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_ATTRIBUTES","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_ATTRIBUTES',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES',prop:'Class'}]];
   this.EvtParms["COLLAPSIBLEIMAGE_ATTRIBUTES.CLICK"] = [[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_ATTRIBUTES","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_ATTRIBUTES',prop:'Visible'}],[{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_ATTRIBUTES","Visible")',ctrl:'ATTRIBUTESCONTAINERTABLE_ATTRIBUTES',prop:'Visible'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES',prop:'Class'}]];
   this.EvtParms["VALIDV_OPTIONTYPE"] = [[{ctrl:'vOPTIONTYPE'},{av:'AV35OptionType',fld:'vOPTIONTYPE',pic:''}],[{ctrl:'vOPTIONTYPE'},{av:'AV35OptionType',fld:'vOPTIONTYPE',pic:''}]];
   this.setVCMap("AV12CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV51Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV22HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV38RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV24I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV9ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV27MenuId", "vMENUID", 0, "int", 12, 0);
   this.setVCMap("AV51Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV12CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV22HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV38RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV24I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV9ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV27MenuId", "vMENUID", 0, "int", 12, 0);
   this.setVCMap("AV38RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV12CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV22HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV51Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV12CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV22HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV38RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV24I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV9ApplicationId", "vAPPLICATIONID", 0, "int", 12, 0);
   this.setVCMap("AV27MenuId", "vMENUID", 0, "int", 12, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV51Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV12CurrentPage_Grid"});
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar({rfrVar:"AV22HasNextPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV38RowsPerPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV24I_LoadCount_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV9ApplicationId"});
   GridContainer.addRefreshingVar({rfrVar:"AV27MenuId"});
   GridContainer.addRefreshingParm({rfrVar:"AV51Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV12CurrentPage_Grid"});
   GridContainer.addRefreshingParm(this.GXValidFnc[75]);
   GridContainer.addRefreshingParm({rfrVar:"AV22HasNextPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV38RowsPerPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV24I_LoadCount_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV9ApplicationId"});
   GridContainer.addRefreshingParm({rfrVar:"AV27MenuId"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.wwmenuoptions);});
