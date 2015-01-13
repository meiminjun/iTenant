/**
 * 批注图片列表store
 * @class iTenants.store.PostilImgList
 * @author duwei
 * @date 2014-12-30
 */
Ext.define('iTenants.store.PostilImgList', {

    extend: 'Ext.data.Store',

    requires: [
    	'iTenants.model.PostilImgList'
    ],

    config: {
    	model: 'iTenants.model.PostilImgList'
    }
});