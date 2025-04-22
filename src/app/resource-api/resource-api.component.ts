import { Component, resource, signal } from '@angular/core';

type User = {
  id: number,
  firstName: string,
  lastName: string
}

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {
  userService = 'https://dummyjson.com/users'

  query = signal('');
  users = resource<User[], {query: string}>({
    request: () => ({ query: this.query()}),
    loader: async ({request, abortSignal}) => {
      const url = request.query ? `${this.userService}/search?q=${request.query}` : this.userService;
      const res = await fetch(url, { signal: abortSignal });
      if(!res.ok) throw Error('Could not fetch...');
      const data = await res.json();
      return data.users;
    }
  });

  adduser() {
    const user = { id: 101, firstName: 'Pravin', lastName: 'Bhosale'};
    this.users.update((users) => users ? [user, ...users] : [user]);
  }
}
