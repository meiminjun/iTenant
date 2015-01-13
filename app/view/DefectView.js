/**
 * @desc	工单检查填写表单
 * @author	meiminjun
 * @date	2014/12/29
 */
Ext.define('iTenants.view.DefectView', {
	extend: 'Ext.Container',
	requires: [
		'Ext.Toolbar',
		'Ext.form.FieldSet',
		'Ext.field.TextArea',
		'Ext.Button'
	],
	config: {
		items: [{
			xtype: 'toolbar',
			docked: 'top',
			cls: 'customToolBar',
			title: 'Defect Found',
			items: [{
				xtype: 'button',
				ui: 'plain',
				iconCls: 'backBtnCls',
				iconMask: true,
				docked: 'left',
				handler: function() {
					navCtr.popToPrev();
				}
			}, {
				xtype: 'button',
				ui: 'plain',
				text: 'Reply',
				cls: 'replyBtnCls',
				docked: 'right',
				text: 'Send'
			}]
		}, {
			xtype: 'fieldset',
			baseCls: "defectTextarea",
			items: [{
				xtype: 'textareafield'
			}]
		}, {
			xtype: 'container',
			style: 'padding-left:.4em',
			items: [{
				id: 'getPhoto',
				itemId: 'getPhoto',
				xtype: 'image',
				height: '50px',
				left: '0px',
				width: '50px',
				src: 'resources/images/camera.png',
			}]
		}]
	}
});