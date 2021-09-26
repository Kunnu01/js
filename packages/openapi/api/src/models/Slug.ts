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
 * @interface Slug
 */
export interface Slug {
  /**
   *
   * @type {string}
   * @memberof Slug
   */
  slug: string
}

export function SlugFromJSON(json: any): Slug {
  return SlugFromJSONTyped(json, false)
}

export function SlugFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Slug {
  if (json === undefined || json === null) {
    return json
  }
  return {
    slug: json['slug'],
  }
}

export function SlugToJSON(value?: Slug | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    slug: value.slug,
  }
}
