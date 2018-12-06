import dva from 'dva';
import { browserHistory } from 'dva/router'
import createLoading from 'dva-loading'
import { message } from 'antd'
// import './index.html';
import './index.css';


const ERROR_MSG_DURATION =3

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION)
  }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// async model
// move to router
// app.model(require('./models/users').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');