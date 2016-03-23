/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the LinkedAccountView class.
 * @constructor
 * Linked account view
 * @member {string} identityProvider Gets or sets identity provider type.
 * Possible values include: 'Facebook', 'Microsoft', 'Google', 'Twitter',
 * 'Beihai'
 * 
 * @member {string} accountId Gets or sets third party account id -- Unique
 * user id provided by the third-party identity provider
 * 
 */
function LinkedAccountView() {
}

/**
 * Defines the metadata of LinkedAccountView
 *
 * @returns {object} metadata of LinkedAccountView
 *
 */
LinkedAccountView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'LinkedAccountView',
    type: {
      name: 'Composite',
      className: 'LinkedAccountView',
      modelProperties: {
        identityProvider: {
          required: true,
          serializedName: 'identityProvider',
          type: {
            name: 'Enum',
            allowedValues: [ 'Facebook', 'Microsoft', 'Google', 'Twitter', 'Beihai' ]
          }
        },
        accountId: {
          required: true,
          serializedName: 'accountId',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = LinkedAccountView;
