/**
 * 拍照actionsheet
 * 
 * @author duwei
 * @create 2014-12-30
 */
Ext.define('iTenants.view.PhotoActionSheet', {
	extend : 'Ext.ActionSheet',
	xtype : 'photoActionSheet',
	config : {
		ui : 'normal',
        hideOnMaskTap : true,
        cls : 'actonSheetCls',
		items : [ {
			// 拍照
			name : 'Pic',
			cls : 'actionsheetBtn',
			locales : {
				text : 'actionSheet.Photograph'
			},
			handler : function() {
				this.up('photoActionSheet').hide();
				fileUploadCtr.photographFun();
			}
		}, {
			// 相册
			name : 'Album',
			cls : 'actionsheetBtn',
			locales : {
				text : 'actionSheet.Album'
			},
			handler : function() {
				this.up('photoActionSheet').hide();
				fileUploadCtr.albumFun();
			}
		}, {
			name : 'cancel',
			cls : 'actionsheetBtn',
			locales : {
				text : 'actionSheet.cancel'
			},
			handler : function() {
				this.up('photoActionSheet').hide();
			}
		} ]
	}
});