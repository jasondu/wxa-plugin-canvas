const defaultOptions = {
    selector: '#poster'
};

function Poster(options = {}) {
    options = {
        ...defaultOptions,
        ...options,
    };

    const pages = getCurrentPages();
    const ctx = pages[pages.length - 1];

    const poster = ctx.selectComponent(options.selector);
    delete options.selector;

    return poster;
};

Poster.create = (reset = false) => {
    const poster  = Poster();
    if (!poster) {
        console.error('请设置组件的id="poster"!!!');
    } else {
        return Poster().onCreate(reset);
    }
}

export default Poster;