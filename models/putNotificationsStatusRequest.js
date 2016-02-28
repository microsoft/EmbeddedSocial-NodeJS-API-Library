/*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License. See LICENSE in the project root for license information.
*/

/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PutNotificationsStatusRequest class.
 * @constructor
 * Request to put (update) notifications status
 * @member {string} [readActivityHandle] Gets or sets last read activity handle
 * 
 */
function PutNotificationsStatusRequest() {
}

/**
 * Defines the metadata of PutNotificationsStatusRequest
 *
 * @returns {object} metadata of PutNotificationsStatusRequest
 *
 */
PutNotificationsStatusRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PutNotificationsStatusRequest',
    type: {
      name: 'Composite',
      className: 'PutNotificationsStatusRequest',
      modelProperties: {
        readActivityHandle: {
          required: false,
          serializedName: 'readActivityHandle',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PutNotificationsStatusRequest;
