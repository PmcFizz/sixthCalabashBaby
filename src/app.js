import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/pwd-create/index',
      'pages/pwd-preview/index',
      'pages/pwd-store/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '六娃',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/index/index",
        // iconPath: "./assets/tab-bar/home.png",
        // selectedIconPath: "./assets/tab-bar/home-active.png",
        text: "首页"
      }, {
        pagePath: "pages/pwd-store/index",
        // iconPath: "./assets/tab-bar/cate.png",
        // selectedIconPath: "./assets/tab-bar/cate-active.png",
        text: "密码仓库"
      }, {
        pagePath: "pages/pwd-preview/index",
        // iconPath: "./assets/tab-bar/cart.png",
        // selectedIconPath: "./assets/tab-bar/cart-active.png",
        text: "解锁密码箱"
      }, {
        pagePath: "pages/pwd-create/index",
        // iconPath: "./assets/tab-bar/user.png",
        // selectedIconPath: "./assets/tab-bar/user-active.png",
        text: "锻造密码箱"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
