<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de la preparación del entorno, el registro y autenticación con credenciales de clave pública, el ciclo de vida, las pruebas de validación, la protección de datos y la gestión de evidencias.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué condición debe cumplir un servicio WebAuthn en producción para proporcionar un contexto seguro?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutarse únicamente desde <i>localhost</i>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utilizar HTTPS con un certificado válido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aceptar cualquier origen que solicite una credencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Desactivar la validación del dominio durante el registro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la función principal del RP ID en una implementación WebAuthn?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir el tiempo máximo de la sesión del usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenar la clave privada del autenticador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar el <i>challenge</i> generado por el servidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar la parte confiable y delimitar el ámbito donde puede utilizarse la credencial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el RP ID y su relación con la parte confiable.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la parte confiable, el origen y el RP ID.',
        },
        {
          id: 3,
          texto:
            '¿Qué característica debe tener el <i>challenge</i> generado por el servidor?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser impredecible, temporal y de un solo uso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mantener el mismo valor para todas las autenticaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ser creado por el cliente y enviado al servidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Contener la contraseña del usuario para facilitar la verificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la generación y verificación segura del <i>challenge</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la frescura, vigencia y uso único del <i>challenge</i>.',
        },
        {
          id: 4,
          texto:
            '¿Cómo debe gestionarse el identificador interno del usuario durante el registro de una credencial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Debe incluir siempre el documento de identidad del usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Debe cambiar en cada inicio de sesión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Debe ser estable y suficientemente opaco para minimizar información personal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Debe coincidir obligatoriamente con el correo electrónico visible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la minimización y el tratamiento seguro de identificadores.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el user.id, la privacidad y la minimización de datos.',
        },
        {
          id: 5,
          texto:
            '¿Qué diferencia existe entre presencia y verificación del usuario en un autenticador?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La presencia valida la firma y la verificación genera el RP ID.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La presencia evidencia interacción; la verificación comprueba localmente al usuario mediante PIN, biometría u otro mecanismo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La presencia almacena la biometría en el servidor y la verificación la elimina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No existe diferencia técnica entre ambas condiciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la presencia y la verificación local del usuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la selección del autenticador y la verificación del usuario.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es un criterio adecuado para utilizar <i>attestation</i> durante el registro?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solicitarla siempre para recopilar la mayor cantidad posible de metadatos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Utilizarla para almacenar la clave privada en el servidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aplicarla cuando exista una necesidad técnica justificada, evitando información innecesaria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Usarla como reemplazo de la validación del <i>challenge</i> y del origen.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con <i>attestation</i>, seguridad y privacidad durante el registro.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con <i>attestation</i> y el registro responsable de información.',
        },
        {
          id: 7,
          texto:
            '¿Cuándo debe registrarse una credencial como activa en el servidor?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Antes de comprobar la respuesta del autenticador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tan pronto el navegador invoque la creación de credenciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Después de recibir cualquier objeto de <i>attestation</i>, aunque existan errores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Después de verificar satisfactoriamente <i>challenge</i>, origen, RP ID y demás condiciones aplicables.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
        {
          id: 8,
          texto:
            '¿Qué información debe conservar el servidor para verificar futuras autenticaciones?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La clave pública y los metadatos operativos necesarios, sin almacenar la clave privada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La clave privada completa y la plantilla biométrica del usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una copia permanente de todos los <i>challenges</i> utilizados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las credenciales de otros usuarios como mecanismo de respaldo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
        {
          id: 9,
          texto:
            '¿Qué elementos forman parte fundamental de una assertion WebAuthn?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contraseña, código SMS y pregunta secreta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificador de credencial, clientDataJSON, authenticatorData y firma.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Certificado del servidor, dirección IP y contraseña local.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente el RP ID y el nombre visible del usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
        {
          id: 10,
          texto:
            '¿Qué debe comprobar el servidor antes de aceptar una autenticación WebAuthn?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo que el navegador muestre una interacción exitosa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente que la credencial exista en la base de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                '<i>Challenge</i>, origen, RP ID, estado de la credencial, banderas requeridas y firma criptográfica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Solamente que el usuario reconozca visualmente el dominio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
        {
          id: 11,
          texto:
            '¿Qué permiten las credenciales descubribles utilizadas en el modelo de <i>passkeys</i>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el autenticador identifique credenciales aplicables sin que el servicio indique previamente una lista mediante <i>allowCredentials</i>.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Que todas las partes confiables compartan una misma clave privada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que el servidor omita la verificación del <i>userHandle</i>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que el usuario utilice la credencial en cualquier dominio sin restricciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
        {
          id: 12,
          texto:
            '¿Qué criterio debe cumplir un mecanismo de recuperación de credenciales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ser más simple que el mecanismo principal, aunque reduzca la seguridad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permitir incorporar nuevos autenticadores desde cualquier sesión antigua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evitar la notificación al titular para agilizar el proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mantener controles proporcionales al riesgo y evitar convertirse en una alternativa claramente más débil.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
        {
          id: 13,
          texto:
            '¿Qué caracteriza una validación técnica del mecanismo de autenticación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprobar únicamente que la interfaz se visualice correctamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar de manera sistemática requisitos y criterios previamente definidos mediante escenarios y evidencias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Ejecutar pruebas sin resultados esperados para evitar sesgos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aceptar el mecanismo cuando parece funcionar en un único intento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de los siguientes corresponde a un escenario de prueba funcional?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Intentar autenticar desde un origen no autorizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Modificar deliberadamente la firma criptográfica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comprobar que una credencial registrada permite autenticarse y crear una sesión después de todas las verificaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reutilizar un <i>challenge</i> previamente consumido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
        {
          id: 15,
          texto:
            '¿Qué resultado se espera al intentar autenticarse desde un origen no autorizado?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La operación debe rechazarse y no debe establecerse una sesión válida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El servidor debe aceptar la credencial si la interfaz se parece al sitio legítimo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La autenticación debe continuar si el usuario conoce el RP ID.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El servidor debe omitir la comprobación del origen y validar solo la firma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
        {
          id: 16,
          texto:
            '¿Qué debe ocurrir si se presenta un <i>challenge</i> inválido, vencido o ya utilizado?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Debe aceptarse si la credencial pertenece al usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Debe almacenarse para futuras autenticaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Debe generar una sesión temporal para verificar el dispositivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Debe rechazarse la operación sin crear una sesión ni modificar el estado de la cuenta.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
        {
          id: 17,
          texto:
            '¿Cómo debe responder el servidor ante una credencial desactivada cuya firma criptográfica es válida?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Debe reactivarla automáticamente y permitir el acceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Debe aceptarla porque la firma tiene prioridad sobre el estado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Debe rechazarla de acuerdo con la política de ciclo de vida de la credencial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Debe convertirla en una credencial sincronizable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
        {
          id: 18,
          texto:
            '¿Qué práctica es adecuada al registrar evidencia técnica de las pruebas?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Guardar claves privadas y datos biométricos para demostrar el proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar eventos, resultados y datos de correlación necesarios, evitando información sensible innecesaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Conservar todas las respuestas criptográficas completas de manera indefinida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Usar cuentas reales para aumentar la validez del laboratorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
        {
          id: 19,
          texto:
            '¿Cuál situación corresponde a una limitación del laboratorio y no necesariamente a un fallo de configuración?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aceptar un origen que no está autorizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reutilizar <i>challenges</i> después de una autenticación exitosa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Omitir la verificación de la firma criptográfica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Haber ejecutado las pruebas con un único navegador y un solo tipo de autenticador.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
        {
          id: 20,
          texto:
            '¿Qué información debe integrar un informe de validación del mecanismo de autenticación?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Propósito, alcance, arquitectura, metodología, resultados, hallazgos, limitaciones, conclusiones, recomendaciones y evidencias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Solo una lista de pruebas aprobadas y el nombre del navegador utilizado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Únicamente capturas de pantalla sin criterios de aceptación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente recomendaciones generales sin relación con los resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con Configuración y validación de autenticación resistente al <i>phishing</i>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Configuración y validación de autenticación resistente al <i>phishing</i>.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
