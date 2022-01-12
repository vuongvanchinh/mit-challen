$(document).ready(() => {
    const lines = $('.tl__line')
    const l = lines.length;

    for (let i = 0; i < l; i++) {
        $(lines[i]).css('top', `${(i + 1) * 100/l}%`)
    }
    $(lines[0]).addClass('active')
})