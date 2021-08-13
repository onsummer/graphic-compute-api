/**
 * 判断三角形逆时针或顺时针
 * @param {number[][]} points 
 * @returns {{
 *   result?: boolean,
 *   msg: string
 * }}
 */
export const isClockWise = (points) => {
  if (points.length !== 3) {
    return {
      msg: 'Not a triangle.'
    }
  }
  points.forEach(pt => {
    if (pt.length !== 2) {
      return {
        msg: 'Not 2d point.'
      }
    }
  })
  
  // todo
  return {
    result: true,
    msg: 'success.'
  }
}