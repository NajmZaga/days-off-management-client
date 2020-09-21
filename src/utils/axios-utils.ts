import { AxiosError } from 'axios';

import { IErrors } from './types';

interface IViolation {
  propertyPath: string;
  message: string;
}

// TODO: Extend to support Validation Errors
// TODO: Migrate to Axios Interceptor

// tslint:disable-next-line: no-any
export const parseAxiosError = (error: AxiosError): IErrors => {
  // if not response
  if (!error.response) return { general: [error.message] };

  const data = error.response.data;
  if (data.violations) return violationsErrorTransformer(data.violations);
  if (data.detail) return { general: [data.detail.split(':')[-1]]};
  if (Array.isArray(data)) return { general: data };
  return { general: [error.response.data.message] };
};

const violationsErrorTransformer = (violations: IViolation[]): IErrors => {
  const errors: IErrors = {};
  violations.forEach(({ propertyPath, message }) => {
    errors[propertyPath] ? errors[propertyPath].push(message) : errors[propertyPath] = [message];
  });
  return errors;
};