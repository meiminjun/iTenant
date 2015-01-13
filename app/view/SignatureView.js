/**
 * 签名
 * @class iTenants.view.SignatureView
 * @author duwei
 * @date 2014-12-29
 */

Ext.define('iTenants.view.SignatureView', {
    extend: 'Ext.Container',
    xtype : 'signatureView',
    
    requires : [
        'Ext.TitleBar',
        'iTenants.ux.FreeDrawComponent'
    ],
    config: {
        itemId: 'signatureView',
        layout : 'vbox',
        lastEvent : 0,
        ui : 'normal',
        hideOnMaskTap : true,
        items: [
			{
			    xtype: 'titlebar',
			    docked: 'top',
			    locales : {
			    	title : 'signatureView.title'
			    },
			    cls : 'customToolBar',
			    items: [
			        {
			        	xtype : 'button',
			        	itemId: 'backButton',
						ui : 'plain',
						iconCls : 'backBtnCls',
						iconMask : true,
						docked : 'left',
					    handler : function(e){
					    	navCtr.popToPrev();
					    }
			        },
			        {
			        	// clear test
			        	xtype : 'button',
			        	itemId : 'orderReplyBtn',
			        	ui : 'customTopBtn',
			        	align : 'right',
			        	text : 'Clear',
			        	handler : function(){
			        		var draw = Ext.getCmp('free-paint');
			        		draw.getSurface().destroy();
			        		draw.getSurface('overlay').destroy();
			        		draw.renderFrame();
			        	}
			        },
			        {
			        	xtype : 'button',
			        	itemId : 'orderReplyBtn',
			        	ui : 'customTopBtn',
			        	align : 'right',
			        	locales : {
			        		text : 'signatureView.saveText'
			        	},
			        	handler : function(){
			        		Ext.Msg.alert('Save');
			        	}
			        }
			    ]
			},{
				xClass : 'iTenants.ux.FreeDrawComponent',
				id : 'free-paint',
				flex : 1
			}
        ]
    }
});