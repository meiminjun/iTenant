/**
 * 签名
 * @class iTenants.view.SignatureView
 * @author duwei
 * @date 2014-12-29
 */
Ext.define('iTenants.view.SignatureView', {
	extend: 'Ext.Container',
	xtype : 'signatureView',
	
	requires : ['iTenants.view.FreeDraw'],
	config: {
		showAnimation: {
            type: 'slide',
	        direction: 'up'
	    },
	    hideAnimation: null,
		modal : true,
		hideOnMaskTap : true,
		scroller : false,
	    layout: 'vbox',
	    width : '95%',
	    height : '60%',
	    centered : true,
		items :[{
			xtype : 'freeDraw'
		}]
	}
});