// import Color from 'color';

const defaultColours = [
    { name: 'primary', value: '#333' },
    { name: 'secondary', value: '#222' },
    { name: 'tertiary', value: '#555' },
];

const defaultBodyFont = 'Lato';

// const convertToRgb = c =>
//     Color(c)
//         .rgb()
//         .string();

const buildTheme = (colours, bodyFont) => {
    if (!colours) colours = defaultColours;
    if (!bodyFont) bodyFont = defaultBodyFont;

    const newColours = {};

    colours.forEach(c => {
        newColours[c.name] = c.value;
    });

    console.log(newColours);
}




buildTheme();
