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
  PaginatedInvoiceList,
  PaginatedInvoiceListFromJSON,
  PaginatedInvoiceListToJSON,
  PaginatedTeamList,
  PaginatedTeamListFromJSON,
  PaginatedTeamListToJSON,
  PatchedTeamDetailRequest,
  PatchedTeamDetailRequestFromJSON,
  PatchedTeamDetailRequestToJSON,
  TeamDetail,
  TeamDetailFromJSON,
  TeamDetailToJSON,
  TeamDetailRequest,
  TeamDetailRequestFromJSON,
  TeamDetailRequestToJSON,
} from '../models'

export interface TeamsV1CreateRequest {
  teamDetailRequest: TeamDetailRequest
}

export interface TeamsV1DestroyRequest {
  id: string
}

export interface TeamsV1InvoicesListRequest {
  id: string
  limit?: number
  offset?: number
}

export interface TeamsV1ListRequest {
  limit?: number
  offset?: number
}

export interface TeamsV1PartialUpdateRequest {
  id: string
  patchedTeamDetailRequest?: PatchedTeamDetailRequest
}

export interface TeamsV1RetrieveRequest {
  id: string
}

export interface TeamsV1UpdateRequest {
  id: string
  teamDetailRequest: TeamDetailRequest
}

/**
 *
 */
export class TeamsApi extends runtime.BaseAPI {
  /**
   */
  async teamsV1CreateRaw(
    requestParameters: TeamsV1CreateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<TeamDetail>> {
    if (
      requestParameters.teamDetailRequest === null ||
      requestParameters.teamDetailRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'teamDetailRequest',
        'Required parameter requestParameters.teamDetailRequest was null or undefined when calling teamsV1Create.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters['Authorization'] = await this.configuration.accessToken(
        'OAuth2',
        []
      )
    }

    const response = await this.request(
      {
        path: `/teams/v1/`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: TeamDetailRequestToJSON(requestParameters.teamDetailRequest),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TeamDetailFromJSON(jsonValue)
    )
  }

  /**
   */
  async teamsV1Create(
    requestParameters: TeamsV1CreateRequest,
    initOverrides?: RequestInit
  ): Promise<TeamDetail> {
    const response = await this.teamsV1CreateRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   */
  async teamsV1DestroyRaw(
    requestParameters: TeamsV1DestroyRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling teamsV1Destroy.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters['Authorization'] = await this.configuration.accessToken(
        'OAuth2',
        []
      )
    }

    const response = await this.request(
      {
        path: `/teams/v1/{id}/`.replace(
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
  async teamsV1Destroy(
    requestParameters: TeamsV1DestroyRequest,
    initOverrides?: RequestInit
  ): Promise<void> {
    await this.teamsV1DestroyRaw(requestParameters, initOverrides)
  }

  /**
   */
  async teamsV1InvoicesListRaw(
    requestParameters: TeamsV1InvoicesListRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PaginatedInvoiceList>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling teamsV1InvoicesList.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit
    }

    if (requestParameters.offset !== undefined) {
      queryParameters['offset'] = requestParameters.offset
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters['Authorization'] = await this.configuration.accessToken(
        'OAuth2',
        []
      )
    }

    const response = await this.request(
      {
        path: `/teams/v1/{id}/invoices/`.replace(
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
      PaginatedInvoiceListFromJSON(jsonValue)
    )
  }

  /**
   */
  async teamsV1InvoicesList(
    requestParameters: TeamsV1InvoicesListRequest,
    initOverrides?: RequestInit
  ): Promise<PaginatedInvoiceList> {
    const response = await this.teamsV1InvoicesListRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   */
  async teamsV1ListRaw(
    requestParameters: TeamsV1ListRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<PaginatedTeamList>> {
    const queryParameters: any = {}

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit
    }

    if (requestParameters.offset !== undefined) {
      queryParameters['offset'] = requestParameters.offset
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters['Authorization'] = await this.configuration.accessToken(
        'OAuth2',
        []
      )
    }

    const response = await this.request(
      {
        path: `/teams/v1/`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      PaginatedTeamListFromJSON(jsonValue)
    )
  }

  /**
   */
  async teamsV1List(
    requestParameters: TeamsV1ListRequest,
    initOverrides?: RequestInit
  ): Promise<PaginatedTeamList> {
    const response = await this.teamsV1ListRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   */
  async teamsV1PartialUpdateRaw(
    requestParameters: TeamsV1PartialUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<TeamDetail>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling teamsV1PartialUpdate.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters['Authorization'] = await this.configuration.accessToken(
        'OAuth2',
        []
      )
    }

    const response = await this.request(
      {
        path: `/teams/v1/{id}/`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: PatchedTeamDetailRequestToJSON(
          requestParameters.patchedTeamDetailRequest
        ),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TeamDetailFromJSON(jsonValue)
    )
  }

  /**
   */
  async teamsV1PartialUpdate(
    requestParameters: TeamsV1PartialUpdateRequest,
    initOverrides?: RequestInit
  ): Promise<TeamDetail> {
    const response = await this.teamsV1PartialUpdateRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   */
  async teamsV1RetrieveRaw(
    requestParameters: TeamsV1RetrieveRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<TeamDetail>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling teamsV1Retrieve.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters['Authorization'] = await this.configuration.accessToken(
        'OAuth2',
        []
      )
    }

    const response = await this.request(
      {
        path: `/teams/v1/{id}/`.replace(
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
      TeamDetailFromJSON(jsonValue)
    )
  }

  /**
   */
  async teamsV1Retrieve(
    requestParameters: TeamsV1RetrieveRequest,
    initOverrides?: RequestInit
  ): Promise<TeamDetail> {
    const response = await this.teamsV1RetrieveRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   */
  async teamsV1UpdateRaw(
    requestParameters: TeamsV1UpdateRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<TeamDetail>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling teamsV1Update.'
      )
    }

    if (
      requestParameters.teamDetailRequest === null ||
      requestParameters.teamDetailRequest === undefined
    ) {
      throw new runtime.RequiredError(
        'teamDetailRequest',
        'Required parameter requestParameters.teamDetailRequest was null or undefined when calling teamsV1Update.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters['Authorization'] = await this.configuration.accessToken(
        'OAuth2',
        []
      )
    }

    const response = await this.request(
      {
        path: `/teams/v1/{id}/`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: TeamDetailRequestToJSON(requestParameters.teamDetailRequest),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      TeamDetailFromJSON(jsonValue)
    )
  }

  /**
   */
  async teamsV1Update(
    requestParameters: TeamsV1UpdateRequest,
    initOverrides?: RequestInit
  ): Promise<TeamDetail> {
    const response = await this.teamsV1UpdateRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }
}
