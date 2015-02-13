/**
 * 批注图片列表model
 * @class iTenants.model.PostilImgList
 * @author duwei
 * @date 2014-12-30
 */
Ext.define('iTenants.model.PostilImgList', {
	extend: 'Ext.data.Model',
    config: {
       fields: [
       		// image url
            {name: 'url', type: 'string'},
            // image title
            {name : 'title',type : 'string'}
        ] 
    }
});