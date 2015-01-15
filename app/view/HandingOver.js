/*
 * HandingOver 页面
 * author: luyifan
 * date: 2014-12-29
 */

Ext.define('iTenants.view.HandingOver', {
    extend: 'Ext.Container',
    xtype : 'handingOver',

    config: {
    	autoDestroy: false,
        itemId: 'handingOver',
        cls: 'handingOver',
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'titlebar',
                cls: 'titlebar',
                docked: 'top',
                title: 'Handing Over',
                items: [
                    {
                        xtype: 'button',
        				name: 'back',
        				iconCls : 'backBtnCls',
        				iconMask : true,
                        itemId: 'backButton',
                        ui: 'plain',
                        handler : function(e){
                        	navCtr.popToPrev();
                        }
                    },
                    {
                    	xtype: 'button',
                    	name : 'emailBtn',
                    	align: 'right',
                    	ui: 'plain',
                    	cls: 'btn',
                    	icon : 'resources/images/email.png',
                    	iconCls: 'iconBtn'

                    },
                    {
                    	xtype: 'button',
                    	name: 'examine',
                    	align: 'right',
                    	ui: 'plain',
                    	cls: 'btn',
                    	icon : 'resources/images/pizhu.png',
                    	iconCls: 'iconBtn'

                    }
                ]
            },
        	{
        		xtype: 'list',
        		name: 'checkList',
        		cls: 'checkList',
        		flex: 8,
        		disableSelection: true,
        		allowDeselect: false,
        		scrollable: true,
        		store: 'checkList',
	        	scrollable: {
	    			directionLock: true,
	    			direction: 'vertical'
	    		},
        		itemTpl:[
        		    '<div class="checkListItem">',
						'<div class="state">',
							'<tpl if="state==0">',
								'<div class="grayState"></div>',
							'<tpl else>',
								'<div class="greenState"></div>',
							'</tpl>',
						'</div>',
						'<div class="name">{name}</div>',
						'<div class="next"></div>',
					'</div>'
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
		                data:{
		                	state:0,
		                	name: 'Adidas',
		                	number: '01-01',
		                	date: '2014-11-11'
		                },
		                tpl: [
		                      '<div class="first">',
		                      	'<tpl if="state==0">',
		                      		'<div class="grayState"></div>',
		                      	'<tpl else>',
		                      		'<div class="greenState"></div>',
		                      	'</tpl>',
		                      	'<div class="name">{name}</div>',
		                      	'<div class="next"></div>',
		                      '</div>',
		                      '<div class="second">',
								'<div class="title">{[this.getNumberTitle()]}</div>',
								'<div class="number">{number}</div>',
		                      '</div>',
		                      '<div class="thirth">',
								'<div class="title">{[this.getDateTitle()]}</div>',
								'<div class="date">{date}</div>',
		                      '</div>',
		                      '<div class="fourth" onclick="handingOverCtr.goToOrderDetails()">',
		                      	'<div class="title">{[this.getDetailTitle()]}</div>',
		                      	'<div></div>',
		                      	'<div class="next"></div>',
		                      '</div>',
		                {
							getNumberTitle: function(){
							    return 'Unit No';
							},
							getDateTitle: function(){
								return 'Date of Inspection';
							},
							getDetailTitle: function(){
								return 'More Details';
							}
		                }      
		                ]
		                
		            },
		        	{
		        		xtype: 'label',
		        		docked: 'top',
		        		cls: 'subtitleLabel',
		        		html: 'Checklist'
		        	}        			
        			]
        		},
        		{
        			xtype: 'container',
    				scrollDock: 'bottom',
        			items: [
		        	{
		        		xtype: 'label',
		        		cls: 'subtitleLabel',
		        		html: 'Final'
		        	},
		        	{
		        		xtype: 'container',
		        		cls: 'final',
		        		data: {
		        			name: 'Jeffrey Ang',
		        			date: '1 min ago',
		        			status: 'Completed',
		        			imgSrc: 'resources/images/test/map.png',
		        			signSrc: 'resources/images/test/sign.png'
		        		},
		        		tpl: [
		        		      '<div class="first">',
		        		      	'<div class="name">{name}</div>',
		        		      	'<div class="date">{date}</div>',
		        		      '</div>',
		        		      '<div class="second">',
			      		      	'<div class="status">{status}</div>',
			      		      	'<div class="sign"><img src="{signSrc}" height="30" width="80" /></div>',
			      		      '</div>',
		        		      '<div class="third">',
			      		      	'<img src="{imgSrc}" height="50" width="50"/>',
			      		      '</div>'
		        		]
		        	}          			
        			]
        		}
      		
        		]
        	}


        ]
    }
});