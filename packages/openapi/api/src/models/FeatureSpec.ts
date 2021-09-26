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
  AggregationEnum,
  AggregationEnumFromJSON,
  AggregationEnumFromJSONTyped,
  AggregationEnumToJSON,
  RecordPeriodEnum,
  RecordPeriodEnumFromJSON,
  RecordPeriodEnumFromJSONTyped,
  RecordPeriodEnumToJSON,
} from './'

/**
 *
 * @export
 * @interface FeatureSpec
 */
export interface FeatureSpec {
  /**
   *
   * @type {string}
   * @memberof FeatureSpec
   */
  readonly id: string
  /**
   *
   * @type {string}
   * @memberof FeatureSpec
   */
  name: string
  /**
   *
   * @type {RecordPeriodEnum}
   * @memberof FeatureSpec
   */
  recordPeriod?: RecordPeriodEnum
  /**
   *
   * @type {AggregationEnum}
   * @memberof FeatureSpec
   */
  aggregation?: AggregationEnum
  /**
   *
   * @type {number}
   * @memberof FeatureSpec
   */
  maxLimit?: number | null
  /**
   * Amount in cents
   * @type {number}
   * @memberof FeatureSpec
   */
  unitPrice?: number | null
  /**
   *
   * @type {string}
   * @memberof FeatureSpec
   */
  providerId?: string
}

export function FeatureSpecFromJSON(json: any): FeatureSpec {
  return FeatureSpecFromJSONTyped(json, false)
}

export function FeatureSpecFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): FeatureSpec {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    name: json['name'],
    recordPeriod: !exists(json, 'record_period')
      ? undefined
      : RecordPeriodEnumFromJSON(json['record_period']),
    aggregation: !exists(json, 'aggregation')
      ? undefined
      : AggregationEnumFromJSON(json['aggregation']),
    maxLimit: !exists(json, 'max_limit') ? undefined : json['max_limit'],
    unitPrice: !exists(json, 'unit_price') ? undefined : json['unit_price'],
    providerId: !exists(json, 'provider_id') ? undefined : json['provider_id'],
  }
}

export function FeatureSpecToJSON(value?: FeatureSpec | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    record_period: RecordPeriodEnumToJSON(value.recordPeriod),
    aggregation: AggregationEnumToJSON(value.aggregation),
    max_limit: value.maxLimit,
    unit_price: value.unitPrice,
    provider_id: value.providerId,
  }
}
