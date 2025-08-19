export interface RegisterBody {
  fullName: string;
  email: string;
  username: string;
  password: string;
}

export interface LoginBody {
  username: string;
  password: string;
}
