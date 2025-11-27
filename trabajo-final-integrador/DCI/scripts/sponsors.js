const auspiciantes = [
    { id: 1, auspiciante: "Aceros Levalle", logo: "aceros_levalle.jpg" },
    { id: 2, auspiciante: "Agroucacha", logo: "agroucacha.jpg" },
    { id: 3, auspiciante: "Laboratorio Diesel Armendariz", logo: "armendariz_diesel.jpg" },
    { id: 4, auspiciante: "Autoservicio El Gato", logo: "autoservicio_el_gato.jpg" },
    { id: 5, auspiciante: "Berra Extintores", logo: "berra_extintores.jpg" },
    { id: 6, auspiciante: "Brasería El Luga", logo: "braseria_el_luga.jpg" },
    { id: 7, auspiciante: "By Vicent Deco & Party", logo: "by_vicent_deco_party.jpg" },
    { id: 8, auspiciante: "Bodegon de Carnes Manso", logo: "carnes_manso.jpg" },
    { id: 9, auspiciante: "Colorshop", logo: "colorshop.jpg" },
    { id: 10, auspiciante: "Corralón González", logo: "corralon_gonzalez.jpg" },
    { id: 11, auspiciante: "Cruseño Hermanos", logo: "cruseno_hermanos.jpg" },
    { id: 12, auspiciante: "Discesapoli", logo: "discesapoli_servicios_agropecuarios.jpg" },
    { id: 13, auspiciante: "Disensa - Juan C. Rossatto", logo: "disensa.jpg" },
    { id: 14, auspiciante: "Supertombola El Gauchito", logo: "el_gauchito.jpg" },
    { id: 15, auspiciante: "Estudio Contable Fusta", logo: "estudio_fusta.jpg" },
    { id: 16, auspiciante: "Farmacia Saracco", logo: "farmacia_saracco.jpg" },
    { id: 17, auspiciante: "Farmacia Giménez", logo: "farmacia_gimenez.jpg" },
    { id: 18, auspiciante: "Frigorífico Rancho Manzo", logo: "frigorifico_manzo.jpg" },
    { id: 19, auspiciante: "Garatoni Automotores", logo: "garatoni_automotores.jpg" },
    { id: 20, auspiciante: "Osvaldo González", logo: "gonzalez_ferreteria.jpg" },
    { id: 21, auspiciante: "Julián Garais Soluciones Agropecuarias", logo: "julian_garais_agropecuarias.jpg" },
    { id: 22, auspiciante: "José Androetto Construccion", logo: "androetto_construccion.jpg" },
    { id: 23, auspiciante: "Frutas y Verduras Kevin", logo: "kevin_frutas_y_verduras.jpg" },
    { id: 24, auspiciante: "Lands Seguridad", logo: "lands_seguridad.jpg" },
    { id: 25, auspiciante: "Laura Fenoglio Estudio Contable", logo: "laura_fenoglio_contable.jpg" },
    { id: 26, auspiciante: "Maxi Crosio Pulverizaciones Aéreas", logo: "maxi_crosio_pulverizaciones.jpg" },
    { id: 27, auspiciante: "Mr. Clean", logo: "mr_clean.jpg" },
    { id: 28, auspiciante: "Municipalidad de General Levalle", logo: "municipalidad_general_levalle.jpg" },
    { id: 29, auspiciante: "Nutrilev", logo: "nutrilev.jpg" },
    { id: 30, auspiciante: "Pastel Cake de Laura Giraudo", logo: "pastel_cake_laura_giraudo.jpg" },
    { id: 31, auspiciante: "Taller Mecánico Picolo Hermanos", logo: "p_hermanos.jpg" },
    { id: 32, auspiciante: "Pizza Pippo", logo: "pizza_pippo.jpg" },
    { id: 33, auspiciante: "Quesería La Loma", logo: "queseria_la_loma.jpg" },
    { id: 34, auspiciante: "RM Automotores", logo: "rm_automotores.jpg" },
    { id: 35, auspiciante: "SL Amoblamientos", logo: "sl_amoblamientos.jpg" },
    { id: 36, auspiciante: "Super Nacha", logo: "super_nacha.jpg" },
    { id: 37, auspiciante: "Super Silvia", logo: "super_silvia.jpg" },
    { id: 38, auspiciante: "Taller Electromecánico Bari", logo: "taller_electromecanico_bari.jpg" },
    { id: 39, auspiciante: "Transporte Tachuela", logo: "transporte_tachuela.jpg" },
    { id: 40, auspiciante: "Veterinaria Vasco Viejo", logo: "vet_vasco_viejo.jpg" }
];

// Crea elemento de imagen
function createImage(url = null , nombre = null, className = null, id = null) {
    const image = createElement('img', className, null, false, id);
    url && (image.src = url);
    image.loading = "lazy";
    if (nombre) {
        image.alt = nombre;
        image.title = nombre;
        image.onerror = function() {
            this.onerror = null;
            this.src = './assets/sponsors/default.png';
            this.alt = `${nombre} - Logo temporal`;
            this.title = `${nombre} - Logo temporal`;
        }
    };
    
    return image;
}

// Función para generar el carousel infinito
function generarCarouselInfinito() {
    const track = $('#auspiciantes-track');
    const auspiciantesDuplicados = [...auspiciantes, ...auspiciantes];

    for (const auspiciante of auspiciantesDuplicados) {
        const $auspiciante = createElement('article', 'auspiciante-item');
        const $logo = createImage(`./assets/sponsors/carteles/${auspiciante.logo}`, auspiciante.auspiciante, 'auspiciante-logo');
        const $span = createElement('span', 'text-light', auspiciante.auspiciante);
        $auspiciante.append($logo, $span);
        track.append($auspiciante);
    }
}

// Generar el carousel cuando la página cargue
document.addEventListener('DOMContentLoaded', generarCarouselInfinito);