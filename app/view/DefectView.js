/**
 * @desc	内检检查表单
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
		'Ext.Button',
		'Ext.Label'
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
	        	itemId : 'defectReplyBtn',
	        	ui : 'customTopBtn',
	        	cls:'send',
	        	align : 'right',
				text: 'Send',
			}]
		}, {
			xtype: 'container',
			itemId : 'defectChild',
			style: 'background-color: white;',
			padding : 10,
			items : [{
				xtype: 'container',
				name: 'label'
			},{
				xtype : 'textareafield',
				itemId : 'DefectComments',
				cls : 'textAreaInputCls',
				minHeight : '3.5em',
				border: 1,
				style:'border-color: #ccc; border-style: solid;',
				maxRows : 4,
				locales : {
					placeHolder : 'modifyView.placeHolder'
				}
			},{
				xtype: 'container',
				layout : 'hbox',
				height: 47,
				margin : '7px 0px 0px -3px',
				items: [{
					id: 'getPhoto',
					itemId: 'getPhoto',
					xtype: 'image',
					height: '50px',
					left: '0px',
					width: '50px',
					src: 'resources/images/camera.png',
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
	                hidden : true,
	                height: '50px',
	                left: '120px',
	                width: '50px',
	                src:'resources/images/sign.png'
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
					'<div  style=" position:relative; float: left;margin-right: 5px;">'+
						'<input type="image" id="iDelBtn3" src="resources/images/icon_del.png" style="display:none;height:30px; width:30px;top:3px;margin-left:30px;z-index:999;position: absolute; " onclick="fileUploadCtr.delPic(3)" />'+
						'<img id="myImage3" width="50px" height="50px" style="margin-top:18px;display:none;"/>'+
					'</div>'+
				'</div>'
			},{
				xtype : 'label',
				html : '<div>'+
					// 批注图纸
					'<div style=" position:relative; float: left;">'+
						'<input type="image" id="postilDelBtn1" src="resources/images/icon_del.png" style="display:none;height:30px; width:30px;top:3px;margin-left:30px;z-index:999;position: absolute; " onclick="fileUploadCtr.delPostilPic(1)" />'+
						'<img id="postilImage1" width="50px" height="50px" style="margin-top:18px;display:none;"/>'+
					'</div>'+
				'</div>'
			}]
		}]
	},
	destroyChildFn: function(){
		//reset view
		navCtr['DefectView'].down('container textareafield[itemId=DefectComments]').reset();
		fileUploadCtr.clearPic();
    }
});