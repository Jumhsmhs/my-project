<template>

  <div class="createaccount">
    <h1>SIGN UP</h1>
      <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Username</label>
         <input type="username" class="form-control" id="exampleFormControlInput1" placeholder="username">
      </div>
      <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">E-mail</label>
         <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@mail.com">
      </div>
      <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Password</label>
         <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password">
      </div>
      <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Repeat Password</label>
         <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Repeat Password">
      </div>
    <div>
        <router-link to="/Login"><button type="button" class="btn btn-outline-info">Create Account</button></router-link>
        <!-- <button type="button" class="btn btn-outline-info" >Create Account</button> -->
    </div>
  </div>
    
   
</template>
