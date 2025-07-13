
import { lazy, Suspense } from 'react'
import './App.css'
import IntroPage from './pages/IntroPage'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import SubFooter from './components/SubFooter.jsx'

const IntroWrapper = lazy(() => import('./pages/IntroPage.jsx'))
const FormWrapper = lazy(() => import('./pages/FormPage.jsx'))

function App() {


  return (
    <div className='relative'>
  
    <Routes>

<Route index element={
  <Suspense>
<IntroWrapper />
  </Suspense>
}

 />

 <Route path='/form' element={
  <Suspense>
<FormWrapper />
  </Suspense>
}

 />
    </Routes>

    <div className=''>
      <SubFooter  />
    </div>

    <div className='fixed bottom-0 left-0 w-full'>
      <Footer />
    </div>
  
    </div>
  )
}

export default App
