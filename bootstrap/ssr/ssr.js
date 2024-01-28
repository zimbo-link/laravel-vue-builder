import { unref, useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, reactive, createSSRApp, h } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { Head, useForm, Link, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$6 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "About" }, null, _parent));
      _push(`<br><div class="text-blue-400">About page</div><!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "Form",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      title: "",
      description: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-3" }, _attrs))}><div class="row d-flex justify-content-center"><div class="col-md-6"><div class="card shadow px-4 py-4"><div class="d-flex justify-content-between"><h3>Create New Post</h3>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "btn btn-info"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back`);
          } else {
            return [
              createTextVNode(" Back")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><form><div class="mb-3"><label for="title" class="form-label">Title</label><input type="text"${ssrRenderAttr("value", unref(form).title)} class="form-control" id="title">`);
      if (unref(form).errors.title) {
        _push(`<small class="text-danger">${ssrInterpolate(unref(form).errors.title)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-3"><label for="description" class="form-label">Description</label><textarea id="description" cols="30" rows="5" class="form-control">${ssrInterpolate(unref(form).description)}</textarea>`);
      if (unref(form).errors.description) {
        _push(`<small class="text-danger">${ssrInterpolate(unref(form).errors.description)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="btn btn-info">Save</button></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Create.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: ["next", "prev", "totalPages", "current", "path"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "Page navigation example" }, _attrs))}><ul class="pagination"><li class="page-item">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "page-link",
        href: __props.prev ?? "",
        "aria-label": "Previous",
        disabled: __props.prev === null ? "true" : "false"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span aria-hidden="true"${_scopeId}>«</span>`);
          } else {
            return [
              createVNode("span", { "aria-hidden": "true" }, "«")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><!--[-->`);
      ssrRenderList(__props.totalPages, (page, index) => {
        _push(`<li class="${ssrRenderClass(page === __props.current ? "page-item active" : "page-item")}">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "page-link",
          href: __props.path + "?page=" + page
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(page)}`);
            } else {
              return [
                createTextVNode(toDisplayString(page), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><li class="page-item">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "page-link",
        href: __props.next ?? "",
        "aria-label": "Next",
        disabled: __props.next === null ? "true" : "false"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span aria-hidden="true"${_scopeId}>»</span>`);
          } else {
            return [
              createVNode("span", { "aria-hidden": "true" }, "»")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Table",
  __ssrInlineRender: true,
  props: ["posts"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><br><div class="container"><div class="row"><div class="col-12 d-flex justify-content-between mb-2"><h1 class="text-xl">Post Lists</h1><button class="btn btn-info">Create Post</button></div></div><div class="row"><div class="col-12"><table class="table table-bordered"><thead><tr><th>Id</th><th>Title</th><th>Description</th><th>Action</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.posts.data, (post) => {
        _push(`<tr><td>${ssrInterpolate(post.id)}</td><td>${ssrInterpolate(post.title)}</td><td>${ssrInterpolate(post.description)}</td><td style="${ssrRenderStyle({ "width": "200px" })}"><button class="btn btn-info">Edit</button><button class="btn btn-danger ms-2">Delete</button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="col-12"><div class="d-flex justify-content-end">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        next: __props.posts.next_page_url,
        prev: __props.posts.prev_page_url,
        totalPages: __props.posts.last_page,
        current: __props.posts.current_page,
        path: __props.posts.path
      }, null, _parent));
      _push(`</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Table.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Home",
  __ssrInlineRender: true,
  props: ["posts"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({ posts: __props.posts }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      email: "admin@example.com",
      password: "password"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Login" }, null, _parent));
      _push(`<br><div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-sm"><img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Your Company"><h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2></div><div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"><form class="space-y-6" method="POST"><div><label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label><div class="mt-2"><input id="email"${ssrRenderAttr("value", form.email)} type="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"><small class="text-red-600">${ssrInterpolate(_ctx.$page.props.errors.email)}</small></div></div><div><div class="flex items-center justify-between"><label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label><div class="text-sm"><a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a></div></div><div class="mt-2"><input id="password"${ssrRenderAttr("value", form.password)} type="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"><small class="text-red-600">${ssrInterpolate(_ctx.$page.props.errors.password)}</small></div></div><div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/login",
        method: "POST",
        as: "button",
        data: form,
        class: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign in`);
          } else {
            return [
              createTextVNode("Sign in")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About.vue": __vite_glob_0_0, "./Pages/Create.vue": __vite_glob_0_1, "./Pages/Home.vue": __vite_glob_0_2, "./Pages/Login.vue": __vite_glob_0_3 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
