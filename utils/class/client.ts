import axios, { AxiosInstance, AxiosResponse } from "axios";
import { InterceptorsManager } from "@/utils/class/interceptor";
import { ApiClientOptions } from "@/types/ApiClientOptions";


export class ApiClient {
  private instance: AxiosInstance;
  private interceptor: InterceptorsManager;

  constructor(options: ApiClientOptions = {}) {
    this.instance = axios.create({
      baseURL: options.baseURL,
    });

    this.interceptor = new InterceptorsManager(this.instance);
    this.interceptor.setup();
  }

  //  Bearer / JWT
  useBearerAuth(getToken: () => string | null) {
    this.instance.defaults.withCredentials = false;
    this.interceptor.setAuthType("bearer");
    this.interceptor.setTokenGetter(getToken);
  }

  //  Cookie (Sanctum)
  useCookieAuth() {
    this.instance.defaults.withCredentials = true;
    this.interceptor.setAuthType("cookie");
  }

  //  API Key
  useApiKeyAuth(getApiKey: () => string | null) {
    this.interceptor.setAuthType("api-key");
    this.interceptor.setApiKeyGetter(getApiKey);
  }

  //  Gestion globale des 401
  onUnauthorized(fn: () => void) {
    this.interceptor.setOnUnauthorized(fn);
  }

  //  Méthodes HTTP (simples)
  private async request<T>(promise: Promise<AxiosResponse<T>>): Promise<T> {
    const res = await promise;
    return res.data;
  }

  get<T>(url: string, params?: object): Promise<T> {
    return this.request<T>(this.instance.get(url, { params }));
  }

  post<T>(url: string, data?: unknown): Promise<T> {
    return this.request<T>(this.instance.post(url, data));
  }

  put<T>(url: string, data?: unknown): Promise<T> {
    return this.request<T>(this.instance.put(url, data));
  }

  delete<T>(url: string): Promise<T> {
    return this.request<T>(this.instance.delete(url));
  }
}

