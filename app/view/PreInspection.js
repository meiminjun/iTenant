/*
 * HandingOver 页面
 * author: luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.view.PreInspection', {
    extend: 'Ext.Container',
    xtype : 'preInspection',

    config: {
    	autoDestroy: false,
        itemId: 'preInspection',
        cls: 'preInspection',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'titlebar',
                name: 'title',
                cls: 'titlebar',
                docked: 'top',
                title: 'Existing Condition Photos',
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
    	var child = navCtr['PreInspection'].getComponent('preInspectionList');
    	if(child){
    		child.destroy();
    	}
    }
    
});