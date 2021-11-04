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
  Invite,
  InviteFromJSON,
  InviteFromJSONTyped,
  InviteToJSON,
  Membership,
  MembershipFromJSON,
  MembershipFromJSONTyped,
  MembershipToJSON,
  Plan,
  PlanFromJSON,
  PlanFromJSONTyped,
  PlanToJSON,
  SubscriptionDetail,
  SubscriptionDetailFromJSON,
  SubscriptionDetailFromJSONTyped,
  SubscriptionDetailToJSON,
} from './'

/**
 *
 * @export
 * @interface TeamDetail
 */
export interface TeamDetail {
  /**
   *
   * @type {string}
   * @memberof TeamDetail
   */
  readonly id: string
  /**
   *
   * @type {string}
   * @memberof TeamDetail
   */
  providerId?: string
  /**
   *
   * @type {string}
   * @memberof TeamDetail
   */
  name: string | null
  /**
   *
   * @type {Array<Membership>}
   * @memberof TeamDetail
   */
  readonly members: Array<Membership>
  /**
   *
   * @type {Array<Invite>}
   * @memberof TeamDetail
   */
  readonly invites: Array<Invite>
  /**
   *
   * @type {SubscriptionDetail}
   * @memberof TeamDetail
   */
  readonly subscription: SubscriptionDetail | null
  /**
   *
   * @type {Array<Plan>}
   * @memberof TeamDetail
   */
  readonly availablePlans: Array<Plan>
  /**
   *
   * @type {boolean}
   * @memberof TeamDetail
   */
  isFreeTrialUsed?: boolean
  /**
   *
   * @type {Date}
   * @memberof TeamDetail
   */
  readonly createdAt: Date
  /**
   *
   * @type {Date}
   * @memberof TeamDetail
   */
  readonly updatedAt: Date
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof TeamDetail
   */
  readonly metadata: { [key: string]: any } | null
  /**
   *
   * @type {number}
   * @memberof TeamDetail
   */
  readonly totalCredits: number
}

export function TeamDetailFromJSON(json: any): TeamDetail {
  return TeamDetailFromJSONTyped(json, false)
}

export function TeamDetailFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TeamDetail {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    providerId: !exists(json, 'provider_id') ? undefined : json['provider_id'],
    name: json['name'],
    members: (json['members'] as Array<any>).map(MembershipFromJSON),
    invites: (json['invites'] as Array<any>).map(InviteFromJSON),
    subscription: SubscriptionDetailFromJSON(json['subscription']),
    availablePlans: (json['available_plans'] as Array<any>).map(PlanFromJSON),
    isFreeTrialUsed: !exists(json, 'is_free_trial_used')
      ? undefined
      : json['is_free_trial_used'],
    createdAt: new Date(json['created_at']),
    updatedAt: new Date(json['updated_at']),
    metadata: json['metadata'],
    totalCredits: json['total_credits'],
  }
}

export function TeamDetailToJSON(value?: TeamDetail | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    provider_id: value.providerId,
    name: value.name,
    is_free_trial_used: value.isFreeTrialUsed,
  }
}
