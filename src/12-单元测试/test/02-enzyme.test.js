/* eslint-disable testing-library/render-result-naming-convention */
import App from '../App'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })
describe('react-test-render', function () {
  it('app的名字', function () {
    let app = shallow(<App />)
    expect(app.find('h1').text()).toEqual('todo')
  })

  it('删除功能', function () {
    let app = mount(<App />)
    let todolength = app.find('li').length
    app.find('button.del').at(0).simulate('click')
    expect(app.find('li').length).toEqual(todolength - 1)
  })

  it('添加功能', function () {
    let app = mount(<App />)
    let todolength = app.find('li').length
    let addInput = app.find('input')
    addInput.value = 'aaa'
    app.find('.add').simulate('click')
    expect(app.find('li').length).toEqual(todolength + 1)
  })
})
