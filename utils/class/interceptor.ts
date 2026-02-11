import { AxiosInstance } from "axios";

export type AuthType = "none" | "bearer" | "cookie" | "api-key";

export class InterceptorsManager {

  private instance: AxiosInstance;
  private authType: AuthType = "none";

  private getToken: (() => string | null) | null = null;
  private getApiKey: (() => string | null) | null = null;
  private onUnauthorized: (() => void) | null = null;

  constructor(instance: any) {
    this.instance = instance;
  }

  setAuthType(type: AuthType) {
    this.authType = type;
  }

  setTokenGetter(fn: () => string | null) {
    this.getToken = fn;
  }

  setApiKeyGetter(fn: () => string | null) {
    this.getApiKey = fn;
  }

  setOnUnauthorized(fn: () => void) {
    this.onUnauthorized = fn;
  }

  setup() {

    // Request interceptor
    this.instance.interceptors.request.use((config: any) => {

      // Bearer token
      if (this.authType === "bearer" && this.getToken) {
        const token = this.getToken();
        if (token) {
          if (!config.headers) config.headers = {};
          config.headers["Authorization"] = `Bearer ${token}`;
        }
      }

      // API Key
      if (this.authType === "api-key" && this.getApiKey) {
        const key = this.getApiKey();
        if (key) {
          if (!config.headers) config.headers = {};
          config.headers["X-API-Key"] = key;
        }
      }

      // cookie / none → rien à faire
      return config;
      
    });

    // Response interceptor
    this.instance.interceptors.response.use(
      (res: any) => res,
      (err: any) => {

        if (err.response?.status === 401 && this.onUnauthorized) {
          this.onUnauthorized();
        }
        
        return Promise.reject(err);
      }
    );
  }
}
