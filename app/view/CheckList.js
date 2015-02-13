/*
 * HandingOver 页面
 * author: luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.view.CheckList', {
	extend: 'Ext.dataview.List',
    xtype : 'checkList',
    config: {
    	itemId: 'checkList',
		name: 'checkList',
		cls: 'checkList',
		disableSelection: true,
		allowDeselect: false,
		scrollable: true,
		store: 'checkList',
		loadingText : false,
		grouped : true,
    	scrollable: {
			directionLock: true,
			direction: 'vertical'
		},
		itemTpl:[
		    '<div class="checkListItem">',
				'<div class="state">',
					'<tpl if="Status==0">',
						'<div class="grayState"></div>',
					'<tpl elseif="Status==1">',
						'<div class="redState"></div>',
					'<tpl else>',
						'<div class="greenState"></div>',
					'</tpl>',
				'</div>',
				'<div class="name"><p>{CheckPointDes}</p>{[this.getBrHtml(values.CheckPoint)]}</div>',
				'<div class="next"></div>',
			'</div>',
			{
		    	getBrHtml: function(text){
		    		return text.replace(/\n/gi,'<br />');
		    	}
			}
		],
        items: [
        		{
        			xtype: 'container',
    				scrollDock: 'top',
        			items: [
		            {
		                xtype: 'container',
		                docked: 'top',
		                name: 'handingDetail',
		                cls: 'handingDetail',
		                tpl: [
		                      '<div class="first">',
		                      	'<div class="light{LightStatus}"></div>',
		                      	'<div class="name">{OrderName}</div>',
		                      '</div>',
		                      '<div class="second">',
								'<div class="title">{[this.getNumberTitle()]}</div>',
								'<div class="number">{ShopNum}</div>',
		                      '</div>',
		                      '<div class="thirth">',
								'<div class="title">{[this.getDateTitle()]}</div>',
								'<div class="date">{EnterTime}</div>',
		                      '</div>',
		                      '<div class="fourth" >',
		                      	'<div class="title">{[this.getDetailTitle()]}</div>',
		                      	'<div></div>',
		                      	'<div class="next"></div>',
		                      '</div>',
		                {
							getNumberTitle: function(){
							    return 'Unit No';
							},
							getDateTitle: function(){
								return handingOverCtr.orderRecord.data.OrderType === "1" ? 'Date of Handover' : 'Date of Takeover';
							},
							getDetailTitle: function(){
								return 'More Details';
							}
		                }      
		                ],
		                listeners: {
		        			tap: {
		        				element: 'element',
		        				fn: function(e, target){
		        					if( handingOverCtr.contains(this.element.query('.fourth')[0],target)){
		        						handingOverCtr.goToOrderDetails();
		        					}
		        				}
		        			}
		        		}
		                
		            },
		        	{
		        		xtype: 'label',
		        		docked: 'top',
		        		cls: 'subtitleLabel',
		        		html: 'Checklist'
		        	}        			
        			]
        		}

        ]
    }
});