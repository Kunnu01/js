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
 * @interface PlanFeatureRequest
 */
export interface PlanFeatureRequest {
  /**
   *
   * @type {string}
   * @memberof PlanFeatureRequest
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof PlanFeatureRequest
   */
  featureId?: string
  /**
   *
   * @type {string}
   * @memberof PlanFeatureRequest
   */
  specId?: string
  /**
   *
   * @type {boolean}
   * @memberof PlanFeatureRequest
   */
  isActive?: boolean
}

export function PlanFeatureRequestFromJSON(json: any): PlanFeatureRequest {
  return PlanFeatureRequestFromJSONTyped(json, false)
}

export function PlanFeatureRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PlanFeatureRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    featureId: !exists(json, 'feature_id') ? undefined : json['feature_id'],
    specId: !exists(json, 'spec_id') ? undefined : json['spec_id'],
    isActive: !exists(json, 'is_active') ? undefined : json['is_active'],
  }
}

export function PlanFeatureRequestToJSON(
  value?: PlanFeatureRequest | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    feature_id: value.featureId,
    spec_id: value.specId,
    is_active: value.isActive,
  }
}
