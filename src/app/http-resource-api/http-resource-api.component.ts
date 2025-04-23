import { httpResource } from '@angular/common/http';
import { Component, effect, signal } from '@angular/core';

type User = {
  id: number,
  firstName: string,
  lastName: string
}

type UsersApiResponse = {
  users: User[];
}

@Component({
  selector: 'app-http-resource-api',
  imports: [],
  templateUrl: './http-resource-api.component.html',
  styleUrl: './http-resource-api.component.css'
})
export class HttpResourceApiComponent {
  userService = 'https://dummyjson.com/users'
  query = signal('');
  users = httpResource(
    () => {
      const url = this.query() ? `${this.userService}/search?q=${this.query()}` : this.userService;
      return {
        url,
        headers: {
          Authorization: 'dasdkjn1616dad16s8dsa'
        }
      }
    },
    {
      defaultValue: [] as User[],
      parse: (data): User[] => {
        const d = data as UsersApiResponse;
        return d.users;
      }
    }
  );
  constructor() {
    effect(() => {
      console.log(this.users.value());
    });
  }

  adduser() {
    const user = { id: 101, firstName: 'Pravin', lastName: 'Bhosale' };
    this.users.update((users) => users ? [user, ...users] : [user]);
  }
}
