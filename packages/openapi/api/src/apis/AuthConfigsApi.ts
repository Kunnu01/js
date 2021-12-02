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

import * as runtime from '../runtime'
import {
  CognitoAuthConfig,
  CognitoAuthConfigFromJSON,
  CognitoAuthConfigToJSON,
  CognitoAuthConfigRequest,
  CognitoAuthConfigRequestFromJSON,
  CognitoAuthConfigRequestToJSON,
  PaginatedCognitoAuthConfigList,
  PaginatedCognitoAuthConfigListFromJSON,
  PaginatedCognitoAuthConfigListToJSON,
  PatchedCognitoAuthConfigRequest,
  PatchedCognitoAuthConfigRequestFromJSON,
  PatchedCognitoAuthConfigRequestToJSON,
} from '../models'

export interface AuthConfigsCognitoV1CreateRequest {
  cognitoAuthConfigRequest: CognitoAuthConfigRequest
}

export interface AuthConfigsCognitoV1DestroyRequest {
  id: string
}

export interface AuthConfigsCognitoV1ListRequest {
  limit?: number
  offset?: number
}

export interface AuthConfigsCognitoV1PartialUpdateRequest {
  id: string
  patchedCognitoAuthConfigRequest?: PatchedCognitoAuthConfigRequest
}

export interface AuthConfigsCognitoV1RetrieveRequest {
  id: string
}

export interface AuthConfigsCognitoV1UpdateRequest {
  id: string
  cognitoAuthConfigRequest: CognitoAuthConfigRequest
}

/**
 *
 */
export class AuthConfigsApi extends runtime.BaseAPI {
  /**
   */
  async authConfigsCognitoV1CreateRaw(
    requestParameters: AuthConfigsCognitoV1CreateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<CognitoAuthConfig>> {
    if (
      requestParameters.cognitoAuthConfigRequest === null ||
      requestParameters.cognitoAuthConfigRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'cognitoAuthConfigRequest',
        'Required parameter requestParameters.cognitoAuthConfigRequest was null or undefined when calling authConfigsCognitoV1Create.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('auth0-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('customer-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('private-provider-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    const response = await this.request(
      {
        path: `/auth_configs/cognito/v1/`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CognitoAuthConfigRequestToJSON(
          requestParameters.cognitoAuthConfigRequest
        ),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CognitoAuthConfigFromJSON(jsonValue)
    )
  }

  /**
   */
  async authConfigsCognitoV1Create(
    requestParameters: AuthConfigsCognitoV1CreateRequest,
    initOverrides?: RequestInit
  ): Promise<CognitoAuthConfig> {
    const response = await this.authConfigsCognitoV1CreateRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   */
  async authConfigsCognitoV1DestroyRaw(
    requestParameters: AuthConfigsCognitoV1DestroyRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling authConfigsCognitoV1Destroy.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('auth0-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('customer-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('private-provider-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    const response = await this.request(
      {
        path: `/auth_configs/cognito/v1/{id}/`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.VoidApiResponse(response)
  }

  /**
   */
  async authConfigsCognitoV1Destroy(
    requestParameters: AuthConfigsCognitoV1DestroyRequest,
    initOverrides?: RequestInit
  ): Promise<void> {
    await this.authConfigsCognitoV1DestroyRaw(requestParameters, initOverrides)
  }

  /**
   */
  async authConfigsCognitoV1ListRaw(
    requestParameters: AuthConfigsCognitoV1ListRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PaginatedCognitoAuthConfigList>> {
    const queryParameters: any = {}

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit
    }

    if (requestParameters.offset !== undefined) {
      queryParameters['offset'] = requestParameters.offset
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('auth0-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('customer-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('private-provider-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    const response = await this.request(
      {
        path: `/auth_configs/cognito/v1/`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PaginatedCognitoAuthConfigListFromJSON(jsonValue)
    )
  }

  /**
   */
  async authConfigsCognitoV1List(
    requestParameters: AuthConfigsCognitoV1ListRequest,
    initOverrides?: RequestInit
  ): Promise<PaginatedCognitoAuthConfigList> {
    const response = await this.authConfigsCognitoV1ListRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   */
  async authConfigsCognitoV1PartialUpdateRaw(
    requestParameters: AuthConfigsCognitoV1PartialUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<CognitoAuthConfig>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling authConfigsCognitoV1PartialUpdate.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('auth0-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('customer-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('private-provider-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    const response = await this.request(
      {
        path: `/auth_configs/cognito/v1/{id}/`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: PatchedCognitoAuthConfigRequestToJSON(
          requestParameters.patchedCognitoAuthConfigRequest
        ),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CognitoAuthConfigFromJSON(jsonValue)
    )
  }

  /**
   */
  async authConfigsCognitoV1PartialUpdate(
    requestParameters: AuthConfigsCognitoV1PartialUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<CognitoAuthConfig> {
    const response = await this.authConfigsCognitoV1PartialUpdateRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   */
  async authConfigsCognitoV1RetrieveRaw(
    requestParameters: AuthConfigsCognitoV1RetrieveRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<CognitoAuthConfig>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling authConfigsCognitoV1Retrieve.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('auth0-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('customer-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('private-provider-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    const response = await this.request(
      {
        path: `/auth_configs/cognito/v1/{id}/`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CognitoAuthConfigFromJSON(jsonValue)
    )
  }

  /**
   */
  async authConfigsCognitoV1Retrieve(
    requestParameters: AuthConfigsCognitoV1RetrieveRequest,
    initOverrides?: RequestInit
  ): Promise<CognitoAuthConfig> {
    const response = await this.authConfigsCognitoV1RetrieveRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   */
  async authConfigsCognitoV1UpdateRaw(
    requestParameters: AuthConfigsCognitoV1UpdateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<CognitoAuthConfig>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling authConfigsCognitoV1Update.'
      )
    }

    if (
      requestParameters.cognitoAuthConfigRequest === null ||
      requestParameters.cognitoAuthConfigRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'cognitoAuthConfigRequest',
        'Required parameter requestParameters.cognitoAuthConfigRequest was null or undefined when calling authConfigsCognitoV1Update.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('auth0-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('customer-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    if (this.configuration && this.configuration.accessToken) {
      const token = this.configuration.accessToken
      const tokenString = await token('private-provider-token', [])

      if (tokenString) {
        headerParameters['Authorization'] = `Bearer ${tokenString}`
      }
    }
    const response = await this.request(
      {
        path: `/auth_configs/cognito/v1/{id}/`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: CognitoAuthConfigRequestToJSON(
          requestParameters.cognitoAuthConfigRequest
        ),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      CognitoAuthConfigFromJSON(jsonValue)
    )
  }

  /**
   */
  async authConfigsCognitoV1Update(
    requestParameters: AuthConfigsCognitoV1UpdateRequest,
    initOverrides?: RequestInit
  ): Promise<CognitoAuthConfig> {
    const response = await this.authConfigsCognitoV1UpdateRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }
}