
const translations = {

    es: {
        welcome: "Bienvenido a mi página",
        "about-link": "Sobre mí",
        "project-link": "Mi proyecto",
        "about-title": "Sobre mí",

        "about-text": "Soy Emily, tengo 15 años. Nací el 25 de enero de 2011 en Bucaramanga y vivo en Melgar. Me gusta el color negro y rosado, mi comida favorita es el sushi y también me gusta la malteada de vainilla. Tengo un hermano pequeño, me gusta salir con mis amigos, maquillarme y comprar makeup. Mi frase favorita es Carpe Diem y también me gusta la nostalgia.",

        "project-title": "Mi proyecto de vida",
        "project-description": "Quiero ser azafata porque me apasiona esa profesión.",

        step1: "1. Buscar buenas universidades que me gusten.",
        step2: "2. Tener un inglés avanzado.",
        step3: "3. Enviar mi solicitud para entrar a la universidad.",
        step4: "4. Que me acepten y poder estudiar en Medellín."
    },

    en: {
        welcome: "Welcome to my page",
        "about-link": "About me",
        "project-link": "My project",
        "about-title": "About me",

        "about-text": "I'm Emily, I'm 15 years old. I was born on January 25, 2011, in Bucaramanga and I live in Melgar. I like black and pink, my favorite food is sushi, and I also like vanilla milkshakes. I have a little brother. I enjoy going out with my friends, doing my makeup, and buying makeup products. My favorite phrase is Carpe Diem, and I also love nostalgia.",

        "project-title": "My life project",
        "project-description": "I want to become a flight attendant because I am passionate about that profession.",

        step1: "1. Look for good universities that I like.",
        step2: "2. Achieve an advanced level of English.",
        step3: "3. Send my application to enter university.",
        step4: "4. Get accepted and study in Medellín."
    }

};

function changeLanguage(language) {

    const elements = document.querySelectorAll("[data-label]");

    elements.forEach(element => {

        const label = element.getAttribute("data-label");

        element.textContent = translations[language][label];

    });

    document.documentElement.lang = language;

}
