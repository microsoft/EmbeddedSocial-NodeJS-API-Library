/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the BuildsCurrentResponse class.
 * @constructor
 * Response from get builds current
 * @member {string} [dateAndTime] Gets or sets the date and time of the
 * current build
 * 
 * @member {string} [commitHash] Gets or sets the Git commit hash that
 * represents the current checkout
 * 
 * @member {string} [hostname] Gets or sets the hostname that this code was
 * built on
 * 
 * @member {string} [serviceApiVersion] Gets or sets service api version number
 * 
 * @member {array} [dirtyFiles] Gets or sets the list of files that were not
 * committed at build time
 * 
 */
function BuildsCurrentResponse() {
}

/**
 * Defines the metadata of BuildsCurrentResponse
 *
 * @returns {object} metadata of BuildsCurrentResponse
 *
 */
BuildsCurrentResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BuildsCurrentResponse',
    type: {
      name: 'Composite',
      className: 'BuildsCurrentResponse',
      modelProperties: {
        dateAndTime: {
          required: false,
          serializedName: 'dateAndTime',
          type: {
            name: 'String'
          }
        },
        commitHash: {
          required: false,
          serializedName: 'commitHash',
          type: {
            name: 'String'
          }
        },
        hostname: {
          required: false,
          serializedName: 'hostname',
          type: {
            name: 'String'
          }
        },
        serviceApiVersion: {
          required: false,
          serializedName: 'serviceApiVersion',
          type: {
            name: 'String'
          }
        },
        dirtyFiles: {
          required: false,
          serializedName: 'dirtyFiles',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = BuildsCurrentResponse;
