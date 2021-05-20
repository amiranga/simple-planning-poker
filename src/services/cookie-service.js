import Cookies from 'universal-cookie';

export function getUserNameFromCookie() {
  return new Cookies().get('spp_user');
}

export function updateCookie(user) {
  const cookies = new Cookies();
  cookies.set('spp_user', JSON.stringify(user), { path: '/' });
}
