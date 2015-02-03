/**
 * @desc	商场列表
 * @author	meiminjun
 * @date	2014/12/29
 */
Ext.define('iTenants.view.MarketList', {
	extend: 'Ext.dataview.List',
	require:['Ext.plugin.ListPaging','Ext.plugin.PullRefresh'],
	xtype: 'marketList',	
	config: {
		itemId : 'marketList',
        useSimpleItems : true,
		variableHeights : true,
		infinite : false,
		disableSelection : true,
		allowDeselect : false,
		scrollToTopOnRefresh : false,
		scrollable: {
            directionLock: true,
            direction: 'vertical'
        },
        store: 'marketListStore',
		cls : "marketList bgCls",
		loadingText:false,
//		selectedCls : '',
		itemTpl: [
	        '<div style="position:absolute;top:22px;left:11px">',
				'<div class="avatar-img">',
					'<img class="listImgDef" src="{Image}" />',
				'</div>', 
			'</div>',
			'<div class="avatar-row defaultFont-style" style="margin-left:67px;">',
				'<div class="head text-overflow"><span class="proName">{MarketShortName}</span></div>',
				'<div class="rowscontent">{Address}</div>',
				'<span class="num">{TasksCount}</span>',
			'</div>', 
			'<div>',
				'<div class="arrow-black"></div>',
				'<div class="detailImg"></div>',
			'</div>'
		]
//		plugins: [{
//		    type: 'listpaging',
//		    locales: {
//		      loadMoreText: 'listPaging.loadMoreText',
//	  	      noMoreRecordsText: 'listPaging.noMoreRecordsText'
//		    }
//	    }]
	}
});
