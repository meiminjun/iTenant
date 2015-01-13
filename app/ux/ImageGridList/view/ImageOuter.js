/**
 * Image outer component of Ext.ux.ImageGridList 
 *
 * @class Ext.ux.ImageGridList.view.ImageOuter
 * @extends Ext.Container
 * @version 0.1.0
 * @author Tomoyuki Kashiro <kashiro@github>
 */
Ext.define('Ext.ux.ImageGridList.view.ImageOuter', {

    requires: [
    'Ext.ux.ImageGridList.view.Image'
    ],

    extend: 'Ext.Container',

    alias: 'widget.image-grid-list-imageouter',

    config: {

        cls: 'image-grid-list-imageouter',

        items: [
        ]
    }
});