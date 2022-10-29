import { Route } from 'react-router-dom'

export function route(path: string, Component: () => JSX.Element) {
  return <Route path={path} element={<Component />} key={path} />
}
