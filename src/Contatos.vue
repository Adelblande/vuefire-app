<template>
  <div id="app">
    <div class="container">
      <h1>{{ titulo }}</h1>
      <div>
        <form class="form-inline">
          <input type="text" class="form-control" v-model="nome" placeholder="Nome">
          <input type="text" class="form-control" v-model="telefone" placeholder="Telefone">
          <input type="text" class="form-control" v-model="email" placeholder="E-mail">
          <button id="btnIncluir" type="button" class="btn btn-outline-success" @click="incluir">Incluir</button>
          <span id="spanBTN" style="display:none">
            <button id="btnSalvar" type="button"   class="btn btn-outline-success" @click="Salvar();">Salvar</button>
            <button id="btnCancelar" type="button" class="btn btn-outline-danger" @click="Cancelar();">Cancelar</button>
            <input type="hidden" id="hidAlterar" value=""/>
          </span>
        </form>
      </div>
      <br>
      <div>
        <table class="table table-hover table-sm">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contato in contatos" :key="contato['.key']">
              <td>{{ contato.nome }}</td>
              <td>{{ contato.telefone }}</td>
              <td>{{ contato.email }}</td>
              <td>
                <button class="btn btn-outline-info" @click="montaAlterar(contato)">Alterar</button>
                <button class="btn btn-outline-danger" @click="excluir(contato)">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>  
    </div>
  </div>  
</template>

<script>
import {db} from './firebase'
import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
  name: 'app',
  data () {
    return {
      titulo: 'Contatos',
      contatos: [],
      nome: '',
      telefone: '',
      email: '',
      contatoAlt: ''
    }
  },
  validations: {
    nome: {
      required,
      minLength: minLength(3)
    },
    
    telefone: {
      required,
      minLength: minLength(8)
    },

  },
  created: function(){
    // console.log(this.contatos)
  },
  computed: {
    isValid() {
      return !this.$v.nome.$invalid && this.$v.nome.minLength && !this.$v.telefone.$invalid && this.$v.telefone.minLength
    }
  },
  methods: {
    incluir: function(){
      if(!this.isValid){
        alert("Preencha o nome corretamente");
        return false;
      }
      db.ref().child('contatos').push({nome: this.nome, telefone: this.telefone, email: this.email});
      this.nome = '';
      this.telefone = ''; 
      this.email = '';
      
    },
    Salvar: function() {
      db.ref().child('contatos/'+this.contatoAlt['.key']).update({nome: this.nome, telefone: this.telefone, email: this.email});
      document.getElementById('btnIncluir').style.display = "inline-block";
      document.getElementById('spanBTN').style.display = "none";
      this.contatoAlt = '';
      this.nome = '';
      this.telefone = '';
      this.email = '';
    },
    excluir: function(contato) {
      db.ref().child('contatos/'+contato['.key']).remove();
    },
    montaAlterar: function(contato) {
      this.contatoAlt = contato;
      this.nome = contato.nome;
      this.telefone = contato.telefone;
      this.email = contato.email;
      document.getElementById('btnIncluir').style.display = "none";
      document.getElementById('spanBTN').style.display = "inline-block";
    }, 
    Cancelar: function() {
      this.contatoAlt = '';
      this.nome = '';
      this.telefone = '';
      this.email = '';
      document.getElementById('btnIncluir').style.display = "inline-block";
      document.getElementById('spanBTN').style.display = "none";
    }
  },
  firebase: {
    contatos: {
      source: db.ref().child('contatos').orderByChild('nome'),
      cancelCallback(err){
        console.log(err)
      }
    }
  }
}
</script>

