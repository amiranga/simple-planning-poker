import Cookies from 'universal-cookie';

export function getuserNameFromCookie() {
  const cookies = new Cookies();
  return cookies.get('spp_user');
}

export function updateCookie(user) {
  const cookies = new Cookies();
  cookies.set('spp_user', JSON.stringify(user), { path: '/' });
}