<template>
  <div class="test">
    test
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

// interface ITest {
//   [propName: string]: any;
// }


export default class HelloWorld extends Vue {
  msg!: String
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.test{
  color: red;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
