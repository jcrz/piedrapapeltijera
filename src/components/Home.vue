<template>
  <div class="home">
    <h1>Piedra, papel o tijera</h1>
    <p>Selecciona una alternativa y ve si puedes ganarle al PC.</p>
    <button id="btn-piedra" @click="jugadaCon('piedra')">Piedra</button>
    <button id="btn-papel" @click="jugadaCon('papel')">Papel</button>
    <button id="btn-tijera" @click="jugadaCon('tijera')">Tijera</button>
    <h2>Tú: {{ jugada }} V/S {{ pc }} :PC </h2>
    <h4>Tú puntaje: {{ puntaje }}</h4>
    <button @click="reiniciar()">Comenzar denuevo</button>
  </div>
</template>

<script>
import { createRandomInteger } from "@/utils/jugada-radom-utils";

export default {
  name: 'Home',
  data: () => {
    return {
      jugada: '',
      pc: ''
    }
  },
  computed: {
    puntaje() {
      return this.$store.state.puntos
    }
  },
  methods: {
    jugadaCon: function(jugadaUsr) {
      const jugadaRdm = createRandomInteger();
      this.jugada = jugadaUsr;
      this.pc = jugadaRdm;
      if(jugadaUsr === 'piedra') {
        switch(jugadaRdm){
          case 'tijera':
            this.$store.commit("aumentaPje");
            break;
          case 'papel':
            this.$store.commit("disminuyePje");
            break;
        }
      } else if(jugadaUsr === 'papel') {
        switch(jugadaRdm){
          case 'piedra':
            this.$store.commit("aumentaPje");
            break;
          case 'tijera':
            this.$store.commit("disminuyePje");
            break;
        }
      } else if(jugadaUsr === 'tijera') {
        switch(jugadaRdm){
          case 'papel':
            this.$store.commit("aumentaPje");
            break;
          case 'piedra':
            this.$store.commit("disminuyePje");
            break;
        }
      }
    },
    reiniciar: function() {
      this.jugada = '';
      this.pc = '';
      this.$store.commit("reiniciar");
    },
  }
}
</script>

<style scoped>

</style>
