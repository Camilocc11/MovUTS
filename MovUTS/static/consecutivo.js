gx.evt.autoSkip=!1;gx.define("consecutivo",!0,function(n){var t,i;this.ServerClass="consecutivo";this.PackageName="com.movuts";this.setObjectType("trn");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7ConCod=gx.fn.getControlValue("vCONCOD");this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV8TrnContext=gx.fn.getControlValue("vTRNCONTEXT");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV10Navigation=gx.fn.getControlValue("vNAVIGATION")};this.Valid_Concod=function(){return this.validCliEvt("Valid_Concod",0,function(){try{var n=gx.util.balloon.getNew("CONCOD");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Condes=function(){return this.validCliEvt("Valid_Condes",0,function(){try{var n=gx.util.balloon.getNew("CONDES");if(this.AnyError=0,""==this.A6ConDes)try{n.setError(gx.text.format("%1 es obligatorio","Descripción","","","","","","","",""));this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e12022_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e13022_client=function(){return this.executeServerEvent("'DOCANCEL'",!1,null,!1,!1)};this.e14022_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e15022_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,36,38,39,40];this.GXLastCtrlId=40;this.K2BCONTROLBEAUTIFY1Container=gx.uc.getNew(this,41,18,"K2BControlBeautify",this.CmpContext+"K2BCONTROLBEAUTIFY1Container","K2bcontrolbeautify1","K2BCONTROLBEAUTIFY1");i=this.K2BCONTROLBEAUTIFY1Container;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("UpdateCheckboxes","Updatecheckboxes",!0,"bool");i.setProp("UpdateSelects","Updateselects",!0,"bool");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"K2BESMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"K2BESERRVIEWERCELL",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"K2BESDATAAREACONTAINERCELL",grid:0};t[9]={id:9,fld:"K2BABSTRACTTABLEDATAAREACONTAINER",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"K2BTRNFORMMAINTABLECELL",grid:0};t[12]={id:12,fld:"TABLEATTRIBUTESINFORMSECTION1",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[15]={id:15,fld:"K2BTOOLSTABLE_ATTRIBUTECONTAINERCONCOD",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Concod,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONCOD",gxz:"Z5ConCod",gxold:"O5ConCod",gxvar:"A5ConCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A5ConCod=n)},v2z:function(n){n!==undefined&&(gx.O.Z5ConCod=n)},v2c:function(){gx.fn.setControlValue("CONCOD",gx.O.A5ConCod,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A5ConCod=this.val())},val:function(){return gx.fn.getControlValue("CONCOD")},nac:function(){return!(""==this.AV7ConCod)}};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"K2BTOOLSTABLE_ATTRIBUTECONTAINERCONDES",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Condes,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONDES",gxz:"Z6ConDes",gxold:"O6ConDes",gxvar:"A6ConDes",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A6ConDes=n)},v2z:function(n){n!==undefined&&(gx.O.Z6ConDes=n)},v2c:function(){gx.fn.setControlValue("CONDES",gx.O.A6ConDes,0)},c2v:function(){this.val()!==undefined&&(gx.O.A6ConDes=this.val())},val:function(){return gx.fn.getControlValue("CONDES")},nac:gx.falseFn};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"K2BTOOLSTABLE_ATTRIBUTECONTAINERCONNUE",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CONNUE",gxz:"Z10ConNue",gxold:"O10ConNue",gxvar:"A10ConNue",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A10ConNue=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z10ConNue=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("CONNUE",gx.O.A10ConNue,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A10ConNue=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("CONNUE",".")},nac:gx.falseFn};this.declareDomainHdlr(30,function(){});t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"K2BESACTIONCONTAINERCELL",grid:0};t[33]={id:33,fld:"ACTIONSCONTAINERBUTTONS",grid:0};t[36]={id:36,fld:"ENTER",grid:0,evt:"e14022_client",std:"ENTER"};t[38]={id:38,fld:"CANCEL",grid:0,evt:"e13022_client"};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"K2BESCONTROLBEAUFITYCELL",grid:0};this.A5ConCod="";this.Z5ConCod="";this.O5ConCod="";this.A6ConDes="";this.Z6ConDes="";this.O6ConDes="";this.A10ConNue=0;this.Z10ConNue=0;this.O10ConNue=0;this.AV16StandardActivityType="";this.AV17UserActivityType="";this.AV25Pgmname="";this.AV18IsAuthorized=!1;this.AV12Context={UserCode:"",UserUUID:"",UserFirstName:"",UserLastName:""};this.AV13BtnCaption="";this.AV14BtnTooltip="";this.AV8TrnContext={TransactionName:"",CallerUrl:"",EntityManagerName:"",EntityManagerNextTaskCode:"",EntityManagerNextTaskMode:"",EntityManagerEncryptUrlParameters:"",ReturnMode:"",SavePK:!1,AfterInsert:{AfterTrn:0,ObjectToLink:"",Mode:"",ExtraParameter:""},AfterUpdate:{AfterTrn:0,ObjectToLink:"",Mode:"",ExtraParameter:""},AfterDelete:{AfterTrn:0,ObjectToLink:"",Mode:"",ExtraParameter:""},Attributes:[]};this.AV7ConCod="";this.A5ConCod="";this.A6ConDes="";this.A10ConNue=0;this.Gx_mode="";this.AV10Navigation={AfterTrn:0,ObjectToLink:"",Mode:"",ExtraParameter:""};this.Events={e12022_client:["AFTER TRN",!0],e13022_client:["'DOCANCEL'",!0],e14022_client:["ENTER",!0],e15022_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{sPrefix:!0},{sSFPrefix:!0},{sCompEvt:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV7ConCod",fld:"vCONCOD",pic:""}],[]];this.EvtParms.REFRESH=[[{av:"AV8TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV10Navigation",fld:"vNAVIGATION",pic:"",hsh:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[]];this.EvtParms.START=[[{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV16StandardActivityType",fld:"vSTANDARDACTIVITYTYPE",pic:""},{av:"AV17UserActivityType",fld:"vUSERACTIVITYTYPE",pic:""},{av:"AV25Pgmname",fld:"vPGMNAME",pic:""}],[{av:"AV16StandardActivityType",fld:"vSTANDARDACTIVITYTYPE",pic:""},{av:"AV17UserActivityType",fld:"vUSERACTIVITYTYPE",pic:""},{av:"AV18IsAuthorized",fld:"vISAUTHORIZED",pic:""},{av:"AV12Context",fld:"vCONTEXT",pic:""},{av:"AV13BtnCaption",fld:"vBTNCAPTION",pic:""},{av:"AV14BtnTooltip",fld:"vBTNTOOLTIP",pic:""},{ctrl:"ENTER",prop:"Caption"},{ctrl:"ENTER",prop:"Tooltiptext"},{ctrl:"ENTER",prop:"Visible"},{ctrl:"CANCEL",prop:"Visible"},{av:"AV8TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{ctrl:"FORM",prop:"Caption"},{av:'gx.fn.getCtrlProperty("CONDES","Class")',ctrl:"CONDES",prop:"Class"}]];this.EvtParms["AFTER TRN"]=[[{av:"AV8TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"A5ConCod",fld:"CONCOD",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"A6ConDes",fld:"CONDES",pic:""},{av:"AV10Navigation",fld:"vNAVIGATION",pic:"",hsh:!0}],[{av:"AV10Navigation",fld:"vNAVIGATION",pic:"",hsh:!0},{av:"AV8TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"A5ConCod",fld:"CONCOD",pic:""}]];this.EvtParms["'DOCANCEL'"]=[[{av:"AV8TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_CONCOD=[[],[]];this.EvtParms.VALID_CONDES=[[{av:"A6ConDes",fld:"CONDES",pic:""}],[{av:"A6ConDes",fld:"CONDES",pic:""}]];this.EnterCtrl=["ENTER"];this.setVCMap("AV7ConCod","vCONCOD",0,"svchar",20,0);this.setVCMap("AV25Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV8TrnContext","vTRNCONTEXT",0,"K2BTrnContext",0,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV10Navigation","vNAVIGATION",0,"K2BTrnNavigation",0,0);this.Initialize()});gx.setExecutableComponent("consecutivo")