/**
 * 缓存列表store
 * 
 * @author yangkun
 * @create 2013-10-16
 */
Ext.define('iTenants.store.OfflineLocalStore', {
	extend : 'Ext.data.Store',
	requires:['Ext.data.proxy.LocalStorage'],
	config : {
		autoLoad : false,
		fields : [ 'cacheItem', 'cacheDate', 'resTxt' ],
		proxy : {
			type : 'localstorage',
			id : 'iTenants'
		}
	}
});