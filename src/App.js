import { Route, Routes } from 'react-router-dom';
import { PlayerIndex } from './views/PlayerIndex';
import { PlayerDetails } from './views/PlayerDetails';
import { PlayerLiked } from './views/PlayerLiked';
import { PlayerHistory } from './views/PlayerHistory';
// import { PlayerWatchLater } from './views/PlayerWatchLater';


export const App = () => {
  return (
    <Routes>
      <Route path='/watch/:id' element={<PlayerDetails />}></Route>
      {/* <Route path='/saved' element={<PlayerWatchLater />}></Route> */}
      <Route path='/history' element={<PlayerHistory />}></Route>
      <Route path='/like' element={<PlayerLiked />}></Route>
      <Route path='/' element={<PlayerIndex />}></Route>
    </Routes>
  )
}