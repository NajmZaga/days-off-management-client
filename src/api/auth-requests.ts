import { api } from "./axios-instance";
import { ICredentials } from "../utils/types";

/**
 * Login Request
 */
export const loginRequest = (credentials: ICredentials) => api.post('/auth/login', credentials);