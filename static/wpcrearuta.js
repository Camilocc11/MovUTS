gx.evt.autoSkip=!1;gx.define("wpcrearuta",!1,function(){var n,t;this.ServerClass="wpcrearuta";this.PackageName="com.movuts";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.Gx_date=gx.fn.getDateValue("vTODAY");this.AV27IsOk=gx.fn.getControlValue("vISOK");this.A11UsuSec=gx.fn.getIntegerValue("USUSEC",".");this.A44RutEst=gx.fn.getIntegerValue("RUTEST",".");this.AV26RutHorSal=gx.fn.getDateTimeValue("vRUTHORSAL");this.A33RutHorSal=gx.fn.getDateTimeValue("RUTHORSAL");this.A26VehSec=gx.fn.getIntegerValue("VEHSEC",".");this.A27VehDes=gx.fn.getControlValue("VEHDES");this.A29VehPue=gx.fn.getIntegerValue("VEHPUE",".")};this.Validv_Ususec=function(){return this.validSrvEvt("validv_Ususec",0).then(function(n){return n}.closure(this))};this.Validv_Rutrec=function(){return this.validCliEvt("Validv_Rutrec",0,function(){try{var n=gx.util.balloon.getNew("vRUTREC");if(this.AnyError=0,!(this.AV22RutRec==1||this.AV22RutRec==2))try{n.setError("Campo Recurrencia fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s112_client=function(){};this.s122_client=function(){};this.e13442_client=function(){return this.executeServerEvent("'E_CONFIRMAR'",!1,null,!1,!1)};this.e14442_client=function(){return this.executeServerEvent("VRUTVEHSEC.CONTROLVALUECHANGED",!0,null,!1,!0)};this.e16442_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e17442_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,77,78,79];this.GXLastCtrlId=79;this.K2BCONTROLBEAUTIFY1Container=gx.uc.getNew(this,80,21,"K2BControlBeautify","K2BCONTROLBEAUTIFY1Container","K2bcontrolbeautify1","K2BCONTROLBEAUTIFY1");t=this.K2BCONTROLBEAUTIFY1Container;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("UpdateCheckboxes","Updatecheckboxes",!0,"bool");t.setProp("UpdateSelects","Updateselects",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setProp("Gx Control Type","Gxcontroltype","","int");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"CONTENTTABLE",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"TABLE_CONTAINER_RUTSEC",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRUTSEC",gxz:"ZV12RutSec",gxold:"OV12RutSec",gxvar:"AV12RutSec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12RutSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV12RutSec=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vRUTSEC",gx.O.AV12RutSec,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12RutSec=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vRUTSEC",".")},nac:gx.falseFn};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"TABLE_CONTAINER_USUSEC",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ususec,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSUSEC",gxz:"ZV13UsuSec",gxold:"OV13UsuSec",gxvar:"AV13UsuSec",ucs:[],op:[58],ip:[58,26],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13UsuSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV13UsuSec=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vUSUSEC",gx.O.AV13UsuSec,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV13UsuSec=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vUSUSEC",".")},nac:gx.falseFn};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"TABLE_CONTAINER_RUTDIRSAL",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRUTDIRSAL",gxz:"ZV14RutDirSal",gxold:"OV14RutDirSal",gxvar:"AV14RutDirSal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14RutDirSal=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14RutDirSal=n)},v2c:function(){gx.fn.setControlValue("vRUTDIRSAL",gx.O.AV14RutDirSal,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV14RutDirSal=this.val())},val:function(){return gx.fn.getControlValue("vRUTDIRSAL")},nac:gx.falseFn};this.declareDomainHdlr(32,function(){});n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"TABLE_CONTAINER_VHORA",grid:0};n[35]={id:35,fld:"TEXTBLOCK_VAR_VHORA",format:0,grid:0};n[36]={id:36,fld:"TABLE_CONTAINER_VHORAFIELDCONTAINER",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vVHORA",gxz:"ZV24vHora",gxold:"OV24vHora",gxvar:"AV24vHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV24vHora=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV24vHora=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vVHORA",gx.O.AV24vHora);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV24vHora=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vVHORA",".")},nac:gx.falseFn};this.declareDomainHdlr(38,function(){});n[39]={id:39,fld:"VMINUTO_VAR_LEFTTEXT",format:0,grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vVMINUTO",gxz:"ZV25vMinuto",gxold:"OV25vMinuto",gxvar:"AV25vMinuto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV25vMinuto=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV25vMinuto=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vVMINUTO",gx.O.AV25vMinuto);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV25vMinuto=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vVMINUTO",".")},nac:gx.falseFn};this.declareDomainHdlr(41,function(){});n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"TABLE_CONTAINER_RUTDIRDES",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRUTDIRDES",gxz:"ZV16RutDirDes",gxold:"OV16RutDirDes",gxvar:"AV16RutDirDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV16RutDirDes=n)},v2z:function(n){n!==undefined&&(gx.O.ZV16RutDirDes=n)},v2c:function(){gx.fn.setControlValue("vRUTDIRDES",gx.O.AV16RutDirDes,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV16RutDirDes=this.val())},val:function(){return gx.fn.getControlValue("vRUTDIRDES")},nac:gx.falseFn};this.declareDomainHdlr(47,function(){});n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"TABLE_CONTAINER_RUTREC",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Rutrec,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRUTREC",gxz:"ZV22RutRec",gxold:"OV22RutRec",gxvar:"AV22RutRec",ucs:[],op:[52],ip:[52],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV22RutRec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV22RutRec=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vRUTREC",gx.O.AV22RutRec)},c2v:function(){this.val()!==undefined&&(gx.O.AV22RutRec=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vRUTREC",".")},nac:gx.falseFn};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"TABLE_CONTAINER_RUTVEHSEC",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:"e14442_client",evt_cvcing:null,rgrid:[],fld:"vRUTVEHSEC",gxz:"ZV17RutVehSec",gxold:"OV17RutVehSec",gxvar:"AV17RutVehSec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){n!==undefined&&(gx.O.AV17RutVehSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV17RutVehSec=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vRUTVEHSEC",gx.O.AV17RutVehSec)},c2v:function(){this.val()!==undefined&&(gx.O.AV17RutVehSec=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vRUTVEHSEC",".")},nac:gx.falseFn};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"TABLE_CONTAINER_RUTVEHPUE",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRUTVEHPUE",gxz:"ZV19RutVehPue",gxold:"OV19RutVehPue",gxvar:"AV19RutVehPue",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV19RutVehPue=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV19RutVehPue=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vRUTVEHPUE",gx.O.AV19RutVehPue,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV19RutVehPue=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vRUTVEHPUE",".")},nac:gx.falseFn};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"TABLE_CONTAINER_RUTVEHDES",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vRUTVEHDES",gxz:"ZV18RutVehDes",gxold:"OV18RutVehDes",gxvar:"AV18RutVehDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV18RutVehDes=n)},v2z:function(n){n!==undefined&&(gx.O.ZV18RutVehDes=n)},v2c:function(){gx.fn.setControlValue("vRUTVEHDES",gx.O.AV18RutVehDes,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV18RutVehDes=this.val())},val:function(){return gx.fn.getControlValue("vRUTVEHDES")},nac:gx.falseFn};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};n[72]={id:72,fld:"",grid:0};n[73]={id:73,fld:"",grid:0};n[74]={id:74,fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};n[77]={id:77,fld:"CONFIRMAR",grid:0,evt:"e13442_client"};n[78]={id:78,fld:"",grid:0};n[79]={id:79,fld:"",grid:0};this.AV12RutSec=0;this.ZV12RutSec=0;this.OV12RutSec=0;this.AV13UsuSec=0;this.ZV13UsuSec=0;this.OV13UsuSec=0;this.AV14RutDirSal="";this.ZV14RutDirSal="";this.OV14RutDirSal="";this.AV24vHora=0;this.ZV24vHora=0;this.OV24vHora=0;this.AV25vMinuto=0;this.ZV25vMinuto=0;this.OV25vMinuto=0;this.AV16RutDirDes="";this.ZV16RutDirDes="";this.OV16RutDirDes="";this.AV22RutRec=0;this.ZV22RutRec=0;this.OV22RutRec=0;this.AV17RutVehSec=0;this.ZV17RutVehSec=0;this.OV17RutVehSec=0;this.AV19RutVehPue=0;this.ZV19RutVehPue=0;this.OV19RutVehPue=0;this.AV18RutVehDes="";this.ZV18RutVehDes="";this.OV18RutVehDes="";this.AV12RutSec=0;this.AV13UsuSec=0;this.AV14RutDirSal="";this.AV24vHora=0;this.AV25vMinuto=0;this.AV16RutDirDes="";this.AV22RutRec=0;this.AV17RutVehSec=0;this.AV19RutVehPue=0;this.AV18RutVehDes="";this.A44RutEst=0;this.A11UsuSec=0;this.A33RutHorSal=gx.date.nullDate();this.A26VehSec=0;this.A27VehDes="";this.A29VehPue=0;this.A25UsuGam="";this.Gx_date=gx.date.nullDate();this.AV27IsOk=!1;this.AV26RutHorSal=gx.date.nullDate();this.Events={e13442_client:["'E_CONFIRMAR'",!0],e14442_client:["VRUTVEHSEC.CONTROLVALUECHANGED",!0],e16442_client:["ENTER",!0],e17442_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"Gx_date",fld:"vTODAY",pic:"",hsh:!0}],[{av:'gx.fn.getCtrlProperty("TABLE_CONTAINER_RUTSEC","Visible")',ctrl:"TABLE_CONTAINER_RUTSEC",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABLE_CONTAINER_USUSEC","Visible")',ctrl:"TABLE_CONTAINER_USUSEC",prop:"Visible"}]];this.EvtParms.START=[[{av:"A25UsuGam",fld:"USUGAM",pic:""},{av:"A11UsuSec",fld:"USUSEC",pic:"ZZZZZZZZZ9"},{av:"A44RutEst",fld:"RUTEST",pic:"9"},{ctrl:"vVHORA"},{av:"AV24vHora",fld:"vVHORA",pic:"Z9"},{ctrl:"vVMINUTO"},{av:"AV25vMinuto",fld:"vVMINUTO",pic:"Z9"}],[{av:"AV20UsuGam",fld:"vUSUGAM",pic:""},{av:"AV13UsuSec",fld:"vUSUSEC",pic:"ZZZZZZZZZ9"},{ctrl:"vVHORA"},{av:"AV24vHora",fld:"vVHORA",pic:"Z9"},{ctrl:"vVMINUTO"},{av:"AV25vMinuto",fld:"vVMINUTO",pic:"Z9"}]];this.EvtParms["'E_CONFIRMAR'"]=[[{av:"Gx_date",fld:"vTODAY",pic:"",hsh:!0},{ctrl:"vVHORA"},{av:"AV24vHora",fld:"vVHORA",pic:"Z9"},{ctrl:"vVMINUTO"},{av:"AV25vMinuto",fld:"vVMINUTO",pic:"Z9"},{av:"AV27IsOk",fld:"vISOK",pic:""},{av:"AV13UsuSec",fld:"vUSUSEC",pic:"ZZZZZZZZZ9"},{av:"AV14RutDirSal",fld:"vRUTDIRSAL",pic:""},{av:"AV16RutDirDes",fld:"vRUTDIRDES",pic:""},{ctrl:"vRUTVEHSEC"},{av:"AV17RutVehSec",fld:"vRUTVEHSEC",pic:"ZZZZZZZZZ9"},{av:"AV19RutVehPue",fld:"vRUTVEHPUE",pic:"9"},{ctrl:"vRUTREC"},{av:"AV22RutRec",fld:"vRUTREC",pic:"9"},{av:"A11UsuSec",fld:"USUSEC",pic:"ZZZZZZZZZ9"},{av:"A44RutEst",fld:"RUTEST",pic:"9"},{av:"AV26RutHorSal",fld:"vRUTHORSAL",pic:"99/99/9999 99:99"},{av:"A33RutHorSal",fld:"RUTHORSAL",pic:"99/99/9999 99:99"}],[{av:"AV26RutHorSal",fld:"vRUTHORSAL",pic:"99/99/9999 99:99"},{av:"AV27IsOk",fld:"vISOK",pic:""}]];this.EvtParms["VRUTVEHSEC.CONTROLVALUECHANGED"]=[[{av:"A26VehSec",fld:"VEHSEC",pic:"ZZZZZZZZZ9"},{ctrl:"vRUTVEHSEC"},{av:"AV17RutVehSec",fld:"vRUTVEHSEC",pic:"ZZZZZZZZZ9"},{av:"A27VehDes",fld:"VEHDES",pic:""},{av:"A29VehPue",fld:"VEHPUE",pic:"9"}],[{av:"AV18RutVehDes",fld:"vRUTVEHDES",pic:""},{av:"AV19RutVehPue",fld:"vRUTVEHPUE",pic:"9"}]];this.EvtParms.VALIDV_USUSEC=[[{av:"AV13UsuSec",fld:"vUSUSEC",pic:"ZZZZZZZZZ9"},{ctrl:"vRUTVEHSEC"},{av:"AV17RutVehSec",fld:"vRUTVEHSEC",pic:"ZZZZZZZZZ9"}],[{ctrl:"vRUTVEHSEC"},{av:"AV17RutVehSec",fld:"vRUTVEHSEC",pic:"ZZZZZZZZZ9"}]];this.EvtParms.VALIDV_RUTREC=[[],[]];this.setVCMap("Gx_date","vTODAY",0,"date",8,0);this.setVCMap("AV27IsOk","vISOK",0,"boolean",4,0);this.setVCMap("A11UsuSec","USUSEC",0,"int",10,0);this.setVCMap("A44RutEst","RUTEST",0,"int",1,0);this.setVCMap("AV26RutHorSal","vRUTHORSAL",0,"dtime",10,5);this.setVCMap("A33RutHorSal","RUTHORSAL",0,"dtime",10,5);this.setVCMap("A26VehSec","VEHSEC",0,"int",10,0);this.setVCMap("A27VehDes","VEHDES",0,"svchar",100,0);this.setVCMap("A29VehPue","VEHPUE",0,"int",1,0);this.Initialize()});gx.wi(function(){gx.createParentObj(wpcrearuta)})