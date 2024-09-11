const imageSets = {
    1: [
        'kid1.webp',
        'kid2.webp',
        'kid3.webp',
        'kid5.jpg',
        'kid6.webp',
        'kid7.jpg',
        'kid9.webp',
        'kid10.jpg'
    ],
    2: [
        'a1.webp',
        'a2.jpg',
        'a3.jpg',
        'a4.jpg',
        'a5.jpg',
        'a6.png',
        'a7.jpg',
        'a8.jpg',
        'a9.jpg',
        'a10.jpg',
        'a11.jpg',
        'a12.jpg',
        'a13.jpg',
        'a14.jpg',
        'a15.jpg',
        'a16.jpg',

    ],
    3: [
        "p1.jpg",
        "p23.jpg",
        "p2.png",
        "p14.jpeg",
        "p3.jpeg",
        "p15.avif",
        "p22.avif",
        "p4.jpg",
        "p5.jpg",
        "p16.webp",
        "p6.jpeg",
        "p7.jpg",
        "p17.avif",
        "p8.jpg",
        "p9.webp",
        "p18.webp",
        "p19.jpg",
        "p26.webp",
        "p10.jpg",
        "p20.webp",
        "p21.jpg",
        "p11.jpg",
        "p24.avif",
        "p13.webp",
        "p25.jpg"


    ],
    4: [
        "s1.png",
        "s2.jpg",
        "s3.jpg",
        "s4.jpeg",
        "s5.jpg",
        "s6.jpg",
        "s7.jpg",
        "s8.txt",
        "s9.jpg",
        "s10.jpg",
        "s11.jpg",
        "s12.jpg",
        "s13.jpg",
        "s14.webp",
        "s15.jpg",
        "s16.jpg",
        "s17.jpeg",
        "s18.jpg",
        "s19.jpg",
        "s20.webp",
        "s21.jpg",
        "s22.jpg",
        "s23.webp",
        "s24.jpg",
        "s25.jpg",
        "s26.jpg",
        "s27.jpg",
        "s28.jpg",
        "s29.jpg",
        "s30.jpg",
        "s31.webp"
    ],
    5: [
        "sc1.webp",
        "sc2.jpeg",
        "sc3.jpg",
        "sc4.webp",
        "sc5.jpg",
        "sc6.jpg",
        "sc7.webp",
        "sc8.jpg",
        "sc9.webp",
        "sc10.jpg",
        "sc11.avif",
        "sc12.jpg",
        "sc13.jpg",
        "sc14.jpg",
        "sc15.webp",
        "sc16.webp",
        "sc17.jpg",
        "sc18.webp",
        "sc19.jpg",
        "sc20.jpg",
        "sc21.jpg",
        "sc22.jpg",
        "sc23.webp",
    ],
    6: [
        'b1.png',
        'b2.webp',
        'b3.jpg',
        'b4.webp',
        'b5.jpg',
        'b6.png',
        'b7.jpg',
        'b8.jpg',
        'b9.jpg',
        'b10.jpg',
        'b11.jpeg',
        'b12.jpeg',
        'b13.webp',
        'b14.webp',
        'b15.webp',
        'b16.webp',
        'b17.jpeg',
        'b18.webp',
        'b19.png',
        'b20.png',
        'b21.jpg',
        'b22.jpg',
        'b23.jpg',
        'b24.jpeg',
        'b25.jpg',
        'b26.jpeg',
        'b27.webp',
        'b28.webp',
        'b29.jpeg',
        'b30.jpeg',
        'b31.jpeg',
        'b32.jpeg',
        'b33.jpeg',
        'b34.jpeg',
        'b35.jpeg',
        'b36.jpeg',



    ]

};


function openLightbox(setNumber) {
    const lightboxContent = document.getElementById('lightboxContent');
    
    // Purani images ko remove karta h.
    lightboxContent.innerHTML = '';   

    const images = imageSets[setNumber];
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        lightboxContent.appendChild(img);
    });

    // Lightbox ko display karta h.
    document.getElementById('lightbox').style.display = 'block';

    // Thumbnail khulte hi background music SHURU hota h.
    var audio = document.getElementById("background-music");
    audio.play();
}

function closeLightbox() {
    // Lightbox ko close karta h.
    document.getElementById('lightbox').style.display = 'none';


    // Lightbox band hote hi background music stop hota h.
    var audio = document.getElementById("background-music");
    audio.pause();
    audio.currentTime = 0; // Music ko start point par le jata h.
}

window.onload = function () {
    // Page load hone par music ko automatically play krta h.
};

