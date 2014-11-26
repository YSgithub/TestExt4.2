Ext.define("ys.view.other.PerformanceForm",{
	extend:'Ext.form.Panel',
	border:false,
    style:'margin:10px;',
    layout:{
		type:'anchor'
	},
    bodyPadding: 5,
	defaults:{labelAlign:'top',labelStyle:'color:#FF0000;font-weight:bold;'},
	items:[
        {xtype:'hidden',name:'id',anchor:'100%'},
        {xtype:'hidden',name:'personId',value:'',anchor:'100%'},
        {xtype:'hidden',name:'evalBaseId',value:'',anchor:'100%'},
        {xtype:'hidden',name:'scopeId',value:'', anchor:'100%'},
        {itemId:"myJobId",xtype:'button',style:'margin-left:10px;margin-top:10px;',text:'查看我的分管工作',width:150,align:'right'},
        {html:'<div id="note-title">个人业绩<div>',border:false,anchor:'100%',height:'10px'},
        {xtype:'textareafield' ,labelAlign:'top',fieldLabel:"长度不超过2000汉字",name:'performance',itemId:'performanceId',
            style:'background-color:#EEEEEE;',
         grow:true,invalidCls:'table-cell-invalid',
         anchor:'100% -'+ 15+5,
         disabledCls:'color:#FF0000;font-weight:bold;'}
	],
	refresh:function(){
	},
	save:function(){
	}
});