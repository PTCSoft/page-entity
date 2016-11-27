(function (){
	'use strict';

	class PageEntityDetail extends Polymer.Element {
		static get is () { return 'page-entity-detail'; }

		static get config () {
			return {
				properties: {
				}
			};
		} // end config
	}

	customElements.define(PageEntityDetail.is, PageEntityDetail);
})();
