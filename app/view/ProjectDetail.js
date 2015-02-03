/**
 * 商场详情
 * @class iTenants.view.ProjectDetail
 * @author duwei
 * @date 2015-01-15
 */
Ext.define('iTenants.view.ProjectDetail', {
	extend : 'Ext.Container',
	xtype : 'projectDetail',
	requires : [ 'Ext.TitleBar', 'Ext.Button', 'Ext.field.Text' ],
	config : {
		autoDestroy: false,
		itemId : 'projectDetail',
		layout : 'vbox',
		cls : 'bgCls',
		items : [ {
			xtype : 'titlebar',
			docked : 'top',
			cls : 'customToolBar',
			flex : 1,
			items : [ {
				xtype : 'button',
				ui : 'plain',
				iconCls : 'backBtnCls',
				iconMask : true,
				docked : 'left',
				handler : function() {
					navCtr.popToPrev();
				}
			} ]
		}]
	},
	destroyChildFn: function(){
    	var child = navCtr['ProjectDetail'].getComponent('projectDetailChild');
    	if(child){
    		child.destroy();
    	}
    }
});