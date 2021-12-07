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
  SubscribeIntent,
  SubscribeIntentFromJSON,
  SubscribeIntentFromJSONTyped,
  SubscribeIntentToJSON,
} from './'

/**
 *
 * @export
 * @interface PaginatedSubscribeIntentList
 */
export interface PaginatedSubscribeIntentList {
  /**
   *
   * @type {number}
   * @memberof PaginatedSubscribeIntentList
   */
  count?: number
  /**
   *
   * @type {string}
   * @memberof PaginatedSubscribeIntentList
   */
  next?: string | null
  /**
   *
   * @type {string}
   * @memberof PaginatedSubscribeIntentList
   */
  previous?: string | null
  /**
   *
   * @type {Array<SubscribeIntent>}
   * @memberof PaginatedSubscribeIntentList
   */
  results?: Array<SubscribeIntent>
}

export function PaginatedSubscribeIntentListFromJSON(
  json: any
): PaginatedSubscribeIntentList {
  return PaginatedSubscribeIntentListFromJSONTyped(json, false)
}

export function PaginatedSubscribeIntentListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PaginatedSubscribeIntentList {
  if (json === undefined || json === null) {
    return json
  }
  return {
    count: !exists(json, 'count') ? undefined : json['count'],
    next: !exists(json, 'next') ? undefined : json['next'],
    previous: !exists(json, 'previous') ? undefined : json['previous'],
    results: !exists(json, 'results')
      ? undefined
      : (json['results'] as Array<any>).map(SubscribeIntentFromJSON),
  }
}

export function PaginatedSubscribeIntentListToJSON(
  value?: PaginatedSubscribeIntentList | null
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
        : (value.results as Array<any>).map(SubscribeIntentToJSON),
  }
}