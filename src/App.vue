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
              class="form-control"
              :value="userData.email"
              @input="userData.email = $event.target.value"
            >
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
            v-model="message" 
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
                v-model="language"
              > CSS
            </label>
            <label for="vue">
              <input 
                type="checkbox"
                name="vue"
                id="vue"
                value="vue"
                v-model="language"
              > VUE
            </label>
          </div>
          <div class="form-group"> Gender: 
            <label for="male">
              <input 
                type="radio"
                v-model="gender"
                id="male"
                value="Male"
              > Male
            </label>
            <label for="female">
              <input 
                type="radio"
                v-model="gender"
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
          <p style="white-space: pre">Message: {{ message }}</p>
          <p>For? </p>
          <ul>
            <li v-for="l in language">{{ l }}</li>
          </ul>
          <p>Gender: {{ gender }} </p>
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
      message: 'A new text',
      language: [],
      gender: 'Male',

    }
  },
}
</script>

<style>
 
</style>
