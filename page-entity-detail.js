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

        }
      };
    } // end config
  }

  customElements.define(PageEntityDetail.is, PageEntityDetail);
})();
