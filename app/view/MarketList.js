/**
 * @desc	商场列表
 * @author	meiminjun
 * @date	2014/12/29
 */
Ext.define('iTenants.view.MarketList', {
	extend: 'Ext.dataview.List',
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
        store: 'MarketListStore',
		cls : "marketList bgCls",
		selectedCls : '',
		itemTpl: [
	        '<div style="position:absolute;top:22px;left:11px">',
				'<div class="avatar-img">',
					'<img class="listImgDef" src="{ProjectImage}" />',
				'</div>', 
			'</div>',
			'<div class="avatar-row defaultFont-style" style="margin-left:67px;">',
				'<div class="head text-overflow"><span class="proName">{ProjectName}</span></div>',
				'<div class="rowscontent">{Description}</div>',
				'<span class="num">{num}</span>',
			'</div>', 
			'<div>',
				'<div class="arrow-black"></div>',
				'<div class="detailImg"></div>',
			'</div>'
		]
	}
});
