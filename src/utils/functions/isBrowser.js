const isBrowser = () => {
  return typeof window !== `undefined` && typeof window.document !== `undefined`
}

export default isBrowser