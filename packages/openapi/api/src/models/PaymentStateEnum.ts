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
export enum PaymentStateEnum {
  Complete = 'complete',
  Incomplete = 'incomplete',
}

export function PaymentStateEnumFromJSON(json: any): PaymentStateEnum {
  return PaymentStateEnumFromJSONTyped(json, false)
}

export function PaymentStateEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PaymentStateEnum {
  return json as PaymentStateEnum
}

export function PaymentStateEnumToJSON(value?: PaymentStateEnum | null): any {
  return value as any
}
