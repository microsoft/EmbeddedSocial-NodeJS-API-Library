/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostReportRequest class.
 * @constructor
 * Request to post (create) a report for user or content
 * @member {string} reason Gets or sets report reason. Possible values
 * include: 'Spam', 'Cyberbullying', 'ChildEndangerment', 'Offensive',
 * 'ContentInfringement', 'Other'
 * 
 */
function PostReportRequest() {
}

/**
 * Defines the metadata of PostReportRequest
 *
 * @returns {object} metadata of PostReportRequest
 *
 */
PostReportRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostReportRequest',
    type: {
      name: 'Composite',
      className: 'PostReportRequest',
      modelProperties: {
        reason: {
          required: true,
          serializedName: 'reason',
          type: {
            name: 'Enum',
            allowedValues: [ 'Spam', 'Cyberbullying', 'ChildEndangerment', 'Offensive', 'ContentInfringement', 'Other' ]
          }
        }
      }
    }
  };
};

module.exports = PostReportRequest;
