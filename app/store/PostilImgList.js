/**
 * 批注/店铺图纸列表store
 * @class iTenants.store.PostilImgList
 * @author duwei
 * @date 2014-12-30
 */
Ext.define('iTenants.store.PostilImgList', {

    extend: 'Ext.data.TreeStore',

    requires: [
    	'iTenants.model.PostilImgList',
    	'Ext.data.proxy.Ajax'
    ],

    config: {
        defaultRootProperty: 'rows',
        model: 'iTenants.model.PostilImgList',

        proxy: {
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'rows'
            }
        }
    }
});