import { Routes,Route,useNavigate,useLocation  } from 'react-router-dom'
import { TabBar,Popup} from 'antd-mobile'
import { tabs } from './router'
import  './App.css'
function App() {
 const pathname = useLocation().pathname
 const navigate = useNavigate()
 const setRouteActive = (value: string) => {
  console.log(value)
  navigate(value,{state:'1'})
 }
 const tabVisible = true
 return (
  <>
   
    <Routes>
      {tabs.map(item => (
        <Route key={item.key} path={item.key} element={item.element} />
      ))}
      <Route path="*" element={<div>404</div>} />
    </Routes>
    <Popup visible={tabVisible} mask={false}>
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
    </Popup>
  </>
 )
}

export default App
