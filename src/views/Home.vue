<template>
  <div class="home-content">
    <h2 class="home-heading">Willkommen</h2>
    <span class="home-description">
      <p>
        Jetzt Mitglied werden
      </p>
      <form class="home-form" @submit.prevent="handleForm">
        <input v-model="newName" type="text" placeholder="Name" required style="margin: 0 0 .8rem 0;">
        <input v-model="newTelefonnummer" type="number" placeholder="Handynummer" required>
        <label for="telefonnummer">Hinterlasse deine Telefonnummer und wir melden uns bei dir!</label>
        <button class="btn" v-if="!formSubmitted">Abesenden</button>
        <div class="btn" style="transition-duration: 1s; background-color: transparent; color: var(--accent);" v-if="formSubmitted">Erfolgreich abgesendet!</div>
        </form>
    </span>
    <div class="home-image">
      <!-- <img src="../assets/images/maibaum.png" alt="Maibaum">   -->
    </div>
  </div>
</template>

<script setup>
  import "../assets/css/home.css";
  import { ref } from 'vue';
  import axios from "axios";

  const newTelefonnummer = ref("")
  const newName = ref("")
  let formSubmitted = false


const handleForm = () => {
  const id = Math.round(Math.random() * (1000000 - 1) + 1);
  const telefonnummer = newTelefonnummer.value;
  const name = newName.value;
  console.log(id, telefonnummer, name);
  const formData = { id: id, telefonnummer: telefonnummer, name: name}; 
  newTelefonnummer.value = "";
  newName.value = "";
  sendEmail(formData);
  formSubmitted = true;
  console.log("Email übergeben")
}

const resetSubmit = () => {
  setTimeout(() => {
    formSubmitted = false; 
  }, 10000)
}

const sendEmail = async (formData) => {
  try {
    const response = await axios.post('http://172.27.68.142:5000/send-email', formData);
    if (response.status === 200) {
      console.log("Übertragung erfolgreich");
      resetSubmit();
    }
    else {
      alert('Etwas ist schiefgelaufen.');
    }
  }
  catch (error) {
    console.error('Error: ', error);
    alert('Fehler aufgetreten.', error);
  }
}
</script>
