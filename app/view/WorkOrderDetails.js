/**
 * 工单详情
 * @class iTenants.view.WorkOrderDetails
 * @author duwei
 * @date 2014-12-26
 */

Ext.define('iTenants.view.WorkOrderDetails', {
    extend: 'Ext.Container',
    xtype : 'workOrderDetails',
    
    requires : ['Ext.TitleBar'],
    config: {
    	autoDestroy: false,
        itemId: 'workOrderDetails',
        layout : 'vbox',
        cls : 'bgCls',
        scrollable: {
            directionLock: true,
            direction: 'vertical'
        },
        items: [
			{
			    xtype: 'titlebar',
			    docked: 'top',
			    locales : {
			    	title : 'workOrderDetails.title'
			    },
			    cls : 'customToolBar',
			    items: [
			        {
			        	xtype : 'button',
			        	itemId: 'backButton',
						ui : 'plain',
						iconCls : 'backBtnCls',
						iconMask : true,
						docked : 'left',
					    handler : function(e){
					    	navCtr.popToPrev();
					    }
			        }
			    ]
			}
        ]
    },
    destroyChildFn: function(){
    	var child = navCtr['WorkOrderDetails'].getComponent('workOrderDetailsChild');
    	if(child){
    		child.destroy();
    	}
    }
});