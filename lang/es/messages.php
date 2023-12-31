<?php

return [
    'alerts' => [
        'reservation' => [
            'success' => 'Reservación creada.',
            'error' => 'Lo sentimos, no hay lugares disponibles, intente otra fecha.',
            'delete' => 'Tu reservación ha sido borrada.',
        ],
    ],

    'titles' => [
        'welcome' => 'Bienvenido a ' . env('FACILITY_NAME'),
        'reservation' => 'Crea una Reservación',
        'daypass' => '¡Qué Bueno Verte de Nuevo!',
        'nodaypass' => 'Por Favor Regrese Luego',
        'checkIn' => 'Registra tu Entrada',
        'language' => 'Selecciona un Lenguaje',
    ],

    'statements' => [
        'register' => 'Por favor, ingresa tu información para registrarte.',
        'checkIn' => 'Ingresa el correo electrónico que utilizaste para hacer tu reservación.',
        'daypass' => 'Presenta este pase en la entrada.',
        'nodaypass' => 'Parece que su fecha de reservación no es hoy, por favor vuelva el: ',
    ],

    'footers' => [
        'index' => [
            'language' => 'Want to switch languages?',
            'toLanguage' => 'Click Here!',
        ],

        'register' => [
            'reservation' => '¿Ya tienes una cuenta?',
            'toReservation' => 'Reserva un lugar!',
        ],

        'reservation' => [
            'register' => '¿Todavía no tienes una cuenta?',
            'toRegister' => 'Registrarse!',
        ],

        'checkIn' => [
            'reservation' => '¿Todavía no tienes una reservación?',
            'toReservation' => 'Reserva tu lugar!',
        ],
    ],

    'buttons' => [
        'register' => 'Registrarse',
        'book' => 'Reservar',
        'check' => 'Check In',
        'join' => 'Unirse',
        'reservation' => 'Hacer Reservación',
        'language' => 'Guardar',
        'accept' => 'Aceptar',
        'delete' => 'Borrar?',
    ],

    'labels' => [
        'register' => [
            'firstName' => 'Nombre',
            'lastName' => 'Apellido',
            'email' => 'Correo Electrónico',
            'birthDate' => 'Fecha de Nacimiento',
            'contactName' => 'Nombre de Contacto de Emergencia',
            'contactNumber' => 'Teléfono de Contacto de Emergencia',
            'picture' => 'Sube tu Foto',
        ],

        'reservation' => [
            'email' => 'Ingresa el Correo de tu Cuenta',
            'date' => 'Selecciona una Fecha',
        ],
    ],

    'redirect' => [
        'register' => [
            'success' => 'Tu usuario ha sido creado.',
            'error' => 'Lo siento, algo salió mal. Inténtalo de nuevo.',
        ],
    ],

    'validation' => [
        'checkReservation' => [
            'email' => 'No hay ninguna reservación asociada a este correo electrónico.',
        ],

        'storeReservationRequest' => [
            'email' => 'Este correo electrónico no está asociado con una cuenta registrada.',
            'date' => 'Selecciona una fecha en el futuro y dentro de este mes.',
        ],

        'storeUserRequest' => [
            'first_name' => 'Ingresa un nombre válido.',
            'last_name' => 'Ingresa un apellido válido.',
            'email' => 'Ingresa una dirección de correo electrónico válida.',
            'date_of_birth' => 'Ingresa una fecha de nacimiento válida.',
            'emergency_contact_name' => 'Ingresa un nombre válido.',
            'emergency_contact_number' => 'Ingresa un número de teléfono válido.',
            'photo' => 'Selecciona una fotografía tuya.',
        ],
    ],

    'termsAndConditions' => [
        'texts' => [
            'welcome' => 'Bienvenido/a a ' . env('FACILITY_NAME'),
            'statement' => 'Al acceder y utilizar nuestras instalaciones de escalada, aceptas cumplir con las siguientes reglas y condiciones.',
            'statement2' => 'Actualmente estamos en proceso de implementar nuevos sistemas de pago. Mientras tanto, todos los pagos se realizan en efectivo en la entrada.',
            'statement3' => 'El costo por persona es de $10.00 e incluye la entrada al parque de escalada para hacer uso de todas las rutas disponibles.',
            'f1' => env('FACILITY_NAME') . ' y sus asociados no asumen ninguna responsabilidad por lesiones o accidentes que puedan ocurrir durante las sesiones de escalada.',
            'f2' => 'Te informamos que violar alguna de estas reglas puede resultar en una multa de $15.00 o la prohibición indefinida de la persona en nuestras instalaciones de escalada.',
            'f3' => env('FACILITY_NAME') . ' se reserva el derecho de negar la entrada o participación a cualquier persona considerada no apta o que viole las reglas del establecimiento.',
            'f4' => 'La escalada implica riesgos inherentes, incluido el riesgo de lesiones. Al participar en actividades de escalada en ' . env('FACILITY_NAME') . ', reconoces y aceptas estos riesgos.',
        ],

        'terms' => [
            'rule_1' => 'Reglas de Escalada',
            'rule_2' => 'Reglas de Escalada',
            'rule_3' => 'Reglas de Escalada',
            'rule_4' => 'Reglas de Escalada',
            'rule_5' => 'Medidas de Seguridad',
            'rule_6' => 'Medidas de Seguridad',
            'rule_7' => 'Medidas de Seguridad',
            'rule_8' => 'Medidas de Seguridad',
            'rule_9' => 'Acciones Prohibidas',
            'rule_10' => 'Objetos Personales',
            'rule_11' => 'Ingreso',
        ],

        'conditions' => [
            'rule_1' => 'No alterar ni modificar las rutas o agarres de escalada.',
            'rule_2' => 'No está permitido taladrar o colocar cualquier tipo de anclaje en el parque.',
            'rule_3' => 'No está permitido pasar la cuerda directamente por los anclajes para escalar en top-rope.',
            'rule_4' => 'Respetar las áreas designadas para la escalada, así como la flora y fauna.',
            'rule_5' => 'Siempre utilizar el equipo adecuado y completo para escalada.',
            'rule_6' => 'Utilizar arneses de seguridad y cuerdas en todo momento durante las sesiones de escalada.',
            'rule_7' => 'Los participantes deben estar físicamente preparados y mentalmente listos para las actividades de escalada.',
            'rule_8' => 'Los menores de 18 años deben estar acompañados y supervisados en todo momento por un adulto responsable.',
            'rule_9' => 'No está permitido fumar ni consumir bebidas alcohólicas en las áreas de escalada.',
            'rule_10' => env('FACILITY_NAME') . ' no se hace responsable de pérdidas o daños a objetos personales.',
        ],

        'buttons' => [
            'show' => 'Terminos y Condiciones',
            'decline' => 'Declinar',
        ],
    ],
    'delete' => [
        'footer' => [
            'question' => '¿Tiene algún problema con su reservación?',
            'followup' => 'Puede eliminarla aquí y programar otra en su lugar.',
        ],
    ],
];
