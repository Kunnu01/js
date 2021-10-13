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
  Plan,
  PlanFromJSON,
  PlanFromJSONTyped,
  PlanToJSON,
  Usage,
  UsageFromJSON,
  UsageFromJSONTyped,
  UsageToJSON,
} from './'

/**
 *
 * @export
 * @interface SubscriptionDetail
 */
export interface SubscriptionDetail {
  /**
   *
   * @type {string}
   * @memberof SubscriptionDetail
   */
  readonly id: string
  /**
   *
   * @type {Plan}
   * @memberof SubscriptionDetail
   */
  readonly plan: Plan
  /**
   *
   * @type {string}
   * @memberof SubscriptionDetail
   */
  readonly planId: string
  /**
   *
   * @type {Date}
   * @memberof SubscriptionDetail
   */
  readonly startAt: Date
  /**
   *
   * @type {Date}
   * @memberof SubscriptionDetail
   */
  readonly endAt: Date | null
  /**
   *
   * @type {boolean}
   * @memberof SubscriptionDetail
   */
  readonly isPaused: boolean
  /**
   *
   * @type {Date}
   * @memberof SubscriptionDetail
   */
  readonly cancelOn: Date | null
  /**
   *
   * @type {boolean}
   * @memberof SubscriptionDetail
   */
  readonly isActive: boolean
  /**
   *
   * @type {number}
   * @memberof SubscriptionDetail
   */
  readonly daysUsed: number
  /**
   *
   * @type {number}
   * @memberof SubscriptionDetail
   */
  readonly daysLeft: number
  /**
   *
   * @type {string}
   * @memberof SubscriptionDetail
   */
  readonly billingPeriod: string
  /**
   *
   * @type {string}
   * @memberof SubscriptionDetail
   */
  readonly nextPlanId: string
  /**
   *
   * @type {Plan}
   * @memberof SubscriptionDetail
   */
  readonly nextPlan: Plan
  /**
   *
   * @type {Array<Usage>}
   * @memberof SubscriptionDetail
   */
  readonly usages: Array<Usage>
}

export function SubscriptionDetailFromJSON(json: any): SubscriptionDetail {
  return SubscriptionDetailFromJSONTyped(json, false)
}

export function SubscriptionDetailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SubscriptionDetail {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    plan: PlanFromJSON(json['plan']),
    planId: json['plan_id'],
    startAt: new Date(json['start_at']),
    endAt: json['end_at'] === null ? null : new Date(json['end_at']),
    isPaused: json['is_paused'],
    cancelOn: json['cancel_on'] === null ? null : new Date(json['cancel_on']),
    isActive: json['is_active'],
    daysUsed: json['days_used'],
    daysLeft: json['days_left'],
    billingPeriod: json['billing_period'],
    nextPlanId: json['next_plan_id'],
    nextPlan: PlanFromJSON(json['next_plan']),
    usages: (json['usages'] as Array<any>).map(UsageFromJSON),
  }
}

export function SubscriptionDetailToJSON(
  value?: SubscriptionDetail | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {}
}
