import { observable, configure, action, runInAction } from 'mobx'
import axios from 'axios'
// 严格模式，必须写action
// 如果是never，可以不写action
// 最好设置always，防止任意地方修改值，降低不确定性
configure({
  enforceActions: 'always'
})

// const store = observable(
//   {
//     show: true,
//     list: [],
//     city: '北京',
//     changeShow() {
//       this.show = true
//     },
//     changeHide() {
//       this.show = false
//     }
//   },
//   {
//     changeShow: action,
//     changeHide: action //标记两个方法是action，专门修改可观测的value
//   }
// )

class Store {
  @observable show = true
  @observable list = []
  @observable city = '北京'
  @action changeShow() {
    this.show = true
  } //action只能影响正在运行的函数，而无法影响当前函数调用的异步操作
  @action changeHide() {
    this.show = false
  }

  @action async getList() {
    const list = await axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159',
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      return res.data.data.cinemas
    })
    runInAction(() => {
      this.list = list
    })
  }
}

const store = new Store()

export default store
