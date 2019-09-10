

export class User {
  id: number;
  fullName: string;
  age: number;
  gender: string;
  avatar: string;
  phone: string;
  city: string;
  street: string;
  email: string;

  constructor(
              id?: number,
              fullName?: string,
              age?: number,
              gender?: string,
              avatar?: string,
              phone?: string,
              city?: string,
              street?: string,
              email?: string,
  ) {
    this.id = id ? id : null;
    this.fullName = fullName ? fullName : '';
    this.age = age ? age : 0;
    this.gender = gender ? gender : '';
    this.avatar = avatar ? avatar : '';
    this.phone = phone ? phone : '';
    this.city = city ? city : '';
    this.street = street ? street : '';
    this.email = email ? email : '';
  }

}

