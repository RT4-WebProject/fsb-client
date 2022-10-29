import { route, TxList} from '@'


export const HomePage = route('/home', () => {
  return 
  <div>Home Page 
    <TxList/>
  </div>
})
