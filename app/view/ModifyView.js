/**
 * @desc	工单完工填写
 * @author	meiminjun
 * @date	2014/12/29
 */
Ext.define('iTenants.view.ModifyView', {
	extend: 'Ext.Container',
	xtype : 'modifyView',
	
	requires: [
		'Ext.TitleBar',
		'Ext.form.FieldSet',
		'Ext.field.TextArea',
		'Ext.Button',
		'Ext.Img',
		'Ext.Label'
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
	        	itemId : 'orderCompleteBtn',
	        	ui : 'customTopBtn',
	        	align : 'right',
	        	locales : {
	        		text : 'modifyView.sendText'
	        	}
			}]
		},{
			xtype: 'container',
			itemId : 'modifyChild',
			style: 'background-color: white;',
			padding : 10,
			items : [{
				xtype : 'textareafield',
				itemId : 'modifyComments',
				cls : 'textAreaInputCls',
				minHeight : '3.5em',
				maxRows : 4,
				border: 1,
				style:'border-color: #ccc; border-style: solid;',
				locales : {
					placeHolder : 'modifyView.placeHolder'
				}
			}, {
				xtype: 'container',
				layout : 'hbox',
				height: 47,
				margin : '7px 0px 0px -3px',
				items: [{
                    xtype: 'image',
                    itemId : 'modifyCamera',
                    height: '50px',
                    left: '0px',
                    width: '50px',
                    src:'resources/images/camera.png'
                }]
			},{
				xtype : 'label',
				html : '<div>'+
						'<div style=" position:relative; float: left; margin-right: 5px;">'+
							'<input type="image" id="iDelBtn1" src="resources/images/icon_del.png" style=" display:none;height:30px; width:30px;top:3px;margin-left:30px;z-index:999;position: absolute; " onclick="fileUploadCtr.delPic(1)" />'+
							'<img id="myImage1" width="50px" height="50px" style="margin-top:18px;display:none;"/>'+
						'</div>'+
						'<div  style=" position:relative; float: left; margin-right: 5px;">'+
							'<input type="image" id="iDelBtn2" src="resources/images/icon_del.png" style="display:none;height:30px; width:30px;top:3px;margin-left:30px;z-index:999;position: absolute; " onclick="fileUploadCtr.delPic(2)" />'+
							'<img id="myImage2" width="50px" height="50px" style="margin-top:18px;display:none;"/>'+
						'</div>'+
						'<div  style=" position:relative; float: left;">'+
							'<input type="image" id="iDelBtn3" src="resources/images/icon_del.png" style="display:none;height:30px; width:30px;top:3px;margin-left:30px;z-index:999;position: absolute; " onclick="fileUploadCtr.delPic(3)" />'+
							'<img id="myImage3" width="50px" height="50px" style="margin-top:18px;display:none;"/>'+
						'</div>'+
					'</div>'
			}]
		}]
	},
	destroyChildFn : function(){
		// reset view
		navCtr['ModifyView'].down('container textareafield[itemId=modifyComments]').reset();
		fileUploadCtr.clearPic();
	}
});