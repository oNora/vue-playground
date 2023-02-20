<template>
    <form @submit.prevent="submitForm">
        <div class="forms-control">
            <label for="email">Your email</label>
            <input type="email" id="email" v-model.trim="email"/>
        </div>
        <div class="forms-control">
            <label for="message">Massage</label>
            <textarea rows="5" id="message" v-model.trim="message"></textarea>
        </div>
        <p class="errors" v-if="!formIsValid">Please enter a valid email & not empty message</p>
        <base-button>Submit</base-button>
    </form>
</template>

<!-- optional API -->
<!-- <script>
export default {
    data() {
        return {
            email: '',
            message: '',
            formIsValid: true,
        }
    },
    methods: {
        submitForm() {
            this.formIsValid = true;

            if(this.email === '' || !this.email.includes('@') || this.message === '') {
                this.formIsValid = false;
                return;
            }

            this.$store.dispatch('requests/msgCoach', {
                coachId: this.$route.params.id, 
                email: this.email,
                message: this.message
            });

            this.$router.replace('/coaches');
        }
    }
}

</script> -->


<!-- composition API -->
<script setup>

  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter, useRoute } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  const store = useStore();
  const email = ref('');
  const message = ref('')
  let formIsValid = ref(true);


  const submitForm = () => {
    formIsValid.value = true;

    if(email.value === '' || !email.value.includes('@') || message.value === '') {
        formIsValid.value = false;
        return;
    }

    store.dispatch('requests/msgCoach', {
        coachId: route.params.id, 
        email: email.value,
        message: message.value
    });

    router.replace('/coaches');
  }

</script>


<style scoped>

form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}</style>