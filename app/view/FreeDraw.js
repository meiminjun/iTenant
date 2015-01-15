(function () {

    var seed = .5, count = 0;

    function random() {
        seed *= 15.1;
        seed -= Math.floor(seed);
        return seed;
    }

    var sprite, list = [], old1 = [0, 0], old2 = [0, 0];
    /**
     * Demonstrates smoothening and cubic bezier Curve rendering
     * @class iTenants.view.FreeDraw
     * @author duwei
     * @date 2014-12-30
     */
    Ext.define('iTenants.view.FreeDraw', {
        extend: 'Ext.Container',
        xtype : 'freeDraw',
        requires: ['Ext.TitleBar','Ext.Button','iTenants.ux.FreeDrawComponent'],
        lastEvent: 0,
        config: {
            cls: 'card1',
            layout: 'fit',
            height : '100%',
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
            	},
                {
                    xclass: 'iTenants.ux.FreeDrawComponent',
                    id: 'free-paint'
                }
            ]
        }
    });
})();