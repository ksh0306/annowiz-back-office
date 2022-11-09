/**
 * @summary 유틸성 함수 정의 파일.
 */

/**
 * @summary 특정길이의 랜덤한 ID를 생성
 * @param {Number} customMax // ID 최대길이
 * @param {Number} customMin // ID 최소길이
 * @returns {String} 랜덤한ID
 */

export const randomId = (customMax, customMin) => {
    const max = customMax || 9
    const min = customMin || 2
    return '_' + Math.random().toString(36).substr(min, max)
}

/**
 * @summary 깊은 복사
 * @param {Object, Array} target // 복사할 대상
 * @return {Object, Array} // 복사된 Object 혹은 Array
 **/
export const deepCopy = (target) => {
    if (target === null || typeof (target) !== 'object') { return target }

    try {
        const copy = target.constructor()

        for (const attr in target) {
            if (Object.prototype.hasOwnProperty.call(target, attr)) {
                copy[attr] = deepCopy(target[attr])
            }
        }
        return copy
    } catch (error) {
        return JSON.parse(JSON.stringify(target))
    }
}

/**
 * @summary 대상 객체에 특정 key가 존재하는지 체크
 * @param {Object} target // 검색 대상 객체
 * @param {String} key // 검색키워드
 * @return {Boolean}
 */
export const hasKey = (target, key) => {
    if (undefined === key) {
        return (typeof target === 'object')
    }

    if (typeof key === 'string') {
        if (typeof target === 'object') {
            return Object.hasOwnProperty.call(target, key)
        } else {
            // eslint-disable-next-line
            console.log('argument 1 should be an Object')
        }
    } else {
        // eslint-disable-next-line
        console.log('argument 2 should be a String')
    }

    return false
}

/**
 * @summary url 쿼리 배열화 함수
 * @param {String} url
 * @returns {Array} query값 배열
 */
export const getQueryString = (url) => {
    if (url === '') { return {} }
    if (url.includes('?')) {
        url = url.split('?')[1]
    }

    // URL 디코딩
    do {
        url = decodeURIComponent(url)
    } while (url.includes('%'))

    // 쿼리스트링 추출
    const qs = {}
    url.split('&').forEach((item) => {
        const arr = item.split('=')
        qs[arr[0]] = arr[1]
    })

    return qs
}

/**
 * @summary 객체형태의 데이터를 FormData 형태로 변환 하는 함수
 * @param {Object} object // 변환 대상 Object
 * @return {FormData} // 변환된 폼데이터
 */
export const formize = (object) => {
    if (typeof object !== 'object') {
        return null
    }

    const forms = new FormData()
    for (const key in object) {
        forms.append(key, object[key])
    }
    return forms
}

/**
 * @summary 숫자 Comma 표시
 * @param {Number} inputNumber // 변환 대상 값
 * @param {Number} pointCount // 소수점 자리수 제한
 * @return {String}
 */
export const numberFormat = (inputNumber, pointCount) => {
    if (inputNumber) {
        const parts = inputNumber.toString().split('.')
        const output = Number(parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : ''))
        if (pointCount) {
            return Math.round(output * (10 ** pointCount)) / 10 ** pointCount
        } else {
            return output
        }
    } else {
        return inputNumber
    }
}

/**
 * @summary 파일크기를 단위표출화
 * @param  {Number}  bytes : filesize (unit: byte)
 * @param  {Boolean} divide: return type (true: Array(value, unit), false: String(value+unit))
 * @param  {Boolean} si    : type
 * @return {String}
 */
export const humanFileSize = (bytes, divide, si) => {
    if (!bytes) {
        return (divide) ? [bytes, ''] : bytes
    }

    const thresh = si ? 1000 : 1024
    if (Math.abs(bytes) < thresh) {
        return bytes + ' B'
    }
    const units = si
        ? ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        // ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'] :
        : ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let u = -1
    do {
        bytes /= thresh
        ++u
    } while (Math.abs(bytes) >= thresh && u < units.length - 1)
    if (divide) {
        return [Number(bytes.toFixed(1)), units[u]]
    } else {
        return bytes.toFixed(1) + ' ' + units[u]
    }
}

/**
 * @summary 메모리크기를 단위표출화
 * @param  {Number}  bytes : size (unit: MB)
 * @param  {Boolean} divide: return type (true: Array(value, unit), false: String(value+unit))
 * @return {String}
 */
export const humanMemorySize = (bytes, divide, thresh) => {
    bytes = parseInt(bytes)

    if (isNaN(bytes) || bytes === 0) {
        return (divide) ? [0, 'GB'] : 0
    }

    thresh = thresh || 1024
    const output = numberFormat(Number(bytes / thresh), 2)
    if (divide) {
        return [output, 'GB']
    } else {
        return output + ' GB'
    }
}

/**
 * @summary HTML엔티티 변환 함수
 * @param {String} str // 변환 할 문자열
 * @return {String} // 변환 된 문자열
 */
export const decodeEntities = (() => {
    // this prevents any overhead from creating the object each time
    const element = document.createElement('div')

    const decodeHTMLEntities = (str) => {
        if (str && typeof str === 'string') {
        // strip script/html tags
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '')
            element.innerHTML = str
            str = element.textContent
            element.textContent = ''
        }

        return str
    }

    return decodeHTMLEntities
})()

export default function ({ redirect }, inject) {
    const utils = {
        randomId,
        deepCopy,
        hasKey,
        getQueryString,
        formize,
        numberFormat,
        humanFileSize,
        humanMemorySize,
        decodeEntities
    }
    inject('util', utils)
}
