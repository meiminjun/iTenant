/*
 * HandingOver 页面
 * author: luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.view.PreInspectionList', {
	extend: 'Ext.dataview.List',
    xtype : 'preInspectionList',

    config: {
    	autoDestroy: false,
        itemId: 'preInspectionList',
        cls: 'preInspectionList bgCls',
		useSimpleItems: true,
		variableHeights: true,
		disableSelection: true,
		allowDeselect: false,
		scrollToTopOnRefresh: false,
		
		store: 'preInspectionListStore',
		grouped : true,
		loadingText : false,
		scrollable: {
			directionLock: true,
			direction: 'vertical'
		},
		itemTpl: [
		'<div class="checkListItem">',
			'<div class="state">',
/*				'<tpl if="Status==0">',
					'<div class="grayState"></div>',
				'<tpl elseif="Status==1">',
					'<div class="greenState"></div>',
				'<tpl else>',
					'<div class="redState"></div>',
				'</tpl>',*/
			'<div></div>',
			'</div>',
			'<div class="name"><p>{CheckPointDes}</p>{[this.getBrHtml(values.CheckPoint)]}</div>',
			'</div>',			
		'</div>',
		'<div class="imgs">',
			'{[this.getImgsHtml(values.imgs_s)]}',
		'</div>',
		{
			getBrHtml: function(text){
	    		return text.replace(/\n/gi,'<br />');
	    	},
			getImgsHtml : function(imgs){
				var imgsHtml = [];
				Ext.each(imgs,function(item){
					imgsHtml.push('<img class="img" src="' + item + '" />');
				});
				return imgsHtml.join('');
			}
		}
		],
		plugins: [{
		    xclass: 'Ext.plugin.ListPaging',
		    autoPaging: false,
		    locales: {
		      loadMoreText: 'orderIndex.loadMoreText',
	  	      noMoreRecordsText: 'orderIndex.noMoreRecordsText'
		    }
	    }]
		
    }
});