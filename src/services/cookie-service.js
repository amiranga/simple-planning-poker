import Cookies from 'universal-cookie';

export function getuserNameFromCookie() {
  const cookies = new Cookies();
  return cookies.get('spp_user');
}

export function updateCookie(userName) {
  const cookies = new Cookies();
  cookies.set('spp_user', userName, { path: '/' });
}