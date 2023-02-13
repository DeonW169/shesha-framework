/* Generated by restful-react */

import React from 'react';
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react';
export const SPEC_VERSION = 'v1';
export interface ColumnSortingDto {
  id?: string | null;
  desc?: boolean;
}

export interface ColumnFilterDto {
  columnId?: string | null;
  propertyName?: string | null;
  filterOption?: string | null;
  filter?: {} | null;
  realPropertyName?: string | null;
}

export interface SelectedStoredFilterDto {
  id?: string | null;
  name?: string | null;
  expressionType?: string | null;
  expression?: {} | null;
}

export interface DataTableGetDataInput {
  id?: string | null;
  uid?: string | null;
  entityType?: string | null;
  pageSize?: number;
  quickSearch?: string | null;
  currentPage?: number;
  parentEntityId?: string | null;
  sorting?: ColumnSortingDto[] | null;
  filter?: ColumnFilterDto[] | null;
  selectedStoredFilterIds?: string[] | null;
  selectedFilters?: SelectedStoredFilterDto[] | null;
  properties?: string[] | null;
}

export interface DataTableData {
  totalRows?: number;
  totalRowsBeforeFilter?: number;
  totalPages?: number;
  echo?: number;
  rows?: { [key: string]: any }[] | null;
}

export interface ValidationErrorInfo {
  message?: string | null;
  members?: string[] | null;
}

export interface ErrorInfo {
  code?: number;
  message?: string | null;
  details?: string | null;
  validationErrors?: ValidationErrorInfo[] | null;
}

export interface DataTableDataAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: DataTableData;
}

export interface AjaxResponseBase {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
}

export interface StringListAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: string[] | null;
}

export interface BackupDataDto {
  id?: number;
  backupPath?: string | null;
  errorMessage?: string | null;
}

export interface BackupDataDtoAjaxResponse {
  targetUrl?: string | null;
  success?: boolean;
  error?: ErrorInfo;
  unAuthorizedRequest?: boolean;
  __abp?: boolean;
  result?: BackupDataDto;
}

export interface MaintenanceGetDataQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type MaintenanceGetDataProps = Omit<
  MutateProps<DataTableDataAjaxResponse, AjaxResponseBase, MaintenanceGetDataQueryParams, DataTableGetDataInput, void>,
  'path' | 'verb'
>;

export const MaintenanceGetData = (props: MaintenanceGetDataProps) => (
  <Mutate<DataTableDataAjaxResponse, AjaxResponseBase, MaintenanceGetDataQueryParams, DataTableGetDataInput, void>
    verb="POST"
    path={`/api/services/app/Maintenance/GetData`}
    {...props}
  />
);

export type UseMaintenanceGetDataProps = Omit<
  UseMutateProps<
    DataTableDataAjaxResponse,
    AjaxResponseBase,
    MaintenanceGetDataQueryParams,
    DataTableGetDataInput,
    void
  >,
  'path' | 'verb'
>;

export const useMaintenanceGetData = (props: UseMaintenanceGetDataProps) =>
  useMutate<DataTableDataAjaxResponse, AjaxResponseBase, MaintenanceGetDataQueryParams, DataTableGetDataInput, void>(
    'POST',
    `/api/services/app/Maintenance/GetData`,
    props
  );

export interface MaintenanceGetBackupsListQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type MaintenanceGetBackupsListProps = Omit<
  GetProps<StringListAjaxResponse, AjaxResponseBase, MaintenanceGetBackupsListQueryParams, void>,
  'path'
>;

export const MaintenanceGetBackupsList = (props: MaintenanceGetBackupsListProps) => (
  <Get<StringListAjaxResponse, AjaxResponseBase, MaintenanceGetBackupsListQueryParams, void>
    path={`/api/services/app/Maintenance/GetBackupsList`}
    {...props}
  />
);

export type UseMaintenanceGetBackupsListProps = Omit<
  UseGetProps<StringListAjaxResponse, AjaxResponseBase, MaintenanceGetBackupsListQueryParams, void>,
  'path'
>;

export const useMaintenanceGetBackupsList = (props: UseMaintenanceGetBackupsListProps) =>
  useGet<StringListAjaxResponse, AjaxResponseBase, MaintenanceGetBackupsListQueryParams, void>(
    `/api/services/app/Maintenance/GetBackupsList`,
    props
  );

export interface MaintenanceDeleteBackupQueryParams {
  fileName?: string | null;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type MaintenanceDeleteBackupProps = Omit<
  GetProps<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceDeleteBackupQueryParams, void>,
  'path'
>;

export const MaintenanceDeleteBackup = (props: MaintenanceDeleteBackupProps) => (
  <Get<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceDeleteBackupQueryParams, void>
    path={`/api/services/app/Maintenance/DeleteBackup`}
    {...props}
  />
);

export type UseMaintenanceDeleteBackupProps = Omit<
  UseGetProps<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceDeleteBackupQueryParams, void>,
  'path'
>;

export const useMaintenanceDeleteBackup = (props: UseMaintenanceDeleteBackupProps) =>
  useGet<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceDeleteBackupQueryParams, void>(
    `/api/services/app/Maintenance/DeleteBackup`,
    props
  );

export interface MaintenanceGetBackupDataQueryParams {
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type MaintenanceGetBackupDataProps = Omit<
  GetProps<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceGetBackupDataQueryParams, void>,
  'path'
>;

export const MaintenanceGetBackupData = (props: MaintenanceGetBackupDataProps) => (
  <Get<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceGetBackupDataQueryParams, void>
    path={`/api/services/app/Maintenance/GetBackupData`}
    {...props}
  />
);

export type UseMaintenanceGetBackupDataProps = Omit<
  UseGetProps<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceGetBackupDataQueryParams, void>,
  'path'
>;

export const useMaintenanceGetBackupData = (props: UseMaintenanceGetBackupDataProps) =>
  useGet<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceGetBackupDataQueryParams, void>(
    `/api/services/app/Maintenance/GetBackupData`,
    props
  );

export interface MaintenanceBackupDBQueryParams {
  fileName?: string | null;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type MaintenanceBackupDBProps = Omit<
  GetProps<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceBackupDBQueryParams, void>,
  'path'
>;

export const MaintenanceBackupDB = (props: MaintenanceBackupDBProps) => (
  <Get<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceBackupDBQueryParams, void>
    path={`/api/services/app/Maintenance/BackupDB`}
    {...props}
  />
);

export type UseMaintenanceBackupDBProps = Omit<
  UseGetProps<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceBackupDBQueryParams, void>,
  'path'
>;

export const useMaintenanceBackupDB = (props: UseMaintenanceBackupDBProps) =>
  useGet<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceBackupDBQueryParams, void>(
    `/api/services/app/Maintenance/BackupDB`,
    props
  );

export interface MaintenanceRestoreDbQueryParams {
  fileName?: string | null;
  /**
   * The requested API version
   */
  'api-version'?: string;
}

export type MaintenanceRestoreDbProps = Omit<
  GetProps<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceRestoreDbQueryParams, void>,
  'path'
>;

export const MaintenanceRestoreDb = (props: MaintenanceRestoreDbProps) => (
  <Get<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceRestoreDbQueryParams, void>
    path={`/api/services/app/Maintenance/RestoreDb`}
    {...props}
  />
);

export type UseMaintenanceRestoreDbProps = Omit<
  UseGetProps<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceRestoreDbQueryParams, void>,
  'path'
>;

export const useMaintenanceRestoreDb = (props: UseMaintenanceRestoreDbProps) =>
  useGet<BackupDataDtoAjaxResponse, AjaxResponseBase, MaintenanceRestoreDbQueryParams, void>(
    `/api/services/app/Maintenance/RestoreDb`,
    props
  );
