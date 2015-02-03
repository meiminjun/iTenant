/*
 * OrderIndex 工单列表 页面
 * author: luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.view.OrderIndex', {
    extend: 'Ext.Container',
    xtype : 'orderIndex',
    requires: [
        'iTenants.view.OrderList'
    ],
    config: {
    	autoDestroy: false,
        itemId: 'orderIndex',
        cls: 'orderIndex',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'titlebar',
                name: 'title',
                cls: 'titlebar',
                docked: 'top',
                title: 'Tampines Mall',
                items: [
                    {
                        xtype: 'button',
        				name: 'back',
        				iconCls : 'backBtnCls',
        				iconMask : true,
                        itemId: 'backButton',
                        ui: 'plain',
                        handler : function(e){
                        	navCtr.popToPrev();
                        }
                    }
                ]
            }
        ]
    },
    destroyChildFn: function(){
    	var child = navCtr['OrderIndex'].getComponent('orderList');
    	if(child){
    		child.destroy();
    	}
    },
    refreshPageFn: function(){
    	orderIndexCtr.refreshOrderList();
    }
});