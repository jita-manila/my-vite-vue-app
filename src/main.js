import { createApp } from 'vue'
import App from './App.vue'
import { Animate, Button, Icon, Navbar, Switch, Cell, CellGroup, Tabs, TabPane } from "@nutui/nutui";

//rem
import "amfe-flexible/index.js";
import './assets/css/reset.scss'

createApp(App)
  .use(Animate)
  .use(Button)
  .use(Icon)
  .use(Navbar)
  .use(Switch)
  .use(Cell)
  .use(CellGroup)
  .use(Tabs)
  .use(TabPane)
  .mount("#app");
