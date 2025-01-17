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
 * Base serializer for all actions.
 * @export
 * @interface CancelAction
 */
export interface CancelAction {
  /**
   *
   * @type {string}
   * @memberof CancelAction
   */
  subscriptionId?: string
}

export function CancelActionFromJSON(json: any): CancelAction {
  return CancelActionFromJSONTyped(json, false)
}

export function CancelActionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CancelAction {
  if (json === undefined || json === null) {
    return json
  }
  return {
    subscriptionId: !exists(json, 'subscription_id')
      ? undefined
      : json['subscription_id'],
  }
}

export function CancelActionToJSON(value?: CancelAction | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    subscription_id: value.subscriptionId,
  }
}
