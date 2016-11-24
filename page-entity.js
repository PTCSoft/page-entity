(function (){
  'use strict';

  class PageEntity extends Polymer.Element {
    static get is () { return 'page-entity'; }

    static get config () {
      return {
        properties: {
        },
        observers: [
        ],
      };
    }

  customElements.define(PageEntity.is, PageEntity);
})();
