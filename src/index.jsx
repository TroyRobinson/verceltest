// React and ReactDOM are loaded from global scope (UMD bundle)
import { App } from './app.jsx'

const root = document.getElementById('root')
if (root != null) {
  ReactDOM.render(React.createElement(App), root)
}
