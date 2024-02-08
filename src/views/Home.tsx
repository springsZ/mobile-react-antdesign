import {Button } from 'antd-mobile'
import { loadingState } from '@/store/loading'
import {useRecoilState} from 'recoil'
export default function Home() {
    const [flag,setFlag] = useRecoilState<boolean>(loadingState)
    return (
        <div>
         <Button color='primary' onClick={()=>setFlag(!flag)}>change</Button>
        </div>
    )
}