<template>
  <div class="grid grid-cols-3 flex h-screen flex-col">
    <div class="col-span-2">
      <div @click="selectItem" ref="canvas" id="myclick">
        <Div :items="obj.items" @custom-event="childEvents" />
      </div>
    </div>
    <div class="bg-stone-100 flex-1">
      <div class="container mt-4">
        <div class="row">
          <div class="col-12 d-flex justify-content-between mb-2">
            <button
              :disabled="selectedEnabled"
              @click.prevent="clearSelect"
              class="btn btn-info"
            >
              Clear Selected
            </button>
            <button
              :disabled="selectedEnabled"
              @click.prevent="deleteSelected"
              class="btn btn-info"
            >
              Delete Selected
            </button>
            <button
              :disabled="saveEnabled"
              @click.prevent="saveDocument"
              class="btn btn-info"
            >
              Save
            </button>
          </div>
          <div class="col-12 d-flex justify-content-between mb-2">
            <h1 class="font-bold">Element: {{ selected }}</h1>
            <button @click.prevent="appendDiv" class="btn btn-info">DIV</button>
          </div>
          
          <div class="col-12 d-flex justify-content-between mb-2">
            <h3 class="font-bold">Class</h3>
            <input
              class="w-full ml-4"
              :disabled="selectedEnabled"
              v-model="classes"
              v-on:keyup="update($event.target.value)"
              type="text"
              name="classes"
            />
          </div>
          <div class="col-12 d-flex justify-content-between">
            <h3 class="font-bold">HTML</h3>
            <textarea
              :disabled="selectedEnabled"
              class="m-2"
              v-model="markup"
              v-on:keyup="update($event.target.value)"
              rows="10"
              cols="140"
            >
            </textarea>
          </div>
          <div class="col-12 d-flex justify-content-between mt-4 mb-4">
            <h3 class="font-bold">Compiler</h3>
            <span>
              <input
                type="radio"
                id="css"
                name="language"
                v-model="obj.compiler"
                @change="changeCompiler()"
                value="CSS"
              />
              <label for="css">CSS</label>
            </span>
            <span>
              <input
                type="radio"
                id="less"
                name="language"
                v-model="obj.compiler"
                @change="changeCompiler()"
                value="LESS"
              />
              <label for="less">LESS</label>
            </span>
            <span>
              <input
                type="radio"
                id="scss"
                name="language"
                v-model="obj.compiler"
                @change="changeCompiler()"
                value="SCSS"
              />
              <label for="scss">SCSS</label>
            </span>
          </div>
          <div class="col-12 d-flex justify-content-between">
            <h3 class="font-bold">STYLE</h3>
            <textarea
              :disabled="selectedEnabled"
              class="m-2"
              v-model="styles"
              @change="update($event.target.value)"
              rows="10"
              cols="140"
            >
            </textarea>
              
          </div>
          <div class="col-12 d-flex justify-content-between">
            <span class="text-red-500">{{errors}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import Div from "@/Components/Div.vue";
import { router } from "@inertiajs/vue3";

const saveRef = ref(null);
const selectedRef = ref(true);
const selected = ref(null);
const classes = ref("");
const markup = ref("");
const styles = ref("");
const lessc = ref("");
const scss = ref("");
const compiler = ref("CSS");
const obj = ref({});
const errors = ref(null)

const saveEnabled = computed(() => saveRef.value);
const selectedEnabled = computed(() => selectedRef.value); 

const props = defineProps(["doc"]);

let layers = [];
let selIndex = 0;

const uuidv4 = () => {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
};

const compileLess = (uuid) => {
  less.render(styles.value).then(
    (output) => {
      css.value = output.css;
      lessc.value = styles.value;
      postCompiler();
    },
    function (error) {
      console.log(error.message);
      errors.value = error.message;
    }
  );
};

const compileScss = async (uuid) => {
  const sass = await import("https://jspm.dev/sass");
  try{
    var s = sass.compileString(styles.value);
    css.value = s.css;
    scss.value = styles.value;
  } catch(error){ 
    errors.value = error.message;
  }
  postCompiler();
};

const compileCss = () => {
  css.value = styles.value;
  postCompiler();
}

const scopeCSS = () => { 
  css.value = css.value.replace(
    /(^(?:\s|[^@{])*?|[},]\s*)(\/\/.*\s+|.*\/\*[^*]*\*\/\s*|@media.*{\s*|@font-face.*{\s*)*([.#]?-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?=[^}]*{)/g,
    `$1$2 #g-${selected.value} $3`
  );
};

const update = () => {
  switch (obj.value.compiler) {
    case "LESS":
      compileLess()
      break;
    case "SCSS":
      compileScss()
      break;
    default:
      compileCss()
  }
};

const postCompiler = () => {
  scopeCSS(); 
  if (selected.value) {
    updateTree(obj.value.items, {
      id: selected.value,
      html: markup.value,
      style: styles.value,
      css: css.value,
      scss: scss.value,
      less: lessc.value,
      cls: classes.value,
    });
  }
  checkChanges();
}

const deleteSelected = () => {
  deleteTree(obj.value.items, selected.value)
  checkChanges();
}

const checkChanges = () => { 
  saveRef.value = JSON.stringify(obj.value) != JSON.stringify(JSON.parse(props.doc.json)) ? false : true; 
}

const appendDiv = () => {
  const newUuid = uuidv4();
  appendTree(obj.value.items, selected.value, {
    id: newUuid,
    html: "",
    style: "",
    css: "",
    scss: "",
    less: "",
    class: "",
    items: [],
  });
  markup.value = styles.value = classes.value = "";
  selectedRef.value = false;
  selected.value = newUuid;
  checkChanges();
};

const updateTree = (o, i) => {
  for (var k in o) {
    if (o[k].id == i.id) {
      o[k].html = i.html;
      o[k].style = i.style;
      o[k].css = i.css;
      o[k].scss = i.scss;
      o[k].less = i.less;
      o[k].cls = i.cls;
      return;
    }
    if (o[k].items.length) {
      updateTree(o[k].items, i);
    }
  }
};

const deleteTree = (o, id) => {
  for (var k in o) {
    if (o[k].id == id) {
        o.splice(k, 1);
      return;
    }
    if (o[k].items.length) {
      deleteTree(o[k].items, id);
    }
  }
};

const appendTree = (o, p, i) => {
  if (p == null) {
    o.push(i);
    return;
  }
  for (var k in o) {
    if (o[k].id == p) {
      o[k].items.push(i);
      return;
    }
    if (o[k].items.length) {
      appendTree(o[k].items, p, i);
    }
  }
};

const setModels = (o, id) => {
  for (var k in o) {
    if (o[k].id == id) {
      markup.value = o[k].html;
      styles.value = o[k].style; 
      classes.value = o[k].cls; 
      return;
    }
    if (o[k].items.length) {
      setModels(o[k].items, id);
    }
  }
};

const clearSelect = (event) => {
  selected.value = null;
  markup.value = styles.value = "";
  selectedRef.value = true;
};

const changeCompiler = () => {
  update();
};

const selectItem = (event) => {
  layers = [];
  let elements = document.elementsFromPoint(event.clientX, event.clientY);
  for( var i in elements){
    if(elements[i].id && elements[i].id=="myclick"){
      break;
    }
    getParent(elements[i]);
  }
  selectedRef.value = false;
  selected.value = layers[Math.min(selIndex, layers.length-1)];
  setModels(obj.value.items, selected.value);
  selIndex++;
  if (selIndex >= layers.length) 
    selIndex = 0;
};

const saveDocument = () => {
  let json = JSON.stringify(obj.value);
  router.post("/document/store", {
    json: json,
    id: 1, // sorry just one document lol!
  });
  saveRef.value = true;
};

const getParent = (e) => {
  let p = null;
  do {
    if(e.id && e.id.substring(0,2) == "g-"){ 
      p = e;
      if(layers.indexOf(e.id.substring(2)) == -1)
        layers.push(e.id.substring(2));  
    }
    e = e.parentNode;
  }
  while (p == null)
}

const childEvents = (e) => { 
  // clicks from vue components 
}

onMounted(() => {
  obj.value = JSON.parse(props.doc.json);
  compiler.value = obj.value.compiler;
  checkChanges();
});
</script>

<style></style>
