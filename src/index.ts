import { createApp } from 'vue'
import SmartyUI from './entry'

createApp({
  template: `
        <div>
            <JSXButton>普通按钮</JSXButton>
            <JSXButton color="blue">蓝色按钮</JSXButton>
            <JSXButton color="green">绿色按钮</JSXButton>
            <JSXButton color="gray">灰色按钮</JSXButton>
            <JSXButton color="yellow">黄色按钮</JSXButton>
            <JSXButton color="red">红色按钮</JSXButton>
        </div>
    `,
})
  .use(SmartyUI)
  .mount('#app')
