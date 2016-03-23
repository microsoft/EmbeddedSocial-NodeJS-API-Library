/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the CountResponse class.
 * @constructor
 * Count response
 * @member {number} count Gets or sets count
 * 
 */
function CountResponse() {
}

/**
 * Defines the metadata of CountResponse
 *
 * @returns {object} metadata of CountResponse
 *
 */
CountResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CountResponse',
    type: {
      name: 'Composite',
      className: 'CountResponse',
      modelProperties: {
        count: {
          required: true,
          serializedName: 'count',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = CountResponse;
