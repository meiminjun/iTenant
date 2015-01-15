/**
 * CarouselView
 */
Ext.define('iTenants.view.CarouselView', {
	extend : 'Ext.Container',
	xtype : 'carouselView',
	requires : ['Ext.carousel.Carousel'],
	config : {
		layout : 'fit',
        items:[{
            xtype: 'titlebar',
            docked: 'top',
            cls : 'customToolBar',
            title : 'Floor Plan',
            items:[{
                xtype : 'button',
                ui:'plain',
                iconCls:'backBtnCls',
                iconMask:true,
                align : 'left',
                handler : function(){
            		navCtr.popToPrev();
                }
            }]
        },{
            xtype:'carousel'
        }]
	}
});