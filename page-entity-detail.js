(function (){
  'use strict';

  class PageEntityDetail extends Polymer.Element {
    static get is () { return 'page-entity-detail'; }

    static get config () {
      return {
        properties: {

          //for get id
          route : {
            type : Object,
          },

          /**
          * The z-depth of this element, from 0-5. Setting to 0 will remove the
          * shadow, and each increasing number greater than 0 will be "deeper"
          * than the last.
          */
          elevation: {
            type: Number,
            reflectToAttribute: true,
            value: 1
          },

          dataid : {
            type : Object,
          }

        },

        observers : [
          'getid(routeData.index)'
        ],
      };
    } // end config

    getid (index) {
      console.log('get id');
      if (index == undefined) {
        return false;
      }

      index = Number(index);
      if (isNaN(index)){
        return false;
      }

      var dataid = this.$.meta.byKey('data');
      this.data = dataid ? dataid[index]: null;
    }
  }

  customElements.define(PageEntityDetail.is, PageEntityDetail);
})();
