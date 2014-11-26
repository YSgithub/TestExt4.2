Ext.define("ys.view.Viewport",{
    extend:"Ext.container.Viewport",
    layout:'border',
    style:'background-color: #EFEFEF;',
    initComponent: function() {
        Ext.History.init();
        var banner= Ext.create("ys.view.banner",{itemId:"banner"});
        var main=Ext.create("ys.view.mainPanle",{itemId:'mainPanel'});
        this.items=[banner,main];
        this.callParent(arguments);
    }
});