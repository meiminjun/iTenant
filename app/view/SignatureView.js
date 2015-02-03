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
	    width : '100%',
	    height : '55%',
	    top : '45%',
	    centered : false,
		items :[{
			xtype : 'freeDraw'
		}]
	}
});