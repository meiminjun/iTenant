/*
 * HandingOver 页面 检查表单弹出窗口
 * author: luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.view.CheckListMenu', {
	extend: 'Ext.ActionSheet',
	xtype: 'checkListMenu',
	config: {
		cls: 'checkListMenu',
		hideOnMaskTap : true,
		layout: 'vbox',
		right: 0,
		top: 46,
		left: 'auto',
		bottom: 'auto',
		hideAnimation: null,
		items: [
		{
			xtype: 'container',
			name: 'complete',
			items:  [
			{
				xtype: 'button',
				iconCls : 'iconBtn',
				ui: 'plain',
				cls: 'btn',
				icon: 'resources/images/complete.png',
				handler : function(){
					//handingOverCtr.goToModifyView();
				}
			},
			{
				xtype: 'spacer',
				height: 10
			},
			{
				xtype: 'button',
				iconCls : 'iconBtn',
				ui: 'plain',
				cls: 'btn',
				icon: 'resources/images/cancel.png',
				handler: function() {
					handingOverCtr.hideMenuFn();
				}
			}
			]
		},
		{
			xtype: 'container',
			name: 'preview',
			items:  [
			{
				xtype: 'button',
				iconCls : 'iconBtn',
				ui: 'plain',
				cls: 'btn',
				icon: 'resources/images/preview.png',
				handler : function(){
					handingOverCtr.hideMenuFn();
					handingOverCtr.goToHandoverFormFn();
				}
			}, 
			{
				xtype: 'spacer',
				height: 10
			},
			{
				xtype: 'button',
				name: 'emailBtn',
				iconCls : 'iconBtn',
				ui: 'plain',
				cls: 'btn',
				icon: 'resources/images/email.png',
				handler: function() {
					handingOverCtr.hideMenuFn();
					handingOverCtr.showEmailPicker();
				}
			},
			{
				xtype: 'spacer',
				height: 10
			},
			{
				xtype: 'button',
				iconCls : 'iconBtn',
				ui: 'plain',
				cls: 'btn',
				icon: 'resources/images/cancel.png',
				handler: function() {
					handingOverCtr.hideMenuFn();
				}
			}
			]	
		}
		]
	}
});