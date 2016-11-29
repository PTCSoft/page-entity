(function (){
  'use strict';

  class PageEntity extends Polymer.Element {
    static get is () { return 'page-entity'; }

    static get config () {
      return {
        properties: {
        }
      };
    } // end config

     send (event) {
      console.log('************ SEND *************');

      console.log('routeData ' + this.routeData.page);
      console.log('route.path ' + this.route.path);

      this.set('route.path', route.path + event.detail);

      console.log('route.path ' + this.route.path);
      console.log('subroute ' + this.subroute.path);

      console.log('************ SEND *************');
    }
  }

  customElements.define(PageEntity.is, PageEntity);
})();
