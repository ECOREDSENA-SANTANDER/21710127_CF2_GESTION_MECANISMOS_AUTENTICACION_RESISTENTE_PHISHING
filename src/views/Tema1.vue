<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Preparación del entorno para autenticación resistente al #[i phishing]

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/1.png')
        .col-sm-12.col-lg-7
          p.mb-0 La implementación de autenticación resistente al #[i phishing] comienza antes de crear una credencial. El entorno debe disponer de condiciones que permitan establecer con claridad qué servicio actúa como parte confiable, desde qué origen se ejecutará la operación, qué clientes o navegadores participan y qué autenticadores podrán utilizarse. Esta preparación evita que la seguridad dependa de configuraciones improvisadas y permite que las comprobaciones criptográficas posteriores tengan un contexto consistente. WebAuthn define un modelo en el que las credenciales de clave pública quedan asociadas con una #[i relying party] y son mediadas por el agente de usuario, mientras el autenticador conserva el material criptográfico sensible y produce pruebas verificables para el servicio (W3C, 2026).

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-11
          p.mb-0 En un laboratorio formativo, preparar el entorno significa disponer de un servicio web de prueba, un componente servidor capaz de generar desafíos y verificar respuestas, una base de datos para conservar la información pública de las credenciales y uno o varios navegadores compatibles. También conviene disponer de autenticadores de plataforma, como los integrados en un computador o teléfono, y cuando sea posible autenticadores externos conectados mediante USB, NFC o #[i bluetooth]. El CTAP (Client-to-Authenticator Protocol) define precisamente la comunicación entre la plataforma cliente y autenticadores externos o de itinerancia, complementando el modelo WebAuthn en entornos FIDO2 (Bradley et al., 2025).
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/2.svg')

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 La creatividad como habilidad para la solución de problemas
      p.mb-5 La primera condición es utilizar un contexto seguro. En servicios web reales, las operaciones WebAuthn deben ejecutarse sobre HTTPS, porque la protección del canal y la autenticidad del origen forman parte del contexto sobre el cual se crea o utiliza una credencial. Los entornos de desarrollo local pueden utilizar excepciones controladas, como localhost, pero estas no deben interpretarse como una configuración válida para producción. El servicio debe contar además con un nombre de dominio estable, certificados correctamente administrados y una política clara para determinar cuáles orígenes son autorizados.

      .row.justify-content-center.align-items-stretch.mb-5
        .col-sm-12.col-lg-4.mb-4.mb-lg-0
          .bg-color-1.p-4.h-100
            p.mb-0 El servidor debe generar desafíos impredecibles mediante una fuente criptográficamente segura, asociarlos temporalmente con la operación correspondiente y rechazarlos cuando hayan vencido o ya hayan sido utilizados. El desafío no es una contraseña del usuario, pero cumple un papel esencial para establecer frescura y evitar que una respuesta capturada pueda reutilizarse en otro momento. Por ello, una implementación que genere valores predecibles, reutilice desafíos o no los invalide después de una operación exitosa debilita la resistencia a repetición, incluso si utiliza credenciales de clave pública.
        .col-sm-12.col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block
          img.h-100.w-100(src='@/assets/curso/temas/t1/3.svg')
        .col-sm-12.col-lg-4
          .bloque-1.mb-2
          p.mb-0 La preparación también requiere definir los algoritmos criptográficos admitidos, la política de verificación del usuario y las características esperadas de los autenticadores. La especificación permite que la parte confiable comunique una lista de parámetros de clave pública compatibles, mientras el cliente y el autenticador seleccionan una combinación soportada. La decisión debe orientarse a algoritmos vigentes, interoperables y aceptados por la organización, evitando imponer configuraciones que reduzcan innecesariamente la compatibilidad. En un entorno formativo interesa que el aprendiz comprenda la finalidad del parámetro y no que memorice una lista estática de algoritmos que puede cambiar con las recomendaciones técnicas.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 1.] Condiciones mínimas para preparar el entorno de implementación
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Elemento]
              th #[b Condición esperada]
              th #[b Riesgo que se reduce]
          tbody
            tr
              td #[b Canal seguro]
              td Implementación de HTTPS con un certificado digital válido en el entorno de producción.
              td Intercepción o manipulación de la información durante la autenticación.
            tr
              td #[b Origen autorizado]
              td Coincidencia del esquema, el #[i host] y el puerto con el origen legítimo de la aplicación.
              td Uso de credenciales desde sitios no autorizados o de origen distinto al esperado.
            tr
              td #[b Identificador de la parte confiable (RP ID)]
              td Configuración coherente con el dominio del servicio y las reglas de WebAuthn.
              td Asociación incorrecta de las credenciales con una parte confiable diferente.
            tr
              td #[b Desafío (challenge)]
              td Generación de un valor aleatorio e impredecible, de duración limitada y de un solo uso, validado por el servidor.
              td Reutilización de respuestas capturadas mediante ataques de repetición.
            tr
              td #[b Servidor de verificación]
              td Disponibilidad de un componente que valide los datos del cliente, los datos del autenticador y las firmas criptográficas.
              td Aceptación de respuestas inválidas, incompletas o manipuladas.
            tr
              td #[b Almacenamiento de credenciales]
              td Uso de un repositorio protegido para almacenar las claves públicas, los identificadores de credenciales, su estado y los registros de trazabilidad necesarios.
              td Pérdida de integridad, exposición de información o asociación incorrecta de credenciales.
            tr
              td #[b Clientes y autenticadores]
              td Disponibilidad de navegadores, sistemas operativos y autenticadores compatibles con los requisitos del escenario de implementación.
              td Fallas de interoperabilidad, incompatibilidades técnicas y dificultades durante la autenticación.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Parte confiable, origen, cliente y autenticador

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/4.svg')
        .col-sm-12.col-lg-10
          p.mb-0 La parte confiable o #[i relying party] representa al servicio que solicita la autenticación y confía en su resultado. En una aplicación web, la relación entre el origen y el RP ID es decisiva porque delimita el ámbito donde una credencial puede utilizarse. El origen identifica el contexto desde el cual se ejecuta la llamada del navegador, mientras el RP ID identifica a la parte confiable a la que se vincula la credencial. La validación coherente de ambos elementos contribuye a que una credencial creada para un servicio legítimo no pueda utilizarse simplemente desde un dominio visualmente similar controlado por un atacante.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-4 El cliente, normalmente un navegador o aplicación compatible, media entre el servicio y el autenticador. El autenticador puede estar integrado en el mismo dispositivo (autenticador de plataforma) o ser externo. En ambos casos, la parte confiable no recibe la clave privada: recibe una respuesta criptográfica producida por el autenticador. Esta separación es central para el modelo de seguridad, ya que evita el envío de un secreto compartido que pueda ser copiado desde un formulario fraudulento. El aprendiz debe visualizar la arquitectura como una cadena de relaciones verificables y no como una única pantalla de inicio de sesión.
          .bg-color-2.p-4.mb-0
            p.mb-0 Una implementación resistente al #[i phishing] se apoya en la vinculación criptográfica de la credencial con la parte confiable y en la validación del origen, no únicamente en la apariencia del sitio o en la capacidad del usuario para detectar un engaño.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/5.png')
      .row.justify-content-center.align-items-stretch.mb-5
        .col-sm-12.col-lg-4.mb-4.mb-lg-0
            img.wcus-1.mb-3(src='@/assets/curso/temas/t1/6.svg')
            p.mb-0 La configuración formativa debe separar, en lo posible, los ambientes de desarrollo, prueba y producción. Para el laboratorio basta con un entorno controlado que reproduzca la arquitectura necesaria sin exponer datos reales. Se recomienda utilizar cuentas ficticias, dominios o subdominios de prueba cuando corresponda, credenciales creadas exclusivamente para el ejercicio y registros técnicos que no contengan información personal innecesaria. Esta separación permite ejecutar pruebas negativas sin afectar usuarios ni servicios productivos.
        .col-sm-12.col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block
          img.h-100.w-100(src='@/assets/curso/temas/t1/7.svg')
        .col-sm-12.col-lg-4
          .bg-color-2.p-4.h-100
            p.mb-0 Antes de iniciar el registro, debe comprobarse que el navegador reconoce el contexto seguro, que la parte confiable puede generar y recuperar desafíos, que la base de datos está disponible y que el servidor puede asociar una operación con el usuario correspondiente. Una práctica pedagógica útil consiste en documentar una lista de precondiciones y verificarla antes de cada sesión de pruebas. Este procedimiento reduce errores que podrían atribuirse equivocadamente al autenticador cuando en realidad provienen de la configuración del entorno.

      .titulo-sexto.color-acento-contenido.mb-4(data-aos='fade-right')
        p.mb-0 #[b Figura 1.] Arquitectura básica para autenticación resistente al #[i phishing] con WebAuthn
      figure.mb-0
          img.mb-0(src='@/assets/curso/temas/t1/8.svg', alt='Diagrama de arquitectura WebAuthn que muestra cinco elementos: usuario, navegador o cliente, autenticador, parte confiable o servidor y base de datos. Las flechas representan la solicitud WebAuthn, la interacción local con el autenticador y la verificación de credenciales y firmas en el servidor.')

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Registro de credenciales de clave pública

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-4 El registro establece la relación inicial entre una cuenta y una credencial de clave pública. En este proceso, la parte confiable entrega al cliente un conjunto de opciones de creación, el cliente solicita al autenticador generar una credencial y el servidor valida la respuesta antes de almacenar la información necesaria para futuras autenticaciones. A diferencia de un esquema de contraseña, el servicio no recibe la clave privada. La credencial se estructura de forma que la parte confiable pueda verificar posteriormente firmas producidas por el autenticador, lo que reduce la exposición a robo y reutilización de secretos compartidos.
          .bg-color-2.p-4.mb-0
            p.mb-0 Desde la perspectiva pedagógica, el registro debe entenderse como una operación de seguridad con precondiciones y verificaciones, no como una simple acción de interfaz. Si el servidor acepta una credencial sin comprobar el desafío, el origen o la asociación con la parte confiable, el proceso pierde garantías esenciales. Del mismo modo, si permite añadir nuevas credenciales a una cuenta sin una autenticación previa adecuada, un atacante que controle temporalmente una sesión podría incorporar su propio autenticador y mantener acceso posterior.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/9.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Técnicas para desarrollar la creatividad

      p.mb-5(data-aos='fade-right') Las opciones de creación comunican al cliente la información necesaria para iniciar el registro. Entre los elementos principales se encuentran los datos de la parte confiable, la representación del usuario, el #[i challenge], los parámetros de credencial de clave pública y, cuando corresponda, preferencias sobre el autenticador, verificación del usuario, credenciales excluidas, #[i attestation] y extensiones. La especificación WebAuthn utiliza esta estructura para que la creación de la credencial sea solicitada por el servicio, pero ejecutada de manera mediada por el cliente y el autenticador (W3C, 2026).

      .row.justify-content-center.align-items-end.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/10.png')
        .col-sm-12.col-lg-7
          p.mb-5 El identificador interno del usuario merece especial cuidado. El valor utilizado como user.id debe ser estable para la cuenta dentro del parte confiable y suficientemente opaco para no exponer información personal innecesaria. No conviene utilizar directamente documentos de identidad, correos electrónicos u otros datos personales como identificadores binarios si no existe una razón justificada. El nombre y el nombre visible pueden apoyar la experiencia de usuario, pero el identificador que vincula la credencial con la cuenta debe administrarse como parte de la arquitectura interna.
          .bg-color-2.p-4.mb-0
            p.mb-0 El #[i challenge] debe generarse en el servidor y asociarse con la operación de registro. La parte confiable no debería aceptar desafíos creados por el cliente ni reutilizar valores entre usuarios. Cuando la respuesta regresa al servidor, el #[i challenge] recibido dentro de clientDataJSON se compara con el valor esperado. Si no coincide, la operación se rechaza. Este control evita que una respuesta creada para una solicitud diferente sea aceptada como si correspondiera al registro actual.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 2.] Elementos principales de las opciones de creación de credenciales
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-3 #[b Elemento]
              th #[b Función durante el registro]
              th #[b Consideración de seguridad]
          tbody
            tr
              td rp
              td Identifica la parte confiable (#[i relying party]) que solicita la creación de la credencial.
              td Debe corresponder al servicio legítimo y utilizar un identificador de dominio coherente con la configuración de WebAuthn.
            tr
              td user
              td Identifica la cuenta a la que se asociará la credencial.
              td El identificador de usuario debe ser estable, único dentro del servicio y evitar la exposición innecesaria de datos personales.
            tr
              td challenge
              td Vincula la operación de registro con un desafío generado por el servidor.
              td Debe ser impredecible, de un solo uso y validarse en el servidor para impedir la repetición de solicitudes.
            tr
              td pubKeyCredParams
              td Especifica los tipos de credenciales y los algoritmos de clave pública que admite el servicio.
              td Debe incluir algoritmos seguros y compatibles con la política criptográfica y los autenticadores admitidos.
            tr
              td excludeCredentials
              td Permite indicar credenciales existentes que deben excluirse del nuevo registro.
              td Debe configurarse correctamente para evitar registros duplicados cuando el autenticador y el navegador permiten detectar credenciales previamente asociadas.
            tr
              td authenticatorSelection
              td Define los criterios de selección del autenticador, como su modalidad, la residencia de la credencial y los requisitos de verificación del usuario.
              td Los criterios deben ajustarse al nivel de seguridad requerido sin generar restricciones de compatibilidad innecesarias.
            tr
              td attestation
              td Establece la preferencia sobre la evidencia que puede aportar el autenticador acerca de sus características durante el registro.
              td La solicitud y validación de esta evidencia deben responder a una necesidad de seguridad y considerar sus implicaciones para la privacidad.
            tr
              td extensions
              td Permite solicitar funcionalidades adicionales definidas por la especificación WebAuthn.
              td Deben utilizarse únicamente las extensiones necesarias, verificando su compatibilidad y los posibles efectos sobre la seguridad y la privacidad.

      p.mb-5(data-aos='fade-right') ¡Explore el pódcast sobre la #[b selección del autenticador, la verificación de usuario y las credenciales descubribles], y descubra cómo estos elementos contribuyen a fortalecer la autenticación segura y la protección de la identidad digital!

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t1/11.png', data-aos='fade-right')
      .row.justify-content-center.g-0.bg-primario.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
                texto="Selección del autenticador, verificación de usuario y credenciales descubribles"
                :audio="require_src('@/assets/curso/temas/audio/podcast.mp3')"
              )

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 #[i Attestation] y registro responsable de información

      .row.justify-content-center.align-items-end.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .bg-color-1.p-4.mb-3
            p.mb-0 La #[i attestation] permite que el autenticador aporte evidencia sobre la procedencia o determinadas propiedades de la credencial y del autenticador. Sin embargo, no todos los servicios necesitan verificar #[i attestation]. Para muchos escenarios, una política de #[i attestation] mínima o nula reduce complejidad y riesgos de privacidad. Solicitar evidencia detallada sin un propósito técnico puede introducir identificadores o metadatos innecesarios y afectar la interoperabilidad. Por ello, la decisión debe basarse en requisitos concretos, como políticas de dispositivos administrados o necesidades de alto aseguramiento, y no en la idea de que más información siempre significa más seguridad.
          p.mb-0 En contextos empresariales de mayor control puede existir una necesidad legítima de confirmar que determinados autenticadores cumplen condiciones específicas. Aun en esos casos, la validación de #[i attestation] debe documentarse, mantenerse actualizada y evitar depender de atributos que no sean necesarios. W3C describe la #[i attestation] como un mecanismo para proporcionar prueba criptográfica de propiedades del autenticador, mientras la parte confiable conserva la facultad de decidir si la utiliza o no (W3C, 2026).
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/12.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1  Flujo técnico de registro y controles de verificación

      p.mb-5(data-aos='fade-right') El registro de credenciales mediante WebAuthn comprende seis etapas que permiten establecer la identidad de la cuenta, generar la credencial y verificar su validez antes de habilitarla.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/13.png')
        .col-sm-12.col-lg-6
          LineaTiempoD.color-acento-botones
            p.mb-0(numero="a" titulo="Inicio del registro") El usuario inicia el proceso de enrolamiento desde una sesión autenticada con un nivel de confianza adecuado para la operación.
            p.mb-0(numero="b" titulo="Generación de las opciones") El servidor construye las opciones de creación de credenciales, genera un #[i challenge] impredecible y lo almacena temporalmente para verificar la respuesta posterior.
            p.mb-0(numero="c" titulo="Creación de la credencial") El navegador invoca el mecanismo de creación de credenciales y el autenticador genera el material criptográfico correspondiente.
            p.mb-0(numero="d" titulo="Envío de la respuesta") El cliente devuelve al servidor los datos de la operación, incluidos clientDataJSON y el objeto de #[i attestation], que contiene información sobre el autenticador y la evidencia correspondiente, según la configuración utilizada.
            p.mb-0(numero="e" titulo="Verificación de la respuesta") El servidor comprueba el tipo de operación, la correspondencia del challenge, el origen, el identificador de la parte confiable (RP ID), las firmas y las demás condiciones aplicables al registro.
            p.mb-0(numero="f" titulo="Almacenamiento de la credencial") Si todas las verificaciones son satisfactorias, el servidor extrae y almacena la clave pública y los datos necesarios para identificar la credencial. Posteriormente, la registra como activa.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Controles de seguridad durante el proceso

      p.mb-5(data-aos='fade-right') La secuencia de registro debe garantizar que ninguna credencial se considere válida antes de completar las verificaciones correspondientes. Para ello, se deben aplicar los siguientes controles:

      SlyderF.mb-0(columnas="col-lg-6 col-xl-4" data-aos='fade-right')
        .tarjeta.bg-fondo-1.px-4.pb-4.h-100
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/temas/t1/14.svg')
          h4.text-center.mb-3 Validación previa al almacenamiento
          p.text-center.mb-0 Impedir que una respuesta inválida genere una credencial activa.

        .tarjeta.bg-fondo-1.px-4.pb-4.h-100
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/temas/t1/15.svg')
          h4.text-center.mb-3 Gestión del #[i challenge]
          p.text-center.mb-0 Verificar que coincida con el valor generado para la operación, que no haya expirado y que no se haya utilizado previamente.

        .tarjeta.bg-fondo-1.px-4.pb-4.h-100
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/temas/t1/16.svg')
          h4.text-center.mb-3 Integridad de la cuenta
          p.text-center.mb-0 Evitar modificaciones en el estado de la cuenta cuando falle alguna comprobación.

        .tarjeta.bg-fondo-1.px-4.pb-4.h-100
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/temas/t1/17.svg')
          h4.text-center.mb-3 Protección de la información
          p.text-center.mb-0 Utilizar mensajes de error que no revelen datos innecesarios sobre otras cuentas o credenciales.

        .tarjeta.bg-fondo-1.px-4.pb-4.h-100
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/temas/t1/18.svg')
          h4.text-center.mb-3 Trazabilidad
          p.text-center.mb-0 Registrar los resultados de las verificaciones y las decisiones de aceptación o rechazo, sin almacenar información sensible innecesaria.
      
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Almacenamiento de datos, privacidad y protección de información

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.mb-4.mb-lg-0
          p.mb-0 Una vez validado el registro, el servidor debe conservar únicamente la información necesaria para reconocer la credencial y verificar futuras #[i assertions]. El diseño de almacenamiento es una parte del control de seguridad porque determina qué datos podrían quedar expuestos ante una falla del repositorio y cómo se relacionan con la cuenta. En un esquema de clave pública, la base de datos no necesita almacenar la clave privada. Esta permanece bajo el control del autenticador o del proveedor de credenciales sincronizadas. El servidor almacena material público y metadatos operativos suficientes para validar respuestas y gestionar el ciclo de vida.
        .col-sm-12.col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/19.svg')
        .col-sm-12.col-lg-4
          img.wcus-2.mb-2.d-none.d-lg-block(src='@/assets/curso/temas/t1/20.svg')
          p.mb-0 La protección de datos no debe tratarse como una actividad separada de la autenticación. La minimización, el tratamiento de identificadores y el registro responsable de información técnica reducen el impacto de una exposición y mejoran la trazabilidad. NIST SP 800-63B-4 incorpora consideraciones de privacidad y gestión de autenticadores dentro de los requisitos de autenticación, lo que refuerza la necesidad de diseñar el almacenamiento y los registros como parte integral del mecanismo (Temoshok, Fenton, et al., 2025).

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Datos requeridos para la verificación de credenciales

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/21.png')
        .col-sm-12.col-lg-7
          p.mb-4 Como mínimo, el servicio requiere identificar la credencial, asociarla con una cuenta y disponer de la clave pública necesaria para verificar firmas. Dependiendo de la biblioteca y de las capacidades utilizadas, también puede conservar información como el contador de firma, métodos de transporte declarados, estado de respaldo, fecha de creación, última utilización, nombre asignado por el usuario y estado administrativo de la credencial. Estos datos permiten administrar múltiples autenticadores por cuenta y detectar situaciones que requieren revisión.
          p.mb-0 El contador de firma debe interpretarse con prudencia. Algunas credenciales pueden mantener contadores significativos y otras reportar valores que no permiten inferir de manera confiable clonación o uso concurrente. Por ello, no debe convertirse en el único criterio para aceptar o rechazar una autenticación. La lógica debe seguir la especificación y las recomendaciones de la biblioteca utilizada, registrando anomalías cuando aporten valor sin generar bloqueos injustificados.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 3.] Datos recomendados para el registro servidor de una credencial
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th #[b Dato]
              th #[b Uso]
              th #[b Criterio de protección]
          tbody
            tr
              td #[b Identificador de credencial (#[i credential ID])]
              td Identifica de forma única la credencial registrada y permite localizarla durante la autenticación.
              td Debe almacenarse íntegramente, asociarse con la cuenta correspondiente y validarse en cada operación de autenticación.
            tr
              td #[b Clave pública]
              td Permite verificar las firmas criptográficas generadas por el autenticador durante la autenticación.
              td Debe protegerse contra modificaciones no autorizadas. Su almacenamiento no implica revelar la clave privada.
            tr
              td #[b Identificador de usuario (#[i user handle]) y vínculo con la cuenta]
              td Relaciona la credencial con la cuenta a la que pertenece.
              td El identificador debe ser estable, único dentro del servicio y evitar la exposición innecesaria de información personal identificable (PII).
            tr
              td #[b Contador de firmas y datos de estado del autenticador]
              td Apoyan los controles de consistencia y permiten identificar posibles anomalías, cuando el autenticador proporciona información útil para ello.
              td Los cambios del contador deben interpretarse según las características del autenticador. No debe utilizarse como único indicador de compromiso.
            tr
              td #[b Métodos de transporte (#[i transports])]
              td Orientan al cliente sobre los medios disponibles para interactuar con el autenticador, cuando esta información se proporciona durante el registro.
              td Deben tratarse como información auxiliar para la interoperabilidad, no como prueba de identidad o garantía de seguridad.
            tr
              td #[b Estado de la credencial]
              td Permite gestionar las credenciales activas, suspendidas, revocadas o desactivadas.
              td El servidor debe comprobar que la credencial esté habilitada antes de aceptar una respuesta de autenticación.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Minimización y tratamiento de identificadores

      .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .bg-color-2.px-4.py-5.mb-0.h-100
            p.mb-0 La minimización implica que cada dato almacenado tenga una finalidad definida. No resulta adecuado guardar copias completas de respuestas criptográficas, datos biométricos o información de dispositivo si no son necesarios para validar la autenticación o cumplir una política específica. El almacenamiento excesivo aumenta superficie de exposición y complejidad de cumplimiento. Por el contrario, una arquitectura clara mantiene separados los identificadores de cuenta, las credenciales públicas y los registros de auditoría, aplicando controles de acceso según las funciones que los utilizan.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/22.png')

      p.mb-5(data-aos='fade-right') Los identificadores visibles pueden cambiar, por ejemplo, un correo institucional, mientras el identificador interno de la cuenta debe conservar continuidad. Esta razón favorece el uso de un #[i user handle] opaco y estable. Además, al registrar evidencias de laboratorio, conviene sustituir nombres reales por cuentas de prueba y evitar capturas que expongan información personal. La finalidad pedagógica se cumple demostrando el flujo y los resultados, no acumulando datos de usuarios.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Verificación local de factores biométricos y registro técnico

      .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/23.png')
        .col-sm-12.col-lg-8
          .bg-color-2.p-4.mb-4
            p.mb-0 La utilización de huella, rostro u otra biometría como mecanismo local de verificación no significa que la parte confiable deba almacenar una plantilla biométrica. En autenticadores de plataforma, el sistema operativo puede verificar localmente al usuario y liberar el uso de la clave privada. El servidor recibe indicadores y una prueba criptográfica, no necesariamente el dato biométrico. Este diseño reduce la necesidad de centralizar información biométrica y debe explicarse con claridad para evitar que el aprendiz confunda biometría local con una base de datos biométrica del servicio.
          p.mb-0 Los registros técnicos deben priorizar eventos, resultados y datos de correlación. Una buena práctica consiste en registrar el identificador del caso de prueba o transacción, fecha y hora, tipo de operación, resultado, razón de rechazo, origen evaluado, indicador de verificación de usuario y credencial referenciada mediante un identificador truncado o alias. No deben almacenarse claves privadas, secretos de recuperación ni datos biométricos. La evidencia debe permitir reconstruir qué ocurrió sin convertir el sistema de registros en una nueva fuente de exposición.
      
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 Implementación del flujo de autenticación

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/24.png')
        .col-sm-12.col-lg-7
          .row.justify-content-center.align-items-start.mb-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/25.svg')
            .col-sm-12.col-lg-10
              p.mb-0 Después del enrolamiento, la autenticación utiliza la credencial registrada para demostrar que el usuario controla el autenticador correspondiente. El servidor genera un nuevo #[i challenge] y construye opciones de solicitud. El navegador solicita una #[i assertion] al autenticador y devuelve la respuesta al servidor. La parte confiable acepta la autenticación solo después de verificar que la respuesta corresponde al #[i challenge] vigente, al origen permitido, al RP ID esperado y a una credencial activa cuya firma es válida.
          p.mb-0 El valor pedagógico de este flujo reside en comprender que la firma criptográfica no reemplaza las demás verificaciones. Una firma correcta sobre datos asociados a otro contexto no debe ser aceptada. Del mismo modo, un #[i challenge] válido sin una firma verificable tampoco es suficiente. La seguridad proviene de la combinación coherente de los elementos, lo que explica por qué la implementación debe seguir una secuencia definida y ser posteriormente sometida a pruebas negativas.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Opciones de solicitud y credenciales permitidas

      p.mb-5(data-aos='fade-right') Las opciones de solicitud incluyen, entre otros elementos, el #[i challenge], el RP ID, el tiempo de espera, la política de verificación del usuario y, cuando se utiliza un flujo asociado previamente con una cuenta, una lista de credenciales permitidas. Si se emplean credenciales descubribles, puede omitirse la lista de allowCredentials para permitir que el autenticador presente credenciales aplicables a la parte confiable. Esta diferencia influye en la experiencia de inicio de sesión y en la forma como el servidor relaciona el userHandle devuelto con una cuenta.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .bg-color-3.p-4.p-md-5.mb-0
            p.mb-0 El #[i challenge] vuelve a ser generado por el servidor y debe ser diferente del empleado durante el registro. Cada autenticación constituye una nueva transacción. La aplicación debe asociar temporalmente el challenge con la sesión o intento correspondiente y establecer un periodo de validez razonable. Un challenge expirado o ya consumido debe rechazarse, incluso si la firma es correcta
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/26.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 #[i Assertion, client data y authenticator data]

      .row.justify-content-center.align-items-center.bg-color-4.mb-5.g-0(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/27.png')
        .col-sm-12.col-lg-7.p-4.p-md-5
          img.wcus-3.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t1/28.svg')
          p.text-white.mb-0 La #[i assertion] contiene la información necesaria para que el servidor compruebe la autenticación. Entre los componentes fundamentales se encuentran el identificador de credencial, clientDataJSON, authenticatorData, la firma y, en ciertos flujos, userHandle. clientDataJSON incluye información sobre el tipo de operación, el #[i challenge] y el origen observado por el cliente. El authenticatorData incorpora, entre otros elementos, un #[i hash] del RP ID, banderas de estado y datos que permiten interpretar la interacción con el autenticador. La firma vincula criptográficamente esos elementos con la clave privada controlada por el autenticador.

      p.mb-5(data-aos='fade-right') El servidor debe procesar los datos en forma estricta. No corresponde confiar en valores recibidos del cliente sin compararlos con la configuración esperada. La parte confiable conoce el #[i challenge] que emitió, los orígenes permitidos, el RP ID y la clave pública registrada; esos elementos constituyen la referencia para decidir si la #[i assertion] es válida. Una biblioteca WebAuthn confiable puede realizar muchas de estas comprobaciones, pero el equipo responsable debe comprender qué está verificando para configurar correctamente las políticas y analizar fallos.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Verificación del desafío, origen, RP ID y firma criptográfica

      .row.justify-content-center.align-items-stretch.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.mb-4.mb-lg-0
          .bg-color-3.p-4.h-100
            p.mb-0 La verificación de una autenticación mediante WebAuthn comienza con la comprobación del tipo de operación y la correspondencia del #[i challenge] con el valor generado por el servidor. A continuación, se valida que el origen esté autorizado y que el #[i hash] del identificador de la parte confiable (RP ID), incluido en authenticatorData, corresponda al servicio esperado. También se verifican las banderas de presencia y verificación del usuario de acuerdo con la política de seguridad establecida. Finalmente, se valida la firma criptográfica con la clave pública asociada a la credencial registrada.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img.h-100.w-100(src='@/assets/curso/temas/t1/29.svg')
        .col-sm-12.col-lg-4
          p.mb-0 La firma se calcula sobre la concatenación de authenticatorData y el #[i hash] de clientDataJSON. De esta manera, la verificación vincula la prueba criptográfica con los datos del autenticador y el contexto de la operación recibidos por el servidor. Si estos datos se modifican, la firma no será válida. Este mecanismo permite definir pruebas negativas para comprobar la robustez del sistema: alterar el #[i challenge], utilizar un origen no autorizado o modificar los datos firmados debe provocar el rechazo de la solicitud. El resultado esperado no consiste únicamente en mostrar un mensaje de error, sino también en impedir que se establezca una sesión autenticada cuando no se cumplen los controles de seguridad.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 4.] Secuencia de comprobaciones en una autenticación WebAuthn
      .tabla-a.t-cus.mb-0(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-3 #[b Comprobación]
              th #[b Qué se valida]
              th #[b Resultado esperado ante una falla]
          tbody
            tr
              td #[b Tipo de operación]
              td Que el campo type de clientDataJSON corresponda a una operación de autenticación (webauthn.get).
              td Rechazar la solicitud de autenticación.
            tr
              td #[b Challenge]
              td Que el valor recibido coincida con el desafío vigente generado por el servidor y que este no haya expirado ni se haya utilizado previamente.
              td Rechazar la solicitud e impedir la reutilización del desafío.
            tr
              td #[b Origen]
              td Que el origen declarado en clientDataJSON pertenezca a la lista de orígenes autorizados para el servicio.
              td Rechazar la solicitud sin establecer una sesión autenticada.
            tr
              td #[b Hash del RP ID]
              td Que el #[i hash] del identificador de la parte confiable (RP ID), incluido en authenticatorData, coincida con el valor esperado.
              td Rechazar la autenticación.
            tr
              td #[b Banderas de presencia y verificación del usuario (UP/UV)]
              td Que los indicadores de presencia del usuario (#[i User Presence], UP) y de verificación del usuario (#[i User Verification], UV) cumplan la política de seguridad definida.
              td Rechazar la solicitud si no se cumplen los requisitos obligatorios.
            tr
              td #[b Credencial y estado]
              td Que el identificador de la credencial corresponda a una credencial registrada, asociada con la cuenta y habilitada para su uso.
              td Rechazar la solicitud y registrar el evento cuando corresponda.
            tr
              td #[b Firma criptográfica]
              td Que la firma sea válida al verificarse con la clave pública asociada a la credencial registrada, utilizando los datos correspondientes de la autenticación.
              td Rechazar la autenticación.
            tr
              td #[b Controles de estado adicionales]
              td Que los datos complementarios, como el contador de firmas cuando resulten aplicables, sean coherentes con las características del autenticador y la política del servicio.
              td Registrar la anomalía y aplicar la respuesta definida en la política de seguridad.

      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.4 Credenciales resistentes al #[i phishing] y ciclo de vida

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/30.png')
        .col-sm-12.col-lg-7
          .row.justify-content-center.align-items-start.mb-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/31.svg')
            .col-sm-12.col-lg-10
              p.mb-0 La configuración técnica debe considerar no solo el momento de autenticación, sino todo el ciclo de vida de la credencial. Una credencial puede ser enrolada, utilizada, complementada con otras, recuperada, sustituida, revocada o desactivada. La seguridad de la solución se mantiene únicamente si cada transición aplica controles consistentes. Un mecanismo principal resistente al phishing pierde buena parte de su valor si un atacante puede reemplazarlo mediante un proceso de recuperación débil.
          p.mb-0 NIST SP 800-63B-4 distingue requisitos de autenticadores según el nivel de aseguramiento y considera propiedades como resistencia al #[i phishing], resistencia a repetición y protección del secreto o clave. La gestión del ciclo de vida debe corresponder con el nivel de protección requerido y con el contexto de uso, especialmente cuando existen credenciales sincronizadas o dispositivos no administrados (Temoshok, Fenton, et al., 2025).

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Autenticadores de plataforma y externos

      p.mb-5(data-aos='fade-right') Los autenticadores de plataforma están integrados en un dispositivo, como un teléfono o computador. Pueden utilizar mecanismos locales de desbloqueo y ofrecer una experiencia fluida. Los autenticadores externos o de itinerancia se conectan a la plataforma mediante interfaces como USB, NFC o bluetooth, y resultan útiles cuando se necesita separar físicamente la credencial del equipo o facilitar su uso en distintos dispositivos. CTAP 2.2 describe la comunicación entre plataformas y autenticadores FIDO externos y constituye un referente técnico para este tipo de implementación (Bradley et al., 2025).

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .bg-color-3.px-4.py-5.mb-0
            p.mb-0 La elección entre ambos no debe basarse únicamente en comodidad. Deben analizarse propiedad del dispositivo, riesgo de pérdida, facilidad de soporte, disponibilidad de puertos o conectividad, accesibilidad y nivel de aseguramiento. En entornos corporativos puede ser conveniente combinar opciones: un autenticador de plataforma para uso habitual y un autenticador adicional protegido como mecanismo de respaldo controlado.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/32.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 #[i Passkeys] y autenticadores sincronizables

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/33.png')
        .col-sm-12.col-lg-7
          p.mb-4 Las #[i passkeys] son credenciales FIDO descubribles basadas en criptografía de clave pública. Pueden permanecer vinculadas a un dispositivo o sincronizarse dentro de un ecosistema que protege el material criptográfico y facilita su disponibilidad en varios dispositivos. La sincronización mejora continuidad y recuperación, pero modifica el modelo de control de la clave, por lo que debe evaluarse frente al nivel de aseguramiento y las políticas organizacionales. FIDO Alliance destaca que las organizaciones deben elegir entre credenciales sincronizadas y vinculadas al dispositivo atendiendo a sus casos de uso, requisitos legales, regulatorios y de seguridad (Saxe, 2023; Furukawa & Karino, 2024).
          p.mb-0 Una #[i passkey] sincronizada puede mantener resistencia al phishing porque sigue vinculada criptográficamente con la parte confiable, pero no necesariamente satisface requisitos de niveles que exigen una clave privada no exportable. NIST SP 800-63B-4 establece para AAL3 condiciones más estrictas sobre el autenticador y la no exportabilidad de claves. Esta diferencia permite reforzar una idea central del curso: resistencia al #[i phishing] y máximo nivel de aseguramiento no son términos equivalentes.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 5.] Comparación de alternativas de credenciales resistentes al #[i phishing]
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-3 #[b Alternativa]
              th #[b Ventajas]
              th #[b Aspectos que deben validarse]
          tbody
            tr
              td #[b Autenticador de plataforma]
              td Integración con el dispositivo, experiencia fluida y verificación local.
              td Propiedad del equipo, recuperación, respaldo y compatibilidad con el sistema operativo.
            tr
              td #[b Autenticador externo]
              td Separación física, portabilidad y posibilidad de control organizacional.
              td Pérdida, disponibilidad de interfaces, inventario y sustitución.
            tr
              td #[b #[i Passkey] sincronizada]
              td Disponibilidad en varios dispositivos y recuperación facilitada por el ecosistema.
              td Política del proveedor, sincronización, acceso a la cuenta del ecosistema y nivel de garantía de autenticación (AAL) aplicable.
            tr
              td #[b Credencial vinculada al dispositivo]
              td Mayor control sobre la ubicación de la clave y posible adecuación a requisitos estrictos de seguridad.
              td Procedimientos de respaldo, pérdida del dispositivo y enrolamiento de credenciales adicionales.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Enrolamiento, credenciales adicionales, recuperación y sustitución

      .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-8
          p.mb-4 El enrolamiento inicial debe ocurrir bajo una identidad suficientemente verificada para el contexto del servicio. Cuando se agrega una credencial adicional a una cuenta existente, el sistema debe exigir una autenticación apropiada y, en escenarios sensibles, una confirmación adicional. Permitir que una sesión antigua o de bajo nivel incorpore libremente nuevos autenticadores puede convertir una sesión comprometida en persistencia a largo plazo.
          p.mb-0 La recuperación se diseña para situaciones en las que el usuario pierde acceso a sus autenticadores. Debe equilibrar continuidad y seguridad. Una alternativa de recuperación claramente más débil que el mecanismo principal puede ser el objetivo preferido de un atacante. Por ello, la organización debe determinar qué evidencia exige para recuperar el acceso, cómo notifica al titular, qué periodo de observación aplica cuando corresponda y cómo desactiva credenciales perdidas. La sustitución debe dejar trazabilidad del mecanismo anterior y del nuevo, evitando estados ambiguos.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/34.png')

      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.5 Planeación de la validación del mecanismo de autenticación

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/35.png')
        .col-sm-12.col-lg-7
          .row.justify-content-center.align-items-start.mb-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/36.svg')
            .col-sm-12.col-lg-10
              p.mb-0 Validar significa comprobar de manera sistemática que el mecanismo configurado satisface requisitos y criterios previamente definidos. La validación no debe improvisarse después de implementar el flujo; requiere un propósito, alcance, escenarios, criterios de aceptación y evidencias. Esta lógica permite diferenciar una demostración informal de una prueba reproducible. El resultado esperado no es “parece funcionar”, sino una conclusión soportada en evidencias que relacionen cada requisito con uno o más casos de prueba.
          .bg-color-1.p-4
            p.mb-0 La planeación también delimita el entorno. Un laboratorio puede incluir uno o varios navegadores, autenticadores de plataforma y externos, cuentas de prueba y configuraciones deliberadamente modificadas para ejecutar escenarios negativos. El alcance debe ser suficiente para comprobar los controles enseñados, pero no pretende certificar formalmente todos los dispositivos y versiones existentes. Reconocer esta limitación forma parte del análisis profesional.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Propósito, alcance y criterios de aceptación

      .row.justify-content-center.align-items-stretch.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.mb-4.mb-lg-0
          img.wcus-3.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t1/37.svg')
          p.mb-0 El propósito explica qué se quiere comprobar. Para este componente puede formularse como verificar que el mecanismo registra y utiliza credenciales de clave pública de acuerdo con los parámetros definidos, rechaza respuestas fuera del contexto autorizado, administra correctamente el ciclo de vida y conserva evidencias suficientes sin exponer datos innecesarios. El alcance delimita qué funciones, clientes, autenticadores y rutas de recuperación se incluyen.
        .col-sm-12.col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
          img.h-100.w-100(src='@/assets/curso/temas/t1/38.svg')
        .col-sm-12.col-lg-4
          .bg-color-1.p-4.h-100
            p.mb-0 Los criterios de aceptación deben ser observables. “La autenticación debe ser segura” es demasiado general; en cambio, “una #[i assertion] con #[i challenge] distinto al emitido por el servidor debe ser rechazada y no debe crearse una sesión” permite ejecutar una prueba y determinar objetivamente su resultado. De igual forma, “una credencial desactivada debe ser rechazada aun cuando la firma sea válida” conecta el control de ciclo de vida con una condición verificable.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Escenarios de prueba y trazabilidad

      .row.justify-content-center.align-items-center.bg-color-4.mb-5.g-0(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/39.svg')
        .col-sm-12.col-lg-7.p-4.p-md-5
          p.text-white.mb-4 Los escenarios se agrupan en funcionales y negativos. Los funcionales comprueban que el registro, autenticación, incorporación de credenciales adicionales, recuperación y desactivación operan como se espera. Los negativos introducen condiciones que deben provocar rechazo, como origen no autorizado, #[i challenge] inválido, intento de repetición, credencial inexistente, firma alterada o estado revocado. La combinación de ambos tipos de prueba evita una falsa confianza basada únicamente en demostrar el camino exitoso.
          p.text-white.mb-0 La trazabilidad relaciona cada escenario con el requisito que evalúa. Un identificador de caso de prueba permite vincular la descripción, precondiciones, pasos, resultado esperado, evidencia y conclusión. Esta estructura facilita actualizar la validación cuando cambia la configuración y permite que otra persona comprenda cómo se llegó a las conclusiones.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 6.] Estructura mínima de un plan de validación
          .tabla-a.t-cus.mb-0
            table
              thead
                tr
                  th.wcus-3 #[b Campo]
                  th #[b Descripción]
              tbody
                tr
                  td #[b ID de prueba]
                  td Código único que permite relacionar el escenario, la evidencia y el resultado.
                tr
                  td #[b Requisito asociado]
                  td Control o comportamiento que se desea comprobar.
                tr
                  td #[b Precondiciones]
                  td Cuenta, credencial, navegador, estado y configuración necesarios para ejecutar la prueba.
                tr
                  td #[b Escenario]
                  td Situación funcional o negativa que se evaluará.
                tr
                  td #[b Procedimiento]
                  td Secuencia de acciones de laboratorio descrita de forma clara y sin ambigüedades.
                tr
                  td #[b Resultado esperado]
                  td Condición observable que debe cumplirse para aprobar la prueba.
                tr
                  td #[b Evidencia]
                  td Registro, captura de pantalla, archivo de registro (#[i log]) o salida técnica que respalda el resultado.
                tr
                  td #[b Resultado obtenido]
                  td Comportamiento real observado durante la ejecución de la prueba.
                tr
                  td #[b Conclusión]
                  td Estado final de la prueba: aprobado, no aprobado, bloqueado o requiere análisis adicional.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/40.png')
        .col-sm-12.col-lg-9
          .row.justify-content-center.align-items-stretch.g-0.mb-5
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img.h-100.w-100(src='@/assets/curso/temas/t1/41.svg')
            .col-sm-12.col-lg-7.bg-color-5.p-4.d-flex.flex-column.justify-content-center
              .bg-color-2.px-3.py-2.mb-3
                h4.mb-0 Evidencia técnica
              p.text-white.mb-0 La evidencia técnica permite documentar los resultados de las pruebas y comprobar si el sistema cumple con los criterios de aceptación establecidos. Esta debe ser suficiente, pertinente y recopilada de manera responsable, sin exponer información sensible.
          p.mb-0 Por ejemplo, una captura de pantalla puede mostrar que el navegador rechazó una operación, pero no necesariamente explica la causa del rechazo. Por su parte, un registro del servidor puede aportar información sobre la decisión tomada y su justificación técnica, siempre que se protejan los identificadores y se evite registrar contraseñas, claves privadas, tokens u otros datos sensibles. Por esta razón, se recomienda combinar evidencias visuales con registros estructurados y relacionarlas mediante el identificador del caso de prueba. Esto facilita la revisión y la trazabilidad de los resultados.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Condiciones de laboratorio

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          p.mb-4 Las condiciones de laboratorio corresponden a las características del entorno en el que se ejecutan las pruebas. Para interpretar correctamente los resultados, es necesario documentar el navegador y su versión, el sistema operativo, el tipo de autenticador, el método de verificación del usuario, la configuración del identificador de la parte usuaria (RP ID) y el origen autorizado. También deben registrarse las modificaciones realizadas intencionalmente para evaluar escenarios negativos, como el uso de un challenge incorrecto o de un origen no autorizado.
          p.mb-0 Documentar estas condiciones permite comprender cómo se obtuvo cada resultado, identificar posibles limitaciones y determinar si las pruebas cubren los escenarios previstos. Por ejemplo, un caso de prueba puede producir resultados diferentes según el navegador utilizado o las capacidades del autenticador. Por ello, una evidencia sin información sobre el entorno de ejecución resulta insuficiente para reproducir la prueba y analizar sus resultados con precisión.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/42.png')
      
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-card" data-aos='fade-right')
        .row(titulo="Pruebas funcionales del mecanismo de autenticación")
          .col-12
            p.mb-4 Las pruebas funcionales verifican que las operaciones previstas para el usuario legítimo se completen correctamente. Deben iniciar por el registro y continuar con autenticación, incorporación de credenciales adicionales, recuperación y desactivación. Su finalidad no es únicamente confirmar que la interfaz responde, sino comprobar que el servidor almacena y valida la información apropiada, actualiza estados y crea sesiones solo cuando las condiciones definidas se cumplen.
            p.mb-0 Un enfoque formativo útil consiste en ejecutar primero el caso exitoso y luego observar la evidencia técnica asociada. De esta manera, el aprendiz identifica qué valores y eventos caracterizan una operación válida antes de analizar fallos. Esta comparación facilita comprender posteriormente por qué una prueba negativa debe ser rechazada.

        .row(titulo="Pruebas de registro y autenticación")
          .col-12
            p.mb-4 En el registro se comprueba que el servidor emite un #[i challenge], que el navegador solicita una credencial para la parte confiable, que el autenticador requiere la interacción correspondiente y que el servidor valida la respuesta antes de almacenar la credencial. Si se utiliza excludeCredentials, puede verificarse el comportamiento al intentar registrar nuevamente una credencial ya asociada. También conviene comprobar que una credencial creada para una cuenta no se vincula accidentalmente con otra.
            p.mb-0 En la autenticación se verifica que la credencial registrada pueda producir una #[i assertion] válida y que el servidor cree una sesión únicamente después de comprobar #[i challenge], origen, RP ID, estado y firma. Cuando la política exige verificación del usuario, el caso exitoso debe demostrar que la bandera correspondiente cumple la condición. Si se utilizan credenciales descubribles, debe comprobarse que el userHandle conduce a la cuenta correcta sin depender de un dato introducido previamente por el usuario.

        .row(titulo="Pruebas de recuperación, sustitución y desactivación")
          .col-12
            p.mb-4 La recuperación debe probarse desde el estado real de pérdida o indisponibilidad del autenticador, utilizando cuentas ficticias. El caso debe comprobar qué evidencia solicita el proceso, quién autoriza la recuperación, qué notificaciones se generan y cómo se incorpora una nueva credencial.
            p.mb-4 Si el mecanismo de recuperación permite restablecer acceso sin una autenticación resistente al #[i phishing], ese hecho debe quedar documentado como una característica de riesgo y tratarse mediante controles compensatorios proporcionales.
            p.mb-0 La sustitución debe confirmar que la nueva credencial queda activa y que la anterior adopta el estado previsto. La desactivación se valida intentando autenticar con una credencial cuyo estado servidor ya no permite uso. Aunque la firma sea técnicamente válida, el servidor debe rechazarla por política de ciclo de vida. Esta prueba demuestra que la administración de credenciales no depende de borrar físicamente la clave en el dispositivo.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Evaluación de resultados frente a criterios de aceptación

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .bg-color-3.p-4.p-md-5.mb-0
            p.mb-0 Cada resultado se compara con el criterio definido antes de la ejecución. Si el resultado esperado era crear una sesión y la sesión no se crea, la prueba falla, aunque el navegador haya mostrado una interacción correcta. Si el resultado esperado era rechazar una credencial desactivada y el sistema la acepta, la falla es crítica porque contradice un control explícito. Cuando una prueba no puede completarse por una limitación del laboratorio, debe clasificarse como bloqueada o no ejecutada, no como aprobada.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/43.png')

      p.mb-0(data-aos='fade-right') La evaluación debe evitar interpretaciones acomodadas. Los criterios previos reducen el sesgo y permiten que la validación sea reproducible. También facilitan separar defectos del mecanismo, errores de configuración y limitaciones del entorno de prueba. Esta disciplina será esencial al redactar el informe final.



      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.6 Pruebas negativas y resistencia al #[i phishing]

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/44.png')
        .col-sm-12.col-lg-7
          .row.justify-content-center.align-items-center.mb-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/45.svg')
            .col-sm-12.col-lg-10
              p.mb-0 Las pruebas negativas comprueban que el sistema rechaza condiciones que no deberían producir una autenticación válida. Constituyen una parte esencial de la validación porque muchas implementaciones funcionan correctamente en el camino esperado, pero fallan cuando reciben datos inconsistentes o fuera de contexto. Los escenarios de este componente se concentran en origen no autorizado, #[i challenge] inválido, repetición, credenciales no válidas, fallos de firma y propiedades asociadas con resistencia al #[i phishing].
          .bg-color-1.p-4
            p.mb-0 Estas pruebas deben ejecutarse de manera controlada y ética, únicamente sobre el laboratorio o activos autorizados. No se requiere construir campañas de phishing ni recopilar credenciales reales. Basta con modificar parámetros de prueba, utilizar orígenes de laboratorio y comprobar que las protecciones del protocolo y del servidor impiden el uso indebido. El objetivo pedagógico es validar controles, no practicar técnicas de engaño contra terceros.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Origen no autorizado y RP ID incorrecto

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          p.mb-3 La resistencia al #[i phishing] de WebAuthn se apoya, entre otros elementos, en el alcance de la credencial respecto de la parte confiable. Una prueba negativa puede utilizar un origen de laboratorio distinto al autorizado o configurar deliberadamente un RP ID incompatible. El comportamiento esperado es que el cliente o el servidor impidan completar la operación, según el punto donde se detecte la inconsistencia. En ningún caso debe crearse una sesión válida.
          p.mb-0 Este escenario permite visualizar la diferencia frente a una contraseña. Una contraseña puede escribirse manualmente en un sitio que imita la interfaz legítima. Una credencial WebAuthn, en cambio, está acotada al ámbito de la parte confiable. W3C define las credenciales como #[i scoped] a una #[i relying party], lo que constituye una propiedad estructural del modelo y no una recomendación de comportamiento para el usuario (W3C, 2026).
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/46.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Desafíos inválidos, vencidos o repetidos

      img.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t1/47.png', data-aos='fade-right')

      p.mb-4(data-aos='fade-right') El primer caso consiste en presentar una respuesta cuyo #[i challenge] no coincide con el emitido por el servidor. El segundo utiliza un #[i challenge] expirado. El tercero intenta reutilizar una respuesta o #[i challenge] que ya fue aceptado. En todos los casos, el servidor debe rechazar la operación y evitar que el intento cree sesión o modifique el estado de la cuenta. La evidencia debe registrar la razón de rechazo sin conservar información innecesaria.
      p.mb-5(data-aos='fade-right') La repetición ayuda a explicar por qué la frescura de la transacción es independiente de la resistencia al #[i phishing]. Un mecanismo puede impedir reutilizar una respuesta antigua, pero aun ser susceptible a retransmisión en tiempo real si la prueba es transferible. WebAuthn combina desafíos con vinculación a la parte confiable, lo que fortalece simultáneamente varias propiedades del protocolo.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Credenciales no válidas y fallos de firma

      .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/48.png')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/49.svg')
            .col-sm-12.col-lg-10
              p.mb-0 El servidor debe rechazar identificadores de credencial que no existen, credenciales asociadas con otra cuenta cuando el flujo exige una cuenta concreta, credenciales desactivadas y firmas que no validan con la clave pública registrada. Una prueba de laboratorio puede alterar de manera controlada un #[i byte] de la firma o de los datos firmados para confirmar que la verificación falla. La modificación debe realizarse sobre datos ficticios y dentro de herramientas de prueba, sin exponer material de usuarios reales.
          p.mb-0 También conviene comprobar que errores de decodificación, estructuras incompletas o tipos de operación inesperados no provoquen excepciones que dejen el servicio en un estado inseguro. El servidor debe manejar entradas inválidas de forma controlada, devolver un resultado de error y registrar información suficiente para diagnóstico. Un fallo de validación no debe transformarse en una ruta alternativa de aceptación.

      Separador
      #t_1_7.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.7 Gestión de errores, privacidad y evidencia técnica

      p.mb-5(data-aos='fade-right') La calidad de una implementación también se refleja en la manera en que gestiona los errores y responde ante situaciones inesperadas. Los fallos pueden originarse en el navegador, el autenticador, la conexión de red, la configuración de la parte confiable, la validación del challenge, el almacenamiento o los procesos de verificación del servidor. Por ello, es importante distinguir entre errores relacionados con la seguridad, como un challenge inválido, y fallas operativas, como la indisponibilidad de la base de datos. Para cada situación, se deben definir respuestas apropiadas que permitan identificar el problema sin comprometer la seguridad ni conceder accesos no autorizados.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .bg-color-3.p-4.p-md-5.mb-0
            p.mb-0 La gestión de la evidencia técnica debe complementar este proceso. Los registros deben proporcionar información suficiente para diagnosticar errores, analizar incidentes y verificar el cumplimiento de los controles, sin revelar contraseñas, claves privadas, tokens u otros datos sensibles. Para ello, se debe aplicar el principio de minimización de datos, recopilar únicamente la información necesaria para la finalidad prevista y establecer periodos de conservación acordes con las necesidades de análisis, auditoría y cumplimiento. De esta manera, la implementación integra la seguridad y la privacidad, al tiempo que evita la generación y el almacenamiento innecesarios de copias de información relacionada con la autenticación.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/50.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Fallos de registro, autenticación y recuperación

      .bloque-texto-g.bg-color-6.p-3.p-sm-4.p-md-5.mb-5.br-1.br-2(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block.br-2(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/51.png')})`}"
        )
        .bloque-texto-g__texto.p-4.p-md-5.d-flex.flex-column
          p.mb-0 Durante el registro de credenciales pueden presentarse diferentes situaciones, como la cancelación de la operación por parte del usuario, la ausencia de un autenticador compatible, el rechazo de una credencial duplicada, la detección de un origen no autorizado o el incumplimiento de los requisitos de attestation. En el proceso de autenticación, los fallos pueden estar relacionados con la ausencia de credenciales válidas para la operación, la cancelación del procedimiento, el vencimiento del challenge, una firma inválida o el incumplimiento de la política de verificación del usuario. Por su parte, durante la recuperación del acceso pueden surgir problemas por información insuficiente, credenciales previamente revocadas o intentos que no cumplen el nivel de confianza requerido.

      p.mb-5(data-aos='fade-right') Ante estas situaciones, la aplicación debe establecer respuestas controladas que impidan accesos no autorizados y faciliten la identificación del problema. Para ello, se recomienda diferenciar los mensajes que recibe el usuario de los registros técnicos destinados al equipo de soporte. Mientras la interfaz debe proporcionar instrucciones claras para continuar o resolver la situación, los registros internos pueden incluir códigos de error y mensajes estructurados que permitan analizar las causas del fallo. Esta separación reduce la exposición de información sensible y evita solicitar capturas de pantalla que puedan contener datos privados o información de autenticación.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Protección de datos de autenticación

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/52.svg')
        .col-sm-12.col-lg-11
          p.mb-0 Los datos utilizados durante la autenticación deben protegerse mediante controles de confidencialidad, integridad y acceso acordes con su función. Aunque la clave pública no es secreta, su asociación con una cuenta y otros metadatos pueden revelar información relevante sobre el usuario o la operación. Por ello, los repositorios que almacenan estos datos deben incorporar medidas como las siguientes:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t1/53.svg')
            h4.text-center.mb-3 Control de acceso
            p.mb-0 Limitar los permisos a las personas y los procesos que necesitan consultar o modificar la información.

        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t1/54.svg')
            h4.text-center.mb-3 Protección de las comunicaciones
            p.mb-0 Utilizar mecanismos seguros para transmitir los datos entre los componentes del sistema.

        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-md-0
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t1/55.svg')
            h4.text-center.mb-3 Respaldo y recuperación
            p.mb-0 Establecer procedimientos para preservar la disponibilidad e integridad de la información.

        .col-sm-12.col-md-6.col-lg-3
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t1/56.svg')
            h4.text-center.mb-3 Control de cambios y trazabilidad
            p.mb-0 Registrar las modificaciones relevantes y permitir su revisión posterior.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/57.png')
        .col-sm-12.col-lg-8
          .bg-color-2.p-4.mb-3
            p.mb-0 La clave privada debe permanecer bajo el control del autenticador y no debe copiarse al servidor. Esta separación es fundamental para el funcionamiento de la autenticación mediante criptografía de clave pública.
          p.mb-0 La verificación biométrica requiere especial atención. Algunos dispositivos permiten comprobar la identidad del usuario mediante huella dactilar o reconocimiento facial sin transmitir la plantilla biométrica al servicio que solicita la autenticación. De esta manera, la aplicación puede aprovechar la verificación local sin asumir directamente la custodia de esos datos. Si la organización necesita recopilar información adicional, debe justificar su finalidad, limitar su acceso y documentar su tratamiento de acuerdo con las políticas de privacidad y los requisitos legales aplicables.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Registro de evidencias y trazabilidad

      p.mb-3(data-aos='fade-right') El registro de evidencias permite documentar los resultados de las pruebas y demostrar si los controles implementados funcionan según lo esperado. Para facilitar su consulta, se recomienda utilizar una matriz que relacione cada caso de prueba con las evidencias que respaldan su resultado.
      p.mb-5(data-aos='fade-right') Entre las evidencias que pueden utilizarse se encuentran las siguientes:

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span #[b a]
              p.mb-0 #[b Registro del servidor:] permite identificar la decisión técnica tomada durante la operación y analizar las causas de un posible fallo.
            li.d-flex
              .lista-ol--cuadro__vineta
                span #[b b]
              p.mb-0 #[b Captura de pantalla:] documenta el comportamiento visible de la aplicación durante la ejecución de la prueba.
            li.d-flex
              .lista-ol--cuadro__vineta
                span #[b c]
              p.mb-0 #[b Registro del estado de la credencial:] permite comprobar, mediante una consulta controlada, si una credencial fue desactivada o revocada.
            li.d-flex
              .lista-ol--cuadro__vineta
                span #[b d]
              p.mb-0 #[b Ficha de configuración:] documenta los parámetros relevantes del entorno, como el identificador de la parte confiable (RP ID) y el origen autorizado.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/58.png')

      p.mb-5(data-aos='fade-right') Las evidencias seleccionadas deben ser suficientes para sustentar las conclusiones, evitar duplicaciones innecesarias y proteger los datos sensibles. Asimismo, cada artefacto debe vincularse con el identificador del caso de prueba correspondiente, de modo que sea posible relacionar el procedimiento ejecutado, el resultado obtenido y la conclusión.

      .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/59.svg')
        .col-sm-12.col-lg-11
          p.mb-0 La trazabilidad también facilita el seguimiento de las correcciones. Cuando una prueba no cumple el resultado esperado, se debe documentar el hallazgo, registrar el ajuste realizado y ejecutar nuevamente la prueba. Para conservar la continuidad del proceso, se puede mantener el identificador original y registrar la repetición como una nueva ejecución, o utilizar una versión relacionada que permita distinguir ambas evaluaciones.
      

      Separador
      #t_1_8.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.8 Análisis de resultados e informe de validación

      .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/60.png')
        .col-sm-12.col-lg-8
          p.mb-0 El análisis de resultados permite transformar los datos obtenidos durante las pruebas en conclusiones claras sobre el funcionamiento y la seguridad del mecanismo de autenticación. Para ello, es necesario determinar qué requisitos se cumplieron, cuáles presentaron fallos, qué limitaciones tuvo el entorno de laboratorio y qué riesgos continúan presentes. La evaluación no debe centrarse únicamente en la cantidad de pruebas aprobadas, sino también en la gravedad de los hallazgos. Por ejemplo, aceptar un challenge reutilizado o permitir la autenticación con una credencial revocada puede representar un riesgo importante, incluso si la mayoría de las pruebas funcionales fueron satisfactorias. Por esta razón, los resultados deben analizarse según su impacto en el control de acceso y la prevención de suplantaciones.

      p.mb-5(data-aos='fade-right') El informe de validación documenta el proceso realizado y proporciona evidencia para sustentar las conclusiones. Aunque no necesita tener la extensión de una auditoría exhaustiva, debe permitir comprender qué se evaluó, cómo se realizaron las pruebas y cuáles fueron los resultados.

      .bg-full-width.bg-color-1.mb-5(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/61.png')
            .col-sm-12.col-lg-8
              p.mb-4 Para ello, se recomienda organizarlo en los siguientes apartados:
              SlyderF.mb-0(columnas="col-lg-6 col-xl-4")
                .tarjeta.bg-color-7.p-4.h-100
                  .row.justify-content-center.mb-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/62.svg')
                  h4.text-white.mb-3 Alcance
                  p.text-white.mb-0 Funciones, componentes y escenarios incluidos en la validación.

                .tarjeta.bg-color-7.p-4.h-100
                  .row.justify-content-center.mb-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/63.svg')
                  h4.text-white.mb-3 Metodología
                  p.text-white.mb-0 Procedimientos utilizados y criterios de aceptación establecidos.

                .tarjeta.bg-color-7.p-4.h-100
                  .row.justify-content-center.mb-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/64.svg')
                  h4.text-white.mb-3 Configuración evaluada
                  p.text-white.mb-0 Características del entorno, los clientes y los autenticadores utilizados.

                .tarjeta.bg-color-7.p-4.h-100
                  .row.justify-content-center.mb-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/65.svg')
                  h4.text-white.mb-3 Resultados
                  p.text-white.mb-0 Pruebas aprobadas, no aprobadas, bloqueadas o pendientes de análisis.

                .tarjeta.bg-color-7.p-4.h-100
                  .row.justify-content-center.mb-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/66.svg')
                  h4.text-white.mb-3 Hallazgos y limitaciones
                  p.text-white.mb-0 Fallos identificados, riesgos asociados y restricciones del laboratorio.

                .tarjeta.bg-color-7.p-4.h-100
                  .row.justify-content-center.mb-4
                    .col-8
                      img(src='@/assets/curso/temas/t1/67.svg')
                  h4.text-white.mb-3 Conclusiones y recomendaciones
                  p.text-white.mb-0 Valoración general del mecanismo y acciones propuestas para mejorar su seguridad.

      p.mb-5(data-aos='fade-right') Esta estructura permite relacionar los requisitos con las pruebas ejecutadas y sus evidencias. Asimismo, fortalece la documentación técnica del proceso, al demostrar en qué medida el mecanismo cumple los criterios definidos e identificar los aspectos que requieren ajustes.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Identificación de limitaciones y fallos de configuración

      p.mb-5(data-aos='fade-right') Durante la validación es importante distinguir entre las limitaciones del proceso y los fallos de configuración, ya que ambos influyen en la interpretación de los resultados, pero no tienen el mismo significado.

      .titulo-sexto.color-acento-botones.mb-4(data-aos='fade-right')
        h4.mb-0 Limitaciones de la validación

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-8.p-3.p-sm-4.p-md-5.mb-5.br-3.br-4(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block.br-4(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/68.png')})`}"
        )
        .bloque-texto-g__texto.p-4.p-md-5.d-flex.flex-column
          p.mb-0 Las limitaciones son condiciones que restringen el alcance de las conclusiones, sin que necesariamente indiquen una falla del mecanismo. Por ejemplo, si las pruebas se realizan con un único navegador o un solo tipo de autenticador, los resultados no pueden generalizarse automáticamente a todas las plataformas. De igual manera, es posible que no se evalúe el mecanismo de #[i attestation] porque no forma parte de los requisitos del caso de uso.

      p.mb-5(data-aos='fade-right') Estas condiciones deben registrarse en el informe para establecer con claridad qué aspectos fueron comprobados y cuáles requieren pruebas adicionales. De este modo, se evita presentar una validación parcial como una garantía universal de seguridad.

      .titulo-sexto.color-acento-botones.mb-4(data-aos='fade-right')
        h4.mb-0 Fallos de configuración

      p.mb-3(data-aos='fade-right') Los fallos de configuración corresponden a desviaciones respecto de los requisitos de seguridad establecidos. Entre los ejemplos se encuentran la aceptación de un origen no autorizado, la reutilización de #[i challenges], el uso de credenciales desactivadas, la omisión de la verificación de firmas o el almacenamiento de información innecesaria.
      p.mb-5(data-aos='fade-right') Cada hallazgo debe documentarse de manera precisa e incluir, como mínimo, los siguientes elementos:

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span #[b a]
              p.mb-0 #[b Condición identificada:] descripción del comportamiento que incumple el requisito.
            li.d-flex
              .lista-ol--cuadro__vineta
                span #[b b]
              p.mb-0 #[b Evidencia:] registro o resultado que permite comprobar el hallazgo.
            li.d-flex
              .lista-ol--cuadro__vineta
                span #[b c]
              p.mb-0 #[b Impacto:] consecuencia potencial o comprobada sobre la seguridad y el funcionamiento.
            li.d-flex
              .lista-ol--cuadro__vineta
                span #[b d]
              p.mb-0 #[b Recomendación:] acción propuesta para corregir el problema o reducir el riesgo.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/69.png')

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/70.svg')
        .col-sm-12.col-lg-11
          .bg-color-2.p-4.mb-0
            p.mb-0 Por ejemplo, en lugar de indicar únicamente que “existe un problema de seguridad”, el informe debe especificar que el sistema acepta un challenge previamente utilizado, presentar la evidencia de la prueba y explicar cómo este comportamiento podría permitir la aceptación de una respuesta fuera del contexto esperado. Esta precisión facilita la comprensión del riesgo y orienta la implementación de medidas correctivas.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Formulación de recomendaciones de seguridad

      p.mb-3(data-aos='fade-right') Las recomendaciones de seguridad deben derivarse de los hallazgos identificados y proponer acciones concretas, verificables y acordes con el nivel de riesgo. Su finalidad es corregir las deficiencias detectadas, fortalecer los controles existentes y prevenir la repetición de los problemas.
      p.mb-5(data-aos='fade-right') Algunos ejemplos de recomendaciones según el hallazgo son los siguientes:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t1/71.svg')
            h4.mb-3 Reutilización de #[i challenges]
            p.mb-0 Implementar su generación mediante un mecanismo criptográficamente seguro, establecer un periodo de validez y garantizar su invalidación después de su uso.

        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t1/72.svg')
            h4.mb-3 Debilidades en la recuperación de cuentas
            p.mb-0 Incorporar controles adicionales de verificación de identidad antes de restablecer el acceso o registrar una nueva credencial.

        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-md-0
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t1/73.svg')
            h4.mb-3 Exposición excesiva de información en los registros
            p.mb-0 Reducir los datos recopilados, excluir secretos y restringir los permisos de acceso a los archivos de registro (#[i logs]).

        .col-sm-12.col-md-6.col-lg-3
          .tarjeta--boton.color-primario.p-4.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t1/74.svg')
            h4.mb-3 Aceptación de credenciales revocadas
            p.mb-0 Verificar el estado de cada credencial antes de completar la autenticación y rechazar aquellas que ya no estén autorizadas

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/75.png')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/76.svg')
            .col-sm-12.col-lg-10
              p.mb-0 Para establecer el orden de implementación, las recomendaciones deben priorizarse según la gravedad del hallazgo, la probabilidad de explotación, el impacto potencial y el esfuerzo requerido para corregirlo. Los problemas que facilitan directamente la suplantación de identidad o el acceso no autorizado deben atenderse antes que las mejoras de carácter secundario.
          p.mb-0 Sin embargo, la seguridad debe complementarse con criterios de usabilidad y accesibilidad. Un mecanismo difícil de utilizar puede aumentar los errores, generar solicitudes frecuentes de recuperación o llevar a los usuarios a recurrir a alternativas menos seguras. Por ello, las recomendaciones deben buscar un equilibrio entre la protección de las cuentas, la facilidad de uso y la continuidad operativa.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-2.py-1 Estructura y contenido del informe de validación

      .bloque-texto-g.bg-color-6.p-3.p-sm-4.p-md-5.mb-5.br-1.br-2(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block.br-2(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/77.png')})`}"
        )
        .bloque-texto-g__texto.p-4.p-md-5.d-flex.flex-column
          p.mb-0 El informe de validación permite documentar de manera estructurada los resultados obtenidos durante las pruebas del mecanismo de autenticación, así como verificar el cumplimiento de los criterios de aceptación definidos. Para facilitar su elaboración, se presenta a continuación una estructura sugerida que orienta la organización de la información, la descripción de los hallazgos y el registro de las evidencias que respaldan el proceso de validación.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 7.] Estructura sugerida del informe de validación
      .tabla-a.t-cus.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-1 #[b Sección]
              th #[b Contenido esperado]
          tbody
            tr
              td #[b Propósito]
              td Descripción de lo que se busca comprobar y la finalidad de la validación.
            tr
              td #[b Alcance]
              td Servicios, funciones, navegadores, autenticadores y rutas evaluadas.
            tr
              td #[b Arquitectura evaluada]
              td Identificador de la parte confiable (RP ID), origen, flujos de registro y autenticación, y mecanismos de almacenamiento.
            tr
              td #[b Metodología]
              td Tipos de pruebas, criterios de aceptación y procedimientos para recopilar y gestionar evidencias.
            tr
              td #[b Resultados]
              td Resumen de los casos aprobados, no aprobados, bloqueados o no ejecutados.
            tr
              td #[b Hallazgos]
              td Descripción de los fallos de configuración identificados y las evidencias que los respaldan.
            tr
              td #[b Limitaciones]
              td Aspectos no evaluados y restricciones del entorno de laboratorio.
            tr
              td #[b Conclusiones]
              td Valoración general del mecanismo con respecto a los criterios de aceptación establecidos.
            tr
              td #[b Recomendaciones]
              td Acciones priorizadas para mejorar la seguridad y el funcionamiento del mecanismo.
            tr
              td #[b Anexos de evidencia]
              td Matriz de trazabilidad, capturas de pantalla y registros técnicos controlados que respaldan los resultados.
      p.mb-0 La redacción del informe debe ser objetiva y verificable. Las conclusiones se apoyan en resultados y no en percepciones. Si todos los casos relevantes se aprueban dentro del alcance, puede concluirse que el mecanismo satisface los criterios definidos para el laboratorio, aclarando limitaciones. Si existen fallas, la conclusión debe indicar qué aspectos impiden considerar cumplido el criterio y qué acciones se requieren antes de una nueva validación.
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
