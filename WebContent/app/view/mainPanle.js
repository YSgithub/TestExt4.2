Ext.define("ys.view.mainPanle",{
    extend:'Ext.tab.Panel',
    autoDestory:true,
    region:'center',
    initComponent: function() {
        this.items=[];
        this.callParent(arguments);
    }
});