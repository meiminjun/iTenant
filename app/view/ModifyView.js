/**
 * @desc	工单批注表单填写
 * @author	meiminjun
 * @date	2014/12/29
 */
Ext.define('iTenants.view.ModifyView', {
	extend: 'Ext.Container',
	requires: [
		'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.TextArea',
		'Ext.Button',
		'Ext.Img'
	],
	config: {
		autoDestroy: false,
        itemId: 'modifyView',
        layout : 'vbox',
        cls : 'bgCls',
        scrollable: {
            directionLock: true,
            direction: 'vertical'
        },
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			cls: 'customToolBar',
			title:'Modify',
			locales : {
				title : 'modifyView.title'
			},
			items: [{
				xtype: 'button',
				ui: 'plain',
				iconCls: 'backBtnCls',
				iconMask: true,
				docked: 'left',
				handler: function() {
					navCtr.popToPrev();
				}
			},{
				xtype : 'button',
	        	itemId : 'orderReplySendBtn',
	        	ui : 'customTopBtn',
	        	align : 'right',
	        	locales : {
	        		text : 'modifyView.sendText'
	        	},
	        	handler : function(){
	        		Ext.Msg.alert('Send');
	        	}
			}]
		},{
			xtype: 'container',
			style: 'background-color: white;',
			padding : 10,
			items : [{
				xtype : 'textareafield',
				itemId : 'modifyComments',
				style : 'border: 1px solid #ccc; font-size:15px;',
				minHeight : '3.5em',
				padding : '5px',
				maxRows : 2,
				locales : {
					placeHolder : 'modifyView.placeHolder'
				}
			}, {
				xtype: 'container',
				layout : 'hbox',
				height: 45,
				margin : '5px 0px 0px auto',
				items: [{
                    xtype: 'image',
                    itemId : 'modifyCamera',
                    height: '50px',
                    left: '0px',
                    width: '50px',
                    src:'resources/images/camera.png'
                },
                {
                    xtype: 'image',
                    itemId : 'modifyPostil',
                    height: '50px',
                    left: '60px',
                    width: '50px',
                    src:'resources/images/dingwei.png'
                },
				{
                    xtype: 'image',
                    itemId : 'modifySign',
                    height: '50px',
                    left: '120px',
                    width: '50px',
                    src:'resources/images/sign.png'
                }]
			}]
		}]
	}
});