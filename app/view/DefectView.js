/**
 * @desc	工单检查填写表单
 * @author	meiminjun
 * @date	2014/12/29
 */
Ext.define('iTenants.view.DefectView', {
	extend: 'Ext.Container',
	xtype : 'defectView',
	requires: [
	    'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.TextArea',
		'Ext.Button'
	],
	config: {
		autoDestroy: false,
		itemId: 'defectView',
		layout : 'vbox',
		cls : 'bgCls',
		items: [{
			xtype: 'titlebar',
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
				xtype : 'button',
	        	itemId : 'orderReplySendBtn',
	        	ui : 'customTopBtn',
	        	align : 'right',
				text: 'Send'
			}]
		}, {
			xtype: 'fieldset',
			baseCls: "defectTextarea",
			items: [{
				xtype : 'textareafield',
				itemId : 'DefectComments',
				style : 'border: 1px solid #ccc; font-size:15px;',
				minHeight : '3.5em',
				padding : '5px',
				maxRows : 2,
				placeHolder	: 'Comments'
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