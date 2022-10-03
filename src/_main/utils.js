/**
 * Return json parsed response
 * @param response
 * @returns {*} json
 */
export function parseJSON(response) {
    return response.json() || response;
}
export function parser(response) {
    return JSON.parse(response);
}
export function stringifier(response) {
    return JSON.stringify(response);
}
export function isEmpty(obj) {
    return (Object.keys(obj).length) ? 0 : 1;
}
export function isEmptyObj(obj,prop) {
    return (obj.hasOwnProperty(prop));
}
export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/**
 * Check the response status and return
 * response or throw error
 * @param response
 * @returns {*} response or throw error
 */
export function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    // if api sends back failure status code,
    // throws response and treated as error in the catch block
    throw response;
}

export function jsonToUrlEncoded(json) {
    return Object.entries(json).map(e => e.join('=')).join('&');
}

export function isEmailValid(email) {
    // eslint-disable-next-line max-len
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function regexValid(reg, txt) {
    return !reg.test(txt);
}
export function keyValidator(e) {
    const key = (e.keyCode) ? e.keyCode : e.which;
    return ((key >= 48 && key < 57) || key === 8) ? true : e.preventDefault();
}

export function validateField(value, {
    isRequired,
    isEmail,
}) {
    let error = '';

    if (isRequired) {
        error = !value.length ? 'Please enter the information' : '';
    }

    if (isEmail) {
        error = !isEmailValid(value) ? 'Please enter a valid email' : '';
    }

    return error;
}
/**
 * swapping object index in object Array
 */
export function objectSwapper(arr, objTitle, txt) {
    arr.map((x, y) => {
        if (x[objTitle].toLowerCase().match(txt) !== null) {
            const temp = arr[0];
            arr[0] = x;
            arr[y] = temp;
        }
        return x;
    });
    return arr;
}
/**
 * Return dynamic Form request object
 */
export function requestObject(arr) {
    const obj = {};
    const validationObj = {};
    const len = arr.length;
    for (let i = 0; i < len; i += 1) {
        ('name' in arr[i] && arr[i].name) && (obj[arr[i].name] = arr[i].value);
        (arr[i].getAttribute('pattern')) && (validationObj[arr[i].name] = regexValid(RegExp(arr[i].getAttribute('pattern', 'g')), arr[i].value));
    }
    return [obj, validationObj];
}
export function fetchElementValues(arr, obj) {
    const len = arr.length;
    const objKeys = Object.keys(obj);
    for (let i = 0; i < len; i += 1) {
        objKeys.map((keyName) => {
            (arr[i].name === keyName && keyName !== 'image') && (arr[i].value = obj[keyName]);
            return keyName;
        });
    }
}

export function objToQueryString(params) {
    return Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
}

/**
 * Scroll Top animation
 */

export function scrollToTop(scrollDuration) {
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(() => {
        (window.scrollY !== 0) ? window.scrollBy(0, scrollStep) : clearInterval(scrollInterval);
    }, 15);
}

export function convertNumberToArray(len) {
    return Array.from(Array(len), (x, i) => i + 1);
}

/**
 * Date format
 */
export function formatDate(date) {
    const dte = new Date(date);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const day = dte.getDate();
    const monthIndex = dte.getMonth();
    const year = dte.getFullYear();
    return `${day} ${monthNames[monthIndex]} ${year}`;
}

export function isValidPhoneNumber(phoneNo) {
    const phoneNoReg = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return phoneNoReg.test(phoneNo);
}

export function isValidPassword(password) {
    const passwordReg = /^.{8,}$/;
    return passwordReg.test(password);
}

export function isValidString(value) {
    const stringRegex = /\d+/g;
    return value && !value.match(stringRegex);
}

export function generateYears (n) {
    return [...Array(n)].map((_, index) => new Date().getFullYear() + index).toString().split(',');
}

export function generateNumbers (n) {
    return [...Array(n)].map((_, index) =>  index + 1).toString().split(',');
}

//unique id genderation

const uniqueId = Math.random().toString(36).substr(2, 9);
console.log(uniqueId)