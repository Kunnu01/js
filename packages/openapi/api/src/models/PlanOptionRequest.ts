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
  BillPeriodEnum,
  BillPeriodEnumFromJSON,
  BillPeriodEnumFromJSONTyped,
  BillPeriodEnumToJSON,
} from './'

/**
 *
 * @export
 * @interface PlanOptionRequest
 */
export interface PlanOptionRequest {
  /**
   *
   * @type {string}
   * @memberof PlanOptionRequest
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof PlanOptionRequest
   */
  planId: string
  /**
   *
   * @type {BillPeriodEnum}
   * @memberof PlanOptionRequest
   */
  billPeriod: BillPeriodEnum
  /**
   *
   * @type {number}
   * @memberof PlanOptionRequest
   */
  priceCents: number
}

export function PlanOptionRequestFromJSON(json: any): PlanOptionRequest {
  return PlanOptionRequestFromJSONTyped(json, false)
}

export function PlanOptionRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PlanOptionRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    planId: json['plan_id'],
    billPeriod: BillPeriodEnumFromJSON(json['bill_period']),
    priceCents: json['price_cents'],
  }
}

export function PlanOptionRequestToJSON(value?: PlanOptionRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    plan_id: value.planId,
    bill_period: BillPeriodEnumToJSON(value.billPeriod),
    price_cents: value.priceCents,
  }
}
