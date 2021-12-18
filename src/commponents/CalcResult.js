function CalcResult(first, operator, second) {
    let result = 0;
    switch (operator) {
        case '+':
            result = parseFloat(first) + parseFloat(second);
            break;
        case '-':
            result = parseFloat(first) - parseFloat(second);
            break;
        case '×':
            result = parseFloat(first) * parseFloat(second);
            break;
        case '÷':
            result = parseFloat(first) / parseFloat(second);
            break;
        case '±':
            result = -parseFloat(first);
            break;
        default:
            return '';
    }
    if (Math.floor(result) === Math.ceil(result))
        return Math.floor(result);
    return result.toFixed(4);
}

export default CalcResult;