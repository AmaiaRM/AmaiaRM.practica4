function loadOptions() {
    // Carga el archivo JSON
    fetch('api/api/barrios.json')
      .then(response => response.json())
      .then(data => {
        // Obtiene el elemento select del HTML
        const select = document.getElementById('mySelect');
  
        // Crea una opción de select para cada objeto en el arreglo
        data.forEach(item => {
          const option = document.createElement('option');
          option.value = item.id;
          option.text = item.name;
          select.appendChild(option);
          const selectedBarrio = select.value;
          loadHoteles(selectedBarrio);
        });
        // Agrega un evento "change" para el primer menú desplegable
      select.addEventListener('change', function() {
        // Obtiene el valor seleccionado del primer menú desplegable
        const selectedBarrio = select.value;
        // Llama a la función para cargar las opciones del segundo menú desplegable
        loadHoteles(selectedBarrio);
      });
    })
    .catch(function(error) {
      console.error('Error al obtener los datos:', error);
    });

  }



  function loadHoteles(barrioId) {
    const dir = 'api/api/barrios/'+ barrioId ;
    // Carga el archivo JSON
    fetch(dir)
    .then(response => response.json())
    .then(data => {
      const select = document.getElementById('mySelect_hoteles');
      // Elimina todas las opciones anteriores del segundo menú desplegable
      select.innerHTML = '';
      data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.text = item.name;
        select.appendChild(option);
        const selectedHotel = select.value;
        cargarAtributos(selectedHotel);
      });
      select.addEventListener('change', function() {
        // Obtiene el valor seleccionado del primer menú desplegable
        const selectedHotel = select.value;
        // Llama a la función para cargar las opciones del segundo menú desplegable
        cargarAtributos(selectedHotel);
      });
    })
    .catch(function(error) {
      console.error('Error al obtener los datos:', error);
    });
}

function cargarAtributos(hotelId){
  const dir = 'api/api/hoteles/'+ hotelId ;
  fetch(dir)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var tabla = document.getElementById('tabla_datos');
      var tbody = tabla.querySelector('tbody');
      tbody.innerHTML = '';

      var datos = [
        { atributo: "Nombre", valor: data.name },
        { atributo: "P.web", valor: data.url },
        { atributo: "Direccion", valor: data.address },
        { atributo: "Tlfn.", valor: data.phone },
        { atributo: "Foto", valor: data.photo }
      ];
      //select.innerHTML = '';
      datos.forEach(function(dato) {
        var fila = document.createElement('tr');       

        if (dato.atributo === "Foto") {
          fila.innerHTML = '<td>' + dato.atributo + '</td>' +
                           '<td><img src= "' + dato.valor + '" alt="imagen"></td>';
        } else {
          fila.innerHTML = '<td>' + dato.atributo + '</td>' +
                           '<td>' + dato.valor + '</td>';
        }
        tbody.appendChild(fila);
      });
      
      tabla.classList.add('vertical-table');
    })
    .catch(function(error) {
      console.error('Error al obtener los datos:', error);
    });
}

window.onload = function() {
    loadOptions();
  };