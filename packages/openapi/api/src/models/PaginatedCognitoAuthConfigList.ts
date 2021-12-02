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
import {
  CognitoAuthConfig,
  CognitoAuthConfigFromJSON,
  CognitoAuthConfigFromJSONTyped,
  CognitoAuthConfigToJSON,
} from './'

/**
 *
 * @export
 * @interface PaginatedCognitoAuthConfigList
 */
export interface PaginatedCognitoAuthConfigList {
  /**
   *
   * @type {number}
   * @memberof PaginatedCognitoAuthConfigList
   */
  count?: number
  /**
   *
   * @type {string}
   * @memberof PaginatedCognitoAuthConfigList
   */
  next?: string | null
  /**
   *
   * @type {string}
   * @memberof PaginatedCognitoAuthConfigList
   */
  previous?: string | null
  /**
   *
   * @type {Array<CognitoAuthConfig>}
   * @memberof PaginatedCognitoAuthConfigList
   */
  results?: Array<CognitoAuthConfig>
}

export function PaginatedCognitoAuthConfigListFromJSON(
  json: any
): PaginatedCognitoAuthConfigList {
  return PaginatedCognitoAuthConfigListFromJSONTyped(json, false)
}

export function PaginatedCognitoAuthConfigListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PaginatedCognitoAuthConfigList {
  if (json === undefined || json === null) {
    return json
  }
  return {
    count: !exists(json, 'count') ? undefined : json['count'],
    next: !exists(json, 'next') ? undefined : json['next'],
    previous: !exists(json, 'previous') ? undefined : json['previous'],
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(CognitoAuthConfigFromJSON),
  }
}

export function PaginatedCognitoAuthConfigListToJSON(
  value?: PaginatedCognitoAuthConfigList | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    count: value.count,
    next: value.next,
    previous: value.previous,
    results:
      value.results === undefined
        ? undefined
        : (value.results as Array<any>).map(CognitoAuthConfigToJSON),
  }
}