import { AstroCookies } from 'astro'

export const getTheme = (url: URL, cookies: AstroCookies) => {
  let theme = cookies.get('theme').value as 'light' | 'dark'
  const themeSearchParam = url.searchParams.get('theme')
  if (themeSearchParam === 'dark' || themeSearchParam === 'light') {
    cookies.set('theme', themeSearchParam)
    theme = themeSearchParam
  }
  return theme
}
