/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Application {
  account: {
    external_id?: string;
    business_information: {
      name: string;
      type?: string;
      website?: string;
      identification_number?: string;
      year_established?: number;
      years_of_experience?: number;
      annual_revenue?: { amount: number; currency: string };
      fulltime_employees?: number;
      parttime_employees?: number;
      employees_annual_payroll?: number;
    };
    industry?: { type?: "naics"; code?: string };
    addresses?: {
      type?: "mailing" | "billing";
      address_line?: string;
      city?: string;
      state?: string;
      country_code?: string;
      postal_code?: string;
    }[];
    email: string;
    phone_number?: string;
  };
  contacts: {
    relationship?: "primary" | "driver" | "owner" | "other";
    first_name: string;
    last_name: string;
    email?: string;
    communications_opt_out?: "email" | "sms" | "all" | "none";
    contact_numbers?: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
  }[];
  partnership: { id: string; lead_external_id?: string; source?: string };

  /**
   * Hashmap with CW ID of the insurance types related to the application as the key which can include optionally a coverages object.
   * @example {"67b48b38-21f5-4cac-9aec-3fd66ceb599b":{"coverages":{"each_aggregate":{"minimum":2000000,"current":2000000},"each_occurrence":{"minimum":2000000,"current":2000000},"deductible":{"maximum":2000000,"current":500000}}}}
   */
  insurance_details?: Record<
    string,
    {
      coverages?: {
        each_aggregate: { minimum: number; current: number };
        each_occurrence: { minimum: number; current: number };
        deductible: { maximum: number; current: number };
      };
    }
  >;
  custom_fields?: { key: string; value: string }[];

  /**
   * Array of fields for information that does not fit into any of the other specific fields:
   *   * Maximum size: 10KB in total
   *
   */
  other_information?: { key: string; value: string }[];
}

export interface ApplicationV2 {
  account: {
    external_id?: string;
    business_information: {
      name: string;
      type?: string;
      website?: string;
      identification_number?: string;
      year_established?: number;
      years_of_experience?: number;
      annual_revenue?: { amount: number; currency: string };
      fulltime_employees?: number;
      parttime_employees?: number;
      employees_annual_payroll?: number;
    };
    industry?: { type?: "naics"; code?: string };
    addresses?: {
      type?: "mailing" | "billing";
      address_line?: string;
      city?: string;
      state?: string;
      country_code?: string;
      postal_code?: string;
    }[];
    email: string;
    phone_number?: string;
  };
  contacts: {
    relationship?: "primary" | "driver" | "owner" | "other";
    first_name: string;
    last_name: string;
    email?: string;
    communications_opt_out?: "email" | "sms" | "all" | "none";
    contact_numbers?: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
  }[];
  partnership: { id: string; lead_external_id?: string; source?: string };
  insurance_details?: {
    packages?: {
      package_id: string;
      coverages?: { coverage_id: string; current?: number | string | boolean; maximum?: number; minimum?: number }[];
      lobs?: {
        lob_id: string;
        coverages?: { coverage_id: string; current?: number | string | boolean; maximum?: number; minimum?: number }[];
      }[];
    }[];
    lobs?: {
      lob_id: string;
      coverages?: { coverage_id: string; current?: number | string | boolean; maximum?: number; minimum?: number }[];
    }[];
  };
  custom_fields?: { key: string; value: string }[];

  /**
   * Array of fields for information that does not fit into any of the other specific fields:
   *   * Maximum size: 10KB in total
   *
   */
  other_information?: { key: string; value: string }[];
}

export interface Subscription {
  /**
   * The URI where the webhook will be sent when an event happens
   * @format uri
   * @example https://myserver.com/send/callback/here
   */
  endpoint: string;

  /** The list of events that should trigger a webhook to the endpoint provided */
  events: ("policy.created" | "policy.updated" | "policy.neverCompleted")[];

  /**
   * When the subscribed endpoint does not return a valid response. An email will be sent notifying the lost event.
   * @format email
   * @example user@example.com
   */
  notify_on_error_email?: string;
}

export type Account = { id: string } & {
  external_id?: string;
  agent_id?: string;
  business_information?: {
    name: string;
    type?: string;
    website?: string;
    identification_number?: string;
    year_established?: number;
    years_of_experience?: number;
    annual_revenue?: { amount: number; currency: string };
    fulltime_employees?: number;
    parttime_employees?: number;
    employees_annual_payroll?: number;
  };
  industry?: { type?: "sic" | "naics" | "naf" | "anzsic"; class_code?: string; subclass_code?: string; code?: string };
  addresses?: {
    type?: "mailing" | "billing";
    address_line: string;
    city?: string;
    state?: string;
    country_code?: string;
    postal_code?: string;
  }[];
  email?: string;
  phone_number?: string;
};

export interface ServicingAccount {
  business_information?: { name: string };
  addresses?: {
    type?: "mailing" | "billing";
    address_line: string;
    city?: string;
    state?: string;
    country_code?: string;
    postal_code?: string;
  }[];
  contacts?: {
    first_name?: string;
    last_name?: string;
    email?: string;
    contact_numbers?: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
  }[];

  /**
   * @format email
   * @example sample_mail@cwtest.com
   */
  email?: string;

  /**
   * Account main phone number:
   *   * May have up to 17 characters including special ones
   *   * May have blocks separated by dashes or blank spaces
   *   * May include a block surrounded by parentheses
   *   * May include country code
   *   * There cannot be two consecutive spaces or dashes
   *   * There cannot be more than one block surrounded by parentheses
   *
   * @example +61285993444
   */
  phone_number?: string;
}

export type ServicingMidtermChanges = {
  description: string;
  effective_date: string;
  premium_change: { amount: number; currency: string };
  taxes_change: { amount: number; currency: string };
  fees_change: {
    carrier: { amount: number; currency: string };
    agency: { amount: number; currency: string };
    external_agency: { amount: number; currency: string };
  };
  status:
    | "NOT_STARTED"
    | "PENDING_PAYMENT"
    | "UNDER_REVIEW,"
    | "APPROVED"
    | "PAYMENT_NOT_COLLECTED"
    | "NOT_NEEDED"
    | "VOIDED"
    | null;
  pending_action: boolean;
  invoice_external_id?: string;
} & { line_of_business?: { professional_liability?: { occurrence_limit?: number; aggregate_limit?: number } } } & {
  request_payment?: boolean;
};

export type ServicingCancellation = {
  description: string;
  effective_date: string;
  premium_change: { amount: number; currency: string };
  taxes_change: { amount: number; currency: string };
  fees_change: {
    carrier: { amount: number; currency: string };
    agency: { amount: number; currency: string };
    external_agency: { amount: number; currency: string };
  };
  status:
    | "NOT_STARTED"
    | "PENDING_PAYMENT"
    | "UNDER_REVIEW,"
    | "APPROVED"
    | "PAYMENT_NOT_COLLECTED"
    | "NOT_NEEDED"
    | "VOIDED"
    | null;
  pending_action: boolean;
  invoice_external_id?: string;
};

export type ServicingReinstatement = {
  description: string;
  effective_date: string;
  premium_change: { amount: number; currency: string };
  taxes_change: { amount: number; currency: string };
  fees_change: {
    carrier: { amount: number; currency: string };
    agency: { amount: number; currency: string };
    external_agency: { amount: number; currency: string };
  };
  status:
    | "NOT_STARTED"
    | "PENDING_PAYMENT"
    | "UNDER_REVIEW,"
    | "APPROVED"
    | "PAYMENT_NOT_COLLECTED"
    | "NOT_NEEDED"
    | "VOIDED"
    | null;
  pending_action: boolean;
  invoice_external_id?: string;
} & { request_payment?: boolean };

export type ServicingAudit = {
  description: string;
  effective_date: string;
  premium_change: { amount: number; currency: string };
  taxes_change: { amount: number; currency: string };
  fees_change: {
    carrier: { amount: number; currency: string };
    agency: { amount: number; currency: string };
    external_agency: { amount: number; currency: string };
  };
  status:
    | "NOT_STARTED"
    | "PENDING_PAYMENT"
    | "UNDER_REVIEW,"
    | "APPROVED"
    | "PAYMENT_NOT_COLLECTED"
    | "NOT_NEEDED"
    | "VOIDED"
    | null;
  pending_action: boolean;
  invoice_external_id?: string;
} & { line_of_business?: { professional_liability?: { occurrence_limit?: number; aggregate_limit?: number } } } & {
  request_payment?: boolean;
};

export interface ServicingRequestPaid {
  data: {
    payment_method?: string;
    amount_collected?: { amount: number; currency: string };
    payment_external_id?: string;
  };
  callback: { url: string; headers?: { Authorization?: string } };
}

export interface ServicingRequestNotPaid {
  callback: { url: string; headers?: { Authorization?: string } };
}

export interface AccountsSync {
  data: {
    id?: string;
    external_id?: string;
    business_information: { name: string };
    addresses: {
      type?: "mailing" | "billing";
      address_line: string;
      city?: string;
      state?: string;
      country_code?: string;
      postal_code?: string;
    }[];
    contacts?: {
      relationship?: "primary";
      first_name: string;
      last_name: string;
      email: string;
      communications_opt_out?: "none";
      contact_numbers: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
    }[];
    email: string;
    phone_number: string;
  };
  callback: { url: string; headers?: { Authorization?: string } };
}

export interface PoliciesSync {
  data: {
    external_id: string;
    policy_number?: string;
    account_id?: string;
    status: string;
    effective_date: string;
    expiration_date?: string;
    cancellation_date?: string;
    premium?: { amount: number; currency: string };
    taxes?: { amount: number; currency: string };
    fees?: { amount: number; currency: string };
    purchase_type?: string;
    renewal_flow?: string;
    billing_carrier_id?: string;
    issuing_carrier_id?: string;
    intermediary_id?: string;
    billing_type?: string;
    invoiced_by?: string;
    insurance_details?:
      | {
          packages: {
            package_id: string;
            coverages?: { coverage_id: string; current: number | string | boolean }[];
            lobs?: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
          }[];
          lobs?: any[];
        }
      | {
          packages?: any[];
          lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
        };
  };
  callback: { url: string; headers?: { Authorization?: string } };
}

export type Commission = { id: string } & {
  endorsement_id?: string;
  amount?: { amount: number; currency: string };
  percentage?: number;
  cw_servicing_fees?: { amount: number; currency: string };
  agency_servicing_fees?: { amount: number; currency: string };
  payment_processing_fees?: { amount: number; currency: string };
};

export type Contact = { id: string } & { account_id: string } & {
  relationship?: "primary" | "driver" | "owner" | "other";
  first_name?: string;
  last_name?: string;
  email?: string;
  communications_opt_out?: "email" | "sms" | "all" | "none";
  contact_numbers?: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
};

export type Endorsement = { id: string } & {
  id: string;
  policy_id: string;
  account_id: string;
  status:
    | "Not started"
    | "Pending payment"
    | "Under review"
    | "Approved"
    | "Payment Not Collected"
    | "Not needed"
    | "Voided"
    | null;
  audit_turnback_status: "Requested" | "Accepted" | "Rejected";
  endorsement_number: string;
  type_of_change: "Policy Change" | "Cancellation" | "Audit" | "New policy" | "Reinstatement";
  processed_date: string;
  description: string;
  effective_date: string;
  approved_date: string;
  premium_change: { amount: number; currency: string };
  taxes_change: { amount: number; currency: string };
  fees_change: {
    carrier?: { amount: number; currency: string };
    agency?: { amount: number; currency: string };
    external_agency?: { amount: number; currency: string };
  };
  financed_amount?: { amount: number; currency: string };
  correction_of_endorsement_id?: string;
};

export type InsuranceType = { id: string } & { name?: string; id?: string };

export type Payment = { id: string } & {
  id?: string;
  payment_date?: string;
  policy_id?: string;
  status?: "Succeeded" | "Failed" | "Pending" | "Disputed" | "Billing Approved" | null;
  account_id?: string;
  amount?: { amount: number; currency: string };
  payment_method?: "Card" | "Bank account" | "Bank transfer" | "Check" | "Account Current" | "Paypal";
  payment_type?: "Stripe" | "Carrier Portal" | "Premium Finance Portal" | "Other" | "Paypal";
  payment_concept?: string;
  endorsement_id?: string;
  related_voided_endorsement_id?: string;
  external_id?: string;
  effective_payment_date?: string;
  payment_transaction_id?: string;
};

export type PaymentTransaction = { id: string } & {
  id?: string;
  external_id?: string;
  status?: "succeeded";
  account_id?: string;
  amount_in_cents?: number;
  currency?: string;
  payment_method?: "card";
  payment_type?: "Stripe";
  performed_at?: string;
};

export type PaymentMethod = { type: "credit_card"; provider: "stripe"; token: string; account_id: string };

export type Policy = { id: string } & {
  id?: string;
  external_id?: string;
  policy_number?: string;
  account_id?: string;
  status?:
    | "Active"
    | "Cancelled"
    | "Cancellation in Progress"
    | "Expired"
    | "Flat Cancelled"
    | "Pending"
    | "Reinstated"
    | "Under Review";
  effective_date?: string;
  expiration_date?: string;
  cancellation_date?: string;
  premium?: { amount: number; currency: string };
  taxes?: { amount: number; currency: string };
  fees?: { amount: number; currency: string };
  insurance_type?: string;
  purchase_type?: "renewal_upload" | "renewal" | "new_business" | "cross_sell" | null;
  renewal_flow?: "auto" | "nonauto" | null;
  billing_carrier_id?: string;
  issuing_carrier_id?: string;
  finance_contract_number?: string;
  intermediary_id?: string;
  billing_type?: "Direct" | "Agency" | "Unknown";
  invoiced_by?: "Carrier" | "Coverwallet" | "Premium Finance Company" | "External PAS" | "Account Current" | "Unknown";
  line_of_business?: { professional_liability?: { occurrence_limit?: number; aggregate_limit?: number } };
};

export type PolicyV2 = { id: string } & {
  id?: string;
  external_id?: string;
  policy_number?: string;
  account_id?: string;
  status?:
    | "Active"
    | "Cancelled"
    | "Cancellation in Progress"
    | "Expired"
    | "Flat Cancelled"
    | "Pending"
    | "Reinstated"
    | "Under Review";
  effective_date?: string;
  expiration_date?: string;
  cancellation_date?: string;
  premium?: { amount: number; currency: string };
  taxes?: { amount: number; currency: string };
  fees?: { amount: number; currency: string };
  insurance_details?:
    | {
        packages: {
          package_id: string;
          coverages?: { coverage_id: string; current: number | string | boolean }[];
          lobs?: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
        }[];
        lobs?: any[];
      }
    | {
        packages?: any[];
        lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
      };
  purchase_type?: "renewal_upload" | "renewal" | "new_business" | "cross_sell" | null;
  renewal_flow?: "auto" | "nonauto" | null;
  billing_carrier_id?: string;
  issuing_carrier_id?: string;
  finance_contract_number?: string;
  intermediary_id?: string;
  billing_type?: "Direct" | "Agency" | "Unknown";
  invoiced_by?: "Carrier" | "Coverwallet" | "Premium Finance Company" | "External PAS" | "Account Current" | "Unknown";
};

export interface PolicyDocument {
  /** @format base64 */
  file?: string;

  /**
   * @format data
   * @example 2017-02-21
   */
  create_date?: string;
}

export type Refund = { id: string } & {
  id?: string;
  client_refund_id?: string;
  payment_id?: string;
  payment_external_id?: string;
  amount_in_cents?: number;
  status?: "Succeeded" | "Failed";
  currency?: string;
  source?: string;
  created?: string;
  reason?: string;
};

export type Quote = { id: string } & {
  external_id?: string;
  account_id?: string;
  insurance_type?: string;
  policy_ids?: string[];
  name?: string;
  stage?:
    | "NON_QUOTED"
    | "PENDING_CUSTOMER_INFORMATION"
    | "QUOTED_PENDING_PRODUCER"
    | "QUOTED_PENDING_APPROVAL"
    | "QUOTED_AVAILABLE_TO_PURCHASE"
    | "PURCHASED"
    | "REJECTED";
  premium?: { amount: number; currency: string };
  taxes?: { amount: number; currency: string };
  effective_date?: string;
  expiration_date?: string;
  fees?: {
    carrier?: { amount: number; currency: string };
    agency?: { amount: number; currency: string };
    external_agency?: { amount: number; currency: string };
  };
  insurance_details?:
    | {
        packages: {
          package_id: string;
          coverages?: { coverage_id: string; current: number | string | boolean }[];
          lobs?: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
        }[];
        lobs?: any[];
      }
    | {
        packages?: any[];
        lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
      };
  issuing_carrier_id?: string;
  billing_carrier_id?: string;
};

export interface CertificateSyncronization {
  certificate: {
    external_id: string;
    document: string;
    effective_date: string;
    expiration_date: string;
    certificate_holder: {
      name: string;
      address: {
        type?: "mailing" | "billing";
        address_line: string;
        city?: string;
        state?: string;
        country_code?: string;
        postal_code?: string;
      };
    };
  };
  request: {
    external_id: string;
    internal_id?: string;
    size: number;
    type: "ADHOC" | "RENEWAL";
    delivery_emails: string[];
  };

  /** @example [{"lobs":[{"code":"EERI","name":"ERISA Bond"}]}] */
  policies: { lobs: { name: string; code: string }[] }[];
  callback?: { url?: string };
}

export interface CertificateGenerate {
  data: {
    certificate_lines: {
      lob_id?: string;
      holder_types?: {
        key:
          | "ADDITIONAL_INSURED"
          | "PRIMARY_AND_NON_CONTRIBUTORY"
          | "EVIDENCE_OF_INSURANCE"
          | "WAIVER_OF_SUBROGATION"
          | "LOSS_PAYEE"
          | "MORTGAGEE";
        additional_insured_attributes?: {
          relation?:
            | "bank_loss_payee"
            | "bank_mortgagee"
            | "client"
            | "landlord"
            | "governmental_authority"
            | "supplier"
            | "vendor"
            | "other";
          relation_description?: string;
        };
      }[];
    }[];
    certificate_holder?: {
      name: string;
      has_to_be_sent: boolean;
      email?: string;
      address?: { state: string; city: string; postal_code: string; address_line: string };
    };
    description_of_operation?: string;
  };
  callback: { url: string; headers?: { Authorization?: string } };
}

export interface AgentSynchronization {
  data: {
    external_id: string;
    external_agency_id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number?: string;
    role: string;
    email_verified: "true" | "false";
  };
  callback: { url: string };
}

export type PatchRequest = {
  op: "add" | "remove" | "replace" | "move" | "copy" | "test";
  path: string;
  value?: object;
  from?: string;
}[];

export interface AgentRequest {
  /**
   * Account id to identify the account
   * @format uuid
   */
  account_id: string;

  /** Type of agent request */
  type: "CERTIFICATE" | "MONEY_COLLECTION" | "BILLING" | "DOCUMENTATION";

  /**
   * Subject for the agent request
   * @example Error importing certificates from Bridge with request id 123243253
   */
  subject: string;

  /**
   * Long description for the agent request
   * @example fix certificate 8745268231 failed due to data validation error
   */
  description: string;

  /**
   * Policy id to identify the related policy
   * @format uuid
   */
  policy_id?: string;

  /** Priority for the agent request */
  priority?: "HIGH" | "MEDIUM" | "LOW";
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://public-api.aoncover.biz" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Coverwallet OpenAPI
 * @version 1.0.0
 * @baseUrl https://public-api.aoncover.biz
 *
 * ### Authentication
 *
 * All endpoints - except the access token generation - require the
 * API client to send a valid access token in the `Authorization` header.
 * This token is obtained using the [authentication endpoint](#/Authentication/get_access_token)
 * and expires after 30 minutes. A new access token can be generated at any time,
 * when the previous one has expired. Generating a new access token does not expire
 * any existing token, so multiple valid access token can coexist.
 *
 * ### Idempotency
 *
 * Some endpoints require the API client to send an idempotency key in the `X-IdempotencyKey`
 * header to uniquely identify a request.
 *
 * ### Organization
 *
 * Some endpoints require the API client to send an organization id key in the `x-organizationid`
 * header to identify the organization.
 *
 * ### Error handling
 *
 * All errors returned by the API endpoints follow the same structure:
 * * **source**: Indicates the field or operation where the error happened. Usually, it contains the name of a field where a validation error happened.
 * * **type**: A string with capital letters that identifies the kind of error that happened. The description of every error type can be found in the table below.
 * * **message**: A human-readable description of the error. This description may change over time to make it more comprehensible, so it should not be used by API clients to understand the error that happened.
 *
 * ```
 *   {
 *     "source": "industry",
 *     "type": "VALIDATION",
 *     "message": "Industry Subindustry is not a valid UUID"
 *   }
 * ```
 *
 * <details>
 * | Error type        | Description                                                                                                                                                                       |
 * |------------------ |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  |
 * | VALIDATION        | The data provided in the request is not valid according to the documentation. The field where the violation happened should be described in the `source` property of the error.     |
 * | MISSING_PARAMETER | A required parameter was not sent to the API.
 * | DUPLICATED        | The data provided in the request is not valid according to the documentation. Some fields should be unique.  |
 * | INTERNAL_SERVER_ERROR | An error happened in the API servers. The system administrator has been notified. |
 * | RECORD_NOT_FOUND | The record cannot be found in our system. Please, make sure that the identifier of the record is correct. |
 * | MISSING_SCOPE | The scope(s) needed to use a certain endpoint cannot be found in the access token. Please, make sure that your user has access to the scope needed in that endpoint, and it is requested during the API login process |
 * | INVALID_SCOPE | At least one of the requested scopes is invalid, unknown, malformed, or not granted to the application |
 * | INVALID_TOKEN | The access token is not correct, a new one needs to be requested. This error normally happens when the original access token expires after 30 minutes. |
 * | MISSING_IDEMPOTENCY_KEY | The idempotency key is missing. Please, make sure to set X-IdempotencyKey header for this endpoint. |
 * | REUSED_IDEMPOTENCY_KEY | The provided idempotency key has already been used in another request with a different body. |
 * </details>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * @description Exchange your email and password by an access token that can be used to authenticate subsequent requests.
     *
     * @tags Authentication
     * @name GetAccessToken
     * @summary Get an access token
     * @request POST:/v1/oauth/token
     */
    getAccessToken: (
      data:
        | { grant_type: "password"; username: string; password: string; scope?: string }
        | { grant_type: "client_credentials"; client_id: string; client_secret: string; scope?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { access_token?: string; token_type?: string; expires_in?: number; scope?: string; created_at?: number },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/oauth/token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a new account
     *
     * @tags Account
     * @name AddAccount
     * @summary Add a new account
     * @request POST:/v1/accounts
     * @secure
     */
    addAccount: (
      data: {
        external_id?: string;
        agent_id?: string;
        business_information?: {
          name: string;
          type?: string;
          website?: string;
          identification_number?: string;
          year_established?: number;
          years_of_experience?: number;
          annual_revenue?: { amount: number; currency: string };
          fulltime_employees?: number;
          parttime_employees?: number;
          employees_annual_payroll?: number;
        };
        industry?: {
          type?: "sic" | "naics" | "naf" | "anzsic";
          class_code?: string;
          subclass_code?: string;
          code?: string;
        };
        addresses?: {
          type?: "mailing" | "billing";
          address_line: string;
          city?: string;
          state?: string;
          country_code?: string;
          postal_code?: string;
        }[];
        email?: string;
        phone_number?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: { id: string } & {
            external_id?: string;
            agent_id?: string;
            business_information?: {
              name: string;
              type?: string;
              website?: string;
              identification_number?: string;
              year_established?: number;
              years_of_experience?: number;
              annual_revenue?: { amount: number; currency: string };
              fulltime_employees?: number;
              parttime_employees?: number;
              employees_annual_payroll?: number;
            };
            industry?: {
              type?: "sic" | "naics" | "naf" | "anzsic";
              class_code?: string;
              subclass_code?: string;
              code?: string;
            };
            addresses?: {
              type?: "mailing" | "billing";
              address_line: string;
              city?: string;
              state?: string;
              country_code?: string;
              postal_code?: string;
            }[];
            email?: string;
            phone_number?: string;
          };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/accounts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch an account by external ID
     *
     * @tags Account
     * @name ListAccountByExternalId
     * @summary Fetch an account
     * @request GET:/v1/accounts
     * @secure
     */
    listAccountByExternalId: (query: { external_id: string }, params: RequestParams = {}) =>
      this.request<
        {
          data?: ({ id: string } & {
            external_id?: string;
            agent_id?: string;
            business_information?: {
              name: string;
              type?: string;
              website?: string;
              identification_number?: string;
              year_established?: number;
              years_of_experience?: number;
              annual_revenue?: { amount: number; currency: string };
              fulltime_employees?: number;
              parttime_employees?: number;
              employees_annual_payroll?: number;
            };
            industry?: {
              type?: "sic" | "naics" | "naf" | "anzsic";
              class_code?: string;
              subclass_code?: string;
              code?: string;
            };
            addresses?: {
              type?: "mailing" | "billing";
              address_line: string;
              city?: string;
              state?: string;
              country_code?: string;
              postal_code?: string;
            }[];
            email?: string;
            phone_number?: string;
          })[];
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/accounts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch an existing account by ID.
     *
     * @tags Account
     * @name GetAccount
     * @summary Fetch an account
     * @request GET:/v1/accounts/{id}
     * @secure
     */
    getAccount: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: { id: string } & {
            external_id?: string;
            agent_id?: string;
            business_information?: {
              name: string;
              type?: string;
              website?: string;
              identification_number?: string;
              year_established?: number;
              years_of_experience?: number;
              annual_revenue?: { amount: number; currency: string };
              fulltime_employees?: number;
              parttime_employees?: number;
              employees_annual_payroll?: number;
            };
            industry?: {
              type?: "sic" | "naics" | "naf" | "anzsic";
              class_code?: string;
              subclass_code?: string;
              code?: string;
            };
            addresses?: {
              type?: "mailing" | "billing";
              address_line: string;
              city?: string;
              state?: string;
              country_code?: string;
              postal_code?: string;
            }[];
            email?: string;
            phone_number?: string;
          };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/accounts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update an existing account. All fields are optional.
     *
     * @tags Account
     * @name UpdateAccount
     * @summary Update an account
     * @request PATCH:/v1/accounts/{id}
     * @secure
     */
    updateAccount: (
      id: string,
      data: {
        external_id?: string;
        agent_id?: string;
        business_information?: {
          name: string;
          type?: string;
          website?: string;
          identification_number?: string;
          year_established?: number;
          years_of_experience?: number;
          annual_revenue?: { amount: number; currency: string };
          fulltime_employees?: number;
          parttime_employees?: number;
          employees_annual_payroll?: number;
        };
        industry?: {
          type?: "sic" | "naics" | "naf" | "anzsic";
          class_code?: string;
          subclass_code?: string;
          code?: string;
        };
        addresses?: {
          type?: "mailing" | "billing";
          address_line: string;
          city?: string;
          state?: string;
          country_code?: string;
          postal_code?: string;
        }[];
        email?: string;
        phone_number?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: { id: string } & {
            external_id?: string;
            agent_id?: string;
            business_information?: {
              name: string;
              type?: string;
              website?: string;
              identification_number?: string;
              year_established?: number;
              years_of_experience?: number;
              annual_revenue?: { amount: number; currency: string };
              fulltime_employees?: number;
              parttime_employees?: number;
              employees_annual_payroll?: number;
            };
            industry?: {
              type?: "sic" | "naics" | "naf" | "anzsic";
              class_code?: string;
              subclass_code?: string;
              code?: string;
            };
            addresses?: {
              type?: "mailing" | "billing";
              address_line: string;
              city?: string;
              state?: string;
              country_code?: string;
              postal_code?: string;
            }[];
            email?: string;
            phone_number?: string;
          };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/accounts/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a contact
     *
     * @tags Account
     * @name DeprecatedAddContact
     * @summary Add a contact. This operation is deprecated in favor of "POST /contacts"
     * @request POST:/v1/accounts/{id}/contacts
     * @deprecated
     * @secure
     */
    deprecatedAddContact: (
      id: string,
      data: {
        relationship?: "primary" | "driver" | "owner" | "other";
        first_name?: string;
        last_name?: string;
        email?: string;
        communications_opt_out?: "email" | "sms" | "all" | "none";
        contact_numbers?: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: { id: string } & {
            relationship?: "primary" | "driver" | "owner" | "other";
            first_name?: string;
            last_name?: string;
            email?: string;
            communications_opt_out?: "email" | "sms" | "all" | "none";
            contact_numbers?: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
          };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/accounts/${id}/contacts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve policies of an account
     *
     * @tags Account
     * @name AccountsPoliciesDetail
     * @summary Retrieve policies of an account
     * @request GET:/v1/accounts/{id}/policies
     * @deprecated
     * @secure
     */
    accountsPoliciesDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            external_id?: string;
            policy_number?: string;
            account_id?: string;
            status?:
              | "Active"
              | "Cancelled"
              | "Cancellation in Progress"
              | "Expired"
              | "Flat Cancelled"
              | "Pending"
              | "Reinstated"
              | "Under Review";
            effective_date?: string;
            expiration_date?: string;
            cancellation_date?: string;
            premium?: { amount: number; currency: string };
            taxes?: { amount: number; currency: string };
            fees?: { amount: number; currency: string };
            insurance_type?: string;
            purchase_type?: "renewal_upload" | "renewal" | "new_business" | "cross_sell" | null;
            renewal_flow?: "auto" | "nonauto" | null;
            billing_carrier_id?: string;
            issuing_carrier_id?: string;
            finance_contract_number?: string;
            intermediary_id?: string;
            billing_type?: "Direct" | "Agency" | "Unknown";
            invoiced_by?:
              | "Carrier"
              | "Coverwallet"
              | "Premium Finance Company"
              | "External PAS"
              | "Account Current"
              | "Unknown";
            line_of_business?: { professional_liability?: { occurrence_limit?: number; aggregate_limit?: number } };
          }[];
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/accounts/${id}/policies`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description # Servicing API The use of this API is to change the servicing information of an account. This can include changing any of this data: * Account owner * Account advisor * Account segmentation fiels: segment, branch and business unit When the account is successfully updated a http 200 response code is returned If either the account, the advisor or the owner are not found, a 404 http error code is returned and the detail of what has not been found is provided in the error object
     *
     * @tags Account
     * @name SetServicing
     * @summary Set servicing data
     * @request POST:/v1/accounts/{id}/servicing
     * @secure
     */
    setServicing: (
      id: string,
      data: {
        owner_username?: string;
        advisor_username?: string;
        business_unit?: string;
        branch?: string;
        segment?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            owner_username?: string;
            advisor_username?: string;
            business_unit?: string;
            branch?: string;
            segment?: string;
          };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/accounts/${id}/servicing`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve quotes of an account
     *
     * @tags Account
     * @name AccountsQuotesDetail
     * @summary Retrieve quotes of an account
     * @request GET:/v1/accounts/{id}/quotes
     * @secure
     */
    accountsQuotesDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: ({ id: string } & {
            external_id?: string;
            account_id?: string;
            insurance_type?: string;
            policy_ids?: string[];
            name?: string;
            stage?:
              | "NON_QUOTED"
              | "PENDING_CUSTOMER_INFORMATION"
              | "QUOTED_PENDING_PRODUCER"
              | "QUOTED_PENDING_APPROVAL"
              | "QUOTED_AVAILABLE_TO_PURCHASE"
              | "PURCHASED"
              | "REJECTED";
            premium?: { amount: number; currency: string };
            taxes?: { amount: number; currency: string };
            effective_date?: string;
            expiration_date?: string;
            fees?: {
              carrier?: { amount: number; currency: string };
              agency?: { amount: number; currency: string };
              external_agency?: { amount: number; currency: string };
            };
            insurance_details?:
              | {
                  packages: {
                    package_id: string;
                    coverages?: { coverage_id: string; current: number | string | boolean }[];
                    lobs?: {
                      lob_id: string;
                      coverages?: { coverage_id: string; current: number | string | boolean }[];
                    }[];
                  }[];
                  lobs?: any[];
                }
              | {
                  packages?: any[];
                  lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
                };
            issuing_carrier_id?: string;
            billing_carrier_id?: string;
          })[];
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/accounts/${id}/quotes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoints creates a new policy and returns the data of the policy created including the policy_id that needs to be used later for policy updates. The external_id field should be unique
     *
     * @tags Policy
     * @name AddPolicy
     * @summary Add a new policy
     * @request POST:/v1/policies
     * @deprecated
     * @secure
     */
    addPolicy: (
      data: {
        id?: string;
        external_id?: string;
        policy_number?: string;
        account_id?: string;
        status?:
          | "Active"
          | "Cancelled"
          | "Cancellation in Progress"
          | "Expired"
          | "Flat Cancelled"
          | "Pending"
          | "Reinstated"
          | "Under Review";
        effective_date?: string;
        expiration_date?: string;
        cancellation_date?: string;
        premium?: { amount: number; currency: string };
        taxes?: { amount: number; currency: string };
        fees?: { amount: number; currency: string };
        insurance_type?: string;
        purchase_type?: "renewal_upload" | "renewal" | "new_business" | "cross_sell" | null;
        renewal_flow?: "auto" | "nonauto" | null;
        billing_carrier_id?: string;
        issuing_carrier_id?: string;
        finance_contract_number?: string;
        intermediary_id?: string;
        billing_type?: "Direct" | "Agency" | "Unknown";
        invoiced_by?:
          | "Carrier"
          | "Coverwallet"
          | "Premium Finance Company"
          | "External PAS"
          | "Account Current"
          | "Unknown";
        line_of_business?: { professional_liability?: { occurrence_limit?: number; aggregate_limit?: number } };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: { id: string } & {
            id?: string;
            external_id?: string;
            policy_number?: string;
            account_id?: string;
            status?:
              | "Active"
              | "Cancelled"
              | "Cancellation in Progress"
              | "Expired"
              | "Flat Cancelled"
              | "Pending"
              | "Reinstated"
              | "Under Review";
            effective_date?: string;
            expiration_date?: string;
            cancellation_date?: string;
            premium?: { amount: number; currency: string };
            taxes?: { amount: number; currency: string };
            fees?: { amount: number; currency: string };
            insurance_type?: string;
            purchase_type?: "renewal_upload" | "renewal" | "new_business" | "cross_sell" | null;
            renewal_flow?: "auto" | "nonauto" | null;
            billing_carrier_id?: string;
            issuing_carrier_id?: string;
            finance_contract_number?: string;
            intermediary_id?: string;
            billing_type?: "Direct" | "Agency" | "Unknown";
            invoiced_by?:
              | "Carrier"
              | "Coverwallet"
              | "Premium Finance Company"
              | "External PAS"
              | "Account Current"
              | "Unknown";
            line_of_business?: { professional_liability?: { occurrence_limit?: number; aggregate_limit?: number } };
          };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/policies`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch policies filtering by any of the supported parameters listed below. If no parameters are provided, no policies will be returned and a error will be triggered.
     *
     * @tags Policy
     * @name ListPoliciesByFilter
     * @summary Fetch policies filtered by query params
     * @request GET:/v1/policies
     * @deprecated
     * @secure
     */
    listPoliciesByFilter: (
      query?: { external_id?: string; policy_number?: string; effective_date?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: ({ id: string } & {
            id?: string;
            external_id?: string;
            policy_number?: string;
            account_id?: string;
            status?:
              | "Active"
              | "Cancelled"
              | "Cancellation in Progress"
              | "Expired"
              | "Flat Cancelled"
              | "Pending"
              | "Reinstated"
              | "Under Review";
            effective_date?: string;
            expiration_date?: string;
            cancellation_date?: string;
            premium?: { amount: number; currency: string };
            taxes?: { amount: number; currency: string };
            fees?: { amount: number; currency: string };
            insurance_type?: string;
            purchase_type?: "renewal_upload" | "renewal" | "new_business" | "cross_sell" | null;
            renewal_flow?: "auto" | "nonauto" | null;
            billing_carrier_id?: string;
            issuing_carrier_id?: string;
            finance_contract_number?: string;
            intermediary_id?: string;
            billing_type?: "Direct" | "Agency" | "Unknown";
            invoiced_by?:
              | "Carrier"
              | "Coverwallet"
              | "Premium Finance Company"
              | "External PAS"
              | "Account Current"
              | "Unknown";
            line_of_business?: { professional_liability?: { occurrence_limit?: number; aggregate_limit?: number } };
          })[];
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/policies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch an existing policy by ID.
     *
     * @tags Policy
     * @name GetPolicy
     * @summary Fetch a policy
     * @request GET:/v1/policies/{id}
     * @deprecated
     * @secure
     */
    getPolicy: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: ({ id: string } & {
            id?: string;
            external_id?: string;
            policy_number?: string;
            account_id?: string;
            status?:
              | "Active"
              | "Cancelled"
              | "Cancellation in Progress"
              | "Expired"
              | "Flat Cancelled"
              | "Pending"
              | "Reinstated"
              | "Under Review";
            effective_date?: string;
            expiration_date?: string;
            cancellation_date?: string;
            premium?: { amount: number; currency: string };
            taxes?: { amount: number; currency: string };
            fees?: { amount: number; currency: string };
            insurance_type?: string;
            purchase_type?: "renewal_upload" | "renewal" | "new_business" | "cross_sell" | null;
            renewal_flow?: "auto" | "nonauto" | null;
            billing_carrier_id?: string;
            issuing_carrier_id?: string;
            finance_contract_number?: string;
            intermediary_id?: string;
            billing_type?: "Direct" | "Agency" | "Unknown";
            invoiced_by?:
              | "Carrier"
              | "Coverwallet"
              | "Premium Finance Company"
              | "External PAS"
              | "Account Current"
              | "Unknown";
            line_of_business?: { professional_liability?: { occurrence_limit?: number; aggregate_limit?: number } };
          })[];
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/policies/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve endorsements of a policy
     *
     * @tags Policy
     * @name PoliciesEndorsementsDetail
     * @summary Retrieve endorsements of a policy
     * @request GET:/v1/policies/{id}/endorsements
     * @secure
     */
    policiesEndorsementsDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: { id: string } & {
            id: string;
            policy_id: string;
            account_id: string;
            status:
              | "Not started"
              | "Pending payment"
              | "Under review"
              | "Approved"
              | "Payment Not Collected"
              | "Not needed"
              | "Voided"
              | null;
            audit_turnback_status: "Requested" | "Accepted" | "Rejected";
            endorsement_number: string;
            type_of_change: "Policy Change" | "Cancellation" | "Audit" | "New policy" | "Reinstatement";
            processed_date: string;
            description: string;
            effective_date: string;
            approved_date: string;
            premium_change: { amount: number; currency: string };
            taxes_change: { amount: number; currency: string };
            fees_change: {
              carrier?: { amount: number; currency: string };
              agency?: { amount: number; currency: string };
              external_agency?: { amount: number; currency: string };
            };
            financed_amount?: { amount: number; currency: string };
            correction_of_endorsement_id?: string;
          };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/policies/${id}/endorsements`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch a list of policy payments
     *
     * @tags Policy
     * @name ListPolicyPayments
     * @summary Fetch a list of policy payments
     * @request GET:/v1/policies/{id}/payments
     * @secure
     */
    listPolicyPayments: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            payment_date?: string;
            policy_id?: string;
            status?: "Succeeded" | "Failed" | "Pending" | "Disputed" | "Billing Approved" | null;
            account_id?: string;
            amount?: { amount: number; currency: string };
            payment_method?: "Card" | "Bank account" | "Bank transfer" | "Check" | "Account Current" | "Paypal";
            payment_type?: "Stripe" | "Carrier Portal" | "Premium Finance Portal" | "Other" | "Paypal";
            payment_concept?: string;
            endorsement_id?: string;
            related_voided_endorsement_id?: string;
            external_id?: string;
            effective_payment_date?: string;
            payment_transaction_id?: string;
          }[];
        },
        any
      >({
        path: `/v1/policies/${id}/payments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create document of a policy
     *
     * @tags Policy
     * @name PoliciesDocumentsPolicyCreate
     * @summary Create document of a policy
     * @request POST:/v1/policies/{id}/documents/policy
     * @secure
     */
    policiesDocumentsPolicyCreate: (
      id: string,
      data: { file?: string; create_date?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        { data?: { id: string } & { create_date?: string } },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/policies/${id}/documents/policy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch carriers list
     *
     * @tags Catalog
     * @name ListCarriers
     * @summary Fetch carriers list
     * @request GET:/v1/carriers
     */
    listCarriers: (params: RequestParams = {}) =>
      this.request<
        { data?: { name?: string; id?: string }[] },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/carriers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch insurance types list
     *
     * @tags Catalog
     * @name ListInsuranceTypes
     * @summary Fetch insurance types list
     * @request GET:/v1/insurance_types
     */
    listInsuranceTypes: (params: RequestParams = {}) =>
      this.request<
        { data?: { name?: string; id?: string }[] },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/insurance_types`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch coverages list
     *
     * @tags Catalog
     * @name ListInsuranceTypeCoverages
     * @summary Fetch coverages list for an insurance type
     * @request GET:/v1/insurance_types/{id}/coverages
     */
    listInsuranceTypeCoverages: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            name?: string;
            id?: string;
            coverages?: {
              id?: string;
              name?: string;
              key?: string;
              description?: string;
              type?: number | string | boolean;
            }[];
          };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/insurance_types/${id}/coverages`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch intermediaries list
     *
     * @tags Catalog
     * @name ListIntermediaries
     * @summary Fetch intermediaries list
     * @request GET:/v1/intermediaries
     */
    listIntermediaries: (params: RequestParams = {}) =>
      this.request<{ data?: { name?: string; id?: string }[] }, any>({
        path: `/v1/intermediaries`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Add a new subscription
     *
     * @tags Subscriptions
     * @name AddSubscription
     * @summary Add a new subscription
     * @request POST:/v1/subscriptions
     * @secure
     */
    addSubscription: (
      data: {
        endpoint: string;
        events: ("policy.created" | "policy.updated" | "policy.neverCompleted")[];
        notify_on_error_email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: { id: string } & {
            endpoint: string;
            events: ("policy.created" | "policy.updated" | "policy.neverCompleted")[];
            notify_on_error_email?: string;
          } & { signing_key?: string };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/subscriptions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description List all subscriptions
     *
     * @tags Subscriptions
     * @name ListSubscriptions
     * @summary List all subscriptions
     * @request GET:/v1/subscriptions
     * @secure
     */
    listSubscriptions: (query?: { type?: "ephemeral" | "persistent" | "all" }, params: RequestParams = {}) =>
      this.request<
        {
          data?: ({ id: string } & {
            endpoint: string;
            events: ("policy.created" | "policy.updated" | "policy.neverCompleted")[];
            notify_on_error_email?: string;
          } & { signing_key?: string })[];
        },
        any
      >({
        path: `/v1/subscriptions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Rotate signing_key for subscription
     *
     * @tags Subscriptions
     * @name RotateSigningKey
     * @summary Rotate signing_key for subscription
     * @request PUT:/v1/subscriptions/{id}/rotate_key
     * @secure
     */
    rotateSigningKey: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: { id: string } & {
            endpoint: string;
            events: ("policy.created" | "policy.updated" | "policy.neverCompleted")[];
            notify_on_error_email?: string;
          } & { signing_key?: string };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/subscriptions/${id}/rotate_key`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update subscription
     *
     * @tags Subscriptions
     * @name UpdateSubscription
     * @summary Update subscription
     * @request PUT:/v1/subscriptions/{id}
     * @secure
     */
    updateSubscription: (
      id: string,
      data: {
        endpoint: string;
        events: ("policy.created" | "policy.updated" | "policy.neverCompleted")[];
        notify_on_error_email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: { id: string } & {
            endpoint: string;
            events: ("policy.created" | "policy.updated" | "policy.neverCompleted")[];
            notify_on_error_email?: string;
          } & { signing_key?: string };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/subscriptions/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete subscription
     *
     * @tags Subscriptions
     * @name DeleteSubscription
     * @summary Delete subscription
     * @request DELETE:/v1/subscriptions/{id}
     * @secure
     */
    deleteSubscription: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: { id: string } & {
            endpoint: string;
            events: ("policy.created" | "policy.updated" | "policy.neverCompleted")[];
            notify_on_error_email?: string;
          } & { signing_key?: string };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/subscriptions/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a new payment method
     *
     * @tags Payment methods
     * @name AddPaymentMethod
     * @summary Add a new payment method
     * @request POST:/v1/payment_methods
     * @secure
     */
    addPaymentMethod: (
      data: { type: "credit_card"; provider: "stripe"; token: string; account_id: string },
      params: RequestParams = {},
    ) =>
      this.request<{ data?: { type: "credit_card"; provider: "stripe"; token: string; account_id: string } }, void>({
        path: `/v1/payment_methods`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch a payment by ID
     *
     * @tags Payments
     * @name GetPayment
     * @summary Fetch a payment
     * @request GET:/v1/payments/{id}
     * @secure
     */
    getPayment: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            payment_date?: string;
            policy_id?: string;
            status?: "Succeeded" | "Failed" | "Pending" | "Disputed" | "Billing Approved" | null;
            account_id?: string;
            amount?: { amount: number; currency: string };
            payment_method?: "Card" | "Bank account" | "Bank transfer" | "Check" | "Account Current" | "Paypal";
            payment_type?: "Stripe" | "Carrier Portal" | "Premium Finance Portal" | "Other" | "Paypal";
            payment_concept?: string;
            endorsement_id?: string;
            related_voided_endorsement_id?: string;
            external_id?: string;
            effective_payment_date?: string;
            payment_transaction_id?: string;
          }[];
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/payments/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch a payment transaction by external (Stripe) ID
     *
     * @tags Payment Transactions
     * @name GetPaymentTransaction
     * @summary Fetch a payment transaction
     * @request GET:/v1/payment_transactions/{id}
     * @secure
     */
    getPaymentTransaction: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            external_id?: string;
            status?: "succeeded";
            account_id?: string;
            amount_in_cents?: number;
            currency?: string;
            payment_method?: "card";
            payment_type?: "Stripe";
            performed_at?: string;
          }[];
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/payment_transactions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description To be requested by external clients to create a refund (full or partial) for a payment
     *
     * @tags Payment Transactions
     * @name CreateRefund
     * @summary Create a refund for a payment
     * @request POST:/v1/payment_transactions/{id}/refunds
     * @secure
     */
    createRefund: (
      id: string,
      data: {
        client_refund_id?: string;
        amount_in_cents?: number;
        currency?: string;
        policy_id?: string;
        reason?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            id?: string;
            client_refund_id?: string;
            payment_id?: string;
            payment_external_id?: string;
            amount_in_cents?: number;
            status?: "Succeeded" | "Failed";
            currency?: string;
            source?: string;
            created?: string;
            reason?: string;
          };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/payment_transactions/${id}/refunds`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch an existing quote by ID.
     *
     * @tags Quote
     * @name GetQuote
     * @summary Fetch a quote
     * @request GET:/v1/quotes/{id}
     * @secure
     */
    getQuote: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: ({ id: string } & {
            external_id?: string;
            account_id?: string;
            insurance_type?: string;
            policy_ids?: string[];
            name?: string;
            stage?:
              | "NON_QUOTED"
              | "PENDING_CUSTOMER_INFORMATION"
              | "QUOTED_PENDING_PRODUCER"
              | "QUOTED_PENDING_APPROVAL"
              | "QUOTED_AVAILABLE_TO_PURCHASE"
              | "PURCHASED"
              | "REJECTED";
            premium?: { amount: number; currency: string };
            taxes?: { amount: number; currency: string };
            effective_date?: string;
            expiration_date?: string;
            fees?: {
              carrier?: { amount: number; currency: string };
              agency?: { amount: number; currency: string };
              external_agency?: { amount: number; currency: string };
            };
            insurance_details?:
              | {
                  packages: {
                    package_id: string;
                    coverages?: { coverage_id: string; current: number | string | boolean }[];
                    lobs?: {
                      lob_id: string;
                      coverages?: { coverage_id: string; current: number | string | boolean }[];
                    }[];
                  }[];
                  lobs?: any[];
                }
              | {
                  packages?: any[];
                  lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
                };
            issuing_carrier_id?: string;
            billing_carrier_id?: string;
          })[];
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/quotes/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Partially update an existing quote.
     *
     * @tags Quote
     * @name PatchQuote
     * @summary Partially update a quote
     * @request PATCH:/v1/quotes/{id}
     * @secure
     */
    patchQuote: (
      id: string,
      data:
        | {
            data: {
              op: "add" | "remove" | "replace" | "move" | "copy" | "test";
              path: string;
              value?: object;
              from?: string;
            }[];
            callback: { url: string };
          }
        | {
            op: "add" | "remove" | "replace" | "move" | "copy" | "test";
            path: string;
            value?: object;
            from?: string;
          }[],
      params: RequestParams = {},
    ) =>
      this.request<
        { data?: { operation_id?: string; status?: "processing" } },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/quotes/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch quotes by external ID.
     *
     * @tags Quote
     * @name ListQuotes
     * @summary Fetch list of quotes
     * @request GET:/v1/quotes
     * @secure
     */
    listQuotes: (query: { external_id: string; effective_date?: string }, params: RequestParams = {}) =>
      this.request<
        {
          data?: ({ id: string } & {
            external_id?: string;
            account_id?: string;
            insurance_type?: string;
            policy_ids?: string[];
            name?: string;
            stage?:
              | "NON_QUOTED"
              | "PENDING_CUSTOMER_INFORMATION"
              | "QUOTED_PENDING_PRODUCER"
              | "QUOTED_PENDING_APPROVAL"
              | "QUOTED_AVAILABLE_TO_PURCHASE"
              | "PURCHASED"
              | "REJECTED";
            premium?: { amount: number; currency: string };
            taxes?: { amount: number; currency: string };
            effective_date?: string;
            expiration_date?: string;
            fees?: {
              carrier?: { amount: number; currency: string };
              agency?: { amount: number; currency: string };
              external_agency?: { amount: number; currency: string };
            };
            insurance_details?:
              | {
                  packages: {
                    package_id: string;
                    coverages?: { coverage_id: string; current: number | string | boolean }[];
                    lobs?: {
                      lob_id: string;
                      coverages?: { coverage_id: string; current: number | string | boolean }[];
                    }[];
                  }[];
                  lobs?: any[];
                }
              | {
                  packages?: any[];
                  lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
                };
            issuing_carrier_id?: string;
            billing_carrier_id?: string;
          })[];
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/quotes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create quote
     *
     * @tags Quote
     * @name QuotesCreate
     * @summary Add a new quote
     * @request POST:/v1/quotes
     * @secure
     */
    quotesCreate: (
      data: {
        data: {
          external_id?: string;
          account_id: string;
          expiring_policy_id?: string;
          policy_ids?: string[];
          stage?:
            | "PENDING_CUSTOMER_INFORMATION"
            | "QUOTED_PENDING_PRODUCER"
            | "QUOTED_PENDING_APPROVAL"
            | "QUOTED_AVAILABLE_TO_PURCHASE";
          premium?: { amount: number; currency: string };
          taxes?: { amount: number; currency: string };
          effective_date?: string;
          expiration_date?: string;
          fees?: {
            carrier?: { amount: number; currency: string };
            agency?: { amount: number; currency: string };
            external_agency?: { amount: number; currency: string };
          };
          insurance_details:
            | {
                packages: {
                  package_id: string;
                  coverages?: { coverage_id: string; current: number | string | boolean }[];
                  lobs?: {
                    lob_id: string;
                    coverages?: { coverage_id: string; current: number | string | boolean }[];
                  }[];
                }[];
                lobs?: any[];
              }
            | {
                packages?: any[];
                lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
              };
          issuing_carrier_id: string;
          billing_carrier_id?: string;
        };
        callback: { url: string };
      },
      params: RequestParams = {},
    ) =>
      this.request<{ process: { id: string } }, { errors?: { source?: string; type: string; message: string }[] }>({
        path: `/v1/quotes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sync a quote purchased outside of CW
     *
     * @tags Quote
     * @name UpdateQuote
     * @summary Sync a quote
     * @request POST:/v1/quotes/{id}/bind
     * @secure
     */
    updateQuote: (
      id: string,
      data: {
        data: { policy: { number: string }; invoice: { invoiced_by: "Carrier" | "External PAS" } };
        callback: { url: string };
      },
      params: RequestParams = {},
    ) =>
      this.request<{ process: { id: string } }, { errors?: { source?: string; type: string; message: string }[] }>({
        path: `/v1/quotes/${id}/bind`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch an endorsement by ID
     *
     * @tags Endorsements
     * @name GetEndorsement
     * @summary Fetch an endorsement
     * @request GET:/v1/endorsements/{id}
     * @secure
     */
    getEndorsement: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: ({ id: string } & {
            id: string;
            policy_id: string;
            account_id: string;
            status:
              | "Not started"
              | "Pending payment"
              | "Under review"
              | "Approved"
              | "Payment Not Collected"
              | "Not needed"
              | "Voided"
              | null;
            audit_turnback_status: "Requested" | "Accepted" | "Rejected";
            endorsement_number: string;
            type_of_change: "Policy Change" | "Cancellation" | "Audit" | "New policy" | "Reinstatement";
            processed_date: string;
            description: string;
            effective_date: string;
            approved_date: string;
            premium_change: { amount: number; currency: string };
            taxes_change: { amount: number; currency: string };
            fees_change: {
              carrier?: { amount: number; currency: string };
              agency?: { amount: number; currency: string };
              external_agency?: { amount: number; currency: string };
            };
            financed_amount?: { amount: number; currency: string };
            correction_of_endorsement_id?: string;
          })[];
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/endorsements/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch the commissions by endorsement ID
     *
     * @tags Comissions
     * @name GetEndorsementCommissions
     * @summary Fetch the commissions applied over an endorsement
     * @request GET:/v1/endorsements/{id}/commissions
     * @secure
     */
    getEndorsementCommissions: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            endorsement_id?: string;
            amount?: { amount: number; currency: string };
            percentage?: number;
            cw_servicing_fees?: { amount: number; currency: string };
            agency_servicing_fees?: { amount: number; currency: string };
            payment_processing_fees?: { amount: number; currency: string };
          };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/endorsements/${id}/commissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch a list of endorsement payments
     *
     * @tags Endorsements
     * @name ListEndorsementPayments
     * @summary Fetch a list of endorsement payments
     * @request GET:/v1/endorsements/{id}/payments
     * @secure
     */
    listEndorsementPayments: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            payment_date?: string;
            policy_id?: string;
            status?: "Succeeded" | "Failed" | "Pending" | "Disputed" | "Billing Approved" | null;
            account_id?: string;
            amount?: { amount: number; currency: string };
            payment_method?: "Card" | "Bank account" | "Bank transfer" | "Check" | "Account Current" | "Paypal";
            payment_type?: "Stripe" | "Carrier Portal" | "Premium Finance Portal" | "Other" | "Paypal";
            payment_concept?: string;
            endorsement_id?: string;
            related_voided_endorsement_id?: string;
            external_id?: string;
            effective_payment_date?: string;
            payment_transaction_id?: string;
          }[];
        },
        any
      >({
        path: `/v1/endorsements/${id}/payments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a contact
     *
     * @tags Contact
     * @name AddContact
     * @summary Add a contact
     * @request POST:/v1/contacts
     * @secure
     */
    addContact: (
      data: { account_id: string } & {
        relationship?: "primary" | "driver" | "owner" | "other";
        first_name?: string;
        last_name?: string;
        email?: string;
        communications_opt_out?: "email" | "sms" | "all" | "none";
        contact_numbers?: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: { id: string } & { account_id: string } & {
            relationship?: "primary" | "driver" | "owner" | "other";
            first_name?: string;
            last_name?: string;
            email?: string;
            communications_opt_out?: "email" | "sms" | "all" | "none";
            contact_numbers?: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
          };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/contacts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a contact of an account. All fields except "contact_id" and "account_id" are optional.
     *
     * @tags Contact
     * @name UpdateContact
     * @summary Update a contact
     * @request PATCH:/v1/contacts/{id}
     * @secure
     */
    updateContact: (
      id: string,
      data: { account_id: string } & {
        relationship?: "primary" | "driver" | "owner" | "other";
        first_name?: string;
        last_name?: string;
        email?: string;
        communications_opt_out?: "email" | "sms" | "all" | "none";
        contact_numbers?: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: { id: string } & { account_id: string } & {
            relationship?: "primary" | "driver" | "owner" | "other";
            first_name?: string;
            last_name?: string;
            email?: string;
            communications_opt_out?: "email" | "sms" | "all" | "none";
            contact_numbers?: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
          };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/contacts/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new certificate
     *
     * @tags Account, Certificates
     * @name AddAccountDocumentCertificate
     * @summary Create a new certificate
     * @request POST:/v1/accounts/{id}/certificates
     * @deprecated
     * @secure
     */
    addAccountDocumentCertificate: (
      id: string,
      data: {
        certificate: {
          external_id: string;
          document: string;
          effective_date: string;
          expiration_date: string;
          certificate_holder: {
            name: string;
            address: {
              type?: "mailing" | "billing";
              address_line: string;
              city?: string;
              state?: string;
              country_code?: string;
              postal_code?: string;
            };
          };
        };
        request: {
          external_id: string;
          internal_id?: string;
          size: number;
          type: "ADHOC" | "RENEWAL";
          delivery_emails: string[];
        };
        policies: { lobs: { name: string; code: string }[] }[];
        callback?: { url?: string };
      },
      params: RequestParams = {},
    ) =>
      this.request<{ process: { id: string } }, { errors?: { source?: string; type: string; message: string }[] }>({
        path: `/v1/accounts/${id}/certificates`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Third party request to generate certificate
     *
     * @tags Certificates
     * @name CertificateGenerate
     * @summary Third party request to generate certificate
     * @request POST:/v1/accounts/{id}/certificates/generate
     * @secure
     */
    certificateGenerate: (
      id: string,
      data: {
        data: {
          certificate_lines: {
            lob_id?: string;
            holder_types?: {
              key:
                | "ADDITIONAL_INSURED"
                | "PRIMARY_AND_NON_CONTRIBUTORY"
                | "EVIDENCE_OF_INSURANCE"
                | "WAIVER_OF_SUBROGATION"
                | "LOSS_PAYEE"
                | "MORTGAGEE";
              additional_insured_attributes?: {
                relation?:
                  | "bank_loss_payee"
                  | "bank_mortgagee"
                  | "client"
                  | "landlord"
                  | "governmental_authority"
                  | "supplier"
                  | "vendor"
                  | "other";
                relation_description?: string;
              };
            }[];
          }[];
          certificate_holder?: {
            name: string;
            has_to_be_sent: boolean;
            email?: string;
            address?: { state: string; city: string; postal_code: string; address_line: string };
          };
          description_of_operation?: string;
        };
        callback: { url: string; headers?: { Authorization?: string } };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { processId?: string; message?: string },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/accounts/${id}/certificates/generate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a certificate
     *
     * @tags Certificates
     * @name CertificateGet
     * @summary Get certificate
     * @request GET:/v1/accounts/{accountId}/certificates/{certificateId}
     * @secure
     */
    certificateGet: (accountId: string, certificateId: string, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/v1/accounts/${accountId}/certificates/${certificateId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Create a new invoice
     *
     * @tags Account, Invoices
     * @name AddAccountDocumentInvoice
     * @summary Create a new invoice
     * @request POST:/v1/accounts/{id}/invoices
     * @secure
     */
    addAccountDocumentInvoice: (
      id: string,
      data: {
        data: {
          invoice: {
            external_id: string;
            document_number: string;
            document: string;
            billing_date: string;
            total: { amount: number; currency: string };
          };
          lines: { policy_id: string; transaction: { effective_date: string } }[];
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<{ status?: string }, { errors?: { source?: string; type: string; message: string }[] }>({
        path: `/v1/accounts/${id}/invoices`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Apply account changes to an existing policy
     *
     * @tags Servicing
     * @name ApplyAccountChanges
     * @summary Apply account changes to an existing policy
     * @request POST:/v1/servicing/accounts/{id}/account_changes
     * @secure
     */
    applyAccountChanges: (
      id: string,
      data: {
        business_information?: { name: string };
        addresses?: {
          type?: "mailing" | "billing";
          address_line: string;
          city?: string;
          state?: string;
          country_code?: string;
          postal_code?: string;
        }[];
        contacts?: {
          first_name?: string;
          last_name?: string;
          email?: string;
          contact_numbers?: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
        }[];
        email?: string;
        phone_number?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          business_information?: { name: string };
          addresses?: {
            type?: "mailing" | "billing";
            address_line: string;
            city?: string;
            state?: string;
            country_code?: string;
            postal_code?: string;
          }[];
          contacts?: {
            first_name?: string;
            last_name?: string;
            email?: string;
            contact_numbers?: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
          }[];
          email?: string;
          phone_number?: string;
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/servicing/accounts/${id}/account_changes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Apply midterm changes to an existing policy
     *
     * @tags Servicing
     * @name ApplyMidtermChanges
     * @summary Apply midterm changes to an existing policy
     * @request POST:/v1/servicing/policies/{id}/midterm_changes
     * @deprecated
     * @secure
     */
    applyMidtermChanges: (
      id: string,
      data: {
        description: string;
        effective_date: string;
        premium_change: { amount: number; currency: string };
        taxes_change: { amount: number; currency: string };
        fees_change: {
          carrier: { amount: number; currency: string };
          agency: { amount: number; currency: string };
          external_agency: { amount: number; currency: string };
        };
        status:
          | "NOT_STARTED"
          | "PENDING_PAYMENT"
          | "UNDER_REVIEW,"
          | "APPROVED"
          | "PAYMENT_NOT_COLLECTED"
          | "NOT_NEEDED"
          | "VOIDED"
          | null;
        pending_action: boolean;
        invoice_external_id?: string;
      } & {
        line_of_business?: { professional_liability?: { occurrence_limit?: number; aggregate_limit?: number } };
      } & { request_payment?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          description: string;
          effective_date: string;
          premium_change: { amount: number; currency: string };
          taxes_change: { amount: number; currency: string };
          fees_change: {
            carrier: { amount: number; currency: string };
            agency: { amount: number; currency: string };
            external_agency: { amount: number; currency: string };
          };
          status:
            | "NOT_STARTED"
            | "PENDING_PAYMENT"
            | "UNDER_REVIEW,"
            | "APPROVED"
            | "PAYMENT_NOT_COLLECTED"
            | "NOT_NEEDED"
            | "VOIDED"
            | null;
          pending_action: boolean;
          invoice_external_id?: string;
        } & {
          line_of_business?: { professional_liability?: { occurrence_limit?: number; aggregate_limit?: number } };
        } & { request_payment?: boolean },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/servicing/policies/${id}/midterm_changes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Apply cancellation to an existing policy
     *
     * @tags Servicing
     * @name ApplyCancellation
     * @summary Apply cancellation to an existing policy
     * @request POST:/v1/servicing/policies/{id}/cancellation
     * @secure
     */
    applyCancellation: (id: string, data: ServicingCancellation, params: RequestParams = {}) =>
      this.request<ServicingCancellation, { errors?: { source?: string; type: string; message: string }[] }>({
        path: `/v1/servicing/policies/${id}/cancellation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Apply reinstatement to an existing policy
     *
     * @tags Servicing
     * @name ApplyReinstatement
     * @summary Apply reinstatement to an existing policy
     * @request POST:/v1/servicing/policies/{id}/reinstatement
     * @secure
     */
    applyReinstatement: (
      id: string,
      data: {
        description: string;
        effective_date: string;
        premium_change: { amount: number; currency: string };
        taxes_change: { amount: number; currency: string };
        fees_change: {
          carrier: { amount: number; currency: string };
          agency: { amount: number; currency: string };
          external_agency: { amount: number; currency: string };
        };
        status:
          | "NOT_STARTED"
          | "PENDING_PAYMENT"
          | "UNDER_REVIEW,"
          | "APPROVED"
          | "PAYMENT_NOT_COLLECTED"
          | "NOT_NEEDED"
          | "VOIDED"
          | null;
        pending_action: boolean;
        invoice_external_id?: string;
      } & { request_payment?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          description: string;
          effective_date: string;
          premium_change: { amount: number; currency: string };
          taxes_change: { amount: number; currency: string };
          fees_change: {
            carrier: { amount: number; currency: string };
            agency: { amount: number; currency: string };
            external_agency: { amount: number; currency: string };
          };
          status:
            | "NOT_STARTED"
            | "PENDING_PAYMENT"
            | "UNDER_REVIEW,"
            | "APPROVED"
            | "PAYMENT_NOT_COLLECTED"
            | "NOT_NEEDED"
            | "VOIDED"
            | null;
          pending_action: boolean;
          invoice_external_id?: string;
        } & { request_payment?: boolean },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/servicing/policies/${id}/reinstatement`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Apply audit to an existing policy
     *
     * @tags Servicing
     * @name ApplyAudit
     * @summary Apply audit to an existing policy
     * @request POST:/v1/servicing/policies/{id}/audit
     * @deprecated
     * @secure
     */
    applyAudit: (id: string, data: ServicingMidtermChanges, params: RequestParams = {}) =>
      this.request<ServicingMidtermChanges, { errors?: { source?: string; type: string; message: string }[] }>({
        path: `/v1/servicing/policies/${id}/audit`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Close payments that were paid
     *
     * @tags Servicing
     * @name ClosePaidPayment
     * @summary Close payments that were paid
     * @request POST:/v1/servicing/endorsements/{id}/request_paid
     * @secure
     */
    closePaidPayment: (
      id: string,
      data: {
        data: {
          payment_method?: string;
          amount_collected?: { amount: number; currency: string };
          payment_external_id?: string;
        };
        callback: { url: string; headers?: { Authorization?: string } };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { data?: { processId?: string; message?: string } },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/servicing/endorsements/${id}/request_paid`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Close payments that were not paid
     *
     * @tags Servicing
     * @name CloseNotPaidPayment
     * @summary Close payments that were not paid
     * @request POST:/v1/servicing/endorsements/{id}/request_not_paid
     * @secure
     */
    closeNotPaidPayment: (
      id: string,
      data: { callback: { url: string; headers?: { Authorization?: string } } },
      params: RequestParams = {},
    ) =>
      this.request<
        { data?: { processId?: string; message?: string } },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/servicing/endorsements/${id}/request_not_paid`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sync accounts from third parties
     *
     * @tags Entities Sync
     * @name AccountsSync
     * @summary Sync accounts from third parties
     * @request POST:/v1/accounts/sync
     * @secure
     */
    accountsSync: (
      query: { identifier: string },
      data: {
        data: {
          id?: string;
          external_id?: string;
          business_information: { name: string };
          addresses: {
            type?: "mailing" | "billing";
            address_line: string;
            city?: string;
            state?: string;
            country_code?: string;
            postal_code?: string;
          }[];
          contacts?: {
            relationship?: "primary";
            first_name: string;
            last_name: string;
            email: string;
            communications_opt_out?: "none";
            contact_numbers: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
          }[];
          email: string;
          phone_number: string;
        };
        callback: { url: string; headers?: { Authorization?: string } };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { processId?: string; message?: string },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/accounts/sync`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create agent request
     *
     * @tags Agent request
     * @name CreateRequest
     * @summary Create agent request
     * @request POST:/v1/requests
     * @secure
     */
    createRequest: (
      data: {
        account_id: string;
        type: "CERTIFICATE" | "MONEY_COLLECTION" | "BILLING" | "DOCUMENTATION";
        subject: string;
        description: string;
        policy_id?: string;
        priority?: "HIGH" | "MEDIUM" | "LOW";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            account_id: string;
            type: "CERTIFICATE" | "MONEY_COLLECTION" | "BILLING" | "DOCUMENTATION";
            subject: string;
            description: string;
            policy_id?: string;
            priority?: "HIGH" | "MEDIUM" | "LOW";
          };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/requests`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create or update agent
     *
     * @tags Agent
     * @name SyncAgent
     * @summary Create or update agent
     * @request POST:/v1/agents/sync
     * @secure
     */
    syncAgent: (
      data: {
        data: {
          external_id: string;
          external_agency_id: string;
          first_name: string;
          last_name: string;
          email: string;
          phone_number?: string;
          role: string;
          email_verified: "true" | "false";
        };
        callback: { url: string };
      },
      params: RequestParams = {},
    ) =>
      this.request<{ process: { id: string } }, { errors?: { source?: string; type: string; message: string }[] }>({
        path: `/v1/agents/sync`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a new application
     *
     * @tags Application
     * @name AddApplicationRequest
     * @summary Create a new application
     * @request POST:/v1/applications
     * @deprecated
     * @secure
     */
    addApplicationRequest: (
      data: {
        account: {
          external_id?: string;
          business_information: {
            name: string;
            type?: string;
            website?: string;
            identification_number?: string;
            year_established?: number;
            years_of_experience?: number;
            annual_revenue?: { amount: number; currency: string };
            fulltime_employees?: number;
            parttime_employees?: number;
            employees_annual_payroll?: number;
          };
          industry?: { type?: "naics"; code?: string };
          addresses?: {
            type?: "mailing" | "billing";
            address_line?: string;
            city?: string;
            state?: string;
            country_code?: string;
            postal_code?: string;
          }[];
          email: string;
          phone_number?: string;
        };
        contacts: {
          relationship?: "primary" | "driver" | "owner" | "other";
          first_name: string;
          last_name: string;
          email?: string;
          communications_opt_out?: "email" | "sms" | "all" | "none";
          contact_numbers?: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
        }[];
        partnership: { id: string; lead_external_id?: string; source?: string };
        insurance_details?: Record<
          string,
          {
            coverages?: {
              each_aggregate: { minimum: number; current: number };
              each_occurrence: { minimum: number; current: number };
              deductible: { maximum: number; current: number };
            };
          }
        >;
        custom_fields?: { key: string; value: string }[];
        other_information?: { key: string; value: string }[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { application_link?: string; account_id?: string },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v1/applications`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  v2 = {
    /**
     * @description Retrieve policies of an account
     *
     * @tags Account
     * @name GetAccountPoliciesV2
     * @summary Retrieve policies of an account
     * @request GET:/v2/accounts/{id}/policies
     * @secure
     */
    getAccountPoliciesV2: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          data?: ({ id: string } & {
            id?: string;
            external_id?: string;
            policy_number?: string;
            account_id?: string;
            status?:
              | "Active"
              | "Cancelled"
              | "Cancellation in Progress"
              | "Expired"
              | "Flat Cancelled"
              | "Pending"
              | "Reinstated"
              | "Under Review";
            effective_date?: string;
            expiration_date?: string;
            cancellation_date?: string;
            premium?: { amount: number; currency: string };
            taxes?: { amount: number; currency: string };
            fees?: { amount: number; currency: string };
            insurance_details?:
              | {
                  packages: {
                    package_id: string;
                    coverages?: { coverage_id: string; current: number | string | boolean }[];
                    lobs?: {
                      lob_id: string;
                      coverages?: { coverage_id: string; current: number | string | boolean }[];
                    }[];
                  }[];
                  lobs?: any[];
                }
              | {
                  packages?: any[];
                  lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
                };
            purchase_type?: "renewal_upload" | "renewal" | "new_business" | "cross_sell" | null;
            renewal_flow?: "auto" | "nonauto" | null;
            billing_carrier_id?: string;
            issuing_carrier_id?: string;
            finance_contract_number?: string;
            intermediary_id?: string;
            billing_type?: "Direct" | "Agency" | "Unknown";
            invoiced_by?:
              | "Carrier"
              | "Coverwallet"
              | "Premium Finance Company"
              | "External PAS"
              | "Account Current"
              | "Unknown";
          })[];
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v2/accounts/${id}/policies`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoints creates a new policy and returns the data of the policy created including the policy_id that needs to be used later for policy updates. The external_id field should be unique
     *
     * @tags Policy
     * @name AddPolicyV2
     * @summary Add a new policy
     * @request POST:/v2/policies
     * @secure
     */
    addPolicyV2: (
      data: {
        id?: string;
        external_id?: string;
        policy_number?: string;
        account_id?: string;
        status?:
          | "Active"
          | "Cancelled"
          | "Cancellation in Progress"
          | "Expired"
          | "Flat Cancelled"
          | "Pending"
          | "Reinstated"
          | "Under Review";
        effective_date?: string;
        expiration_date?: string;
        cancellation_date?: string;
        premium?: { amount: number; currency: string };
        taxes?: { amount: number; currency: string };
        fees?: { amount: number; currency: string };
        insurance_details?:
          | {
              packages: {
                package_id: string;
                coverages?: { coverage_id: string; current: number | string | boolean }[];
                lobs?: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
              }[];
              lobs?: any[];
            }
          | {
              packages?: any[];
              lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
            };
        purchase_type?: "renewal_upload" | "renewal" | "new_business" | "cross_sell" | null;
        renewal_flow?: "auto" | "nonauto" | null;
        billing_carrier_id?: string;
        issuing_carrier_id?: string;
        finance_contract_number?: string;
        intermediary_id?: string;
        billing_type?: "Direct" | "Agency" | "Unknown";
        invoiced_by?:
          | "Carrier"
          | "Coverwallet"
          | "Premium Finance Company"
          | "External PAS"
          | "Account Current"
          | "Unknown";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: { id: string } & {
            id?: string;
            external_id?: string;
            policy_number?: string;
            account_id?: string;
            status?:
              | "Active"
              | "Cancelled"
              | "Cancellation in Progress"
              | "Expired"
              | "Flat Cancelled"
              | "Pending"
              | "Reinstated"
              | "Under Review";
            effective_date?: string;
            expiration_date?: string;
            cancellation_date?: string;
            premium?: { amount: number; currency: string };
            taxes?: { amount: number; currency: string };
            fees?: { amount: number; currency: string };
            insurance_details?:
              | {
                  packages: {
                    package_id: string;
                    coverages?: { coverage_id: string; current: number | string | boolean }[];
                    lobs?: {
                      lob_id: string;
                      coverages?: { coverage_id: string; current: number | string | boolean }[];
                    }[];
                  }[];
                  lobs?: any[];
                }
              | {
                  packages?: any[];
                  lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
                };
            purchase_type?: "renewal_upload" | "renewal" | "new_business" | "cross_sell" | null;
            renewal_flow?: "auto" | "nonauto" | null;
            billing_carrier_id?: string;
            issuing_carrier_id?: string;
            finance_contract_number?: string;
            intermediary_id?: string;
            billing_type?: "Direct" | "Agency" | "Unknown";
            invoiced_by?:
              | "Carrier"
              | "Coverwallet"
              | "Premium Finance Company"
              | "External PAS"
              | "Account Current"
              | "Unknown";
          };
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v2/policies`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch policies filtering by any of the supported parameters listed below. If no parameters are provided, no policies will be returned and a error will be triggered.
     *
     * @tags Policy
     * @name FetchPoliciesByFilter
     * @summary Fetch policies filtered by query params
     * @request GET:/v2/policies
     * @secure
     */
    fetchPoliciesByFilter: (
      query?: { external_id?: string; policy_number?: string; effective_date?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: ({ id: string } & {
            id?: string;
            external_id?: string;
            policy_number?: string;
            account_id?: string;
            status?:
              | "Active"
              | "Cancelled"
              | "Cancellation in Progress"
              | "Expired"
              | "Flat Cancelled"
              | "Pending"
              | "Reinstated"
              | "Under Review";
            effective_date?: string;
            expiration_date?: string;
            cancellation_date?: string;
            premium?: { amount: number; currency: string };
            taxes?: { amount: number; currency: string };
            fees?: { amount: number; currency: string };
            insurance_details?:
              | {
                  packages: {
                    package_id: string;
                    coverages?: { coverage_id: string; current: number | string | boolean }[];
                    lobs?: {
                      lob_id: string;
                      coverages?: { coverage_id: string; current: number | string | boolean }[];
                    }[];
                  }[];
                  lobs?: any[];
                }
              | {
                  packages?: any[];
                  lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
                };
            purchase_type?: "renewal_upload" | "renewal" | "new_business" | "cross_sell" | null;
            renewal_flow?: "auto" | "nonauto" | null;
            billing_carrier_id?: string;
            issuing_carrier_id?: string;
            finance_contract_number?: string;
            intermediary_id?: string;
            billing_type?: "Direct" | "Agency" | "Unknown";
            invoiced_by?:
              | "Carrier"
              | "Coverwallet"
              | "Premium Finance Company"
              | "External PAS"
              | "Account Current"
              | "Unknown";
          })[];
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v2/policies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Apply midterm changes to an existing policy
     *
     * @tags Servicing
     * @name ApplyMidtermChangesV2
     * @summary Apply midterm changes to an existing policy
     * @request POST:/v2/servicing/policies/{id}/midterm_changes
     * @secure
     */
    applyMidtermChangesV2: (
      id: string,
      data: {
        description: string;
        effective_date: string;
        premium_change: { amount: number; currency: string };
        taxes_change: { amount: number; currency: string };
        fees_change: {
          carrier: { amount: number; currency: string };
          agency: { amount: number; currency: string };
          external_agency: { amount: number; currency: string };
        };
        status:
          | "NOT_STARTED"
          | "PENDING_PAYMENT"
          | "UNDER_REVIEW,"
          | "APPROVED"
          | "PAYMENT_NOT_COLLECTED"
          | "NOT_NEEDED"
          | "VOIDED"
          | null;
        pending_action: boolean;
        invoice_external_id?: string;
      } & {
        insurance_details?:
          | {
              packages: {
                package_id: string;
                coverages?: { coverage_id: string; current: number | string | boolean }[];
                lobs?: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
              }[];
              lobs?: any[];
            }
          | {
              packages?: any[];
              lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
            };
        request_payment?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          description: string;
          effective_date: string;
          premium_change: { amount: number; currency: string };
          taxes_change: { amount: number; currency: string };
          fees_change: {
            carrier: { amount: number; currency: string };
            agency: { amount: number; currency: string };
            external_agency: { amount: number; currency: string };
          };
          status:
            | "NOT_STARTED"
            | "PENDING_PAYMENT"
            | "UNDER_REVIEW,"
            | "APPROVED"
            | "PAYMENT_NOT_COLLECTED"
            | "NOT_NEEDED"
            | "VOIDED"
            | null;
          pending_action: boolean;
          invoice_external_id?: string;
        } & {
          insurance_details?:
            | {
                packages: {
                  package_id: string;
                  coverages?: { coverage_id: string; current: number | string | boolean }[];
                  lobs?: {
                    lob_id: string;
                    coverages?: { coverage_id: string; current: number | string | boolean }[];
                  }[];
                }[];
                lobs?: any[];
              }
            | {
                packages?: any[];
                lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
              };
          request_payment?: boolean;
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v2/servicing/policies/${id}/midterm_changes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Apply audit to an existing policy
     *
     * @tags Servicing
     * @name ApplyAuditV2
     * @summary Apply audit to an existing policy
     * @request POST:/v2/servicing/policies/{id}/audit
     * @secure
     */
    applyAuditV2: (
      id: string,
      data: {
        description: string;
        effective_date: string;
        premium_change: { amount: number; currency: string };
        taxes_change: { amount: number; currency: string };
        fees_change: {
          carrier: { amount: number; currency: string };
          agency: { amount: number; currency: string };
          external_agency: { amount: number; currency: string };
        };
        status:
          | "NOT_STARTED"
          | "PENDING_PAYMENT"
          | "UNDER_REVIEW,"
          | "APPROVED"
          | "PAYMENT_NOT_COLLECTED"
          | "NOT_NEEDED"
          | "VOIDED"
          | null;
        pending_action: boolean;
        invoice_external_id?: string;
      } & {
        insurance_details?:
          | {
              packages: {
                package_id: string;
                coverages?: { coverage_id: string; current: number | string | boolean }[];
                lobs?: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
              }[];
              lobs?: any[];
            }
          | {
              packages?: any[];
              lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
            };
        request_payment?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          description: string;
          effective_date: string;
          premium_change: { amount: number; currency: string };
          taxes_change: { amount: number; currency: string };
          fees_change: {
            carrier: { amount: number; currency: string };
            agency: { amount: number; currency: string };
            external_agency: { amount: number; currency: string };
          };
          status:
            | "NOT_STARTED"
            | "PENDING_PAYMENT"
            | "UNDER_REVIEW,"
            | "APPROVED"
            | "PAYMENT_NOT_COLLECTED"
            | "NOT_NEEDED"
            | "VOIDED"
            | null;
          pending_action: boolean;
          invoice_external_id?: string;
        } & {
          insurance_details?:
            | {
                packages: {
                  package_id: string;
                  coverages?: { coverage_id: string; current: number | string | boolean }[];
                  lobs?: {
                    lob_id: string;
                    coverages?: { coverage_id: string; current: number | string | boolean }[];
                  }[];
                }[];
                lobs?: any[];
              }
            | {
                packages?: any[];
                lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
              };
          request_payment?: boolean;
        },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v2/servicing/policies/${id}/audit`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sync policies from third parties
     *
     * @tags Entities Sync
     * @name PoliciesSyncV2
     * @summary Sync policies from third parties
     * @request POST:/v2/policies/sync
     * @secure
     */
    policiesSyncV2: (
      query: { identifier: string },
      data: {
        data: {
          external_id: string;
          policy_number?: string;
          account_id?: string;
          status: string;
          effective_date: string;
          expiration_date?: string;
          cancellation_date?: string;
          premium?: { amount: number; currency: string };
          taxes?: { amount: number; currency: string };
          fees?: { amount: number; currency: string };
          purchase_type?: string;
          renewal_flow?: string;
          billing_carrier_id?: string;
          issuing_carrier_id?: string;
          intermediary_id?: string;
          billing_type?: string;
          invoiced_by?: string;
          insurance_details?:
            | {
                packages: {
                  package_id: string;
                  coverages?: { coverage_id: string; current: number | string | boolean }[];
                  lobs?: {
                    lob_id: string;
                    coverages?: { coverage_id: string; current: number | string | boolean }[];
                  }[];
                }[];
                lobs?: any[];
              }
            | {
                packages?: any[];
                lobs: { lob_id: string; coverages?: { coverage_id: string; current: number | string | boolean }[] }[];
              };
        };
        callback: { url: string; headers?: { Authorization?: string } };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { processId?: string; message?: string },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v2/policies/sync`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a new application
     *
     * @tags Application
     * @name AddApplicationRequestV2
     * @summary Create a new application
     * @request POST:/v2/applications
     * @secure
     */
    addApplicationRequestV2: (
      data: {
        account: {
          external_id?: string;
          business_information: {
            name: string;
            type?: string;
            website?: string;
            identification_number?: string;
            year_established?: number;
            years_of_experience?: number;
            annual_revenue?: { amount: number; currency: string };
            fulltime_employees?: number;
            parttime_employees?: number;
            employees_annual_payroll?: number;
          };
          industry?: { type?: "naics"; code?: string };
          addresses?: {
            type?: "mailing" | "billing";
            address_line?: string;
            city?: string;
            state?: string;
            country_code?: string;
            postal_code?: string;
          }[];
          email: string;
          phone_number?: string;
        };
        contacts: {
          relationship?: "primary" | "driver" | "owner" | "other";
          first_name: string;
          last_name: string;
          email?: string;
          communications_opt_out?: "email" | "sms" | "all" | "none";
          contact_numbers?: { type: "phone" | "extension" | "mobile" | "fax" | "other"; number: string }[];
        }[];
        partnership: { id: string; lead_external_id?: string; source?: string };
        insurance_details?: {
          packages?: {
            package_id: string;
            coverages?: {
              coverage_id: string;
              current?: number | string | boolean;
              maximum?: number;
              minimum?: number;
            }[];
            lobs?: {
              lob_id: string;
              coverages?: {
                coverage_id: string;
                current?: number | string | boolean;
                maximum?: number;
                minimum?: number;
              }[];
            }[];
          }[];
          lobs?: {
            lob_id: string;
            coverages?: {
              coverage_id: string;
              current?: number | string | boolean;
              maximum?: number;
              minimum?: number;
            }[];
          }[];
        };
        custom_fields?: { key: string; value: string }[];
        other_information?: { key: string; value: string }[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { application_link?: string; account_id?: string },
        { errors?: { source?: string; type: string; message: string }[] }
      >({
        path: `/v2/applications`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
