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
 * @interface SILineItem
 */
export interface SILineItem {
  /**
   *
   * @type {string}
   * @memberof SILineItem
   */
  title: string
  /**
   *
   * @type {string}
   * @memberof SILineItem
   */
  detail: string
  /**
   *
   * @type {number}
   * @memberof SILineItem
   */
  cents: number
}

export function SILineItemFromJSON(json: any): SILineItem {
  return SILineItemFromJSONTyped(json, false)
}

export function SILineItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SILineItem {
  if (json === undefined || json === null) {
    return json
  }
  return {
    title: json['title'],
    detail: json['detail'],
    cents: json['cents'],
  }
}

export function SILineItemToJSON(value?: SILineItem | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    title: value.title,
    detail: value.detail,
    cents: value.cents,
  }
}