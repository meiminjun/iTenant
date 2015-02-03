/**
 * @desc	工单检查列表
 * @author	meiminjun/duwei
 * @date	2015/1/14
 */
Ext.define('iTenants.view.InspectList', {
	extend: 'Ext.dataview.List',
	xtype: 'inspectList',
	fullscreen: true,
	requires: [
		'Ext.Toolbar',
		'Ext.Container',
		'Ext.XTemplate',
		'Ext.plugin.ListPaging',
		'Ext.plugin.PullRefresh'
	],

	config: {
		itemId: 'inspectList',
		useSimpleItems: true,
		variableHeights: true,
		infinite: true,
		disableSelection: true,
		allowDeselect: false,
		scrollToTopOnRefresh: false,
		flex: 1,
		store: 'inspectionDetailStore',
		cls: 'inspectListCls bgCls',
		itemCls: 'itemcls',
		scrollable: {
			directionLock: true,
			direction: 'vertical'
		},
		itemTpl: [
			'<div class="problemList-Div defaultFont-style">',
			'<div class="problemList-row">',
			//					'<h3 class="problemName" style="font-weight:normal;">{Description}</h3>',
			'<h3 class="problemName" style="font-weight:normal;">Defect Found</h3>',
			'<div class="probleContent">',
			'<div>',
			'<div style="display:inline-block;width:50%">2 mins ago</div>',
			'<div style="display:inline-block;width:50%;text-align:right;">Jeffrey Ang</div>',
			'</div>',
			'<div class="imgCont">',
			//							'<img class="listImgDef" style="width:44px;height:44px;" src="{ProjectImage}" />',
			'<tpl for="Thumbnail">',
			'<input  type="image" class="imgArr" onclick="fileUploadCtr.viewPic(false,\'{parent.PathArrayString}\',{[xindex]},false)" src="{Url}" width="44px" height="44px" />',
			//							'<div style="display:inline-block;float: right;">Jeffrey Ang</div>',
			'</tpl>',
			'</div>',
			'</div>',
			'</div>',
			'<div style="position:absolute;top:16px;left:8px">',
			'<div class="problemList-img">',
			'<img style="width:25px;height:25px;-webkit-border-radius:.2em" src="resources/images/status/fourth-status.png">',
			'</div>',
			'</div>',
			'</div>',
		],
		plugins: [{
			type: 'listpaging',
			//		    autoPaging: false,
			pluginId: 'inspectListMore',
			cls: 'test',
			locales: {
				loadMoreText: 'listPaging.loadMoreText',
				noMoreRecordsText: 'listPaging.noMoreRecordsText'
			}
		}],
		items: [{
			//顶层的详情内容
			xtype: 'container',
			itemId: 'checkDetail',
			name: 'checkDetail',
			scrollDock: 'top',
			//			height:'98px',
			//			minHeight:'98px',
			//			maxHeight:'200px',
			cls: 'checkDetailCls',
			style: 'background : white',
			tpl: Ext.create('Ext.XTemplate',
				'<tpl>',
				'<div class="problemList-Div defaultFont-style">',
				'<div class="problemList-row">',
				'<h3 class="problemName">{CheckPoint} ({CheckPointDes})</h3>',
				//				'<h3 class="problemName">Type & Cat;(TBA by Project)</h3>',
				'<div class="probleContent">',
				'<div style="display:inline-block;width:50%">Huang Cheng</div>',
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
				xtype: 'label',
				docked: 'bottom',
				cls: 'subtitleLabel',
				html : 'Latest Reply'
			}]
		}, {
			//最新回复
			xtype: 'container',
			scrollDock: 'top',
			name: 'latestReply',
			//			height:'75px',
			//			minHeight:'75px',
			//			maxHeight:'75px',
			itemId: 'latestReply',
			cls: 'lastestReplyCls',
			style: 'background : white',
			tpl: Ext.create('Ext.XTemplate',
				'<tpl>',
				'<div class="latestReply-Div defaultFont-style">',
				//				'<p class="content">{Description}</p>',
				'<p class="content">Checked Ok</p>',
				'</div>',
				'</tpl>', {
					compiled: true,
				}),
			items: [{
				xtype: 'label',
				docked: 'bottom',
				cls: 'subtitleLabel',
				html : 'History'
			}]
		},
//		{
//			xtype: 'button',
//			scrollDock: 'bottom',
//			id: 'loadMoreBtn',
//			ui: 'plain',
//			cls: 'loadMoreBtnCls',
////			text: "加载更多",
//			locales: {
//			  text:'listPaging.loadMoreText'
//		   	},
//			handler: function() {
////				this.up('problemList').fireEvent("loadMore", this);
//			}
//		}
		]
	}
});