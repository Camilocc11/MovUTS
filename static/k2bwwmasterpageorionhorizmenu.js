gx.evt.autoSkip=!1;gx.define("k2bwwmasterpageorionhorizmenu",!1,function(){var n,i,t;this.ServerClass="k2bwwmasterpageorionhorizmenu";this.PackageName="com.movuts";this.setObjectType("web");this.IsMasterPage=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV21Pgmname=gx.fn.getControlValue("vPGMNAME_MPAGE")};this.e141j1_client=function(){return this.clearMessages(),this.call("com.movuts.k2btoolssearchresultorion",[this.AV13SearchCriteria,""]),this.refreshOutputs([{av:"AV13SearchCriteria",fld:"vSEARCHCRITERIA_MPAGE",pic:""}]),gx.$.Deferred().resolve()};this.e111j1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("MENUCONTAINER_MPAGE","Class")=="K2BToolsMenuContainerInvisibleCompact"?(gx.fn.setCtrlProperty("MENUCONTAINER_MPAGE","Class","K2BToolsMenuContainerVisibleCompact"),gx.fn.setCtrlProperty("MENUTOGGLE_MPAGE","Class",gx.fn.getCtrlProperty("MENUTOGGLE_MPAGE","Class")+" K2BToolsButton_BtnToggleActive")):(gx.fn.setCtrlProperty("MENUCONTAINER_MPAGE","Class","K2BToolsMenuContainerInvisibleCompact"),gx.fn.setCtrlProperty("MENUTOGGLE_MPAGE","Class","K2BToolsButton_BtnToggle")),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("MENUCONTAINER_MPAGE","Class")',ctrl:"MENUCONTAINER_MPAGE",prop:"Class"},{ctrl:"MENUTOGGLE_MPAGE",prop:"Class"}]),gx.$.Deferred().resolve()};this.e151j1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("MYACCOUNTMENU_MPAGE","Visible")==!1?gx.fn.setCtrlProperty("MYACCOUNTMENU_MPAGE","Visible",!0):gx.fn.setCtrlProperty("MYACCOUNTMENU_MPAGE","Visible",!1),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("MYACCOUNTMENU_MPAGE","Visible")',ctrl:"MYACCOUNTMENU_MPAGE",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e161j1_client=function(){return this.clearMessages(),this.call("com.movuts.k2bchangepassword",[]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e121j1_client=function(){return this.clearMessages(),this.call("com.movuts.k2bhome",[]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e131j1_client=function(){return this.clearMessages(),this.call("com.movuts.k2bhome",[]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e191j2_client=function(){return this.executeServerEvent("SIGNOUT_MPAGE",!0,null,!1,!1)};this.e211j2_client=function(){return this.executeServerEvent("ENTER_MPAGE",!0,null,!1,!1)};this.e221j2_client=function(){return this.executeServerEvent("CANCEL_MPAGE",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,44,45,46,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65];this.GXLastCtrlId=65;this.K2BHORIZONTALMENU_MPAGEContainer=gx.uc.getNew(this,18,0,"K2BHorizontalMenu","K2BHORIZONTALMENU_MPAGEContainer","K2bhorizontalmenu","K2BHORIZONTALMENU_MPAGE");i=this.K2BHORIZONTALMENU_MPAGEContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("IncludeSearch","Includesearch",!0,"bool");i.setProp("SearchInviteMessage","Searchinvitemessage","Search","str");i.addV2CFunction("AV9MenuItems","vMENUITEMS_MPAGE","SetMenuItems");i.addC2VFunction(function(n){n.ParentObject.AV9MenuItems=n.GetMenuItems();gx.fn.setControlValue("vMENUITEMS_MPAGE",n.ParentObject.AV9MenuItems)});i.setProp("SelectedItem","Selecteditem","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.K2BACCORDIONMENU_MPAGEContainer=gx.uc.getNew(this,43,26,"K2BAccordionMenu","K2BACCORDIONMENU_MPAGEContainer","K2baccordionmenu","K2BACCORDIONMENU_MPAGE");t=this.K2BACCORDIONMENU_MPAGEContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("IncludeSearch","Includesearch",!0,"bool");t.setProp("SearchInviteMessage","Searchinvitemessage","Search","str");t.setProp("Toggle","Toggle",!0,"bool");t.setProp("DoubleTapGo","Doubletapgo",!1,"bool");t.addV2CFunction("AV9MenuItems","vMENUITEMS_MPAGE","SetMenuItems");t.addC2VFunction(function(n){n.ParentObject.AV9MenuItems=n.GetMenuItems();gx.fn.setControlValue("vMENUITEMS_MPAGE",n.ParentObject.AV9MenuItems)});t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"HEADER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"TOPSTART",grid:0};n[9]={id:9,fld:"",grid:0};n[10]={id:10,fld:"MENUTOGGLE",grid:0,evt:"e111j1_client"};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"APPLICATIONICON",grid:0,evt:"e121j1_client"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"APPLICATIONNAME",format:0,grid:0,evt:"e131j1_client"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"TOPMIDDLE",grid:0};n[17]={id:17,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"TOPEND",grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"UNIVERSALSEARCH",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"char",len:150,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSEARCHCRITERIA_MPAGE",gxz:"ZV13SearchCriteria",gxold:"OV13SearchCriteria",gxvar:"AV13SearchCriteria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13SearchCriteria=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13SearchCriteria=n)},v2c:function(){gx.fn.setControlValue("vSEARCHCRITERIA_MPAGE",gx.O.AV13SearchCriteria,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV13SearchCriteria=this.val())},val:function(){return gx.fn.getControlValue("vSEARCHCRITERIA_MPAGE")},nac:gx.falseFn};this.declareDomainHdlr(26,function(){});n[27]={id:27,fld:"IMAGE2",grid:0,evt:"e141j1_client"};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"MYACCOUNT",grid:0};n[30]={id:30,fld:"USERNAMETEXTBLOCK",format:0,grid:0,evt:"e151j1_client"};n[31]={id:31,fld:"USERINITIALSTEXTBLOCKSMALL",format:0,grid:0,evt:"e151j1_client"};n[32]={id:32,fld:"",grid:0};n[33]={id:33,lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERAVATARSMALL_MPAGE",gxz:"ZV18UserAvatarSmall",gxold:"OV18UserAvatarSmall",gxvar:"AV18UserAvatarSmall",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV18UserAvatarSmall=n)},v2z:function(n){n!==undefined&&(gx.O.ZV18UserAvatarSmall=n)},v2c:function(){gx.fn.setMultimediaValue("vUSERAVATARSMALL_MPAGE",gx.O.AV18UserAvatarSmall,gx.O.AV22Useravatarsmall_GXI)},c2v:function(){gx.O.AV22Useravatarsmall_GXI=this.val_GXI();this.val()!==undefined&&(gx.O.AV18UserAvatarSmall=this.val())},val:function(){return gx.fn.getBlobValue("vUSERAVATARSMALL_MPAGE")},val_GXI:function(){return gx.fn.getControlValue("vUSERAVATARSMALL_GXI_MPAGE")},gxvar_GXI:"AV22Useravatarsmall_GXI",nac:gx.falseFn,evt:"e151j1_client"};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"MIDDLE",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"CENTERSTART",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"MENUCONTAINER",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"CENTERMIDDLE",grid:0};n[46]={id:46,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"CENTEREND",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"MYACCOUNTMENU",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"SECTION1",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERAVATAR_MPAGE",gxz:"ZV17UserAvatar",gxold:"OV17UserAvatar",gxvar:"AV17UserAvatar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV17UserAvatar=n)},v2z:function(n){n!==undefined&&(gx.O.ZV17UserAvatar=n)},v2c:function(){gx.fn.setMultimediaValue("vUSERAVATAR_MPAGE",gx.O.AV17UserAvatar,gx.O.AV23Useravatar_GXI)},c2v:function(){gx.O.AV23Useravatar_GXI=this.val_GXI();this.val()!==undefined&&(gx.O.AV17UserAvatar=this.val())},val:function(){return gx.fn.getBlobValue("vUSERAVATAR_MPAGE")},val_GXI:function(){return gx.fn.getControlValue("vUSERAVATAR_GXI_MPAGE")},gxvar_GXI:"AV23Useravatar_GXI",nac:gx.falseFn};n[57]={id:57,fld:"USERINITIALSTEXTBLOCK",format:0,grid:0};n[58]={id:58,fld:"USERNAME",format:0,grid:0};n[59]={id:59,fld:"USEREMAIL",format:0,grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"CHANGEPASSWORD",format:0,grid:0,evt:"e161j1_client"};n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"SIGNOUT",format:0,grid:0,evt:"e191j2_client"};this.AV13SearchCriteria="";this.ZV13SearchCriteria="";this.OV13SearchCriteria="";this.AV22Useravatarsmall_GXI="";this.AV18UserAvatarSmall="";this.ZV18UserAvatarSmall="";this.OV18UserAvatarSmall="";this.AV23Useravatar_GXI="";this.AV17UserAvatar="";this.ZV17UserAvatar="";this.OV17UserAvatar="";this.AV9MenuItems=[];this.AV13SearchCriteria="";this.AV18UserAvatarSmall="";this.AV17UserAvatar="";this.AV21Pgmname="";this.Events={e191j2_client:["SIGNOUT_MPAGE",!0],e211j2_client:["ENTER_MPAGE",!0],e221j2_client:["CANCEL_MPAGE",!0],e141j1_client:["DOSEARCH_MPAGE",!1],e111j1_client:["TOGGLEMENU_MPAGE",!1],e151j1_client:["OPENTABLE_MPAGE",!1],e161j1_client:["CHANGEPASSWORD_MPAGE",!1],e121j1_client:["APPLICATIONICON_MPAGE.CLICK_MPAGE",!1],e131j1_client:["APPLICATIONNAME_MPAGE.CLICK_MPAGE",!1]};this.EvtParms.REFRESH_MPAGE=[[{av:"AV21Pgmname",fld:"vPGMNAME_MPAGE",pic:"",hsh:!0}],[{av:"AV13SearchCriteria",fld:"vSEARCHCRITERIA_MPAGE",pic:""}]];this.EvtParms.START_MPAGE=[[{av:"AV21Pgmname",fld:"vPGMNAME_MPAGE",pic:"",hsh:!0},{av:"AV23Useravatar_GXI",fld:"vUSERAVATAR_GXI_MPAGE",pic:""}],[{av:'gx.fn.getCtrlProperty("MYACCOUNTMENU_MPAGE","Visible")',ctrl:"MYACCOUNTMENU_MPAGE",prop:"Visible"},{av:"AV9MenuItems",fld:"vMENUITEMS_MPAGE",pic:""},{av:"AV13SearchCriteria",fld:"vSEARCHCRITERIA_MPAGE",pic:""},{av:'gx.fn.getCtrlProperty("UNIVERSALSEARCH_MPAGE","Visible")',ctrl:"UNIVERSALSEARCH_MPAGE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("UNIVERSALSEARCH_MPAGE","Class")',ctrl:"UNIVERSALSEARCH_MPAGE",prop:"Class"},{av:"AV17UserAvatar",fld:"vUSERAVATAR_MPAGE",pic:""},{av:"AV18UserAvatarSmall",fld:"vUSERAVATARSMALL_MPAGE",pic:""},{av:'gx.fn.getCtrlProperty("USEREMAIL_MPAGE","Caption")',ctrl:"USEREMAIL_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("USERNAME_MPAGE","Caption")',ctrl:"USERNAME_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("USERNAMETEXTBLOCK_MPAGE","Caption")',ctrl:"USERNAMETEXTBLOCK_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("USERINITIALSTEXTBLOCK_MPAGE","Caption")',ctrl:"USERINITIALSTEXTBLOCK_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("USERINITIALSTEXTBLOCKSMALL_MPAGE","Caption")',ctrl:"USERINITIALSTEXTBLOCKSMALL_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("USERINITIALSTEXTBLOCK_MPAGE","Visible")',ctrl:"USERINITIALSTEXTBLOCK_MPAGE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("USERINITIALSTEXTBLOCKSMALL_MPAGE","Visible")',ctrl:"USERINITIALSTEXTBLOCKSMALL_MPAGE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vUSERAVATAR_MPAGE","Visible")',ctrl:"vUSERAVATAR_MPAGE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vUSERAVATARSMALL_MPAGE","Visible")',ctrl:"vUSERAVATARSMALL_MPAGE",prop:"Visible"}]];this.EvtParms.DOSEARCH_MPAGE=[[{av:"AV13SearchCriteria",fld:"vSEARCHCRITERIA_MPAGE",pic:""}],[{av:"AV13SearchCriteria",fld:"vSEARCHCRITERIA_MPAGE",pic:""}]];this.EvtParms.TOGGLEMENU_MPAGE=[[{av:'gx.fn.getCtrlProperty("MENUCONTAINER_MPAGE","Class")',ctrl:"MENUCONTAINER_MPAGE",prop:"Class"},{ctrl:"MENUTOGGLE_MPAGE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("MENUCONTAINER_MPAGE","Class")',ctrl:"MENUCONTAINER_MPAGE",prop:"Class"},{ctrl:"MENUTOGGLE_MPAGE",prop:"Class"}]];this.EvtParms.OPENTABLE_MPAGE=[[{av:'gx.fn.getCtrlProperty("MYACCOUNTMENU_MPAGE","Visible")',ctrl:"MYACCOUNTMENU_MPAGE",prop:"Visible"}],[{av:'gx.fn.getCtrlProperty("MYACCOUNTMENU_MPAGE","Visible")',ctrl:"MYACCOUNTMENU_MPAGE",prop:"Visible"}]];this.EvtParms.CHANGEPASSWORD_MPAGE=[[],[]];this.EvtParms.SIGNOUT_MPAGE=[[],[]];this.EvtParms["APPLICATIONICON_MPAGE.CLICK_MPAGE"]=[[],[]];this.EvtParms["APPLICATIONNAME_MPAGE.CLICK_MPAGE"]=[[],[]];this.setVCMap("AV21Pgmname","vPGMNAME_MPAGE",0,"char",129,0);this.Initialize();this.setComponent({id:"NOTIFICATIONSCOMPONENT",GXClass:"k2bt_notificationsviewer",Prefix:"MPW0022",lvl:1})});gx.wi(function(){gx.createMasterPage(k2bwwmasterpageorionhorizmenu)})