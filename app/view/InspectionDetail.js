/**
 * @desc	工单检查列表详情页面
 * @author	meiminjun
 * @date	2014/12/29
 */
Ext.define('iTenants.view.InspectionDetail', {
	extend: 'Ext.Container',
   	xtype: 'inspectionDetail',
	requires: [
		'Ext.Toolbar',
		'Ext.dataview.List',
		'Ext.XTemplate',
	],

	config: {
		itemId: 'InspectionDetail',
		layout: 'vbox',
		cls:'inspectCls',
		items: [{
			xtype: 'toolbar',
			docked: 'top',
			title: 'Inspection Details',
			cls: 'customToolBar',
//			scrollable: 'vertical',
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
				name: 'reply',
				ui: 'plain',
				text: 'Reply',
				cls: 'replyBtnCls',
				docked: 'right',
				handler: function(e) {
					//					navCtr.pushToNext('iTenants.view.DefectView');
					mainCtr.jumpToDefect();
				}
			}]
		}, {
			itemId:'InspectList',
			xtype: 'list',
			variableHeights: true,
			infinite: true,
			disableSelection: true,
			allowDeselect: false,
			scrollToTopOnRefresh: false,
			flex: 1,
			store:'inspectionDetailStore',
			cls:'inspectListCls',
			itemCls: 'itemcls',
			scrollable: {
			      directionLock: true,
			      direction: 'vertical'
		    },
			itemTpl: [
				'<div class="problemList-Div defaultFont-style">',
					'<div class="problemList-row">',
						'<h3 class="problemName">{Description}</h3>',
						'<div class="probleContent">',
							'<div>',
								'<div style="display:inline-block;width:50%">0 min ago</div>',
								'<div style="display:inline-block;width:50%;text-align:right;">皇城</div>',
							'</div>',
							'<div class="imgCont">',
								'<img class="listImgDef" src="data:image/png;base64,{ProjectImage}" />',
							'</div>',
						'</div>',
					'</div>',
					'<div style="position:absolute;top:12px;left:8px">',
						'<div class="problemList-img">',
							'<img style="width:32px;height:32px;-webkit-border-radius:.2em" src="resources/images/status/third-status.png">',
						'</div>',
					'</div>',
				'</div>',
			],
			items: [{
				//顶层的详情内容
				xtype: 'container',
				itemId: 'checkDetail',
				scrollDock: 'top',
				height:'120px',
				cls:'checkDetailCls',
				tpl: Ext.create('Ext.XTemplate',
					'<tpl>',
					'<div class="problemList-Div defaultFont-style">',
					'<div class="problemList-row">',
					'<h3 class="problemName">{Description}</h3>',
					'<div class="probleContent">',
					'<div style="display:inline-block;width:50%">皇城</div>',
					'<div style="display:inline-block;width:50%;text-align:right;">0 min ago</div>',
					'</div>',
					'</div>',
					'<div style="position:absolute;top:12px;left:8px">',
					'<div class="problemList-img">',
					'<img style="width:32px;height:32px;-webkit-border-radius:.2em" src="resources/images/status/third-status.png">',
					'</div>',
					'</div>',
					'</div>',
					'</tpl>', {
						compiled: true,
					}),
				items: [{
					xtype: 'toolbar',
					docked: 'bottom',
					cls: 'titleBarCls',
					items: [{
						xtype: 'button',
						ui: 'plain',
						text: 'Latest Reply',
						//					locales: {
						//						text: '最新回复'
						//					},
						cls: 'tagBtnCls'
					}, {
						xtype: 'label',
						cls: 'tagTriggleCls'
					}, {
						xtype: 'spacer'
					}]
				}]
			}, {
				//最新回复
				xtype: 'container',
				scrollDock: 'top',
				height:'130px',
				itemId:'latestReply',
				cls:'lastestReplyCls',
				tpl: Ext.create('Ext.XTemplate',
					'<tpl>',
					'<div class="latestReply-Div defaultFont-style">',
					'<p class="content">{Description}</p>',
					'</div>',
					'</tpl>', {
						compiled: true,
					}),
				items: [{
					xtype: 'toolbar',
					docked: 'bottom',
					cls: 'titleBarCls',
					items: [{
						xtype: 'button',
						ui: 'plain',
						text: "History",
						//					locales: {
						//						text: '历史'
						//					},
						cls: 'tagBtnCls'
					}, {
						xtype: 'label',
						cls: 'tagTriggleCls'
					}, {
						xtype: 'spacer'
					}]
				}]
			}]
		}]
	}

});