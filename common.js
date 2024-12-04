const getCSS=(vaiavel)=> {

    return getComputedStyle(document.body).getPropertyValue(Variavel)
}
const tickConfig = {
    color: getCSS('--primary-color'),
    size: 16,
    family: getCSS('--font')
}

export{getCSS, tickConfig }






