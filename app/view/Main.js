Ext.define('iTenants.view.Main', {
    extend : 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.SegmentedButton',
        'Ext.ux.AccordionList',
        'Ext.plugin.ListPaging',
        'Ext.plugin.PullRefresh'
    ],
    config: {
//      tabBarPosition: 'bottom',
//      tabBar: {
//          scrollable : 'horizontal'
//      },
		autoDestroy: false,
        itemId: 'main',
	    layout: 'vbox',
        items: [
            {
                xtype: 'titlebar',
                title: 'Malls',
                docked: 'top',
                flex:1,
                cls : 'customToolBar'
            },
			{
				xtype : 'MarketList',
				flex : 8
			},
			{
				xtype : 'toolbar',
				docked : 'bottom',
				flex:1
			},
//          {
//              xtype: 'container',
//              layout: 'card',
//              items: [
//                  {
//                      xtype: 'toolbar',
//                      items: [
//                          {
//                              xtype: 'segmentedbutton',
//                              itemId: 'basic',
//                              centered: true,
//                              items: [
//                                  {
//                                      text: 'Expand',
//                                      action: 'expand'
//                                  },
//                                  {
//                                      text: 'Collapse',
//                                      action: 'collapse'
//                                  }
//                              ]
//                          }
//                      ]
//                  },
//                  {
//                      xtype:'list',
//						store: 'MarketListStore',
//						height:'100%',
//						itemTpl:[
//							'<div> 这是大事发生地方{id}</div>'
//						],
////                      flex: 1,
//                      itemId: 'basic',
//                      listeners: {
////                          initialize: function() {
////                              this.load();
////                          }
//                      }
//                  }
//              ],
//              control: {
//                  'button[action=expand]': {
//                      tap: function() {
//                          this.down('accordionlist').doAllExpand();
//                      }
//                  },
//                  'button[action=collapse]': {
//                      tap: function() {
//                          this.down('accordionlist').doAllCollapse();
//                      }
//                  }
//              }
//          },
//          {
//              title: 'Decorate',
//              iconCls: 'star',
//              layout: 'vbox',
//              items: [
//                  {
//                      xtype: 'toolbar',
//                      items: [
//                          {
//                              xtype: 'segmentedbutton',
//                              itemId: 'decorate',
//                              centered: true,
//                              items: [
//                                  {
//                                      text: 'Expand',
//                                      action: 'expand'
//                                  },
//                                  {
//                                      text: 'Collapse',
//                                      action: 'collapse'
//                                  }
//                              ]
//                          }
//                      ]
//                  },
//                  {
//                      xtype: 'accordionlist',
//                      store: Ext.create('iTenants.store.Task'),
//                      flex: 1,
//                      singleMode: true,
//                      animation: true,
//                      animationDuration: 500,
//                      showCount: true,
//                      indent: true,
//                      itemId: 'decorate',
//                      listeners: {
//                          initialize: function() {
//                              this.load();
//                          }
//                      }
//                  }
//              ],
//              control: {
//                  'button[action=expand]': {
//                      tap: function() {
//                          this.down('accordionlist').doAllExpand();
//                      }
//                  },
//                   'button[action=collapse]': {
//                      tap: function() {
//                          this.down('accordionlist').doAllCollapse();
//                      }
//                  }
//              }
//          },{
//              title: 'Paging',
//              iconCls: 'info',
//              layout: 'vbox',
//              items: [
//                  {
//                      xtype: 'accordionlist',
//                      store: Ext.create('iTenants.store.BigTask'),
//                      listConfig: {
//                      	variableHeights : true,
//                  		infinite : true,
//                  		disableSelection : true,
//                  		allowDeselect : false,
//                  		plugins: [{
//                    			xclass : 'Ext.plugin.PullRefresh',
//                    			locales : {
//                    				loadingText : 'pullRefresh.loadingText',
//                    				lastUpdatedText : 'pullRefresh.lastUpdatedText',
//                    				pullRefreshText : 'pullRefresh.pullRefreshText',
//                    				releaseRefreshText : 'pullRefresh.releaseRefreshText'
//                    			}
//                    		},{
//                    			xclass : 'Ext.plugin.ListPaging',
//                    			autoPaging : false,
//                    			locales : {
//                    				loadMoreText : 'listPaging.loadMoreText',
//                    				noMoreRecordsText : 'listPaging.noMoreRecordsText'
//                    			}
//                    		}],
//                      },
//                      flex: 1,
//                      itemId: 'paging',
//                      listeners: {
//                          initialize: function() {
//                              this.load();
//                          }
//                      }
//                  }
//              ],
//              control: {
//                  'button[action=expand]': {
//                      tap: function() {
//                          this.down('accordionlist').doAllExpand();
//                      }
//                  },
//                   'button[action=collapse]': {
//                      tap: function() {
//                          this.down('accordionlist').doAllCollapse();
//                      }
//                  }
//              }
//          },{
//              title: 'Components',
//              iconCls: 'search',
//              layout: 'vbox',
//              items: [
//                  {
//                      xtype: 'toolbar',
//                      items: [
//                          {
//                              xtype: 'segmentedbutton',
//                              itemId: 'components',
//                              centered: true,
//                              items: [
//                                  {
//                                      text: 'Expand',
//                                      action: 'expand'
//                                  },
//                                  {
//                                      text: 'Collapse',
//                                      action: 'collapse'
//                                  }
//                              ]
//                          }
//                      ]
//                  },
//                  {
//                      xtype: 'accordionlist',
//                      store: Ext.create('iTenants.store.Components'),
//                      flex: 1,
//                      indent: true,
//                      useComponents: true,
//                      defaultType: 'examplelistitem',
//                      itemId: 'components',
//                      listeners: {
//                          initialize: function() {
//                              this.load();
//                              this.addCls('components-view');
//                          }
//                      }
//                  }
//              ],
//              control: {
//                  'button[action=expand]': {
//                      tap: function() {
//                          this.down('accordionlist').doAllExpand();
//                      }
//                  },
//                   'button[action=collapse]': {
//                      tap: function() {
//                          this.down('accordionlist').doAllCollapse();
//                      }
//                  }
//              }
//          }
        ],
        listeners: {
            // XXX: For grouped accordionList
            activeitemchange: function(self, newItem) {
                var me    = this,
                    list  = newItem.down('accordionlist'),
                    store = list.getStore();

                if (store.getCount() === 0) {
                    me.setMasked({
                        xtype: 'loadmask'
                    });
                    store.on('load', function() {
                        me.setMasked(false);
                    }, me, { single: true });
                    store.load({
                        callback: function() {
                            list.getList().refresh();
                        }
                    });
                }
            }
        }
    }
});
