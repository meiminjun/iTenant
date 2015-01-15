Ext.define('iTenants.view.Main', {
    extend : 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Button',
        'iTenants.view.MarketList'
    ],
    config: {
		autoDestroy: false,
        itemId: 'main',
	    layout: 'vbox',
        items: [
            {
            	xtype: 'titlebar',
				docked: 'top',
				title: 'Malls',
				cls: 'customToolBar',
				items: [{
					xtype: 'button',
					ui: 'plain',
					iconCls: 'backBtnCls',
					iconMask: true,
					docked: 'left',
					handler: function(e) {
						mainCtr.mainBackBtnTapFun();
					}
	            }]
			},
			{
				xtype : 'marketList',
				flex : 8
			}
        ]
    }
});
