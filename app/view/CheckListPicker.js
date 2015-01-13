/*
 * HandingOver 页面 检查表单弹出窗口
 * author: luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.view.CheckListPicker', {
	extend: 'Ext.Container',
	xtype: 'checkListPicker',
	config: {
		cls: 'checkListPicker',
		zIndex: 1,
		fullscreen: true,
		layout: 'vbox',
		hideOnMaskTap: true,
		masked: true,
		items: [{
				xtype: 'container',
				cls: 'btm',
				docked: 'bottom',
				items: [{
					xtype: 'label',
					cls: 'label',
					html: ''
				}, {
					xtype: 'button',
					cls: 'btn',
					text: 'Ok'
				}, {
					xtype: 'button',
					cls: 'btn defectBtn',
					text: 'Defect found',
					handler: function() {
						handingOverCtr.jumpToDefect();
					}
				}, {
					xtype: 'button',
					cls: 'btn',
					text: 'Cancel',
					handler: function() {
						handingOverCtr.hideCheckListPicker();
					}
				}]
			},

		]
	}
});