(function (){
	'use strict';

	class ListDetail extends Polymer.Element {
		static get is () { return 'list-detail'; }

		static get config () {
			return {
				properties: {

					/**
					 * Variable for get name shop.
					 */
					shopname : {
						type: String,
						value: 'Big Shop' //Temporary
					},

					/**
					* The z-depth of this element, from 0-5. Setting to 0 will remove the
					* shadow, and each increasing number greater than 0 will be "deeper"
					* than the last.
					*
					*/
					elevation: {
						type: Number,
						reflectToAttribute: true,
						value: 1
					},

				}
			}
		}
	}

	customElements.define(ListDetail.is, ListDetail);
})();
