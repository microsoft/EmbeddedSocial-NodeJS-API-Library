/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as operations from "./operations";

declare class SocialPlusClient {
    /**
     * @class
     * Initializes a new instance of the SocialPlusClient class.
     * @constructor
     *
     * @param {string} [baseUri] - The base URI of the service.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - Options for the underlying request object
     * {@link https://github.com/request/request#requestoptions-callback Options doc}
     *
     * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
     *
     */
    constructor(baseUri: string, options: ServiceClientOptions);

    // Operation groups
    blobs: operations.Blobs;
    builds: operations.Builds;
    comments: operations.Comments;
    topicComments: operations.TopicComments;
    hashtags: operations.Hashtags;
    images: operations.Images;
    topicLikes: operations.TopicLikes;
    replyLikes: operations.ReplyLikes;
    commentLikes: operations.CommentLikes;
    myNotifications: operations.MyNotifications;
    myPins: operations.MyPins;
    myPushRegistrations: operations.MyPushRegistrations;
    replies: operations.Replies;
    commentReplies: operations.CommentReplies;
    userReports: operations.UserReports;
    topicReports: operations.TopicReports;
    replyReports: operations.ReplyReports;
    commentReports: operations.CommentReports;
    search: operations.Search;
    sessions: operations.Sessions;
    requestTokens: operations.RequestTokens;
    userFollowers: operations.UserFollowers;
    myPendingUsers: operations.MyPendingUsers;
    myFollowers: operations.MyFollowers;
    myFollowing: operations.MyFollowing;
    myBlockedUsers: operations.MyBlockedUsers;
    userFollowing: operations.UserFollowing;
    topics: operations.Topics;
    myTopics: operations.MyTopics;
    myAppFollowing: operations.MyAppFollowing;
    myApps: operations.MyApps;
    myLikes: operations.MyLikes;
    myLinkedAccounts: operations.MyLinkedAccounts;
    users: operations.Users;
    userTopics: operations.UserTopics;
    }

export = SocialPlusClient;
