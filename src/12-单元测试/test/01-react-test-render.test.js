/* eslint-disable testing-library/render-result-naming-convention */
import ShallowRender from 'react-test-renderer/shallow'
import App from '../App'
import ReactTestUtil from 'react-dom/test-utils'

describe('react-test-render', function () {
  it('app的名字', function () {
    const render = new ShallowRender()
    render.render(<App />)
    console.log()

    expect(render.getRenderOutput().props.children[0].type).toBe('h1')

    expect(render.getRenderOutput().props.children[0].props.children).toBe('todo')
  })

  it('删除功能', function () {
    const app = ReactTestUtil.renderIntoDocument(<App />)
    let todoitems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')
    console.log(todoitems.length)

    let deleteButton = todoitems[0].querySelector('button')

    ReactTestUtil.Simulate.click(deleteButton)

    let todoitemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, 'li')

    expect(todoitems.length - 1).toBe(todoitemsAfterClick.length)
  })
})
