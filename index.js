const { renameKeys, MergeObjects, ExitsKey } = require('./mergeKeys');

const data0 = [{}];

const data1 = [
    {
        //"curso_id": 27614,
        "codigo": "LE401",
        "nombre": "Lenguaje Tarde 401",
        "sub_ramo": "Lenguaje Tarde",
        "sub_ramo_id": 559,
        "sub_ramo_codigo": "LE",
        "sede": "Brasil",
        "sede_id": 5,
        "asistencia": [
            {
                "sesiones": 59,
                "asistencia": 58,
                "porcentaje": 98,
                "fecha_matricula": "2020-11-06"
            }
        ],
        "asistencia_virtual": {
            "id": 1,
            "cantidad_total_materiales": 67,
            "cantidad_total_vistos": 37,
            "porcentaje": "55 %"
        },
        "asistencia_apoyo": {
            "id": 2,
            "cantidad_total_materiales": 78,
            "cantidad_total_vistos": 33,
            "porcentaje": "42 %"
        }
    },
    {
        "curso_id": 27622,
        "codigo": "MA401",
        "nombre": "Matemática Tarde 401",
        "sub_ramo": "Matemática Tarde",
        "sub_ramo_id": 560,
        "sub_ramo_codigo": "MA",
        "sede": "Brasil",
        "sede_id": 5,
        "asistencia": [
            {
                "sesiones": 59,
                "asistencia": 58,
                "porcentaje": 98,
                "fecha_matricula": "2020-11-06"
            }
        ],
        "asistencia_virtual": {
            "id": 1,
            "cantidad_total_materiales": 393,
            "cantidad_total_vistos": 230,
            "porcentaje": "59 %"
        },
        "asistencia_apoyo": {
            "id": 2,
            "cantidad_total_materiales": 169,
            "cantidad_total_vistos": 80,
            "porcentaje": "47 %"
        }
    },
    {
        "curso_id": 27626,
        "codigo": "BM401",
        "nombre": "Biología Mención Tarde 401",
        "sub_ramo": "Biología Mención Tarde",
        "sub_ramo_id": 555,
        "sub_ramo_codigo": "BM",
        "sede": "Brasil",
        "sede_id": 5,
        "asistencia": [
            {
                "sesiones": 57,
                "asistencia": 56,
                "porcentaje": 98,
                "fecha_matricula": "2020-11-06"
            }
        ],
        "asistencia_virtual": {
            "id": 1,
            "cantidad_total_materiales": 598,
            "cantidad_total_vistos": 339,
            "porcentaje": "57 %"
        },
        "asistencia_apoyo": {
            "id": 2,
            "cantidad_total_materiales": 260,
            "cantidad_total_vistos": 122,
            "porcentaje": "47 %"
        }
    },
    {
        "curso_id": 27634,
        "codigo": "FC401",
        "nombre": "Física Común Tarde 401",
        "sub_ramo": "Física Común Tarde",
        "sub_ramo_id": 557,
        "sub_ramo_codigo": "FC",
        "sede": "Brasil",
        "sede_id": 5,
        "asistencia": [
            {
                "sesiones": 31,
                "asistencia": 31,
                "porcentaje": 100,
                "fecha_matricula": "2020-11-06"
            }
        ],
        "asistencia_virtual": {
            "id": 1,
            "cantidad_total_materiales": 734,
            "cantidad_total_vistos": 418,
            "porcentaje": "57 %"
        },
        "asistencia_apoyo": {
            "id": 2,
            "cantidad_total_materiales": 336,
            "cantidad_total_vistos": 155,
            "porcentaje": "46 %"
        }
    },
    {
        "curso_id": 27635,
        "codigo": "QC401",
        "nombre": "Química Común Tarde 401",
        "sub_ramo": "Química Común Tarde",
        "sub_ramo_id": 561,
        "sub_ramo_codigo": "QC",
        "sede": "Brasil",
        "sede_id": 5,
        "asistencia": [
            {
                "sesiones": 27,
                "asistencia": 27,
                "porcentaje": 100,
                "fecha_matricula": "2020-11-06"
            }
        ],
        "asistencia_virtual": {
            "id": 1,
            "cantidad_total_materiales": 831,
            "cantidad_total_vistos": 463,
            "porcentaje": "56 %"
        },
        "asistencia_apoyo": {
            "id": 2,
            "cantidad_total_materiales": 419,
            "cantidad_total_vistos": 193,
            "porcentaje": "46 %"
        }
    },
    {
        "curso_id": 29102,
        "codigo": "CS402",
        "nombre": "Ciencias Sociales Tarde 402",
        "sub_ramo": "Ciencias Sociales Tarde",
        "sub_ramo_id": 556,
        "sub_ramo_codigo": "CS",
        "sede": "Brasil",
        "sede_id": 5,
        "asistencia": [
            {
                "sesiones": 34,
                "asistencia": 32,
                "porcentaje": 94,
                "fecha_matricula": "2021-06-30",
                "nose": [
                   { "asistencia": 40 } 
                ],
            }
        ],
        "asistencia_virtual": {
            "id": 1,
            "cantidad_total_materiales": 973,
            "cantidad_total_vistos": 527,
            "porcentaje": "54 %"
        },
        "asistencia_apoyo": {
            "id": 2,
            "cantidad_total_materiales": 491,
            "cantidad_total_vistos": 224,
            "porcentaje": "46 %"
        }
    }
]; 

const data2 = [{
        curso_id: '1',
        nombre: 'Lenguaje',
        sub_ramo: 'Lenguaje Tarde',
        asistencia: [
            {
                sesiones: 59,
                asistencia: 58,
               // porcentaje: 98,
            }
        ],
        asistencia_virtual: [{
            id: 1,
            cantidad_total_materiales: 67,
            //cantidad_total_vistos: 37,
            porcentaje: "55 %"
        }],
    },
    {
        curso_id: '2',
        nombre: "Matematicas",
        asistencia_apoyo: {
            "id": 2,
            //"cantidad_total_materiales": 491,
            "cantidad_total_vistos": 224,
            "porcentaje": "46 %"
        },
       // asistencia : '',
       // asistencia_virtual: '',
       // asistencia_apoyo: ''
        /*asistencia: [
            {
                sesiones: 59,
                asistencia: 58,
               // porcentaje: 98,
            }
        ],*/
    }]

const config = 
    {
        curso_id: '',
        codigo: '',
        nombre: '',
        sub_ramo: '',
        sub_ramo_id: '',
        sub_ramo_codigo: '',
        sede: '',
        sede_id: '',
    };

const configAsistencia = {
    sesiones: '',
    asistencia: '',
    porcentaje: '',
    fecha_matricula: ''
}

const configAsistenciaVirtual = {
    id: '',
    cantidad_total_materiales: '',
    cantidad_total_vistos: '',
    porcentaje: ''
}


const configAsistenciaApoyo = {
    id: '',
    cantidad_total_materiales: '',
    cantidad_total_vistos: '',
    porcentaje: ''
}

let resp = '';
let resp2 = '';
let resp3 = '';
let resp4 = '';
let obj = [];
let ob = '';
let build = [];
let att = ''
let v_att = ''
let s_att = ''

for (value in data2) {
    obj = data2[value];
    let hasAttendance = obj.hasOwnProperty('asistencia');
    let hasVirtualAttendance = obj.hasOwnProperty('asistencia_virtual');
    let hasSupportAttendance = obj.hasOwnProperty('asistencia_apoyo');
    resp = MergeObjects(obj, config);
     
    const isAtte = hasAttendance === false ? {} : obj.asistencia[value]
    let keyAtte = isAtte ? isAtte : obj.asistencia
    isObj =  (typeof keyAtte == 'object') ? keyAtte : keyAtte = {}
    att = ExitsKey(hasAttendance, isObj)
    resp2 = MergeObjects(att, configAsistencia);

    const isVirtualAtte = hasVirtualAttendance === false ? {} : obj.asistencia_virtual[value]
    let keyVirtAtte = isVirtualAtte ? isVirtualAtte : obj.asistencia_virtual
    isObj =  (typeof keyVirtAtte == 'object') ? keyVirtAtte : keyVirtAtte = {}
    v_att = ExitsKey(hasVirtualAttendance, isObj)
    resp3 = MergeObjects(v_att, configAsistenciaVirtual);

    const isSupportAtte = hasSupportAttendance === false ? {} : obj.asistencia_apoyo[value]
    let keySuppAtte = isSupportAtte ? isSupportAtte : obj.asistencia_apoyo
    isObj =  (typeof keySuppAtte == 'object') ? keySuppAtte : keySuppAtte = {}
    s_att = ExitsKey(hasSupportAttendance, isObj)
    resp4 = MergeObjects(s_att, configAsistenciaApoyo);

    ob = resp
    ob['asistencia'] = resp2
    ob['asistencia_virtual'] = resp3
    ob['asistencia_apoyo'] = resp4

    build.push(ob);

} 

 console.log(JSON.stringify(build));
 console.log(JSON.stringify(renameKeys(build)));


