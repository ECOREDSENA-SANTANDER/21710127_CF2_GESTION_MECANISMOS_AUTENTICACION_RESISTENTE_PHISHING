export default {
  global: {
    Name: 'Configuración y validación de autenticación resistente al <i>phishing</i>.',
    Description:
      'Desarrolla capacidades para preparar entornos, registrar y verificar credenciales criptográficas, administrar su ciclo de vida y comprobar técnicamente su funcionamiento mediante pruebas funcionales y negativas. Integra principios de WebAuthn, FIDO2, protección de datos, trazabilidad y gestión de evidencias para fortalecer la implementación segura de mecanismos resistentes al <i>phishing</i>.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Preparación del entorno para autenticación resistente al <i>phishing</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Registro de credenciales de clave pública',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Almacenamiento de datos, privacidad y protección de información',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Implementación del flujo de autenticación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Credenciales resistentes al <i>phishing</i> y ciclo de vida',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Planeación de la validación del mecanismo de autenticación',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Pruebas negativas y resistencia al <i>phishing</i>',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Gestión de errores, privacidad y evidencia técnica',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Análisis de resultados e informe de validación',
            hash: 't_1_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Amenaza digital',
      significado:
        'situación que puede comprometer la seguridad de la información o los sistemas informáticos.',
    },
    {
      termino: 'Archivo adjunto',
      significado:
        'documento o fichero incluido en un mensaje que puede contener contenido malicioso.',
    },
    {
      termino: 'Ciberataque',
      significado:
        'acción dirigida a comprometer sistemas, dispositivos, redes o información digital.',
    },
    {
      termino: 'Ciberdelincuente',
      significado:
        'persona que utiliza medios digitales para cometer actividades ilícitas.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'principio de seguridad que busca impedir el acceso a la información por parte de personas no autorizadas.',
    },
    {
      termino: 'Credenciales',
      significado:
        'datos utilizados para verificar la identidad de una persona, como el nombre de usuario y la contraseña.',
    },
    {
      termino: 'Dominio',
      significado:
        'nombre que identifica un sitio web en internet y permite acceder a sus servicios.',
    },
    {
      termino: 'Enlace fraudulento',
      significado:
        'vínculo que dirige a una página engañosa o potencialmente peligrosa.',
    },
    {
      termino: 'Ingeniería social',
      significado:
        'técnica de manipulación que busca inducir a las personas a revelar información o realizar acciones que comprometen su seguridad.',
    },
    {
      termino: '<i>Malware</i>',
      significado:
        'programa informático diseñado para realizar acciones dañinas o no autorizadas en un dispositivo o sistema.',
    },
    {
      termino: 'Autenticación multifactor',
      significado:
        'mecanismo que requiere dos o más factores de verificación para confirmar la identidad de una persona.',
    },
    {
      termino: '<i>Phishing</i>',
      significado:
        'técnica de engaño mediante la cual se suplanta la identidad de una entidad o persona para obtener información confidencial o inducir acciones perjudiciales.',
    },
    {
      termino: '<i>Ransomware</i>',
      significado:
        'tipo de <i>malware</i> que bloquea el acceso a información o sistemas, generalmente para exigir un pago.',
    },
    {
      termino: 'Suplantación de identidad',
      significado:
        'acción de hacerse pasar por otra persona u organización para engañar a terceros.',
    },
    {
      termino: 'URL',
      significado:
        'dirección que permite localizar un recurso específico en internet, como una página web o un archivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bradley, J., Jones, M. B., Kumar, A., Lindemann, R., Verrept, J., & Waite, D. (Eds.). (14 de julio de 2025). Client to Authenticator Protocol (CTAP) 2.2 [Estándar propuesto]. FIDO Alliance.',
    },
    {
      referencia:
        'Furukawa, H., & Karino, T. (Eds.). (31 de mayo de 2024). Synced Passkey Deployment: Emerging Practices for Consumer Use Cases. FIDO Alliance.',
    },
    {
      referencia:
        'Saxe, D. H. (Ed.). (2023). FIDO Deploying Passkeys in the Enterprise - Introduction. FIDO Alliance.',
    },
    {
      referencia:
        'Temoshok, D., Fenton, J., Choong, Y.-Y., Lefkovitz, N., Regenscheid, A., Galluzzo, R., & Richer, J. (2025). Digital Identity Guidelines: Authentication and Authenticator Management (NIST Special Publication 800-63B-4). National Institute of Standards and Technology.',
    },
    {
      referencia:
        'Temoshok, D., Proud-Madruga, D., Choong, Y.-Y., Galluzzo, R., Gupta, S., LaSalle, C., Lefkovitz, N., & Regenscheid, A. (2025). Digital Identity Guidelines (NIST Special Publication 800-63-4). National Institute of Standards and Technology.',
    },
    {
      referencia:
        'World Wide Web Consortium. (8 de abril de 2021). Web Authentication: An API for accessing Public Key Credentials - Level 2 [Recomendación del W3C].',
    },
    {
      referencia:
        'World Wide Web Consortium. (25 de agosto de 2026). Web Authentication: An API for accessing Public Key Credentials - Level 3 [Recomendación del W3C].',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andres Bonza Reyes',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
