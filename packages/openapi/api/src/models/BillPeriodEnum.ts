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

/**
 *
 * @export
 * @enum {string}
 */
export enum BillPeriodEnum {
  Month = 'month',
  Year = 'year',
}

export function BillPeriodEnumFromJSON(json: any): BillPeriodEnum {
  return BillPeriodEnumFromJSONTyped(json, false)
}

export function BillPeriodEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BillPeriodEnum {
  return json as BillPeriodEnum
}

export function BillPeriodEnumToJSON(value?: BillPeriodEnum | null): any {
  return value as any
}
