gx.evt.autoSkip = false;
gx.define('k2bfsg.wwuser', false, function () {
   this.ServerClass =  "k2bfsg.wwuser" ;
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
      this.AV7AnonymousUserGUID=gx.fn.getControlValue("vANONYMOUSUSERGUID") ;
      this.AV54RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV11CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV28I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV26HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV71Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV43GridColumns=gx.fn.getControlValue("vGRIDCOLUMNS") ;
      this.AV56FilName_PreviousValue=gx.fn.getControlValue("vFILNAME_PREVIOUSVALUE") ;
      this.AV57FilNames_PreviousValue=gx.fn.getControlValue("vFILNAMES_PREVIOUSVALUE") ;
      this.AV58FilEmail_PreviousValue=gx.fn.getControlValue("vFILEMAIL_PREVIOUSVALUE") ;
      this.AV59FilAutType_PreviousValue=gx.fn.getControlValue("vFILAUTTYPE_PREVIOUSVALUE") ;
      this.AV67DeletedTag_Grid=gx.fn.getControlValue("vDELETEDTAG_GRID") ;
      this.AV56FilName_PreviousValue=gx.fn.getControlValue("vFILNAME_PREVIOUSVALUE") ;
      this.AV57FilNames_PreviousValue=gx.fn.getControlValue("vFILNAMES_PREVIOUSVALUE") ;
      this.AV58FilEmail_PreviousValue=gx.fn.getControlValue("vFILEMAIL_PREVIOUSVALUE") ;
      this.AV59FilAutType_PreviousValue=gx.fn.getControlValue("vFILAUTTYPE_PREVIOUSVALUE") ;
      this.AV71Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV11CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV43GridColumns=gx.fn.getControlValue("vGRIDCOLUMNS") ;
      this.AV26HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
      this.AV7AnonymousUserGUID=gx.fn.getControlValue("vANONYMOUSUSERGUID") ;
      this.AV54RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV28I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.AV67DeletedTag_Grid=gx.fn.getControlValue("vDELETEDTAG_GRID") ;
      this.AV54RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",'.') ;
      this.AV11CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV26HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID") ;
   };
   this.s112_client=function()
   {
   };
   this.s152_client=function()
   {
   };
   this.s162_client=function()
   {
      gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption", "1" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV11CurrentPage_Grid-1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV11CurrentPage_Grid, 4, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption", gx.num.str( this.AV11CurrentPage_Grid+1, 10, 0) );
      gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class", "K2BToolsTextBlock_PaginationNormal" );
      gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class", "K2BToolsTextBlock_PaginationNormal" );
      if ( ((0==this.AV11CurrentPage_Grid)) || ( this.AV11CurrentPage_Grid <= 1 ) )
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
         if ( this.AV11CurrentPage_Grid == 2 )
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
            if ( this.AV11CurrentPage_Grid == 3 )
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
      if ( ( this.AV11CurrentPage_Grid <= 1 ) && ( this.AV26HasNextPage_Grid == false ) )
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", false );
      }
      else
      {
         gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible", true );
      }
   };
   this.e18221_client=function()
   {
      this.clearMessages();
      if ( this.AV11CurrentPage_Grid > 1 )
      {
         this.AV11CurrentPage_Grid = gx.num.trunc( this.AV11CurrentPage_Grid - 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e20221_client=function()
   {
      this.clearMessages();
      if ( this.AV26HasNextPage_Grid )
      {
         this.AV11CurrentPage_Grid = gx.num.trunc( this.AV11CurrentPage_Grid + 1 ,0) ;
      }
      this.refreshOutputs([{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e22221_client=function()
   {
      this.clearMessages();
      this.s182_client();
      this.refreshOutputs([{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s182_client=function()
   {
      this.call("com.movuts.k2bfsg.entryuser", ["INS", ""]);
   };
   this.e24222_client=function()
   {
      this.clearMessages();
      this.s192_client();
      this.refreshOutputs([{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s192_client=function()
   {
      this.popupOpenUrl(gx.http.formatLink("com.movuts.k2bfsg.setpassword",[this.AV39UserId]), []);
   };
   this.e25222_client=function()
   {
      this.clearMessages();
      this.s202_client();
      this.refreshOutputs([{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s202_client=function()
   {
      this.call("com.movuts.k2bfsg.entryuser", ["DLT", this.AV39UserId]);
   };
   this.e19221_client=function()
   {
      this.clearMessages();
      this.AV11CurrentPage_Grid = gx.num.trunc( 1 ,0) ;
      this.refreshOutputs([{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e21221_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible") == false )
      {
         this.AV55GridSettingsRowsPerPage_Grid = gx.num.trunc( this.AV54RowsPerPage_Grid ,0) ;
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", true );
      }
      else
      {
         gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible", false );
      }
      this.refreshOutputs([{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV55GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s212_client=function()
   {
      this.AV43GridColumns =  [ ]  ;
      this.AV44GridColumn =  {AttributeName:"",ShowAttribute:false,ColumnTitle:""}  ;
      this.AV44GridColumn.AttributeName =  "&AuthenticationTypeName"  ;
      this.AV44GridColumn.ColumnTitle =  "Autenticación"  ;
      this.AV44GridColumn.ShowAttribute =  true  ;
      this.AV43GridColumns.push(this.AV44GridColumn) ;
      this.AV44GridColumn =  {AttributeName:"",ShowAttribute:false,ColumnTitle:""}  ;
      this.AV44GridColumn.AttributeName =  "&Name"  ;
      this.AV44GridColumn.ColumnTitle =  "Nombre"  ;
      this.AV44GridColumn.ShowAttribute =  true  ;
      this.AV43GridColumns.push(this.AV44GridColumn) ;
      this.AV44GridColumn =  {AttributeName:"",ShowAttribute:false,ColumnTitle:""}  ;
      this.AV44GridColumn.AttributeName =  "&FirstName"  ;
      this.AV44GridColumn.ColumnTitle =  "Primer nombre"  ;
      this.AV44GridColumn.ShowAttribute =  true  ;
      this.AV43GridColumns.push(this.AV44GridColumn) ;
      this.AV44GridColumn =  {AttributeName:"",ShowAttribute:false,ColumnTitle:""}  ;
      this.AV44GridColumn.AttributeName =  "&LastName"  ;
      this.AV44GridColumn.ColumnTitle =  "Apellido"  ;
      this.AV44GridColumn.ShowAttribute =  true  ;
      this.AV43GridColumns.push(this.AV44GridColumn) ;
      this.AV44GridColumn =  {AttributeName:"",ShowAttribute:false,ColumnTitle:""}  ;
      this.AV44GridColumn.AttributeName =  "&Email"  ;
      this.AV44GridColumn.ColumnTitle =  "Correo electrónico"  ;
      this.AV44GridColumn.ShowAttribute =  true  ;
      this.AV43GridColumns.push(this.AV44GridColumn) ;
   };
   this.e23222_client=function()
   {
      this.clearMessages();
      this.s232_client();
      this.refreshOutputs([{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s232_client=function()
   {
      this.call("com.movuts.k2bfsg.entryuser", ["UPD", this.AV39UserId]);
   };
   this.s252_client=function()
   {
      this.s282_client();
   };
   this.s282_client=function()
   {
      gx.fn.setCtrlProperty("ADD","Visible", true );
   };
   this.e26221_client=function()
   {
      this.clearMessages();
      if ( this.AV67DeletedTag_Grid == "FilName" )
      {
         this.AV18FilName =  ''  ;
      }
      else if ( this.AV67DeletedTag_Grid == "FilNames" )
      {
         this.AV19FilNames =  ''  ;
      }
      else if ( this.AV67DeletedTag_Grid == "FilEmail" )
      {
         this.AV17FilEmail =  ''  ;
      }
      else if ( this.AV67DeletedTag_Grid == "FilAutType" )
      {
         this.AV16FilAutType =  ''  ;
      }
      this.refreshOutputs([{av:'AV18FilName',fld:'vFILNAME',pic:''},{av:'AV19FilNames',fld:'vFILNAMES',pic:''},{av:'AV17FilEmail',fld:'vFILEMAIL',pic:''},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]);
      this.refreshGrid('Grid') ;
      this.refreshOutputs([{av:'AV18FilName',fld:'vFILNAME',pic:''},{av:'AV19FilNames',fld:'vFILNAMES',pic:''},{av:'AV17FilEmail',fld:'vFILEMAIL',pic:''},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e11222_client=function()
   {
      return this.executeServerEvent("'SAVEGRIDSETTINGS(GRID)'", false, null, false, false);
   };
   this.e12222_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID.CLICK", true, null, false, true);
   };
   this.e13222_client=function()
   {
      return this.executeServerEvent("LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID.CLICK", true, null, false, true);
   };
   this.e27222_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e28222_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,131,134,135,136,137,138,139,140,141,142,144,145,146,147,148,149,150,151,152,153,154,155,156,159,160,161,162,163,166,168,170,172,174,176,178,180,181,182,183];
   this.GXLastCtrlId =183;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",143,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.wwuser",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Authenticationtypename",144,"vAUTHENTICATIONTYPENAME","Autenticación","","AuthenticationTypeName","char",0,"px",60,60,"left",null,[],"Authenticationtypename","AuthenticationTypeName",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn InvisibleInSmallColumn InvisibleInMediumColumn");
   GridContainer.addSingleLineEdit("Name",145,"vNAME","Nombre","","Name","char",0,"px",120,80,"left",null,[],"Name","Name",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addSingleLineEdit("Firstname",146,"vFIRSTNAME","Primer nombre","","FirstName","char",0,"px",120,80,"left",null,[],"Firstname","FirstName",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn InvisibleInSmallColumn InvisibleInMediumColumn");
   GridContainer.addSingleLineEdit("Lastname",147,"vLASTNAME","Apellido","","LastName","char",0,"px",120,80,"left",null,[],"Lastname","LastName",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn InvisibleInSmallColumn InvisibleInMediumColumn");
   GridContainer.addSingleLineEdit("Userid",148,"vUSERID","Id usuario","","UserId","char",0,"px",40,40,"left",null,[],"Userid","UserId",false,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addSingleLineEdit("Email",149,"vEMAIL","Correo electrónico","","Email","svchar",0,"px",100,80,"left",null,[],"Email","Email",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addCheckBox("Isautoregisteruser",150,"vISAUTOREGISTERUSER","Es usuario autoregistrado","","IsAutoRegisterUser","boolean","true","false",null,false,false,0,"px","K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addBitmap("&Update_action","vUPDATE_ACTION",151,20,"px",17,"px","e23222_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   GridContainer.addBitmap("&Password_action","vPASSWORD_ACTION",152,20,"px",17,"px","e24222_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   GridContainer.addBitmap("&Delete_action","vDELETE_ACTION",153,20,"px",17,"px","e25222_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.FILTERTAGSUSERCONTROL_GRIDContainer = gx.uc.getNew(this, 32, 0, "K2BTagsViewer", "FILTERTAGSUSERCONTROL_GRIDContainer", "Filtertagsusercontrol_grid", "FILTERTAGSUSERCONTROL_GRID");
   var FILTERTAGSUSERCONTROL_GRIDContainer = this.FILTERTAGSUSERCONTROL_GRIDContainer;
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Class", "Class", "", "char");
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Enabled", "Enabled", true, "boolean");
   FILTERTAGSUSERCONTROL_GRIDContainer.setDynProp("EmptyStateMessage", "Emptystatemessage", "", "char");
   FILTERTAGSUSERCONTROL_GRIDContainer.addV2CFunction('AV66FilterTagsCollection_Grid', "vFILTERTAGSCOLLECTION_GRID", 'SetTagValues');
   FILTERTAGSUSERCONTROL_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV66FilterTagsCollection_Grid=UC.GetTagValues();gx.fn.setControlValue("vFILTERTAGSCOLLECTION_GRID",UC.ParentObject.AV66FilterTagsCollection_Grid); });
   FILTERTAGSUSERCONTROL_GRIDContainer.addV2CFunction('AV67DeletedTag_Grid', "vDELETEDTAG_GRID", 'SetDeletedTag');
   FILTERTAGSUSERCONTROL_GRIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV67DeletedTag_Grid=UC.GetDeletedTag();gx.fn.setControlValue("vDELETEDTAG_GRID",UC.ParentObject.AV67DeletedTag_Grid); });
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Visible", "Visible", true, "bool");
   FILTERTAGSUSERCONTROL_GRIDContainer.setProp("Gx Control Type", "Gxcontroltype", '', "int");
   FILTERTAGSUSERCONTROL_GRIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   FILTERTAGSUSERCONTROL_GRIDContainer.addEventHandler("TagDeleted", this.e26221_client);
   this.setUserControl(FILTERTAGSUSERCONTROL_GRIDContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 184, 46, "K2BControlBeautify", "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[27]={ id: 27, fld:"LAYOUTDEFINED_ONLYDETAILEDFILTERLAYOUT_GRID",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"LAYOUTDEFINED_SECTION5_GRID",grid:0};
   GXValidFnc[31]={ id: 31, fld:"LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID",grid:0,evt:"e12222_client"};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID",grid:0};
   GXValidFnc[36]={ id: 36, fld:"LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID",grid:0,evt:"e13222_client"};
   GXValidFnc[37]={ id: 37, fld:"MAINFILTERRESPONSIVETABLE_FILTERS",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"FILTERCONTAINERTABLE_FILTERS",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"TABLE_CONTAINER_FILNAME",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id:46 ,lvl:0,type:"svchar",len:100,dec:60,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILNAME",gxz:"ZV18FilName",gxold:"OV18FilName",gxvar:"AV18FilName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV18FilName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV18FilName=Value},v2c:function(){gx.fn.setControlValue("vFILNAME",gx.O.AV18FilName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV18FilName=this.val()},val:function(){return gx.fn.getControlValue("vFILNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"TABLE_CONTAINER_FILNAMES",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id:52 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILNAMES",gxz:"ZV19FilNames",gxold:"OV19FilNames",gxvar:"AV19FilNames",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV19FilNames=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV19FilNames=Value},v2c:function(){gx.fn.setControlValue("vFILNAMES",gx.O.AV19FilNames,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV19FilNames=this.val()},val:function(){return gx.fn.getControlValue("vFILNAMES")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"TABLE_CONTAINER_FILEMAIL",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id:58 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILEMAIL",gxz:"ZV17FilEmail",gxold:"OV17FilEmail",gxvar:"AV17FilEmail",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV17FilEmail=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17FilEmail=Value},v2c:function(){gx.fn.setControlValue("vFILEMAIL",gx.O.AV17FilEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV17FilEmail=this.val()},val:function(){return gx.fn.getControlValue("vFILEMAIL")},nac:gx.falseFn};
   this.declareDomainHdlr( 58 , function() {
   });
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"TABLE_CONTAINER_FILAUTTYPE",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILAUTTYPE",gxz:"ZV16FilAutType",gxold:"OV16FilAutType",gxvar:"AV16FilAutType",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV16FilAutType=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV16FilAutType=Value},v2c:function(){gx.fn.setComboBoxValue("vFILAUTTYPE",gx.O.AV16FilAutType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV16FilAutType=this.val()},val:function(){return gx.fn.getControlValue("vFILAUTTYPE")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"LAYOUTDEFINED_TABLE7_GRID",grid:0};
   GXValidFnc[70]={ id: 70, fld:"GRIDSETTINGS_GLOBALTABLE_GRID",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"GRIDSETTINGS_LABELGRID",grid:0,evt:"e21221_client"};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"GRIDSETTINGS_CONTENTOUTERTABLEGRID",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"GSLAYOUTDEFINED_GRIDTABLE1",grid:0};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id: 81, fld:"GRIDCUSTOMIZATIONCONTAINER_GRID",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id: 84, fld:"GSLAYOUTDEFINED_GRIDRUNTIMECOLUMNSELECTIONTB", format:0,grid:0};
   GXValidFnc[85]={ id: 85, fld:"",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"GSLAYOUTDEFINED_GRIDCUSTOMIZATIONCOLLAPSIBLESECTION",grid:0};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"GRIDSETTINGS_TABLECONTENTGRID",grid:0};
   GXValidFnc[91]={ id: 91, fld:"",grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id: 93, fld:"AUTHENTICATIONTYPENAME_GRIDSETTINGSCONTAINER",grid:0};
   GXValidFnc[94]={ id: 94, fld:"",grid:0};
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id:96 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISVISIBLE_AUTHENTICATIONTYPENAME",gxz:"ZV45IsVisible_AuthenticationTypeName",gxold:"OV45IsVisible_AuthenticationTypeName",gxvar:"AV45IsVisible_AuthenticationTypeName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV45IsVisible_AuthenticationTypeName=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV45IsVisible_AuthenticationTypeName=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISVISIBLE_AUTHENTICATIONTYPENAME",gx.O.AV45IsVisible_AuthenticationTypeName,true)},c2v:function(){if(this.val()!==undefined)gx.O.AV45IsVisible_AuthenticationTypeName=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISVISIBLE_AUTHENTICATIONTYPENAME")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[97]={ id: 97, fld:"",grid:0};
   GXValidFnc[98]={ id: 98, fld:"",grid:0};
   GXValidFnc[99]={ id: 99, fld:"NAME_GRIDSETTINGSCONTAINER",grid:0};
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id:102 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISVISIBLE_NAME",gxz:"ZV46IsVisible_Name",gxold:"OV46IsVisible_Name",gxvar:"AV46IsVisible_Name",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV46IsVisible_Name=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46IsVisible_Name=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISVISIBLE_NAME",gx.O.AV46IsVisible_Name,true)},c2v:function(){if(this.val()!==undefined)gx.O.AV46IsVisible_Name=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISVISIBLE_NAME")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[105]={ id: 105, fld:"FIRSTNAME_GRIDSETTINGSCONTAINER",grid:0};
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"",grid:0};
   GXValidFnc[108]={ id:108 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISVISIBLE_FIRSTNAME",gxz:"ZV47IsVisible_FirstName",gxold:"OV47IsVisible_FirstName",gxvar:"AV47IsVisible_FirstName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV47IsVisible_FirstName=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47IsVisible_FirstName=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISVISIBLE_FIRSTNAME",gx.O.AV47IsVisible_FirstName,true)},c2v:function(){if(this.val()!==undefined)gx.O.AV47IsVisible_FirstName=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISVISIBLE_FIRSTNAME")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id: 110, fld:"",grid:0};
   GXValidFnc[111]={ id: 111, fld:"LASTNAME_GRIDSETTINGSCONTAINER",grid:0};
   GXValidFnc[112]={ id: 112, fld:"",grid:0};
   GXValidFnc[113]={ id: 113, fld:"",grid:0};
   GXValidFnc[114]={ id:114 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISVISIBLE_LASTNAME",gxz:"ZV48IsVisible_LastName",gxold:"OV48IsVisible_LastName",gxvar:"AV48IsVisible_LastName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV48IsVisible_LastName=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV48IsVisible_LastName=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISVISIBLE_LASTNAME",gx.O.AV48IsVisible_LastName,true)},c2v:function(){if(this.val()!==undefined)gx.O.AV48IsVisible_LastName=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISVISIBLE_LASTNAME")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[115]={ id: 115, fld:"",grid:0};
   GXValidFnc[116]={ id: 116, fld:"",grid:0};
   GXValidFnc[117]={ id: 117, fld:"EMAIL_GRIDSETTINGSCONTAINER",grid:0};
   GXValidFnc[118]={ id: 118, fld:"",grid:0};
   GXValidFnc[119]={ id: 119, fld:"",grid:0};
   GXValidFnc[120]={ id:120 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISVISIBLE_EMAIL",gxz:"ZV49IsVisible_Email",gxold:"OV49IsVisible_Email",gxvar:"AV49IsVisible_Email",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV49IsVisible_Email=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV49IsVisible_Email=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISVISIBLE_EMAIL",gx.O.AV49IsVisible_Email,true)},c2v:function(){if(this.val()!==undefined)gx.O.AV49IsVisible_Email=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISVISIBLE_EMAIL")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[121]={ id: 121, fld:"",grid:0};
   GXValidFnc[122]={ id: 122, fld:"",grid:0};
   GXValidFnc[123]={ id: 123, fld:"ROWSPERPAGECONTAINER_GRID",grid:0};
   GXValidFnc[124]={ id: 124, fld:"",grid:0};
   GXValidFnc[125]={ id: 125, fld:"",grid:0};
   GXValidFnc[126]={ id:126 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDSETTINGSROWSPERPAGE_GRID",gxz:"ZV55GridSettingsRowsPerPage_Grid",gxold:"OV55GridSettingsRowsPerPage_Grid",gxvar:"AV55GridSettingsRowsPerPage_Grid",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV55GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV55GridSettingsRowsPerPage_Grid=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vGRIDSETTINGSROWSPERPAGE_GRID",gx.O.AV55GridSettingsRowsPerPage_Grid)},c2v:function(){if(this.val()!==undefined)gx.O.AV55GridSettingsRowsPerPage_Grid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRIDSETTINGSROWSPERPAGE_GRID",'.')},nac:gx.falseFn};
   GXValidFnc[127]={ id: 127, fld:"",grid:0};
   GXValidFnc[128]={ id: 128, fld:"",grid:0};
   GXValidFnc[129]={ id: 129, fld:"GRIDSETTINGS_SAVEGRID",grid:0,evt:"e11222_client"};
   GXValidFnc[131]={ id: 131, fld:"ACTIONS_GRID_TOPRIGHT",grid:0};
   GXValidFnc[134]={ id: 134, fld:"ADD",grid:0,evt:"e22221_client"};
   GXValidFnc[135]={ id: 135, fld:"",grid:0};
   GXValidFnc[136]={ id: 136, fld:"",grid:0};
   GXValidFnc[137]={ id: 137, fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};
   GXValidFnc[138]={ id: 138, fld:"",grid:0};
   GXValidFnc[139]={ id: 139, fld:"",grid:0};
   GXValidFnc[140]={ id: 140, fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};
   GXValidFnc[141]={ id: 141, fld:"",grid:0};
   GXValidFnc[142]={ id: 142, fld:"",grid:0};
   GXValidFnc[144]={ id:144 ,lvl:2,type:"char",len:60,dec:0,sign:false,ro:0,isacc:0,grid:143,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHENTICATIONTYPENAME",gxz:"ZV9AuthenticationTypeName",gxold:"OV9AuthenticationTypeName",gxvar:"AV9AuthenticationTypeName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV9AuthenticationTypeName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV9AuthenticationTypeName=Value},v2c:function(row){gx.fn.setGridControlValue("vAUTHENTICATIONTYPENAME",row || gx.fn.currentGridRowImpl(143),gx.O.AV9AuthenticationTypeName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV9AuthenticationTypeName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vAUTHENTICATIONTYPENAME",row || gx.fn.currentGridRowImpl(143))},nac:gx.falseFn};
   GXValidFnc[145]={ id:145 ,lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:143,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV32Name",gxold:"OV32Name",gxvar:"AV32Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV32Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV32Name=Value},v2c:function(row){gx.fn.setGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(143),gx.O.AV32Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV32Name=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vNAME",row || gx.fn.currentGridRowImpl(143))},nac:gx.falseFn};
   GXValidFnc[146]={ id:146 ,lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:143,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFIRSTNAME",gxz:"ZV22FirstName",gxold:"OV22FirstName",gxvar:"AV22FirstName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV22FirstName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV22FirstName=Value},v2c:function(row){gx.fn.setGridControlValue("vFIRSTNAME",row || gx.fn.currentGridRowImpl(143),gx.O.AV22FirstName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV22FirstName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vFIRSTNAME",row || gx.fn.currentGridRowImpl(143))},nac:gx.falseFn};
   GXValidFnc[147]={ id:147 ,lvl:2,type:"char",len:120,dec:0,sign:false,ro:0,isacc:0,grid:143,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLASTNAME",gxz:"ZV30LastName",gxold:"OV30LastName",gxvar:"AV30LastName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV30LastName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV30LastName=Value},v2c:function(row){gx.fn.setGridControlValue("vLASTNAME",row || gx.fn.currentGridRowImpl(143),gx.O.AV30LastName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV30LastName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vLASTNAME",row || gx.fn.currentGridRowImpl(143))},nac:gx.falseFn};
   GXValidFnc[148]={ id:148 ,lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:143,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERID",gxz:"ZV39UserId",gxold:"OV39UserId",gxvar:"AV39UserId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV39UserId=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV39UserId=Value},v2c:function(row){gx.fn.setGridControlValue("vUSERID",row || gx.fn.currentGridRowImpl(143),gx.O.AV39UserId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV39UserId=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUSERID",row || gx.fn.currentGridRowImpl(143))},nac:gx.falseFn};
   GXValidFnc[149]={ id:149 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:143,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vEMAIL",gxz:"ZV12Email",gxold:"OV12Email",gxvar:"AV12Email",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV12Email=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12Email=Value},v2c:function(row){gx.fn.setGridControlValue("vEMAIL",row || gx.fn.currentGridRowImpl(143),gx.O.AV12Email,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV12Email=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vEMAIL",row || gx.fn.currentGridRowImpl(143))},nac:gx.falseFn};
   GXValidFnc[150]={ id:150 ,lvl:2,type:"boolean",len:1,dec:0,sign:false,ro:0,isacc:0,grid:143,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISAUTOREGISTERUSER",gxz:"ZV29IsAutoRegisterUser",gxold:"OV29IsAutoRegisterUser",gxvar:"AV29IsAutoRegisterUser",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV29IsAutoRegisterUser=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV29IsAutoRegisterUser=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("vISAUTOREGISTERUSER",row || gx.fn.currentGridRowImpl(143),gx.O.AV29IsAutoRegisterUser,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV29IsAutoRegisterUser=gx.lang.booleanValue(this.val(row))},val:function(row){return gx.fn.getGridControlValue("vISAUTOREGISTERUSER",row || gx.fn.currentGridRowImpl(143))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[151]={ id:151 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:143,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE_ACTION",gxz:"ZV63Update_Action",gxold:"OV63Update_Action",gxvar:"AV63Update_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV63Update_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV63Update_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vUPDATE_ACTION",row || gx.fn.currentGridRowImpl(143),gx.O.AV63Update_Action,gx.O.AV73Update_action_GXI)},c2v:function(row){gx.O.AV73Update_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV63Update_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUPDATE_ACTION",row || gx.fn.currentGridRowImpl(143))},val_GXI:function(row){return gx.fn.getGridControlValue("vUPDATE_ACTION_GXI",row || gx.fn.currentGridRowImpl(143))}, gxvar_GXI:'AV73Update_action_GXI',nac:gx.falseFn,evt:"e23222_client"};
   GXValidFnc[152]={ id:152 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:143,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPASSWORD_ACTION",gxz:"ZV64Password_Action",gxold:"OV64Password_Action",gxvar:"AV64Password_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV64Password_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV64Password_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPASSWORD_ACTION",row || gx.fn.currentGridRowImpl(143),gx.O.AV64Password_Action,gx.O.AV74Password_action_GXI)},c2v:function(row){gx.O.AV74Password_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV64Password_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vPASSWORD_ACTION",row || gx.fn.currentGridRowImpl(143))},val_GXI:function(row){return gx.fn.getGridControlValue("vPASSWORD_ACTION_GXI",row || gx.fn.currentGridRowImpl(143))}, gxvar_GXI:'AV74Password_action_GXI',nac:gx.falseFn,evt:"e24222_client"};
   GXValidFnc[153]={ id:153 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:143,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE_ACTION",gxz:"ZV65Delete_Action",gxold:"OV65Delete_Action",gxvar:"AV65Delete_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV65Delete_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV65Delete_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(143),gx.O.AV65Delete_Action,gx.O.AV75Delete_action_GXI)},c2v:function(row){gx.O.AV75Delete_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV65Delete_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(143))},val_GXI:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION_GXI",row || gx.fn.currentGridRowImpl(143))}, gxvar_GXI:'AV75Delete_action_GXI',nac:gx.falseFn,evt:"e25222_client"};
   GXValidFnc[154]={ id: 154, fld:"",grid:0};
   GXValidFnc[155]={ id: 155, fld:"",grid:0};
   GXValidFnc[156]={ id: 156, fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};
   GXValidFnc[159]={ id: 159, fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID", format:0,grid:0};
   GXValidFnc[160]={ id: 160, fld:"",grid:0};
   GXValidFnc[161]={ id: 161, fld:"",grid:0};
   GXValidFnc[162]={ id: 162, fld:"LAYOUTDEFINED_SECTION8_GRID",grid:0};
   GXValidFnc[163]={ id: 163, fld:"PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID",grid:0};
   GXValidFnc[166]={ id: 166, fld:"PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e18221_client"};
   GXValidFnc[168]={ id: 168, fld:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e19221_client"};
   GXValidFnc[170]={ id: 170, fld:"PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[172]={ id: 172, fld:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e18221_client"};
   GXValidFnc[174]={ id: 174, fld:"PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[176]={ id: 176, fld:"PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID", format:0,grid:0,evt:"e20221_client"};
   GXValidFnc[178]={ id: 178, fld:"PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID", format:0,grid:0};
   GXValidFnc[180]={ id: 180, fld:"PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID", format:1,grid:0,evt:"e20221_client"};
   GXValidFnc[181]={ id: 181, fld:"",grid:0};
   GXValidFnc[182]={ id: 182, fld:"",grid:0};
   GXValidFnc[183]={ id: 183, fld:"",grid:0};
   this.AV18FilName = "" ;
   this.ZV18FilName = "" ;
   this.OV18FilName = "" ;
   this.AV19FilNames = "" ;
   this.ZV19FilNames = "" ;
   this.OV19FilNames = "" ;
   this.AV17FilEmail = "" ;
   this.ZV17FilEmail = "" ;
   this.OV17FilEmail = "" ;
   this.AV16FilAutType = "" ;
   this.ZV16FilAutType = "" ;
   this.OV16FilAutType = "" ;
   this.AV45IsVisible_AuthenticationTypeName = false ;
   this.ZV45IsVisible_AuthenticationTypeName = false ;
   this.OV45IsVisible_AuthenticationTypeName = false ;
   this.AV46IsVisible_Name = false ;
   this.ZV46IsVisible_Name = false ;
   this.OV46IsVisible_Name = false ;
   this.AV47IsVisible_FirstName = false ;
   this.ZV47IsVisible_FirstName = false ;
   this.OV47IsVisible_FirstName = false ;
   this.AV48IsVisible_LastName = false ;
   this.ZV48IsVisible_LastName = false ;
   this.OV48IsVisible_LastName = false ;
   this.AV49IsVisible_Email = false ;
   this.ZV49IsVisible_Email = false ;
   this.OV49IsVisible_Email = false ;
   this.AV55GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV55GridSettingsRowsPerPage_Grid = 0 ;
   this.OV55GridSettingsRowsPerPage_Grid = 0 ;
   this.ZV9AuthenticationTypeName = "" ;
   this.OV9AuthenticationTypeName = "" ;
   this.ZV32Name = "" ;
   this.OV32Name = "" ;
   this.ZV22FirstName = "" ;
   this.OV22FirstName = "" ;
   this.ZV30LastName = "" ;
   this.OV30LastName = "" ;
   this.ZV39UserId = "" ;
   this.OV39UserId = "" ;
   this.ZV12Email = "" ;
   this.OV12Email = "" ;
   this.ZV29IsAutoRegisterUser = false ;
   this.OV29IsAutoRegisterUser = false ;
   this.ZV63Update_Action = "" ;
   this.OV63Update_Action = "" ;
   this.ZV64Password_Action = "" ;
   this.OV64Password_Action = "" ;
   this.ZV65Delete_Action = "" ;
   this.OV65Delete_Action = "" ;
   this.AV66FilterTagsCollection_Grid = [ ] ;
   this.AV18FilName = "" ;
   this.AV19FilNames = "" ;
   this.AV17FilEmail = "" ;
   this.AV16FilAutType = "" ;
   this.AV45IsVisible_AuthenticationTypeName = false ;
   this.AV46IsVisible_Name = false ;
   this.AV47IsVisible_FirstName = false ;
   this.AV48IsVisible_LastName = false ;
   this.AV49IsVisible_Email = false ;
   this.AV55GridSettingsRowsPerPage_Grid = 0 ;
   this.AV9AuthenticationTypeName = "" ;
   this.AV32Name = "" ;
   this.AV22FirstName = "" ;
   this.AV30LastName = "" ;
   this.AV39UserId = "" ;
   this.AV12Email = "" ;
   this.AV29IsAutoRegisterUser = false ;
   this.AV63Update_Action = "" ;
   this.AV64Password_Action = "" ;
   this.AV65Delete_Action = "" ;
   this.AV7AnonymousUserGUID = "" ;
   this.AV54RowsPerPage_Grid = 0 ;
   this.AV11CurrentPage_Grid = 0 ;
   this.AV28I_LoadCount_Grid = 0 ;
   this.AV26HasNextPage_Grid = false ;
   this.AV71Pgmname = "" ;
   this.AV43GridColumns = [ ] ;
   this.AV56FilName_PreviousValue = "" ;
   this.AV57FilNames_PreviousValue = "" ;
   this.AV58FilEmail_PreviousValue = "" ;
   this.AV59FilAutType_PreviousValue = "" ;
   this.AV67DeletedTag_Grid = "" ;
   this.AV44GridColumn = {AttributeName:"",ShowAttribute:false,ColumnTitle:""} ;
   this.Events = {"e11222_client": ["'SAVEGRIDSETTINGS(GRID)'", true] ,"e12222_client": ["LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID.CLICK", true] ,"e13222_client": ["LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID.CLICK", true] ,"e27222_client": ["ENTER", true] ,"e28222_client": ["CANCEL", true] ,"e18221_client": ["'PAGINGPREVIOUS(GRID)'", false] ,"e20221_client": ["'PAGINGNEXT(GRID)'", false] ,"e22221_client": ["'E_ADD'", false] ,"e24222_client": ["'E_PASSWORD'", false] ,"e25222_client": ["'E_DELETE'", false] ,"e19221_client": ["'PAGINGFIRST(GRID)'", false] ,"e21221_client": ["'TOGGLEGRIDSETTINGS(GRID)'", false] ,"e23222_client": ["'E_UPDATE'", false] ,"e26221_client": ["FILTERTAGSUSERCONTROL_GRID.TAGDELETED", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV56FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV18FilName',fld:'vFILNAME',pic:''},{av:'AV57FilNames_PreviousValue',fld:'vFILNAMES_PREVIOUSVALUE',pic:''},{av:'AV19FilNames',fld:'vFILNAMES',pic:''},{av:'AV58FilEmail_PreviousValue',fld:'vFILEMAIL_PREVIOUSVALUE',pic:''},{av:'AV17FilEmail',fld:'vFILEMAIL',pic:''},{av:'AV59FilAutType_PreviousValue',fld:'vFILAUTTYPE_PREVIOUSVALUE',pic:''},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV29IsAutoRegisterUser',fld:'vISAUTOREGISTERUSER',pic:'',hsh:true},{av:'AV54RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV43GridColumns',fld:'vGRIDCOLUMNS',pic:''},{av:'AV7AnonymousUserGUID',fld:'vANONYMOUSUSERGUID',pic:'',hsh:true},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV71Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV43GridColumns',fld:'vGRIDCOLUMNS',pic:''},{av:'gx.fn.getCtrlProperty("vAUTHENTICATIONTYPENAME","Visible")',ctrl:'vAUTHENTICATIONTYPENAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vNAME","Visible")',ctrl:'vNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFIRSTNAME","Visible")',ctrl:'vFIRSTNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLASTNAME","Visible")',ctrl:'vLASTNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEMAIL","Visible")',ctrl:'vEMAIL',prop:'Visible'},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV7AnonymousUserGUID',fld:'vANONYMOUSUSERGUID',pic:'',hsh:true},{ctrl:'ADD',prop:'Visible'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV71Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV18FilName',fld:'vFILNAME',pic:''},{av:'AV19FilNames',fld:'vFILNAMES',pic:''},{av:'AV17FilEmail',fld:'vFILEMAIL',pic:''},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'},{av:'AV54RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV55GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV56FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV57FilNames_PreviousValue',fld:'vFILNAMES_PREVIOUSVALUE',pic:''},{av:'AV58FilEmail_PreviousValue',fld:'vFILEMAIL_PREVIOUSVALUE',pic:''},{av:'AV59FilAutType_PreviousValue',fld:'vFILAUTTYPE_PREVIOUSVALUE',pic:''},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV18FilName',fld:'vFILNAME',pic:''},{av:'AV19FilNames',fld:'vFILNAMES',pic:''},{av:'AV17FilEmail',fld:'vFILEMAIL',pic:''},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'this.FILTERTAGSUSERCONTROL_GRIDContainer.EmptyStateMessage',ctrl:'FILTERTAGSUSERCONTROL_GRID',prop:'EmptyStateMessage'},{av:'AV66FilterTagsCollection_Grid',fld:'vFILTERTAGSCOLLECTION_GRID',pic:''},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV7AnonymousUserGUID',fld:'vANONYMOUSUSERGUID',pic:'',hsh:true},{av:'AV29IsAutoRegisterUser',fld:'vISAUTOREGISTERUSER',pic:'',hsh:true},{av:'AV54RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV18FilName',fld:'vFILNAME',pic:''},{av:'AV19FilNames',fld:'vFILNAMES',pic:''},{av:'AV17FilEmail',fld:'vFILEMAIL',pic:''},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV71Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_GRID',prop:'Visible'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV63Update_Action',fld:'vUPDATE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE_ACTION","Enabled")',ctrl:'vUPDATE_ACTION',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUPDATE_ACTION","Tooltiptext")',ctrl:'vUPDATE_ACTION',prop:'Tooltiptext'},{av:'AV64Password_Action',fld:'vPASSWORD_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vPASSWORD_ACTION","Enabled")',ctrl:'vPASSWORD_ACTION',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPASSWORD_ACTION","Tooltiptext")',ctrl:'vPASSWORD_ACTION',prop:'Tooltiptext'},{av:'AV65Delete_Action',fld:'vDELETE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Enabled")',ctrl:'vDELETE_ACTION',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Tooltiptext")',ctrl:'vDELETE_ACTION',prop:'Tooltiptext'},{av:'AV9AuthenticationTypeName',fld:'vAUTHENTICATIONTYPENAME',pic:''},{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV32Name',fld:'vNAME',pic:''},{av:'AV22FirstName',fld:'vFIRSTNAME',pic:''},{av:'AV30LastName',fld:'vLASTNAME',pic:''},{av:'AV12Email',fld:'vEMAIL',pic:''},{av:'AV29IsAutoRegisterUser',fld:'vISAUTOREGISTERUSER',pic:'',hsh:true},{av:'gx.fn.getCtrlProperty("vNAME","Link")',ctrl:'vNAME',prop:'Link'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["'PAGINGPREVIOUS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV56FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV18FilName',fld:'vFILNAME',pic:''},{av:'AV57FilNames_PreviousValue',fld:'vFILNAMES_PREVIOUSVALUE',pic:''},{av:'AV19FilNames',fld:'vFILNAMES',pic:''},{av:'AV58FilEmail_PreviousValue',fld:'vFILEMAIL_PREVIOUSVALUE',pic:''},{av:'AV17FilEmail',fld:'vFILEMAIL',pic:''},{av:'AV59FilAutType_PreviousValue',fld:'vFILAUTTYPE_PREVIOUSVALUE',pic:''},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV71Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV43GridColumns',fld:'vGRIDCOLUMNS',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV7AnonymousUserGUID',fld:'vANONYMOUSUSERGUID',pic:'',hsh:true},{av:'AV29IsAutoRegisterUser',fld:'vISAUTOREGISTERUSER',pic:'',hsh:true},{av:'AV54RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV43GridColumns',fld:'vGRIDCOLUMNS',pic:''},{av:'gx.fn.getCtrlProperty("vAUTHENTICATIONTYPENAME","Visible")',ctrl:'vAUTHENTICATIONTYPENAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vNAME","Visible")',ctrl:'vNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFIRSTNAME","Visible")',ctrl:'vFIRSTNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLASTNAME","Visible")',ctrl:'vLASTNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEMAIL","Visible")',ctrl:'vEMAIL',prop:'Visible'},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV7AnonymousUserGUID',fld:'vANONYMOUSUSERGUID',pic:'',hsh:true},{ctrl:'ADD',prop:'Visible'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["'PAGINGNEXT(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV56FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV18FilName',fld:'vFILNAME',pic:''},{av:'AV57FilNames_PreviousValue',fld:'vFILNAMES_PREVIOUSVALUE',pic:''},{av:'AV19FilNames',fld:'vFILNAMES',pic:''},{av:'AV58FilEmail_PreviousValue',fld:'vFILEMAIL_PREVIOUSVALUE',pic:''},{av:'AV17FilEmail',fld:'vFILEMAIL',pic:''},{av:'AV59FilAutType_PreviousValue',fld:'vFILAUTTYPE_PREVIOUSVALUE',pic:''},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV71Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV43GridColumns',fld:'vGRIDCOLUMNS',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV7AnonymousUserGUID',fld:'vANONYMOUSUSERGUID',pic:'',hsh:true},{av:'AV29IsAutoRegisterUser',fld:'vISAUTOREGISTERUSER',pic:'',hsh:true},{av:'AV54RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV43GridColumns',fld:'vGRIDCOLUMNS',pic:''},{av:'gx.fn.getCtrlProperty("vAUTHENTICATIONTYPENAME","Visible")',ctrl:'vAUTHENTICATIONTYPENAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vNAME","Visible")',ctrl:'vNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFIRSTNAME","Visible")',ctrl:'vFIRSTNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLASTNAME","Visible")',ctrl:'vLASTNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEMAIL","Visible")',ctrl:'vEMAIL',prop:'Visible'},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV7AnonymousUserGUID',fld:'vANONYMOUSUSERGUID',pic:'',hsh:true},{ctrl:'ADD',prop:'Visible'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["'E_ADD'"] = [[{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["'E_PASSWORD'"] = [[{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["'PAGINGFIRST(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV56FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV18FilName',fld:'vFILNAME',pic:''},{av:'AV57FilNames_PreviousValue',fld:'vFILNAMES_PREVIOUSVALUE',pic:''},{av:'AV19FilNames',fld:'vFILNAMES',pic:''},{av:'AV58FilEmail_PreviousValue',fld:'vFILEMAIL_PREVIOUSVALUE',pic:''},{av:'AV17FilEmail',fld:'vFILEMAIL',pic:''},{av:'AV59FilAutType_PreviousValue',fld:'vFILAUTTYPE_PREVIOUSVALUE',pic:''},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV71Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV43GridColumns',fld:'vGRIDCOLUMNS',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV7AnonymousUserGUID',fld:'vANONYMOUSUSERGUID',pic:'',hsh:true},{av:'AV29IsAutoRegisterUser',fld:'vISAUTOREGISTERUSER',pic:'',hsh:true},{av:'AV54RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV43GridColumns',fld:'vGRIDCOLUMNS',pic:''},{av:'gx.fn.getCtrlProperty("vAUTHENTICATIONTYPENAME","Visible")',ctrl:'vAUTHENTICATIONTYPENAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vNAME","Visible")',ctrl:'vNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFIRSTNAME","Visible")',ctrl:'vFIRSTNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLASTNAME","Visible")',ctrl:'vLASTNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEMAIL","Visible")',ctrl:'vEMAIL',prop:'Visible'},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV7AnonymousUserGUID',fld:'vANONYMOUSUSERGUID',pic:'',hsh:true},{ctrl:'ADD',prop:'Visible'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["'TOGGLEGRIDSETTINGS(GRID)'"] = [[{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV54RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV55GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["'SAVEGRIDSETTINGS(GRID)'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV56FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV18FilName',fld:'vFILNAME',pic:''},{av:'AV57FilNames_PreviousValue',fld:'vFILNAMES_PREVIOUSVALUE',pic:''},{av:'AV19FilNames',fld:'vFILNAMES',pic:''},{av:'AV58FilEmail_PreviousValue',fld:'vFILEMAIL_PREVIOUSVALUE',pic:''},{av:'AV17FilEmail',fld:'vFILEMAIL',pic:''},{av:'AV59FilAutType_PreviousValue',fld:'vFILAUTTYPE_PREVIOUSVALUE',pic:''},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV71Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV43GridColumns',fld:'vGRIDCOLUMNS',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV7AnonymousUserGUID',fld:'vANONYMOUSUSERGUID',pic:'',hsh:true},{av:'AV29IsAutoRegisterUser',fld:'vISAUTOREGISTERUSER',pic:'',hsh:true},{av:'AV54RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{ctrl:'vGRIDSETTINGSROWSPERPAGE_GRID'},{av:'AV55GridSettingsRowsPerPage_Grid',fld:'vGRIDSETTINGSROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'AV43GridColumns',fld:'vGRIDCOLUMNS',pic:''},{av:'AV54RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:'GRIDSETTINGS_CONTENTOUTERTABLEGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vAUTHENTICATIONTYPENAME","Visible")',ctrl:'vAUTHENTICATIONTYPENAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vNAME","Visible")',ctrl:'vNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFIRSTNAME","Visible")',ctrl:'vFIRSTNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLASTNAME","Visible")',ctrl:'vLASTNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEMAIL","Visible")',ctrl:'vEMAIL',prop:'Visible'},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV7AnonymousUserGUID',fld:'vANONYMOUSUSERGUID',pic:'',hsh:true},{ctrl:'ADD',prop:'Visible'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["'E_UPDATE'"] = [[{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV56FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV18FilName',fld:'vFILNAME',pic:''},{av:'AV57FilNames_PreviousValue',fld:'vFILNAMES_PREVIOUSVALUE',pic:''},{av:'AV19FilNames',fld:'vFILNAMES',pic:''},{av:'AV58FilEmail_PreviousValue',fld:'vFILEMAIL_PREVIOUSVALUE',pic:''},{av:'AV17FilEmail',fld:'vFILEMAIL',pic:''},{av:'AV59FilAutType_PreviousValue',fld:'vFILAUTTYPE_PREVIOUSVALUE',pic:''},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV71Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV43GridColumns',fld:'vGRIDCOLUMNS',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'AV56FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV57FilNames_PreviousValue',fld:'vFILNAMES_PREVIOUSVALUE',pic:''},{av:'AV58FilEmail_PreviousValue',fld:'vFILEMAIL_PREVIOUSVALUE',pic:''},{av:'AV59FilAutType_PreviousValue',fld:'vFILAUTTYPE_PREVIOUSVALUE',pic:''},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'this.FILTERTAGSUSERCONTROL_GRIDContainer.EmptyStateMessage',ctrl:'FILTERTAGSUSERCONTROL_GRID',prop:'EmptyStateMessage'},{av:'AV66FilterTagsCollection_Grid',fld:'vFILTERTAGSCOLLECTION_GRID',pic:''},{av:'AV43GridColumns',fld:'vGRIDCOLUMNS',pic:''},{av:'gx.fn.getCtrlProperty("vAUTHENTICATIONTYPENAME","Visible")',ctrl:'vAUTHENTICATIONTYPENAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vNAME","Visible")',ctrl:'vNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFIRSTNAME","Visible")',ctrl:'vFIRSTNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLASTNAME","Visible")',ctrl:'vLASTNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEMAIL","Visible")',ctrl:'vEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Caption'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_FIRSTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGLEFTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_PREVIOUSPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTCELLGRID","Class")',ctrl:'PAGINATIONBAR_SPACINGRIGHTCELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGECELLGRID","Class")',ctrl:'PAGINATIONBAR_NEXTPAGECELLGRID',prop:'Class'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:'PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:'PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID',prop:'Visible'},{ctrl:'ADD',prop:'Visible'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["LAYOUTDEFINED_FILTERTOGGLE_ONLYDETAILED_GRID.CLICK"] = [[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["LAYOUTDEFINED_FILTERCLOSE_ONLYDETAILED_GRID.CLICK"] = [[{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'gx.fn.getCtrlProperty("LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID","Visible")',ctrl:'LAYOUTDEFINED_FILTERCOLLAPSIBLESECTION_ONLYDETAILED_GRID',prop:'Visible'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.EvtParms["FILTERTAGSUSERCONTROL_GRID.TAGDELETED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV56FilName_PreviousValue',fld:'vFILNAME_PREVIOUSVALUE',pic:''},{av:'AV18FilName',fld:'vFILNAME',pic:''},{av:'AV57FilNames_PreviousValue',fld:'vFILNAMES_PREVIOUSVALUE',pic:''},{av:'AV19FilNames',fld:'vFILNAMES',pic:''},{av:'AV58FilEmail_PreviousValue',fld:'vFILEMAIL_PREVIOUSVALUE',pic:''},{av:'AV17FilEmail',fld:'vFILEMAIL',pic:''},{av:'AV59FilAutType_PreviousValue',fld:'vFILAUTTYPE_PREVIOUSVALUE',pic:''},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV71Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV43GridColumns',fld:'vGRIDCOLUMNS',pic:''},{av:'AV26HasNextPage_Grid',fld:'vHASNEXTPAGE_GRID',pic:'',hsh:true},{av:'AV39UserId',fld:'vUSERID',pic:''},{av:'AV7AnonymousUserGUID',fld:'vANONYMOUSUSERGUID',pic:'',hsh:true},{av:'AV29IsAutoRegisterUser',fld:'vISAUTOREGISTERUSER',pic:'',hsh:true},{av:'AV54RowsPerPage_Grid',fld:'vROWSPERPAGE_GRID',pic:'ZZZ9'},{av:'AV28I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV67DeletedTag_Grid',fld:'vDELETEDTAG_GRID',pic:''},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}],[{av:'AV18FilName',fld:'vFILNAME',pic:''},{av:'AV19FilNames',fld:'vFILNAMES',pic:''},{av:'AV17FilEmail',fld:'vFILEMAIL',pic:''},{ctrl:'vFILAUTTYPE'},{av:'AV16FilAutType',fld:'vFILAUTTYPE',pic:''},{av:'AV11CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9'},{av:'AV43GridColumns',fld:'vGRIDCOLUMNS',pic:''},{av:'gx.fn.getCtrlProperty("vAUTHENTICATIONTYPENAME","Visible")',ctrl:'vAUTHENTICATIONTYPENAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vNAME","Visible")',ctrl:'vNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFIRSTNAME","Visible")',ctrl:'vFIRSTNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vLASTNAME","Visible")',ctrl:'vLASTNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vEMAIL","Visible")',ctrl:'vEMAIL',prop:'Visible'},{av:'AV7AnonymousUserGUID',fld:'vANONYMOUSUSERGUID',pic:'',hsh:true},{ctrl:'ADD',prop:'Visible'},{av:'AV45IsVisible_AuthenticationTypeName',fld:'vISVISIBLE_AUTHENTICATIONTYPENAME',pic:''},{av:'AV46IsVisible_Name',fld:'vISVISIBLE_NAME',pic:''},{av:'AV47IsVisible_FirstName',fld:'vISVISIBLE_FIRSTNAME',pic:''},{av:'AV48IsVisible_LastName',fld:'vISVISIBLE_LASTNAME',pic:''},{av:'AV49IsVisible_Email',fld:'vISVISIBLE_EMAIL',pic:''}]];
   this.setVCMap("AV7AnonymousUserGUID", "vANONYMOUSUSERGUID", 0, "char", 40, 0);
   this.setVCMap("AV54RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV11CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV28I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV26HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV71Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV43GridColumns", "vGRIDCOLUMNS", 0, "CollK2BGridColumns.K2BGridColumnsItem", 0, 0);
   this.setVCMap("AV56FilName_PreviousValue", "vFILNAME_PREVIOUSVALUE", 0, "svchar", 100, 60);
   this.setVCMap("AV57FilNames_PreviousValue", "vFILNAMES_PREVIOUSVALUE", 0, "char", 60, 0);
   this.setVCMap("AV58FilEmail_PreviousValue", "vFILEMAIL_PREVIOUSVALUE", 0, "svchar", 100, 0);
   this.setVCMap("AV59FilAutType_PreviousValue", "vFILAUTTYPE_PREVIOUSVALUE", 0, "char", 60, 0);
   this.setVCMap("AV67DeletedTag_Grid", "vDELETEDTAG_GRID", 0, "char", 30, 0);
   this.setVCMap("AV56FilName_PreviousValue", "vFILNAME_PREVIOUSVALUE", 0, "svchar", 100, 60);
   this.setVCMap("AV57FilNames_PreviousValue", "vFILNAMES_PREVIOUSVALUE", 0, "char", 60, 0);
   this.setVCMap("AV58FilEmail_PreviousValue", "vFILEMAIL_PREVIOUSVALUE", 0, "svchar", 100, 0);
   this.setVCMap("AV59FilAutType_PreviousValue", "vFILAUTTYPE_PREVIOUSVALUE", 0, "char", 60, 0);
   this.setVCMap("AV71Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV11CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV43GridColumns", "vGRIDCOLUMNS", 0, "CollK2BGridColumns.K2BGridColumnsItem", 0, 0);
   this.setVCMap("AV26HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV7AnonymousUserGUID", "vANONYMOUSUSERGUID", 0, "char", 40, 0);
   this.setVCMap("AV54RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV28I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("AV67DeletedTag_Grid", "vDELETEDTAG_GRID", 0, "char", 30, 0);
   this.setVCMap("AV54RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV11CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV26HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV56FilName_PreviousValue", "vFILNAME_PREVIOUSVALUE", 0, "svchar", 100, 60);
   this.setVCMap("AV57FilNames_PreviousValue", "vFILNAMES_PREVIOUSVALUE", 0, "char", 60, 0);
   this.setVCMap("AV58FilEmail_PreviousValue", "vFILEMAIL_PREVIOUSVALUE", 0, "svchar", 100, 0);
   this.setVCMap("AV59FilAutType_PreviousValue", "vFILAUTTYPE_PREVIOUSVALUE", 0, "char", 60, 0);
   this.setVCMap("AV71Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV11CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV43GridColumns", "vGRIDCOLUMNS", 0, "CollK2BGridColumns.K2BGridColumnsItem", 0, 0);
   this.setVCMap("AV26HasNextPage_Grid", "vHASNEXTPAGE_GRID", 0, "boolean", 4, 0);
   this.setVCMap("AV7AnonymousUserGUID", "vANONYMOUSUSERGUID", 0, "char", 40, 0);
   this.setVCMap("AV54RowsPerPage_Grid", "vROWSPERPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV28I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV56FilName_PreviousValue"});
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV57FilNames_PreviousValue"});
   GridContainer.addRefreshingVar(this.GXValidFnc[52]);
   GridContainer.addRefreshingVar({rfrVar:"AV58FilEmail_PreviousValue"});
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar({rfrVar:"AV59FilAutType_PreviousValue"});
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridContainer.addRefreshingVar({rfrVar:"AV71Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV11CurrentPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV43GridColumns"});
   GridContainer.addRefreshingVar({rfrVar:"AV26HasNextPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV39UserId", rfrProp:"Value", gxAttId:"Userid"});
   GridContainer.addRefreshingVar({rfrVar:"AV7AnonymousUserGUID"});
   GridContainer.addRefreshingVar({rfrVar:"AV29IsAutoRegisterUser", rfrProp:"Value", gxAttId:"Isautoregisteruser"});
   GridContainer.addRefreshingVar({rfrVar:"AV54RowsPerPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV28I_LoadCount_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV56FilName_PreviousValue"});
   GridContainer.addRefreshingParm(this.GXValidFnc[46]);
   GridContainer.addRefreshingParm({rfrVar:"AV57FilNames_PreviousValue"});
   GridContainer.addRefreshingParm(this.GXValidFnc[52]);
   GridContainer.addRefreshingParm({rfrVar:"AV58FilEmail_PreviousValue"});
   GridContainer.addRefreshingParm(this.GXValidFnc[58]);
   GridContainer.addRefreshingParm({rfrVar:"AV59FilAutType_PreviousValue"});
   GridContainer.addRefreshingParm(this.GXValidFnc[64]);
   GridContainer.addRefreshingParm({rfrVar:"AV71Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV11CurrentPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV43GridColumns"});
   GridContainer.addRefreshingParm({rfrVar:"AV26HasNextPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV39UserId", rfrProp:"Value", gxAttId:"Userid"});
   GridContainer.addRefreshingParm({rfrVar:"AV7AnonymousUserGUID"});
   GridContainer.addRefreshingParm({rfrVar:"AV29IsAutoRegisterUser", rfrProp:"Value", gxAttId:"Isautoregisteruser"});
   GridContainer.addRefreshingParm({rfrVar:"AV54RowsPerPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV28I_LoadCount_Grid"});
   GridContainer.addRefreshingParm(this.GXValidFnc[96]);
   GridContainer.addRefreshingParm(this.GXValidFnc[102]);
   GridContainer.addRefreshingParm(this.GXValidFnc[108]);
   GridContainer.addRefreshingParm(this.GXValidFnc[114]);
   GridContainer.addRefreshingParm(this.GXValidFnc[120]);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(k2bfsg.wwuser);});
