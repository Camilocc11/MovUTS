/*!   GeneXus Java 16_0_11-144151 on September 2, 2020 8:32:54.23
*/
gx.evt.autoSkip=!1;gx.define("gam_wwrepositories",!1,function(){var n,t;this.ServerClass="gam_wwrepositories";this.PackageName="genexus.security.backend";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.e110c2_client=function(){return this.executeServerEvent("'ADDNEW'",!1,null,!1,!1)};this.e130c2_client=function(){return this.executeServerEvent("VBTNUPD.CLICK",!0,arguments[0],!1,!1)};this.e140c2_client=function(){return this.executeServerEvent("VBTNDLT.CLICK",!0,arguments[0],!1,!1)};this.e150c2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e160c2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,24,25,26,27];this.GXLastCtrlId=27;this.GridwwContainer=new gx.grid.grid(this,2,"WbpLvl2",23,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gam_wwrepositories",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px",gx.getMessage("GXM_newrow"),!1,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridwwContainer;t.addSingleLineEdit("Id",24,"vID",gx.getMessage("Id"),"","Id","int",0,"px",12,12,"right",null,[],"Id","Id",!0,0,!1,!1,"Attribute",1,"WWActionColumn");t.addSingleLineEdit("Name",25,"vNAME",gx.getMessage("Name"),"","Name","char",0,"px",254,80,"left",null,[],"Name","Name",!0,0,!1,!1,"Attribute",1,"WWColumn WWSecondaryColumn");t.addSingleLineEdit("Btnupd",26,"vBTNUPD","","","BtnUpd","char",0,"px",20,20,"left","e130c2_client",[],"Btnupd","BtnUpd",!0,0,!1,!1,"TextActionAttribute TextLikeLink",1,"WWTextActionColumn");t.addSingleLineEdit("Btndlt",27,"vBTNDLT","","","BtnDlt","char",0,"px",20,20,"left","e140c2_client",[],"Btndlt","BtnDlt",!0,0,!1,!1,"TextActionAttribute TextLikeLink",1,"WWTextActionColumn");this.GridwwContainer.emptyText=gx.getMessage("");this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLE2",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TEXTBLOCK1",format:0,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"ADDNEW1",grid:0,evt:"e110c2_client"};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,lvl:0,type:"char",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSEARCH",gxz:"ZV16Search",gxold:"OV16Search",gxvar:"AV16Search",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV16Search=n)},v2z:function(n){n!==undefined&&(gx.O.ZV16Search=n)},v2c:function(){gx.fn.setControlValue("vSEARCH",gx.O.AV16Search,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV16Search=this.val())},val:function(){return gx.fn.getControlValue("vSEARCH")},nac:gx.falseFn};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"TABLE1",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,lvl:2,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:23,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",gxz:"ZV11Id",gxold:"OV11Id",gxvar:"AV11Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.AV11Id=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV11Id=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("vID",n||gx.fn.currentGridRowImpl(23),gx.O.AV11Id,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV11Id=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("vID",n||gx.fn.currentGridRowImpl(23),gx.thousandSeparator)},nac:gx.falseFn};n[25]={id:25,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:23,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",gxz:"ZV13Name",gxold:"OV13Name",gxvar:"AV13Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV13Name=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13Name=n)},v2c:function(n){gx.fn.setGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(23),gx.O.AV13Name,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV13Name=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};n[26]={id:26,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:23,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBTNUPD",gxz:"ZV6BtnUpd",gxold:"OV6BtnUpd",gxvar:"AV6BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV6BtnUpd=n)},v2z:function(n){n!==undefined&&(gx.O.ZV6BtnUpd=n)},v2c:function(n){gx.fn.setGridControlValue("vBTNUPD",n||gx.fn.currentGridRowImpl(23),gx.O.AV6BtnUpd,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV6BtnUpd=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vBTNUPD",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn,evt:"e130c2_client"};n[27]={id:27,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:23,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBTNDLT",gxz:"ZV5BtnDlt",gxold:"OV5BtnDlt",gxvar:"AV5BtnDlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV5BtnDlt=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5BtnDlt=n)},v2c:function(n){gx.fn.setGridControlValue("vBTNDLT",n||gx.fn.currentGridRowImpl(23),gx.O.AV5BtnDlt,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV5BtnDlt=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vBTNDLT",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn,evt:"e140c2_client"};this.AV16Search="";this.ZV16Search="";this.OV16Search="";this.ZV11Id=0;this.OV11Id=0;this.ZV13Name="";this.OV13Name="";this.ZV6BtnUpd="";this.OV6BtnUpd="";this.ZV5BtnDlt="";this.OV5BtnDlt="";this.AV16Search="";this.AV11Id=0;this.AV13Name="";this.AV6BtnUpd="";this.AV5BtnDlt="";this.Events={e110c2_client:["'ADDNEW'",!0],e130c2_client:["VBTNUPD.CLICK",!0],e140c2_client:["VBTNDLT.CLICK",!0],e150c2_client:["ENTER",!0],e160c2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV16Search",fld:"vSEARCH",pic:""}],[]];this.EvtParms["GRIDWW.LOAD"]=[[{av:"AV16Search",fld:"vSEARCH",pic:""}],[{av:"AV6BtnUpd",fld:"vBTNUPD",pic:""},{av:"AV5BtnDlt",fld:"vBTNDLT",pic:""},{av:'gx.fn.getCtrlProperty("vBTNDLT","Visible")',ctrl:"vBTNDLT",prop:"Visible"},{av:"AV11Id",fld:"vID",pic:"ZZZZZZZZZZZ9"},{av:"AV13Name",fld:"vNAME",pic:""}]];this.EvtParms["'ADDNEW'"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV16Search",fld:"vSEARCH",pic:""}],[]];this.EvtParms["VBTNUPD.CLICK"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV16Search",fld:"vSEARCH",pic:""},{av:"AV11Id",fld:"vID",pic:"ZZZZZZZZZZZ9"}],[]];this.EvtParms["VBTNDLT.CLICK"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV16Search",fld:"vSEARCH",pic:""},{av:"AV11Id",fld:"vID",pic:"ZZZZZZZZZZZ9"}],[{av:"AV11Id",fld:"vID",pic:"ZZZZZZZZZZZ9"}]];t.addRefreshingVar(this.GXValidFnc[14]);t.addRefreshingParm(this.GXValidFnc[14]);this.Initialize()});gx.wi(function(){gx.createParentObj(gam_wwrepositories)})