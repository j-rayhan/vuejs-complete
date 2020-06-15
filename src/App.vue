<template>
  <div class="container">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <form action="">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">E-mail:</label>
            <input 
              type="text"
              id="email"
              v-model.lazy="userData.email"
              class="form-control"
            >
            <p> {{ userData.email }} </p>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              v-model="userData.password" 
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label for="age">Age:</label>
            <input 
              type="number" 
              id="age" 
              v-model="userData.age" 
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea 
            name="message"
            id="message" 
            cols="30" 
            rows="5"
            class="form-control"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="css">
              <input 
                type="checkbox"
                name="css"
                id="css"
                value="css"
              > CSS
            </label>
            <label for="vue">
              <input 
                type="checkbox"
                name="vue"
                id="vue"
                value="vue"
              > VUE
            </label>
          </div>
          <div class="form-group"> Gender: 
            <label for="male">
              <input 
                type="radio"
                name="gender"
                id="male"
                value="Male"
              > Male
            </label>
            <label for="female">
              <input 
                type="radio"
                name="gender"
                id="female"
                value="Female"
              > Female
            </label>
          </div>
          <div class="form-group">
            <label for="priority">Priority:</label>
            <select 
              name="priority" 
              id="priority" 
              class="form-control"
            >
              <option value=""></option>
            </select>
          </div>
          <button 
          type="submit" 
          class="btn btn-primary">
            Submit
          </button>
      </form>
      <hr>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4>Your Data</h4>
        </div>
        <div class="panel-body">
          <p>Mail: {{ userData.email }} </p>
          <p>Password: {{ userData.password }}</p>
          <p>Age: {{ userData.age }} </p>
          <p>Message: </p>
          <p>For? </p>
          <ul>
            <li></li>
          </ul>
          <p>Gender: </p>
          <p>Priority: </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        email: '',
        password: '',
        age: 27
      },
    }
  },
}
</script>

<style>
 
</style>
