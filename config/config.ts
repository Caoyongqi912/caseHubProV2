import {defineConfig} from 'umi';
import routes from "./routes";


export default defineConfig({
  hash:true,
  antd: {},

  targets: {
    ie: 11,
  },
  layout: {},
  routes: routes,
  fastRefresh: {},
  mfsu: {}
})
