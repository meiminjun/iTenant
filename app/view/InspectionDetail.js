/**
 * @desc	工单检查列表详情页面
 * @author	meiminjun
 * @date	2014/12/29
 */
Ext.define('iTenants.view.InspectionDetail', {
	extend: 'Ext.Container',
   	xtype: 'inspectionDetail',
	requires: [
	    'Ext.TitleBar',
	    'Ext.Button',
		'iTenants.view.InspectList'
	],

	config: {
		itemId: 'InspectionDetail',
		layout: 'vbox',
		cls:'inspectCls',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			title: 'Inspection Details',
			cls: 'customToolBar',
			items: [{
				xtype: 'button',
				itemId: 'backButtom',
				ui: 'plain',
				iconCls: 'backBtnCls',
				iconMask: true,
				docked: 'left',
				handler: function(e) {
					navCtr.popToPrev();
				}
			}, {
				xtype: 'button',
				itemId: 'reply',
				ui : 'customTopBtn',
				text: 'Reply',
				align : 'right',
				handler: function(e) {
					mainCtr.jumpToDefect();
				}
			}]
		}]
	}
});