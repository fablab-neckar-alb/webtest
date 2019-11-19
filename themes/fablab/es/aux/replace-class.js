/**
 * @file
 * @author Joris Karl Dzaack <hola@arebours.de>
 * @flow
 */

const replaceClass = (obj: HTMLElement, className: string, replacementClassName: string): Promise => new Promise((resolve, reject): void => {
  if (obj instanceof window.HTMLElement) { // Check if object is HTMLElement
    const regExp: RegExp = new RegExp(`\\b${className}\\b`)
    const newClassName: string = obj.className.replace(regExp, replacementClassName)
    obj.className = newClassName
    resolve(newClassName)
  } else {
    reject(new Error('Object not a HTMLELement'))
  }

  return void 0
})

export default replaceClass
