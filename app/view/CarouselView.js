/**
 * carousel图片预览
 * @class iTenants.view.CarouselView
 * @author duwei
 * @date 2015-01-15
 */
Ext.define('iTenants.view.CarouselView', {
	extend : 'Ext.Container',
	xtype : 'carouselView',
	requires : ['Ext.carousel.Carousel'],
	config : {
		autoDestroy: false,
		itemId: 'carouselView',
		scrollable: false,
	    layout : 'fit',
	    showAnimation: 'fadeIn',
		hideAnimation: null,
        items:[{
            xtype: 'titlebar',
            docked: 'top',
            cls : 'customToolBar',
            title : 'View',
            items:[{
                xtype : 'button',
                ui:'plain',
                iconCls:'backBtnCls',
                iconMask:true,
                align : 'left',
                handler : function(){
            		// android back要加入判断
                	fileUploadCtr.carouselView.hide();
                }
            }]
        },{
            xtype:'carousel'
        }]
	}
});