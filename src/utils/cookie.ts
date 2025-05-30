interface CookieOptions {
  path?: string;
  domain?: string;
  expires?: Date | number;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
  [key: string]: string | number | Date | boolean | undefined;
}

const DEFAULT_COOKIE_PATH = '/';

export function getCookie(name: string): string | undefined {
  const escapedName = name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1');
  const regex = new RegExp(`(?:^|;)${escapedName}=([^;]*)`);
  const matches = document.cookie.match(regex);
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(
  name: string,
  value: string,
  props: CookieOptions = {}
): void {
  const options: CookieOptions = { path: DEFAULT_COOKIE_PATH, ...props };
  
  if (typeof options.expires === 'number') {
    const expiresDate = new Date();
    expiresDate.setTime(expiresDate.getTime() + options.expires * 1000);
    options.expires = expiresDate;
  }

  let cookieString = `${name}=${encodeURIComponent(value)}`;

  Object.entries(options).forEach(([key, value]) => {
    if (value === undefined) return;
    cookieString += `; ${key}`;
    if (value !== true) {
      cookieString += `=${value}`;
    }
  });

  document.cookie = cookieString;
}

export function deleteCookie(name: string): void {
  setCookie(name, '', { expires: -1 });
}