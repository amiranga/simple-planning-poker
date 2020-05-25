import Cookies from 'universal-cookie';

export function getuserNameFromCookie() {
  const cookies = new Cookies();
  const user = cookies.get('spp_user');
  return user;
}

export function updateCookie(user) {
  const cookies = new Cookies();
  cookies.set('spp_user', JSON.stringify(user), { path: '/' });
}