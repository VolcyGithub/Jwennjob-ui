import { apiClient } from "../client/client";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: string;
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export const userApi = {

  getUsers: (params?: Record<string, any>) =>
    apiClient.get<UsersResponse>("/users", params),

  getFilterUsers : (params ?: Record<string, any>) => 
    apiClient.get<UsersResponse>("/users/filter" , params),
 
  getUser: (id: number, params?: Record<string, any>) =>
    apiClient.get<User>(`/users/${id}`, params),

  createUser: (data: Omit<User, "id">) =>
    apiClient.post<User>("/users", data),

  updateUser: (id: number, data: Partial<User>) =>
    apiClient.put<User>(`/users/${id}`, data),

  deleteUser: (id: number) =>
    apiClient.delete<void>(`/users/${id}`),
};

