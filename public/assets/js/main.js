// GLIDER COMMAND
const config = {

    type:'carousel',
    perView: 3,
    breakpoints: {

        800: {
            perView: 2
        }
    }
};
new Glide('.glide', config).mount()

// AOS COMMAND
AOS.init({once:"true"});

// GRANIM
var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});