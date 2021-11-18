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
  BillingPeriodEnum,
  BillingPeriodEnumFromJSON,
  BillingPeriodEnumFromJSONTyped,
  BillingPeriodEnumToJSON,
  StateEnum,
  StateEnumFromJSON,
  StateEnumFromJSONTyped,
  StateEnumToJSON,
} from './'

/**
 *
 * @export
 * @interface PatchedInvoiceRequest
 */
export interface PatchedInvoiceRequest {
  /**
   *
   * @type {BillingPeriodEnum}
   * @memberof PatchedInvoiceRequest
   */
  billingPeriod?: BillingPeriodEnum
  /**
   *
   * @type {string}
   * @memberof PatchedInvoiceRequest
   */
  planName?: string
  /**
   *
   * @type {StateEnum}
   * @memberof PatchedInvoiceRequest
   */
  state?: StateEnum
  /**
   *
   * @type {string}
   * @memberof PatchedInvoiceRequest
   */
  stripePaymentId?: string | null
}

export function PatchedInvoiceRequestFromJSON(
  json: any
): PatchedInvoiceRequest {
  return PatchedInvoiceRequestFromJSONTyped(json, false)
}

export function PatchedInvoiceRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PatchedInvoiceRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    billingPeriod: !exists(json, 'billing_period')
      ? undefined
      : BillingPeriodEnumFromJSON(json['billing_period']),
    planName: !exists(json, 'plan_name') ? undefined : json['plan_name'],
    state: !exists(json, 'state')
      ? undefined
      : StateEnumFromJSON(json['state']),
    stripePaymentId: !exists(json, 'stripe_payment_id')
      ? undefined
      : json['stripe_payment_id'],
  }
}

export function PatchedInvoiceRequestToJSON(
  value?: PatchedInvoiceRequest | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    billing_period: BillingPeriodEnumToJSON(value.billingPeriod),
    plan_name: value.planName,
    state: StateEnumToJSON(value.state),
    stripe_payment_id: value.stripePaymentId,
  }
}
