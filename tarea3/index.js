const portales = document.querySelector('.portales')
const helpContent = document.querySelector('.help-content')

const helpItems = document.createElement('div')

const interestContent = document.querySelector('.interest-content')

helpItems.classList.add('help-item')

const arrayHelpItems = 
[
    {title:"Calendarios", list: ["Tributarios", "Cambiarios"], img: "calendarios_active.png"},
    {title:"Agendamiento de citas", list: ["Sistema de agendamiento por medio del cual puede agendar, modificar, consultar o cancelar citas."], img: "asignacion-citas.png"},
    {title:"Notificaciones", list: ["Verifique la publicación del acto administrativo en las dos opciones: trámite e histórico y publicaciones.", "Registro Público de Notificaciones Electrónicas"], img: "notificacion.png"},
    {title:"Verificación de correos", list: ["Verifica autenticidad de correos DIAN", "Validación de Cadena de Correo con QR", "Información seguridad de la información"], img: "verificacion-correo.png"},
    {title:"PQSR y denuncias", list: ["Registro de peticiones, quejas, sugerencias,", "reclamos y denuncias DIAN"], img: "PQRS_y_denuncias.png"},
    {title:"Contáctenos", list: ["Utilice los canales de atención habilitados por la entidad"], img: "ubicacion.png"},
]

const arrayInterestItems = 
[
    {title:"Factura Electrónica", list: ["Micrositio", "Habilitación", "Facturando Electrónicamente"] , img: "Factura_electronica.png"},
    {title:"RUT", list: ["Micrositio", "Inscripción virtual RUT", "Trámites y servicios"], img: "RUT.png"},
    {title:"RST", list: ["Portal del régimen simple de tributación."], img: "RST.png"},
    {title:"OEA", list: ["Operador Económico Autorizado"], img: "OEA.png"},
    {title:"Trámites y servicios", list: ["Encuentre en un solo lugar la normativa, procedimientos, costos, formularios, preguntas frecuentes y glosario."], img: "tramiles-servicios.png"},
    {title:"Firma Electrónica", list: ["Generar Firma Electrónica", "Más información."], img: "firma-e.png"},
]

arrayHelpItems.forEach(item =>{
    const div = document.createElement('div')
    div.classList.add('help-item')

    const divtext = document.createElement('div')
    divtext.classList.add('help-item-text')

    const img = document.createElement('img')
    img.src = item.img
    div.appendChild(img)

    const h3 = document.createElement('h3')
    h3.textContent = item.title
    divtext.appendChild(h3)

    const ul = document.createElement('ul')

  item.list.forEach(texto => {

    const li = document.createElement('li')
    li.textContent = texto
    ul.appendChild(li)

  })

  divtext.appendChild(ul)

  div.appendChild(divtext)
  helpContent.appendChild(div)

})

portales.addEventListener('click', () =>{
    portales.style.color = 'red'
})


arrayInterestItems.forEach(item =>{
    const div = document.createElement('div')
    div.classList.add('help-item')

    const divtext = document.createElement('div')
    divtext.classList.add('help-item-text')

    const img = document.createElement('img')
    img.src = item.img
    div.appendChild(img)

    const h3 = document.createElement('h3')
    h3.textContent = item.title
    divtext.appendChild(h3)

    const ul = document.createElement('ul')

  item.list.forEach(texto => {

    const li = document.createElement('li')
    li.textContent = texto
    ul.appendChild(li)

  })

  divtext.appendChild(ul)

  div.appendChild(divtext)
  interestContent.appendChild(div)

})

portales.addEventListener('click', () =>{
    portales.style.color = 'red'
})

