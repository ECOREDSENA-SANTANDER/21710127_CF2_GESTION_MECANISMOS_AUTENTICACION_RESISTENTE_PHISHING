<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png')
      .col-sm-12.col-lg-7
        p.mb-0 El componente formativo  Configuración y validación de autenticación resistente al phishing da continuidad al estudio de los mecanismos y riesgos de autenticación abordado previamente, y desplaza el énfasis desde la identificación y selección hacia la implementación técnica, la verificación y la evidencia de funcionamiento. El aprendiz profundiza en la forma como un servicio digital registra credenciales de clave pública, configura la parte confiable y el origen, genera desafíos, recibe respuestas de autenticadores, almacena la información necesaria para verificarlas y administra las credenciales durante su ciclo de vida. Este recorrido permite comprender que la resistencia al phishing no depende solamente de incorporar una tecnología determinada, sino de configurar correctamente las relaciones entre el servicio, el navegador o cliente, el autenticador y las credenciales, manteniendo controles coherentes con las especificaciones técnicas y con los riesgos del entorno.
      
    p.mb-5 La segunda dimensión del componente se centra en la validación. Configurar un mecanismo no es suficiente si no se comprueba, mediante escenarios de prueba y criterios de aceptación, que el registro, la autenticación, la recuperación y la desactivación responden de manera segura ante condiciones normales y adversas. Por ello se integran pruebas funcionales y negativas sobre origen no autorizado, desafíos inválidos, repetición, credenciales no válidas y fallos de verificación, junto con prácticas de manejo responsable de evidencias y protección de datos. La progresión combina fundamentos de WebAuthn y FIDO2 con criterios de NIST SP 800-63-4 y NIST SP 800-63B-4, de modo que el aprendiz pueda configurar, comprobar y documentar mecanismos de autenticación resistentes al phishing en escenarios de laboratorio aplicables a servicios web y contextos organizacionales (Temoshok, Proud-Madruga, et al., 2025; Temoshok, Fenton, et al., 2025; World Wide Web Consortium [W3C], 2026).
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
