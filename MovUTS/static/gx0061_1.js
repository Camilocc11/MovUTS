gx.evt.autoSkip=!1;gx.define("gx0061_1",!1,function(){var n,t;this.ServerClass="gx0061_1";this.PackageName="com.movuts";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV12pRutSec=gx.fn.getIntegerValue("vPRUTSEC",".");this.AV13pUsuSec=gx.fn.getIntegerValue("vPUSUSEC",".");this.AV13pUsuSec=gx.fn.getIntegerValue("vPUSUSEC",".")};this.Validv_Cruthorsal=function(){return this.validCliEvt("Validv_Cruthorsal",0,function(){try{var n=gx.util.balloon.getNew("vCRUTHORSAL");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV7cRutHorSal)===0||new gx.date.gxdate(this.AV7cRutHorSal).compare(gx.date.ymdhmstot(1753,1,1,0,0,0))>=0))try{n.setError("Campo Hora Salida fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Crutrec=function(){return this.validCliEvt("Validv_Crutrec",0,function(){try{var n=gx.util.balloon.getNew("vCRUTREC");if(this.AnyError=0,!(this.AV9cRutRec==1||this.AV9cRutRec==2||0===this.AV9cRutRec))try{n.setError("Campo Recurrencia fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Crutfeccre=function(){return this.validCliEvt("Validv_Crutfeccre",0,function(){try{var n=gx.util.balloon.getNew("vCRUTFECCRE");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV11cRutFecCre)===0||new gx.date.gxdate(this.AV11cRutFecCre).compare(gx.date.ymdhmstot(1753,1,1,0,0,0))>=0))try{n.setError("Campo Fecha Creación fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e17491_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle")),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]),gx.$.Deferred().resolve()};this.e11491_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("RUTSECFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("RUTSECFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCRUTSEC","Visible",!0)):(gx.fn.setCtrlProperty("RUTSECFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCRUTSEC","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("RUTSECFILTERCONTAINER","Class")',ctrl:"RUTSECFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRUTSEC","Visible")',ctrl:"vCRUTSEC",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e12491_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("RUTHORSALFILTERCONTAINER","Class")=="AdvancedContainerItem"?gx.fn.setCtrlProperty("RUTHORSALFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"):gx.fn.setCtrlProperty("RUTHORSALFILTERCONTAINER","Class","AdvancedContainerItem"),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("RUTHORSALFILTERCONTAINER","Class")',ctrl:"RUTHORSALFILTERCONTAINER",prop:"Class"}]),gx.$.Deferred().resolve()};this.e13491_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("RUTPUEDISFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("RUTPUEDISFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCRUTPUEDIS","Visible",!0)):(gx.fn.setCtrlProperty("RUTPUEDISFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCRUTPUEDIS","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("RUTPUEDISFILTERCONTAINER","Class")',ctrl:"RUTPUEDISFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRUTPUEDIS","Visible")',ctrl:"vCRUTPUEDIS",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e14491_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("RUTRECFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("RUTRECFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCRUTREC","Visible",!0)):(gx.fn.setCtrlProperty("RUTRECFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCRUTREC","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("RUTRECFILTERCONTAINER","Class")',ctrl:"RUTRECFILTERCONTAINER",prop:"Class"},{ctrl:"vCRUTREC"}]),gx.$.Deferred().resolve()};this.e15491_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("RUTUSUCREFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("RUTUSUCREFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCRUTUSUCRE","Visible",!0)):(gx.fn.setCtrlProperty("RUTUSUCREFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCRUTUSUCRE","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("RUTUSUCREFILTERCONTAINER","Class")',ctrl:"RUTUSUCREFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRUTUSUCRE","Visible")',ctrl:"vCRUTUSUCRE",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e16491_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("RUTFECCREFILTERCONTAINER","Class")=="AdvancedContainerItem"?gx.fn.setCtrlProperty("RUTFECCREFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"):gx.fn.setCtrlProperty("RUTFECCREFILTERCONTAINER","Class","AdvancedContainerItem"),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("RUTFECCREFILTERCONTAINER","Class")',ctrl:"RUTFECCREFILTERCONTAINER",prop:"Class"}]),gx.$.Deferred().resolve()};this.e20492_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e21491_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,75,76,77,78,79,80,81,82,83,84,85,86,87];this.GXLastCtrlId=87;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",74,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0061_1",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",75,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(30,76,"RUTSEC","Secuencia","","RutSec","int",0,"px",10,10,"right",null,[],30,"RutSec",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(33,77,"RUTHORSAL","Hora Salida","","RutHorSal","dtime",0,"px",16,16,"right",null,[],33,"RutHorSal",!0,5,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(38,78,"RUTPUEDIS","Disponibles","","RutPueDis","int",0,"px",2,2,"right",null,[],38,"RutPueDis",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addComboBox(39,79,"RUTREC","Recurrencia","RutRec","int",null,0,!0,!1,0,"px","WWColumn OptionalColumn");t.addSingleLineEdit(40,80,"RUTUSUCRE","Creacion","","RutUsuCre","svchar",0,"px",20,20,"left",null,[],40,"RutUsuCre",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(41,81,"RUTFECCRE","Creación","","RutFecCre","dtime",0,"px",14,14,"right",null,[],41,"RutFecCre",!0,5,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(42,82,"RUTUSUMOD","Modificación","","RutUsuMod","svchar",0,"px",20,20,"left",null,[],42,"RutUsuMod",!0,0,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addComboBox(44,83,"RUTEST","Estado","RutEst","int",null,0,!0,!1,0,"px","WWColumn OptionalColumn");t.addSingleLineEdit(11,84,"USUSEC","Secuencia","","UsuSec","int",0,"px",10,10,"right",null,[],11,"UsuSec",!1,0,!1,!1,"Attribute",1,"");this.Grid1Container.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"ADVANCEDCONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"RUTSECFILTERCONTAINER",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"LBLRUTSECFILTER",format:1,grid:0,evt:"e11491_client"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCRUTSEC",gxz:"ZV6cRutSec",gxold:"OV6cRutSec",gxvar:"AV6cRutSec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV6cRutSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV6cRutSec=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCRUTSEC",gx.O.AV6cRutSec,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6cRutSec=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCRUTSEC",".")},nac:gx.falseFn};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"RUTHORSALFILTERCONTAINER",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"LBLRUTHORSALFILTER",format:1,grid:0,evt:"e12491_client"};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cruthorsal,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCRUTHORSAL",gxz:"ZV7cRutHorSal",gxold:"OV7cRutHorSal",gxvar:"AV7cRutHorSal",dp:{f:-1,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV7cRutHorSal=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV7cRutHorSal=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vCRUTHORSAL",gx.O.AV7cRutHorSal,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV7cRutHorSal=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("vCRUTHORSAL")},nac:gx.falseFn};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"RUTPUEDISFILTERCONTAINER",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"LBLRUTPUEDISFILTER",format:1,grid:0,evt:"e13491_client"};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCRUTPUEDIS",gxz:"ZV8cRutPueDis",gxold:"OV8cRutPueDis",gxvar:"AV8cRutPueDis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8cRutPueDis=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV8cRutPueDis=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCRUTPUEDIS",gx.O.AV8cRutPueDis,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV8cRutPueDis=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCRUTPUEDIS",".")},nac:gx.falseFn};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"RUTRECFILTERCONTAINER",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"LBLRUTRECFILTER",format:1,grid:0,evt:"e14491_client"};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Crutrec,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCRUTREC",gxz:"ZV9cRutRec",gxold:"OV9cRutRec",gxvar:"AV9cRutRec",ucs:[],op:[46],ip:[46],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV9cRutRec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV9cRutRec=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vCRUTREC",gx.O.AV9cRutRec)},c2v:function(){this.val()!==undefined&&(gx.O.AV9cRutRec=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCRUTREC",".")},nac:gx.falseFn};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"RUTUSUCREFILTERCONTAINER",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"LBLRUTUSUCREFILTER",format:1,grid:0,evt:"e15491_client"};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCRUTUSUCRE",gxz:"ZV10cRutUsuCre",gxold:"OV10cRutUsuCre",gxvar:"AV10cRutUsuCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10cRutUsuCre=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10cRutUsuCre=n)},v2c:function(){gx.fn.setControlValue("vCRUTUSUCRE",gx.O.AV10cRutUsuCre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10cRutUsuCre=this.val())},val:function(){return gx.fn.getControlValue("vCRUTUSUCRE")},nac:gx.falseFn};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"RUTFECCREFILTERCONTAINER",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"LBLRUTFECCREFILTER",format:1,grid:0,evt:"e16491_client"};n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,lvl:0,type:"dtime",len:8,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Crutfeccre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCRUTFECCRE",gxz:"ZV11cRutFecCre",gxold:"OV11cRutFecCre",gxvar:"AV11cRutFecCre",dp:{f:-1,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[66],ip:[66],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11cRutFecCre=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV11cRutFecCre=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vCRUTFECCRE",gx.O.AV11cRutFecCre,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11cRutFecCre=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getDateTimeValue("vCRUTFECCRE")},nac:gx.falseFn};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"GRIDTABLE",grid:0};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"BTNTOGGLE",grid:0,evt:"e17491_client"};n[72]={id:72,fld:"",grid:0};n[73]={id:73,fld:"",grid:0};n[75]={id:75,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:74,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV5LinkSelection=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5LinkSelection=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(74),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(n){gx.O.AV17Linkselection_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV5LinkSelection=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(74))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(74))},gxvar_GXI:"AV17Linkselection_GXI",nac:gx.falseFn};n[76]={id:76,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:74,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RUTSEC",gxz:"Z30RutSec",gxold:"O30RutSec",gxvar:"A30RutSec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A30RutSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z30RutSec=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RUTSEC",n||gx.fn.currentGridRowImpl(74),gx.O.A30RutSec,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A30RutSec=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RUTSEC",n||gx.fn.currentGridRowImpl(74),".")},nac:gx.falseFn};n[77]={id:77,lvl:2,type:"dtime",len:10,dec:5,sign:!1,ro:1,isacc:0,grid:74,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RUTHORSAL",gxz:"Z33RutHorSal",gxold:"O33RutHorSal",gxvar:"A33RutHorSal",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A33RutHorSal=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z33RutHorSal=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("RUTHORSAL",n||gx.fn.currentGridRowImpl(74),gx.O.A33RutHorSal,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A33RutHorSal=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("RUTHORSAL",n||gx.fn.currentGridRowImpl(74))},nac:gx.falseFn};n[78]={id:78,lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:74,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RUTPUEDIS",gxz:"Z38RutPueDis",gxold:"O38RutPueDis",gxvar:"A38RutPueDis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A38RutPueDis=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z38RutPueDis=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("RUTPUEDIS",n||gx.fn.currentGridRowImpl(74),gx.O.A38RutPueDis,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A38RutPueDis=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RUTPUEDIS",n||gx.fn.currentGridRowImpl(74),".")},nac:gx.falseFn};n[79]={id:79,lvl:2,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:1,isacc:0,grid:74,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RUTREC",gxz:"Z39RutRec",gxold:"O39RutRec",gxvar:"A39RutRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A39RutRec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z39RutRec=gx.num.intval(n))},v2c:function(n){gx.fn.setGridComboBoxValue("RUTREC",n||gx.fn.currentGridRowImpl(74),gx.O.A39RutRec);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A39RutRec=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RUTREC",n||gx.fn.currentGridRowImpl(74),".")},nac:gx.falseFn};n[80]={id:80,lvl:2,type:"svchar",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:74,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RUTUSUCRE",gxz:"Z40RutUsuCre",gxold:"O40RutUsuCre",gxvar:"A40RutUsuCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A40RutUsuCre=n)},v2z:function(n){n!==undefined&&(gx.O.Z40RutUsuCre=n)},v2c:function(n){gx.fn.setGridControlValue("RUTUSUCRE",n||gx.fn.currentGridRowImpl(74),gx.O.A40RutUsuCre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A40RutUsuCre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("RUTUSUCRE",n||gx.fn.currentGridRowImpl(74))},nac:gx.falseFn};n[81]={id:81,lvl:2,type:"dtime",len:8,dec:5,sign:!1,ro:1,isacc:0,grid:74,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RUTFECCRE",gxz:"Z41RutFecCre",gxold:"O41RutFecCre",gxvar:"A41RutFecCre",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A41RutFecCre=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z41RutFecCre=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("RUTFECCRE",n||gx.fn.currentGridRowImpl(74),gx.O.A41RutFecCre,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A41RutFecCre=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("RUTFECCRE",n||gx.fn.currentGridRowImpl(74))},nac:gx.falseFn};n[82]={id:82,lvl:2,type:"svchar",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:74,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RUTUSUMOD",gxz:"Z42RutUsuMod",gxold:"O42RutUsuMod",gxvar:"A42RutUsuMod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A42RutUsuMod=n)},v2z:function(n){n!==undefined&&(gx.O.Z42RutUsuMod=n)},v2c:function(n){gx.fn.setGridControlValue("RUTUSUMOD",n||gx.fn.currentGridRowImpl(74),gx.O.A42RutUsuMod,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A42RutUsuMod=this.val(n))},val:function(n){return gx.fn.getGridControlValue("RUTUSUMOD",n||gx.fn.currentGridRowImpl(74))},nac:gx.falseFn};n[83]={id:83,lvl:2,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:1,isacc:0,grid:74,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"RUTEST",gxz:"Z44RutEst",gxold:"O44RutEst",gxvar:"A44RutEst",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A44RutEst=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z44RutEst=gx.num.intval(n))},v2c:function(n){gx.fn.setGridComboBoxValue("RUTEST",n||gx.fn.currentGridRowImpl(74),gx.O.A44RutEst);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A44RutEst=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("RUTEST",n||gx.fn.currentGridRowImpl(74),".")},nac:gx.falseFn};n[84]={id:84,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:74,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUSEC",gxz:"Z11UsuSec",gxold:"O11UsuSec",gxvar:"A11UsuSec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A11UsuSec=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z11UsuSec=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("USUSEC",n||gx.fn.currentGridRowImpl(74),gx.O.A11UsuSec,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A11UsuSec=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("USUSEC",n||gx.fn.currentGridRowImpl(74),".")},nac:gx.falseFn};n[85]={id:85,fld:"",grid:0};n[86]={id:86,fld:"",grid:0};n[87]={id:87,fld:"BTN_CANCEL",grid:0,evt:"e21491_client"};this.AV6cRutSec=0;this.ZV6cRutSec=0;this.OV6cRutSec=0;this.AV7cRutHorSal=gx.date.nullDate();this.ZV7cRutHorSal=gx.date.nullDate();this.OV7cRutHorSal=gx.date.nullDate();this.AV8cRutPueDis=0;this.ZV8cRutPueDis=0;this.OV8cRutPueDis=0;this.AV9cRutRec=0;this.ZV9cRutRec=0;this.OV9cRutRec=0;this.AV10cRutUsuCre="";this.ZV10cRutUsuCre="";this.OV10cRutUsuCre="";this.AV11cRutFecCre=gx.date.nullDate();this.ZV11cRutFecCre=gx.date.nullDate();this.OV11cRutFecCre=gx.date.nullDate();this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z30RutSec=0;this.O30RutSec=0;this.Z33RutHorSal=gx.date.nullDate();this.O33RutHorSal=gx.date.nullDate();this.Z38RutPueDis=0;this.O38RutPueDis=0;this.Z39RutRec=0;this.O39RutRec=0;this.Z40RutUsuCre="";this.O40RutUsuCre="";this.Z41RutFecCre=gx.date.nullDate();this.O41RutFecCre=gx.date.nullDate();this.Z42RutUsuMod="";this.O42RutUsuMod="";this.Z44RutEst=0;this.O44RutEst=0;this.Z11UsuSec=0;this.O11UsuSec=0;this.AV6cRutSec=0;this.AV7cRutHorSal=gx.date.nullDate();this.AV8cRutPueDis=0;this.AV9cRutRec=0;this.AV10cRutUsuCre="";this.AV11cRutFecCre=gx.date.nullDate();this.AV12pRutSec=0;this.AV13pUsuSec=0;this.AV5LinkSelection="";this.A30RutSec=0;this.A33RutHorSal=gx.date.nullDate();this.A38RutPueDis=0;this.A39RutRec=0;this.A40RutUsuCre="";this.A41RutFecCre=gx.date.nullDate();this.A42RutUsuMod="";this.A44RutEst=0;this.A11UsuSec=0;this.Events={e20492_client:["ENTER",!0],e21491_client:["CANCEL",!0],e17491_client:["'TOGGLE'",!1],e11491_client:["LBLRUTSECFILTER.CLICK",!1],e12491_client:["LBLRUTHORSALFILTER.CLICK",!1],e13491_client:["LBLRUTPUEDISFILTER.CLICK",!1],e14491_client:["LBLRUTRECFILTER.CLICK",!1],e15491_client:["LBLRUTUSUCREFILTER.CLICK",!1],e16491_client:["LBLRUTFECCREFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cRutSec",fld:"vCRUTSEC",pic:"ZZZZZZZZZ9"},{av:"AV7cRutHorSal",fld:"vCRUTHORSAL",pic:"99/99/9999 99:99"},{av:"AV8cRutPueDis",fld:"vCRUTPUEDIS",pic:"Z9"},{ctrl:"vCRUTREC"},{av:"AV9cRutRec",fld:"vCRUTREC",pic:"9"},{av:"AV10cRutUsuCre",fld:"vCRUTUSUCRE",pic:""},{av:"AV11cRutFecCre",fld:"vCRUTFECCRE",pic:"99/99/99 99:99"},{av:"AV13pUsuSec",fld:"vPUSUSEC",pic:"ZZZZZZZZZ9"}],[]];this.EvtParms.START=[[],[{ctrl:"FORM",prop:"Caption"}]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLRUTSECFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("RUTSECFILTERCONTAINER","Class")',ctrl:"RUTSECFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("RUTSECFILTERCONTAINER","Class")',ctrl:"RUTSECFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRUTSEC","Visible")',ctrl:"vCRUTSEC",prop:"Visible"}]];this.EvtParms["LBLRUTHORSALFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("RUTHORSALFILTERCONTAINER","Class")',ctrl:"RUTHORSALFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("RUTHORSALFILTERCONTAINER","Class")',ctrl:"RUTHORSALFILTERCONTAINER",prop:"Class"}]];this.EvtParms["LBLRUTPUEDISFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("RUTPUEDISFILTERCONTAINER","Class")',ctrl:"RUTPUEDISFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("RUTPUEDISFILTERCONTAINER","Class")',ctrl:"RUTPUEDISFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRUTPUEDIS","Visible")',ctrl:"vCRUTPUEDIS",prop:"Visible"}]];this.EvtParms["LBLRUTRECFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("RUTRECFILTERCONTAINER","Class")',ctrl:"RUTRECFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("RUTRECFILTERCONTAINER","Class")',ctrl:"RUTRECFILTERCONTAINER",prop:"Class"},{ctrl:"vCRUTREC"}]];this.EvtParms["LBLRUTUSUCREFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("RUTUSUCREFILTERCONTAINER","Class")',ctrl:"RUTUSUCREFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("RUTUSUCREFILTERCONTAINER","Class")',ctrl:"RUTUSUCREFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCRUTUSUCRE","Visible")',ctrl:"vCRUTUSUCRE",prop:"Visible"}]];this.EvtParms["LBLRUTFECCREFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("RUTFECCREFILTERCONTAINER","Class")',ctrl:"RUTFECCREFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("RUTFECCREFILTERCONTAINER","Class")',ctrl:"RUTFECCREFILTERCONTAINER",prop:"Class"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION",pic:""}]];this.EvtParms.ENTER=[[{av:"A30RutSec",fld:"RUTSEC",pic:"ZZZZZZZZZ9",hsh:!0}],[{av:"AV12pRutSec",fld:"vPRUTSEC",pic:"ZZZZZZZZZ9"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cRutSec",fld:"vCRUTSEC",pic:"ZZZZZZZZZ9"},{av:"AV7cRutHorSal",fld:"vCRUTHORSAL",pic:"99/99/9999 99:99"},{av:"AV8cRutPueDis",fld:"vCRUTPUEDIS",pic:"Z9"},{ctrl:"vCRUTREC"},{av:"AV9cRutRec",fld:"vCRUTREC",pic:"9"},{av:"AV10cRutUsuCre",fld:"vCRUTUSUCRE",pic:""},{av:"AV11cRutFecCre",fld:"vCRUTFECCRE",pic:"99/99/99 99:99"},{av:"AV13pUsuSec",fld:"vPUSUSEC",pic:"ZZZZZZZZZ9"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cRutSec",fld:"vCRUTSEC",pic:"ZZZZZZZZZ9"},{av:"AV7cRutHorSal",fld:"vCRUTHORSAL",pic:"99/99/9999 99:99"},{av:"AV8cRutPueDis",fld:"vCRUTPUEDIS",pic:"Z9"},{ctrl:"vCRUTREC"},{av:"AV9cRutRec",fld:"vCRUTREC",pic:"9"},{av:"AV10cRutUsuCre",fld:"vCRUTUSUCRE",pic:""},{av:"AV11cRutFecCre",fld:"vCRUTFECCRE",pic:"99/99/99 99:99"},{av:"AV13pUsuSec",fld:"vPUSUSEC",pic:"ZZZZZZZZZ9"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cRutSec",fld:"vCRUTSEC",pic:"ZZZZZZZZZ9"},{av:"AV7cRutHorSal",fld:"vCRUTHORSAL",pic:"99/99/9999 99:99"},{av:"AV8cRutPueDis",fld:"vCRUTPUEDIS",pic:"Z9"},{ctrl:"vCRUTREC"},{av:"AV9cRutRec",fld:"vCRUTREC",pic:"9"},{av:"AV10cRutUsuCre",fld:"vCRUTUSUCRE",pic:""},{av:"AV11cRutFecCre",fld:"vCRUTFECCRE",pic:"99/99/99 99:99"},{av:"AV13pUsuSec",fld:"vPUSUSEC",pic:"ZZZZZZZZZ9"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cRutSec",fld:"vCRUTSEC",pic:"ZZZZZZZZZ9"},{av:"AV7cRutHorSal",fld:"vCRUTHORSAL",pic:"99/99/9999 99:99"},{av:"AV8cRutPueDis",fld:"vCRUTPUEDIS",pic:"Z9"},{ctrl:"vCRUTREC"},{av:"AV9cRutRec",fld:"vCRUTREC",pic:"9"},{av:"AV10cRutUsuCre",fld:"vCRUTUSUCRE",pic:""},{av:"AV11cRutFecCre",fld:"vCRUTFECCRE",pic:"99/99/99 99:99"},{av:"AV13pUsuSec",fld:"vPUSUSEC",pic:"ZZZZZZZZZ9"}],[]];this.EvtParms.VALIDV_CRUTHORSAL=[[],[]];this.EvtParms.VALIDV_CRUTREC=[[],[]];this.EvtParms.VALIDV_CRUTFECCRE=[[],[]];this.setVCMap("AV12pRutSec","vPRUTSEC",0,"int",10,0);this.setVCMap("AV13pUsuSec","vPUSUSEC",0,"int",10,0);this.setVCMap("AV13pUsuSec","vPUSUSEC",0,"int",10,0);this.setVCMap("AV13pUsuSec","vPUSUSEC",0,"int",10,0);t.addRefreshingParm({rfrProp:"Rows",gxGrid:"Grid1"});t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[36]);t.addRefreshingVar(this.GXValidFnc[46]);t.addRefreshingVar(this.GXValidFnc[56]);t.addRefreshingVar(this.GXValidFnc[66]);t.addRefreshingVar({rfrVar:"AV13pUsuSec"});t.addRefreshingParm(this.GXValidFnc[16]);t.addRefreshingParm(this.GXValidFnc[26]);t.addRefreshingParm(this.GXValidFnc[36]);t.addRefreshingParm(this.GXValidFnc[46]);t.addRefreshingParm(this.GXValidFnc[56]);t.addRefreshingParm(this.GXValidFnc[66]);t.addRefreshingParm({rfrVar:"AV13pUsuSec"});this.Initialize()});gx.wi(function(){gx.createParentObj(gx0061_1)})