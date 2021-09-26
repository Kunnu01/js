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
  RoleEnum,
  RoleEnumFromJSON,
  RoleEnumFromJSONTyped,
  RoleEnumToJSON,
} from './'

/**
 *
 * @export
 * @interface TeammateRequest
 */
export interface TeammateRequest {
  /**
   *
   * @type {RoleEnum}
   * @memberof TeammateRequest
   */
  role: RoleEnum
}

export function TeammateRequestFromJSON(json: any): TeammateRequest {
  return TeammateRequestFromJSONTyped(json, false)
}

export function TeammateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TeammateRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    role: RoleEnumFromJSON(json['role']),
  }
}

export function TeammateRequestToJSON(value?: TeammateRequest | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    role: RoleEnumToJSON(value.role),
  }
}
