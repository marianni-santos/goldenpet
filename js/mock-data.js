window.goldenPetMockData = {
    professionalProfiles: {
        maya: {
            name: 'Maya Santos',
            initials: 'MS',
            registration: 'CRMV-PR 12345',
            specialty: 'Clínico Geral e Oftalmologia',
            about: 'Experiência em atendimento clínico de cães e gatos, com foco em oftalmologia e prevenção de doenças.',
            rating: '4.9',
            reviewsCount: 128,
            reviews: [
                { author: 'Ana P.', text: 'Muito atenciosa e explicou todo o tratamento com calma.' },
                { author: 'Carlos M.', text: 'Meu cachorro ficou tranquilo durante toda a consulta.' }
            ]
        },
        otavio: {
            name: 'Otávio Silva',
            initials: 'OS',
            registration: 'CRMV-PR 23456',
            specialty: 'Clínico Geral e Oftalmologia',
            about: 'Atendimento cuidadoso para cães e gatos, com experiência em consultas oftalmológicas.',
            rating: '4.8',
            reviewsCount: 96,
            reviews: [
                { author: 'Marina R.', text: 'Foi muito cuidadoso e tirou todas as minhas dúvidas.' },
                { author: 'João V.', text: 'Atendimento excelente e muito tranquilo.' }
            ]
        },
        carla: {
            name: 'Carla Mendes',
            initials: 'CM',
            registration: 'CRMV-PR 34567',
            specialty: 'Dermatologia Veterinária',
            about: 'Especialista em cuidados dermatológicos e tratamentos para alergias em animais.',
            rating: '4.9',
            reviewsCount: 112,
            reviews: [
                { author: 'Paula S.', text: 'Explicou o tratamento de forma clara e cuidadosa.' },
                { author: 'Rafael L.', text: 'Minha gata melhorou bastante depois do atendimento.' }
            ]
        },
        lucas: {
            name: 'Lucas Almeida',
            initials: 'LA',
            registration: 'CRMV-PR 45678',
            specialty: 'Clínico Geral',
            about: 'Atendimento clínico para cães e gatos, com foco em prevenção e acompanhamento de rotina.',
            rating: '4.8',
            reviewsCount: 84,
            reviews: [
                { author: 'Fernanda G.', text: 'Foi muito atencioso e explicou cada etapa da consulta.' },
                { author: 'Diego P.', text: 'Consulta completa e atendimento muito cuidadoso.' }
            ]
        },
        beatriz: {
            name: 'Beatriz Costa',
            initials: 'BC',
            registration: 'CRMV-PR 56789',
            specialty: 'Cardiologia Veterinária',
            about: 'Especialista em avaliação cardíaca, prevenção e acompanhamento de doenças cardiovasculares.',
            rating: '4.9',
            reviewsCount: 73,
            reviews: [
                { author: 'Marcos V.', text: 'A Dra. Beatriz foi precisa e muito cuidadosa com meu cachorro.' },
                { author: 'Julia F.', text: 'Explicou os exames com clareza e passou muita segurança.' }
            ]
        },
        renato: {
            name: 'Renato Martins',
            initials: 'RM',
            registration: 'CRMV-PR 67890',
            specialty: 'Ortopedia Veterinária',
            about: 'Atuação em ortopedia, reabilitação e cuidados para melhorar a mobilidade dos animais.',
            rating: '4.7',
            reviewsCount: 65,
            reviews: [
                { author: 'Camila N.', text: 'O Dr. Renato avaliou meu pet com muita atenção.' },
                { author: 'Pedro A.', text: 'Recebemos orientações claras para a recuperação.' }
            ]
        },
        juliana: {
            name: 'Juliana Rocha',
            initials: 'JR',
            registration: 'CRMV-PR 78901',
            specialty: 'Odontologia Veterinária',
            about: 'Cuidados odontológicos preventivos e tratamentos para a saúde bucal de cães e gatos.',
            rating: '4.9',
            reviewsCount: 91,
            reviews: [
                { author: 'Aline C.', text: 'Minha gata foi tratada com muito carinho durante toda a consulta.' },
                { author: 'Bruno T.', text: 'Atendimento excelente e orientações muito úteis.' }
            ]
        }
    },
    availabilityByDate: {
        '2026-07-26': [
            { id: 'maya', name: 'Maya Santos', specialtyId: 'oftalmologia', specialty: 'Oftalmologista', times: ['14:00', '16:00'] }
        ],
        '2026-07-27': [
            { id: 'maya', name: 'Maya Santos', specialtyId: 'oftalmologia', specialty: 'Oftalmologista', times: ['14:00', '16:00'] },
            { id: 'otavio', name: 'Otávio Silva', specialtyId: 'oftalmologia', specialty: 'Oftalmologista', times: ['11:00', '13:30', '16:00'] },
            { id: 'lucas', name: 'Lucas Almeida', specialtyId: 'clinico-geral', specialty: 'Clínico geral', times: ['09:00', '15:00'] },
            { id: 'beatriz', name: 'Beatriz Costa', specialtyId: 'cardiologia', specialty: 'Cardiologista', times: ['10:00', '16:30'] },
            { id: 'renato', name: 'Renato Martins', specialtyId: 'ortopedia', specialty: 'Ortopedista', times: ['08:30', '14:30'] },
            { id: 'juliana', name: 'Juliana Rocha', specialtyId: 'odontologia', specialty: 'Odontologista veterinária', times: ['11:30', '17:00'] }
        ],
        '2026-07-28': [
            { id: 'maya', name: 'Maya Santos', specialtyId: 'oftalmologia', specialty: 'Oftalmologista', times: ['09:00', '15:00'] },
            { id: 'carla', name: 'Carla Mendes', specialtyId: 'dermatologia', specialty: 'Dermatologista', times: ['10:30', '14:00'] },
            { id: 'beatriz', name: 'Beatriz Costa', specialtyId: 'cardiologia', specialty: 'Cardiologista', times: ['09:30', '13:00'] },
            { id: 'renato', name: 'Renato Martins', specialtyId: 'ortopedia', specialty: 'Ortopedista', times: ['11:00', '16:00'] }
        ],
        '2026-07-29': [
            { id: 'otavio', name: 'Otávio Silva', specialtyId: 'oftalmologia', specialty: 'Oftalmologista', times: ['08:30', '13:30'] },
            { id: 'lucas', name: 'Lucas Almeida', specialtyId: 'clinico-geral', specialty: 'Clínico geral', times: ['10:00', '14:00'] },
            { id: 'juliana', name: 'Juliana Rocha', specialtyId: 'odontologia', specialty: 'Odontologista veterinária', times: ['09:30', '15:30'] }
        ],
        '2026-07-30': [],
        '2026-07-31': [
            { id: 'carla', name: 'Carla Mendes', specialtyId: 'dermatologia', specialty: 'Dermatologista', times: ['09:00', '11:00', '15:30'] },
            { id: 'lucas', name: 'Lucas Almeida', specialtyId: 'clinico-geral', specialty: 'Clínico geral', times: ['08:00', '13:00'] },
            { id: 'beatriz', name: 'Beatriz Costa', specialtyId: 'cardiologia', specialty: 'Cardiologista', times: ['10:30', '16:00'] }
        ],
        '2026-08-01': [
            { id: 'maya', name: 'Maya Santos', specialtyId: 'oftalmologia', specialty: 'Oftalmologista', times: ['10:00', '16:00'] },
            { id: 'renato', name: 'Renato Martins', specialtyId: 'ortopedia', specialty: 'Ortopedista', times: ['09:00', '14:00'] },
            { id: 'juliana', name: 'Juliana Rocha', specialtyId: 'odontologia', specialty: 'Odontologista veterinária', times: ['11:00', '15:00'] }
        ],
        '2026-08-02': [
            { id: 'lucas', name: 'Lucas Almeida', specialtyId: 'clinico-geral', specialty: 'Clínico geral', times: ['08:30', '12:00'] },
            { id: 'carla', name: 'Carla Mendes', specialtyId: 'dermatologia', specialty: 'Dermatologista', times: ['14:00', '16:30'] },
            { id: 'beatriz', name: 'Beatriz Costa', specialtyId: 'cardiologia', specialty: 'Cardiologista', times: ['09:30', '15:00'] }
        ],
        '2026-08-03': [
            { id: 'maya', name: 'Maya Santos', specialtyId: 'oftalmologia', specialty: 'Oftalmologista', times: ['09:00', '13:30'] },
            { id: 'renato', name: 'Renato Martins', specialtyId: 'ortopedia', specialty: 'Ortopedista', times: ['10:00', '16:00'] },
            { id: 'juliana', name: 'Juliana Rocha', specialtyId: 'odontologia', specialty: 'Odontologista veterinária', times: ['11:30', '17:00'] }
        ],
        '2026-08-04': [
            { id: 'otavio', name: 'Otávio Silva', specialtyId: 'oftalmologia', specialty: 'Oftalmologista', times: ['08:00', '14:30'] },
            { id: 'lucas', name: 'Lucas Almeida', specialtyId: 'clinico-geral', specialty: 'Clínico geral', times: ['10:30', '15:30'] },
            { id: 'carla', name: 'Carla Mendes', specialtyId: 'dermatologia', specialty: 'Dermatologista', times: ['09:30', '13:00'] }
        ],
        '2026-08-05': [
            { id: 'beatriz', name: 'Beatriz Costa', specialtyId: 'cardiologia', specialty: 'Cardiologista', times: ['08:30', '14:00'] },
            { id: 'renato', name: 'Renato Martins', specialtyId: 'ortopedia', specialty: 'Ortopedista', times: ['11:00', '16:30'] },
            { id: 'juliana', name: 'Juliana Rocha', specialtyId: 'odontologia', specialty: 'Odontologista veterinária', times: ['09:00', '15:00'] }
        ],
        '2026-08-06': [
            { id: 'maya', name: 'Maya Santos', specialtyId: 'oftalmologia', specialty: 'Oftalmologista', times: ['10:00', '16:00'] },
            { id: 'lucas', name: 'Lucas Almeida', specialtyId: 'clinico-geral', specialty: 'Clínico geral', times: ['09:30', '13:30'] },
            { id: 'beatriz', name: 'Beatriz Costa', specialtyId: 'cardiologia', specialty: 'Cardiologista', times: ['11:00', '17:00'] }
        ],
        '2026-08-07': [
            { id: 'carla', name: 'Carla Mendes', specialtyId: 'dermatologia', specialty: 'Dermatologista', times: ['08:30', '12:30'] },
            { id: 'renato', name: 'Renato Martins', specialtyId: 'ortopedia', specialty: 'Ortopedista', times: ['10:00', '15:30'] },
            { id: 'juliana', name: 'Juliana Rocha', specialtyId: 'odontologia', specialty: 'Odontologista veterinária', times: ['13:00', '16:30'] }
        ],
        '2026-08-08': [
            { id: 'otavio', name: 'Otávio Silva', specialtyId: 'oftalmologia', specialty: 'Oftalmologista', times: ['09:00', '14:00'] },
            { id: 'lucas', name: 'Lucas Almeida', specialtyId: 'clinico-geral', specialty: 'Clínico geral', times: ['10:30', '16:00'] },
            { id: 'beatriz', name: 'Beatriz Costa', specialtyId: 'cardiologia', specialty: 'Cardiologista', times: ['11:30', '15:00'] }
        ]
    },
    completedServices: [
        {
            id: 'service-001',
            animal: 'Lily',
            service: 'Consulta',
            specialty: 'Oftalmologia',
            professional: 'Maya Santos',
            date: '26/07/2026',
            time: '14:00',
            protocol: '20261103-87452',
            summary: 'Avaliação oftalmológica de rotina.',
            exams: [
                { name: 'Exame oftalmológico', date: '26/07/2026', result: 'Sem alterações relevantes' },
                { name: 'Teste de Schirmer', date: '26/07/2026', result: 'Resultado dentro do esperado' }
            ],
            files: [
                { name: 'Laudo oftalmológico', type: 'PDF', size: '248 KB' },
                { name: 'Receita e orientações', type: 'PDF', size: '182 KB' }
            ],
            notes: 'Manter a higienização dos olhos uma vez ao dia e retornar em caso de vermelhidão ou secreção.'
        },
        {
            id: 'service-002',
            animal: 'Lily',
            service: 'Vacinação',
            specialty: 'Clínico geral',
            professional: 'Otávio Silva',
            date: '09/05/2026',
            time: '16:00',
            protocol: '20261103-87105',
            summary: 'Aplicação de vacina e acompanhamento preventivo.',
            exams: [
                { name: 'Avaliação clínica', date: '09/05/2026', result: 'Animal apto para vacinação' }
            ],
            files: [
                { name: 'Carteira de vacinação', type: 'PDF', size: '156 KB' },
                { name: 'Comprovante da vacina', type: 'PDF', size: '121 KB' }
            ],
            notes: 'Próxima dose recomendada para maio de 2027. Observe o animal nas próximas 24 horas.'
        }
    ]
};
