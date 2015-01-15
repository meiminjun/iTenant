/**
 * @desc	工单检查列表
 * @author	meiminjun/duwei
 * @date	2015/1/14
 */
Ext.define('iTenants.view.InspectList', {
	extend: 'Ext.dataview.List',
   	xtype: 'inspectList',
	requires: [
		'Ext.Toolbar',
		'Ext.Container',
		'Ext.XTemplate'
	],

	config: {
		itemId:'inspectList',
		variableHeights: true,
		infinite: true,
		disableSelection: true,
		allowDeselect: false,
		scrollToTopOnRefresh: false,
		flex: 1,
		store:'inspectionDetailStore',
		cls:'inspectListCls bgCls',
		itemCls: 'itemcls',
		scrollable: {
		      directionLock: true,
		      direction: 'vertical'
	    },
		itemTpl: [
			'<div class="problemList-Div defaultFont-style">',
				'<div class="problemList-row">',
					'<h3 class="problemName" style="font-weight:normal;">{Description}</h3>',
					'<div class="probleContent">',
						'<div>',
							'<div style="display:inline-block;width:50%">0 min ago</div>',
							'<div style="display:inline-block;width:50%;text-align:right;">huangcheng</div>',
						'</div>',
						'<div class="imgCont">',
							'<img class="listImgDef" src="{ProjectImage}" />',
						'</div>',
					'</div>',
				'</div>',
				'<div style="position:absolute;top:16px;left:8px">',
					'<div class="problemList-img">',
						'<img style="width:25px;height:25px;-webkit-border-radius:.2em" src="resources/images/status/third-status.png">',
					'</div>',
				'</div>',
			'</div>',
		],
		items: [{
			//顶层的详情内容
			xtype: 'container',
			itemId: 'checkDetail',
			scrollDock: 'top',
			height:'98px',
			cls:'checkDetailCls',
			style : 'background : white',
			tpl: Ext.create('Ext.XTemplate',
				'<tpl>',
				'<div class="problemList-Div defaultFont-style">',
				'<div class="problemList-row">',
				'<h3 class="problemName">{Description}</h3>',
				'<div class="probleContent">',
				'<div style="display:inline-block;width:50%">huangcheng</div>',
				'<div style="display:inline-block;width:50%;text-align:right;">0 min ago</div>',
				'</div>',
				'</div>',
				'<div style="position:absolute;top:16px;left:8px">',
				'<div class="problemList-img">',
				'<img style="width:25px;height:25px;-webkit-border-radius:.2em" src="resources/images/status/third-status.png">',
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
			height:'75px',
			itemId:'latestReply',
			cls:'lastestReplyCls',
			style : 'background : white',
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
	}
});

