<template>

<div class="card" style="width: 30rem">
        <h1> FORMULARIO </h1>
<form>

  <div class="form-group">
    <label for="inputAddress">Nombre del alumno</label>
    <input type="text" class="form-control" id="inputName" placeholder="Nombre del alumno">
  </div>

  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputDía">Día</label>
          <input type="text" class="form-control" id="inputDay" placeholder="Ingresa el día">
    </div>
    
    <div class="form-group col-md-4">
      <label for="inputState">Mes</label>
      <select id="inputMonth" class="form-control">
        <option selected>Mes</option>
        <option>Enero</option>
        <option>Febrero</option>
        <option>Marzo</option>
        <option>Abril</option>
        <option>Mayo</option>
        <option>Junio</option>
        <option>Julio</option>
        <option>Agosto</option>
        <option>Septiembre</option>
        <option>Octubre</option>
        <option>Noviembre</option>
        <option>Diciembre</option>
        

      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip">Año</label>
      <select id="inputYear" class="form-control">
        <option selected>Año</option>
        <option>2000</option>
        <option>2001</option>
        <option>2002</option>
        <option>2003</option>
        <option>2004</option>
        <option>2005</option>
        <option>2006</option>
        <option>2007</option>
        <option>2008</option>
        <option>2009</option>
        <option>2010</option>
        <option>2011</option>
        <option>2012</option>
        <option>2013</option>
        <option>2014</option>
        <option>2015</option>
      </select>     
    </div>

        
    <div class="form-group col-md-4">
      <label for="inputZip">Motivo</label>
      <select id="inputYear" class="form-control">
        <option selected> ... </option>
        <option>Enfermedad</option>
        <option>Consulta Médica</option>
        <option>Motivos Familiares</option>
        <option>Otro</option>
      </select>
  </div>
  </div>
  <button type="submit" class="btn btn-danger"> Enviar </button>
</form>
</div>
<!-- <div>
    
</div> -->

</template>


