/**
 * @desc	工单检查历史列表
 * @author	meiminjun/duwei
 * @date	2015/1/14
 */
Ext.define('iTenants.view.InspectList', {
	extend: 'Ext.dataview.List',
	xtype: 'inspectList',
	
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
			'<h3 class="problemName" style="font-weight:normal;">1. Cracks found on flooring Area <br />2.  Scratches found on flooring Area.</h3>',
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
			xtype: 'container',
			itemId : 'inspectListItem',
			scrollDock: 'top',
			items : [{
				xtype : 'container',
				itemId: 'checkDetail',
				name: 'checkDetail',
				cls: 'checkDetailCls',
				style: 'background : white',
				tpl: Ext.create('Ext.XTemplate',
					'<tpl>',
					'<div class="problemList-Div defaultFont-style">',
					'<div class="problemList-row">',
					'<h3 class="problemName" style="font-weight:normal;"><p style="font-weight: bold;">{CheckPointDes}</p>{[this.getBrHtml(values.CheckPoint)]}</h3>',
					//				'<h3 class="problemName">Type & Cat;(TBA by Project)</h3>',
					'<div class="probleContent">',
					'<div style="display:inline-block;width:50%">Huang Cheng</div>',
					'<div style="display:inline-block;width:50%;text-align:right;">0 min ago</div>',
					'</div>',
					'</div>',
					'<div style="position:absolute;top:16px;left:8px">',
					'<div class="problemList-img">',
						'<tpl if="Status==\'0\'">',
							'<img style="width:25px;height:25px;-webkit-border-radius:.2em" src="resources/images/status/sixth-status.png">',
						'<tpl elseif="Status==\'1\'">',
							'<img style="width:25px;height:25px;-webkit-border-radius:.2em" src="resources/images/status/fourth-status.png">',
						'<tpl else>',
							'<img style="width:25px;height:25px;-webkit-border-radius:.2em" src="resources/images/status/third-status.png">',
						'</tpl>',
					'</div>',
					'</div>',
					'</div>',
					'</tpl>', {
						compiled: true,
						getBrHtml: function(str){
							return str.replace(/\n/g,'<br />');
						}
					})
			},{
				xtype: 'label',
				cls: 'subtitleLabel',
				itemId : 'latestLabel',
				html : 'Latest Reply'
			},{
				//最新回复
				xtype: 'container',
				name: 'latestReply',
				itemId: 'latestReply',
				cls: 'lastestReplyCls',
				style: 'background : white',
				tpl: Ext.create(
				'Ext.XTemplate',
					'<tpl>',
						'<div class="problemList-Div defaultFont-style">',
							'<div class="problemList-row">',
								'<p class="problemName" style="font-weight:normal;padding:10px 0px;">{[this.getBrText(values.Comments)]}</p>',
								'<tpl if="PathArrayString !==\'\'">',
									'<div class="probleContent" style="margin-top:-6px;">',
										'<div class="imgCont">',
											'<tpl for="ImagePath">',
												'<input  type="image" class="imgArr" onclick="fileUploadCtr.viewPic(false,\'{parent.PathArrayString}\',{[xindex]},false)" src="{Url}" width="44px" height="44px" />',
											'</tpl>',
										'</div>',
									'</div>',
								'</tpl>',
							'</div>',
						'</div>',
					'</tpl>', {
					compiled: true,
					getBrText: function(string){
						return string.replace(/\n/gi,'<br />');
					}
				})
			},{
				xtype: 'label',
				docked: 'bottom',
				itemId: 'hisLabel',
				cls: 'subtitleLabel',
				html : 'History'
			}]
		}]
	}
});