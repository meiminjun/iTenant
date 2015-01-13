/**
 * @desc	商场列表
 * @author	meiminjun
 * @date	2014/12/29
 */
Ext.define('iTenants.view.MarketList', {
	extend: 'Ext.dataview.List',
	xtype: 'MarketList',	
	config: {
		itemId : 'MarketList',
        useSimpleItems : true,
		variableHeights : true,
//		infinite : true,
		disableSelection : true,
		allowDeselect : false,
		scrollToTopOnRefresh : false,
		scrollable: {
            directionLock: true,
            direction: 'vertical'
        },
        store: 'MarketListStore',
		cls : "marketList",
		pressedCls : 'customListItem-item-pressed',
		selectedCls : 'customListItem-item-selected',
		itemTpl: [
	        '<div style="position:relative;top:15px;left:-5px">',
				'<div class="avatar-img">',
					'<img class="listImgDef" src="data:image/png;base64,{ProjectImage}" />',
				'</div>', 
			'</div>',
			'<div class="avatar-row defaultFont-style">',
				'<div class="head text-overflow"><b>{ProjectName}</b></div>',
				'<div class="rowscontent">{Description}</div>',
			'</div>', 
//			'<div>',
//              '<div style="position: absolute;bottom: 0;right: 0;margin: 0px 87px 5px 0px;max-width: 30%;height: 20px;background-color: transparent;font-size:.8em;">{PassedRealPercent}%</div>' ,
//              '<div style="position: absolute;bottom: 0;right: 0;margin: 0px 24px 7px 0px;width:60px;height: 20px;">' ,
//                  '<div style="width:100%;position: relative;height: 20px;">',
//                      '<div style="text-align:left;height:100%;width: {PassedPercent}%;left:0%;background-color:#23903F;position: absolute;">' ,
//                      '</div>',
//                      '<div style="height:100%;width: {ExpiredPercent}%;left:{PassedPercent}%;background-color: #FFFF01;position: absolute;">',
//                      '</div>',
//                      '<div style="height:100%;width: {NotPassPercent}%;left:{TwoLevelLeftPercent}%;background-color:#DA3A3A;position: absolute;">',
//                      '</div>',
//                      '<div style="height:100%;width: {UncheckedPercent}%;left:{ThreeLevelLeftPercent}%;background-color: #909193;position: absolute;">',
//                      '</div>',
//                  '</div>',
//              "</div>",
//          '</div>',
			'<div>',
//				'<div class="projectListPaused-bg" style="margin:-4em -4em auto auto;"></div>',
//				'<div class="projectListCompleted-bg" style="margin:-4em -4em auto auto;"></div>',
				'<div class="arrow-black"></div>',
				'<div class="detailImg"></div>',
			'</div>'
		]
	}
});
