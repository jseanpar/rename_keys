const { renameKeysRecursive } = require('./renameKeys');


  let o = [
    {
        "codigo": 1,
        "id": 1,
        "asistencia": [
            {
                "asistencia": 58,
            }
        ],
        "asistencia_virtual": {
            "porcentaje": 55
        },
    },
    {
        "id": 2,
        "asistencia": [
            {
                "asistencia": 78,
            }
        ],
        "asistencia_virtual": {
            "porcentaje": 55
        },
    },
  ]; 

 const config = {
    asistencia: 'attendance',
    asistencia_virtual: 'virtual_attendance',
};
   o.push({config})
  //o.map((e) => { return e.config = config })
  
  console.log(JSON.stringify(renameKeysRecursive(o)));