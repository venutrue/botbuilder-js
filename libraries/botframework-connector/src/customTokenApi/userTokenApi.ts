/**
 * Microsoft Bot Token API - V3.1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: token
 * Contact: botframework@microsoft.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { AadResourceUrls } from './model/aadResourceUrls';
import { ErrorResponse } from './model/errorResponse';
import { TokenResponse } from './model/tokenResponse';
import { TokenStatus } from './model/tokenStatus';
import * as Models from './model';

import { ObjectSerializer, Authentication, VoidAuth } from './model/models';

let defaultBasePath = 'https://token.botframework.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum UserTokenApiApiKeys {
}

export class UserTokenApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(CustomCredentials: { appId: string, appPassword: string})
    constructor(CustomCredentials: { appId: string, appPassword: string}, basePath?: string){
        if(basePath)
         this.basePath = basePath;
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: UserTokenApiApiKeys, value: string) {
        (this.authentications as any)[UserTokenApiApiKeys[key]].apiKey = value;
    }

    /**
     * 
     * @param aadResourceUrls 
     * @param userId 
     * @param connectionName 
     * @param channelId 
     */
    public async getAadTokens (userId: string, connectionName: string, aadResourceUrls: AadResourceUrls, options: Models.UserTokenGetAadTokensOptionalParams = {headers: {}}) : Promise<Models.UserTokenGetAadTokensResponse> {
        const localVarPath = this.basePath + '/api/usertoken/GetAadTokens';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'aadResourceUrls' is not null or undefined
        if (aadResourceUrls === null || aadResourceUrls === undefined) {
            throw new Error('Required parameter aadResourceUrls was null or undefined when calling userTokenGetAadTokens.');
        }

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling userTokenGetAadTokens.');
        }

        // verify required parameter 'connectionName' is not null or undefined
        if (connectionName === null || connectionName === undefined) {
            throw new Error('Required parameter connectionName was null or undefined when calling userTokenGetAadTokens.');
        }

        if (userId !== undefined) {
            localVarQueryParameters['userId'] = ObjectSerializer.serialize(userId, "string");
        }

        if (connectionName !== undefined) {
            localVarQueryParameters['connectionName'] = ObjectSerializer.serialize(connectionName, "string");
        }

        if (options.channelId !== undefined) {
            localVarQueryParameters['channelId'] = ObjectSerializer.serialize(options.channelId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(aadResourceUrls, "AadResourceUrls")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<Models.UserTokenGetAadTokensResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "{ [key: string]: TokenResponse; }");
                        let _bodyAsText = ObjectSerializer.deserialize(body, "string");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            let toReturn: any = Object.assign({}, body);
                            let _response = Object.assign(response, { bodyAsText: _bodyAsText, parsedBody: body});
                            Object.assign(toReturn, {_response: _response});
                            resolve(toReturn);
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param userId 
     * @param connectionName 
     * @param channelId 
     * @param code 
     */
    public async getToken (userId: string, connectionName: string, options: Models.UserTokenGetTokenOptionalParams = {headers: {}}) : Promise<Models.UserTokenGetTokenResponse> {
        const localVarPath = this.basePath + '/api/usertoken/GetToken';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling userTokenGetToken.');
        }

        // verify required parameter 'connectionName' is not null or undefined
        if (connectionName === null || connectionName === undefined) {
            throw new Error('Required parameter connectionName was null or undefined when calling userTokenGetToken.');
        }

        if (userId !== undefined) {
            localVarQueryParameters['userId'] = ObjectSerializer.serialize(userId, "string");
        }

        if (connectionName !== undefined) {
            localVarQueryParameters['connectionName'] = ObjectSerializer.serialize(connectionName, "string");
        }

        if (options.channelId !== undefined) {
            localVarQueryParameters['channelId'] = ObjectSerializer.serialize(options.channelId, "string");
        }

        if (options.code !== undefined) {
            localVarQueryParameters['code'] = ObjectSerializer.serialize(options.code, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<Models.UserTokenGetTokenResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        let _body: Models.TokenResponse = ObjectSerializer.deserialize(body, "TokenResponse");
                        let _bodyAsText: string = ObjectSerializer.deserialize(body, "string");
                        let httpResponse: http.IncomingMessage = response;
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            let _response = Object.assign(httpResponse, {bodyAsText: _bodyAsText, parsedBody: _body});
                            let toReturn: Models.UserTokenGetTokenResponse = Object.assign(_body, {_response: _response});                          
                            resolve(toReturn);
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param userId 
     * @param channelId 
     * @param include 
     */
    public async getTokenStatus (userId: string, options: Models.UserTokenGetTokenStatusOptionalParams = {headers: {}}) : Promise<Models.UserTokenGetTokenStatusResponse> {
        const localVarPath = this.basePath + '/api/usertoken/GetTokenStatus';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling userTokenGetTokenStatus.');
        }

        if (userId !== undefined) {
            localVarQueryParameters['userId'] = ObjectSerializer.serialize(userId, "string");
        }

        if (options.channelId !== undefined) {
            localVarQueryParameters['channelId'] = ObjectSerializer.serialize(options.channelId, "string");
        }

        if (options.include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(options.include, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<Models.UserTokenGetTokenStatusResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Array<TokenStatus>");
                        let _bodyAsText = ObjectSerializer.deserialize(body, "string");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            let toReturn = Object.assign({}, body);
                            let _response = Object.assign(response, {bodyAsText: _bodyAsText, parsedBody: body});
                            Object.assign(toReturn, {_response: _response})
                            resolve(toReturn);
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param userId 
     * @param connectionName 
     * @param channelId 
     */
    public async signOut (userId: string, options: Models.UserTokenSignOutOptionalParams = {headers: {}}) : Promise<Models.UserTokenSignOutResponse> {
        const localVarPath = this.basePath + '/api/usertoken/SignOut';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling userTokenSignOut.');
        }

        if (userId !== undefined) {
            localVarQueryParameters['userId'] = ObjectSerializer.serialize(userId, "string");
        }

        if (options.connectionName !== undefined) {
            localVarQueryParameters['connectionName'] = ObjectSerializer.serialize(options.connectionName, "string");
        }

        if (options.channelId !== undefined) {
            localVarQueryParameters['channelId'] = ObjectSerializer.serialize(options.channelId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
        return authenticationPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<Models.UserTokenSignOutResponse>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "object");
                        let _bodyAsText: string = ObjectSerializer.deserialize(body, "string");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            let toReturn: any = Object.assign({}, body);
                            let _reponse: any = Object.assign(response, {bodyAsText: _bodyAsText, parsedBody: body});
                            Object.assign(toReturn, _reponse);
                            resolve(toReturn)
                        } else {
                            reject({ response: response, body: body });
                        }
                    }
                });
            });
        });
    }
}
