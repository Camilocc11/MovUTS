gx.evt.autoSkip = false;
gx.define('k2bfsg.wcauthenticationtypeentryoauth20', true, function (CmpContext) {
   this.ServerClass =  "k2bfsg.wcauthenticationtypeentryoauth20" ;
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
      this.AV26CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV109Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV40I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV104TypeId=gx.fn.getControlValue("vTYPEID") ;
      this.AV26CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",'.') ;
      this.AV109Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV40I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Validv_Functionid=function()
   {
      return this.validCliEvt("Validv_Functionid", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vFUNCTIONID");
         this.AnyError  = 0;
         if ( ! ( ( this.AV34FunctionId == "AuthenticationAndRoles" ) || ( this.AV34FunctionId == "OnlyAuthentication" ) ) )
         {
            try {
               gxballoon.setError("Campo Function Id fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Validv_Tokenmethod=function()
   {
      return this.validCliEvt("Validv_Tokenmethod", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vTOKENMETHOD");
         this.AnyError  = 0;
         if ( ! ( ( this.AV63TokenMethod == "POST" ) || ( this.AV63TokenMethod == "GET" ) ) )
         {
            try {
               gxballoon.setError("Campo Token Method fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.Validv_Userinfomethod=function()
   {
      return this.validCliEvt("Validv_Userinfomethod", 0, function () {
      try {
         var gxballoon = gx.util.balloon.getNew("vUSERINFOMETHOD");
         this.AnyError  = 0;
         if ( ! ( ( this.AV85UserInfoMethod == "POST" ) || ( this.AV85UserInfoMethod == "GET" ) ) )
         {
            try {
               gxballoon.setError("Campo User Info Method fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

         this.refreshOutputs([{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]);
      }
      catch(e){}
      try {
          if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
      });
   }
   this.s232_client=function()
   {
      if ( this.AV94UserInfoResponseUserLastNameGenAuto )
      {
         gx.fn.setCtrlProperty("vUSERINFORESPONSEUSERLASTNAMETAG","Visible", false );
         gx.fn.setCtrlProperty("TBUSERLASTNAMEHELP","Caption", "*Generar apellido automáticamente usando espacios en el nombre" );
      }
      else
      {
         gx.fn.setCtrlProperty("vUSERINFORESPONSEUSERLASTNAMETAG","Visible", true );
         gx.fn.setCtrlProperty("TBUSERLASTNAMEHELP","Caption", "" );
      }
   };
   this.s132_client=function()
   {
   };
   this.s142_client=function()
   {
   };
   this.s182_client=function()
   {
   };
   this.e212l1_client=function()
   {
      this.clearMessages();
      this.s222_client();
      this.refreshOutputs([{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.s222_client=function()
   {
      this.call("com.movuts.k2bfsg.wwauthtype", []);
   };
   this.e222l1_client=function()
   {
      this.clearMessages();
      this.s232_client();
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERLASTNAMETAG","Visible")',ctrl:'vUSERINFORESPONSEUSERLASTNAMETAG',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBUSERLASTNAMEHELP","Caption")',ctrl:'TBUSERLASTNAMEHELP',prop:'Caption'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e112l1_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS","Visible") != 0 )
      {
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS","Visible", false );
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS","Class", "Section_LineSeparatorContentClose" );
         gx.fn.setCtrlProperty("LINESEPARATORHEADER_ADVANCEDCONFIGURATIONLS","Class", "Section_LineSeparatorClose" );
      }
      else
      {
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS","Visible", true );
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS","Class", "Section_LineSeparatorContentOpen" );
         gx.fn.setCtrlProperty("LINESEPARATORHEADER_ADVANCEDCONFIGURATIONLS","Class", "Section_LineSeparatorOpen" );
      }
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS","Class")',ctrl:'LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_ADVANCEDCONFIGURATIONLS","Class")',ctrl:'LINESEPARATORHEADER_ADVANCEDCONFIGURATIONLS',prop:'Class'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e122l1_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS","Visible") != 0 )
      {
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS","Visible", false );
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS","Class", "Section_LineSeparatorContentClose" );
         gx.fn.setCtrlProperty("LINESEPARATORHEADER_ADVANCEDCONFIGURATIONTOKENLS","Class", "Section_LineSeparatorClose" );
      }
      else
      {
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS","Visible", true );
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS","Class", "Section_LineSeparatorContentOpen" );
         gx.fn.setCtrlProperty("LINESEPARATORHEADER_ADVANCEDCONFIGURATIONTOKENLS","Class", "Section_LineSeparatorOpen" );
      }
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS","Class")',ctrl:'LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_ADVANCEDCONFIGURATIONTOKENLS","Class")',ctrl:'LINESEPARATORHEADER_ADVANCEDCONFIGURATIONTOKENLS',prop:'Class'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e132l1_client=function()
   {
      this.clearMessages();
      if ( gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION","Visible") != 0 )
      {
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION","Visible", false );
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION","Class", "Section_LineSeparatorContentClose" );
         gx.fn.setCtrlProperty("LINESEPARATORHEADER_ADVANCEDUSERCONFIGURATION","Class", "Section_LineSeparatorClose" );
      }
      else
      {
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION","Visible", true );
         gx.fn.setCtrlProperty("LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION","Class", "Section_LineSeparatorContentOpen" );
         gx.fn.setCtrlProperty("LINESEPARATORHEADER_ADVANCEDUSERCONFIGURATION","Class", "Section_LineSeparatorOpen" );
      }
      this.refreshOutputs([{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION","Class")',ctrl:'LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_ADVANCEDUSERCONFIGURATION","Class")',ctrl:'LINESEPARATORHEADER_ADVANCEDUSERCONFIGURATION',prop:'Class'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]);
      return gx.$.Deferred().resolve();
   };
   this.e142l2_client=function()
   {
      return this.executeServerEvent("'E_ADD'", false, null, false, false);
   };
   this.e202l2_client=function()
   {
      return this.executeServerEvent("'E_DELETE'", true, arguments[0], false, false);
   };
   this.e152l2_client=function()
   {
      return this.executeServerEvent("'E_CONFIRM'", false, null, false, false);
   };
   this.e232l2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e242l2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,58,59,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,96,97,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,199,200,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,333,334,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,517,518,519,520,521,522,525,526,527,528,529,530,531,532,533,534,535,538,540,541,542];
   this.GXLastCtrlId =542;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",516,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.wcauthenticationtypeentryoauth20",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",false,false,true,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Dynamicpropname",517,"vDYNAMICPROPNAME","Nombre","","DynamicPropName","char",0,"px",60,60,"left",null,[],"Dynamicpropname","DynamicPropName",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn");
   GridContainer.addSingleLineEdit("Dynamicproptag",518,"vDYNAMICPROPTAG","Etiqueta","","DynamicPropTag","char",0,"px",60,60,"left",null,[],"Dynamicproptag","DynamicPropTag",true,0,false,false,"Attribute_Grid",1,"K2BToolsGridColumn InvisibleInExtraSmallColumn");
   GridContainer.addBitmap("&Delete_action","vDELETE_ACTION",519,20,"px",17,"px","e202l2_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.TABS_TABSCONTROLContainer = gx.uc.getNew(this, 56, 21, "gx.ui.controls.Tab", this.CmpContext + "TABS_TABSCONTROLContainer", "Tabs_tabscontrol", "TABS_TABSCONTROL");
   var TABS_TABSCONTROLContainer = this.TABS_TABSCONTROLContainer;
   TABS_TABSCONTROLContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABS_TABSCONTROLContainer.setProp("ActivePage", "Activepage", '', "int");
   TABS_TABSCONTROLContainer.setProp("ActivePageControlName", "Activepagecontrolname", "", "char");
   TABS_TABSCONTROLContainer.setProp("PageCount", "Pagecount", 4, "num");
   TABS_TABSCONTROLContainer.setProp("Class", "Class", "Tab", "str");
   TABS_TABSCONTROLContainer.setProp("HistoryManagement", "Historymanagement", false, "bool");
   TABS_TABSCONTROLContainer.setProp("Visible", "Visible", true, "bool");
   TABS_TABSCONTROLContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABS_TABSCONTROLContainer);
   this.K2BCONTROLBEAUTIFY1Container = gx.uc.getNew(this, 543, 21, "K2BControlBeautify", this.CmpContext + "K2BCONTROLBEAUTIFY1Container", "K2bcontrolbeautify1", "K2BCONTROLBEAUTIFY1");
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
   GXValidFnc[12]={ id: 12, fld:"RESPONSIVETABLE_MAINATTRIBUTES_TBLDATA",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"ATTRIBUTESCONTAINERTABLE_TBLDATA",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"TABLE_CONTAINER_NAME",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id:21 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV44Name",gxold:"OV44Name",gxvar:"AV44Name",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV44Name=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV44Name=Value},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV44Name,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV44Name=this.val()},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"TABLE_CONTAINER_FUNCTIONID",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id:26 ,lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Functionid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFUNCTIONID",gxz:"ZV34FunctionId",gxold:"OV34FunctionId",gxvar:"AV34FunctionId",ucs:[],op:[26],ip:[26],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV34FunctionId=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV34FunctionId=Value},v2c:function(){gx.fn.setComboBoxValue("vFUNCTIONID",gx.O.AV34FunctionId);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV34FunctionId=this.val()},val:function(){return gx.fn.getControlValue("vFUNCTIONID")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"TABLE_CONTAINER_DSC",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id:32 ,lvl:0,type:"char",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",gxz:"ZV28Dsc",gxold:"OV28Dsc",gxvar:"AV28Dsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV28Dsc=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV28Dsc=Value},v2c:function(){gx.fn.setControlValue("vDSC",gx.O.AV28Dsc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV28Dsc=this.val()},val:function(){return gx.fn.getControlValue("vDSC")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"TABLE_CONTAINER_ISENABLE",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id:37 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vISENABLE",gxz:"ZV42IsEnable",gxold:"OV42IsEnable",gxvar:"AV42IsEnable",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV42IsEnable=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV42IsEnable=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISENABLE",gx.O.AV42IsEnable,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV42IsEnable=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISENABLE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"TABLE_CONTAINER_SMALLIMAGENAME",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id:43 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSMALLIMAGENAME",gxz:"ZV53SmallImageName",gxold:"OV53SmallImageName",gxvar:"AV53SmallImageName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV53SmallImageName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV53SmallImageName=Value},v2c:function(){gx.fn.setControlValue("vSMALLIMAGENAME",gx.O.AV53SmallImageName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV53SmallImageName=this.val()},val:function(){return gx.fn.getControlValue("vSMALLIMAGENAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"TABLE_CONTAINER_BIGIMAGENAME",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id:48 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBIGIMAGENAME",gxz:"ZV25BigImageName",gxold:"OV25BigImageName",gxvar:"AV25BigImageName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV25BigImageName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV25BigImageName=Value},v2c:function(){gx.fn.setControlValue("vBIGIMAGENAME",gx.O.AV25BigImageName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV25BigImageName=this.val()},val:function(){return gx.fn.getControlValue("vBIGIMAGENAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"TABLE_CONTAINER_IMPERSONATE",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id:53 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vIMPERSONATE",gxz:"ZV41Impersonate",gxold:"OV41Impersonate",gxvar:"AV41Impersonate",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV41Impersonate=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV41Impersonate=Value},v2c:function(){gx.fn.setControlValue("vIMPERSONATE",gx.O.AV41Impersonate,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV41Impersonate=this.val()},val:function(){return gx.fn.getControlValue("vIMPERSONATE")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"TAB_TABCONTROL_TITLE", format:0,grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"MAINTABRESPONSIVETABLE_TAB",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"TABLE_CONTAINER_OAUTH20CLIENTIDTAG",grid:0};
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id:67 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOAUTH20CLIENTIDTAG",gxz:"ZV45Oauth20ClientIdTag",gxold:"OV45Oauth20ClientIdTag",gxvar:"AV45Oauth20ClientIdTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV45Oauth20ClientIdTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV45Oauth20ClientIdTag=Value},v2c:function(){gx.fn.setControlValue("vOAUTH20CLIENTIDTAG",gx.O.AV45Oauth20ClientIdTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV45Oauth20ClientIdTag=this.val()},val:function(){return gx.fn.getControlValue("vOAUTH20CLIENTIDTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 67 , function() {
   });
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"TABLE_CONTAINER_OAUTH20CLIENTIDVALUE",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOAUTH20CLIENTIDVALUE",gxz:"ZV46Oauth20ClientIdValue",gxold:"OV46Oauth20ClientIdValue",gxvar:"AV46Oauth20ClientIdValue",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46Oauth20ClientIdValue=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV46Oauth20ClientIdValue=Value},v2c:function(){gx.fn.setControlValue("vOAUTH20CLIENTIDVALUE",gx.O.AV46Oauth20ClientIdValue,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV46Oauth20ClientIdValue=this.val()},val:function(){return gx.fn.getControlValue("vOAUTH20CLIENTIDVALUE")},nac:gx.falseFn};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id: 75, fld:"TABLE_CONTAINER_OAUTH20CLIENTSECRETTAG",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id:78 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOAUTH20CLIENTSECRETTAG",gxz:"ZV47Oauth20ClientSecretTag",gxold:"OV47Oauth20ClientSecretTag",gxvar:"AV47Oauth20ClientSecretTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47Oauth20ClientSecretTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV47Oauth20ClientSecretTag=Value},v2c:function(){gx.fn.setControlValue("vOAUTH20CLIENTSECRETTAG",gx.O.AV47Oauth20ClientSecretTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV47Oauth20ClientSecretTag=this.val()},val:function(){return gx.fn.getControlValue("vOAUTH20CLIENTSECRETTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 78 , function() {
   });
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"TABLE_CONTAINER_OAUTH20CLIENTSECRETVALUE",grid:0};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id:83 ,lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOAUTH20CLIENTSECRETVALUE",gxz:"ZV48Oauth20ClientSecretValue",gxold:"OV48Oauth20ClientSecretValue",gxvar:"AV48Oauth20ClientSecretValue",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48Oauth20ClientSecretValue=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48Oauth20ClientSecretValue=Value},v2c:function(){gx.fn.setControlValue("vOAUTH20CLIENTSECRETVALUE",gx.O.AV48Oauth20ClientSecretValue,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV48Oauth20ClientSecretValue=this.val()},val:function(){return gx.fn.getControlValue("vOAUTH20CLIENTSECRETVALUE")},nac:gx.falseFn};
   this.declareDomainHdlr( 83 , function() {
   });
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"",grid:0};
   GXValidFnc[86]={ id: 86, fld:"TABLE_CONTAINER_OAUTH20REDIRECTURLTAG",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   GXValidFnc[89]={ id:89 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOAUTH20REDIRECTURLTAG",gxz:"ZV49Oauth20RedirectURLTag",gxold:"OV49Oauth20RedirectURLTag",gxvar:"AV49Oauth20RedirectURLTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV49Oauth20RedirectURLTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV49Oauth20RedirectURLTag=Value},v2c:function(){gx.fn.setControlValue("vOAUTH20REDIRECTURLTAG",gx.O.AV49Oauth20RedirectURLTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV49Oauth20RedirectURLTag=this.val()},val:function(){return gx.fn.getControlValue("vOAUTH20REDIRECTURLTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 89 , function() {
   });
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"TABLE_CONTAINER_OAUTH20REDIRECTURLVALUE",grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id: 93, fld:"",grid:0};
   GXValidFnc[94]={ id:94 ,lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOAUTH20REDIRECTURLVALUE",gxz:"ZV50Oauth20RedirectURLValue",gxold:"OV50Oauth20RedirectURLValue",gxvar:"AV50Oauth20RedirectURLValue",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50Oauth20RedirectURLValue=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV50Oauth20RedirectURLValue=Value},v2c:function(){gx.fn.setControlValue("vOAUTH20REDIRECTURLVALUE",gx.O.AV50Oauth20RedirectURLValue,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV50Oauth20RedirectURLValue=this.val()},val:function(){return gx.fn.getControlValue("vOAUTH20REDIRECTURLVALUE")},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[96]={ id: 96, fld:"TAB1_TABCONTROL_TITLE", format:0,grid:0};
   GXValidFnc[97]={ id: 97, fld:"",grid:0};
   GXValidFnc[99]={ id: 99, fld:"MAINTABRESPONSIVETABLE_TAB1",grid:0};
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id: 102, fld:"TABLE_CONTAINER_AUTHORIZEURL",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[105]={ id:105 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHORIZEURL",gxz:"ZV12AuthorizeURL",gxold:"OV12AuthorizeURL",gxvar:"AV12AuthorizeURL",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12AuthorizeURL=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12AuthorizeURL=Value},v2c:function(){gx.fn.setControlValue("vAUTHORIZEURL",gx.O.AV12AuthorizeURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV12AuthorizeURL=this.val()},val:function(){return gx.fn.getControlValue("vAUTHORIZEURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"",grid:0};
   GXValidFnc[108]={ id: 108, fld:"LINESEPARATORCONTAINER_ADVANCEDCONFIGURATIONLS",grid:0};
   GXValidFnc[109]={ id: 109, fld:"LINESEPARATORHEADER_ADVANCEDCONFIGURATIONLS",grid:0};
   GXValidFnc[110]={ id: 110, fld:"LINESEPARATORTITLE_ADVANCEDCONFIGURATIONLS", format:0,grid:0,evt:"e112l1_client"};
   GXValidFnc[111]={ id: 111, fld:"LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS",grid:0};
   GXValidFnc[112]={ id: 112, fld:"",grid:0};
   GXValidFnc[113]={ id: 113, fld:"",grid:0};
   GXValidFnc[114]={ id: 114, fld:"TABLE_CONTAINER_AUTHRESPTYPEINCLUDE",grid:0};
   GXValidFnc[115]={ id: 115, fld:"",grid:0};
   GXValidFnc[116]={ id: 116, fld:"",grid:0};
   GXValidFnc[117]={ id:117 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHRESPTYPEINCLUDE",gxz:"ZV16AuthRespTypeInclude",gxold:"OV16AuthRespTypeInclude",gxvar:"AV16AuthRespTypeInclude",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV16AuthRespTypeInclude=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV16AuthRespTypeInclude=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vAUTHRESPTYPEINCLUDE",gx.O.AV16AuthRespTypeInclude,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV16AuthRespTypeInclude=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vAUTHRESPTYPEINCLUDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 117 , function() {
   });
   GXValidFnc[118]={ id: 118, fld:"",grid:0};
   GXValidFnc[119]={ id: 119, fld:"TABLE_CONTAINER_AUTHRESPTYPETAG",grid:0};
   GXValidFnc[120]={ id: 120, fld:"",grid:0};
   GXValidFnc[121]={ id: 121, fld:"",grid:0};
   GXValidFnc[122]={ id:122 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHRESPTYPETAG",gxz:"ZV17AuthRespTypeTag",gxold:"OV17AuthRespTypeTag",gxvar:"AV17AuthRespTypeTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV17AuthRespTypeTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV17AuthRespTypeTag=Value},v2c:function(){gx.fn.setControlValue("vAUTHRESPTYPETAG",gx.O.AV17AuthRespTypeTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV17AuthRespTypeTag=this.val()},val:function(){return gx.fn.getControlValue("vAUTHRESPTYPETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 122 , function() {
   });
   GXValidFnc[123]={ id: 123, fld:"",grid:0};
   GXValidFnc[124]={ id: 124, fld:"TABLE_CONTAINER_AUTHRESPTYPEVALUE",grid:0};
   GXValidFnc[125]={ id: 125, fld:"",grid:0};
   GXValidFnc[126]={ id: 126, fld:"",grid:0};
   GXValidFnc[127]={ id:127 ,lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHRESPTYPEVALUE",gxz:"ZV18AuthRespTypeValue",gxold:"OV18AuthRespTypeValue",gxvar:"AV18AuthRespTypeValue",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV18AuthRespTypeValue=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV18AuthRespTypeValue=Value},v2c:function(){gx.fn.setControlValue("vAUTHRESPTYPEVALUE",gx.O.AV18AuthRespTypeValue,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV18AuthRespTypeValue=this.val()},val:function(){return gx.fn.getControlValue("vAUTHRESPTYPEVALUE")},nac:gx.falseFn};
   this.declareDomainHdlr( 127 , function() {
   });
   GXValidFnc[128]={ id: 128, fld:"",grid:0};
   GXValidFnc[129]={ id: 129, fld:"",grid:0};
   GXValidFnc[130]={ id: 130, fld:"TABLE_CONTAINER_AUTHSCOPEINCLUDE",grid:0};
   GXValidFnc[131]={ id: 131, fld:"",grid:0};
   GXValidFnc[132]={ id: 132, fld:"",grid:0};
   GXValidFnc[133]={ id:133 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHSCOPEINCLUDE",gxz:"ZV19AuthScopeInclude",gxold:"OV19AuthScopeInclude",gxvar:"AV19AuthScopeInclude",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV19AuthScopeInclude=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV19AuthScopeInclude=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vAUTHSCOPEINCLUDE",gx.O.AV19AuthScopeInclude,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV19AuthScopeInclude=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vAUTHSCOPEINCLUDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 133 , function() {
   });
   GXValidFnc[134]={ id: 134, fld:"",grid:0};
   GXValidFnc[135]={ id: 135, fld:"TABLE_CONTAINER_AUTHSCOPETAG",grid:0};
   GXValidFnc[136]={ id: 136, fld:"",grid:0};
   GXValidFnc[137]={ id: 137, fld:"",grid:0};
   GXValidFnc[138]={ id:138 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHSCOPETAG",gxz:"ZV20AuthScopeTag",gxold:"OV20AuthScopeTag",gxvar:"AV20AuthScopeTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV20AuthScopeTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV20AuthScopeTag=Value},v2c:function(){gx.fn.setControlValue("vAUTHSCOPETAG",gx.O.AV20AuthScopeTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV20AuthScopeTag=this.val()},val:function(){return gx.fn.getControlValue("vAUTHSCOPETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 138 , function() {
   });
   GXValidFnc[139]={ id: 139, fld:"",grid:0};
   GXValidFnc[140]={ id: 140, fld:"TABLE_CONTAINER_AUTHSCOPEVALUE",grid:0};
   GXValidFnc[141]={ id: 141, fld:"",grid:0};
   GXValidFnc[142]={ id: 142, fld:"",grid:0};
   GXValidFnc[143]={ id:143 ,lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHSCOPEVALUE",gxz:"ZV21AuthScopeValue",gxold:"OV21AuthScopeValue",gxvar:"AV21AuthScopeValue",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV21AuthScopeValue=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV21AuthScopeValue=Value},v2c:function(){gx.fn.setControlValue("vAUTHSCOPEVALUE",gx.O.AV21AuthScopeValue,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV21AuthScopeValue=this.val()},val:function(){return gx.fn.getControlValue("vAUTHSCOPEVALUE")},nac:gx.falseFn};
   this.declareDomainHdlr( 143 , function() {
   });
   GXValidFnc[144]={ id: 144, fld:"",grid:0};
   GXValidFnc[145]={ id: 145, fld:"",grid:0};
   GXValidFnc[146]={ id: 146, fld:"TABLE_CONTAINER_AUTHSTATEINCLUDE",grid:0};
   GXValidFnc[147]={ id: 147, fld:"",grid:0};
   GXValidFnc[148]={ id: 148, fld:"",grid:0};
   GXValidFnc[149]={ id:149 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHSTATEINCLUDE",gxz:"ZV22AuthStateInclude",gxold:"OV22AuthStateInclude",gxvar:"AV22AuthStateInclude",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV22AuthStateInclude=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV22AuthStateInclude=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vAUTHSTATEINCLUDE",gx.O.AV22AuthStateInclude,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV22AuthStateInclude=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vAUTHSTATEINCLUDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 149 , function() {
   });
   GXValidFnc[150]={ id: 150, fld:"",grid:0};
   GXValidFnc[151]={ id: 151, fld:"TABLE_CONTAINER_AUTHSTATETAG",grid:0};
   GXValidFnc[152]={ id: 152, fld:"",grid:0};
   GXValidFnc[153]={ id: 153, fld:"",grid:0};
   GXValidFnc[154]={ id:154 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHSTATETAG",gxz:"ZV23AuthStateTag",gxold:"OV23AuthStateTag",gxvar:"AV23AuthStateTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV23AuthStateTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV23AuthStateTag=Value},v2c:function(){gx.fn.setControlValue("vAUTHSTATETAG",gx.O.AV23AuthStateTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV23AuthStateTag=this.val()},val:function(){return gx.fn.getControlValue("vAUTHSTATETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 154 , function() {
   });
   GXValidFnc[155]={ id: 155, fld:"",grid:0};
   GXValidFnc[156]={ id: 156, fld:"",grid:0};
   GXValidFnc[157]={ id: 157, fld:"TABLE_CONTAINER_AUTHCLIENTIDINCLUDE",grid:0};
   GXValidFnc[158]={ id: 158, fld:"",grid:0};
   GXValidFnc[159]={ id: 159, fld:"",grid:0};
   GXValidFnc[160]={ id:160 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHCLIENTIDINCLUDE",gxz:"ZV9AuthClientIdInclude",gxold:"OV9AuthClientIdInclude",gxvar:"AV9AuthClientIdInclude",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV9AuthClientIdInclude=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV9AuthClientIdInclude=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vAUTHCLIENTIDINCLUDE",gx.O.AV9AuthClientIdInclude,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV9AuthClientIdInclude=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vAUTHCLIENTIDINCLUDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 160 , function() {
   });
   GXValidFnc[161]={ id: 161, fld:"",grid:0};
   GXValidFnc[162]={ id: 162, fld:"TABLE_CONTAINER_AUTHCLIENTSECRETINCLUDE",grid:0};
   GXValidFnc[163]={ id: 163, fld:"",grid:0};
   GXValidFnc[164]={ id: 164, fld:"",grid:0};
   GXValidFnc[165]={ id:165 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHCLIENTSECRETINCLUDE",gxz:"ZV10AuthClientSecretInclude",gxold:"OV10AuthClientSecretInclude",gxvar:"AV10AuthClientSecretInclude",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV10AuthClientSecretInclude=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV10AuthClientSecretInclude=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vAUTHCLIENTSECRETINCLUDE",gx.O.AV10AuthClientSecretInclude,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV10AuthClientSecretInclude=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vAUTHCLIENTSECRETINCLUDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 165 , function() {
   });
   GXValidFnc[166]={ id: 166, fld:"",grid:0};
   GXValidFnc[167]={ id: 167, fld:"TABLE_CONTAINER_AUTHREDIRURLINCLIDE",grid:0};
   GXValidFnc[168]={ id: 168, fld:"",grid:0};
   GXValidFnc[169]={ id: 169, fld:"",grid:0};
   GXValidFnc[170]={ id:170 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHREDIRURLINCLIDE",gxz:"ZV13AuthRedirURLInclide",gxold:"OV13AuthRedirURLInclide",gxvar:"AV13AuthRedirURLInclide",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV13AuthRedirURLInclide=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13AuthRedirURLInclide=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vAUTHREDIRURLINCLIDE",gx.O.AV13AuthRedirURLInclide,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV13AuthRedirURLInclide=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vAUTHREDIRURLINCLIDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 170 , function() {
   });
   GXValidFnc[171]={ id: 171, fld:"",grid:0};
   GXValidFnc[172]={ id: 172, fld:"",grid:0};
   GXValidFnc[173]={ id: 173, fld:"TABLE_CONTAINER_AUTHADDITIONALPARAMETERS",grid:0};
   GXValidFnc[174]={ id: 174, fld:"",grid:0};
   GXValidFnc[175]={ id: 175, fld:"",grid:0};
   GXValidFnc[176]={ id:176 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHADDITIONALPARAMETERS",gxz:"ZV7AuthAdditionalParameters",gxold:"OV7AuthAdditionalParameters",gxvar:"AV7AuthAdditionalParameters",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV7AuthAdditionalParameters=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV7AuthAdditionalParameters=Value},v2c:function(){gx.fn.setControlValue("vAUTHADDITIONALPARAMETERS",gx.O.AV7AuthAdditionalParameters,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV7AuthAdditionalParameters=this.val()},val:function(){return gx.fn.getControlValue("vAUTHADDITIONALPARAMETERS")},nac:gx.falseFn};
   this.declareDomainHdlr( 176 , function() {
   });
   GXValidFnc[177]={ id: 177, fld:"",grid:0};
   GXValidFnc[178]={ id: 178, fld:"TABLE_CONTAINER_AUTHADDITIONALPARAMETERSSD",grid:0};
   GXValidFnc[179]={ id: 179, fld:"",grid:0};
   GXValidFnc[180]={ id: 180, fld:"",grid:0};
   GXValidFnc[181]={ id:181 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHADDITIONALPARAMETERSSD",gxz:"ZV8AuthAdditionalParametersSD",gxold:"OV8AuthAdditionalParametersSD",gxvar:"AV8AuthAdditionalParametersSD",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV8AuthAdditionalParametersSD=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV8AuthAdditionalParametersSD=Value},v2c:function(){gx.fn.setControlValue("vAUTHADDITIONALPARAMETERSSD",gx.O.AV8AuthAdditionalParametersSD,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV8AuthAdditionalParametersSD=this.val()},val:function(){return gx.fn.getControlValue("vAUTHADDITIONALPARAMETERSSD")},nac:gx.falseFn};
   this.declareDomainHdlr( 181 , function() {
   });
   GXValidFnc[182]={ id: 182, fld:"",grid:0};
   GXValidFnc[183]={ id: 183, fld:"",grid:0};
   GXValidFnc[184]={ id: 184, fld:"GROUPRESPONSE",grid:0};
   GXValidFnc[185]={ id: 185, fld:"MAINGROUPRESPONSIVETABLE_GROUPRESPONSE",grid:0};
   GXValidFnc[186]={ id: 186, fld:"",grid:0};
   GXValidFnc[187]={ id: 187, fld:"",grid:0};
   GXValidFnc[188]={ id: 188, fld:"TABLE_CONTAINER_AUTHRESPONSEACCESSCODETAG",grid:0};
   GXValidFnc[189]={ id: 189, fld:"",grid:0};
   GXValidFnc[190]={ id: 190, fld:"",grid:0};
   GXValidFnc[191]={ id:191 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHRESPONSEACCESSCODETAG",gxz:"ZV14AuthResponseAccessCodeTag",gxold:"OV14AuthResponseAccessCodeTag",gxvar:"AV14AuthResponseAccessCodeTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV14AuthResponseAccessCodeTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV14AuthResponseAccessCodeTag=Value},v2c:function(){gx.fn.setControlValue("vAUTHRESPONSEACCESSCODETAG",gx.O.AV14AuthResponseAccessCodeTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV14AuthResponseAccessCodeTag=this.val()},val:function(){return gx.fn.getControlValue("vAUTHRESPONSEACCESSCODETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 191 , function() {
   });
   GXValidFnc[192]={ id: 192, fld:"",grid:0};
   GXValidFnc[193]={ id: 193, fld:"",grid:0};
   GXValidFnc[194]={ id: 194, fld:"TABLE_CONTAINER_AUTHRESPONSEERRORDESCTAG",grid:0};
   GXValidFnc[195]={ id: 195, fld:"",grid:0};
   GXValidFnc[196]={ id: 196, fld:"",grid:0};
   GXValidFnc[197]={ id:197 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHRESPONSEERRORDESCTAG",gxz:"ZV15AuthResponseErrorDescTag",gxold:"OV15AuthResponseErrorDescTag",gxvar:"AV15AuthResponseErrorDescTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV15AuthResponseErrorDescTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV15AuthResponseErrorDescTag=Value},v2c:function(){gx.fn.setControlValue("vAUTHRESPONSEERRORDESCTAG",gx.O.AV15AuthResponseErrorDescTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV15AuthResponseErrorDescTag=this.val()},val:function(){return gx.fn.getControlValue("vAUTHRESPONSEERRORDESCTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 197 , function() {
   });
   GXValidFnc[199]={ id: 199, fld:"TAB2_TABCONTROL_TITLE", format:0,grid:0};
   GXValidFnc[200]={ id: 200, fld:"",grid:0};
   GXValidFnc[202]={ id: 202, fld:"MAINTABRESPONSIVETABLE_TAB2",grid:0};
   GXValidFnc[203]={ id: 203, fld:"",grid:0};
   GXValidFnc[204]={ id: 204, fld:"",grid:0};
   GXValidFnc[205]={ id: 205, fld:"TABLE_CONTAINER_TOKENURL",grid:0};
   GXValidFnc[206]={ id: 206, fld:"",grid:0};
   GXValidFnc[207]={ id: 207, fld:"",grid:0};
   GXValidFnc[208]={ id:208 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENURL",gxz:"ZV73TokenURL",gxold:"OV73TokenURL",gxvar:"AV73TokenURL",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV73TokenURL=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV73TokenURL=Value},v2c:function(){gx.fn.setControlValue("vTOKENURL",gx.O.AV73TokenURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV73TokenURL=this.val()},val:function(){return gx.fn.getControlValue("vTOKENURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 208 , function() {
   });
   GXValidFnc[209]={ id: 209, fld:"",grid:0};
   GXValidFnc[210]={ id: 210, fld:"",grid:0};
   GXValidFnc[211]={ id: 211, fld:"LINESEPARATORCONTAINER_ADVANCEDCONFIGURATIONTOKENLS",grid:0};
   GXValidFnc[212]={ id: 212, fld:"LINESEPARATORHEADER_ADVANCEDCONFIGURATIONTOKENLS",grid:0};
   GXValidFnc[213]={ id: 213, fld:"LINESEPARATORTITLE_ADVANCEDCONFIGURATIONTOKENLS", format:0,grid:0,evt:"e122l1_client"};
   GXValidFnc[214]={ id: 214, fld:"LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS",grid:0};
   GXValidFnc[215]={ id: 215, fld:"",grid:0};
   GXValidFnc[216]={ id: 216, fld:"",grid:0};
   GXValidFnc[217]={ id: 217, fld:"TABLE_CONTAINER_TOKENMETHOD",grid:0};
   GXValidFnc[218]={ id: 218, fld:"",grid:0};
   GXValidFnc[219]={ id: 219, fld:"",grid:0};
   GXValidFnc[220]={ id:220 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tokenmethod,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENMETHOD",gxz:"ZV63TokenMethod",gxold:"OV63TokenMethod",gxvar:"AV63TokenMethod",ucs:[],op:[220],ip:[220],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV63TokenMethod=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV63TokenMethod=Value},v2c:function(){gx.fn.setComboBoxValue("vTOKENMETHOD",gx.O.AV63TokenMethod);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV63TokenMethod=this.val()},val:function(){return gx.fn.getControlValue("vTOKENMETHOD")},nac:gx.falseFn};
   this.declareDomainHdlr( 220 , function() {
   });
   GXValidFnc[221]={ id: 221, fld:"",grid:0};
   GXValidFnc[222]={ id: 222, fld:"TABLE_CONTAINER_TOKENHEADERKEYTAG",grid:0};
   GXValidFnc[223]={ id: 223, fld:"",grid:0};
   GXValidFnc[224]={ id: 224, fld:"",grid:0};
   GXValidFnc[225]={ id:225 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENHEADERKEYTAG",gxz:"ZV61TokenHeaderKeyTag",gxold:"OV61TokenHeaderKeyTag",gxvar:"AV61TokenHeaderKeyTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV61TokenHeaderKeyTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV61TokenHeaderKeyTag=Value},v2c:function(){gx.fn.setControlValue("vTOKENHEADERKEYTAG",gx.O.AV61TokenHeaderKeyTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV61TokenHeaderKeyTag=this.val()},val:function(){return gx.fn.getControlValue("vTOKENHEADERKEYTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 225 , function() {
   });
   GXValidFnc[226]={ id: 226, fld:"",grid:0};
   GXValidFnc[227]={ id: 227, fld:"TABLE_CONTAINER_TOKENHEADERKEYVALUE",grid:0};
   GXValidFnc[228]={ id: 228, fld:"",grid:0};
   GXValidFnc[229]={ id: 229, fld:"",grid:0};
   GXValidFnc[230]={ id:230 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENHEADERKEYVALUE",gxz:"ZV62TokenHeaderKeyValue",gxold:"OV62TokenHeaderKeyValue",gxvar:"AV62TokenHeaderKeyValue",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV62TokenHeaderKeyValue=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV62TokenHeaderKeyValue=Value},v2c:function(){gx.fn.setControlValue("vTOKENHEADERKEYVALUE",gx.O.AV62TokenHeaderKeyValue,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV62TokenHeaderKeyValue=this.val()},val:function(){return gx.fn.getControlValue("vTOKENHEADERKEYVALUE")},nac:gx.falseFn};
   this.declareDomainHdlr( 230 , function() {
   });
   GXValidFnc[231]={ id: 231, fld:"",grid:0};
   GXValidFnc[232]={ id: 232, fld:"",grid:0};
   GXValidFnc[233]={ id: 233, fld:"TABLE_CONTAINER_TOKENGRANTTYPEINCLUDE",grid:0};
   GXValidFnc[234]={ id: 234, fld:"",grid:0};
   GXValidFnc[235]={ id: 235, fld:"",grid:0};
   GXValidFnc[236]={ id:236 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENGRANTTYPEINCLUDE",gxz:"ZV58TokenGrantTypeInclude",gxold:"OV58TokenGrantTypeInclude",gxvar:"AV58TokenGrantTypeInclude",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV58TokenGrantTypeInclude=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV58TokenGrantTypeInclude=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vTOKENGRANTTYPEINCLUDE",gx.O.AV58TokenGrantTypeInclude,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV58TokenGrantTypeInclude=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vTOKENGRANTTYPEINCLUDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 236 , function() {
   });
   GXValidFnc[237]={ id: 237, fld:"",grid:0};
   GXValidFnc[238]={ id: 238, fld:"TABLE_CONTAINER_TOKENGRANTTYPETAG",grid:0};
   GXValidFnc[239]={ id: 239, fld:"",grid:0};
   GXValidFnc[240]={ id: 240, fld:"",grid:0};
   GXValidFnc[241]={ id:241 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENGRANTTYPETAG",gxz:"ZV59TokenGrantTypeTag",gxold:"OV59TokenGrantTypeTag",gxvar:"AV59TokenGrantTypeTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV59TokenGrantTypeTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV59TokenGrantTypeTag=Value},v2c:function(){gx.fn.setControlValue("vTOKENGRANTTYPETAG",gx.O.AV59TokenGrantTypeTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV59TokenGrantTypeTag=this.val()},val:function(){return gx.fn.getControlValue("vTOKENGRANTTYPETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 241 , function() {
   });
   GXValidFnc[242]={ id: 242, fld:"",grid:0};
   GXValidFnc[243]={ id: 243, fld:"TABLE_CONTAINER_TOKENGRANTTYPEVALUE",grid:0};
   GXValidFnc[244]={ id: 244, fld:"",grid:0};
   GXValidFnc[245]={ id: 245, fld:"",grid:0};
   GXValidFnc[246]={ id:246 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENGRANTTYPEVALUE",gxz:"ZV60TokenGrantTypeValue",gxold:"OV60TokenGrantTypeValue",gxvar:"AV60TokenGrantTypeValue",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV60TokenGrantTypeValue=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV60TokenGrantTypeValue=Value},v2c:function(){gx.fn.setControlValue("vTOKENGRANTTYPEVALUE",gx.O.AV60TokenGrantTypeValue,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV60TokenGrantTypeValue=this.val()},val:function(){return gx.fn.getControlValue("vTOKENGRANTTYPEVALUE")},nac:gx.falseFn};
   this.declareDomainHdlr( 246 , function() {
   });
   GXValidFnc[247]={ id: 247, fld:"",grid:0};
   GXValidFnc[248]={ id: 248, fld:"",grid:0};
   GXValidFnc[249]={ id: 249, fld:"TABLE_CONTAINER_TOKENACCESSCODEINCLUDE",grid:0};
   GXValidFnc[250]={ id: 250, fld:"",grid:0};
   GXValidFnc[251]={ id: 251, fld:"",grid:0};
   GXValidFnc[252]={ id:252 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENACCESSCODEINCLUDE",gxz:"ZV54TokenAccessCodeInclude",gxold:"OV54TokenAccessCodeInclude",gxvar:"AV54TokenAccessCodeInclude",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV54TokenAccessCodeInclude=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV54TokenAccessCodeInclude=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vTOKENACCESSCODEINCLUDE",gx.O.AV54TokenAccessCodeInclude,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV54TokenAccessCodeInclude=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vTOKENACCESSCODEINCLUDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 252 , function() {
   });
   GXValidFnc[253]={ id: 253, fld:"",grid:0};
   GXValidFnc[254]={ id: 254, fld:"TABLE_CONTAINER_TOKENCLIIDINCLUDE",grid:0};
   GXValidFnc[255]={ id: 255, fld:"",grid:0};
   GXValidFnc[256]={ id: 256, fld:"",grid:0};
   GXValidFnc[257]={ id:257 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENCLIIDINCLUDE",gxz:"ZV56TokenCliIdInclude",gxold:"OV56TokenCliIdInclude",gxvar:"AV56TokenCliIdInclude",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV56TokenCliIdInclude=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV56TokenCliIdInclude=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vTOKENCLIIDINCLUDE",gx.O.AV56TokenCliIdInclude,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV56TokenCliIdInclude=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vTOKENCLIIDINCLUDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 257 , function() {
   });
   GXValidFnc[258]={ id: 258, fld:"",grid:0};
   GXValidFnc[259]={ id: 259, fld:"TABLE_CONTAINER_TOKENCLISECRETINCLUDE",grid:0};
   GXValidFnc[260]={ id: 260, fld:"",grid:0};
   GXValidFnc[261]={ id: 261, fld:"",grid:0};
   GXValidFnc[262]={ id:262 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENCLISECRETINCLUDE",gxz:"ZV57TokenCliSecretInclude",gxold:"OV57TokenCliSecretInclude",gxvar:"AV57TokenCliSecretInclude",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV57TokenCliSecretInclude=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV57TokenCliSecretInclude=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vTOKENCLISECRETINCLUDE",gx.O.AV57TokenCliSecretInclude,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV57TokenCliSecretInclude=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vTOKENCLISECRETINCLUDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 262 , function() {
   });
   GXValidFnc[263]={ id: 263, fld:"",grid:0};
   GXValidFnc[264]={ id: 264, fld:"TABLE_CONTAINER_TOKENREDIRECTURLINCLUDE",grid:0};
   GXValidFnc[265]={ id: 265, fld:"",grid:0};
   GXValidFnc[266]={ id: 266, fld:"",grid:0};
   GXValidFnc[267]={ id:267 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENREDIRECTURLINCLUDE",gxz:"ZV64TokenRedirectURLInclude",gxold:"OV64TokenRedirectURLInclude",gxvar:"AV64TokenRedirectURLInclude",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV64TokenRedirectURLInclude=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV64TokenRedirectURLInclude=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vTOKENREDIRECTURLINCLUDE",gx.O.AV64TokenRedirectURLInclude,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV64TokenRedirectURLInclude=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vTOKENREDIRECTURLINCLUDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 267 , function() {
   });
   GXValidFnc[268]={ id: 268, fld:"",grid:0};
   GXValidFnc[269]={ id: 269, fld:"",grid:0};
   GXValidFnc[270]={ id: 270, fld:"TABLE_CONTAINER_TOKENADDITIONALPARAMETERS",grid:0};
   GXValidFnc[271]={ id: 271, fld:"",grid:0};
   GXValidFnc[272]={ id: 272, fld:"",grid:0};
   GXValidFnc[273]={ id:273 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENADDITIONALPARAMETERS",gxz:"ZV55TokenAdditionalParameters",gxold:"OV55TokenAdditionalParameters",gxvar:"AV55TokenAdditionalParameters",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV55TokenAdditionalParameters=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV55TokenAdditionalParameters=Value},v2c:function(){gx.fn.setControlValue("vTOKENADDITIONALPARAMETERS",gx.O.AV55TokenAdditionalParameters,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV55TokenAdditionalParameters=this.val()},val:function(){return gx.fn.getControlValue("vTOKENADDITIONALPARAMETERS")},nac:gx.falseFn};
   this.declareDomainHdlr( 273 , function() {
   });
   GXValidFnc[274]={ id: 274, fld:"",grid:0};
   GXValidFnc[275]={ id: 275, fld:"",grid:0};
   GXValidFnc[276]={ id: 276, fld:"RESPONSE",grid:0};
   GXValidFnc[277]={ id: 277, fld:"MAINGROUPRESPONSIVETABLE_RESPONSE",grid:0};
   GXValidFnc[278]={ id: 278, fld:"",grid:0};
   GXValidFnc[279]={ id: 279, fld:"",grid:0};
   GXValidFnc[280]={ id: 280, fld:"TABLE_CONTAINER_TOKENRESPONSEACCESSTOKENTAG",grid:0};
   GXValidFnc[281]={ id: 281, fld:"",grid:0};
   GXValidFnc[282]={ id: 282, fld:"",grid:0};
   GXValidFnc[283]={ id:283 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENRESPONSEACCESSTOKENTAG",gxz:"ZV66TokenResponseAccessTokenTag",gxold:"OV66TokenResponseAccessTokenTag",gxvar:"AV66TokenResponseAccessTokenTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV66TokenResponseAccessTokenTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV66TokenResponseAccessTokenTag=Value},v2c:function(){gx.fn.setControlValue("vTOKENRESPONSEACCESSTOKENTAG",gx.O.AV66TokenResponseAccessTokenTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV66TokenResponseAccessTokenTag=this.val()},val:function(){return gx.fn.getControlValue("vTOKENRESPONSEACCESSTOKENTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 283 , function() {
   });
   GXValidFnc[284]={ id: 284, fld:"",grid:0};
   GXValidFnc[285]={ id: 285, fld:"TABLE_CONTAINER_TOKENRESPONSETOKENTYPETAG",grid:0};
   GXValidFnc[286]={ id: 286, fld:"",grid:0};
   GXValidFnc[287]={ id: 287, fld:"",grid:0};
   GXValidFnc[288]={ id:288 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENRESPONSETOKENTYPETAG",gxz:"ZV71TokenResponseTokenTypeTag",gxold:"OV71TokenResponseTokenTypeTag",gxvar:"AV71TokenResponseTokenTypeTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV71TokenResponseTokenTypeTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV71TokenResponseTokenTypeTag=Value},v2c:function(){gx.fn.setControlValue("vTOKENRESPONSETOKENTYPETAG",gx.O.AV71TokenResponseTokenTypeTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV71TokenResponseTokenTypeTag=this.val()},val:function(){return gx.fn.getControlValue("vTOKENRESPONSETOKENTYPETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 288 , function() {
   });
   GXValidFnc[289]={ id: 289, fld:"",grid:0};
   GXValidFnc[290]={ id: 290, fld:"",grid:0};
   GXValidFnc[291]={ id: 291, fld:"TABLE_CONTAINER_TOKENRESPONSEEXPIRESINTAG",grid:0};
   GXValidFnc[292]={ id: 292, fld:"",grid:0};
   GXValidFnc[293]={ id: 293, fld:"",grid:0};
   GXValidFnc[294]={ id:294 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENRESPONSEEXPIRESINTAG",gxz:"ZV68TokenResponseExpiresInTag",gxold:"OV68TokenResponseExpiresInTag",gxvar:"AV68TokenResponseExpiresInTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV68TokenResponseExpiresInTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV68TokenResponseExpiresInTag=Value},v2c:function(){gx.fn.setControlValue("vTOKENRESPONSEEXPIRESINTAG",gx.O.AV68TokenResponseExpiresInTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV68TokenResponseExpiresInTag=this.val()},val:function(){return gx.fn.getControlValue("vTOKENRESPONSEEXPIRESINTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 294 , function() {
   });
   GXValidFnc[295]={ id: 295, fld:"",grid:0};
   GXValidFnc[296]={ id: 296, fld:"TABLE_CONTAINER_TOKENRESPONSESCOPETAG",grid:0};
   GXValidFnc[297]={ id: 297, fld:"",grid:0};
   GXValidFnc[298]={ id: 298, fld:"",grid:0};
   GXValidFnc[299]={ id:299 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENRESPONSESCOPETAG",gxz:"ZV70TokenResponseScopeTag",gxold:"OV70TokenResponseScopeTag",gxvar:"AV70TokenResponseScopeTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV70TokenResponseScopeTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV70TokenResponseScopeTag=Value},v2c:function(){gx.fn.setControlValue("vTOKENRESPONSESCOPETAG",gx.O.AV70TokenResponseScopeTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV70TokenResponseScopeTag=this.val()},val:function(){return gx.fn.getControlValue("vTOKENRESPONSESCOPETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 299 , function() {
   });
   GXValidFnc[300]={ id: 300, fld:"",grid:0};
   GXValidFnc[301]={ id: 301, fld:"",grid:0};
   GXValidFnc[302]={ id: 302, fld:"TABLE_CONTAINER_TOKENRESPONSEUSERIDTAG",grid:0};
   GXValidFnc[303]={ id: 303, fld:"",grid:0};
   GXValidFnc[304]={ id: 304, fld:"",grid:0};
   GXValidFnc[305]={ id:305 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENRESPONSEUSERIDTAG",gxz:"ZV72TokenResponseUserIdTag",gxold:"OV72TokenResponseUserIdTag",gxvar:"AV72TokenResponseUserIdTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV72TokenResponseUserIdTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV72TokenResponseUserIdTag=Value},v2c:function(){gx.fn.setControlValue("vTOKENRESPONSEUSERIDTAG",gx.O.AV72TokenResponseUserIdTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV72TokenResponseUserIdTag=this.val()},val:function(){return gx.fn.getControlValue("vTOKENRESPONSEUSERIDTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 305 , function() {
   });
   GXValidFnc[306]={ id: 306, fld:"",grid:0};
   GXValidFnc[307]={ id: 307, fld:"TABLE_CONTAINER_TOKENRESPONSEREFRESHTOKENTAG",grid:0};
   GXValidFnc[308]={ id: 308, fld:"",grid:0};
   GXValidFnc[309]={ id: 309, fld:"",grid:0};
   GXValidFnc[310]={ id:310 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENRESPONSEREFRESHTOKENTAG",gxz:"ZV69TokenResponseRefreshTokenTag",gxold:"OV69TokenResponseRefreshTokenTag",gxvar:"AV69TokenResponseRefreshTokenTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV69TokenResponseRefreshTokenTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV69TokenResponseRefreshTokenTag=Value},v2c:function(){gx.fn.setControlValue("vTOKENRESPONSEREFRESHTOKENTAG",gx.O.AV69TokenResponseRefreshTokenTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV69TokenResponseRefreshTokenTag=this.val()},val:function(){return gx.fn.getControlValue("vTOKENRESPONSEREFRESHTOKENTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 310 , function() {
   });
   GXValidFnc[311]={ id: 311, fld:"",grid:0};
   GXValidFnc[312]={ id: 312, fld:"",grid:0};
   GXValidFnc[313]={ id: 313, fld:"TABLE_CONTAINER_TOKENRESPONSEERRORDESCRIPTIONTAG",grid:0};
   GXValidFnc[314]={ id: 314, fld:"",grid:0};
   GXValidFnc[315]={ id: 315, fld:"",grid:0};
   GXValidFnc[316]={ id:316 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENRESPONSEERRORDESCRIPTIONTAG",gxz:"ZV67TokenResponseErrorDescriptionTag",gxold:"OV67TokenResponseErrorDescriptionTag",gxvar:"AV67TokenResponseErrorDescriptionTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV67TokenResponseErrorDescriptionTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV67TokenResponseErrorDescriptionTag=Value},v2c:function(){gx.fn.setControlValue("vTOKENRESPONSEERRORDESCRIPTIONTAG",gx.O.AV67TokenResponseErrorDescriptionTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV67TokenResponseErrorDescriptionTag=this.val()},val:function(){return gx.fn.getControlValue("vTOKENRESPONSEERRORDESCRIPTIONTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 316 , function() {
   });
   GXValidFnc[317]={ id: 317, fld:"",grid:0};
   GXValidFnc[318]={ id: 318, fld:"",grid:0};
   GXValidFnc[319]={ id: 319, fld:"GROUP",grid:0};
   GXValidFnc[320]={ id: 320, fld:"MAINGROUPRESPONSIVETABLE_GROUP",grid:0};
   GXValidFnc[321]={ id: 321, fld:"",grid:0};
   GXValidFnc[322]={ id: 322, fld:"",grid:0};
   GXValidFnc[323]={ id: 323, fld:"TABLE_CONTAINER_AUTOVALIDATEEXTERNALTOKENANDREFRESH",grid:0};
   GXValidFnc[324]={ id: 324, fld:"",grid:0};
   GXValidFnc[325]={ id: 325, fld:"",grid:0};
   GXValidFnc[326]={ id:326 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTOVALIDATEEXTERNALTOKENANDREFRESH",gxz:"ZV24AutovalidateExternalTokenAndRefresh",gxold:"OV24AutovalidateExternalTokenAndRefresh",gxvar:"AV24AutovalidateExternalTokenAndRefresh",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV24AutovalidateExternalTokenAndRefresh=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV24AutovalidateExternalTokenAndRefresh=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vAUTOVALIDATEEXTERNALTOKENANDREFRESH",gx.O.AV24AutovalidateExternalTokenAndRefresh,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV24AutovalidateExternalTokenAndRefresh=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vAUTOVALIDATEEXTERNALTOKENANDREFRESH")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 326 , function() {
   });
   GXValidFnc[327]={ id: 327, fld:"",grid:0};
   GXValidFnc[328]={ id: 328, fld:"TABLE_CONTAINER_TOKENREFRESHTOKENURL",grid:0};
   GXValidFnc[329]={ id: 329, fld:"",grid:0};
   GXValidFnc[330]={ id: 330, fld:"",grid:0};
   GXValidFnc[331]={ id:331 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOKENREFRESHTOKENURL",gxz:"ZV65TokenRefreshTokenURL",gxold:"OV65TokenRefreshTokenURL",gxvar:"AV65TokenRefreshTokenURL",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV65TokenRefreshTokenURL=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV65TokenRefreshTokenURL=Value},v2c:function(){gx.fn.setControlValue("vTOKENREFRESHTOKENURL",gx.O.AV65TokenRefreshTokenURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV65TokenRefreshTokenURL=this.val()},val:function(){return gx.fn.getControlValue("vTOKENREFRESHTOKENURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 331 , function() {
   });
   GXValidFnc[333]={ id: 333, fld:"TAB3_TABCONTROL_TITLE", format:0,grid:0};
   GXValidFnc[334]={ id: 334, fld:"",grid:0};
   GXValidFnc[336]={ id: 336, fld:"MAINTABRESPONSIVETABLE_TAB3",grid:0};
   GXValidFnc[337]={ id: 337, fld:"",grid:0};
   GXValidFnc[338]={ id: 338, fld:"",grid:0};
   GXValidFnc[339]={ id: 339, fld:"TABLE_CONTAINER_USERINFOURL",grid:0};
   GXValidFnc[340]={ id: 340, fld:"",grid:0};
   GXValidFnc[341]={ id: 341, fld:"",grid:0};
   GXValidFnc[342]={ id:342 ,lvl:0,type:"svchar",len:2048,dec:250,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFOURL",gxz:"ZV101UserInfoURL",gxold:"OV101UserInfoURL",gxvar:"AV101UserInfoURL",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV101UserInfoURL=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV101UserInfoURL=Value},v2c:function(){gx.fn.setControlValue("vUSERINFOURL",gx.O.AV101UserInfoURL,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV101UserInfoURL=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFOURL")},nac:gx.falseFn};
   this.declareDomainHdlr( 342 , function() {
   });
   GXValidFnc[343]={ id: 343, fld:"",grid:0};
   GXValidFnc[344]={ id: 344, fld:"",grid:0};
   GXValidFnc[345]={ id: 345, fld:"LINESEPARATORCONTAINER_ADVANCEDUSERCONFIGURATION",grid:0};
   GXValidFnc[346]={ id: 346, fld:"LINESEPARATORHEADER_ADVANCEDUSERCONFIGURATION",grid:0};
   GXValidFnc[347]={ id: 347, fld:"LINESEPARATORTITLE_ADVANCEDUSERCONFIGURATION", format:0,grid:0,evt:"e132l1_client"};
   GXValidFnc[348]={ id: 348, fld:"LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION",grid:0};
   GXValidFnc[349]={ id: 349, fld:"",grid:0};
   GXValidFnc[350]={ id: 350, fld:"",grid:0};
   GXValidFnc[351]={ id: 351, fld:"TABLE_CONTAINER_USERINFOMETHOD",grid:0};
   GXValidFnc[352]={ id: 352, fld:"",grid:0};
   GXValidFnc[353]={ id: 353, fld:"",grid:0};
   GXValidFnc[354]={ id:354 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Userinfomethod,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFOMETHOD",gxz:"ZV85UserInfoMethod",gxold:"OV85UserInfoMethod",gxvar:"AV85UserInfoMethod",ucs:[],op:[354],ip:[354],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.AV85UserInfoMethod=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV85UserInfoMethod=Value},v2c:function(){gx.fn.setComboBoxValue("vUSERINFOMETHOD",gx.O.AV85UserInfoMethod);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV85UserInfoMethod=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFOMETHOD")},nac:gx.falseFn};
   this.declareDomainHdlr( 354 , function() {
   });
   GXValidFnc[355]={ id: 355, fld:"",grid:0};
   GXValidFnc[356]={ id: 356, fld:"TABLE_CONTAINER_USERINFOHEADERKEYTAG",grid:0};
   GXValidFnc[357]={ id: 357, fld:"",grid:0};
   GXValidFnc[358]={ id: 358, fld:"",grid:0};
   GXValidFnc[359]={ id:359 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFOHEADERKEYTAG",gxz:"ZV83UserInfoHeaderKeyTag",gxold:"OV83UserInfoHeaderKeyTag",gxvar:"AV83UserInfoHeaderKeyTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV83UserInfoHeaderKeyTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV83UserInfoHeaderKeyTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFOHEADERKEYTAG",gx.O.AV83UserInfoHeaderKeyTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV83UserInfoHeaderKeyTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFOHEADERKEYTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 359 , function() {
   });
   GXValidFnc[360]={ id: 360, fld:"",grid:0};
   GXValidFnc[361]={ id: 361, fld:"TABLE_CONTAINER_USERINFOHEADERKEYVALUE",grid:0};
   GXValidFnc[362]={ id: 362, fld:"",grid:0};
   GXValidFnc[363]={ id: 363, fld:"",grid:0};
   GXValidFnc[364]={ id:364 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFOHEADERKEYVALUE",gxz:"ZV84UserInfoHeaderKeyValue",gxold:"OV84UserInfoHeaderKeyValue",gxvar:"AV84UserInfoHeaderKeyValue",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV84UserInfoHeaderKeyValue=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV84UserInfoHeaderKeyValue=Value},v2c:function(){gx.fn.setControlValue("vUSERINFOHEADERKEYVALUE",gx.O.AV84UserInfoHeaderKeyValue,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV84UserInfoHeaderKeyValue=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFOHEADERKEYVALUE")},nac:gx.falseFn};
   this.declareDomainHdlr( 364 , function() {
   });
   GXValidFnc[365]={ id: 365, fld:"",grid:0};
   GXValidFnc[366]={ id: 366, fld:"",grid:0};
   GXValidFnc[367]={ id: 367, fld:"TABLE_CONTAINER_USERINFOACCESSTOKENINCLUDE",grid:0};
   GXValidFnc[368]={ id: 368, fld:"",grid:0};
   GXValidFnc[369]={ id: 369, fld:"",grid:0};
   GXValidFnc[370]={ id:370 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFOACCESSTOKENINCLUDE",gxz:"ZV76UserInfoAccessTokenInclude",gxold:"OV76UserInfoAccessTokenInclude",gxvar:"AV76UserInfoAccessTokenInclude",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV76UserInfoAccessTokenInclude=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV76UserInfoAccessTokenInclude=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vUSERINFOACCESSTOKENINCLUDE",gx.O.AV76UserInfoAccessTokenInclude,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV76UserInfoAccessTokenInclude=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vUSERINFOACCESSTOKENINCLUDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 370 , function() {
   });
   GXValidFnc[371]={ id: 371, fld:"",grid:0};
   GXValidFnc[372]={ id: 372, fld:"TABLE_CONTAINER_USERINFOACCESSTOKENNAME",grid:0};
   GXValidFnc[373]={ id: 373, fld:"",grid:0};
   GXValidFnc[374]={ id: 374, fld:"",grid:0};
   GXValidFnc[375]={ id:375 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFOACCESSTOKENNAME",gxz:"ZV77UserInfoAccessTokenName",gxold:"OV77UserInfoAccessTokenName",gxvar:"AV77UserInfoAccessTokenName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV77UserInfoAccessTokenName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV77UserInfoAccessTokenName=Value},v2c:function(){gx.fn.setControlValue("vUSERINFOACCESSTOKENNAME",gx.O.AV77UserInfoAccessTokenName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV77UserInfoAccessTokenName=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFOACCESSTOKENNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 375 , function() {
   });
   GXValidFnc[376]={ id: 376, fld:"",grid:0};
   GXValidFnc[377]={ id: 377, fld:"",grid:0};
   GXValidFnc[378]={ id: 378, fld:"TABLE_CONTAINER_USERINFOCLIENTIDINCLUDE",grid:0};
   GXValidFnc[379]={ id: 379, fld:"",grid:0};
   GXValidFnc[380]={ id: 380, fld:"",grid:0};
   GXValidFnc[381]={ id:381 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFOCLIENTIDINCLUDE",gxz:"ZV79UserInfoClientIdInclude",gxold:"OV79UserInfoClientIdInclude",gxvar:"AV79UserInfoClientIdInclude",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV79UserInfoClientIdInclude=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV79UserInfoClientIdInclude=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vUSERINFOCLIENTIDINCLUDE",gx.O.AV79UserInfoClientIdInclude,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV79UserInfoClientIdInclude=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vUSERINFOCLIENTIDINCLUDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 381 , function() {
   });
   GXValidFnc[382]={ id: 382, fld:"",grid:0};
   GXValidFnc[383]={ id: 383, fld:"TABLE_CONTAINER_USERINFOCLIENTIDNAME",grid:0};
   GXValidFnc[384]={ id: 384, fld:"",grid:0};
   GXValidFnc[385]={ id: 385, fld:"",grid:0};
   GXValidFnc[386]={ id:386 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFOCLIENTIDNAME",gxz:"ZV80UserInfoClientIdName",gxold:"OV80UserInfoClientIdName",gxvar:"AV80UserInfoClientIdName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV80UserInfoClientIdName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV80UserInfoClientIdName=Value},v2c:function(){gx.fn.setControlValue("vUSERINFOCLIENTIDNAME",gx.O.AV80UserInfoClientIdName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV80UserInfoClientIdName=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFOCLIENTIDNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 386 , function() {
   });
   GXValidFnc[387]={ id: 387, fld:"",grid:0};
   GXValidFnc[388]={ id: 388, fld:"",grid:0};
   GXValidFnc[389]={ id: 389, fld:"TABLE_CONTAINER_USERINFOCLIENTSECRETINCLUDE",grid:0};
   GXValidFnc[390]={ id: 390, fld:"",grid:0};
   GXValidFnc[391]={ id: 391, fld:"",grid:0};
   GXValidFnc[392]={ id:392 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFOCLIENTSECRETINCLUDE",gxz:"ZV81UserInfoClientSecretInclude",gxold:"OV81UserInfoClientSecretInclude",gxvar:"AV81UserInfoClientSecretInclude",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV81UserInfoClientSecretInclude=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV81UserInfoClientSecretInclude=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vUSERINFOCLIENTSECRETINCLUDE",gx.O.AV81UserInfoClientSecretInclude,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV81UserInfoClientSecretInclude=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vUSERINFOCLIENTSECRETINCLUDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 392 , function() {
   });
   GXValidFnc[393]={ id: 393, fld:"",grid:0};
   GXValidFnc[394]={ id: 394, fld:"TABLE_CONTAINER_USERINFOCLIENTSECRETNAME",grid:0};
   GXValidFnc[395]={ id: 395, fld:"",grid:0};
   GXValidFnc[396]={ id: 396, fld:"",grid:0};
   GXValidFnc[397]={ id:397 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFOCLIENTSECRETNAME",gxz:"ZV82UserInfoClientSecretName",gxold:"OV82UserInfoClientSecretName",gxvar:"AV82UserInfoClientSecretName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV82UserInfoClientSecretName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV82UserInfoClientSecretName=Value},v2c:function(){gx.fn.setControlValue("vUSERINFOCLIENTSECRETNAME",gx.O.AV82UserInfoClientSecretName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV82UserInfoClientSecretName=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFOCLIENTSECRETNAME")},nac:gx.falseFn};
   this.declareDomainHdlr( 397 , function() {
   });
   GXValidFnc[398]={ id: 398, fld:"",grid:0};
   GXValidFnc[399]={ id: 399, fld:"",grid:0};
   GXValidFnc[400]={ id: 400, fld:"TABLE_CONTAINER_USERINFOUSERIDINCLUDE",grid:0};
   GXValidFnc[401]={ id: 401, fld:"",grid:0};
   GXValidFnc[402]={ id: 402, fld:"",grid:0};
   GXValidFnc[403]={ id:403 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFOUSERIDINCLUDE",gxz:"ZV102UserInfoUserIdInclude",gxold:"OV102UserInfoUserIdInclude",gxvar:"AV102UserInfoUserIdInclude",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV102UserInfoUserIdInclude=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV102UserInfoUserIdInclude=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vUSERINFOUSERIDINCLUDE",gx.O.AV102UserInfoUserIdInclude,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV102UserInfoUserIdInclude=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vUSERINFOUSERIDINCLUDE")},nac:gx.falseFn,values:['true','false']};
   this.declareDomainHdlr( 403 , function() {
   });
   GXValidFnc[404]={ id: 404, fld:"",grid:0};
   GXValidFnc[405]={ id: 405, fld:"TABLE_CONTAINER_USERINFOADDITIONALPARAMETERS",grid:0};
   GXValidFnc[406]={ id: 406, fld:"",grid:0};
   GXValidFnc[407]={ id: 407, fld:"",grid:0};
   GXValidFnc[408]={ id:408 ,lvl:0,type:"char",len:254,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFOADDITIONALPARAMETERS",gxz:"ZV78UserInfoAdditionalParameters",gxold:"OV78UserInfoAdditionalParameters",gxvar:"AV78UserInfoAdditionalParameters",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV78UserInfoAdditionalParameters=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV78UserInfoAdditionalParameters=Value},v2c:function(){gx.fn.setControlValue("vUSERINFOADDITIONALPARAMETERS",gx.O.AV78UserInfoAdditionalParameters,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV78UserInfoAdditionalParameters=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFOADDITIONALPARAMETERS")},nac:gx.falseFn};
   this.declareDomainHdlr( 408 , function() {
   });
   GXValidFnc[409]={ id: 409, fld:"",grid:0};
   GXValidFnc[410]={ id: 410, fld:"",grid:0};
   GXValidFnc[411]={ id: 411, fld:"GROUP1RESPONSE",grid:0};
   GXValidFnc[412]={ id: 412, fld:"MAINGROUPRESPONSIVETABLE_GROUP1RESPONSE",grid:0};
   GXValidFnc[413]={ id: 413, fld:"",grid:0};
   GXValidFnc[414]={ id: 414, fld:"",grid:0};
   GXValidFnc[415]={ id: 415, fld:"TABLE_CONTAINER_USERINFORESPONSEUSEREMAILTAG",grid:0};
   GXValidFnc[416]={ id: 416, fld:"",grid:0};
   GXValidFnc[417]={ id: 417, fld:"",grid:0};
   GXValidFnc[418]={ id:418 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSEREMAILTAG",gxz:"ZV88UserInfoResponseUserEmailTag",gxold:"OV88UserInfoResponseUserEmailTag",gxvar:"AV88UserInfoResponseUserEmailTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV88UserInfoResponseUserEmailTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV88UserInfoResponseUserEmailTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSEREMAILTAG",gx.O.AV88UserInfoResponseUserEmailTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV88UserInfoResponseUserEmailTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSEREMAILTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 418 , function() {
   });
   GXValidFnc[419]={ id: 419, fld:"",grid:0};
   GXValidFnc[420]={ id: 420, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERVERIFIEDEMAILTAG",grid:0};
   GXValidFnc[421]={ id: 421, fld:"",grid:0};
   GXValidFnc[422]={ id: 422, fld:"",grid:0};
   GXValidFnc[423]={ id:423 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERVERIFIEDEMAILTAG",gxz:"ZV100UserInfoResponseUserVerifiedEmailTag",gxold:"OV100UserInfoResponseUserVerifiedEmailTag",gxvar:"AV100UserInfoResponseUserVerifiedEmailTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV100UserInfoResponseUserVerifiedEmailTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV100UserInfoResponseUserVerifiedEmailTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERVERIFIEDEMAILTAG",gx.O.AV100UserInfoResponseUserVerifiedEmailTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV100UserInfoResponseUserVerifiedEmailTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERVERIFIEDEMAILTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 423 , function() {
   });
   GXValidFnc[424]={ id: 424, fld:"",grid:0};
   GXValidFnc[425]={ id: 425, fld:"",grid:0};
   GXValidFnc[426]={ id: 426, fld:"TABLE_CONTAINER_USERINFORESPONSEUSEREXTERNALIDTAG",grid:0};
   GXValidFnc[427]={ id: 427, fld:"",grid:0};
   GXValidFnc[428]={ id: 428, fld:"",grid:0};
   GXValidFnc[429]={ id:429 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSEREXTERNALIDTAG",gxz:"ZV89UserInfoResponseUserExternalIdTag",gxold:"OV89UserInfoResponseUserExternalIdTag",gxvar:"AV89UserInfoResponseUserExternalIdTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV89UserInfoResponseUserExternalIdTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV89UserInfoResponseUserExternalIdTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSEREXTERNALIDTAG",gx.O.AV89UserInfoResponseUserExternalIdTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV89UserInfoResponseUserExternalIdTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSEREXTERNALIDTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 429 , function() {
   });
   GXValidFnc[430]={ id: 430, fld:"",grid:0};
   GXValidFnc[431]={ id: 431, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERNAMETAG",grid:0};
   GXValidFnc[432]={ id: 432, fld:"",grid:0};
   GXValidFnc[433]={ id: 433, fld:"",grid:0};
   GXValidFnc[434]={ id:434 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERNAMETAG",gxz:"ZV96UserInfoResponseUserNameTag",gxold:"OV96UserInfoResponseUserNameTag",gxvar:"AV96UserInfoResponseUserNameTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV96UserInfoResponseUserNameTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV96UserInfoResponseUserNameTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERNAMETAG",gx.O.AV96UserInfoResponseUserNameTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV96UserInfoResponseUserNameTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERNAMETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 434 , function() {
   });
   GXValidFnc[435]={ id: 435, fld:"",grid:0};
   GXValidFnc[436]={ id: 436, fld:"",grid:0};
   GXValidFnc[437]={ id: 437, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERFIRSTNAMETAG",grid:0};
   GXValidFnc[438]={ id: 438, fld:"",grid:0};
   GXValidFnc[439]={ id: 439, fld:"",grid:0};
   GXValidFnc[440]={ id:440 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERFIRSTNAMETAG",gxz:"ZV90UserInfoResponseUserFirstNameTag",gxold:"OV90UserInfoResponseUserFirstNameTag",gxvar:"AV90UserInfoResponseUserFirstNameTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV90UserInfoResponseUserFirstNameTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV90UserInfoResponseUserFirstNameTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERFIRSTNAMETAG",gx.O.AV90UserInfoResponseUserFirstNameTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV90UserInfoResponseUserFirstNameTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERFIRSTNAMETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 440 , function() {
   });
   GXValidFnc[441]={ id: 441, fld:"",grid:0};
   GXValidFnc[442]={ id: 442, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERLASTNAMEGENAUTO",grid:0};
   GXValidFnc[443]={ id: 443, fld:"",grid:0};
   GXValidFnc[444]={ id: 444, fld:"",grid:0};
   GXValidFnc[445]={ id:445 ,lvl:0,type:"boolean",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERLASTNAMEGENAUTO",gxz:"ZV94UserInfoResponseUserLastNameGenAuto",gxold:"OV94UserInfoResponseUserLastNameGenAuto",gxvar:"AV94UserInfoResponseUserLastNameGenAuto",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV94UserInfoResponseUserLastNameGenAuto=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV94UserInfoResponseUserLastNameGenAuto=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vUSERINFORESPONSEUSERLASTNAMEGENAUTO",gx.O.AV94UserInfoResponseUserLastNameGenAuto,true);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV94UserInfoResponseUserLastNameGenAuto=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERLASTNAMEGENAUTO")},nac:gx.falseFn,evt:"e222l1_client",values:['true','false']};
   this.declareDomainHdlr( 445 , function() {
   });
   GXValidFnc[446]={ id: 446, fld:"",grid:0};
   GXValidFnc[447]={ id: 447, fld:"",grid:0};
   GXValidFnc[448]={ id: 448, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERLASTNAMETAG",grid:0};
   GXValidFnc[449]={ id: 449, fld:"TEXTBLOCK_VAR_USERINFORESPONSEUSERLASTNAMETAG", format:0,grid:0};
   GXValidFnc[450]={ id: 450, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERLASTNAMETAGFIELDCONTAINER",grid:0};
   GXValidFnc[451]={ id: 451, fld:"",grid:0};
   GXValidFnc[452]={ id:452 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERLASTNAMETAG",gxz:"ZV95UserInfoResponseUserLastNameTag",gxold:"OV95UserInfoResponseUserLastNameTag",gxvar:"AV95UserInfoResponseUserLastNameTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV95UserInfoResponseUserLastNameTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV95UserInfoResponseUserLastNameTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERLASTNAMETAG",gx.O.AV95UserInfoResponseUserLastNameTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV95UserInfoResponseUserLastNameTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERLASTNAMETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 452 , function() {
   });
   GXValidFnc[453]={ id: 453, fld:"TBUSERLASTNAMEHELP", format:0,grid:0};
   GXValidFnc[454]={ id: 454, fld:"",grid:0};
   GXValidFnc[455]={ id: 455, fld:"",grid:0};
   GXValidFnc[456]={ id: 456, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERGENDERTAG",grid:0};
   GXValidFnc[457]={ id: 457, fld:"",grid:0};
   GXValidFnc[458]={ id: 458, fld:"",grid:0};
   GXValidFnc[459]={ id:459 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERGENDERTAG",gxz:"ZV91UserInfoResponseUserGenderTag",gxold:"OV91UserInfoResponseUserGenderTag",gxvar:"AV91UserInfoResponseUserGenderTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV91UserInfoResponseUserGenderTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV91UserInfoResponseUserGenderTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERGENDERTAG",gx.O.AV91UserInfoResponseUserGenderTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV91UserInfoResponseUserGenderTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERGENDERTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 459 , function() {
   });
   GXValidFnc[460]={ id: 460, fld:"",grid:0};
   GXValidFnc[461]={ id: 461, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERGENDERVALUES",grid:0};
   GXValidFnc[462]={ id: 462, fld:"",grid:0};
   GXValidFnc[463]={ id: 463, fld:"",grid:0};
   GXValidFnc[464]={ id:464 ,lvl:0,type:"svchar",len:400,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERGENDERVALUES",gxz:"ZV92UserInfoResponseUserGenderValues",gxold:"OV92UserInfoResponseUserGenderValues",gxvar:"AV92UserInfoResponseUserGenderValues",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV92UserInfoResponseUserGenderValues=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV92UserInfoResponseUserGenderValues=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERGENDERVALUES",gx.O.AV92UserInfoResponseUserGenderValues,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV92UserInfoResponseUserGenderValues=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERGENDERVALUES")},nac:gx.falseFn};
   this.declareDomainHdlr( 464 , function() {
   });
   GXValidFnc[465]={ id: 465, fld:"",grid:0};
   GXValidFnc[466]={ id: 466, fld:"",grid:0};
   GXValidFnc[467]={ id: 467, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERBIRTHDAYTAG",grid:0};
   GXValidFnc[468]={ id: 468, fld:"",grid:0};
   GXValidFnc[469]={ id: 469, fld:"",grid:0};
   GXValidFnc[470]={ id:470 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERBIRTHDAYTAG",gxz:"ZV87UserInfoResponseUserBirthdayTag",gxold:"OV87UserInfoResponseUserBirthdayTag",gxvar:"AV87UserInfoResponseUserBirthdayTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV87UserInfoResponseUserBirthdayTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV87UserInfoResponseUserBirthdayTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERBIRTHDAYTAG",gx.O.AV87UserInfoResponseUserBirthdayTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV87UserInfoResponseUserBirthdayTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERBIRTHDAYTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 470 , function() {
   });
   GXValidFnc[471]={ id: 471, fld:"",grid:0};
   GXValidFnc[472]={ id: 472, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERURLIMAGETAG",grid:0};
   GXValidFnc[473]={ id: 473, fld:"",grid:0};
   GXValidFnc[474]={ id: 474, fld:"",grid:0};
   GXValidFnc[475]={ id:475 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERURLIMAGETAG",gxz:"ZV98UserInfoResponseUserURLImageTag",gxold:"OV98UserInfoResponseUserURLImageTag",gxvar:"AV98UserInfoResponseUserURLImageTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV98UserInfoResponseUserURLImageTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV98UserInfoResponseUserURLImageTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERURLIMAGETAG",gx.O.AV98UserInfoResponseUserURLImageTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV98UserInfoResponseUserURLImageTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERURLIMAGETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 475 , function() {
   });
   GXValidFnc[476]={ id: 476, fld:"",grid:0};
   GXValidFnc[477]={ id: 477, fld:"",grid:0};
   GXValidFnc[478]={ id: 478, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERURLPROFILETAG",grid:0};
   GXValidFnc[479]={ id: 479, fld:"",grid:0};
   GXValidFnc[480]={ id: 480, fld:"",grid:0};
   GXValidFnc[481]={ id:481 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERURLPROFILETAG",gxz:"ZV99UserInfoResponseUserURLProfileTag",gxold:"OV99UserInfoResponseUserURLProfileTag",gxvar:"AV99UserInfoResponseUserURLProfileTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV99UserInfoResponseUserURLProfileTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV99UserInfoResponseUserURLProfileTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERURLPROFILETAG",gx.O.AV99UserInfoResponseUserURLProfileTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV99UserInfoResponseUserURLProfileTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERURLPROFILETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 481 , function() {
   });
   GXValidFnc[482]={ id: 482, fld:"",grid:0};
   GXValidFnc[483]={ id: 483, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERLANGUAGETAG",grid:0};
   GXValidFnc[484]={ id: 484, fld:"",grid:0};
   GXValidFnc[485]={ id: 485, fld:"",grid:0};
   GXValidFnc[486]={ id:486 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERLANGUAGETAG",gxz:"ZV93UserInfoResponseUserLanguageTag",gxold:"OV93UserInfoResponseUserLanguageTag",gxvar:"AV93UserInfoResponseUserLanguageTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV93UserInfoResponseUserLanguageTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV93UserInfoResponseUserLanguageTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERLANGUAGETAG",gx.O.AV93UserInfoResponseUserLanguageTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV93UserInfoResponseUserLanguageTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERLANGUAGETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 486 , function() {
   });
   GXValidFnc[487]={ id: 487, fld:"",grid:0};
   GXValidFnc[488]={ id: 488, fld:"",grid:0};
   GXValidFnc[489]={ id: 489, fld:"TABLE_CONTAINER_USERINFORESPONSEUSERTIMEZONETAG",grid:0};
   GXValidFnc[490]={ id: 490, fld:"",grid:0};
   GXValidFnc[491]={ id: 491, fld:"",grid:0};
   GXValidFnc[492]={ id:492 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEUSERTIMEZONETAG",gxz:"ZV97UserInfoResponseUserTimeZoneTag",gxold:"OV97UserInfoResponseUserTimeZoneTag",gxvar:"AV97UserInfoResponseUserTimeZoneTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV97UserInfoResponseUserTimeZoneTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV97UserInfoResponseUserTimeZoneTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEUSERTIMEZONETAG",gx.O.AV97UserInfoResponseUserTimeZoneTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV97UserInfoResponseUserTimeZoneTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEUSERTIMEZONETAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 492 , function() {
   });
   GXValidFnc[493]={ id: 493, fld:"",grid:0};
   GXValidFnc[494]={ id: 494, fld:"TABLE_CONTAINER_USERINFORESPONSEERRORDESCRIPTIONTAG",grid:0};
   GXValidFnc[495]={ id: 495, fld:"",grid:0};
   GXValidFnc[496]={ id: 496, fld:"",grid:0};
   GXValidFnc[497]={ id:497 ,lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERINFORESPONSEERRORDESCRIPTIONTAG",gxz:"ZV86UserInfoResponseErrorDescriptionTag",gxold:"OV86UserInfoResponseErrorDescriptionTag",gxvar:"AV86UserInfoResponseErrorDescriptionTag",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV86UserInfoResponseErrorDescriptionTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV86UserInfoResponseErrorDescriptionTag=Value},v2c:function(){gx.fn.setControlValue("vUSERINFORESPONSEERRORDESCRIPTIONTAG",gx.O.AV86UserInfoResponseErrorDescriptionTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV86UserInfoResponseErrorDescriptionTag=this.val()},val:function(){return gx.fn.getControlValue("vUSERINFORESPONSEERRORDESCRIPTIONTAG")},nac:gx.falseFn};
   this.declareDomainHdlr( 497 , function() {
   });
   GXValidFnc[498]={ id: 498, fld:"",grid:0};
   GXValidFnc[499]={ id: 499, fld:"",grid:0};
   GXValidFnc[500]={ id: 500, fld:"GROUPCUSTOMUSERATTRIBUTES",grid:0};
   GXValidFnc[501]={ id: 501, fld:"MAINGROUPRESPONSIVETABLE_GROUPCUSTOMUSERATTRIBUTES",grid:0};
   GXValidFnc[502]={ id: 502, fld:"",grid:0};
   GXValidFnc[503]={ id: 503, fld:"",grid:0};
   GXValidFnc[504]={ id: 504, fld:"GRIDCOMPONENTCONTENT_GRID",grid:0};
   GXValidFnc[505]={ id: 505, fld:"",grid:0};
   GXValidFnc[506]={ id: 506, fld:"",grid:0};
   GXValidFnc[507]={ id: 507, fld:"LAYOUTDEFINED_GRID_INNER_GRID",grid:0};
   GXValidFnc[508]={ id: 508, fld:"",grid:0};
   GXValidFnc[509]={ id: 509, fld:"",grid:0};
   GXValidFnc[510]={ id: 510, fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};
   GXValidFnc[511]={ id: 511, fld:"",grid:0};
   GXValidFnc[512]={ id: 512, fld:"",grid:0};
   GXValidFnc[513]={ id: 513, fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};
   GXValidFnc[514]={ id: 514, fld:"",grid:0};
   GXValidFnc[515]={ id: 515, fld:"",grid:0};
   GXValidFnc[517]={ id:517 ,lvl:2,type:"char",len:60,dec:0,sign:false,ro:0,isacc:0,grid:516,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDYNAMICPROPNAME",gxz:"ZV29DynamicPropName",gxold:"OV29DynamicPropName",gxvar:"AV29DynamicPropName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV29DynamicPropName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV29DynamicPropName=Value},v2c:function(row){gx.fn.setGridControlValue("vDYNAMICPROPNAME",row || gx.fn.currentGridRowImpl(516),gx.O.AV29DynamicPropName,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV29DynamicPropName=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDYNAMICPROPNAME",row || gx.fn.currentGridRowImpl(516))},nac:gx.falseFn};
   GXValidFnc[518]={ id:518 ,lvl:2,type:"char",len:60,dec:0,sign:false,ro:0,isacc:0,grid:516,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDYNAMICPROPTAG",gxz:"ZV30DynamicPropTag",gxold:"OV30DynamicPropTag",gxvar:"AV30DynamicPropTag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV30DynamicPropTag=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV30DynamicPropTag=Value},v2c:function(row){gx.fn.setGridControlValue("vDYNAMICPROPTAG",row || gx.fn.currentGridRowImpl(516),gx.O.AV30DynamicPropTag,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV30DynamicPropTag=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDYNAMICPROPTAG",row || gx.fn.currentGridRowImpl(516))},nac:gx.falseFn};
   GXValidFnc[519]={ id:519 ,lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:516,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE_ACTION",gxz:"ZV27Delete_Action",gxold:"OV27Delete_Action",gxvar:"AV27Delete_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.AV27Delete_Action=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV27Delete_Action=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(516),gx.O.AV27Delete_Action,gx.O.AV108Delete_action_GXI)},c2v:function(row){gx.O.AV108Delete_action_GXI=this.val_GXI();if(this.val(row)!==undefined)gx.O.AV27Delete_Action=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION",row || gx.fn.currentGridRowImpl(516))},val_GXI:function(row){return gx.fn.getGridControlValue("vDELETE_ACTION_GXI",row || gx.fn.currentGridRowImpl(516))}, gxvar_GXI:'AV108Delete_action_GXI',nac:gx.falseFn,evt:"e202l2_client"};
   GXValidFnc[520]={ id: 520, fld:"",grid:0};
   GXValidFnc[521]={ id: 521, fld:"",grid:0};
   GXValidFnc[522]={ id: 522, fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};
   GXValidFnc[525]={ id: 525, fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID", format:0,grid:0};
   GXValidFnc[526]={ id: 526, fld:"",grid:0};
   GXValidFnc[527]={ id: 527, fld:"",grid:0};
   GXValidFnc[528]={ id: 528, fld:"",grid:0};
   GXValidFnc[529]={ id: 529, fld:"ADD",grid:0,evt:"e142l2_client"};
   GXValidFnc[530]={ id: 530, fld:"",grid:0};
   GXValidFnc[531]={ id: 531, fld:"",grid:0};
   GXValidFnc[532]={ id: 532, fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};
   GXValidFnc[533]={ id: 533, fld:"",grid:0};
   GXValidFnc[534]={ id: 534, fld:"",grid:0};
   GXValidFnc[535]={ id: 535, fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};
   GXValidFnc[538]={ id: 538, fld:"CONFIRM",grid:0,evt:"e152l2_client"};
   GXValidFnc[540]={ id: 540, fld:"CANCEL",grid:0,evt:"e212l1_client"};
   GXValidFnc[541]={ id: 541, fld:"",grid:0};
   GXValidFnc[542]={ id: 542, fld:"",grid:0};
   this.AV44Name = "" ;
   this.ZV44Name = "" ;
   this.OV44Name = "" ;
   this.AV34FunctionId = "" ;
   this.ZV34FunctionId = "" ;
   this.OV34FunctionId = "" ;
   this.AV28Dsc = "" ;
   this.ZV28Dsc = "" ;
   this.OV28Dsc = "" ;
   this.AV42IsEnable = false ;
   this.ZV42IsEnable = false ;
   this.OV42IsEnable = false ;
   this.AV53SmallImageName = "" ;
   this.ZV53SmallImageName = "" ;
   this.OV53SmallImageName = "" ;
   this.AV25BigImageName = "" ;
   this.ZV25BigImageName = "" ;
   this.OV25BigImageName = "" ;
   this.AV41Impersonate = "" ;
   this.ZV41Impersonate = "" ;
   this.OV41Impersonate = "" ;
   this.AV45Oauth20ClientIdTag = "" ;
   this.ZV45Oauth20ClientIdTag = "" ;
   this.OV45Oauth20ClientIdTag = "" ;
   this.AV46Oauth20ClientIdValue = "" ;
   this.ZV46Oauth20ClientIdValue = "" ;
   this.OV46Oauth20ClientIdValue = "" ;
   this.AV47Oauth20ClientSecretTag = "" ;
   this.ZV47Oauth20ClientSecretTag = "" ;
   this.OV47Oauth20ClientSecretTag = "" ;
   this.AV48Oauth20ClientSecretValue = "" ;
   this.ZV48Oauth20ClientSecretValue = "" ;
   this.OV48Oauth20ClientSecretValue = "" ;
   this.AV49Oauth20RedirectURLTag = "" ;
   this.ZV49Oauth20RedirectURLTag = "" ;
   this.OV49Oauth20RedirectURLTag = "" ;
   this.AV50Oauth20RedirectURLValue = "" ;
   this.ZV50Oauth20RedirectURLValue = "" ;
   this.OV50Oauth20RedirectURLValue = "" ;
   this.AV12AuthorizeURL = "" ;
   this.ZV12AuthorizeURL = "" ;
   this.OV12AuthorizeURL = "" ;
   this.AV16AuthRespTypeInclude = false ;
   this.ZV16AuthRespTypeInclude = false ;
   this.OV16AuthRespTypeInclude = false ;
   this.AV17AuthRespTypeTag = "" ;
   this.ZV17AuthRespTypeTag = "" ;
   this.OV17AuthRespTypeTag = "" ;
   this.AV18AuthRespTypeValue = "" ;
   this.ZV18AuthRespTypeValue = "" ;
   this.OV18AuthRespTypeValue = "" ;
   this.AV19AuthScopeInclude = false ;
   this.ZV19AuthScopeInclude = false ;
   this.OV19AuthScopeInclude = false ;
   this.AV20AuthScopeTag = "" ;
   this.ZV20AuthScopeTag = "" ;
   this.OV20AuthScopeTag = "" ;
   this.AV21AuthScopeValue = "" ;
   this.ZV21AuthScopeValue = "" ;
   this.OV21AuthScopeValue = "" ;
   this.AV22AuthStateInclude = false ;
   this.ZV22AuthStateInclude = false ;
   this.OV22AuthStateInclude = false ;
   this.AV23AuthStateTag = "" ;
   this.ZV23AuthStateTag = "" ;
   this.OV23AuthStateTag = "" ;
   this.AV9AuthClientIdInclude = false ;
   this.ZV9AuthClientIdInclude = false ;
   this.OV9AuthClientIdInclude = false ;
   this.AV10AuthClientSecretInclude = false ;
   this.ZV10AuthClientSecretInclude = false ;
   this.OV10AuthClientSecretInclude = false ;
   this.AV13AuthRedirURLInclide = false ;
   this.ZV13AuthRedirURLInclide = false ;
   this.OV13AuthRedirURLInclide = false ;
   this.AV7AuthAdditionalParameters = "" ;
   this.ZV7AuthAdditionalParameters = "" ;
   this.OV7AuthAdditionalParameters = "" ;
   this.AV8AuthAdditionalParametersSD = "" ;
   this.ZV8AuthAdditionalParametersSD = "" ;
   this.OV8AuthAdditionalParametersSD = "" ;
   this.AV14AuthResponseAccessCodeTag = "" ;
   this.ZV14AuthResponseAccessCodeTag = "" ;
   this.OV14AuthResponseAccessCodeTag = "" ;
   this.AV15AuthResponseErrorDescTag = "" ;
   this.ZV15AuthResponseErrorDescTag = "" ;
   this.OV15AuthResponseErrorDescTag = "" ;
   this.AV73TokenURL = "" ;
   this.ZV73TokenURL = "" ;
   this.OV73TokenURL = "" ;
   this.AV63TokenMethod = "" ;
   this.ZV63TokenMethod = "" ;
   this.OV63TokenMethod = "" ;
   this.AV61TokenHeaderKeyTag = "" ;
   this.ZV61TokenHeaderKeyTag = "" ;
   this.OV61TokenHeaderKeyTag = "" ;
   this.AV62TokenHeaderKeyValue = "" ;
   this.ZV62TokenHeaderKeyValue = "" ;
   this.OV62TokenHeaderKeyValue = "" ;
   this.AV58TokenGrantTypeInclude = false ;
   this.ZV58TokenGrantTypeInclude = false ;
   this.OV58TokenGrantTypeInclude = false ;
   this.AV59TokenGrantTypeTag = "" ;
   this.ZV59TokenGrantTypeTag = "" ;
   this.OV59TokenGrantTypeTag = "" ;
   this.AV60TokenGrantTypeValue = "" ;
   this.ZV60TokenGrantTypeValue = "" ;
   this.OV60TokenGrantTypeValue = "" ;
   this.AV54TokenAccessCodeInclude = false ;
   this.ZV54TokenAccessCodeInclude = false ;
   this.OV54TokenAccessCodeInclude = false ;
   this.AV56TokenCliIdInclude = false ;
   this.ZV56TokenCliIdInclude = false ;
   this.OV56TokenCliIdInclude = false ;
   this.AV57TokenCliSecretInclude = false ;
   this.ZV57TokenCliSecretInclude = false ;
   this.OV57TokenCliSecretInclude = false ;
   this.AV64TokenRedirectURLInclude = false ;
   this.ZV64TokenRedirectURLInclude = false ;
   this.OV64TokenRedirectURLInclude = false ;
   this.AV55TokenAdditionalParameters = "" ;
   this.ZV55TokenAdditionalParameters = "" ;
   this.OV55TokenAdditionalParameters = "" ;
   this.AV66TokenResponseAccessTokenTag = "" ;
   this.ZV66TokenResponseAccessTokenTag = "" ;
   this.OV66TokenResponseAccessTokenTag = "" ;
   this.AV71TokenResponseTokenTypeTag = "" ;
   this.ZV71TokenResponseTokenTypeTag = "" ;
   this.OV71TokenResponseTokenTypeTag = "" ;
   this.AV68TokenResponseExpiresInTag = "" ;
   this.ZV68TokenResponseExpiresInTag = "" ;
   this.OV68TokenResponseExpiresInTag = "" ;
   this.AV70TokenResponseScopeTag = "" ;
   this.ZV70TokenResponseScopeTag = "" ;
   this.OV70TokenResponseScopeTag = "" ;
   this.AV72TokenResponseUserIdTag = "" ;
   this.ZV72TokenResponseUserIdTag = "" ;
   this.OV72TokenResponseUserIdTag = "" ;
   this.AV69TokenResponseRefreshTokenTag = "" ;
   this.ZV69TokenResponseRefreshTokenTag = "" ;
   this.OV69TokenResponseRefreshTokenTag = "" ;
   this.AV67TokenResponseErrorDescriptionTag = "" ;
   this.ZV67TokenResponseErrorDescriptionTag = "" ;
   this.OV67TokenResponseErrorDescriptionTag = "" ;
   this.AV24AutovalidateExternalTokenAndRefresh = false ;
   this.ZV24AutovalidateExternalTokenAndRefresh = false ;
   this.OV24AutovalidateExternalTokenAndRefresh = false ;
   this.AV65TokenRefreshTokenURL = "" ;
   this.ZV65TokenRefreshTokenURL = "" ;
   this.OV65TokenRefreshTokenURL = "" ;
   this.AV101UserInfoURL = "" ;
   this.ZV101UserInfoURL = "" ;
   this.OV101UserInfoURL = "" ;
   this.AV85UserInfoMethod = "" ;
   this.ZV85UserInfoMethod = "" ;
   this.OV85UserInfoMethod = "" ;
   this.AV83UserInfoHeaderKeyTag = "" ;
   this.ZV83UserInfoHeaderKeyTag = "" ;
   this.OV83UserInfoHeaderKeyTag = "" ;
   this.AV84UserInfoHeaderKeyValue = "" ;
   this.ZV84UserInfoHeaderKeyValue = "" ;
   this.OV84UserInfoHeaderKeyValue = "" ;
   this.AV76UserInfoAccessTokenInclude = false ;
   this.ZV76UserInfoAccessTokenInclude = false ;
   this.OV76UserInfoAccessTokenInclude = false ;
   this.AV77UserInfoAccessTokenName = "" ;
   this.ZV77UserInfoAccessTokenName = "" ;
   this.OV77UserInfoAccessTokenName = "" ;
   this.AV79UserInfoClientIdInclude = false ;
   this.ZV79UserInfoClientIdInclude = false ;
   this.OV79UserInfoClientIdInclude = false ;
   this.AV80UserInfoClientIdName = "" ;
   this.ZV80UserInfoClientIdName = "" ;
   this.OV80UserInfoClientIdName = "" ;
   this.AV81UserInfoClientSecretInclude = false ;
   this.ZV81UserInfoClientSecretInclude = false ;
   this.OV81UserInfoClientSecretInclude = false ;
   this.AV82UserInfoClientSecretName = "" ;
   this.ZV82UserInfoClientSecretName = "" ;
   this.OV82UserInfoClientSecretName = "" ;
   this.AV102UserInfoUserIdInclude = false ;
   this.ZV102UserInfoUserIdInclude = false ;
   this.OV102UserInfoUserIdInclude = false ;
   this.AV78UserInfoAdditionalParameters = "" ;
   this.ZV78UserInfoAdditionalParameters = "" ;
   this.OV78UserInfoAdditionalParameters = "" ;
   this.AV88UserInfoResponseUserEmailTag = "" ;
   this.ZV88UserInfoResponseUserEmailTag = "" ;
   this.OV88UserInfoResponseUserEmailTag = "" ;
   this.AV100UserInfoResponseUserVerifiedEmailTag = "" ;
   this.ZV100UserInfoResponseUserVerifiedEmailTag = "" ;
   this.OV100UserInfoResponseUserVerifiedEmailTag = "" ;
   this.AV89UserInfoResponseUserExternalIdTag = "" ;
   this.ZV89UserInfoResponseUserExternalIdTag = "" ;
   this.OV89UserInfoResponseUserExternalIdTag = "" ;
   this.AV96UserInfoResponseUserNameTag = "" ;
   this.ZV96UserInfoResponseUserNameTag = "" ;
   this.OV96UserInfoResponseUserNameTag = "" ;
   this.AV90UserInfoResponseUserFirstNameTag = "" ;
   this.ZV90UserInfoResponseUserFirstNameTag = "" ;
   this.OV90UserInfoResponseUserFirstNameTag = "" ;
   this.AV94UserInfoResponseUserLastNameGenAuto = false ;
   this.ZV94UserInfoResponseUserLastNameGenAuto = false ;
   this.OV94UserInfoResponseUserLastNameGenAuto = false ;
   this.AV95UserInfoResponseUserLastNameTag = "" ;
   this.ZV95UserInfoResponseUserLastNameTag = "" ;
   this.OV95UserInfoResponseUserLastNameTag = "" ;
   this.AV91UserInfoResponseUserGenderTag = "" ;
   this.ZV91UserInfoResponseUserGenderTag = "" ;
   this.OV91UserInfoResponseUserGenderTag = "" ;
   this.AV92UserInfoResponseUserGenderValues = "" ;
   this.ZV92UserInfoResponseUserGenderValues = "" ;
   this.OV92UserInfoResponseUserGenderValues = "" ;
   this.AV87UserInfoResponseUserBirthdayTag = "" ;
   this.ZV87UserInfoResponseUserBirthdayTag = "" ;
   this.OV87UserInfoResponseUserBirthdayTag = "" ;
   this.AV98UserInfoResponseUserURLImageTag = "" ;
   this.ZV98UserInfoResponseUserURLImageTag = "" ;
   this.OV98UserInfoResponseUserURLImageTag = "" ;
   this.AV99UserInfoResponseUserURLProfileTag = "" ;
   this.ZV99UserInfoResponseUserURLProfileTag = "" ;
   this.OV99UserInfoResponseUserURLProfileTag = "" ;
   this.AV93UserInfoResponseUserLanguageTag = "" ;
   this.ZV93UserInfoResponseUserLanguageTag = "" ;
   this.OV93UserInfoResponseUserLanguageTag = "" ;
   this.AV97UserInfoResponseUserTimeZoneTag = "" ;
   this.ZV97UserInfoResponseUserTimeZoneTag = "" ;
   this.OV97UserInfoResponseUserTimeZoneTag = "" ;
   this.AV86UserInfoResponseErrorDescriptionTag = "" ;
   this.ZV86UserInfoResponseErrorDescriptionTag = "" ;
   this.OV86UserInfoResponseErrorDescriptionTag = "" ;
   this.ZV29DynamicPropName = "" ;
   this.OV29DynamicPropName = "" ;
   this.ZV30DynamicPropTag = "" ;
   this.OV30DynamicPropTag = "" ;
   this.ZV27Delete_Action = "" ;
   this.OV27Delete_Action = "" ;
   this.AV44Name = "" ;
   this.AV34FunctionId = "" ;
   this.AV28Dsc = "" ;
   this.AV42IsEnable = false ;
   this.AV53SmallImageName = "" ;
   this.AV25BigImageName = "" ;
   this.AV41Impersonate = "" ;
   this.AV45Oauth20ClientIdTag = "" ;
   this.AV46Oauth20ClientIdValue = "" ;
   this.AV47Oauth20ClientSecretTag = "" ;
   this.AV48Oauth20ClientSecretValue = "" ;
   this.AV49Oauth20RedirectURLTag = "" ;
   this.AV50Oauth20RedirectURLValue = "" ;
   this.AV12AuthorizeURL = "" ;
   this.AV16AuthRespTypeInclude = false ;
   this.AV17AuthRespTypeTag = "" ;
   this.AV18AuthRespTypeValue = "" ;
   this.AV19AuthScopeInclude = false ;
   this.AV20AuthScopeTag = "" ;
   this.AV21AuthScopeValue = "" ;
   this.AV22AuthStateInclude = false ;
   this.AV23AuthStateTag = "" ;
   this.AV9AuthClientIdInclude = false ;
   this.AV10AuthClientSecretInclude = false ;
   this.AV13AuthRedirURLInclide = false ;
   this.AV7AuthAdditionalParameters = "" ;
   this.AV8AuthAdditionalParametersSD = "" ;
   this.AV14AuthResponseAccessCodeTag = "" ;
   this.AV15AuthResponseErrorDescTag = "" ;
   this.AV73TokenURL = "" ;
   this.AV63TokenMethod = "" ;
   this.AV61TokenHeaderKeyTag = "" ;
   this.AV62TokenHeaderKeyValue = "" ;
   this.AV58TokenGrantTypeInclude = false ;
   this.AV59TokenGrantTypeTag = "" ;
   this.AV60TokenGrantTypeValue = "" ;
   this.AV54TokenAccessCodeInclude = false ;
   this.AV56TokenCliIdInclude = false ;
   this.AV57TokenCliSecretInclude = false ;
   this.AV64TokenRedirectURLInclude = false ;
   this.AV55TokenAdditionalParameters = "" ;
   this.AV66TokenResponseAccessTokenTag = "" ;
   this.AV71TokenResponseTokenTypeTag = "" ;
   this.AV68TokenResponseExpiresInTag = "" ;
   this.AV70TokenResponseScopeTag = "" ;
   this.AV72TokenResponseUserIdTag = "" ;
   this.AV69TokenResponseRefreshTokenTag = "" ;
   this.AV67TokenResponseErrorDescriptionTag = "" ;
   this.AV24AutovalidateExternalTokenAndRefresh = false ;
   this.AV65TokenRefreshTokenURL = "" ;
   this.AV101UserInfoURL = "" ;
   this.AV85UserInfoMethod = "" ;
   this.AV83UserInfoHeaderKeyTag = "" ;
   this.AV84UserInfoHeaderKeyValue = "" ;
   this.AV76UserInfoAccessTokenInclude = false ;
   this.AV77UserInfoAccessTokenName = "" ;
   this.AV79UserInfoClientIdInclude = false ;
   this.AV80UserInfoClientIdName = "" ;
   this.AV81UserInfoClientSecretInclude = false ;
   this.AV82UserInfoClientSecretName = "" ;
   this.AV102UserInfoUserIdInclude = false ;
   this.AV78UserInfoAdditionalParameters = "" ;
   this.AV88UserInfoResponseUserEmailTag = "" ;
   this.AV100UserInfoResponseUserVerifiedEmailTag = "" ;
   this.AV89UserInfoResponseUserExternalIdTag = "" ;
   this.AV96UserInfoResponseUserNameTag = "" ;
   this.AV90UserInfoResponseUserFirstNameTag = "" ;
   this.AV94UserInfoResponseUserLastNameGenAuto = false ;
   this.AV95UserInfoResponseUserLastNameTag = "" ;
   this.AV91UserInfoResponseUserGenderTag = "" ;
   this.AV92UserInfoResponseUserGenderValues = "" ;
   this.AV87UserInfoResponseUserBirthdayTag = "" ;
   this.AV98UserInfoResponseUserURLImageTag = "" ;
   this.AV99UserInfoResponseUserURLProfileTag = "" ;
   this.AV93UserInfoResponseUserLanguageTag = "" ;
   this.AV97UserInfoResponseUserTimeZoneTag = "" ;
   this.AV86UserInfoResponseErrorDescriptionTag = "" ;
   this.AV104TypeId = "" ;
   this.AV29DynamicPropName = "" ;
   this.AV30DynamicPropTag = "" ;
   this.AV27Delete_Action = "" ;
   this.AV26CurrentPage_Grid = 0 ;
   this.AV109Pgmname = "" ;
   this.AV40I_LoadCount_Grid = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e142l2_client": ["'E_ADD'", true] ,"e202l2_client": ["'E_DELETE'", true] ,"e152l2_client": ["'E_CONFIRM'", true] ,"e232l2_client": ["ENTER", true] ,"e242l2_client": ["CANCEL", true] ,"e212l1_client": ["'E_CANCEL'", false] ,"e222l1_client": ["VUSERINFORESPONSEUSERLASTNAMEGENAUTO.CLICK", false] ,"e112l1_client": ["LINESEPARATORTITLE_ADVANCEDCONFIGURATIONLS.CLICK", false] ,"e122l1_client": ["LINESEPARATORTITLE_ADVANCEDCONFIGURATIONTOKENLS.CLICK", false] ,"e132l1_client": ["LINESEPARATORTITLE_ADVANCEDUSERCONFIGURATION.CLICK", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'sPrefix'},{av:'AV26CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV109Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV40I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'AV26CurrentPage_Grid',fld:'vCURRENTPAGE_GRID',pic:'ZZZ9',hsh:true},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["START"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'AV109Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV44Name',fld:'vNAME',pic:''},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS","Class")',ctrl:'LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_ADVANCEDCONFIGURATIONLS","Class")',ctrl:'LINESEPARATORHEADER_ADVANCEDCONFIGURATIONLS',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS","Class")',ctrl:'LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_ADVANCEDCONFIGURATIONTOKENLS","Class")',ctrl:'LINESEPARATORHEADER_ADVANCEDCONFIGURATIONTOKENLS',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION","Class")',ctrl:'LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_ADVANCEDUSERCONFIGURATION","Class")',ctrl:'LINESEPARATORHEADER_ADVANCEDUSERCONFIGURATION',prop:'Class'},{ctrl:'GRID',prop:'Backcolorstyle'},{av:'gx.fn.getCtrlProperty("CONTENTTABLE","Class")',ctrl:'CONTENTTABLE',prop:'Class'},{av:'gx.fn.getCtrlProperty("RESPONSIVETABLE_MAINATTRIBUTES_TBLDATA","Class")',ctrl:'RESPONSIVETABLE_MAINATTRIBUTES_TBLDATA',prop:'Class'},{av:'gx.fn.getCtrlProperty("ATTRIBUTESCONTAINERTABLE_TBLDATA","Class")',ctrl:'ATTRIBUTESCONTAINERTABLE_TBLDATA',prop:'Class'},{ctrl:'CONFIRM',prop:'Visible'},{ctrl:'CANCEL',prop:'Visible'},{ctrl:'vFUNCTIONID'},{av:'gx.fn.getCtrlProperty("vISENABLE","Enabled")',ctrl:'vISENABLE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDSC","Enabled")',ctrl:'vDSC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSMALLIMAGENAME","Enabled")',ctrl:'vSMALLIMAGENAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBIGIMAGENAME","Enabled")',ctrl:'vBIGIMAGENAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vIMPERSONATE","Enabled")',ctrl:'vIMPERSONATE',prop:'Enabled'},{ctrl:'CONFIRM',prop:'Caption'},{ctrl:'ADD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vOAUTH20CLIENTIDTAG","Enabled")',ctrl:'vOAUTH20CLIENTIDTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOAUTH20CLIENTIDVALUE","Enabled")',ctrl:'vOAUTH20CLIENTIDVALUE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOAUTH20CLIENTSECRETTAG","Enabled")',ctrl:'vOAUTH20CLIENTSECRETTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOAUTH20CLIENTSECRETVALUE","Enabled")',ctrl:'vOAUTH20CLIENTSECRETVALUE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOAUTH20REDIRECTURLTAG","Enabled")',ctrl:'vOAUTH20REDIRECTURLTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOAUTH20REDIRECTURLVALUE","Enabled")',ctrl:'vOAUTH20REDIRECTURLVALUE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHORIZEURL","Enabled")',ctrl:'vAUTHORIZEURL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHRESPTYPEINCLUDE","Enabled")',ctrl:'vAUTHRESPTYPEINCLUDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHRESPTYPETAG","Enabled")',ctrl:'vAUTHRESPTYPETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHRESPTYPEVALUE","Enabled")',ctrl:'vAUTHRESPTYPEVALUE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHSCOPEINCLUDE","Enabled")',ctrl:'vAUTHSCOPEINCLUDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHSCOPETAG","Enabled")',ctrl:'vAUTHSCOPETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHSCOPEVALUE","Enabled")',ctrl:'vAUTHSCOPEVALUE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHSTATEINCLUDE","Enabled")',ctrl:'vAUTHSTATEINCLUDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHSTATETAG","Enabled")',ctrl:'vAUTHSTATETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHCLIENTIDINCLUDE","Enabled")',ctrl:'vAUTHCLIENTIDINCLUDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHCLIENTSECRETINCLUDE","Enabled")',ctrl:'vAUTHCLIENTSECRETINCLUDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHREDIRURLINCLIDE","Enabled")',ctrl:'vAUTHREDIRURLINCLIDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHADDITIONALPARAMETERS","Enabled")',ctrl:'vAUTHADDITIONALPARAMETERS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHADDITIONALPARAMETERSSD","Enabled")',ctrl:'vAUTHADDITIONALPARAMETERSSD',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHRESPONSEACCESSCODETAG","Enabled")',ctrl:'vAUTHRESPONSEACCESSCODETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTHRESPONSEERRORDESCTAG","Enabled")',ctrl:'vAUTHRESPONSEERRORDESCTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENURL","Enabled")',ctrl:'vTOKENURL',prop:'Enabled'},{ctrl:'vTOKENMETHOD'},{av:'gx.fn.getCtrlProperty("vTOKENHEADERKEYTAG","Enabled")',ctrl:'vTOKENHEADERKEYTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENHEADERKEYVALUE","Enabled")',ctrl:'vTOKENHEADERKEYVALUE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENGRANTTYPEINCLUDE","Enabled")',ctrl:'vTOKENGRANTTYPEINCLUDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENGRANTTYPETAG","Enabled")',ctrl:'vTOKENGRANTTYPETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENGRANTTYPEVALUE","Enabled")',ctrl:'vTOKENGRANTTYPEVALUE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENACCESSCODEINCLUDE","Enabled")',ctrl:'vTOKENACCESSCODEINCLUDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENCLIIDINCLUDE","Enabled")',ctrl:'vTOKENCLIIDINCLUDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENCLISECRETINCLUDE","Enabled")',ctrl:'vTOKENCLISECRETINCLUDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENREDIRECTURLINCLUDE","Enabled")',ctrl:'vTOKENREDIRECTURLINCLUDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENADDITIONALPARAMETERS","Enabled")',ctrl:'vTOKENADDITIONALPARAMETERS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENRESPONSEACCESSTOKENTAG","Enabled")',ctrl:'vTOKENRESPONSEACCESSTOKENTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENRESPONSETOKENTYPETAG","Enabled")',ctrl:'vTOKENRESPONSETOKENTYPETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENRESPONSEEXPIRESINTAG","Enabled")',ctrl:'vTOKENRESPONSEEXPIRESINTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENRESPONSESCOPETAG","Enabled")',ctrl:'vTOKENRESPONSESCOPETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENRESPONSEUSERIDTAG","Enabled")',ctrl:'vTOKENRESPONSEUSERIDTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENRESPONSEREFRESHTOKENTAG","Enabled")',ctrl:'vTOKENRESPONSEREFRESHTOKENTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENRESPONSEERRORDESCRIPTIONTAG","Enabled")',ctrl:'vTOKENRESPONSEERRORDESCRIPTIONTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vAUTOVALIDATEEXTERNALTOKENANDREFRESH","Enabled")',ctrl:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vTOKENREFRESHTOKENURL","Enabled")',ctrl:'vTOKENREFRESHTOKENURL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFOURL","Enabled")',ctrl:'vUSERINFOURL',prop:'Enabled'},{ctrl:'vUSERINFOMETHOD'},{av:'gx.fn.getCtrlProperty("vUSERINFOHEADERKEYTAG","Enabled")',ctrl:'vUSERINFOHEADERKEYTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFOHEADERKEYVALUE","Enabled")',ctrl:'vUSERINFOHEADERKEYVALUE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFOACCESSTOKENINCLUDE","Enabled")',ctrl:'vUSERINFOACCESSTOKENINCLUDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFOACCESSTOKENNAME","Enabled")',ctrl:'vUSERINFOACCESSTOKENNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFOCLIENTIDINCLUDE","Enabled")',ctrl:'vUSERINFOCLIENTIDINCLUDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFOCLIENTIDNAME","Enabled")',ctrl:'vUSERINFOCLIENTIDNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFOCLIENTSECRETINCLUDE","Enabled")',ctrl:'vUSERINFOCLIENTSECRETINCLUDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFOCLIENTSECRETNAME","Enabled")',ctrl:'vUSERINFOCLIENTSECRETNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFOUSERIDINCLUDE","Enabled")',ctrl:'vUSERINFOUSERIDINCLUDE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFOADDITIONALPARAMETERS","Enabled")',ctrl:'vUSERINFOADDITIONALPARAMETERS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSEREMAILTAG","Enabled")',ctrl:'vUSERINFORESPONSEUSEREMAILTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERVERIFIEDEMAILTAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERVERIFIEDEMAILTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSEREXTERNALIDTAG","Enabled")',ctrl:'vUSERINFORESPONSEUSEREXTERNALIDTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERNAMETAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERNAMETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERFIRSTNAMETAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERFIRSTNAMETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERLASTNAMEGENAUTO","Enabled")',ctrl:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERLASTNAMETAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERLASTNAMETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERGENDERTAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERGENDERTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERGENDERVALUES","Enabled")',ctrl:'vUSERINFORESPONSEUSERGENDERVALUES',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERBIRTHDAYTAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERBIRTHDAYTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERURLIMAGETAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERURLIMAGETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERURLPROFILETAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERURLPROFILETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERLANGUAGETAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERLANGUAGETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERTIMEZONETAG","Enabled")',ctrl:'vUSERINFORESPONSEUSERTIMEZONETAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEERRORDESCRIPTIONTAG","Enabled")',ctrl:'vUSERINFORESPONSEERRORDESCRIPTIONTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vNAME","Enabled")',ctrl:'vNAME',prop:'Enabled'},{av:'AV44Name',fld:'vNAME',pic:''},{av:'AV28Dsc',fld:'vDSC',pic:''},{av:'AV53SmallImageName',fld:'vSMALLIMAGENAME',pic:''},{av:'AV25BigImageName',fld:'vBIGIMAGENAME',pic:''},{av:'AV41Impersonate',fld:'vIMPERSONATE',pic:''},{av:'AV45Oauth20ClientIdTag',fld:'vOAUTH20CLIENTIDTAG',pic:''},{av:'AV46Oauth20ClientIdValue',fld:'vOAUTH20CLIENTIDVALUE',pic:''},{av:'AV47Oauth20ClientSecretTag',fld:'vOAUTH20CLIENTSECRETTAG',pic:''},{av:'AV48Oauth20ClientSecretValue',fld:'vOAUTH20CLIENTSECRETVALUE',pic:''},{av:'AV49Oauth20RedirectURLTag',fld:'vOAUTH20REDIRECTURLTAG',pic:''},{av:'AV50Oauth20RedirectURLValue',fld:'vOAUTH20REDIRECTURLVALUE',pic:''},{av:'AV12AuthorizeURL',fld:'vAUTHORIZEURL',pic:''},{av:'AV17AuthRespTypeTag',fld:'vAUTHRESPTYPETAG',pic:''},{av:'AV18AuthRespTypeValue',fld:'vAUTHRESPTYPEVALUE',pic:''},{av:'AV20AuthScopeTag',fld:'vAUTHSCOPETAG',pic:''},{av:'AV21AuthScopeValue',fld:'vAUTHSCOPEVALUE',pic:''},{av:'AV23AuthStateTag',fld:'vAUTHSTATETAG',pic:''},{av:'AV7AuthAdditionalParameters',fld:'vAUTHADDITIONALPARAMETERS',pic:''},{av:'AV8AuthAdditionalParametersSD',fld:'vAUTHADDITIONALPARAMETERSSD',pic:''},{av:'AV14AuthResponseAccessCodeTag',fld:'vAUTHRESPONSEACCESSCODETAG',pic:''},{av:'AV15AuthResponseErrorDescTag',fld:'vAUTHRESPONSEERRORDESCTAG',pic:''},{av:'AV73TokenURL',fld:'vTOKENURL',pic:''},{av:'AV63TokenMethod',fld:'vTOKENMETHOD',pic:''},{av:'AV61TokenHeaderKeyTag',fld:'vTOKENHEADERKEYTAG',pic:''},{av:'AV62TokenHeaderKeyValue',fld:'vTOKENHEADERKEYVALUE',pic:''},{av:'AV59TokenGrantTypeTag',fld:'vTOKENGRANTTYPETAG',pic:''},{av:'AV60TokenGrantTypeValue',fld:'vTOKENGRANTTYPEVALUE',pic:''},{av:'AV55TokenAdditionalParameters',fld:'vTOKENADDITIONALPARAMETERS',pic:''},{av:'AV66TokenResponseAccessTokenTag',fld:'vTOKENRESPONSEACCESSTOKENTAG',pic:''},{av:'AV71TokenResponseTokenTypeTag',fld:'vTOKENRESPONSETOKENTYPETAG',pic:''},{av:'AV68TokenResponseExpiresInTag',fld:'vTOKENRESPONSEEXPIRESINTAG',pic:''},{av:'AV70TokenResponseScopeTag',fld:'vTOKENRESPONSESCOPETAG',pic:''},{av:'AV72TokenResponseUserIdTag',fld:'vTOKENRESPONSEUSERIDTAG',pic:''},{av:'AV69TokenResponseRefreshTokenTag',fld:'vTOKENRESPONSEREFRESHTOKENTAG',pic:''},{av:'AV67TokenResponseErrorDescriptionTag',fld:'vTOKENRESPONSEERRORDESCRIPTIONTAG',pic:''},{av:'AV65TokenRefreshTokenURL',fld:'vTOKENREFRESHTOKENURL',pic:''},{av:'AV101UserInfoURL',fld:'vUSERINFOURL',pic:''},{av:'AV85UserInfoMethod',fld:'vUSERINFOMETHOD',pic:''},{av:'AV83UserInfoHeaderKeyTag',fld:'vUSERINFOHEADERKEYTAG',pic:''},{av:'AV84UserInfoHeaderKeyValue',fld:'vUSERINFOHEADERKEYVALUE',pic:''},{av:'AV77UserInfoAccessTokenName',fld:'vUSERINFOACCESSTOKENNAME',pic:''},{av:'AV80UserInfoClientIdName',fld:'vUSERINFOCLIENTIDNAME',pic:''},{av:'AV82UserInfoClientSecretName',fld:'vUSERINFOCLIENTSECRETNAME',pic:''},{av:'AV78UserInfoAdditionalParameters',fld:'vUSERINFOADDITIONALPARAMETERS',pic:''},{av:'AV88UserInfoResponseUserEmailTag',fld:'vUSERINFORESPONSEUSEREMAILTAG',pic:''},{av:'AV100UserInfoResponseUserVerifiedEmailTag',fld:'vUSERINFORESPONSEUSERVERIFIEDEMAILTAG',pic:''},{av:'AV89UserInfoResponseUserExternalIdTag',fld:'vUSERINFORESPONSEUSEREXTERNALIDTAG',pic:''},{av:'AV96UserInfoResponseUserNameTag',fld:'vUSERINFORESPONSEUSERNAMETAG',pic:''},{av:'AV90UserInfoResponseUserFirstNameTag',fld:'vUSERINFORESPONSEUSERFIRSTNAMETAG',pic:''},{av:'AV95UserInfoResponseUserLastNameTag',fld:'vUSERINFORESPONSEUSERLASTNAMETAG',pic:''},{av:'AV91UserInfoResponseUserGenderTag',fld:'vUSERINFORESPONSEUSERGENDERTAG',pic:''},{av:'AV92UserInfoResponseUserGenderValues',fld:'vUSERINFORESPONSEUSERGENDERVALUES',pic:''},{av:'AV87UserInfoResponseUserBirthdayTag',fld:'vUSERINFORESPONSEUSERBIRTHDAYTAG',pic:''},{av:'AV98UserInfoResponseUserURLImageTag',fld:'vUSERINFORESPONSEUSERURLIMAGETAG',pic:''},{av:'AV99UserInfoResponseUserURLProfileTag',fld:'vUSERINFORESPONSEUSERURLPROFILETAG',pic:''},{av:'AV93UserInfoResponseUserLanguageTag',fld:'vUSERINFORESPONSEUSERLANGUAGETAG',pic:''},{av:'AV97UserInfoResponseUserTimeZoneTag',fld:'vUSERINFORESPONSEUSERTIMEZONETAG',pic:''},{av:'AV86UserInfoResponseErrorDescriptionTag',fld:'vUSERINFORESPONSEERRORDESCRIPTIONTAG',pic:''},{av:'AV34FunctionId',fld:'vFUNCTIONID',pic:''},{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERLASTNAMETAG","Visible")',ctrl:'vUSERINFORESPONSEUSERLASTNAMETAG',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBUSERLASTNAMEHELP","Caption")',ctrl:'TBUSERLASTNAMEHELP',prop:'Caption'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV109Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{ctrl:'GRID',prop:'Backcolorstyle'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV40I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'AV109Pgmname',fld:'vPGMNAME',pic:'',hsh:true},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:'I_NORESULTSFOUNDTABLENAME_GRID',prop:'Visible'},{av:'AV40I_LoadCount_Grid',fld:'vI_LOADCOUNT_GRID',pic:'ZZZ9',hsh:true},{av:'AV27Delete_Action',fld:'vDELETE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Tooltiptext")',ctrl:'vDELETE_ACTION',prop:'Tooltiptext'},{av:'AV29DynamicPropName',fld:'vDYNAMICPROPNAME',pic:''},{av:'AV30DynamicPropTag',fld:'vDYNAMICPROPTAG',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Visible")',ctrl:'vDELETE_ACTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPNAME","Enabled")',ctrl:'vDYNAMICPROPNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPTAG","Enabled")',ctrl:'vDYNAMICPROPTAG',prop:'Enabled'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["'E_ADD'"] = [[{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'AV27Delete_Action',fld:'vDELETE_ACTION',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Visible")',ctrl:'vDELETE_ACTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPNAME","Enabled")',ctrl:'vDYNAMICPROPNAME',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPNAME","Visible")',ctrl:'vDYNAMICPROPNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPTAG","Enabled")',ctrl:'vDYNAMICPROPTAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPTAG","Visible")',ctrl:'vDYNAMICPROPTAG',prop:'Visible'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["'E_DELETE'"] = [[{av:'AV44Name',fld:'vNAME',pic:''},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'gx.fn.getCtrlProperty("vDELETE_ACTION","Visible")',ctrl:'vDELETE_ACTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPNAME","Visible")',ctrl:'vDYNAMICPROPNAME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vDYNAMICPROPTAG","Visible")',ctrl:'vDYNAMICPROPTAG',prop:'Visible'},{av:'AV29DynamicPropName',fld:'vDYNAMICPROPNAME',pic:''},{av:'AV30DynamicPropTag',fld:'vDYNAMICPROPTAG',pic:''},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["'E_CONFIRM'"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!'},{av:'AV44Name',fld:'vNAME',pic:''},{av:'AV28Dsc',fld:'vDSC',pic:''},{av:'AV53SmallImageName',fld:'vSMALLIMAGENAME',pic:''},{av:'AV25BigImageName',fld:'vBIGIMAGENAME',pic:''},{av:'AV41Impersonate',fld:'vIMPERSONATE',pic:''},{av:'AV45Oauth20ClientIdTag',fld:'vOAUTH20CLIENTIDTAG',pic:''},{av:'AV46Oauth20ClientIdValue',fld:'vOAUTH20CLIENTIDVALUE',pic:''},{av:'AV47Oauth20ClientSecretTag',fld:'vOAUTH20CLIENTSECRETTAG',pic:''},{av:'AV48Oauth20ClientSecretValue',fld:'vOAUTH20CLIENTSECRETVALUE',pic:''},{av:'AV49Oauth20RedirectURLTag',fld:'vOAUTH20REDIRECTURLTAG',pic:''},{av:'AV50Oauth20RedirectURLValue',fld:'vOAUTH20REDIRECTURLVALUE',pic:''},{av:'AV12AuthorizeURL',fld:'vAUTHORIZEURL',pic:''},{av:'AV17AuthRespTypeTag',fld:'vAUTHRESPTYPETAG',pic:''},{av:'AV18AuthRespTypeValue',fld:'vAUTHRESPTYPEVALUE',pic:''},{av:'AV20AuthScopeTag',fld:'vAUTHSCOPETAG',pic:''},{av:'AV21AuthScopeValue',fld:'vAUTHSCOPEVALUE',pic:''},{av:'AV23AuthStateTag',fld:'vAUTHSTATETAG',pic:''},{av:'AV7AuthAdditionalParameters',fld:'vAUTHADDITIONALPARAMETERS',pic:''},{av:'AV8AuthAdditionalParametersSD',fld:'vAUTHADDITIONALPARAMETERSSD',pic:''},{av:'AV14AuthResponseAccessCodeTag',fld:'vAUTHRESPONSEACCESSCODETAG',pic:''},{av:'AV15AuthResponseErrorDescTag',fld:'vAUTHRESPONSEERRORDESCTAG',pic:''},{av:'AV73TokenURL',fld:'vTOKENURL',pic:''},{ctrl:'vTOKENMETHOD'},{av:'AV63TokenMethod',fld:'vTOKENMETHOD',pic:''},{av:'AV61TokenHeaderKeyTag',fld:'vTOKENHEADERKEYTAG',pic:''},{av:'AV62TokenHeaderKeyValue',fld:'vTOKENHEADERKEYVALUE',pic:''},{av:'AV59TokenGrantTypeTag',fld:'vTOKENGRANTTYPETAG',pic:''},{av:'AV60TokenGrantTypeValue',fld:'vTOKENGRANTTYPEVALUE',pic:''},{av:'AV55TokenAdditionalParameters',fld:'vTOKENADDITIONALPARAMETERS',pic:''},{av:'AV66TokenResponseAccessTokenTag',fld:'vTOKENRESPONSEACCESSTOKENTAG',pic:''},{av:'AV71TokenResponseTokenTypeTag',fld:'vTOKENRESPONSETOKENTYPETAG',pic:''},{av:'AV68TokenResponseExpiresInTag',fld:'vTOKENRESPONSEEXPIRESINTAG',pic:''},{av:'AV70TokenResponseScopeTag',fld:'vTOKENRESPONSESCOPETAG',pic:''},{av:'AV72TokenResponseUserIdTag',fld:'vTOKENRESPONSEUSERIDTAG',pic:''},{av:'AV69TokenResponseRefreshTokenTag',fld:'vTOKENRESPONSEREFRESHTOKENTAG',pic:''},{av:'AV67TokenResponseErrorDescriptionTag',fld:'vTOKENRESPONSEERRORDESCRIPTIONTAG',pic:''},{av:'AV65TokenRefreshTokenURL',fld:'vTOKENREFRESHTOKENURL',pic:''},{av:'AV101UserInfoURL',fld:'vUSERINFOURL',pic:''},{ctrl:'vUSERINFOMETHOD'},{av:'AV85UserInfoMethod',fld:'vUSERINFOMETHOD',pic:''},{av:'AV83UserInfoHeaderKeyTag',fld:'vUSERINFOHEADERKEYTAG',pic:''},{av:'AV84UserInfoHeaderKeyValue',fld:'vUSERINFOHEADERKEYVALUE',pic:''},{av:'AV77UserInfoAccessTokenName',fld:'vUSERINFOACCESSTOKENNAME',pic:''},{av:'AV80UserInfoClientIdName',fld:'vUSERINFOCLIENTIDNAME',pic:''},{av:'AV82UserInfoClientSecretName',fld:'vUSERINFOCLIENTSECRETNAME',pic:''},{av:'AV78UserInfoAdditionalParameters',fld:'vUSERINFOADDITIONALPARAMETERS',pic:''},{av:'AV88UserInfoResponseUserEmailTag',fld:'vUSERINFORESPONSEUSEREMAILTAG',pic:''},{av:'AV100UserInfoResponseUserVerifiedEmailTag',fld:'vUSERINFORESPONSEUSERVERIFIEDEMAILTAG',pic:''},{av:'AV89UserInfoResponseUserExternalIdTag',fld:'vUSERINFORESPONSEUSEREXTERNALIDTAG',pic:''},{av:'AV96UserInfoResponseUserNameTag',fld:'vUSERINFORESPONSEUSERNAMETAG',pic:''},{av:'AV90UserInfoResponseUserFirstNameTag',fld:'vUSERINFORESPONSEUSERFIRSTNAMETAG',pic:''},{av:'AV95UserInfoResponseUserLastNameTag',fld:'vUSERINFORESPONSEUSERLASTNAMETAG',pic:''},{av:'AV91UserInfoResponseUserGenderTag',fld:'vUSERINFORESPONSEUSERGENDERTAG',pic:''},{av:'AV92UserInfoResponseUserGenderValues',fld:'vUSERINFORESPONSEUSERGENDERVALUES',pic:''},{av:'AV87UserInfoResponseUserBirthdayTag',fld:'vUSERINFORESPONSEUSERBIRTHDAYTAG',pic:''},{av:'AV98UserInfoResponseUserURLImageTag',fld:'vUSERINFORESPONSEUSERURLIMAGETAG',pic:''},{av:'AV99UserInfoResponseUserURLProfileTag',fld:'vUSERINFORESPONSEUSERURLPROFILETAG',pic:''},{av:'AV93UserInfoResponseUserLanguageTag',fld:'vUSERINFORESPONSEUSERLANGUAGETAG',pic:''},{av:'AV97UserInfoResponseUserTimeZoneTag',fld:'vUSERINFORESPONSEUSERTIMEZONETAG',pic:''},{av:'AV86UserInfoResponseErrorDescriptionTag',fld:'vUSERINFORESPONSEERRORDESCRIPTIONTAG',pic:''},{av:'AV29DynamicPropName',fld:'vDYNAMICPROPNAME',grid:516,pic:''},{av:'GRID_nFirstRecordOnPage'},{av:'nRC_GXsfl_516',ctrl:'GRID',grid:516,prop:'GridRC'},{av:'AV30DynamicPropTag',fld:'vDYNAMICPROPTAG',grid:516,pic:''},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["'E_CANCEL'"] = [[{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["VUSERINFORESPONSEUSERLASTNAMEGENAUTO.CLICK"] = [[{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'gx.fn.getCtrlProperty("vUSERINFORESPONSEUSERLASTNAMETAG","Visible")',ctrl:'vUSERINFORESPONSEUSERLASTNAMETAG',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBUSERLASTNAMEHELP","Caption")',ctrl:'TBUSERLASTNAMEHELP',prop:'Caption'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["LINESEPARATORTITLE_ADVANCEDCONFIGURATIONLS.CLICK"] = [[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS',prop:'Visible'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS","Class")',ctrl:'LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONLS',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_ADVANCEDCONFIGURATIONLS","Class")',ctrl:'LINESEPARATORHEADER_ADVANCEDCONFIGURATIONLS',prop:'Class'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["LINESEPARATORTITLE_ADVANCEDCONFIGURATIONTOKENLS.CLICK"] = [[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS',prop:'Visible'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS","Class")',ctrl:'LINESEPARATORCONTENT_ADVANCEDCONFIGURATIONTOKENLS',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_ADVANCEDCONFIGURATIONTOKENLS","Class")',ctrl:'LINESEPARATORHEADER_ADVANCEDCONFIGURATIONTOKENLS',prop:'Class'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["LINESEPARATORTITLE_ADVANCEDUSERCONFIGURATION.CLICK"] = [[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION',prop:'Visible'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION","Visible")',ctrl:'LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION","Class")',ctrl:'LINESEPARATORCONTENT_ADVANCEDUSERCONFIGURATION',prop:'Class'},{av:'gx.fn.getCtrlProperty("LINESEPARATORHEADER_ADVANCEDUSERCONFIGURATION","Class")',ctrl:'LINESEPARATORHEADER_ADVANCEDUSERCONFIGURATION',prop:'Class'},{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["VALIDV_FUNCTIONID"] = [[{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["VALIDV_TOKENMETHOD"] = [[{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.EvtParms["VALIDV_USERINFOMETHOD"] = [[{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}],[{av:'AV42IsEnable',fld:'vISENABLE',pic:''},{av:'AV16AuthRespTypeInclude',fld:'vAUTHRESPTYPEINCLUDE',pic:''},{av:'AV19AuthScopeInclude',fld:'vAUTHSCOPEINCLUDE',pic:''},{av:'AV22AuthStateInclude',fld:'vAUTHSTATEINCLUDE',pic:''},{av:'AV9AuthClientIdInclude',fld:'vAUTHCLIENTIDINCLUDE',pic:''},{av:'AV10AuthClientSecretInclude',fld:'vAUTHCLIENTSECRETINCLUDE',pic:''},{av:'AV13AuthRedirURLInclide',fld:'vAUTHREDIRURLINCLIDE',pic:''},{av:'AV58TokenGrantTypeInclude',fld:'vTOKENGRANTTYPEINCLUDE',pic:''},{av:'AV54TokenAccessCodeInclude',fld:'vTOKENACCESSCODEINCLUDE',pic:''},{av:'AV56TokenCliIdInclude',fld:'vTOKENCLIIDINCLUDE',pic:''},{av:'AV57TokenCliSecretInclude',fld:'vTOKENCLISECRETINCLUDE',pic:''},{av:'AV64TokenRedirectURLInclude',fld:'vTOKENREDIRECTURLINCLUDE',pic:''},{av:'AV24AutovalidateExternalTokenAndRefresh',fld:'vAUTOVALIDATEEXTERNALTOKENANDREFRESH',pic:''},{av:'AV76UserInfoAccessTokenInclude',fld:'vUSERINFOACCESSTOKENINCLUDE',pic:''},{av:'AV79UserInfoClientIdInclude',fld:'vUSERINFOCLIENTIDINCLUDE',pic:''},{av:'AV81UserInfoClientSecretInclude',fld:'vUSERINFOCLIENTSECRETINCLUDE',pic:''},{av:'AV102UserInfoUserIdInclude',fld:'vUSERINFOUSERIDINCLUDE',pic:''},{av:'AV94UserInfoResponseUserLastNameGenAuto',fld:'vUSERINFORESPONSEUSERLASTNAMEGENAUTO',pic:''}]];
   this.setVCMap("AV26CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV109Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV40I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV104TypeId", "vTYPEID", 0, "char", 30, 0);
   this.setVCMap("AV26CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV109Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV40I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV26CurrentPage_Grid", "vCURRENTPAGE_GRID", 0, "int", 4, 0);
   this.setVCMap("AV109Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV40I_LoadCount_Grid", "vI_LOADCOUNT_GRID", 0, "int", 4, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   GridContainer.addRefreshingVar({rfrVar:"AV26CurrentPage_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"AV109Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV40I_LoadCount_Grid"});
   GridContainer.addRefreshingVar({rfrVar:"Gx_mode"});
   GridContainer.addRefreshingParm({rfrVar:"AV26CurrentPage_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"AV109Pgmname"});
   GridContainer.addRefreshingParm({rfrVar:"AV40I_LoadCount_Grid"});
   GridContainer.addRefreshingParm({rfrVar:"Gx_mode"});
   GridContainer.addRefreshingParm(this.GXValidFnc[37]);
   GridContainer.addRefreshingParm(this.GXValidFnc[117]);
   GridContainer.addRefreshingParm(this.GXValidFnc[133]);
   GridContainer.addRefreshingParm(this.GXValidFnc[149]);
   GridContainer.addRefreshingParm(this.GXValidFnc[160]);
   GridContainer.addRefreshingParm(this.GXValidFnc[165]);
   GridContainer.addRefreshingParm(this.GXValidFnc[170]);
   GridContainer.addRefreshingParm(this.GXValidFnc[236]);
   GridContainer.addRefreshingParm(this.GXValidFnc[252]);
   GridContainer.addRefreshingParm(this.GXValidFnc[257]);
   GridContainer.addRefreshingParm(this.GXValidFnc[262]);
   GridContainer.addRefreshingParm(this.GXValidFnc[267]);
   GridContainer.addRefreshingParm(this.GXValidFnc[326]);
   GridContainer.addRefreshingParm(this.GXValidFnc[370]);
   GridContainer.addRefreshingParm(this.GXValidFnc[381]);
   GridContainer.addRefreshingParm(this.GXValidFnc[392]);
   GridContainer.addRefreshingParm(this.GXValidFnc[403]);
   GridContainer.addRefreshingParm(this.GXValidFnc[445]);
   this.Initialize( );
});
