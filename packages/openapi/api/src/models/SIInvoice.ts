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
  SILineItem,
  SILineItemFromJSON,
  SILineItemFromJSONTyped,
  SILineItemToJSON,
  StateEnum,
  StateEnumFromJSON,
  StateEnumFromJSONTyped,
  StateEnumToJSON,
} from './'

/**
 *
 * @export
 * @interface SIInvoice
 */
export interface SIInvoice {
  /**
   *
   * @type {string}
   * @memberof SIInvoice
   */
  id: string
  /**
   *
   * @type {StateEnum}
   * @memberof SIInvoice
   */
  state: StateEnum
  /**
   *
   * @type {number}
   * @memberof SIInvoice
   */
  cents: number
  /**
   *
   * @type {Array<SILineItem>}
   * @memberof SIInvoice
   */
  lineItems: Array<SILineItem>
}

export function SIInvoiceFromJSON(json: any): SIInvoice {
  return SIInvoiceFromJSONTyped(json, false)
}

export function SIInvoiceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SIInvoice {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    state: StateEnumFromJSON(json['state']),
    cents: json['cents'],
    lineItems: (json['line_items'] as Array<any>).map(SILineItemFromJSON),
  }
}

export function SIInvoiceToJSON(value?: SIInvoice | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    state: StateEnumToJSON(value.state),
    cents: value.cents,
    line_items: (value.lineItems as Array<any>).map(SILineItemToJSON),
  }
}
