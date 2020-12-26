<template>

  <div class="Login">
    <h1>SIGN IN</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Username</label>
                    <input type="username" class="form-control" id="exampleFormControlInput1" placeholder="username">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password">
            </div>
        <div>
           <router-link to="/Homenewpage"><button type="button" class="btn btn-outline-info">Login</button></router-link>
        </div>
  </div>
</template>
