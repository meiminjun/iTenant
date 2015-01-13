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
		scrollable: {
			directionLock: true,
			direction: 'vertical'
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
                xtype: 'container',
                name: 'handingDetail',
                cls: 'handingDetail',
                data:{
                	state:0,
                	name: 'asdf',
                	number: '01-01',
                	date: '2014-12-13'
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
                      '<div onclick="handingOverCtr.goToOrderDetails()" class="fourth">',
                      	'<div class="title">{[this.getDetailTitle()]}</div>',
                      	'<div></div>',
                      	'<div class="next"></div>',
                      '</div>',
                {
					getNumberTitle: function(){
					    return 'Unit NO';
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
        		cls: 'subtitleLabel',
        		html: 'Checklist'
        	},
        	{
        		xtype: 'list',
        		name: 'checkList',
        		cls: 'checkList',
        		disableSelection: true,
        		allowDeselect: false,
        		scrollable: false,
        		
        		store: 'checkList',
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
        		]
        	},
        	{
        		xtype: 'label',
        		cls: 'subtitleLabel',
        		html: 'Final'
        	},
        	{
        		xtype: 'container',
        		cls: 'final',
        		data: {
        			name: 'name',
        			date: '2013-02-13',
        			status: 'complete',
        			imgSrc: '',
        			signSrc: ''
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
});