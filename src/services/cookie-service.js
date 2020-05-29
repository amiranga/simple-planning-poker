import Cookies from 'universal-cookie';

export function getuserNameFromCookie() {
  return (new Cookies()).get('spp_user');
}

export function updateCookie(user) {
  const cookies = new Cookies();
  cookies.set('spp_user', JSON.stringify(user), { path: '/' });
}