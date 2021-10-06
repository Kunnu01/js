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
 * @interface MembershipRequest
 */
export interface MembershipRequest {
  /**
   *
   * @type {RoleEnum}
   * @memberof MembershipRequest
   */
  role: RoleEnum
}

export function MembershipRequestFromJSON(json: any): MembershipRequest {
  return MembershipRequestFromJSONTyped(json, false)
}

export function MembershipRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MembershipRequest {
  if (json === undefined || json === null) {
    return json
  }
  return {
    role: RoleEnumFromJSON(json['role']),
  }
}

export function MembershipRequestToJSON(value?: MembershipRequest | null): any {
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