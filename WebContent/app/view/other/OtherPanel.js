Ext.define("ys.view.other.OtherPanel",{
	extend:'Ext.panel.Panel',
//	autoDestory:true,
//    autoScroll : true,
	border:false,
	title:'其他',
	layout:{
		type:'fit'
	},
    defaults:{labelAlign:'right',labelWidth:80,style:'margin:10px;',abelStyle:'font-weight:bold;',msgTarget:'under'},
	items:[
        Ext.create("ys.view.other.OtherForm",{itemId:"otherForm"})
    ],
	save:function(){
   		this.child("#otherForm").save();
   	}
});