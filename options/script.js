class Option {
    constructor(text, height, width, background, font, align) {
        this.anyText = text,
        this.anyHeight = height,
        this.anyWidth = width,
        this.anyBg = background,
        this.anyFontSize = font,
        this.anyAlignText = align
    }
    createDIV(anyText, anyHeight, anyWidth, anyBg, anyFontSize, anyAlignText) {
        let newDiv = document.createElement('div');
        
        newDiv.innerHTML = anyText;
        newDiv.style.cssText = `height: ${anyHeight}; width: ${anyWidth}; background-color: ${anyBg}; font-size: ${anyFontSize}; text-align: ${anyAlignText}`;
        document.body.appendChild(newDiv);
    }
}

let options = new Option;

options.createDIV('Привет, мир!', '100px', '200px', 'yellow', '16px', 'center');

