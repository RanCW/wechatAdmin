/**
 * Created by ranchengwei@sina.com on 2017/12/1 0001.
 * 这是一个工具类函数库
 */
/**判断是个变量是否为空
 *@param {any} 需要检测的变量
 * @return {Boolean}
 * */
exports.isNull=function (param) {
  let result = false;
  switch (typeof param) {
    case 'string':
      param = param.replace(/\s+/g, "");
      if (param === '' || param === 'undefined' || param === 'null') {
        result = true;
      }
      break;
    case 'object':
      if (param === null || param.length === 0) {
        result = true;
      }
      break;
    case 'undefined':
      result = true;
      break;
    case 'number':
      param = param.toString();
      if (param === 'NaN') {
        result = true;
      }
      break;
  }
  return result;
}


