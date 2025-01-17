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
import { Team, TeamFromJSON, TeamFromJSONTyped, TeamToJSON } from './'

/**
 *
 * @export
 * @interface Account
 */
export interface Account {
  /**
   *
   * @type {string}
   * @memberof Account
   */
  readonly id: string
  /**
   *
   * @type {string}
   * @memberof Account
   */
  readonly email: string
  /**
   *
   * @type {boolean}
   * @memberof Account
   */
  readonly isVerified: boolean
  /**
   *
   * @type {Array<Team>}
   * @memberof Account
   */
  readonly teams: Array<Team> | null
}

export function AccountFromJSON(json: any): Account {
  return AccountFromJSONTyped(json, false)
}

export function AccountFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Account {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
    email: json['email'],
    isVerified: json['is_verified'],
    teams:
      json['teams'] === null
        ? null
        : (json['teams'] as Array<any>).map(TeamFromJSON),
  }
}

export function AccountToJSON(value?: Account | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {}
}
