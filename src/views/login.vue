<template>

  <div class="Login">
    <h1>SIGN IN</h1>
     <br>
      <br>
            <div class="d-grid gap-2 col-3 mx-auto">
                <label for="exampleFormControlInput1" class="form-label">Username</label>
                    <input type="username" class="form-control" id="exampleFormControlInput1" placeholder="username">
            </div>
             <br>
            <div class="d-grid gap-2 col-3 mx-auto">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password">
            </div>
        <br>
        <div>
           <router-link to="/Homenewpage"><button type="button" class="btn btn-outline-info">Login</button></router-link>
        </div>

  </div>
</template>

