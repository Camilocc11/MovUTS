gx.evt.autoSkip=!1;gx.define("vehiculo",!0,function(n){var t,i;this.ServerClass="vehiculo";this.PackageName="com.movuts";this.setObjectType("trn");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7UsuSec=gx.fn.getIntegerValue("vUSUSEC",".");this.AV8VehSec=gx.fn.getIntegerValue("vVEHSEC",".");this.AV26Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV9TrnContext=gx.fn.getControlValue("vTRNCONTEXT");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV11Navigation=gx.fn.getControlValue("vNAVIGATION")};this.Valid_Ususec=function(){return this.validSrvEvt("valid_Ususec",0).then(function(n){return n}.closure(this))};this.Valid_Vehsec=function(){return this.validCliEvt("Valid_Vehsec",0,function(){try{var n=gx.util.balloon.getNew("VEHSEC");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Vehdes=function(){return this.validCliEvt("Valid_Vehdes",0,function(){try{var n=gx.util.balloon.getNew("VEHDES");if(this.AnyError=0,""==this.A27VehDes)try{n.setError(gx.text.format("%1 es obligatorio","Descripción","","","","","","","",""));this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Vehpla=function(){return this.validSrvEvt("valid_Vehpla",0).then(function(n){return n}.closure(this))};this.e12052_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e13052_client=function(){return this.executeServerEvent("'DOCANCEL'",!1,null,!1,!1)};this.e14055_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e15055_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,47,49,50,51,53];this.GXLastCtrlId=53;this.K2BCONTROLBEAUTIFY1Container=gx.uc.getNew(this,52,18,"K2BControlBeautify",this.CmpContext+"K2BCONTROLBEAUTIFY1Container","K2bcontrolbeautify1","K2BCONTROLBEAUTIFY1");i=this.K2BCONTROLBEAUTIFY1Container;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("UpdateCheckboxes","Updatecheckboxes",!0,"bool");i.setProp("UpdateSelects","Updateselects",!0,"bool");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"K2BESMAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"K2BESERRVIEWERCELL",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"K2BESDATAAREACONTAINERCELL",grid:0};t[9]={id:9,fld:"K2BABSTRACTTABLEDATAAREACONTAINER",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"K2BTRNFORMMAINTABLECELL",grid:0};t[12]={id:12,fld:"TABLEATTRIBUTESINFORMSECTION1",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[15]={id:15,fld:"K2BTOOLSTABLE_ATTRIBUTECONTAINERUSUSEC",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Ususec,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUSEC",gxz:"Z11UsuSec",gxold:"O11UsuSec",gxvar:"A11UsuSec",ucs:[],op:[],ip:[18],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A11UsuSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z11UsuSec=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("USUSEC",gx.O.A11UsuSec,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A11UsuSec=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("USUSEC",".")},nac:function(){return!(0==this.AV7UsuSec)}};this.declareDomainHdlr(18,function(){});t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"K2BTOOLSTABLE_ATTRIBUTECONTAINERVEHSEC",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Vehsec,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHSEC",gxz:"Z26VehSec",gxold:"O26VehSec",gxvar:"A26VehSec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A26VehSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z26VehSec=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("VEHSEC",gx.O.A26VehSec,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A26VehSec=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("VEHSEC",".")},nac:function(){return!(0==this.AV8VehSec)}};this.declareDomainHdlr(24,function(){});t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"K2BTOOLSTABLE_ATTRIBUTECONTAINERVEHDES",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Vehdes,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHDES",gxz:"Z27VehDes",gxold:"O27VehDes",gxvar:"A27VehDes",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A27VehDes=n)},v2z:function(n){n!==undefined&&(gx.O.Z27VehDes=n)},v2c:function(){gx.fn.setControlValue("VEHDES",gx.O.A27VehDes,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A27VehDes=this.val())},val:function(){return gx.fn.getControlValue("VEHDES")},nac:gx.falseFn};this.declareDomainHdlr(30,function(){});t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"K2BTOOLSTABLE_ATTRIBUTECONTAINERVEHPLA",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,lvl:0,type:"svchar",len:7,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Vehpla,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHPLA",gxz:"Z28VehPla",gxold:"O28VehPla",gxvar:"A28VehPla",ucs:[],op:[36],ip:[24,18,36],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A28VehPla=n)},v2z:function(n){n!==undefined&&(gx.O.Z28VehPla=n)},v2c:function(){gx.fn.setControlValue("VEHPLA",gx.O.A28VehPla,0)},c2v:function(){this.val()!==undefined&&(gx.O.A28VehPla=this.val())},val:function(){return gx.fn.getControlValue("VEHPLA")},nac:gx.falseFn};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"K2BTOOLSTABLE_ATTRIBUTECONTAINERVEHPUE",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"",grid:0};t[41]={id:41,lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"VEHPUE",gxz:"Z29VehPue",gxold:"O29VehPue",gxvar:"A29VehPue",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A29VehPue=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z29VehPue=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("VEHPUE",gx.O.A29VehPue,0)},c2v:function(){this.val()!==undefined&&(gx.O.A29VehPue=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("VEHPUE",".")},nac:gx.falseFn};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"K2BESACTIONCONTAINERCELL",grid:0};t[44]={id:44,fld:"ACTIONSCONTAINERBUTTONS",grid:0};t[47]={id:47,fld:"ENTER",grid:0,evt:"e14055_client",std:"ENTER"};t[49]={id:49,fld:"CANCEL",grid:0,evt:"e13052_client"};t[50]={id:50,fld:"",grid:0};t[51]={id:51,fld:"K2BESCONTROLBEAUFITYCELL",grid:0};t[53]={id:53,fld:"PROMPT_11",grid:5};this.A11UsuSec=0;this.Z11UsuSec=0;this.O11UsuSec=0;this.A26VehSec=0;this.Z26VehSec=0;this.O26VehSec=0;this.A27VehDes="";this.Z27VehDes="";this.O27VehDes="";this.A28VehPla="";this.Z28VehPla="";this.O28VehPla="";this.A29VehPue=0;this.Z29VehPue=0;this.O29VehPue=0;this.AV17StandardActivityType="";this.AV18UserActivityType="";this.AV26Pgmname="";this.AV19IsAuthorized=!1;this.AV13Context={UserCode:"",UserUUID:"",UserFirstName:"",UserLastName:""};this.AV14BtnCaption="";this.AV15BtnTooltip="";this.AV9TrnContext={TransactionName:"",CallerUrl:"",EntityManagerName:"",EntityManagerNextTaskCode:"",EntityManagerNextTaskMode:"",EntityManagerEncryptUrlParameters:"",ReturnMode:"",SavePK:!1,AfterInsert:{AfterTrn:0,ObjectToLink:"",Mode:"",ExtraParameter:""},AfterUpdate:{AfterTrn:0,ObjectToLink:"",Mode:"",ExtraParameter:""},AfterDelete:{AfterTrn:0,ObjectToLink:"",Mode:"",ExtraParameter:""},Attributes:[]};this.AV7UsuSec=0;this.AV8VehSec=0;this.A11UsuSec=0;this.A26VehSec=0;this.A27VehDes="";this.A28VehPla="";this.A29VehPue=0;this.Gx_mode="";this.AV11Navigation={AfterTrn:0,ObjectToLink:"",Mode:"",ExtraParameter:""};this.Events={e12052_client:["AFTER TRN",!0],e13052_client:["'DOCANCEL'",!0],e14055_client:["ENTER",!0],e15055_client:["CANCEL",!0]};this.EvtParms.ENTER=[[{postForm:!0},{sPrefix:!0},{sSFPrefix:!0},{sCompEvt:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV7UsuSec",fld:"vUSUSEC",pic:"ZZZZZZZZZ9"},{av:"AV8VehSec",fld:"vVEHSEC",pic:"ZZZZZZZZZ9"}],[]];this.EvtParms.REFRESH=[[{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"AV11Navigation",fld:"vNAVIGATION",pic:"",hsh:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[]];this.EvtParms.START=[[{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV17StandardActivityType",fld:"vSTANDARDACTIVITYTYPE",pic:""},{av:"AV18UserActivityType",fld:"vUSERACTIVITYTYPE",pic:""},{av:"AV26Pgmname",fld:"vPGMNAME",pic:""}],[{av:"AV17StandardActivityType",fld:"vSTANDARDACTIVITYTYPE",pic:""},{av:"AV18UserActivityType",fld:"vUSERACTIVITYTYPE",pic:""},{av:"AV19IsAuthorized",fld:"vISAUTHORIZED",pic:""},{av:"AV13Context",fld:"vCONTEXT",pic:""},{av:"AV14BtnCaption",fld:"vBTNCAPTION",pic:""},{av:"AV15BtnTooltip",fld:"vBTNTOOLTIP",pic:""},{ctrl:"ENTER",prop:"Caption"},{ctrl:"ENTER",prop:"Tooltiptext"},{ctrl:"ENTER",prop:"Visible"},{ctrl:"CANCEL",prop:"Visible"},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{ctrl:"FORM",prop:"Caption"},{av:'gx.fn.getCtrlProperty("K2BTOOLSTABLE_ATTRIBUTECONTAINERUSUSEC","Visible")',ctrl:"K2BTOOLSTABLE_ATTRIBUTECONTAINERUSUSEC",prop:"Visible"},{av:'gx.fn.getCtrlProperty("K2BTOOLSTABLE_ATTRIBUTECONTAINERVEHSEC","Visible")',ctrl:"K2BTOOLSTABLE_ATTRIBUTECONTAINERVEHSEC",prop:"Visible"},{av:'gx.fn.getCtrlProperty("VEHDES","Class")',ctrl:"VEHDES",prop:"Class"},{av:'gx.fn.getCtrlProperty("VEHPLA","Class")',ctrl:"VEHPLA",prop:"Class"}]];this.EvtParms["AFTER TRN"]=[[{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"A11UsuSec",fld:"USUSEC",pic:"ZZZZZZZZZ9"},{av:"A26VehSec",fld:"VEHSEC",pic:"ZZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"A28VehPla",fld:"VEHPLA",pic:""},{av:"AV11Navigation",fld:"vNAVIGATION",pic:"",hsh:!0}],[{av:"AV11Navigation",fld:"vNAVIGATION",pic:"",hsh:!0},{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0},{av:"A26VehSec",fld:"VEHSEC",pic:"ZZZZZZZZZ9"},{av:"A11UsuSec",fld:"USUSEC",pic:"ZZZZZZZZZ9"}]];this.EvtParms["'DOCANCEL'"]=[[{av:"AV9TrnContext",fld:"vTRNCONTEXT",pic:"",hsh:!0}],[]];this.EvtParms.VALID_USUSEC=[[{av:"A11UsuSec",fld:"USUSEC",pic:"ZZZZZZZZZ9"}],[]];this.EvtParms.VALID_VEHSEC=[[],[]];this.EvtParms.VALID_VEHDES=[[{av:"A27VehDes",fld:"VEHDES",pic:""}],[{av:"A27VehDes",fld:"VEHDES",pic:""}]];this.EvtParms.VALID_VEHPLA=[[{av:"A28VehPla",fld:"VEHPLA",pic:""},{av:"A11UsuSec",fld:"USUSEC",pic:"ZZZZZZZZZ9"},{av:"A26VehSec",fld:"VEHSEC",pic:"ZZZZZZZZZ9"}],[]];this.setPrompt("PROMPT_11",[18]);this.EnterCtrl=["ENTER"];this.setVCMap("AV7UsuSec","vUSUSEC",0,"int",10,0);this.setVCMap("AV8VehSec","vVEHSEC",0,"int",10,0);this.setVCMap("AV26Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV9TrnContext","vTRNCONTEXT",0,"K2BTrnContext",0,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV11Navigation","vNAVIGATION",0,"K2BTrnNavigation",0,0);this.Initialize()});gx.setExecutableComponent("vehiculo")