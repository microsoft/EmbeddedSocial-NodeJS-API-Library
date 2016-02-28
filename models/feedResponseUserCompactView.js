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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the FeedResponseUserCompactView class.
 * @constructor
 * Feed response
 * @member {array} data Gets or sets feed data
 * 
 * @member {string} cursor Gets or sets feed cursor
 * 
 */
function FeedResponseUserCompactView() {
}

/**
 * Defines the metadata of FeedResponseUserCompactView
 *
 * @returns {object} metadata of FeedResponseUserCompactView
 *
 */
FeedResponseUserCompactView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'FeedResponse[UserCompactView]',
    type: {
      name: 'Composite',
      className: 'FeedResponseUserCompactView',
      modelProperties: {
        data: {
          required: true,
          serializedName: 'data',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'UserCompactViewElementType',
                type: {
                  name: 'Composite',
                  className: 'UserCompactView'
                }
            }
          }
        },
        cursor: {
          required: true,
          serializedName: 'cursor',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = FeedResponseUserCompactView;
