Ext.define('ys.controller.MainPanelCtrl', {
    extend: 'Ext.app.Controller',
    refs:[{
		ref : 'mainPanel',
		selector : "#mainPanel"
	}, {
		ref : 'banner',
		selector : "#banner"
	}, {
		ref : 'other',
		selector : "#otherPanel"
	}, {
		ref : 'performance',
		selector : "#performancePanel"
	}],
    init: function() {
    	this.control({
    		'#mainPanel': {
			      afterrender:this.startAutoSave
		   }
    	});
    },
    saveAll:function(){
    },
    startAutoSave:function(){
    }
});