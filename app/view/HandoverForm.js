/**
 * @desc	工单检查填写表单
 * @author	meiminjun
 * @date	2014/12/29
 */
Ext.define('iTenants.view.HandoverForm', {
	extend: 'Ext.Container',
	xtype : 'handoverForm',
	requires: [
	    'Ext.TitleBar',
		'Ext.Label'
	],
	config: {
		autoDestroy: false,
		itemId: 'handoverForm',
		height: '100%',
		scrollable: {
			directionLock: true,
			direction: 'vertical'
		},
		layout : 'vbox',
		cls : 'handoverForm bgCls',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			cls: 'customToolBar',
			title: 'Preview',
			items: [{
				xtype: 'button',
				ui: 'plain',
				iconCls: 'backBtnCls',
				iconMask: true,
				docked: 'left',
				handler: function() {
					navCtr.popToPrev();
				}
			},
			{
            	xtype: 'button',
            	name : 'signBtn',
            	align: 'right',
            	ui: 'plain',
            	cls: 'btn',
            	icon : 'resources/images/pdf.png',
            	iconCls: 'iconBtn',
            	style : 'background-size:30px',
            	handler : function(){
					handingOverCtr.goToPDFFn();
            	}
            },]
		}]
	},
	destroyChildFn: function(){
		var child = this.getComponent('handoverFormContent');
		if(child && child.destroy){
			child.destroy();
		}
	}
});