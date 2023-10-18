type DateType = Date | string | number;
export const DateFormater = (format: string, date: DateType = Date.now()): string => {

    /* eslint-disable no-useless-escape */
    const allowForm = date.toString().replace(/\.|\-|\s+/g, "/");
    const _date = new Date(allowForm); // Date 객체로 만들어줍니다.

    const zero = (value: number | string) => value.toString().length === 1 ? `0${value}` : value;
    
    return format.replace(/(yyyy|mm|dd|MM|DD|H|i|s)/g, (t: string): any => {
        switch (t) {
            case "yyyy":
                return _date.getFullYear();
            case "mm":
                return _date.getMonth() + 1;
            case "dd":
                return _date.getDate();
            case "MM":
                return zero(_date.getMonth() + 1);
            case "DD":
                return zero(_date.getDate());
            case "H":
                return zero(_date.getHours());
            case "i":
                return zero(_date.getMinutes());
            case "s":
                return zero(_date.getSeconds());
            default:
                return "";
        }
    });
};

export const GetCurrentDate = (): Array<string> => {
    return new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '').split(' ')
}


