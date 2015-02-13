/*
 * HandingOver 页面
 * author: luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.view.HandingOver', {
    extend: 'Ext.Container',
    xtype : 'handingOver',
    requires: ['Ext.Menu'],
    config: {
    	autoDestroy: false,
        itemId: 'handingOver',
        cls: 'handingOver',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'titlebar',
                name: 'title',
                cls: 'titlebar',
                docked: 'top',
                title: 'Handing Over',
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
                    },
                    {
                    	xtype: 'button',
                    	name : 'plusBtn',
                    	align: 'right',
                    	ui: 'plain',
                    	cls: 'btn',
                    	icon : 'resources/images/plus.png',
                    	iconCls: 'iconBtn'

                    }
                ]
            }


        ]
    },    
    destroyChildFn: function(){
    	var child = navCtr['HandingOver'].getComponent('checkList');
    	if(child){
    		child.destroy();
    	}
    },
    refreshPageFn: function(){
    	handingOverCtr.returnHandingOverData();
    }
});