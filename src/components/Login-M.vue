<template>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1"> Nombre del Usuario </label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" v-model="username">
    <label for="exampleInputEmail1">Ingresa tu email</label>
    <input type="email" class="form-control" v-model="email"  placeholder="Email">
    <small id="emailHelp" class="form-text text-muted">Tu contraseña e email son intrasferibles</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Ingresa tu password</label>
    <input type="password" class="form-control" v-model ="password" placeholder="Password">
  </div>
  <button type="submit" class="px-5 btn btn-warning">Submit</button>
</form>
</template>

<script>
export default{
name: "Sing In",
data(){
  return{
    username:"",
    email:"",
    password:""
  };
},
methods:{
  handleSignInUser(){
    this.$store.dispatch("signinUser", {
      
    })
  }
}
}
</script>  
   
</template>
