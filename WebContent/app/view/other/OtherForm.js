Ext.define("ys.view.other.OtherForm",{
	extend:'Ext.form.Panel',
	border:false,
//	bodyStyle:'background-color:#EEEEEE;',
	layout:{
		type:'anchor'
	},
	bodyPadding:5,
	defaults:{labelAlign:'top',labelStyle:'color:#FF0000;font-weight:bold;',anchor:'100% 100%'},
	items:[
        {xtype:'hidden',name:'id',itemId:'ID',anchor:'100%'},
        {xtype:'hidden',name:'personId',itemId:'personID',value:'',anchor:'100%'},
        {xtype:'hidden',name:'evalBaseId',itemId:'evalBaseID',value:'',anchor:'100%'},
        {xtype:'hidden',name:'scopeId',itemId:'scopeID',value:'',anchor:'100%'},
        {html:'<div id="note-title">其他说明<div>',border:false,anchor:'100%',height:'10px'},//anchor:'95% 10%',height:'10px'
        {xtype:'textareafield',
            style:'background-color:#EEEEEE;',
            fieldLabel:"长度不超过500汉字",
            name:'other',itemId:'otherId',
            border:false,
            labelAlign:'top',
            grow:true,invalidCls:'table-cell-invalid',
            anchor: '100% -' + 10+5,
            disabledCls:'color:#FF0000;font-weight:bold;'
        }
//        {xtype:'hidden',name:'id',itemId:'ID',anchor:'100% 100%'},
//            {xtype:'hidden',name:'personId',itemId:'personID',value:'',anchor:'100% 100%'},
//            {xtype:'hidden',name:'evalBaseId',itemId:'evalBaseID',value:'',anchor:'100% 100%'},
//            {xtype:'hidden',name:'scopeId',itemId:'scopeID',value:'',anchor:'100% 100%'},
//	        {xtype:'textareafield',fieldLabel:"长度不超过500汉字",name:'other',itemId:'otherId',
//    	    height:600,grow:true,invalidCls:'table-cell-invalid',
//			anchor:'100% 100%',
//			disabledCls:'color:#FF0000;font-weight:bold;'
//		   }
	],
	refresh:function(){
	},
	save:function(){
	}
});