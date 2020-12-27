document.getElementById('gallery') &&
    new Macy({
        container: '#gallery',
        trueOrder: false,
        waitForImages: false,
        useOwnImageLoader: false,
        debug: true,
        mobileFirst: true,
        columns: 1,
        margin:{
            y: 15,
            x: 15
        },
        breakAt:{ //num de columnas dependiendo el ancho del contenedor
            1200: 5,
            940: 4,
            520: 1
        }
    })