/*
 * HandingOver 页面
 * author: luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.view.HandingOver', {
    extend: 'Ext.Container',
    xtype : 'handingOver',

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
                    	name : 'emailBtn',
                    	align: 'right',
                    	ui: 'plain',
                    	cls: 'btn',
                    	icon : 'resources/images/email.png',
                    	iconCls: 'iconBtn'

                    },
                    {
                    	xtype: 'button',
                    	name: 'examine',
                    	align: 'right',
                    	ui: 'plain',
                    	cls: 'btn',
                    	icon : 'resources/images/pizhu.png',
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