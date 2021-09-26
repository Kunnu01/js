/* tslint:disable */
/* eslint-disable */
/**
 * Iron Plans API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface Token
 */
export interface Token {
  /**
   *
   * @type {string}
   * @memberof Token
   */
  readonly id: string
  /**
   *
   * @type {string}
   * @memberof Token
   */
  providerId?: string
  /**
   *
   * @type {string}
   * @memberof Token
   */
  readonly token: string
  /**
   *
   * @type {boolean}
   * @memberof Token
   */
  isActive?: boolean
  /**
   *
   * @type {boolean}
   * @memberof Token
   */
  isPublic?: boolean
  /**
   *
   * @type {Date}
   * @memberof Token
   */
  readonly lastUsedAt: Date
  /**
   *
   * @type {Date}
   * @memberof Token
   */
  readonly createdAt: Date
}

export function TokenFromJSON(json: any): Token {
  return TokenFromJSONTyped(json, false)
}

export function TokenFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Token {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    providerId: !exists(json, 'provider_id') ? undefined : json['provider_id'],
    token: json['token'],
    isActive: !exists(json, 'is_active') ? undefined : json['is_active'],
    isPublic: !exists(json, 'is_public') ? undefined : json['is_public'],
    lastUsedAt: new Date(json['last_used_at']),
    createdAt: new Date(json['created_at']),
  }
}

export function TokenToJSON(value?: Token | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    provider_id: value.providerId,
    is_active: value.isActive,
    is_public: value.isPublic,
  }
}
