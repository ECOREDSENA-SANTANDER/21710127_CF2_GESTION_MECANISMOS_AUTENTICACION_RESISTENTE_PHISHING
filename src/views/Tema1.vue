<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Preparación del entorno para autenticación resistente al <i>phishing</i>
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Registro de credenciales de clave pública
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Almacenamiento de datos, privacidad y protección de información
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 Implementación del flujo de autenticación
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.4 Credenciales resistentes al <i>phishing</i> y ciclo de vida
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.5 Planeación de la validación del mecanismo de autenticación
      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.6 Pruebas negativas y resistencia al <i>phishing</i>
      Separador
      #t_1_7.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.7 Gestión de errores, privacidad y evidencia técnica
      Separador
      #t_1_8.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.8 Análisis de resultados e informe de validación
      
        

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
