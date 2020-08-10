<template>
  <div class="prueba">
    <p>Mi primer componente en Vue</p>
    {{ miVariable }}
    <ul v-if="condition">
      <li>Todo este elemento no se va a mostrar</li>
      <li>Todo lo que haya dentro de la lista no se muestra</li>
    </ul>
    <p v-else-if="list.length !== 0 && list[0] === 0">Este mensaje si se muestra</p>
    <p v-else>Este mensaje no se muestra porque se cumple la condición</p>
    <p v-show="condition">Este mensaje no se va a mostrar</p>
    <p>Este mensaje si que se va a mostrar</p>
    <ul class="list">
      <!-- Dentro del v-for lo que hago es recorrer el array de objetos, 
      en este caso entre paréntesis pongo (item, i). Estos son los nombres 
      que yo he decidido para estas variables, pero tu puedes poner los que 
      quieras. Veamos qué se guarda en las variables:

      -“item” es el nombre que le he puesto a la variable que contendrá 
      cada uno de los items, a medida que avanza el bucle este valor va 
      cambiando para que lo puedas pintar.
      -“i” es el nombre que le he puesto a la variable contador, es decir, 
      en cada paso del bucle esta variable contendrá el número del item 
      que se está pintando, es decir, para el primer elemento “i” vale 0, 
      para el segundo vale 1 etc.
      Otro detalle a tener en cuenta en los bucles es la key. Vue recomienda 
      que siempre con el bucle for se utilice una key que sea única para cada 
      item del bucle. Lo que hago es crear la key con el valor de la variable 
      “i” del contador para que cada item tenga una key única. Esto sirve
      para que Vue pueda identificar correctamente cada item del bucle. :key="i"
      -->
      <li v-for="(item, i) in elements" :key="i">
        ID: {{item.id}} - {{item.name}} | childrens:
        <span
          v-for="(children, j) in item.childrens"
          :key="'child' + j"
        >{{children}},</span>
      </li>
    </ul>
    <img :src="source" :class="myClass + '-active'">
    
    <img :src="source" :class="{active: isActive, danget: isDanger}">
    <div :style="styleObject"></div>
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data: () => ({
    miVariable: "Hola de nuevo",
    condition: false,
    list: [0, 2, 3, 4, 5],
    elements: [
      { name: "Elemento 1", id: 1, childrens: [1, 3, 4] },
      { name: "Elemento 2", id: 2, childrens: [3, 5, 5] },
      { name: "Elemento 3", id: 3, childrens: [5, 7, 3] }
    ],
    source: "https://i.imgur.com/BBcy6Wc.jpg",
    myClass: {
      active: true,
      "text-danger": false
    },
    isActive: true,
    isDanger: false,
    styleObject: {
      background: "red",
      width: "300px",
      height: "30px",
      fontSize: "13px"
    }
  })
};
</script>