/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
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
    topicComments: operations.TopicComments;
    comments: operations.Comments;
    hashtags: operations.Hashtags;
    images: operations.Images;
    commentLikes: operations.CommentLikes;
    replyLikes: operations.ReplyLikes;
    topicLikes: operations.TopicLikes;
    myNotifications: operations.MyNotifications;
    myPins: operations.MyPins;
    myPushRegistrations: operations.MyPushRegistrations;
    commentReplies: operations.CommentReplies;
    replies: operations.Replies;
    userReports: operations.UserReports;
    replyReports: operations.ReplyReports;
    commentReports: operations.CommentReports;
    topicReports: operations.TopicReports;
    search: operations.Search;
    sessions: operations.Sessions;
    requestTokens: operations.RequestTokens;
    myFollowing: operations.MyFollowing;
    userFollowers: operations.UserFollowers;
    myFollowers: operations.MyFollowers;
    userFollowing: operations.UserFollowing;
    myPendingUsers: operations.MyPendingUsers;
    myBlockedUsers: operations.MyBlockedUsers;
    topics: operations.Topics;
    myAppFollowing: operations.MyAppFollowing;
    myTopics: operations.MyTopics;
    myApps: operations.MyApps;
    users: operations.Users;
    myLikes: operations.MyLikes;
    myLinkedAccounts: operations.MyLinkedAccounts;
    userTopics: operations.UserTopics;
    }

export = SocialPlusClient;
