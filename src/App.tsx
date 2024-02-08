import { Routes,Route,useNavigate,useLocation, Navigate  } from 'react-router-dom'
import { TabBar,Popup,Mask,SpinLoading} from 'antd-mobile'
import { tabs } from './router'
import  './App.css'
import {useRecoilValue} from 'recoil'
import {loadingState} from './store/loading'
function App() {
 const pathname = useLocation().pathname
 const navigate = useNavigate()
 const setRouteActive = (value: string) => {
  console.log(value)
  navigate(value,{state:'1'})
 }
 const flag = useRecoilValue<boolean>(loadingState)
 
 return (
  <>
      <Mask visible={flag} className='mask' >
        <SpinLoading />
      </Mask>
    <Routes>
      {tabs.map(item => (
        <Route key={item.key} path={item.key} element={item.element} />
      ))}
      <Route path='/' element={<Navigate to='/home'></Navigate>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
    <Popup visible={!flag} mask={false}>
    
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
