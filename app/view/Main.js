Ext.define('iTenants.view.Main', {
    extend : 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Button',
        'iTenants.view.MarketList',
        'Ext.ux.AccordionList'
    ],
    config: {
		autoDestroy: false,
        itemId: 'main',
	    layout: 'vbox',
        items: [
            {
            	xtype: 'titlebar',
				docked: 'top',
				title: 'Properties',
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
				flex : 1
			}
        ]
    }
});
