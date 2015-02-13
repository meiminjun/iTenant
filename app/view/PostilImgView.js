/**
 * 批注图纸预览
 * @class iTenants.view.PostilImgView
 * @author duwei
 * @date 2015-01-20
 */
Ext.define('iTenants.view.PostilImgView', {
	extend : 'Ext.Container',
	xtype : 'postilImgView',
	requires : ['Ext.carousel.Carousel'],
	config : {
		autoDestroy: false,
		itemId: 'postilImgView',
		scrollable: false,
	    layout : 'fit',
	    showAnimation: 'fadeIn',
		hideAnimation: null,
        items:[{
            xtype: 'titlebar',
            docked: 'top',
            cls : 'customToolBar',
            items:[{
                xtype : 'button',
                ui:'plain',
                iconCls:'backBtnCls',
                iconMask:true,
                align : 'left',
                handler : function(){
            		navCtr.popToPrev();
                }
            },{
            	xtype: 'button',
	        	itemId: 'postilBtn',
	        	align: 'right',
	        	ui: 'plain',
	            iconCls:'postilBtnCls',
	            iconMask:true,
			    hideAnimation: 'fadeOut',
	        	handler : function(){
            		var url = fileUploadCtr.urlImg;
	            	iTenants.util.PubOperation.convertImgToBase64(url,function(base64Img){
	            		PhoneGapAPI.getPostilImg(base64Img,function(result){
//		                	console.log("getPostilImg result: "+result);
		                	navCtr.popToPrev('DefectView');
		                	// 填充标注缩略图
		        			Ext.getDom('postilDelBtn1').style.display = "block";
							Ext.getDom('postilImage1').src = "data:image/jpeg;base64," + result;;
							Ext.getDom('postilImage1').style.display = 'inline';
		                	window.localStorage.setItem("_globleParam_postilImgeUrl1",result);
		                });
	                });
	        	}
			}]
        }]
	},
	destroyChildFn: function(){
		var child = navCtr['PostilImgView'].getComponent('imageView');
    	if(child){
    		child.destroy();
    	}
    }
});