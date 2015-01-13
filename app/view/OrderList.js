/*
 * OrderList 工单列表页面 list表单
 * author: luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.view.OrderList', {
	extend: 'Ext.dataview.List',
	xtype: 'orderList',
	requires: ['Ext.field.Search', 'Ext.plugin.ListPaging', 'Ext.plugin.PullRefresh'],

    config: {
	    itemId: 'orderList',
		useSimpleItems: true,
		variableHeights: true,
		infinite: true,
		disableSelection: true,
		allowDeselect: false,
		scrollToTopOnRefresh: false,
		
		cls: 'orderList',
		scrollable: {
			directionLock: true,
			direction: 'vertical'
		},
		items: [{
			xtype: 'searchfield',
			cls: 'searchfield',
			placeHolder: 'keywords',
			docked: 'top'
		},
		{
		    xtype: 'segmentedbutton',
		    name: 'state',
		    cls: 'state',
		    docked: 'top',
		    items: [
		    {
		    	xtype: 'button',
		    	cls: 'segBtn',
		    	name: 'tasks',
		    	pressedCls : '',
		    	text: 'Tasks',
		    	flex: 1
		    },
		    {
		    	xtype: 'button',
		    	cls: 'segBtn',
		    	name: 'completed',
		    	pressedCls : '',
		    	text: 'Completed',
		    	flex: 1
		    },		    
		    {
		    	xtype: 'button',
		    	cls: 'segBtn',
		    	name: 'all',
		    	pressedCls : '',
		    	text: 'All',
		    	flex: 1
		    }
		    ]
		},
		{
		    xtype: 'segmentedbutton',
		    cls: 'type',
		    name: 'type',
		    docked: 'bottom',
		    items: [
		    {
		    	xtype: 'button',
		    	cls: 'segBtn',
				iconCls : 'enter',
				iconMask : true,
				iconAlign : 'center',
		    	name: 'tasks',
		    	pressedCls : '',
		    	badgeCls: 'orderCount',
		    	flex: 1
		    },
		    {
		    	xtype: 'button',
		    	cls: 'segBtn',						
		    	iconCls : 'out',
				iconMask : true,
				iconAlign : 'center',
		    	name: 'completed',
		    	pressedCls : '',
		    	badgeCls: 'orderCount',
		    	flex: 1
		    }
		    ]
		}],
		itemTpl: [
		    
		    '<div class="orderListItem">',
		    	'<div class="first">',
		    		'<tpl if="state==0">',
		    			'<div class="grayState"></div>',
		    		'<tpl else>',
		    			'<div class="greenState"></div>',
		    		'</tpl>',
		    	'</div>',
		    	'<div class="second">{name}</div>',
		    	'<div class="third">',
		    		'<div class="number">{number}</div>',
		    		'<div class="date">{date}</div>',
		    	'</div>',
		    	'<div class="fourth"></div>',
		    '</div>'
		],
		plugins: [{
		    xclass: 'Ext.plugin.ListPaging',
		    autoPaging: false,
		    locales: {
		      loadMoreText: 'listPaging.loadMoreText',
	  	      noMoreRecordsText: 'listPaging.noMoreRecordsText'
		    }
	    }]
  }
});