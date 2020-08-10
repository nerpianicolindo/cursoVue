<template>
  <div class="content">
    {{calculate()}}
    {{calculate2()}} - {{calculate2()}} - {{calculate2()}}
    <button
      @click="calculate3()"
    >Calculate</button>
    {{double2}}
  </div>
</template>

<script>
let total = 0;
export default {
  data: () => ({
    value: 20
  }),
  methods: {
    calculate() {
      console.log(this.value * 5);
    },
    calculate2() {
      total++;
      return total;
    },
    calculate3() {
      let aux = this.value;
      console.log(this.double(aux));
    },
    double() {
      this.value = this.value * 2;
    },
    print() {
      console.log(this.value);
    },
    anotherPrint() {
      console.log("Esto es otro método, por el momento no se puede ejecutar");
    }
  },
  computed: {
    double2() {
      return this.value *2;
    }
  }
};
</script>