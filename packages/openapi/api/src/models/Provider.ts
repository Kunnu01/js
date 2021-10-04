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
 * @interface Provider
 */
export interface Provider {
  /**
   *
   * @type {string}
   * @memberof Provider
   */
  readonly id: string
  /**
   *
   * @type {string}
   * @memberof Provider
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof Provider
   */
  slug: string
  /**
   *
   * @type {string}
   * @memberof Provider
   */
  authUrl?: string | null
  /**
   *
   * @type {string}
   * @memberof Provider
   */
  homeUrl?: string | null
  /**
   *
   * @type {string}
   * @memberof Provider
   */
  webhookUrl?: string | null
  /**
   *
   * @type {string}
   * @memberof Provider
   */
  invoiceLogoUrl?: string | null
  /**
   *
   * @type {string}
   * @memberof Provider
   */
  defaultPlan?: string | null
  /**
   *
   * @type {number}
   * @memberof Provider
   */
  trialDays?: number
  /**
   *
   * @type {boolean}
   * @memberof Provider
   */
  isCardRequired?: boolean
  /**
   *
   * @type {string}
   * @memberof Provider
   */
  readonly ownerId: string
  /**
   *
   * @type {string}
   * @memberof Provider
   */
  readonly stripeAccountId: string
  /**
   *
   * @type {string}
   * @memberof Provider
   */
  readonly shadowId: string | null
  /**
   *
   * @type {string}
   * @memberof Provider
   */
  readonly parentId: string | null
  /**
   *
   * @type {boolean}
   * @memberof Provider
   */
  readonly isShadow: boolean
}

export function ProviderFromJSON(json: any): Provider {
  return ProviderFromJSONTyped(json, false)
}

export function ProviderFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Provider {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: json['name'],
    slug: json['slug'],
    authUrl: !exists(json, 'auth_url') ? undefined : json['auth_url'],
    homeUrl: !exists(json, 'home_url') ? undefined : json['home_url'],
    webhookUrl: !exists(json, 'webhook_url') ? undefined : json['webhook_url'],
    invoiceLogoUrl: !exists(json, 'invoice_logo_url')
      ? undefined
      : json['invoice_logo_url'],
    defaultPlan: !exists(json, 'default_plan')
      ? undefined
      : json['default_plan'],
    trialDays: !exists(json, 'trial_days') ? undefined : json['trial_days'],
    isCardRequired: !exists(json, 'is_card_required')
      ? undefined
      : json['is_card_required'],
    ownerId: json['owner_id'],
    stripeAccountId: json['stripe_account_id'],
    shadowId: json['shadow_id'],
    parentId: json['parent_id'],
    isShadow: json['is_shadow'],
  }
}

export function ProviderToJSON(value?: Provider | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    slug: value.slug,
    auth_url: value.authUrl,
    home_url: value.homeUrl,
    webhook_url: value.webhookUrl,
    invoice_logo_url: value.invoiceLogoUrl,
    default_plan: value.defaultPlan,
    trial_days: value.trialDays,
    is_card_required: value.isCardRequired,
  }
}
