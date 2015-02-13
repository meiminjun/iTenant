/**
 * 图片批注列表
 * @class iTenants.view.PostilImgList
 * @author duwei
 * @date 2014-12-30
 */
Ext.define('iTenants.view.PostilImgList', {
    extend: 'Ext.Container',
    xtype: 'postilImgList',
    requires: [
        'Ext.ux.AccordionList',
        'Ext.data.TreeStore'
    ],
    config: {
    	autoDestroy: false,
        itemId: 'postilImgList',
        layout : 'fit',
        cls : 'bgCls',
        scrollable: false,
        items: [{
            	xtype: 'titlebar',
 			    docked: 'top',
 			    locales : {
 			    	title : 'postilImgList.title'
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
    	var child = navCtr['PostilImgList'].getComponent('imageGridList');
    	if(child){
    		child.destroy();
    	}
    }
});
